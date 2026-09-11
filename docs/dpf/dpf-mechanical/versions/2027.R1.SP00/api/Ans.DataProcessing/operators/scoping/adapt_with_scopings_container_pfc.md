---
uid: Ans.DataProcessing.operators.scoping.adapt_with_scopings_container_pfc
---

# *class* adapt_with_scopings_container_pfc(field_or_fields_container: object = None, scopings_container: object = None, keep_empty_fields: object = None, config: OperatorConfig = None)

Rescopes/splits a property fields container to correspond to a scopings container. Each property field from the input container is rescoped using each scoping from the scopings container, creating a cartesian product of rescoped property fields.

available inputs: `field_or_fields_container` (PropertyFieldsContainer, PropertyField), `scopings_container` (ScopingsContainer), `keep_empty_fields` (bool) (optional)

available outputs: `property_fields_container` (PropertyFieldsContainer)

**DPF Framework Reference:** [adapt_with_scopings_container_pfc operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/adapt_with_scopings_container_pfc.md)

**Parameters:**

* **field_or_fields_container**
* **scopings_container**
* **keep_empty_fields**
* **config**

**Example:**

```python
op = adapt_with_scopings_container_pfc()

op = adapt_with_scopings_container_pfc(field_or_fields_container=my_field_or_fields_container,scopings_container=my_scopings_container,keep_empty_fields=my_keep_empty_fields)
```

## Inputs

### field_or_fields_container

Property fields container to rescope, or a single property field (which will be converted to a container).

**Type:** *LinkableInput*

### scopings_container

Container with target scopings for rescoping operations

**Type:** *LinkableInput*

### keep_empty_fields

Whether to keep property fields that become empty after rescoping. Default is false.

**Type:** *LinkableInput*

## Outputs

### property_fields_container

Property fields container with rescoped property fields, combining labels from input property fields and scopings

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
