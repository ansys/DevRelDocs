# Interface ModelCenter::IGeometryVariable

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 3056)



COM Instance

**Inherits from**:

* [ModelCenter::IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable)

## Members

* [dependentLinks](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a50e3d7ea1d97cd799c29901c2b563208)
* [dependents](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1ab110babf06372919f705e71b64cc733f)
* [description](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1ad6ac49ae6d10a8aef6927eaad49e55f1)
* [directDependents](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a06be08cd5896250dc5b31ec3d90b79e6)
* [directPrecedents](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a8294d8120195193f3a5fba86abcded57)
* [fromString](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a710bd007c2d1df9c861a33a397c7a9d7)
* [getFullName](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a0b0e9f581b1b038395dacb2700d82ce4)
* [getMetadata](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a9fa5015afd1b3cdd651ce2a0e093a6f6)
* [getName](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a2ab57d435f315c7afc7bed802b57d9d0)
* [getType](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a09f10acb36a75c48c2cce4f1925acb55)
* [hasChanged](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a14bb947193a4e5e629d104cadd3159be)
* [hide](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a1ed81bb22242904529b71361e954445a)
* [invalidate](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1ac80cc84f95b559145c98a82367649d89)
* [isInput](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a8c9a1d489060c768242c74b57e85aec2)
* [isInputToComponent](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a3223f3e2305da64ecb24530ed3e1652f)
* [isInputToModel](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a324e6df2e0d789abb14a6ab9bbabb119)
* [isValid](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a01fe29466d2371dd25e6d9a473de32c7)
* [OwningComponent](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a9c9a3532f6f0ce9a907824f5e055e89f)
* [precedentLinks](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a42168bcdab0805055df8432194d5654c)
* [precedents](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a6d516295359de158c45bf2a5c0378af0)
* [setInitialValue](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a61c5bac06b87725ae41b9a17f90b886b)
* [setMetadata](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a3c257357cc786dc18d4187d14b030813)
* [toString](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a0bda0cd0ea97014dc4be4ee2af69e55c)
* [toStringAbsolute](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a711f2c70a30362b587b39f5cd3775f71)
* [validate](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a62715d2cd23f7a7daafe7568d1a6e32d)
* [value](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1ae013f10c0800acb5229f245f10d687f3)

## Properties

<a id="interfaceModelCenter_1_1IGeometryVariable_1a14bb947193a4e5e629d104cadd3159be"></a>
### Property hasChanged

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IGeometryVariable::hasChanged
```







**Return type**: boolean

<a id="interfaceModelCenter_1_1IGeometryVariable_1a1ed81bb22242904529b71361e954445a"></a>
### Property hide

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IGeometryVariable::hide
```







**Return type**: boolean

<a id="interfaceModelCenter_1_1IGeometryVariable_1a9c9a3532f6f0ce9a907824f5e055e89f"></a>
### Property OwningComponent

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
LPDISPATCH ModelCenter::IGeometryVariable::OwningComponent
```







**Return type**: LPDISPATCH

<a id="interfaceModelCenter_1_1IGeometryVariable_1ae013f10c0800acb5229f245f10d687f3"></a>
### Property value

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IGeometryVariable::value
```



