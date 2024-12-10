# Interface ModelCenter::IAssemblies

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 630)



COM Instance.

## Members

* [Count](interfaceModelCenter_1_1IAssemblies.md#interfaceModelCenter_1_1IAssemblies_1aee7be5ec0b95eaea973eb669981b4804)
* [Item](interfaceModelCenter_1_1IAssemblies.md#interfaceModelCenter_1_1IAssemblies_1ae6f3debe976f58187639b34a900ea2b1)

## Properties

<a id="interfaceModelCenter_1_1IAssemblies_1aee7be5ec0b95eaea973eb669981b4804"></a>
### Property Count

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
VARIANT ModelCenter::IAssemblies::Count
```



Number of Assemblies.



**Return type**: VARIANT

## Public functions

<a id="interfaceModelCenter_1_1IAssemblies_1ae6f3debe976f58187639b34a900ea2b1"></a>
### Function Item

![][public]

```
VARIANT ModelCenter::IAssemblies::Item(VARIANT id)
```



Gets a pointer to the specified Assembly.






**Parameters**:

* **id**: ID of the specified Assembly. It can be a name or an index.


**Returns**:

IDispatch* to an [IAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly) object.



**Parameters**:

* VARIANT **id**

**Return type**: VARIANT

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)