# Structure sysc::SetupFileInfo

![][C++]
![][public]

**Definition**: `CommonTypes.hpp` (line 152)

Provide a structure for writing System Coupling setup files.



## Members

* [restartsSupported](structsysc_1_1SetupFileInfo.md#structsysc_1_1SetupFileInfo_1a65df447274a91c50920e5af5296c60e3)
* [SetupFileInfo](structsysc_1_1SetupFileInfo.md#structsysc_1_1SetupFileInfo_1af3e2bd60fca807c13cb906f13a662570)
* [SetupFileInfo](structsysc_1_1SetupFileInfo.md#structsysc_1_1SetupFileInfo_1ad61495d5f2fd0c14da1245a1e44a1737)
* [SetupFileInfo](structsysc_1_1SetupFileInfo.md#structsysc_1_1SetupFileInfo_1af78fd7b774f9096e72210180c5f68fea)
* [setupFileName](structsysc_1_1SetupFileInfo.md#structsysc_1_1SetupFileInfo_1acf9bd8de151bb98c37844bce125c20d0)

## Public attributes

<a id="structsysc_1_1SetupFileInfo_1acf9bd8de151bb98c37844bce125c20d0"></a>
### Variable setupFileName

![][public]

**Definition**: `CommonTypes.hpp` (line 153)

```cpp
std::string sysc::SetupFileInfo::setupFileName
```



Setup file name.



**Type**: std::string

<a id="structsysc_1_1SetupFileInfo_1a65df447274a91c50920e5af5296c60e3"></a>
### Variable restartsSupported

![][public]

**Definition**: `CommonTypes.hpp` (line 154)

```cpp
bool sysc::SetupFileInfo::restartsSupported
```



Do not use.



**Type**: bool

## Public functions

<a id="structsysc_1_1SetupFileInfo_1af3e2bd60fca807c13cb906f13a662570"></a>
### Function SetupFileInfo

![][public]

```cpp
sysc::SetupFileInfo::SetupFileInfo()
```

Provide a default constructor for [SetupFileInfo](structsysc_1_1SetupFileInfo.md#structsysc_1_1SetupFileInfo).

Setup file name will be set to empty string. Restarts supported flag will be set to false.



**Return type**: 

<a id="structsysc_1_1SetupFileInfo_1ad61495d5f2fd0c14da1245a1e44a1737"></a>
### Function SetupFileInfo

![][public]

```cpp
sysc::SetupFileInfo::SetupFileInfo(std::string setupFileName)
```

Provide a non-default constructor for [SetupFileInfo](structsysc_1_1SetupFileInfo.md#structsysc_1_1SetupFileInfo).

**Parameters**:

* **setupFileName**: Setup file name.

Restarts supported flag will be set to false.



**Parameters**:

* std::string **setupFileName**

**Return type**: 

<a id="structsysc_1_1SetupFileInfo_1af78fd7b774f9096e72210180c5f68fea"></a>
### Function SetupFileInfo

![][public]

```cpp
sysc::SetupFileInfo::SetupFileInfo(std::string setupFileName, bool restartsSupported)
```

Provide a non-default constructor for [SetupFileInfo](structsysc_1_1SetupFileInfo.md#structsysc_1_1SetupFileInfo).

**Parameters**:

* **setupFileName**: Setup file name.
* **restartsSupported**: Flag indicating whether restarts are supported.



**Parameters**:

* std::string **setupFileName**
* bool **restartsSupported**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)