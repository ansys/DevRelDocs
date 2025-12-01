---
uid: Ans.DataProcessing.operators.geo.rotate_fc
---

# rotate_fc Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Apply a transformation (rotation) matrix on all the fields of a fields container.   ///available inputs: fields_container (FieldsContainer), coordinate_system (Field)
            available outputs: fields_container (FieldsContainer)

rotate_fc()
rotate_fc(fields_container: object, coordinate_system: object, config: OperatorConfig)
rotate_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
rotate_fc()
```

#### Constructor

```python
rotate_fc(fields_container, coordinate_system, config)
```

**Parameters:**

- `fields_container` (*object*)
- `coordinate_system` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
rotate_fc(config)
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
