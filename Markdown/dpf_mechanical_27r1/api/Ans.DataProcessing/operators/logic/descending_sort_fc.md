---
uid: Ans.DataProcessing.operators.logic.descending_sort_fc
---

# *class* descending_sort_fc(fields_container: object = None, component_priority_table: object = None, sort_by_scoping: object = None, config: OperatorConfig = None)

Sort a field (in 0) in descending order, with an optional component priority table or a boolean to enable sort by scoping (in 1). This operator doesn't support multiple elementary data per entity.

available inputs: `fields_container` (FieldsContainer), `component_priority_table` (IList int, System.Collections.IEnumerable) (optional), `sort_by_scoping` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [descending_sort_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/descending_sort_fc.md)

**Parameters:**

* **fields_container**
* **component_priority_table**
* **sort_by_scoping**
* **config**

**Example:**

```python
op = descending_sort_fc()

op = descending_sort_fc(fields_container=my_fields_container,component_priority_table=my_component_priority_table,sort_by_scoping=my_sort_by_scoping)
```

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

### component_priority_table

component priority table (vector of int)

**Type:** *LinkableInput*

### sort_by_scoping

if true, uses scoping to sort the field (default is false)

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
