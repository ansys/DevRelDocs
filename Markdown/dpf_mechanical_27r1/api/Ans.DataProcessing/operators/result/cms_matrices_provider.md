---
uid: Ans.DataProcessing.operators.result.cms_matrices_provider
---

# *class* cms_matrices_provider(data_sources: object = None, matrix_form: object = None, config: OperatorConfig = None)

Read reduced matrices for cms elements. Extract stiffness, damping, mass matrices and load vector from a subfile.

available inputs: `data_sources` (DataSources), `matrix_form` (bool)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cms_matrices_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/cms_matrices_provider.md)

**Parameters:**

* **data_sources**
* **matrix_form**
* **config**

**Example:**

```python
op = cms_matrices_provider()

op = cms_matrices_provider(data_sources=my_data_sources,matrix_form=my_matrix_form)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
