# Type fortran::syscvolumemeshf undefined

![][Fortran]
![][public]

**Definition**: `syscVolumeMeshF.fi` (line 12)

Provide a volume mesh access type.



## Members

* [cellids](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf_1a951c6d0afd7b7c9755fbafe582a2302a)
* [cellnodeconnectivity](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf_1afe81e5f19dbe8088d8f63e8ccb6ec3c4)
* [celltypes](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf_1a53b9beb7b95f41d2958d1ad46365475b)
* [facecellconnectivity](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf_1a60fd49965317a12753680728055cddcf)
* [facenodeconnectivity](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf_1a62c5148ef54c724d306a1d2ed512ccf1)
* [facenodecounts](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf_1a2abe8c3dbc5763c1d6a59c79a2e14e79)
* [nodes](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf_1a9ce996d7ce626bd972c2fe728972b2bd)

## Public attributes

<a id="structfortran_1_1syscvolumemeshf_1a9ce996d7ce626bd972c2fe728972b2bd"></a>
### Variable nodes

![][public]

**Definition**: `syscVolumeMeshF.fi` (line 13)

```fortran
type(syscnodedataf) nodes
```

Mesh nodes.





**Type**: type([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf))

<a id="structfortran_1_1syscvolumemeshf_1a2abe8c3dbc5763c1d6a59c79a2e14e79"></a>
### Variable facenodecounts

![][public]

**Definition**: `syscVolumeMeshF.fi` (line 15)

```fortran
type(syscelementnodecountdataf) facenodecounts
```

Face node counts.





**Type**: type([syscelementnodecountdataf](structfortran_1_1syscelementnodecountdataf.md#structfortran_1_1syscelementnodecountdataf))

<a id="structfortran_1_1syscvolumemeshf_1a62c5148ef54c724d306a1d2ed512ccf1"></a>
### Variable facenodeconnectivity

![][public]

**Definition**: `syscVolumeMeshF.fi` (line 17)

```fortran
type(syscelementnodeconnectivitydataf) facenodeconnectivity
```

Face-to-node connectivity.





**Type**: type([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf))

<a id="structfortran_1_1syscvolumemeshf_1a60fd49965317a12753680728055cddcf"></a>
### Variable facecellconnectivity

![][public]

**Definition**: `syscVolumeMeshF.fi` (line 19)

```fortran
type(syscfacecellconnectivitydataf) facecellconnectivity
```

Face-to-cell connectivity.





**Type**: type([syscfacecellconnectivitydataf](structfortran_1_1syscfacecellconnectivitydataf.md#structfortran_1_1syscfacecellconnectivitydataf))

<a id="structfortran_1_1syscvolumemeshf_1a951c6d0afd7b7c9755fbafe582a2302a"></a>
### Variable cellids

![][public]

**Definition**: `syscVolumeMeshF.fi` (line 21)

```fortran
type(sysccelliddataf) cellids
```

Cell ids.





**Type**: type([sysccelliddataf](structfortran_1_1sysccelliddataf.md#structfortran_1_1sysccelliddataf))

<a id="structfortran_1_1syscvolumemeshf_1a53b9beb7b95f41d2958d1ad46365475b"></a>
### Variable celltypes

![][public]

**Definition**: `syscVolumeMeshF.fi` (line 23)

```fortran
type(syscelementtypedataf) celltypes
```

Cell types.





**Type**: type([syscelementtypedataf](structfortran_1_1syscelementtypedataf.md#structfortran_1_1syscelementtypedataf))

<a id="structfortran_1_1syscvolumemeshf_1afe81e5f19dbe8088d8f63e8ccb6ec3c4"></a>
### Variable cellnodeconnectivity

![][public]

**Definition**: `syscVolumeMeshF.fi` (line 25)

```fortran
type(syscelementnodeconnectivitydataf) cellnodeconnectivity
```

Cell-to-node connectivity.





**Type**: type([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf))

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)