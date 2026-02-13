<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result"></a>
# Class ansys::dpf::ResultInfo::Result

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 398)





## Members

* [\_description](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1aa1311fe612ec593808d8810163ab831d)
* [\_dimensionality](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1a8a0875e1bd58d2934890adb030dfa991)
* [\_homogeneity](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1aa8a785f344d018ebcdc4bf9a85143be8)
* [\_location](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1a7fc22cb7857c792416ed6f737d7be3ce)
* [\_name](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1ae432ef7f0047f589336067b75a352b0a)
* [\_opname](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1ae703ba3204ba32ba962a95d9ce32b7e2)
* [\_qualifiers](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1ac00a5083825d68347b8cbdcc609b50b4)
* [\_scriptingName](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1a3f1abfa3dfeea7c929269ffb333d0ac8)
* [\_subResults](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1a36f80036dbfdce3c1a971a91bd2718b6)
* [\_unit](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1acbfc3e33ed004d3967bc3126535c88f7)
* [addAvailableQualifiers](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1a3bfbc7fbc2c527c648e493a6159dfcbb)
* [description](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1ac679688c9bb7651c7c32cd25d7a55c79)
* [dimensionality](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1a87cb26ed46a5b74dac5a11e49a960171)
* [homogeneity](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1a769739dd39f4f275060acd83b43d49d8)
* [location](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1ad5943c9644d94c11d532a12a59cd46b0)
* [operatorName](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1a037abb1451ae43c226906b326398ee60)
* [Result](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1a04c3d2e8aadb1ca3ad1c2b8fbd3055f3)
* [Result](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1ac93906ae27a8470bd2f9621da1da2c69)
* [resultName](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1a03de2c112ecc3494beeb2f58510877eb)
* [scriptingName](classansys_1_1dpf_1_1ResultInfo_1_1Result.md#classansys_1_1dpf_1_1ResultInfo_1_1Result_1adc22f7ce62faf7cd79ff4bd1a7e87f13)

## Friends

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1afb1dc59f2e0edbbfe9016fab50e74fbd"></a>
### Friend ResultInfo

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 400)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class ResultInfo"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::ResultInfo"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"ResultInfo"}]},{"type":"text","text":"\n        "}]}`
-->

## Private attributes

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1ae432ef7f0047f589336067b75a352b0a"></a>
### Variable \_name

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 402)


```cpp
std::string ansys::dpf::ResultInfo::Result::_name
```


[in] friendly readable name: camel case, with spaces (usually equal to snakeToCamel(scriptingName).





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::_name"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1ae703ba3204ba32ba962a95d9ce32b7e2"></a>
### Variable \_opname

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 403)


```cpp
std::string ansys::dpf::ResultInfo::Result::_opname
```








**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::_opname"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1aa8a785f344d018ebcdc4bf9a85143be8"></a>
### Variable \_homogeneity

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 404)


```cpp
ansys::dpf::Homogeneity ansys::dpf::ResultInfo::Result::_homogeneity
```


[in] [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) name associated to the result.





**Type**: [ansys::dpf::Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::_homogeneity"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1acbfc3e33ed004d3967bc3126535c88f7"></a>
### Variable \_unit

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 405)


```cpp
ansys::dpf::Unit ansys::dpf::ResultInfo::Result::_unit
```








**Type**: [ansys::dpf::Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::_unit"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1aa1311fe612ec593808d8810163ab831d"></a>
### Variable \_description

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 406)


```cpp
std::string ansys::dpf::ResultInfo::Result::_description
```


_homogeneity OR _unit





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::_description"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1a7fc22cb7857c792416ed6f737d7be3ce"></a>
### Variable \_location

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 407)


```cpp
ansys::dpf::Location ansys::dpf::ResultInfo::Result::_location
```


[in] readable description of the result.

[in] [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) of the result.



**Type**: [ansys::dpf::Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::_location"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1a3f1abfa3dfeea7c929269ffb333d0ac8"></a>
### Variable \_scriptingName

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 408)


```cpp
std::string ansys::dpf::ResultInfo::Result::_scriptingName
```


[in] friendly name usable as a method: all lower case, no spaces only underscores.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::_scriptingName"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1a36f80036dbfdce3c1a971a91bd2718b6"></a>
### Variable \_subResults

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 409)


```cpp
std::map<std::string, subresult> ansys::dpf::ResultInfo::Result::_subResults
```








**Type**: std::map< std::string, subresult >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::_subResults"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1a8a0875e1bd58d2934890adb030dfa991"></a>
### Variable \_dimensionality

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 410)


```cpp
ansys::dpf::Dimensionality ansys::dpf::ResultInfo::Result::_dimensionality
```


[in] [Dimensionality](structansys_1_1dpf_1_1Dimensionality.md#structansys_1_1dpf_1_1Dimensionality) of the result see [dimensionalities](structansys_1_1dpf_1_1dimensionalities.md#structansys_1_1dpf_1_1dimensionalities).





**Type**: [ansys::dpf::Dimensionality](structansys_1_1dpf_1_1Dimensionality.md#structansys_1_1dpf_1_1Dimensionality)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::_dimensionality"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1ac00a5083825d68347b8cbdcc609b50b4"></a>
### Variable \_qualifiers

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 411)


```cpp
LabelSpacesVector ansys::dpf::ResultInfo::Result::_qualifiers
```








**Type**: LabelSpacesVector

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::_qualifiers"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1a04c3d2e8aadb1ca3ad1c2b8fbd3055f3"></a>
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

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1ac93906ae27a8470bd2f9621da1da2c69"></a>
### Function Result

![][public]


```cpp
ansys::dpf::ResultInfo::Result::Result(std::string const &operator_name, std::string const &scripting_name, ansys::dpf::Dimensionality dimensionality, ansys::dpf::Location const &location, ansys::dpf::Homogeneity const &homogeneity, std::string const &description="")
```








**Parameters**:

* std::string const & **operator_name**: [in] [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) name associated to the result.
* std::string const & **scripting_name**: [in] friendly name usable as a method: all lower case, no spaces only underscores.
* [ansys::dpf::Dimensionality](structansys_1_1dpf_1_1Dimensionality.md#structansys_1_1dpf_1_1Dimensionality) **dimensionality**: [in] [Dimensionality](structansys_1_1dpf_1_1Dimensionality.md#structansys_1_1dpf_1_1Dimensionality) of the result see [dimensionalities](structansys_1_1dpf_1_1dimensionalities.md#structansys_1_1dpf_1_1dimensionalities).
* [ansys::dpf::Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) const & **location**: [in] [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) of the result.
* [ansys::dpf::Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) const & **homogeneity**: [in] [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) of the result.
* std::string const & **description** = "" : [in] optional small description of the result.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::Result"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1a3bfbc7fbc2c527c648e493a6159dfcbb"></a>
### Function addAvailableQualifiers

![][public]


```cpp
void ansys::dpf::ResultInfo::Result::addAvailableQualifiers(LabelSpacesVector const &available_qualifiers)
```




Set the available sub qualifiers (or domains) available for this [Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result).



**Parameters**:

* LabelSpacesVector const & **available_qualifiers**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::addAvailableQualifiers"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1a03de2c112ecc3494beeb2f58510877eb"></a>
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

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1a037abb1451ae43c226906b326398ee60"></a>
### Function operatorName

![][public]
![][const]


```cpp
std::string const  & ansys::dpf::ResultInfo::Result::operatorName() const
```




The operator name might be something like TEMP, where the result name is Temperature. 
**Returns**:

[Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) name



**Return type**: std::string const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::operatorName"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1adc22f7ce62faf7cd79ff4bd1a7e87f13"></a>
### Function scriptingName

![][public]
![][const]


```cpp
std::string const  & ansys::dpf::ResultInfo::Result::scriptingName() const
```




The operator scripting name is used to instantiate the operator in scripting, ex: displacement, elastic_strain... 
**Returns**:

[Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) scripting name



**Return type**: std::string const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::scriptingName"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1a769739dd39f4f275060acd83b43d49d8"></a>
### Function homogeneity

![][public]
![][const]


```cpp
ansys::dpf::Homogeneity const  & ansys::dpf::ResultInfo::Result::homogeneity() const
```




**Returns**:

[Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity).



**Return type**: [ansys::dpf::Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::homogeneity"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1ac679688c9bb7651c7c32cd25d7a55c79"></a>
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

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1ad5943c9644d94c11d532a12a59cd46b0"></a>
### Function location

![][public]
![][const]


```cpp
ansys::dpf::Location const  & ansys::dpf::ResultInfo::Result::location() const
```




**Returns**:

[Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) of given result.



**Return type**: [ansys::dpf::Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::location"}]}`
-->

<a id="classansys_1_1dpf_1_1ResultInfo_1_1Result_1a87cb26ed46a5b74dac5a11e49a960171"></a>
### Function dimensionality

![][public]
![][const]


```cpp
ansys::dpf::Dimensionality const  & ansys::dpf::ResultInfo::Result::dimensionality() const
```




**Returns**:

[Dimensionality](structansys_1_1dpf_1_1Dimensionality.md#structansys_1_1dpf_1_1Dimensionality) of given result.



**Return type**: [ansys::dpf::Dimensionality](structansys_1_1dpf_1_1Dimensionality.md#structansys_1_1dpf_1_1Dimensionality) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ResultInfo::Result::dimensionality"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)