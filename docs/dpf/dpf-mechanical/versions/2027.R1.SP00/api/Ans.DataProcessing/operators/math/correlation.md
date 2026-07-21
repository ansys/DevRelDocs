---
uid: Ans.DataProcessing.operators.math.correlation
---

# *class* correlation(fieldA: object = None, fieldB: object = None, weights: object = None, absoluteValue: object = None, config: OperatorConfig = None)

correlation()

correlation(fieldA: object, fieldB: object, weights: object, absoluteValue: object, config: OperatorConfig)

correlation(config: OperatorConfig)



**DPF Framework Reference:** [correlation operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/correlation.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **weights**
* **absoluteValue**
* **config**

## Inputs

### fieldA

Reference field $a$.

**Type:** *LinkableInput*

### fieldB

Field $b$, or a fields container. When a fields container is provided, the correlation is computed independently for each field against the reference field $a$.

**Type:** *LinkableInput*

### weights

Optional weighting field $M$. When omitted, the standard unweighted $L^2$ inner product is used.

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

### absoluteValue

When true, returns $|\rho|$ instead of $\rho$.

**Type:** *LinkableInput*

## Outputs

### field

Correlation coefficient for each input field $b$. The output field contains one entity per input field, labelled from $1$ to $N$.

**Type:** *LinkableOutput*

### index

Zero-based index of the field in the input fields container that produced the highest correlation coefficient. Only meaningful when pin 1 receives a fields container.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
