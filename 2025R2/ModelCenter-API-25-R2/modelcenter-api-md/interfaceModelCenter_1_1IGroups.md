# Interface ModelCenter::IGroups

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 3171)



COM Instance.

## Members

* [Count](interfaceModelCenter_1_1IGroups.md#interfaceModelCenter_1_1IGroups_1a3bbbf56f26f76f5f051ea065aaf00234)
* [Item](interfaceModelCenter_1_1IGroups.md#interfaceModelCenter_1_1IGroups_1a4a71e44eeb916bcdc8bee4ab891b237d)

## Properties

<a id="interfaceModelCenter_1_1IGroups_1a3bbbf56f26f76f5f051ea065aaf00234"></a>
### Property Count

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IGroups::Count
```



Number of Groups.



**Return type**: VARIANT

## Public functions

<a id="interfaceModelCenter_1_1IGroups_1a4a71e44eeb916bcdc8bee4ab891b237d"></a>
### Function Item

![][public]

```
VARIANT ModelCenter::IGroups::Item(VARIANT id)
```



Gets a pointer to the specified Group.






**Parameters**:

* **id**: ID of the specified Group. It can be a name or an index (0-based index).


**Returns**:

IDispatch* to an [IGroup](interfaceModelCenter_1_1IGroup.md#interfaceModelCenter_1_1IGroup) object.



**Parameters**:

* VARIANT **id**

**Return type**: VARIANT

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)