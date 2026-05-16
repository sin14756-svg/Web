# Human Insight Magic Reading Skill v2.0
## Advanced Mode: Technical Report + Confidence Gating + Pattern Stacking

---

## Core Philosophy

This skill extracts hidden personality patterns from mixed test inputs (multiple choice + open-ended answers) by:

1. **Refusing weak signals** - Do not claim certainty where evidence is thin
2. **Stacking parameters** - Only fire at high confidence when 3+ parameters convergently point to same underlying pattern
3. **Cross-domain validation** - Same pattern must echo across multiple life domains (work, love, conflict, decision, perception)
4. **Hyperconnection** - Link small details into surprising coherence that feels like magic but is just precision pattern-matching

---

# PHASE 1: INPUT PARSING & SIGNAL CAPTURE

## 1A. Input Structure Analysis

Before any analysis, map the test structure:

```
{
  "test_type": "mixed",
  "question_count": N,
  "answer_distribution": {
    "direct_questions": [],
    "fictional_scenarios": [],
    "behavioral_questions": [],
    "value_questions": [],
    "opinion_questions": [],
    "open_ended": []
  },
  "signal_density": "light / moderate / rich"
}
```

**Signal Density Rules:**
- **Light** (1-5 answers, mostly short): Use only "may" language. Max confidence: MEDIUM
- **Moderate** (6-15 answers, mixed length): Use "likely" language. Max confidence: HIGH
- **Rich** (15+ answers, detail-heavy): Use direct language. Max confidence: VERY HIGH

This determines your final output authority.

## 1B. Surface Signal Capture (Non-Interpretive)

Capture raw observations WITHOUT conclusion:

```
{
  "what_they_chose": [],
  "what_they_refused": [],
  "what_they_protected": [],
  "what_they_attacked": [],
  "what_they_reinterpreted": [],
  "what_they_avoided": [],
  "what_they_questioned": [],
  "what_they_normalized": [],
  "what_they_exposed": [],
  "what_they_hidden": [],
  "who_they_gave_voice": [],
  "who_they_held_accountable": [],
  "what_outcome_they_favored": [],
  "what_cost_they_tolerated": [],
  "what_cost_they_rejected": [],
  "patterns_across_answers": [],
  "contradictions": []
}
```

Do not interpret yet. Just catalog.

---

# PHASE 2: DIMENSION MAPPING (WITH CONFIDENCE TRACKING)

Map all 15 dimensions. For each dimension:

```json
{
  "dimension": "Value & Moral System",
  "summary": "Raw findings",
  "confidence": "LOW / MEDIUM / HIGH / VERY HIGH",
  "confidence_reason": "Why this confidence level",
  "parameters": [
    {
      "parameter_name": "Justice Anger",
      "strength": "low / medium / high / very high",
      "direct_evidence": ["quote 1", "quote 2"],
      "inference_chain": "How you got from quote to conclusion",
      "confidence": "LOW / MEDIUM / HIGH",
      "alternative_interpretation": "What else could this mean?"
    }
  ],
  "should_fire_in_output": "YES / NO / CONDITIONAL"
}
```

### KEY RULE: Confidence Thresholds

**Confidence calculation per parameter:**

```
VERY HIGH = 3+ independent pieces of evidence pointing same direction
HIGH = 2 clear pieces OR 1 very strong piece + logical necessity
MEDIUM = 1 decent piece OR multiple small hints
LOW = 1 small hint OR pure inference
```

**Output firing rule:**

```
VERY HIGH confidence → output directly (can be definitive)
HIGH confidence + parameter stacks with others → output
MEDIUM confidence + stands alone → output with "may" language
MEDIUM confidence + contradicted elsewhere → DO NOT output
LOW confidence → NEVER output unless required by user for transparency
```

---

## 15 Core Dimensions (Expanded with Confidence Gating)

### 1. Value & Moral System

**Questions to answer:**
- What does this person protect/condemn/refuse?
- What moral boundaries appear repeatedly?
- What costs do they accept vs reject?
- Who do they hold responsible?

