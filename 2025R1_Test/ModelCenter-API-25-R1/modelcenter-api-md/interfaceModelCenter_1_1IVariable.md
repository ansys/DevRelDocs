<a id="interfaceModelCenter_1_1IVariable"></a>
# Interface ModelCenter::IVariable

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 5769)



COM instance.

**Inherited by**:

* [ModelCenter::IArray](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray)
* [ModelCenter::IBooleanVariable](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable)
* [ModelCenter::IDoubleVariable](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable)
* [ModelCenter::IFileVariable](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable)
* [ModelCenter::IGeometryVariable](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable)
* [ModelCenter::IIntegerVariable](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable)
* [ModelCenter::IObjectVariable](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable)
* [ModelCenter::IReferenceVariable](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable)
* [ModelCenter::IStringVariable](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable)

## Members

* [dependentLinks](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a1e52cc38574fbdf83e9dba836dfc5959)
* [dependents](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6f42f3176eb8fa2fbf9ca1b9a01fc7ce)
* [directDependents](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a64c800317037f03a43c8522061885835)
* [directPrecedents](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a655ce10f3a6e2839f11161e8bf13b0c2)
* [fromString](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a3f6325a128422d445705553f11563904)
* [getFullName](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a05a46370dd23d612bf0f09f146ba32a0)
* [getMetadata](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a610297790a8c506c339586740f1d3022)
* [getName](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ae1ad6db87e29a4b265ec310295fb3843)
* [getType](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ab7fadd397a7779f29005048383a9f187)
* [hasChanged](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a70aa745d819120f3f13d8f5cac099e44)
* [hide](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a2b79ae605f5b5864f5470d730a845f7c)
* [invalidate](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1addc5f809058b5573390f62d34b5f5498)
* [isInput](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a875481ba3799c222c5085c6c3ca802a7)
* [isInputToComponent](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a81ddff978026124a52063b1fad430b27)
* [isInputToModel](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a0bd883d3757e361b75e0f81627e6ce98)
* [isValid](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a602d42ee0595c1c0408a536c31c61adb)
* [OwningComponent](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a2b61c0eea38b2b20a08b75041dc20f63)
* [precedentLinks](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a9d52333bc9a07146e23124f0fe95db6f)
* [precedents](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1ad1f5d5ba3e96e9c2fab7a4b0d6c4df36)
* [setMetadata](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1af7cbf8f2c8d128c760fb09254819bf64)
* [toString](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6421656e090846e8d7c079b8511fa9d2)
* [toStringAbsolute](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a5e66075d2bff0f7de435056cdc6c011e)
* [validate](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a6748764fba94242fbe35ae2f4d49c9ef)

## Properties

<a id="interfaceModelCenter_1_1IVariable_1a70aa745d819120f3f13d8f5cac099e44"></a>
### Property hasChanged

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IVariable::hasChanged
```



Boolean which indicates if the variable has changed since the last time the boolean was reset. Typically used only by Plug-Ins for their own variables (to avoid conflicting use by different Plug-Ins , macros, or tools). Set the value to false and it will automatically flip to true any time the value changes.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IVariable_1a2b79ae605f5b5864f5470d730a845f7c"></a>
### Property hide

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IVariable::hide
```



