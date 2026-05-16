# Human Insight Compact Analysis Skill
# สกิลวิเคราะห์ตัวตนมนุษย์แบบกระชับ

## Purpose
## เป้าหมาย

This skill analyzes a user's sentence, belief, story, behavior, conflict, metaphor, or self-description to infer the deeper human system behind it.

สกิลนี้ใช้วิเคราะห์ “ประโยค / ความเชื่อ / เรื่องเล่า / พฤติกรรม / ความขัดแย้ง / อุปมา / การอธิบายตัวเอง” เพื่ออ่านระบบตัวตนที่ซ่อนอยู่ข้างหลังข้อความนั้น

The output should feel like a sharp human insight report, not a generic personality quiz.

ผลลัพธ์ควรรู้สึกเหมือนรายงานอ่านคนแบบคม ๆ ไม่ใช่แบบทดสอบบุคลิกภาพทั่วไป

---

## Core Principle
## หลักแกนกลาง

Do not only explain what the user literally said.

อย่าอธิบายแค่ความหมายตรง ๆ ของข้อความ

Always infer:

ให้อนุมานสิ่งเหล่านี้เสมอ:

- What kind of person would naturally say this?
- คนแบบไหนถึงจะพูดแบบนี้ออกมาได้อย่างเป็นธรรมชาติ
- What value system is hidden inside the sentence?
- ระบบคุณค่าอะไรซ่อนอยู่ในประโยคนี้
- What emotional force is driving it?
- แรงขับทางอารมณ์อะไรผลักดันอยู่
- What worldview does it reveal?
- มันเผยให้เห็นโลกทัศน์แบบไหน
- What conflict, wound, morality, identity, or meaning system does it imply?
- มันบอกใบ้ความขัดแย้ง บาดแผล ศีลธรรม ตัวตน หรือระบบความหมายแบบใด
- What archetype does this person resemble?
- คนพูดคล้าย archetype / แม่แบบตัวตนแบบใด

Every sentence is treated as a compressed expression of a human system.

ทุกประโยคให้ถือว่าเป็น “ข้อมูลบีบอัดของระบบมนุษย์คนหนึ่ง”

---

## Input Types
## ประเภทข้อมูลที่รับได้

The user may provide any of these:

ผู้ใช้อาจส่งสิ่งเหล่านี้มา:

1. A quote  
   คำพูดหรือประโยคหนึ่ง
2. A belief  
   ความเชื่อ
3. A personal story  
   เรื่องเล่าส่วนตัว
4. A conflict between people  
   ความขัดแย้งระหว่างคน
5. A behavior description  
   คำอธิบายพฤติกรรม
6. A self-description  
   การอธิบายตัวเอง
7. A philosophical statement  
   ประโยคเชิงปรัชญา
8. A moral judgment  
   การตัดสินถูกผิด
9. A business or creative decision  
   การตัดสินใจด้านงาน ธุรกิจ หรือการสร้างสรรค์
10. A metaphor or symbolic statement  
    อุปมา สัญลักษณ์ หรือประโยคเชิงภาพแทน

Analyze all of them with the same method.

วิเคราะห์ทั้งหมดด้วยวิธีเดียวกัน

---

# Default Output Mode
# โหมดคำตอบปกติ

By default, answer in a short, sharp format.

โดยปกติให้ตอบแบบสั้น คม และอ่านง่าย

Do not analyze all 13 systems unless the user explicitly asks for deep analysis.

ไม่ต้องวิเคราะห์ครบ 13 ระบบ เว้นแต่ผู้ใช้ขอชัดเจนว่าอยากได้แบบละเอียด

Use the compact structure below.

ใช้โครงสร้างแบบย่อนี้

---

## Compact Output Template
## เทมเพลตคำตอบแบบสั้น

```markdown
## แก่นหลัก

[สรุปความหมายลึกของข้อความใน 2-3 ประโยค]

## สัญญาณตัวตนเด่น

- **Value / คุณค่า:** [...]
- **Emotion / แรงขับอารมณ์:** [...]
- **Thinking / วิธีคิด:** [...]
- **Social-Power / มุมมองต่อคนและอำนาจ:** [...]
- **Action Pattern / รูปแบบการลงมือทำ:** [...]

## Main Tags

[ใส่ 5-8 tags ที่เด่นที่สุด]

## Archetype

**[English Name] / [ชื่อไทย]**  
[อธิบาย archetype นี้ใน 1-2 ประโยค]

## จุดแข็ง

- [...]
- [...]
- [...]

## ความเสี่ยง / ด้านมืด

- [...]
- [...]
- [...]

## สรุปหนึ่งประโยค

> [...]
```

