---
uid: Ans.DataProcessing.operators.serialization.serialize_to_hdf5
---

# *class* serialize_to_hdf5(file_path: object = None, export_floats: object = None, export_flat_vectors: object = None, data1: object = None, data2: object = None, config: OperatorConfig = None)

This operator is deprecated: use 'hdf5dpf_generate_result_file' instead. Serialize the inputs in an hdf5 format.

available inputs: `file_path` (string), `export_floats` (bool) (optional), `export_flat_vectors` (bool) (optional), `data1` (Any), `data2` (Any)

available outputs:

**DPF Framework Reference:** [serialize_to_hdf5 operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/serialize_to_hdf5.md)

**Parameters:**

* **file_path**
* **export_floats**
* **export_flat_vectors**
* **data1**
* **data2**
* **config**

**Example:**

```python
op = serialize_to_hdf5()

op = serialize_to_hdf5(file_path=my_file_path,export_floats=my_export_floats,export_flat_vectors=my_export_flat_vectors,data1=my_data1,data2=my_data2)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
