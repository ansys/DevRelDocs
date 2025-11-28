---
uid: Ans.DataProcessing.operators.invariant.convertnum_nod_to_bcs
---

# convertnum_nod_to_bcs Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

Converts a fields container from NOD to BCS ordering.   ///available inputs: fields_container (FieldsContainer), data_sources (DataSources)
            available outputs: fields_container (FieldsContainer)

convertnum_nod_to_bcs()
convertnum_nod_to_bcs(fields_container: object, data_sources: object, config: OperatorConfig)
convertnum_nod_to_bcs(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.invariant` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
convertnum_nod_to_bcs()
```

#### Constructor

```python
convertnum_nod_to_bcs(fields_container, data_sources, config)
```

**Parameters:**

- `fields_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
convertnum_nod_to_bcs(config)
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
