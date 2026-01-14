# Structure IRockyGeometryTriangleHost

<a id="structIRockyGeometryTriangleHost"></a>

![][C++]
![][public]

**#include <rocky\_boundary\_api.hpp>**



<code>[IRockyGeometryTriangleHost](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost)</code> is the counterpart of <code>[IRockyGeometryTriangleHost](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost)</code> intended to be used during initialization operations, which is always performed on CPU. Both of them share the same methods.

**Inherits from**:

* IRockyGeometryTriangleImpl\< RockyModel \>

## Members

* [get\_area](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1ab782a5e82eba4116e3fdc03086ac6e70)
* [get\_centroid](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1ae049045265b3b4d44366e60086052049)
* [get\_geometry\_index](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1a90f497b2b42411676707aae7b1c73dbc)
* [get\_geometry\_rotation\_center](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1a35e0413744dea0b6d847172dec76ada4)
* [get\_geometry\_rotational\_velocity](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1a1d39d94664969c8e81279f4d395cfd7e)
* [get\_material](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1a4d4f0981020bd999343324777061578f)
* [get\_material\_index](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1ab68909270e06bc1b702c11e54fc39b87)
* [get\_normal\_unit\_vector](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1acf71ec5c2b5cf6d20f276e3e11cf5ede)
* [get\_poisson\_ratio](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1a48d3df84ac1785c1ada100faad008624)
* [get\_scalars](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1a32507720156ec81050cfe8c9179a18a2)
* [get\_temperature](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1ad63935796d98370d0164f0e700639a82)
* [get\_thermal\_conductivity](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1aba16fb8ad2df2dc54ff931c091850675)
* [get\_translational\_velocity](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1af55f61fe49b8582002b87e1c5d4db703)
* [is\_adiabatic](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1a296b5f25ba526e166233ecc93a361840)
* [set\_poisson\_ratio](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1a53c07e03e2af77cfe1549d7ad9ac22ee)
* [set\_temperature](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1a2da990675204aa1b75f7d99d27d0edf4)
* [set\_thermal\_conductivity](structIRockyGeometryTriangleHost.md#structIRockyGeometryTriangleHost_1a4b7dc627f3943f1a897e28c3219da0ba)

## Public functions

<a id="structIRockyGeometryTriangleHost_1a4d4f0981020bd999343324777061578f"></a>
### Function get\_material

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyMaterial IRockyGeometryTriangleHost::get_material() const
```


<br/>

**Returns**:

An <code>[IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)</code> object that gives access to the values of physical properties associated to the material from which the geometry triangle is made.   <br/>



**Return type**: ROCKY_FUNCTIONS [IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_material"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1acf71ec5c2b5cf6d20f276e3e11cf5ede"></a>
### Function get\_normal\_unit\_vector

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyGeometryTriangleHost::get_normal_unit_vector() const
```


<br/>

**Returns**:

A unit vector in the normal direction to the geometry triangle, in Cartesian coordinates. The orientation of this vector is arbitrary, since collision with particles can potentially happen on either side of the geometry triangle.   <br/>



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_normal_unit_vector"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1ab782a5e82eba4116e3fdc03086ac6e70"></a>
### Function get\_area

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyGeometryTriangleHost::get_area() const
```


<br/>

**Returns**:

The unsigned area of the geometry triangle.   <br/>



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_area"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1ae049045265b3b4d44366e60086052049"></a>
### Function get\_centroid

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyGeometryTriangleHost::get_centroid() const
```


<br/>

**Returns**:

The centroid point of the geometry triangle in Cartesian coordinates.   <br/>



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_centroid"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1a90f497b2b42411676707aae7b1c73dbc"></a>
### Function get\_geometry\_index

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyGeometryTriangleHost::get_geometry_index() const
```


<br/>

**Returns**:

The index that uniquely identifies the geometry to which the geometry triangle belongs.   <br/>



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_geometry_index"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1ab68909270e06bc1b702c11e54fc39b87"></a>
### Function get\_material\_index

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyGeometryTriangleHost::get_material_index() const
```


<br/>

**Returns**:

The material index that uniquely identifies the material associated to the geometry triangle.   <br/>



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_material_index"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1af55f61fe49b8582002b87e1c5d4db703"></a>
### Function get\_translational\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyGeometryTriangleHost::get_translational_velocity(double current_time) const
```


<br/>

****:


**Parameters**:

* **current_time**: The current value of the simulation time.


**Returns**:

The instantaneous triangle's translational velocity vector, expressed in Cartesian coordinates.   <br/>



**Parameters**:

* double **current_time**

**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_translational_velocity"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1a1d39d94664969c8e81279f4d395cfd7e"></a>
### Function get\_geometry\_rotational\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyGeometryTriangleHost::get_geometry_rotational_velocity() const
```


<br/>

**Returns**:

The rotational velocity vector of the geometry to which the triangle belongs, expressed in Cartesian coordinates.   <br/>



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_geometry_rotational_velocity"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1a35e0413744dea0b6d847172dec76ada4"></a>
### Function get\_geometry\_rotation\_center

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyGeometryTriangleHost::get_geometry_rotation_center() const
```


<br/>

**Returns**:

The Cartesian coordinates of the rotation center of the motion frame attached to the geometry to which the triangle belongs.   <br/>



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_geometry_rotation_center"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1ad63935796d98370d0164f0e700639a82"></a>
### Function get\_temperature

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyGeometryTriangleHost::get_temperature() const
```


<br/>

**Returns**:

The temperature associated to the triangle. If that temperature was defined as a variable property in the module's specification file, each triangle in a geometry may have a different temperature value, set by a module using the <code>[IRockyGeometryTriangle::set\_temperature](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle_1a4286e7ea37b1863c8ea48d2fcd729b9c)</code> method. Otherwise, this method will return the temperature value specified in the UI for the geometry to which the geometry triangle belongs.   <br/>



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_temperature"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1a2da990675204aa1b75f7d99d27d0edf4"></a>
### Function set\_temperature

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyGeometryTriangleHost::set_temperature(double value)
```


<br/>

**This method can be used only if the temperature was defined as a variable property**:

for geometry triangles in the module's specification file. A segmentation fault will occur if this method is used otherwise. The temperature value specified with this method will be used by Rocky when solving the thermal balance equations for the particles in contact with the geometry triangle.


**Parameters**:

* **value**: The temperature value to be assigned to the geometry triangle.   <br/>



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::set_temperature"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1a296b5f25ba526e166233ecc93a361840"></a>
### Function is\_adiabatic

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyGeometryTriangleHost::is_adiabatic() const
```


<br/>

**Returns**:

True if the geometry to which the boundary triangle belongs is adiabatic (i.e. it is not enabled to exchange heat with particles).   <br/>



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::is_adiabatic"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1aba16fb8ad2df2dc54ff931c091850675"></a>
### Function get\_thermal\_conductivity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyGeometryTriangleHost::get_thermal_conductivity() const
```


<br/>

**Returns**:

The triangle's thermal conductivity. If this property was defined as variable for triangles in the module's specification file, this method will return the value set specifically for the geometry triangle. Otherwise, the returned value will be the one specified for the triangle's material in the Rocky UI.   <br/>



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_thermal_conductivity"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1a4b7dc627f3943f1a897e28c3219da0ba"></a>
### Function set\_thermal\_conductivity

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyGeometryTriangleHost::set_thermal_conductivity(double value)
```


<br/>

**This method sets the triangle's thermal conductivity, if this property**:

was defined as variable in the module's specification file. If this method is used otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The thermal conductivity to be set.   <br/>



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::set_thermal_conductivity"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1a48d3df84ac1785c1ada100faad008624"></a>
### Function get\_poisson\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyGeometryTriangleHost::get_poisson_ratio() const
```


<br/>

**Returns**:

The triangle's Poisson's ratio. If this property was defined as variable for triangles in the module's specification file, this method will return the value set specifically for the geometry triangle. Otherwise, the returned value will be the one specified for the triangle's material in the Rocky UI.   <br/>



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_poisson_ratio"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1a53c07e03e2af77cfe1549d7ad9ac22ee"></a>
### Function set\_poisson\_ratio

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyGeometryTriangleHost::set_poisson_ratio(double value)
```


<br/>

**This method sets the triangle's Poisson's ratio, if this property**:

was defined as variable in the module's specification file. If this method is used otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The Poisson's ratio to be set.   <br/>



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::set_poisson_ratio"}]}`
-->

<a id="structIRockyGeometryTriangleHost_1a32507720156ec81050cfe8c9179a18a2"></a>
### Function get\_scalars

![][public]


```cpp
ROCKY_FUNCTIONS IRockyTriangleScalars IRockyGeometryTriangleHost::get_scalars()
```


<br/>

**Returns**:

A <code>[IRockyTriangleScalars](structIRockyTriangleScalars.md#structIRockyTriangleScalars)</code> object that gives access to all triangle scalars variables defined in the project.   <br/>



**Return type**: ROCKY_FUNCTIONS [IRockyTriangleScalars](structIRockyTriangleScalars.md#structIRockyTriangleScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryTriangleHost::get_scalars"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)