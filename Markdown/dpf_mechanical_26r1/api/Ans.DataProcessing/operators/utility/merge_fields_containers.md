---
uid: Ans.DataProcessing.operators.utility.merge_fields_containers
---

# merge_fields_containers Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Assembles a set of fields containers into a unique one.

available inputs: `should_merge_named_selections` (bool) (optional), `sum_merge` (bool) (optional), `merged_fields_support` (AbstractFieldSupport) (optional), `merged_fields_containers_support` (AbstractFieldSupport) (optional), `fields_containers1` (FieldsContainer), `fields_containers2` (FieldsContainer)

available outputs: `merged_fields_container` (FieldsContainer)

## Example

```python
op = merge_fields_containers()

op = merge_fields_containers(should_merge_named_selections=my_should_merge_named_selections,sum_merge=my_sum_merge,merged_fields_support=my_merged_fields_support,merged_fields_containers_support=my_merged_fields_containers_support,fields_containers1=my_fields_containers1,fields_containers2=my_fields_containers2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### should_merge_named_selections

For some result files (such as RST), the scoping on names selection is duplicated through all the distributed files.If this pin is false, the merging process is skipped. If it is true, this scoping is merged. Default is true.

**Type:** *LinkableInput*

### sum_merge

Default is false. If true, redundant quantities are summed instead of being ignored.

**Type:** *LinkableInput*

### merged_fields_support

Already merged field support.

**Type:** *LinkableInput*

### merged_fields_containers_support

Already merged fields containers support.

**Type:** *LinkableInput*

### fields_containers1

A vector of fields containers to merge or fields containers from pin 0 to ...

**Type:** *LinkableInput*

### fields_containers2

A vector of fields containers to merge or fields containers from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_fields_containers()
```

#### Constructor

```python
merge_fields_containers(should_merge_named_selections, sum_merge, merged_fields_support, merged_fields_containers_support, fields_containers1, fields_containers2, config)
```

**Parameters:**

- `should_merge_named_selections` (*object*)
- `sum_merge` (*object*)
- `merged_fields_support` (*object*)
- `merged_fields_containers_support` (*object*)
- `fields_containers1` (*object*)
- `fields_containers2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_fields_containers(config)
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
