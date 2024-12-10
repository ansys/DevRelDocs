# Interface ModelCenter::IDataMonitor

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6232)



COM Instance.

## Members

* [addItem](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a4b0569ecb495f20688d98060df763895)
* [addUnlinkedItem](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a8b2b470a890a2177bc1028408c7275e6)
* [getAutoDelete](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a163f13ac67226dfe0d816950061cc386)
* [getColWidth](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1aa7c5595c9eabf857b3adc02d30dcbb8e)
* [getDisplayFullNames](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a0cd9a14f007afaa719e20b54439ea98d)
* [getDisplayUnits](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1ac11b644fdbd9f5e184a120a3bb6c7eb0)
* [getHeight](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a906ba9f57a9a472e1a70c151a50b1155)
* [getLink](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a9861b3ad530a4efbe4925c89550e8cc5)
* [getName](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a69e3af3092c78b0c19d9e3fb719f9b4b)
* [getTitle](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1ae6aab41ece2d9cf2ac4285aa10cf156e)
* [getWidth](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1adb51a1067e48f2e1ab9b79874a2d8a66)
* [getX](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a610ec59f3295fe819e3a1aadd043927b)
* [getY](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a15d2803f54702b2198a2f0dc3f36d80d)
* [isRenamed](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1add033400b2b1694d63f67126639c198f)
* [isValid](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1abc151c7ba70d7f1e6249942a627e2171)
* [removeItem](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a6137208858071bb7fa35bebadcbaea47)
* [removeLink](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1ad8044ca189f473cbbf095756dd2668f9)
* [setAutoDelete](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a19e11dabaf88dae88622b82e9e53954a)
* [setColWidth](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1ade404d7ea696919bbc331c9027315c0e)
* [setDisplayFullNames](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a8be2f10ef4448bc73d4dc7c57f3350ca)
* [setDisplayUnits](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1aeac431029c07dddd0397914f6fb4d9d1)
* [setLink](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a89561753d60d803cc6427c6af5005484)
* [setLocation](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1abb2aeef39615e67a90e950314ea02744)
* [setName](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1afbfd0ce277fb01a5539d791b371ab0de)
* [setSize](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1ad76100b2b7c20def871a1ffdc745e5da)
* [setTitle](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor_1a74456073f4bc7e13d954972991583b58)

## Public functions

<a id="interfaceModelCenter_1_1IDataMonitor_1a69e3af3092c78b0c19d9e3fb719f9b4b"></a>
### Function getName

![][public]

```
BSTR ModelCenter::IDataMonitor::getName(long row)
```



Retrieves the name associated a given row in the Data Monitor.






**Parameters**:

* **row**: The row number in the Data Monitor of interest (0-based index).


**Returns**:

The name of the row.



**Parameters**:

* long **row**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IDataMonitor_1afbfd0ce277fb01a5539d791b371ab0de"></a>
### Function setName

![][public]

```
void ModelCenter::IDataMonitor::setName(long row, BSTR name)
```



Sets the display name of the specified row in the Data Monitor.






**Parameters**:

* **row**: The row in the Data Monitor of interest (0-based index).
* **name**: The new display name.



**Parameters**:

* long **row**
* BSTR **name**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataMonitor_1add033400b2b1694d63f67126639c198f"></a>
### Function isRenamed

![][public]

```
boolean ModelCenter::IDataMonitor::isRenamed(long row)
```



Determines whether the name of a row in the Data Monitor lines up to the ModelCenter variable it represents.






**Parameters**:

* **row**: The row in the Data Monitor of interest (0-based index).


**Returns**:

<code>true</code> or <code>false</code>



**Parameters**:

* long **row**

**Return type**: boolean

<a id="interfaceModelCenter_1_1IDataMonitor_1a9861b3ad530a4efbe4925c89550e8cc5"></a>
### Function getLink

![][public]

```
BSTR ModelCenter::IDataMonitor::getLink(long row)
```



Retrieves the ModelCenter variable associated with a given row in the Data Monitor. Returns a blank string if the specified row doesn't link to a ModelCenter variable.






**Parameters**:

* **row**: The row number in the Data Monitor of interest (0-based index).


**Returns**:

<br/>



**Parameters**:

* long **row**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IDataMonitor_1a89561753d60d803cc6427c6af5005484"></a>
### Function setLink

