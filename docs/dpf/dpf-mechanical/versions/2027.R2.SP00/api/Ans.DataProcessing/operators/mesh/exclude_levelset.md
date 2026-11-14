---
uid: Ans.DataProcessing.operators.mesh.exclude_levelset
---

# *class* exclude_levelset(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Returns a copy of the first level-set field.

The second input currently has no effect on the output.

available inputs: `fieldA` (Field), `fieldB` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [exclude_levelset operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mesh/exclude_levelset.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = exclude_levelset()

op = exclude_levelset(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Inputs

### fieldA

A level-set field copied to the output. Its values, scoping, and field definition provide the output content.

**Type:** *LinkableInput*

### fieldB

A second level-set field. It currently has no effect on the output.

**Type:** *LinkableInput*

## Outputs

### field

A copy of fieldA with the same values, scoping, and field definition. The second input does not affect the result.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
