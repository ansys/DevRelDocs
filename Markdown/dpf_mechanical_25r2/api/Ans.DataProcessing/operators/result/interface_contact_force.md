---
uid: Ans.DataProcessing.operators.result.interface_contact_force
---

# interface_contact_force Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Read Interface Contact Force (LSDyna) by calling the readers defined by the datasources.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `entity_scoping` (Scoping) (optional), `unit_system` (Int32, string) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = interface_contact_force()

op = interface_contact_force(data_sources=my_data_sources,entity_scoping=my_entity_scoping,unit_system=my_unit_system)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### entity_scoping

entity (part for matsum, interface for rcforc) where the result will be scoped

**Type:** *LinkableInput*

### unit_system

Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
interface_contact_force()
```

#### Constructor

```python
interface_contact_force(data_sources, entity_scoping, unit_system, config)
```

**Parameters:**

- `data_sources` (*object*)
- `entity_scoping` (*object*)
- `unit_system` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
interface_contact_force(config)
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
