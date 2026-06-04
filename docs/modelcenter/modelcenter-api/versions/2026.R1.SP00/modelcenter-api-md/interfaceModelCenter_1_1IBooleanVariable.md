# Interface ModelCenter::IBooleanVariable

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1045)



COM Instance.

**Inherits from**:

* [ModelCenter::IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable)

## Members

* [dependentLinks](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a69e716f024970454d8c555c73df17360)
* [dependents](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1afa6ea6f99c9eeb606ebe08b1e7d9c54d)
* [description](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a8035fb2b8276762f7b0b2b3e8b7d8cf5)
* [directDependents](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a40dedf6b7b841a6699d545ea058ad2cd)
* [directPrecedents](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ae54cdcd132e22278b8ddb00aaff236c7)
* [fromString](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a8b9fd88143b7b23e5f3ae9e229774a2b)
* [getFullName](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a19c8cfbcba0c9fc8eaae14bfaaa07d39)
* [getMetadata](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a74eae8f0c59826ea05228abfc9a9354a)
* [getName](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ac4595a4a7f2b81c6c5c2f1f5e3742f56)
* [getType](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a6e68844292a9f0b5e1924728465d02c0)
* [hasChanged](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a5b428150a22e87af248e5fc3277c70ae)
* [hide](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1aa3a5fa8309ca19d0bf787bbf7cbcbf54)
* [invalidate](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a1eecc6708b4fb8e29bfe73ead410adaa)
* [isInput](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ab8445c95fe06a4eb82ed55034c26d34e)
* [isInputToComponent](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1af27600cef7dfba2a97acbeb31e2bbe43)
* [isInputToModel](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a38875f7d7b47980f4d78d76a449bbb01)
* [isValid](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a877899b0c2bcc8400bcd8cfa31c4eb7a)
* [OwningComponent](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a67bcc3bdedde454663601bb945dd5bff)
* [precedentLinks](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ab5b740c028c3b878f1341efea2df0116)
* [precedents](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1aa43bd8ee475029fc466b20cd3b1b686d)
* [setInitialValue](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a37b148f160421cc772d96d616cc58a67)
* [setMetadata](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a6771c11a9e1388bc4da11b9fae91e2e8)
* [toString](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a97263640728fae5de92a272345ce0a01)
* [toStringAbsolute](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ad3fdc29d883580eaf57b83a7b796c703)
* [validate](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ae3cb5f6c787efb879f5d85a5ee5ee344)
* [value](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a025854ed57fb252dde2b341182cd7e7a)
* [valueAbsolute](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a875503e8827a33a2d15497b21c50b840)

## Properties

<a id="interfaceModelCenter_1_1IBooleanVariable_1a5b428150a22e87af248e5fc3277c70ae"></a>
### Property hasChanged

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IBooleanVariable::hasChanged
```







**Return type**: boolean

<a id="interfaceModelCenter_1_1IBooleanVariable_1aa3a5fa8309ca19d0bf787bbf7cbcbf54"></a>
### Property hide

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IBooleanVariable::hide
```







**Return type**: boolean

<a id="interfaceModelCenter_1_1IBooleanVariable_1a67bcc3bdedde454663601bb945dd5bff"></a>
### Property OwningComponent

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
LPDISPATCH ModelCenter::IBooleanVariable::OwningComponent
```







**Return type**: LPDISPATCH

<a id="interfaceModelCenter_1_1IBooleanVariable_1a025854ed57fb252dde2b341182cd7e7a"></a>
### Property value

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IBooleanVariable::value
```



The value of the variable.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IBooleanVariable_1a875503e8827a33a2d15497b21c50b840"></a>
### Property valueAbsolute

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IBooleanVariable::valueAbsolute
```



The value of the variable. (Fetched without attempting to validate)



**Return type**: boolean

<a id="interfaceModelCenter_1_1IBooleanVariable_1a8035fb2b8276762f7b0b2b3e8b7d8cf5"></a>
### Property description

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IBooleanVariable::description
```



Description of the variable.



**Return type**: BSTR

## Public functions

<a id="interfaceModelCenter_1_1IBooleanVariable_1a877899b0c2bcc8400bcd8cfa31c4eb7a"></a>
### Function isValid

![][public]

```
boolean ModelCenter::IBooleanVariable::isValid()
```



Returns whether or not the variable is valid.






**Returns**:

True if variable is valid. False if the variable is not valid.



**Return type**: boolean

**Reimplements**: [isValid](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a602d42ee0595c1c0408a536c31c61adb)

<a id="interfaceModelCenter_1_1IBooleanVariable_1ae3cb5f6c787efb879f5d85a5ee5ee344"></a>
### Function validate

![][public]

```
void ModelCenter::IBooleanVariable::validate()
```



Validates the variable by running the component if needed.



**Return type**: void

**Reimplements**: [validate](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6748764fba94242fbe35ae2f4d49c9ef)

<a id="interfaceModelCenter_1_1IBooleanVariable_1ac4595a4a7f2b81c6c5c2f1f5e3742f56"></a>
### Function getName

![][public]

```
BSTR ModelCenter::IBooleanVariable::getName()
```



Gets the name of the variable.






**Returns**:

The name of the variable.



**Return type**: BSTR

**Reimplements**: [getName](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ae1ad6db87e29a4b265ec310295fb3843)

<a id="interfaceModelCenter_1_1IBooleanVariable_1a19c8cfbcba0c9fc8eaae14bfaaa07d39"></a>
### Function getFullName

![][public]

```
BSTR ModelCenter::IBooleanVariable::getFullName()
```



Gets the full ModelCenter path of the variable.






**Returns**:

The full ModelCenter path of the variable.



**Return type**: BSTR

**Reimplements**: [getFullName](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a05a46370dd23d612bf0f09f146ba32a0)

