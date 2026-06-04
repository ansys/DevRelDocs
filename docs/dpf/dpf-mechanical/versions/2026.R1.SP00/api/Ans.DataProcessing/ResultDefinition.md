---
uid: Ans.DataProcessing.ResultDefinition
---

# ResultDefinition Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

ResultDefinition()


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Constructors

#### Constructor

```python
ResultDefinition()
```

## Methods

#### ResultDefinition_SetCriteria

```python
obj.ResultDefinition_SetCriteria(resDef, sCriteria, errorSize, sError)
```

**Parameters:**

- `resDef` (*IntPtr*)
- `sCriteria` (*str*)
- `errorSize` (*Int32&* (out))
- `sError` (*String&* (out))

#### ResultDefinition_SetSubCriteria

```python
obj.ResultDefinition_SetSubCriteria(resDef, sSubCriteria, errorSize, sError)
```

**Parameters:**

- `resDef` (*IntPtr*)
- `sSubCriteria` (*str*)
- `errorSize` (*Int32&* (out))
- `sError` (*String&* (out))

#### ResultDefinition_SetLocation

```python
obj.ResultDefinition_SetLocation(resDef, sLocation, errorSize, sError)
```

**Parameters:**

- `resDef` (*IntPtr*)
- `sLocation` (*str*)
- `errorSize` (*Int32&* (out))
- `sError` (*String&* (out))

#### ResultDefinition_SetStep

```python
obj.ResultDefinition_SetStep(resDef, iStep, errorSize, sError)
```

**Parameters:**

- `resDef` (*IntPtr*)
- `iStep` (*int*)
- `errorSize` (*Int32&* (out))
- `sError` (*String&* (out))

#### ResultDefinition_SetMeshScoping

```python
obj.ResultDefinition_SetMeshScoping(resDef, scoping, errorSize, sError)
```

**Parameters:**

- `resDef` (*IntPtr*)
- `scoping` (*IntPtr*)
- `errorSize` (*Int32&* (out))
- `sError` (*String&* (out))

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### FilePath

**Type:** *str*

```python
# Set the property (write-only)
obj.FilePath = new_value
```

#### Criteria

**Type:** *str*

```python
# Get or set the property
value = obj.Criteria
obj.Criteria = new_value
```

#### SubCriteria

**Type:** *str*

```python
# Get or set the property
value = obj.SubCriteria
obj.SubCriteria = new_value
```

#### Location

**Type:** *str*

```python
# Get or set the property
value = obj.Location
obj.Location = new_value
```

#### step

**Type:** *int*

```python
# Get or set the property
value = obj.step
obj.step = new_value
```

#### Scoping

**Type:** *Scoping*

```python
# Get or set the property
value = obj.Scoping
obj.Scoping = new_value
```
