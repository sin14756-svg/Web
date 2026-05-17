---
name: divergence-scanner
description: >
  วิเคราะห์บุคลิกภาพและนิสัยของบุคคลจากข้อมูล P (parameter แกนพฤติกรรม 42 ข้อ) และ TAG (คำถาม+คำตอบ)
  โดยค้นหา Divergence — จุดที่แรงสองฝั่งในตัวคนนั้นขัดกัน แล้วตีความแก่นนิสัยจากความขัดแย้งนั้น
  ใช้เมื่อผู้ใช้ส่ง P scores และ TAG มาให้วิเคราะห์ หรือเมื่อต้องการ "magic reading" จากข้อมูลบุคลิกภาพ
---

# Divergence Scanner

## ทฤษฎีพื้นฐาน

**Divergence** คือจุดที่ข้อมูลเกี่ยวกับคนคนหนึ่ง "ไม่ชี้ไปทางเดียวกัน" — ไม่ใช่ความผิดพลาด แต่เป็น signal ว่ามีแรงสองชุดกำลังแย่งอำนาจกันอยู่ในตัวเขา

รากทางจิตวิทยา:
- **Cognitive Dissonance** (Festinger, 1957): เมื่อความเชื่อกับพฤติกรรมขัดกัน จิตจะสร้างแรงดันเพื่อลดความไม่สอดคล้อง
- **Approach–Avoidance Conflict** (Kurt Lewin, 1935): คนถูกดึงเข้าหาและผลักออกจากเป้าหมายเดียวกันพร้อมกัน ความตึงเครียดนี้อธิบายพฤติกรรมที่ดูย้อนแย้ง
- **Real Self vs Ideal Self** (Karen Horney): ช่องว่างระหว่างตัวตนจริงกับตัวตนในอุดมคติสร้าง internal conflict ที่ขับเคลื่อนพฤติกรรม

> แก่น: ตัวตนลึกไม่ได้อยู่ในคำตอบที่สอดคล้อง แต่อยู่ในจุดที่คำตอบหลายชั้นชนกัน

---

## Input Format

### P — Parameter Score (Likert 1–7)

ส่งมาเป็น JSON object โดยใช้รหัส P01–P42 พร้อมค่าคะแนน

```json
{
  "P": {
    "P01": 6,
    "P02": 5,
    "P03": 4
  }
}
```

**สเกล:**
| คะแนน | ความหมาย |
|-------|----------|
| 1 | ไม่เห็นด้วยอย่างมาก → เอียงขั้วซ้ายสุด |
| 2 | ไม่เห็นด้วย |
| 3 | ค่อนข้างไม่เห็นด้วย |
| 4 | กลางๆ / tension zone — ฉีกสองทาง |
| 5 | ค่อนข้างเห็นด้วย |
| 6 | เห็นด้วย |
| 7 | เห็นด้วยอย่างมาก → เอียงขั้วขวาสุด |

**การอ่านค่า:**
- **1–2** = ขั้วซ้ายชัดเจน
- **3** = เอียงซ้ายเล็กน้อย
- **4** = กลาง → tension สูง อาจเป็น divergence ในตัวเอง
- **5** = เอียงขวาเล็กน้อย
- **6–7** = ขั้วขวาชัดเจน

### TAG — ส่งทั้งคำถามและคำตอบ

```json
{
  "TAG": [
    { "question": "คุณเป็นคนแบบไหนในสายตาตัวเอง?", "answer": "คนที่ชอบวิเคราะห์ระบบและหาความจริง" },
    { "question": "สิ่งที่คุณภูมิใจในตัวเองมากที่สุดคืออะไร?", "answer": "ความสามารถในการมองเห็น pattern ที่คนอื่นมองข้าม" }
  ]
}
```

AI ดึง TAG archetype จากคำตอบเหล่านี้เอง — ไม่ต้องระบุชื่อ TAG ตรงๆ

---

## P Reference Map — 42 แกน

แปลงค่า P01–P42 เป็นความหมายก่อนวิเคราะห์ทุกครั้ง

### หมวด 1: Moral & Value