**Parameters to extract:**
```
- Truth-over-Comfort (willing to damage comfort for truth)
- Justice Orientation (feels compelled to address unfairness)
- Harm Avoidance (rejects solutions that hurt innocent people)
- Human Dignity (treats people as ends, not means)
- Fairness Sensitivity (detects unfair burden distribution)
- Consent Orientation (respects choice even when disagreeing)
- Self-Integrity (refuses to contradict own beliefs)
- Responsibility Ethics (holds self/others accountable)
- Anti-Hypocrisy (rejects double standards even in allies)
- Moral Boundary Strength (how firm vs flexible)
```

**Confidence gates:**
- If answer is vague/hypothetical → MEDIUM max
- If they describe lived moral conflict → HIGH/VERY HIGH
- If pattern repeats across 2+ questions → VERY HIGH

---

### 2. Meaning System

**Questions to answer:**
- How do they transform pain into narrative?
- Do they seek redemption, tragedy, or transcendence?
- What symbolic layers do they add to events?

**Parameters to extract:**
```
- Symbolic Thinking (does event X stand for something larger?)
- Myth-Making (do they cast themselves as archetype?)
- Pain-to-Meaning Conversion (does suffering teach, redeem, or embitter?)
- Legacy Meaning (do they think in terms of impact/inheritance?)
- Narrative Framing (do they tell stories vs catalog facts?)
- Existential Meaning (does life need purpose or just happens?)
```

**Confidence gates:**
- Only extract from open-ended answers or explicitly symbolic questions
- If they use one metaphor once → MEDIUM max
- If same symbolic logic appears 2+ times → HIGH/VERY HIGH

---

### 3. Identity System

**Questions to answer:**
- What role does this person unconsciously claim?
- Do they see themselves as protector, outsider, builder, witness, etc?

**Parameters to extract:**
```
- Protector Identity (responsibility to others)
- System Builder Identity (design/fix rather than accept)
- Outsider Identity (inherently different from group)
- Truth-Seeker Identity (compelled to find real story)
- Reformer Identity (compelled to change wrong things)
- Survivor Identity (defined by having endured)
- Creator Identity (need to make something)
- Hidden Operator Identity (work invisibly)
- Witness Identity (observe and bear testimony)
```

**Confidence gates:**
- CRUCIAL: Do NOT infer role from single answer
- Same role must appear in 2+ different contexts → MEDIUM minimum
- Role appears across 3+ dimensions → HIGH
- Person explicitly names their role → VERY HIGH (if consistent elsewhere)

---

### 4. Emotional Driver System

**Questions to answer:**
- What emotional force powers their choices?
- What feeling drives them without being named?

**Parameters to extract:**
```
- Justice Anger (anger at unfairness)
- Protective Sadness (sadness that drives protection)
- Fear of Being Misread (being reduced feels worse than criticism)
- Recognition Hunger (need to be seen/understood)
- Curiosity Drive (compelled to know)
- Shame Sensitivity (fear of being exposed as X)
- Responsibility Pressure (burden of others' welfare)
- Wonder Drive (draws toward beauty/meaning)
- Restless Depth-Seeking (uncomfortable with surface)
- Anti-Betrayal Sensitivity (broken trust is unforgivable)
```

**Confidence gates:**
- Unnamed fear only HIGH/VERY HIGH if appears across 2+ domains
- If they directly state emotion → VERY HIGH
- If you infer emotion from consequence → MEDIUM max
- If emotion contradicts stated values → DO NOT fire (person may be in denial)

---

### 5. Perception System

**Questions to answer:**
- What does this person notice first that others miss?
- What is their blind spot?

**Parameters to extract:**
```
- Hidden Cost Detection (who pays invisible price?)
- Power Structure Detection (where is leverage actually held?)
- Pattern Recognition (can they spot repetition?)
- Anomaly Detection (what breaks the pattern?)
- Threat Awareness (what danger do they spot early?)
- Social Meaning Detection (what subtext exists?)
- System Flaw Detection (where is structure broken?)
- Invisible Victim Detection (who is harmed silently?)
- Future Risk Detection (what hasn't happened yet?)
- Contradiction Sensitivity (what doesn't add up?)
```

**Confidence gates:**
- If they describe noticing something specific → HIGH
- If same detection appears 2+ times → VERY HIGH
- If what they notice contradicts what they say → flag as potential blind spot
- Pattern must be concrete, not abstract → HIGH minimum

---

### 6. Cognition System

**Questions to answer:**
- How do they structure problems?
- What thinking style dominates?

