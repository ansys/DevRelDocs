---
uid: Ans.DataProcessing.operators.math.unit_convert
title: unit_convert
---

# unit_convert Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Converts an input field/fields container or mesh of a given unit to another unit.   ///available inputs: entity_to_convert (Field, FieldsContainer, MeshedRegion, MeshesContainer), unit_name (string, Int32, Field)
            available outputs: converted_entity (Field ,FieldsContainer ,MeshedRegion ,MeshesContainer)

unit_convert()
unit_convert(entity_to_convert: object, unit_name: object, config: OperatorConfig)
unit_convert(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
unit_convert()
```

#### Constructor

```python
unit_convert(entity_to_convert, unit_name, config)
```

**Parameters:**

- `entity_to_convert` (*object*)
- `unit_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
unit_convert(config)
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