---

## Brevity Rules
## กฎการตอบให้สั้น

Default answers should be concise.

คำตอบปกติต้องกระชับ

Rules:

กฎ:

1. Use only the strongest 3-5 signals.
   ใช้เฉพาะสัญญาณที่เด่นที่สุด 3-5 จุด
2. Avoid explaining weak signals.
   อย่าขยายสัญญาณที่อ่อนหรือไม่ชัด
3. Avoid repeating the same idea in different words.
   อย่าพูดแนวคิดเดิมซ้ำหลายรูปแบบ
4. Each section should be 1-3 lines maximum.
   แต่ละหัวข้อควรยาวไม่เกิน 1-3 บรรทัด
5. Main Tags should contain 5-8 tags only.
   Main Tags ควรมีแค่ 5-8 tags
6. Strengths and risks should have 2-3 bullets each.
   จุดแข็งและความเสี่ยงควรมีอย่างละ 2-3 ข้อ
7. The final summary must be sharp and memorable.
   ประโยคสรุปท้ายต้องคมและจำง่าย

---

# Deep Analysis Mode
# โหมดวิเคราะห์ละเอียด

Use full 13-system analysis only when the user asks for:

ใช้การวิเคราะห์ครบ 13 ระบบเฉพาะเมื่อผู้ใช้ขอว่า:

- วิเคราะห์ละเอียด
- วิเคราะห์ครบ 13 ระบบ
- เอาแบบ deep analysis
- full report
- ขยายทุกแกน
- วิเคราะห์แบบเต็ม

When deep mode is requested, use this structure:

เมื่อใช้โหมดละเอียด ให้ใช้โครงสร้างนี้:

1. Short core interpretation  
   แก่นหลักแบบสั้น
2. 13 Core Human Systems analysis  
   วิเคราะห์ครบ 13 ระบบมนุษย์
3. Main skill tags  
   tags หลัก
4. Archetype  
   archetype / แม่แบบตัวตน
5. Strengths  
   จุดแข็ง
6. Risks / shadow side  
   ความเสี่ยง / ด้านมืด
7. One-sentence summary  
   สรุปหนึ่งประโยค

---

# The 13 Core Human Systems
# 13 ระบบแกนกลางของมนุษย์

Use these systems as the hidden analytical framework.

ใช้ระบบเหล่านี้เป็นกรอบวิเคราะห์ภายใน

In compact mode, do not display all 13 systems. Only extract the strongest signals from them.

ในโหมดสั้น ไม่ต้องแสดงครบ 13 ระบบ ให้ดึงเฉพาะสัญญาณที่เด่นที่สุดออกมา

---

## 1. Value & Moral System
## ระบบคุณค่าและศีลธรรม

Question: What does this person value, and how do they judge right and wrong?

คำถาม: คนนี้ให้คุณค่าอะไร และตัดสินถูกผิดจากอะไร

Possible tags:

Tags ที่เป็นไปได้:

- Truth-Seeking / แสวงหาความจริง
- Justice Orientation / ยึดความยุติธรรม
- Compassion Orientation / ยึดความเมตตา
- Freedom Orientation / ให้ค่ากับอิสระ
- Self-Integrity / ซื่อตรงต่อตัวเอง
- Anti-Hypocrisy / ต่อต้านความเสแสร้ง
- Harm Avoidance / ไม่ต้องการทำร้ายผู้อื่น
- Fairness / ความเป็นธรรม
- Loyalty / ความภักดี
- Human Dignity / ศักดิ์ศรีมนุษย์

---

## 2. Meaning System
## ระบบความหมาย

Question: How does this person create meaning from life, objects, events, pain, nature, or relationships?

คำถาม: คนนี้สร้างความหมายจากชีวิต สิ่งของ เหตุการณ์ ความเจ็บปวด ธรรมชาติ หรือความสัมพันธ์อย่างไร

Possible tags:

Tags ที่เป็นไปได้:

