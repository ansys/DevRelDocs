---
uid: Ans.DataProcessing.operators.min_max.min_max_inc
---

# *class* min_max_inc(field: object = None, domain_id: object = None, config: OperatorConfig = None)

Compute the component-wise minimum (out 0) and maximum (out 1) over coming fields.

available inputs: `field` (Field), `domain_id` (Int32) (optional)

available outputs: `field_min` (Field), `field_max` (Field), `domain_ids_min` (Scoping), `domain_ids_max` (Scoping)

**DPF Framework Reference:** [min_max_inc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_inc.md)

**Parameters:**

* **field**
* **domain_id**
* **config**

**Example:**

```python
op = min_max_inc()

op = min_max_inc(field=my_field,domain_id=my_domain_id)
```

## Inputs

### field

**Type:** *LinkableInput*

### domain_id

**Type:** *LinkableInput*

## Outputs

### field_min

**Type:** *LinkableOutput*

### field_max

**Type:** *LinkableOutput*

### domain_ids_min

**Type:** *LinkableOutput*

### domain_ids_max

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
