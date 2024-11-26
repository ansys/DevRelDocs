# Interface ModelCenter::IComponent

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1120)



COM Instance.

**Inherited by**:

* [ModelCenter::IIfComponent](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent)
* [ModelCenter::IScriptComponent](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent)

## Members

* [AssociatedFiles](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1aecece7b57424f027ba567415051d3bb5)
* [downloadValues](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a761c665246557b5b4201873a722d6fed)
* [getFullName](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a9309a89032b2d7d28baf279a3b76b5e8)
* [getMetadata](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a2bd6e585619f4cd76426932b62dcf60a)
* [getName](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a19763f04596904ff5cab2f4f72f6f501)
* [getPositionX](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a0c3e0c952584ba25801114e01010eab0)
* [getPositionY](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1ad3da2b98a973112ea897cf3b146f0276)
* [getSource](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a7ee6752f95f3bdfbe83132a3a7794cb2)
* [getType](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a04395c5a8d6ceff26ae08e6c001bdd45)
* [getVariable](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1afb270ae53383589c63f87b4e3385f128)
* [Groups](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a4393774e2d80bd06dfe8070ef87b146f)
* [IndexInParent](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1aafafc5168a78769e88de4505174b0daf)
* [invalidate](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a73c230184c72f5abcb7d3af5f91c9d1e)
* [invokeMethod](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1afaddb2c21be03b26716594af883a51ee)
* [ParentAssembly](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a2da9bef2e46c87080698e624d80710f0)
* [reconnect](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a44d641cc9d4a797f88e56495c466479c)
* [rename](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a9cae71e48e01e94d48c0353d3db4d90c)
* [run](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1adf60ad0c84852250f14d27cfa689d8d0)
* [setMetadata](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1a41eb816b08e0e89739822ba87e5416c6)
* [show](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1aa35c0fb45f677b3c2daf475e53107773)
* [userData](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1ae7e1acce8fef11c88ba939aba11604ee)
* [Variables](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent_1aad57025fe620abbaae1543962ed2676c)

## Properties

<a id="interfaceModelCenter_1_1IComponent_1aad57025fe620abbaae1543962ed2676c"></a>
### Property Variables

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IComponent::Variables
```



Pointer to the variables in the Component.






**Returns**:

IDispatch* to an [IVariables](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables) object.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IComponent_1a4393774e2d80bd06dfe8070ef87b146f"></a>
### Property Groups

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IComponent::Groups
```



Pointer to the Groups in the Component.






**Returns**:

