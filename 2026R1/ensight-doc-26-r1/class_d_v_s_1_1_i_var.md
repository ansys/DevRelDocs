# Class DVS::IVar

<a id="class_d_v_s_1_1_i_var"></a>

![][C++]
![][public]


Interface for variables for the DVS Reader API.

This object's lifetime is controlled by the query it is returned from. If the filter or uri of the query is changed this object will be destroyed. If this is a chained query and any of the parent queries are modified this object will also be destroyed. See [dvs\_query\_interface.h](dvs__query__interface_8h.md#dvs__query__interface_8h) for more information.

## Members

* [get\_dataset](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1acd4c1b8698417ac314a45143e92986d6)
* [get\_float\_count\_per\_value](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a9dbdd84e6f6342deae82ede6dcf2156e)
* [get\_metadata\_key](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1ae18e148e2d2996891560734e53cd9671)
* [get\_metadata\_value](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a22432a4b79163a933a850a7a58dfe315)
* [get\_metadata\_value](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a04bb8ee80947c2bd09576961d65d4403)
* [get\_name](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a12b24dd196d3ddf3dbbdc29eca9cca3f)
* [get\_num\_metadata](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a2deab60f72955106a4a4a3f67a0f295e)
* [get\_unit\_dimension](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a6aa67cf54eb22ee51a7bf5eeb778cee5)
* [get\_unit\_label](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1aa484336b355e68f93069e97d771e4a6e)
* [get\_var\_location](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a7e97f43d3d1057267399c0e66deadd3d)
* [get\_var\_type](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1ae837af2ee946d8f54695d1abf95c5cda)
* [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a102df9a173523a896419011582abefb1)
* [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1aac24d89cca155832661aaf190e933e30)
* [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1afd5bd19f8cf769575e1d6f13890c876b)
* [operator=](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1ad2bc5d54f4ba396d261698089d3ec263)
* [operator=](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1aa7eb6e25ea05a45c383d24ef7483486a)
* [~IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a0f21e53225c764cb3441f36c32f77bee)

## Public functions

<a id="class_d_v_s_1_1_i_var_1a102df9a173523a896419011582abefb1"></a>
### Function IVar

![][public]


```cpp
DVS::IVar::IVar()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_var_1a0f21e53225c764cb3441f36c32f77bee"></a>
### Function ~IVar

![][public]


```cpp
virtual DVS::IVar::~IVar()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_var_1aac24d89cca155832661aaf190e933e30"></a>
### Function IVar

![][public]


```cpp
DVS::IVar::IVar(IVar &&)=default
```


default





**Parameters**:

* IVar &&

**Return type**: 

<a id="class_d_v_s_1_1_i_var_1ad2bc5d54f4ba396d261698089d3ec263"></a>
### Function operator=

![][public]


```cpp
IVar & DVS::IVar::operator=(IVar &&)=default
```


default





**Parameters**:

* [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a102df9a173523a896419011582abefb1) &&

**Return type**: [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a102df9a173523a896419011582abefb1) &

<a id="class_d_v_s_1_1_i_var_1afd5bd19f8cf769575e1d6f13890c876b"></a>
### Function IVar

![][public]


```cpp
DVS::IVar::IVar(const IVar &)=default
```


support copying





**Parameters**:

* const IVar &

**Return type**: 

<a id="class_d_v_s_1_1_i_var_1aa7eb6e25ea05a45c383d24ef7483486a"></a>
### Function operator=

![][public]


```cpp
IVar & DVS::IVar::operator=(const IVar &)=default
```


default





**Parameters**:

* const [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a102df9a173523a896419011582abefb1) &

