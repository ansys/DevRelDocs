# Interface ModelCenter::IAssembly

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 669)



COM Instance.

## Members

* [addAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a1a55454ec16eadd67d23a8e134fccce7)
* [addAssembly2](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a1c73a3675ee4a70e9b31d2f63c86e630)
* [addVariable](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1af05ab7c452794c56cc54d77113cefdea)
* [Assemblies](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a00afe3dedbc3bb8b8a1cbdf5bd6333a1)
* [AssemblyType](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a12692b24f7c9fceec97847b204afecc4)
* [Components](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1ad4c0ef9792a2f760b3639357126e56f6)
* [convertToSubmodel](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1afc8d8acd50c53726272ce0c983aa640f)
* [deleteVariable](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a92a8b6a732ebcd29f6fb33a448f9f4c9)
* [getFullName](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1aa62ac6d1100f85d3f212185812a9e517)
* [getMetadata](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1ad0ea6a9bc76c34b8158454e27bbfd9b8)
* [getName](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a4b41d24972378517a23efafc6a0fc403)
* [getPositionX](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a476766c4bdcb9fb07f1fdd0a12a04ac0)
* [getPositionY](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1ab58695afb7a8ecb8202a1b20011d384a)
* [Groups](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a1e5ca5f83e7c3debe3d63366948ad894)
* [iconID](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1af8ddf59c545db7695b90a2a64bdcc822)
* [IndexInParent](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a6e888824a16134a6797ec96745c9dd4f)
* [ParentAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a8cccd51f677c2d7c29c734a2c1009f45)
* [rename](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1ac180bc4a2120cd22964998c75eed05f5)
* [setMetadata](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1aa1e66114f498d0a1238237ad6caa1348)
* [userData](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1af405572d6c2bafc56164b2ce5b97b1a3)
* [Variables](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly_1a88d34960f336b71cc7f4beff3b4bbaba)

## Properties

<a id="interfaceModelCenter_1_1IAssembly_1a88d34960f336b71cc7f4beff3b4bbaba"></a>
### Property Variables

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IAssembly::Variables
```



Pointer to the variables in the Assembly.






**Returns**:

IDispatch* to an [IVariables](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables) object.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IAssembly_1a1e5ca5f83e7c3debe3d63366948ad894"></a>
### Property Groups

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IAssembly::Groups
```



Pointer to the Groups in the Assembly.






**Returns**:

