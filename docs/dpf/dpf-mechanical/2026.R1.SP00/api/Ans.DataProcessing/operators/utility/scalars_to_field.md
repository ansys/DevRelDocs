---
uid: Ans.DataProcessing.operators.utility.scalars_to_field
---

# scalars_to_field Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

scalars_to_field()
scalars_to_field(double_or_vector_double: object, unit: object, location: object, num_entities: object, num_components: object, scoping: object, config: OperatorConfig)
scalars_to_field(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### double_or_vector_double

Data of the field. Default is 0-field. Specify a double to create a field with uniform values, or a vector for explicit data per entity

**Type:** *LinkableInput*

### unit

Unit symbol (m, Hz, kg, ...). Default is dimensionless

**Type:** *LinkableInput*

### location

Location of the field: 'Nodal', 'ElementalNodal', 'Elemental', etc. Default is 'numeric'

**Type:** *LinkableInput*

### num_entities

Number of field entities. Default is 1, or the size of the scoping if provided

**Type:** *LinkableInput*

### num_entity

Deprecated alias of: num_entities

**Type:** *LinkableInput*

### num_components

Number of field components per entity. Default is 1 for scalar, >1 for vector

**Type:** *LinkableInput*

### num_comp

Deprecated alias of: num_components

**Type:** *LinkableInput*

### scoping

Scoping defining entity IDs and locations. If provided, overrides num_entities

**Type:** *LinkableInput*

## Outputs

### field

Generated field with specified data and properties

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
scalars_to_field()
```

#### Constructor

```python
scalars_to_field(double_or_vector_double, unit, location, num_entities, num_components, scoping, config)
```

**Parameters:**

- `double_or_vector_double` (*object*)
- `unit` (*object*)
- `location` (*object*)
- `num_entities` (*object*)
- `num_components` (*object*)
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
