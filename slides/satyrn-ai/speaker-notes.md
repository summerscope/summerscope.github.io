# Satyrn — speaker notes

## 1. hello

30 minutes including 3 minutes for questions. Section 1: 3 minutes including the opening. Smallish open models, built by and for Python developers.

## 2. challenge

July 17 closing keynote. This is a paraphrase of the challenge, not a verbatim quote. The blog describes the target as October 1. Source:  https://satyrn.ai/blog/2026/from-a-talk-a-community/  

## 3. after-keynote

People who showed up after the talk. Many fewer people became working contributors. Do not equate this gathering with active contributors or a current community count. Photo from the Satyrn website repository. Source:  https://satyrn.ai/blog/2026/from-a-talk-a-community/  

## 4. meeting-paul

 Jody, a mutual friend, introduced me to Paul at EuroPython. We chatted before his keynote, and he was asking how spicy to go. I encouraged him. We could find ways to be spicy without actively biting the hand that feeds us, shall we say. I am always a fan of spiciness.  Source: Laura’s personal account, supplied for this talk. The heading paraphrases the conversation, rather than claiming a verbatim quotation. 

## 5. why-it-landed

 I loved EuroPython and the community there. But I was also feeling disempowered and disillusioned. It felt like we were not really grappling with the larger forces at play. There was a lot of putting our heads in the sand and hoping the shit would blow over. That felt like a bad response to the moment.  I was also in the middle of leaving my job and leaving the country, and feeling a little adrift. It was really nice to meet a community that spoke to the same ideas as me, and gave me something positive to focus on.  Source: Laura’s personal account. Section 2 runs about two minutes including the design-work slide. 

## 6. sketches

Three original sketches supplied by Laura. Briefly show the early directions before the final mark.

## 7. my-part

 Working with Paul and Carol on the brand and website. Keep this section brief, around 45–60 seconds. The previous slide shows three original early sketches.  We went through a lot of iterations: more hand-drawn and literal options, including a python and yin-yang combination. An earlier version had a balloon with an S curve in its string and a Polynesian girl character. It was cute and had character, but to me it felt a little too childish, and did not embody the visual history of Jupyter or the Python community.  The combination of rough, hand-drawn lettering and a geometric graphic mark felt like the right balance: the community, Python’s scientific and academic background, and the connection to Jupyter. Jupyter notebooks and the Jupyter universe were design references.  We ended up with a fairly literal Saturn, but with negative space, hints of balance and yin-yang, and an S curving around the planet. There are quite a lot of ideas in a simple mark. That is something I am happy with: a strong brand mark can be simple and allow several interpretations.  Source: Laura’s personal account. Brand image is the actual social preview asset from satyrn-ai/satyrn-website, src/assets/og-image.jpg. Early sketches were supplied by Laura. 

## 8. teams

Section 3: around 3–4 minutes across these three slides. Paul’s blog describes teams forming immediately after EuroPython. He went on holiday, but people sprang into action. Michał Karzyński’s team built fine-tuning infrastructure and datasets for Python 3.14 and 3.15. Keep the story about parallel contributions rather than one person delivering everything. Source:  https://satyrn.ai/blog/2026/from-a-talk-a-community/  

## 9. false-starts

Paul describes repeatedly announcing that the Engine was almost ready, then finding problems after overnight eval runs. This continued until the third week of September. His account says the eval harness became more valuable than the Engine at that point: it helped establish whether an idea actually worked. Meanwhile, Michał’s team was building training infrastructure and data. Laura’s framing: everyone is busy, everyone has jobs and a lot on their plate. Progress came in parallel, at volunteer pace. Source:  https://satyrn.ai/blog/2026/from-a-talk-a-community/  

## 10. first-milestone

Paul describes the first milestone as proof-of-concept work, explicitly not production ready. The blog identifies the model and data team’s work as the star of the milestone. Laura: this is not an attempt to compete with foundation labs. We are trying to get interesting results for ourselves, while building the skills and community to keep going. Avoid claiming benchmark superiority or implying that the milestone was a finished product. Source:  https://satyrn.ai/blog/2026/from-a-talk-a-community/  

## 11. project-map

Section 4: 4 minutes including the dataset viewer and updates. Pi and Ollama are external tools. The Pi plugin lives inside the Engine repository. This is the complete project map from the handoff, preserving its hierarchy and contents.

## 12. models-now

Published model names verified against the Satyrn website models page. This is specialization of existing models, not training foundation models from scratch. The project has datasets for Python 3.14 and 3.15. A training configuration is not evidence of a released model. Do not claim Mellum is released. Current community size and Discord updates remain pending and are intentionally omitted from the visible slides. Source:  https://satyrn.ai/projects/models/  

## 13. dataset-viewer

If the dataset viewer is already running, switch to it here and inspect one example. Otherwise use this slide and the repository link. The dataset viewer renders generated JSONL datasets. Training work and the tutorial live in satyrn-models. Dataset files in this checkout are Git LFS pointers, so no invented sample or screenshot is used. Source:  https://github.com/satyrn-ai/satyrn-models/blob/main/corpus_builder/frontend/README.md   Source:  https://github.com/satyrn-ai/satyrn-models/blob/main/docs/trainer_tutorial.md  

## 14. syntax-intro

The neutral prompt does not require new syntax. An older answer alone does not prove the model does not know it: we measure whether it chooses new syntax under these prompts. Correct older idioms already satisfy the task; newer features must be learned and applied correctly, and a version hint can produce confident unsupported claims. Fine-tuning aims to teach newer Python knowledge, but training does not guarantee generalization. The goal is an improvement over the foundation-model baseline, not a proven win. A function can be correct while using older syntax. Inspect syntax choice first, then functional correctness and claims about APIs. Python 3.15 starred comprehensions are specified by PEP 798: https://peps.python.org/pep-0798/ .

