---
uid: Ans.DataProcessing.operators.utility.get_operators
---

# get_operators Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Getter on operators inside a workflow.

available inputs: `workflow` (Workflow)

available outputs: `operators` (GenericDataContainer)

## Example

```python
op = get_operators()

op = get_operators(workflow=my_workflow)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### workflow

**Type:** *LinkableInput*

## Outputs

### operators

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
get_operators()
```

#### Constructor

```python
get_operators(workflow, config)
```

**Parameters:**

- `workflow` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
get_operators(config)
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
