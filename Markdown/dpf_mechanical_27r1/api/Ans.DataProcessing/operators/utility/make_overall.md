---
uid: Ans.DataProcessing.operators.utility.make_overall
---

# *class* make_overall(field: object = None, id: object = None, config: OperatorConfig = None)

Extracts a value from a field and makes a new field containing only this value, with the associated scoping's location set as 'overall'.

available inputs: `field` (Field), `id` (Int32)

available outputs: `field` (Field)

**DPF Framework Reference:** [make_overall operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/make_overall.md)

**Parameters:**

* **field**
* **id**
* **config**

**Example:**

```python
op = make_overall()

op = make_overall(field=my_field,id=my_id)
```

## Inputs

### field

**Type:** *LinkableInput*

### id

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
