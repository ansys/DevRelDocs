---
uid: Ans.DataProcessing.operators.utility.extract_field
---

# *class* extract_field(fields_container: object = None, indices: object = None, config: OperatorConfig = None)

Extracts the fields at the indices defined in the vector (in 1) from the fields container (in 0). If a single index is provided, returns a field; if multiple indices are provided, returns a fields container.

available inputs: `fields_container` (Field, FieldsContainer), `indices` (IList int, System.Collections.IEnumerable) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [extract_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_field.md)

**Parameters:**

* **fields_container**
* **indices**
* **config**

**Example:**

```python
op = extract_field()

op = extract_field(fields_container=my_fields_container,indices=my_indices)
```

## Inputs

### fields_container

Fields container or single field. If a field is provided, it is passed through as output

**Type:** *LinkableInput*

### indices

Indices of fields to extract. Default is [0] (first field). Single index returns a field, multiple indices return a fields container

**Type:** *LinkableInput*

## Outputs

### field

Extracted field(s). Single index produces a field, multiple indices produce a fields container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
