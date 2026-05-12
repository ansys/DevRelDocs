---
uid: Ans.DataProcessing.operators.min_max.min_max_by_entity
---

# *class* min_max_by_entity(fields_container: object = None, config: OperatorConfig = None)

Compute the entity-wise minimum (out 0) and maximum (out 1) through all fields of a fields container.

available inputs: `fields_container` (FieldsContainer)

available outputs: `field_min` (Field), `field_max` (Field)

**DPF Framework Reference:** [min_max_by_entity operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_by_entity.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = min_max_by_entity()

op = min_max_by_entity(fields_container=my_fields_container)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

## Outputs

### field_min

**Type:** *LinkableOutput*

### field_max

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
