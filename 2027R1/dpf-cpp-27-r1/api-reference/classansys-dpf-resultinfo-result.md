# Class ansys::dpf::ResultInfo::Result

<a id="classansys-dpf-resultinfo-result"></a>

![][C++]
![][public]





## Members

* [addAvailableQualifiers](classansys-dpf-resultinfo-result.md#classansys-dpf-resultinfo-result-1a3bfbc7fbc2c527c648e493a6159dfcbb)
* [description](classansys-dpf-resultinfo-result.md#classansys-dpf-resultinfo-result-1ac679688c9bb7651c7c32cd25d7a55c79)
* [dimensionality](classansys-dpf-resultinfo-result.md#classansys-dpf-resultinfo-result-1a87cb26ed46a5b74dac5a11e49a960171)
* [homogeneity](classansys-dpf-resultinfo-result.md#classansys-dpf-resultinfo-result-1a769739dd39f4f275060acd83b43d49d8)
* [location](classansys-dpf-resultinfo-result.md#classansys-dpf-resultinfo-result-1ad5943c9644d94c11d532a12a59cd46b0)
* [operatorName](classansys-dpf-resultinfo-result.md#classansys-dpf-resultinfo-result-1a037abb1451ae43c226906b326398ee60)
* [Result](classansys-dpf-resultinfo-result.md#classansys-dpf-resultinfo-result-1a04c3d2e8aadb1ca3ad1c2b8fbd3055f3)
* [Result](classansys-dpf-resultinfo-result.md#classansys-dpf-resultinfo-result-1ac93906ae27a8470bd2f9621da1da2c69)
* [resultName](classansys-dpf-resultinfo-result.md#classansys-dpf-resultinfo-result-1a03de2c112ecc3494beeb2f58510877eb)
* [scriptingName](classansys-dpf-resultinfo-result.md#classansys-dpf-resultinfo-result-1adc22f7ce62faf7cd79ff4bd1a7e87f13)

## Friends

## Public functions

<a id="classansys-dpf-resultinfo-result-1a04c3d2e8aadb1ca3ad1c2b8fbd3055f3"></a>
### Function Result

![][public]


```cpp
ansys::dpf::ResultInfo::Result::Result()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::Result"}]}`
-->

<a id="classansys-dpf-resultinfo-result-1ac93906ae27a8470bd2f9621da1da2c69"></a>
### Function Result

![][public]


```cpp
ansys::dpf::ResultInfo::Result::Result(std::string const &operator_name, std::string const &scripting_name, ansys::dpf::Dimensionality dimensionality, ansys::dpf::Location const &location, ansys::dpf::Homogeneity const &homogeneity, std::string const &description="")
```








**Parameters**:

* std::string const & **operator_name**: [in] [Operator](classansys-dpf-operator.md#classansys-dpf-operator) name associated to the result.
* std::string const & **scripting_name**: [in] friendly name usable as a method: all lower case, no spaces only underscores.
* [ansys::dpf::Dimensionality](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality) **dimensionality**: [in] [Dimensionality](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality) of the result see [dimensionalities](structansys-dpf-dimensionalities.md#structansys-dpf-dimensionalities).
* [ansys::dpf::Location](structansys-dpf-location.md#structansys-dpf-location) const & **location**: [in] [Location](structansys-dpf-location.md#structansys-dpf-location) of the result.
* [ansys::dpf::Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity) const & **homogeneity**: [in] [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity) of the result.
* std::string const & **description** = "" : [in] optional small description of the result.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::Result"}]}`
-->

<a id="classansys-dpf-resultinfo-result-1a3bfbc7fbc2c527c648e493a6159dfcbb"></a>
### Function addAvailableQualifiers

![][public]


```cpp
void ansys::dpf::ResultInfo::Result::addAvailableQualifiers(LabelSpacesVector const &available_qualifiers)
```




Set the available sub qualifiers (or domains) available for this [Result](classansys-dpf-result.md#classansys-dpf-result).



**Parameters**:

* LabelSpacesVector const & **available_qualifiers**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::addAvailableQualifiers"}]}`
-->

<a id="classansys-dpf-resultinfo-result-1a03de2c112ecc3494beeb2f58510877eb"></a>
### Function resultName

![][public]
![][const]


```cpp
std::string const  & ansys::dpf::ResultInfo::Result::resultName() const
```




For a result name like Temperature, the operator name might be something like TEMP. 
**Returns**:

Name of result



**Return type**: std::string const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::resultName"}]}`
-->

<a id="classansys-dpf-resultinfo-result-1a037abb1451ae43c226906b326398ee60"></a>
### Function operatorName

![][public]
![][const]


```cpp
std::string const  & ansys::dpf::ResultInfo::Result::operatorName() const
```




The operator name might be something like TEMP, where the result name is Temperature. 
**Returns**:

[Operator](classansys-dpf-operator.md#classansys-dpf-operator) name



**Return type**: std::string const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::operatorName"}]}`
-->

<a id="classansys-dpf-resultinfo-result-1adc22f7ce62faf7cd79ff4bd1a7e87f13"></a>
### Function scriptingName

![][public]
![][const]


```cpp
std::string const  & ansys::dpf::ResultInfo::Result::scriptingName() const
```




The operator scripting name is used to instantiate the operator in scripting, ex: displacement, elastic_strain... 
**Returns**:

[Operator](classansys-dpf-operator.md#classansys-dpf-operator) scripting name



**Return type**: std::string const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::scriptingName"}]}`
-->

<a id="classansys-dpf-resultinfo-result-1a769739dd39f4f275060acd83b43d49d8"></a>
### Function homogeneity

![][public]
![][const]


```cpp
ansys::dpf::Homogeneity const  & ansys::dpf::ResultInfo::Result::homogeneity() const
```




**Returns**:

[Unit](classansys-dpf-unit.md#classansys-dpf-unit) [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity).



**Return type**: [ansys::dpf::Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::homogeneity"}]}`
-->

<a id="classansys-dpf-resultinfo-result-1ac679688c9bb7651c7c32cd25d7a55c79"></a>
### Function description

![][public]
![][const]


```cpp
std::string const  & ansys::dpf::ResultInfo::Result::description() const
```




**Returns**:

Description of given result.



**Return type**: std::string const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::description"}]}`
-->

<a id="classansys-dpf-resultinfo-result-1ad5943c9644d94c11d532a12a59cd46b0"></a>
### Function location

![][public]
![][const]


```cpp
ansys::dpf::Location const  & ansys::dpf::ResultInfo::Result::location() const
```




**Returns**:

[Location](structansys-dpf-location.md#structansys-dpf-location) of given result.



**Return type**: [ansys::dpf::Location](structansys-dpf-location.md#structansys-dpf-location) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::location"}]}`
-->

<a id="classansys-dpf-resultinfo-result-1a87cb26ed46a5b74dac5a11e49a960171"></a>
### Function dimensionality

![][public]
![][const]


```cpp
ansys::dpf::Dimensionality const  & ansys::dpf::ResultInfo::Result::dimensionality() const
```




**Returns**:

[Dimensionality](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality) of given result.



**Return type**: [ansys::dpf::Dimensionality](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::dimensionality"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)