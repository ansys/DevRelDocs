---
uid: Ans.DataProcessing.operators.result.cms_matrices_provider
---

# cms_matrices_provider Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Read reduced matrices for cms elements. Extract stiffness, damping, mass matrices and load vector from a subfile.

available inputs: `data_sources` (DataSources), `matrix_form` (bool)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = cms_matrices_provider()

op = cms_matrices_provider(data_sources=my_data_sources,matrix_form=my_matrix_form)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### data_sources

Data_sources (must contain at list one subfile).

**Type:** *LinkableInput*

### matrix_form

If this pin i set to true, data are return as matrix form.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container containing in this order : stiffness, damping, mass matrices, and then load vector. But if pin 200 is set to true, it's in matrix form.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
cms_matrices_provider()
```

#### Constructor

```python
cms_matrices_provider(data_sources, matrix_form, config)
```

**Parameters:**

- `data_sources` (*object*)
- `matrix_form` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cms_matrices_provider(config)
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