Hides the variable from the User Interface. Variable will not be visible in Component Tree, Data Explorer, or Data Monitors.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IVariable_1a2b61c0eea38b2b20a08b75041dc20f63"></a>
### Property OwningComponent

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
LPDISPATCH ModelCenter::IVariable::OwningComponent
```



Gets the component that owns this variable.






**Returns**:

IDispatch* to an [IComponent](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent) object.



**Return type**: LPDISPATCH

## Public functions

<a id="interfaceModelCenter_1_1IVariable_1a602d42ee0595c1c0408a536c31c61adb"></a>
### Function isValid

![][public]

```
boolean ModelCenter::IVariable::isValid()
```



Returns whether or not the variable is valid.






**Returns**:

True if variable is valid. False if the variable is not valid.



**Return type**: boolean

**Reimplemented by**:

* [isValid](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a20792cdbe6866825f978a2e30affca88)
* [isValid](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a9d13fb275a266aa85280b6beed8be176)
* [isValid](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a877899b0c2bcc8400bcd8cfa31c4eb7a)
* [isValid](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a4d7719052c0b341f91436d3a0da270cc)
* [isValid](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a1b873587774671d25664c294323beae8)
* [isValid](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1a88a80a771329337246e883b3ce034400)
* [isValid](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a1d3371b70abb06b2eff5d1ada8aa114f)
* [isValid](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a2d8ceabbeb9640dffb9f6a9e654bbd79)
* [isValid](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a01fe29466d2371dd25e6d9a473de32c7)
* [isValid](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1ab3d891c3978182e073923a56b4dbe89b)
* [isValid](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1ae03686387c15bc80d2caec8c3a5a913f)
* [isValid](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a366cf132edcae4c78ff3c3c29d81ad03)
* [isValid](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1adbc66e2276350867c0b977bf5cf192cf)
* [isValid](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a8b738f7eef3f9a3f8a723cede3809f47)
* [isValid](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a16c6e45e1967f427b3a7123d7da384b1)

<a id="interfaceModelCenter_1_1IVariable_1a6748764fba94242fbe35ae2f4d49c9ef"></a>
### Function validate

![][public]

```
void ModelCenter::IVariable::validate()
```



Validates the variable by running the component if needed.



**Return type**: void

**Reimplemented by**:

* [validate](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a31cda88a70c11ef884e9105ef4ee7d20)
* [validate](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1aa221cef15629c5acf569329c0e089b3a)
* [validate](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ae3cb5f6c787efb879f5d85a5ee5ee344)
* [validate](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1abc755512c485531a61f10d2bc5d691b0)
* [validate](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1abddc8770d26e37ac9319be5b90bc6e3e)
* [validate](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1a56e476d33f05ee8b4faa077396704fa6)
* [validate](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a506a66d66cb52b49d7385351bf0cfa46)
* [validate](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1aa3fdf5883f1849f93bf87256b9100d0b)
* [validate](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a62715d2cd23f7a7daafe7568d1a6e32d)
* [validate](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a84ab133f5b1147d475fb8e2c4275b32b)
* [validate](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a2807c2dd1e70fe7d8eab0af0a64e2d74)
* [validate](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1af1dd28c351fcda3e3fea31facbd4fca3)
* [validate](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a16aec4b64f98c5dfb3f66c497691e447)
* [validate](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a86b82bcfb1ccfa2428968307eaa07108)
* [validate](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a7bddbd595f981680f8eb062d950f20d7)

<a id="interfaceModelCenter_1_1IVariable_1ae1ad6db87e29a4b265ec310295fb3843"></a>
### Function getName

![][public]

```
BSTR ModelCenter::IVariable::getName()
```



Gets the name of the variable.






**Returns**:

The name of the variable.



**Return type**: BSTR

**Reimplemented by**:

* [getName](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ace7a0aeb83a64535f7caa63600783fa7)
* [getName](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a471100848db5a6f0c08f2920aa283ac6)
* [getName](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ac4595a4a7f2b81c6c5c2f1f5e3742f56)
* [getName](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1afe2789906f30f6a082e5d3d79e2b5bbc)
* [getName](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a10978bbb428eadf01141d2ceb2373c7a)
* [getName](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1a1ec0c0bce4884b2c8c1decf29f4d5b86)
* [getName](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a3f04f85ebe4f50a88c7cc3a61ae597f6)
* [getName](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1adbaa029c76034043ccdf2bf84bbd0e7f)
* [getName](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a2ab57d435f315c7afc7bed802b57d9d0)
* [getName](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a79fdcc3e290b4b0df816f69d8a8d5f9d)
* [getName](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1abcd09429d47c396bab6dc63690e1a1c1)
* [getName](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a282d98574e8d65d85c9908b6799321b7)
* [getName](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1aa01b77111d4a975cc12ca3e0a16d845b)
* [getName](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a0a90870618bd396edc53c27ff0b8c9af)
* [getName](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a50cf9efbe23ed25a027f6df1d7132577)

<a id="interfaceModelCenter_1_1IVariable_1a05a46370dd23d612bf0f09f146ba32a0"></a>
### Function getFullName

![][public]

```
BSTR ModelCenter::IVariable::getFullName()
```



Gets the full ModelCenter path of the variable.






**Returns**:

The full ModelCenter path of the variable.



**Return type**: BSTR

**Reimplemented by**:

* [getFullName](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a699cf890f3743699cb25a7432c0f7f68)
* [getFullName](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a498741fde4d9eeec6eb3f8171e3161d8)
* [getFullName](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a19c8cfbcba0c9fc8eaae14bfaaa07d39)
* [getFullName](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a225331135b6efad1b05c399869975962)
* [getFullName](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a00a7eca52d31c8f86e049dc1896d2434)
* [getFullName](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1a7d1acdd7a964ceb7d189c87a19e9bcb3)
* [getFullName](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a7aada275954e2fff6bdea69b8a96bd0c)
* [getFullName](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a5b0b8db5aec4ebfbd8e7918568c71b70)
* [getFullName](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a0b0e9f581b1b038395dacb2700d82ce4)
* [getFullName](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a8c74276fefc00a8b85a576e1d1b58053)
* [getFullName](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a6bbb377e1c98a99b660cfdfa3c61f191)
* [getFullName](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a44ebe17869a3b1b95568ea46299a9f3f)
* [getFullName](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a3e427b90dbf2f763c2486cdd774c2d49)
* [getFullName](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a4ca185e60b69ce2ff41d19a2270bc28b)
* [getFullName](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1ac8c712e2b8f8136f59cffd1665d6cb5e)

<a id="interfaceModelCenter_1_1IVariable_1ab7fadd397a7779f29005048383a9f187"></a>
### Function getType

![][public]

```
BSTR ModelCenter::IVariable::getType()
```



Gets the type of the variable.






**Returns**:

The type of the variable as a string.



**Return type**: BSTR

**Reimplemented by**:

* [getType](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1adf1ee02ba4bdf03ef0366e2f0a62b344)
* [getType](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1ad8d2b43dd9f4b3656dba1e8570f7f747)
* [getType](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a6e68844292a9f0b5e1924728465d02c0)
* [getType](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a59535b93acdadae5c47ebb3f148cc8a7)
* [getType](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a974708d2da959d48ee301088918719fd)
* [getType](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1a40cc49ff4f6fd51695549d4ad32a4384)
* [getType](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a6614c3d1ae621d218762e8ed8ec58222)
* [getType](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1aec7c7bb8f9e43d411c457d7b091e5378)
* [getType](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a09f10acb36a75c48c2cce4f1925acb55)
* [getType](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a05e311dcfb051f0df6afc99dd01d6773)
* [getType](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a38de94bbe44275b88d92522926b1a841)
* [getType](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1ac3c3f33a239fe1182da434d7570346df)
* [getType](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ab946d679180e3e65433c8b4b2d61d39e)
* [getType](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a582f9e8e47e60eca8041b98c996a4f4f)
* [getType](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a9468a019a8bfaaa771c5bf97e206ea5a)

<a id="interfaceModelCenter_1_1IVariable_1a875481ba3799c222c5085c6c3ca802a7"></a>
### Function isInput

![][public]

```
boolean ModelCenter::IVariable::isInput()
```



Finds out whether or not the variable is an input with respect to the model. Returns the same value as [isInputToModel](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable_1a0bd883d3757e361b75e0f81627e6ce98).






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplemented by**:

* [isInput](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1af18eb203bc12f95a61b5876279ee17a9)
* [isInput](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1aa87e846de03852ee40e909935c2ec470)
* [isInput](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ab8445c95fe06a4eb82ed55034c26d34e)
* [isInput](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1aa0a3e17384092dbeb0cef004db873191)
* [isInput](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a162bb6a2a0c8cf5a2f3ee15daaaf85c2)
* [isInput](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1adb2ffa6d382f3874d63cab8c53f956c6)
* [isInput](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a9e45ea90908321e84979e5b8d2f50357)
* [isInput](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a92363045c1f3285c5c1127ad149c0250)
* [isInput](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a8c9a1d489060c768242c74b57e85aec2)
* [isInput](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a3752394336c9689384efac1005422431)
* [isInput](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1ab441aa413516cf14c082aa39801250c4)
* [isInput](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1ae7e5c76cfd592a71fc7e5785c7cf6394)
* [isInput](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1aa61fe715fadff86e98c35d4bf6aa16e0)
* [isInput](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a3b7b397239f04cf9ea9358f9477ee2c4)
* [isInput](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a2268414421505ee4c0fb49de92953007)

<a id="interfaceModelCenter_1_1IVariable_1a6421656e090846e8d7c079b8511fa9d2"></a>
### Function toString

![][public]

```
BSTR ModelCenter::IVariable::toString()
```



Converts the variable value to a string, validating the variable if necessary.






**Returns**:

The value of the variable as a string.



**Return type**: BSTR

**Reimplemented by**:

* [toString](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a6ff821435a5704253ffdfb9334cc2dc4)
* [toString](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a39294beb6d830e498ee8aca7a25cc4a6)
* [toString](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a97263640728fae5de92a272345ce0a01)
* [toString](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1af417ef0e71fabce8379be30e4d176355)
* [toString](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a59f1d75b8e24323ea9bf523159f04f69)
* [toString](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1acc675e2c9045387d4ceb956d7d7d9f70)
* [toString](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a7ba909789490822b7ab12891075a9e56)
* [toString](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1ae28a776965df5807d9ce8b2e0d995867)
* [toString](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a0bda0cd0ea97014dc4be4ee2af69e55c)
* [toString](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a83e5e9905df758b37c901bae5e87430e)
* [toString](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a2ec6bbef037c4c0a6ab5e510f9063923)
* [toString](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1aaa37debc6216a5419715e0c542555850)
* [toString](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a6675d6a6451c20b11b43ad594af28bcc)
* [toString](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1aa735025db3ac6e13cb486f8629b86a69)
* [toString](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a46f43be460cbd0d90493a6f9f26eb65d)

<a id="interfaceModelCenter_1_1IVariable_1a3f6325a128422d445705553f11563904"></a>
### Function fromString

![][public]

```
void ModelCenter::IVariable::fromString(BSTR value)
```



Sets the value of the variable from the specified string.






**Parameters**:

* **value**: New value.



**Parameters**:

* BSTR **value**

**Return type**: void

**Reimplemented by**:

* [fromString](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a97b06c86c2783603221e0b0215dc75c8)
* [fromString](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1af5d6c192774673f4f4bf7514b35f8ccf)
* [fromString](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a8b9fd88143b7b23e5f3ae9e229774a2b)
* [fromString](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a3faefed33c99ee3ffb10b5e0e21d239a)
* [fromString](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a1128d6c344adde4e9f9d95b0c19f87b9)
* [fromString](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1aca195574fffbfac6577eb4b0d54f3dd8)
* [fromString](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1ab107312b8a5b1e8e96ae2a3678ef9897)
* [fromString](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1ac7654e743af45785904858d2c581058d)
* [fromString](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a710bd007c2d1df9c861a33a397c7a9d7)
* [fromString](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1af3d5cd8601c1227d439b7b3f74cc2d16)
* [fromString](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a180292624fd43a95348bd496b0fee8a6)
* [fromString](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a9cb9dab871b4e86ed66fb53cc5473ebd)
* [fromString](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1aa52a8fe2a76861302ee8ab0f8f3a614c)
* [fromString](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a65a839b63dfb0495f577bf70ca87a320)
* [fromString](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a587cc7ce24785d0110b86ff815a68d89)

<a id="interfaceModelCenter_1_1IVariable_1a5e66075d2bff0f7de435056cdc6c011e"></a>
### Function toStringAbsolute

![][public]

```
BSTR ModelCenter::IVariable::toStringAbsolute()
```



Converts the value of the variable to a string.






**Returns**:

The value of the variable as a string.



**Return type**: BSTR

**Reimplemented by**:

* [toStringAbsolute](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ad5ecd4799e995bf2c97015c718606550)
* [toStringAbsolute](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1aa07f73fa1f449045d77725b0fef00739)
* [toStringAbsolute](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ad3fdc29d883580eaf57b83a7b796c703)
* [toStringAbsolute](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1adbd82fbad4622d8c2d91533d536a7ea0)
* [toStringAbsolute](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a89797e61eedee333bd67b55b653ec21f)
* [toStringAbsolute](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1af042cdd3c4908daa767f6b0dce043e75)
* [toStringAbsolute](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1ac8f43fca8b974b224bd64a78bd3bdda3)
* [toStringAbsolute](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a0dda099769e13bdd8c5c076fc7d9378a)
* [toStringAbsolute](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a711f2c70a30362b587b39f5cd3775f71)
* [toStringAbsolute](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a5bc139ce096dbc917734386869a3be78)
* [toStringAbsolute](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1ac13b9c8e85a30831a81cedcdca610e01)
* [toStringAbsolute](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a1a0ecbbccb3fe3404c79976e9f07b8db)
* [toStringAbsolute](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a510fd4577f2a29cf0fef6d1c8fe43c94)
* [toStringAbsolute](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1adfb1dee0a1fd5b541eacba1e4cbba7ad)
* [toStringAbsolute](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1ae9ed673188c2c46e2c3883cdd65b3af5)

<a id="interfaceModelCenter_1_1IVariable_1addc5f809058b5573390f62d34b5f5498"></a>
### Function invalidate

![][public]

```
void ModelCenter::IVariable::invalidate()
```



Marks the variable as invalid (needs to be computed). This will set all dependent variables invalid also.



**Return type**: void

**Reimplemented by**:

* [invalidate](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1abfaa3f2b5bff1412199f5014ca10c4d5)
* [invalidate](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a04e162fdfae6e99e6dcfd926adfca7b1)
* [invalidate](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a1eecc6708b4fb8e29bfe73ead410adaa)
* [invalidate](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a032e132c6c6a61f81370942921ab2edf)
* [invalidate](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a9abf6ea522bbff16d7c2266202b5bdae)
* [invalidate](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1aff411bdfa6a95ccc904878f1ffecba6b)
* [invalidate](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a7599948212f77bb66f8ef42fc98e53ce)
* [invalidate](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a2beb5e20db0843a92acf8d0cc961e3af)
* [invalidate](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1ac80cc84f95b559145c98a82367649d89)
* [invalidate](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a521514c594a1ab4e30669305585530b7)
* [invalidate](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a07f62e68cae660a8bea1d1e31d754fcf)
* [invalidate](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a56ea1d83eb42dda4a7c06b6fbbf6ffd5)
* [invalidate](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a3a460ef81527173ce0c272d2bdf69da6)
* [invalidate](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1ac6dd084c61d7ce2631d207242eca89bf)
* [invalidate](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a7b29d24168420440191f35e6ad382d03)

<a id="interfaceModelCenter_1_1IVariable_1a655ce10f3a6e2839f11161e8bf13b0c2"></a>
### Function directPrecedents

![][public]

```
LPDISPATCH ModelCenter::IVariable::directPrecedents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

