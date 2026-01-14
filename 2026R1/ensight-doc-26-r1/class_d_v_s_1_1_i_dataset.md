# Class DVS::IDataset

<a id="class_d_v_s_1_1_i_dataset"></a>

![][C++]
![][public]


Interface for datasets for the DVS Reader API.

This object's lifetime is controlled by the query it is returned from. If the filter or uri of the query is changed this object will be destroyed. If this is a chained query and any of the parent queries are modified this object will also be destroyed. See [dvs\_query\_interface.h](dvs__query__interface_8h.md#dvs__query__interface_8h) for more information.

**Inherits from**:

* [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object)

## Members

* [CASE](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348a03dcfd36d493cd1d828af236e2c357fd)
* [get\_chunks\_per\_rank](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1afb023f6b10fd4c072e8c7cb140d666ae)
* [get\_dataset](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aea688a307b1cb02ae53e0e8fd3791e64)
* [get\_metadata\_key](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a04ee2919ffeb46d966d4675c8cd4420c)
* [get\_metadata\_value](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a7a37d603ccf93f7f1ec9f962fa9d1f61)
* [get\_metadata\_value](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa33105e0510c3a2b0da022d5e9632bc8)
* [get\_name](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a39be8b08200f75b20a7b5cf715ba9dd3)
* [get\_num\_chunks\_per\_rank](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a5ec19061a478d6b2aea0976b9e79f73b)
* [get\_num\_metadata](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a31db3b716cc815c2c73f826f24384f6a)
* [get\_num\_parts](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a69aa8f4d0ad2c4fd69e6443f662fbc1d)
* [get\_num\_plots](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a49e3b27865d865ba36dd5d7e5c659a6b)
* [get\_num\_ranks](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a423774f63a6f5275d4d4f33da65f37b4)
* [get\_num\_variables](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1acd0c0e81b283bce8044d9b4de796574a)
* [get\_part](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1af000ab1d7bfdd043cdc2b4f6cd4d682c)
* [get\_plot](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a8f3bb3e37530f0b1dd6630fb6f9925f5)
* [get\_ranks](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1ac620a1f5fb513d636ed59d7b4552197a)
* [get\_type](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a889c46624013cc3802c7164d153b95f6)
* [get\_unit\_system](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1af69301cb1a2d466933e8fee162411a60)
* [get\_var](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1abfef24372147723533c9feebd55666c1)
* [IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a5f47221543a890f8c04c7297f45e9580)
* [IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a4fafacbcd842db2b73a89b98d56f8ab4)
* [IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1aa32d8780f6b7ed895870bea816396600)
* [IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1ac8a6734ee192a26b574e9eec520c1495)
* [IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aae99076e42a6fc37bf9a71303b3db2b5)
* [IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1af147aaab5200462fd620dbdd4a39ac76)
* [ObjectDefType](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348)
* [operator=](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a6ce85ff405ae57b21a5317b75874f128)
* [operator=](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a0cd185542ff0c3d51d5a20762af02958)
* [operator=](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1ae90f3c11b1fdf916b59490005b148fd5)
* [operator=](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a9953812222e436976af29d1f84967f85)
* [PART](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348a8b2484e08a16329d2d91c18c254f5ca6)
* [PLOT](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348abe80fa1e67dae7efb56fdb2936914cae)
* [~IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a99d31f6d38bc358af557ca2fa236959e)
* [~IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a26912f7959e8f0e610074833c677a904)

## Public functions

<a id="class_d_v_s_1_1_i_dataset_1a5f47221543a890f8c04c7297f45e9580"></a>
### Function IDataset

![][public]


```cpp
DVS::IDataset::IDataset()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_dataset_1a99d31f6d38bc358af557ca2fa236959e"></a>
### Function ~IDataset

![][public]


```cpp
virtual DVS::IDataset::~IDataset()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_dataset_1a4fafacbcd842db2b73a89b98d56f8ab4"></a>
### Function IDataset

![][public]


```cpp
DVS::IDataset::IDataset(IDataset &&)=default
```


default





**Parameters**:

* IDataset &&

**Return type**: 

<a id="class_d_v_s_1_1_i_dataset_1a6ce85ff405ae57b21a5317b75874f128"></a>
### Function operator=

![][public]


```cpp
IDataset & DVS::IDataset::operator=(IDataset &&)=default
```


default





**Parameters**:

* [IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a5f47221543a890f8c04c7297f45e9580) &&

**Return type**: [IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a5f47221543a890f8c04c7297f45e9580) &

<a id="class_d_v_s_1_1_i_dataset_1aa32d8780f6b7ed895870bea816396600"></a>
### Function IDataset

![][public]


```cpp
DVS::IDataset::IDataset(const IDataset &)=default
```


support copying





**Parameters**:

* const IDataset &

**Return type**: 

<a id="class_d_v_s_1_1_i_dataset_1a0cd185542ff0c3d51d5a20762af02958"></a>
### Function operator=

![][public]


```cpp
IDataset & DVS::IDataset::operator=(const IDataset &)=default
```


default





**Parameters**:

* const [IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a5f47221543a890f8c04c7297f45e9580) &

**Return type**: [IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a5f47221543a890f8c04c7297f45e9580) &

<a id="class_d_v_s_1_1_i_dataset_1af69301cb1a2d466933e8fee162411a60"></a>
### Function get\_unit\_system