<a id="interfaceModelCenter_1_1IBooleanVariable_1a6e68844292a9f0b5e1924728465d02c0"></a>
### Function getType

![][public]

```
BSTR ModelCenter::IBooleanVariable::getType()
```



Gets the type of the variable.






**Returns**:

The type of the variable as a string.



**Return type**: BSTR

**Reimplements**: [getType](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ab7fadd397a7779f29005048383a9f187)

<a id="interfaceModelCenter_1_1IBooleanVariable_1ab8445c95fe06a4eb82ed55034c26d34e"></a>
### Function isInput

![][public]

```
boolean ModelCenter::IBooleanVariable::isInput()
```



Finds out whether or not the variable is an input with respect to the model. Returns the same value as [isInputToModel](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a38875f7d7b47980f4d78d76a449bbb01).






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInput](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a875481ba3799c222c5085c6c3ca802a7)

<a id="interfaceModelCenter_1_1IBooleanVariable_1a97263640728fae5de92a272345ce0a01"></a>
### Function toString

![][public]

```
BSTR ModelCenter::IBooleanVariable::toString()
```



Converts the variable value to a string, validating the variable if necessary.






**Returns**:

The value of the variable as a string.



**Return type**: BSTR

**Reimplements**: [toString](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6421656e090846e8d7c079b8511fa9d2)

<a id="interfaceModelCenter_1_1IBooleanVariable_1a8b9fd88143b7b23e5f3ae9e229774a2b"></a>
### Function fromString

![][public]

```
void ModelCenter::IBooleanVariable::fromString(BSTR value)
```



Sets the value of the variable from the specified string.






**Parameters**:

* **value**: New value.



**Parameters**:

* BSTR **value**

**Return type**: void

**Reimplements**: [fromString](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a3f6325a128422d445705553f11563904)

<a id="interfaceModelCenter_1_1IBooleanVariable_1ad3fdc29d883580eaf57b83a7b796c703"></a>
### Function toStringAbsolute

![][public]

```
BSTR ModelCenter::IBooleanVariable::toStringAbsolute()
```



Converts the value of the variable to a string.






**Returns**:

The value of the variable as a string.



**Return type**: BSTR

**Reimplements**: [toStringAbsolute](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a5e66075d2bff0f7de435056cdc6c011e)

<a id="interfaceModelCenter_1_1IBooleanVariable_1a1eecc6708b4fb8e29bfe73ead410adaa"></a>
### Function invalidate

![][public]

```
void ModelCenter::IBooleanVariable::invalidate()
```



Marks the variable as invalid (needs to be computed). This will set all dependent variables invalid also.



**Return type**: void

**Reimplements**: [invalidate](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1addc5f809058b5573390f62d34b5f5498)

<a id="interfaceModelCenter_1_1IBooleanVariable_1ae54cdcd132e22278b8ddb00aaff236c7"></a>
### Function directPrecedents

![][public]

```
LPDISPATCH ModelCenter::IBooleanVariable::directPrecedents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IBooleanVariable_1a40dedf6b7b841a6699d545ea058ad2cd"></a>
### Function directDependents

![][public]

```
LPDISPATCH ModelCenter::IBooleanVariable::directDependents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IBooleanVariable_1ab5b740c028c3b878f1341efea2df0116"></a>
### Function precedentLinks

![][public]

```
LPDISPATCH ModelCenter::IBooleanVariable::precedentLinks([optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IBooleanVariable_1a69e716f024970454d8c555c73df17360"></a>
### Function dependentLinks

![][public]

```
LPDISPATCH ModelCenter::IBooleanVariable::dependentLinks([optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IBooleanVariable_1aa43bd8ee475029fc466b20cd3b1b686d"></a>
### Function precedents

![][public]

```
LPDISPATCH ModelCenter::IBooleanVariable::precedents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IBooleanVariable_1afa6ea6f99c9eeb606ebe08b1e7d9c54d"></a>
### Function dependents

![][public]

```
LPDISPATCH ModelCenter::IBooleanVariable::dependents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IBooleanVariable_1af27600cef7dfba2a97acbeb31e2bbe43"></a>
### Function isInputToComponent

![][public]

```
boolean ModelCenter::IBooleanVariable::isInputToComponent()
```



Checks whether or not the variable is an input. Returns true if the variable was originally added as an input, ignoring the current state that can change based off of links.






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInputToComponent](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a81ddff978026124a52063b1fad430b27)

<a id="interfaceModelCenter_1_1IBooleanVariable_1a38875f7d7b47980f4d78d76a449bbb01"></a>
### Function isInputToModel

![][public]

```
boolean ModelCenter::IBooleanVariable::isInputToModel()
```



Checks whether or not the variable is an input. A linked input returns false (Output).






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInputToModel](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a0bd883d3757e361b75e0f81627e6ce98)

<a id="interfaceModelCenter_1_1IBooleanVariable_1a6771c11a9e1388bc4da11b9fae91e2e8"></a>
### Function setMetadata

![][public]

```
void ModelCenter::IBooleanVariable::setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive)
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

<a id="interfaceModelCenter_1_1IBooleanVariable_1a74eae8f0c59826ea05228abfc9a9354a"></a>
### Function getMetadata

![][public]

```
VARIANT ModelCenter::IBooleanVariable::getMetadata(BSTR name)
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

<a id="interfaceModelCenter_1_1IBooleanVariable_1a37b148f160421cc772d96d616cc58a67"></a>
### Function setInitialValue

![][public]

```
void ModelCenter::IBooleanVariable::setInitialValue(BOOL value)
```



Sets the initial value of the variable.






**Parameters**:

* **value**: The initial value.



**Parameters**:

* BOOL **value**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)