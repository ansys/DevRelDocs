---
uid: Ans.DataProcessing.operators.filter.filtering_max_over_time
---

# filtering_max_over_time Class

**Namespace:** [Ans.DataProcessing.operators.filter](Ans_DataProcessing_operators_filter.md)

## Summary

Creates a filtering workflow that will filter results based on a threshold of a selected invariant.

available inputs: `invariant_fc_operator` (string), `output_pin` (Int32) (optional), `list_of_results` (string) (optional), `threshold` (double) (optional)

available outputs: `workflow` (Workflow)

## Example

```python
op = filtering_max_over_time()

op = filtering_max_over_time(invariant_fc_operator=my_invariant_fc_operator,output_pin=my_output_pin,list_of_results=my_list_of_results,threshold=my_threshold)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.filter` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### invariant_fc_operator

Name of the invariant operator to be used to calculate filter (available: eqv_fc, invariants_deriv_fc, invariants_fc).

**Type:** *LinkableInput*

### output_pin

Output pin of the invariant operator. Default = 0.

**Type:** *LinkableInput*

### list_of_results

If no result is given, filter will be applied on Stresses and Strains

**Type:** *LinkableInput*

### threshold

Threshold from which the operator will filter.

**Type:** *LinkableInput*

## Outputs

### workflow

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
filtering_max_over_time()
```

#### Constructor

```python
filtering_max_over_time(invariant_fc_operator, output_pin, list_of_results, threshold, config)
```

**Parameters:**

- `invariant_fc_operator` (*object*)
- `output_pin` (*object*)
- `list_of_results` (*object*)
- `threshold` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
filtering_max_over_time(config)
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
