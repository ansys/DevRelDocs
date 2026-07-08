# Structure ansys::dpf::ElementDescriptor

<a id="structansys-dpf-elementdescriptor"></a>

![][C++]
![][public]



Description of element.

**See also**: [elements](structansys-dpf-elements.md#structansys-dpf-elements)

## Members

* [beam](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1adb50cfb463c83f3664027e811d46a6df)
* [ElementDescriptor](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1ab19bfe010b78317bd83e6d1d2b9b1ebf)
* [id](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1ad24353ec6b433aef168406c95f38fb0e)
* [name](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1a49e5f9c938d56155ba253b08ba8b75ff)
* [number_of_corner_nodes](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1af6486768e61885edb5d670b09425c510)
* [number_of_mid_nodes](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1a2a0d6d6af10d5db16cc378f78b4db3ab)
* [number_of_nodes](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1ad05e65f705b96d0cbc9162de07d21af3)
* [operator==](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1aa39ac1e62dfbedc388b633dcf743b8b9)
* [quadratic](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1a46568f0ab450482f62299052f34e2c17)
* [shell](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1aec1affe701814f76ea99c13730f4ee78)
* [short_name](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1a906c009a859169fa2a003c06f9053c47)
* [solid](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1a55af041295e3f9d83373e649289f1b35)
* [unknownNumNodes](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1a4b8bd6d9d01868d7984b58551deb8507)

## Public attributes

<a id="structansys-dpf-elementdescriptor-1ad24353ec6b433aef168406c95f38fb0e"></a>
### Variable id

![][public]


```cpp
int ansys::dpf::ElementDescriptor::id
```








**Type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::id"}]}`
-->

<a id="structansys-dpf-elementdescriptor-1a49e5f9c938d56155ba253b08ba8b75ff"></a>
### Variable name

![][public]


```cpp
std::string ansys::dpf::ElementDescriptor::name
```




Full name of element.



**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::name"}]}`
-->

<a id="structansys-dpf-elementdescriptor-1a906c009a859169fa2a003c06f9053c47"></a>
### Variable short_name

![][public]


```cpp
std::string ansys::dpf::ElementDescriptor::short_name
```








**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::short_name"}]}`
-->

<a id="structansys-dpf-elementdescriptor-1af6486768e61885edb5d670b09425c510"></a>
### Variable number_of_corner_nodes

![][public]


```cpp
dp_int ansys::dpf::ElementDescriptor::number_of_corner_nodes
```








**Type**: [dp_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::number_of_corner_nodes"}]}`
-->

<a id="structansys-dpf-elementdescriptor-1a2a0d6d6af10d5db16cc378f78b4db3ab"></a>
### Variable number_of_mid_nodes

![][public]


```cpp
dp_int ansys::dpf::ElementDescriptor::number_of_mid_nodes
```








**Type**: [dp_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::number_of_mid_nodes"}]}`
-->

<a id="structansys-dpf-elementdescriptor-1ad05e65f705b96d0cbc9162de07d21af3"></a>
### Variable number_of_nodes

![][public]


```cpp
dp_int ansys::dpf::ElementDescriptor::number_of_nodes
```








**Type**: [dp_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::number_of_nodes"}]}`
-->

<a id="structansys-dpf-elementdescriptor-1a55af041295e3f9d83373e649289f1b35"></a>
### Variable solid

![][public]


```cpp
bool ansys::dpf::ElementDescriptor::solid
```




Solid or volume element.



**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::solid"}]}`
-->

<a id="structansys-dpf-elementdescriptor-1aec1affe701814f76ea99c13730f4ee78"></a>
### Variable shell

![][public]


```cpp
bool ansys::dpf::ElementDescriptor::shell
```




Shell or surface element.



**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::shell"}]}`
-->

<a id="structansys-dpf-elementdescriptor-1adb50cfb463c83f3664027e811d46a6df"></a>
### Variable beam

![][public]


```cpp
bool ansys::dpf::ElementDescriptor::beam
```




Beam or line element.



**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::beam"}]}`
-->

<a id="structansys-dpf-elementdescriptor-1a46568f0ab450482f62299052f34e2c17"></a>
### Variable quadratic

![][public]


```cpp
bool ansys::dpf::ElementDescriptor::quadratic
```




Quadratic element.



**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::quadratic"}]}`
-->

## Public functions

<a id="structansys-dpf-elementdescriptor-1ab19bfe010b78317bd83e6d1d2b9b1ebf"></a>
### Function ElementDescriptor

![][public]


```cpp
ansys::dpf::ElementDescriptor::ElementDescriptor(dp_int id, std::string const &name, std::string const &short_name, dp_int corner, dp_int mid, dp_int all, bool is_solid, bool is_shell, bool is_beam)
```




Create element descriptor



**Parameters**:

* [dp_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **id**: [in] Id of element.
* std::string const & **name**: [in] Full name of element.
* std::string const & **short_name**: [in] Short name of element.
* [dp_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **corner**: [in] Number of corner nodes.
* [dp_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **mid**: [in] Number of mid-side nodes.
* [dp_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **all**: [in] Total number of nodes.
* bool **is_solid**: [in] Is solid/volume element.
* bool **is_shell**: [in] Is shell/surface element.
* bool **is_beam**: [in] Is beam/line element

**Return type**:

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::ElementDescriptor"}]}`
-->

<a id="structansys-dpf-elementdescriptor-1aa39ac1e62dfbedc388b633dcf743b8b9"></a>
### Function operator==

![][public]
![][const]


```cpp
bool ansys::dpf::ElementDescriptor::operator==(ElementDescriptor const &rhs) const
```








**Parameters**:

* [ElementDescriptor](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor-1ab19bfe010b78317bd83e6d1d2b9b1ebf) const & **rhs**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::operator=="}]}`
-->

<a id="structansys-dpf-elementdescriptor-1a4b8bd6d9d01868d7984b58551deb8507"></a>
### Function unknownNumNodes

![][public]
![][const]


```cpp
bool ansys::dpf::ElementDescriptor::unknownNumNodes() const
```








**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementDescriptor::unknownNumNodes"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)