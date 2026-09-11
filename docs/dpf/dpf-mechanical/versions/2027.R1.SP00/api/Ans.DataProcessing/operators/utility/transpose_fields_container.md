---
uid: Ans.DataProcessing.operators.utility.transpose_fields_container
---

# *class* transpose_fields_container(fields_container: object = None, label: object = None, config: OperatorConfig = None)

Transposes a fields container so that the fields' scoping becomes the container's scoping and a chosen label (default: time) becomes the fields' scoping.

Input layout (example with time label, 2 body labels, 3 nodes):

  FC labels: [time, body]

  Field 0: {time:1, body:1} -> scoping {n1, n2, n3}, data [...]

  Field 1: {time:1, body:2} -> scoping {n4, n5}, data [...]

  Field 2: {time:2, body:1} -> scoping {n1, n2, n3}, data [...]

  Field 3: {time:2, body:2} -> scoping {n4, n5}, data [...]

Output layout (transposed on time):

  FC labels: [Nodal, body]

  Field 0: {Nodal:n1, body:1} -> scoping {t1, t2}, data [gathered from fields 0,2]

  Field 1: {Nodal:n2, body:1} -> scoping {t1, t2}, data [gathered from fields 0,2]

  Field 1: {Nodal:n3, body:1} -> scoping {t1, t2}, data [gathered from fields 0,2]

  Field 2: {Nodal:n4, body:2} -> scoping {t1, t2}, data [gathered from fields 1,3]

  Field 3: {Nodal:n5, body:2} -> scoping {t1, t2}, data [gathered from fields 1,3]

  ...

Each output field gathers one entity's data across all values of the transposed label from the input fields that share the same non-transposed labels. All input fields sharing a labelspace where only the transposed label changes must have the same scoping and location.

available inputs: `fields_container` (FieldsContainer), `label` (string) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [transpose_fields_container operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/transpose_fields_container.md)

**Parameters:**

* **fields_container**
* **label**
* **config**

**Example:**

```python
op = transpose_fields_container()

op = transpose_fields_container(fields_container=my_fields_container,label=my_label)
```

## Inputs

### fields_container

It is assumed that the fields container consists of fields having the same scoping.

**Type:** *LinkableInput*

### label

fields container label to use as fields label (default is time)

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