**Reimplemented by**:

* [directPrecedents](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a0367bcfe5c12848d1d10e1266a0a868e)
* [directPrecedents](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a605c25813e75d1709e364eef080f68e9)
* [directPrecedents](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ae54cdcd132e22278b8ddb00aaff236c7)
* [directPrecedents](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a3ab4fe76950c76fbdd2e76ea3f4fb08b)
* [directPrecedents](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a7a14b5ef10935109b178062205b91b7a)
* [directPrecedents](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1aac5eb818fb62f131d6ecb13fd3f6aa34)
* [directPrecedents](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a9f84f73f3b65f16fa507678c53c67527)
* [directPrecedents](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1aea8561351c3ff1e003d463616682a838)
* [directPrecedents](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a8294d8120195193f3a5fba86abcded57)
* [directPrecedents](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1ae3879cd50b0512f2b5660765393bd24e)
* [directPrecedents](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a5c99fbda3111d689db126a61e0727106)
* [directPrecedents](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1aa8041fca418266f2bee129804654abab)
* [directPrecedents](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a0e11aede2642dd050f0c5254a36b4a71)
* [directPrecedents](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a40c76b900187ef244f14c5c8e9bb65bf)
* [directPrecedents](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a98031c7081831a57f35dcfd18bef2279)

