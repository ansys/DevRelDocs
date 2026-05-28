---
title: "Interface fortran::syscoutputscalardataaccessf"
---

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 54)

Provide function interface for access to output scalar data.



## Members

* [syscoutputscalardataaccessf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscoutputscalardataaccessf)

## Public functions

<a id="interfacefortran_1_1syscoutputscalardataaccessf_1a78ffc31d9271bad59d186ef93ffa7d89"></a>
### Function syscoutputscalardataaccessf

![][public]

```fortran
type(syscoutputscalardataf) function syscoutputscalardataaccessf(regionName, variableName)
```

Provide a function for access to output scalar data.

**Parameters**:

* **regionName**: - the name of the region
* **variableName**: - the name of the variable



**Parameters**:

* regionNameregionName
* variableNamevariableName

**Return type**: type([syscoutputscalardataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscoutputscalardataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)