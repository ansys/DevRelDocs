# Structure IRockyCFDModel

<a id="structIRockyCFDModel"></a>

![][C++]
![][public]

**#include <rocky\_cfd\_model.h>**



<code>[IRockyCFDModel](structIRockyCFDModel.md#structIRockyCFDModel)</code> includes methods that provide basic information about the CFD model. The data associated to an <code>[IRockyCFDModel](structIRockyCFDModel.md#structIRockyCFDModel)</code> object resides entirely on host memory, consequently, it can be accessed only within hooks executed on the host side.

## Members

* [get\_coupling\_mode](structIRockyCFDModel.md#structIRockyCFDModel_1a121e67b3f5efdd1783a32a7fa642080c)
* [get\_fluid\_scalars](structIRockyCFDModel.md#structIRockyCFDModel_1a001b18af80c99c01ce4baa357bac4977)
* [get\_phase\_names](structIRockyCFDModel.md#structIRockyCFDModel_1a6bc367fb97d56786d71d89351957a2a1)
* [get\_primary\_phase\_name](structIRockyCFDModel.md#structIRockyCFDModel_1a83c9a597793b791d1e42e0756ddddb06)
* [get\_species\_names](structIRockyCFDModel.md#structIRockyCFDModel_1aac7f217cdfc15f0dd301dfd99127a194)
* [has\_species](structIRockyCFDModel.md#structIRockyCFDModel_1a4ac3f8164add3366c5f08f4f819a79fd)
* [is\_cfd\_coupling\_iteration](structIRockyCFDModel.md#structIRockyCFDModel_1a733281fb5b40b3cfbf10c29869208343)
* [is\_single\_phase](structIRockyCFDModel.md#structIRockyCFDModel_1a0eaf07fa0aa63473b83a633dad1e8f25)

## Public functions

### Function get\_fluid\_scalars

<a id="structIRockyCFDModel_1a001b18af80c99c01ce4baa357bac4977"></a>

![][public]
![][const]


```cpp
IRockyFluidScalarsModel IRockyCFDModel::get_fluid_scalars() const
```




**Returns**:

An <code>[IRockyFluidScalarsModel](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel)</code> object, which allows users to add new fluid scalars during a setup of a module. Fluid scalars are special variables attached to CFD cell elements that are able to store values that are preserved between time iterations.



**Return type**: [IRockyFluidScalarsModel](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDModel::get_fluid_scalars"}]}`
-->

### Function get\_coupling\_mode

<a id="structIRockyCFDModel_1a121e67b3f5efdd1783a32a7fa642080c"></a>

![][public]
![][const]


```cpp
ECFDCouplingMode IRockyCFDModel::get_coupling_mode() const
```




**Returns**:

An <code>ECFDCouplingMode</code> enum which represents the CFD coupling mode. There are 5 coupling modes in Rocky:<br/>
 <code>cfdcNone = 0</code><br/>
 <code>cfdcOneWay = 1</code><br/>
 <code>cfdcTwoWay = 2</code><br/>
 <code>cfdcOneWayConstant = 3</code><br/>
 <code>cfdcTwoWaySemiResolved = 4</code>



**Return type**: ECFDCouplingMode

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDModel::get_coupling_mode"}]}`
-->

### Function is\_cfd\_coupling\_iteration

<a id="structIRockyCFDModel_1a733281fb5b40b3cfbf10c29869208343"></a>

![][public]
![][const]


```cpp
bool IRockyCFDModel::is_cfd_coupling_iteration() const
```




**Returns**:

On simulations with CFD 1-way or 2-way coupling, this methods returns true if, in the current solver iteration, Rocky will communicate with Fluent (2-way) or read Fluent transient data (1-way). Both operations happen at the end of the iteration, after all Rocky steps. It return false in all other scenarios.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDModel::is_cfd_coupling_iteration"}]}`
-->

### Function is\_single\_phase

<a id="structIRockyCFDModel_1a0eaf07fa0aa63473b83a633dad1e8f25"></a>

![][public]
![][const]


```cpp
bool IRockyCFDModel::is_single_phase() const
```




**Returns**:

This method returns true if Fluent case is single-phase.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDModel::is_single_phase"}]}`
-->

### Function has\_species

<a id="structIRockyCFDModel_1a4ac3f8164add3366c5f08f4f819a79fd"></a>

![][public]
![][const]


```cpp
bool IRockyCFDModel::has_species() const
```




**Returns**:

This method returns true if Fluent case has species.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDModel::has_species"}]}`
-->

### Function get\_phase\_names

<a id="structIRockyCFDModel_1a6bc367fb97d56786d71d89351957a2a1"></a>

![][public]


```cpp
std::vector< std::string > IRockyCFDModel::get_phase_names()
```




**Returns**:

This method returns a vector with phase names. It returns an empty vector for single-phase cases.



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDModel::get_phase_names"}]}`
-->

### Function get\_primary\_phase\_name

<a id="structIRockyCFDModel_1a83c9a597793b791d1e42e0756ddddb06"></a>

![][public]


```cpp
std::string IRockyCFDModel::get_primary_phase_name()
```




**Returns**:

This method returns the primary phase name defined in Fluent. It return a empty string for single-phase cases.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDModel::get_primary_phase_name"}]}`
-->

### Function get\_species\_names

<a id="structIRockyCFDModel_1aac7f217cdfc15f0dd301dfd99127a194"></a>

![][public]


```cpp
std::vector< std::string > IRockyCFDModel::get_species_names()
```




**Returns**:

This method returns a vector with species names. It returns an empty vector for cases without species.



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDModel::get_species_names"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)