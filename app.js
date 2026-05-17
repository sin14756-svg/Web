// ===== CONFIGURATION =====
const MAX_ARCHIVE = 20;

// ===== DOM ELEMENTS =====
const errorText = document.getElementById('error-text');
const errorMessage = document.getElementById('error-message');

const resultCard = document.getElementById('result-card');
const resultTimestamp = document.getElementById('result-timestamp');
const resultQuote = document.getElementById('result-quote');
const resultBody = document.getElementById('result-body');

const archiveList = document.getElementById('archive-list');
const archiveCount = document.getElementById('archive-count');
const archiveEmpty = document.getElementById('archive-empty');

// Test UI Elements
const testIntro = document.getElementById('test-intro');
const testLr = document.getElementById('test-lr');
const testNc = document.getElementById('test-nc');
const testLoading = document.getElementById('test-loading');

const lrProgress = document.getElementById('lr-progress');
const lrProgressText = document.getElementById('lr-progress-text');
const lrQuestionText = document.getElementById('lr-question-text');

const ncProgress = document.getElementById('nc-progress');
const ncProgressText = document.getElementById('nc-progress-text');
const ncQuestionText = document.getElementById('nc-question-text');
const ncOptions = document.getElementById('nc-options');
const ncSelectedCount = document.getElementById('nc-selected-count');
const btnNcNext = document.getElementById('btn-nc-next');


// System prompt variable (will be loaded from skill.md)
let systemPrompt = "";

// Test State Variables
let lrQuestionsAll = [];
let ncQuestionsAll = [];
let currentLrQuestions = [];
let currentNcQuestions = [];
let testState = {
  lrIndex: 0,
  ncIndex: 0,
  answers: []
};
let currentNcSelections = [];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async () => {
  // Load system prompt from skill.md
  try {
    const response = await fetch('skill.md');
    if (!response.ok) throw new Error('Failed to load skill.md');
    systemPrompt = await response.text();
  } catch (err) {
    console.error("Error loading skill.md:", err);
    showError("ไม่สามารถโหลดไฟล์ skill.md ได้");
  }

  // Load questions
  try {
    const lrRes = await fetch('questionLeftrightType.txt');
    if (lrRes.ok) {
      const lrText = await lrRes.text();
      lrQuestionsAll = parseLeftRight(lrText);
    }
    
    const ncRes = await fetch('question.txt');
    if (ncRes.ok) {
      const ncText = await ncRes.text();
      ncQuestionsAll = parseNineChoice(ncText);
    }
  } catch (err) {
    console.error("Error loading questions:", err);
    showError("ไม่สามารถโหลดไฟล์คำถามได้");
  }

  // Load archive from Local Storage
  renderArchive();
});

// ===== PARSING HELPERS =====
function parseLeftRight(text) {
  const questions = [];
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let currentQ = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^P\d+/)) {
      if (currentQ && currentQ.text) questions.push(currentQ);
      currentQ = { text: "", left: "", right: "" };
    } else if (currentQ) {
      if (line.startsWith('ซ้าย') || line.startsWith('ซ้าย =') || line.startsWith('ซ้าย:')) {
        currentQ.left = line;
      } else if (line.startsWith('ขวา') || line.startsWith('ขวา =') || line.startsWith('ขวา:')) {
        currentQ.right = line;
      } else if (!line.startsWith('หมวด')) {
        currentQ.text += (currentQ.text ? " " : "") + line;
      }
    }
  }
  if (currentQ && currentQ.text) questions.push(currentQ);
  return questions;
}

function parseNineChoice(text) {
  const questions = [];
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let currentQ = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^\d+\./)) {
      if (currentQ) questions.push(currentQ);
      currentQ = { text: line, options: [] };
    } else if (currentQ) {
      if (line.startsWith('จับ:')) {
        if (currentQ.options.length > 0) {
          currentQ.options[currentQ.options.length - 1].tag = line;
        }
      } else {
        currentQ.options.push({ text: line, tag: "" });
      }
    }
  }
  if (currentQ) questions.push(currentQ);
  return questions;
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ===== TEST FLOW LOGIC =====
function startTest() {
  if (lrQuestionsAll.length === 0 || ncQuestionsAll.length === 0) {
    showError("ระบบกำลังโหลดคำถาม กรุณาลองอีกครั้งในไม่ช้า");
    return;
  }
  
  hideError();
  resultCard.classList.remove('visible');
  
  // Initialize test state
  currentLrQuestions = shuffle(lrQuestionsAll);
  currentNcQuestions = shuffle(ncQuestionsAll);
  
  testState = {
    lrIndex: 0,
    ncIndex: 0,
    answers: []
  };
  
  // Show LR test UI
  testIntro.style.display = 'none';
  testNc.style.display = 'none';
  testLoading.style.display = 'none';
  testLr.style.display = 'block';
  
  renderLR();
}

