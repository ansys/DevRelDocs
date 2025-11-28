---
uid: Ans.DataProcessing.operators.scoping.split_on_property_type
title: split_on_property_type
---

# split_on_property_type Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Splits a given scoping or the mesh scoping (nodal or elemental) on given properties (elshape and/or material, since 2025R1 it supports any scalar property field name contained in the mesh property fields) and returns a scopings container with those split scopings.   ///available inputs: mesh_scoping (Scoping) (optional), mesh (MeshedRegion), requested_location (string), skin_case (Int32) (optional), label1 (string) (optional), label2 (string) (optional)
            available outputs: mesh_scoping (ScopingsContainer)

split_on_property_type()
split_on_property_type(mesh_scoping: object, mesh: object, requested_location: object, skin_case: object, label1: object, label2: object, config: OperatorConfig)
split_on_property_type(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
