# File syscVariableF.fi

![][Fortran]

**Location**: `syscVariableF.fi`





## Classes

* [fortran::syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)
* [fortran::syscgetvariablef](interfacefortran_1_1syscgetvariablef.md#interfacefortran_1_1syscgetvariablef)
* [fortran::syscvariableaddrealattributef](interfacefortran_1_1syscvariableaddrealattributef.md#interfacefortran_1_1syscvariableaddrealattributef)
* [fortran::syscvariableaddintegerattributef](interfacefortran_1_1syscvariableaddintegerattributef.md#interfacefortran_1_1syscvariableaddintegerattributef)
* [fortran::syscvariablegetnumrealattributesf](interfacefortran_1_1syscvariablegetnumrealattributesf.md#interfacefortran_1_1syscvariablegetnumrealattributesf)
* [fortran::syscvariablegetnumintegerattributesf](interfacefortran_1_1syscvariablegetnumintegerattributesf.md#interfacefortran_1_1syscvariablegetnumintegerattributesf)
* [fortran::syscvariablegetrealattributef](interfacefortran_1_1syscvariablegetrealattributef.md#interfacefortran_1_1syscvariablegetrealattributef)
* [fortran::syscvariablegetintegerattributef](interfacefortran_1_1syscvariablegetintegerattributef.md#interfacefortran_1_1syscvariablegetintegerattributef)

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
!> \brief Provide a struct for a System Coupling variable.
!!
!! To create and/or initialize the SyscVariableF struct, it is highly 
!! recommended to use one of the functions within the
!! `syscGetVariableF` interface . These functions will initialize all 
!! members to the correct values and will help to avoid 
!! back-compatibility issues in the future. For example:
!!
!! \code
!! type(SyscVariableF) :: var
!! var = syscGetVariableF("Temperature", SyscScalar, .FALSE., SyscNode)
!! \endcode
! *********************************************************************
type :: syscvariablef
!> Unique name for this variable.
  character(len=SyscStrLen) :: variablename
!> Quantity type (e.g. temperature).
  integer(kind=4) :: quantitytype
!> Location (e.g element or node).
  integer(kind=4) :: location
!> User-friendly name.
  character(len=SyscStrLen) :: displayname
!> Tensor type (e.g. scalar, vector).
  integer(kind=4) :: tensortype
!> Flag indicating whether it's an extensive property.
  logical :: isextensive
!> Data type (e.g. real or complex)
  integer(kind=4) :: datatype
end type syscvariablef
!
!**********************************************************************
!> \brief Provide an interface to get a System Coupling variable.
!**********************************************************************
!
interface syscgetvariablef
!
!**********************************************************************
!> \brief Create variable to be used in a coupled analysis.
!!
!! \param[in] variableName - Unique name for this variable. String 
!! length should not exceed SyscStrLen.
!!
!! Display name will default to the same as name.
!!
!! Tensor type will default to scalar.
!!
!! Is extensive flag will default to false (to non-extensive).
!!
!! Location will default to nodes.
!!
!! Quantity type will default to unspecified.
!!
!! \return a SyscVariableF type
!**********************************************************************
function syscgetvariablef(variableName) result(ret)
!
  import :: syscvariablef
  character(len=*), intent(in) :: variablename
  type(syscvariablef) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetVariableF
!DIR$ ENDIF
!
end function syscgetvariablef
!
!**********************************************************************
!> \brief Create variable to be used in a coupled analysis.
!!
!! \param[in] variableName - Unique name for this variable. String 
!! length should not exceed SyscStrLen.
!!
!! \param[in] tensorType - variable tensor type.
!!
!! \param[in] isExtensive - flag indicating if it's an extensive 
!! property.
!!
!! \param[in] location - variable location (e.g element or node).
!!
!! Display name will default to the same as name.
!!
!! Quantity type will default to unspecified.
!!
!! \return a SyscVariableF type
!**********************************************************************
function syscgetvariablef_te(&
    variableName, tensorType, isExtensive,&
    location) result(ret)
!
  import :: syscvariablef
  character(len=*), intent(in) :: variablename
  integer(kind=4), intent(in) :: tensortype
  logical, intent(in) :: isextensive
  integer(kind=4), intent(in) :: location
  type(syscvariablef) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetVariableF_TE
!DIR$ ENDIF
!
end function syscgetvariablef_te
!
!**********************************************************************
!> \brief Create variable to be used in a coupled analysis.
!!
!! \param[in] variableName - Unique name for this variable. String 
!! length should not exceed SyscStrLen.
!!
!! \param[in] displayName - variable display name. String length 
!! should not exceed SyscStrLen.
!!
!! \param[in] location - variable location (e.g element or node).
!!
!! \param[in] quantityType - variable quantity type.
!!
!! The variable tensor type and is extensive properties will be 
!! inferred from the quantity type, according to the following rules:
!! 
!! \code
!! Quantity Type                     Tensor Type      Is Extensive
!! ----------------------------------------------------------------
!! Force                             Vector           True
!! Incremental Displacement          Vector           False
!! Temperature                       Scalar           False
!! Heat Rate                         Scalar           True
!! Heat Transfer Coefficient         Scalar           False
!! Convection Reference Temperature  Scalar           False
!! \endcode
!!
!! If any other quantity type is specified, tensor type will be set to
!! scalar and is extensive will be set to false.
!!
!! \return a SyscVariableF type
!**********************************************************************
function syscgetvariablef_q(&
    variableName, displayName, location, quantityType) result(ret)
!
  import :: syscvariablef
  character(len=*), intent(in) :: variablename
  character(len=*), intent(in) :: displayname
  integer(kind=4), intent(in) :: location
  integer(kind=4), intent(in) :: quantitytype  
  type(syscvariablef) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetVariableF_Q
!DIR$ ENDIF
!
end function syscgetvariablef_q
!
!**********************************************************************
!> \brief Create variable to be used in a coupled analysis.
!!
!! \param[in] variableName - Unique name for this variable. String 
!! length should not exceed SyscStrLen.
!!
!! \param[in] displayName - variable display name. String length 
!! should not exceed SyscStrLen.
!!
!! \param[in] tensorType - variable tensor type.
!!
!! \param[in] isExtensive - flag indicating if it's an extensive 
!! property.
!!
!! \param[in] location - variable location (e.g element or node).
!!
!! \param[in] quantityType - variable quantity type.
!!
!! \return a SyscVariableF type
!**********************************************************************
function syscgetvariablef_teq(&
    variableName, displayName, tensorType, isExtensive,&
    location, quantityType) result(ret)
!
  import :: syscvariablef
  character(len=*), intent(in) :: variablename
  character(len=*), intent(in) :: displayname
  integer(kind=4), intent(in) :: tensortype
  logical, intent(in) :: isextensive
  integer(kind=4), intent(in) :: location
  integer(kind=4), intent(in) :: quantitytype  
  type(syscvariablef) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetVariableF_TEQ
!DIR$ ENDIF
!
end function syscgetvariablef_teq
!
!**********************************************************************
!> \brief Create variable to be used in a coupled analysis.
!!
!! \param[in] variableName - Unique name for this variable. String 
!! length should not exceed SyscStrLen.
!!
!! \param[in] displayName - variable display name. String length 
!! should not exceed SyscStrLen.
!!
!! \param[in] tensorType - variable tensor type.
!!
!! \param[in] isExtensive - flag indicating if it's an extensive 
!! property.
!!
!! \param[in] location - variable location (e.g element or node).
!!
!! \param[in] quantityType - variable quantity type.
!!
!! \param[in] dataType - variable data type.
!!
!! \return a SyscVariableF type
!!
function syscgetvariablef_dtelqd(&
  variableName, displayName, tensorType, isExtensive,&
  location, quantityType, dataType) result(ret)
!
import :: syscvariablef
character(len=*), intent(in) :: variablename
character(len=*), intent(in) :: displayname
integer(kind=4), intent(in) :: tensortype
logical, intent(in) :: isextensive
integer(kind=4), intent(in) :: location
integer(kind=4), intent(in) :: quantitytype
integer(kind=4), intent(in) :: datatype
type(syscvariablef) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetVariableF_DTELQD
!DIR$ ENDIF
!
end function syscgetvariablef_dtelqd
!
!**********************************************************************
!
end interface syscgetvariablef
!
!**********************************************************************
!> \brief Provide an interface to add real attribute to a variable.
interface syscvariableaddrealattributef
!
function syscvariableaddrealattributef(variable, attribute) result(ret)
!
import :: syscvariablef, syscrealattributef, syscerrorf
type(SyscVariableF) :: variable
type(SyscRealAttributeF) :: attribute
type(SyscErrorF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscVariableAddRealAttributeF
!DIR$ ENDIF
!
end function syscvariableaddrealattributef
!
!**********************************************************************
!
end interface syscvariableaddrealattributef
!
!**********************************************************************
!> \brief Provide an interface to add integer attribute to a variable.
interface syscvariableaddintegerattributef
!
function syscvariableaddintegerattributef(variable, attribute) &
  result(ret)
!
import :: syscvariablef, syscintegerattributef, syscerrorf
type(SyscVariableF) :: variable
type(SyscIntegerAttributeF) :: attribute
type(SyscErrorF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscVariableAddIntegerAttributeF
!DIR$ ENDIF
!
end function syscvariableaddintegerattributef
!
!**********************************************************************
!
end interface syscvariableaddintegerattributef
!
!**********************************************************************
!> \brief Provide an interface to get number of real attributes.
interface syscvariablegetnumrealattributesf
!
function syscvariablegetnumrealattributesf(variable) result(ret)
!
import :: syscvariablef
type(SyscVariableF) :: variable
integer(kind=8) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscVariableGetNumRealAttributesF
!DIR$ ENDIF
!
end function syscvariablegetnumrealattributesf
!
end interface syscvariablegetnumrealattributesf
!
!**********************************************************************
!> \brief Provide an interface to get number of real attributes.
interface syscvariablegetnumintegerattributesf
!
function syscvariablegetnumintegerattributesf(variable) result(ret)
!
import :: syscvariablef
type(SyscVariableF) :: variable
integer(kind=8) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscVariableGetNumIntegerAttributesF
!DIR$ ENDIF
!
end function syscvariablegetnumintegerattributesf
!
end interface syscvariablegetnumintegerattributesf
!
!**********************************************************************
!> \brief Provide an interface to get real attribute from variable.
interface syscvariablegetrealattributef
!
function syscvariablegetrealattributef(variable, index) result(ret)
!
import :: syscvariablef, syscrealattributef
type(SyscVariableF) :: variable
integer(kind=8) :: index
type(SyscRealAttributeF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscVariableGetRealAttributeF
!DIR$ ENDIF
!
end function syscvariablegetrealattributef
!
end interface syscvariablegetrealattributef
!
!**********************************************************************
!> \brief Provide an interface to get integer attribute from variable.
interface syscvariablegetintegerattributef
!
function syscvariablegetintegerattributef(variable, index) result(ret)
!
import :: syscvariablef, syscintegerattributef
type(SyscVariableF) :: variable
integer(kind=8) :: index
type(SyscIntegerAttributeF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscVariableGetIntegerAttributeF
!DIR$ ENDIF
!
end function syscvariablegetintegerattributef
!
end interface syscvariablegetintegerattributef
!
end module fortran
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)