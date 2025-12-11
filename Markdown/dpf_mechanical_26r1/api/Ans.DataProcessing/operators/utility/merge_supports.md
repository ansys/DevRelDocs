---
uid: Ans.DataProcessing.operators.utility.merge_supports
---

# merge_supports Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Assembles a set of supports into a unique one.

available inputs: `should_merge_named_selections` (bool) (optional), `supports1` (AbstractFieldSupport), `supports2` (AbstractFieldSupport)

available outputs: `merged_support` (AbstractFieldSupport)

## Example

```python
op = merge_supports()

op = merge_supports(should_merge_named_selections=my_should_merge_named_selections,supports1=my_supports1,supports2=my_supports2)
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

### supports1

A vector of supports to merge or supports from pin 0 to ...

**Type:** *LinkableInput*

### supports2

A vector of supports to merge or supports from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_support

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_supports()
```

#### Constructor

```python
merge_supports(should_merge_named_selections, supports1, supports2, config)
```

**Parameters:**

- `should_merge_named_selections` (*object*)
- `supports1` (*object*)
- `supports2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_supports(config)
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
