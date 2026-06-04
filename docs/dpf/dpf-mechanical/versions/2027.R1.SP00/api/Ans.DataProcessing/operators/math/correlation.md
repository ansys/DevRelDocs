---
uid: Ans.DataProcessing.operators.math.correlation
---

# *class* correlation(fieldA: object = None, fieldB: object = None, weights: object = None, absoluteValue: object = None, config: OperatorConfig = None)

correlation()
correlation(fieldA: object, fieldB: object, weights: object, absoluteValue: object, config: OperatorConfig)
correlation(config: OperatorConfig)


**DPF Framework Reference:** [correlation operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/correlation.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **weights**
* **absoluteValue**
* **config**

## Inputs

### fieldA

Field a. The reference field.

**Type:** *LinkableInput*

### fieldB

Field b. If a fields container is provided, correlation is computed for each field.

**Type:** *LinkableInput*

### weights

Field M, optional weighting for correlation computation.

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

### absoluteValue

If true, correlation factor is ||aMb||/(||aMa||.||bMb||)

**Type:** *LinkableInput*

## Outputs

### field

Correlation factor for each input field b.

**Type:** *LinkableOutput*

### index

If several b are provided, this output contains the index of the highest correlation factor.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
