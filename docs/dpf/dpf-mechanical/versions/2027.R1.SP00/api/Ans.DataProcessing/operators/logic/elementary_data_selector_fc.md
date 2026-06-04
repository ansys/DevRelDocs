---
uid: Ans.DataProcessing.operators.logic.elementary_data_selector_fc
---

# *class* elementary_data_selector_fc(fields_container: object = None, elementary_data_index: object = None, elementary_data_index_2: object = None, config: OperatorConfig = None)

Creates a scalar fields container based on the selected elementary data for each field.

available inputs: `fields_container` (FieldsContainer, Field), `elementary_data_index` (Int32, IList int, System.Collections.IEnumerable), `elementary_data_index_2` (Int32, IList int, System.Collections.IEnumerable) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [elementary_data_selector_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/elementary_data_selector_fc.md)

**Parameters:**

* **fields_container**
* **elementary_data_index**
* **elementary_data_index_2**
* **config**

**Example:**

```python
op = elementary_data_selector_fc()

op = elementary_data_selector_fc(fields_container=my_fields_container,elementary_data_index=my_elementary_data_index,elementary_data_index_2=my_elementary_data_index_2)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### elementary_data_index

one or several elementary data indices that will be extracted from the initial field. For a field with a nature matrix, this extracts the line indices.

**Type:** *LinkableInput*

### elementary_data_index_2

For a field with nature matrix, this extracts the column indices.

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