IDispatch* to an [IGroups](interfaceModelCenter_1_1IGroups.md#interfaceModelCenter_1_1IGroups) object.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IComponent_1ae7e1acce8fef11c88ba939aba11604ee"></a>
### Property userData

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IComponent::userData
```



An arbitrary Variant which is not used internally by ModelCenter but can store data for programmatic purposes. Value is not stored across file save/load.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IComponent_1aecece7b57424f027ba567415051d3bb5"></a>
### Property AssociatedFiles

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IComponent::AssociatedFiles
```



A set of files associated with the Component.






**Returns**:

Variant containing the list of associated files (string or array of strings)



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IComponent_1aafafc5168a78769e88de4505174b0daf"></a>
### Property IndexInParent

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
int ModelCenter::IComponent::IndexInParent
```



Position of this component in the parent Assembly.



**Return type**: int

<a id="interfaceModelCenter_1_1IComponent_1a2da9bef2e46c87080698e624d80710f0"></a>
### Property ParentAssembly

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
LPDISPATCH ModelCenter::IComponent::ParentAssembly
```



Parent assembly to this component.






**Returns**:

IDispatch* to an [IAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly) object.



**Return type**: LPDISPATCH

## Public functions

<a id="interfaceModelCenter_1_1IComponent_1a19763f04596904ff5cab2f4f72f6f501"></a>
### Function getName

![][public]

```
BSTR ModelCenter::IComponent::getName()
```



Gets the name of the Component.






**Returns**:

The name of the Component.



**Return type**: BSTR

**Reimplemented by**:

* [getName](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a97c817507e162f9422b2f73ab5c8cef1)
* [getName](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1a88c3162ff460faee36d43d3903c7a498)

<a id="interfaceModelCenter_1_1IComponent_1a9309a89032b2d7d28baf279a3b76b5e8"></a>
### Function getFullName

![][public]

```
BSTR ModelCenter::IComponent::getFullName()
```



Gets the full [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) path of the Component.






**Returns**:

the full ModelCenter path of the Component.



**Return type**: BSTR

**Reimplemented by**:

* [getFullName](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a5766e80ec09baf80e3ad7c28e4dd3bd4)
* [getFullName](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1a7e4a9eb5127e60bfbbd90640e35b32a7)

<a id="interfaceModelCenter_1_1IComponent_1adf60ad0c84852250f14d27cfa689d8d0"></a>
### Function run

![][public]

```
void ModelCenter::IComponent::run()
```



Runs the Component.



**Return type**: void

**Reimplemented by**:

* [run](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a7891e5012feff9e7bbdec3bde6adb8e6)
* [run](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1afcc83d74aabc7ddd66da4fccb708f0e9)

<a id="interfaceModelCenter_1_1IComponent_1a7ee6752f95f3bdfbe83132a3a7794cb2"></a>
### Function getSource

![][public]

```
BSTR ModelCenter::IComponent::getSource()
```



Gets the source of the Component.






**Returns**:

The source of the Component.



**Return type**: BSTR

**Reimplemented by**:

* [getSource](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1ae4cad8560e705e807f793a2dade750e2)
* [getSource](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1a3dc2690409dd67fc5b3023e50d7abed0)

<a id="interfaceModelCenter_1_1IComponent_1afaddb2c21be03b26716594af883a51ee"></a>
### Function invokeMethod

![][public]

```
void ModelCenter::IComponent::invokeMethod(BSTR method)
```



Invokes one of the Component's methods.






**Parameters**:

* **method**: The name of the method to invoke.



**Parameters**:

* BSTR **method**

**Return type**: void

**Reimplemented by**:

* [invokeMethod](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a583b809498c69beadd39c1e21e2cebab)
* [invokeMethod](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1a03484bf5c7636d2015b3b11c3849ac30)

<a id="interfaceModelCenter_1_1IComponent_1a73c230184c72f5abcb7d3af5f91c9d1e"></a>
### Function invalidate

![][public]

```
void ModelCenter::IComponent::invalidate()
```



Invalidates the Component and all of its variables.



**Return type**: void

**Reimplemented by**:

* [invalidate](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a78101d039853db9e2d989edef97f226b)
* [invalidate](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1a70b40fcdb20ca2991b3db649f77eb55f)

<a id="interfaceModelCenter_1_1IComponent_1a44d641cc9d4a797f88e56495c466479c"></a>
### Function reconnect

![][public]

```
void ModelCenter::IComponent::reconnect()
```



Reconnect a Component.



**Return type**: void

**Reimplemented by**:

* [reconnect](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a67e294fa372905721460635514adcd35)
* [reconnect](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1a716d694026d6ef45a78ab51a8d1f6eae)

<a id="interfaceModelCenter_1_1IComponent_1a761c665246557b5b4201873a722d6fed"></a>
### Function downloadValues

![][public]

```
void ModelCenter::IComponent::downloadValues()
```



Downloads the component's variable values from [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) Remote Execution, if it's a MCRE component.



**Return type**: void

**Reimplemented by**:

* [downloadValues](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a610d24ca2e023e09194b29c3115c6d84)
* [downloadValues](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1ae380bd13a2c92b3392432f879e87baf2)

<a id="interfaceModelCenter_1_1IComponent_1afb270ae53383589c63f87b4e3385f128"></a>
### Function getVariable

![][public]

```
LPDISPATCH ModelCenter::IComponent::getVariable(BSTR name)
```



Gets the Variable by the specified name.






**Parameters**:

* **name**: The name of the variable to retrieve in dotted notation relative to the Component.


**Returns**:

IDispatch* to an [IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable) object.



**Parameters**:

* BSTR **name**

**Return type**: LPDISPATCH

**Reimplemented by**:

* [getVariable](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1af46fd2a7e5dda89d73e347b2fff75d16)
* [getVariable](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1ad88148c419a4c75c4c79b9d5e3c41eb6)

<a id="interfaceModelCenter_1_1IComponent_1a9cae71e48e01e94d48c0353d3db4d90c"></a>
### Function rename

![][public]

```
void ModelCenter::IComponent::rename(BSTR name)
```



Renames the current Component.






**Parameters**:

* **name**: New name of the Component.



**Parameters**:

* BSTR **name**

**Return type**: void

**Reimplemented by**:

* [rename](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1ae64ae2e0082f2379391e6a49d5e57192)
* [rename](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1a775db6663f994e82bb2529efe6585c8d)

<a id="interfaceModelCenter_1_1IComponent_1a04395c5a8d6ceff26ae08e6c001bdd45"></a>
### Function getType

![][public]

```
BSTR ModelCenter::IComponent::getType()
```



Gets the type of the component. Valid types include:
* Component

* Assembly

* Sequence

* If

* Parallel

* Empty

* ForEach








**Returns**:

The type of the component.



**Return type**: BSTR

**Reimplemented by**:

* [getType](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a9cbf40ea5229f4240bdb241e8d88329c)
* [getType](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1a551d15c4f328f341d8cba0fe28bfd2b0)

<a id="interfaceModelCenter_1_1IComponent_1aa35c0fb45f677b3c2daf475e53107773"></a>
### Function show

![][public]

```
void ModelCenter::IComponent::show()
```



Show the GUI form associated with the component, if any.



**Return type**: void

**Reimplemented by**:

* [show](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a344fe33286c0d548dfb35b472cfcc1d6)
* [show](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1ad7d6f94d38270f36b80ed3c0109312dd)

<a id="interfaceModelCenter_1_1IComponent_1a41eb816b08e0e89739822ba87e5416c6"></a>
### Function setMetadata

![][public]

```
void ModelCenter::IComponent::setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive)
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

<a id="interfaceModelCenter_1_1IComponent_1a2bd6e585619f4cd76426932b62dcf60a"></a>
### Function getMetadata

![][public]

```
VARIANT ModelCenter::IComponent::getMetadata(BSTR name)
```



Gets the meta data value of the given meta data key name.






**Parameters**:

* **name**: Metadata key name.


**Returns**:

Metadata value.



**Parameters**:

* BSTR **name**

**Return type**: VARIANT

## Private functions

<a id="interfaceModelCenter_1_1IComponent_1a0c3e0c952584ba25801114e01010eab0"></a>
### Function getPositionX

![][private]

```
int ModelCenter::IComponent::getPositionX()
```







**Return type**: int

**Reimplemented by**:

* [getPositionX](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a205b99507e64a1ad621ee6aeb6cd6d0c)
* [getPositionX](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1aa032eb6b3c27a69052a8eb81053dfc34)

<a id="interfaceModelCenter_1_1IComponent_1ad3da2b98a973112ea897cf3b146f0276"></a>
### Function getPositionY

![][private]

```
int ModelCenter::IComponent::getPositionY()
```







**Return type**: int

**Reimplemented by**:

* [getPositionY](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent_1a6cddb9b21c6b3b60a23f2a28d60ea17a)
* [getPositionY](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent_1a7b5ce3f6ce5bfd44702ff1fb874fb9fd)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)