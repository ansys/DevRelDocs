<a id="classansys_1_1dpf_1_1Result"></a>
# Class ansys::dpf::Result

![][C++]
![][public]

**Definition**: `helpers/dpf\_result.h` (line 10)



Encapsulation of results.

## Members

* [\_dpfError](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a7f0892a07d630d2876e0e4209bdb6464)
* [\_workflow](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1adf60db3eb1839392174c09a7b9caaf5b)
* [EvaluateAmplitudeAtGivenStepIndexAndSubStep](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a5e672dee634e76b8a9782cdfab42461b)
* [EvaluateAmplitudeAtGivenTime](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a439090991ae8107589374384bfca4933)
* [EvaluateAmplitudeAtGivenTimeIndex](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a3df1f87059794e3ff557ccc63b99b171)
* [EvaluateAtGivenStepIndexAndSubStep](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1af60979c0660e293e0eff722767939814)
* [EvaluateAtGivenTime](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1ac8e07e03eba295dacfe13a100603d5c4)
* [EvaluateAtGivenTimeIndex](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1aaf145866535c0773a9ba3524b1f65743)
* [EvaluateOutputAtGivenSetIndex](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a07b684f47798385b4c85d9a2f2b4b0b1)
* [EvaluateOutputAtGivenStepIndexAndSubStep](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a666b22e498393efaf178fc780f7d9509)
* [EvaluateOutputAtGivenTime](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1aa018a0882c52967af9014d4f54368fda)
* [EvaluateWithPhaseAtGivenStepIndexAndSubStep](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a75a2c05527109af736a19ca1156d85a2)
* [EvaluateWithPhaseAtGivenTime](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a53d7529964052d14a60ee1d53f6d1d06)
* [EvaluateWithPhaseAtGivenTimeIndex](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1ae1d940c0f56673f96d91716dc736d17f)
* [init](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1af2639672425bc9cae75264b473997d1e)
* [init](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a12ed474ccc00a06e12e0bb72f05ff6fd)
* [Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a73de9b4b151118e388e2985a4c88fa4a)
* [Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a83f9071125be65acbd5319b0e9f44699)
* [Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a5ede8932a39a76dc06b9b3b1d21ed606)
* [Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a0087535ae7c95ba3720b5875ad54025b)
* [~Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result_1a19aea748b4d29d9431c4c31e4a1d16f0)

## Private attributes

<a id="classansys_1_1dpf_1_1Result_1adf60db3eb1839392174c09a7b9caaf5b"></a>
### Variable \_workflow

![][private]

**Definition**: `helpers/dpf\_result.h` (line 199)


```cpp
Workflow ansys::dpf::Result::_workflow
```








**Type**: Workflow

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::_workflow"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a7f0892a07d630d2876e0e4209bdb6464"></a>
### Variable \_dpfError

![][private]

**Definition**: `helpers/dpf\_result.h` (line 200)


```cpp
DpfError ansys::dpf::Result::_dpfError
```








