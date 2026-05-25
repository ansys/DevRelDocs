---
uid: Ans.DataProcessing.operators.logic.identical_generic_data_containers
---

# *class* identical_generic_data_containers(generic_data_containerA: object = None, generic_data_containerB: object = None, double_value: object = None, double_tolerance: object = None, compare_auxiliary: object = None, config: OperatorConfig = None)

Takes two generic data containers and compares them. Supported types: Field, FieldsContainer, Mesh, MeshesContainer, PropertyField, PropertyFieldsContainer, Scoping, ScopingsContainer, StringFieldstandard types (double, int, string, vector of int, doubles, string)Note: all inputs related to fields, mesh, and so on are passed to each property check.

available inputs: `generic_data_containerA` (GenericDataContainer), `generic_data_containerB` (GenericDataContainer), `double_value` (double), `double_tolerance` (double) (optional), `compare_auxiliary` (bool)

available outputs: `included` (bool), `message` (string)

**DPF Framework Reference:** [identical_generic_data_containers operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_generic_data_containers.md)

**Parameters:**

* **generic_data_containerA**
* **generic_data_containerB**
* **double_value**
* **double_tolerance**
* **compare_auxiliary**
* **config**

**Example:**

```python
op = identical_generic_data_containers()

op = identical_generic_data_containers(generic_data_containerA=my_generic_data_containerA,generic_data_containerB=my_generic_data_containerB,double_value=my_double_value,double_tolerance=my_double_tolerance,compare_auxiliary=my_compare_auxiliary)
```

## Inputs

### generic_data_containerA

**Type:** *LinkableInput*

### generic_data_containerB

**Type:** *LinkableInput*

### double_value

Double positive small value. Smallest value considered during the comparison step. All the absolute values in the field less than this value are considered null, (default value: 1.0e-14).

**Type:** *LinkableInput*

### double_tolerance

**Type:** *LinkableInput*

### compare_auxiliary

For meshes and meshescontainer: compare auxiliary data (i.e property fields, scopings...). Default value is 'false'.

**Type:** *LinkableInput*

## Outputs

### included

bool (true if belongs...)

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
