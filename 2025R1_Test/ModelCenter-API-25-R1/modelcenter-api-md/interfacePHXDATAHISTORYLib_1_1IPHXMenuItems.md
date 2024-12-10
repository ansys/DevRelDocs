# Interface PHXDATAHISTORYLib::IPHXMenuItems

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1164)



An object which is used to get extra context dependent menu items from [PHXDataExplorerPlugIn](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn) pages through the [getMenuItems](interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn.md#interfacePHXDATAHISTORYLib_1_1PHXDataExplorerPlugIn_1ad899f49a6bef9cd0f56292b7c92d8503) call.

## Members

* [getMenuItemDescription](interfacePHXDATAHISTORYLib_1_1IPHXMenuItems.md#interfacePHXDATAHISTORYLib_1_1IPHXMenuItems_1a3213c537df82b4c00dd7f4df96b90712)
* [getMenuItemName](interfacePHXDATAHISTORYLib_1_1IPHXMenuItems.md#interfacePHXDATAHISTORYLib_1_1IPHXMenuItems_1aa8491483ad472e4f1f9e51ea028561eb)
* [numItems](interfacePHXDATAHISTORYLib_1_1IPHXMenuItems.md#interfacePHXDATAHISTORYLib_1_1IPHXMenuItems_1a74bd895a7bdaa2b6786bb4dc2c4d12a1)
* [setMenuItem](interfacePHXDATAHISTORYLib_1_1IPHXMenuItems.md#interfacePHXDATAHISTORYLib_1_1IPHXMenuItems_1aa76ac2aefb1a69021d5f536db66c0c4b)

## Properties

<a id="interfacePHXDATAHISTORYLib_1_1IPHXMenuItems_1a74bd895a7bdaa2b6786bb4dc2c4d12a1"></a>
### Property numItems

![][public]

**Definition**: `LIBS/DataExplorer/PHXDataHistory/PHXDataHistory.odl` (line 1)

```
long PHXDATAHISTORYLib::IPHXMenuItems::numItems
```



The number of context dependent menu items. Set this first, then use [setMenuItem()](interfacePHXDATAHISTORYLib_1_1IPHXMenuItems.md#interfacePHXDATAHISTORYLib_1_1IPHXMenuItems_1aa76ac2aefb1a69021d5f536db66c0c4b) for each menu item.



**Return type**: long

## Public functions

<a id="interfacePHXDATAHISTORYLib_1_1IPHXMenuItems_1aa76ac2aefb1a69021d5f536db66c0c4b"></a>
### Function setMenuItem

![][public]

```
void PHXDATAHISTORYLib::IPHXMenuItems::setMenuItem(long index, BSTR name, BSTR description)
```



Sets the data for a particular menu item.






**Parameters**:

* **index**: A 0 based index of the menu item to set.
* **name**: The name of the menu item. This will display in the menu itself.
* **description**: The description of the menu item. Will be displayed in tooltips and the status bar when the user hovers over a menu item.



**Parameters**:

* long **index**
* BSTR **name**
* BSTR **description**

**Return type**: void

<a id="interfacePHXDATAHISTORYLib_1_1IPHXMenuItems_1aa8491483ad472e4f1f9e51ea028561eb"></a>
### Function getMenuItemName

![][public]

```
BSTR PHXDATAHISTORYLib::IPHXMenuItems::getMenuItemName(long index)
```



Gets the name of the menu item.






**Parameters**:

* **index**: A 0 based index of the menu item to access.


**Returns**:

The menu item name.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfacePHXDATAHISTORYLib_1_1IPHXMenuItems_1a3213c537df82b4c00dd7f4df96b90712"></a>
### Function getMenuItemDescription

![][public]

```
BSTR PHXDATAHISTORYLib::IPHXMenuItems::getMenuItemDescription(long index)
```



Gets the description field for the requested menu item.






**Parameters**:

* **index**: A 0 based index of the menu item to access.


**Returns**:

The value of the description field of the menu item.



**Parameters**:

* long **index**

**Return type**: BSTR

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)