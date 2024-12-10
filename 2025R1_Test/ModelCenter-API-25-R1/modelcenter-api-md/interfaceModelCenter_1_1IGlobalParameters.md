# Interface ModelCenter::IGlobalParameters

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6424)



A set of name/value pairs that can be used for programmatic purposes. Values are not stored with Model files. They can optionally be passed up to external servers, such as MCRE server.

## Members

* [\_item](interfaceModelCenter_1_1IGlobalParameters.md#interfaceModelCenter_1_1IGlobalParameters_1a63a265a486f6a3a5df9cde8b65217d5f)
* [count](interfaceModelCenter_1_1IGlobalParameters.md#interfaceModelCenter_1_1IGlobalParameters_1a53be79855251a6bd40bd71f35c4f6d8d)
* [item](interfaceModelCenter_1_1IGlobalParameters.md#interfaceModelCenter_1_1IGlobalParameters_1a1fdee032bf053c5f99b0291bf04dcaec)
* [Remove](interfaceModelCenter_1_1IGlobalParameters.md#interfaceModelCenter_1_1IGlobalParameters_1ae838217b346390c972f8173e9a55361c)
* [setExportToRemoteComponents](interfaceModelCenter_1_1IGlobalParameters.md#interfaceModelCenter_1_1IGlobalParameters_1ad479e08f0fcaf6313a005c4fb3c80235)

## Properties

<a id="interfaceModelCenter_1_1IGlobalParameters_1a53be79855251a6bd40bd71f35c4f6d8d"></a>
### Property count

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
long ModelCenter::IGlobalParameters::count
```



The count of the name/value pairs.



**Return type**: long

<a id="interfaceModelCenter_1_1IGlobalParameters_1a1fdee032bf053c5f99b0291bf04dcaec"></a>
### Property item

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6451)

```
VARIANT ModelCenter::IGlobalParameters::item
```



Receives the value of a particular parameter.






**Parameters**:

* **index**: The name of the name/value pair to retrieve.


**Returns**:

The value of the parameter.

Receives the value of a particular parameter.






**Parameters**:

* **index**: The name of the name/value pair to retrieve.
* **newValue**: The variable to hold the value of the parameter.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IGlobalParameters_1a63a265a486f6a3a5df9cde8b65217d5f"></a>
### Property \_item

![][private]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6460)

```
VARIANT ModelCenter::IGlobalParameters::_item
```







**Return type**: VARIANT

## Public functions

<a id="interfaceModelCenter_1_1IGlobalParameters_1ad479e08f0fcaf6313a005c4fb3c80235"></a>
### Function setExportToRemoteComponents

![][public]

```
void ModelCenter::IGlobalParameters::setExportToRemoteComponents(VARIANT index, boolean bexport)
```



Sets whether this name/value pair is passed to external servers when a component is run on that server.






**Parameters**:

* **index**: The name of the variable.
* **bexport**: If true, this name/value pair will be sent.



**Parameters**:

* VARIANT **index**
* boolean **bexport**

**Return type**: void

<a id="interfaceModelCenter_1_1IGlobalParameters_1ae838217b346390c972f8173e9a55361c"></a>
### Function Remove

![][public]

```
void ModelCenter::IGlobalParameters::Remove(VARIANT index)
```



Removes a named parameter.






**Parameters**:

* **index**: The name of the parameter to remove.



**Parameters**:

* VARIANT **index**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)