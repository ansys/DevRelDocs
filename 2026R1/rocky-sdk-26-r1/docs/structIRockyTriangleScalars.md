# Structure IRockyTriangleScalars

<a id="structIRockyTriangleScalars"></a>

![][C++]
![][public]

**#include <rocky\_triangle\_scalars.hpp>**



Triangle scalars are special variables within the Rocky solver that associate a value to each one of the geometry triangles that make up the geometries in the project. When running a simulation, an <code>[IRockyTriangleScalars](structIRockyTriangleScalars.md#structIRockyTriangleScalars)</code> object gives access to all triangle scalars defined in the project. These triangle scalars can be built-in scalars defined in the solver, or custom triangle scalars defined by the current module or other active modules.

**Inherits from**:

* EntityScalars\< rocky20::TriangleScalars \>

## Members

* [add\_scalar](structIRockyTriangleScalars.md#structIRockyTriangleScalars_1ab9721444212bd5fe4e3af03fe3a70294)
* [get\_exchanged\_heat](structIRockyTriangleScalars.md#structIRockyTriangleScalars_1afaf1ed93d75a4a75ad38c31f675decc2)
* [get\_poisson\_ratio](structIRockyTriangleScalars.md#structIRockyTriangleScalars_1ac72837182e4220fc58411bad8db38042)
* [get\_scalar](structIRockyTriangleScalars.md#structIRockyTriangleScalars_1a27cf07c2dd9371c2b26106133266a327)
* [get\_thermal\_conductivity](structIRockyTriangleScalars.md#structIRockyTriangleScalars_1a05684b0ee2ad2ea56b3ed0d627d86cfe)
* [max\_scalar](structIRockyTriangleScalars.md#structIRockyTriangleScalars_1a6d802b0828e406fd357377d8500625f5)
* [set\_poisson\_ratio](structIRockyTriangleScalars.md#structIRockyTriangleScalars_1abc7a467e91fb2232868c27518c92c844)
* [set\_scalar](structIRockyTriangleScalars.md#structIRockyTriangleScalars_1a2882608ab8fdf75777d411400604e135)
* [set\_thermal\_conductivity](structIRockyTriangleScalars.md#structIRockyTriangleScalars_1adfb451a883a51e0e52bbb4fb304bdbee)

## Public functions

<a id="structIRockyTriangleScalars_1a05684b0ee2ad2ea56b3ed0d627d86cfe"></a>
### Function get\_thermal\_conductivity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyTriangleScalars::get_thermal_conductivity() const
```




**Returns**:

The value of the thermal conductivity of the geometry triangle. The Rocky solver has a built-in triangle scalar that once enabled allow triangles to have associated a variable thermal conductivity, which overrides the constant value specified for the geometry's material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalars::get_thermal_conductivity"}]}`
-->

<a id="structIRockyTriangleScalars_1adfb451a883a51e0e52bbb4fb304bdbee"></a>
### Function set\_thermal\_conductivity

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyTriangleScalars::set_thermal_conductivity(const double value)
```




**This method sets the value of the thermal conductivity for the associated geometry**:

triangle, if the corresponding built-in triangle scalar was enabled. Otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The value of the triangle's thermal conductivity.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalars::set_thermal_conductivity"}]}`
-->

<a id="structIRockyTriangleScalars_1ac72837182e4220fc58411bad8db38042"></a>
### Function get\_poisson\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyTriangleScalars::get_poisson_ratio() const
```




**Returns**:

The value of the Poisson's ratio assigned to the geometry triangle. The Rocky solver has a built-in triangle scalar that once enabled allow triangles to have associated a variable thermal conductivity, which overrides the constant value specified for the geometry's material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalars::get_poisson_ratio"}]}`
-->

<a id="structIRockyTriangleScalars_1abc7a467e91fb2232868c27518c92c844"></a>
### Function set\_poisson\_ratio

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyTriangleScalars::set_poisson_ratio(const double value)
```




**This method sets the value of the Poisson's ratio for the associated geometry**:

triangle, if the corresponding built-in triangle scalar was enabled. Otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The value of the Poisson's ratio for the geometry triangle.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalars::set_poisson_ratio"}]}`
-->

<a id="structIRockyTriangleScalars_1afaf1ed93d75a4a75ad38c31f675decc2"></a>
### Function get\_exchanged\_heat

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyTriangleScalars::get_exchanged_heat() const
```




**Returns**:

The value of the total heat transferred to the triangle by surrounding particles and/or SPH fluid elements, since the last reset. That value is calculated internally by the solver before moving particles and SPH elements. Therefore, in order to get access to the heat value including those of the last time iteration, a custom module must use this function after that point, for instance, at a <code>ROCKY_PLUGINS_POST_MOVE</code> hook. Moreover, the heat values are stored only if the <code>IRockyTriangleScalarsModel::enable_storage_sph_exchanged_heat()</code> function is called during initialization. If that operation is not done, any call to this function during simulation will cause a segmentation fault.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalars::get_exchanged_heat"}]}`
-->

<a id="structIRockyTriangleScalars_1a27cf07c2dd9371c2b26106133266a327"></a>
### Function get\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyTriangleScalars::get_scalar(int scalar_index) const
```




**If a custom scalar variable was defined during the setup of the module,**:

the value currently stored can be accessed with this method.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.


**Returns**:

The value currently stored in the scalar variable.



**Parameters**:

* int **scalar_index**

**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalars::get_scalar"}]}`
-->

<a id="structIRockyTriangleScalars_1a2882608ab8fdf75777d411400604e135"></a>
### Function set\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyTriangleScalars::set_scalar(int scalar_index, double value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to store a value on it.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: The value that must be stored.



**Parameters**:

* int **scalar_index**
* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalars::set_scalar"}]}`
-->

<a id="structIRockyTriangleScalars_1ab9721444212bd5fe4e3af03fe3a70294"></a>
### Function add\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyTriangleScalars::add_scalar(int scalar_index, double value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to sum a value to the current one stored in it.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: The value that must be summed to the current stored value.<br/>



**Parameters**:

* int **scalar_index**
* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalars::add_scalar"}]}`
-->

<a id="structIRockyTriangleScalars_1a6d802b0828e406fd357377d8500625f5"></a>
### Function max\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyTriangleScalars::max_scalar(int scalar_index, double value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to make the scalar store the maximum of a set of values. A common use of this method is, for instance, to find the maximum among a set of values associated to the contacts of a particle.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: A value that must be checked if it is greater than the current stored value.



**Parameters**:

* int **scalar_index**
* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalars::max_scalar"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)