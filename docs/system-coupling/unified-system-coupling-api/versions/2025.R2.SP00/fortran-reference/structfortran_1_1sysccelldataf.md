# Type fortran::sysccelldataf undefined

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 384)





## Members

* [cellids](structfortran_1_1sysccelldataf.md#structfortran_1_1sysccelldataf_1a3a35fd70e9583f7dc1e01a7e1fac2c3a)
* [cellnodeconnectivity](structfortran_1_1sysccelldataf.md#structfortran_1_1sysccelldataf_1afe81e5f19dbe8088d8f63e8ccb6ec3c4)
* [celltypes](structfortran_1_1sysccelldataf.md#structfortran_1_1sysccelldataf_1a53b9beb7b95f41d2958d1ad46365475b)

## Public attributes

<a id="structfortran_1_1sysccelldataf_1a3a35fd70e9583f7dc1e01a7e1fac2c3a"></a>
### Variable cellids

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 385)

```fortran
type(syscelementiddataf) cellids
```

Cell ids.





**Type**: type([syscelementiddataf](structfortran_1_1syscelementiddataf.md#structfortran_1_1syscelementiddataf))

<a id="structfortran_1_1sysccelldataf_1a53b9beb7b95f41d2958d1ad46365475b"></a>
### Variable celltypes

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 386)

```fortran
type(syscelementtypedataf) celltypes
```

Cell types.





**Type**: type([syscelementtypedataf](structfortran_1_1syscelementtypedataf.md#structfortran_1_1syscelementtypedataf))

<a id="structfortran_1_1sysccelldataf_1afe81e5f19dbe8088d8f63e8ccb6ec3c4"></a>
### Variable cellnodeconnectivity

![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 387)

```fortran
type(syscelementnodeconnectivitydataf) cellnodeconnectivity
```







**Type**: type([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf))

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)