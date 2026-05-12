---
uid: Ans.DataProcessing.operators.utility.merge_meshes
---

# *class* merge_meshes(naive_merge_elements: object = None, should_merge_named_selections: object = None, meshes1: object = None, meshes2: object = None, merge_method: object = None, box_size: object = None, remove_duplicate_elements: object = None, config: OperatorConfig = None)

Take a set of meshes and assemble them in a unique one

available inputs: `naive_merge_elements` (bool) (optional), `should_merge_named_selections` (bool) (optional), `meshes1` (MeshedRegion, MeshesContainer), `meshes2` (MeshedRegion, MeshesContainer), `merge_method` (Int32) (optional), `box_size` (double) (optional), `remove_duplicate_elements` (Int32) (optional)

available outputs: `merges_mesh` (MeshedRegion)

**DPF Framework Reference:** [merge_meshes operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_meshes.md)

**Parameters:**

* **naive_merge_elements**
* **should_merge_named_selections**
* **meshes1**
* **meshes2**
* **merge_method**
* **box_size**
* **remove_duplicate_elements**
* **config**

**Example:**

```python
op = merge_meshes()

op = merge_meshes(naive_merge_elements=my_naive_merge_elements,should_merge_named_selections=my_should_merge_named_selections,meshes1=my_meshes1,meshes2=my_meshes2,merge_method=my_merge_method,box_size=my_box_size,remove_duplicate_elements=my_remove_duplicate_elements)
```

## Inputs

### naive_merge_elements

If true, merge the elemental Property Fields of the input meshes assuming that there is no repetition in their scoping ids. Default is false.

**Type:** *LinkableInput*

### should_merge_named_selections

For certain types of files (such as RST), scoping from names selection does not need to be merged.If this pin is true, the merge occurs. If this pin is false, the merge does not occur. Default is true.

**Type:** *LinkableInput*

### meshes1

A vector of meshed region to merge or meshed region from pin 0 to ...

**Type:** *LinkableInput*

### meshes2

A vector of meshed region to merge or meshed region from pin 0 to ...

**Type:** *LinkableInput*

### merge_method

0: merge by distance, 1: merge by node id (default)

**Type:** *LinkableInput*

### box_size

Box size used when merging by distance. Default value is 1e-12.

**Type:** *LinkableInput*

### remove_duplicate_elements

0: keep duplicate elements (default), 1: remove duplicate elements

**Type:** *LinkableInput*

## Outputs

### merges_mesh

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
