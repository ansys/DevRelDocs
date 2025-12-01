---
uid: Ans.DataProcessing.operators.utility.scalars_to_field
---

# scalars_to_field Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

scalars_to_field()
scalars_to_field(double_or_vector_double: object, unit: object, location: object, num_entity: object, num_comp: object, scoping: object, config: OperatorConfig)
scalars_to_field(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### double_or_vector_double

Data of the field, default is 0-field. Specify a double to have a field of same value or specify directly the data vector.

**Type:** *LinkableInput*

### unit

Unit symbol (m, Hz, kg, ...)

**Type:** *LinkableInput*

### location

Location of the field ex 'Nodal', 'ElementalNodal', 'Elemental'... Default is 'numeric'.

**Type:** *LinkableInput*

### num_entity

Number of field entities. Default is 1 or the size of the scoping in input if specified.

**Type:** *LinkableInput*

### num_comp

Number of field components. Default is 1.

**Type:** *LinkableInput*

### scoping

Scoping.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
scalars_to_field()
```

#### Constructor

```python
scalars_to_field(double_or_vector_double, unit, location, num_entity, num_comp, scoping, config)
```

**Parameters:**

- `double_or_vector_double` (*object*)
- `unit` (*object*)
- `location` (*object*)
- `num_entity` (*object*)
- `num_comp` (*object*)
- `scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
scalars_to_field(config)
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