**Type**: [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::_dpfError"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1Result_1a73de9b4b151118e388e2985a4c88fa4a"></a>
### Function Result

![][public]


```cpp
ansys::dpf::Result::Result(const char *res_name, Operator &stream_provider, Operator &timefreq_support_provider)
```




Create a new result from res_name using given stream and timefreq.



**Parameters**:

* const char * **res_name**: [in] Name of result on which to create result.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **stream_provider**: [in] Stream from which to create result.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **timefreq_support_provider**: [in] Time/frequency from which to create result.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::Result"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a83f9071125be65acbd5319b0e9f44699"></a>
### Function Result

![][public]


```cpp
ansys::dpf::Result::Result(const char *res_name, Operator &stream_provider, Operator &timefreq_support_provider, Scoping meshScoping)
```




Create a new result from res_name using given stream, timefreq, and scoping.



**Parameters**:

* const char * **res_name**: [in] Name of result on which to create result.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **stream_provider**: [in] Stream from which to create result.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **timefreq_support_provider**: [in] Time/frequency from which to create result.
* [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) **meshScoping**: [in] [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) from which to create result.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::Result"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a5ede8932a39a76dc06b9b3b1d21ed606"></a>
### Function Result

![][public]


```cpp
ansys::dpf::Result::Result(const char *res_name, Operator &stream_provider, Operator &timefreq_support_provider, Scoping meshScoping, Location requested_location, int cs_id)
```




Create a new result from res_name using given stream, timefreq, scoping, and location.



**Parameters**:

* const char * **res_name**: [in] Name of result on which to create result.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **stream_provider**: [in] Stream from which to create result.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **timefreq_support_provider**: [in] Time/frequency from which to create result.
* [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) **meshScoping**: [in] Scoping from which to create result.
* [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) **requested_location**: [in] Location on which to create result.
* int **cs_id**: [in] Not used.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::Result"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a0087535ae7c95ba3720b5875ad54025b"></a>
### Function Result

![][public]


```cpp
ansys::dpf::Result::Result(const char *res_name, Operator &stream_provider, Operator &timefreq_support_provider, Operator &mesh_provider, const char *named_selection, Location requested_location, bool bInclusive, int cs_id)
```




Create a new result from res_name using given stream, timefreq, mesh, named_selection, and location.



**Parameters**:

* const char * **res_name**: [in] Name of result on which to create result.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **stream_provider**: [in] Stream from which to create result.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **timefreq_support_provider**: [in] Time/frequency from which to create result.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **mesh_provider**: [in] Mesh from which to create result.
* const char * **named_selection**: [in] Named selection from which to create result.
* [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) **requested_location**: [in] Location on which to create result.
* bool **bInclusive**: [in] If named_selection is a nodal region and location is elemental, this flag indicates to include full/partial contained elements in named_selection.
* int **cs_id**: [in] Not used.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::Result"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a19aea748b4d29d9431c4c31e4a1d16f0"></a>
### Function ~Result

![][public]


```cpp
virtual ansys::dpf::Result::~Result()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::~Result"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1ac8e07e03eba295dacfe13a100603d5c4"></a>
### Function EvaluateAtGivenTime

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateAtGivenTime(double dTime, DpfError &error)
```




Get the fields associated with results at a given time. 
**Returns**:

FieldsContainer for given time.



**Parameters**:

* double **dTime**: [in] Time for which to get fields.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAtGivenTime"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1aaf145866535c0773a9ba3524b1f65743"></a>
### Function EvaluateAtGivenTimeIndex

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateAtGivenTimeIndex(dp_int iSet, DpfError &error)
```




Get the fields associated with results at given [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) index. 
**Returns**:

FieldsContainer for given time/frequency index.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **iSet**: [in] Index of [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport).
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAtGivenTimeIndex"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1af60979c0660e293e0eff722767939814"></a>
### Function EvaluateAtGivenStepIndexAndSubStep

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateAtGivenStepIndexAndSubStep(dp_int iStep, dp_int iSubStep, DpfError &error)
```




Results are evaluated for at a given [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport). This is arranged in [TimeFreqSupport::numberOfSteps](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a6b3cc037c0283450ac0234dadeddd1b6) groups of size [TimeFreqSupport::numberOfSubStepsByStepIndex](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a4333cdbfac1c49f802a9c33a18970ed5). 
**Returns**:

FieldsContainer for given step and substep index.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **iStep**: [in] Grouping index.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **iSubStep**: [in] Subgrouping index.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAtGivenStepIndexAndSubStep"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a439090991ae8107589374384bfca4933"></a>
### Function EvaluateAmplitudeAtGivenTime

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateAmplitudeAtGivenTime(double dTime, DpfError &error)
```




Get the amplitude of the real and imaginary part of results at a given time. 
**Returns**:

FieldsContainer for given time.



**Parameters**:

* double **dTime**: [in] Time for which to get fields.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAmplitudeAtGivenTime"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a3df1f87059794e3ff557ccc63b99b171"></a>
### Function EvaluateAmplitudeAtGivenTimeIndex

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateAmplitudeAtGivenTimeIndex(int iSet, DpfError &error)
```




Get the amplitude of the real and imaginary part of results of given [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) index. 
**Returns**:

[FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) for given [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) index.



**Parameters**:

* int **iSet**: [in] Index of [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport).
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAmplitudeAtGivenTimeIndex"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a5e672dee634e76b8a9782cdfab42461b"></a>
### Function EvaluateAmplitudeAtGivenStepIndexAndSubStep

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateAmplitudeAtGivenStepIndexAndSubStep(int iStep, int iSubStep, DpfError &error)
```




Get the amplitude of the real and imaginary part of results of given [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport). Results are evaluated at a given [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport). This is arranged in [TimeFreqSupport::numberOfSteps](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a6b3cc037c0283450ac0234dadeddd1b6) groups of size [TimeFreqSupport::numberOfSubStepsByStepIndex](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a4333cdbfac1c49f802a9c33a18970ed5). 
**Returns**:

FieldsContainer for given step and substep index.



**Parameters**:

* int **iStep**: [in] Grouping index.
* int **iSubStep**: [in] Subgrouping index.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAmplitudeAtGivenStepIndexAndSubStep"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a53d7529964052d14a60ee1d53f6d1d06"></a>
### Function EvaluateWithPhaseAtGivenTime

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateWithPhaseAtGivenTime(double dTime, double dPhase, DpfError &error)
```




Get the sweeping phase at a given time and phase. 
**Returns**:

FieldsContainer for given time and phase.



**Parameters**:

* double **dTime**: [in] Time for which to get fields.
* double **dPhase**: [in] Phase angle measured in degrees.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateWithPhaseAtGivenTime"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1ae1d940c0f56673f96d91716dc736d17f"></a>
### Function EvaluateWithPhaseAtGivenTimeIndex

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateWithPhaseAtGivenTimeIndex(int iSet, double dPhase, DpfError &error)
```




Get the sweeping phase at given [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) index and phase 
**Returns**:

[FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) for given [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) index and phase.



**Parameters**:

* int **iSet**: [in] Index of [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport).
* double **dPhase**: [in] Phase angle measured in degrees.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateWithPhaseAtGivenTimeIndex"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a75a2c05527109af736a19ca1156d85a2"></a>
### Function EvaluateWithPhaseAtGivenStepIndexAndSubStep

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateWithPhaseAtGivenStepIndexAndSubStep(int iStep, int iSubStep, double dPhase, DpfError &error)
```




Get the sweeping phase at given [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) and phase. Results are evaluated at a given [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport). This is arranged in [TimeFreqSupport::numberOfSteps](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a6b3cc037c0283450ac0234dadeddd1b6) groups of size [TimeFreqSupport::numberOfSubStepsByStepIndex](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport_1a4333cdbfac1c49f802a9c33a18970ed5). 
**Returns**:

FieldsContainer for given step and substep index and phase.



**Parameters**:

* int **iStep**: [in] Grouping index.
* int **iSubStep**: [in] Subgrouping index.
* double **dPhase**: [in] Phase angle measured in degrees.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateWithPhaseAtGivenStepIndexAndSubStep"}]}`
-->

## Private functions

<a id="classansys_1_1dpf_1_1Result_1aa018a0882c52967af9014d4f54368fda"></a>
### Function EvaluateOutputAtGivenTime

![][private]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateOutputAtGivenTime(double dTime, double dPhase, const char *output, DpfError &error)
```








**Parameters**:

* double **dTime**
* double **dPhase**
* const char * **output**
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateOutputAtGivenTime"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a07b684f47798385b4c85d9a2f2b4b0b1"></a>
### Function EvaluateOutputAtGivenSetIndex

![][private]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateOutputAtGivenSetIndex(dp_int iSet, double dPhase, const char *output, DpfError &error)
```








**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **iSet**
* double **dPhase**
* const char * **output**
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateOutputAtGivenSetIndex"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a666b22e498393efaf178fc780f7d9509"></a>
### Function EvaluateOutputAtGivenStepIndexAndSubStep

![][private]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateOutputAtGivenStepIndexAndSubStep(dp_int iStep, dp_int iSubStep, double dPhase, const char *output, DpfError &error)
```








**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **iStep**
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **iSubStep**
* double **dPhase**
* const char * **output**
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateOutputAtGivenStepIndexAndSubStep"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1af2639672425bc9cae75264b473997d1e"></a>
### Function init

![][private]


```cpp
void ansys::dpf::Result::init(const char *res_name, Operator &stream_provider, Operator &timefreq_support_provider, Scoping meshScoping, Location requested_location, int)
```








**Parameters**:

* const char * **res_name**
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **stream_provider**
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **timefreq_support_provider**
* [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) **meshScoping**
* [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) **requested_location**
* int

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::init"}]}`
-->

<a id="classansys_1_1dpf_1_1Result_1a12ed474ccc00a06e12e0bb72f05ff6fd"></a>
### Function init

![][private]


```cpp
void ansys::dpf::Result::init(const char *res_name, Operator &stream_provider, Operator &timefreq_support_provider, Operator &mesh_provider, const char *named_selection, Location requested_location, bool bInclusive, int cs_id)
```








**Parameters**:

* const char * **res_name**
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **stream_provider**
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **timefreq_support_provider**
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **mesh_provider**
* const char * **named_selection**
* [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) **requested_location**
* bool **bInclusive**
* int **cs_id**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::init"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_result.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)