---
title: "Type fortran::syscfacedataf undefined"
---

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 314)





## Members

* [facecellconnectivity](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscfacedataf)
* [faceids](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscfacedataf)
* [facenodeconnectivity](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscfacedataf)
* [facenodecounts](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscfacedataf)
* [facetypes](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscfacedataf)

## Public attributes

<a id="structfortran_1_1syscfacedataf_1ac15be376d8a7d00e486707ac0269056e"></a>
### Variable faceids

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 315)

```fortran
type(syscelementiddataf) faceids
```

Face ids.





**Type**: type([syscelementiddataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscelementiddataf))

<a id="structfortran_1_1syscfacedataf_1acb27a555d3934aa9aac98ece4c77b167"></a>
### Variable facetypes

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 316)

```fortran
type(syscelementtypedataf) facetypes
```

Face types.





**Type**: type([syscelementtypedataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscelementtypedataf))

<a id="structfortran_1_1syscfacedataf_1a2abe8c3dbc5763c1d6a59c79a2e14e79"></a>
### Variable facenodecounts

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 317)

```fortran
type(syscelementnodecountdataf) facenodecounts
```

Node counts.





**Type**: type([syscelementnodecountdataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscelementnodecountdataf))

<a id="structfortran_1_1syscfacedataf_1a62c5148ef54c724d306a1d2ed512ccf1"></a>
### Variable facenodeconnectivity

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 318)

```fortran
type(syscelementnodeconnectivitydataf) facenodeconnectivity
```







**Type**: type([syscelementnodeconnectivitydataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscelementnodeconnectivitydataf))

<a id="structfortran_1_1syscfacedataf_1a60fd49965317a12753680728055cddcf"></a>
### Variable facecellconnectivity

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 319)

```fortran
type(syscfacecellconnectivitydataf) facecellconnectivity
```







**Type**: type([syscfacecellconnectivitydataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscfacecellconnectivitydataf))

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)