IDispatch* to an [IGroups](interfaceModelCenter_1_1IGroups.md#interfaceModelCenter_1_1IGroups) object.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IAssembly_1a00afe3dedbc3bb8b8a1cbdf5bd6333a1"></a>
### Property Assemblies

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IAssembly::Assemblies
```



Pointer to the Assemblies in the Assembly.






**Returns**:

IDispatch* to an [IAssemblies](interfaceModelCenter_1_1IAssemblies.md#interfaceModelCenter_1_1IAssemblies) object.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IAssembly_1ad4c0ef9792a2f760b3639357126e56f6"></a>
### Property Components

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IAssembly::Components
```



Pointer to the Components in the Assembly.






**Returns**:

IDispatch* to an [IComponents](interfaceModelCenter_1_1IComponents.md#interfaceModelCenter_1_1IComponents) object.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IAssembly_1af8ddf59c545db7695b90a2a64bdcc822"></a>
### Property iconID

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
int ModelCenter::IAssembly::iconID
```



The ID number of the icon to use for the Assembly.



**Return type**: int

<a id="interfaceModelCenter_1_1IAssembly_1a6e888824a16134a6797ec96745c9dd4f"></a>
### Property IndexInParent

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
int ModelCenter::IAssembly::IndexInParent
```



Gets the position of the Assembly within the parent.



**Return type**: int

<a id="interfaceModelCenter_1_1IAssembly_1a8cccd51f677c2d7c29c734a2c1009f45"></a>
### Property ParentAssembly

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
LPDISPATCH ModelCenter::IAssembly::ParentAssembly
```



Gets the parent of assembly of this assembly.






**Returns**:

IDisplatch* to an [IAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly) object.



**Return type**: LPDISPATCH

<a id="interfaceModelCenter_1_1IAssembly_1a12692b24f7c9fceec97847b204afecc4"></a>
### Property AssemblyType

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IAssembly::AssemblyType
```



Gets the type of the Assembly (Sequence, Assembly, etc).



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IAssembly_1af405572d6c2bafc56164b2ce5b97b1a3"></a>
### Property userData

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IAssembly::userData
```



An arbitrary Variant which is not used internally by ModelCenter but can store data for programmatic purposes. Value is not stored across file save/load.



**Return type**: VARIANT

## Public functions

<a id="interfaceModelCenter_1_1IAssembly_1a4b41d24972378517a23efafc6a0fc403"></a>
### Function getName

![][public]

```
BSTR ModelCenter::IAssembly::getName()
```



Name of the Assembly.






**Returns**:

The name of the Assembly.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IAssembly_1aa62ac6d1100f85d3f212185812a9e517"></a>
### Function getFullName

![][public]

```
BSTR ModelCenter::IAssembly::getFullName()
```



Full [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) path of the Assembly.






**Returns**:

The full ModelCenter path of the Assembly.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IAssembly_1a1a55454ec16eadd67d23a8e134fccce7"></a>
### Function addAssembly

![][public]

```
IDispatch * ModelCenter::IAssembly::addAssembly(BSTR name, [optional]VARIANT assemblyType)
```



This method creates a sub-Assembly in the current Assembly object.






**Parameters**:

* **name**: The name of the sub-Assembly to create.
* **assemblyType**: <br/>


**Returns**:

IDispatch* to an [IAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly) object.



**Parameters**:

* BSTR **name**
* _[optional]_ VARIANT **assemblyType**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IAssembly_1af05ab7c452794c56cc54d77113cefdea"></a>
### Function addVariable

![][public]

```
IDispatch * ModelCenter::IAssembly::addVariable(BSTR name, BSTR type)
```



Creates a variable for the current Assembly.






**Parameters**:

* **name**: Name of the new variable to create.
* **type**: Type of the new variable. Possible types are:
* double

* int

* boolean

* string

* file

* double[]

* int[]

* boolean[]

* string[]

* quadfacet

* surfaceofrevolution

* nurbs

* bspline

* ruled

* skinned

* vrml

* node


**Returns**:

IDispatch* to an [IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable) object.



**Parameters**:

* BSTR **name**
* BSTR **type**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IAssembly_1ac180bc4a2120cd22964998c75eed05f5"></a>
### Function rename

![][public]

```
void ModelCenter::IAssembly::rename(BSTR name)
```



Renames the current Assembly.






**Parameters**:

* **name**: New name of the Assembly.



**Parameters**:

* BSTR **name**

**Return type**: void

<a id="interfaceModelCenter_1_1IAssembly_1a92a8b6a732ebcd29f6fb33a448f9f4c9"></a>
### Function deleteVariable

![][public]

```
void ModelCenter::IAssembly::deleteVariable(BSTR name)
```



Deletes a variable from the current Assembly.






**Parameters**:

* **name**: Name of the variable to delete.



**Parameters**:

* BSTR **name**

**Return type**: void

<a id="interfaceModelCenter_1_1IAssembly_1a1c73a3675ee4a70e9b31d2f63c86e630"></a>
### Function addAssembly2

![][public]

```
LPDISPATCH ModelCenter::IAssembly::addAssembly2(BSTR name, VARIANT xPos, VARIANT yPos, [optional]VARIANT assemblyType)
```



This method creates a sub-Assembly in the current Assembly with a specific type and position.






**Parameters**:

* **name**: <br/>
* **xPos**: <br/>
* **yPos**: <br/>
* **assemblyType**: <br/>


**Returns**:

IDispatch* to an [IAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly) object.



**Parameters**:

* BSTR **name**
* VARIANT **xPos**
* VARIANT **yPos**
* _[optional]_ VARIANT **assemblyType**

**Return type**: LPDISPATCH

<a id="interfaceModelCenter_1_1IAssembly_1aa1e66114f498d0a1238237ad6caa1348"></a>
### Function setMetadata

![][public]

```
void ModelCenter::IAssembly::setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive)
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

<a id="interfaceModelCenter_1_1IAssembly_1ad0ea6a9bc76c34b8158454e27bbfd9b8"></a>
### Function getMetadata

![][public]

```
VARIANT ModelCenter::IAssembly::getMetadata(BSTR name)
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

<a id="interfaceModelCenter_1_1IAssembly_1a476766c4bdcb9fb07f1fdd0a12a04ac0"></a>
### Function getPositionX

![][private]

```
int ModelCenter::IAssembly::getPositionX()
```







**Return type**: int

<a id="interfaceModelCenter_1_1IAssembly_1ab58695afb7a8ecb8202a1b20011d384a"></a>
### Function getPositionY

![][private]

```
int ModelCenter::IAssembly::getPositionY()
```







**Return type**: int

<a id="interfaceModelCenter_1_1IAssembly_1afc8d8acd50c53726272ce0c983aa640f"></a>
### Function convertToSubmodel

![][private]

```
void ModelCenter::IAssembly::convertToSubmodel(BSTR fileName, VersionStatus versionStatus, BSTR checkinMessage)
```







**Parameters**:

* BSTR **fileName**
* [VersionStatus](namespaceModelCenter.md#namespaceModelCenter_1a1abdd6ad1a16bfaa9539e9a1ccc3c1a0) **versionStatus**
* BSTR **checkinMessage**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)