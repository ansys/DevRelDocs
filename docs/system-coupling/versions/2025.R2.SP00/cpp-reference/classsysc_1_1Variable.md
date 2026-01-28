# Class sysc::Variable

![][C++]
![][public]

**Definition**: `Variable.hpp` (line 21)

Provide a class for a System Coupling variable.



## Members

* [addIntegerAttribute](classsysc_1_1Variable.md#classsysc_1_1Variable_1ae6fed92c7d5f748b3e26898af932eb46)
* [addRealAttribute](classsysc_1_1Variable.md#classsysc_1_1Variable_1ab296b04988b750113600bcc4e302ae3c)
* [addStringAttribute](classsysc_1_1Variable.md#classsysc_1_1Variable_1a9ea91498c43af1c2f00d5009066179a0)
* [getDataType](classsysc_1_1Variable.md#classsysc_1_1Variable_1aa65c2a0ffe7c327972721faf2bffc5b7)
* [getDisplayName](classsysc_1_1Variable.md#classsysc_1_1Variable_1a37a842b3aa77535ddf81b3fb09c557e6)
* [getIntegerAttribute](classsysc_1_1Variable.md#classsysc_1_1Variable_1a7cbb6bced0257ebb7da8d709dbd05a30)
* [getIsExtensive](classsysc_1_1Variable.md#classsysc_1_1Variable_1a2ecc01f958aa92f721ab45546581bb26)
* [getLocation](classsysc_1_1Variable.md#classsysc_1_1Variable_1a3655299cf3b151d9fc30b4f5a47ca8fb)
* [getName](classsysc_1_1Variable.md#classsysc_1_1Variable_1ab138ad8ce29f89d62b7b5c1a4c496e19)
* [getNumIntegerAttributes](classsysc_1_1Variable.md#classsysc_1_1Variable_1a9a427e97dd6a88dae5e89ca7e640eba7)
* [getNumRealAttributes](classsysc_1_1Variable.md#classsysc_1_1Variable_1ae04462134077986b650ee9c6df9e5151)
* [getNumStringAttributes](classsysc_1_1Variable.md#classsysc_1_1Variable_1a4c25e6fa00d5fc8469516eb233c65910)
* [getQuantityType](classsysc_1_1Variable.md#classsysc_1_1Variable_1a2fc80063d66ac8c7ed567e2e6ed3e568)
* [getRealAttribute](classsysc_1_1Variable.md#classsysc_1_1Variable_1adcebefb4b9e4c203ab09ee1114daad33)
* [getStringAttribute](classsysc_1_1Variable.md#classsysc_1_1Variable_1af48e1b411aad8440de1f391cc903b33c)
* [getTensorType](classsysc_1_1Variable.md#classsysc_1_1Variable_1a3c019c1e2e4741e8ab87c8a8cd4f6d80)
* [m\_dataType](classsysc_1_1Variable.md#classsysc_1_1Variable_1ac4eb02f9edaa4e49766aa9cb2e2774db)
* [m\_displayName](classsysc_1_1Variable.md#classsysc_1_1Variable_1aae9c23878a85cd1118ab8dead6707585)
* [m\_integerAttributes](classsysc_1_1Variable.md#classsysc_1_1Variable_1a126e3b60b46e345b821ffaa9cd9748f1)
* [m\_isExtensive](classsysc_1_1Variable.md#classsysc_1_1Variable_1a3b11094374039322b2e5c9cd86fb4d8d)
* [m\_location](classsysc_1_1Variable.md#classsysc_1_1Variable_1a4a1d07595ae473531868f4f3fce6b875)
* [m\_name](classsysc_1_1Variable.md#classsysc_1_1Variable_1ac20511c2d9ba3e31d7f31721ab5936ee)
* [m\_quantityType](classsysc_1_1Variable.md#classsysc_1_1Variable_1a2bd0ba4f561b8d54176123bb0ef19f9c)
* [m\_realAttributes](classsysc_1_1Variable.md#classsysc_1_1Variable_1a47bf7c610985ee4030cfb10118777b7b)
* [m\_stringAttributes](classsysc_1_1Variable.md#classsysc_1_1Variable_1abbd1046562fdb2d30d2af493f6b37811)
* [m\_tensorType](classsysc_1_1Variable.md#classsysc_1_1Variable_1af2dde3c98eebacd5b74e684877fe8782)
* [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable_1a8c63f1c834c6dee8663b8917764af438)
* [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable_1a297f20a1e01064edb71c7ba7581ef585)
* [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable_1a3146070b07403f263b1bed17cc129764)
* [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable_1a4597bf22a4bb216398210ee89160ccb4)
* [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable_1a38976d25f9a99d85c88154d8d30ed5a4)
* [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable_1a3a0892d10b1044b7efa30988b251d32c)

## Private attributes

<a id="classsysc_1_1Variable_1ac20511c2d9ba3e31d7f31721ab5936ee"></a>
### Variable m\_name

![][private]

**Definition**: `Variable.hpp` (line 236)

```cpp
VariableName sysc::Variable::m_name
```



Unique name for this variable.



**Type**: [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266)

<a id="classsysc_1_1Variable_1a2bd0ba4f561b8d54176123bb0ef19f9c"></a>
### Variable m\_quantityType

![][private]

**Definition**: `Variable.hpp` (line 237)

```cpp
QuantityType sysc::Variable::m_quantityType
```



Quantity type (e.g. temperature)



**Type**: [QuantityType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab4cbdd3230a1cb38956f5b93f941f89b)

<a id="classsysc_1_1Variable_1a4a1d07595ae473531868f4f3fce6b875"></a>
### Variable m\_location

![][private]

**Definition**: `Variable.hpp` (line 238)

```cpp
Location sysc::Variable::m_location
```



Location (e.g element or node).



**Type**: [Location](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaced2664a481a6250f46140266dd38c2a)

<a id="classsysc_1_1Variable_1aae9c23878a85cd1118ab8dead6707585"></a>
### Variable m\_displayName

![][private]

**Definition**: `Variable.hpp` (line 239)

```cpp
DisplayName sysc::Variable::m_displayName
```



User-friendly name.



**Type**: [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f)

<a id="classsysc_1_1Variable_1af2dde3c98eebacd5b74e684877fe8782"></a>
### Variable m\_tensorType

![][private]

**Definition**: `Variable.hpp` (line 240)

```cpp
TensorType sysc::Variable::m_tensorType
```



Tensor type (e.g. scalar, vector).



**Type**: [TensorType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8f85e1fca4e3c3d086644ea6fb4b8fb7)

<a id="classsysc_1_1Variable_1a3b11094374039322b2e5c9cd86fb4d8d"></a>
### Variable m\_isExtensive

![][private]

**Definition**: `Variable.hpp` (line 241)

```cpp
bool sysc::Variable::m_isExtensive
```



Extensive property flag.



**Type**: bool

<a id="classsysc_1_1Variable_1ac4eb02f9edaa4e49766aa9cb2e2774db"></a>
### Variable m\_dataType

![][private]

**Definition**: `Variable.hpp` (line 242)

```cpp
DataType sysc::Variable::m_dataType
```



Data type (e.g. real, complex).



**Type**: [DataType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8c2b9557240fd9b2f908c98e3b1b27d3)

<a id="classsysc_1_1Variable_1a47bf7c610985ee4030cfb10118777b7b"></a>
### Variable m\_realAttributes

![][private]

**Definition**: `Variable.hpp` (line 244)

```cpp
std::vector<RealAttribute> sysc::Variable::m_realAttributes
```







**Type**: std::vector< [RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute) >

<a id="classsysc_1_1Variable_1a126e3b60b46e345b821ffaa9cd9748f1"></a>
### Variable m\_integerAttributes

![][private]

**Definition**: `Variable.hpp` (line 245)

```cpp
std::vector<IntegerAttribute> sysc::Variable::m_integerAttributes
```







**Type**: std::vector< [IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute) >

<a id="classsysc_1_1Variable_1abbd1046562fdb2d30d2af493f6b37811"></a>
### Variable m\_stringAttributes

![][private]

**Definition**: `Variable.hpp` (line 246)

```cpp
std::vector<StringAttribute> sysc::Variable::m_stringAttributes
```







**Type**: std::vector< [StringAttribute](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute) >

## Public functions

<a id="classsysc_1_1Variable_1a8c63f1c834c6dee8663b8917764af438"></a>
### Function Variable

![][public]

```cpp
sysc::Variable::Variable(const VariableName &name)
```

Provide a constructor for the [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) class.

**Parameters**:

* **name**: Unique name for this variable.

Display name will default to the same as name.





Tensor type will default to scalar.





Is extensive flag will default to false (to non-extensive).





Location will default to nodes.





Quantity type will default to unspecified.





DataType will default to real.



**Parameters**:

* const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) & **name**

**Return type**: 

<a id="classsysc_1_1Variable_1a297f20a1e01064edb71c7ba7581ef585"></a>
### Function Variable

![][public]

```cpp
sysc::Variable::Variable(const VariableName &name, enum TensorType tensorType, bool isExtensive, enum Location location)
```

Provide a constructor for the [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) class.

**Parameters**:

* **name**: - Unique name for this variable. String length should not exceed SYSC_STRING_LENGTH.
* **tensorType**: - variable tensor type.
* **isExtensive**: - flag indicating if it's an extensive property.
* **location**: - variable location (e.g element or node).

Display name will default to the same as name.





Quantity type will default to unspecified.





DataType will default to real.



**Parameters**:

* const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) & **name**
* enum [TensorType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8f85e1fca4e3c3d086644ea6fb4b8fb7) **tensorType**
* bool **isExtensive**
* enum [Location](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaced2664a481a6250f46140266dd38c2a) **location**

**Return type**: 

<a id="classsysc_1_1Variable_1a3146070b07403f263b1bed17cc129764"></a>
### Function Variable

![][public]

```cpp
sysc::Variable::Variable(const VariableName &name, enum TensorType tensorType, bool isExtensive, enum Location location, enum DataType dataType)
```

Provide a constructor for the [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) class.

**Parameters**:

* **name**: - Unique name for this variable. String length should not exceed SYSC_STRING_LENGTH.
* **tensorType**: - variable tensor type.
* **isExtensive**: - flag indicating if it's an extensive property.
* **location**: - variable location (e.g element or node).
* **dataType**: - dataType

Display name will default to the same as name.





Quantity type will default to unspecified.



**Parameters**:

* const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) & **name**
* enum [TensorType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8f85e1fca4e3c3d086644ea6fb4b8fb7) **tensorType**
* bool **isExtensive**
* enum [Location](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaced2664a481a6250f46140266dd38c2a) **location**
* enum [DataType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8c2b9557240fd9b2f908c98e3b1b27d3) **dataType**

**Return type**: 

<a id="classsysc_1_1Variable_1a4597bf22a4bb216398210ee89160ccb4"></a>
### Function Variable

![][public]

```cpp
sysc::Variable::Variable(const VariableName &name, const DisplayName &displayName, enum TensorType tensorType, bool isExtensive, enum Location location, enum QuantityType quantityType)
```

Provide a constructor for the [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) class.

**Parameters**:

* **name**: - Unique name for this variable.
* **displayName**: - variable display name.
* **tensorType**: - variable tensor type.
* **isExtensive**: - flag indicating if it's an extensive property.
* **location**: - variable location (e.g element or node).
* **quantityType**: - Quantity type of this variable.

DataType will default to real.



**Parameters**:

* const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) & **name**
* const [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f) & **displayName**
* enum [TensorType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8f85e1fca4e3c3d086644ea6fb4b8fb7) **tensorType**
* bool **isExtensive**
* enum [Location](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaced2664a481a6250f46140266dd38c2a) **location**
* enum [QuantityType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab4cbdd3230a1cb38956f5b93f941f89b) **quantityType**

**Return type**: 

<a id="classsysc_1_1Variable_1a38976d25f9a99d85c88154d8d30ed5a4"></a>
### Function Variable

![][public]

```cpp
sysc::Variable::Variable(const VariableName &name, const DisplayName &displayName, enum TensorType tensorType, bool isExtensive, enum Location location, enum QuantityType quantityType, enum DataType dataType)
```

Provide a constructor for the [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) class.

**Parameters**:

* **name**: - Unique name for this variable.
* **displayName**: - variable display name.
* **tensorType**: - variable tensor type.
* **isExtensive**: - flag indicating if it's an extensive property.
* **location**: - variable location (e.g element or node).
* **quantityType**: - Quantity type of this variable.
* **dataType**: - Data type of this variable.



**Parameters**:

* const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) & **name**
* const [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f) & **displayName**
* enum [TensorType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8f85e1fca4e3c3d086644ea6fb4b8fb7) **tensorType**
* bool **isExtensive**
* enum [Location](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaced2664a481a6250f46140266dd38c2a) **location**
* enum [QuantityType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab4cbdd3230a1cb38956f5b93f941f89b) **quantityType**
* enum [DataType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8c2b9557240fd9b2f908c98e3b1b27d3) **dataType**

**Return type**: 

<a id="classsysc_1_1Variable_1a3a0892d10b1044b7efa30988b251d32c"></a>
### Function Variable

![][public]

```cpp
sysc::Variable::Variable(const VariableName &name, enum QuantityType quantityType, enum Location location=Node, const DisplayName &displayName=DisplayName())
```

Provide a constructor for the [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) class.

**Parameters**:

* **name**: - Unique name for this variable.
* **quantityType**: - Quantity type of this variable. Supported quantity types are defined above in this header file.
* **location**: - variable location (e.g element or node). This parameter is optional - the default value is node.
* **displayName**: - variable display name. This parameter is optional - it will default to the same value as the variable's name.

Note that provided quantity type will determine the value of the tensor type and is extensive parameters. The values will be inferred according to the following rules:





```cpp
Quantity Type                     Tensor Type      Is Extensive
----------------------------------------------------------------
Force                             Vector           True
Incremental Displacement          Vector           False
Temperature                       Scalar           False
Heat Rate                         Scalar           True
Heat Transfer Coefficient         Scalar           False
Convection Reference Temperature  Scalar           False
```





For a more explicit control of tensor type and is extensive values, consider using another constructor.





DataType will default to real.



**Parameters**:

* const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) & **name**
* enum [QuantityType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab4cbdd3230a1cb38956f5b93f941f89b) **quantityType**
* enum [Location](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaced2664a481a6250f46140266dd38c2a) **location** = Node 
* const [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f) & **displayName** = [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f)() 

**Return type**: 

<a id="classsysc_1_1Variable_1ab138ad8ce29f89d62b7b5c1a4c496e19"></a>
### Function getName

![][public]
![][const]

```cpp
const VariableName& sysc::Variable::getName() const noexcept
```

Get the variable's name.

**Returns**:

Return is the name of this variable (string).



**Return type**: const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &

<a id="classsysc_1_1Variable_1a3c019c1e2e4741e8ab87c8a8cd4f6d80"></a>
### Function getTensorType

![][public]
![][const]

```cpp
enum TensorType sysc::Variable::getTensorType() const noexcept
```

Get the variable's tensor type.

**Returns**:

Return is the TensorType enum.



**Return type**: enum [TensorType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8f85e1fca4e3c3d086644ea6fb4b8fb7)

<a id="classsysc_1_1Variable_1a2ecc01f958aa92f721ab45546581bb26"></a>
### Function getIsExtensive

![][public]
![][const]

```cpp
bool sysc::Variable::getIsExtensive() const noexcept
```

The the is extensive boolean for this variable.

**Returns**:

Return is the boolean, true if variable is extensive, false otherwise.



**Return type**: bool

<a id="classsysc_1_1Variable_1a2fc80063d66ac8c7ed567e2e6ed3e568"></a>
### Function getQuantityType

![][public]
![][const]

```cpp
enum QuantityType sysc::Variable::getQuantityType() const noexcept
```

Get the variable's quantity type.

**Returns**:

Return is the QuantityType struct of this variable.



**Return type**: enum [QuantityType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab4cbdd3230a1cb38956f5b93f941f89b)

<a id="classsysc_1_1Variable_1a3655299cf3b151d9fc30b4f5a47ca8fb"></a>
### Function getLocation

![][public]
![][const]

```cpp
enum Location sysc::Variable::getLocation() const noexcept
```

Get the variable's location.

**Returns**:

Return is Location of this variable.



**Return type**: enum [Location](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaced2664a481a6250f46140266dd38c2a)

<a id="classsysc_1_1Variable_1a37a842b3aa77535ddf81b3fb09c557e6"></a>
### Function getDisplayName

![][public]
![][const]

```cpp
const DisplayName& sysc::Variable::getDisplayName() const noexcept
```

Get the variable's display name.

**Returns**:

Return is the display name of this variable (string).



**Return type**: const [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f) &

<a id="classsysc_1_1Variable_1aa65c2a0ffe7c327972721faf2bffc5b7"></a>
### Function getDataType

![][public]
![][const]

```cpp
enum DataType sysc::Variable::getDataType() const noexcept
```

Get the variable's data type.

**Returns**:

Return is the DataType enum.



**Return type**: enum [DataType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga8c2b9557240fd9b2f908c98e3b1b27d3)

<a id="classsysc_1_1Variable_1ab296b04988b750113600bcc4e302ae3c"></a>
### Function addRealAttribute

![][public]

```cpp
void sysc::Variable::addRealAttribute(const RealAttribute &attribute)
```

Add a real-valued attribute.





**Parameters**:

* const [RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute) & **attribute**

**Return type**: void

<a id="classsysc_1_1Variable_1ae6fed92c7d5f748b3e26898af932eb46"></a>
### Function addIntegerAttribute

![][public]

```cpp
void sysc::Variable::addIntegerAttribute(const IntegerAttribute &attribute)
```

Add an integer-valued attribute.





**Parameters**:

* const [IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute) & **attribute**

**Return type**: void

<a id="classsysc_1_1Variable_1a9ea91498c43af1c2f00d5009066179a0"></a>
### Function addStringAttribute

![][public]

```cpp
void sysc::Variable::addStringAttribute(const StringAttribute &attribute)
```

Add a string-valued attribute.





**Parameters**:

* const [StringAttribute](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute) & **attribute**

**Return type**: void

<a id="classsysc_1_1Variable_1ae04462134077986b650ee9c6df9e5151"></a>
### Function getNumRealAttributes

![][public]
![][const]

```cpp
std::size_t sysc::Variable::getNumRealAttributes() const noexcept
```

Returns the number of real-valued attributes.





**Return type**: std::size_t

<a id="classsysc_1_1Variable_1a9a427e97dd6a88dae5e89ca7e640eba7"></a>
### Function getNumIntegerAttributes

![][public]
![][const]

```cpp
std::size_t sysc::Variable::getNumIntegerAttributes() const noexcept
```

Returns the number of integer-valued attributes.





**Return type**: std::size_t

<a id="classsysc_1_1Variable_1a4c25e6fa00d5fc8469516eb233c65910"></a>
### Function getNumStringAttributes

![][public]
![][const]

```cpp
std::size_t sysc::Variable::getNumStringAttributes() const noexcept
```

Returns the number of string-valued attributes.





**Return type**: std::size_t

<a id="classsysc_1_1Variable_1adcebefb4b9e4c203ab09ee1114daad33"></a>
### Function getRealAttribute

![][public]
![][const]

```cpp
const RealAttribute& sysc::Variable::getRealAttribute(std::size_t index) const
```

Return the real-valued attribute at the given index.





**Parameters**:

* std::size_t **index**

**Return type**: const [RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute) &

<a id="classsysc_1_1Variable_1a7cbb6bced0257ebb7da8d709dbd05a30"></a>
### Function getIntegerAttribute

![][public]
![][const]

```cpp
const IntegerAttribute& sysc::Variable::getIntegerAttribute(std::size_t index) const
```

Return the integer-valued attribute at the given index.





**Parameters**:

* std::size_t **index**

**Return type**: const [IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute) &

<a id="classsysc_1_1Variable_1af48e1b411aad8440de1f391cc903b33c"></a>
### Function getStringAttribute

![][public]
![][const]

```cpp
const StringAttribute& sysc::Variable::getStringAttribute(std::size_t index) const
```

Return the string-valued attribute at the given index.





**Parameters**:

* std::size_t **index**

**Return type**: const [StringAttribute](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)