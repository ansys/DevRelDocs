# Interface PHXDATAEXPLORERLib::IPageVisibility

![][IDL]
![][public]

**Definition**: `LIBS/DataExplorer/PHXDataExplorer/PHXDataExplorer.odl` (line 466)



An interface that represents something that has a number of pages which all have visibility that can be individually controlled. It also should support having a specific data view that can be given focus.

## Members

* [getDataViewHWND](interfacePHXDATAEXPLORERLib_1_1IPageVisibility.md#interfacePHXDATAEXPLORERLib_1_1IPageVisibility_1a00bc608cb2e87ea6a12c4da4497c4768)
* [getViewHWND](interfacePHXDATAEXPLORERLib_1_1IPageVisibility.md#interfacePHXDATAEXPLORERLib_1_1IPageVisibility_1a19d4d225ecc6463333715ddde8c5f65f)
* [hide](interfacePHXDATAEXPLORERLib_1_1IPageVisibility.md#interfacePHXDATAEXPLORERLib_1_1IPageVisibility_1aed414820e7a805ab6ba5d08c437d7347)
* [isVisible](interfacePHXDATAEXPLORERLib_1_1IPageVisibility.md#interfacePHXDATAEXPLORERLib_1_1IPageVisibility_1aa52adfedbec735ae4d1e34c4daf66455)
* [show](interfacePHXDATAEXPLORERLib_1_1IPageVisibility.md#interfacePHXDATAEXPLORERLib_1_1IPageVisibility_1a0e233fef605747c79f16a6032e4ebd01)

## Public functions

<a id="interfacePHXDATAEXPLORERLib_1_1IPageVisibility_1aed414820e7a805ab6ba5d08c437d7347"></a>
### Function hide

![][public]

```
void PHXDATAEXPLORERLib::IPageVisibility::hide(long index)
```



Hide the page at the specified index. Does nothing if the page is already hidden 
**Parameters**:

* **index**: the index of the page to hide



**Parameters**:

* long **index**

**Return type**: void

<a id="interfacePHXDATAEXPLORERLib_1_1IPageVisibility_1a0e233fef605747c79f16a6032e4ebd01"></a>
### Function show

![][public]

```
void PHXDATAEXPLORERLib::IPageVisibility::show(long index)
```



Show the page at the specified index. Does nothing if the page is already shown. 
**Parameters**:

* **index**: the index of the page to show



**Parameters**:

* long **index**

**Return type**: void

<a id="interfacePHXDATAEXPLORERLib_1_1IPageVisibility_1aa52adfedbec735ae4d1e34c4daf66455"></a>
### Function isVisible

![][public]

```
boolean PHXDATAEXPLORERLib::IPageVisibility::isVisible(long index)
```



Get whether or not the page at the specified index is currently visible. 
**Return values**:

* **true**: if the page is currently visible
* **false**: if the page is not currently visible



**Parameters**:

* long **index**

**Return type**: boolean

<a id="interfacePHXDATAEXPLORERLib_1_1IPageVisibility_1a00bc608cb2e87ea6a12c4da4497c4768"></a>
### Function getDataViewHWND

![][public]

```
long PHXDATAEXPLORERLib::IPageVisibility::getDataViewHWND()
```



Retrieves the HWND that represents the Data View (aka TableView) so that it can have its focus set 
**Returns**:

the HWND representing the Data View



**Return type**: long

<a id="interfacePHXDATAEXPLORERLib_1_1IPageVisibility_1a19d4d225ecc6463333715ddde8c5f65f"></a>
### Function getViewHWND

![][public]

```
long PHXDATAEXPLORERLib::IPageVisibility::getViewHWND(long index)
```



Get the HWND representing the given view 
**Parameters**:

* **the**: index of the page or view


**Returns**:

the HWND representing the page or view



**Parameters**:

* long **index**

**Return type**: long

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)