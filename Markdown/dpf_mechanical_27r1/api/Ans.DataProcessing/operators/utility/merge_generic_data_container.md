---
uid: Ans.DataProcessing.operators.utility.merge_generic_data_container
---

# *class* merge_generic_data_container(generic_data_container1: object = None, generic_data_container2: object = None, config: OperatorConfig = None)

Merges a list of generic data container. For each data entry, the merge operation is forwarded to the correct merge Operator. Primitive types cannot be merged, first instance found will be maintained in the result.

available inputs: `generic_data_container1` (GenericDataContainer), `generic_data_container2` (GenericDataContainer)

available outputs: `generic_data_container` (GenericDataContainer)

**DPF Framework Reference:** [merge_generic_data_container operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_generic_data_container.md)

**Parameters:**

* **generic_data_container1**
* **generic_data_container2**
* **config**

**Example:**

```python
op = merge_generic_data_container()

op = merge_generic_data_container(generic_data_container1=my_generic_data_container1,generic_data_container2=my_generic_data_container2)
```

## Inputs

### generic_data_container1

Either a vector of generic data containers (sharing the same data types) or generic data containers from pin 0 to ... to merge. Supported types rely on existing type specific merge operators.

**Type:** *LinkableInput*

### generic_data_container2

Either a vector of generic data containers (sharing the same data types) or generic data containers from pin 0 to ... to merge. Supported types rely on existing type specific merge operators.

**Type:** *LinkableInput*

## Outputs

### generic_data_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
