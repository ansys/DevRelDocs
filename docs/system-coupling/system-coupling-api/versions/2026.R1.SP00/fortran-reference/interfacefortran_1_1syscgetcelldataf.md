---
title: "Interface fortran::syscgetcelldataf"
---

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 391)





## Members

* [syscgetcelldataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetcelldataf)
* [syscgetfacedataf\_i](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetcelldataf)
* [syscgetfacedataf\_tn](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetcelldataf)

## Public functions

<a id="interfacefortran_1_1syscgetcelldataf_1a48f9b149e7123172299ff88f71b26b80"></a>
### Function syscgetcelldataf

![][public]

```fortran
type(sysccelldataf) function syscgetcelldataf()
```







**Return type**: type([sysccelldataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1sysccelldataf)) function

<a id="interfacefortran_1_1syscgetcelldataf_1a650453591ca50d309f6262a1e63963e9"></a>
### Function syscgetfacedataf\_i

![][public]

```fortran
type(sysccelldataf) function syscgetfacedataf_i(cellIds)
```







**Parameters**:

* cellIdscellIds

**Return type**: type([sysccelldataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1sysccelldataf)) function

<a id="interfacefortran_1_1syscgetcelldataf_1ad82b8c8ff9ebbc59c102d46490dadf91"></a>
### Function syscgetfacedataf\_tn

![][public]

```fortran
type(sysccelldataf) function syscgetfacedataf_tn(cellTypes, cellNodeConnectivity)
```







**Parameters**:

* cellTypescellTypes
* cellNodeConnectivitycellNodeConnectivity

**Return type**: type([sysccelldataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1sysccelldataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)