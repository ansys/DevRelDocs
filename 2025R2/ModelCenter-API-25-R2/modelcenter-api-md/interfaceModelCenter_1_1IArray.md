# Interface ModelCenter::IArray

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 421)



Base class for all array types. Has common functionality for getting/setting array sizes and getting/setting values as strings.





Arrays start at 0 length by default. So you must set the size before you can assign individual array elements.

**Inherits from**:

* [ModelCenter::IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable)

**Inherited by**:

* [ModelCenter::IBooleanArray](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray)
* [ModelCenter::IDoubleArray](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray)
* [ModelCenter::IFileArray](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray)
* [ModelCenter::IIntegerArray](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray)
* [ModelCenter::IReferenceArray](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray)
* [ModelCenter::IStringArray](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray)

## Members

* [autoSize](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1aca63a47369d69cbbf53532286b64a611)
* [dependentLinks](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1aecc2dc18b0ee43d5175503d44ca259c3)
* [dependents](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a7cb300d678991e0b6449ad7b0d004906)
* [directDependents](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a834a8ad8bfec0c4b0220b21979e82fca)
* [directPrecedents](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a0367bcfe5c12848d1d10e1266a0a868e)
* [fromString](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a97b06c86c2783603221e0b0215dc75c8)
* [fromStringEx](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ad23f4082662c464be07251d6d1695a2d)
* [getDimensions](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a83abe70ccf5e8a0a582748d84e3d7956)
* [getFullName](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a699cf890f3743699cb25a7432c0f7f68)
* [getLength](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a8a6965fe1217428d63d594384a634bfb)
* [getMetadata](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a53f2d3f772584c3c43341ff4236402c9)
* [getName](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ace7a0aeb83a64535f7caa63600783fa7)
* [getSize](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a3d171136e0b219dd4e2d0d1b4bb9aa1f)
* [getType](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1adf1ee02ba4bdf03ef0366e2f0a62b344)
* [hasChanged](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ad7310b48379f9d4f8d4688d11ccf0185)
* [hide](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ac7ae926ce6dea385cb26901c86c7fccd)
* [invalidate](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1abfaa3f2b5bff1412199f5014ca10c4d5)
* [isInput](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1af18eb203bc12f95a61b5876279ee17a9)
* [isInputToComponent](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a74e3e9729c8de2d3d091a6f22f7cb45b)
* [isInputToModel](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a87cc3a01fd30ce7c6380b5d1d6ff7df9)
* [isValid](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a20792cdbe6866825f978a2e30affca88)
* [length](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1af118bdf4b120050d6700a7ceae7f5bec)
* [numDimensions](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a29af128098031d3d75f20bb0fafe633a)
* [OwningComponent](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1aab060b2f29895c77882494f7194f55e0)
* [precedentLinks](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a8f2364939bd5efaab13ecdbc3cb7df51)
* [precedents](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ab185a76064278e30ee48682164364e72)
* [setDimensions](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1af881060e37aae0ff4c2c2238683db950)
* [setLength](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ac632aa0e8bc7a6fcac41245e151beec8)
* [setMetadata](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a8b1a6f24260a22b01e738ed2fb1d4523)
* [setSize](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a8b7b41ca5463a86aecb2368d73464c0e)
* [size](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a9a38726b51caed75a30ae66b82959f64)
* [toString](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a6ff821435a5704253ffdfb9334cc2dc4)
* [toStringAbsolute](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ad5ecd4799e995bf2c97015c718606550)
* [toStringAbsoluteEx](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a2e3041440581aab716c684fe88d2ee87)
* [toStringEx](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a37c622ae9f50579f714ce98c0379cd98)
* [validate](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a31cda88a70c11ef884e9105ef4ee7d20)

## Properties

<a id="interfaceModelCenter_1_1IArray_1ad7310b48379f9d4f8d4688d11ccf0185"></a>
### Property hasChanged

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IArray::hasChanged
```







**Return type**: boolean

<a id="interfaceModelCenter_1_1IArray_1ac7ae926ce6dea385cb26901c86c7fccd"></a>
### Property hide

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IArray::hide
```







**Return type**: boolean

<a id="interfaceModelCenter_1_1IArray_1aab060b2f29895c77882494f7194f55e0"></a>
### Property OwningComponent

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
LPDISPATCH ModelCenter::IArray::OwningComponent
```







**Return type**: LPDISPATCH

<a id="interfaceModelCenter_1_1IArray_1a9a38726b51caed75a30ae66b82959f64"></a>
### Property size

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
long ModelCenter::IArray::size
```



Alias for length property



**Return type**: long

