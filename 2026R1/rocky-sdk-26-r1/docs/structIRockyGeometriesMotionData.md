<a id="structIRockyGeometriesMotionData"></a>
# Structure IRockyGeometriesMotionData

![][C++]
![][public]

**#include <rocky\_boundary\_api.hpp>**



<code>[IRockyGeometriesMotionData](structIRockyGeometriesMotionData.md#structIRockyGeometriesMotionData)</code> is an interface for a list of geometries motions in Rocky. The list of geometries motions represented by this interface contains all geometries in Rocky, and they may or may not have a motion applied in Rocky's last simulation timestep. The geometries motions can be generated based upon the IDs of the geometries, which are numbered sequentially starting from zero, or from the names assigned to the geometries in the Rocky UI.

## Members

* [get\_geometry](structIRockyGeometriesMotionData.md#structIRockyGeometriesMotionData_1a36a8aa9aa2bd497f7381980b78c83cb9)
* [get\_geometry](structIRockyGeometriesMotionData.md#structIRockyGeometriesMotionData_1a97350213657a5dfca98e787a4200ccc7)
* [get\_number\_of\_geometries](structIRockyGeometriesMotionData.md#structIRockyGeometriesMotionData_1a089856efc3afdea2fdf9c90652e411e8)
* [has\_linked\_motion\_frame](structIRockyGeometriesMotionData.md#structIRockyGeometriesMotionData_1a0a9f25ad715ac525854a83d7b591100f)

## Public functions

<a id="structIRockyGeometriesMotionData_1a089856efc3afdea2fdf9c90652e411e8"></a>
### Function get\_number\_of\_geometries

![][public]
![][const]


```cpp
unsigned int IRockyGeometriesMotionData::get_number_of_geometries() const
```




**Returns**:

The number of geometries in the Rocky project.



**Return type**: unsigned int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometriesMotionData::get_number_of_geometries"}]}`
-->

<a id="structIRockyGeometriesMotionData_1a36a8aa9aa2bd497f7381980b78c83cb9"></a>
### Function get\_geometry

![][public]
![][const]


```cpp
IRockyGeometryMotionData IRockyGeometriesMotionData::get_geometry(unsigned int id) const
```




**Gets a geometry's motion given the geometry's Rocky ID.**:

If the provided ID does not correspond to an existing geometry in Rocky, this method will raise an exception.


**Parameters**:

* **id**: The index assigned in Rocky to an existing geometry.


**Returns**:

A geometry's motion.



**Parameters**:

* unsigned int **id**

**Return type**: [IRockyGeometryMotionData](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometriesMotionData::get_geometry"}]}`
-->

<a id="structIRockyGeometriesMotionData_1a97350213657a5dfca98e787a4200ccc7"></a>
### Function get\_geometry

![][public]
![][const]


```cpp
IRockyGeometryMotionData IRockyGeometriesMotionData::get_geometry(const std::string &name) const
```




**Gets a geometry's motion given the geometry's name.**:

If the provided name does not correspond to an existing geometry in Rocky, this method will raise an exception.


**Parameters**:

* **name**: The name assigned in Rocky to an existing geometry.


**Returns**:

A geometry's motion.



**Parameters**:

* const std::string & **name**

**Return type**: [IRockyGeometryMotionData](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometriesMotionData::get_geometry"}]}`
-->

<a id="structIRockyGeometriesMotionData_1a0a9f25ad715ac525854a83d7b591100f"></a>
### Function has\_linked\_motion\_frame

![][public]
![][const]


```cpp
bool IRockyGeometriesMotionData::has_linked_motion_frame(unsigned int id) const
```




**Parameters**:

* **id**: The index assigned in Rocky to an existing geometry.


**Returns**:

True if the geometry with the passed id has motion from the Rocky's internal motion kernel implementation. False otherwise.



**Parameters**:

* unsigned int **id**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometriesMotionData::has_linked_motion_frame"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)