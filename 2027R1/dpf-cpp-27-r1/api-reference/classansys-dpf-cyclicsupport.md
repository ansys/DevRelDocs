<a id="classansys-dpf-cyclicsupport"></a>
# Class ansys::dpf::CyclicSupport

![][C++]
![][public]



Cyclic support.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes)

## Members

* [baseElementsScoping](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1afe466d1bf1bced2f13d6796c1dbf8d43)
* [baseNodesScoping](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1a289185098318b67131eac363e87a8b1c)
* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [cyclicPhase](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1aeaa227de7fafa2eb64aab9732a04d80b)
* [CyclicSupport](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1a167515c0ac6b88691bb7e4ececb0b681)
* [CyclicSupport](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1ac10707d0eeb76ec6571795f766e84e60)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [expandElementIds](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1ac82ffdc8ee8757bc89c4d718df1d1e9a)
* [expandElementIds](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1a433d08a3b3ee58bac68d03eced3ecfb2)
* [expandNodeIds](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1a424ecf4652277b14097d88efaa2357ce)
* [expandNodeIds](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1a919b31109b428b4c1b01d0250692b2d2)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getCS](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1aaf1374d17a058f6de2819f705cea9af0)
* [getHighLowMap](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1aa72ada08e8cd4534621bd2cf1a20577c)
* [getLowHighMap](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1a84a78c2f95c129e8332e55560318f228)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [numberOfSectors](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1a1f0072201719869dfda1a6c37a28d275)
* [numberOfStages](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1af834b226d2a2bd4bcfcf458d37a923a8)
* [operator=](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1af76b9abf1c80035b8cd5899713e033e5)
* [operator=](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1a5bced099312f945afde06c2f2325d07c)
* [sectorsScoping](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1ad561eac9c58fa4e34e61504b929965c7)
* [~CyclicSupport](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport-1a2b44b8d778ccce70e16e230bb9199659)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)

## Friends

## Public functions

<a id="classansys-dpf-cyclicsupport-1a2b44b8d778ccce70e16e230bb9199659"></a>
### Function ~CyclicSupport

![][public]


```cpp
virtual ansys::dpf::CyclicSupport::~CyclicSupport()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::~CyclicSupport"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1a167515c0ac6b88691bb7e4ececb0b681"></a>
### Function CyclicSupport

![][public]


```cpp
ansys::dpf::CyclicSupport::CyclicSupport(CyclicSupport const &)
```








**Parameters**:

* CyclicSupport const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::CyclicSupport"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1ac10707d0eeb76ec6571795f766e84e60"></a>
### Function CyclicSupport

![][public]


```cpp
ansys::dpf::CyclicSupport::CyclicSupport(CyclicSupport &&) noexcept
```








**Parameters**:

* CyclicSupport &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::CyclicSupport"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1af76b9abf1c80035b8cd5899713e033e5"></a>
### Function operator=

![][public]


```cpp
CyclicSupport & ansys::dpf::CyclicSupport::operator=(CyclicSupport const &)
```








**Parameters**:

* CyclicSupport const &

**Return type**: CyclicSupport &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::operator="}]}`
-->

<a id="classansys-dpf-cyclicsupport-1a5bced099312f945afde06c2f2325d07c"></a>
### Function operator=

![][public]


```cpp
CyclicSupport & ansys::dpf::CyclicSupport::operator=(CyclicSupport &&) noexcept
```








**Parameters**:

* CyclicSupport &&

**Return type**: CyclicSupport &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::operator="}]}`
-->

<a id="classansys-dpf-cyclicsupport-1a1f0072201719869dfda1a6c37a28d275"></a>
### Function numberOfSectors

![][public]
![][const]


```cpp
dp_int ansys::dpf::CyclicSupport::numberOfSectors(dp_int istage=0) const
```




**Returns**:

Number of sectors for given stage.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **istage** = 0 : [in] Optional stage.

**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::numberOfSectors"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1aeaa227de7fafa2eb64aab9732a04d80b"></a>
### Function cyclicPhase

![][public]
![][const]


```cpp
dp_double ansys::dpf::CyclicSupport::cyclicPhase() const
```




**Returns**:

Cyclic phase.



