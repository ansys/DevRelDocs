---
title: "Interface fortran::syscoutputvectordataaccessf"
---

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 73)

Provide function interface for access to output vector data.



## Members

* [syscoutputvectordataaccessf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscoutputvectordataaccessf)

## Public functions

<a id="interfacefortran_1_1syscoutputvectordataaccessf_1a3ad3c8f09f15aa0ae1f33b234b3bf382"></a>
### Function syscoutputvectordataaccessf

![][public]

```fortran
type(syscoutputvectordataf) function syscoutputvectordataaccessf(regionName, variableName)
```

Provide a function for access to output vector data.

**Parameters**:

* **regionName**: - the name of the region
* **variableName**: - the name of the variable



**Parameters**:

* regionNameregionName
* variableNamevariableName

**Return type**: type([syscoutputvectordataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)