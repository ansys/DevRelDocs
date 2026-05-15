---
uid: Ans.DataProcessing.operators.utility.merge_supports
---

# *class* merge_supports(should_merge_named_selections: object = None, supports1: object = None, supports2: object = None, config: OperatorConfig = None)

Assembles a set of supports into a unique one.

available inputs: `should_merge_named_selections` (bool) (optional), `supports1` (AbstractFieldSupport), `supports2` (AbstractFieldSupport)

available outputs: `merged_support` (AbstractFieldSupport)

**DPF Framework Reference:** [merge_supports operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_supports.md)

**Parameters:**

* **should_merge_named_selections**
* **supports1**
* **supports2**
* **config**

**Example:**

```python
op = merge_supports()

op = merge_supports(should_merge_named_selections=my_should_merge_named_selections,supports1=my_supports1,supports2=my_supports2)
```

## Inputs

### should_merge_named_selections

For some result files (such as RST), the scoping on names selection is duplicated through all the distributed files.If this pin is false, the merging process is skipped. If it is true, this scoping is merged. Default is true.

**Type:** *LinkableInput*

### supports1

A vector of supports to merge or supports from pin 0 to ...

**Type:** *LinkableInput*

### supports2

A vector of supports to merge or supports from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_support

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
