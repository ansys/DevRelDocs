---
uid: Ans.DataProcessing.operators.scoping.scoping_get_attribute
---

# *class* scoping_get_attribute(scoping: object = None, property_name: object = None, config: OperatorConfig = None)

Uses the Scoping APIs to return a given attribute of the scoping in input.

available inputs: `scoping` (Scoping), `property_name` (string)

available outputs: `property` (IList int  ,string ,System.Collections.IEnumerable)

**DPF Framework Reference:** [scoping_get_attribute operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/scoping_get_attribute.md)

**Parameters:**

* **scoping**
* **property_name**
* **config**

**Example:**

```python
op = scoping_get_attribute()

op = scoping_get_attribute(scoping=my_scoping,property_name=my_property_name)
```

## Inputs

### scoping

**Type:** *LinkableInput*

### property_name

Supported property names are: "ids", "location".

**Type:** *LinkableInput*

## Outputs

### property

Returns a vector of int for property: "ids" and a string for property: "location".

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
