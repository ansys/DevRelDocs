---
uid: Ans.DataProcessing.operators.logic.solid_shell_fields
---

# *class* solid_shell_fields(fields_container: object = None, config: OperatorConfig = None)

Merges shell and solid fields for each time step/frequency in the fields container.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [solid_shell_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/solid_shell_fields.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = solid_shell_fields()

op = solid_shell_fields(fields_container=my_fields_container)
```

## Inputs

### fields_container

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
