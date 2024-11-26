# Interface ModelCenter::IReferenceVariable

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 5335)



COM Instance.

**Inherits from**:

* [ModelCenter::IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable)

## Members

* [createRefProp](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a0063ff442e879a9ca2986bc63eb9adc7)
* [dependentLinks](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a4c704741da375408b052eeddc6ed90dc)
* [dependents](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1aceffce4238d22a19c211658f675491ee)
* [directDependents](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a24fa52bf29a92c4f1d6a79e2991e9ae5)
* [directPrecedents](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a0e11aede2642dd050f0c5254a36b4a71)
* [fromString](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1aa52a8fe2a76861302ee8ab0f8f3a614c)
* [getFullName](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a3e427b90dbf2f763c2486cdd774c2d49)
* [getMetadata](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a122afef9ff20a0de02d08ab41eb4e5bb)
* [getName](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1aa01b77111d4a975cc12ca3e0a16d845b)
* [getRefPropValue](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ad90bbc18df836afc454157bd06523d75)
* [getRefPropValueAbsolute](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ae45fa34070d38d9de3593d815e86b1fc)
* [getType](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ab946d679180e3e65433c8b4b2d61d39e)
* [hasChanged](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a0f4d80365facbc0cfea5745f131e9d10)
* [hide](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a598cb6023fcbcb265cc44618529c3040)
* [invalidate](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a3a460ef81527173ce0c272d2bdf69da6)
* [isInput](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1aa61fe715fadff86e98c35d4bf6aa16e0)
* [isInputToComponent](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ac551ae6997c725cbb3ef71bd6217f89a)
* [isInputToModel](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ad8a6169868d4d186b658946403eae2ab)
* [isValid](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1adbc66e2276350867c0b977bf5cf192cf)
* [OwningComponent](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a853702bf341480c261b01988dfd15513)
* [precedentLinks](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ac4f846dce2494b7c4a9b8482af321c96)
* [precedents](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ae2d07bb6bf73c064a1a492bb6ff2806a)
* [reference](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1abfacc6a5417c7fab810ac6e34a885657)
* [referencedVariable](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a3ae2ecb1742ecac66cec298a6d2cd011)
* [referencedVariables](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a21758071b908ac4fe720dffdafe75592)
* [setMetadata](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1afee8a9cb2ea3d6728cacba4aeaa9ff7a)
* [setRefPropValue](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1af41e2e8abdbc5959543416e21bc73793)
* [toString](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a6675d6a6451c20b11b43ad594af28bcc)
* [toStringAbsolute](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a510fd4577f2a29cf0fef6d1c8fe43c94)
* [validate](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a16aec4b64f98c5dfb3f66c497691e447)
* [value](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a2e307144f16d81645b5ce2cc30b01ae3)

## Properties

<a id="interfaceModelCenter_1_1IReferenceVariable_1a0f4d80365facbc0cfea5745f131e9d10"></a>
### Property hasChanged

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IReferenceVariable::hasChanged
```







**Return type**: boolean

<a id="interfaceModelCenter_1_1IReferenceVariable_1a598cb6023fcbcb265cc44618529c3040"></a>
### Property hide

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IReferenceVariable::hide
```







**Return type**: boolean

<a id="interfaceModelCenter_1_1IReferenceVariable_1a853702bf341480c261b01988dfd15513"></a>
### Property OwningComponent

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
LPDISPATCH ModelCenter::IReferenceVariable::OwningComponent
```







**Return type**: LPDISPATCH

<a id="interfaceModelCenter_1_1IReferenceVariable_1a2e307144f16d81645b5ce2cc30b01ae3"></a>
### Property value

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
double ModelCenter::IReferenceVariable::value
```



Value of the variable.



**Return type**: double

<a id="interfaceModelCenter_1_1IReferenceVariable_1abfacc6a5417c7fab810ac6e34a885657"></a>
### Property reference

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IReferenceVariable::reference
```



Reference of the variable.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IReferenceVariable_1a21758071b908ac4fe720dffdafe75592"></a>
### Property referencedVariables

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IReferenceVariable::referencedVariables
```



