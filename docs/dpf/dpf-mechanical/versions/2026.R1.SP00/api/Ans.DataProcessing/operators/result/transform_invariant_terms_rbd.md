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

## Inputs

### rotation_matrix

3-3 rotation matrix.

**Type:** *LinkableInput*

### coordinate_system

origin of the new coordinate system.

**Type:** *LinkableInput*

### model_data

data describing the finite element model

**Type:** *LinkableInput*

### center_of_mass

center of mass of the body

**Type:** *LinkableInput*

### inertia_relief

inertia matrix

**Type:** *LinkableInput*

### model_size

size of the diagonal box containing the body

**Type:** *LinkableInput*

### master_node_coordinates

**Type:** *LinkableInput*

### v_trsf

translational and rotational shape functions

**Type:** *LinkableInput*

### k_mat

**Type:** *LinkableInput*

### mass_mat

**Type:** *LinkableInput*

### c_mat

**Type:** *LinkableInput*

### rhs

**Type:** *LinkableInput*

### dn

**Type:** *LinkableInput*

### dr_cross_n

**Type:** *LinkableInput*

### drn

**Type:** *LinkableInput*

### dn_cross_n

**Type:** *LinkableInput*

### dnx_y

**Type:** *LinkableInput*

### dny_y

**Type:** *LinkableInput*

### dnz_y

**Type:** *LinkableInput*

### dyx_n

**Type:** *LinkableInput*

### dyy_n

**Type:** *LinkableInput*

### dyz_n

**Type:** *LinkableInput*

### dnxn

**Type:** *LinkableInput*

### dnyn

**Type:** *LinkableInput*

### dnzn

**Type:** *LinkableInput*

## Outputs

### model_data

data describing the finite element model

**Type:** *LinkableOutput*

### center_of_mass

center of mass of the body

**Type:** *LinkableOutput*

### inertia_relief

inertia matrix

**Type:** *LinkableOutput*

### model_size

**Type:** *LinkableOutput*

### master_node_coordinates

**Type:** *LinkableOutput*

### v_trsf

translational and rotational shape functions

**Type:** *LinkableOutput*

### k_mat

**Type:** *LinkableOutput*

### mass_mat

**Type:** *LinkableOutput*

### c_mat

**Type:** *LinkableOutput*

### rhs

**Type:** *LinkableOutput*

### dn

**Type:** *LinkableOutput*

### dr_cross_n

**Type:** *LinkableOutput*

### drn

**Type:** *LinkableOutput*

### dn_cross_n

**Type:** *LinkableOutput*

### dnx_y

**Type:** *LinkableOutput*

### dny_y

**Type:** *LinkableOutput*

### dnz_y

**Type:** *LinkableOutput*

### dyx_n

**Type:** *LinkableOutput*

### dyy_n

**Type:** *LinkableOutput*

### dyz_n

**Type:** *LinkableOutput*

### dnxn

**Type:** *LinkableOutput*

### dnyn

**Type:** *LinkableOutput*

### dnzn

**Type:** *LinkableOutput*

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
