---
uid: Ans.DataProcessing.operators.logic.component_selector_fc
---

# *class* component_selector_fc(fields_container: object = None, component_number: object = None, config: OperatorConfig = None)

Creates a scalar fields container based on the selected component for each field.

available inputs: `fields_container` (FieldsContainer, Field), `component_number` (Int32, IList int, System.Collections.IEnumerable)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [component_selector_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/component_selector_fc.md)

**Parameters:**

* **fields_container**
* **component_number**
* **config**

**Example:**

```python
op = component_selector_fc()

op = component_selector_fc(fields_container=my_fields_container,component_number=my_component_number)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### component_number

one or several component index that will be extracted from the initial field.

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