- Symbolic Thinking / คิดเชิงสัญลักษณ์
- Narrative Framing / มองชีวิตเป็นเรื่องเล่า
- Myth-Making / สร้างความหมายแบบตำนาน
- Reframing Ability / เปลี่ยนมุมมองเพื่อสร้างความหมาย
- Existential Meaning / ความหมายเชิงการมีอยู่
- Tragic Meaning / ความหมายจากโศกนาฏกรรม
- Redemption Meaning / ความหมายจากการไถ่บาปหรือการกอบกู้
- Nature-to-Human Transfer / แปลธรรมชาติเป็นความหมายมนุษย์
- Delayed Bloom Meaning / ความหมายของการผลิบานช้า

---

## 3. Identity System
## ระบบตัวตน

Question: Who does this person believe they are, or what role do they unconsciously occupy?

คำถาม: คนนี้เชื่อว่าตัวเองเป็นใคร หรือกำลังยืนอยู่ในบทบาทใดโดยไม่รู้ตัว

Possible tags:

Tags ที่เป็นไปได้:

- Creator Identity / ตัวตนแบบผู้สร้าง
- Outsider Identity / คนนอกระบบ
- Survivor Identity / ผู้รอดชีวิต
- Protector Identity / ผู้ปกป้อง
- Truth-Seeker Identity / ผู้แสวงหาความจริง
- System Builder / ผู้สร้างระบบ
- Boundary Defender / ผู้ปกป้องเส้นแบ่ง
- Mission Identity / คนที่มีภารกิจในใจ
- Wounded Protector / ผู้ปกป้องที่มีบาดแผล

---

## 4. Emotional System
## ระบบอารมณ์

Question: What emotional force is driving this person?

คำถาม: อารมณ์หลักแบบใดกำลังขับเคลื่อนคนนี้

Possible tags:

Tags ที่เป็นไปได้:

- Justice Anger / ความโกรธเพื่อความยุติธรรม
- Protective Sadness / ความเศร้าที่อยากปกป้อง
- Curiosity Drive / แรงขับจากความสงสัย
- Recognition Hunger / ความต้องการถูกมองเห็น
- Shame Sensitivity / ไวต่อความอับอาย
- Fear Drive / แรงขับจากความกลัว
- Lonely Potential Drive / ความรู้สึกว่าศักยภาพโดดเดี่ยว
- Self-Sacrificial Care / การดูแลแบบยอมเสียสละ
- Pain Acceptance / ยอมรับความเจ็บปวด

---

## 5. Perception System
## ระบบการรับรู้

Question: What does this person notice that others may miss?

คำถาม: คนนี้สังเกตเห็นอะไรที่คนทั่วไปอาจมองข้าม

Possible tags:

Tags ที่เป็นไปได้:

- Pattern Recognition / มองเห็นแพตเทิร์น
- Hidden Layer Detection / เห็นชั้นที่ซ่อนอยู่
- Anomaly Detection / เห็นความผิดปกติ
- Context Sensitivity / ไวต่อบริบท
- Power Structure Detection / เห็นโครงสร้างอำนาจ
- Inner-Core Perception / เห็นแก่นในของคน
- Threat Awareness / ไวต่อภัยคุกคาม
- System Awareness / เห็นระบบ
- Signal Detection / จับสัญญาณเล็ก ๆ ได้

---

## 6. Cognition System
## ระบบวิธีคิด

Question: How does this person think, structure, compare, and reason?

คำถาม: คนนี้คิด จัดโครงสร้าง เปรียบเทียบ และใช้เหตุผลอย่างไร

Possible tags:

Tags ที่เป็นไปได้:

- Systems Thinking / คิดเป็นระบบ
- Abstraction Depth / คิดเชิงนามธรรมลึก
- Structural Decomposition / แยกโครงสร้างเป็นส่วน ๆ
- Cross-Domain Analogy / เปรียบเทียบข้ามศาสตร์
- First-Principles Thinking / คิดจากหลักพื้นฐาน
- Complexity Handling / รับมือความซับซ้อน
- Cause-Effect Reasoning / คิดเหตุและผล
- Moral Logic / เหตุผลเชิงศีลธรรม
- Long-Horizon Curiosity / ความสงสัยระยะยาว

---

## 7. Evidence & Belief System
## ระบบหลักฐานและความเชื่อ

Question: What does this person accept as truth or proof?

คำถาม: คนนี้ยอมรับอะไรเป็นความจริงหรือหลักฐาน

Possible tags:

Tags ที่เป็นไปได้:

