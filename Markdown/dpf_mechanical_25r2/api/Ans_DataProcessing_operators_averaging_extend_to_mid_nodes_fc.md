---
uid: Ans.DataProcessing.operators.averaging.extend_to_mid_nodes_fc
---

# extend_to_mid_nodes_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Extends Elemental Nodal or Nodal fields defined on corner nodes to Elemental Nodal fields defined also on the mid nodes.   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion) (optional)
            available outputs: fields_container (FieldsContainer)

extend_to_mid_nodes_fc()
extend_to_mid_nodes_fc(fields_container: object, mesh: object, config: OperatorConfig)
extend_to_mid_nodes_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
extend_to_mid_nodes_fc()
```

#### Constructor

```python
extend_to_mid_nodes_fc(fields_container, mesh, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
extend_to_mid_nodes_fc(config)
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
