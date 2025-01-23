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
! *********************************************************************
type :: syscvariablef
  character(len=SyscStrLen) :: variablename
  integer(kind=4) :: quantitytype
  integer(kind=4) :: location
  character(len=SyscStrLen) :: displayname
  integer(kind=4) :: tensortype
  logical :: isextensive
  integer(kind=4) :: datatype
end type syscvariablef
!
!**********************************************************************
!**********************************************************************
!
interface syscgetvariablef
!
!**********************************************************************
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