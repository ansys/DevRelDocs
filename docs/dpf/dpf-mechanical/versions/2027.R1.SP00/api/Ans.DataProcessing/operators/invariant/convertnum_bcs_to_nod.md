---
uid: Ans.DataProcessing.operators.invariant.convertnum_bcs_to_nod
---

# *class* convertnum_bcs_to_nod(fields_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Converts a fields container from BCS to NOD ordering.

available inputs: `fields_container` (FieldsContainer), `data_sources` (DataSources)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [convertnum_bcs_to_nod operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/convertnum_bcs_to_nod.md)

**Parameters:**

* **fields_container**
* **data_sources**
* **config**

**Example:**

```python
op = convertnum_bcs_to_nod()

op = convertnum_bcs_to_nod(fields_container=my_fields_container,data_sources=my_data_sources)
```

## Inputs

### fields_container

fields_container

**Type:** *LinkableInput*

### data_sources

Data_sources (must contain the full file).

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