<a id="interfaceModelCenter_1_1IVariable_1a64c800317037f03a43c8522061885835"></a>
### Function directDependents

![][public]

```
LPDISPATCH ModelCenter::IVariable::directDependents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

**Reimplemented by**:

* [directDependents](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a834a8ad8bfec0c4b0220b21979e82fca)
* [directDependents](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a6ed20fe44044c682471c7066ae2bd303)
* [directDependents](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a40dedf6b7b841a6699d545ea058ad2cd)
* [directDependents](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1afe14e74990edda2c656035bbcd8e2af2)
* [directDependents](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a6178082dc3de5e1f6665f4faebcb8c36)
* [directDependents](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1af1b4238d92307aa3586b4f7070e497be)
* [directDependents](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1ab61572acbd0617f5c51b04b2ae4bbdba)
* [directDependents](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a9347c073e1dc6ca62f1b3c7cd6fbec71)
* [directDependents](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a06be08cd5896250dc5b31ec3d90b79e6)
* [directDependents](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a44b3a3cc73cd46ea7661e776b20b4ded)
* [directDependents](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1ad783a3a7e231dd0aa00b869699a5bca4)
* [directDependents](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a862a4306dbf867e3db316d9547cea277)
* [directDependents](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a24fa52bf29a92c4f1d6a79e2991e9ae5)
* [directDependents](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a4820176e7ca9e1c3173d602308144c62)
* [directDependents](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a6cd07e865097669f307d3d8ee9ace1c1)

<a id="interfaceModelCenter_1_1IVariable_1a9d52333bc9a07146e23124f0fe95db6f"></a>
### Function precedentLinks

![][public]

```
LPDISPATCH ModelCenter::IVariable::precedentLinks([optional]VARIANT reserved)
```



Returns a list of links that are immediate precedents to the value of this variable. All the returned links will have this variable as the LHS of the equation. Except for arrays, the returned list will be 1 element long.






**Parameters**:

* **reserved**: Reserved for future use.


**Returns**:

IDispatch* to an [IVariableLinks](interfaceModelCenter_1_1IVariableLinks.md#interfaceModelCenter_1_1IVariableLinks) object.



**Parameters**:

* _[optional]_ VARIANT **reserved**

**Return type**: LPDISPATCH

**Reimplemented by**:

* [precedentLinks](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a8f2364939bd5efaab13ecdbc3cb7df51)
* [precedentLinks](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a428a6e6a2a2be52d77bfe96323fea64f)
* [precedentLinks](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1ab5b740c028c3b878f1341efea2df0116)
* [precedentLinks](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a640715d1e272c8f15d8cc4c2b466d990)
* [precedentLinks](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a8bf056e8b989223191b2e8c7595c0753)
* [precedentLinks](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1a25a478d55d4855cdbf4f8753b6cd6062)
* [precedentLinks](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a998c2f1327219560aacd3d65d2c178b6)
* [precedentLinks](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a4bc52bbf01e5d0a0f95e67e03cce4547)
* [precedentLinks](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a42168bcdab0805055df8432194d5654c)
* [precedentLinks](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1ac71c9a184e57f627b336438de0b7a238)
* [precedentLinks](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a02a977781b36247895725b38a725dca9)
* [precedentLinks](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a084d49d02b9ff5812166721fcdc86018)
* [precedentLinks](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ac4f846dce2494b7c4a9b8482af321c96)
* [precedentLinks](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a19c1ae9d08b968bae4b6fdd1ec74fc3e)
* [precedentLinks](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a6fcaecc0f0d1bdbd827e507ae1307fa4)

<a id="interfaceModelCenter_1_1IVariable_1a1e52cc38574fbdf83e9dba836dfc5959"></a>
### Function dependentLinks

![][public]

```
LPDISPATCH ModelCenter::IVariable::dependentLinks([optional]VARIANT reserved)
```



Returns a list of links that immediately depend on the value of this variable. All the returned links will have this variable as part of a RHS equation.






**Parameters**:

* **reserved**: Reserved for future use.


**Returns**:

IDispatch* to an [IVariableLinks](interfaceModelCenter_1_1IVariableLinks.md#interfaceModelCenter_1_1IVariableLinks) object.



**Parameters**:

* _[optional]_ VARIANT **reserved**

**Return type**: LPDISPATCH

**Reimplemented by**:

* [dependentLinks](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1aecc2dc18b0ee43d5175503d44ca259c3)
* [dependentLinks](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1abadb81820fd0b415fa9e78ce6c867c55)
* [dependentLinks](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a69e716f024970454d8c555c73df17360)
* [dependentLinks](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a0201276e7d000c4869e4798cfdb68d8b)
* [dependentLinks](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a385019a97e3ddbae4351fd6dd591a49c)
* [dependentLinks](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1af52780ea6b4984f40b16c8c072e1b005)
* [dependentLinks](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a90373b06919789f06f52dd22a0339847)
* [dependentLinks](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a46a1da5e2a3f39c2e413b520ec33407f)
* [dependentLinks](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a50e3d7ea1d97cd799c29901c2b563208)
* [dependentLinks](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a399b9b49ca3133d2a49923637f19609a)
* [dependentLinks](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a1328684b4767a3ee6b006feca4f0296d)
* [dependentLinks](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1add9bd8c41cd4a5c77f7e762768b441a5)
* [dependentLinks](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a4c704741da375408b052eeddc6ed90dc)
* [dependentLinks](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a4227d6aca4e2d7791cea69efeb5b81fd)
* [dependentLinks](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a019771c2e685c90ef2b4f53a0a3acf7c)

<a id="interfaceModelCenter_1_1IVariable_1ad1f5d5ba3e96e9c2fab7a4b0d6c4df36"></a>
### Function precedents

![][public]

```
LPDISPATCH ModelCenter::IVariable::precedents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

