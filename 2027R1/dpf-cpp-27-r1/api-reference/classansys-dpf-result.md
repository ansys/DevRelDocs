# Class ansys::dpf::Result

<a id="classansys-dpf-result"></a>

![][C++]
![][public]



Encapsulation of results.

## Members

* [EvaluateAmplitudeAtGivenStepIndexAndSubStep](classansys-dpf-result.md#classansys-dpf-result-1a5e672dee634e76b8a9782cdfab42461b)
* [EvaluateAmplitudeAtGivenTime](classansys-dpf-result.md#classansys-dpf-result-1a439090991ae8107589374384bfca4933)
* [EvaluateAmplitudeAtGivenTimeIndex](classansys-dpf-result.md#classansys-dpf-result-1a3df1f87059794e3ff557ccc63b99b171)
* [EvaluateAtGivenStepIndexAndSubStep](classansys-dpf-result.md#classansys-dpf-result-1af60979c0660e293e0eff722767939814)
* [EvaluateAtGivenTime](classansys-dpf-result.md#classansys-dpf-result-1ac8e07e03eba295dacfe13a100603d5c4)
* [EvaluateAtGivenTimeIndex](classansys-dpf-result.md#classansys-dpf-result-1aaf145866535c0773a9ba3524b1f65743)
* [EvaluateWithPhaseAtGivenStepIndexAndSubStep](classansys-dpf-result.md#classansys-dpf-result-1a75a2c05527109af736a19ca1156d85a2)
* [EvaluateWithPhaseAtGivenTime](classansys-dpf-result.md#classansys-dpf-result-1a53d7529964052d14a60ee1d53f6d1d06)
* [EvaluateWithPhaseAtGivenTimeIndex](classansys-dpf-result.md#classansys-dpf-result-1ae1d940c0f56673f96d91716dc736d17f)
* [Result](classansys-dpf-result.md#classansys-dpf-result-1a73de9b4b151118e388e2985a4c88fa4a)
* [Result](classansys-dpf-result.md#classansys-dpf-result-1a83f9071125be65acbd5319b0e9f44699)
* [Result](classansys-dpf-result.md#classansys-dpf-result-1a5ede8932a39a76dc06b9b3b1d21ed606)
* [Result](classansys-dpf-result.md#classansys-dpf-result-1a0087535ae7c95ba3720b5875ad54025b)
* [~Result](classansys-dpf-result.md#classansys-dpf-result-1a19aea748b4d29d9431c4c31e4a1d16f0)

## Public functions

<a id="classansys-dpf-result-1a73de9b4b151118e388e2985a4c88fa4a"></a>
### Function Result

![][public]


```cpp
ansys::dpf::Result::Result(const char *res_name, Operator &stream_provider, Operator &timefreq_support_provider)
```




Create a new result from res_name using given stream and timefreq.



**Parameters**:

* const char * **res_name**: [in] Name of result on which to create result.
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **stream_provider**: [in] Stream from which to create result.
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **timefreq_support_provider**: [in] Time/frequency from which to create result.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::Result"}]}`
-->

<a id="classansys-dpf-result-1a83f9071125be65acbd5319b0e9f44699"></a>
### Function Result

![][public]


```cpp
ansys::dpf::Result::Result(const char *res_name, Operator &stream_provider, Operator &timefreq_support_provider, Scoping meshScoping)
```




Create a new result from res_name using given stream, timefreq, and scoping.



**Parameters**:

* const char * **res_name**: [in] Name of result on which to create result.
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **stream_provider**: [in] Stream from which to create result.
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **timefreq_support_provider**: [in] Time/frequency from which to create result.
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) **meshScoping**: [in] [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) from which to create result.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::Result"}]}`
-->

<a id="classansys-dpf-result-1a5ede8932a39a76dc06b9b3b1d21ed606"></a>
### Function Result

![][public]


```cpp
ansys::dpf::Result::Result(const char *res_name, Operator &stream_provider, Operator &timefreq_support_provider, Scoping meshScoping, Location requested_location, int cs_id)
```




Create a new result from res_name using given stream, timefreq, scoping, and location.



**Parameters**:

* const char * **res_name**: [in] Name of result on which to create result.
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **stream_provider**: [in] Stream from which to create result.
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **timefreq_support_provider**: [in] Time/frequency from which to create result.
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) **meshScoping**: [in] Scoping from which to create result.
* [Location](structansys-dpf-location.md#structansys-dpf-location) **requested_location**: [in] Location on which to create result.
* int **cs_id**: [in] Not used.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::Result"}]}`
-->

<a id="classansys-dpf-result-1a0087535ae7c95ba3720b5875ad54025b"></a>
### Function Result

![][public]


```cpp
ansys::dpf::Result::Result(const char *res_name, Operator &stream_provider, Operator &timefreq_support_provider, Operator &mesh_provider, const char *named_selection, Location requested_location, bool bInclusive, int cs_id)
```




Create a new result from res_name using given stream, timefreq, mesh, named_selection, and location.



**Parameters**:

* const char * **res_name**: [in] Name of result on which to create result.
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **stream_provider**: [in] Stream from which to create result.
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **timefreq_support_provider**: [in] Time/frequency from which to create result.
* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **mesh_provider**: [in] Mesh from which to create result.
* const char * **named_selection**: [in] Named selection from which to create result.
* [Location](structansys-dpf-location.md#structansys-dpf-location) **requested_location**: [in] Location on which to create result.
* bool **bInclusive**: [in] If named_selection is a nodal region and location is elemental, this flag indicates to include full/partial contained elements in named_selection.
* int **cs_id**: [in] Not used.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::Result"}]}`
-->

<a id="classansys-dpf-result-1a19aea748b4d29d9431c4c31e4a1d16f0"></a>
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

<a id="classansys-dpf-result-1ac8e07e03eba295dacfe13a100603d5c4"></a>
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
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAtGivenTime"}]}`
-->

<a id="classansys-dpf-result-1aaf145866535c0773a9ba3524b1f65743"></a>
### Function EvaluateAtGivenTimeIndex

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateAtGivenTimeIndex(dp_int iSet, DpfError &error)
```




Get the fields associated with results at given [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport) index. 
**Returns**:

FieldsContainer for given time/frequency index.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **iSet**: [in] Index of [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport).
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAtGivenTimeIndex"}]}`
-->

<a id="classansys-dpf-result-1af60979c0660e293e0eff722767939814"></a>
### Function EvaluateAtGivenStepIndexAndSubStep

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateAtGivenStepIndexAndSubStep(dp_int iStep, dp_int iSubStep, DpfError &error)
```




Results are evaluated for at a given [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport). This is arranged in [TimeFreqSupport::numberOfSteps](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport-1a6b3cc037c0283450ac0234dadeddd1b6) groups of size [TimeFreqSupport::numberOfSubStepsByStepIndex](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport-1a4333cdbfac1c49f802a9c33a18970ed5). 
**Returns**:

FieldsContainer for given step and substep index.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **iStep**: [in] Grouping index.
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **iSubStep**: [in] Subgrouping index.
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAtGivenStepIndexAndSubStep"}]}`
-->

<a id="classansys-dpf-result-1a439090991ae8107589374384bfca4933"></a>
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
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAmplitudeAtGivenTime"}]}`
-->

<a id="classansys-dpf-result-1a3df1f87059794e3ff557ccc63b99b171"></a>
### Function EvaluateAmplitudeAtGivenTimeIndex

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateAmplitudeAtGivenTimeIndex(int iSet, DpfError &error)
```




Get the amplitude of the real and imaginary part of results of given [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport) index. 
**Returns**:

[FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer) for given [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport) index.



**Parameters**:

* int **iSet**: [in] Index of [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport).
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAmplitudeAtGivenTimeIndex"}]}`
-->

<a id="classansys-dpf-result-1a5e672dee634e76b8a9782cdfab42461b"></a>
### Function EvaluateAmplitudeAtGivenStepIndexAndSubStep

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateAmplitudeAtGivenStepIndexAndSubStep(int iStep, int iSubStep, DpfError &error)
```




Get the amplitude of the real and imaginary part of results of given [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport). Results are evaluated at a given [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport). This is arranged in [TimeFreqSupport::numberOfSteps](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport-1a6b3cc037c0283450ac0234dadeddd1b6) groups of size [TimeFreqSupport::numberOfSubStepsByStepIndex](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport-1a4333cdbfac1c49f802a9c33a18970ed5). 
**Returns**:

FieldsContainer for given step and substep index.



**Parameters**:

* int **iStep**: [in] Grouping index.
* int **iSubStep**: [in] Subgrouping index.
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateAmplitudeAtGivenStepIndexAndSubStep"}]}`
-->

<a id="classansys-dpf-result-1a53d7529964052d14a60ee1d53f6d1d06"></a>
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
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateWithPhaseAtGivenTime"}]}`
-->

<a id="classansys-dpf-result-1ae1d940c0f56673f96d91716dc736d17f"></a>
### Function EvaluateWithPhaseAtGivenTimeIndex

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateWithPhaseAtGivenTimeIndex(int iSet, double dPhase, DpfError &error)
```




Get the sweeping phase at given [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport) index and phase 
**Returns**:

[FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer) for given [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport) index and phase.



**Parameters**:

* int **iSet**: [in] Index of [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport).
* double **dPhase**: [in] Phase angle measured in degrees.
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateWithPhaseAtGivenTimeIndex"}]}`
-->

<a id="classansys-dpf-result-1a75a2c05527109af736a19ca1156d85a2"></a>
### Function EvaluateWithPhaseAtGivenStepIndexAndSubStep

![][public]


```cpp
FieldsContainer ansys::dpf::Result::EvaluateWithPhaseAtGivenStepIndexAndSubStep(int iStep, int iSubStep, double dPhase, DpfError &error)
```




Get the sweeping phase at given [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport) and phase. Results are evaluated at a given [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport). This is arranged in [TimeFreqSupport::numberOfSteps](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport-1a6b3cc037c0283450ac0234dadeddd1b6) groups of size [TimeFreqSupport::numberOfSubStepsByStepIndex](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport-1a4333cdbfac1c49f802a9c33a18970ed5). 
**Returns**:

FieldsContainer for given step and substep index and phase.



**Parameters**:

* int **iStep**: [in] Grouping index.
* int **iSubStep**: [in] Subgrouping index.
* double **dPhase**: [in] Phase angle measured in degrees.
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Result::EvaluateWithPhaseAtGivenStepIndexAndSubStep"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_result.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)