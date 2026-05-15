---
uid: Ans.DataProcessing.operators.scoping.change_fc
---

# *class* change_fc(field_or_fields_container: object = None, scopings_container: object = None, config: OperatorConfig = None)

DEPRECATED, PLEASE USE ADAPT WITH SCOPINGS CONTAINER. Rescopes/splits a fields container to correspond to a scopings container.

available inputs: `field_or_fields_container` (FieldsContainer, Field), `scopings_container` (ScopingsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [change_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/change_fc.md)

**Parameters:**

* **field_or_fields_container**
* **scopings_container**
* **config**

**Example:**

```python
op = change_fc()

op = change_fc(field_or_fields_container=my_field_or_fields_container,scopings_container=my_scopings_container)
```

## Inputs

### field_or_fields_container

Field or fields container to rescope

**Type:** *LinkableInput*

### scopings_container

Scopings container for rescoping operation

**Type:** *LinkableInput*

## Outputs

### fields_container

FieldsContainer rescoped according to scopings container (DEPRECATED - use adapt with scopings container)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