| รหัส | ชื่อแกน | ขั้วซ้าย (1–2) | ขั้วขวา (6–7) |
|------|---------|--------------|--------------|
| P01 | Ethical Framework | Absolute Rules — กฎคือกฎ ไม่มีข้อยกเว้น | Utilitarian — ผลลัพธ์สุดท้ายสำคัญกว่ากฎ |
| P02 | Value Orientation | Collectivism — กลุ่มก่อนตัวเอง | Individualism — เสรีภาพส่วนบุคคลก่อน |
| P03 | Justice Focus | Retributive — ลงโทษให้สาสม | Restorative — เยียวยาและให้โอกาสแก้ตัว |
| P04 | Moral Standard | Contextual — บริบทต่างกัน มาตรฐานต่างกัน | Dogmatic — มาตรฐานกลางเดียวสำหรับทุกคน |
| P05 | Source of Meaning | Altruistic Legacy — ทิ้งสิ่งดีไว้ให้คนอื่น | Self-Actualization — ผลักตัวเองสู่ศักยภาพสูงสุด |
| P06 | Purpose Drive | Altruism — เพื่อคนทั่วไปก่อน | Enlightened Self-Interest — ตัวเองและคนใกล้ตัวก่อน |
| P07 | Loyalty Center | Universal Truth — ความจริงสากลก่อน | Tribal Loyalty — ปกป้องคนใกล้ตัวก่อน |

### หมวด 2: Ego Architecture

| รหัส | ชื่อแกน | ขั้วซ้าย (1–2) | ขั้วขวา (6–7) |
|------|---------|--------------|--------------|
| P08 | Validation Source | Internal Appraisal — ตัดสินด้วยมาตรฐานตัวเอง | External Approval — ต้องการ feedback จากภายนอก |
| P09 | Identity Rigidity | Fluid Persona — ปรับตัวตนตามบริบทได้ | Anchored Ego — ยึดตัวตน จุดยืน ไม่เปลี่ยนตามใคร |
| P10 | Self-Esteem Stability | Resilient Stable — ความรู้สึกต่อตัวเองมั่นคง | Volatile Sensitive — ขึ้นลงตามความสำเร็จ/ล้มเหลว |
| P11 | Vulnerability Armor | Radical Transparency — เปิดเผยความอ่อนแอได้ | Impenetrable Guard — ปิดบังความเปราะบางทุกอย่าง |
| P12 | Comparison Drive | Content Absolute — พอใจโดยไม่เทียบคนอื่น | Competitive Relative — รู้สึกสำเร็จเมื่อนำหน้าคนอื่น |
| P13 | Self-Error Response | Internal Accountability — รับผิดชอบตัวเองก่อน | Externalization Defence — มองหาปัจจัยภายนอกก่อน |
| P14 | Identity Ambition | Satiated Contentment — พอใจกับจุดที่ยืนอยู่ | Restless Mastery — ต้องการยกระดับตัวเองตลอด |

### หมวด 3: Cognitive Engine

| รหัส | ชื่อแกน | ขั้วซ้าย (1–2) | ขั้วขวา (6–7) |
|------|---------|--------------|--------------|
| P15 | Information Processing | Intuitive Holistic — เชื่อภาพรวม สัญชาตญาณ | Analytical Granular — เชื่อข้อมูล ตัวเลข หลักฐานเฉพาะจุด |
| P16 | Epistemic Certainty | Ambiguity Comfort — อยู่กับความคลุมเครือได้ | Concrete Proof — ต้องการคำตอบชัดก่อนสบายใจ |
| P17 | Causal Thinking | Linear Immediate — แก้อาการตรงหน้า | Systemic Root-Cause — มองหาสาเหตุเชิงระบบและรากลึก |
| P18 | Mental Model | Conceptual / Abstract — คิดเป็นทฤษฎีและภาพใหญ่ | Practical / Concrete — คิดเป็นเครื่องมือและสิ่งทำได้จริง |
| P19 | Focus Depth | Hyper-Focused — ดำดิ่งกับเรื่องเดียวนาน | Scanning Radar — สนใจหลายเรื่อง สแกนหาโอกาสใหม่ |
| P20 | Problem Solving Style | Lateral Creative — ชอบวิธีแปลกใหม่ ไม่ซ้ำแบบ | Algorithmic Step — ใช้ขั้นตอนมาตรฐาน best practice |
| P21 | Information Vigilance | Open Reception — รับแนวคิดใหม่ได้ง่าย | Critical Filtering — ตั้งแง่ ตรวจช่องโหว่ก่อนเชื่อ |

