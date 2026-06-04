---
uid: Ans.DataProcessing.operators.scoping.on_named_selection
---

# *class* on_named_selection(requested_location: object = None, named_selection_name: object = None, int_inclusive: object = None, streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

provides a scoping at a given location based on a given named selection

available inputs: `requested_location` (string), `named_selection_name` (string), `int_inclusive` (Int32) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `mesh_scoping` (Scoping)

**DPF Framework Reference:** [on_named_selection operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/on_named_selection.md)

**Parameters:**

* **requested_location**
* **named_selection_name**
* **int_inclusive**
* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = on_named_selection()

op = on_named_selection(requested_location=my_requested_location,named_selection_name=my_named_selection_name,int_inclusive=my_int_inclusive,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### requested_location

**Type:** *LinkableInput*

### named_selection_name

the string is expected to be in upper case

**Type:** *LinkableInput*

### int_inclusive

If element scoping is requested on a nodal named selection, if Inclusive == 1 then add all the elements adjacent to the nodes.If Inclusive == 0, only the elements which have all their nodes in the named selection are included

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