![][public]

```
boolean ModelCenter::IDataMonitor::setLink(long row, BSTR link)
```



Sets the ModelCenter variable associated with a given row in the Data Monitor.






**Parameters**:

* **row**: The row in the Data Monitor of interest (0-based index).
* **link**: The ModelCenter variable to associate with a given row in the Data Monitor.


**Returns**:

<br/>



**Parameters**:

* long **row**
* BSTR **link**

**Return type**: boolean

<a id="interfaceModelCenter_1_1IDataMonitor_1a4b0569ecb495f20688d98060df763895"></a>
### Function addItem

![][public]

```
int ModelCenter::IDataMonitor::addItem(BSTR name, BSTR link)
```



Add an item to the Data Monitor that links to a variable in the model.






**Parameters**:

* **name**: The name to use for the item in the Data Monitor.
* **link**: The name of the ModelCenter variable this item links to.


**Returns**:

<br/>



**Parameters**:

* BSTR **name**
* BSTR **link**

**Return type**: int

<a id="interfaceModelCenter_1_1IDataMonitor_1a8b2b470a890a2177bc1028408c7275e6"></a>
### Function addUnlinkedItem

![][public]

```
int ModelCenter::IDataMonitor::addUnlinkedItem(BSTR name)
```



Add an item to the Data Monitor that does not link to a variable within ModelCenter.






**Parameters**:

* **name**: The name to use for the item in the Data Monitor.


**Returns**:

<br/>



**Parameters**:

* BSTR **name**

**Return type**: int

<a id="interfaceModelCenter_1_1IDataMonitor_1a6137208858071bb7fa35bebadcbaea47"></a>
### Function removeItem

![][public]

```
void ModelCenter::IDataMonitor::removeItem(long row)
```



Removes the selected row from the Data Monitor.






**Parameters**:

* **row**: The row in the Data Monitor of interest (0-based index).



**Parameters**:

* long **row**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataMonitor_1ad8044ca189f473cbbf095756dd2668f9"></a>
### Function removeLink

![][public]

```
void ModelCenter::IDataMonitor::removeLink(long row)
```



Removes the associated link from the row specified in the Data Monitor.






**Parameters**:

* **row**: The row in the Data Monitor of interest (0-based index).



**Parameters**:

* long **row**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataMonitor_1a0cd9a14f007afaa719e20b54439ea98d"></a>
### Function getDisplayFullNames

![][public]

```
boolean ModelCenter::IDataMonitor::getDisplayFullNames()
```



Get the status of the "Display Full Names" option.






**Returns**:

<code>true</code> or <code>false</code>



**Return type**: boolean

<a id="interfaceModelCenter_1_1IDataMonitor_1a8be2f10ef4448bc73d4dc7c57f3350ca"></a>
### Function setDisplayFullNames

![][public]

```
void ModelCenter::IDataMonitor::setDisplayFullNames(boolean)
```



Sets the "Display Full Names" option.



**Parameters**:

* boolean

**Return type**: void

<a id="interfaceModelCenter_1_1IDataMonitor_1a163f13ac67226dfe0d816950061cc386"></a>
### Function getAutoDelete

![][public]

```
boolean ModelCenter::IDataMonitor::getAutoDelete()
```



Gets the status of the Auto Delete option.






**Returns**:

<code>true</code> or <code>false</code>



**Return type**: boolean

<a id="interfaceModelCenter_1_1IDataMonitor_1a19e11dabaf88dae88622b82e9e53954a"></a>
### Function setAutoDelete

![][public]

```
void ModelCenter::IDataMonitor::setAutoDelete(boolean)
```



Sets the status of the Auto Delete option.



**Parameters**:

* boolean

**Return type**: void

<a id="interfaceModelCenter_1_1IDataMonitor_1ac11b644fdbd9f5e184a120a3bb6c7eb0"></a>
### Function getDisplayUnits

![][public]

```
boolean ModelCenter::IDataMonitor::getDisplayUnits()
```



Get the status of the "Display Units" option.






**Returns**:

<code>true</code> or <code>false</code>



**Return type**: boolean

<a id="interfaceModelCenter_1_1IDataMonitor_1aeac431029c07dddd0397914f6fb4d9d1"></a>
### Function setDisplayUnits

