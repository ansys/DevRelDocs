---
uid: Ans.DataProcessing.TimeFreqScopingFactory
---

# *class* TimeFreqScopingFactory()

Helpers to create time scoping inputs

**Example:**

```python
my_displacement = dpf.operators.result.displacement(TimeFreqScopingFactory.ScopingByLoadStep(2))

my_displacement = dpf.operators.result.displacement(TimeFreqScopingFactory.ScopingBySet([1,2,3]))
```

## Methods

#### ScopingByLoadStep(loadStep: int) -> Scoping

Method `ScopingByLoadStep` create time/freq scoping to get results by loadstep

**Parameters:**

* **loadStep** - load step id (from 1 to number of loadstep)

**Example:**

```python
my_displacement = dpf.operators.result.displacement(TimeFreqScopingFactory.ScopingByLoadStep(2))
```

#### ScopingByLoadSteps(loadSteps: list) -> Scoping

**Parameters:**

* **loadSteps**

#### ScopingBySet(cumulativeSet: int) -> Scoping

Method `ScopingBySet` create time/freq scoping to get results by time/freq set

**Parameters:**

* **cumulativeSet** - cumulative set id (from 1 to number of time/freq sets)

**Example:**

```python
my_displacement = dpf.operators.result.displacement(TimeFreqScopingFactory.ScopingBySet(2))
```

#### ScopingBySets(cumulativeSets: list) -> Scoping

**Parameters:**

* **cumulativeSets**

#### ScopingByStepAndSubstep(loadStepId: int, subsetId: int, timeFreqSupport: TimeFreqSupport) -> Scoping

Method `ScopingByStepAndSubstep` create time/freq scoping by step and substep

**Parameters:**

* **loadStepId** - load step id (from 1 to number of loadstep)
* **subsetId** - cumulative set id (from 1 to number of time/freq sets in the step) of the step
* **timeFreqSupport** - Time freq support of the model

**Example:**

```python
my_displacement = dpf.operators.result.displacement(TimeFreqScopingFactory.ScopingByStepAndSubstep(step, substep, model.TimeFreqSupport))
```

#### ScopingOnAllTimeFreqs(timeFreqSupport: TimeFreqSupport) -> Scoping

Method `ScopingOnAllTimeFreqs` creates time/freq scoping for all time or frequency sets

**Parameters:**

* **timeFreqSupport** - Time freq support of the model

**Example:**

```python
my_displacement = dpf.operators.result.displacement(TimeFreqScopingFactory.ScopingOnAllTimeFreqs(model.TimeFreqSupport))
```
