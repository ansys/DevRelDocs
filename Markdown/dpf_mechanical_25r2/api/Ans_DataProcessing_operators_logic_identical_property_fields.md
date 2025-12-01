---
uid: Ans.DataProcessing.operators.logic.identical_property_fields
---

# identical_property_fields Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Takes two property fields and compares them.   ///available inputs: property_fieldA (MeshedRegion), property_fieldB (MeshedRegion)
            available outputs: are_identical (bool), information (string)

identical_property_fields()
identical_property_fields(property_fieldA: object, property_fieldB: object, config: OperatorConfig)
identical_property_fields(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
identical_property_fields()
```

#### Constructor

```python
identical_property_fields(property_fieldA, property_fieldB, config)
```

**Parameters:**

- `property_fieldA` (*object*)
- `property_fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_property_fields(config)
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
