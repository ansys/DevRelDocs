# Structure sysc::InputElementNodeCountData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 84)

Describes element node counts.



## Members

* [elemNodeCounts](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a862a54ae2082b7c1f2bb655f2324be1d)
* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a8465caf61791ca29ae9536b5937a8ac7)
* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1ad372a361ab1a3dd19d9db779a9830152)
* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1ac5cf32147c74435c280f580b2f01f161)
* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a7235ed549580e3eea6c44a3c366c0e92)
* [operator=](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a8841abf16d807982824bd421ac3f0822)
* [operator=](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1aa9f75313ce396fa929ee2f963751e0a8)

## Public attributes

<a id="structsysc_1_1InputElementNodeCountData_1a862a54ae2082b7c1f2bb655f2324be1d"></a>
### Variable elemNodeCounts

![][public]

**Definition**: `MeshDefinition.hpp` (line 85)


```cpp
IntegerData sysc::InputElementNodeCountData::elemNodeCounts
```




Element node counts array.



**Type**: [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData)

**Referenced by**:

* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a8465caf61791ca29ae9536b5937a8ac7)

## Public functions

<a id="structsysc_1_1InputElementNodeCountData_1a8465caf61791ca29ae9536b5937a8ac7"></a>
### Function InputElementNodeCountData

![][public]


```cpp
sysc::InputElementNodeCountData::InputElementNodeCountData(IntegerData elemNodeCounts)
```


Constructor that takes element node counts array.





**Parameters**:

* [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **elemNodeCounts**

**Return type**: 

**References**:

* [elemNodeCounts](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a862a54ae2082b7c1f2bb655f2324be1d)

**Referenced by**:

* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1ac5cf32147c74435c280f580b2f01f161)
* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a7235ed549580e3eea6c44a3c366c0e92)
* [operator=](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a8841abf16d807982824bd421ac3f0822)
* [operator=](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1aa9f75313ce396fa929ee2f963751e0a8)

<a id="structsysc_1_1InputElementNodeCountData_1ad372a361ab1a3dd19d9db779a9830152"></a>
### Function InputElementNodeCountData

![][public]


```cpp
sysc::InputElementNodeCountData::InputElementNodeCountData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1InputElementNodeCountData_1ac5cf32147c74435c280f580b2f01f161"></a>
### Function InputElementNodeCountData

![][public]


```cpp
sysc::InputElementNodeCountData::InputElementNodeCountData(const InputElementNodeCountData &)=default
```


Copy constructor.





**Parameters**:

* const [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData) &

**Return type**: 

**References**:

* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a8465caf61791ca29ae9536b5937a8ac7)

<a id="structsysc_1_1InputElementNodeCountData_1a7235ed549580e3eea6c44a3c366c0e92"></a>
### Function InputElementNodeCountData

![][public]


```cpp
sysc::InputElementNodeCountData::InputElementNodeCountData(InputElementNodeCountData &&)=default
```


Move constructor.





**Parameters**:

* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData) &&

**Return type**: 

**References**:

* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a8465caf61791ca29ae9536b5937a8ac7)

<a id="structsysc_1_1InputElementNodeCountData_1a8841abf16d807982824bd421ac3f0822"></a>
### Function operator=

![][public]


```cpp
InputElementNodeCountData & sysc::InputElementNodeCountData::operator=(const InputElementNodeCountData &)=default
```


Copy-assign operator.





**Parameters**:

* const [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData) &

**Return type**: [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData) &

**References**:

* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a8465caf61791ca29ae9536b5937a8ac7)

<a id="structsysc_1_1InputElementNodeCountData_1aa9f75313ce396fa929ee2f963751e0a8"></a>
### Function operator=

![][public]


```cpp
InputElementNodeCountData & sysc::InputElementNodeCountData::operator=(InputElementNodeCountData &&)=default
```


Move-assign operator.





**Parameters**:

* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData) &&

**Return type**: [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData) &

**References**:

* [InputElementNodeCountData](structsysc_1_1InputElementNodeCountData.md#structsysc_1_1InputElementNodeCountData_1a8465caf61791ca29ae9536b5937a8ac7)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)