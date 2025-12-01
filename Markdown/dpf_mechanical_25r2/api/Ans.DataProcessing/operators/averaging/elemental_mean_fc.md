---
uid: Ans.DataProcessing.operators.averaging.elemental_mean_fc
---

# elemental_mean_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Computes the average of a multi-entity container of fields, (ElementalNodal -> Elemental), (NodalElemental -> Nodal). If the input fields are mixed shell/solid and collapseShellLayers is false, then the fields could be split by element shape and the output fields container would have an elshape label depending on the e_shell_layer and merge_solid_shell inputs (if e_shell_layer is not specified, the fields are split; if it is specified, the fields can be split based on merge_solid_shell).If collapseShellLayers is true, all available shell layers are collapsed and shells and solid fields are always merged.   ///available inputs: fields_container (FieldsContainer), collapse_shell_layers (bool) (optional), force_averaging (bool) (optional), scoping (Scoping, ScopingsContainer) (optional), meshed_region (MeshedRegion, MeshesContainer) (optional), merge_solid_shell (bool) (optional), e_shell_layer (Int32) (optional)
            available outputs: fields_container (FieldsContainer)

elemental_mean_fc()
elemental_mean_fc(fields_container: object, collapse_shell_layers: object, force_averaging: object, scoping: object, meshed_region: object, merge_solid_shell: object, e_shell_layer: object, config: OperatorConfig)
elemental_mean_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
