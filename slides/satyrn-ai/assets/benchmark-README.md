# Satyrn flatten prompt benchmark

> This is a copy of the original report. The complete files listed below live in the separate `satyrn-benchmark-results.zip` package. This slide directory includes only the chart, summary, protocol and runtime record.

**Only 1/30 answers used Python 3.15 starred list-comprehension syntax, and that answer used web retrieval.**

Functional correctness was a sanity check: all 30 implementations passed.

Two GPT model selectors received the same flattening task in five versions, with three fresh sessions per condition. Each session inherited platform instructions and could use tools. The user prompts did not name the PEP or show the syntax. Earlier exploratory runs are excluded.

| Prompt cue | gpt-6.1-sol | gpt-6-astra |
|---|---|---|
| Neutral | 3 nested comprehensions | 3 nested comprehensions |
| Modern practices | 3 nested comprehensions | 3 nested comprehensions |
| Engineering practice | 3 `chain.from_iterable` | 2 `chain.from_iterable`, 1 nested comprehension |
| Latest APIs | 3 `chain.from_iterable` | 3 `chain.from_iterable` |
| Target Python 3.15 | 2 nested comprehensions, 1 starred comprehension | 3 nested comprehensions |

The one starred answer was gpt-6.1-sol repetition 2 under “Target Python 3.15.” It cited the PEP after checking it, so the observation includes retrieval. Another run, Sol latest APIs repetition 1, mentioned discovering the new syntax in an intermediate message and delivered `chain.from_iterable` in the final reply. Five final replies contain evidence of retrieval, four under latest APIs and one under Python version.

All 30 final answers contained exactly one function implementation. Python 3.15.2 executed those functions as given, including cases with generator input and nested elements that must be preserved. There were no extraction or execution failures. The scorer also checks a working starred reference and a failing control.

## Files

- `protocol.md` has the approved prompts and procedure.
- `raw/` holds 30 JSON records with exact prompts, final replies as returned, visible intermediate messages where supplied, requested selectors, effort, run IDs, and citations where present.
- `results.csv` has one row per run and each functional check for its first implementation.
- `summary.csv` has counts by model and prompt, with the denominator for each condition.
- `implementation-scores.json` has individual extraction and execution results.
- `score.py` reproduces the scoring under Python 3.15. Run it on the supplied records, which were inspected before execution. It executes the extracted code.
- `runtime.json` records the interpreter used.
- `benchmark-chart.png` and `benchmark-chart.svg` focus on updated-syntax use, with a small correctness inset.
- `functional-sanity-check.png` and `.svg` provide the correctness chart separately.
- `plot_results.py` regenerates the charts from `summary.csv`.

This is an exploratory comparison for one task, with three generations per model–prompt combination. The tool-use flag records positive visible evidence. A zero does not establish that a session used no tools. Full tool transcripts, exact backend snapshots, temperature, and random seeds were not available. The benchmark measures syntax choice separately from correctness. It does not measure Satyrn fine-tuning gains or broad coding quality.
