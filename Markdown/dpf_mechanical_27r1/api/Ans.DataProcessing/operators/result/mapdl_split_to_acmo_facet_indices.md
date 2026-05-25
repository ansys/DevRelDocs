---
uid: Ans.DataProcessing.operators.result.mapdl_split_to_acmo_facet_indices
---

# *class* mapdl_split_to_acmo_facet_indices(fields_container: object = None, property_fields_container_element_types: object = None, config: OperatorConfig = None)

This will retain the already existing labels from the input FC and will change the facet label to now mean ACMO facet indices.Each Field in the input will be split/merged into several Fields, redistributing the data to the appropriate entity.

available inputs: `fields_container` (FieldsContainer), `property_fields_container_element_types` (PropertyFieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [mapdl_split_to_acmo_facet_indices operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/mapdl_split_to_acmo_facet_indices.md)

**Parameters:**

* **fields_container**
* **property_fields_container_element_types**
* **config**

**Example:**

```python
op = mapdl_split_to_acmo_facet_indices()

op = mapdl_split_to_acmo_facet_indices(fields_container=my_fields_container,property_fields_container_element_types=my_property_fields_container_element_types)
```

## Inputs

### fields_container

Fields container to split, with generic number of labels (e.g. time, zone, complex...), 'facet' label is compulsory.The Scopings of the Fields will be the Element Ids on the skin mesh.

**Type:** *LinkableInput*

### property_fields_container_element_types

It should only have the 'facet' label. For each facet, it stores a PropertyField with the element types of the corresponding elements.The scoping should be the same as the scoping of the corresponding Field in input 0.

**Type:** *LinkableInput*

## Outputs

### fields_container

Output splitted fields containter

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
