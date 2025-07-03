# Interface ModelCenter::IComponents

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1263)



COM Instance.

## Members

* [Count](interfaceModelCenter_1_1IComponents.md#interfaceModelCenter_1_1IComponents_1a657951d45a2e5d44a882ecc04e4abbae)
* [Item](interfaceModelCenter_1_1IComponents.md#interfaceModelCenter_1_1IComponents_1a497784a98d679aa2ed109130ae004e0a)

## Properties

<a id="interfaceModelCenter_1_1IComponents_1a657951d45a2e5d44a882ecc04e4abbae"></a>
### Property Count

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IComponents::Count
```



Number of Components.



**Return type**: VARIANT

## Public functions

<a id="interfaceModelCenter_1_1IComponents_1a497784a98d679aa2ed109130ae004e0a"></a>
### Function Item

![][public]

```
VARIANT ModelCenter::IComponents::Item(VARIANT id)
```



Gets a pointer to the specified Component.






**Parameters**:

* **id**: ID of the specified Component. It can be a name or an index.


**Returns**:

IDispatch* to an [IComponent](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent) object.



**Parameters**:

* VARIANT **id**

**Return type**: VARIANT

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)