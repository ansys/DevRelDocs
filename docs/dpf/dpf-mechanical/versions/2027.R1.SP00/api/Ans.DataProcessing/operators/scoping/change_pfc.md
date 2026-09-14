---
uid: Ans.DataProcessing.operators.scoping.change_pfc
---

# *class* change_pfc(field_or_fields_container: object = None, scopings_container: object = None, config: OperatorConfig = None)

DEPRECATED, PLEASE USE ADAPT WITH SCOPINGS CONTAINER. Rescopes/splits a property fields container to correspond to a scopings container.

available inputs: `field_or_fields_container` (PropertyFieldsContainer, PropertyField), `scopings_container` (ScopingsContainer)

available outputs: `property_fields_container` (PropertyFieldsContainer)

**DPF Framework Reference:** [change_pfc operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/change_pfc.md)

**Parameters:**

* **field_or_fields_container**
* **scopings_container**
* **config**

**Example:**

```python
op = change_pfc()

op = change_pfc(field_or_fields_container=my_field_or_fields_container,scopings_container=my_scopings_container)
```

## Inputs

### field_or_fields_container

Property field or property fields container to rescope

**Type:** *LinkableInput*

### scopings_container

Scopings container for rescoping operation

**Type:** *LinkableInput*

## Outputs

### property_fields_container

PropertyFieldsContainer rescoped according to scopings container (DEPRECATED - use adapt with scopings container)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
