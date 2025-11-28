---
uid: Ans.DataProcessing.operators.result.mapdl_split_on_facet_indices
---

# mapdl_split_on_facet_indices Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Splits each Field in a FieldsContainer defined on the skin elements of a mesh according to the local facets indices of its corresponding solid element. The output FieldsContainer retains the original labels and adds a 'facet' label, which indicates at which facet of the solid mesh was the original skin element located. The facet ids are according to MAPDL convention. The scoping of the output Fields reflects the element indices in the solid mesh.   ///available inputs: fields_container (FieldsContainer), property_field_new_elements_to_old (PropertyField), facet_indices (PropertyField), volume_mesh (MeshedRegion), degenerated_tets (Scoping) (optional), non_degenerated_tets (Scoping) (optional)
            available outputs: fields_container (FieldsContainer)

mapdl_split_on_facet_indices()
mapdl_split_on_facet_indices(fields_container: object, property_field_new_elements_to_old: object, facet_indices: object, volume_mesh: object, degenerated_tets: object, non_degenerated_tets: object, config: OperatorConfig)
mapdl_split_on_facet_indices(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mapdl_split_on_facet_indices()
```

#### Constructor

```python
mapdl_split_on_facet_indices(fields_container, property_field_new_elements_to_old, facet_indices, volume_mesh, degenerated_tets, non_degenerated_tets, config)
```

**Parameters:**

- `fields_container` (*object*)
- `property_field_new_elements_to_old` (*object*)
- `facet_indices` (*object*)
- `volume_mesh` (*object*)
- `degenerated_tets` (*object*)
- `non_degenerated_tets` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mapdl_split_on_facet_indices(config)
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