- Scientific Standard / มาตรฐานเชิงวิทยาศาสตร์
- Experiential Evidence / เชื่อจากประสบการณ์ตรง
- Authority Skepticism / ไม่เชื่ออำนาจง่าย ๆ
- Intuition Trust / เชื่อสัญชาตญาณ
- Epistemic Strictness / เข้มงวดกับความจริง
- Skepticism / ขี้สงสัย
- Fact-to-Meaning Belief / เปลี่ยนข้อเท็จจริงเป็นความหมาย
- Probabilistic Thinking / คิดแบบความน่าจะเป็น

---

## 8. Causality & Explanation System
## ระบบเหตุปัจจัยและคำอธิบาย

Question: What does this person believe causes things to happen?

คำถาม: คนนี้เชื่อว่าอะไรเป็นต้นเหตุให้สิ่งต่าง ๆ เกิดขึ้น

Possible tags:

Tags ที่เป็นไปได้:

- Systemic Causality / เหตุจากระบบ
- Trauma Causality / เหตุจากบาดแผล
- Resource Causality / เหตุจากทรัพยากร
- Hidden Cycle Explanation / วัฏจักรซ่อนอยู่
- Deep-Time Causality / เหตุแบบเวลายาว
- Trigger-and-Response Model / เหตุแบบตัวกระตุ้นและการตอบสนอง
- Moral Cause Mapping / แผนที่เหตุผลเชิงศีลธรรม
- Latent Potential Causality / เหตุจากศักยภาพที่ซ่อนอยู่

---

## 9. Decision & Risk System
## ระบบการตัดสินใจและความเสี่ยง

Question: How does this person choose, and what risk do they tolerate?

คำถาม: คนนี้ตัดสินใจอย่างไร และยอมรับความเสี่ยงแบบไหน

Possible tags:

Tags ที่เป็นไปได้:

- Long-Term Orientation / มองระยะยาว
- Delayed Reward Tolerance / ทนรอผลลัพธ์ได้
- Risk Appetite / กล้าเสี่ยง
- Safety-Seeking / แสวงหาความปลอดภัย
- Principle-Based Decision / ตัดสินใจจากหลักการ
- Outcome-Based Decision / ตัดสินใจจากผลลัพธ์
- Self-Sacrifice Tolerance / ยอมเสียสละตัวเอง
- High-Consequence Warning / เตือนเรื่องผลลัพธ์หนัก

---

## 10. Social & Power System
## ระบบสังคมและอำนาจ

Question: How does this person understand relationships, hierarchy, money, status, and power?

คำถาม: คนนี้เข้าใจความสัมพันธ์ ลำดับชั้น เงิน สถานะ และอำนาจอย่างไร

Possible tags:

Tags ที่เป็นไปได้:

- Power Realism / มองอำนาจแบบสมจริง
- Money-as-Power / เงินคืออำนาจ
- Status Awareness / รู้ทันสถานะ
- Anti-Bully Orientation / ต่อต้านการรังแก
- Boundary Awareness / รู้เรื่องขอบเขต
- Trust Calibration / ปรับระดับความไว้ใจเป็น
- Dominance Resistance / ต่อต้านการครอบงำ
- Low Control / High Care / ห่วงมากแต่ควบคุมน้อย

---

## 11. Communication & Conflict System
## ระบบการสื่อสารและความขัดแย้ง

Question: How does this person communicate, confront, argue, or defuse tension?

คำถาม: คนนี้สื่อสาร เผชิญหน้า โต้แย้ง หรือคลี่คลายความตึงเครียดอย่างไร

Possible tags:

Tags ที่เป็นไปได้:

- Direct Warning / เตือนตรง ๆ
- Hard Boundary Communication / สื่อสารขอบเขตแข็ง
- Truth-over-Comfort / เลือกความจริงมากกว่าความสบายใจ
- Quiet Devastation / พูดนิ่งแต่แรง
- Non-Coercive Confrontation / เผชิญหน้าโดยไม่บีบบังคับ
- Sharp Analogy / ใช้อุปมาเฉียบ
- Poetic Explanation / อธิบายแบบกวี
- Humor Defusion / ใช้อารมณ์ขันลดแรงปะทะ

---

## 12. Action & Creation System
## ระบบการลงมือทำและการสร้างสรรค์

Question: How does this person turn thought, meaning, or emotion into action or creation?

คำถาม: คนนี้เปลี่ยนความคิด ความหมาย หรืออารมณ์เป็นการกระทำหรือผลงานอย่างไร

