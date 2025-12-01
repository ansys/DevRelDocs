---
uid: Ans.DataProcessing.TimeFreqScopingFactory
---

# TimeFreqScopingFactory Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Helpers to create time scoping inputs



## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Methods

#### ScopingByLoadStep

```python
result = obj.ScopingByLoadStep(loadStep)
```

**Parameters:**

- `loadStep` (*int*)

**Returns:** *Scoping*

#### ScopingByLoadSteps

```python
result = obj.ScopingByLoadSteps(loadSteps)
```

**Parameters:**

- `loadSteps` (*list*)

**Returns:** *Scoping*

#### ScopingBySet

```python
result = obj.ScopingBySet(cumulativeSet)
```

**Parameters:**

- `cumulativeSet` (*int*)

**Returns:** *Scoping*

#### ScopingBySets

```python
result = obj.ScopingBySets(cumulativeSets)
```

**Parameters:**

- `cumulativeSets` (*list*)

**Returns:** *Scoping*

#### ScopingByStepAndSubstep

```python
result = obj.ScopingByStepAndSubstep(loadStepId, subsetId, timeFreqSupport)
```

**Parameters:**

- `loadStepId` (*int*)
- `subsetId` (*int*)
- `timeFreqSupport` (*TimeFreqSupport*)

**Returns:** *Scoping*

#### ScopingByStepAndSubstep

```python
result = obj.ScopingByStepAndSubstep(loadStepId, subsetId, model)
```

**Parameters:**

- `loadStepId` (*int*)
- `subsetId` (*int*)
- `model` (*Model*)

**Returns:** *Scoping*

#### ScopingOnAllTimeFreqs

```python
result = obj.ScopingOnAllTimeFreqs(timeFreqSupport)
```

**Parameters:**

- `timeFreqSupport` (*TimeFreqSupport*)

**Returns:** *Scoping*

#### ScopingOnAllTimeFreqs

```python
result = obj.ScopingOnAllTimeFreqs(model)
```

**Parameters:**

- `model` (*Model*)

**Returns:** *Scoping*
