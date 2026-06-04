---
uid: Ans.DataProcessing.operators.utility.make_label_space
---

# *class* make_label_space(base_label: object = None, label_name: object = None, label_value1: object = None, label_value2: object = None, config: OperatorConfig = None)

Assemble strings and integers to make a label space.

available inputs: `base_label` (LabelSpace, FieldsContainer, ScopingsContainer) (optional), `label_name` (string), `label_value1` (Int32), `label_value2` (Int32)

available outputs: `label` (LabelSpace)

**DPF Framework Reference:** [make_label_space operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/make_label_space.md)

**Parameters:**

* **base_label**
* **label_name**
* **label_value1**
* **label_value2**
* **config**

**Example:**

```python
op = make_label_space()

op = make_label_space(base_label=my_base_label,label_name=my_label_name,label_value1=my_label_value1,label_value2=my_label_value2)
```

## Inputs

### base_label

Used as a base label (extracted from Fields/Scoping Container, or directly from Label Space) that is concatenated with provided values.

**Type:** *LinkableInput*

### label_name

**Type:** *LinkableInput*

### label_value1

**Type:** *LinkableInput*

### label_value2

**Type:** *LinkableInput*

## Outputs

### label

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
