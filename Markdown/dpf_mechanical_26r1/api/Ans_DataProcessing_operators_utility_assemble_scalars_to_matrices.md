---
uid: Ans.DataProcessing.operators.utility.assemble_scalars_to_matrices
title: assemble_scalars_to_matrices
---

# assemble_scalars_to_matrices Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Take nine scalar fields and assemble them as a 3x3 matrix field. If the 'symmetrical' input is set to true, only six scalar fields are required (xx, yy, zz, xy, xz and yz).   ///available inputs: xx (Field) (optional), yy (Field) (optional), zz (Field) (optional), xy (Field) (optional), yz (Field) (optional), xz (Field) (optional), yx (Field) (optional), zy (Field) (optional), zx (Field) (optional), symmetrical (bool) (optional)
            available outputs: field (Field)

assemble_scalars_to_matrices()
assemble_scalars_to_matrices(xx: object, yy: object, zz: object, xy: object, yz: object, xz: object, yx: object, zy: object, zx: object, symmetrical: object, config: OperatorConfig)
assemble_scalars_to_matrices(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
assemble_scalars_to_matrices()
```

#### Constructor

```python
assemble_scalars_to_matrices(xx, yy, zz, xy, yz, xz, yx, zy, zx, symmetrical, config)
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
assemble_scalars_to_matrices(config)
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
