---
uid: Ans.DataProcessing.operators.math.mac
---

# *class* mac(fields_containerA: object = None, fields_containerB: object = None, weights: object = None, config: OperatorConfig = None)

Computes the [Modal Assurance Criterion (MAC)](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v261/en/ans_thry/thy_post16.html)

matrix between two sets of mode shapes.

For each pair of modes $\phi_i$ (from container A) and $\phi_j$ (from container B):

$$MAC_{ij} = \frac{|\phi_i^{\,*T} M \phi_j|^2}{(\phi_i^{\,*T} M \phi_i)(\phi_j^{\,*T} M \phi_j)}$$

where $^{*T}$ denotes the conjugate transpose and $M$ is the optional mass weighting matrix.

When $M$ is omitted, the standard (unweighted) inner product is used.

For mixed real-complex input (one container real, one complex), only the real parts are used.

Both containers must share the same number of components; this is not verified by the operator.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer), `weights` (Field) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [mac operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/mac.md)

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

Fields container $A$. Must have a time label and contain one field per mode shape.

**Type:** *LinkableInput*

### fields_containerB

Fields container $B$. Must have a time label and contain one field per mode shape.

**Type:** *LinkableInput*

### weights

Optional mass weighting field $M$. When omitted, the standard unweighted inner product is used.

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

## Outputs

### field

MAC matrix of size $N_A \times N_B$, where $N_A$ and $N_B$ are the number of mode shapes in containers A and B respectively. Entries are stored row by row: entry at position $(i,j)$ is $MAC_{ij}$.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