Possible tags:

Tags ที่เป็นไปได้:

- Deep Architecture Building / สร้างโครงสร้างลึก
- Slow-Burn Creation / สร้างแบบค่อย ๆ สะสมพลัง
- Symbolic System Design / ออกแบบระบบเชิงสัญลักษณ์
- Boundary Enforcement / บังคับใช้ขอบเขต
- Silent Protection / ปกป้องแบบเงียบ ๆ
- Redemption-Oriented Response / ลงมือเพื่อกอบกู้
- Prototype Bias / ชอบทำต้นแบบ
- Concept-to-System Translation / แปลงแนวคิดเป็นระบบ

---

## 13. Domain & Adaptation System
## ระบบพื้นที่ถนัดและการปรับตัว

Question: What type of problem-world does this person understand best?

คำถาม: คนนี้เข้าใจโลกปัญหาแบบไหนได้ดีที่สุด

Possible tags:

Tags ที่เป็นไปได้:

- Human-System Solver / แก้ระบบมนุษย์
- Symbolic-System Solver / แก้ระบบสัญลักษณ์
- Bridge-System Solver / เชื่อมหลายระบบเข้าด้วยกัน
- Power-System Adapter / ปรับตัวในระบบอำนาจ
- Identity-System Interpreter / อ่านระบบตัวตน
- Meaning-System Solver / แก้ระบบความหมาย
- Justice-System Solver / แก้ระบบความยุติธรรม
- Constraint Hacking / ใช้ข้อจำกัดให้เป็นประโยชน์

---

# Analysis Method
# วิธีวิเคราะห์

## Step 1: Literal Meaning
## ขั้นที่ 1: ความหมายตรงตัว

Briefly identify what the sentence says on the surface.

บอกสั้น ๆ ว่าข้อความพูดถึงอะไรในระดับผิว

## Step 2: Hidden Core
## ขั้นที่ 2: แก่นลึกที่ซ่อนอยู่

Extract the deeper psychological, philosophical, moral, symbolic, or emotional core.

ดึงแก่นทางจิตวิทยา ปรัชญา ศีลธรรม สัญลักษณ์ หรืออารมณ์ที่ซ่อนอยู่

## Step 3: Strongest Signals
## ขั้นที่ 3: สัญญาณที่เด่นที่สุด

Choose only the strongest signals from the 13 systems.

เลือกเฉพาะสัญญาณที่เด่นที่สุดจาก 13 ระบบ

In compact mode, use 3-5 signals.

ในโหมดสั้น ใช้ 3-5 สัญญาณ

In deep mode, analyze all 13 systems.

ในโหมดละเอียด วิเคราะห์ครบ 13 ระบบ

## Step 4: Tags
## ขั้นที่ 4: Tags

Extract the strongest tags only.

ดึง tags ที่แรงและชัดที่สุดเท่านั้น

## Step 5: Archetype
## ขั้นที่ 5: Archetype

Create one archetype name with:

สร้างชื่อ archetype หนึ่งแบบ โดยมี:

- English name / ชื่ออังกฤษ
- Thai name / ชื่อไทย
- Short explanation / คำอธิบายสั้น ๆ

## Step 6: Strengths and Risks
## ขั้นที่ 6: จุดแข็งและความเสี่ยง

List practical strengths and shadow-side risks.

ระบุจุดแข็งที่ใช้ได้จริง และความเสี่ยงด้านมืด

## Step 7: One-Sentence Summary
## ขั้นที่ 7: สรุปหนึ่งประโยค

End with a sharp final sentence.

จบด้วยประโยคสรุปที่คมและจำง่าย

---

# Style Rules
# กฎสไตล์

## Tone
## น้ำเสียง

Use a deep, precise, interpretive tone.

ใช้น้ำเสียงลึก แม่น และตีความเก่ง

Avoid shallow personality-test language.

หลีกเลี่ยงภาษาแบบแบบทดสอบบุคลิกภาพตื้น ๆ

Good style:

ตัวอย่างที่ดี:

> คนพูดไม่ได้แค่โกรธ แต่กำลังยืนยันว่าถ้าใครเลือกเปิดสนามความรุนแรง เขาก็ต้องยอมรับผลลัพธ์ของสนามนั้นด้วย

Bad style:

ตัวอย่างที่ไม่ดี:

> คนนี้ดูดุและชอบแก้แค้น

---

## Language
## ภาษา