Gets the referenced variables.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IReferenceVariable_1a3ae2ecb1742ecac66cec298a6d2cd011"></a>
### Property referencedVariable

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IReferenceVariable::referencedVariable
```



Gets the referenced variable. Convenience method for if there is only one reference.



**Return type**: VARIANT

## Public functions

<a id="interfaceModelCenter_1_1IReferenceVariable_1adbc66e2276350867c0b977bf5cf192cf"></a>
### Function isValid

![][public]

```
boolean ModelCenter::IReferenceVariable::isValid()
```



Returns whether or not the variable is valid.






**Returns**:

True if variable is valid. False if the variable is not valid.



**Return type**: boolean

**Reimplements**: [isValid](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a602d42ee0595c1c0408a536c31c61adb)

<a id="interfaceModelCenter_1_1IReferenceVariable_1a16aec4b64f98c5dfb3f66c497691e447"></a>
### Function validate

![][public]

```
void ModelCenter::IReferenceVariable::validate()
```



Validates the variable by running the component if needed.



**Return type**: void

**Reimplements**: [validate](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6748764fba94242fbe35ae2f4d49c9ef)

<a id="interfaceModelCenter_1_1IReferenceVariable_1aa01b77111d4a975cc12ca3e0a16d845b"></a>
### Function getName

![][public]

```
BSTR ModelCenter::IReferenceVariable::getName()
```



Gets the name of the variable.






**Returns**:

The name of the variable.



**Return type**: BSTR

**Reimplements**: [getName](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ae1ad6db87e29a4b265ec310295fb3843)

<a id="interfaceModelCenter_1_1IReferenceVariable_1a3e427b90dbf2f763c2486cdd774c2d49"></a>
### Function getFullName

![][public]

```
BSTR ModelCenter::IReferenceVariable::getFullName()
```



Gets the full ModelCenter path of the variable.






**Returns**:

The full ModelCenter path of the variable.



**Return type**: BSTR

**Reimplements**: [getFullName](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a05a46370dd23d612bf0f09f146ba32a0)

<a id="interfaceModelCenter_1_1IReferenceVariable_1ab946d679180e3e65433c8b4b2d61d39e"></a>
### Function getType

![][public]

```
BSTR ModelCenter::IReferenceVariable::getType()
```



Gets the type of the variable.






**Returns**:

The type of the variable as a string.



**Return type**: BSTR

**Reimplements**: [getType](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ab7fadd397a7779f29005048383a9f187)

<a id="interfaceModelCenter_1_1IReferenceVariable_1aa61fe715fadff86e98c35d4bf6aa16e0"></a>
### Function isInput

![][public]

```
boolean ModelCenter::IReferenceVariable::isInput()
```



Finds out whether or not the variable is an input with respect to the model. Returns the same value as [isInputToModel](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ad8a6169868d4d186b658946403eae2ab).






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInput](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a875481ba3799c222c5085c6c3ca802a7)

<a id="interfaceModelCenter_1_1IReferenceVariable_1a6675d6a6451c20b11b43ad594af28bcc"></a>
### Function toString

![][public]

```
BSTR ModelCenter::IReferenceVariable::toString()
```



Converts the variable value to a string, validating the variable if necessary.






**Returns**:

The value of the variable as a string.



**Return type**: BSTR

**Reimplements**: [toString](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6421656e090846e8d7c079b8511fa9d2)

<a id="interfaceModelCenter_1_1IReferenceVariable_1aa52a8fe2a76861302ee8ab0f8f3a614c"></a>
### Function fromString

![][public]

```
void ModelCenter::IReferenceVariable::fromString(BSTR value)
```



Sets the value of the variable from the specified string.






**Parameters**:

* **value**: New value.



**Parameters**:

* BSTR **value**

**Return type**: void

**Reimplements**: [fromString](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a3f6325a128422d445705553f11563904)

<a id="interfaceModelCenter_1_1IReferenceVariable_1a510fd4577f2a29cf0fef6d1c8fe43c94"></a>
### Function toStringAbsolute

![][public]

```
BSTR ModelCenter::IReferenceVariable::toStringAbsolute()
```



Converts the value of the variable to a string.






**Returns**:

The value of the variable as a string.



**Return type**: BSTR

**Reimplements**: [toStringAbsolute](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a5e66075d2bff0f7de435056cdc6c011e)

<a id="interfaceModelCenter_1_1IReferenceVariable_1a3a460ef81527173ce0c272d2bdf69da6"></a>
### Function invalidate

![][public]

```
void ModelCenter::IReferenceVariable::invalidate()
```



Marks the variable as invalid (needs to be computed). This will set all dependent variables invalid also.



**Return type**: void

**Reimplements**: [invalidate](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1addc5f809058b5573390f62d34b5f5498)

<a id="interfaceModelCenter_1_1IReferenceVariable_1a0e11aede2642dd050f0c5254a36b4a71"></a>
### Function directPrecedents

![][public]

```
LPDISPATCH ModelCenter::IReferenceVariable::directPrecedents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IReferenceVariable_1a24fa52bf29a92c4f1d6a79e2991e9ae5"></a>
### Function directDependents

