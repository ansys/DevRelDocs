---
uid: Ans.DataProcessing.operators.mapping.prepare_mapping_workflow
---

# prepare_mapping_workflow Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

## Summary

Generates a workflow that can map results from a support to another one.

available inputs: `input_support` (Field, MeshedRegion), `output_support` (Field, MeshedRegion), `filter_radius` (double), `influence_box` (double) (optional)

available outputs: `mapping_workflow` (Workflow)

## Example

```python
op = prepare_mapping_workflow()

op = prepare_mapping_workflow(input_support=my_input_support,output_support=my_output_support,filter_radius=my_filter_radius,influence_box=my_influence_box)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### input_support

**Type:** *LinkableInput*

### output_support

**Type:** *LinkableInput*

### filter_radius

Radius size for the RBF filter

**Type:** *LinkableInput*

### influence_box

**Type:** *LinkableInput*

## Outputs

### mapping_workflow

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
prepare_mapping_workflow()
```

#### Constructor

```python
prepare_mapping_workflow(input_support, output_support, filter_radius, influence_box, config)
```

**Parameters:**

- `input_support` (*object*)
- `output_support` (*object*)
- `filter_radius` (*object*)
- `influence_box` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
prepare_mapping_workflow(config)
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
