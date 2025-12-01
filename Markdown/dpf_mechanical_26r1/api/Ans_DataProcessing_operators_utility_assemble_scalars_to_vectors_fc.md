---
uid: Ans.DataProcessing.operators.utility.assemble_scalars_to_vectors_fc
---

# assemble_scalars_to_vectors_fc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Takes three scalar fields container and assembles them as a 3D vector fields container.   ///available inputs: x (FieldsContainer) (optional), y (FieldsContainer) (optional), z (FieldsContainer) (optional)
            available outputs: fields_container (FieldsContainer)

assemble_scalars_to_vectors_fc()
assemble_scalars_to_vectors_fc(x: object, y: object, z: object, config: OperatorConfig)
assemble_scalars_to_vectors_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
assemble_scalars_to_vectors_fc()
```

#### Constructor

```python
assemble_scalars_to_vectors_fc(x, y, z, config)
```

**Parameters:**

- `x` (*object*)
- `y` (*object*)
- `z` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
assemble_scalars_to_vectors_fc(config)
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
