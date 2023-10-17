<a id="structansys_1_1dpf_1_1PinDefinition"></a>
# Structure ansys::dpf::PinDefinition

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 4546)



Definition of an [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) pin.

## Members

* [accepted\_types](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1ad7fe730ca1b57d8e4c8f3a70ac7041f7)
* [documentation](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1a280231283314d4275889e5b1871fbde0)
* [is\_ellipsis](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1a1811518326691a9d54832141dd04e4eb)
* [is\_optional](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1ae3a0442033de150dd5d4e6077ac95aa0)
* [name](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1a2dd76d015c235c3f89e7d223dde5860c)
* [PinDefinition](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1aef45c262b8b9c64f3983c96ef4f4bcb4)
* [PinDefinition](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1a7f96a3b401928fd5b7d29728869c2188)
* [position](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1ac3a15b557922e20c2351e4b91c1b8fa1)
* [setAcceptedTypes](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1a1275730fe2079c3d32dabe26eb5cc753)
* [setDoc](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1adfb8a81792a5c590adf1658e55e885f8)
* [setEllipsis](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1a9bc7b6133bc37e2fe31238c252475d10)
* [setName](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1a4052c5a1bf098ba4fcba73b2739fc17d)
* [setOptional](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1aa403a064e7bee388eaf1aad0e2047375)
* [setPosition](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition_1ac34083b8ede8ded6272d20a9cce7724f)

## Public attributes

<a id="structansys_1_1dpf_1_1PinDefinition_1a2dd76d015c235c3f89e7d223dde5860c"></a>
### Variable name

![][public]

**Definition**: `dpf\_api.h` (line 4549)

```cpp
std::string ansys::dpf::PinDefinition::name
```



Name of pin.



**Type**: std::string

<a id="structansys_1_1dpf_1_1PinDefinition_1ac3a15b557922e20c2351e4b91c1b8fa1"></a>
### Variable position

![][public]

**Definition**: `dpf\_api.h` (line 4551)

```cpp
int ansys::dpf::PinDefinition::position
```



Pin position number.



**Type**: int

<a id="structansys_1_1dpf_1_1PinDefinition_1a280231283314d4275889e5b1871fbde0"></a>
### Variable documentation

![][public]

**Definition**: `dpf\_api.h` (line 4553)

```cpp
std::string ansys::dpf::PinDefinition::documentation
```



Description of pin.



**Type**: std::string

<a id="structansys_1_1dpf_1_1PinDefinition_1ae3a0442033de150dd5d4e6077ac95aa0"></a>
### Variable is\_optional

![][public]

**Definition**: `dpf\_api.h` (line 4554)

```cpp
bool ansys::dpf::PinDefinition::is_optional
```







**Type**: bool

<a id="structansys_1_1dpf_1_1PinDefinition_1a1811518326691a9d54832141dd04e4eb"></a>
### Variable is\_ellipsis

![][public]

**Definition**: `dpf\_api.h` (line 4555)

```cpp
bool ansys::dpf::PinDefinition::is_ellipsis
```







**Type**: bool

<a id="structansys_1_1dpf_1_1PinDefinition_1ad7fe730ca1b57d8e4c8f3a70ac7041f7"></a>
### Variable accepted\_types

![][public]

**Definition**: `dpf\_api.h` (line 4556)

```cpp
std::vector<TypeDescriptor> ansys::dpf::PinDefinition::accepted_types
```







**Type**: std::vector< [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) >

## Public functions

<a id="structansys_1_1dpf_1_1PinDefinition_1aef45c262b8b9c64f3983c96ef4f4bcb4"></a>
### Function PinDefinition

![][public]

```cpp
ansys::dpf::PinDefinition::PinDefinition()
```







**Return type**: 

<a id="structansys_1_1dpf_1_1PinDefinition_1a7f96a3b401928fd5b7d29728869c2188"></a>
### Function PinDefinition

![][public]

```cpp
ansys::dpf::PinDefinition::PinDefinition(int pin_position)
```



Create pin definition for given pin.



**Parameters**:

* int **pin_position**: [in] Pin for which to create definition.

**Return type**: 

<a id="structansys_1_1dpf_1_1PinDefinition_1a4052c5a1bf098ba4fcba73b2739fc17d"></a>
### Function setName

![][public]

```cpp
PinDefinition& ansys::dpf::PinDefinition::setName(std::string const &n)
```



Set name of pin. 
**Returns**:

Pin definition.



**Parameters**:

* std::string const & **n**: [in] Name of pin.

**Return type**: [PinDefinition](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition) &

<a id="structansys_1_1dpf_1_1PinDefinition_1ac34083b8ede8ded6272d20a9cce7724f"></a>
### Function setPosition

![][public]

```cpp
PinDefinition& ansys::dpf::PinDefinition::setPosition(int n)
```



Set input pin position. 
**Returns**:

Pin definition.



**Parameters**:

* int **n**: [in] Postion of pin.

**Return type**: [PinDefinition](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition) &

<a id="structansys_1_1dpf_1_1PinDefinition_1adfb8a81792a5c590adf1658e55e885f8"></a>
### Function setDoc

![][public]

```cpp
PinDefinition& ansys::dpf::PinDefinition::setDoc(std::string const &n)
```



Set description of pin. 
**Returns**:

Pin definition.



**Parameters**:

* std::string const & **n**: [in] Pin description.

**Return type**: [PinDefinition](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition) &

<a id="structansys_1_1dpf_1_1PinDefinition_1aa403a064e7bee388eaf1aad0e2047375"></a>
### Function setOptional

![][public]

```cpp
PinDefinition& ansys::dpf::PinDefinition::setOptional(bool n)
```



Set indication that pin is optional. 
**Returns**:

Pin definition.



**Parameters**:

* bool **n**: [in] Flag indicating if pin is optional.

**Return type**: [PinDefinition](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition) &

<a id="structansys_1_1dpf_1_1PinDefinition_1a9bc7b6133bc37e2fe31238c252475d10"></a>
### Function setEllipsis

![][public]

```cpp
PinDefinition& ansys::dpf::PinDefinition::setEllipsis(bool n)
```



**Returns**:

Pin definition.



**Parameters**:

* bool **n**

**Return type**: [PinDefinition](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition) &

<a id="structansys_1_1dpf_1_1PinDefinition_1a1275730fe2079c3d32dabe26eb5cc753"></a>
### Function setAcceptedTypes

![][public]

```cpp
PinDefinition& ansys::dpf::PinDefinition::setAcceptedTypes(std::vector< TypeDescriptor > const &n)
```



**Returns**:

Pin definition.



**Parameters**:

* std::vector< [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) > const & **n**

**Return type**: [PinDefinition](structansys_1_1dpf_1_1PinDefinition.md#structansys_1_1dpf_1_1PinDefinition) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)