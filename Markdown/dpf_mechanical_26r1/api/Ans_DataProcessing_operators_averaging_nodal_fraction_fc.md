---
uid: Ans.DataProcessing.operators.averaging.nodal_fraction_fc
---

# nodal_fraction_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms Elemental Nodal fields into Nodal fields. Each nodal value is the fraction between the nodal difference and the nodal average. The result is computed on a given node's scoping.   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion) (optional), scoping (Scoping) (optional), denominator (FieldsContainer) (optional)
            available outputs: fields_container (FieldsContainer)

nodal_fraction_fc()
nodal_fraction_fc(fields_container: object, mesh: object, scoping: object, denominator: object, config: OperatorConfig)
nodal_fraction_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
nodal_fraction_fc()
```

#### Constructor

```python
nodal_fraction_fc(fields_container, mesh, scoping, denominator, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `scoping` (*object*)
- `denominator` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
nodal_fraction_fc(config)
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
