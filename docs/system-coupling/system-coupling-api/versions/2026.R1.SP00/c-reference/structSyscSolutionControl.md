---
title: "Structure SyscSolutionControl"
---

![][C]
![][public]

**Definition**: `syscCommonTypes.h` (line 131)

Provide a structure containing solution control.



## Members

* [maximumIterations](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscSolutionControl)
* [minimumIterations](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscSolutionControl)

## Public attributes

<a id="structSyscSolutionControl_1af68269f003f864fb6931168f6d131478"></a>
### Variable minimumIterations

![][public]

**Definition**: `syscCommonTypes.h` (line 132)

```
int SyscSolutionControl::minimumIterations
```



Min iterations (per time step, if transient).



**Type**: int

<a id="structSyscSolutionControl_1a197d10eabb539d2eff515cd3895d7b2e"></a>
### Variable maximumIterations

![][public]

**Definition**: `syscCommonTypes.h` (line 133)

```
int SyscSolutionControl::maximumIterations
```



Max iterations (per time step, if transient).



**Type**: int

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)