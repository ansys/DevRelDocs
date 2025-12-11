---
uid: Ans.DataProcessing.TimeFreqScopingFactory
---

# TimeFreqScopingFactory Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

Helpers to create time scoping inputs

## Example

```python
my_displacement = dpf.operators.result.displacement(TimeFreqScopingFactory.ScopingByLoadStep(2))

my_displacement = dpf.operators.result.displacement(TimeFreqScopingFactory.ScopingBySet([1,2,3]))
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Methods

#### ScopingByLoadStep

Method `ScopingByLoadStep` create time/freq scoping to get results by loadstep

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

Method `ScopingBySet` create time/freq scoping to get results by time/freq set

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

Method `ScopingByStepAndSubstep` create time/freq scoping by step and substep

```python
result = obj.ScopingByStepAndSubstep(loadStepId, subsetId, timeFreqSupport)
```

**Parameters:**

- `loadStepId` (*int*)
- `subsetId` (*int*)
- `timeFreqSupport` (*TimeFreqSupport*)

**Returns:** *Scoping*

#### ScopingByStepAndSubstep

Method `ScopingByStepAndSubstep` create time/freq scoping by step and substep

```python
result = obj.ScopingByStepAndSubstep(loadStepId, subsetId, model)
```

**Parameters:**

- `loadStepId` (*int*)
- `subsetId` (*int*)
- `model` (*Model*)

**Returns:** *Scoping*

#### ScopingOnAllTimeFreqs

Method `ScopingOnAllTimeFreqs` creates time/freq scoping for all time or frequency sets

```python
result = obj.ScopingOnAllTimeFreqs(timeFreqSupport)
```

**Parameters:**

- `timeFreqSupport` (*TimeFreqSupport*)

**Returns:** *Scoping*

#### ScopingOnAllTimeFreqs

Method `ScopingOnAllTimeFreqs` creates time/freq scoping for all time or frequency sets

```python
result = obj.ScopingOnAllTimeFreqs(model)
```

**Parameters:**

- `model` (*Model*)

**Returns:** *Scoping*
