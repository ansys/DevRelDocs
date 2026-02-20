# File syscInputScalarDataF.fi

![][Fortran]

**Location**: `syscInputScalarDataF.fi`





## Classes

* [fortran::syscinputscalardataf](structfortran_1_1syscinputscalardataf.md#structfortran_1_1syscinputscalardataf)
* [fortran::syscgetinputscalardataf](interfacefortran_1_1syscgetinputscalardataf.md#interfacefortran_1_1syscgetinputscalardataf)

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
type :: syscinputscalardataf
  integer(kind=8) :: primitivetype
  integer(kind=8) :: dataptr
  integer(kind=8) :: datasize
end type syscinputscalardataf
!
!**********************************************************************
!**********************************************************************
interface syscgetinputscalardataf
!
!**********************************************************************
!**********************************************************************
function syscgetinputscalardataf() result (ret)
  import :: syscinputscalardataf
  type(syscinputscalardataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputScalarDataF
!DIR$ ENDIF
end function syscgetinputscalardataf
!
!**********************************************************************
!**********************************************************************
function syscgetinputscalardataf_r4(data, dataSize) result (ret)
  import :: syscinputscalardataf
  integer(kind=8), intent(in) :: datasize
  real(kind=4), intent(in), target :: data(datasize)
  type(syscinputscalardataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputScalarDataF_R4
!DIR$ ENDIF
end function syscgetinputscalardataf_r4
!
!**********************************************************************
!**********************************************************************
function syscgetinputscalardataf_r8(data, dataSize) result (ret)
  import :: syscinputscalardataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data(datasize)
  type(syscinputscalardataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputScalarDataF_R8
!DIR$ ENDIF
end function syscgetinputscalardataf_r8
!
end interface syscgetinputscalardataf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)