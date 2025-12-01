---
uid: Ans.DataProcessing.operators.geo.elements_volumes_over_time
---

# elements_volumes_over_time Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Calculates for a mesh, the volume of each element over time for each specified time step.   ///available inputs: scoping (Scoping) (optional), displacement (FieldsContainer) (optional), mesh (MeshedRegion) (optional)
            available outputs: fields_container (FieldsContainer)

elements_volumes_over_time()
elements_volumes_over_time(scoping: object, displacement: object, mesh: object, config: OperatorConfig)
elements_volumes_over_time(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elements_volumes_over_time()
```

#### Constructor

```python
elements_volumes_over_time(scoping, displacement, mesh, config)
```

**Parameters:**

- `scoping` (*object*)
- `displacement` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elements_volumes_over_time(config)
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
