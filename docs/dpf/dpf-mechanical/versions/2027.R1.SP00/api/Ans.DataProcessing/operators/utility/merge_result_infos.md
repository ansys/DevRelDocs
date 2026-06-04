---
uid: Ans.DataProcessing.operators.utility.merge_result_infos
---

# *class* merge_result_infos(result_infos1: object = None, result_infos2: object = None, config: OperatorConfig = None)

Assembles a set of result information into a unique one.

available inputs: `result_infos1` (ResultInfo), `result_infos2` (ResultInfo)

available outputs: `merged_result_infos` (ResultInfo)

**DPF Framework Reference:** [merge_result_infos operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_result_infos.md)

**Parameters:**

* **result_infos1**
* **result_infos2**
* **config**

**Example:**

```python
op = merge_result_infos()

op = merge_result_infos(result_infos1=my_result_infos1,result_infos2=my_result_infos2)
```

## Inputs

### result_infos1

A vector of result info containers to merge or result infos from pin 0 to ...

**Type:** *LinkableInput*

### result_infos2

A vector of result info containers to merge or result infos from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_result_infos

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