function renderLR() {
  const total = currentLrQuestions.length;
  const current = testState.lrIndex;
  
  if (current >= total) {
    // Move to NC phase
    testLr.style.display = 'none';
    testNc.style.display = 'block';
    renderNC();
    return;
  }
  
  const q = currentLrQuestions[current];
  lrQuestionText.textContent = q.text;
  
  const progressPercent = ((current) / total) * 100;
  lrProgress.style.width = `${progressPercent}%`;
  lrProgressText.textContent = `${current + 1} / ${total}`;
}

function answerLR(value) {
  const q = currentLrQuestions[testState.lrIndex];
  testState.answers.push({
    type: 'LeftRight',
    question: q.text,
    answer: value,
    left: q.left,
    right: q.right
  });
  
  testState.lrIndex++;
  renderLR();
}

function renderNC() {
  const total = currentNcQuestions.length;
  const current = testState.ncIndex;
  
  if (current >= total) {
    // Finish test
    finishTest();
    return;
  }
  
  const q = currentNcQuestions[current];
  ncQuestionText.textContent = q.text;
  
  const progressPercent = ((current) / total) * 100;
  ncProgress.style.width = `${progressPercent}%`;
  ncProgressText.textContent = `${current + 1} / ${total}`;
  
  currentNcSelections = [];
  ncSelectedCount.textContent = "0";
  btnNcNext.style.display = 'none';
  
  ncOptions.innerHTML = '';
  // Shuffle options for this question too
  const options = shuffle(q.options);
  
  options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'nc-option-btn';
    btn.textContent = opt.text;
    btn.onclick = () => toggleNCOption(btn, opt);
    ncOptions.appendChild(btn);
  });
}

function toggleNCOption(btn, optionData) {
  const isSelected = btn.classList.contains('selected');
  
  if (isSelected) {
    btn.classList.remove('selected');
    currentNcSelections = currentNcSelections.filter(opt => opt !== optionData);
  } else {
    if (currentNcSelections.length >= 2) return; // limit to 2
    btn.classList.add('selected');
    currentNcSelections.push(optionData);
  }
  
  ncSelectedCount.textContent = currentNcSelections.length;
  
  // Disable others if 2 selected
  const allBtns = ncOptions.querySelectorAll('.nc-option-btn');
  if (currentNcSelections.length >= 2) {
    allBtns.forEach(b => {
      if (!b.classList.contains('selected')) b.classList.add('disabled');
    });
    btnNcNext.style.display = 'inline-flex';
  } else {
    allBtns.forEach(b => b.classList.remove('disabled'));
    btnNcNext.style.display = 'none';
  }
}

function nextNC() {
  if (currentNcSelections.length !== 2) return;
  
  const q = currentNcQuestions[testState.ncIndex];
  testState.answers.push({
    type: 'NineChoice',
    question: q.text,
    selected: currentNcSelections.map(s => `${s.text}\n${s.tag}`)
  });
  
  testState.ncIndex++;
  renderNC();
}

async function finishTest() {
  testNc.style.display = 'none';
  testLoading.style.display = 'block';
  hideError();
  
  // Format data for AI
  let compiledData = "ผู้ทดสอบได้ทำแบบทดสอบบุคลิกภาพเสร็จสิ้น นี่คือคำตอบทั้งหมด:\n\n";
  
  testState.answers.forEach((ans, idx) => {
    if (ans.type === 'LeftRight') {
      compiledData += `ข้อ ${idx + 1} (Left-Right Scale 1-7):\nคำถาม: ${ans.question}\nคำตอบ: เลือกคะแนน ${ans.answer} (1=ซ้ายมาก, 7=ขวามาก)\n[ข้อมูลอ้างอิง: ${ans.left} | ${ans.right}]\n\n`;
    } else if (ans.type === 'NineChoice') {
      compiledData += `ข้อ ${idx + 1} (เลือก 2 จาก 9):\nคำถาม: ${ans.question}\nคำตอบที่เลือก:\n- ${ans.selected[0]}\n- ${ans.selected[1]}\n\n`;
    }
  });

  if (!systemPrompt) {
    showError("ระบบยังไม่พร้อมใช้งาน (โหลด skill.md ไม่สำเร็จ)");
    resetTestUI();
    return;
  }

  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: compiledData,
        systemPrompt: systemPrompt
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "เกิดข้อผิดพลาดจาก Server");
    }

    const data = await response.json();
    const resultText = data.result;

    // Show result
    displayResult("Personality Test Result", resultText);

    // Save to archive
    saveToArchive("Personality Test", resultText);

  } catch (err) {
    console.error("API Error:", err);
    showError(err.message);
  } finally {
    resetTestUI();
  }
}

