---
uid: Ans.DataProcessing.operators.result.cms_subfile_info_provider
title: cms_subfile_info_provider
---

# cms_subfile_info_provider Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Read required information from a subfile.   ///available inputs: data_sources (DataSources), cms_subfile_data (bool), output_maxdof_on_masternodes (bool) (optional)
            available outputs: int32 (Int32), field (PropertyField)

cms_subfile_info_provider()
cms_subfile_info_provider(data_sources: object, cms_subfile_data: object, output_maxdof_on_masternodes: object, config: OperatorConfig)
cms_subfile_info_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
cms_subfile_info_provider()
```

#### Constructor

```python
cms_subfile_info_provider(data_sources, cms_subfile_data, output_maxdof_on_masternodes, config)
```

**Parameters:**

- `data_sources` (*object*)
- `cms_subfile_data` (*object*)
- `output_maxdof_on_masternodes` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cms_subfile_info_provider(config)
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
