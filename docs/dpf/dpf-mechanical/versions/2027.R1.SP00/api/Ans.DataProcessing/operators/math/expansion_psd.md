---
uid: Ans.DataProcessing.operators.math.expansion_psd
---

# *class* expansion_psd(mode_shapes: object = None, static_shapes: object = None, rel_rel_covar_matrix: object = None, stat_stat_covar_matrix: object = None, rel_stat_covar_matrix: object = None, is_rpsd_from_harm: object = None, config: OperatorConfig = None)

Computes the response power spectral density (RPSD) or 1-sigma response from a PSD analysis by combining mode shapes (or harmonic results), covariance matrices, and optionally static shapes.

**Response type**

- If pin 5 is false (default) and constant covariance matrices are provided: 1-sigma response is computed from mode shapes (label "time") and covariance matrix $Q$  (only labels "Mode_i" and "Mode_j"):

$\displaystyle \sigma_k = \sqrt{\sum_{i=1}^N{\sum_{j=1}^N{\phi_{ik} \phi_{jk} Q_{ij}}}}$

- If pin 5 is false (default) and frequency-dependent covariance matrices are provided: RPSD response is computed from mode shapes (label "time") and modal PSD matrix $R(\omega)$ (labels "Mode_i", "Mode_j" and "time"):

$\displaystyle S_k(\omega) = \sum_{i=1}^N{\sum_{j=1}^N{\phi_{ik} \phi_{jk} R_{ij}(\omega)}}$

- If pin 5 is true: RPSD response is computed from harmonic results amplitude (label "input_dof_index" and "time") and input PSD matrix $\bar{S}(\omega)$ (labels "input_dof_index_i", "input_dof_index_j" and "time"):

$\displaystyle S_k(\omega) = \sum_{i=1}^N{\sum_{j=1}^N{u_{ik}(\omega) u_{jk}(\omega) \bar{S}_{ij}(\omega)}}$

**Absolute/relative response computation**:

- If static shapes (pin 1) are provided and non-empty: computes absolute response ($\sigma^2 = \sigma_{\text{rel}}^2 + \sigma_{\text{stat}}^2 + 2 \sigma_{\text{rel,stat}}^2$).

- If static shapes are empty or not provided: computes relative response from mode-mode covariance terms only ($\sigma^2 = \sigma_{\text{rel}}^2$).

- If input mode shapes or harmonic results are empty: output contains an empty field with the same label structure and support as the covariance matrix input.

available inputs: `mode_shapes` (FieldsContainer), `static_shapes` (FieldsContainer) (optional), `rel_rel_covar_matrix` (FieldsContainer), `stat_stat_covar_matrix` (FieldsContainer) (optional), `rel_stat_covar_matrix` (FieldsContainer) (optional), `is_rpsd_from_harm` (bool) (optional)

available outputs: `psd` (FieldsContainer)

**DPF Framework Reference:** [expansion_psd operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/expansion_psd.md)

**Parameters:**

* **mode_shapes**
* **static_shapes**
* **rel_rel_covar_matrix**
* **stat_stat_covar_matrix**
* **rel_stat_covar_matrix**
* **is_rpsd_from_harm**
* **config**

**Example:**

```python
op = expansion_psd()

op = expansion_psd(mode_shapes=my_mode_shapes,static_shapes=my_static_shapes,rel_rel_covar_matrix=my_rel_rel_covar_matrix,stat_stat_covar_matrix=my_stat_stat_covar_matrix,rel_stat_covar_matrix=my_rel_stat_covar_matrix,is_rpsd_from_harm=my_is_rpsd_from_harm)
```

## Inputs

### mode_shapes

Fields container containing the expansion vectors (mode shapes or harmonic results). Label conventions are defined by pin 5.

**Type:** *LinkableInput*

### static_shapes

Fields container containing the static shapes (base excitations) from spectral analysis file. If not empty, pins 3 and 4 are required.

**Type:** *LinkableInput*

### rel_rel_covar_matrix

Fields container containing the dynamic covariance or PSD matrix (relative-relative term). Covariance and PSD matrices can both represent displacement, velocity, or acceleration. Label conventions are defined by pin 5.

**Type:** *LinkableInput*

### stat_stat_covar_matrix

Fields container containing the static covariance or PSD matrix (static-static term). Covariance and PSD matrices can both represent displacement, velocity, or acceleration. Label conventions are defined by pin 5.

**Type:** *LinkableInput*

### rel_stat_covar_matrix

Fields container containing the dynamic-static covariance or PSD matrix (relative-static term). Covariance and PSD matrices can both represent displacement, velocity, or acceleration. Label conventions are defined by pin 5.

**Type:** *LinkableInput*

### is_rpsd_from_harm

**Type:** *LinkableInput*

## Outputs

### psd

Response PSD (if frequency-dependent matrices) or 1-sigma response per output label space. Can contain an empty field when mode shapes are empty.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
