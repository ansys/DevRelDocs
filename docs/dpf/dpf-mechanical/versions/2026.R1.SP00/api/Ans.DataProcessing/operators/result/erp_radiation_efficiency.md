---
uid: Ans.DataProcessing.operators.result.erp_radiation_efficiency
---

# erp_radiation_efficiency Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Compute the radiation efficiency (enhanced erp divided by classical erp)

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion, MeshesContainer), `time_scoping` (Int32, IList int, Scoping, System.Collections.IEnumerable), `mass_density` (double), `speed_of_sound` (double)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = erp_radiation_efficiency()

op = erp_radiation_efficiency(fields_container=my_fields_container,mesh=my_mesh,time_scoping=my_time_scoping,mass_density=my_mass_density,speed_of_sound=my_speed_of_sound)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

the input field container expects displacements fields

**Type:** *LinkableInput*

### mesh

the meshes region in this pin has to be boundary or skin mesh

**Type:** *LinkableInput*

### time_scoping

load step number (if it's specified, the ERP is computed only on the substeps of this step) or time scoping

**Type:** *LinkableInput*

### mass_density

mass density (if it's not specified, default value of the air is applied).

**Type:** *LinkableInput*

### speed_of_sound

speed of sound (if it's not specified, default value of the speed of sound in the air is applied).

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
erp_radiation_efficiency()
```

#### Constructor

```python
erp_radiation_efficiency(fields_container, mesh, time_scoping, mass_density, speed_of_sound, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `time_scoping` (*object*)
- `mass_density` (*object*)
- `speed_of_sound` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
erp_radiation_efficiency(config)
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
