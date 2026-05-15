# Structure sysc::InputElementIdData

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 25)

Element id access struct, provides read-and-write access to the mesh element ids.



## Members

* [elementIds](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1a45bbed98226a9fa5adad5abb64db1827)
* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1ab3696bc880a7cc99c0f0afe13ad31472)
* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1a8a97867a48258191bbc72a457013345d)
* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1a6a4cf4e60fd2706ebc03bcd045b30f17)
* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1adf3434d3a517da557e936dede57cf96e)
* [operator=](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1a95cf55cf79387b706a80022077826c0f)
* [operator=](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1a071dfde948aa6d47d7804d0cd8fd5fce)

## Public attributes

<a id="structsysc_1_1InputElementIdData_1a45bbed98226a9fa5adad5abb64db1827"></a>
### Variable elementIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 27)


```cpp
IntegerData sysc::InputElementIdData::elementIds
```


Element ids.





**Type**: [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData)

**Referenced by**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1ab3696bc880a7cc99c0f0afe13ad31472)

## Public functions

<a id="structsysc_1_1InputElementIdData_1ab3696bc880a7cc99c0f0afe13ad31472"></a>
### Function InputElementIdData

![][public]


```cpp
sysc::InputElementIdData::InputElementIdData(IntegerData elementIds)
```


Constructor that takes element ids.





**Parameters**:

* [IntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) **elementIds**

**Return type**: 

**References**:

* [elementIds](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1a45bbed98226a9fa5adad5abb64db1827)

**Referenced by**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1a6a4cf4e60fd2706ebc03bcd045b30f17)
* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1adf3434d3a517da557e936dede57cf96e)
* [operator=](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1a95cf55cf79387b706a80022077826c0f)
* [operator=](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1a071dfde948aa6d47d7804d0cd8fd5fce)

<a id="structsysc_1_1InputElementIdData_1a8a97867a48258191bbc72a457013345d"></a>
### Function InputElementIdData

![][public]


```cpp
sysc::InputElementIdData::InputElementIdData()=default
```


Default constructor.





**Return type**: 

<a id="structsysc_1_1InputElementIdData_1a6a4cf4e60fd2706ebc03bcd045b30f17"></a>
### Function InputElementIdData

![][public]


```cpp
sysc::InputElementIdData::InputElementIdData(const InputElementIdData &)=default
```


Copy constructor.





**Parameters**:

* const [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData) &

**Return type**: 

**References**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1ab3696bc880a7cc99c0f0afe13ad31472)

<a id="structsysc_1_1InputElementIdData_1adf3434d3a517da557e936dede57cf96e"></a>
### Function InputElementIdData

![][public]


```cpp
sysc::InputElementIdData::InputElementIdData(InputElementIdData &&)=default
```


Move constructor.





**Parameters**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData) &&

**Return type**: 

**References**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1ab3696bc880a7cc99c0f0afe13ad31472)

<a id="structsysc_1_1InputElementIdData_1a95cf55cf79387b706a80022077826c0f"></a>
### Function operator=

![][public]


```cpp
InputElementIdData & sysc::InputElementIdData::operator=(const InputElementIdData &)=default
```


Copy-assign operator.





**Parameters**:

* const [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData) &

**Return type**: [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData) &

**References**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1ab3696bc880a7cc99c0f0afe13ad31472)

<a id="structsysc_1_1InputElementIdData_1a071dfde948aa6d47d7804d0cd8fd5fce"></a>
### Function operator=

![][public]


```cpp
InputElementIdData & sysc::InputElementIdData::operator=(InputElementIdData &&)=default
```


Move-assign operator.





**Parameters**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData) &&

**Return type**: [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData) &

**References**:

* [InputElementIdData](structsysc_1_1InputElementIdData.md#structsysc_1_1InputElementIdData_1ab3696bc880a7cc99c0f0afe13ad31472)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)