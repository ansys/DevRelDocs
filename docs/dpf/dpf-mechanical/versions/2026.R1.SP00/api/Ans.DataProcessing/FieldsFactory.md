---
uid: Ans.DataProcessing.FieldsFactory
---

# FieldsFactory Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

Helpers to create user defined fields

## Example

```python
my_displacement = dpf.FieldsFactory.Create3DVectorField(numEntities=100)

my_displacement.Scoping.Ids = range(1,101)

my_displacement.Data = my_data

my_stress = dpf.FieldsFactory.CreateTensorField(numEntities=30, locations.elemental_nodal)

my_stress.Add(id=1, data=[1.0,2.0,3.0,4.0, 5.0, 6.0]) # ...
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Methods

#### CreateMatrixField

Method `CreateMatrixField` create a matrix field with reserved size = numEntities

```python
result = obj.CreateMatrixField(numEntities, numLines, numCol, location)
```

**Parameters:**

- `numEntities` (*int*)
- `numLines` (*int*)
- `numCol` (*int*)
- `location` (*str* (optional))

**Returns:** *Field*

#### Create3DVectorField

Method `Create3DVectorField` create a 3D vector field with reserved size = numEntities

```python
result = obj.Create3DVectorField(numEntities, location)
```

**Parameters:**

- `numEntities` (*int*)
- `location` (*str* (optional))

**Returns:** *Field*

#### CreateTensorField

Method `CreateTensorField` create a 3*3 symmetric tensor field with reserved size = numEntities

```python
result = obj.CreateTensorField(numEntities, location)
```

**Parameters:**

- `numEntities` (*int*)
- `location` (*str* (optional))

**Returns:** *Field*

#### CreateScalarField

Method `CreateScalarField` create a scalar field with reserved size = numEntities

```python
result = obj.CreateScalarField(numEntities, location)
```

**Parameters:**

- `numEntities` (*int*)
- `location` (*str* (optional))

**Returns:** *Field*

#### CreateVectorField

Method `CreateVectorField` create a vector field with reserved size = numEntities

```python
result = obj.CreateVectorField(numEntities, numComp, location)
```

**Parameters:**

- `numEntities` (*int*)
- `numComp` (*int*)
- `location` (*str* (optional))

**Returns:** *Field*
