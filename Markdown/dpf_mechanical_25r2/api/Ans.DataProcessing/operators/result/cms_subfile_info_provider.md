---
uid: Ans.DataProcessing.operators.result.cms_subfile_info_provider
---

# cms_subfile_info_provider Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Read required information from a subfile.

available inputs: `data_sources` (DataSources), `cms_subfile_data` (bool), `output_maxdof_on_masternodes` (bool) (optional)

available outputs: `int32` (Int32), `field` (PropertyField)

## Example

```python
op = cms_subfile_info_provider()

op = cms_subfile_info_provider(data_sources=my_data_sources,cms_subfile_data=my_cms_subfile_data,output_maxdof_on_masternodes=my_output_maxdof_on_masternodes)
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

### cms_subfile_data

If this pin i set to true, data are return in a field.

**Type:** *LinkableInput*

### output_maxdof_on_masternodes

If this pin is set to true, compute and add field with max degrees of freedom on master nodes

**Type:** *LinkableInput*

## Outputs

### int32

returns integer values in the order : unit system used, stiffness matrix present key, damping matrix present key, mass matrix present key, number of master nodes, number of virtual nodes

**Type:** *LinkableOutput*

### field

returns integer values in the order : number of load vectors (nvects), number of nodes (nnod), number of virtual nodes (nvnodes), number of modes (nvmodes)

**Type:** *LinkableOutput*

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
