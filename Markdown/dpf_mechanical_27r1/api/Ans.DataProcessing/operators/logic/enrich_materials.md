---
uid: Ans.DataProcessing.operators.logic.enrich_materials
---

# *class* enrich_materials(MaterialContainer: object = None, streams: object = None, streams_mapping: object = None, config: OperatorConfig = None)

Takes a MaterialContainer and a stream and enriches the MaterialContainer using stream data.

available inputs: `MaterialContainer` (Any), `streams` (StreamsContainer, FieldsContainer), `streams_mapping` (PropertyFieldsContainer)

available outputs: `MaterialContainer` (bool)

**DPF Framework Reference:** [enrich_materials operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/enrich_materials.md)

**Parameters:**

* **MaterialContainer**
* **streams**
* **streams_mapping**
* **config**

**Example:**

```python
op = enrich_materials()

op = enrich_materials(MaterialContainer=my_MaterialContainer,streams=my_streams,streams_mapping=my_streams_mapping)
```

## Inputs

### MaterialContainer

**Type:** *LinkableInput*

### streams

**Type:** *LinkableInput*

### streams_mapping

**Type:** *LinkableInput*

## Outputs

### MaterialContainer

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
