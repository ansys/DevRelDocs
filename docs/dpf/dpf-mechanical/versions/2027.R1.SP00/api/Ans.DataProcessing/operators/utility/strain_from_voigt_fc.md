---
uid: Ans.DataProcessing.operators.utility.strain_from_voigt_fc
---

# *class* strain_from_voigt_fc(fields_container: object = None, config: OperatorConfig = None)

Converts strain field data from Voigt notation (6-component vector) to standard symmetric matrix format (3x3 tensor).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [strain_from_voigt_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/strain_from_voigt_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = strain_from_voigt_fc()

op = strain_from_voigt_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Field with strain data in Voigt notation, or fields container containing such a field

**Type:** *LinkableInput*

### field

Deprecated alias of: fields_container

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with strain data converted to standard 3x3 symmetric matrix format

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