function resetTestUI() {
  testLoading.style.display = 'none';
  testIntro.style.display = 'block';
}

// ===== UI HELPERS =====


function showError(msg) {
  errorText.textContent = msg;
  errorMessage.classList.add('visible');
}

function hideError() {
  errorMessage.classList.remove('visible');
}

function displayResult(input, markdownResult) {
  const now = new Date();
  const timeString = now.toLocaleDateString('th-TH', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  resultTimestamp.textContent = timeString;
  resultQuote.textContent = `"${input}"`;

  // Use Marked.js to parse Markdown to HTML
  // First, let's process custom tags pattern if they match "**Tags:** ..."
  let processedMarkdown = markdownResult.replace(/\*\*Tags:\*\*\s*(.*)/g, (match, p1) => {
    const tagsHtml = p1.split(/,\s*/).map(tag => `<span class="tag">${tag.trim()}</span>`).join('');
    return `<div style="margin-top: 0.5rem; margin-bottom: 1rem;">${tagsHtml}</div>`;
  });

  resultBody.innerHTML = marked.parse(processedMarkdown);

  // Show the card
  resultCard.classList.add('visible');

  // Scroll to result smoothly
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== MODAL LOGIC =====
function openModal(id) {
  document.getElementById(`modal-${id}`).classList.add('visible');
}

function closeModal(id) {
  document.getElementById(`modal-${id}`).classList.remove('visible');
}

// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('visible');
    }
  });
});

// ===== ARCHIVE (LOCAL STORAGE) LOGIC =====
function saveToArchive(input, result) {
  let archive = JSON.parse(localStorage.getItem('ai_person_archive') || '[]');

  // Try to extract archetype name for summary (quick regex check based on prompt template)
  let archetype = "Analysis Result";
  const archetypeMatch = result.match(/##\s+\[(.*?)\]|\*\*\[(.*?)\]\*\*/);
  if (archetypeMatch) {
    archetype = archetypeMatch[1] || archetypeMatch[2];
  } else {
    // Fallback: look for "Archetype" section
    const fallbackMatch = result.match(/# Archetype\s*\n+##\s+(.*?)\s*\n/i);
    if (fallbackMatch) archetype = fallbackMatch[1].trim();
  }

  const newItem = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    input: input,
    result: result,
    archetype: archetype
  };

  archive.unshift(newItem); // Add to beginning

  // Limit to MAX_ARCHIVE
  if (archive.length > MAX_ARCHIVE) {
    archive = archive.slice(0, MAX_ARCHIVE);
  }

  localStorage.setItem('ai_person_archive', JSON.stringify(archive));
  renderArchive();
}

function renderArchive() {
  const archive = JSON.parse(localStorage.getItem('ai_person_archive') || '[]');

  archiveCount.textContent = archive.length;

  if (archive.length === 0) {
    archiveEmpty.style.display = 'block';
    archiveList.innerHTML = '';
    archiveList.appendChild(archiveEmpty);
    return;
  }

  archiveEmpty.style.display = 'none';
  archiveList.innerHTML = '';

  archive.forEach((item, index) => {
    const date = new Date(item.timestamp);
    const dateStr = date.toLocaleDateString('th-TH', { month: 'short', day: 'numeric' });

    const div = document.createElement('div');
    div.className = 'archive-item';
    div.innerHTML = `
      <div class="archive-item-number">${archive.length - index}</div>
      <div class="archive-item-content">
        <div class="archive-item-text">"${item.input}"</div>
        <div class="archive-item-meta">
          <span>${dateStr}</span>
          <span>•</span>
          <span class="archive-item-archetype">${item.archetype}</span>
        </div>
      </div>
    `;

    // When clicking an archive item, display it
    div.addEventListener('click', () => {
      displayResult(item.input, item.result);
      // Optional: scroll to result
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    archiveList.appendChild(div);
  });
}

function clearArchive() {
  if (confirm("คุณแน่ใจหรือไม่ว่าต้องการลบประวัติการวิเคราะห์ทั้งหมด?")) {
    localStorage.removeItem('ai_person_archive');
    renderArchive();
  }
}
