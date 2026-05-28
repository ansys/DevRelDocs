---
title: "Type fortran::syscsurfacemeshf undefined"
---

![][Fortran]
![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 15)

Provide a surface mesh access type.

Provides read-only access to the surface mesh for a given region.

## Members

* [elemnodeconnectivity](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscsurfacemeshf)
* [elemnodecounts](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscsurfacemeshf)
* [elemtypes](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscsurfacemeshf)
* [nodes](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscsurfacemeshf)

## Public attributes

<a id="structfortran_1_1syscsurfacemeshf_1a9ce996d7ce626bd972c2fe728972b2bd"></a>
### Variable nodes

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 16)

```fortran
type(syscnodedataf) nodes
```

Mesh nodes.





**Type**: type([syscnodedataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscnodedataf))

<a id="structfortran_1_1syscsurfacemeshf_1aa4c13b40a8b3c4dc57890e2f7d16e18d"></a>
### Variable elemtypes

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 18)

```fortran
type(syscelementtypedataf) elemtypes
```

Element types.





**Type**: type([syscelementtypedataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscelementtypedataf))

<a id="structfortran_1_1syscsurfacemeshf_1a3b72f19f2839c6e886262e06169bd7a6"></a>
### Variable elemnodecounts

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 20)

```fortran
type(syscelementnodecountdataf) elemnodecounts
```

Element node counts.





**Type**: type([syscelementnodecountdataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscelementnodecountdataf))

<a id="structfortran_1_1syscsurfacemeshf_1a9290f7f869ea24a59042049afd7ec878"></a>
### Variable elemnodeconnectivity

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 22)

```fortran
type(syscelementnodeconnectivitydataf) elemnodeconnectivity
```

Element-to-node connectivity.





**Type**: type([syscelementnodeconnectivitydataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscelementnodeconnectivitydataf))

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)