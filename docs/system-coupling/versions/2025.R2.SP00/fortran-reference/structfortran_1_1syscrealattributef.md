# Type fortran::syscrealattributef undefined

![][Fortran]
![][public]

**Definition**: `syscAttributeF.fi` (line 48)

Provide a struct for a real-valued attribute.



## Members

* [dimensionality](structfortran_1_1syscrealattributef.md#structfortran_1_1syscrealattributef_1a627f420eb85a779240c8821a05884707)
* [name](structfortran_1_1syscrealattributef.md#structfortran_1_1syscrealattributef_1a72f0326f2d38c6a753a748136992df3a)
* [value](structfortran_1_1syscrealattributef.md#structfortran_1_1syscrealattributef_1a631d998f8e50b318684c7f3ad5cd01a4)

## Public attributes

<a id="structfortran_1_1syscrealattributef_1a72f0326f2d38c6a753a748136992df3a"></a>
### Variable name

![][public]

**Definition**: `syscAttributeF.fi` (line 49)

```fortran
character(len=syscstrlen) name
```







**Type**: character(len=syscstrlen)

<a id="structfortran_1_1syscrealattributef_1a631d998f8e50b318684c7f3ad5cd01a4"></a>
### Variable value

![][public]

**Definition**: `syscAttributeF.fi` (line 50)

```fortran
real(kind=8) value
```







**Type**: real(kind=8)

<a id="structfortran_1_1syscrealattributef_1a627f420eb85a779240c8821a05884707"></a>
### Variable dimensionality

![][public]

**Definition**: `syscAttributeF.fi` (line 51)

```fortran
type(syscdimensionalityf) dimensionality
```







**Type**: type([syscdimensionalityf](structfortran_1_1syscdimensionalityf.md#structfortran_1_1syscdimensionalityf))

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)