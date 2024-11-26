# Interface ModelCenter::IVariables

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 6096)



COM Instance.

## Members

* [Count](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables_1a5805886fd173e6fc77a3387d5f1c6b95)
* [Item](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables_1a68b42951fd19cf993eef52d372dbdb84)

## Properties

<a id="interfaceModelCenter_1_1IVariables_1a5805886fd173e6fc77a3387d5f1c6b95"></a>
### Property Count

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IVariables::Count
```



Number of variables.



**Return type**: VARIANT

## Public functions

<a id="interfaceModelCenter_1_1IVariables_1a68b42951fd19cf993eef52d372dbdb84"></a>
### Function Item

![][public]

```
VARIANT ModelCenter::IVariables::Item(VARIANT id)
```



Gets a pointer to the specified variable.






**Parameters**:

* **id**: ID of the specified variable. It can be a name or an index (0-based index).


**Returns**:

IDispatch* to an [IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable) object.



**Parameters**:

* VARIANT **id**

**Return type**: VARIANT

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)