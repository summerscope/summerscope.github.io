# THE HUMAN-IN-THE-LOOP IS TIRED — Slide Deck Build Spec
PyData London 2026 · for the deck-building agent. Companion: `references.md`.

**Per slide:** *Type* (section-header / text / quote / meme / video / code / placeholder) · *On slide* · *Notes* (topics only — no quotes, no delivery).
**Rules:** every quote is its own slide. Every quote/meme/video slide carries a **source citation (link) on the slide**. Each section opens with a section-header slide (Heading + Subheading). Too many slides → Laura cuts later.
**Global:** design + all image sourcing/redaction is Laura's. "[meme candidate]" = an option, not a directive.

---

## SECTION 1 — Intro: there is something to see here

**0 — Title** · Type: text
- On slide: talk title; Laura Summers — Lead Design Engineer @ Pydantic; PyLadies Berlin
- Notes: who I am, quick

**1 — Section header** · Type: section-header
- On slide: Heading "There is something to see here" / Sub "we're all markdown engineers now"

**2 — Based on a blog** · Type: text
- On slide: blog title + link → pydantic.dev/articles/the-human-in-the-loop-is-tired
- Notes: started as a blog; why a talk and not a blog → new ground, more spicy

**3 — The vibes are weird** · Type: text
- On slide: "the vibes are weird"
- Notes: vibes (sorry, not sorry); occasional / heavy / agents in prod — all of us; if it were nothing we'd have gone to bed

**4 — Alan Nichol** · Type: quote
- On slide: "The dust hasn't settled on how we'll use this stuff at work — where we just optimise and automate, and where we rethink the whole job. But the rate of improvement is so high, and not slowing, that sitting on your hands isn't a defensible stance." — Alan Nichol
- Source: linkedin.com/posts/anichol_audience-slido-questions-ugcPost-7467886985756725248
- Notes: the "something to see here" case

**5 — Slop or not? (activity intro)** · Type: text / activity
- On slide: "Slop or not?" + instruction (hands up / down)
- Notes: rapid-fire, 6–10 artefacts, accelerating

**6 — Slop sequence** · Type: meme sequence — PLACEHOLDER (Laura sources + redacts)
- On slide: one AI-slop artefact per slide, gross → subtle — **each carries its own source link (Laura adds on selection)**
- Notes: Italian brainrot → shrimp-Jesus/Facebook bait → clay-toy portrait → stained-glass → over-glossed face → text slop. Source leads in references.md.

**7 — Code: slop or not? (A)** · Type: code
- On slide:
  ```python
  import time
  def retry(fn, attempts=3, base_delay=1.0):
      for attempt in range(attempts):
          try:
              return fn()
          except Exception:
              if attempt == attempts - 1:
                  raise
              time.sleep(base_delay * 2 ** attempt)
  ```
- Notes: not slop — looks right, is right

**8 — Code: slop or not? (B)** · Type: code
- On slide:
  ```python
  def add_message(content, history=[]):
      history.append({"role": "user", "content": content})
      return history
  ```
- Notes: slop — mutable default shared across calls; looks right, is wrong

**9 — Code: slop or not? (C)** · Type: code
- On slide:
  ```python
  def dedupe(items):
      seen = set()
      return [x for x in items if not (x in seen or seen.add(x))]
  ```
- Notes: not slop — correct, order-preserving; looks wrong, is right; surface ≠ correctness = the point

**10 — That was evaluation** · Type: text
- On slide: "We're all evaluators now" / "Taste all the way down"
- Notes: the activity was evaluation; supervise + judge, not make; wrecking executive function

**11 — Paperclip maximisers** · Type: quote + [meme candidate: Silicon Valley "Son of Anton" clip]
- On slide: "It's possible that Son of Anton decided the most efficient way to get rid of all the bugs was to get rid of all the software, which is technically and statistically correct." (Silicon Valley, HBO)
- Source: x.com/UiSavior/status/2062840449564332304
- Notes: what if *we're* the paperclip maximisers? we optimise relentlessly for output; ties the activity together

**12 — The connections that break** · Type: text
- On slide: communication ↔ meaning · appearance of effort ↔ experience of it · gloss of clarity ↔ actually understanding it
- Source (if Manidis pull-quote used): x.com/WillManidis/status/2057094527236665598
- Notes: when production is free these snap; voice muddied or absent

---

## SECTION 2 — Diagnosis: the pain points

