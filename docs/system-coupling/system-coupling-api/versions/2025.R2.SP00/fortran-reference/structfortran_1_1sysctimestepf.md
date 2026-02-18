# Type fortran::sysctimestepf undefined

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 145)

Provide a time step type.



## Members

* [starttime](structfortran_1_1sysctimestepf.md#structfortran_1_1sysctimestepf_1aadc3370b9e2337739a8831790220ea37)
* [timestepnumber](structfortran_1_1sysctimestepf.md#structfortran_1_1sysctimestepf_1a6e5ddd537aaf8d69b811abda71510ca7)
* [timestepsize](structfortran_1_1sysctimestepf.md#structfortran_1_1sysctimestepf_1a19b7d81773f470750c5427fd5153bdf2)

## Public attributes

<a id="structfortran_1_1sysctimestepf_1a6e5ddd537aaf8d69b811abda71510ca7"></a>
### Variable timestepnumber

![][public]

**Definition**: `syscCommonTypesF.fi` (line 146)

```fortran
integer(kind=8) timestepnumber
```

Time step number.





**Type**: integer(kind=8)

<a id="structfortran_1_1sysctimestepf_1aadc3370b9e2337739a8831790220ea37"></a>
### Variable starttime

![][public]

**Definition**: `syscCommonTypesF.fi` (line 147)

```fortran
real(kind=8) starttime
```

Time step start time.





**Type**: real(kind=8)

<a id="structfortran_1_1sysctimestepf_1a19b7d81773f470750c5427fd5153bdf2"></a>
### Variable timestepsize

![][public]

**Definition**: `syscCommonTypesF.fi` (line 148)

```fortran
real(kind=8) timestepsize
```

Time step size (delta t).





**Type**: real(kind=8)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)