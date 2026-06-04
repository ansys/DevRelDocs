---
uid: Ans.DataProcessing.operators.utility.merge_property_fields
---

# *class* merge_property_fields(naive_merge: object = None, property_fields1: object = None, property_fields2: object = None, config: OperatorConfig = None)

Assembles a set of property fields into a unique one.

available inputs: `naive_merge` (bool), `property_fields1` (PropertyField, PropertyFieldsContainer), `property_fields2` (PropertyField, PropertyFieldsContainer)

available outputs: `property_field` (PropertyField)

**DPF Framework Reference:** [merge_property_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_property_fields.md)

**Parameters:**

* **naive_merge**
* **property_fields1**
* **property_fields2**
* **config**

**Example:**

```python
op = merge_property_fields()

op = merge_property_fields(naive_merge=my_naive_merge,property_fields1=my_property_fields1,property_fields2=my_property_fields2)
```

## Inputs

### naive_merge

If true, merge the input property fields assuming that there is no repetition in their scoping ids. Default is false.

**Type:** *LinkableInput*

### property_fields1

Either a property fields container, a vector of property fields to merge or property fields from pin 0 to ...

**Type:** *LinkableInput*

### property_fields2

Either a property fields container, a vector of property fields to merge or property fields from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### property_field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
