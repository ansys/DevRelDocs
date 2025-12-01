---
uid: Ans.DataProcessing.operators.result.transform_invariant_terms_rbd
---

# transform_invariant_terms_rbd Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

transform_invariant_terms_rbd()
transform_invariant_terms_rbd(rotation_matrix: object, coordinate_system: object, model_data: object, center_of_mass: object, inertia_relief: object, model_size: object, master_node_coordinates: object, v_trsf: object, k_mat: object, mass_mat: object, c_mat: object, rhs: object, dn: object, dr_cross_n: object, drn: object, dn_cross_n: object, dnx_y: object, dny_y: object, dnz_y: object, dyx_n: object, dyy_n: object, dyz_n: object, dnxn: object, dnyn: object, dnzn: object, config: OperatorConfig)
transform_invariant_terms_rbd(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
transform_invariant_terms_rbd()
```

#### Constructor

```python
transform_invariant_terms_rbd(rotation_matrix, coordinate_system, model_data, center_of_mass, inertia_relief, model_size, master_node_coordinates, v_trsf, k_mat, mass_mat, c_mat, rhs, dn, dr_cross_n, drn, dn_cross_n, dnx_y, dny_y, dnz_y, dyx_n, dyy_n, dyz_n, dnxn, dnyn, dnzn, config)
```

**Parameters:**

- `rotation_matrix` (*object*)
- `coordinate_system` (*object*)
- `model_data` (*object*)
- `center_of_mass` (*object*)
- `inertia_relief` (*object*)
- `model_size` (*object*)
- `master_node_coordinates` (*object*)
- `v_trsf` (*object*)
- `k_mat` (*object*)
- `mass_mat` (*object*)
- `c_mat` (*object*)
- `rhs` (*object*)
- `dn` (*object*)
- `dr_cross_n` (*object*)
- `drn` (*object*)
- `dn_cross_n` (*object*)
- `dnx_y` (*object*)
- `dny_y` (*object*)
- `dnz_y` (*object*)
- `dyx_n` (*object*)
- `dyy_n` (*object*)
- `dyz_n` (*object*)
- `dnxn` (*object*)
- `dnyn` (*object*)
- `dnzn` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
transform_invariant_terms_rbd(config)
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
