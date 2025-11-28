---
uid: Ans.DataProcessing.operators.logic.identical_anys
---

# identical_anys Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Takes two Any objects and compares them.Supported types: Field, FieldsContainer, Mesh, MeshesContainer, PropertyField, PropertyFieldsContainer, Scoping, ScopingsContainer, StringField, standard types (double, int, string, vector of int, doubles, string). Note: all inputs related to fields, mesh, and so on are passed to each property check.   ///available inputs: anyA (object), anyB (object), double_value (double), double_tolerance (double) (optional), compare_auxiliary (bool)
            available outputs: included (bool), message (string)

identical_anys()
identical_anys(anyA: object, anyB: object, double_value: object, double_tolerance: object, compare_auxiliary: object, config: OperatorConfig)
identical_anys(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
identical_anys()
```

#### Constructor

```python
identical_anys(anyA, anyB, double_value, double_tolerance, compare_auxiliary, config)
```

**Parameters:**

- `anyA` (*object*)
- `anyB` (*object*)
- `double_value` (*object*)
- `double_tolerance` (*object*)
- `compare_auxiliary` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_anys(config)
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