![][public]

```
void ModelCenter::IDataMonitor::setDisplayUnits(boolean)
```



Sets the "Display Units" option.



**Parameters**:

* boolean

**Return type**: void

<a id="interfaceModelCenter_1_1IDataMonitor_1aa7c5595c9eabf857b3adc02d30dcbb8e"></a>
### Function getColWidth

![][public]

```
int ModelCenter::IDataMonitor::getColWidth(long col)
```



Gets the column width for the specified column.






**Parameters**:

* **col**: The column number to fetch the width of (0-based index).


**Returns**:

The column width.



**Parameters**:

* long **col**

**Return type**: int

<a id="interfaceModelCenter_1_1IDataMonitor_1ade404d7ea696919bbc331c9027315c0e"></a>
### Function setColWidth

![][public]

```
void ModelCenter::IDataMonitor::setColWidth(long col, int width)
```



Sets the width of the specified column.






**Parameters**:

* **col**: The column in the Data Monitor of interest (0-based index).
* **width**: The new width for the column.



**Parameters**:

* long **col**
* int **width**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataMonitor_1abc151c7ba70d7f1e6249942a627e2171"></a>
### Function isValid

![][public]

```
boolean ModelCenter::IDataMonitor::isValid()
```



Determines whether all the items in the Data Monitor are valid or not.






**Returns**:

Yes (TRUE) or no (FALSE).



**Return type**: boolean

<a id="interfaceModelCenter_1_1IDataMonitor_1ae6aab41ece2d9cf2ac4285aa10cf156e"></a>
### Function getTitle

![][public]

```
BSTR ModelCenter::IDataMonitor::getTitle()
```



Gets the title of the Data Monitor.






**Returns**:

The title of the Data Monitor.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IDataMonitor_1a74456073f4bc7e13d954972991583b58"></a>
### Function setTitle

![][public]

```
void ModelCenter::IDataMonitor::setTitle(BSTR title)
```



Sets the title of the Data Monitor.






**Parameters**:

* **title**: The new title of the Data Monitor.



**Parameters**:

* BSTR **title**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataMonitor_1adb51a1067e48f2e1ab9b79874a2d8a66"></a>
### Function getWidth

![][public]

```
int ModelCenter::IDataMonitor::getWidth()
```



Gets the width of the Data Monitor.






**Returns**:

The width of the Data Monitor.



**Return type**: int

<a id="interfaceModelCenter_1_1IDataMonitor_1a906ba9f57a9a472e1a70c151a50b1155"></a>
### Function getHeight

![][public]

```
int ModelCenter::IDataMonitor::getHeight()
```



Get the height of the Data Monitor.






**Returns**:

The height of the Data Monitor.



**Return type**: int

<a id="interfaceModelCenter_1_1IDataMonitor_1ad76100b2b7c20def871a1ffdc745e5da"></a>
### Function setSize

![][public]

```
void ModelCenter::IDataMonitor::setSize(int width, int height)
```



Sets the height and width of the Data Monitor.






**Parameters**:

* **width**: The new width for the Data Monitor.
* **height**: The new height of the Data Monitor.



**Parameters**:

* int **width**
* int **height**

**Return type**: void

<a id="interfaceModelCenter_1_1IDataMonitor_1a610ec59f3295fe819e3a1aadd043927b"></a>
### Function getX

![][public]

```
int ModelCenter::IDataMonitor::getX()
```



Gets the X position of the Data Monitor.






**Returns**:

The value of the X position of the Data Monitor.



**Return type**: int

<a id="interfaceModelCenter_1_1IDataMonitor_1a15d2803f54702b2198a2f0dc3f36d80d"></a>
### Function getY

![][public]

```
int ModelCenter::IDataMonitor::getY()
```



Gets the Y position of the Data Monitor.






**Returns**:

The value of the Y position of the Data Monitor.



**Return type**: int

<a id="interfaceModelCenter_1_1IDataMonitor_1abb2aeef39615e67a90e950314ea02744"></a>
### Function setLocation

![][public]

```
void ModelCenter::IDataMonitor::setLocation(int x, int y)
```



Sets the x and y location of the Data Monitor in the Analysis View.






**Parameters**:

* **x**: The new x position.
* **y**: The new y position.



**Parameters**:

* int **x**
* int **y**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)