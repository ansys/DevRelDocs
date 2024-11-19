<a id="interfaceModelCenter_1_1IVizContainer"></a>
# Interface ModelCenter::IVizContainer

![][IDL]
![][private]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6706)



COM instance of a Viz Constainer that allows basic access like show(), hide(), Visible and to the underlying implementation of IDataExplorerPlugIn.

## Members

* [fileSaved](interfaceModelCenter_1_1IVizContainer.md#interfaceModelCenter_1_1IVizContainer_1a380f514b047b16f7cfb2fa4bacba4e6c)
* [hide](interfaceModelCenter_1_1IVizContainer.md#interfaceModelCenter_1_1IVizContainer_1a12129753b07898622d2e8a55801ef19d)
* [HWnd](interfaceModelCenter_1_1IVizContainer.md#interfaceModelCenter_1_1IVizContainer_1a4971d80a859be3f620c329dbc5019d7d)
* [id](interfaceModelCenter_1_1IVizContainer.md#interfaceModelCenter_1_1IVizContainer_1a1022454788e8b96f6e84ad60e652bbe3)
* [show](interfaceModelCenter_1_1IVizContainer.md#interfaceModelCenter_1_1IVizContainer_1ae8ccfc592c21eb6adffad9502e4b28fb)
* [showAt](interfaceModelCenter_1_1IVizContainer.md#interfaceModelCenter_1_1IVizContainer_1a69bf3249d5ef44ef0eee2152724f9457)
* [Visible](interfaceModelCenter_1_1IVizContainer.md#interfaceModelCenter_1_1IVizContainer_1a4e7368bd0265ae9a637cfd675b5bd264)

## Properties

<a id="interfaceModelCenter_1_1IVizContainer_1a4e7368bd0265ae9a637cfd675b5bd264"></a>
### Property Visible

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IVizContainer::Visible
```



Indicates whether container is visible.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IVizContainer_1a4971d80a859be3f620c329dbc5019d7d"></a>
### Property HWnd

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
long ModelCenter::IVizContainer::HWnd
```



Returns the Hwnd for the container instance.



**Return type**: long

<a id="interfaceModelCenter_1_1IVizContainer_1a1022454788e8b96f6e84ad60e652bbe3"></a>
### Property id

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6729)

```
DataExplorer ModelCenter::IVizContainer::id
```



Returns the COM instance of IDataExplorerPlugIn implementation of the container. This is a read-only property.



**Return type**: DataExplorer

## Public functions

<a id="interfaceModelCenter_1_1IVizContainer_1a12129753b07898622d2e8a55801ef19d"></a>
### Function hide

![][public]

```
void ModelCenter::IVizContainer::hide()
```



Hides the container. Does not remove or close it.



**Return type**: void

<a id="interfaceModelCenter_1_1IVizContainer_1ae8ccfc592c21eb6adffad9502e4b28fb"></a>
### Function show

![][public]

```
void ModelCenter::IVizContainer::show()
```



Displays the container and brings it to foreground.



**Return type**: void

<a id="interfaceModelCenter_1_1IVizContainer_1a380f514b047b16f7cfb2fa4bacba4e6c"></a>
### Function fileSaved

![][public]

```
void ModelCenter::IVizContainer::fileSaved()
```



Tell the container that the file was saved



**Return type**: void

<a id="interfaceModelCenter_1_1IVizContainer_1a69bf3249d5ef44ef0eee2152724f9457"></a>
### Function showAt

![][public]

```
void ModelCenter::IVizContainer::showAt(long top, long left, long width, long height, [optional] VARIANT state)
```



Displays the container at the given position in the given state. 
**Parameters**:

* **top**: the top position of the window
* **left**: the left position of the window
* **width**: the width of the window
* **height**: the height of the window
* **state**: [optional] the state of the window (SW_NORMAL, SW_MINIMIZE, SW_MAXIMIZE)



**Parameters**:

* long **top**
* long **left**
* long **width**
* long **height**
* _[optional]_ VARIANT **state**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)