# Type fortran::syscpointcloudf undefined

![][Fortran]
![][public]

**Definition**: `syscPointCloudF.fi` (line 12)

Provide a point cloud access type.



## Members

* [connectivitystamp](structfortran_1_1syscpointcloudf.md#structfortran_1_1syscpointcloudf_1a4b3938b5f803cc4193e011bf7dc56377)
* [coordinatesstamp](structfortran_1_1syscpointcloudf.md#structfortran_1_1syscpointcloudf_1aa66a6cff733b4f5ea50326c17bfafb1d)
* [nodecoords](structfortran_1_1syscpointcloudf.md#structfortran_1_1syscpointcloudf_1ada1acb5d25c5ab0e62ade22161a73b14)
* [nodeids](structfortran_1_1syscpointcloudf.md#structfortran_1_1syscpointcloudf_1a34207f80097afcc6f7e37b61187e604e)
* [partitioningstamp](structfortran_1_1syscpointcloudf.md#structfortran_1_1syscpointcloudf_1afadcd8d9371a4040bd30a5d07c1f4027)

## Public attributes

<a id="structfortran_1_1syscpointcloudf_1a34207f80097afcc6f7e37b61187e604e"></a>
### Variable nodeids

![][public]

**Definition**: `syscPointCloudF.fi` (line 13)


```fortran
type(syscoutputintegerdataf) nodeids
```


Node ids.





**Type**: type([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf))

<a id="structfortran_1_1syscpointcloudf_1ada1acb5d25c5ab0e62ade22161a73b14"></a>
### Variable nodecoords

![][public]

**Definition**: `syscPointCloudF.fi` (line 14)


```fortran
type(syscoutputvectordataf) nodecoords
```


Node coords.





**Type**: type([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf))

<a id="structfortran_1_1syscpointcloudf_1a4b3938b5f803cc4193e011bf7dc56377"></a>
### Variable connectivitystamp

![][public]

**Definition**: `syscPointCloudF.fi` (line 15)


```fortran
integer(kind=8) connectivitystamp
```


Connectivity stamp.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscpointcloudf_1aa66a6cff733b4f5ea50326c17bfafb1d"></a>
### Variable coordinatesstamp

![][public]

**Definition**: `syscPointCloudF.fi` (line 16)


```fortran
integer(kind=8) coordinatesstamp
```


Coordinates stamp.





**Type**: integer(kind=8)

<a id="structfortran_1_1syscpointcloudf_1afadcd8d9371a4040bd30a5d07c1f4027"></a>
### Variable partitioningstamp

![][public]

**Definition**: `syscPointCloudF.fi` (line 17)


```fortran
integer(kind=8) partitioningstamp
```


Partitioning stamp.





**Type**: integer(kind=8)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)