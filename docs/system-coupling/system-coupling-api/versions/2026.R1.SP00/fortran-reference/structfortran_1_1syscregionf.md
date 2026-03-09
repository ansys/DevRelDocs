# Type fortran::syscregionf undefined

![][Fortran]
![][public]

**Definition**: `syscRegionF.fi` (line 29)

Provide a struct for a System Coupling region.

Participant can declare which regions can be used in the coupled analysis. Each region can declare its input variables and output variables. Input variables represent physical quantities whose values the participant expects System Coupling to provide. Output variables represent physical quantities whose values System Coupling expects the participant to provide.





To create and/or initialize the SyscRegionF struct, it is highly recommended to use one of the functions within the <code>syscGetRegionF</code> interface. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```fortran
type(SyscRegionF) :: reg
reg = syscGetRegionF("Wall", SyscSurface)
```

## Members

* [displayname](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf_1a9278aae61ed92d3128608932a9d9f464)
* [regiondiscretizationtype](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf_1ad2df2db7ce133791a65566cc9201dd5a)
* [regionname](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf_1a2366d44a0a98ffcc655dbc9ab4e04784)
* [topology](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf_1a9740fa1f40245a8491bc24b4c0a6d873)

## Public attributes

<a id="structfortran_1_1syscregionf_1a2366d44a0a98ffcc655dbc9ab4e04784"></a>
### Variable regionname

![][public]

**Definition**: `syscRegionF.fi` (line 31)

```fortran
character(len=syscstrlen) regionname
```

Unique region name.





**Type**: character(len=syscstrlen)

<a id="structfortran_1_1syscregionf_1a9740fa1f40245a8491bc24b4c0a6d873"></a>
### Variable topology

![][public]

**Definition**: `syscRegionF.fi` (line 33)

```fortran
integer(kind=4) topology
```

Region topology.





**Type**: integer(kind=4)

<a id="structfortran_1_1syscregionf_1ad2df2db7ce133791a65566cc9201dd5a"></a>
### Variable regiondiscretizationtype

![][public]

**Definition**: `syscRegionF.fi` (line 35)

```fortran
integer(kind=4) regiondiscretizationtype
```

Region discretization type.





**Type**: integer(kind=4)

<a id="structfortran_1_1syscregionf_1a9278aae61ed92d3128608932a9d9f464"></a>
### Variable displayname

![][public]

**Definition**: `syscRegionF.fi` (line 37)

```fortran
character(len=syscstrlen) displayname
```

User-friendly region name.





**Type**: character(len=syscstrlen)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)