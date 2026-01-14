# Class DVS::IPlotChunk

<a id="class_d_v_s_1_1_i_plot_chunk"></a>

![][C++]
![][public]


Plot Chunk Interface for DVS Reader API.

A Plot Chunk in DVS contains the x/y coordinates for a specific timestep. In general there is only 1 of these across all ranks for a specific time as plots aren't spatially decomposed. Variable information is stored in metadata attached to the referenced plot object. See [DVS::IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash) for the hash object interface.





Axis title/unit information is stored in metadata on the [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object) interface from [IPlotChunk::get\_object()](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1a3eaf3659a02d09c641ba70a1a402053b)

**Inherits from**:

* [DVS::IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash)

## Members

* [get\_data](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1a9dd0631a3b7c171a8593289cc7aa84b3)
* [get\_hash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a51eaee86a6e2db4dda7f4326daa33874)
* [get\_hash\_size](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1ac0dedeb8d9dfd442d49d16cb4ddfb221)
* [get\_object](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1a3eaf3659a02d09c641ba70a1a402053b)
* [get\_rank](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1ac8cfe243352cdc8d6882f521a6382df6)
* [get\_time](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1ad9ff283c65e3a3ca1833fa95739cefbb)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2f73d1292c0162a03bd29e9094567a77)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a41019f8e16b485b73c1a832df9c21665)
* [IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a17952af3cbc7170e37f882b17e800b3f)
* [IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1acfaef90506b504a098bd4d524ba3aaac)
* [IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1a4aa8324189293247b37d95b554a1cdb3)
* [IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1a77c7e11b63c01b975e1e8f14aa594989)
* [operator=](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1a59c8403dd4b0dd0e58bd41763d3c8ef9)
* [operator=](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1a7a6efa045b8550256fc07d6e8a8abc3e)
* [operator=](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1af8c71b16b66a50b92918028b8bbc0d66)
* [operator=](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1aeaed8c50d66653ffe2a16f2d39278734)
* [~IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash_1a2e08d37be2095880bcb7d77b365ebde3)
* [~IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1ad1a21b9cbe0c9362196cb707c4041306)

## Public functions

<a id="class_d_v_s_1_1_i_plot_chunk_1acfaef90506b504a098bd4d524ba3aaac"></a>
### Function IPlotChunk

![][public]


```cpp
DVS::IPlotChunk::IPlotChunk()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_plot_chunk_1ad1a21b9cbe0c9362196cb707c4041306"></a>
### Function ~IPlotChunk

![][public]


```cpp
virtual DVS::IPlotChunk::~IPlotChunk()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_plot_chunk_1a4aa8324189293247b37d95b554a1cdb3"></a>
### Function IPlotChunk

![][public]


```cpp
DVS::IPlotChunk::IPlotChunk(IPlotChunk &&)=default
```


default





**Parameters**:

* IPlotChunk &&

**Return type**: 

<a id="class_d_v_s_1_1_i_plot_chunk_1a59c8403dd4b0dd0e58bd41763d3c8ef9"></a>
### Function operator=

![][public]


```cpp
IPlotChunk & DVS::IPlotChunk::operator=(IPlotChunk &&)=default
```


default





**Parameters**:

* [IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1acfaef90506b504a098bd4d524ba3aaac) &&

**Return type**: [IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1acfaef90506b504a098bd4d524ba3aaac) &

<a id="class_d_v_s_1_1_i_plot_chunk_1a77c7e11b63c01b975e1e8f14aa594989"></a>
### Function IPlotChunk

![][public]


```cpp
DVS::IPlotChunk::IPlotChunk(const IPlotChunk &)=default
```


support copying





**Parameters**:

* const IPlotChunk &

**Return type**: 

<a id="class_d_v_s_1_1_i_plot_chunk_1a7a6efa045b8550256fc07d6e8a8abc3e"></a>
### Function operator=

![][public]


```cpp
IPlotChunk & DVS::IPlotChunk::operator=(const IPlotChunk &)=default
```


default





**Parameters**:

* const [IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1acfaef90506b504a098bd4d524ba3aaac) &

**Return type**: [IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk_1acfaef90506b504a098bd4d524ba3aaac) &

<a id="class_d_v_s_1_1_i_plot_chunk_1ad9ff283c65e3a3ca1833fa95739cefbb"></a>
### Function get\_time

![][public]
![][const]


```cpp
virtual float DVS::IPlotChunk::get_time() const =0
```


Get the time for this plot.

**Returns**:

float the time this plot is associated with



**Return type**: float

<a id="class_d_v_s_1_1_i_plot_chunk_1ac8cfe243352cdc8d6882f521a6382df6"></a>
### Function get\_rank

![][public]
![][const]


```cpp
virtual uint32_t DVS::IPlotChunk::get_rank() const =0
```


Get the rank for the plot.

Plots are generally sent by 1 rank. Specific plots can be sent from different ranks but across ranks only 1 rank should send plot data for a specific time and plot.






**Returns**:

uint32_t the rank this plot is assocaited with (zero based)



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_plot_chunk_1a3eaf3659a02d09c641ba70a1a402053b"></a>
### Function get\_object

![][public]
![][const]


```cpp
virtual const DVS::IObject * DVS::IPlotChunk::get_object() const =0
```


Get the plot definition this plot chunk is associated with.

**Returns**:

const [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object)* the object definition



**Return type**: const [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object) *

<a id="class_d_v_s_1_1_i_plot_chunk_1a9dd0631a3b7c171a8593289cc7aa84b3"></a>
### Function get\_data

![][public]


```cpp
virtual dvs_ret DVS::IPlotChunk::get_data(uint32_t *num_values, float *x_axis_values, float *y_axis_values)=0
```


Get data for plot chunk.

This method retrieves data for the plot chunk. It should be first called with non nullptr num_values to get the size of the individual x and y axis values arrays. Example usage: [DVS::IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk)* plot = //get object instance uint32_t axis_size = 0; if (DVS_NONE == plot->get_data(&axis_size, nullptr, nullptr)) { std::vector<float> x_values(axis_size); std::vector<float> y_values(axis_size); plot->get_data(nullptr, x_values.data(), y_values.data()); }





Error Codes:
* DVS_NONE: No error

* DVS_NO_DATA: Object has no data, should not happen through DVS Reader API

* DVS_PARAM_NULL: All parameters are null. Method will do nothing.

* DVS_INVALID_CACHE: Loading cache failed, possibly invalid cache or invalid permissions

* DVS_DATA_FAILED_LOAD: There was a failure loading data, data is either empty or missing

* DVS_INVALID_HASH: Hash of variable data is invalid. There is a problem with the data








**Parameters**:

* **num_values**: if not nullptr returns the number of values for each axis
* **x_axis_values**: if not nullptr the x axis values, must be of size num_values
* **y_axis_values**: if not nullptr the y axis values, must be of size num_values


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE on no error, see the method description for errors



**Parameters**:

* uint32_t * **num_values**
* float * **x_axis_values**
* float * **y_axis_values**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)