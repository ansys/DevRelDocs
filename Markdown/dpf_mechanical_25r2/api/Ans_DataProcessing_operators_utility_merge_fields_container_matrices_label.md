---
uid: Ans.DataProcessing.operators.utility.merge.fields_container_matrices_label
---

# fields_container_matrices_label Class

**Namespace:** [Ans.DataProcessing.operators.utility.merge](Ans_DataProcessing_operators_utility_merge.md)

Merge fields of fields container into field matrices. The output is a fields container of field matrices.   ///available inputs: fields_container (FieldsContainer), label (string), time_scoping (Int32, IList int, Scoping, System.Collections.IEnumerable) (optional)
            available outputs: fields_container (FieldsContainer)

fields_container_matrices_label()
fields_container_matrices_label(fields_container: object, label: object, time_scoping: object, config: OperatorConfig)
fields_container_matrices_label(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility.merge` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
fields_container_matrices_label()
```

#### Constructor

```python
fields_container_matrices_label(fields_container, label, time_scoping, config)
```

**Parameters:**

- `fields_container` (*object*)
- `label` (*object*)
- `time_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fields_container_matrices_label(config)
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
