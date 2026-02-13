<a id="classansys_1_1dpf_1_1TimeFreqSupport"></a>
# Class ansys::dpf::TimeFreqSupport

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 1277)

Define a time/frequency set.

The time freq support describes an analysis' temporal or frequential space. For a transient analysis all the time sets cumulatives indices with their times are described. For a harmonic analysis, the real and imaginary frequencies, the RPMs, the load steps are described.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [boundingCumulativeIndecesOfTimeFreq](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1ab4822e8cee3be5c03badce0e4cea3991)
* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aea34d37e0c080126eff70db34bf46597)
* [deep\_copy](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a3addff6333f65b2ea810d7033315ac1c)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [emptyTimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a7e75bb0b6e75fce04a882b70f9a48c17)
* [frequencies](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1aa0cf046a80d328f966892abe85308f01)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getImaginaryFreqByStep](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a85a5cf293b3c72cdfa0668450aba6673)
* [getImaginaryFreqSetIndexByValue](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1afaa513e5f4410b3a5f2fee984f41065c)
* [getSetIndexByStepIndexAndSubStep](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a018ae91fba33d3a61360c659a3fa49c8)
* [getSetIndexByTimeFreq](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a85e297af28a24a226cff64338b1a6326)
* [getStepAndSubStep](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a9596196456260be8d2899952dff29c64)
* [getTimeFreqByStep](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1abb6ca8360c5db93383e00db82cfcfa3f)
* [harmonicIndeces](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a101268a027373331f52244f52eb8b0d1)
* [harmonicIndicesScoping](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a4428c07ba03b6cf3dc65279cf8f2c08f)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ae198f89868d85c7db6dc1a934a1d3c15)
* [imaginaryFrequencies](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a21319848f5f197398148551cbb74d4a0)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [numberOfSets](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a87c577de73b5ba2260cf3f940ac43068)
* [numberOfSingularSets](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1aee5b3fa99be60b203563cf58f2a78321)
* [numberOfSteps](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a6b3cc037c0283450ac0234dadeddd1b6)
* [numberOfSubStepsByStepId](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a190d202d30643f5ea398555b5dbea12b)
* [numberOfSubStepsByStepIndex](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a4333cdbfac1c49f802a9c33a18970ed5)
* [operator=](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a07bc20195f72ad854db1c75d86bbc650)
* [operator=](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a5e294f5e0106f102b5392cc837a249fa)
* [rpms](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1aa2e1dacc70c07e6d6ba401748e3d822e)
* [setHarmonicIndices](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a233c06f8d1967b7254dcf96df613e359)
* [setImaginaryFrequencies](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a934891bcade52745e6e80b7bf74193cf)
* [setRpms](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a855a9819d41665a1d9177fd8f67fa3f1)
* [setTimeFrequencies](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1aa01a23bf27be8e42ce3ec1da5e0ddcbe)
* [timeFreq](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a15d6bc620aadd070c1bb027a075ce0cd)
* [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a65928d29e352da578768b2f99677aa03)
* [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1aea0de4f8a69689c5a18e95111e36568b)
* [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a16e1c71584c44429329b23360b537630)
* [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a3122b8e5c405333882e1682efd125596)
* [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a7bdbb2d84f701cffd060879288bbe9be)
* [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1afa5cdfa726a0af0a13c6e8ad30a5193a)
* [timeFrequenciesSubstepIds](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1ae138ce323b476464e3e114750eb5d686)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)
* [~TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a6bf642d15b41d6c009ffeb25a76a09f7)

## Friends

## Private functions

## Public functions

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1aea0de4f8a69689c5a18e95111e36568b"></a>
### Function TimeFreqSupport

![][public]

```cpp
ansys::dpf::TimeFreqSupport::TimeFreqSupport()
```

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::TimeFreqSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a16e1c71584c44429329b23360b537630"></a>
### Function TimeFreqSupport

![][public]

```cpp
ansys::dpf::TimeFreqSupport::TimeFreqSupport(Client const *const client)
```

