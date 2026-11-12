# Say hi to Satyrn — speaker notes

Recorded GPT baseline comes before the live Satyrn comparison and observed failure modes. Arrow keys navigate. N toggles in-page notes.

## 1. Say hi 👋 to Satyrn

30 minutes including 3 minutes for questions. Section 1: 3 minutes including the opening. Smallish open models, built by and for Python developers.

## 2. July 2026. EuroPython.

July 17 closing keynote. This is a paraphrase of the challenge, not a verbatim quote. The blog describes the target as October 1. Source: https://satyrn.ai/blog/2026/from-a-talk-a-community/

## 3. After the keynote

People who showed up after the talk. Many fewer people became working contributors. Do not equate this gathering with active contributors or a current community count. Photo from the Satyrn website repository. Source: https://satyrn.ai/blog/2026/from-a-talk-a-community/

## 4. “How spicy should I go?”

Jody, a mutual friend, introduced me to Paul at EuroPython. We chatted before his keynote, and he was asking how spicy to go. I encouraged him. We could find ways to be spicy without actively biting the hand that feeds us, shall we say. I am always a fan of spiciness.  Source: Laura’s personal account, supplied for this talk. The heading paraphrases the conversation, rather than claiming a verbatim quotation.

## 5. It spoke to something I was feeling.

I loved EuroPython and the community there. But I was also feeling disempowered and disillusioned. It felt like we were not really grappling with the larger forces at play. There was a lot of putting our heads in the sand and hoping the shit would blow over. That felt like a bad response to the moment.  I was also in the middle of leaving my job and leaving the country, and feeling a little adrift. It was really nice to meet a community that spoke to the same ideas as me, and gave me something positive to focus on.  Source: Laura’s personal account. Section 2 runs about two minutes including the design-work slide.

## 6. A simple mark. A lot of ideas.

Working with Paul and Carol on the brand and website. Keep this section brief, around 45–60 seconds. Show the final design, with early sketches only if supplied.  We went through a lot of iterations: more hand-drawn and literal options, including a python and yin-yang combination. An earlier version had a balloon with an S curve in its string and a Polynesian girl character. It was cute and had character, but to me it felt a little too childish, and did not embody the visual history of Jupyter or the Python community.  The combination of rough, hand-drawn lettering and a geometric graphic mark felt like the right balance: the community, Python’s scientific and academic background, and the connection to Jupyter. Jupyter notebooks and the Jupyter universe were design references.  We ended up with a fairly literal Saturn, but with negative space, hints of balance and yin-yang, and an S curving around the planet. There are quite a lot of ideas in a simple mark. That is something I am happy with: a strong brand mark can be simple and allow several interpretations.  Source: Laura’s personal account. Brand image is the actual social preview asset from satyrn-ai/satyrn-website, src/assets/og-image.jpg. Early sketches have not yet been supplied.

## 7. People got to work.

Section 3: around 3–4 minutes across these three slides. Paul’s blog describes teams forming immediately after EuroPython. He went on holiday, but people sprang into action. Michał’s team built fine-tuning infrastructure and datasets for Python 3.14 and 3.15. Keep the story about parallel contributions rather than one person delivering everything. Source: https://satyrn.ai/blog/2026/from-a-talk-a-community/

## 8. A lot of false starts.

Paul describes repeatedly announcing that the Engine was almost ready, then finding problems after overnight eval runs. This continued until the third week of September. His account says the eval harness became more valuable than the Engine at that point: it helped establish whether an idea actually worked. Meanwhile, Michał’s team was building training infrastructure and data. Laura’s framing: everyone is busy, everyone has jobs and a lot on their plate. Progress came in parallel, at volunteer pace. Source: https://satyrn.ai/blog/2026/from-a-talk-a-community/

## 9. We pulled it off.*

Paul describes the first milestone as proof-of-concept work, explicitly not production ready. The blog identifies the model and data team’s work as the star of the milestone. Laura: this is not an attempt to compete with foundation labs. We are trying to get interesting results for ourselves, while building the skills and community to keep going. Avoid claiming benchmark superiority or implying that the milestone was a finished product. Source: https://satyrn.ai/blog/2026/from-a-talk-a-community/

## 10. What lives where?

Section 4: 4 minutes including the dataset viewer and updates. Pi and Ollama are external tools. The Pi plugin lives inside the Engine repository. This is the complete project map from the handoff, preserving its hierarchy and contents.

## 11. Small models. Current Python.

Published model names verified against the Satyrn website models page. This is specialization of existing models, not training foundation models from scratch. The project has datasets for Python 3.14 and 3.15. A training configuration is not evidence of a released model. Do not claim Mellum is released. Current community size and Discord updates remain pending and are intentionally omitted from the visible slides. Source: https://satyrn.ai/projects/models/

## 12. What are we teaching it?

If the dataset viewer is already running, switch to it here and inspect one example. Otherwise use this slide and the repository link. The dataset viewer renders generated JSONL datasets. Training work and the tutorial live in satyrn-models. Dataset files in this checkout are Git LFS pointers, so no invented sample or screenshot is used. Source: https://github.com/satyrn-ai/satyrn-models/blob/main/corpus_builder/frontend/README.md  Source: https://github.com/satyrn-ai/satyrn-models/blob/main/docs/trainer_tutorial.md

## 13. The GPT baseline

GPT baseline: around 3 minutes including the result. Show this before the live Satyrn demo so the comparison is clear. Approved experiment from the separate benchmark session. Requested selectors: gpt-6.1-sol and gpt-6-astra, medium reasoning. Five exact prompts, three repetitions per condition, 30 runs total. No PEP or syntax hint. Fresh sessions inherited platform instructions and could use tools. The full approved prompts are in assets/benchmark-protocol.md. Earlier exploratory runs are excluded.

