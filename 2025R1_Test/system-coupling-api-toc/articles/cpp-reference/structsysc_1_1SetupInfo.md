# Structure sysc::SetupInfo

![][C++]
![][public]

**Definition**: `CommonTypes.hpp` (line 64)

Provide a structure for System Coupling setup information.



## Members

* [analysisType](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo_1a45906ec4c888b7d0fbd42066f318284b)
* [dimension](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo_1a9d7c8f147afec2b6269bec443296291d)
* [restartsSupported](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo_1a46dc0b1c447b1534103f3f05455ee717)
* [SetupInfo](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo_1ad821c9abdeb9d845889f33dc6cf33a30)
* [SetupInfo](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo_1a33ac9fc553fff914c295acf695b61efc)
* [SetupInfo](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo_1ab17e9d12184e6b93080eb71dac25a328)
* [SetupInfo](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo_1a0808c997023319d5ec2e7eb623a172cd)
* [SetupInfo](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo_1a2e9ea589149b80ffa4af670fb42defea)
* [timeIntegration](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo_1a11b9b07a31b9efe30b1ff2472b7a99e2)

## Public attributes

<a id="structsysc_1_1SetupInfo_1a45906ec4c888b7d0fbd42066f318284b"></a>
### Variable analysisType

![][public]

**Definition**: `CommonTypes.hpp` (line 122)

```cpp
AnalysisType sysc::SetupInfo::analysisType {Steady}
```



Analysis type.



**Type**: [AnalysisType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaffd523474fbd708f481a712f1841a967)

<a id="structsysc_1_1SetupInfo_1a46dc0b1c447b1534103f3f05455ee717"></a>
### Variable restartsSupported

![][public]

**Definition**: `CommonTypes.hpp` (line 124)

```cpp
bool sysc::SetupInfo::restartsSupported {false}
```



Flag indicating whether restarts are supported.



**Type**: bool

<a id="structsysc_1_1SetupInfo_1a9d7c8f147afec2b6269bec443296291d"></a>
### Variable dimension

![][public]

**Definition**: `CommonTypes.hpp` (line 125)

```cpp
Dimension sysc::SetupInfo::dimension {Dimension::D3}
```



Participant dimension



**Type**: [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c)

<a id="structsysc_1_1SetupInfo_1a11b9b07a31b9efe30b1ff2472b7a99e2"></a>
### Variable timeIntegration

![][public]

**Definition**: `CommonTypes.hpp` (line 126)

```cpp
TimeIntegration sysc::SetupInfo::timeIntegration {TimeIntegration::Implicit}
```



Time integration method



**Type**: [TimeIntegration](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad13ee117d1f4408660fa2e70ee27b454)

## Public functions

<a id="structsysc_1_1SetupInfo_1ad821c9abdeb9d845889f33dc6cf33a30"></a>
### Function SetupInfo

![][public]

```cpp
sysc::SetupInfo::SetupInfo()=default
```







**Return type**: 

<a id="structsysc_1_1SetupInfo_1a33ac9fc553fff914c295acf695b61efc"></a>
### Function SetupInfo

![][public]

```cpp
sysc::SetupInfo::SetupInfo(enum AnalysisType analysisType)
```

Provide a constructor for [SetupInfo](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo).

**Parameters**:

* **analysisType**: - analysis type.



**Parameters**:

* enum [AnalysisType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaffd523474fbd708f481a712f1841a967) **analysisType**

**Return type**: 

<a id="structsysc_1_1SetupInfo_1ab17e9d12184e6b93080eb71dac25a328"></a>
### Function SetupInfo

![][public]

```cpp
sysc::SetupInfo::SetupInfo(enum AnalysisType analysisType, bool restartsSupported)
```

Provide a constructor for [SetupInfo](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo).

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - flag indicating whether restarts are supported.



**Parameters**:

* enum [AnalysisType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaffd523474fbd708f481a712f1841a967) **analysisType**
* bool **restartsSupported**

**Return type**: 

<a id="structsysc_1_1SetupInfo_1a0808c997023319d5ec2e7eb623a172cd"></a>
### Function SetupInfo

![][public]

```cpp
sysc::SetupInfo::SetupInfo(enum AnalysisType analysisType, bool restartsSupported, enum Dimension dimension)
```

Provide a constructor for [SetupInfo](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo).

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - flag indicating whether restarts are supported.
* **Dimension**: - dimension of the participant.



**Parameters**:

* enum [AnalysisType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaffd523474fbd708f481a712f1841a967) **analysisType**
* bool **restartsSupported**
* enum [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="structsysc_1_1SetupInfo_1a2e9ea589149b80ffa4af670fb42defea"></a>
### Function SetupInfo

![][public]

```cpp
sysc::SetupInfo::SetupInfo(enum AnalysisType analysisType, bool restartsSupported, enum Dimension dimension, enum TimeIntegration timeIntegration)
```

Provide a constructor for [SetupInfo](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo).

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - flag indicating whether restarts are supported.
* **Dimension**: - dimension of the participant.
* **TimeIntegration**: - time integration method to use.



**Parameters**:

* enum [AnalysisType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaffd523474fbd708f481a712f1841a967) **analysisType**
* bool **restartsSupported**
* enum [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**
* enum [TimeIntegration](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad13ee117d1f4408660fa2e70ee27b454) **timeIntegration**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)