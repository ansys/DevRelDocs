---
uid: Ans.DataProcessing.operators.scoping.split_on_property_type
---

# split_on_property_type Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

Splits a given scoping or the mesh scoping (nodal or elemental) on given properties (elshape and/or material, since 2025R1 it supports any scalar property field name contained in the mesh property fields) and returns a scopings container with those split scopings.

available inputs: `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion), `requested_location` (string), `skin_case` (Int32) (optional), `label1` (string) (optional), `label2` (string) (optional)

available outputs: `mesh_scoping` (ScopingsContainer)

## Example

```python
op = split_on_property_type()

op = split_on_property_type(mesh_scoping=my_mesh_scoping,mesh=my_mesh,requested_location=my_requested_location,skin_case=my_skin_case,label1=my_label1,label2=my_label2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh_scoping

Scoping

**Type:** *LinkableInput*

### mesh

mesh region

**Type:** *LinkableInput*

### requested_location

location (default is elemental)

**Type:** *LinkableInput*

### skin_case

set to 0: to have skin elements in their own group, 1: merge skin and solid elements, 2: merge skin and shell elements (default)

**Type:** *LinkableInput*

### label1

properties to apply the filtering 'mat' and/or 'elshape' (since 2025R1 it supports any property name contained in the mesh property fields) (default is 'elshape')

**Type:** *LinkableInput*

### label2

properties to apply the filtering 'mat' and/or 'elshape' (since 2025R1 it supports any property name contained in the mesh property fields) (default is 'elshape')

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
split_on_property_type()
```

#### Constructor

```python
split_on_property_type(mesh_scoping, mesh, requested_location, skin_case, label1, label2, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `mesh` (*object*)
- `requested_location` (*object*)
- `skin_case` (*object*)
- `label1` (*object*)
- `label2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
split_on_property_type(config)
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
