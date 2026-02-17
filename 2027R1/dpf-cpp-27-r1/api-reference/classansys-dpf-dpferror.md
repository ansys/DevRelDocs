<a id="classansys-dpf-dpferror"></a>
# Class ansys::dpf::DpfError

![][C++]
![][public]



Error from DPF call. 

**See also**: [DpfException](classansys-dpf-dpfexception.md#classansys-dpf-dpfexception)

## Members

* [clear](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a31f33e6efbff5157ba3927d1c85b92bb)
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a6e5be6e3d3b4beb446d2182e5913e60a)
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a1c3ae5d95cfafb98cae37c3c6661ec89)
* [eComponentLoading](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa63cc3ff6720228860f33c24e18a81abf)
* [eFailure](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47faf8acd9de5506b8d9fd2acd4aaa0d2341)
* [eFileNotFound](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa6173cc22576234d0f2ff8e731269f12b)
* [eLicensingFailure](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa7e497c9bbbed6bc9974b24a48c589cba)
* [eOk](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fafbbb18218f01ff212fea92a133b88e21)
* [ErrorNature](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47f)
* [eRuntimeError](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa0c8ab336a55da58dd3370cd8ec248641)
* [eUnexpectedVoidEntity](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa4387e3722275260468e6129c30889868)
* [eUnexpectedVoidReturn](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47faa585e53574d25bd2fb1c6e9399a4a194)
* [eUnimplemented](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa7e1ad7229f4996867c9fb96ed8109dd5)
* [eUnimplementedAPI](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa547c1094c3159a0eb84aadd388424ca8)
* [eUnknown](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa7e0ab4a9ab10ba9158d691bf6b780592)
* [eUserInterrupted](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa5226925956eb514eff286167bd6e2116)
* [eWrongOutputType](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47facb3a3ddcc8669511fb2b9e3d7a399d91)
* [isOk](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1aa215db12375801e5addbe0dbf8a97533)
* [message](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a3bc55d7c2946bf8a9bf73b025bb0cc56)
* [nature](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1afbf881f187b078bb3840dde70d263358)
* [origin](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1ae9ff17267fc46a5f8c9811add42317ff)
* [what](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1ad89a0100818b4ee541fd45f4b06da3e1)
* [~DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a012124f81ed153167780bea811b044ea)

## Public types

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47f"></a>
### Enumeration type ErrorNature

![][public]


```cpp
enum ErrorNature {
  eUnknown,
  eOk,
  eComponentLoading,
  eFileNotFound,
  eRuntimeError,
  eWrongOutputType,
  eFailure,
  eUnexpectedVoidReturn,
  eUnexpectedVoidEntity,
  eUnimplemented,
  eUserInterrupted,
  eLicensingFailure,
  eUnimplementedAPI
}
```




Type of error



<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa7e0ab4a9ab10ba9158d691bf6b780592"></a>
#### Enumerator eUnknown



Unknown error.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fafbbb18218f01ff212fea92a133b88e21"></a>
#### Enumerator eOk



No error.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa63cc3ff6720228860f33c24e18a81abf"></a>
#### Enumerator eComponentLoading



Error loading component.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa6173cc22576234d0f2ff8e731269f12b"></a>
#### Enumerator eFileNotFound



File not found error.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa0c8ab336a55da58dd3370cd8ec248641"></a>
#### Enumerator eRuntimeError



[Any](classansys-dpf-any.md#classansys-dpf-any) type of runtime error.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47facb3a3ddcc8669511fb2b9e3d7a399d91"></a>
#### Enumerator eWrongOutputType



Wrong output type.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47faf8acd9de5506b8d9fd2acd4aaa0d2341"></a>
#### Enumerator eFailure



Functionality cannot be completed.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47faa585e53574d25bd2fb1c6e9399a4a194"></a>
#### Enumerator eUnexpectedVoidReturn



Return value expected.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa4387e3722275260468e6129c30889868"></a>
#### Enumerator eUnexpectedVoidEntity



Return value expected.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa7e1ad7229f4996867c9fb96ed8109dd5"></a>
#### Enumerator eUnimplemented



Functionality not implemented.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa5226925956eb514eff286167bd6e2116"></a>
#### Enumerator eUserInterrupted



Execution interupted by user.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa7e497c9bbbed6bc9974b24a48c589cba"></a>
#### Enumerator eLicensingFailure



Licensing checks failed.

<a id="classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47fa547c1094c3159a0eb84aadd388424ca8"></a>
#### Enumerator eUnimplementedAPI



Functionality not implemented.

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfError::ErrorNature"}]}`
-->

## Public functions

<a id="classansys-dpf-dpferror-1a6e5be6e3d3b4beb446d2182e5913e60a"></a>
### Function DpfError

![][public]


```cpp
ansys::dpf::DpfError::DpfError(ErrorNature nature, std::string const &origin, std::string const &message)
```




Create DPF error.



**Parameters**:

* [ErrorNature](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47f) **nature**: [in] Type of error.
* std::string const & **origin**: [in] Originator of error.
* std::string const & **message**: [in] Error message.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfError::DpfError"}]}`
-->

<a id="classansys-dpf-dpferror-1a1c3ae5d95cfafb98cae37c3c6661ec89"></a>
### Function DpfError

![][public]


```cpp
ansys::dpf::DpfError::DpfError()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfError::DpfError"}]}`
-->

<a id="classansys-dpf-dpferror-1a012124f81ed153167780bea811b044ea"></a>
### Function ~DpfError

![][public]


```cpp
virtual ansys::dpf::DpfError::~DpfError()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfError::~DpfError"}]}`
-->

<a id="classansys-dpf-dpferror-1ad89a0100818b4ee541fd45f4b06da3e1"></a>
### Function what

![][public]
![][const]


```cpp
virtual const char * ansys::dpf::DpfError::what() const noexcept
```




**Returns**:

Full error message.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfError::what"}]}`
-->

<a id="classansys-dpf-dpferror-1a3bc55d7c2946bf8a9bf73b025bb0cc56"></a>
### Function message

![][public]
![][const]


```cpp
const char * ansys::dpf::DpfError::message() const noexcept
```




**Returns**:

User supplied error message.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfError::message"}]}`
-->

<a id="classansys-dpf-dpferror-1ae9ff17267fc46a5f8c9811add42317ff"></a>
### Function origin

![][public]
![][const]


```cpp
const char * ansys::dpf::DpfError::origin() const noexcept
```




**Returns**:

Originator of error.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfError::origin"}]}`
-->

<a id="classansys-dpf-dpferror-1afbf881f187b078bb3840dde70d263358"></a>
### Function nature

![][public]
![][const]


```cpp
ErrorNature ansys::dpf::DpfError::nature() const noexcept
```




**Returns**:

Type of error.



**Return type**: [ErrorNature](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfError::nature"}]}`
-->

<a id="classansys-dpf-dpferror-1aa215db12375801e5addbe0dbf8a97533"></a>
### Function isOk

![][public]
![][const]


```cpp
bool ansys::dpf::DpfError::isOk() const noexcept
```




**Returns**:

Indication of error.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfError::isOk"}]}`
-->

<a id="classansys-dpf-dpferror-1a31f33e6efbff5157ba3927d1c85b92bb"></a>
### Function clear

![][public]


```cpp
void ansys::dpf::DpfError::clear() noexcept
```




Reset to empty state.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfError::clear"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)