**Reimplemented by**:

* [precedents](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1ab185a76064278e30ee48682164364e72)
* [precedents](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a9d7349a2273e5b9eaaab5271918eed6f)
* [precedents](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1aa43bd8ee475029fc466b20cd3b1b686d)
* [precedents](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a5973cfc6b1e41db214568a7e95979eef)
* [precedents](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1ac65d0d53de6aee17106700d60161e9cf)
* [precedents](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1a8c987c7df5766ca31115f25ce36f1f91)
* [precedents](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1abf61619be1e057cf2c42189456169041)
* [precedents](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a8db95046419c83467475175b216efe84)
* [precedents](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a6d516295359de158c45bf2a5c0378af0)
* [precedents](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a01bd8fce84abbb243a9f7e3c771c185c)
* [precedents](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a902fe35d10c8e25b86a64e13953a62f1)
* [precedents](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1aea1973c58e45bafe3aeea797b91a4f6b)
* [precedents](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ae2d07bb6bf73c064a1a492bb6ff2806a)
* [precedents](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a913272799193e5d02033c63c746ead9e)
* [precedents](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a4affcdc7391a9327db4c828e54c71703)

<a id="interfaceModelCenter_1_1IVariable_1a6f42f3176eb8fa2fbf9ca1b9a01fc7ce"></a>
### Function dependents

