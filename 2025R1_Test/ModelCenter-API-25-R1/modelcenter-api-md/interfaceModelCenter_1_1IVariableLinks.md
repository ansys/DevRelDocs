<a id="interfaceModelCenter_1_1IVariableLinks"></a>
# Interface ModelCenter::IVariableLinks

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6066)



A collection of [IVariableLink](interfaceModelCenter_1_1IVariableLink.md#interfaceModelCenter_1_1IVariableLink) objects.

## Members

* [Count](interfaceModelCenter_1_1IVariableLinks.md#interfaceModelCenter_1_1IVariableLinks_1a65d1ab625bcdab41639028c42f712b26)
* [Item](interfaceModelCenter_1_1IVariableLinks.md#interfaceModelCenter_1_1IVariableLinks_1af1e6de7d83b5af2ae699785b1d61fb1c)

## Properties

<a id="interfaceModelCenter_1_1IVariableLinks_1a65d1ab625bcdab41639028c42f712b26"></a>
### Property Count

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IVariableLinks::Count
```



Number of Links.



**Return type**: VARIANT

## Public functions

<a id="interfaceModelCenter_1_1IVariableLinks_1af1e6de7d83b5af2ae699785b1d61fb1c"></a>
### Function Item

![][public]

```
VARIANT ModelCenter::IVariableLinks::Item(VARIANT id)
```



Gets the specified Link object.






**Parameters**:

* **id**: ID of the specified Link. It can be a name or an index (0-based index). In the case of a name, it looks for the link based on the LHS variable's name.


**Returns**:

IDispatch* to an [IVariableLink](interfaceModelCenter_1_1IVariableLink.md#interfaceModelCenter_1_1IVariableLink) object.



**Parameters**:

* VARIANT **id**

**Return type**: VARIANT

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)