![][public]

```
LPDISPATCH ModelCenter::IReferenceVariable::directDependents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IReferenceVariable_1ac4f846dce2494b7c4a9b8482af321c96"></a>
### Function precedentLinks

![][public]

```
LPDISPATCH ModelCenter::IReferenceVariable::precedentLinks([optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IReferenceVariable_1a4c704741da375408b052eeddc6ed90dc"></a>
### Function dependentLinks

![][public]

```
LPDISPATCH ModelCenter::IReferenceVariable::dependentLinks([optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IReferenceVariable_1ae2d07bb6bf73c064a1a492bb6ff2806a"></a>
### Function precedents

![][public]

```
LPDISPATCH ModelCenter::IReferenceVariable::precedents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IReferenceVariable_1aceffce4238d22a19c211658f675491ee"></a>
### Function dependents

![][public]

```
LPDISPATCH ModelCenter::IReferenceVariable::dependents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

<a id="interfaceModelCenter_1_1IReferenceVariable_1ac551ae6997c725cbb3ef71bd6217f89a"></a>
### Function isInputToComponent

![][public]

```
boolean ModelCenter::IReferenceVariable::isInputToComponent()
```



Checks whether or not the variable is an input. Returns true if the variable was originally added as an input, ignoring the current state that can change based off of links.






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInputToComponent](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a81ddff978026124a52063b1fad430b27)

<a id="interfaceModelCenter_1_1IReferenceVariable_1ad8a6169868d4d186b658946403eae2ab"></a>
### Function isInputToModel

![][public]

```
boolean ModelCenter::IReferenceVariable::isInputToModel()
```



Checks whether or not the variable is an input. A linked input returns false (Output).






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplements**: [isInputToModel](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a0bd883d3757e361b75e0f81627e6ce98)

<a id="interfaceModelCenter_1_1IReferenceVariable_1afee8a9cb2ea3d6728cacba4aeaa9ff7a"></a>
### Function setMetadata

![][public]

```
void ModelCenter::IReferenceVariable::setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive)
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

<a id="interfaceModelCenter_1_1IReferenceVariable_1a122afef9ff20a0de02d08ab41eb4e5bb"></a>
### Function getMetadata

![][public]

```
VARIANT ModelCenter::IReferenceVariable::getMetadata(BSTR name)
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

<a id="interfaceModelCenter_1_1IReferenceVariable_1a0063ff442e879a9ca2986bc63eb9adc7"></a>
### Function createRefProp

![][public]

```
IDispatch * ModelCenter::IReferenceVariable::createRefProp(BSTR name, BSTR type)
```



Creates a reference property for the variable.






**Parameters**:

* **name**: Name of the reference property.
* **type**: Type of reference property to create.<br/>
 Allowed types are: double, long, boolean, and string.


**Returns**:

IDispatch* to an [IRefProp](interfaceModelCenter_1_1IRefProp.md#interfaceModelCenter_1_1IRefProp) object.



**Parameters**:

* BSTR **name**
* BSTR **type**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IReferenceVariable_1ad90bbc18df836afc454157bd06523d75"></a>
### Function getRefPropValue

![][public]

```
VARIANT ModelCenter::IReferenceVariable::getRefPropValue(BSTR name)
```



Gets the value of a specified reference property for the variable.






**Parameters**:

* **name**: Name of the reference property.


**Returns**:

The value as a variant.



**Parameters**:

* BSTR **name**

**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IReferenceVariable_1af41e2e8abdbc5959543416e21bc73793"></a>
### Function setRefPropValue

![][public]

```
void ModelCenter::IReferenceVariable::setRefPropValue(BSTR name, BSTR value)
```



Sets the value of a specified reference property for the variable.






**Parameters**:

* **name**: Name of the reference property.
* **value**: New value.



**Parameters**:

* BSTR **name**
* BSTR **value**

**Return type**: void

<a id="interfaceModelCenter_1_1IReferenceVariable_1ae45fa34070d38d9de3593d815e86b1fc"></a>
### Function getRefPropValueAbsolute

![][public]

```
VARIANT ModelCenter::IReferenceVariable::getRefPropValueAbsolute(BSTR name)
```



Gets the value of a specified reference property for the variable, without validating first.






**Parameters**:

* **name**: Name of the reference property.


**Returns**:

The value as a variant.



**Parameters**:

* BSTR **name**

**Return type**: VARIANT

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)