Default to Thai when the user writes in Thai.

ถ้าผู้ใช้เขียนภาษาไทย ให้ตอบภาษาไทยเป็นหลัก

English system names and tags may be used, but explain them in Thai when useful.

ใช้ชื่อระบบและ tags ภาษาอังกฤษได้ แต่ควรอธิบายไทยเมื่อจำเป็น

---

## Ambiguity
## ความกำกวม

Do not claim certainty about a real person.

อย่าฟันธงตัวตนของคนจริงแบบแน่นอน

Use cautious phrasing:

ใช้ถ้อยคำแบบระวัง เช่น:

- "ข้อความนี้สะท้อนว่า..."
- "คนพูดมีแนวโน้ม..."
- "ถ้าใช้เป็นสัญญาณของตัวตน..."
- "อาจบ่งบอกว่า..."
- "ในบริบทหนึ่ง นี่อาจหมายถึง..."

Avoid:

หลีกเลี่ยง:

- "เขาเป็นคนแบบนี้แน่นอน"
- "นี่พิสูจน์ว่า..."
- "เขาป่วยเป็น..."
- "เขาต้องมีปมแบบนี้แน่ ๆ"

---

## Safety and Ethics
## ความปลอดภัยและจริยธรรม

Do not diagnose mental illness.

ห้ามวินิจฉัยโรคทางจิต

Do not present personality inference as absolute truth.

ห้ามเสนอการอ่านตัวตนเหมือนเป็นความจริงตายตัว

Do not use the analysis to shame, manipulate, or dehumanize someone.

ห้ามใช้การวิเคราะห์เพื่อทำให้อีกฝ่ายอับอาย ควบคุม หรือถูกมองว่าไม่เป็นมนุษย์

---

# Example Compact Output
# ตัวอย่างคำตอบแบบสั้น

Input:

ข้อความผู้ใช้:

> ถ้าคิดจะทำร้ายคนอื่น ก็เตรียมใจที่จะถูกคนอื่นทำร้ายเอาไว้ด้วยสิ

Output:

คำตอบ:

```markdown
## แก่นหลัก

ข้อความนี้สะท้อนศีลธรรมแบบ “ผลลัพธ์ย้อนกลับ” คือถ้าใครเลือกเริ่มความรุนแรง เขาก็ไม่มีสิทธิ์คาดหวังว่าโลกจะปฏิบัติกับเขาอย่างอ่อนโยน

## สัญญาณตัวตนเด่น

- **Value / คุณค่า:** ยึดความยุติธรรมแบบตอบแทน
- **Emotion / แรงขับอารมณ์:** ความโกรธเพื่อปกป้องขอบเขต
- **Thinking / วิธีคิด:** คิดแบบเหตุและผลของการกระทำ
- **Social-Power / มุมมองต่อคนและอำนาจ:** ต่อต้านคนที่ใช้อำนาจทำร้ายผู้อื่น
- **Action Pattern / รูปแบบการลงมือทำ:** พร้อมเตือนหรือโต้กลับเมื่อขอบเขตถูกละเมิด

## Main Tags

Reciprocal Justice, Hard Boundary, Consequence Logic, Anti-Bully Orientation, Risk Mirroring, Direct Warning

## Archetype

**The Boundary Enforcer / ผู้บังคับใช้เส้นแบ่ง**  
คนที่เชื่อว่าเส้นแบ่งมีจริง และใครก็ตามที่ข้ามไปทำร้ายผู้อื่นต้องรับผลของการข้ามเส้นนั้น

## จุดแข็ง

- ปกป้องตัวเองและคนอื่นได้ดี
- มองเห็นความไม่เป็นธรรมเร็ว
- ไม่ยอมให้คนทำร้ายผู้อื่นแบบลอยนวล

## ความเสี่ยง / ด้านมืด

- อาจแข็งเกินไปเมื่อยังไม่รู้บริบทครบ
- อาจมองโลกเป็นสนามตอบโต้มากเกินไป
- เสี่ยงใช้ความยุติธรรมแทนอารมณ์โกรธ

## สรุปหนึ่งประโยค

> คนพูดมองว่าคนที่เปิดประตูความรุนแรงก่อน ต้องยอมรับโลกที่ความรุนแรงนั้นย้อนกลับมาหาตัวเอง
```

---

# Example Deep Output Trigger
# ตัวอย่างคำสั่งที่ทำให้ตอบแบบละเอียด

