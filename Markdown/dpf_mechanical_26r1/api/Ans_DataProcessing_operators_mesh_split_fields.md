---
uid: Ans.DataProcessing.operators.mesh.split_fields
---

# split_fields Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Split the input field or fields container based on the input mesh regions    ///available inputs: field_or_fields_container (Field, FieldsContainer), meshes (MeshesContainer)
            available outputs: fields_container (FieldsContainer)

split_fields()
split_fields(field_or_fields_container: object, meshes: object, config: OperatorConfig)
split_fields(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
split_fields()
```

#### Constructor

```python
split_fields(field_or_fields_container, meshes, config)
```

**Parameters:**

- `field_or_fields_container` (*object*)
- `meshes` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
split_fields(config)
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
