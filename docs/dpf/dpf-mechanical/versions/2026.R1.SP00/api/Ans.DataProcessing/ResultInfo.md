---
uid: Ans.DataProcessing.ResultInfo
---

# ResultInfo Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

Entity describing what the result files contains: the available results, the unit system, the analysis type...

## Example

```python
my_model = Ans.DataProcessing.Model(r"../.../file.rst")

my_result_info = my_model.ResultInfo

my_result_info.AnalysisType

my_result_info.PhysicsType

my_result_info.UnitSystem

results_list = my_result_info.Results

results_list[0].Name

results_list[0].Homogeneity
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```python
ResultInfo(pResultInfo)
```

**Parameters:**

- `pResultInfo` (*IntPtr*)

## Methods

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### AnalysisType

**Type:** *AnalysisType*

```python
# Get the property (read-only)
value = obj.AnalysisType
```

#### PhysicsType

**Type:** *PhysicsType*

```python
# Get the property (read-only)
value = obj.PhysicsType
```

#### UnitSystem

Property `UnitSystem` describes the unit system used with its principal units

**Type:** *str*

```python
# Get the property (read-only)
value = obj.UnitSystem
```

#### SolverVersion

Property `SolverVersion` describes the version (MAJOR.MINOR format) of the solver

**Type:** *str*

```python
# Get the property (read-only)
value = obj.SolverVersion
```

#### SolverDateTime

Property `SolverDateTime` gives the solver date/time information

**Type:** *str*

```python
# Get the property (read-only)
value = obj.SolverDateTime
```

#### UserName

Property `UserName` describes the user name

**Type:** *str*

```python
# Get the property (read-only)
value = obj.UserName
```

#### JobName

Property `JobName` describes the job name

**Type:** *str*

```python
# Get the property (read-only)
value = obj.JobName
```

#### ProductName

Property `ProductName` describes product name

**Type:** *str*

```python
# Get the property (read-only)
value = obj.ProductName
```

#### MainTitle

Property `MainTitle` describes main title

**Type:** *str*

```python
# Get the property (read-only)
value = obj.MainTitle
```

#### AnsysUnitSystemInt

Property `AnsysUnitSystemInt` int used by ansys for the unit system

**Type:** *int*

```python
# Get the property (read-only)
value = obj.AnsysUnitSystemInt
```

#### ResultCount

Property `ResultCount` number of available results

**Type:** *int*

```python
# Get the property (read-only)
value = obj.ResultCount
```

#### Results

Property `Results` list of results available

**Type:** *list*

```python
# Get the property (read-only)
value = obj.Results
```

#### HasCyclic

Property `HasCyclic` returns true if the result file has cyclic symmetry (or multistage)

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasCyclic
```

#### CyclicSupport

Property `CyclicSupport` returns the cyclic support if the result file has cyclic symmetry (or multistage).

The CyclicSupport contains information relevant for cyclic expansion

**Type:** *CyclicSupport*

```python
# Get the property (read-only)
value = obj.CyclicSupport
```

#### CyclicSymmetryType

Property `HasCyclic` returns "single_stage", "multi_stage" or "not_cyclic"

**Type:** *str*

```python
# Get the property (read-only)
value = obj.CyclicSymmetryType
```
