# Structure sysc::ResultsInfo

![][C++]
![][public]

**Definition**: `CommonTypes.hpp` (line 187)

Provide a structure for writing System Coupling results files.



## Members

* [baseFileName](structsysc_1_1ResultsInfo.md#structsysc_1_1ResultsInfo_1acc2c96ab4d0c7b8bc630583a814cead4)
* [ResultsInfo](structsysc_1_1ResultsInfo.md#structsysc_1_1ResultsInfo_1a2e6c0a4ff62fde1317edd3df5752bc78)

## Public attributes

<a id="structsysc_1_1ResultsInfo_1acc2c96ab4d0c7b8bc630583a814cead4"></a>
### Variable baseFileName

![][public]

**Definition**: `CommonTypes.hpp` (line 188)

```cpp
std::string sysc::ResultsInfo::baseFileName
```



Base results file name.



**Type**: std::string

## Public functions

<a id="structsysc_1_1ResultsInfo_1a2e6c0a4ff62fde1317edd3df5752bc78"></a>
### Function ResultsInfo

![][public]

```cpp
sysc::ResultsInfo::ResultsInfo(std::string baseFileName)
```

Create results file info struct, given a base file name.





**Parameters**:

* std::string **baseFileName**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)