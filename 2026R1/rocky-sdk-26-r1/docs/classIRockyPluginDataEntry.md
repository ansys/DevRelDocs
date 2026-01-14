# Class IRockyPluginDataEntry

<a id="classIRockyPluginDataEntry"></a>

![][C++]
![][public]

**#include <rocky\_plugin\_data.h>**



<code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> is a data unit corresponding to a single entity in Rocky (a geometry, a material interaction, etc). It gives access to values of custom module data entered manually through the Rocky UI. <code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> may contain boolean, integer, double precision, and string data. Data arranged in lists of <code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> is also allowed. The value of a parameter is retrieved passing to the corresponding function the name string, as specified in the Python file that defines the components of the module.

## Members

* [get\_bool](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry_1afb831ee2119c05117bde33db7e5f965c)
* [get\_double](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry_1af0df7ed2b038b1a48228a24b1b840692)
* [get\_int](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry_1ab1a99ba3c573dbfc7547cc35ded461be)
* [get\_list\_item](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry_1ab8a6c4631f842a5c2d724f4661287665)
* [get\_list\_size](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry_1ad0ca70feaf5f67d7ebb52802dad39989)
* [get\_string](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry_1a9e4a1299866b05178f910869689c7ac9)
* [has](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry_1a67a2a72cd88df362f2fbe128b6814c17)

## Public functions

<a id="classIRockyPluginDataEntry_1a67a2a72cd88df362f2fbe128b6814c17"></a>
### Function has

![][public]
![][const]


```cpp
bool IRockyPluginDataEntry::has(const char *_name) const
```




**Returns**:

True if the parameter specified by name actually exists in the <code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> object. Otherwise, it returns false.


**Parameters**:

* **_name**: The name of the parameter, as specified in the module definition Python file



**Parameters**:

* const char * **_name**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginDataEntry::has"}]}`
-->

<a id="classIRockyPluginDataEntry_1afb831ee2119c05117bde33db7e5f965c"></a>
### Function get\_bool

![][public]
![][const]


```cpp
bool IRockyPluginDataEntry::get_bool(const char *_name) const
```




**Returns**:

The boolean value specified for the given parameter in the Rocky UI through a checkbox.


**Parameters**:

* **_name**: The name of the boolean parameter, as specified in the module definition Python file.



**Parameters**:

* const char * **_name**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginDataEntry::get_bool"}]}`
-->

<a id="classIRockyPluginDataEntry_1ab1a99ba3c573dbfc7547cc35ded461be"></a>
### Function get\_int

![][public]
![][const]


```cpp
int IRockyPluginDataEntry::get_int(const char *_name) const
```




**Returns**:

The integer value specified for the given parameter in the Rocky UI.


**Parameters**:

* **_name**: The name of the integer parameter, as specified in the module definition Python file.



**Parameters**:

* const char * **_name**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginDataEntry::get_int"}]}`
-->

<a id="classIRockyPluginDataEntry_1af0df7ed2b038b1a48228a24b1b840692"></a>
### Function get\_double

![][public]
![][const]


```cpp
double IRockyPluginDataEntry::get_double(const char *_name) const
```




**Returns**:

The double precision value specified for the given parameter in the Rocky UI.


**Parameters**:

* **_name**: The name of the double precision parameter, as specified in the module definition Python file.



**Parameters**:

* const char * **_name**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginDataEntry::get_double"}]}`
-->

<a id="classIRockyPluginDataEntry_1a9e4a1299866b05178f910869689c7ac9"></a>
### Function get\_string

![][public]
![][const]


```cpp
std::string IRockyPluginDataEntry::get_string(const char *_name) const
```




**Returns**:

The string value specified for the given parameter in the Rocky UI.


**Parameters**:

* **_name**: The name of the string parameter, as specified in the module definition Python file.



**Parameters**:

* const char * **_name**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginDataEntry::get_string"}]}`
-->

<a id="classIRockyPluginDataEntry_1ad0ca70feaf5f67d7ebb52802dad39989"></a>
### Function get\_list\_size

![][public]
![][const]


```cpp
int IRockyPluginDataEntry::get_list_size(const char *_name) const
```




**Returns**:

The number of <code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> objects that the list contains.


**Parameters**:

* **_name**: The name of the list, as specified in the module definition Python file.



**Parameters**:

* const char * **_name**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginDataEntry::get_list_size"}]}`
-->

<a id="classIRockyPluginDataEntry_1ab8a6c4631f842a5c2d724f4661287665"></a>
### Function get\_list\_item

![][public]
![][const]


```cpp
IRockyPluginDataEntry IRockyPluginDataEntry::get_list_item(const char *_name, int item_index) const
```




**Returns**:

An <code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> object contained in the list.


**Parameters**:

* **_name**: The name of the list, as specified in the module definition Python file.
* **item_index**: The index that specifies the position in the list of the item to be retrieved.



**Parameters**:

* const char * **_name**
* int **item_index**

**Return type**: [IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginDataEntry::get_list_item"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"rocky__plugin__data_8h"},"children":[{"type":"text","text":"rocky_plugin_data.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)