Create a new [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) on a server.

**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::TimeFreqSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a3122b8e5c405333882e1682efd125596"></a>
### Function TimeFreqSupport

![][public]

```cpp
ansys::dpf::TimeFreqSupport::TimeFreqSupport(int id, Client const *const client)
```

Retrieve an existing instance of [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) on a server.

**Parameters**:

* int **id**: [in] Id of the [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) object on the server's database.
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::TimeFreqSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a6bf642d15b41d6c009ffeb25a76a09f7"></a>
### Function ~TimeFreqSupport

![][public]

```cpp
virtual ansys::dpf::TimeFreqSupport::~TimeFreqSupport()
```

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::~TimeFreqSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a7bdbb2d84f701cffd060879288bbe9be"></a>
### Function TimeFreqSupport

![][public]

```cpp
ansys::dpf::TimeFreqSupport::TimeFreqSupport(TimeFreqSupport const &)
```

**Parameters**:

* TimeFreqSupport const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::TimeFreqSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1afa5cdfa726a0af0a13c6e8ad30a5193a"></a>
### Function TimeFreqSupport

![][public]

```cpp
ansys::dpf::TimeFreqSupport::TimeFreqSupport(TimeFreqSupport &&) noexcept
```

**Parameters**:

* TimeFreqSupport &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::TimeFreqSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a07bc20195f72ad854db1c75d86bbc650"></a>
### Function operator=

![][public]

```cpp
TimeFreqSupport & ansys::dpf::TimeFreqSupport::operator=(TimeFreqSupport const &)
```

**Parameters**:

* TimeFreqSupport const &

**Return type**: TimeFreqSupport &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a5e294f5e0106f102b5392cc837a249fa"></a>
### Function operator=

![][public]

```cpp
TimeFreqSupport & ansys::dpf::TimeFreqSupport::operator=(TimeFreqSupport &&) noexcept
```

**Parameters**:

* TimeFreqSupport &&

**Return type**: TimeFreqSupport &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a87c577de73b5ba2260cf3f940ac43068"></a>
### Function numberOfSets

![][public]
![][const]

```cpp
dp_int ansys::dpf::TimeFreqSupport::numberOfSets() const
```

**Returns**:

Number of time frequency sets.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::numberOfSets"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a6b3cc037c0283450ac0234dadeddd1b6"></a>
### Function numberOfSteps

![][public]
![][const]

```cpp
dp_int ansys::dpf::TimeFreqSupport::numberOfSteps() const
```

**Returns**:

Number of steps.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::numberOfSteps"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a4333cdbfac1c49f802a9c33a18970ed5"></a>
### Function numberOfSubStepsByStepIndex

![][public]
![][const]

```cpp
dp_int ansys::dpf::TimeFreqSupport::numberOfSubStepsByStepIndex(dp_int stepIndex) const
```

**Returns**:

Number of sub steps for a given step index (0 based).

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **stepIndex**

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::numberOfSubStepsByStepIndex"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a190d202d30643f5ea398555b5dbea12b"></a>
### Function numberOfSubStepsByStepId

![][public]
![][const]

```cpp
dp_int ansys::dpf::TimeFreqSupport::numberOfSubStepsByStepId(dp_int stepId) const
```

**Returns**:

Number of sub steps for a given step id.

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **stepId**

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::numberOfSubStepsByStepId"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a018ae91fba33d3a61360c659a3fa49c8"></a>
### Function getSetIndexByStepIndexAndSubStep

![][public]
![][const]

```cpp
dp_int ansys::dpf::TimeFreqSupport::getSetIndexByStepIndexAndSubStep(dp_int step, dp_int sub_step) const
```

**Returns**:

set index (0 based) at a given step index and substep index.

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **step**
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **sub_step**

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::getSetIndexByStepIndexAndSubStep"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a85a5cf293b3c72cdfa0668450aba6673"></a>
### Function getImaginaryFreqByStep

