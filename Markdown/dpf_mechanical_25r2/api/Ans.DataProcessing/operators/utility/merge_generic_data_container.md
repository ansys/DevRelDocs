---
uid: Ans.DataProcessing.operators.utility.merge_generic_data_container
---

# merge_generic_data_container Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Merges a list of generic data container. For each data entry, the merge operation is forwarded to the correct merge Operator. Primitive types cannot be merged, first instance found will be maintained in the result.

available inputs: `generic_data_container1` (GenericDataContainer), `generic_data_container2` (GenericDataContainer)

available outputs: `generic_data_container` (GenericDataContainer)

## Example

```python
op = merge_generic_data_container()

op = merge_generic_data_container(generic_data_container1=my_generic_data_container1,generic_data_container2=my_generic_data_container2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### generic_data_container1

Either a vector of generic data containers (sharing the same data types) or generic data containers from pin 0 to ... to merge. Supported types rely on existing type specific merge operators.

**Type:** *LinkableInput*

### generic_data_container2

Either a vector of generic data containers (sharing the same data types) or generic data containers from pin 0 to ... to merge. Supported types rely on existing type specific merge operators.

**Type:** *LinkableInput*

## Outputs

### generic_data_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_generic_data_container()
```

#### Constructor

```python
merge_generic_data_container(generic_data_container1, generic_data_container2, config)
```

**Parameters:**

- `generic_data_container1` (*object*)
- `generic_data_container2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_generic_data_container(config)
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