## 15. comparison

GPT baseline: around 3 minutes including the result. Show this before the live Satyrn demo so the comparison is clear. Approved experiment from the separate benchmark session. Requested selectors: gpt-6.1-sol and gpt-6-astra, medium reasoning. Five exact prompts, three repetitions per condition, 30 runs total. No PEP or syntax hint. Fresh sessions inherited platform instructions and could use tools. The full approved prompts are in assets/benchmark-protocol.md. Earlier exploratory runs are excluded.

## 16. benchmark-result

Main finding: only 1/30 final answers used the updated syntax. It was gpt-6.1-sol, target Python 3.15, repetition 2, and it checked PEP 798 on the web. All other final answers used nested comprehensions or itertools.chain.from_iterable. The small correctness inset is a sanity check: all 30 passed under Python 3.15.2. Chart and CSV are from the completed benchmark package, version 1, generated November 12. Requested model selectors are shown; exact backend snapshots were not disclosed. Recorded GPT runs are the baseline for the same prompt against Satyrn live. This is an exploratory single-task comparison, not a controlled measurement of fine-tuning gains.

## 17. local-demo

Section 5: live local demo. Open the known Ollama checkpoint hf.co/satyrn-ai/Ornith-1.5-9B-py3.15:Q4_K_M. Run the neutral prompt on the next slide, then start a fresh chat for the Target Python 3.15 prompt. Compare syntax choice with the recorded GPT baseline. Inspect the actual response; do not assume a particular result.

## 18. the-prompt

Run ollama run hf.co/satyrn-ai/Ornith-1.5-9B-py3.15:Q4_K_M. Paste the exact neutral prompt shown. Inspect new Python 3.15 syntax first, functional sanity second. Compare with the recorded GPT baseline; describe only the result that appears.

## 19. target-prompt

Exit the prior chat and run a fresh invocation: ollama run hf.co/satyrn-ai/Ornith-1.5-9B-py3.15:Q4_K_M. Paste the exact Target Python 3.15 prompt shown. Inspect new syntax first, functional sanity second. Compare with the neutral answer and recorded GPT baseline. Do not assume success or failure.

## 20. two-answers

Both expressions flatten one level of an iterable of iterables. The newer form requires Python 3.15. These are reference examples, not model output. Source:  https://peps.python.org/pep-0798/  

## 21. engine

Section 6: 3 minutes. Pi and Ollama are external tools. The Engine is the Python implementation plus a thin TypeScript Pi adapter in packages/engine/. The plugin adds /implement. The contract is shown for confirmation before the Engine runs. The caller reviews the returned candidate. This is a description of the architecture, not a claim that the live setup has succeeded. Source:  https://github.com/pauleveritt/satyrn-engine   Source:  https://satyrn.ai/projects/engine/  

## 22. plugin-demo

Optional live demo. Run only if the setup session has verified the Pi plugin. Use the same task, inspect the contract and writable paths, then show the candidate and receipt. Success is pending. If it is not ready, skip this slide and use the following published result. Do not spend the talk debugging installation.

## 23. engine-experiment

Published October 6 experiment on selfhost-run-record-gate. Implement JSON run-record loading and validation, gate rules and CLI integration in the eval project. Both arms use the same Ornith 1.5 9B model, task and per-run budget: 48,000 output tokens and 72 turns. 36 runs per arm. Compare bare Pi against Pi plus pinned Engine 23a0ef6. The endpoint is a delivered patch passing hidden tests within budget. Our flatten experiment measures syntax choice; this experiment measures agent delivery. Limited to one task, one model and one budget. Source: https://github.com/pauleveritt/satyrn-evals/blob/main/docs/results/2026-10-06-rrg-delivery.md ; task: https://github.com/pauleveritt/satyrn-evals/blob/main/tools/task_specs/selfhost-run-record-gate.json .

## 24. engine-evidence

Published project experiment, not today’s benchmark. Task: selfhost-run-record-gate. Engine commit 23a0ef6. Same model, 48,000 output-token budget, 72 turns. Report dated October 6. One-sided Fisher exact p=0.0043. Both arms usually reached passing code; the difference was finishing and stopping before the budget ran out. This concerns delivering a passing patch, not general model capability or fine-tuning. A later commit fixed a handoff asymmetry but was not used for these counts. Do not substitute the older 2/24 versus 16/24 headline. Source:  https://github.com/pauleveritt/satyrn-evals/blob/main/docs/results/2026-10-06-rrg-delivery.md  

## 25. our-way

Section 8: around 4 minutes across this slide and the next two. Laura’s thesis: take back our power. The point is not competing directly with foundation labs. It is building skills, knowledge and community. Everyone has jobs and other commitments. We are trying to get interesting, useful results for ourselves.

## 26. demystify

Laura’s direction: build capacity for fine-tuning beyond a small group of ML engineers and demystify it. The open pipeline, datasets, tutorial, eval evidence and community are ways to build that capacity. This is an invitation to learn and contribute, not a claim that all onboarding is already easy. Source:  https://github.com/satyrn-ai/satyrn-models/blob/main/docs/trainer_tutorial.md  

## 27. join

The project welcomes contributors beyond model trainers. GitHub holds code, issues and durable decisions. Discord is for questions and conversation; follow the current link from the website. Zen is for learning and sharing, Team Compass for team work. Do not invent community-size statistics or Discord anecdotes. Source:  https://satyrn.ai/get-involved/  

## 28. questions

Three minutes for questions. Useful follow-ups: how to get started, how to contribute without ML experience, why local models, and what the experiments do and do not establish.
