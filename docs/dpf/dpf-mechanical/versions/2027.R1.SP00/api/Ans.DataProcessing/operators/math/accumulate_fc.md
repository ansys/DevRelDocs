---
uid: Ans.DataProcessing.operators.math.accumulate_fc
---

# *class* accumulate_fc(fields_container: object = None, weights: object = None, time_scoping: object = None, config: OperatorConfig = None)

Sums all the elementary data of a field to produce one elementary data point.

available inputs: `fields_container` (FieldsContainer), `weights` (Field) (optional), `time_scoping` (Scoping) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [accumulate_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/accumulate_fc.md)

**Parameters:**

* **fields_container**
* **weights**
* **time_scoping**
* **config**

**Example:**

```python
op = accumulate_fc()

op = accumulate_fc(fields_container=my_fields_container,weights=my_weights,time_scoping=my_time_scoping)
```

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

### weights

Field containing weights, one weight per entity

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

### time_scoping

time_scoping

**Type:** *LinkableInput*

## Outputs

### fields_container

Field containing the (weighted) sum for each component in an elementary data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