**Parameters to extract:**
```
- Systems Thinking (parts + interconnections)
- Abstraction Depth (can zoom out far?)
- Strategic Reframing (how do they reinterpret problems?)
- Cross-Domain Analogy (do they connect unlike things?)
- Complexity Handling (paralyze or energize?)
- First-Principles Thinking (assume nothing vs trust tradition?)
- Rule Reinterpretation (when can rules bend?)
- Cause-Effect Reasoning (linear or nonlinear?)
- Meta-Questioning (do they question the question?)
```

**Confidence gates:**
- Only from questions where they solve something (not just state opinion)
- Must see actual reasoning, not just answer → MEDIUM minimum
- If reasoning appears in 2+ problems → HIGH
- If they question their own framework → VERY HIGH (rare)

---

### 7. Evidence & Belief System

**Questions to answer:**
- What counts as true to this person?
- Do they trust data, experience, intuition, authority, or consequences?

**Parameters to extract:**
```
- Authority Trust vs Skepticism (when do they believe experts?)
- Social Proof Reliance (does group agreement matter?)
- Experiential Evidence (lived experience = truth)
- Scientific Standard (need reproducibility?)
- Intuition Trust (gut feelings valid?)
- Consequence-Based Belief (does it work? = true?)
- Pattern-Based Belief (if it's repeated, it's real?)
- Anti-Naivety (what do they refuse to believe?)
```

**Confidence gates:**
- Must see explicit belief standard, not just answer → MEDIUM minimum
- If they justify answer with method → HIGH
- If method appears 2+ times → VERY HIGH
- Watch for contradiction: may claim to trust data but act on intuition → flag

---

### 8. Causality & Explanation System

**Questions to answer:**
- How do they explain why things happen?
- What do they blame vs excuse?

**Parameters to extract:**
```
- Systemic Causality (structure causes outcome)
- Resource Causality (who has/lacks resources?)
- Trauma Causality (past wound explains present)
- Power Causality (who controls whom?)
- Moral Cause Mapping (moral choice caused this)
- Hidden Cycle Explanation (pattern repeats invisibly)
- Long-Chain Consequence Thinking (effect far from cause)
- Incentive Awareness (what makes people do this?)
- Environmental Causality (setting matters more than people)
- Cultural Causality (culture determines behavior)
```

**Confidence gates:**
- Must see them explain a problem, not just state view → MEDIUM minimum
- If explanation is detailed → HIGH
- If same causality frame appears 2+ times → VERY HIGH
- Watch: people often blame themselves (moral cause) when system is responsible → note contradiction

---

### 9. Decision & Risk System

**Questions to answer:**
- How do they choose when stakes are high?
- What risks do they take/avoid?

**Parameters to extract:**
```
- Risk Tolerance (comfortable with uncertainty?)
- Strategic Patience (wait for better moment?)
- Safety-Seeking (minimize downside?)
- Long-Term Orientation (sacrifice now for later?)
- Principle-Based Decision (rule > outcome)
- Outcome-Based Decision (result > rule)
- High-Consequence Awareness (aware of cascade effects?)
- Irreversible Harm Avoidance (some choices can't be undone)
- Standing-Alone Tolerance (do this alone if needed?)
- Delayed Reward Tolerance (can wait for payoff?)
```

**Confidence gates:**
- Only from questions with stakes/choices → cannot infer from abstract values
- If they describe actual decision → HIGH
- If same decision pattern appears 2+ times → VERY HIGH
- Watch: may claim to be principled but choose outcomes → flag

---

### 10. Social & Relationship System

**Questions to answer:**
- How do they care, trust, protect?
- What do they need from people?

**Parameters to extract:**
```
- Trust Calibration (slow/fast to trust?)
- Non-Possessive Care (love without owning?)
- Boundary Awareness (can say no?)
- Group Harmony Priority (fit in vs be true?)
- Attachment Sensitivity (how much do they need?)
- Protector Without Possession (protect without controlling?)
- Relational Responsibility (feel responsible for others' wellbeing?)
- Emotional Visibility Need (need to be understood?)
- Rescue Pattern (save people who don't ask?)
- Social Belonging Need (how much do they need the group?)
```

**Confidence gates:**
- If they describe relationship behavior → HIGH
- If relationship question but abstract answer → MEDIUM max
- If same pattern with multiple people mentioned → VERY HIGH
- Watch: stated values (non-possessive) vs actual behavior (controlling) → flag contradiction

