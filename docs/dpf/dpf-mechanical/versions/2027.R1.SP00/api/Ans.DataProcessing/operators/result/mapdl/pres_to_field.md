---
uid: Ans.DataProcessing.operators.result.mapdl.pres_to_field
---

# *class* pres_to_field(filepath: object = None, columns_to_read: object = None, config: OperatorConfig = None)

Read the presol generated file from mapdl.

available inputs: `filepath` (string), `columns_to_read` (Int32) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [pres_to_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/pres_to_field.md)

**Parameters:**

* **filepath**
* **columns_to_read**
* **config**

**Example:**

```python
op = pres_to_field()

op = pres_to_field(filepath=my_filepath,columns_to_read=my_columns_to_read)
```

## Inputs

### filepath

filepath

**Type:** *LinkableInput*

### columns_to_read

columns_to_read

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
