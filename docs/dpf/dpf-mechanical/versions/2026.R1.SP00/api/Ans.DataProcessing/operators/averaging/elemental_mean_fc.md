---
uid: Ans.DataProcessing.operators.averaging.elemental_mean_fc
---

# elemental_mean_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Computes the average of a multi-entity container of fields, (ElementalNodal -> Elemental), (NodalElemental -> Nodal). If the input fields are mixed shell/solid and collapseShellLayers is false, then the fields could be split by element shape and the output fields container would have an elshape label depending on the e_shell_layer and merge_solid_shell inputs (if e_shell_layer is not specified, the fields are split; if it is specified, the fields can be split based on merge_solid_shell).If collapseShellLayers is true, all available shell layers are collapsed and shells and solid fields are always merged.

available inputs: `fields_container` (FieldsContainer), `collapse_shell_layers` (bool) (optional), `force_averaging` (bool) (optional), `scoping` (Scoping, ScopingsContainer) (optional), `meshed_region` (MeshedRegion, MeshesContainer) (optional), `merge_solid_shell` (bool) (optional), `e_shell_layer` (Int32) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = elemental_mean_fc()

op = elemental_mean_fc(fields_container=my_fields_container,collapse_shell_layers=my_collapse_shell_layers,force_averaging=my_force_averaging,scoping=my_scoping,meshed_region=my_meshed_region,merge_solid_shell=my_merge_solid_shell,e_shell_layer=my_e_shell_layer)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### collapse_shell_layers

If true, the data across different shell layers is averaged as well (default is false).

**Type:** *LinkableInput*

### force_averaging

If true you average, if false you just sum.

**Type:** *LinkableInput*

### scoping

Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields container.

**Type:** *LinkableInput*

### meshed_region

The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

**Type:** *LinkableInput*

### merge_solid_shell

For shell/solid mixed fields, group in the same field all solids and shells (false by default). This pin only has an effect when collapse_shell_layers is false and a value for e_shell_layer is provided.

**Type:** *LinkableInput*

### e_shell_layer

0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid. This pin only has an effect when collapse_shell_layers is false.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elemental_mean_fc()
```

#### Constructor

```python
elemental_mean_fc(fields_container, collapse_shell_layers, force_averaging, scoping, meshed_region, merge_solid_shell, e_shell_layer, config)
```

**Parameters:**

- `fields_container` (*object*)
- `collapse_shell_layers` (*object*)
- `force_averaging` (*object*)
- `scoping` (*object*)
- `meshed_region` (*object*)
- `merge_solid_shell` (*object*)
- `e_shell_layer` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_mean_fc(config)
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
