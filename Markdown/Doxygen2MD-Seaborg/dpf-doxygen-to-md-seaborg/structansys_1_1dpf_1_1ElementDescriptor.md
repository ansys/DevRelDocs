<a id="structansys_1_1dpf_1_1ElementDescriptor"></a>
# Structure ansys::dpf::ElementDescriptor

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 562)



Description of element. 

**See also**: [elements](structansys_1_1dpf_1_1elements.md#structansys_1_1dpf_1_1elements)

## Members

* [beam](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1adb50cfb463c83f3664027e811d46a6df)
* [ElementDescriptor](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1ab19bfe010b78317bd83e6d1d2b9b1ebf)
* [id](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1ad24353ec6b433aef168406c95f38fb0e)
* [name](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1a49e5f9c938d56155ba253b08ba8b75ff)
* [number\_of\_corner\_nodes](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1af6486768e61885edb5d670b09425c510)
* [number\_of\_mid\_nodes](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1a2a0d6d6af10d5db16cc378f78b4db3ab)
* [number\_of\_nodes](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1ad05e65f705b96d0cbc9162de07d21af3)
* [operator==](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1aa39ac1e62dfbedc388b633dcf743b8b9)
* [quadratic](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1a46568f0ab450482f62299052f34e2c17)
* [shell](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1aec1affe701814f76ea99c13730f4ee78)
* [short\_name](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1a906c009a859169fa2a003c06f9053c47)
* [solid](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1a55af041295e3f9d83373e649289f1b35)
* [unknownNumNodes](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor_1a4b8bd6d9d01868d7984b58551deb8507)

## Public attributes

<a id="structansys_1_1dpf_1_1ElementDescriptor_1ad24353ec6b433aef168406c95f38fb0e"></a>
### Variable id

![][public]

**Definition**: `dpf\_api\_base.h` (line 564)

```cpp
int ansys::dpf::ElementDescriptor::id
```







**Type**: int

<a id="structansys_1_1dpf_1_1ElementDescriptor_1a49e5f9c938d56155ba253b08ba8b75ff"></a>
### Variable name

![][public]

**Definition**: `dpf\_api\_base.h` (line 566)

```cpp
std::string ansys::dpf::ElementDescriptor::name
```



Full name of element.



**Type**: std::string

<a id="structansys_1_1dpf_1_1ElementDescriptor_1a906c009a859169fa2a003c06f9053c47"></a>
### Variable short\_name

![][public]

**Definition**: `dpf\_api\_base.h` (line 567)

```cpp
std::string ansys::dpf::ElementDescriptor::short_name
```







**Type**: std::string

<a id="structansys_1_1dpf_1_1ElementDescriptor_1af6486768e61885edb5d670b09425c510"></a>
### Variable number\_of\_corner\_nodes

![][public]

**Definition**: `dpf\_api\_base.h` (line 568)

```cpp
dp_int ansys::dpf::ElementDescriptor::number_of_corner_nodes
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="structansys_1_1dpf_1_1ElementDescriptor_1a2a0d6d6af10d5db16cc378f78b4db3ab"></a>
### Variable number\_of\_mid\_nodes

![][public]

**Definition**: `dpf\_api\_base.h` (line 569)

```cpp
dp_int ansys::dpf::ElementDescriptor::number_of_mid_nodes
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="structansys_1_1dpf_1_1ElementDescriptor_1ad05e65f705b96d0cbc9162de07d21af3"></a>
### Variable number\_of\_nodes

![][public]

**Definition**: `dpf\_api\_base.h` (line 570)

```cpp
dp_int ansys::dpf::ElementDescriptor::number_of_nodes
```







**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="structansys_1_1dpf_1_1ElementDescriptor_1a55af041295e3f9d83373e649289f1b35"></a>
### Variable solid

![][public]

**Definition**: `dpf\_api\_base.h` (line 572)

```cpp
bool ansys::dpf::ElementDescriptor::solid
```



Solid or volume element.



**Type**: bool

<a id="structansys_1_1dpf_1_1ElementDescriptor_1aec1affe701814f76ea99c13730f4ee78"></a>
### Variable shell

![][public]

**Definition**: `dpf\_api\_base.h` (line 574)

```cpp
bool ansys::dpf::ElementDescriptor::shell
```



Shell or surface element.



**Type**: bool

<a id="structansys_1_1dpf_1_1ElementDescriptor_1adb50cfb463c83f3664027e811d46a6df"></a>
### Variable beam

![][public]

**Definition**: `dpf\_api\_base.h` (line 576)

```cpp
bool ansys::dpf::ElementDescriptor::beam
```



Beam or line element.



**Type**: bool

<a id="structansys_1_1dpf_1_1ElementDescriptor_1a46568f0ab450482f62299052f34e2c17"></a>
### Variable quadratic

![][public]

**Definition**: `dpf\_api\_base.h` (line 578)

```cpp
bool ansys::dpf::ElementDescriptor::quadratic
```



Quadratic element.



**Type**: bool

## Public functions

<a id="structansys_1_1dpf_1_1ElementDescriptor_1ab19bfe010b78317bd83e6d1d2b9b1ebf"></a>
### Function ElementDescriptor

![][public]

```cpp
ansys::dpf::ElementDescriptor::ElementDescriptor(dp_int id, std::string const &name, std::string const &short_name, dp_int corner, dp_int mid, dp_int all, bool is_solid, bool is_shell, bool is_beam)
```



Create element descriptor



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **id**: [in] Id of element.
* std::string const & **name**: [in] Full name of element.
* std::string const & **short_name**: [in] Short name of element.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **corner**: [in] Number of corner nodes.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **mid**: [in] Number of mid-side nodes.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **all**: [in] Total number of nodes.
* bool **is_solid**: [in] Is solid/volume element.
* bool **is_shell**: [in] Is shell/surface element.
* bool **is_beam**: [in] Is beam/line element

**Return type**: 

<a id="structansys_1_1dpf_1_1ElementDescriptor_1aa39ac1e62dfbedc388b633dcf743b8b9"></a>
### Function operator==

![][public]
![][const]

```cpp
bool ansys::dpf::ElementDescriptor::operator==(ElementDescriptor const &rhs) const
```







**Parameters**:

* [ElementDescriptor](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor) const & **rhs**

**Return type**: bool

<a id="structansys_1_1dpf_1_1ElementDescriptor_1a4b8bd6d9d01868d7984b58551deb8507"></a>
### Function unknownNumNodes

![][public]
![][const]

```cpp
bool ansys::dpf::ElementDescriptor::unknownNumNodes() const
```







**Return type**: bool

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)