Value of the variable.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IGeometryVariable_1ad6ac49ae6d10a8aef6927eaad49e55f1"></a>
### Property description

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IGeometryVariable::description
```



Description of the variable.



**Return type**: BSTR

## Public functions

<a id="interfaceModelCenter_1_1IGeometryVariable_1a01fe29466d2371dd25e6d9a473de32c7"></a>
### Function isValid

![][public]

```
boolean ModelCenter::IGeometryVariable::isValid()
```



Returns whether or not the variable is valid.






**Returns**:

True if variable is valid. False if the variable is not valid.



**Return type**: boolean

**Reimplements**: [isValid](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a602d42ee0595c1c0408a536c31c61adb)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a62715d2cd23f7a7daafe7568d1a6e32d"></a>
### Function validate

![][public]

```
void ModelCenter::IGeometryVariable::validate()
```



Validates the variable by running the component if needed.



**Return type**: void

**Reimplements**: [validate](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6748764fba94242fbe35ae2f4d49c9ef)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a2ab57d435f315c7afc7bed802b57d9d0"></a>
### Function getName

![][public]

```
BSTR ModelCenter::IGeometryVariable::getName()
```



Gets the name of the variable.






**Returns**:

The name of the variable.



**Return type**: BSTR

**Reimplements**: [getName](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ae1ad6db87e29a4b265ec310295fb3843)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a0b0e9f581b1b038395dacb2700d82ce4"></a>
### Function getFullName

![][public]

```
BSTR ModelCenter::IGeometryVariable::getFullName()
```



Gets the full ModelCenter path of the variable.






**Returns**:

The full ModelCenter path of the variable.



**Return type**: BSTR

**Reimplements**: [getFullName](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a05a46370dd23d612bf0f09f146ba32a0)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a09f10acb36a75c48c2cce4f1925acb55"></a>
### Function getType

![][public]

```
BSTR ModelCenter::IGeometryVariable::getType()
```



Gets the type of the variable.






**Returns**:

The type of the variable as a string.



**Return type**: BSTR

**Reimplements**: [getType](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ab7fadd397a7779f29005048383a9f187)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a8c9a1d489060c768242c74b57e85aec2"></a>
### Function isInput

![][public]

```
boolean ModelCenter::IGeometryVariable::isInput()
```



Finds out whether or not the variable is an input with respect to the model. Returns the same value as [isInputToModel](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a324e6df2e0d789abb14a6ab9bbabb119).






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInput](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a875481ba3799c222c5085c6c3ca802a7)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a0bda0cd0ea97014dc4be4ee2af69e55c"></a>
### Function toString

![][public]

```
BSTR ModelCenter::IGeometryVariable::toString()
```



Converts the variable value to a string, validating the variable if necessary.






**Returns**:

The value of the variable as a string.



**Return type**: BSTR

**Reimplements**: [toString](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6421656e090846e8d7c079b8511fa9d2)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a710bd007c2d1df9c861a33a397c7a9d7"></a>
### Function fromString

![][public]

```
void ModelCenter::IGeometryVariable::fromString(BSTR value)
```



Sets the value of the variable from the specified string.






**Parameters**:

* **value**: New value.



**Parameters**:

* BSTR **value**

**Return type**: void

**Reimplements**: [fromString](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a3f6325a128422d445705553f11563904)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a711f2c70a30362b587b39f5cd3775f71"></a>
### Function toStringAbsolute

![][public]

```
BSTR ModelCenter::IGeometryVariable::toStringAbsolute()
```



Converts the value of the variable to a string.






**Returns**:

The value of the variable as a string.



**Return type**: BSTR

**Reimplements**: [toStringAbsolute](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a5e66075d2bff0f7de435056cdc6c011e)

<a id="interfaceModelCenter_1_1IGeometryVariable_1ac80cc84f95b559145c98a82367649d89"></a>
### Function invalidate

![][public]

```
void ModelCenter::IGeometryVariable::invalidate()
```



Marks the variable as invalid (needs to be computed). This will set all dependent variables invalid also.



**Return type**: void

**Reimplements**: [invalidate](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1addc5f809058b5573390f62d34b5f5498)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a8294d8120195193f3a5fba86abcded57"></a>
### Function directPrecedents

![][public]

```
LPDISPATCH ModelCenter::IGeometryVariable::directPrecedents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IGeometryVariable_1a06be08cd5896250dc5b31ec3d90b79e6"></a>
### Function directDependents

![][public]

```
LPDISPATCH ModelCenter::IGeometryVariable::directDependents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IGeometryVariable_1a42168bcdab0805055df8432194d5654c"></a>
### Function precedentLinks

![][public]

```
LPDISPATCH ModelCenter::IGeometryVariable::precedentLinks([optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IGeometryVariable_1a50e3d7ea1d97cd799c29901c2b563208"></a>
### Function dependentLinks

![][public]

```
LPDISPATCH ModelCenter::IGeometryVariable::dependentLinks([optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IGeometryVariable_1a6d516295359de158c45bf2a5c0378af0"></a>
### Function precedents

![][public]

```
LPDISPATCH ModelCenter::IGeometryVariable::precedents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IGeometryVariable_1ab110babf06372919f705e71b64cc733f"></a>
### Function dependents

![][public]

```
LPDISPATCH ModelCenter::IGeometryVariable::dependents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IGeometryVariable_1a3223f3e2305da64ecb24530ed3e1652f"></a>
### Function isInputToComponent

![][public]

```
boolean ModelCenter::IGeometryVariable::isInputToComponent()
```



Checks whether or not the variable is an input. Returns true if the variable was originally added as an input, ignoring the current state that can change based off of links.






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInputToComponent](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a81ddff978026124a52063b1fad430b27)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a324e6df2e0d789abb14a6ab9bbabb119"></a>
### Function isInputToModel

![][public]

```
boolean ModelCenter::IGeometryVariable::isInputToModel()
```



Checks whether or not the variable is an input. A linked input returns false (Output).






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInputToModel](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a0bd883d3757e361b75e0f81627e6ce98)

<a id="interfaceModelCenter_1_1IGeometryVariable_1a3c257357cc786dc18d4187d14b030813"></a>
### Function setMetadata

![][public]

```
void ModelCenter::IGeometryVariable::setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive)
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

<a id="interfaceModelCenter_1_1IGeometryVariable_1a9fa5015afd1b3cdd651ce2a0e093a6f6"></a>
### Function getMetadata

![][public]

```
VARIANT ModelCenter::IGeometryVariable::getMetadata(BSTR name)
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

<a id="interfaceModelCenter_1_1IGeometryVariable_1a61c5bac06b87725ae41b9a17f90b886b"></a>
### Function setInitialValue

![][public]

```
void ModelCenter::IGeometryVariable::setInitialValue(BSTR value)
```



Sets the initial value of the variable.






**Parameters**:

* **value**: Initial value.



**Parameters**:

* BSTR **value**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)