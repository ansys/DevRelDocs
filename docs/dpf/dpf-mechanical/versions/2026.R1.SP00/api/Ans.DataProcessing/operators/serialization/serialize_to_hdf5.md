---
uid: Ans.DataProcessing.operators.serialization.serialize_to_hdf5
---

# serialize_to_hdf5 Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

## Summary

This operator is deprecated: use 'hdf5::h5dpf::make_result_file' instead. Serialize the inputs in an hdf5 format.

available inputs: `file_path` (string), `export_floats` (bool) (optional), `export_flat_vectors` (bool) (optional), `data1` (object), `data2` (object)

available outputs:

## Example

```python
op = serialize_to_hdf5()

op = serialize_to_hdf5(file_path=my_file_path,export_floats=my_export_floats,export_flat_vectors=my_export_flat_vectors,data1=my_data1,data2=my_data2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Hdf5_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### file_path

output file path with .h5 extension

**Type:** *LinkableInput*

### export_floats

converts double to float to reduce file size (default is true)

**Type:** *LinkableInput*

### export_flat_vectors

if true, vectors and matrices data are exported flat (x1,y1,z1,x2,y2,z2..) (default is false)

**Type:** *LinkableInput*

### data1

only the data set explicitly to export is exported

**Type:** *LinkableInput*

### data2

only the data set explicitly to export is exported

**Type:** *LinkableInput*

## Outputs

## Constructors

#### Constructor

```python
serialize_to_hdf5()
```

#### Constructor

```python
serialize_to_hdf5(file_path, export_floats, export_flat_vectors, data1, data2, config)
```

**Parameters:**

- `file_path` (*object*)
- `export_floats` (*object*)
- `export_flat_vectors` (*object*)
- `data1` (*object*)
- `data2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
serialize_to_hdf5(config)
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
