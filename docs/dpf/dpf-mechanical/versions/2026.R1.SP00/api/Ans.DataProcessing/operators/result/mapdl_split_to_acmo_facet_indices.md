---
uid: Ans.DataProcessing.operators.result.mapdl_split_to_acmo_facet_indices
---

# mapdl_split_to_acmo_facet_indices Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

This will retain the already existing labels from the input FC and will change the facet label to now mean ACMO facet indices.Each Field in the input will be split/merged into several Fields, redistributing the data to the appropriate entity.

available inputs: `fields_container` (FieldsContainer), `property_fields_container_element_types` (PropertyFieldsContainer)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = mapdl_split_to_acmo_facet_indices()

op = mapdl_split_to_acmo_facet_indices(fields_container=my_fields_container,property_fields_container_element_types=my_property_fields_container_element_types)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

Fields container to split, with generic number of labels (e.g. time, zone, complex...), 'facet' label is compulsory.The Fields of the FieldsContainer will have location Elemental and the Scoping Ids will be the Element Ids on the skin mesh.

**Type:** *LinkableInput*

### property_fields_container_element_types

It should only have the 'facet' label. For each facet, it stores a PropertyField with the element types of the corresponding elements.The scoping should be the same as the scoping of the corresponding Field in input 0.

**Type:** *LinkableInput*

## Outputs

### fields_container

Output splitted fields containter

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mapdl_split_to_acmo_facet_indices()
```

#### Constructor

```python
mapdl_split_to_acmo_facet_indices(fields_container, property_fields_container_element_types, config)
```

**Parameters:**

- `fields_container` (*object*)
- `property_fields_container_element_types` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mapdl_split_to_acmo_facet_indices(config)
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
