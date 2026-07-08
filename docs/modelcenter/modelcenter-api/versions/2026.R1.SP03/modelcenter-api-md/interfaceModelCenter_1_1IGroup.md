# Interface ModelCenter::IGroup

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 3126)



COM Instance.

## Members

* [getFullName](interfaceModelCenter_1_1IGroup.md#interfaceModelCenter_1_1IGroup_1ab1dc7ab3547d2631e64f683968bd0989)
* [getName](interfaceModelCenter_1_1IGroup.md#interfaceModelCenter_1_1IGroup_1ae9bccfbc2ecd401d1f1403594c0ff513)
* [Groups](interfaceModelCenter_1_1IGroup.md#interfaceModelCenter_1_1IGroup_1afab9254fdafc011806a8834430af982f)
* [iconID](interfaceModelCenter_1_1IGroup.md#interfaceModelCenter_1_1IGroup_1ab263da951c24595b88adc5b86fe93540)
* [Variables](interfaceModelCenter_1_1IGroup.md#interfaceModelCenter_1_1IGroup_1a6e92dee614068ff99c03164e7305119a)

## Properties

<a id="interfaceModelCenter_1_1IGroup_1a6e92dee614068ff99c03164e7305119a"></a>
### Property Variables

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IGroup::Variables
```



Pointer to the variables in the Group.






**Returns**:

IDispatch* to an [IVariables](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables) object.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IGroup_1afab9254fdafc011806a8834430af982f"></a>
### Property Groups

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IGroup::Groups
```



Pointer to the Groups in the Group.






**Returns**:

IDispatch* to an [IGroups](interfaceModelCenter_1_1IGroups.md#interfaceModelCenter_1_1IGroups) object.



**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IGroup_1ab263da951c24595b88adc5b86fe93540"></a>
### Property iconID

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
int ModelCenter::IGroup::iconID
```



The ID number of the icon to use for the Group.



**Return type**: int

## Public functions

<a id="interfaceModelCenter_1_1IGroup_1ae9bccfbc2ecd401d1f1403594c0ff513"></a>
### Function getName

![][public]

```
BSTR ModelCenter::IGroup::getName()
```



Gets the name of the Group.






**Returns**:

The name of the Group.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IGroup_1ab1dc7ab3547d2631e64f683968bd0989"></a>
### Function getFullName

![][public]

```
BSTR ModelCenter::IGroup::getFullName()
```



Gets the full ModelCenter path of the Group.






**Returns**:

The full ModelCenter path of the Group.



**Return type**: BSTR

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)