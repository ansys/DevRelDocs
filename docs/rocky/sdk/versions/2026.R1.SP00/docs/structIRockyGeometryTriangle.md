# Structure IRockyGeometryTriangle

<a id="structIRockyGeometryTriangle"></a>

![][C++]
![][public]

**#include <rocky\_boundary\_api.hpp>**



<code>[IRockyGeometryTriangle](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle)</code> is an interface for the internal geometry triangle object in Rocky. A geometry triangle is a code representation of an individual triangle making up a geometry. <code>[IRockyGeometryTriangle](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle)</code> is intended for use in all the operations performed during the time iterative process, involving geometry triangles. It has access methods to some geometric properties, as well as _triangle scalars_, which are special variables that store values per triangle that are preserved between time iterations. Values of _triangle scalars_ can be displayed in a 3D window as any other built-in geometry triangle property in Rocky. All property and variable values made available through <code>[IRockyGeometryTriangle](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle)</code> are dimensionless.






!> **Attention** \
<code>[IRockyGeometryTriangle](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle)</code> replaces <code>IRockyBoundaryTriangle</code> in Rocky v4.5 or newer.

**Inherits from**:

* IRockyGeometryTriangleImpl\< SDeviceModel \>

## Members

* [get\_area](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a87f5f5f9d279e717777feb3a934bac82)
* [get\_centroid](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a51271bd50959a8f2a353ac6673ee7fd7)
* [get\_geometry\_index](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a8498939de6ea592bbfff2a4ec075f6ee)
* [get\_geometry\_rotation\_center](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1ad41c1ad766c0a34a978c5c59add829e7)
* [get\_geometry\_rotational\_velocity](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a67d418dcadcd12fa9314ec4891bae8e0)
* [get\_material](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1ad93dcca6decba182b3cc02e95bd09c38)
* [get\_material\_index](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a9bcc3c8846e93fd1e9876ba328e6a09d)
* [get\_normal\_unit\_vector](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a3dffe992b4dc3278be110fd792142b80)
* [get\_poisson\_ratio](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a362d59bc94cc55f1cb37d6fe00764a4b)
* [get\_scalars](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a525086257224ba19ec3bbfec2522bdba)
* [get\_temperature](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a4ad4b4c3dbdb033213b9f68d4c497f68)
* [get\_thermal\_conductivity](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a6288e5b20aa8375b184529d1760d9a93)
* [get\_translational\_velocity](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a704cfc661bc09630a2d7345d7ea53309)
* [is\_adiabatic](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1acf3dd4c6616b36509791e2896595d16e)
* [set\_poisson\_ratio](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1add105a1fd3ed0e38ad85c93d09ee4a27)
* [set\_temperature](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a4286e7ea37b1863c8ea48d2fcd729b9c)
* [set\_thermal\_conductivity](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1ab93ed9aba28273a9a329a212457b0158)

## Public functions

### Function get\_material

<a id="structIRockyGeometryTriangle_1ad93dcca6decba182b3cc02e95bd09c38"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyMaterial IRockyGeometryTriangle::get_material() const
```




**Returns**:

An <code>[IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)</code> object that gives access to the values of physical properties associated to the material from which the geometry triangle is made.



**Return type**: ROCKY_FUNCTIONS [IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_material"}]}`
-->

### Function get\_normal\_unit\_vector

<a id="structIRockyGeometryTriangle_1a3dffe992b4dc3278be110fd792142b80"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyGeometryTriangle::get_normal_unit_vector() const
```




**Returns**:

A unit vector in the normal direction to the geometry triangle, in Cartesian coordinates. The orientation of this vector is arbitrary, since collision with particles can potentially happen on either side of the geometry triangle.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_normal_unit_vector"}]}`
-->

### Function get\_area

<a id="structIRockyGeometryTriangle_1a87f5f5f9d279e717777feb3a934bac82"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyGeometryTriangle::get_area() const
```




**Returns**:

The unsigned area of the geometry triangle.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_area"}]}`
-->

### Function get\_centroid

<a id="structIRockyGeometryTriangle_1a51271bd50959a8f2a353ac6673ee7fd7"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyGeometryTriangle::get_centroid() const
```




**Returns**:

The centroid point of the geometry triangle in Cartesian coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_centroid"}]}`
-->

### Function get\_geometry\_index

<a id="structIRockyGeometryTriangle_1a8498939de6ea592bbfff2a4ec075f6ee"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyGeometryTriangle::get_geometry_index() const
```




**Returns**:

The index that uniquely identifies the geometry to which the geometry triangle belongs.



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_geometry_index"}]}`
-->

### Function get\_material\_index

<a id="structIRockyGeometryTriangle_1a9bcc3c8846e93fd1e9876ba328e6a09d"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyGeometryTriangle::get_material_index() const
```




**Returns**:

The material index that uniquely identifies the material associated to the geometry triangle.



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_material_index"}]}`
-->

### Function get\_translational\_velocity