**Return type**: [IVar](class_d_v_s_1_1_i_var.md#class_d_v_s_1_1_i_var_1a102df9a173523a896419011582abefb1) &

<a id="class_d_v_s_1_1_i_var_1a12b24dd196d3ddf3dbbdc29eca9cca3f"></a>
### Function get\_name

![][public]
![][const]


```cpp
virtual const char * DVS::IVar::get_name() const =0
```


Get the name of the variable.

**Returns**:

const char* name of variable



**Return type**: const char *

<a id="class_d_v_s_1_1_i_var_1ae837af2ee946d8f54695d1abf95c5cda"></a>
### Function get\_var\_type

![][public]
![][const]


```cpp
virtual dvs_var_type DVS::IVar::get_var_type() const =0
```


Get the type of var.

**Returns**:

[dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0) type of var



**Return type**: [dvs\_var\_type](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0)

<a id="class_d_v_s_1_1_i_var_1a7e97f43d3d1057267399c0e66deadd3d"></a>
### Function get\_var\_location

![][public]
![][const]


```cpp
virtual dvs_var_location DVS::IVar::get_var_location() const =0
```


Get the var location.

**Returns**:

[dvs\_var\_location](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af4f0eba512eff253854b44d7ce078491) location of var



**Return type**: [dvs\_var\_location](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af4f0eba512eff253854b44d7ce078491)

<a id="class_d_v_s_1_1_i_var_1a9dbdd84e6f6342deae82ede6dcf2156e"></a>
### Function get\_float\_count\_per\_value

![][public]
![][const]


```cpp
virtual uint32_t DVS::IVar::get_float_count_per_value() const =0
```


Get the number of floats per value.

Gets the size of each value, i.e. a scalar is 1 a vector is 3 etc.






**Returns**:

uint32_t size of each value for the var



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_var_1a6aa67cf54eb22ee51a7bf5eeb778cee5"></a>
### Function get\_unit\_dimension

![][public]
![][const]


```cpp
virtual const char * DVS::IVar::get_unit_dimension() const =0
```


Get the unit dimensions as string.

**Returns**:

const char* string of unit dimensions



**Return type**: const char *

<a id="class_d_v_s_1_1_i_var_1aa484336b355e68f93069e97d771e4a6e"></a>
### Function get\_unit\_label

![][public]
![][const]


```cpp
virtual const char * DVS::IVar::get_unit_label() const =0
```


Get the unit label as string.

This is a specialized name referring to the dimensions






**Returns**:

const char* string of unit label



**Return type**: const char *

<a id="class_d_v_s_1_1_i_var_1acd4c1b8698417ac314a45143e92986d6"></a>
### Function get\_dataset

![][public]
![][const]


```cpp
virtual const DVS::IDataset * DVS::IVar::get_dataset() const =0
```


Get the reference dataset for this var.

**Returns**:

const [DVS::IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset)* the reference to the dataset



**Return type**: const [DVS::IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset) *

<a id="class_d_v_s_1_1_i_var_1a2deab60f72955106a4a4a3f67a0f295e"></a>
### Function get\_num\_metadata

![][public]
![][const]


```cpp
virtual uint32_t DVS::IVar::get_num_metadata() const =0
```


Get the num metadata values on this var.

**Returns**:

uint32_t number of metadata keys/values



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_var_1ae18e148e2d2996891560734e53cd9671"></a>
### Function get\_metadata\_key

![][public]
![][const]


```cpp
virtual const char * DVS::IVar::get_metadata_key(uint32_t index) const =0
```


Get a metadata key based on the index.

**Parameters**:

* **index**: index of the key to return


**Returns**:

const char* key for the metadata, nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const char *

<a id="class_d_v_s_1_1_i_var_1a22432a4b79163a933a850a7a58dfe315"></a>
### Function get\_metadata\_value

![][public]
![][const]


```cpp
virtual const char * DVS::IVar::get_metadata_value(uint32_t index) const =0
```


Get the metadata value base on the index.

**Parameters**:

* **index**: index of the value to return


**Returns**:

const char* value for the metadata, nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const char *

<a id="class_d_v_s_1_1_i_var_1a04bb8ee80947c2bd09576961d65d4403"></a>
### Function get\_metadata\_value

![][public]
![][const]


```cpp
virtual const char * DVS::IVar::get_metadata_value(const char *key) const =0
```


Get the metadata value based on the key.

**Parameters**:

* **key**: the key to return the value of


**Returns**:

const char* value for the key, nullptr if not found



**Parameters**:

* const char * **key**

**Return type**: const char *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)