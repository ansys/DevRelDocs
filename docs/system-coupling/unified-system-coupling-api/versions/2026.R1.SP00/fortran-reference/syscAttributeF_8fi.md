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
!> \brief Provide a struct for an integer-valued attribute.
! *********************************************************************
type :: syscintegerattributef
  character(len=SyscStrLen) :: name
  integer(kind=8) :: value
end type syscintegerattributef
!
!**********************************************************************
!
!> \brief Provide an interface to get an integer-valued attribute.
interface syscgetintegerattributef
!
!**********************************************************************
!> \brief Get an integer-valued attribute.
!!
!! \param[in] name - attribute name.
!!
!! \param[in] value - attribute value.
!!
!! \return an integer attribute
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
!> \brief Provide a struct for a real-valued attribute.
! *********************************************************************
type :: syscrealattributef
  character(len=SyscStrLen) :: name
  real(kind=8) :: value
  type(SyscDimensionalityF) :: dimensionality
end type syscrealattributef
!
!**********************************************************************
!
!> \brief Provide an interface to get a real-valued attribute.
interface syscgetrealattributef
!
!**********************************************************************
!> \brief Get a real-valued attribute.
!!
!! \param[in] name - attribute name.
!!
!! \param[in] value - attribute value.
!!
!! \param[in] dimensionality - attribute dimensionality
!!
!! \return an integer attribute
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