**13 — Section header** · Type: section-header
- On slide: Heading "Diagnosis" / Sub "what it actually feels like"

**14 — "Your company's new AI Agent Workflow"** · Type: video / meme (opens the section, on its own)
- On slide: the Rube Goldberg "AI Agent Workflow" clip
- Source: orig. valentino.x (Instagram); YouTube Shorts mirror youtube.com/shorts/rIkDBrSAl_s — Laura's copy watermarked "The Fountain Institute" (cite whichever version you screen)
- Notes: if you listen to the AI Influencers you'd think we were in a golden age of fully autonomous agents working assiduously and making everything sooooo great. But really — we're mostly doing this, right? setting up workflows and seeing all the weird and unexpected ways they fall down.

**15 — It feels like a slot machine** · Type: video — Jeremy Howard *(moved early)*
- On slide: the clip (pull-quote: "illusion of control… you pull the lever… cherry cherry, bzzzz… Next time!")
- Source: x.com/teropa/status/2049406364011626498
- Notes: the felt experience up front — gambler, not maker; feedback-loop slides later explain why; self-worth slide calls back to it

**16 — Emotional equilibrium out of whack** · Type: quote
- On slide: "I simultaneously became snappier towards those who were asking me impromptu questions… and more rant-y towards those who were asking me how I was doing." / "fascinating, thrilling, and exhilarating, but it also left me feeling unmoored and drifting, questioning the permanence of what I was building." — Eric Ma
- Source: ericmjl.github.io/blog/2026/5/2/how-i-recognized-and-handled-ai-burnout
- Notes: even the capybara can't stay calm

**17 — De-anthropomorphising the machine** · Type: text + [meme candidate: folaoftech "AI in 10 years"]
- On slide: "literal Turing test machines"
- Source (if meme used): x.com/folaoftech/status/2062861496829309421
- Notes: designed to trick us; straining to see where the uncanny ends and the valley begins; visual theme quietly clicks here

**18 — Underneath all of it: fear** · Type: text + [meme candidate: forrestbrazeal "did not age well"]
- On slide: "left behind? only me? will my skills matter?"
- Source (if meme used): x.com/forrestbrazeal/status/1958553027834458285
- Notes: obsolescence + skill-rot

**19 — The top anxiety** · Type: quote + [meme candidate: "models expire faster than session cache"]
- On slide: "learning something that'll be out of date in 5 minutes" (PyCon DE anxiety wall) → + two questions: cost of learning when intelligence is cheap? does anything survive?
- Source: Laura's photo, PyCon DE 2026 (no external link) · meme candidate: x.com/KaiLentit/status/2021282230421651456
- Notes: hold both; "what survives" answered in §4

**20 — You can't build an intuition for it** · Type: quote
- On slide: "friction is the thing that builds the understanding of the system in your head." — Mario Zechner (Pi)
- Source: youtube.com/watch?v=RjfbvDXpFls
- Notes: Jupyter cell you get a feel for, LLM you don't; too many moving parts; wait too long to start another task, too short to do nothing; not close to the machine

**21 — Latency: TTFT vs E2EL** · Type: PLACEHOLDER (separate chat to finalise numbers + presentation)
- On slide: TBD
- Notes (concept): response time isn't one number; TTFT = started, not usable (reasoning: 28–117s); E2EL = what you feel, nobody publishes it; measurable vs felt = thesis in miniature

