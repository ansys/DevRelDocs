---
uid: Ans.DataProcessing.operators.math.entity_extractor
---

# *class* entity_extractor(fieldA: object = None, scalar_int: object = None, config: OperatorConfig = None)

Extracts an entity from a field, based on its ID.

available inputs: `fieldA` (Field), `scalar_int` (Int32)

available outputs: `field` (Field)

**DPF Framework Reference:** [entity_extractor operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/entity_extractor.md)

**Parameters:**

* **fieldA**
* **scalar_int**
* **config**

**Example:**

```python
op = entity_extractor()

op = entity_extractor(fieldA=my_fieldA,scalar_int=my_scalar_int)
```

## Inputs

### fieldA

**Type:** *LinkableInput*

### scalar_int

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
