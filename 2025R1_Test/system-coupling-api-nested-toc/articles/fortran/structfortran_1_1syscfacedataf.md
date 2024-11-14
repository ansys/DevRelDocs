# Type fortran::syscfacedataf undefined

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 314)





## Members

* [facecellconnectivity](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf_1a60fd49965317a12753680728055cddcf)
* [faceids](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf_1ac15be376d8a7d00e486707ac0269056e)
* [facenodeconnectivity](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf_1a62c5148ef54c724d306a1d2ed512ccf1)
* [facenodecounts](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf_1a2abe8c3dbc5763c1d6a59c79a2e14e79)
* [facetypes](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf_1acb27a555d3934aa9aac98ece4c77b167)

## Public attributes

<a id="structfortran_1_1syscfacedataf_1ac15be376d8a7d00e486707ac0269056e"></a>
### Variable faceids

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 315)

```fortran
type(syscelementiddataf) faceids
```

Face ids.





**Type**: type([syscelementiddataf](structfortran_1_1syscelementiddataf.md#structfortran_1_1syscelementiddataf))

<a id="structfortran_1_1syscfacedataf_1acb27a555d3934aa9aac98ece4c77b167"></a>
### Variable facetypes

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 316)

```fortran
type(syscelementtypedataf) facetypes
```

Face types.





**Type**: type([syscelementtypedataf](structfortran_1_1syscelementtypedataf.md#structfortran_1_1syscelementtypedataf))

<a id="structfortran_1_1syscfacedataf_1a2abe8c3dbc5763c1d6a59c79a2e14e79"></a>
### Variable facenodecounts

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 317)

```fortran
type(syscelementnodecountdataf) facenodecounts
```

Node counts.





**Type**: type([syscelementnodecountdataf](structfortran_1_1syscelementnodecountdataf.md#structfortran_1_1syscelementnodecountdataf))

<a id="structfortran_1_1syscfacedataf_1a62c5148ef54c724d306a1d2ed512ccf1"></a>
### Variable facenodeconnectivity

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 318)

```fortran
type(syscelementnodeconnectivitydataf) facenodeconnectivity
```







**Type**: type([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf))

<a id="structfortran_1_1syscfacedataf_1a60fd49965317a12753680728055cddcf"></a>
### Variable facecellconnectivity

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 319)

```fortran
type(syscfacecellconnectivitydataf) facecellconnectivity
```







**Type**: type([syscfacecellconnectivitydataf](structfortran_1_1syscfacecellconnectivitydataf.md#structfortran_1_1syscfacecellconnectivitydataf))

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)