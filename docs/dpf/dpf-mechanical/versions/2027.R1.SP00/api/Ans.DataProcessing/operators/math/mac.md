---
uid: Ans.DataProcessing.operators.math.mac
---

# *class* mac(fields_containerA: object = None, fields_containerB: object = None, weights: object = None, config: OperatorConfig = None)

Computes MAC Matrix between two fields container, both for real and complex cases. For mixed cases (real-complex and complex) only the real part is considered. Providing inputs with the same component scoping is an user responsability.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer), `weights` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [mac operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/mac.md)

**Parameters:**

* **fields_containerA**
* **fields_containerB**
* **weights**
* **config**

**Example:**

```python
op = mac()

op = mac(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB,weights=my_weights)
```

## Inputs

### fields_containerA

Fields Container A.

**Type:** *LinkableInput*

### fields_containerB

Fields Container B.

**Type:** *LinkableInput*

### weights

Field M, optional weighting for MAC Matrix computation.

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

## Outputs

### field

MAC Matrix for all the combinations between mode fields of Field Container A and Field Container B. Results listed row by row.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
