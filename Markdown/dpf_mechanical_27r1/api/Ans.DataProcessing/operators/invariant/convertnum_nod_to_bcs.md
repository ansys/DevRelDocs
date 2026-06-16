---
uid: Ans.DataProcessing.operators.invariant.convertnum_nod_to_bcs
---

# *class* convertnum_nod_to_bcs(fields_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Converts a fields container from NOD to BCS ordering.

available inputs: `fields_container` (FieldsContainer), `data_sources` (DataSources)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [convertnum_nod_to_bcs operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/convertnum_nod_to_bcs.md)

**Parameters:**

* **fields_container**
* **data_sources**
* **config**

**Example:**

```python
op = convertnum_nod_to_bcs()

op = convertnum_nod_to_bcs(fields_container=my_fields_container,data_sources=my_data_sources)
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
