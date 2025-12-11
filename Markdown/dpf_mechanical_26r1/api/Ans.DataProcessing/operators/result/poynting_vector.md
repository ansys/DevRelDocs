---
uid: Ans.DataProcessing.operators.result.poynting_vector
---

# poynting_vector Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Compute the Poynting Vector

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer), `fields_containerC` (FieldsContainer), `fields_containerD` (FieldsContainer), `meshed_region` (MeshedRegion) (optional), `int32` (Int32) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = poynting_vector()

op = poynting_vector(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB,fields_containerC=my_fields_containerC,fields_containerD=my_fields_containerD,meshed_region=my_meshed_region,int32=my_int32)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

**Type:** *LinkableInput*

### fields_containerC

**Type:** *LinkableInput*

### fields_containerD

**Type:** *LinkableInput*

### meshed_region

the mesh region in this pin have to be boundary or skin mesh

**Type:** *LinkableInput*

### int32

load step number, if it's specified, the Poynting Vector is computed only on the substeps of this step

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
poynting_vector()
```

#### Constructor

```python
poynting_vector(fields_containerA, fields_containerB, fields_containerC, fields_containerD, meshed_region, int32, config)
```

**Parameters:**

- `fields_containerA` (*object*)
- `fields_containerB` (*object*)
- `fields_containerC` (*object*)
- `fields_containerD` (*object*)
- `meshed_region` (*object*)
- `int32` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
poynting_vector(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