<a id="interfaceModelCenter_1_1IArray_1aca63a47369d69cbbf53532286b64a611"></a>
### Property autoSize

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IArray::autoSize
```



Whether or not the array is set to automatically size itself. If false and the array is linked from upstream, the upstream array must be exactly the same size or an error ensues. If true, the array will resize itself when the link is validated.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IArray_1a29af128098031d3d75f20bb0fafe633a"></a>
### Property numDimensions

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
long ModelCenter::IArray::numDimensions
```



Number of dimensions this array has. Defaults to 1. Changing the number of dimensions will lose all previous data in the array.



**Return type**: long

<a id="interfaceModelCenter_1_1IArray_1af118bdf4b120050d6700a7ceae7f5bec"></a>
### Property length

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
long ModelCenter::IArray::length
```



Size of the array. Alias for the length property. Only useful if the array is 1 dimensional. Use the [getLength()](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a8a6965fe1217428d63d594384a634bfb), [setLength()](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ac632aa0e8bc7a6fcac41245e151beec8), numDimensions, or [setDimensions()](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1af881060e37aae0ff4c2c2238683db950) methods and properties for multi-dimensional arrays On initialization, the array is 0 length by default. To fill in values on a newly created array, set the size/length first.



**Return type**: long

## Public functions

<a id="interfaceModelCenter_1_1IArray_1a20792cdbe6866825f978a2e30affca88"></a>
### Function isValid

![][public]

```
boolean ModelCenter::IArray::isValid()
```



Finds out whether or not the array is valid.






**Returns**:

yes(TRUE) or no(FALSE).



**Return type**: boolean

**Reimplements**: [isValid](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a602d42ee0595c1c0408a536c31c61adb)

**Reimplemented by**:

* [isValid](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a9d13fb275a266aa85280b6beed8be176)
* [isValid](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a4d7719052c0b341f91436d3a0da270cc)
* [isValid](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a1d3371b70abb06b2eff5d1ada8aa114f)
* [isValid](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1ab3d891c3978182e073923a56b4dbe89b)
* [isValid](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a366cf132edcae4c78ff3c3c29d81ad03)
* [isValid](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a8b738f7eef3f9a3f8a723cede3809f47)

<a id="interfaceModelCenter_1_1IArray_1a31cda88a70c11ef884e9105ef4ee7d20"></a>
### Function validate

![][public]

```
void ModelCenter::IArray::validate()
```



Causes the array to validate itself.



**Return type**: void

**Reimplements**: [validate](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6748764fba94242fbe35ae2f4d49c9ef)

**Reimplemented by**:

* [validate](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1aa221cef15629c5acf569329c0e089b3a)
* [validate](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1abc755512c485531a61f10d2bc5d691b0)
* [validate](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a506a66d66cb52b49d7385351bf0cfa46)
* [validate](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a84ab133f5b1147d475fb8e2c4275b32b)
* [validate](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1af1dd28c351fcda3e3fea31facbd4fca3)
* [validate](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a86b82bcfb1ccfa2428968307eaa07108)

<a id="interfaceModelCenter_1_1IArray_1ace7a0aeb83a64535f7caa63600783fa7"></a>
### Function getName

![][public]

```
BSTR ModelCenter::IArray::getName()
```



Gets the name of the array.






**Returns**:

The name of the array.



**Return type**: BSTR

**Reimplements**: [getName](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ae1ad6db87e29a4b265ec310295fb3843)

**Reimplemented by**:

* [getName](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a471100848db5a6f0c08f2920aa283ac6)
* [getName](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1afe2789906f30f6a082e5d3d79e2b5bbc)
* [getName](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a3f04f85ebe4f50a88c7cc3a61ae597f6)
* [getName](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a79fdcc3e290b4b0df816f69d8a8d5f9d)
* [getName](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a282d98574e8d65d85c9908b6799321b7)
* [getName](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a0a90870618bd396edc53c27ff0b8c9af)

<a id="interfaceModelCenter_1_1IArray_1a699cf890f3743699cb25a7432c0f7f68"></a>
### Function getFullName

![][public]

```
BSTR ModelCenter::IArray::getFullName()
```



Gets the full ModelCenter path of the array.






**Returns**:

The full ModelCenter path of the array.



**Return type**: BSTR

**Reimplements**: [getFullName](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a05a46370dd23d612bf0f09f146ba32a0)

**Reimplemented by**:

* [getFullName](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a498741fde4d9eeec6eb3f8171e3161d8)
* [getFullName](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a225331135b6efad1b05c399869975962)
* [getFullName](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a7aada275954e2fff6bdea69b8a96bd0c)
* [getFullName](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a8c74276fefc00a8b85a576e1d1b58053)
* [getFullName](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a44ebe17869a3b1b95568ea46299a9f3f)
* [getFullName](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a4ca185e60b69ce2ff41d19a2270bc28b)

<a id="interfaceModelCenter_1_1IArray_1adf1ee02ba4bdf03ef0366e2f0a62b344"></a>
### Function getType

![][public]

```
BSTR ModelCenter::IArray::getType()
```



Gets the type of the array.






**Returns**:

The type of the array as a string.



**Return type**: BSTR

**Reimplements**: [getType](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ab7fadd397a7779f29005048383a9f187)

**Reimplemented by**:

* [getType](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1ad8d2b43dd9f4b3656dba1e8570f7f747)
* [getType](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a59535b93acdadae5c47ebb3f148cc8a7)
* [getType](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a6614c3d1ae621d218762e8ed8ec58222)
* [getType](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a05e311dcfb051f0df6afc99dd01d6773)
* [getType](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1ac3c3f33a239fe1182da434d7570346df)
* [getType](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a582f9e8e47e60eca8041b98c996a4f4f)

<a id="interfaceModelCenter_1_1IArray_1af18eb203bc12f95a61b5876279ee17a9"></a>
### Function isInput

![][public]

```
boolean ModelCenter::IArray::isInput()
```



Finds out whether or not the variable is an input with respect to the model. Returns the same value as [isInputToModel](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a87cc3a01fd30ce7c6380b5d1d6ff7df9).






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInput](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a875481ba3799c222c5085c6c3ca802a7)

**Reimplemented by**:

* [isInput](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1aa87e846de03852ee40e909935c2ec470)
* [isInput](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1aa0a3e17384092dbeb0cef004db873191)
* [isInput](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a9e45ea90908321e84979e5b8d2f50357)
* [isInput](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a3752394336c9689384efac1005422431)
* [isInput](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1ae7e5c76cfd592a71fc7e5785c7cf6394)
* [isInput](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a3b7b397239f04cf9ea9358f9477ee2c4)

<a id="interfaceModelCenter_1_1IArray_1a6ff821435a5704253ffdfb9334cc2dc4"></a>
### Function toString

![][public]

```
BSTR ModelCenter::IArray::toString()
```



Converts the array to a string, validating the array if necessary. If the variable is an array, it will to be of the form <code>"1, 2, 3"</code> for one-dimensional arrays or <code>"bounds[3,3] {1, 2, 3, 4, 5, 6, 7, 8, 9}"</code> for multi-dimensional arrays.






**Returns**:

The converted string value of the array.



**Return type**: BSTR

**Reimplements**: [toString](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6421656e090846e8d7c079b8511fa9d2)

**Reimplemented by**:

* [toString](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a39294beb6d830e498ee8aca7a25cc4a6)
* [toString](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1af417ef0e71fabce8379be30e4d176355)
* [toString](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a7ba909789490822b7ab12891075a9e56)
* [toString](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a83e5e9905df758b37c901bae5e87430e)
* [toString](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1aaa37debc6216a5419715e0c542555850)
* [toString](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1aa735025db3ac6e13cb486f8629b86a69)

<a id="interfaceModelCenter_1_1IArray_1a97b06c86c2783603221e0b0215dc75c8"></a>
### Function fromString

![][public]

```
void ModelCenter::IArray::fromString(BSTR value)
```



Sets the value of the array from a specified string. For <code>1D</code> arrays, the specification is of the form <code>'1,2,3'</code>.<br/>
For <code>nD</code> arrays, the specification is of the form <code>'bounds[2,2,2] {1,2,3,4,5,6,7,8}'</code>.<br/>
String arrays may optionally have the elements quoted in the form <code>'bounds[2,3] {"a", "b,c", "d", "", "e", "f"}'</code>






**Parameters**:

* **value**: New value.



**Parameters**:

* BSTR **value**

**Return type**: void

**Reimplements**: [fromString](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a3f6325a128422d445705553f11563904)

**Reimplemented by**:

* [fromString](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1af5d6c192774673f4f4bf7514b35f8ccf)
* [fromString](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a3faefed33c99ee3ffb10b5e0e21d239a)
* [fromString](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1ab107312b8a5b1e8e96ae2a3678ef9897)
* [fromString](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1af3d5cd8601c1227d439b7b3f74cc2d16)
* [fromString](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a9cb9dab871b4e86ed66fb53cc5473ebd)
* [fromString](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a65a839b63dfb0495f577bf70ca87a320)

<a id="interfaceModelCenter_1_1IArray_1ad5ecd4799e995bf2c97015c718606550"></a>
### Function toStringAbsolute

![][public]

```
BSTR ModelCenter::IArray::toStringAbsolute()
```



Converts the array to a string. If the variable is an array, it will to be of the form <code>"1, 2, 3"</code> for one-dimensional arrays or <code>"bounds[3,3] {1, 2, 3, 4, 5, 6, 7, 8, 9}"</code> for multi-dimensional arrays.






**Returns**:

The converted string value of the array.



**Return type**: BSTR

**Reimplements**: [toStringAbsolute](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a5e66075d2bff0f7de435056cdc6c011e)

**Reimplemented by**:

* [toStringAbsolute](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1aa07f73fa1f449045d77725b0fef00739)
* [toStringAbsolute](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1adbd82fbad4622d8c2d91533d536a7ea0)
* [toStringAbsolute](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1ac8f43fca8b974b224bd64a78bd3bdda3)
* [toStringAbsolute](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a5bc139ce096dbc917734386869a3be78)
* [toStringAbsolute](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a1a0ecbbccb3fe3404c79976e9f07b8db)
* [toStringAbsolute](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1adfb1dee0a1fd5b541eacba1e4cbba7ad)

<a id="interfaceModelCenter_1_1IArray_1abfaa3f2b5bff1412199f5014ca10c4d5"></a>
### Function invalidate

![][public]

```
void ModelCenter::IArray::invalidate()
```



Marks the variable as invalid (needs to be computed). This will set all dependent variables invalid also.



**Return type**: void

**Reimplements**: [invalidate](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1addc5f809058b5573390f62d34b5f5498)

**Reimplemented by**:

* [invalidate](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a04e162fdfae6e99e6dcfd926adfca7b1)
* [invalidate](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a032e132c6c6a61f81370942921ab2edf)
* [invalidate](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a7599948212f77bb66f8ef42fc98e53ce)
* [invalidate](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a521514c594a1ab4e30669305585530b7)
* [invalidate](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a56ea1d83eb42dda4a7c06b6fbbf6ffd5)
* [invalidate](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1ac6dd084c61d7ce2631d207242eca89bf)

<a id="interfaceModelCenter_1_1IArray_1a0367bcfe5c12848d1d10e1266a0a868e"></a>
### Function directPrecedents

![][public]

```
LPDISPATCH ModelCenter::IArray::directPrecedents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
```



Returns a list of variables that are immediate precedents to the value of this variable. This function returns all variables that influence this variable and are directly connected via a link to it.






**Parameters**:

* **followSuspended**: Optional boolean specifies whether links which are suspended should be included in the search. Default is false.
* **reserved**: Reserved for future use.


**Returns**:

IDispatch* to an [IVariables](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables) object.



**Parameters**:

* _[optional]_ VARIANT **followSuspended**
* _[optional]_ VARIANT **reserved**

**Return type**: LPDISPATCH

**Reimplements**: [directPrecedents](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a655ce10f3a6e2839f11161e8bf13b0c2)

**Reimplemented by**:

* [directPrecedents](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a605c25813e75d1709e364eef080f68e9)
* [directPrecedents](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a3ab4fe76950c76fbdd2e76ea3f4fb08b)
* [directPrecedents](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a9f84f73f3b65f16fa507678c53c67527)
* [directPrecedents](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1ae3879cd50b0512f2b5660765393bd24e)
* [directPrecedents](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1aa8041fca418266f2bee129804654abab)
* [directPrecedents](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a40c76b900187ef244f14c5c8e9bb65bf)

<a id="interfaceModelCenter_1_1IArray_1a834a8ad8bfec0c4b0220b21979e82fca"></a>
### Function directDependents

![][public]

```
LPDISPATCH ModelCenter::IArray::directDependents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
```



Returns a list of variables that are immediate dependents of the value of this variable. This function returns all variables that are influenced by this variable and are directly connected via a link to it.






**Parameters**:

* **followSuspended**: Optional boolean specifies whether links which are suspended should be included in the search. Default is false.
* **reserved**: Reserved for future use.


**Returns**:

IDispatch* to an [IVariables](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables) object.



**Parameters**:

* _[optional]_ VARIANT **followSuspended**
* _[optional]_ VARIANT **reserved**

**Return type**: LPDISPATCH

**Reimplements**: [directDependents](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a64c800317037f03a43c8522061885835)

**Reimplemented by**:

* [directDependents](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a6ed20fe44044c682471c7066ae2bd303)
* [directDependents](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1afe14e74990edda2c656035bbcd8e2af2)
* [directDependents](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1ab61572acbd0617f5c51b04b2ae4bbdba)
* [directDependents](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a44b3a3cc73cd46ea7661e776b20b4ded)
* [directDependents](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a862a4306dbf867e3db316d9547cea277)
* [directDependents](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a4820176e7ca9e1c3173d602308144c62)

<a id="interfaceModelCenter_1_1IArray_1a8f2364939bd5efaab13ecdbc3cb7df51"></a>
### Function precedentLinks

![][public]

```
LPDISPATCH ModelCenter::IArray::precedentLinks([optional]VARIANT reserved)
```



Returns a list of links that are immediate precedents to the value of this variable. All the returned links will have this variable as the LHS of the equation. Except for arrays, the returned list will be 1 element long.






**Parameters**:

* **reserved**: Reserved for future use.


**Returns**:

IDispatch* to an [IVariableLinks](interfaceModelCenter_1_1IVariableLinks.md#interfaceModelCenter_1_1IVariableLinks) object.



**Parameters**:

* _[optional]_ VARIANT **reserved**

**Return type**: LPDISPATCH

**Reimplements**: [precedentLinks](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a9d52333bc9a07146e23124f0fe95db6f)

**Reimplemented by**:

* [precedentLinks](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a428a6e6a2a2be52d77bfe96323fea64f)
* [precedentLinks](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a640715d1e272c8f15d8cc4c2b466d990)
* [precedentLinks](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a998c2f1327219560aacd3d65d2c178b6)
* [precedentLinks](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1ac71c9a184e57f627b336438de0b7a238)
* [precedentLinks](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a084d49d02b9ff5812166721fcdc86018)
* [precedentLinks](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a19c1ae9d08b968bae4b6fdd1ec74fc3e)

<a id="interfaceModelCenter_1_1IArray_1aecc2dc18b0ee43d5175503d44ca259c3"></a>
### Function dependentLinks

![][public]

```
LPDISPATCH ModelCenter::IArray::dependentLinks([optional]VARIANT reserved)
```



Returns a list of links that immediately depend on the value of this variable. All the returned links will have this variable as part of a RHS equation.






**Parameters**:

* **reserved**: Reserved for future use.


**Returns**:

IDispatch* to an [IVariableLinks](interfaceModelCenter_1_1IVariableLinks.md#interfaceModelCenter_1_1IVariableLinks) object.



**Parameters**:

* _[optional]_ VARIANT **reserved**

**Return type**: LPDISPATCH

**Reimplements**: [dependentLinks](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a1e52cc38574fbdf83e9dba836dfc5959)

**Reimplemented by**:

* [dependentLinks](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1abadb81820fd0b415fa9e78ce6c867c55)
* [dependentLinks](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a0201276e7d000c4869e4798cfdb68d8b)
* [dependentLinks](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a90373b06919789f06f52dd22a0339847)
* [dependentLinks](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a399b9b49ca3133d2a49923637f19609a)
* [dependentLinks](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1add9bd8c41cd4a5c77f7e762768b441a5)
* [dependentLinks](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a4227d6aca4e2d7791cea69efeb5b81fd)

<a id="interfaceModelCenter_1_1IArray_1ab185a76064278e30ee48682164364e72"></a>
### Function precedents

![][public]

```
LPDISPATCH ModelCenter::IArray::precedents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
```



Returns a list of variables that are precedents to the value of this variable. This function returns all variables that influence this variable, not just directly connected ones.






**Parameters**:

* **followSuspended**: Optional boolean specifies whether links which are suspended should be included in the search. Default is false.
* **reserved**: Reserved for future use.


**Returns**:

IDispatch* to an [IVariables](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables) object.



**Parameters**:

* _[optional]_ VARIANT **followSuspended**
* _[optional]_ VARIANT **reserved**

**Return type**: LPDISPATCH

**Reimplements**: [precedents](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ad1f5d5ba3e96e9c2fab7a4b0d6c4df36)

**Reimplemented by**:

* [precedents](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a9d7349a2273e5b9eaaab5271918eed6f)
* [precedents](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a5973cfc6b1e41db214568a7e95979eef)
* [precedents](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1abf61619be1e057cf2c42189456169041)
* [precedents](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a01bd8fce84abbb243a9f7e3c771c185c)
* [precedents](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1aea1973c58e45bafe3aeea797b91a4f6b)
* [precedents](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a913272799193e5d02033c63c746ead9e)

<a id="interfaceModelCenter_1_1IArray_1a7cb300d678991e0b6449ad7b0d004906"></a>
### Function dependents

![][public]

```
LPDISPATCH ModelCenter::IArray::dependents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
```



Returns a list of variables that are dependent upon the value of this variable. This function returns all variables that are influenced by this variable, not just directly connected ones.






**Parameters**:

* **followSuspended**: Optional boolean specifies whether links which are suspended should be included in the search. Default is false.
* **reserved**: Reserved for future use.


**Returns**:

IDispatch* to an [IVariables](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables) object.



**Parameters**:

* _[optional]_ VARIANT **followSuspended**
* _[optional]_ VARIANT **reserved**

**Return type**: LPDISPATCH

**Reimplements**: [dependents](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6f42f3176eb8fa2fbf9ca1b9a01fc7ce)

**Reimplemented by**:

* [dependents](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a386477ffe54e2d0f351f9dc7fbb49712)
* [dependents](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a6e0601946499c985be03e00354c8acb3)
* [dependents](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1af16a20eacc6734b343762565ec8b20d6)
* [dependents](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1af6712999aa6e50091a95dd66db088661)
* [dependents](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a7a3b136537fb09914b87b5997b937df0)
* [dependents](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a392d8e4080854c954c165833bb89a7db)

<a id="interfaceModelCenter_1_1IArray_1a74e3e9729c8de2d3d091a6f22f7cb45b"></a>
### Function isInputToComponent

![][public]

```
boolean ModelCenter::IArray::isInputToComponent()
```



Checks whether or not the variable is an input. Returns true if the variable was originally added as an input, ignoring the current state that can change based off of links.






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInputToComponent](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a81ddff978026124a52063b1fad430b27)

**Reimplemented by**:

* [isInputToComponent](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a871c46c1f732b2885e2ef1fa2080a3e8)
* [isInputToComponent](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a86e51010b5f7765c036af36bd9452622)
* [isInputToComponent](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a29e9bceef09e96ad83ce6c0618eb17dd)
* [isInputToComponent](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a2a19aa7ca1e4c4fb862016aede378c05)
* [isInputToComponent](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a317b7b47fa55798e212c426b4ac8f014)
* [isInputToComponent](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1ad59d273bea1a7e02540520e9b4428264)

<a id="interfaceModelCenter_1_1IArray_1a87cc3a01fd30ce7c6380b5d1d6ff7df9"></a>
### Function isInputToModel

![][public]

```
boolean ModelCenter::IArray::isInputToModel()
```



Checks whether or not the variable is an input. A linked input returns false (Output).






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInputToModel](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a0bd883d3757e361b75e0f81627e6ce98)

**Reimplemented by**:

* [isInputToModel](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a364726a017aca71bdb22d43530cc9426)
* [isInputToModel](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a78d5b37b715d259e29e0de79fa58508d)
* [isInputToModel](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1accf93e4a9fe2c9eb205ccdf1704f3f9e)
* [isInputToModel](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a41c321c0260174a4c118e309fbd13085)
* [isInputToModel](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a2d16dbc50ee0f77d5ca99b8a600e5023)
* [isInputToModel](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1af1da4c99c6359d527ad57c9433333a36)

<a id="interfaceModelCenter_1_1IArray_1a8b1a6f24260a22b01e738ed2fb1d4523"></a>
### Function setMetadata

![][public]

```
void ModelCenter::IArray::setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive)
```



Sets the meta data value of the given meta data key name.






**Parameters**:

* **name**: Metadata specifier used to store the data.
* **type**: <br/>
* **value**: <br/>
* **access**: <br/>
* **archive**: <br/>



**Parameters**:

* BSTR **name**
* [MetadataType](namespaceModelCenter.md#namespaceModelCenter_1a59560dc5274b3a18daae06b531055153) **type**
* VARIANT **value**
* [MetadataAccess](namespaceModelCenter.md#namespaceModelCenter_1afea526d882aa1a4fd48b5a28b7b1c9dc) **access**
* boolean **archive**

**Return type**: void

**Reimplements**: [setMetadata](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1af7cbf8f2c8d128c760fb09254819bf64)

**Reimplemented by**:

* [setMetadata](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a772ffc624a737a4808eb8dfc9ff41e0d)
* [setMetadata](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a56d1d2b85ec3b4c43589c25887c1dd95)
* [setMetadata](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a46a06089e51539cdb69a6404db042d28)
* [setMetadata](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1ae69f586d5f6a7cf93728f99a47b841cf)
* [setMetadata](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a31e14e94dd9316f40bf963a9da9939f7)
* [setMetadata](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a495551c5a05027a8537ffce75f333f8e)

<a id="interfaceModelCenter_1_1IArray_1a53f2d3f772584c3c43341ff4236402c9"></a>
### Function getMetadata

![][public]

```
VARIANT ModelCenter::IArray::getMetadata(BSTR name)
```



Gets the meta data value of the given meta data key name.






**Parameters**:

* **name**: Metadata key name.


**Returns**:

Metadata value.



**Parameters**:

* BSTR **name**

**Return type**: VARIANT

**Reimplements**: [getMetadata](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a610297790a8c506c339586740f1d3022)

**Reimplemented by**:

* [getMetadata](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1aa6b44db219dbaf49be81841dc459f4ae)
* [getMetadata](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a1a41489453d177315ae18ef464e8907b)
* [getMetadata](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1ae315b5cc3acb88a2edabaa8eea7a6690)
* [getMetadata](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a76933c6f159d52907c0b9f6ba3d13136)
* [getMetadata](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1ac6becc1bb1c5206e972c266164f838ca)
* [getMetadata](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1ac730dc0fbfc8ae56788048e6c0fb80fa)

<a id="interfaceModelCenter_1_1IArray_1a37c622ae9f50579f714ce98c0379cd98"></a>
### Function toStringEx

![][public]

```
BSTR ModelCenter::IArray::toStringEx(long index)
```



Converts the value of an array element to a string, validating the array if necessary.






**Parameters**:

* **index**: Index of the array element (0-based index).


**Returns**:

The value of the element as a string.



**Parameters**:

* long **index**

**Return type**: BSTR

**Reimplemented by**:

* [toStringEx](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1af151b1686dbe379f876131afd8c2c71e)
* [toStringEx](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1ac16f0cbbb0d4c51cb5cc7dfc0c251f88)
* [toStringEx](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1afac8b4ceedd459ad68bed98ae18ea6a8)
* [toStringEx](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1ae3d6633e9533a68590025dee14298912)
* [toStringEx](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1af2ff697565c81552d49c0237cfc89ef7)
* [toStringEx](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a9013b29e3ca18c5a0ecaff8dc6d19b5f)

<a id="interfaceModelCenter_1_1IArray_1ad23f4082662c464be07251d6d1695a2d"></a>
### Function fromStringEx

![][public]

```
void ModelCenter::IArray::fromStringEx(BSTR value, long index)
```



Sets the value of an array element from a specified string.






**Parameters**:

* **value**: New value.
* **index**: Index of the array element (0-based index).



**Parameters**:

* BSTR **value**
* long **index**

**Return type**: void

**Reimplemented by**:

* [fromStringEx](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a8d7b18dca2bbe96aa0ee3718e433e272)
* [fromStringEx](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1ad068bdf2a8fb66fea7cfb3a3111fb176)
* [fromStringEx](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1aa104ba67a0164c27a33017aabd29d83d)
* [fromStringEx](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a26f9cfd27774a2233ae2cb232cc8fec9)
* [fromStringEx](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a2a286a07b606f7e90ac4e1d281a49d38)
* [fromStringEx](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a8fa6aff7c64224c1c488d5866dfc4865)

<a id="interfaceModelCenter_1_1IArray_1a2e3041440581aab716c684fe88d2ee87"></a>
### Function toStringAbsoluteEx

![][public]

```
BSTR ModelCenter::IArray::toStringAbsoluteEx(long index)
```



Converts the value of an array element to a string.






**Parameters**:

* **index**: Index of the array element (0-based index).


**Returns**:

The value of the element as a string.



**Parameters**:

* long **index**

**Return type**: BSTR

**Reimplemented by**:

* [toStringAbsoluteEx](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1aaa425c05112e2f9568bb13886800dbba)
* [toStringAbsoluteEx](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1ab1252981582cec6fd3662321c9c4ce28)
* [toStringAbsoluteEx](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a15dfd2825b183a80b93d849ce3429ca3)
* [toStringAbsoluteEx](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a5794b0c172b46da36d761bf31046db07)
* [toStringAbsoluteEx](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1aac2b33985ad310362db7c8c878096ae8)
* [toStringAbsoluteEx](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a3684e3b0b2d36a599f75236a6f5e90e7)

<a id="interfaceModelCenter_1_1IArray_1a8a6965fe1217428d63d594384a634bfb"></a>
### Function getLength

![][public]

```
long ModelCenter::IArray::getLength([optional] VARIANT dim)
```



Get the length of the n'th dimension of the array.






**Parameters**:

* **dim**: Dimension of the array to query. This uses a 0 based index, so 0 will give you the first dimension, 1 the second, etc. If omitted, gives the first dimension


**Returns**:

Length(size) of the array.



**Parameters**:

* _[optional]_ VARIANT **dim**

**Return type**: long

**Reimplemented by**:

* [getLength](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1ad9da4a66a831de9a501a7aca13a6a84f)
* [getLength](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1ab0632e518febc3b1549fc35d932fd451)
* [getLength](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1acb6d739a4e50bcbbda5a5cf053ae21db)
* [getLength](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a8167ef387b9cc11bc76e9a0e0694a833)
* [getLength](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1ad88eff947daa184ab953839666729ae5)
* [getLength](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a39098992a1f29458010e4d18385d3681)

<a id="interfaceModelCenter_1_1IArray_1ac632aa0e8bc7a6fcac41245e151beec8"></a>
### Function setLength

![][public]

```
void ModelCenter::IArray::setLength(long length, [optional] VARIANT dim)
```



Sets the length of the n'th dimension of the array






**Parameters**:

* **length**: New length of the n'th dimension of the array
* **dim**: The dimension to set. This uses a 0 based index, so 0 will set the first dimension, 1 the second, etc. If omitted, sets the first dimension



**Parameters**:

* long **length**
* _[optional]_ VARIANT **dim**

**Return type**: void

**Reimplemented by**:

* [setLength](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a2bf47781f038fae8dc22e6edb04149a9)
* [setLength](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a5e70599413156ef04aa8ddfd03958320)
* [setLength](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a66119cc8d733c8a2d6a8101569768662)
* [setLength](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a91d122341cefcb887c3871d43ea34524)
* [setLength](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a2cfaecd2a821841d414f0d9ac505659f)
* [setLength](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1ab20a6b27ddb532d0186532a52a148d91)

<a id="interfaceModelCenter_1_1IArray_1af881060e37aae0ff4c2c2238683db950"></a>
### Function setDimensions

![][public]

```
void ModelCenter::IArray::setDimensions(long d1, [optional] VARIANT d2, [optional] VARIANT d3, [optional] VARIANT d4, [optional] VARIANT d5, [optional] VARIANT d6, [optional] VARIANT d7, [optional] VARIANT d8, [optional] VARIANT d9, [optional] VARIANT d10)
```



Sets the number of dimensions of an array and the length of each dimension in one call. An array initializes to 0 length. If any dimension of the array has 0 length, the whole array contains no data. You must set the array size before filling in values unless you are using the setArray() call.






**Parameters**:

* **d1**: length of the 1st dimension of the array
* **d2**: length of the 2nd dimension of the array. If omitted, the array is 1 dimensional
* **d3**: length of the 3rd dimension of the array. If omitted, the array is 2 dimensional
* **d4**: length of the 4th dimension of the array. If omitted, the array is 3 dimensional
* **d5**: length of the 5th dimension of the array. If omitted, the array is 4 dimensional
* **d6**: length of the 6th dimension of the array. If omitted, the array is 5 dimensional
* **d7**: length of the 7th dimension of the array. If omitted, the array is 6 dimensional
* **d8**: length of the 8th dimension of the array. If omitted, the array is 7 dimensional
* **d9**: length of the 9th dimension of the array. If omitted, the array is 8 dimensional
* **d10**: length of the 10th dimension of the array. If omitted, the array is 9 dimensional



**Parameters**:

* long **d1**
* _[optional]_ VARIANT **d2**
* _[optional]_ VARIANT **d3**
* _[optional]_ VARIANT **d4**
* _[optional]_ VARIANT **d5**
* _[optional]_ VARIANT **d6**
* _[optional]_ VARIANT **d7**
* _[optional]_ VARIANT **d8**
* _[optional]_ VARIANT **d9**
* _[optional]_ VARIANT **d10**

**Return type**: void

**Reimplemented by**:

* [setDimensions](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a6a526c3b8680b1f5ececc326a340d14b)
* [setDimensions](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a397d1abf4ecf0a106e84112b5634efac)
* [setDimensions](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a791424f1645b40c0b9b9d509effb1df8)
* [setDimensions](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a1010ee85bb6325b98fab48f96b582103)
* [setDimensions](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a3526172d364bb842ab3bc25f1cedf31b)
* [setDimensions](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1aa3a9cdee8b632a3adda4e2d1814c66f8)

<a id="interfaceModelCenter_1_1IArray_1a3d171136e0b219dd4e2d0d1b4bb9aa1f"></a>
### Function getSize

![][public]

```
long ModelCenter::IArray::getSize([optional] VARIANT dim)
```



Alias for the [getLength()](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a8a6965fe1217428d63d594384a634bfb) call






**Parameters**:

* **dim**: Dimension of the array to query(0-based index).


**Returns**:

Size of the dimension



**Parameters**:

* _[optional]_ VARIANT **dim**

**Return type**: long

<a id="interfaceModelCenter_1_1IArray_1a8b7b41ca5463a86aecb2368d73464c0e"></a>
### Function setSize

![][public]

```
void ModelCenter::IArray::setSize(long length, [optional] VARIANT dim)
```



Alias for the [setLength()](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ac632aa0e8bc7a6fcac41245e151beec8) call






**Parameters**:

* **length**: Length of the specified dimension
* **dim**: The dimension to set (0-based index).



**Parameters**:

* long **length**
* _[optional]_ VARIANT **dim**

**Return type**: void

<a id="interfaceModelCenter_1_1IArray_1a83abe70ccf5e8a0a582748d84e3d7956"></a>
### Function getDimensions

![][public]

```
VARIANT ModelCenter::IArray::getDimensions()
```



Gets the dimensions of the array.






**Returns**:

Variant - either a single integer, in the case of a 1D array, or an array of integers, in the case of multi-dimensional arrays.



**Return type**: VARIANT

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)