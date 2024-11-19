<a id="namespacePHXDATAHISTORYLib"></a>
# Namespace PHXDATAHISTORYLib

![][IDL]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 14)



Data History API

## Classes

* [PHXDATAHISTORYLib::\_DPHXDataHistory](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistory.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistory)
* [PHXDATAHISTORYLib::\_DPHXDataHistoryEvents](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryEvents)
* [PHXDATAHISTORYLib::\_DPHXDataHistoryToModel](interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel.md#interfacePHXDATAHISTORYLib_1_1__DPHXDataHistoryToModel)
* [PHXDATAHISTORYLib::DataHistoryVariableMetadata](classPHXDATAHISTORYLib_1_1DataHistoryVariableMetadata.md#classPHXDATAHISTORYLib_1_1DataHistoryVariableMetadata)
* [PHXDATAHISTORYLib::DataHistoryVariableMetadataStruct](structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableMetadataStruct)
* [PHXDATAHISTORYLib::DataHistoryVariableStruct](structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct.md#structPHXDATAHISTORYLib_1_1DataHistoryVariableStruct)
* [PHXDATAHISTORYLib::IDHVariable](interfacePHXDATAHISTORYLib_1_1IDHVariable.md#interfacePHXDATAHISTORYLib_1_1IDHVariable)
* [PHXDATAHISTORYLib::IPHXMenuItems](interfacePHXDATAHISTORYLib_1_1IPHXMenuItems.md#interfacePHXDATAHISTORYLib_1_1IPHXMenuItems)
* [PHXDATAHISTORYLib::ISaveContext](interfacePHXDATAHISTORYLib_1_1ISaveContext.md#interfacePHXDATAHISTORYLib_1_1ISaveContext)
* [PHXDATAHISTORYLib::PHXDataExplorerExportPlugIn](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerExportPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerExportPlugIn)
* [PHXDATAHISTORYLib::PHXDataExplorerPlugIn](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn)
* [PHXDATAHISTORYLib::PHXDataHistory](classPHXDATAHISTORYLib_1_1PHXDataHistory.md#classPHXDATAHISTORYLib_1_1PHXDataHistory)

## Enumeration types

<a id="namespacePHXDATAHISTORYLib_1af75cc33b471340a6cacd04d652e37daa"></a>
### Enumeration type PHXMENU\_PREDEFS

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1003)

```
enum PHXMENU_PREDEFS {
  PHXMENU_CUT =-1,
  PHXMENU_COPY =-2,
  PHXMENU_PASTE =-3,
  PHXMENU_DELETE =-4,
  PHXMENU_PAGESETTINGS =-5,
  PHXMENU_PRINT =-6,
  PHXMENU_EXPORT =-7,
  PHXMENU_TOOLTIP =-8
}
```



A list of pre-defined menu items that can be used through the isMenuItemEnabled and invokeMenuItem function calls.



<a id="namespacePHXDATAHISTORYLib_1af75cc33b471340a6cacd04d652e37daaabf2c6817e4dffe7bc31ef64ab9ddcdb2"></a>
#### Enumerator PHXMENU\_CUT

Edit/Cut.



<a id="namespacePHXDATAHISTORYLib_1af75cc33b471340a6cacd04d652e37daaa4dd9a98729c118faa83f0c0ed3f29dbf"></a>
#### Enumerator PHXMENU\_COPY

Edit/Copy.



<a id="namespacePHXDATAHISTORYLib_1af75cc33b471340a6cacd04d652e37daaafa9df5b66d50b8e6ec10faff0eadfa9c"></a>
#### Enumerator PHXMENU\_PASTE

Edit/Paste.



<a id="namespacePHXDATAHISTORYLib_1af75cc33b471340a6cacd04d652e37daaa5e8804d589a5617739cf74eb4bc3920b"></a>
#### Enumerator PHXMENU\_DELETE

Edit/Delete.



<a id="namespacePHXDATAHISTORYLib_1af75cc33b471340a6cacd04d652e37daaabf2d504b4c5e2360d5902eb2eadfb45c"></a>
#### Enumerator PHXMENU\_PAGESETTINGS

Page/Basic Settings...



<a id="namespacePHXDATAHISTORYLib_1af75cc33b471340a6cacd04d652e37daaa7e25b0e3c45465e3b3cdbad98b6d0f72"></a>
#### Enumerator PHXMENU\_PRINT

Page/Print Page...



<a id="namespacePHXDATAHISTORYLib_1af75cc33b471340a6cacd04d652e37daaaed6d6e7b1fedd6b023274169374bc7d6"></a>
#### Enumerator PHXMENU\_EXPORT

Page/Export Page...



<a id="namespacePHXDATAHISTORYLib_1af75cc33b471340a6cacd04d652e37daaae48476ba1f1babc81be7b7db890b69c2"></a>
#### Enumerator PHXMENU\_TOOLTIP





## Functions

<a id="namespacePHXDATAHISTORYLib_1aebeea567338ef111ceead76bc59bf072"></a>
### Function importlib

![][private]

```
PHXDATAHISTORYLib::importlib(STDOLE_TLB)
```







**Parameters**:

* STDOLE_TLB

**Return type**: 

<a id="namespacePHXDATAHISTORYLib_1a0e2d7a999f42bdf583341c632c923d8e"></a>
### Function importlib

![][private]

```
PHXDATAHISTORYLib::importlib(STDTYPE_TLB)
```







**Parameters**:

* STDTYPE_TLB

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)