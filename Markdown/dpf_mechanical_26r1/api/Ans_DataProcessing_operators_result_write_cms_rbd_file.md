---
uid: Ans.DataProcessing.operators.result.write_cms_rbd_file
---

# write_cms_rbd_file Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

write_cms_rbd_file()
write_cms_rbd_file(model_data: object, center_of_mass: object, inertia_relief: object, model_size: object, master_node_coordinates: object, v_trsf: object, k_mat: object, mass_mat: object, c_mat: object, rhs: object, dn: object, dr_cross_n: object, drn: object, dn_cross_n: object, dnx_y: object, dny_y: object, dnz_y: object, dyx_n: object, dyy_n: object, dyz_n: object, dnxn: object, dnyn: object, dnzn: object, file_path: object, config: OperatorConfig)
write_cms_rbd_file(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
write_cms_rbd_file()
```

#### Constructor

```python
write_cms_rbd_file(model_data, center_of_mass, inertia_relief, model_size, master_node_coordinates, v_trsf, k_mat, mass_mat, c_mat, rhs, dn, dr_cross_n, drn, dn_cross_n, dnx_y, dny_y, dnz_y, dyx_n, dyy_n, dyz_n, dnxn, dnyn, dnzn, file_path, config)
```

**Parameters:**

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
- `file_path` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
write_cms_rbd_file(config)
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
