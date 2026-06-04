---
uid: Ans.DataProcessing.operators.serialization.mechanical_csv_to_field
---

# mechanical_csv_to_field Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

## Summary

Reads mechanical exported csv file

available inputs: `unit` (), `mesh` (MeshedRegion) (optional), `data_sources` (DataSources), `requested_location` (string, FieldDefinition)

available outputs: `field` (Field)

## Example

```python
op = mechanical_csv_to_field()

op = mechanical_csv_to_field(mesh=my_mesh,data_sources=my_data_sources,requested_location=my_requested_location)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### requested_location

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mechanical_csv_to_field()
```

#### Constructor

```python
mechanical_csv_to_field(mesh, data_sources, requested_location, config)
```

**Parameters:**

- `mesh` (*object*)
- `data_sources` (*object*)
- `requested_location` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mechanical_csv_to_field(config)
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
