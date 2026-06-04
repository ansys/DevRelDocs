---
uid: Ans.DataProcessing.operators.result.coordinate_system
---

# *class* coordinate_system(cs_id: object = None, streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Extracts the Rotation Matrix and Origin of a specific coordinate system.

available inputs: `cs_id` (Int32), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `field` (Field)

**DPF Framework Reference:** [coordinate_system operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/coordinate_system.md)

**Parameters:**

* **cs_id**
* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = coordinate_system()

op = coordinate_system(cs_id=my_cs_id,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### cs_id

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### field

The first 9 double are the rotation (3x3 matrix) and the last 3 is the translation vector. The rotation matrix stored is from local to global coordinate system.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
