---
uid: Ans.DataProcessing.operators.utility.strain_from_voigt
---

# *class* strain_from_voigt(strain_field: object = None, config: OperatorConfig = None)

Converts strain field data from Voigt notation (6-component vector) to standard symmetric matrix format (3x3 tensor).

available inputs: `strain_field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [strain_from_voigt operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/strain_from_voigt.md)

**Parameters:**

* **strain_field**
* **config**

**Example:**

```python
op = strain_from_voigt()

op = strain_from_voigt(strain_field=my_strain_field)
```

## Inputs

### strain_field

Field with strain data in Voigt notation, or fields container containing such a field

**Type:** *LinkableInput*

### field

Deprecated alias of: strain_field

**Type:** *LinkableInput*

## Outputs

### field

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
