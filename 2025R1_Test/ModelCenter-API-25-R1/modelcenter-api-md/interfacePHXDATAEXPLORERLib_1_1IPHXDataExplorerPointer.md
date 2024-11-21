# Interface PHXDATAEXPLORERLib::IPHXDataExplorerPointer

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataExplorer/PHXDataExplorer.odl` (line 391)



A pointer class used to prevent circular dependencies between Data Explorer, Data History, and Data Explorer Plug-Ins.

## Members

* [getDataExplorer](interfacePHXDATAEXPLORERLib_1_1IPHXDataExplorerPointer.md#interfacePHXDATAEXPLORERLib_1_1IPHXDataExplorerPointer_1aa6b13b15afbe694654cbba4b3fa1157e)

## Public functions

<a id="interfacePHXDATAEXPLORERLib_1_1IPHXDataExplorerPointer_1aa6b13b15afbe694654cbba4b3fa1157e"></a>
### Function getDataExplorer

![][public]

```
IDispatch * PHXDATAEXPLORERLib::IPHXDataExplorerPointer::getDataExplorer()
```



Returns a new pointer to the associated Data Explorer Object. Do not store this object locally, use it temporarily and release it as soon as you are done with it. Otherwise, circular dependencies will prevent proper cleanup of memory allocation.



**Return type**: IDispatch *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)