# Class IRockyPluginData

<a id="classIRockyPluginData"></a>

![][C++]
![][public]

**#include <rocky\_plugin\_data.h>**



<code>[IRockyPluginData](classIRockyPluginData.md#classIRockyPluginData)</code> gathers custom module data entered manually through the Rocky UI. In order to appear on the Rocky UI, custom modules parameters must be specified in the Python file that defines the components of the module. An <code>[IRockyPluginData](classIRockyPluginData.md#classIRockyPluginData)</code> object is only available during the configuration step in <code>ROCKY_PLUGIN_CONFIGURE</code>.

## Members

* [get\_geometry\_data](classIRockyPluginData.md#classIRockyPluginData_1ae830fad6e94d455f0e4ad57df4b981de)
* [get\_material\_data](classIRockyPluginData.md#classIRockyPluginData_1a5c7b4ed26d1a6787279d2c531444666b)
* [get\_material\_interaction\_data](classIRockyPluginData.md#classIRockyPluginData_1a78c76a74cd026948ee16f3b6b4718356)
* [get\_model](classIRockyPluginData.md#classIRockyPluginData_1ab65c417ed40c1bab14987f959c095b7d)
* [get\_number\_geometries](classIRockyPluginData.md#classIRockyPluginData_1a413adf0e206156e543c8dd170eee387e)
* [get\_number\_material\_interactions](classIRockyPluginData.md#classIRockyPluginData_1a90cc066bcc4f454a5c9d21d69bf57e9e)
* [get\_number\_materials](classIRockyPluginData.md#classIRockyPluginData_1ae0a075e183d876a183d37f2c7e818ca4)
* [get\_number\_particle\_groups](classIRockyPluginData.md#classIRockyPluginData_1a7a39deb0a0b9b782ad0e74e82bc027ce)
* [get\_particle\_group\_data](classIRockyPluginData.md#classIRockyPluginData_1a224e42565c6730227d5f85c8d0f0004f)
* [has\_geometry\_data](classIRockyPluginData.md#classIRockyPluginData_1a46306bc4ec8fe3a85efc85c37b78fdfb)
* [has\_material\_data](classIRockyPluginData.md#classIRockyPluginData_1af8d04f332d01ab25b7a375552072db2a)
* [has\_material\_interaction\_data](classIRockyPluginData.md#classIRockyPluginData_1aefed471c915106b82ca654eef4a03042)
* [has\_particle\_group\_data](classIRockyPluginData.md#classIRockyPluginData_1af000e5f6b3f1d9f454233b01c8a43515)

## Public functions

### Function get\_model

<a id="classIRockyPluginData_1ab65c417ed40c1bab14987f959c095b7d"></a>

![][public]
![][const]


```cpp
IRockyPluginDataEntry IRockyPluginData::get_model() const
```




**Returns**:

An <code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> object that gives access to the values entered through the Rocky UI for all parameters in the _model_ section of the module. These parameters are displayed in the [Data Editors] panel when the module is selected in the data tree.



**Return type**: [IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::get_model"}]}`
-->

### Function has\_material\_interaction\_data

<a id="classIRockyPluginData_1aefed471c915106b82ca654eef4a03042"></a>

![][public]
![][const]


```cpp
bool IRockyPluginData::has_material_interaction_data() const
```




**Returns**:

True if there is custom material interaction data defined for the module, false otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::has_material_interaction_data"}]}`
-->

### Function get\_number\_material\_interactions

<a id="classIRockyPluginData_1a90cc066bcc4f454a5c9d21d69bf57e9e"></a>

![][public]
![][const]


```cpp
int IRockyPluginData::get_number_material_interactions() const
```




**Returns**:

The total number of material interactions that it is possible to define with the current materials defined in the Rocky project.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::get_number_material_interactions"}]}`
-->

### Function get\_material\_interaction\_data

<a id="classIRockyPluginData_1a78c76a74cd026948ee16f3b6b4718356"></a>

![][public]
![][const]


```cpp
IRockyPluginDataEntry IRockyPluginData::get_material_interaction_data(int index) const
```




**Returns**:

An <code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> object that gives access to the values entered through the Rocky UI, if they exist, for all parameters defined in the _material interactions_ section of the module.


**Parameters**:

* **index**: The index that uniquely identifies the specific material interaction whose data must be retrieved.



**Parameters**:

* int **index**

**Return type**: [IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::get_material_interaction_data"}]}`
-->

### Function has\_geometry\_data

<a id="classIRockyPluginData_1a46306bc4ec8fe3a85efc85c37b78fdfb"></a>

![][public]
![][const]


```cpp
bool IRockyPluginData::has_geometry_data() const
```




**Returns**:

True if there is geometry data defined for the module, false otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::has_geometry_data"}]}`
-->

### Function get\_number\_geometries

<a id="classIRockyPluginData_1a413adf0e206156e543c8dd170eee387e"></a>

![][public]
![][const]


```cpp
int IRockyPluginData::get_number_geometries() const
```




**Returns**:

The total number of geometries (boundaries) in the project.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::get_number_geometries"}]}`
-->

### Function get\_geometry\_data

<a id="classIRockyPluginData_1ae830fad6e94d455f0e4ad57df4b981de"></a>

![][public]
![][const]


```cpp
IRockyPluginDataEntry IRockyPluginData::get_geometry_data(int index) const
```




**Returns**:

An <code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> object that gives access to the values entered through the Rocky UI, if they exist, for all parameters associated specifically to the module defined in the _geometry_ (boundaries) section.


**Parameters**:

* **index**: The index that uniquely identifies the specific geometry whose data must be retrieved.



**Parameters**:

* int **index**

**Return type**: [IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::get_geometry_data"}]}`
-->

### Function has\_particle\_group\_data

<a id="classIRockyPluginData_1af000e5f6b3f1d9f454233b01c8a43515"></a>

![][public]
![][const]


```cpp
bool IRockyPluginData::has_particle_group_data() const
```




**Returns**:

True if there is particle group data defined for the module, false otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::has_particle_group_data"}]}`
-->

### Function get\_number\_particle\_groups

<a id="classIRockyPluginData_1a7a39deb0a0b9b782ad0e74e82bc027ce"></a>

![][public]
![][const]


```cpp
int IRockyPluginData::get_number_particle_groups() const
```




**Returns**:

The total number of particle groups defined in the project.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::get_number_particle_groups"}]}`
-->

### Function get\_particle\_group\_data

<a id="classIRockyPluginData_1a224e42565c6730227d5f85c8d0f0004f"></a>

![][public]
![][const]


```cpp
IRockyPluginDataEntry IRockyPluginData::get_particle_group_data(int index) const
```




**Returns**:

An <code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> object that gives access to the values entered through the Rocky UI, if they exist, for all parameters associated specifically to the module defined in the _particle group_ section.


**Parameters**:

* **index**: The index that uniquely identifies the specific particle group whose data must be retrieved.



**Parameters**:

* int **index**

**Return type**: [IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::get_particle_group_data"}]}`
-->

### Function has\_material\_data

<a id="classIRockyPluginData_1af8d04f332d01ab25b7a375552072db2a"></a>

![][public]
![][const]


```cpp
bool IRockyPluginData::has_material_data() const
```




**Returns**:

True if there is any material property data defined for the module, false otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::has_material_data"}]}`
-->

### Function get\_number\_materials

<a id="classIRockyPluginData_1ae0a075e183d876a183d37f2c7e818ca4"></a>

![][public]
![][const]


```cpp
int IRockyPluginData::get_number_materials() const
```




**Returns**:

The total number of materials defined in the project.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::get_number_materials"}]}`
-->

### Function get\_material\_data

<a id="classIRockyPluginData_1a5c7b4ed26d1a6787279d2c531444666b"></a>

![][public]
![][const]


```cpp
IRockyPluginDataEntry IRockyPluginData::get_material_data(int index) const
```




**Returns**:

An <code>[IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)</code> object that gives access to the values entered through the Rocky UI, if they exist, for all parameters associated specifically to the module defined in the _material_ section.


**Parameters**:

* **index**: The index that uniquely identifies the specific material whose data must be retrieved.



**Parameters**:

* int **index**

**Return type**: [IRockyPluginDataEntry](classIRockyPluginDataEntry.md#classIRockyPluginDataEntry)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPluginData::get_material_data"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"rocky__plugin__data_8h"},"children":[{"type":"text","text":"rocky_plugin_data.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)