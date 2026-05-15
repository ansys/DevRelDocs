# Structure ansys::dpf::ConfigOptionSpecification

<a id="structansys-dpf-configoptionspecification"></a>

![][C++]
![][public]



Specification information for operator's configuration option. 

**See also**: [OperatorSpecification](classansys-dpf-operatorspecification.md#classansys-dpf-operatorspecification)

## Members

* [ConfigOptionSpecification](structansys-dpf-configoptionspecification.md#structansys-dpf-configoptionspecification-1a253b65ae84fcc73cd2b27e2c5545a198)
* [getDefaultValue](structansys-dpf-configoptionspecification.md#structansys-dpf-configoptionspecification-1a451a803874ee02f8e8cba2c578fb9bdb)
* [getDescription](structansys-dpf-configoptionspecification.md#structansys-dpf-configoptionspecification-1a52c1ba0874464f49572045e5a4447a8b)
* [getName](structansys-dpf-configoptionspecification.md#structansys-dpf-configoptionspecification-1a6a87af4628268c180d7b2af80877e7a3)
* [getTypeNames](structansys-dpf-configoptionspecification.md#structansys-dpf-configoptionspecification-1a0f3280755b029a3d6ad7eccad74ead7a)

## Public functions

<a id="structansys-dpf-configoptionspecification-1a253b65ae84fcc73cd2b27e2c5545a198"></a>
### Function ConfigOptionSpecification

![][public]


```cpp
ansys::dpf::ConfigOptionSpecification::ConfigOptionSpecification(std::string const &description, std::string const &name, std::vector< std::string > type_names, std::string const &default_value)
```








**Parameters**:

* std::string const & **description**
* std::string const & **name**
* std::vector< std::string > **type_names**
* std::string const & **default_value**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConfigOptionSpecification::ConfigOptionSpecification"}]}`
-->

<a id="structansys-dpf-configoptionspecification-1a52c1ba0874464f49572045e5a4447a8b"></a>
### Function getDescription

![][public]
![][const]


```cpp
std::string ansys::dpf::ConfigOptionSpecification::getDescription() const
```




Description of config option.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConfigOptionSpecification::getDescription"}]}`
-->

<a id="structansys-dpf-configoptionspecification-1a6a87af4628268c180d7b2af80877e7a3"></a>
### Function getName

![][public]
![][const]


```cpp
std::string ansys::dpf::ConfigOptionSpecification::getName() const
```




Name of config option.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConfigOptionSpecification::getName"}]}`
-->

<a id="structansys-dpf-configoptionspecification-1a0f3280755b029a3d6ad7eccad74ead7a"></a>
### Function getTypeNames

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::ConfigOptionSpecification::getTypeNames() const
```




Type names of config option.



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConfigOptionSpecification::getTypeNames"}]}`
-->

<a id="structansys-dpf-configoptionspecification-1a451a803874ee02f8e8cba2c578fb9bdb"></a>
### Function getDefaultValue

![][public]
![][const]


```cpp
std::string ansys::dpf::ConfigOptionSpecification::getDefaultValue() const
```




Default value of config option.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConfigOptionSpecification::getDefaultValue"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)