![][public]
![][const]


```cpp
virtual const char * DVS::IDataset::get_unit_system() const =0
```


Get the unit system of the dataset.

**Returns**:

const char* unit system of the dataset



**Return type**: const char *

<a id="class_d_v_s_1_1_i_dataset_1a423774f63a6f5275d4d4f33da65f37b4"></a>
### Function get\_num\_ranks

![][public]
![][const]


```cpp
virtual uint32_t DVS::IDataset::get_num_ranks() const =0
```


Get the number of ranks for the dataset.

**Returns**:

uint32_t number of ranks



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_dataset_1ac620a1f5fb513d636ed59d7b4552197a"></a>
### Function get\_ranks

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IDataset::get_ranks(uint32_t *ranks) const =0
```


Get an array of the ranks for this dataset query.

This method returns an array of the rank numbers for this dataset based on the query






**Parameters**:

* **ranks**: buffer of size [DVS::IDataset::get\_num\_ranks()](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a423774f63a6f5275d4d4f33da65f37b4), the ranks avaialble for this query/dataset


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE if no errors, otherwise see [dynamic\_visualization\_store\_error\_codes.h](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h)



**Parameters**:

* uint32_t * **ranks**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_dataset_1a5ec19061a478d6b2aea0976b9e79f73b"></a>
### Function get\_num\_chunks\_per\_rank

![][public]
![][const]


```cpp
virtual uint32_t DVS::IDataset::get_num_chunks_per_rank() const =0
```


Get the size of the chunks_per_rank array for [get\_chunks\_per\_rank()](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1afb023f6b10fd4c072e8c7cb140d666ae).

The size of this should match the number of ranks this dataset has






**Returns**:

uint32_t the number of chunks per ranks



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_dataset_1afb023f6b10fd4c072e8c7cb140d666ae"></a>
### Function get\_chunks\_per\_rank

![][public]
![][const]


```cpp
virtual dvs_ret DVS::IDataset::get_chunks_per_rank(uint32_t *chunks_per_rank) const =0
```


Get the number of chunks for each rank.

This method returns an array of the max number of chunks for each rank based on the filters of the query. The values correspond to the ranks returned from [IDataset::get\_ranks()](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1ac620a1f5fb513d636ed59d7b4552197a). Example: if get_ranks returns ranks: [0 2 5] then this might return [1 1 2] based on the number of chunks this dataset was written with.






**Parameters**:

* **chunks_per_rank**: buffer of size [DVS::IDataset::get\_num\_chunks\_per\_rank()](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset_1a5ec19061a478d6b2aea0976b9e79f73b), returns the number of chunks for each rank for this query/dataset


**Returns**:

[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) DVS_NONE if no errors, otherwise see [dynamic\_visualization\_store\_error\_codes.h](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h)



**Parameters**:

* uint32_t * **chunks_per_rank**

**Return type**: [dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1)

<a id="class_d_v_s_1_1_i_dataset_1a69aa8f4d0ad2c4fd69e6443f662fbc1d"></a>
### Function get\_num\_parts

![][public]
![][const]


```cpp
virtual uint32_t DVS::IDataset::get_num_parts() const =0
```


Get the number of parts for this dataset.

**Returns**:

uint32_t the number of parts



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_dataset_1af000ab1d7bfdd043cdc2b4f6cd4d682c"></a>
### Function get\_part

![][public]
![][const]


```cpp
virtual const DVS::IObject * DVS::IDataset::get_part(uint32_t index) const =0
```


Get a part by index.

**Parameters**:

* **index**: index of the part


**Returns**:

[DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object)* pointer to part object or nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object) *

<a id="class_d_v_s_1_1_i_dataset_1a49e3b27865d865ba36dd5d7e5c659a6b"></a>
### Function get\_num\_plots

![][public]
![][const]


```cpp
virtual uint32_t DVS::IDataset::get_num_plots() const =0
```


Get the number of plots for this datasets.

**Returns**:

uint32_t the number of plots for this dataset



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_dataset_1a8f3bb3e37530f0b1dd6630fb6f9925f5"></a>
### Function get\_plot

![][public]
![][const]


```cpp
virtual const DVS::IObject * DVS::IDataset::get_plot(uint32_t index) const =0
```


Get the plot object.

**Parameters**:

* **index**: the index of the plot to retrieve


**Returns**:

[DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object)* pointer to [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object) plot or nullptr



**Parameters**:

* uint32_t **index**

**Return type**: const [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object) *

<a id="class_d_v_s_1_1_i_dataset_1acd0c0e81b283bce8044d9b4de796574a"></a>
### Function get\_num\_variables

![][public]
![][const]


```cpp
virtual uint32_t DVS::IDataset::get_num_variables() const =0
```


Get the number of variables for this dataset.

**Returns**:

uint32_t the number of variable definitions



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_dataset_1abfef24372147723533c9feebd55666c1"></a>
### Function get\_var

![][public]
![][const]


```cpp
virtual const DVS::IVar * DVS::IDataset::get_var(uint32_t index) const =0
```


Get the var object.

**Parameters**:

* **index**: the index of the var to retrieve


**Returns**:

[DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var)* pointer to [DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) object or nullptr



**Parameters**:

* uint32_t **index**

**Return type**: const [DVS::IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)