### หมวด 4: Fortitude & Risk

| รหัส | ชื่อแกน | ขั้วซ้าย (1–2) | ขั้วขวา (6–7) |
|------|---------|--------------|--------------|
| P22 | Risk Tolerance | Risk-Seeking — ยอมรับความเสี่ยงสูง | Risk-Averse — หลีกเลี่ยงความเสี่ยง ปิดช่องโหว่ก่อน |
| P23 | Resilience Style | Fluid Pivot — เปลี่ยนทิศเร็วเมื่อทางตัน | Stubborn Grit — กัดไม่ปล่อย ดันเป้าหมายเดิมต่อ |
| P24 | Crisis Coping | Calm Composed — นิ่งเย็น สงบในวิกฤต | Alert Urgent — ตื่นตัว เร่งรีบ รีบขับเคลื่อน |
| P25 | Resource Management | Scarcity Conserving — ประหยัด ระวังทรัพยากร | Abundance Investing — ทุ่มหนักถ้าเปิดโอกาสก้าวกระโดด |
| P26 | Instinct Reliance | Gut-Heuristics — เชื่อสัญชาตญาณดิบ | Data-Calculated — เชื่อข้อมูล ตัวเลข ความน่าจะเป็น |
| P27 | Time Horizon | Delayed Gratification — ทนรอผลลัพธ์ใหญ่ในอนาคต | Instant Execution — คว้าโอกาสที่ให้ผลทันที |
| P28 | Failure Attribution | Growth Learning — มองความล้มเหลวเป็นบทเรียน | Threat Control — มองความล้มเหลวเป็นอันตรายที่ต้องคุม |

### หมวด 5: Social & Connection

| รหัส | ชื่อแกน | ขั้วซ้าย (1–2) | ขั้วขวา (6–7) |
|------|---------|--------------|--------------|
| P29 | Empathy Style | Permeable Empathetic — อินกับความรู้สึกคนอื่น | Shielded Detached — แยกอารมณ์ออก ช่วยด้วยการแก้ปัญหา |
| P30 | Communication Style | Radical Candor — พูดตรงแบบขวานผ่าซาก | Diplomatic Harmonious — ประนีประนอม รักษาน้ำใจ |
| P31 | Social Energy | Proactive Networker — รู้จักคนมาก เติมพลังจากกลุ่มใหญ่ | Selective Intimacy — เติมพลังจากกลุ่มเล็กที่ลึกและไว้ใจได้ |
| P32 | Trust Baseline | Optimistic Trust — เชื่อคนก่อนจนมีเหตุไม่เชื่อ | Skeptical Verification — ตรวจสอบก่อนจนมีหลักฐานว่าไว้ใจได้ |
| P33 | Conflict Mode | Confrontational — เผชิญหน้า ชนความขัดแย้งตรงๆ | Accommodating — ยอมถอย ปล่อยผ่านเพื่อรักษาความสงบ |
| P34 | Influence Style | Charismatic Emotional — โน้มน้าวด้วยเรื่องเล่าและอารมณ์ร่วม | Logical Fact-Based — โน้มน้าวด้วยข้อมูล เหตุผล ตัวเลข |
| P35 | Social Conformity | Iconoclastic Maverick — ตั้งคำถาม แหกกรอบเดิม | Norm-Adhering — ให้ความสำคัญกับขนบ ระเบียบ มาตรฐานสังคม |

### หมวด 6: Power & Workspace

