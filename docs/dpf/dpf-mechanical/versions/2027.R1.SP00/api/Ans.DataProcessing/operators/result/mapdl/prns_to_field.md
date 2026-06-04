---
uid: Ans.DataProcessing.operators.result.mapdl.prns_to_field
---

# *class* prns_to_field(filepath: object = None, columns_to_read: object = None, config: OperatorConfig = None)

Read the presol of nodal field generated file from mapdl.

available inputs: `filepath` (string), `columns_to_read` (Int32, IList int, System.Collections.IEnumerable) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [prns_to_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/prns_to_field.md)

**Parameters:**

* **filepath**
* **columns_to_read**
* **config**

**Example:**

```python
op = prns_to_field()

op = prns_to_field(filepath=my_filepath,columns_to_read=my_columns_to_read)
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
