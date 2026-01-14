# Class DVS::IObject

<a id="class_d_v_s_1_1_i_object"></a>

![][C++]
![][public]


Interface for part/plot objects for DVS Reader API.

This object's lifetime is controlled by the query it is returned from. If the filter or uri of the query is changed this object will be destroyed. If this is a chained query and any of the parent queries are modified this object will also be destroyed. See [dvs\_query\_interface.h](dvs__query__interface_8h.md#dvs__query__interface_8h) for more information.

**Inherited by**:

* [DVS::IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset)

## Members

* [CASE](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348a03dcfd36d493cd1d828af236e2c357fd)
* [get\_dataset](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aea688a307b1cb02ae53e0e8fd3791e64)
* [get\_metadata\_key](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a04ee2919ffeb46d966d4675c8cd4420c)
* [get\_metadata\_value](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a7a37d603ccf93f7f1ec9f962fa9d1f61)
* [get\_metadata\_value](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa33105e0510c3a2b0da022d5e9632bc8)
* [get\_name](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a39be8b08200f75b20a7b5cf715ba9dd3)
* [get\_num\_metadata](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a31db3b716cc815c2c73f826f24384f6a)
* [get\_type](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a889c46624013cc3802c7164d153b95f6)
* [IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1ac8a6734ee192a26b574e9eec520c1495)
* [IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aae99076e42a6fc37bf9a71303b3db2b5)
* [IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1af147aaab5200462fd620dbdd4a39ac76)
* [ObjectDefType](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348)
* [operator=](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1ae90f3c11b1fdf916b59490005b148fd5)
* [operator=](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a9953812222e436976af29d1f84967f85)
* [PART](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348a8b2484e08a16329d2d91c18c254f5ca6)
* [PLOT](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348abe80fa1e67dae7efb56fdb2936914cae)
* [~IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1a26912f7959e8f0e610074833c677a904)

## Public types

<a id="class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348"></a>
### Enumeration type ObjectDefType

![][public]



```cpp
enum ObjectDefType {
  PART,
  PLOT,
  CASE
}
```


Enum for object definition type.





<a id="class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348a8b2484e08a16329d2d91c18c254f5ca6"></a>
#### Enumerator PART

Type for a part object.



<a id="class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348abe80fa1e67dae7efb56fdb2936914cae"></a>
#### Enumerator PLOT

Type for a plot object.



<a id="class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348a03dcfd36d493cd1d828af236e2c357fd"></a>
#### Enumerator CASE

Type for a case object, used for case/dataset wide variables.



## Public functions

<a id="class_d_v_s_1_1_i_object_1ac8a6734ee192a26b574e9eec520c1495"></a>
### Function IObject

![][public]


```cpp
DVS::IObject::IObject()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_object_1a26912f7959e8f0e610074833c677a904"></a>
### Function ~IObject

![][public]


```cpp
virtual DVS::IObject::~IObject()=default
```


default





**Return type**: 

<a id="class_d_v_s_1_1_i_object_1aae99076e42a6fc37bf9a71303b3db2b5"></a>
### Function IObject

![][public]


```cpp
DVS::IObject::IObject(IObject &&)=default
```


default





**Parameters**:

* IObject &&

**Return type**: 

<a id="class_d_v_s_1_1_i_object_1ae90f3c11b1fdf916b59490005b148fd5"></a>
### Function operator=

![][public]


```cpp
IObject & DVS::IObject::operator=(IObject &&)=default
```


default





**Parameters**:

* [IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1ac8a6734ee192a26b574e9eec520c1495) &&

**Return type**: [IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1ac8a6734ee192a26b574e9eec520c1495) &

<a id="class_d_v_s_1_1_i_object_1af147aaab5200462fd620dbdd4a39ac76"></a>
### Function IObject

![][public]


```cpp
DVS::IObject::IObject(const IObject &)=default
```


support copying





**Parameters**:

* const IObject &

**Return type**: 

<a id="class_d_v_s_1_1_i_object_1a9953812222e436976af29d1f84967f85"></a>
### Function operator=

![][public]


```cpp
IObject & DVS::IObject::operator=(const IObject &)=default
```


default





**Parameters**:

* const [IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1ac8a6734ee192a26b574e9eec520c1495) &

**Return type**: [IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1ac8a6734ee192a26b574e9eec520c1495) &

<a id="class_d_v_s_1_1_i_object_1a39be8b08200f75b20a7b5cf715ba9dd3"></a>
### Function get\_name

![][public]
![][const]


```cpp
virtual const char * DVS::IObject::get_name() const =0
```


Get the name of the object.

**Returns**:

const char* name of the object



**Return type**: const char *

<a id="class_d_v_s_1_1_i_object_1a889c46624013cc3802c7164d153b95f6"></a>
### Function get\_type

![][public]
![][const]


```cpp
virtual ObjectDefType DVS::IObject::get_type() const =0
```


Get the type of the object.

**Returns**:

[ObjectDefType](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348)



**Return type**: [ObjectDefType](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object_1aa897daa1f7d0467515fd108c29015348)

<a id="class_d_v_s_1_1_i_object_1aea688a307b1cb02ae53e0e8fd3791e64"></a>
### Function get\_dataset

![][public]
![][const]


```cpp
virtual const DVS::IDataset * DVS::IObject::get_dataset() const =0
```


Get the reference dataset for this object.

**Returns**:

const [DVS::IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset)* reference to the dataset



**Return type**: const [DVS::IDataset](class_d_v_s_1_1_i_dataset.md#class_d_v_s_1_1_i_dataset) *

<a id="class_d_v_s_1_1_i_object_1a31db3b716cc815c2c73f826f24384f6a"></a>
### Function get\_num\_metadata

![][public]
![][const]


```cpp
virtual uint32_t DVS::IObject::get_num_metadata() const =0
```


Get the number of metadata objects.

**Returns**:

uint32_t number of metadata objects



**Return type**: uint32_t

<a id="class_d_v_s_1_1_i_object_1a04ee2919ffeb46d966d4675c8cd4420c"></a>
### Function get\_metadata\_key

![][public]
![][const]


```cpp
virtual const char * DVS::IObject::get_metadata_key(uint32_t index) const =0
```


Get the metadata key by index.

**Parameters**:

* **index**: index of the metadata to get the key for


**Returns**:

const char* key of the metadata, nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const char *

<a id="class_d_v_s_1_1_i_object_1a7a37d603ccf93f7f1ec9f962fa9d1f61"></a>
### Function get\_metadata\_value

![][public]
![][const]


```cpp
virtual const char * DVS::IObject::get_metadata_value(uint32_t index) const =0
```


Get the metadata value by index.

**Parameters**:

* **index**: index of the metadata to get the value for


**Returns**:

const char* value of the metadata, nullptr if not found



**Parameters**:

* uint32_t **index**

**Return type**: const char *

<a id="class_d_v_s_1_1_i_object_1aa33105e0510c3a2b0da022d5e9632bc8"></a>
### Function get\_metadata\_value

![][public]
![][const]


```cpp
virtual const char * DVS::IObject::get_metadata_value(const char *key) const =0
```


Get the metadata value object.

**Parameters**:

* **key**: key to get the value for


**Returns**:

const char* value of the metadata, nullptr if not found



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