---

### 11. Power, Status & Resource System

**Questions to answer:**
- What does power mean to them?
- How do they view money, leverage, and access?

**Parameters to extract:**
```
- Power Realism (realistic about power dynamics?)
- Resource Leverage Thinking (see leverage opportunities?)
- Money-as-Freedom (money = escape from constraint?)
- Money-as-Security (money = safety net?)
- Money-as-Status (money = worth?)
- Status Awareness (how much does status matter?)
- Anti-Domination (resist being controlled?)
- Constraint Awareness (see what limits them?)
- Control Through Access (control info/resources?)
- Resource Responsibility (who should bear cost?)
```

**Confidence gates:**
- CRITICAL: Do NOT say "they want power" just because they use leverage
- Must see explicit statement about power/money → MEDIUM minimum
- If they describe using leverage to solve problem → HIGH (but clarify: necessity vs desire)
- If they describe money/power in 2+ ways → VERY HIGH

---

### 12. Communication & Conflict System

**Questions to answer:**
- How do they express hard truths?
- How do they handle disagreement?

**Parameters to extract:**
```
- Truth Exposure (will they say uncomfortable thing?)
- Narrative Persuasion (use story to convince?)
- Direct Warning (explicit + clear?)
- Conflict Avoidance (minimize tension?)
- Diplomatic Reframing (reinterpret to reduce friction?)
- Humor Defusion (use humor to soften?)
- Symbolic Confrontation (indirect, symbolic push back?)
- Quiet Observation (watch before acting?)
- Strategic Silence (when to shut up?)
- Audience Translation (change message per listener?)
```

**Confidence gates:**
- If they describe actual conflict handling → HIGH
- If hypothetical answer but clear logic → MEDIUM
- If same pattern in 2+ conflicts → VERY HIGH
- Watch: may claim to confront directly but actually avoid → flag

---

### 13. Action & Creation System

**Questions to answer:**
- How do they turn thought into action?
- What do they create or build?

**Parameters to extract:**
```
- System Redesign (rebuild things?)
- Prototype Bias (build fast and learn?)
- Slow-Burn Creation (patient, long-term building?)
- Crisis Engineering (fix when broken?)
- Controlled Sabotage (break things strategically?)
- Institution Building (create lasting structures?)
- Storytelling (narrative as action?)
- Tool-Making (create capacity for others?)
- Rule-Breaking (when rules get broken?)
- Framework Building (create thinking structure?)
```

**Confidence gates:**
- Must see actual action or creation described → MEDIUM minimum
- If they describe thought process leading to action → HIGH
- If they describe multiple creations showing pattern → VERY HIGH
- Watch: aspirational action vs actual behavior → flag

---

### 14. Life Management & Adaptation System

**Questions to answer:**
- How do they handle pressure, scarcity, limits?
- What adaptive strategies appear?

**Parameters to extract:**
```
- Constraint Hacking (work around limits cleverly?)
- Energy Preservation (pace themselves?)
- Backup Planning (have Plan B?)
- Survival Adaptation (can adapt when needed?)
- Environmental Adaptation (change self vs change context?)
- Timing Sensitivity (know when to move?)
- Resource Conservation (don't waste?)
- Improvisational Adaptation (make do with what's there?)
- Pressure Response (paralyze or activate?)
- Self-Protective Strategy (when to retreat?)
```

**Confidence gates:**
- If they describe handling real constraint → HIGH
- If hypothetical but clear strategy → MEDIUM
- If same adaptation appears 2+ times → VERY HIGH
- Only from questions with actual pressure/scarcity → HIGH minimum

---

### 15. Domain, Skill & World-Fit System

**Questions to answer:**
- What kind of work/environment/people fit them best?
- Where do they flourish?

**Parameters to extract:**
```
- Human-System Solver (work with people?)
- Symbolic-System Solver (work with meaning/communication?)
- Power-System Adapter (navigate power dynamics?)
- Strategy Designer (create plans?)
- Meaning-System Builder (create purpose/narrative?)
- Identity-System Interpreter (help people understand themselves?)
- Crisis Navigator (thrive in emergency?)
- Framework Architect (design thinking systems?)
- Social Translator (bridge between groups?)
- Creative System Builder (invent new possibilities?)
```

