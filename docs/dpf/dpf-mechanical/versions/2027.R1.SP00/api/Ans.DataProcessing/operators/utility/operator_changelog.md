---
uid: Ans.DataProcessing.operators.utility.operator_changelog
---

# *class* operator_changelog(operator_name: object = None, config: OperatorConfig = None)

Return a GenericDataContainer used to instantiate the Changelog of an operator based on its name.

available inputs: `operator_name` (string)

available outputs: `changelog_gdc` (GenericDataContainer)

**DPF Framework Reference:** [operator_changelog operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/operator_changelog.md)

**Parameters:**

* **operator_name**
* **config**

**Example:**

```python
op = operator_changelog()

op = operator_changelog(operator_name=my_operator_name)
```

## Inputs

### operator_name

Operator internal name.

**Type:** *LinkableInput*

## Outputs

### changelog_gdc

GenericDataContainer used to instantiate a Changelog.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