![][public]

```
LPDISPATCH ModelCenter::IVariable::dependents([optional]VARIANT followSuspended, [optional]VARIANT reserved)
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

**Reimplemented by**:

* [dependents](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a7cb300d678991e0b6449ad7b0d004906)
* [dependents](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a386477ffe54e2d0f351f9dc7fbb49712)
* [dependents](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1afa6ea6f99c9eeb606ebe08b1e7d9c54d)
* [dependents](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a6e0601946499c985be03e00354c8acb3)
* [dependents](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a04becbe1d34e232e21208333c0700e3c)
* [dependents](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1ae106e94dca5f19c46ed9f82c67772660)
* [dependents](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1af16a20eacc6734b343762565ec8b20d6)
* [dependents](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1ac63897b5927f1ad28965384718c0de6b)
* [dependents](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1ab110babf06372919f705e71b64cc733f)
* [dependents](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1af6712999aa6e50091a95dd66db088661)
* [dependents](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1aa8739ff163a52ceed99e867e5126330f)
* [dependents](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a7a3b136537fb09914b87b5997b937df0)
* [dependents](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1aceffce4238d22a19c211658f675491ee)
* [dependents](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a392d8e4080854c954c165833bb89a7db)
* [dependents](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a6ce38d07c0dc470d96eec4077c2c38b8)

<a id="interfaceModelCenter_1_1IVariable_1a81ddff978026124a52063b1fad430b27"></a>
### Function isInputToComponent

![][public]

```
boolean ModelCenter::IVariable::isInputToComponent()
```



Checks whether or not the variable is an input. Returns true if the variable was originally added as an input, ignoring the current state that can change based off of links.






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplemented by**:

* [isInputToComponent](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a74e3e9729c8de2d3d091a6f22f7cb45b)
* [isInputToComponent](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a871c46c1f732b2885e2ef1fa2080a3e8)
* [isInputToComponent](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1af27600cef7dfba2a97acbeb31e2bbe43)
* [isInputToComponent](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a86e51010b5f7765c036af36bd9452622)
* [isInputToComponent](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a18112e5a20ca1711e97f8a5514995a49)
* [isInputToComponent](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1aff062edf68ee2b0ff7db9b81cba0899a)
* [isInputToComponent](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a29e9bceef09e96ad83ce6c0618eb17dd)
* [isInputToComponent](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a8ca654408734e709fddeb945e81a5d29)
* [isInputToComponent](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a3223f3e2305da64ecb24530ed3e1652f)
* [isInputToComponent](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a2a19aa7ca1e4c4fb862016aede378c05)
* [isInputToComponent](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a67665668e8c1abee8bc9db708b05e970)
* [isInputToComponent](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a317b7b47fa55798e212c426b4ac8f014)
* [isInputToComponent](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ac551ae6997c725cbb3ef71bd6217f89a)
* [isInputToComponent](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1ad59d273bea1a7e02540520e9b4428264)
* [isInputToComponent](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a940488ff3ad42baa064349a43fe9eac6)

<a id="interfaceModelCenter_1_1IVariable_1a0bd883d3757e361b75e0f81627e6ce98"></a>
### Function isInputToModel

![][public]

```
boolean ModelCenter::IVariable::isInputToModel()
```



Checks whether or not the variable is an input. A linked input returns false (Output).






**Return values**:

* **true**: Input
* **false**: Output



**Return type**: boolean

**Reimplemented by**:

* [isInputToModel](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a87cc3a01fd30ce7c6380b5d1d6ff7df9)
* [isInputToModel](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a364726a017aca71bdb22d43530cc9426)
* [isInputToModel](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a38875f7d7b47980f4d78d76a449bbb01)
* [isInputToModel](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a78d5b37b715d259e29e0de79fa58508d)
* [isInputToModel](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a34bbd8b682a39cbe120f972f0be7b1cd)
* [isInputToModel](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1aa0e5a61596a334437a407396c4a38e44)
* [isInputToModel](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1accf93e4a9fe2c9eb205ccdf1704f3f9e)
* [isInputToModel](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a7bd0dbfb0063987f2484dce0cd61c8d1)
* [isInputToModel](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a324e6df2e0d789abb14a6ab9bbabb119)
* [isInputToModel](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a41c321c0260174a4c118e309fbd13085)
* [isInputToModel](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1a87d3f8de3185380e368fdb008466dfe3)
* [isInputToModel](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a2d16dbc50ee0f77d5ca99b8a600e5023)
* [isInputToModel](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1ad8a6169868d4d186b658946403eae2ab)
* [isInputToModel](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1af1da4c99c6359d527ad57c9433333a36)
* [isInputToModel](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1a52f14ae0f304152748e0373e91701708)

<a id="interfaceModelCenter_1_1IVariable_1af7cbf8f2c8d128c760fb09254819bf64"></a>
### Function setMetadata

![][public]

```
void ModelCenter::IVariable::setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive)
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

