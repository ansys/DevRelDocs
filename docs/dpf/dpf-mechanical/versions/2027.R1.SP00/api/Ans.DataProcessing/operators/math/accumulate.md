---
uid: Ans.DataProcessing.operators.math.accumulate
---

# *class* accumulate(fieldA: object = None, weights: object = None, time_scoping: object = None, config: OperatorConfig = None)

Sums all the elementary data of a field to produce one elementary data point.

available inputs: `fieldA` (Field, FieldsContainer), `weights` (Field) (optional), `time_scoping` (Scoping) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [accumulate operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/accumulate.md)

**Parameters:**

* **fieldA**
* **weights**
* **time_scoping**
* **config**

**Example:**

```python
op = accumulate()

op = accumulate(fieldA=my_fieldA,weights=my_weights,time_scoping=my_time_scoping)
```

## Inputs

### fieldA

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

### field

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
