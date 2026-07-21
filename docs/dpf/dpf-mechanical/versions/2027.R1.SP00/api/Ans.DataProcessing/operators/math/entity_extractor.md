---
uid: Ans.DataProcessing.operators.math.entity_extractor
---

# *class* entity_extractor(fieldA: object = None, scalar_int: object = None, config: OperatorConfig = None)

Extracts a single scalar value from a field by its zero-based scoping index $k$ (pin 1).

The output field contains one entity: the entity whose scoping index is $k$,

with its entity ID resolved from the input scoping and its first data component copied.

Only the first component is extracted regardless of the input field's dimensionality.

Note: $k$ is the index within the field's scoping, not the entity ID.

available inputs: `fieldA` (Field), `scalar_int` (Int32)

available outputs: `field` (Field), `int32` (Int32)

**DPF Framework Reference:** [entity_extractor operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/entity_extractor.md)

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

Input field from which the entity is extracted.

**Type:** *LinkableInput*

### scalar_int

Zero-based scoping index $k$ of the entity to extract.

**Type:** *LinkableInput*

## Outputs

### field

Single-entity scalar field holding the first component of the extracted entity. The entity ID is the ID of the $k$-th entity in the input scoping. Always scalar regardless of the input field's dimensionality.

**Type:** *LinkableOutput*

### int32

Echo of the input index $k$ (pin 1).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