**Reimplemented by**:

* [setMetadata](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a8b1a6f24260a22b01e738ed2fb1d4523)
* [setMetadata](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1a772ffc624a737a4808eb8dfc9ff41e0d)
* [setMetadata](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a6771c11a9e1388bc4da11b9fae91e2e8)
* [setMetadata](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a56d1d2b85ec3b4c43589c25887c1dd95)
* [setMetadata](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a499a962844cae63886b79779e39db700)
* [setMetadata](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1a1d611e44da36abed0a41c6f688344841)
* [setMetadata](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1a46a06089e51539cdb69a6404db042d28)
* [setMetadata](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1ad532913f25d0b0d02cc2c27105e7ecc8)
* [setMetadata](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a3c257357cc786dc18d4187d14b030813)
* [setMetadata](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1ae69f586d5f6a7cf93728f99a47b841cf)
* [setMetadata](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1ad80d2a2e770297e5e57af0cd86601f83)
* [setMetadata](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1a31e14e94dd9316f40bf963a9da9939f7)
* [setMetadata](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1afee8a9cb2ea3d6728cacba4aeaa9ff7a)
* [setMetadata](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1a495551c5a05027a8537ffce75f333f8e)
* [setMetadata](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1ac5062f1a9bcf780f891c6abeb0bcb391)

