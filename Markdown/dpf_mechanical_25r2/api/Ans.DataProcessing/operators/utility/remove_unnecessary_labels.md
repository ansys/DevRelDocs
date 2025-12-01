---
uid: Ans.DataProcessing.operators.utility.remove_unnecessary_labels
---

# remove_unnecessary_labels Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Removes the selected label from a fields container.   ///available inputs: permissive (bool) (optional), fields_container (FieldsContainer), label_to_remove (string)
            available outputs: fields_container (FieldsContainer)

remove_unnecessary_labels()
remove_unnecessary_labels(permissive: object, fields_container: object, label_to_remove: object, config: OperatorConfig)
remove_unnecessary_labels(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
remove_unnecessary_labels()
```

#### Constructor

```python
remove_unnecessary_labels(permissive, fields_container, label_to_remove, config)
```

**Parameters:**

- `permissive` (*object*)
- `fields_container` (*object*)
- `label_to_remove` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
remove_unnecessary_labels(config)
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
