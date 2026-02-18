# File syscOutputScalarDataF.fi

![][Fortran]

**Location**: `syscOutputScalarDataF.fi`





## Classes

* [fortran::syscoutputscalardataf](structfortran_1_1syscoutputscalardataf.md#structfortran_1_1syscoutputscalardataf)
* [fortran::syscgetoutputscalardataf](interfacefortran_1_1syscgetoutputscalardataf.md#interfacefortran_1_1syscgetoutputscalardataf)

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
!
type :: syscoutputscalardataf
  integer(kind=8) :: primitivetype
  integer(kind=8) :: dataptr
  integer(kind=8) :: datasize
end type syscoutputscalardataf
!
!**********************************************************************
!**********************************************************************
interface syscgetoutputscalardataf
!
!**********************************************************************
!! \brief Create an output scalar data access type.
!!
!! Primitive type will default to double-precision (64-bit).
!! Data size will be set to zero.
!! Data pointer will be set to null.
!**********************************************************************
function syscgetoutputscalardataf() result (ret)
  import :: syscoutputscalardataf
  type(SyscOutputScalarDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputScalarDataF
!DIR$ ENDIF
end function syscgetoutputscalardataf
!
!**********************************************************************
!**********************************************************************
function syscgetoutputscalardataf_r4(data, dataSize) result (ret)
!
  import :: syscoutputscalardataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=4), intent(in), target :: data(datasize)
  type(syscoutputscalardataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputScalarDataF_R4
!DIR$ ENDIF
!
end function syscgetoutputscalardataf_r4
!
!**********************************************************************
!**********************************************************************
function syscgetoutputscalardataf_r8(data, dataSize) result (ret)
!
  import :: syscoutputscalardataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data(datasize)
  type(syscoutputscalardataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputScalarDataF_R8
!DIR$ ENDIF
!
end function syscgetoutputscalardataf_r8
!
!**********************************************************************
!**********************************************************************
function syscgetoutputscalardataf_i4(data, dataSize) result (ret)
!
  import :: syscoutputscalardataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=4), intent(in), target :: data(datasize)
  type(syscoutputscalardataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputScalarDataF_I4
!DIR$ ENDIF
!
end function syscgetoutputscalardataf_i4
!
!**********************************************************************
!**********************************************************************
function syscgetoutputscalardataf_i8(data, dataSize) result (ret)
!
  import :: syscoutputscalardataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=8), intent(in), target :: data(datasize)
  type(syscoutputscalardataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputScalarDataF_I8
!DIR$ ENDIF
!
end function syscgetoutputscalardataf_i8
!
end interface syscgetoutputscalardataf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)