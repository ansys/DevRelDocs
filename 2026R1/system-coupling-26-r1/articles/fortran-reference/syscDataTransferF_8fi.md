# File syscDataTransferF.fi

![][Fortran]

**Location**: `syscDataTransferF.fi`





## Classes

* [fortran::syscdatatransferf](structfortran_1_1syscdatatransferf.md#structfortran_1_1syscdatatransferf)
* [fortran::syscgetdatatransferf](interfacefortran_1_1syscgetdatatransferf.md#interfacefortran_1_1syscgetdatatransferf)

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
!> \brief Provide a struct for a data transfer.
! *********************************************************************
type :: syscdatatransferf
  type(syscvariablef) :: sourcevariable !< Source variable.
  type(syscvariablef) :: targetvariable !< Target variable.
  integer(kind=4) :: targetside !< Target side.
end type syscdatatransferf
!
!**********************************************************************
!
!> \brief Provide an interface to get a data transfer.
interface syscgetdatatransferf
!
!**********************************************************************
!> \brief Create a data transfer.
!!
!! \param[in] sourceVariable - source variable.
!!
!! \param[in] targetVariable - target variable.
!!
!! \param[in] targetSide - target side.
!**********************************************************************
function syscgetdatatransferf(sourceVariable, targetVariable, &
  targetSide) result(ret)
!
  import :: syscdatatransferf, syscvariablef
  type(syscvariablef), intent(in) :: sourcevariable
  type(syscvariablef), intent(in) :: targetvariable
  integer(kind=4), intent(in) :: targetside
  type(syscdatatransferf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetDataTransferF
!DIR$ ENDIF
!
end function syscgetdatatransferf
!
!**********************************************************************
!
end interface syscgetdatatransferf
!

end module fortran
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)