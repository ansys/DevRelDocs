# Type fortran::syscsurfacemeshf undefined

![][Fortran]
![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 15)

Provide a surface mesh access type.

Provides read-only access to the surface mesh for a given region.

## Members

* [connectivitystamp](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf_1a4b3938b5f803cc4193e011bf7dc56377)
* [coordinatesstamp](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf_1aa66a6cff733b4f5ea50326c17bfafb1d)
* [elemnodeconnectivity](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf_1a9290f7f869ea24a59042049afd7ec878)
* [elemnodecounts](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf_1a3b72f19f2839c6e886262e06169bd7a6)
* [elemtypes](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf_1aa4c13b40a8b3c4dc57890e2f7d16e18d)
* [nodes](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf_1a9ce996d7ce626bd972c2fe728972b2bd)
* [partitioningstamp](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf_1afadcd8d9371a4040bd30a5d07c1f4027)

## Public attributes

<a id="structfortran_1_1syscsurfacemeshf_1a9ce996d7ce626bd972c2fe728972b2bd"></a>
### Variable nodes

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 16)


```fortran
type(syscnodedataf) nodes
```


Mesh nodes.





**Type**: type([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf))

<a id="structfortran_1_1syscsurfacemeshf_1aa4c13b40a8b3c4dc57890e2f7d16e18d"></a>
### Variable elemtypes

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 18)


```fortran
type(syscelementtypedataf) elemtypes
```


Element types.





**Type**: type([syscelementtypedataf](structfortran_1_1syscelementtypedataf.md#structfortran_1_1syscelementtypedataf))

<a id="structfortran_1_1syscsurfacemeshf_1a3b72f19f2839c6e886262e06169bd7a6"></a>
### Variable elemnodecounts

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 20)


```fortran
type(syscelementnodecountdataf) elemnodecounts
```


Element node counts.





**Type**: type([syscelementnodecountdataf](structfortran_1_1syscelementnodecountdataf.md#structfortran_1_1syscelementnodecountdataf))

<a id="structfortran_1_1syscsurfacemeshf_1a9290f7f869ea24a59042049afd7ec878"></a>
### Variable elemnodeconnectivity

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 22)


```fortran
type(syscelementnodeconnectivitydataf) elemnodeconnectivity
```


Element-to-node connectivity.





**Type**: type([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf))

<a id="structfortran_1_1syscsurfacemeshf_1a4b3938b5f803cc4193e011bf7dc56377"></a>
### Variable connectivitystamp

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 24)


```fortran
integer(kind=8) connectivitystamp
```


Connectivity stamp.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscsurfacemeshf_1aa66a6cff733b4f5ea50326c17bfafb1d"></a>
### Variable coordinatesstamp

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 26)


```fortran
integer(kind=8) coordinatesstamp
```


Coordinates stamp.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscsurfacemeshf_1afadcd8d9371a4040bd30a5d07c1f4027"></a>
### Variable partitioningstamp

![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 28)


```fortran
integer(kind=8) partitioningstamp
```


Partitioning stamp.





**Type**: integer(kind=8)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)