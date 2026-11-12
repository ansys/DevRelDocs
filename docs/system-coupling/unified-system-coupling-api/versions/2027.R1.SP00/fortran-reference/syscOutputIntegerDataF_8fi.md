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
!> \brief Provide an output integer data access type.
!!
!! Output integer data provides read-only access to an array of
!! integers.
!! To create and/or initialize SyscOutputIntegerDataF, it is highly
!! recommended to use one of the functions within 
!! `syscGetOutputIntegerDataF` interface. These functions will
!! initialize all members to the correct values and will help to 
!! avoid back-compatibility issues in the future. For example:
!!
!! \code
!! type(SyscOutputIntegerDataF) :: oid
!! oid = syscGetOutputIntegerDataF(array, arraySize)
!! \endcode
!
type :: syscoutputintegerdataf
  integer(kind=8) :: primitivetype !< Primitive type.
  integer(kind=8) :: dataptr       !< Pointer to the data array.
  integer(kind=8) :: datasize      !< Array size.
end type syscoutputintegerdataf
!
!**********************************************************************
!> \brief Provide an interface to get output integer data
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
!> \brief Create an output integer data access type.
!!
!! \param[in] data - 32-bit array of integer data.
!! \param[in] dataSize - number of elements in the array.
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
!> \brief Create an output integer data access type.
!!
!! \param[in] data - 64-bit array of integer data.
!! \param[in] dataSize - number of elements in the array.
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)