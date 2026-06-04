---
uid: Ans.DataProcessing.operators.utility.merge.fields_container_matrices_label
---

# *class* fields_container_matrices_label(fields_container: object = None, label: object = None, time_scoping: object = None, config: OperatorConfig = None)

Merge fields of fields container into field matrices. The output is a fields container of field matrices.

available inputs: `fields_container` (FieldsContainer), `label` (string), `time_scoping` (Int32, IList int, Scoping, System.Collections.IEnumerable) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [fields_container_matrices_label operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/fields_container_matrices_label.md)

**Parameters:**

* **fields_container**
* **label**
* **time_scoping**
* **config**

**Example:**

```python
op = fields_container_matrices_label()

op = fields_container_matrices_label(fields_container=my_fields_container,label=my_label,time_scoping=my_time_scoping)
```

## Inputs

### fields_container

fields container to be merged

**Type:** *LinkableInput*

### label

Label where the merge is required

**Type:** *LinkableInput*

### time_scoping

if it's specified, fields container of field matrices is constructed only on the specified time scoping

**Type:** *LinkableInput*

## Outputs

### fields_container

fields container of field matrices obtained after merging.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
