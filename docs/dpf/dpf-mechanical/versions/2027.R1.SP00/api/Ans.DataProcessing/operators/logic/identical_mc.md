---
uid: Ans.DataProcessing.operators.logic.identical_mc
---

# *class* identical_mc(meshes_containerA: object = None, meshes_containerB: object = None, small_value: object = None, tolerance: object = None, compare_auxiliary: object = None, config: OperatorConfig = None)

Checks if two meshes_container are identical.

available inputs: `meshes_containerA` (MeshesContainer), `meshes_containerB` (MeshesContainer), `small_value` (double) (optional), `tolerance` (double) (optional), `compare_auxiliary` (bool)

available outputs: `boolean` (bool), `message` (string)

**DPF Framework Reference:** [identical_mc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_mc.md)

**Parameters:**

* **meshes_containerA**
* **meshes_containerB**
* **small_value**
* **tolerance**
* **compare_auxiliary**
* **config**

**Example:**

```python
op = identical_mc()

op = identical_mc(meshes_containerA=my_meshes_containerA,meshes_containerB=my_meshes_containerB,small_value=my_small_value,tolerance=my_tolerance,compare_auxiliary=my_compare_auxiliary)
```

## Inputs

### meshes_containerA

**Type:** *LinkableInput*

### meshes_containerB

**Type:** *LinkableInput*

### small_value

Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14).

**Type:** *LinkableInput*

### tolerance

**Type:** *LinkableInput*

### compare_auxiliary

compare auxiliary data (i.e property fields, scopings...). Default value is 'false'.

**Type:** *LinkableInput*

## Outputs

### boolean

bool (true if identical...)

**Type:** *LinkableOutput*

### message

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
