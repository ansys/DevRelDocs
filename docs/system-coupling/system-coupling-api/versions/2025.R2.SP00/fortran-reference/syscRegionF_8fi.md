---
title: "File syscRegionF.fi"
---

![][Fortran]

**Location**: `syscRegionF.fi`





## Classes

* [fortran::syscregionf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscregionf)
* [fortran::syscgetregionf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetregionf)
* [fortran::syscgetnuminputvariablesf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetnuminputvariablesf)
* [fortran::syscgetinputvariablef](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetinputvariablef)
* [fortran::syscgetnumoutputvariablesf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetnumoutputvariablesf)
* [fortran::syscgetoutputvariablef](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetoutputvariablef)

## Namespaces

* [fortran](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/namespacefortran)

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
type :: syscregionf
  character(len=SyscStrLen) :: regionname
  integer(kind=4) :: topology
  integer(kind=4) :: regiondiscretizationtype
  character(len=SyscStrLen) :: displayname
end type syscregionf
!
!**********************************************************************
!**********************************************************************
!
interface syscgetregionf
!
!**********************************************************************
!**********************************************************************
function syscgetregionf(regionName) result(ret)
!
  import :: syscregionf
  character(len=*), intent(in) :: regionname
  type(syscregionf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetRegionF
!DIR$ ENDIF
!
end function syscgetregionf
!
!**********************************************************************
!**********************************************************************
function syscgetregionf_t(regionName, topology) result(ret)
!
  import :: syscregionf
  character(len=*), intent(in) :: regionname
  integer(kind=4), intent(in) :: topology
  type(syscregionf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetRegionF_T
!DIR$ ENDIF
!
end function syscgetregionf_t
!
!**********************************************************************
!**********************************************************************
function syscgetregionf_dt(regionName, displayName, &
    topology) result(ret)
!
  import :: syscregionf
  character(len=*), intent(in) :: regionname
  character(len=*), intent(in) :: displayname
  integer(kind=4), intent(in) :: topology
  type(syscregionf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetRegionF_DT
!DIR$ ENDIF
!
end function syscgetregionf_dt
!
!**********************************************************************
!**********************************************************************
function syscgetregionf_tm(regionName, topology, &
  discretization) result(ret)
!
import :: syscregionf
character(len=*), intent(in) :: regionname
integer(kind=4), intent(in) :: topology
integer(kind=4), intent(in) :: discretization
type(syscregionf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetRegionF_TM
!DIR$ ENDIF
!
end function syscgetregionf_tm
!
!**********************************************************************
!
end interface syscgetregionf
!
!**********************************************************************
!**********************************************************************
!
interface syscgetnuminputvariablesf
!
function syscgetnuminputvariablesf(region) result (ret)
  import :: syscregionf
  type(syscregionf), intent(in) :: region
  integer(kind=8) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetNumInputVariablesF
!DIR$ ENDIF
end function syscgetnuminputvariablesf
!
end interface syscgetnuminputvariablesf
!
!**********************************************************************
!**********************************************************************
!
interface syscgetinputvariablef
!
function syscgetinputvariablef(region, index) result (ret)
  import :: syscregionf, syscvariablef
  type(syscregionf), intent(in) :: region
  integer(kind=8) :: index
  type(syscvariablef) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVariableF
!DIR$ ENDIF
end function syscgetinputvariablef
!
end interface syscgetinputvariablef
!
!**********************************************************************
!**********************************************************************
!
interface syscgetnumoutputvariablesf
!
function syscgetnumoutputvariablesf(region) result (ret)
  import :: syscregionf
  type(syscregionf), intent(in) :: region
  integer(kind=8) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetNumOutputVariablesF
!DIR$ ENDIF
end function syscgetnumoutputvariablesf
!
end interface syscgetnumoutputvariablesf
!
!**********************************************************************
!**********************************************************************
!
interface syscgetoutputvariablef
!
function syscgetoutputvariablef(region, index) result (ret)
  import :: syscregionf, syscvariablef
  type(syscregionf), intent(in) :: region
  integer(kind=8) :: index
  type(syscvariablef) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVariableF
!DIR$ ENDIF
end function syscgetoutputvariablef
!
end interface syscgetoutputvariablef
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)