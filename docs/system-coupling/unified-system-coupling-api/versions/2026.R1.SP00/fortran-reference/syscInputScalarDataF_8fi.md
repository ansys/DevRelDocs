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
!> \brief Provide an input scalar data access type.
!!
!! Input scalar data provides read and write access to an array of
!! scalar data.
!! To create and/or initialize SyscInputScalarDataF, it is highly
!! recommended to use one of the functions within 
!! `syscGetInputScalarDataF` interface. These functions will
!! initialize all members to the correct values and will help to 
!! avoid back-compatibility issues in the future. For example:
!!
!! \code
!! type(SyscInputScalarDataF) :: isd
!! isd = syscGetInputScalarDataF(array, arraySize)
!! \endcode
! *********************************************************************
type :: syscinputscalardataf
  integer(kind=8) :: primitivetype !< Primitive type.
  integer(kind=8) :: dataptr       !< Pointer to the data array.
  integer(kind=8) :: datasize      !< Array size.
end type syscinputscalardataf
!
!**********************************************************************
!> \brief Provide an interface to get input scalar data
!**********************************************************************
interface syscgetinputscalardataf
!
!**********************************************************************
!> \brief Create an input scalar data access type.
!!
!! Primitive type will default to double-precision (64-bit).
!! Data size will be set to zero.
!! Data pointer will be set to null.
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
!> \brief Create an input scalar data access type.
!!
!! \param data - single-precision (32-bit) array of data.
!! \param dataSize - number of elements in the array.
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
!> \brief Create an input scalar data access type.
!!
!! \param data - double-precision (64-bit) array of data.
!! \param dataSize - number of elements in the array.
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)