**Return type**: [dp\_double](namespaceansys-dpf.md#namespaceansys-dpf-1acb480013bfed185b5e34a0bdcb0e3790)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::cyclicPhase"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1af834b226d2a2bd4bcfcf458d37a923a8"></a>
### Function numberOfStages

![][public]
![][const]


```cpp
dp_int ansys::dpf::CyclicSupport::numberOfStages() const
```




**Returns**:

Number of cyclic stages



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::numberOfStages"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1ad561eac9c58fa4e34e61504b929965c7"></a>
### Function sectorsScoping

![][public]
![][const]


```cpp
Scoping ansys::dpf::CyclicSupport::sectorsScoping(dp_int istage=0) const
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) containing the list of sectors that are currently set for expansion for given stage.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **istage** = 0 : [in] Optional stage.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::sectorsScoping"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1a289185098318b67131eac363e87a8b1c"></a>
### Function baseNodesScoping

![][public]
![][const]


```cpp
Scoping ansys::dpf::CyclicSupport::baseNodesScoping(dp_int istage=0) const
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) containing the node ids in the base sector for given stage.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **istage** = 0 : [in] Optional stage.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::baseNodesScoping"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1afe466d1bf1bced2f13d6796c1dbf8d43"></a>
### Function baseElementsScoping

![][public]
![][const]


```cpp
Scoping ansys::dpf::CyclicSupport::baseElementsScoping(dp_int istage=0) const
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) containing the element ids in the base sector for given stage.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **istage** = 0 : [in] Optional stage.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::baseElementsScoping"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1a424ecf4652277b14097d88efaa2357ce"></a>
### Function expandNodeIds

![][public]
![][const]


```cpp
Scoping ansys::dpf::CyclicSupport::expandNodeIds(dp_int nodeId, Scoping sectors_scoping, dp_int istage=0) const
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) containing the nodes ids corresponding to the base nodeId given in input for the expanded sectors given in sectorsScoping



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **nodeId**: [in] nodeId to expand.
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) **sectors_scoping**: [in] [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) containing the list of sectors to expand.
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **istage** = 0 : [in] Optional stage.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::expandNodeIds"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1ac82ffdc8ee8757bc89c4d718df1d1e9a"></a>
### Function expandElementIds

![][public]
![][const]


```cpp
Scoping ansys::dpf::CyclicSupport::expandElementIds(dp_int elementId, Scoping sectors_scoping, dp_int istage=0) const
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) containing the element ids corresponding to the base elementId given in input for the expanded sectors given in sectorsScoping



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **elementId**: [in] elementId to expand.
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) **sectors_scoping**: [in] [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) containing the list of sectors to expand.
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **istage** = 0 : [in] Optional stage.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::expandElementIds"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1a919b31109b428b4c1b01d0250692b2d2"></a>
### Function expandNodeIds

![][public]
![][const]


```cpp
Scoping ansys::dpf::CyclicSupport::expandNodeIds(dp_int nodeId, dp_int istage=0) const
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) containing the nodes ids corresponding to the base nodeId given in input for all expanded sectors



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **nodeId**: [in] nodeId to expand.
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **istage** = 0 : [in] Optional stage.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::expandNodeIds"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1a433d08a3b3ee58bac68d03eced3ecfb2"></a>
### Function expandElementIds

![][public]
![][const]


```cpp
Scoping ansys::dpf::CyclicSupport::expandElementIds(dp_int elementId, dp_int istage=0) const
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) containing the element ids corresponding to the base elementId given in input for all expanded sectors



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **elementId**: [in] elementId to expand.
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **istage** = 0 : [in] Optional stage.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::expandElementIds"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1aaf1374d17a058f6de2819f705cea9af0"></a>
### Function getCS

![][public]
![][const]


```cpp
Field ansys::dpf::CyclicSupport::getCS() const
```




**Returns**:

[Field](classansys-dpf-field.md#classansys-dpf-field) containing the coordinate system of the cyclic support



**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::getCS"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1a84a78c2f95c129e8332e55560318f228"></a>
### Function getLowHighMap

![][public]
![][const]


```cpp
PropertyField ansys::dpf::CyclicSupport::getLowHighMap(dp_int istage=0) const
```




**Returns**:

[PropertyField](classansys-dpf-propertyfield.md#classansys-dpf-propertyfield) containing the Low High map for a stage



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **istage** = 0 : [in] Optional stage.

**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::getLowHighMap"}]}`
-->

<a id="classansys-dpf-cyclicsupport-1aa72ada08e8cd4534621bd2cf1a20577c"></a>
### Function getHighLowMap

![][public]
![][const]


```cpp
PropertyField ansys::dpf::CyclicSupport::getHighLowMap(dp_int istage=0) const
```




**Returns**:

[PropertyField](classansys-dpf-propertyfield.md#classansys-dpf-propertyfield) containing the High Low map for a stage



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **istage** = 0 : [in] Optional stage.

**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CyclicSupport::getHighLowMap"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)