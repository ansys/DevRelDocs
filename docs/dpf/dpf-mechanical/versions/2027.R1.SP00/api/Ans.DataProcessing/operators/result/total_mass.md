---
uid: Ans.DataProcessing.operators.result.total_mass
---

# *class* total_mass(data_sources: object = None, config: OperatorConfig = None)

Reads total mass from mode file.

available inputs: `data_sources` (DataSources)

available outputs: `mass` (double)

**DPF Framework Reference:** [total_mass operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/total_mass.md)

**Parameters:**

* **data_sources**
* **config**

**Example:**

```python
op = total_mass()

op = total_mass(data_sources=my_data_sources)
```

## Inputs

### data_sources

Data sources (must contain at least one mode file).

**Type:** *LinkableInput*

## Outputs

### mass

the unit should be grabbed from the rst file

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