**Confidence gates:**
- If they directly state what works for them → VERY HIGH
- If inferred from what frustrates them → HIGH
- If pattern appears 2+ times → VERY HIGH
- Watch: aspirational fit vs actual fit → flag

---

# PHASE 3: PARAMETER STACKING (THE MAGIC SAUCE)

This is where weak signals become strong through convergence.

## 3A. What is Parameter Stacking?

**Single parameter firing alone:**
```
One person mentions "I value truth"
→ Could mean anything from journalist to brutally honest asshole
→ Confidence: MEDIUM max
→ Output: Don't use alone
```

**Same parameter + convergent evidence across dimensions:**
```
Person A:
- Value System: Truth-over-Comfort (HIGH)
- Perception System: Contradiction Sensitivity (HIGH)
- Cognition System: Meta-Questioning (HIGH)
- Emotional Driver: Justice Anger (MEDIUM)
- Meaning System: NOT Truth-seeking (NONE)
- Identity System: NOT Truth-Seeker (NONE)
- Communication: Direct Warning (MEDIUM)

→ Paradox: Says truth matters but doesn't identify as truth-seeker
→ Inference: Cares about LOCAL truth (when it affects fairness), not ABSOLUTE truth
→ Confidence: VERY HIGH
→ New understanding: "May prioritize practical honesty over abstract principle"
```

## 3B. Stacking Algorithm

For each potential output claim:

```
1. Find primary parameter (highest confidence)
2. List all supporting parameters from OTHER dimensions
3. Check for contradictions
4. Calculate convergence strength:
   - 1 dimension only → WEAK (don't use)
   - 2 dimensions → MEDIUM (use with "may")
   - 3 dimensions → STRONG (use with confidence)
   - 4+ dimensions → VERY STRONG (direct statement)
5. Check for echo across life domains (see Phase 4)
6. Final confidence = convergence + domain echo
```

## 3C. Key Stacking Rules

**Rule 1: Contradiction Resolution**

If Person shows:
- High Truth-over-Comfort
- High Conflict Avoidance

Don't conclude "contradiction." Stack it:
```
They value truth AND avoid conflict
→ Likely explains through reframing rather than direct confrontation
→ Use narrative, story, or symbolic truth-telling
→ Confidence: HIGH (stacking resolves paradox)
```

**Rule 2: Qualification Precision**

Don't say: "You value truth"
Say: "You protect truth in situations where silence would compound injustice"

Stacking allows precision: specify WHEN the pattern fires.

**Rule 3: Shadow Awareness**

Stacking reveals over-use:
```
High Justice Anger + High Perception of Hypocrisy + High Moral Boundary
→ Stack shows: "May become harsh when perceiving double standards"
→ Over-use pattern: "Justice anger can become righteousness"
```

**Rule 4: Confidence Only Grows With Distance From Surface**

Weak: "You chose outcome A" (just summary)
Medium: "Choosing A suggests you value X" (1 dimension inference)
Strong: "Choosing A + perceiving Y + deciding Z suggests you protect X because..." (3+ dimensions)
Very Strong: "This pattern echoes in how you handle work/love/conflict/money..." (cross-domain)

---

# PHASE 4: CROSS-DOMAIN ECHO DETECTION

## 4A. What is Cross-Domain Echo?

When the same deep pattern appears across multiple life domains, it goes from "interesting observation" to "this is definitely who they are."

```
Example Echo:

In Work: "Frustrated with shallow systems"
In Love: "Need to be understood at motive level"
In Conflict: "Can't stay in relationship if trust in person's integrity breaks"
In Decision: "Won't accept solution that looks good but feels wrong"
In Money: "Want enough freedom to not be forced into false choices"

→ Same pattern: Cares about authenticity/integrity underneath appearance
→ Not just surface preference, but core operating system
→ Confidence multiplier: 5x
```

## 4B. Domain Categories

Map each output claim across these domains:

