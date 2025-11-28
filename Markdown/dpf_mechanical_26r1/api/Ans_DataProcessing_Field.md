---
uid: Ans.DataProcessing.Field
title: Field
---

# Field Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

The field is the main simulation data container.
            Results data are defined by values associated to entities (scoping), and these entities are a subset of a model (support)

Field(pField: IntPtr)
Field()


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```python
Field(pField)
```

**Parameters:**

- `pField` (*IntPtr*)

#### Constructor

```python
Field()
```

## Methods

#### GetEntityDataByIndex

```python
result = obj.GetEntityDataByIndex(index)
```

**Parameters:**

- `index` (*int*)

**Returns:** *list*

#### GetEntityDataById

```python
result = obj.GetEntityDataById(id)
```

**Parameters:**

- `id` (*int*)

**Returns:** *list*

#### UpdateEntityDataByEntityIndex

```python
obj.UpdateEntityDataByEntityIndex(EntityIndex, data)
```

**Parameters:**

- `EntityIndex` (*int*)
- `data` (*list*)

#### Add

```python
obj.Add(id, data)
```

**Parameters:**

- `id` (*int*)
- `data` (*list*)

#### Reserve

```python
obj.Reserve(scopingSize, dataSize)
```

**Parameters:**

- `scopingSize` (*int*)
- `dataSize` (*int*)

#### GetHardCopy

```python
result = obj.GetHardCopy(copyData)
```

**Parameters:**

- `copyData` (*bool* (optional))

**Returns:** *Field*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*float*)

**Returns:** *BaseOperator*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*float*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*list*)

**Returns:** *BaseOperator*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*list*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*float*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*float*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*list*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*list*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*float*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*float*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*list*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*list*)

**Returns:** *BaseOperator*

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### Location

**Type:** *str*

```python
# Get or set the property
value = obj.Location
obj.Location = new_value
```

#### NComp

**Type:** *int*

```python
# Get the property (read-only)
value = obj.NComp
```

#### ComponentCount

**Type:** *int*

```python
# Get the property (read-only)
value = obj.ComponentCount
```

#### ElementaryDataCount

**Type:** *int*

```python
# Get the property (read-only)
value = obj.ElementaryDataCount
```

#### Data

**Type:** *list*

```python
# Get or set the property
value = obj.Data
obj.Data = new_value
```

#### ScopingIds

**Type:** *list*

```python
# Get or set the property
value = obj.ScopingIds
obj.ScopingIds = new_value
```

#### Scoping

**Type:** *Scoping*

```python
# Get or set the property
value = obj.Scoping
obj.Scoping = new_value
```

#### Unit

**Type:** *str*

```python
# Get or set the property
value = obj.Unit
obj.Unit = new_value
```

#### eShellLayers

**Type:** *shellLayers*

```python
# Get or set the property
value = obj.eShellLayers
obj.eShellLayers = new_value
```

#### MeshedRegionSupport

**Type:** *MeshedRegion*

```python
# Get or set the property
value = obj.MeshedRegionSupport
obj.MeshedRegionSupport = new_value
```

#### TimeFreqSupport

**Type:** *TimeFreqSupport*

```python
# Get or set the property
value = obj.TimeFreqSupport
obj.TimeFreqSupport = new_value
```

#### Name

**Type:** *str*

```python
# Get or set the property
value = obj.Name
obj.Name = new_value
```

#### Clone

**Type:** *FieldCloning*

```python
# Get the property (read-only)
value = obj.Clone
```

#### Id

**Type:** *int*

```python
# Get the property (read-only)
value = obj.Id
```
