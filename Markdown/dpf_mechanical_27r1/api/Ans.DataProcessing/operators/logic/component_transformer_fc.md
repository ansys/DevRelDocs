---
uid: Ans.DataProcessing.operators.logic.component_transformer_fc
---

# *class* component_transformer_fc(fields_container: object = None, component_number: object = None, default_value: object = None, config: OperatorConfig = None)

Takes the input field and creates a field with overriden value on given components.

available inputs: `fields_container` (FieldsContainer), `component_number` (Int32, IList int, System.Collections.IEnumerable), `default_value` (double) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [component_transformer_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/component_transformer_fc.md)

**Parameters:**

* **fields_container**
* **component_number**
* **default_value**
* **config**

**Example:**

```python
op = component_transformer_fc()

op = component_transformer_fc(fields_container=my_fields_container,component_number=my_component_number,default_value=my_default_value)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### component_number

One or several component index that will be modified from the initial field.

**Type:** *LinkableInput*

### default_value

Set a default value for components selected.

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
