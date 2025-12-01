---
uid: Ans.DataProcessing.ResultInfo
---

# ResultInfo Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Entity describing what the result files contains: the available results, the unit system, the analysis type...

ResultInfo(pResultInfo: IntPtr)


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

**Type:** *str*

```python
# Get the property (read-only)
value = obj.UnitSystem
```

#### SolverVersion

**Type:** *str*

```python
# Get the property (read-only)
value = obj.SolverVersion
```

#### SolverDateTime

**Type:** *str*

```python
# Get the property (read-only)
value = obj.SolverDateTime
```

#### UserName

**Type:** *str*

```python
# Get the property (read-only)
value = obj.UserName
```

#### JobName

**Type:** *str*

```python
# Get the property (read-only)
value = obj.JobName
```

#### ProductName

**Type:** *str*

```python
# Get the property (read-only)
value = obj.ProductName
```

#### MainTitle

**Type:** *str*

```python
# Get the property (read-only)
value = obj.MainTitle
```

#### AnsysUnitSystemInt

**Type:** *int*

```python
# Get the property (read-only)
value = obj.AnsysUnitSystemInt
```

#### ResultCount

**Type:** *int*

```python
# Get the property (read-only)
value = obj.ResultCount
```

#### Results

**Type:** *list*

```python
# Get the property (read-only)
value = obj.Results
```

#### HasCyclic

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasCyclic
```

#### CyclicSupport

**Type:** *CyclicSupport*

```python
# Get the property (read-only)
value = obj.CyclicSupport
```

#### CyclicSymmetryType

**Type:** *str*

```python
# Get the property (read-only)
value = obj.CyclicSymmetryType
```
