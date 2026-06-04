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
!> \brief Provide an output scalar data access type.
!!
!! Output scalar data provides read-only access to an array of
!! scalar data.
!! To create and/or initialize SyscOutputScalarDataF, it is highly
!! recommended to use one of the functions within 
!! `syscGetOutputScalarDataF` interface. These functions will
!! initialize all members to the correct values and will help to 
!! avoid back-compatibility issues in the future. For example:
!!
!! \code
!! type(SyscOutputScalarDataF) :: osd
!! osd = syscGetOutputScalarDataF(array, arraySize)
!! \endcode
!
type :: syscoutputscalardataf
  integer(kind=8) :: primitivetype !< Primitive type.
  integer(kind=8) :: dataptr       !< Pointer to the data array.
  integer(kind=8) :: datasize      !< Array size.
end type syscoutputscalardataf
!
!**********************************************************************
!> \brief Provide an interface to get output scalar data
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
!> \brief Create an output scalar data access type.
!!
!! \param[in] data - 32-bit array of floating point data.
!! \param[in] dataSize - number of elements in the array.
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
!> \brief Create an output scalar data access type.
!!
!! \param[in] data - 64-bit array of floating point data.
!! \param[in] dataSize - number of elements in the array.
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
!> \brief Create an output scalar data access type.
!!
!! \param[in] data - 32-bit array of integer data.
!! \param[in] dataSize - number of elements in the array.
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
!> \brief Create an output scalar data access type.
!!
!! \param[in] data - 64-bit array of integer data.
!! \param[in] dataSize - number of elements in the array.
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)