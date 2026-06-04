---
uid: Ans.DataProcessing.Field
---

# Field Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

The field is the main simulation data container.

Results data are defined by values associated to entities (scoping), and these entities are a subset of a model (support)

## Example

```python
my_field = dpf.FieldsFactory.CreateScalarField(num_entities, 'Nodal')

my_field.ComponentCount #returns the nuber of component of the elementary data

my_field.Location

my_field.Scoping

my_field.Unit

my_field.Data #returns the full list of data

my_field.GetEntityDataByIndex(0) #returns the data list for the first entity

my_field.GetEntityDataById(1) #returns the data list for the entity of scoping's id 1
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

Method `GetEntityDataByIndex` data container of the entity asked

```python
result = obj.GetEntityDataByIndex(index)
```

**Parameters:**

- `index` (*int*)

**Returns:** *list*

#### GetEntityDataById

Method `GetEntityDataById` data container of the entity asked

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

Method `Reserve` reserve the data vectors

```python
obj.Reserve(scopingSize, dataSize)
```

**Parameters:**

- `scopingSize` (*int*)
- `dataSize` (*int*)

#### GetHardCopy

Method `GetHardCopy` create a copy of the field by allocating the data size and getting a copy of the scoping

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

Property `Location` describes what kind of entity the results are scoped to

**Type:** *str*

```python
# Get or set the property
value = obj.Location
obj.Location = new_value
```

#### NComp

Property `NComp` number of components by entity

**Type:** *int*

```python
# Get the property (read-only)
value = obj.NComp
```

#### ComponentCount

Property `ComponentCount` number of components by entity

**Type:** *int*

```python
# Get the property (read-only)
value = obj.ComponentCount
```

#### ElementaryDataCount

Property `ElementaryDataCount` number of times numComp can be found in the data container

**Type:** *int*

```python
# Get the property (read-only)
value = obj.ElementaryDataCount
```

#### Data

Property `Data`access the data container row values

 Data can be seen as a list of elementary data (one by scoping id)

**Type:** *list*

```python
# Get or set the property
value = obj.Data
obj.Data = new_value
```

#### ScopingIds

Property `ScopingIds` ids belonging to the scoping, identical to my_field.Scoping.Ids

**Type:** *list*

```python
# Get or set the property
value = obj.ScopingIds
obj.ScopingIds = new_value
```

#### Scoping

Property `Scoping` entities ids representing a subset of the model and on which the data container is scoped

**Type:** *Scoping*

```python
# Get or set the property
value = obj.Scoping
obj.Scoping = new_value
```

#### Unit

Property `unit` unit symbol of the field

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

Property `MeshedRegionSupport` returns the field's support if it's a meshed region

**Type:** *MeshedRegion*

```python
# Get or set the property
value = obj.MeshedRegionSupport
obj.MeshedRegionSupport = new_value
```

#### TimeFreqSupport

Property `TimeFreqSupport` returns the field's support if it's a time freq support

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

Property `Clone` create a copy of the field, change its dimensionnality and allocate the data according to the fields scoping and the new dimensionnality

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
