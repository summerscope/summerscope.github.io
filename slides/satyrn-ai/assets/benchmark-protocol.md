# Iterable benchmark — approved protocol

Status: approved by Laura in the Nov 12 session. The 30 benchmark runs follow the approved prompts and settings below.

## Exact prompts

Each run receives one prompt below, in a fresh session.

### 1. Neutral

Write a Python function that flattens an iterable of iterables into a single list.

### 2. Modern practices

Write a Python function that flattens an iterable of iterables into a single list. Use modern Python practices.

### 3. Engineering practice

Write a Python function that flattens an iterable of iterables into a single list. Use engineering best practice.

### 4. Latest APIs

Write a Python function that flattens an iterable of iterables into a single list. Use the latest Python APIs.

### 5. Python version

Write a Python function that flattens an iterable of iterables into a single list. Target Python 3.15.

## Run matrix

| Requested model selector | Reasoning effort | Prompts | Repetitions per prompt | Total |
|---|---|---:|---:|---:|
| gpt-6.1-sol | medium | 5 | 3 | 15 |
| gpt-6-astra | medium | 5 | 3 | 15 |
| Total | | | | 30 |

Use clean sessions with no inherited conversation or reference solution. Preserve exact prompts and complete answers, including explanations. Do not add a code-only instruction to the user prompt.

The model selectors above are available runtime choices. Log the requested selector and any actual model identity disclosed by the runtime. State when snapshot identity or temperature is unavailable. These sessions can inherit platform instructions, so describe the experiment as a comparison in this agent environment.

Record any tool use. Do not silently replace failed or interrupted runs.

## Scoring

Functional correctness and syntax choice are separate results.

| Measure | Check |
|---|---|
| Basic flattening | [[1, 2], [3], []] returns [1, 2, 3] |
| Empty input | [] returns [] |
| Order | Preserve the order of elements and inner iterables |
| Outer iterable | Accept a generator of inner iterables |
| Inner iterables | Accept tuples and generators |
| One-level flattening | Preserve nested elements beyond the outer two levels |
| Output type | Return a list |
| New syntax | Record whether the answer uses a starred list-comprehension element |

Use Python 3.15 for functional execution. Record extraction or execution failures explicitly. Adapt the test harness to the function name the model chooses without changing its implementation.

Input mutation and invalid-input exceptions can be recorded as observations. They are not additional pass/fail requirements.

Both of these are valid implementations:

```python
[item for iterable in iterables for item in iterable]
```

```python
[*iterable for iterable in iterables]
```

Choosing older syntax is not a correctness failure.

If an answer offers multiple implementations, preserve and label each. Report whether the new syntax was offered anywhere and which implementation was presented first. Do not silently select the most favourable option.

## Deliverables

- Exact prompt and raw response for every run.
- Requested model, effort, run identifier, repetition and available runtime metadata.
- Functional check results and syntax classification for each answer.
- Summary table by model and prompt variant.
- Short Markdown explanation of observed results and limitations.
- Machine-readable results for later reuse.

## Interpretation

This is a small exploratory comparison on one task. Three repetitions per condition do not establish general model quality.

A fine-tuning benefit must be tested separately against the matching base checkpoint with the same prompts and comparable settings. New-syntax use alone does not establish superior engineering quality.

## Earlier runs

Earlier exploratory generations, including the two launched before the approval requirement was respected, are excluded from this benchmark. They used different prompts and incompletely identified model settings.

## Approval

Laura must approve this prompt set, model pair, repetition count and scoring before execution. Once approved, the agent owns all 30 runs, scoring, captured evidence and delivery.
