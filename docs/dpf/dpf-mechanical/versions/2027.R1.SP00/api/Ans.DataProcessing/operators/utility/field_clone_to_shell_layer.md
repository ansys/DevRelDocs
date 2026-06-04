---
uid: Ans.DataProcessing.operators.utility.field_clone_to_shell_layer
---

# *class* field_clone_to_shell_layer(field: object = None, shell_layer: object = None, duplicate_scoping: object = None, config: OperatorConfig = None)

Generates a Field from the Field in input 0 that has the same FieldDefinition with the exception of the shellLayers enum that is specified in input 1. The DataPointer is recomputed to the appropriate value. The Data of the output Field is 0.0 for all entities. Scoping can be shared or not based on the optional pin 2.

available inputs: `field` (Field), `shell_layer` (Int32), `duplicate_scoping` (bool) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [field_clone_to_shell_layer operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/field_clone_to_shell_layer.md)

**Parameters:**

* **field**
* **shell_layer**
* **duplicate_scoping**
* **config**

**Example:**

```python
op = field_clone_to_shell_layer()

op = field_clone_to_shell_layer(field=my_field,shell_layer=my_shell_layer,duplicate_scoping=my_duplicate_scoping)
```

## Inputs

### field

**Type:** *LinkableInput*

### shell_layer

0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid.

**Type:** *LinkableInput*

### duplicate_scoping

If true, a new scoping is computed for the output Field. If false, the input Field scoping is used. Default is false.

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
