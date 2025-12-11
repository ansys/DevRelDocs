---
uid: Ans.DataProcessing.operators.utility.field_clone_to_shell_layer
---

# field_clone_to_shell_layer Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Generates a Field from the Field in input 0 that has the same FieldDefinition with the exception of the shellLayers enum that is specified in input 1. The DataPointer is recomputed to the appropriate value. The Data of the output Field is 0.0 for all entities. Scoping can be shared or not based on the optional pin 2.

available inputs: `field` (Field), `shell_layer` (Int32), `duplicate_scoping` (bool) (optional)

available outputs: `field` (Field)

## Example

```python
op = field_clone_to_shell_layer()

op = field_clone_to_shell_layer(field=my_field,shell_layer=my_shell_layer,duplicate_scoping=my_duplicate_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
field_clone_to_shell_layer()
```

#### Constructor

```python
field_clone_to_shell_layer(field, shell_layer, duplicate_scoping, config)
```

**Parameters:**

- `field` (*object*)
- `shell_layer` (*object*)
- `duplicate_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
field_clone_to_shell_layer(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
