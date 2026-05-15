// ===== CONFIGURATION =====
// ⚠️ คำเตือน: การใส่ API Key ไว้ในโค้ดฝั่ง Client (เบราว์เซอร์) มีความเสี่ยงที่ผู้อื่นจะเห็นและนำไปใช้ได้
// สำหรับโปรเจกต์นี้เป็นการทำแบบง่ายๆ ตามที่คุณตกลง จึงใส่ไว้ที่นี่
const OPENAI_API_KEY = "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";
const MAX_ARCHIVE = 20;

// ===== DOM ELEMENTS =====
const inputText = document.getElementById('input-text');
const charCount = document.getElementById('char-count');
const btnAnalyze = document.getElementById('btn-analyze');
const errorMessage = document.getElementById('error-message');
const errorText = document.getElementById('error-text');

const resultCard = document.getElementById('result-card');
const resultTimestamp = document.getElementById('result-timestamp');
const resultQuote = document.getElementById('result-quote');
const resultBody = document.getElementById('result-body');

const archiveList = document.getElementById('archive-list');
const archiveCount = document.getElementById('archive-count');
const archiveEmpty = document.getElementById('archive-empty');

// System prompt variable (will be loaded from skill.md)
let systemPrompt = "";

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async () => {
  // Load system prompt from skill.md
  try {
    const response = await fetch('skill.md');
    if (!response.ok) throw new Error('Failed to load skill.md');
    systemPrompt = await response.text();
  } catch (err) {
    console.error("Error loading skill.md:", err);
    showError("ไม่สามารถโหลดไฟล์ skill.md ได้ หากคุณเปิดไฟล์ html โดยตรง (file://) อาจติดปัญหา CORS แนะนำให้รันผ่าน Live Server");
  }

  // Set up character count listener
  inputText.addEventListener('input', () => {
    const count = inputText.value.length;
    charCount.textContent = `${count.toLocaleString()} / 2,000`;
    
    // Hide error when typing
    if (errorMessage.classList.contains('visible')) {
      errorMessage.classList.remove('visible');
    }
  });

  // Load archive from Local Storage
  renderArchive();
});

// ===== CORE LOGIC: API CALL =====
async function analyzeText() {
  const text = inputText.value.trim();
  
  if (!text) {
    showError("กรุณาพิมพ์ข้อความก่อนกดวิเคราะห์");
    inputText.focus();
    return;
  }
  
  if (!systemPrompt) {
    showError("ระบบยังไม่พร้อมใช้งาน (โหลด skill.md ไม่สำเร็จ)");
    return;
  }

  // Set loading state
  setLoading(true);
  hideError();
  resultCard.classList.remove('visible');

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o", // Or gpt-3.5-turbo if 4o is not accessible
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: text }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "เกิดข้อผิดพลาดในการเชื่อมต่อกับ OpenAI API");
    }

    const data = await response.json();
    const resultText = data.choices[0].message.content;

    // Show result
    displayResult(text, resultText);
    
    // Save to archive
    saveToArchive(text, resultText);
    
    // Clear input
    inputText.value = "";
    charCount.textContent = "0 / 2,000";

  } catch (err) {
    console.error("API Error:", err);
    showError(err.message);
  } finally {
    setLoading(false);
  }
}

// ===== UI HELPERS =====
function setLoading(isLoading) {
  if (isLoading) {
    btnAnalyze.disabled = true;
    btnAnalyze.classList.add('loading');
  } else {
    btnAnalyze.disabled = false;
    btnAnalyze.classList.remove('loading');
  }
}

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
