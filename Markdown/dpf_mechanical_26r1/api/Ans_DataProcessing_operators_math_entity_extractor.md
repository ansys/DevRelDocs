---
uid: Ans.DataProcessing.operators.math.entity_extractor
---

# entity_extractor Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Extracts an entity from a field, based on its ID.   ///available inputs: fieldA (Field), scalar_int (Int32)
            available outputs: field (Field)

entity_extractor()
entity_extractor(fieldA: object, scalar_int: object, config: OperatorConfig)
entity_extractor(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
entity_extractor()
```

#### Constructor

```python
entity_extractor(fieldA, scalar_int, config)
```

**Parameters:**

- `fieldA` (*object*)
- `scalar_int` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
entity_extractor(config)
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
