# Structure ansys::dpf::Dimensionality

<a id="structansys-dpf-dimensionality"></a>

![][C++]
![][public]



Entity to describe the dimensionality. 

**See also**: [dimensionalities](structansys-dpf-dimensionalities.md#structansys-dpf-dimensionalities)

## Members

* [components](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1a5b2b368e4a13cf72be8a3e4f579c4284)
* [Dimensionality](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1ad640244ee091a7f88f74805c0f2c7540)
* [Dimensionality](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1ac125b96a9c3925b3de25e96b567dde82)
* [eDiagonalMatrix](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fabfb10634b8229d98071873a53cbdbab1)
* [eFourthOrderIdentityTensor](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932faac4c7551563382886e6ebdde81c74ec7)
* [eFourthOrderTensor](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fa86439d7afe0bec6120829e128979c26a)
* [eIdentityMatrix](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fa635756dc0dccbafeedf23f36cc4cb680)
* [eMatrix](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fab7504de6505b8d462ea4805ac78c63de)
* [ENature](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932f)
* [eScalar](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fab1e374d84e9d59ff041f86b649785682)
* [eSymetricVoigtMatrix](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fa14aa2c543af770bb2cfaf2bea185f2cb)
* [eSymmetricalMatrix](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932faf671f518935364c6f60ca6353e024ea4)
* [eThirdOrderTensor](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932faefe92d527d4e8342302e21584a6c95db)
* [eVector](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932faf49ffdf91915fe856dd4465ec99cee86)
* [nature](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1ad0a69f176729f5196b59701ebc94c379)
* [numberOfComponents](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1a17e3ae4b1a740d42176086de8873608e)

## Public types

<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932f"></a>
### Enumeration type ENature

![][public]


```cpp
enum ENature {
  eScalar = 0,
  eVector = 1,
  eMatrix = 2,
  eThirdOrderTensor = 3,
  eFourthOrderTensor = 4,
  eSymmetricalMatrix = 5,
  eDiagonalMatrix = 6,
  eSymetricVoigtMatrix = 7,
  eIdentityMatrix = 8,
  eFourthOrderIdentityTensor = 9
}
```




Enum value to describe handled entities dimensions.



<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fab1e374d84e9d59ff041f86b649785682"></a>
#### Enumerator eScalar





<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932faf49ffdf91915fe856dd4465ec99cee86"></a>
#### Enumerator eVector





<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fab7504de6505b8d462ea4805ac78c63de"></a>
#### Enumerator eMatrix





<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932faefe92d527d4e8342302e21584a6c95db"></a>
#### Enumerator eThirdOrderTensor





<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fa86439d7afe0bec6120829e128979c26a"></a>
#### Enumerator eFourthOrderTensor





<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932faf671f518935364c6f60ca6353e024ea4"></a>
#### Enumerator eSymmetricalMatrix





<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fabfb10634b8229d98071873a53cbdbab1"></a>
#### Enumerator eDiagonalMatrix





<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fa14aa2c543af770bb2cfaf2bea185f2cb"></a>
#### Enumerator eSymetricVoigtMatrix





<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932fa635756dc0dccbafeedf23f36cc4cb680"></a>
#### Enumerator eIdentityMatrix





<a id="structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932faac4c7551563382886e6ebdde81c74ec7"></a>
#### Enumerator eFourthOrderIdentityTensor





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Dimensionality::ENature"}]}`
-->

## Public attributes

<a id="structansys-dpf-dimensionality-1a5b2b368e4a13cf72be8a3e4f579c4284"></a>
### Variable components

![][public]


```cpp
std::vector<int> ansys::dpf::Dimensionality::components
```




Vector defining size of each dimension. For example, use { 1 } for scalar, { 3 } for a 3D vector, and { 3, 3 } for 3D tensor.



**Type**: std::vector< int >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Dimensionality::components"}]}`
-->

<a id="structansys-dpf-dimensionality-1ad0a69f176729f5196b59701ebc94c379"></a>
### Variable nature

![][public]


```cpp
ENature ansys::dpf::Dimensionality::nature
```




[ENature](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932f) enum value to describe the dimension of the entity.



**Type**: [ENature](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Dimensionality::nature"}]}`
-->

## Public functions

<a id="structansys-dpf-dimensionality-1ad640244ee091a7f88f74805c0f2c7540"></a>
### Function Dimensionality

![][public]


```cpp
ansys::dpf::Dimensionality::Dimensionality()=delete
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Dimensionality::Dimensionality"}]}`
-->

<a id="structansys-dpf-dimensionality-1ac125b96a9c3925b3de25e96b567dde82"></a>
### Function Dimensionality

![][public]


```cpp
ansys::dpf::Dimensionality::Dimensionality(ENature innature, std::vector< int > const &incomponents)
```




[Dimensionality](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality) object that describes the entity dimensions.



**Parameters**:

* [ENature](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932f) **innature**
* std::vector< int > const & **incomponents**: [in] [ENature](structansys-dpf-dimensionality.md#structansys-dpf-dimensionality-1af4666dee615e27f2fe603240631b932f) enum value to describe the dimension of the entity.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Dimensionality::Dimensionality"}]}`
-->

<a id="structansys-dpf-dimensionality-1a17e3ae4b1a740d42176086de8873608e"></a>
### Function numberOfComponents

![][public]
![][const]


```cpp
dp_int ansys::dpf::Dimensionality::numberOfComponents() const
```




[in] Vector defining size of each dimension.
**Returns**:

The number of components of the described entity.



**Return type**: [dp_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Dimensionality::numberOfComponents"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)