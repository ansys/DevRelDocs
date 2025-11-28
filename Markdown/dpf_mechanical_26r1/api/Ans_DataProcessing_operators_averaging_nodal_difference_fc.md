---
uid: Ans.DataProcessing.operators.averaging.nodal_difference_fc
title: nodal_difference_fc
---

# nodal_difference_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms Elemental Nodal fields into Nodal fields. Each nodal value is the maximum difference between the unaveraged computed result for all elements that share this particular node. The result is computed on a given node scoping. If the input fields are mixed shell/solid, then the fields are split by element shape and the output fields container has an elshape label.   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer) (optional), scoping (Scoping, ScopingsContainer) (optional)
            available outputs: fields_container (FieldsContainer)

nodal_difference_fc()
nodal_difference_fc(fields_container: object, mesh: object, scoping: object, config: OperatorConfig)
nodal_difference_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
nodal_difference_fc()
```

#### Constructor

```python
nodal_difference_fc(fields_container, mesh, scoping, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
nodal_difference_fc(config)
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