<a id="structIRockyGeometryTriangle_1a704cfc661bc09630a2d7345d7ea53309"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyGeometryTriangle::get_translational_velocity(double current_time) const
```




****:


**Parameters**:

* **current_time**: The current value of the simulation time.


**Returns**:

The instantaneous triangle's translational velocity vector, expressed in Cartesian coordinates.



**Parameters**:

* double **current_time**

**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_translational_velocity"}]}`
-->

### Function get\_geometry\_rotational\_velocity

<a id="structIRockyGeometryTriangle_1a67d418dcadcd12fa9314ec4891bae8e0"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyGeometryTriangle::get_geometry_rotational_velocity() const
```




**Returns**:

The rotational velocity vector of the geometry to which the triangle belongs, expressed in Cartesian coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_geometry_rotational_velocity"}]}`
-->

### Function get\_geometry\_rotation\_center

<a id="structIRockyGeometryTriangle_1ad41c1ad766c0a34a978c5c59add829e7"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyGeometryTriangle::get_geometry_rotation_center() const
```




**Returns**:

The Cartesian coordinates of the rotation center of the motion frame attached to the geometry to which the triangle belongs.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_geometry_rotation_center"}]}`
-->

### Function get\_temperature

<a id="structIRockyGeometryTriangle_1a4ad4b4c3dbdb033213b9f68d4c497f68"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyGeometryTriangle::get_temperature() const
```




**Returns**:

The temperature associated to the triangle. If that temperature was defined as a variable property in the module's specification file, each triangle in a geometry may have a different temperature value, set by a module using the <code>[IRockyGeometryTriangle::set\_temperature](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a4286e7ea37b1863c8ea48d2fcd729b9c)</code> method. Otherwise, this method will return the temperature value specified in the UI for the geometry to which the geometry triangle belongs.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_temperature"}]}`
-->

### Function set\_temperature

<a id="structIRockyGeometryTriangle_1a4286e7ea37b1863c8ea48d2fcd729b9c"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyGeometryTriangle::set_temperature(double value)
```




**This method can be used only if the temperature was defined as a variable property**:

for geometry triangles in the module's specification file. A segmentation fault will occur if this method is used otherwise. The temperature value specified with this method will be used by Rocky when solving the thermal balance equations for the particles in contact with the geometry triangle.


**Parameters**:

* **value**: The temperature value to be assigned to the geometry triangle.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::set_temperature"}]}`
-->

### Function is\_adiabatic

<a id="structIRockyGeometryTriangle_1acf3dd4c6616b36509791e2896595d16e"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyGeometryTriangle::is_adiabatic() const
```




**Returns**:

True if the geometry to which the boundary triangle belongs is adiabatic (i.e. it is not enabled to exchange heat with particles).



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::is_adiabatic"}]}`
-->

### Function get\_thermal\_conductivity

<a id="structIRockyGeometryTriangle_1a6288e5b20aa8375b184529d1760d9a93"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyGeometryTriangle::get_thermal_conductivity() const
```




**Returns**:

The triangle's thermal conductivity. If this property was defined as variable for triangles in the module's specification file, this method will return the value set specifically for the geometry triangle. Otherwise, the returned value will be the one specified for the triangle's material in the Rocky UI.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_thermal_conductivity"}]}`
-->

### Function set\_thermal\_conductivity

<a id="structIRockyGeometryTriangle_1ab93ed9aba28273a9a329a212457b0158"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyGeometryTriangle::set_thermal_conductivity(double value)
```




**This method sets the triangle's thermal conductivity, if this property**:

was defined as variable in the module's specification file. If this method is used otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The thermal conductivity to be set.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::set_thermal_conductivity"}]}`
-->

### Function get\_poisson\_ratio

<a id="structIRockyGeometryTriangle_1a362d59bc94cc55f1cb37d6fe00764a4b"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyGeometryTriangle::get_poisson_ratio() const
```




**Returns**:

The triangle's Poisson's ratio. If this property was defined as variable for triangles in the module's specification file, this method will return the value set specifically for the geometry triangle. Otherwise, the returned value will be the one specified for the triangle's material in the Rocky UI.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_poisson_ratio"}]}`
-->

### Function set\_poisson\_ratio

<a id="structIRockyGeometryTriangle_1add105a1fd3ed0e38ad85c93d09ee4a27"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyGeometryTriangle::set_poisson_ratio(double value)
```




**This method sets the triangle's Poisson's ratio, if this property**:

was defined as variable in the module's specification file. If this method is used otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The Poisson's ratio to be set.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::set_poisson_ratio"}]}`
-->

### Function get\_scalars

<a id="structIRockyGeometryTriangle_1a525086257224ba19ec3bbfec2522bdba"></a>

![][public]


```cpp
ROCKY_FUNCTIONS IRockyTriangleScalars IRockyGeometryTriangle::get_scalars()
```




**Returns**:

A <code>[IRockyTriangleScalars](structIRockyTriangleScalars.md#structIRockyTriangleScalars)</code> object that gives access to all triangle scalars variables defined in the project.



**Return type**: ROCKY_FUNCTIONS [IRockyTriangleScalars](structIRockyTriangleScalars.md#structIRockyTriangleScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangle::get_scalars"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)