---
uid: Ans.DataProcessing.operators.serialization.serialize_to_hdf5
---

# serialize_to_hdf5 Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

This operator is deprecated: use 'hdf5::h5dpf::make_result_file' instead. Serialize the inputs in an hdf5 format.   ///available inputs: file_path (string), export_floats (bool) (optional), export_flat_vectors (bool) (optional), data1 (object), data2 (object)
            available outputs:

serialize_to_hdf5()
serialize_to_hdf5(file_path: object, export_floats: object, export_flat_vectors: object, data1: object, data2: object, config: OperatorConfig)
serialize_to_hdf5(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Hdf5_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
