---
uid: Ans.DataProcessing.operators.invariant.convertnum_op
---

# *class* convertnum_op(input_ordering: object = None, output_ordering: object = None, fields_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Converts a fields container from one mapdl ordering to another mapdl ordering. Supported mapdl ordering are BCS=0, FUL=1, NOD=2.

available inputs: `input_ordering` (Int32), `output_ordering` (Int32), `fields_container` (FieldsContainer), `data_sources` (DataSources)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [convertnum_op operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/convertnum_op.md)

**Parameters:**

* **input_ordering**
* **output_ordering**
* **fields_container**
* **data_sources**
* **config**

**Example:**

```python
op = convertnum_op()

op = convertnum_op(input_ordering=my_input_ordering,output_ordering=my_output_ordering,fields_container=my_fields_container,data_sources=my_data_sources)
```

## Inputs

### input_ordering

Input ordering number

**Type:** *LinkableInput*

### output_ordering

Output ordering number

**Type:** *LinkableInput*

### fields_container

Expect fields container

**Type:** *LinkableInput*

### data_sources

Data_sources (must contain the full file).

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
