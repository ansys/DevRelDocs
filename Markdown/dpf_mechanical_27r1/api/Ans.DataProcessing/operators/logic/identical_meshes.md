---
uid: Ans.DataProcessing.operators.logic.identical_meshes
---

# *class* identical_meshes(meshA: object = None, meshB: object = None, small_value: object = None, tolerance: object = None, compare_auxiliary: object = None, config: OperatorConfig = None)

Takes two meshes and compares them. Note: When comparing mesh properties, the current behaviour is to verify that the properties in the first mesh (pin 0) are included in the second mesh (pin 1).

available inputs: `meshA` (MeshedRegion), `meshB` (MeshedRegion), `small_value` (double) (optional), `tolerance` (double) (optional), `compare_auxiliary` (bool)

available outputs: `are_identical` (bool)

**DPF Framework Reference:** [identical_meshes operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_meshes.md)

**Parameters:**

* **meshA**
* **meshB**
* **small_value**
* **tolerance**
* **compare_auxiliary**
* **config**

**Example:**

```python
op = identical_meshes()

op = identical_meshes(meshA=my_meshA,meshB=my_meshB,small_value=my_small_value,tolerance=my_tolerance,compare_auxiliary=my_compare_auxiliary)
```

## Inputs

### meshA

**Type:** *LinkableInput*

### meshB

**Type:** *LinkableInput*

### small_value

define what is a small value for numeric comparison (default value:1.0e-14).

**Type:** *LinkableInput*

### tolerance

define the relative tolerance ceil for numeric comparison (default is 0.001).

**Type:** *LinkableInput*

### compare_auxiliary

compare auxiliary data (i.e property fields, scopings...). Default value is 'false'.

**Type:** *LinkableInput*

## Outputs

### are_identical

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
