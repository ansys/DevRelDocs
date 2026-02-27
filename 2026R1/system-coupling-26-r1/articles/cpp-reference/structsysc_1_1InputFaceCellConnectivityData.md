# Structure sysc::InputFaceCellConnectivityData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 137)

Describes face-to-cell connectivity.



## Members

* [cell0Ids](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1ae2cc4a2be45d341bc6277fa3c6a11585)
* [cell1Ids](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a1a7ccea6094a3ead9c262799ef6bf5f5)
* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a8e1477eecc978e3f5b178a5745c72f79)
* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a4e729c026ff2cf0a4bd24ebd59c8a877)
* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1ac846aecdb15d4a7baea6d2874b6002b5)
* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a71396e6b6f87202f9251b00ca95e28a6)
* [operator=](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1ae2607ecea467697e0facb8cf1a730884)
* [operator=](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1ad9a96bf8271bec336df0caf059640dcd)

## Public attributes

<a id="structsysc_1_1InputFaceCellConnectivityData_1ae2cc4a2be45d341bc6277fa3c6a11585"></a>
### Variable cell0Ids

![][public]

**Definition**: `MeshDefinition.hpp` (line 138)


```cpp
IntegerData sysc::InputFaceCellConnectivityData::cell0Ids
```




Cell ids on side 0.



**Type**: [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData)

**Referenced by**:

* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a8e1477eecc978e3f5b178a5745c72f79)

<a id="structsysc_1_1InputFaceCellConnectivityData_1a1a7ccea6094a3ead9c262799ef6bf5f5"></a>
### Variable cell1Ids

![][public]

**Definition**: `MeshDefinition.hpp` (line 139)


```cpp
IntegerData sysc::InputFaceCellConnectivityData::cell1Ids
```




Cell ids on side 1.



**Type**: [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData)

**Referenced by**:

* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a8e1477eecc978e3f5b178a5745c72f79)

## Public functions

<a id="structsysc_1_1InputFaceCellConnectivityData_1a8e1477eecc978e3f5b178a5745c72f79"></a>
### Function InputFaceCellConnectivityData

![][public]


```cpp
sysc::InputFaceCellConnectivityData::InputFaceCellConnectivityData(IntegerData cell0Ids, IntegerData cell1Ids)
```


Create face-to-cell connectivity given cell0 and cell1 arrays.





**Parameters**:

* [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **cell0Ids**
* [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **cell1Ids**

**Return type**: 

**References**:

* [cell0Ids](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1ae2cc4a2be45d341bc6277fa3c6a11585)
* [cell1Ids](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a1a7ccea6094a3ead9c262799ef6bf5f5)

**Referenced by**:

* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1ac846aecdb15d4a7baea6d2874b6002b5)
* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a71396e6b6f87202f9251b00ca95e28a6)
* [operator=](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1ae2607ecea467697e0facb8cf1a730884)
* [operator=](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1ad9a96bf8271bec336df0caf059640dcd)

<a id="structsysc_1_1InputFaceCellConnectivityData_1a4e729c026ff2cf0a4bd24ebd59c8a877"></a>
### Function InputFaceCellConnectivityData

![][public]


```cpp
sysc::InputFaceCellConnectivityData::InputFaceCellConnectivityData()=default
```


Create empty face-to-cell connectivity.





**Return type**: 

<a id="structsysc_1_1InputFaceCellConnectivityData_1ac846aecdb15d4a7baea6d2874b6002b5"></a>
### Function InputFaceCellConnectivityData

![][public]


```cpp
sysc::InputFaceCellConnectivityData::InputFaceCellConnectivityData(const InputFaceCellConnectivityData &)=default
```


Copy constructor.





**Parameters**:

* const [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData) &

**Return type**: 

**References**:

* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a8e1477eecc978e3f5b178a5745c72f79)

<a id="structsysc_1_1InputFaceCellConnectivityData_1a71396e6b6f87202f9251b00ca95e28a6"></a>
### Function InputFaceCellConnectivityData

![][public]


```cpp
sysc::InputFaceCellConnectivityData::InputFaceCellConnectivityData(InputFaceCellConnectivityData &&)=default
```


Move constructor.





**Parameters**:

* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData) &&

**Return type**: 

**References**:

* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a8e1477eecc978e3f5b178a5745c72f79)

<a id="structsysc_1_1InputFaceCellConnectivityData_1ae2607ecea467697e0facb8cf1a730884"></a>
### Function operator=

![][public]


```cpp
InputFaceCellConnectivityData & sysc::InputFaceCellConnectivityData::operator=(const InputFaceCellConnectivityData &)=default
```


Copy-assign operator.





**Parameters**:

* const [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData) &

**Return type**: [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData) &

**References**:

* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a8e1477eecc978e3f5b178a5745c72f79)

<a id="structsysc_1_1InputFaceCellConnectivityData_1ad9a96bf8271bec336df0caf059640dcd"></a>
### Function operator=

![][public]


```cpp
InputFaceCellConnectivityData & sysc::InputFaceCellConnectivityData::operator=(InputFaceCellConnectivityData &&)=default
```


Move-assign operator.





**Parameters**:

* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData) &&

**Return type**: [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData) &

**References**:

* [InputFaceCellConnectivityData](structsysc_1_1InputFaceCellConnectivityData.md#structsysc_1_1InputFaceCellConnectivityData_1a8e1477eecc978e3f5b178a5745c72f79)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)