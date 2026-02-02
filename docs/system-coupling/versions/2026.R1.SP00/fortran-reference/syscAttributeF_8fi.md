# File syscAttributeF.fi

![][Fortran]

**Location**: `syscAttributeF.fi`





## Classes

* [fortran::syscintegerattributef](structfortran_1_1syscintegerattributef.md#structfortran_1_1syscintegerattributef)
* [fortran::syscgetintegerattributef](interfacefortran_1_1syscgetintegerattributef.md#interfacefortran_1_1syscgetintegerattributef)
* [fortran::syscrealattributef](structfortran_1_1syscrealattributef.md#structfortran_1_1syscrealattributef)
* [fortran::syscgetrealattributef](interfacefortran_1_1syscgetrealattributef.md#interfacefortran_1_1syscgetrealattributef)

## Namespaces

* [fortran](namespacefortran.md#namespacefortran)

## Source

```fortran
module fortran
!
! Copyright ANSYS, Inc. 
! Unauthorized use, distribution, or duplication is prohibited.
!
! Provide free-form Fortran interface for
! System Coupling Participant Library.
!
! *********************************************************************
! *********************************************************************
type :: syscintegerattributef
  character(len=SyscStrLen) :: name
  integer(kind=8) :: value
end type syscintegerattributef
!
!**********************************************************************
!
interface syscgetintegerattributef
!
!**********************************************************************
!**********************************************************************
function syscgetintegerattributef(name, value) result(ret)
  import :: syscintegerattributef
  character(len=*), intent(in) :: name
  integer(kind=8), intent(in) :: value
  type(syscintegerattributef) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetIntegerAttributeF
!DIR$ ENDIF
end function syscgetintegerattributef
!
!**********************************************************************
!
end interface syscgetintegerattributef
!
! *********************************************************************
! *********************************************************************
type :: syscrealattributef
  character(len=SyscStrLen) :: name
  real(kind=8) :: value
  type(SyscDimensionalityF) :: dimensionality
end type syscrealattributef
!
!**********************************************************************
!
interface syscgetrealattributef
!
!**********************************************************************
!**********************************************************************
function syscgetrealattributef(name, value, dimensionality) result(ret)
  import :: syscrealattributef, syscdimensionalityf
  character(len=*), intent(in) :: name
  real(kind=8), intent(in) :: value
  type(syscdimensionalityf), intent(in) :: dimensionality
  type(syscrealattributef) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetRealAttributeF
!DIR$ ENDIF
end function syscgetrealattributef
!
!**********************************************************************
!
end interface syscgetrealattributef
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)