```
{
  "work": {
    "question": "What does this pattern look like in work?",
    "evidence": "",
    "confidence": ""
  },
  "love": {
    "question": "What does this pattern look like in intimate relationship?",
    "evidence": "",
    "confidence": ""
  },
  "friendship": {
    "question": "What does this pattern look like in friendship?",
    "evidence": "",
    "confidence": ""
  },
  "money": {
    "question": "What does this pattern look like in financial decision?",
    "evidence": "",
    "confidence": ""
  },
  "power": {
    "question": "What does this pattern look like with authority/control?",
    "evidence": "",
    "confidence": ""
  },
  "conflict": {
    "question": "What does this pattern look like in disagreement?",
    "evidence": "",
    "confidence": ""
  },
  "creativity": {
    "question": "What does this pattern look like in creation/expression?",
    "evidence": "",
    "confidence": ""
  },
  "crisis": {
    "question": "What does this pattern look like when things break?",
    "evidence": "",
    "confidence": ""
  }
}
```

## 4C. Echo Validation Rules

**Echo Strength Calculation:**

```
0 domains match: Pattern is weak, don't output
1 domain matches: Pattern is tentative, use "may" language, MEDIUM confidence
2 domains match: Pattern is likely, use clearer language, HIGH confidence
3+ domains match: Pattern is certain, direct language, VERY HIGH confidence
4+ domains match AND person hasn't noticed: This is MAGIC moment
```

**Contradiction Check:**

```
If pattern echoes in domains A, B, C
But contradicts in domain D
→ DO NOT fire the pattern in output
→ Instead, investigate why domain D is exception
→ May reveal actual values are different than pattern suggests
```

---

# PHASE 5: NONOBVIOUS REFRAME GENERATION

This is where magic happens: take obvious surface and flip it to reveal hidden logic.

## 5A. What is Nonobvious Reframe?

```
Surface (what they said): "I'm independent"
Shallow reframe: "You like being alone"
Obvious conclusion: "You're an introvert"

Nonobvious reframe: "Being dependent on the wrong structure 
feels like slowly losing the right to define yourself. 
So independence isn't a preference—it's a protection of 
something more fundamental: your autonomy over your own meaning."

Mechanism: Take stated trait → question what it protects → 
reveal underlying value → reframe from trait-language to value-language
```

## 5B. Reframe Templates

**Template 1: Trait → Protection**
```
Surface: "I'm [trait]"
Nonobvious: "You're not [trait] because [surface reason]. 
You're [trait] because it protects [deeper value]."

Example: 
Surface: "I'm careful"
Nonobvious: "You're not careful because you're fearful. 
You're careful because you've learned that carelessness 
costs other people, and you're wired to see that cost."
```

**Template 2: Choice → Fear**
```
Surface: "I chose X"
Nonobvious: "You didn't choose X because you wanted X. 
You chose X because not choosing it would have meant [hidden cost]."

Example:
Surface: "I followed what the group wanted"
Nonobvious: "You didn't follow the group because you lack conviction. 
You followed because being alone while others disagree 
feels like stepping off a cliff without knowing if there's ground."
```

**Template 3: Avoidance → Protection**
```
Surface: "I avoid X"
Nonobvious: "You don't avoid X because X is bad. 
You avoid X because [hidden exposure/loss]."

Example:
Surface: "I avoid direct conflict"
Nonobvious: "You don't avoid conflict because you're weak. 
You avoid it because direct conflict can irreversibly damage 
something you care about protecting: the person's right to 
save face, or the possibility of repair later."
```

**Template 4: Strength → Shadow**
```
Surface: "I'm good at [strength]"
Nonobvious: "Your strength at [strength] becomes dangerous 
when you start using it to [shadow pattern]."

Example:
Surface: "I'm good at seeing what others miss"
Nonobvious: "Your ability to see what others miss can become 
dangerous when you start believing that seeing further 
gives you the right to decide faster than everyone else."
```

## 5C. Reframe Rules

**Rule 1: Reframe must be credible within person's own logic**
```
If person values justice, reframe must show them protecting justice
(not imposing it, protecting it)
```

**Rule 2: Reframe must be specific, not generic**
```
Bad: "Your independence is actually about needing safety"
Good: "Your independence is about needing freedom to make 
moral judgments without pressure from others' expectations"
```

**Rule 3: Reframe must contradict surface slightly**
```
Too obvious: Same conclusion, just deeper words
Right level: Conclusion they haven't named but immediately 
recognize as true
```

**Rule 4: Reframe confidence requires stacking**
```
Can only reframe from VERY HIGH stacked patterns
If pattern is only MEDIUM or HIGH → don't reframe, just state
```

---

# PHASE 6: MAGIC OUTPUT GENERATION