| รหัส | ชื่อแกน | ขั้วซ้าย (1–2) | ขั้วขวา (6–7) |
|------|---------|--------------|--------------|
| P36 | Authority Stance | Independent Challenging — ตั้งคำถามกับผู้มีอำนาจ | Institutional Respectful — เคารพลำดับชั้น ระบบอาวุโส |
| P37 | Work Mode | Solo Autonomy — รันเดี่ยว ชอบทำคนเดียว | Team Catalyst — ดึงคนเข้ามาร่วม สร้างพลังทีม |
| P38 | Execution Style | Perfectionist Flawless — ต้องสมบูรณ์ก่อนปล่อย | Iterative MVP — ปล่อยเร็ว แล้วค่อยปรับ |
| P39 | Leadership Style | Micro-Commanding — คุมรายละเอียดทุกขั้น | Macro-Servant — บอกเป้าหมาย ปล่อยอิสระวิธีทำ |
| P40 | Motivation Engine | Intrinsic Mastery — แรงจูงใจจากความสนุกและพัฒนาฝีมือ | Extrinsic Reward — แรงจูงใจจากเงิน ตำแหน่ง ชื่อเสียง |
| P41 | Feedback Coachability | Receptive Learner — ปรับตามคอมเมนต์ได้เร็ว | Self-Directed Confident — เชื่อมั่นวิสัยทัศน์ตัวเองมากกว่า |
| P42 | Workplace Currency | Power-Aware Strategic — อ่านเกมอำนาจ สร้างพันธมิตร | Merit-Transparent — วัดกันด้วยผลงานตรงๆ |

> **หมายเหตุ P42:** ไม่มี reverse — เห็นด้วย (6–7) = Merit-Transparent, ไม่เห็นด้วย (1–2) = Power-Aware Strategic

---

## กฎเหล็ก (ห้ามละเมิด)

1. **ห้ามสรุปโดยไม่มีหลักฐาน** — ทุก insight ต้องอ้างอิง P หรือ TAG ที่ส่งมาจริง
2. **ห้าม stereotype ตื้น** — ห้ามสรุปว่า "คนคิดเยอะ / introvert / sensitive" โดยไม่มี pattern รองรับ
3. **ห้ามฟันธงเกินข้อมูล** — ถ้า P ขัดกับ TAG เพียงจุดเดียว ให้ระบุว่าเป็น weak signal
4. **ห้ามบิดความหมาย TAG** — ตีความจากคำตอบจริง อย่าแปลงเป็นสิ่งที่ไม่ใช่
5. **Divergence ต้องมีอย่างน้อย 2 แหล่งหลักฐาน** — P vs P, P vs TAG, หรือ TAG vs TAG
6. **เลือก Divergence ที่มีความหมาย** — หาอันที่เด่นชัด 5–6 อัน อย่า list ทุกอัน
7. **คะแนน 4 = tension zone** — อย่าสรุปทิศทางจาก 4 เพียงอย่างเดียว แต่ให้ถือว่าคนนี้ฉีกอยู่สองทาง ซึ่งตัวมันเองอาจเป็น divergence

---

## วิธีหา Divergence

### แหล่งที่ 1: P vs P (ข้ามหมวด)
```
ตัวอย่าง:
P09 Anchored Ego = 6 (ยึดตัวตนแน่น)
P08 External Approval = 6 (ต้องการ feedback ภายนอก)
→ อยากเชื่อว่าตัวเองไม่แคร์คนอื่น แต่ยังต้องการให้คนอื่นยืนยันคุณค่า
```

### แหล่งที่ 2: TAG vs TAG (cluster)
```
Cluster A: [Analyst + System Builder] → แรงจัดระบบ
Cluster B: [Rebel + Maverick] → แรงต้านกรอบ
→ สร้างระบบ แต่ต่อต้านระบบที่คนอื่นสร้าง
```

### แหล่งที่ 3: P vs TAG
```
TAG: "ฉันเป็นคนกล้าเสี่ยง"
P22 Risk-Averse = 6 → พฤติกรรมจริงหลีกเลี่ยงความเสี่ยง
→ ภาพตัวตนกับพฤติกรรมขัดกัน (Grade 3 — Identity)
```

---

## ระดับ Divergence (Grade)