<a id="interfaceModelCenter_1_1IVariable_1a610297790a8c506c339586740f1d3022"></a>
### Function getMetadata

![][public]

```
VARIANT ModelCenter::IVariable::getMetadata(BSTR name)
```



Gets the meta data value of the given meta data key name.






**Parameters**:

* **name**: Metadata key name.


**Returns**:

Metadata value.



**Parameters**:

* BSTR **name**

**Return type**: VARIANT

**Reimplemented by**:

* [getMetadata](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray_1a53f2d3f772584c3c43341ff4236402c9)
* [getMetadata](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray_1aa6b44db219dbaf49be81841dc459f4ae)
* [getMetadata](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable_1a74eae8f0c59826ea05228abfc9a9354a)
* [getMetadata](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray_1a1a41489453d177315ae18ef464e8907b)
* [getMetadata](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable_1a40ecee96822db8b700fe1a814b2ab3b1)
* [getMetadata](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable_1a6fe6bbfed4b08df8c9f9a4c86cb49ca5)
* [getMetadata](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray_1ae315b5cc3acb88a2edabaa8eea7a6690)
* [getMetadata](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable_1a730717369f8ddb8fccfcb3405c56afe3)
* [getMetadata](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable_1a9fa5015afd1b3cdd651ce2a0e093a6f6)
* [getMetadata](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray_1a76933c6f159d52907c0b9f6ba3d13136)
* [getMetadata](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable_1aea17e7f7dc6d8979c2c83aec3f8a0c42)
* [getMetadata](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray_1ac6becc1bb1c5206e972c266164f838ca)
* [getMetadata](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable_1a122afef9ff20a0de02d08ab41eb4e5bb)
* [getMetadata](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray_1ac730dc0fbfc8ae56788048e6c0fb80fa)
* [getMetadata](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable_1aa094d1b1e7b20a631c92c9ec9d936d71)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)