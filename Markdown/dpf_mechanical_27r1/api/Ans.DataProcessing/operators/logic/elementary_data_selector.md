---
uid: Ans.DataProcessing.operators.logic.elementary_data_selector
---

# *class* elementary_data_selector(field: object = None, elementary_data_index: object = None, default_value: object = None, elementary_data_index_2: object = None, config: OperatorConfig = None)

Creates a scalar/vector field based on the selected elementary data.

available inputs: `field` (Field, FieldsContainer), `elementary_data_index` (Int32, IList int, System.Collections.IEnumerable), `default_value` (double) (optional), `elementary_data_index_2` (Int32, IList int, System.Collections.IEnumerable) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [elementary_data_selector operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/elementary_data_selector.md)

**Parameters:**

* **field**
* **elementary_data_index**
* **default_value**
* **elementary_data_index_2**
* **config**

**Example:**

```python
op = elementary_data_selector()

op = elementary_data_selector(field=my_field,elementary_data_index=my_elementary_data_index,default_value=my_default_value,elementary_data_index_2=my_elementary_data_index_2)
```

## Inputs

### field

**Type:** *LinkableInput*

### elementary_data_index

One or several elementary data index that will be extracted from the initial field. For field with nature matrix, this is the line indices to extract.

**Type:** *LinkableInput*

### default_value

Set a default value for elementary data that do not exist.

**Type:** *LinkableInput*

### elementary_data_index_2

For field with nature matrix, this is the column indices to extract.

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
