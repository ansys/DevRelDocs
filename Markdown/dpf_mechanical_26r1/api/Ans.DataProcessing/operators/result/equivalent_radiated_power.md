---
uid: Ans.DataProcessing.operators.result.equivalent_radiated_power
---

# equivalent_radiated_power Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Compute the Equivalent Radiated Power (ERP)

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion, MeshesContainer), `time_scoping` (Int32, IList int, Scoping, System.Collections.IEnumerable), `mass_density` (double), `speed_of_sound` (double), `erp_type` (Int32), `boolean` (bool), `factor` (double)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = equivalent_radiated_power()

op = equivalent_radiated_power(fields_container=my_fields_container,mesh=my_mesh,time_scoping=my_time_scoping,mass_density=my_mass_density,speed_of_sound=my_speed_of_sound,erp_type=my_erp_type,boolean=my_boolean,factor=my_factor)
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

the mesh region in this pin has to be boundary or skin mesh

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

### erp_type

if this pin is set to 0, the classical ERP is computed, 1 the corrected ERP is computed (a mesh of one face has to be given in the pin 1) and 2 the enhanced ERP is computed. Default is 0.

**Type:** *LinkableInput*

### boolean

if this pin is set to true, the ERP level in dB is computed

**Type:** *LinkableInput*

### factor

erp reference value. Default is 1E-12

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
equivalent_radiated_power()
```

#### Constructor

```python
equivalent_radiated_power(fields_container, mesh, time_scoping, mass_density, speed_of_sound, erp_type, boolean, factor, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `time_scoping` (*object*)
- `mass_density` (*object*)
- `speed_of_sound` (*object*)
- `erp_type` (*object*)
- `boolean` (*object*)
- `factor` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
equivalent_radiated_power(config)
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
