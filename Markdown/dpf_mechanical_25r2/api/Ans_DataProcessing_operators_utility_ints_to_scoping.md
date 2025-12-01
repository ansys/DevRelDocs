---
uid: Ans.DataProcessing.operators.utility.ints_to_scoping
---

# ints_to_scoping Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

take a int or a vector of int and transform it in a one entity field of location "numeric".   ///available inputs: int_or_vector_int (Int32, IList int, System.Collections.IEnumerable), location (string) (optional)
            available outputs: scoping (Scoping)

ints_to_scoping()
ints_to_scoping(int_or_vector_int: object, location: object, config: OperatorConfig)
ints_to_scoping(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
ints_to_scoping()
```

#### Constructor

```python
ints_to_scoping(int_or_vector_int, location, config)
```

**Parameters:**

- `int_or_vector_int` (*object*)
- `location` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
ints_to_scoping(config)
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
