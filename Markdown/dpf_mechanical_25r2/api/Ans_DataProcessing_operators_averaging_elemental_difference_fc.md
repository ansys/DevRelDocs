---
uid: Ans.DataProcessing.operators.averaging.elemental_difference_fc
---

# elemental_difference_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the unaveraged or averaged (depending on the input fields) computed result for all nodes in this element. The result is computed on a given element scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer) (optional), scoping (Scoping, ScopingsContainer) (optional), collapse_shell_layers (bool) (optional)
            available outputs: fields_container (FieldsContainer)

elemental_difference_fc()
elemental_difference_fc(fields_container: object, mesh: object, scoping: object, collapse_shell_layers: object, config: OperatorConfig)
elemental_difference_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elemental_difference_fc()
```

#### Constructor

```python
elemental_difference_fc(fields_container, mesh, scoping, collapse_shell_layers, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `scoping` (*object*)
- `collapse_shell_layers` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_difference_fc(config)
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