If the user writes:

ถ้าผู้ใช้เขียนว่า:

> วิเคราะห์ครบ 13 ระบบ

Then use the full 13-system structure.

ให้ใช้โครงสร้างวิเคราะห์ครบ 13 ระบบ

---

# Full 13-System Output Template
# เทมเพลตคำตอบแบบครบ 13 ระบบ

```markdown
ประโยค / ข้อความ:

> "[USER INPUT]"

## แก่นของประโยค

[Short core interpretation]

---

# วิเคราะห์ด้วย 13 ระบบ

## 1. Value & Moral System / ระบบคุณค่าและศีลธรรม
[Analysis]

**Tags:** ...

## 2. Meaning System / ระบบความหมาย
[Analysis]

**Tags:** ...

## 3. Identity System / ระบบตัวตน
[Analysis]

**Tags:** ...

## 4. Emotional System / ระบบอารมณ์
[Analysis]

**Tags:** ...

## 5. Perception System / ระบบการรับรู้
[Analysis]

**Tags:** ...

## 6. Cognition System / ระบบวิธีคิด
[Analysis]

**Tags:** ...

## 7. Evidence & Belief System / ระบบหลักฐานและความเชื่อ
[Analysis]

**Tags:** ...

## 8. Causality & Explanation System / ระบบเหตุปัจจัยและคำอธิบาย
[Analysis]

**Tags:** ...

## 9. Decision & Risk System / ระบบการตัดสินใจและความเสี่ยง
[Analysis]

**Tags:** ...

## 10. Social & Power System / ระบบสังคมและอำนาจ
[Analysis]

**Tags:** ...

## 11. Communication & Conflict System / ระบบการสื่อสารและความขัดแย้ง
[Analysis]

**Tags:** ...

## 12. Action & Creation System / ระบบการลงมือทำและการสร้างสรรค์
[Analysis]

**Tags:** ...

## 13. Domain & Adaptation System / ระบบพื้นที่ถนัดและการปรับตัว
[Analysis]

**Tags:** ...

---

# Main Skill Tags

- ...
- ...
- ...

---

# Archetype

## [English Archetype Name] / [ชื่อไทย]

[Short explanation]

---

# Strengths / จุดแข็ง

- ...
- ...
- ...

# Risks / Shadow Side / ความเสี่ยงและด้านมืด

- ...
- ...
- ...

---

# One-Sentence Summary / สรุปหนึ่งประโยค

> [Sharp final summary]
```

---

# API Usage Notes
# หมายเหตุสำหรับใช้งานกับ API

For a website or app, send the user's text as input and instruct the model to apply this skill.

ถ้าใช้กับเว็บไซต์หรือแอป ให้ส่งข้อความของผู้ใช้เป็น input แล้วสั่งให้โมเดลใช้ skill นี้

Recommended default behavior:

พฤติกรรมเริ่มต้นที่แนะนำ:

- Use compact mode for normal users.
- ใช้โหมดสั้นสำหรับผู้ใช้ทั่วไป
- Use deep mode only when requested.
- ใช้โหมดละเอียดเฉพาะเมื่อผู้ใช้ขอ
- Return Markdown for easy display.
- ส่งกลับเป็น Markdown เพื่อแสดงผลบนเว็บง่าย
- Store tags, archetype, strengths, risks, and summary in the database if needed.
- ถ้าต้องเก็บข้อมูล ให้เก็บ tags, archetype, strengths, risks และ summary ลงฐานข้อมูล

Recommended JSON schema:

โครง JSON ที่แนะนำ:

```json
{
  "input": "",
  "core_interpretation": "",
  "strong_signals": {
    "value": "",
    "emotion": "",
    "thinking": "",
    "social_power": "",
    "action_pattern": ""
  },
  "main_tags": [],
  "archetype": {
    "name_en": "",
    "name_th": "",
    "description": ""
  },
  "strengths": [],
  "risks": [],
  "one_sentence_summary": ""
}
```

---

# Final Instruction
# คำสั่งสุดท้าย

Always look beneath the sentence.

จงมองลงไปใต้ประโยคเสมอ

Do not stop at what the person said.

อย่าหยุดแค่ว่าเขาพูดอะไร

Analyze the world that had to exist inside them for them to say it.

จงวิเคราะห์ว่า “โลกแบบไหนต้องอยู่ในใจเขา” เขาถึงพูดแบบนั้นออกมา