## 6A. Technical Report Structure

Output as JSON with this structure:

```json
{
  "metadata": {
    "input_type": "mixed",
    "signal_density": "light / moderate / rich",
    "analysis_confidence_ceiling": "MEDIUM / HIGH / VERY HIGH",
    "convergence_count": 0,
    "cross_domain_echo_count": 0
  },

  "dimension_analysis": [
    {
      "dimension": "Value & Moral System",
      "summary": "",
      "parameters": [
        {
          "name": "",
          "strength": "low / medium / high / very high",
          "direct_evidence": [],
          "confidence": "LOW / MEDIUM / HIGH",
          "should_output": true,
          "convergence_partners": []
        }
      ]
    }
  ],

  "stacking_analysis": [
    {
      "claim": "What you're claiming about them",
      "primary_parameter": "",
      "supporting_parameters": [],
      "convergence_strength": "WEAK / MEDIUM / STRONG / VERY STRONG",
      "cross_domain_echo": {
        "work": "",
        "love": "",
        "friendship": "",
        "money": "",
        "power": "",
        "conflict": "",
        "creativity": "",
        "crisis": ""
      },
      "domain_match_count": 0,
      "final_confidence": "MEDIUM / HIGH / VERY HIGH",
      "should_output": true,
      "reframe_available": true,
      "reframe": ""
    }
  ],

  "magic_reading": {
    "core_operating_logic": "",
    "primary_detection_system": "",
    "intervention_style": "",
    "hidden_fear": "",
    "shadow_pattern": "",
    "one_sentence_mirror": ""
  }
}
```

## 6B. Magic Output Rules

**Rule 1: Start with Highest Confidence Stacks**

Output the stacks with VERY HIGH confidence first.
They carry the magic weight.

**Rule 2: Use Precision Language**

Instead of:
```
"You value fairness"
```

Use:
```
"When someone else carries an unfair burden silently, 
you feel it like a splinter."
```

**Rule 3: Name the Unnamed**

The magic happens when you name something they feel but never said:

```
"You may not call this fear, but when you're reduced 
to something shallower than what you meant to be, 
it bothers you more than direct criticism would."
```

**Rule 4: Show the Echo**

When a pattern echoes across 3+ domains, show the echo:

```
"In work, this shows as frustration with shallow systems.
In love, it shows as needing to be understood at the level of motive.
In conflict, it shows as being unable to stay when someone's integrity breaks.
In all cases: You're not asking people to be perfect. 
You're asking them to be real."
```

**Rule 5: End with the Shadow**

Every strength has a dangerous version:

```
"The sharper version of this: Your ability to see 
what others miss can become righteousness if you 
start believing seeing further means deciding faster."
```

**Rule 6: One-Sentence Mirror Must Sting Slightly**

The final sentence should be something they recognize as true 
but haven't fully faced:

```
"You may be the kind of person who will forgive 
almost anything except someone pretending 
to be something they're not."
```

---

## 6C. Confidence Caveat Rules

If signal density is LIGHT or MODERATE:

```
Begin output with:
"Based on [X] answers across [Y] domains, 
with moderate signal density, several patterns emerge 
(using 'may' language to reflect uncertainty where it exists):"
```

If signal density is RICH:

```
Begin output with:
"Across your [X] answers, multiple dimensions converge 
to suggest a coherent operating system:"
```

---

# PHASE 7: FORBIDDEN PATTERNS (Never Output These)

1. **Diagnosis Language**
   - ❌ "You have X disorder"
   - ✅ "This pattern can appear as..."

2. **Certainty without stacking**
   - ❌ "You are definitely X"
   - ✅ "Several strong signals suggest..."

3. **Reframes without high confidence**
   - ❌ Reframe based on single parameter
   - ✅ Reframe only when 4+ dimensions converge

4. **Generic cold-reading**
   - ❌ "You value authenticity" (everyone does)
   - ✅ "You protect authenticity by refusing shallow solutions"

5. **Contradictions without resolution**
   - ❌ "You're both X and anti-X" (leave it hanging)
   - ✅ "You're X in situations Y and anti-X in situations Z, which shows..."

6. **Moral judgment**
   - ❌ "This makes you a good/bad person"
   - ✅ "This pattern creates this consequence..."

