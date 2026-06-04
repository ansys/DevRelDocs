---
uid: Ans.DataProcessing.operators.compression.kmeans_clustering
---

# *class* kmeans_clustering(clusters_number: object = None, formula: object = None, fields_container: object = None, component_number: object = None, config: OperatorConfig = None)

Apply kMeans clustering to group data depending on the data's non-linearity.

available inputs: `clusters_number` (Int32) (optional), `formula` (string) (optional), `fields_container` (FieldsContainer), `component_number` (Int32) (optional)

available outputs: `scoping_clusters` (ScopingsContainer)

**DPF Framework Reference:** [kmeans_clustering operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/compression/kmeans_clustering.md)

**Parameters:**

* **clusters_number**
* **formula**
* **fields_container**
* **component_number**
* **config**

**Example:**

```python
op = kmeans_clustering()

op = kmeans_clustering(clusters_number=my_clusters_number,formula=my_formula,fields_container=my_fields_container,component_number=my_component_number)
```

## Inputs

### clusters_number

number of the clusters (dafault is 3)

**Type:** *LinkableInput*

### formula

formula ('dist'/'dotprod'), default is 'dist'

**Type:** *LinkableInput*

### fields_container

an iunput fields container containing the data which will be used for the clustering

**Type:** *LinkableInput*

### component_number

component number as an int (default is 0), ex '0' for X-displacement, '1' for Y-displacement,...

**Type:** *LinkableInput*

## Outputs

### scoping_clusters

Scopings container with the space scoping (entities' ids) corresponding to each of k-clusters

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