## 14. GPT benchmark results

Main finding: only 1/30 final answers used the updated syntax. It was gpt-6.1-sol, target Python 3.15, repetition 2, and it checked PEP 798 on the web. All other final answers used nested comprehensions or itertools.chain.from_iterable. The small correctness inset is a sanity check: all 30 passed under Python 3.15.2. Chart and CSV are from the completed benchmark package, version 1, generated November 12. Requested model selectors are shown; exact backend snapshots were not disclosed.

## 15. The interesting part is syntax choice.

This small experiment is about syntax choice, not a claim that the answers were wrong. All 30 functions passed the functional sanity checks. Five final replies contained positive evidence of retrieval; absence of visible evidence does not prove no tools were used. Full tool transcripts, temperature, seeds and exact backend snapshots were unavailable. Use these recorded GPT runs as the baseline for the live Satyrn comparison. Compare the syntax chosen for the same prompt. This is a live comparison, not a controlled measurement of fine-tuning gains.

## 16. Now the same prompt, locally.

Section 5: 4 minutes, including the prompt and discussion. Compare the live Satyrn answer directly with the recorded GPT baseline just shown, focusing on syntax choice. This is the checkpoint Laura was downloading in the setup session. Verify the runner identifies this exact checkpoint before the live demo. One neutral-prompt rehearsal result has now been supplied: the local Satyrn model returned list(itertools.chain.from_iterable(iter(iterables))), using established syntax. Five basic preparation checks passed. This is one rehearsal observation, separate from the 30 recorded GPT runs. Exact code and checkpoint are in assets/local-demo-neutral.md. The Target Python 3.15 rehearsal also returned older chain/tee code, with an unsupported claim about tee, a wrong example call, and a function that prints rather than returning a list. These are demos of failure modes, part of the well-sorta story; the live demo need not produce new syntax to be useful. Use the saved rehearsal observations if there is no time for another generation; they demonstrate failure modes directly. Source: https://huggingface.co/satyrn-ai/Ornith-1.5-9B-py3.15

## 17. The prompt

Use this exact natural-language prompt for the neutral condition. Do not name the PEP or show the reference syntax before generation. Inspect the generated function: does it flatten one level, preserve order, accept generators, return a list? Separately, what syntax did it choose? The other session owns running the local demo.

## 18. A demo of failure modes

Two local rehearsal observations from Laura, separate from the 30 recorded GPT runs. The point here is a demo of failure modes, not proof of general quality or a successful fine-tuning result. Neutral code used chain.from_iterable and passed five basic preparation checks, but its explanation described operations absent from the code. Target Python 3.15 code introduced tee, claimed an extension to accept multiple iterables, called a single-argument function with three positional arguments, and printed the list instead of returning it. The tee claim is labelled unsupported pending the parent’s official-documentation verification. Exact code and prompts are in assets/local-demo-neutral.md and assets/local-demo-python315.md. Tie this back to well, sorta, and why the project needs evals.

## 19. Two valid answers

Both expressions flatten one level of an iterable of iterables. The newer form requires Python 3.15. These are reference examples, not model output. Source: https://peps.python.org/pep-0798/

## 20. Pi + Satyrn Engine

Section 6: 3 minutes. Pi and Ollama are external tools. The Engine is the Python implementation plus a thin TypeScript Pi adapter in packages/engine/. The plugin adds /implement. The contract is shown for confirmation before the Engine runs. The caller reviews the returned candidate. This is a description of the architecture, not a claim that the live setup has succeeded. Source: https://github.com/pauleveritt/satyrn-engine  Source: https://satyrn.ai/projects/engine/

## 21. One task. A reviewable patch.

Optional live demo. Run only if the setup session has verified the Pi plugin. Use the same task, inspect the contract and writable paths, then show the candidate and receipt. Success is pending. If it is not ready, skip this slide and use the following published result. Do not spend the talk debugging installation.

## 22. Does the Engine help it finish?

Published project experiment, not today’s benchmark. Task: selfhost-run-record-gate. Engine commit 23a0ef6. Same model, 48,000 output-token budget, 72 turns. Report dated October 6. One-sided Fisher exact p=0.0043. This concerns delivering a passing patch, not general model capability. A later commit fixed a handoff asymmetry but was not used for these counts. Do not substitute the older 2/24 versus 16/24 headline. Source: https://github.com/pauleveritt/satyrn-evals/blob/main/docs/results/2026-10-06-rrg-delivery.md

## 23. AI by us, for us.

Section 8: around 4 minutes across this slide and the next two. Laura’s thesis: take back our power. The point is not competing directly with foundation labs. It is building skills, knowledge and community. Everyone has jobs and other commitments. We are trying to get interesting, useful results for ourselves.

## 24. Fine-tuning should be something we can learn.

Laura’s direction: build capacity for fine-tuning beyond a small group of ML engineers and demystify it. The open pipeline, datasets, tutorial, eval evidence and community are ways to build that capacity. This is an invitation to learn and contribute, not a claim that all onboarding is already easy. Source: https://github.com/satyrn-ai/satyrn-models/blob/main/docs/trainer_tutorial.md

## 25. There’s room for you.

The project welcomes contributors beyond model trainers. GitHub holds code, issues and durable decisions. Discord is for questions and conversation; follow the current link from the website. Zen is for learning and sharing, Team Compass for team work. Do not invent community-size statistics or Discord anecdotes. Source: https://satyrn.ai/get-involved/

## 26. Say hi.

Three minutes for questions. Useful follow-ups: how to get started, how to contribute without ML experience, why local models, and what the experiments do and do not establish.