![][public]
![][const]

```cpp
dp_double ansys::dpf::TimeFreqSupport::getImaginaryFreqByStep(dp_index step, dp_index sub_step) const
```

**Returns**:

imaginary frequency at a given step index and substep indices.

**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **step**: [in] step index (0 based).
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **sub_step**: [in] sub_step index (0 based).

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::getImaginaryFreqByStep"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1abb6ca8360c5db93383e00db82cfcfa3f"></a>
### Function getTimeFreqByStep

![][public]
![][const]

```cpp
dp_double ansys::dpf::TimeFreqSupport::getTimeFreqByStep(dp_index step, dp_index sub_step) const
```

**Returns**:

time frequency at a given step index and substep indices.

**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **step**: [in] step index (0 based).
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **sub_step**: [in] sub_step index (0 based).

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::getTimeFreqByStep"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1afaa513e5f4410b3a5f2fee984f41065c"></a>
### Function getImaginaryFreqSetIndexByValue

![][public]
![][const]

```cpp
dp_int ansys::dpf::TimeFreqSupport::getImaginaryFreqSetIndexByValue(dp_double frequency) const
```

**Returns**:

set index (0 based) for given imaginary frequency.

**Parameters**:

* [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) **frequency**

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::getImaginaryFreqSetIndexByValue"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a85e297af28a24a226cff64338b1a6326"></a>
### Function getSetIndexByTimeFreq

![][public]
![][const]

```cpp
dp_int ansys::dpf::TimeFreqSupport::getSetIndexByTimeFreq(dp_double frequency) const
```

**Returns**:

set index (0 based) for given time frequency.

**Parameters**:

* [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) **frequency**

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::getSetIndexByTimeFreq"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a9596196456260be8d2899952dff29c64"></a>
### Function getStepAndSubStep

![][public]
![][const]

```cpp
std::pair< dp_id, dp_index > ansys::dpf::TimeFreqSupport::getStepAndSubStep(int cumulative_index) const
```

**Returns**:

step index and substep at a given set index (0 based).

**Parameters**:

* int **cumulative_index**

**Return type**: std::pair< [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e), [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::getStepAndSubStep"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1aa0cf046a80d328f966892abe85308f01"></a>
### Function frequencies

![][public]
![][const]

```cpp
Field ansys::dpf::TimeFreqSupport::frequencies() const
```

**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) associated with time frequency.

**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::frequencies"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a21319848f5f197398148551cbb74d4a0"></a>
### Function imaginaryFrequencies

![][public]
![][const]

```cpp
Field ansys::dpf::TimeFreqSupport::imaginaryFrequencies() const
```

**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) associated with imaginary part of time frequency.

**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::imaginaryFrequencies"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1aa2e1dacc70c07e6d6ba401748e3d822e"></a>
### Function rpms

![][public]
![][const]

```cpp
Field ansys::dpf::TimeFreqSupport::rpms() const
```

**Returns**:

RPMS associated with time frequency.

**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::rpms"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a101268a027373331f52244f52eb8b0d1"></a>
### Function harmonicIndeces

![][public]
![][const]

```cpp
Field ansys::dpf::TimeFreqSupport::harmonicIndeces(dp_int stage=0) const
```

**Returns**:

Harmonic indices associated with time frequency.

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **stage** = 0 

**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::harmonicIndeces"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1ae138ce323b476464e3e114750eb5d686"></a>
### Function timeFrequenciesSubstepIds

![][public]
![][const]

```cpp
PropertyField ansys::dpf::TimeFreqSupport::timeFrequenciesSubstepIds() const
```

**Returns**:

substep id associated with time frequency.

**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::timeFrequenciesSubstepIds"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a4428c07ba03b6cf3dc65279cf8f2c08f"></a>
### Function harmonicIndicesScoping

![][public]
![][const]

```cpp
Scoping ansys::dpf::TimeFreqSupport::harmonicIndicesScoping() const
```

