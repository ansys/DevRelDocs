<a id="namespaceModelCenter"></a>
# Namespace ModelCenter

![][IDL]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 18)



ModelCenter API

## Classes

* [ModelCenter::Application](classModelCenter_1_1Application.md#classModelCenter_1_1Application)
* [ModelCenter::IAddToModel](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel)
* [ModelCenter::IArray](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray)
* [ModelCenter::IAssemblies](interfaceModelCenter_1_1IAssemblies.md#interfaceModelCenter_1_1IAssemblies)
* [ModelCenter::IAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly)
* [ModelCenter::IBooleanArray](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray)
* [ModelCenter::IBooleanVariable](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable)
* [ModelCenter::ICachePin](interfaceModelCenter_1_1ICachePin.md#interfaceModelCenter_1_1ICachePin)
* [ModelCenter::IComponent](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent)
* [ModelCenter::IComponents](interfaceModelCenter_1_1IComponents.md#interfaceModelCenter_1_1IComponents)
* [ModelCenter::ICustomDesignPoint](interfaceModelCenter_1_1ICustomDesignPoint.md#interfaceModelCenter_1_1ICustomDesignPoint)
* [ModelCenter::IDataCollector](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector)
* [ModelCenter::IDataMonitor](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor)
* [ModelCenter::IDoubleArray](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray)
* [ModelCenter::IDoubleVariable](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable)
* [ModelCenter::IFeature](interfaceModelCenter_1_1IFeature.md#interfaceModelCenter_1_1IFeature)
* [ModelCenter::IFileArray](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray)
* [ModelCenter::IFileSystemInfo](interfaceModelCenter_1_1IFileSystemInfo.md#interfaceModelCenter_1_1IFileSystemInfo)
* [ModelCenter::IFileVariable](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable)
* [ModelCenter::IGeometryVariable](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable)
* [ModelCenter::IGlobalParameters](interfaceModelCenter_1_1IGlobalParameters.md#interfaceModelCenter_1_1IGlobalParameters)
* [ModelCenter::IGroup](interfaceModelCenter_1_1IGroup.md#interfaceModelCenter_1_1IGroup)
* [ModelCenter::IGroups](interfaceModelCenter_1_1IGroups.md#interfaceModelCenter_1_1IGroups)
* [ModelCenter::IIfComponent](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent)
* [ModelCenter::IIntegerArray](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray)
* [ModelCenter::IIntegerVariable](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable)
* [ModelCenter::IJobManager](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager)
* [ModelCenter::ILogger](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger)
* [ModelCenter::ILoginCallback](interfaceModelCenter_1_1ILoginCallback.md#interfaceModelCenter_1_1ILoginCallback)
* [ModelCenter::IModelCenter](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter)
* [ModelCenter::INetworkLocations](interfaceModelCenter_1_1INetworkLocations.md#interfaceModelCenter_1_1INetworkLocations)
* [ModelCenter::IObjectVariable](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable)
* [ModelCenter::IPHXFormat](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat)
* [ModelCenter::IRefArrayProp](interfaceModelCenter_1_1IRefArrayProp.md#interfaceModelCenter_1_1IRefArrayProp)
* [ModelCenter::IReferenceArray](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray)
* [ModelCenter::IReferenceVariable](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable)
* [ModelCenter::IRefProp](interfaceModelCenter_1_1IRefProp.md#interfaceModelCenter_1_1IRefProp)
* [ModelCenter::IScriptComponent](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent)
* [ModelCenter::IShowHelpEvents](interfaceModelCenter_1_1IShowHelpEvents.md#interfaceModelCenter_1_1IShowHelpEvents)
* [ModelCenter::IStringArray](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray)
* [ModelCenter::IStringVariable](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable)
* [ModelCenter::ITradeStudyEvents](interfaceModelCenter_1_1ITradeStudyEvents.md#interfaceModelCenter_1_1ITradeStudyEvents)
* [ModelCenter::IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable)
* [ModelCenter::IVariableDescription](interfaceModelCenter_1_1IVariableDescription.md#interfaceModelCenter_1_1IVariableDescription)
* [ModelCenter::IVariableLink](interfaceModelCenter_1_1IVariableLink.md#interfaceModelCenter_1_1IVariableLink)
* [ModelCenter::IVariableLinks](interfaceModelCenter_1_1IVariableLinks.md#interfaceModelCenter_1_1IVariableLinks)
* [ModelCenter::IVariables](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables)
* [ModelCenter::IVizContainer](interfaceModelCenter_1_1IVizContainer.md#interfaceModelCenter_1_1IVizContainer)

## Enumeration types

<a id="namespaceModelCenter_1a59560dc5274b3a18daae06b531055153"></a>
### Enumeration type MetadataType

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 31)

```
enum MetadataType {
  METADATA_TYPE_STRING = 0,
  METADATA_TYPE_DOUBLE = 1,
  METADATA_TYPE_LONG = 2,
  METADATA_TYPE_BOOLEAN = 3,
  METADATA_TYPE_XML = 4,
  METADATA_TYPE_FORCE_TO_32_BITS = 65536
}
```



Type of metadata.



<a id="namespaceModelCenter_1a59560dc5274b3a18daae06b531055153ab0ea415d391c664f7c4c20e41e6a5b5b"></a>
#### Enumerator METADATA\_TYPE\_STRING





<a id="namespaceModelCenter_1a59560dc5274b3a18daae06b531055153a1ef8fb522f41ea233866f7058fde8a23"></a>
#### Enumerator METADATA\_TYPE\_DOUBLE





<a id="namespaceModelCenter_1a59560dc5274b3a18daae06b531055153a7f0cc46935e8f50a3ff7125e9ccac82a"></a>
#### Enumerator METADATA\_TYPE\_LONG





<a id="namespaceModelCenter_1a59560dc5274b3a18daae06b531055153a0cb9ab8e21174262b86c899965d618c5"></a>
#### Enumerator METADATA\_TYPE\_BOOLEAN





<a id="namespaceModelCenter_1a59560dc5274b3a18daae06b531055153a934405f69eb259b948fdda69fda36cdd"></a>
#### Enumerator METADATA\_TYPE\_XML





<a id="namespaceModelCenter_1a59560dc5274b3a18daae06b531055153afd2104e48eb6bb48323751a8b15395c2"></a>
#### Enumerator METADATA\_TYPE\_FORCE\_TO\_32\_BITS





<a id="namespaceModelCenter_1afea526d882aa1a4fd48b5a28b7b1c9dc"></a>
### Enumeration type MetadataAccess

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 44)

```
enum MetadataAccess {
  METADATA_ACCESS_PRIVATE = 0,
  METADATA_ACCESS_READONLY = 1,
  METADATA_ACCESS_PUBLIC = 2,
  METADATA_ACCESS_FORCE_TO_32_BITS = 65536
}
```



Access allowed for metadata.



<a id="namespaceModelCenter_1afea526d882aa1a4fd48b5a28b7b1c9dca193d415dae56a753d64d37bcb67a2285"></a>
#### Enumerator METADATA\_ACCESS\_PRIVATE





<a id="namespaceModelCenter_1afea526d882aa1a4fd48b5a28b7b1c9dcae1023b575b4ff76a772e10c9162dd467"></a>
#### Enumerator METADATA\_ACCESS\_READONLY





<a id="namespaceModelCenter_1afea526d882aa1a4fd48b5a28b7b1c9dcaed115b108b3a38e88e5f5a3a1e17cf13"></a>
#### Enumerator METADATA\_ACCESS\_PUBLIC





<a id="namespaceModelCenter_1afea526d882aa1a4fd48b5a28b7b1c9dca637668ae8a3b4e7805346e7f1db302d5"></a>
#### Enumerator METADATA\_ACCESS\_FORCE\_TO\_32\_BITS





<a id="namespaceModelCenter_1af45bfe44662b4647910a30bb0ba41dca"></a>
### Enumeration type TradeStudyFormat

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 55)

```
enum TradeStudyFormat {
  TS_FORMAT_PXTZ = 0,
  TS_FORMAT_PXT_COMPRESSED = 1,
  TS_FORMAT_PXT_UNCOMPRESSED = 2,
  TS_FORMAT_TSTUDY = 3
}
```



An enumeration of the different trade study file formats



<a id="namespaceModelCenter_1af45bfe44662b4647910a30bb0ba41dcaac6d6ad08981541727efbbf8c181674cf"></a>
#### Enumerator TS\_FORMAT\_PXTZ



Used to signify that the format PXTZ was selected and that a file should be saved in that format 
**Deprecated**:

This file format is deprecated and files can no longer be saved in this format.

<a id="namespaceModelCenter_1af45bfe44662b4647910a30bb0ba41dcaac387037adbfc62827fa1523fc69a1278"></a>
#### Enumerator TS\_FORMAT\_PXT\_COMPRESSED



Used to signify that the format PXT (Compressed) was selected and that a file should be saved in that format 
**Deprecated**:

This file format is deprecated and files can no longer be saved in this format.

<a id="namespaceModelCenter_1af45bfe44662b4647910a30bb0ba41dcaaeead4e562c092545f613d220eb2df08e"></a>
#### Enumerator TS\_FORMAT\_PXT\_UNCOMPRESSED



Used to signify that the format PXT (Uncompressed) was selected and that a file should be saved in that format 
**Deprecated**:

This file format is deprecated and files can no longer be saved in this format.

<a id="namespaceModelCenter_1af45bfe44662b4647910a30bb0ba41dcaa3332e2d8a655365e5c1fee1d8f1fa436"></a>
#### Enumerator TS\_FORMAT\_TSTUDY



Used to signify that the format TSTUDY was selected and that a file should be saved in that format

<a id="namespaceModelCenter_1a1abdd6ad1a16bfaa9539e9a1ccc3c1a0"></a>
### Enumeration type VersionStatus

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 657)

```
enum VersionStatus {
  DO_VERSIONING = 0,
  DO_NOT_VERSION = 1,
  DO_VERSIONING_IF_POSSIBLE = 2
}
```



Versioning option for saving to [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) cloud data storage.



<a id="namespaceModelCenter_1a1abdd6ad1a16bfaa9539e9a1ccc3c1a0a1db01871f227cbb9c0ff450f45faeb85"></a>
#### Enumerator DO\_VERSIONING





<a id="namespaceModelCenter_1a1abdd6ad1a16bfaa9539e9a1ccc3c1a0ab728b53581051a989c0a4a20d5a0b7ac"></a>
#### Enumerator DO\_NOT\_VERSION





<a id="namespaceModelCenter_1a1abdd6ad1a16bfaa9539e9a1ccc3c1a0a0f9c1842a82241069e6d7de3b1164023"></a>
#### Enumerator DO\_VERSIONING\_IF\_POSSIBLE





<a id="namespaceModelCenter_1a91c424f9204166f9d85ca1d04b1cf625"></a>
### Enumeration type AssemblyStyle

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 3809)

```
enum AssemblyStyle {
  ASSEMBLY_STYLE_COLLAPSED = 0,
  ASSEMBLY_STYLE_EXPANDED = 1,
  ASSEMBLY_STYLE_CLASSIC = 100,
  ASSEMBLY_STYLE_N_SQUARED = 101,
  ASSEMBLY_STYLE_AUTO_N_SQUARED = 102,
  ASSEMBLY_STYLE_FORCE_32_BITS = 65536
}
```



Ways to display an assembly.



<a id="namespaceModelCenter_1a91c424f9204166f9d85ca1d04b1cf625a6b01dbb284343f3c49f9ac2318be4aa3"></a>
#### Enumerator ASSEMBLY\_STYLE\_COLLAPSED



Collapse the assembly. Not allowed for the model.

<a id="namespaceModelCenter_1a91c424f9204166f9d85ca1d04b1cf625ae5a9a245bacc433385a01acb31722bf8"></a>
#### Enumerator ASSEMBLY\_STYLE\_EXPANDED



Expand the assembly. No effect for the model.

<a id="namespaceModelCenter_1a91c424f9204166f9d85ca1d04b1cf625a853070b6a8d1299e8d9e7f846a1f2e69"></a>
#### Enumerator ASSEMBLY\_STYLE\_CLASSIC



Set to classic view. Only valid for Data Dependency assemblies.

<a id="namespaceModelCenter_1a91c424f9204166f9d85ca1d04b1cf625af225405c171ad35d8e7caad44414d736"></a>
#### Enumerator ASSEMBLY\_STYLE\_N\_SQUARED



Set to N^2 view. Only valid for Data Dependency assemblies.

<a id="namespaceModelCenter_1a91c424f9204166f9d85ca1d04b1cf625a53d3ac52946f367fea3960b418f30626"></a>
#### Enumerator ASSEMBLY\_STYLE\_AUTO\_N\_SQUARED



Set to auto-N^2 view. Only valid for Data Dependency assemblies.

<a id="namespaceModelCenter_1a91c424f9204166f9d85ca1d04b1cf625ae20fa83961bd74d6133ceec0849d4c1c"></a>
#### Enumerator ASSEMBLY\_STYLE\_FORCE\_32\_BITS





<a id="namespaceModelCenter_1a916012c305b3ade57ea11ed7fe1f6af2"></a>
### Enumeration type OnConnectionErrorMode

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 5038)

```
enum OnConnectionErrorMode {
  CONN_ERR_ERROR = 3,
  CONN_ERR_IGNORE = 1,
  CONN_ERR_USEDIALOG = -1
}
```



Mode of action to take when there is an error with connection. Used with [loadModel ](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ab57546e9e718895bbdfa25bc1b7d1e9d).



<a id="namespaceModelCenter_1a916012c305b3ade57ea11ed7fe1f6af2a32466c6ffbbfd1d8cae3f96e7565e049"></a>
#### Enumerator CONN\_ERR\_ERROR



Abort loading and throw the error back to the caller.

<a id="namespaceModelCenter_1a916012c305b3ade57ea11ed7fe1f6af2aa1a76a2bf1e5b53785d9e1c8389b9369"></a>
#### Enumerator CONN\_ERR\_IGNORE



Ignore the error and continue loading (as if user has pressed "Ignore" in the dialog).

<a id="namespaceModelCenter_1a916012c305b3ade57ea11ed7fe1f6af2a4e520a601326fcb3e1324c9a950a541d"></a>
#### Enumerator CONN\_ERR\_USEDIALOG



(option not available when running ModelCenter in server mode) Shows the error as if the user were loading the file manually with full control.

## Functions

<a id="namespaceModelCenter_1ac27ed4a9b1a4fd02d9a3191c3ffbfbed"></a>
### Function importlib

![][private]

```
ModelCenter::importlib("stdole32.tlb")
```







**Parameters**:

* "stdole32.tlb"

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)