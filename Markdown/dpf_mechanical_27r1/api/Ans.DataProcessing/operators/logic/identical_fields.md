---
uid: Ans.DataProcessing.operators.logic.identical_fields
---

# *class* identical_fields(fieldA: object = None, fieldB: object = None, double_value: object = None, double_tolerance: object = None, config: OperatorConfig = None)

Check if two fields are identical according to the following behavior:

- double_value (input pin 2) parameter is a significance threshold, not an absolute tolerance

- Values below double_value are considereded 'negligible', values above are considered 'significant'

- Both fields are considered different if the data for at least one entity in one field is negligible and the data for the same entity in the other is significant

- When the data for the same entity in both fields is significant, they are compared based on double_tolerance (input pin 3) with the expression given in the pin documentation.

available inputs: `fieldA` (Field), `fieldB` (Field), `double_value` (double) (optional), `double_tolerance` (double) (optional)

available outputs: `boolean` (bool), `message` (string)

**DPF Framework Reference:** [identical_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_fields.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **double_value**
* **double_tolerance**
* **config**

**Example:**

```python
op = identical_fields()

op = identical_fields(fieldA=my_fieldA,fieldB=my_fieldB,double_value=my_double_value,double_tolerance=my_double_tolerance)
```

## Inputs

### fieldA

**Type:** *LinkableInput*

### fieldB

**Type:** *LinkableInput*

### double_value

Double positive small value. Smallest value considered during the comparison step. All the absolute values in the field less than this value are considered null, (default value: 1.0e-14).

**Type:** *LinkableInput*

### double_tolerance

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
