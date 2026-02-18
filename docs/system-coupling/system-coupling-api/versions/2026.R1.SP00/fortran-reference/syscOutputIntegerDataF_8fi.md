# File syscOutputIntegerDataF.fi

![][Fortran]

**Location**: `syscOutputIntegerDataF.fi`





## Classes

* [fortran::syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)
* [fortran::syscgetoutputintegerdataf](interfacefortran_1_1syscgetoutputintegerdataf.md#interfacefortran_1_1syscgetoutputintegerdataf)

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
! ****** Output integer data ******************************************
! *********************************************************************
!
! *********************************************************************
!
type :: syscoutputintegerdataf
  integer(kind=8) :: primitivetype
  integer(kind=8) :: dataptr
  integer(kind=8) :: datasize
end type syscoutputintegerdataf
!
!**********************************************************************
!**********************************************************************
interface syscgetoutputintegerdataf
!
!**********************************************************************
!! \brief Create an output integer data access type.
!!
!! Primitive type will default to 64-bit signed integer.
!! Data size will be set to zero.
!! Data pointer will be set to null.
!**********************************************************************
function syscgetoutputintegerdataf() result (ret)
  import :: syscoutputintegerdataf
  type(SyscOutputIntegerDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputIntegerDataF
!DIR$ ENDIF
end function syscgetoutputintegerdataf
!
!**********************************************************************
!**********************************************************************
function syscgetoutputintegerdataf_i4(data, dataSize) result (ret)
!
  import :: syscoutputintegerdataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=4), intent(in), target :: data(datasize)
  type(syscoutputintegerdataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputIntegerDataF_I4
!DIR$ ENDIF
!
end function syscgetoutputintegerdataf_i4
!
!**********************************************************************
!**********************************************************************
function syscgetoutputintegerdataf_i8(data, dataSize) result (ret)
!
  import :: syscoutputintegerdataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=8), intent(in), target :: data(datasize)
  type(syscoutputintegerdataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputIntegerDataF_I8
!DIR$ ENDIF
!
end function syscgetoutputintegerdataf_i8
!
end interface syscgetoutputintegerdataf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)