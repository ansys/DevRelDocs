---
title: "Interface fortran::syscgetfacecellconnectivitydataf"
---

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 213)





## Members

* [syscgetfacecellconnectivitydataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetfacecellconnectivitydataf)
* [syscgetfacecellconnectivitydataf\_empty](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetfacecellconnectivitydataf)

## Public functions

<a id="interfacefortran_1_1syscgetfacecellconnectivitydataf_1a2fad0cc937dff1f68861627e3e634149"></a>
### Function syscgetfacecellconnectivitydataf\_empty

![][public]

```fortran
type(syscfacecellconnectivitydataf) function syscgetfacecellconnectivitydataf_empty()
```







**Return type**: type([syscfacecellconnectivitydataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscfacecellconnectivitydataf)) function

<a id="interfacefortran_1_1syscgetfacecellconnectivitydataf_1ad1b9647c20f4a1368fa4ceeec0a9028f"></a>
### Function syscgetfacecellconnectivitydataf

![][public]

```fortran
type(syscfacecellconnectivitydataf) function syscgetfacecellconnectivitydataf(cell0Ids, cell1Ids)
```







**Parameters**:

* cell0Idscell0Ids
* cell1Idscell1Ids

**Return type**: type([syscfacecellconnectivitydataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscfacecellconnectivitydataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)