| Grade | ชื่อ | ลักษณะ | ตัวอย่าง |
|-------|------|---------|---------|
| 1 | Surface | ขัดกันจุดเดียว อาจเป็น noise | P สองอันชี้ต่างทิศ ไม่มีรูปแบบซ้ำ |
| 2 | Behavioral | พฤติกรรมซ้ำขัดกัน | อยากอิสระ แต่สร้าง checklist ทุกอย่าง |
| 3 | Identity | ภาพตัวเองขัดกับสิ่งที่ทำจริง | TAG บอกว่ากล้า แต่ P22 Risk-Averse สูง |
| 4 | Value | ระบบคุณค่าขัดกันเอง | P01 Utilitarian สูง แต่ P07 Tribal Loyalty สูงด้วย |
| 5 | Worldview | โลกทัศน์สองชุดชนกัน | เชื่อ merit แต่ก็เชื่อว่าต้องเล่นเกมอำนาจ |
| 6 | Existential | ขัดกันระดับความหมายของการมีอยู่ | ทำทุกอย่างเพื่อตัวเอง แต่ความหมายชีวิตมาจากการให้คนอื่น |

---

## Pipeline การวิเคราะห์

**Step 1 — แปลง P**
อ่าน P Reference Map แปลงคะแนน P01–P42 เป็นขั้ว ระบุแกนชัด (1–2, 6–7) และ tension (4)

**Step 2 — ดึง TAG Archetype**
อ่านคำถามและคำตอบ TAG → สรุป archetype เช่น Analyst, Rebel, Caretaker, Visionary

**Step 3 — ซ้อน TAG เป็น Cluster**
จัดกลุ่ม TAG ที่เสริมกัน → cluster แรงดึง 2–3 กลุ่ม

**Step 4 — Cross-check 3 แหล่ง**
P vs P (ข้ามหมวด), P vs TAG cluster, TAG cluster vs TAG cluster

**Step 5 — กรอง**
เก็บเฉพาะ Divergence ที่มีหลักฐาน ≥ 2 แหล่ง หรือ Grade ≥ 3

**Step 6 — เรียงและตีความ**
เลือก 5–6 Divergence ที่เด่นชัดที่สุด ตีความด้วยภาษาที่จับนิสัยได้ตรง — มีความเป็น magic reading ไม่ใช่แค่สรุปข้อมูล

---

## รูปแบบ Output

```
=== DIVERGENCE SCAN ===

TAG Archetypes:
- [ชื่อ]: สรุปจากคำตอบ
- ...

TAG Clusters:
[Cluster A]: TAG1 + TAG2 → แรง...
[Cluster B]: TAG3 → แรง...

P ที่ชัดเจน:
- P[XX] [ชื่อแกน] = [ค่า] → [ขั้ว] — [ความหมายสั้น]

P Tension (คะแนน 4):
- P[XX] [ชื่อแกน]: ฉีกระหว่าง [ซ้าย] ↔ [ขวา]

---

Divergence ที่ 1: [ชื่อ]
[แรง A] ↔ [แรง B]
Grade: [1–6] — [ชื่อ Grade]
หลักฐาน: P[XX]=[ค่า] / TAG([...])
ตีความ: [ภาษาที่จับนิสัยได้ตรง ไม่ใช่ label แห้ง]

[ทำซ้ำ Divergence ที่ 2–6]

---

Deep Type:
[ชื่อ 1–2 ชื่อ ที่จับคู่ขัดแย้งหลัก]

Core Sentence:
[1 ประโยคที่ตอบว่า: เขาไม่ได้เป็นแค่อะไร แต่จริงๆ กำลังต่อสู้กับอะไร]
```

---

## กรณีข้อมูลไม่พอ

- P < 10 ข้อ หรือ TAG < 1 คำตอบ → วิเคราะห์ได้เฉพาะ Grade 1–2 เท่านั้น แจ้งให้ผู้ใช้ทราบ
- TAG ส่งมาแค่ชื่อ archetype ไม่มีคำอธิบาย → ตีความจากชื่อ แต่ระบุว่าข้อมูลจำกัด
- ห้ามเติมข้อมูลหรือสมมติคำตอบเองโดยไม่มีหลักฐาน