**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) containing all the stage numbers of the [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport).

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::harmonicIndicesScoping"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1aee5b3fa99be60b203563cf58f2a78321"></a>
### Function numberOfSingularSets

![][public]
![][const]

```cpp
dp_int ansys::dpf::TimeFreqSupport::numberOfSingularSets() const
```

**Returns**:

Number of unique time frequency entries.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::numberOfSingularSets"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1aa01a23bf27be8e42ce3ec1da5e0ddcbe"></a>
### Function setTimeFrequencies

![][public]

```cpp
void ansys::dpf::TimeFreqSupport::setTimeFrequencies(Field field)
```

Set time frequency from given field.

**Parameters**:

* Field **field**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) from which to set time frequency.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::setTimeFrequencies"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a934891bcade52745e6e80b7bf74193cf"></a>
### Function setImaginaryFrequencies

![][public]

```cpp
void ansys::dpf::TimeFreqSupport::setImaginaryFrequencies(Field field)
```

Set imaginary part of time frequency from given field.

**Parameters**:

* Field **field**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) from which to set imaginary part of time frequency.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::setImaginaryFrequencies"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a855a9819d41665a1d9177fd8f67fa3f1"></a>
### Function setRpms

![][public]

```cpp
void ansys::dpf::TimeFreqSupport::setRpms(Field field)
```

Set rpms of time frequency support from given field.

**Parameters**:

* Field **field**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) from which to set imaginary part of time frequency.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::setRpms"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a233c06f8d1967b7254dcf96df613e359"></a>
### Function setHarmonicIndices

![][public]

```cpp
void ansys::dpf::TimeFreqSupport::setHarmonicIndices(Field field, dp_int stage=0)
```

Set harmonic indices of time frequency support from given field for a specified stage.

**Parameters**:

* Field **field**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) from which to set imaginary part of time frequency.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **stage** = 0 : [in] Optional stage number (default is 0).

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::setHarmonicIndices"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1ab4822e8cee3be5c03badce0e4cea3991"></a>
### Function boundingCumulativeIndecesOfTimeFreq

![][public]
![][const]

```cpp
std::pair< dp_int, dp_int > ansys::dpf::TimeFreqSupport::boundingCumulativeIndecesOfTimeFreq(double time_freq, int loadstep=0) const
```

**Returns**:

Bounding indices for given time time frequency and load step.

**Parameters**:

* double **time_freq**: [in] Time frequency for which to find bounding indices.
* int **loadstep** = 0 : [in] Optional load step.

**Return type**: std::pair< [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0), [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::boundingCumulativeIndecesOfTimeFreq"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a15d6bc620aadd070c1bb027a075ce0cd"></a>
### Function timeFreq

![][public]
![][const]

```cpp
dp_double ansys::dpf::TimeFreqSupport::timeFreq(dp_int cumul_index, dp_int complex_id=0) const
```

**Returns**:

Time/Frequency for given index.

**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **cumul_index**: [in] Index for which to get time frequency.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **complex_id** = 0 : [in] Optional non-zero indicates to get imaginary part of time frequency.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::timeFreq"}]}`
-->

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a3addff6333f65b2ea810d7033315ac1c"></a>
### Function deep\_copy

![][public]
![][const]

```cpp
TimeFreqSupport ansys::dpf::TimeFreqSupport::deep_copy(ansys::dpf::Client const *const client=nullptr) const
```

Create a new [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) on a server by copying all the data of this [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport).

**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: TimeFreqSupport

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::deep_copy"}]}`
-->

## Public static functions

<a id="classansys_1_1dpf_1_1TimeFreqSupport_1a7e75bb0b6e75fce04a882b70f9a48c17"></a>
### Function emptyTimeFreqSupport

![][public]
![][static]

```cpp
static TimeFreqSupport ansys::dpf::TimeFreqSupport::emptyTimeFreqSupport()
```

**Return type**: TimeFreqSupport

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::TimeFreqSupport::emptyTimeFreqSupport"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)