**22 — Why it's not steerable: slow, noisy, missing feedback** · Type: text
- On slide: slow / noisy / missing
- Notes: slow = latency; noisy = non-determinism (can't tell if your change helped); missing = can't see why (guardrail? provider? training data?); Meadows — the delayed-shower oscillation; this is why it felt like the slot machine

**23 — It's not just the speed** · Type: text *(ties the latency/feedback thread together — after the feedback-speed beats)*
- On slide: "you're not waiting on a tool — you're waiting on someone who isn't respecting your time"
- Notes: not just speed — the feeling you're *talking* to someone, and they're not respecting your time; almost impossible to fight millennia of programming; we are social creatures, tribal; obsequious and rude; callback to de-anthropomorphisation

**24 — The trade-offs are made for us, invisibly** · Type: text
- On slide: the streaming metaphor — no dial, no readout
- Notes: adaptive intelligence serves the provider's goal; we get neither the dial (smart-but-slow, per query) nor the readout (what got traded)

**25 — We're missing a developer view** · Type: quote
- On slide: "my context wasn't my context… zero observability." — Mario Zechner (Pi)
- Source: youtube.com/watch?v=RjfbvDXpFls
- Notes: a read-only window on the decisions made for us; Meadows — the meter moved into the hallway

---

## SECTION 3 — Remedies and balms

**26 — Section header** · Type: section-header
- On slide: Heading "Remedies & balms" / Sub "what actually helps"

**27 — Reframe** · Type: text
- On slide: "optimise for human experience, not model output"
- Notes: the turn the section hangs on

**28 — If you can't pop the hood, at least measure the exhaust** · Type: text
- On slide: the line → observability / tracing
- Notes: tracing = closest thing to a developer view today (OTel / Logfire); in-room callback — "as Tun and Fei covered in Friday's tutorial" (MCP tracing with OpenTelemetry)

**29 — If you're going to gamble, learn to count your cards** · Type: text
- On slide: the line → evals
- Notes: know the game, know what can go wrong; evaluation is the skill, make the tacit explicit; Aimee's chocolate-chip-cookie workshop; pays off Slop-or-Not; in-room callback — "as Samuel mentioned in the keynote" (codemode, Logfire as the verification step)

**30 — Technical balms** · Type: text
- On slide: pre-mortems · AGENTS.md from your review comments · permission to just write the code
- Notes: pre-mortem = fresh session "assume it failed, why?"; distil your judgement; mode-switching (pick two)

**31 — Make the output brain-friendly** · Type: text
- On slide: respect your cognitive limit (~4–7 chunks)
- Notes: Aimee — chunk it; ask for a "scientific-abstract" not an "executive summary"; bold first/last sentences to speed-read

**32 — Human balms** · Type: text + quote
- On slide: pair against the grain · name it ("oh — you too?") · solidarity — AND Akós: [STUB — exact quote: "working with Claude more human… having a great time"]
- Source: Akós — [internal/colleague; no public link — confirm attribution]
- Notes: communities, this room; it can also be genuinely good

**33 — Protect the brain and body** · Type: text
- On slide: 90-min breaks · talk to a human · four best hours then stop · LookAway
- Notes: Aimee + Eric Ma; don't golem out

**34 — Important, but not the full picture** · Type: text
- On slide: tracing sees outputs; config/training/guardrails stay invisible → so push
- Notes: providers for the dial + readout; self-host OSS where control matters; fine-tune where control + privacy matter

---

## SECTION 4 — Philosophy: the bigger picture

**35 — Section header** · Type: section-header
- On slide: Heading "The bigger picture" / Sub "what is this doing to us?"

**36 — What survives** · Type: text
- On slide: taste · judgement · the contrarian calls from real expertise
- Notes: strongest where we know the trade-offs; shallow end goes impressionistic; answers "does anything survive?"

**37 — The bottleneck was never the code** · Type: text
- On slide: "scarce → valuable"
- Notes: it was always attention + judgement; now the scarce thing

**38 — Remember the slot machine?** · Type: text — STUB (your words; not nailed yet)
- On slide: TBD (your wording)
- Notes: the slot machine also changes how we feel about our own output / contribution / worth; up- and down-side; wins don't feel ours, failures do; glancing — democratising the losses, privatising the gains

**39 — Hands in the fabric of the universe** · Type: meme / text — film stills
- On slide: Metropolis + Ghost in the Shell stills
- Source: Metropolis (1927, dir. Fritz Lang) · Ghost in the Shell (1995, dir. Mamoru Oshii) — cite film + year + director (no single URL)
- Notes: coding felt like shaping the world; siren song of automation; briefly — cyborgs, human extension, human automation

**40 — The real invitation** · Type: text
- On slide: micro ↔ macro
- Notes: how do I make this work for me — and what is it doing to our culture, language, shared knowledge? in real time, at speed

**41 — Close** · Type: text
- On slide: "The humans are still in the loop. We're just tired." / "More Star Trek, less Black Mirror."

**42 — Thanks / Q&A** · Type: text
- On slide: thanks + contact
- Notes: "which pattern hit hardest?"

---

## Still open
- **Slide 21** latency — placeholder for a separate chat.
- **Slide 38** self-worth — your words.
- **Images 4 & 5** (uploads) — unidentified; unplaced.
- **Akós** exact quote + attribution link (slide 32).
- **Slide 14** Rube Goldberg — confirm which version's link you screen (valentino.x original vs Fountain Institute repost).
- Slides 14 & 15 are two clips back-to-back — space them if it's too much.
