---
uid: Ans.DataProcessing.operators.logic.identical_property_fields
---

# *class* identical_property_fields(order_independent: object = None, property_fieldA: object = None, property_fieldB: object = None, config: OperatorConfig = None)

Takes two property fields and compares them.

available inputs: `order_independent` (bool), `property_fieldA` (MeshedRegion), `property_fieldB` (MeshedRegion)

available outputs: `are_identical` (bool), `information` (string)

**DPF Framework Reference:** [identical_property_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_property_fields.md)

**Parameters:**

* **order_independent**
* **property_fieldA**
* **property_fieldB**
* **config**

**Example:**

```python
op = identical_property_fields()

op = identical_property_fields(order_independent=my_order_independent,property_fieldA=my_property_fieldA,property_fieldB=my_property_fieldB)
```

## Inputs

### order_independent

if true, the comparison between the data for each entity is order-independent (e.g. data 1,4,5 associated to id 7 is considered identical to data 4,5,1 associated to the same id). The default is false.

**Type:** *LinkableInput*

### property_fieldA

**Type:** *LinkableInput*

### property_fieldB

**Type:** *LinkableInput*

## Outputs

### are_identical

**Type:** *LinkableOutput*

### information

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
