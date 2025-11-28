---
uid: Ans.DataProcessing.operators.utility.assemble_scalars_to_matrices_fc
title: assemble_scalars_to_matrices_fc
---

# assemble_scalars_to_matrices_fc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Take nine scalar fields container and assemble them as a 3x3 matrix fields. If the 'symmetrical' input is set to true, only six field containers are required (xx, yy, zz, xy, xz and yz).   ///available inputs: xx (FieldsContainer) (optional), yy (FieldsContainer) (optional), zz (FieldsContainer) (optional), xy (FieldsContainer) (optional), yz (FieldsContainer) (optional), xz (FieldsContainer) (optional), yx (FieldsContainer) (optional), zy (FieldsContainer) (optional), zx (FieldsContainer) (optional), symmetrical (bool) (optional)
            available outputs: fields_container (FieldsContainer)

assemble_scalars_to_matrices_fc()
assemble_scalars_to_matrices_fc(xx: object, yy: object, zz: object, xy: object, yz: object, xz: object, yx: object, zy: object, zx: object, symmetrical: object, config: OperatorConfig)
assemble_scalars_to_matrices_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
assemble_scalars_to_matrices_fc()
```

#### Constructor

```python
assemble_scalars_to_matrices_fc(xx, yy, zz, xy, yz, xz, yx, zy, zx, symmetrical, config)
```

**Parameters:**

- `xx` (*object*)
- `yy` (*object*)
- `zz` (*object*)
- `xy` (*object*)
- `yz` (*object*)
- `xz` (*object*)
- `yx` (*object*)
- `zy` (*object*)
- `zx` (*object*)
- `symmetrical` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
assemble_scalars_to_matrices_fc(config)
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
