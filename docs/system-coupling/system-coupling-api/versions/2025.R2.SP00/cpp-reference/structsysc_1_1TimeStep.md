---
title: "Structure sysc::TimeStep"
---

![][C++]
![][public]

**Definition**: `CommonTypes.hpp` (line 42)

Provide a struct for time step.



## Members

* [startTime](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1TimeStep)
* [TimeStep](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1TimeStep)
* [TimeStep](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1TimeStep)
* [timeStepNumber](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1TimeStep)
* [timeStepSize](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1TimeStep)

## Public attributes

<a id="structsysc_1_1TimeStep_1ab8fbdd8e8dd4384d385c3190b11a2ccf"></a>
### Variable timeStepNumber

![][public]

**Definition**: `CommonTypes.hpp` (line 43)

```cpp
int sysc::TimeStep::timeStepNumber {0}
```



Time step number.



**Type**: int

<a id="structsysc_1_1TimeStep_1a115810021ec63279be6a82d5deb853c2"></a>
### Variable startTime

![][public]

**Definition**: `CommonTypes.hpp` (line 44)

```cpp
double sysc::TimeStep::startTime {0.0}
```



Time step start time.



**Type**: double

<a id="structsysc_1_1TimeStep_1a91d6e07b37c9c461ddfc8e85965321b2"></a>
### Variable timeStepSize

![][public]

**Definition**: `CommonTypes.hpp` (line 45)

```cpp
double sysc::TimeStep::timeStepSize {0.0}
```



Time step size (delta t).



**Type**: double

## Public functions

<a id="structsysc_1_1TimeStep_1a97ce4b55faaefbe7618a16b0363c092e"></a>
### Function TimeStep

![][public]

```cpp
sysc::TimeStep::TimeStep()=default
```

Provide a default constructor for [TimeStep](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1TimeStep).





**Return type**: 

<a id="structsysc_1_1TimeStep_1aa92d1684145d3aa5ed39d171d2100299"></a>
### Function TimeStep

![][public]

```cpp
sysc::TimeStep::TimeStep(int timeStepNumber, double startTime, double timeStepSize)
```

Provide a non-default constructor for [TimeStep](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1TimeStep).





**Parameters**:

* int **timeStepNumber**
* double **startTime**
* double **timeStepSize**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)