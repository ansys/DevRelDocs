---
uid: Ans.DataProcessing.operators.logic.ascending_sort
---

# *class* ascending_sort(field: object = None, component_priority_table: object = None, sort_by_scoping: object = None, config: OperatorConfig = None)

Sort a field (in 0) in ascending order with an optional component priority table, or a boolean, to enable sort by scoping (in 1). This operator does not support multiple elementary data per entity.

available inputs: `field` (Field, FieldsContainer), `component_priority_table` (IList int, System.Collections.IEnumerable) (optional), `sort_by_scoping` (bool) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [ascending_sort operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/ascending_sort.md)

**Parameters:**

* **field**
* **component_priority_table**
* **sort_by_scoping**
* **config**

**Example:**

```python
op = ascending_sort()

op = ascending_sort(field=my_field,component_priority_table=my_component_priority_table,sort_by_scoping=my_sort_by_scoping)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### component_priority_table

component priority table (vector of int)

**Type:** *LinkableInput*

### sort_by_scoping

if true, uses scoping to sort the field (default is false)

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
