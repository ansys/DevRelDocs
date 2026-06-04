---
uid: Ans.DataProcessing.operators.utility.merge_scopings_containers
---

# merge_scopings_containers Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Assembles a set of scopings containers into a unique one.

available inputs: `scopings_containers1` (ScopingsContainer), `scopings_containers2` (ScopingsContainer)

available outputs: `merged_scopings_container` (ScopingsContainer)

## Example

```python
op = merge_scopings_containers()

op = merge_scopings_containers(scopings_containers1=my_scopings_containers1,scopings_containers2=my_scopings_containers2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### scopings_containers1

A vector of scopings containers to merge or scopings containers from pin 0 to ...

**Type:** *LinkableInput*

### scopings_containers2

A vector of scopings containers to merge or scopings containers from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_scopings_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_scopings_containers()
```

#### Constructor

```python
merge_scopings_containers(scopings_containers1, scopings_containers2, config)
```

**Parameters:**

- `scopings_containers1` (*object*)
- `scopings_containers2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_scopings_containers(config)
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
