---
uid: Ans.DataProcessing.operators.logic.identical_pfc
---

# *class* identical_pfc(property_fields_containerA: object = None, property_fields_containerB: object = None, config: OperatorConfig = None)

Checks if two property_fields_container are identical.

available inputs: `property_fields_containerA` (PropertyFieldsContainer), `property_fields_containerB` (PropertyFieldsContainer)

available outputs: `boolean` (bool), `message` (string)

**DPF Framework Reference:** [identical_pfc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_pfc.md)

**Parameters:**

* **property_fields_containerA**
* **property_fields_containerB**
* **config**

**Example:**

```python
op = identical_pfc()

op = identical_pfc(property_fields_containerA=my_property_fields_containerA,property_fields_containerB=my_property_fields_containerB)
```

## Inputs

### property_fields_containerA

**Type:** *LinkableInput*

### property_fields_containerB

**Type:** *LinkableInput*

## Outputs

### boolean

bool (true if identical...)

**Type:** *LinkableOutput*

### message

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
