---
title: "Interface fortran::syscgetnodedataf"
---

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 31)





## Members

* [syscgetnodedataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetnodedataf)
* [syscgetnodedataf\_c](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetnodedataf)
* [syscgetnodedataf\_ic](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetnodedataf)

## Public functions

<a id="interfacefortran_1_1syscgetnodedataf_1ab0c2e03306ceb3c4874622518edf3cef"></a>
### Function syscgetnodedataf

![][public]

```fortran
type(syscnodedataf) function syscgetnodedataf()
```







**Return type**: type([syscnodedataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscnodedataf)) function

<a id="interfacefortran_1_1syscgetnodedataf_1a224ef609645a62ffa063d9dfbf289634"></a>
### Function syscgetnodedataf\_ic

![][public]

```fortran
type(syscnodedataf) function syscgetnodedataf_ic(nodeIds, nodeCoords)
```







**Parameters**:

* nodeIdsnodeIds
* nodeCoordsnodeCoords

**Return type**: type([syscnodedataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscnodedataf)) function

<a id="interfacefortran_1_1syscgetnodedataf_1ab16062b2cefc75ceeb5f817af11ab3e1"></a>
### Function syscgetnodedataf\_c

![][public]

```fortran
type(syscnodedataf) function syscgetnodedataf_c(nodeCoords)
```







**Parameters**:

* nodeCoordsnodeCoords

**Return type**: type([syscnodedataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscnodedataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)