---
uid: Ans.DataProcessing.operators.logic.component_selector
---

# *class* component_selector(field: object = None, component_number: object = None, default_value: object = None, config: OperatorConfig = None)

Creates a scalar/vector field based on the selected component.

available inputs: `field` (Field, FieldsContainer), `component_number` (Int32, IList int, System.Collections.IEnumerable), `default_value` (double) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [component_selector operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/component_selector.md)

**Parameters:**

* **field**
* **component_number**
* **default_value**
* **config**

**Example:**

```python
op = component_selector()

op = component_selector(field=my_field,component_number=my_component_number,default_value=my_default_value)
```

## Inputs

### field

**Type:** *LinkableInput*

### component_number

One or several component index that will be extracted from the initial field.

**Type:** *LinkableInput*

### default_value

Set a default value for components that do not exist.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
