---
uid: Ans.DataProcessing.operators.utility.default_value
---

# *class* default_value(forced_value: object = None, default_value: object = None, config: OperatorConfig = None)

Returns the value from pin 0 if provided, otherwise returns the default value from pin 1. This operator acts as a fallback mechanism for optional inputs.

available inputs: `forced_value` (Any) (optional), `default_value` (Any)

available outputs: `output` (Any)

**DPF Framework Reference:** [default_value operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/default_value.md)

**Parameters:**

* **forced_value**
* **default_value**
* **config**

**Example:**

```python
op = default_value()

op = default_value(forced_value=my_forced_value,default_value=my_default_value)
```

## Inputs

### forced_value

Primary value to return if provided. Can be any type

**Type:** *LinkableInput*

### default_value

Default value to return if pin 0 is not connected. Must be the same type as pin 0

**Type:** *LinkableInput*

## Outputs

### output

Returns primary_value if provided, otherwise default_value

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
