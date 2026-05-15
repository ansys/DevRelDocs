---
uid: Ans.DataProcessing.operators.utility.cyclic_support_get_attribute
---

# *class* cyclic_support_get_attribute(cyclic_support: object = None, property_name: object = None, config: OperatorConfig = None)

A CyclicSupport in pin 0 and a property name (string) in pin 1 are expected in input.

available inputs: `cyclic_support` (CyclicSupport), `property_name` (string)

available outputs: `property` (string ,Int32)

**DPF Framework Reference:** [cyclic_support_get_attribute operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/cyclic_support_get_attribute.md)

**Parameters:**

* **cyclic_support**
* **property_name**
* **config**

**Example:**

```python
op = cyclic_support_get_attribute()

op = cyclic_support_get_attribute(cyclic_support=my_cyclic_support,property_name=my_property_name)
```

## Inputs

### cyclic_support

**Type:** *LinkableInput*

### property_name

Accepted inputs are: 'element_duplicate_offset' and 'node_duplicate_offset' (returns int).

**Type:** *LinkableInput*

## Outputs

### property

Property value.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
