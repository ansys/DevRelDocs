<a id="structansys_1_1dpf_1_1TypeDescriptor"></a>
# Structure ansys::dpf::TypeDescriptor

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 703)



Description of type. 

**See also**: [types](structansys_1_1dpf_1_1types.md#structansys_1_1dpf_1_1types)

## Members

* [\_name](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1a6e115fde1b6792ee1d1dc01d764105d7)
* [c\_str](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1a9aaccc80174bf8be1de920b529a39daa)
* [operator std::string](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1a176268d95ca20a2fdb6d1a0e3c1b4ffb)
* [operator!=](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1addcc78b9415108906a05f6aebbf708e9)
* [operator\<](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1aa65f92a8c0c05c70994a2a56f009d4a9)
* [operator\<=](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1a5f4ebc2148881a583bc7fc00ac454a14)
* [operator=](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1a24286d6fc7819848a9f445e8c104d69b)
* [operator=](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1ae74dd04120a3cafaa0f7f9603a8241f0)
* [operator==](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1ab0aa169a15cd0fccca22af45704ebc65)
* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1a1b435e8d7b7c80e5f005af5b09b67aa5)
* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1ab77c44a1fd8428da80637cf0f5d134a4)
* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor_1a6286c4dd003ac8ab50ae664e937d6249)

## Friends

<a id="structansys_1_1dpf_1_1TypeDescriptor_1a403411f3e10f233f99a0948a853b605a"></a>
### Friend types

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 705)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"struct"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend struct types"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"structansys_1_1dpf_1_1types"},"children":[{"type":"text","text":"types"}]}]},{"type":"text","text":"\n        "}]}

<a id="structansys_1_1dpf_1_1TypeDescriptor_1aa60b6022465bcd46362295cc53d4ba68"></a>
### Friend OperatorSpecification

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 706)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class OperatorSpecification"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1OperatorSpecification"},"children":[{"type":"text","text":"OperatorSpecification"}]}]},{"type":"text","text":"\n        "}]}

## Private attributes

<a id="structansys_1_1dpf_1_1TypeDescriptor_1a6e115fde1b6792ee1d1dc01d764105d7"></a>
### Variable \_name

![][private]

**Definition**: `dpf\_api\_base.h` (line 708)

```cpp
std::string ansys::dpf::TypeDescriptor::_name
```







**Type**: std::string

## Private functions

<a id="structansys_1_1dpf_1_1TypeDescriptor_1a1b435e8d7b7c80e5f005af5b09b67aa5"></a>
### Function TypeDescriptor

![][private]

```cpp
ansys::dpf::TypeDescriptor::TypeDescriptor(std::string const &name)
```







**Parameters**:

* std::string const & **name**

**Return type**: 

## Public functions

<a id="structansys_1_1dpf_1_1TypeDescriptor_1ab77c44a1fd8428da80637cf0f5d134a4"></a>
### Function TypeDescriptor

![][public]

```cpp
ansys::dpf::TypeDescriptor::TypeDescriptor(TypeDescriptor const &)=default
```







**Parameters**:

* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) const &

**Return type**: 

<a id="structansys_1_1dpf_1_1TypeDescriptor_1a6286c4dd003ac8ab50ae664e937d6249"></a>
### Function TypeDescriptor

![][public]

```cpp
ansys::dpf::TypeDescriptor::TypeDescriptor(TypeDescriptor &&)=default
```







**Parameters**:

* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) &&

**Return type**: 

<a id="structansys_1_1dpf_1_1TypeDescriptor_1a24286d6fc7819848a9f445e8c104d69b"></a>
### Function operator=

![][public]

```cpp
TypeDescriptor& ansys::dpf::TypeDescriptor::operator=(TypeDescriptor const &)=default
```







**Parameters**:

* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) const &

**Return type**: [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) &

<a id="structansys_1_1dpf_1_1TypeDescriptor_1ae74dd04120a3cafaa0f7f9603a8241f0"></a>
### Function operator=

![][public]

```cpp
TypeDescriptor& ansys::dpf::TypeDescriptor::operator=(TypeDescriptor &&)=default
```







**Parameters**:

* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) &&

**Return type**: [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) &

<a id="structansys_1_1dpf_1_1TypeDescriptor_1ab0aa169a15cd0fccca22af45704ebc65"></a>
### Function operator==

![][public]
![][const]

```cpp
bool ansys::dpf::TypeDescriptor::operator==(TypeDescriptor const &) const
```







**Parameters**:

* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) const &

**Return type**: bool

<a id="structansys_1_1dpf_1_1TypeDescriptor_1aa65f92a8c0c05c70994a2a56f009d4a9"></a>
### Function operator\<

![][public]
![][const]

```cpp
bool ansys::dpf::TypeDescriptor::operator<(TypeDescriptor const &) const
```







**Parameters**:

* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) const &

**Return type**: bool

<a id="structansys_1_1dpf_1_1TypeDescriptor_1a5f4ebc2148881a583bc7fc00ac454a14"></a>
### Function operator\<=

![][public]
![][const]

```cpp
bool ansys::dpf::TypeDescriptor::operator<=(TypeDescriptor const &) const
```







**Parameters**:

* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) const &

**Return type**: bool

<a id="structansys_1_1dpf_1_1TypeDescriptor_1addcc78b9415108906a05f6aebbf708e9"></a>
### Function operator!=

![][public]
![][const]

```cpp
bool ansys::dpf::TypeDescriptor::operator!=(TypeDescriptor const &) const
```







**Parameters**:

* [TypeDescriptor](structansys_1_1dpf_1_1TypeDescriptor.md#structansys_1_1dpf_1_1TypeDescriptor) const &

**Return type**: bool

<a id="structansys_1_1dpf_1_1TypeDescriptor_1a176268d95ca20a2fdb6d1a0e3c1b4ffb"></a>
### Function operator std::string

![][public]
![][const]

```cpp
ansys::dpf::TypeDescriptor::operator std::string() const
```



Name of type.



**Return type**: 

<a id="structansys_1_1dpf_1_1TypeDescriptor_1a9aaccc80174bf8be1de920b529a39daa"></a>
### Function c\_str

![][public]
![][const]

```cpp
const char* ansys::dpf::TypeDescriptor::c_str() const
```



**Returns**:

Name of type.



**Return type**: const char *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)