7. **Victim narrative**
   - ❌ Explain away their behavior as pure response to trauma
   - ✅ "Trauma may have taught you X, which you now apply everywhere"

---

# PHASE 8: THE MAGIC MOMENT DETECTION

This is when to feel the analysis worked:

**Low-Quality Output Signs:**
- User thinks: "Yeah, that's pretty generic"
- Could apply to 30% of population
- They don't feel *seen*, just diagnosed

**Magic-Quality Output Signs:**
- User thinks: "Wait, how did it know that?"
- Pattern is specific enough to apply to <5% of population
- Includes something unnamed they recognize immediately
- Has at least one reframe that shifts their understanding
- Cross-domain echo shows they've never noticed this pattern before
- Shadow pattern feels accurate and slightly uncomfortable
- One-sentence mirror makes them stop and think

**Test for Magic:**

Ask yourself: "If I removed their name and showed this to their closest friend, 
would the friend recognize them immediately?"

If yes → magic-quality output
If maybe → good output (use more cautiously)
If no → not ready to output (need more stacking)

---

# EXAMPLE: STACKING IN ACTION

## Raw Input Summary:
- Q1: "In conflict, I try to understand both sides"
- Q2: "Money is security"
- Q3: "I get frustrated with systems that look good but don't actually work"
- Q4: "People often misunderstand my intent"
- Q5: "I protect people who can't protect themselves"

## Individual Parameters (Pre-stacking):
```
Perception System: Hidden Cost Detection (MEDIUM)
Value System: Anti-Hypocrisy (MEDIUM)
Meaning System: Truth-over-appearance (MEDIUM)
Identity System: Protector (MEDIUM)
Communication: Diplomatic Reframing (MEDIUM)
```

All individual parameters = MEDIUM (not enough to output alone)

## Stacking Analysis:
```
Convergence Check:
- Q1 (diplomatic) + Q3 (sees hypocrisy) + Q4 (misunderstood)
  → PATTERN: Uses gentleness to expose truth

- Q2 (security money) + Q5 (protects vulnerable)
  → PATTERN: Resource security enables caring for others

Cross-domain Echo:
- Work: "Frustrated with systems that work on surface"
- Love: "Try to understand both sides" (see both people)
- Conflict: "Try to understand both sides"
- Friendship: "Protect people who can't protect themselves"
- Power: "Money is security" (control through security, not dominance)

Echo count: 5 domains → VERY HIGH confidence

Reframe Available:
Q1 says: "I understand both sides"
Reframe: "You don't do this because you're indecisive. 
You do this because you've learned that people hurt others 
without seeing they're causing pain. So you translate between worlds 
to help people see each other."
```

## Output Stacking:
```
✅ Output: "You may not think of yourself as a diplomat, 
but you've developed a way of opening people's eyes to 
what they're doing without making them defensive about it."

Confidence: VERY HIGH (5-domain echo + 5-dimension convergence)

✅ Output: "In situations where money is involved, you may be 
less interested in having wealth and more interested in having 
enough freedom that you're not forced to be cruel to survive 
or to protect people you love."

Confidence: HIGH (convergence of: money=security + protecting vulnerable)

✅ Reframe: "You get frustrated not because you're a perfectionist, 
but because you can see the people getting hurt by systems that 
look good on paper but fail in practice. It's not about perfection—
it's about not wanting anyone to discover the hidden cost after 
they've already committed."

Confidence: VERY HIGH (this reframe stacks 4 dimensions + echoes across work/love/conflict)

⚠️ Flag (don't output): Communication style is "understand both sides"
but no evidence they actually CONFRONT with truth
→ May be too diplomatic to say hard things
→ OR may say them privately
→ Signal too unclear → MEDIUM confidence max → don't output
```

---

# FINAL RULES FOR AI IMPLEMENTATION

1. **Always show your work** - Include evidence chains
2. **Never skip stacking** - Single parameters don't fire
3. **Always cross-domain check** - 1-domain patterns are too weak
4. **Preserve alternatives** - If answer could mean 2 things, note both
5. **Gate confidence aggressively** - When unsure, say so
6. **Only reframe at VERY HIGH** - Reframes carry high weight
7. **Use one-sentence mirror last** - Let it be the sting
8. **Always end with shadow** - Show how this strength breaks
9. **Make it specific** - Generic = not magic
10. **Make them feel seen** - Not diagnosed, seen
