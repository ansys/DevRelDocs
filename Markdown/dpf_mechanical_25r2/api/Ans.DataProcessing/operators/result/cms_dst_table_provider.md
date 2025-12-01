---
uid: Ans.DataProcessing.operators.result.cms_dst_table_provider
---

# cms_dst_table_provider Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Read CST table from a subfile.

available inputs: `data_sources` (DataSources)

available outputs: `dst_table` (PropertyField)

## Example

```python
op = cms_dst_table_provider()

op = cms_dst_table_provider(data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### data_sources

Data_sources (must contain at least one subfile).

**Type:** *LinkableInput*

## Outputs

### dst_table

returns integer values of the dst table

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
cms_dst_table_provider()
```

#### Constructor

```python
cms_dst_table_provider(data_sources, config)
```

**Parameters:**

- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cms_dst_table_provider(config)
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
