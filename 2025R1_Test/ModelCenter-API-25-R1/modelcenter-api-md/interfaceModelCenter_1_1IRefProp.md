# Interface ModelCenter::IRefProp

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 5442)



COM Instance.

## Members

* [description](interfaceModelCenter_1_1IRefProp.md#interfaceModelCenter_1_1IRefProp_1ade4ceb94fec2ee5eab541cce187b1eb3)
* [enumValues](interfaceModelCenter_1_1IRefProp.md#interfaceModelCenter_1_1IRefProp_1a11d289581d9118de3f3a86d7d643fb85)
* [getName](interfaceModelCenter_1_1IRefProp.md#interfaceModelCenter_1_1IRefProp_1a2b2ac899757c8dbd31a9c38b6d08f2c2)
* [getType](interfaceModelCenter_1_1IRefProp.md#interfaceModelCenter_1_1IRefProp_1aa05642b60b5a5e44e9954c130d4686e1)
* [isInput](interfaceModelCenter_1_1IRefProp.md#interfaceModelCenter_1_1IRefProp_1a0a8ec20895618292855526596a534f06)
* [title](interfaceModelCenter_1_1IRefProp.md#interfaceModelCenter_1_1IRefProp_1ad9f9fdbe48e40c42f7d80eb57b072ae7)

## Properties

<a id="interfaceModelCenter_1_1IRefProp_1a11d289581d9118de3f3a86d7d643fb85"></a>
### Property enumValues

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IRefProp::enumValues
```



Enumerated values of the reference property.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IRefProp_1a0a8ec20895618292855526596a534f06"></a>
### Property isInput

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IRefProp::isInput
```



Whether or not the reference property is an input.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IRefProp_1ad9f9fdbe48e40c42f7d80eb57b072ae7"></a>
### Property title

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IRefProp::title
```



Title of the reference property.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IRefProp_1ade4ceb94fec2ee5eab541cce187b1eb3"></a>
### Property description

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IRefProp::description
```



Description of the reference property.



**Return type**: BSTR

## Public functions

<a id="interfaceModelCenter_1_1IRefProp_1a2b2ac899757c8dbd31a9c38b6d08f2c2"></a>
### Function getName

![][public]

```
BSTR ModelCenter::IRefProp::getName()
```



Name of the reference property. 
**Returns**:

The name of the reference property.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IRefProp_1aa05642b60b5a5e44e9954c130d4686e1"></a>
### Function getType

![][public]

```
BSTR ModelCenter::IRefProp::getType()
```



Type of the reference property. 
**Returns**:

The type of the reference property.



**Return type**: BSTR

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)