---
uid: Ans.DataProcessing.operators.result.cms_matrices_provider
---

# cms_matrices_provider Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Read reduced matrices for cms elements. Extract stiffness, damping, mass matrices and load vector from a subfile.   ///available inputs: data_sources (DataSources), matrix_form (bool)
            available outputs: fields_container (FieldsContainer)

cms_matrices_provider()
cms_matrices_provider(data_sources: object, matrix_form: object, config: OperatorConfig)
cms_matrices_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
