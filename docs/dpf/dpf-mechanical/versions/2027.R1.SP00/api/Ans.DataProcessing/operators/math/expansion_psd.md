---
uid: Ans.DataProcessing.operators.math.expansion_psd
---

# *class* expansion_psd(mode_shapes: object = None, static_shapes: object = None, rel_rel_covar_matrix: object = None, stat_stat_covar_matrix: object = None, rel_stat_covar_matrix: object = None, config: OperatorConfig = None)

Computes the PSD response for one-sigma solution.

available inputs: `mode_shapes` (FieldsContainer), `static_shapes` (FieldsContainer) (optional), `rel_rel_covar_matrix` (FieldsContainer), `stat_stat_covar_matrix` (FieldsContainer) (optional), `rel_stat_covar_matrix` (FieldsContainer) (optional)

available outputs: `psd` (FieldsContainer)

**DPF Framework Reference:** [expansion_psd operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/expansion_psd.md)

**Parameters:**

* **mode_shapes**
* **static_shapes**
* **rel_rel_covar_matrix**
* **stat_stat_covar_matrix**
* **rel_stat_covar_matrix**
* **config**

**Example:**

```python
op = expansion_psd()

op = expansion_psd(mode_shapes=my_mode_shapes,static_shapes=my_static_shapes,rel_rel_covar_matrix=my_rel_rel_covar_matrix,stat_stat_covar_matrix=my_stat_stat_covar_matrix,rel_stat_covar_matrix=my_rel_stat_covar_matrix)
```

## Inputs

### mode_shapes

Fields container containing the mode shapes from modal analysis file: mode shapes for dynamic and pseudo-static displacements

**Type:** *LinkableInput*

### static_shapes

Fields container containing the static shapes (base excitations) from spectral analysis file

**Type:** *LinkableInput*

### rel_rel_covar_matrix

Fields container containing covariance matrices from a psd file: covariance matrix terms for displacement/velocity/acceleration mode-mode shapes

**Type:** *LinkableInput*

### stat_stat_covar_matrix

Fields container containing covariance matrices from a psd file: covariance matrix terms for displacement/velocity/acceleration static-static shapes

**Type:** *LinkableInput*

### rel_stat_covar_matrix

Fields container containing covariance matrices from a psd file: covariance matrix terms for displacement/velocity/acceleration mode-static shapes

**Type:** *LinkableInput*

## Outputs

### psd

PSD solution per label

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
