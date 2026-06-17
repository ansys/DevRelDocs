---
uid: Ans.DataProcessing.operators.scoping.adapt_with_scopings_container
---

# *class* adapt_with_scopings_container(field_or_fields_container: object = None, scopings_container: object = None, keep_empty_fields: object = None, config: OperatorConfig = None)

Rescopes/splits a fields container to correspond to a scopings container. Each field from the input container is rescoped using each scoping from the scopings container, creating a cartesian product of rescoped fields.

available inputs: `field_or_fields_container` (FieldsContainer, Field), `scopings_container` (ScopingsContainer), `keep_empty_fields` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [adapt_with_scopings_container operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/adapt_with_scopings_container.md)

**Parameters:**

* **field_or_fields_container**
* **scopings_container**
* **keep_empty_fields**
* **config**

**Example:**

```python
op = adapt_with_scopings_container()

op = adapt_with_scopings_container(field_or_fields_container=my_field_or_fields_container,scopings_container=my_scopings_container,keep_empty_fields=my_keep_empty_fields)
```

## Inputs

### field_or_fields_container

Fields container to rescope, or a single field (which will be converted to a container)

**Type:** *LinkableInput*

### scopings_container

Container with target scopings for rescoping operations

**Type:** *LinkableInput*

### keep_empty_fields

Whether to keep fields that become empty after rescoping. Default is false.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with rescoped fields, combining labels from input fields and scopings

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
