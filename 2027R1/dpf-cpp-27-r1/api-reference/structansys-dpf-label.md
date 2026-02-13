<a id="structansys_1_1dpf_1_1Label"></a>
# Structure ansys::dpf::Label

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 518)



Container for label. 


**See also**: [labels](structansys_1_1dpf_1_1labels.md#structansys_1_1dpf_1_1labels), group_12

## Members

* [\_value](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1ade6a2bf0d62ca26625d13c3d977dba58)
* [c\_str](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1a8683632fa258b763080c99228b4f561c)
* [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1aa16652a3ceeda62dce2af07722a0ec80)
* [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1a26ac4cad65d736a4400cdb84b16f950b)
* [operator std::string](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1abb523602a3862d6141a3052812225e4b)
* [operator!=](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1a9b977b514452a7add47f54f86fe8c299)
* [operator\<](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1ae63a064be42fd512c71966bbd014b1e2)
* [operator\<=](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1a0406afbef012f8193e15713547c7057b)
* [operator==](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1aacb129a52a9ddbabf8a86553e6cbd9c7)

## Private attributes

<a id="structansys_1_1dpf_1_1Label_1ade6a2bf0d62ca26625d13c3d977dba58"></a>
### Variable \_value

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 521)


```cpp
std::string ansys::dpf::Label::_value
```








**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Label::_value"}]}`
-->

## Public functions

<a id="structansys_1_1dpf_1_1Label_1aa16652a3ceeda62dce2af07722a0ec80"></a>
### Function Label

![][public]


```cpp
ansys::dpf::Label::Label(std::string const &name)
```




Create [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label).



**Parameters**:

* std::string const & **name**: [in] Name of label.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Label::Label"}]}`
-->

<a id="structansys_1_1dpf_1_1Label_1a26ac4cad65d736a4400cdb84b16f950b"></a>
### Function Label

![][public]


```cpp
ansys::dpf::Label::Label(Label const &)=default
```








**Parameters**:

* Label const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Label::Label"}]}`
-->

<a id="structansys_1_1dpf_1_1Label_1aacb129a52a9ddbabf8a86553e6cbd9c7"></a>
### Function operator==

![][public]
![][const]


```cpp
bool ansys::dpf::Label::operator==(Label const &) const
```








**Parameters**:

* [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1aa16652a3ceeda62dce2af07722a0ec80) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Label::operator=="}]}`
-->

<a id="structansys_1_1dpf_1_1Label_1ae63a064be42fd512c71966bbd014b1e2"></a>
### Function operator\<

![][public]
![][const]


```cpp
bool ansys::dpf::Label::operator<(Label const &) const
```








**Parameters**:

* [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1aa16652a3ceeda62dce2af07722a0ec80) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Label::operator<"}]}`
-->

<a id="structansys_1_1dpf_1_1Label_1a0406afbef012f8193e15713547c7057b"></a>
### Function operator\<=

![][public]
![][const]


```cpp
bool ansys::dpf::Label::operator<=(Label const &) const
```








**Parameters**:

* [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1aa16652a3ceeda62dce2af07722a0ec80) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Label::operator<="}]}`
-->

<a id="structansys_1_1dpf_1_1Label_1a9b977b514452a7add47f54f86fe8c299"></a>
### Function operator!=

![][public]
![][const]


```cpp
bool ansys::dpf::Label::operator!=(Label const &) const
```








**Parameters**:

* [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label_1aa16652a3ceeda62dce2af07722a0ec80) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Label::operator!="}]}`
-->

<a id="structansys_1_1dpf_1_1Label_1abb523602a3862d6141a3052812225e4b"></a>
### Function operator std::string

![][public]
![][const]


```cpp
ansys::dpf::Label::operator std::string() const
```




Value of label.



**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Label::string"}]}`
-->

<a id="structansys_1_1dpf_1_1Label_1a8683632fa258b763080c99228b4f561c"></a>
### Function c\_str

![][public]
![][const]


```cpp
const char * ansys::dpf::Label::c_str() const
```




**Returns**:

Value of label.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Label::c_str"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)