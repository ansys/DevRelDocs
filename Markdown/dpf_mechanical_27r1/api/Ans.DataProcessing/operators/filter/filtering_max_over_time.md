---
uid: Ans.DataProcessing.operators.filter.filtering_max_over_time
---

# *class* filtering_max_over_time(invariant_fc_operator: object = None, output_pin: object = None, list_of_results: object = None, threshold: object = None, config: OperatorConfig = None)

Creates a filtering workflow that will filter results based on a threshold of a selected invariant.

available inputs: `invariant_fc_operator` (string), `output_pin` (Int32) (optional), `list_of_results` (string) (optional), `threshold` (double) (optional)

available outputs: `workflow` (Workflow)

**DPF Framework Reference:** [filtering_max_over_time operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/filter/filtering_max_over_time.md)

**Parameters:**

* **invariant_fc_operator**
* **output_pin**
* **list_of_results**
* **threshold**
* **config**

**Example:**

```python
op = filtering_max_over_time()

op = filtering_max_over_time(invariant_fc_operator=my_invariant_fc_operator,output_pin=my_output_pin,list_of_results=my_list_of_results,threshold=my_threshold)
```

## Inputs

### invariant_fc_operator

Name of the invariant operator to be used to calculate filter (available: eqv_fc, invariants_deriv_fc, invariants_fc).

**Type:** *LinkableInput*

### output_pin

Output pin of the invariant operator. Default = 0.

**Type:** *LinkableInput*

### list_of_results

If no result is given, filter will be applied on Stresses and Strains

**Type:** *LinkableInput*

### threshold

Threshold from which the operator will filter.

**Type:** *LinkableInput*

## Outputs

### workflow

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
