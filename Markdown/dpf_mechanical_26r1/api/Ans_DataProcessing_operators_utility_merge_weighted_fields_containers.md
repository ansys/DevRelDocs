---
uid: Ans.DataProcessing.operators.utility.merge_weighted_fields_containers
---

# merge_weighted_fields_containers Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assembles a set of fields containers into a unique one, applying a weight on the sum of the fields.   ///available inputs: sum_merge (bool) (optional), merged_fields_support (AbstractFieldSupport) (optional), merged_fields_containers_support (AbstractFieldSupport) (optional), fields_containers1 (FieldsContainer), fields_containers2 (FieldsContainer), weights1 (), weights2 ()
            available outputs: merged_fields_container (FieldsContainer)

merge_weighted_fields_containers()
merge_weighted_fields_containers(sum_merge: object, merged_fields_support: object, merged_fields_containers_support: object, fields_containers1: object, fields_containers2: object, config: OperatorConfig)
merge_weighted_fields_containers(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_weighted_fields_containers()
```

#### Constructor

```python
merge_weighted_fields_containers(sum_merge, merged_fields_support, merged_fields_containers_support, fields_containers1, fields_containers2, config)
```

**Parameters:**

- `sum_merge` (*object*)
- `merged_fields_support` (*object*)
- `merged_fields_containers_support` (*object*)
- `fields_containers1` (*object*)
- `fields_containers2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_weighted_fields_containers(config)
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
