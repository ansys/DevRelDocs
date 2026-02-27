# File syscRegionF.fi

![][Fortran]

**Location**: `syscRegionF.fi`





## Classes

* [fortran::syscregionf](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf)
* [fortran::syscgetregionf](interfacefortran_1_1syscgetregionf.md#interfacefortran_1_1syscgetregionf)
* [fortran::syscgetnuminputvariablesf](interfacefortran_1_1syscgetnuminputvariablesf.md#interfacefortran_1_1syscgetnuminputvariablesf)
* [fortran::syscgetinputvariablef](interfacefortran_1_1syscgetinputvariablef.md#interfacefortran_1_1syscgetinputvariablef)
* [fortran::syscgetnumoutputvariablesf](interfacefortran_1_1syscgetnumoutputvariablesf.md#interfacefortran_1_1syscgetnumoutputvariablesf)
* [fortran::syscgetoutputvariablef](interfacefortran_1_1syscgetoutputvariablef.md#interfacefortran_1_1syscgetoutputvariablef)

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
!> \brief Provide a struct for a System Coupling region.
!!
!! Participant can declare which regions can be used in the coupled
!! analysis. Each region can declare its input variables and output
!! variables. Input variables represent physical quantities whose
!! values the participant expects System Coupling to provide. Output
!! variables represent physical quantities whose values System
!! Coupling expects the participant to provide.
!!
!! To create and/or initialize the SyscRegionF struct, it is highly
!! recommended to use one of the functions within the
!! `syscGetRegionF` interface. These functions will initialize all 
!! members to the correct values and will help to avoid 
!! back-compatibility issues in the future. For example:
!!
!! \code
!! type(SyscRegionF) :: reg
!! reg = syscGetRegionF("Wall", SyscSurface)
!! \endcode
type :: syscregionf
!> Unique region name.
  character(len=SyscStrLen) :: regionname
!> Region topology.
  integer(kind=4) :: topology
!> Region discretization type
  integer(kind=4) :: regiondiscretizationtype
!> User-friendly region name
  character(len=SyscStrLen) :: displayname
end type syscregionf
!
!**********************************************************************
!> \brief Provide an interface to get a System Coupling region
!**********************************************************************
!
interface syscgetregionf
!
!**********************************************************************
!> \brief Create region to be used in a coupled analysis.
!!
!! \param[in] regionName - Unique name for this region. String length 
!! should not exceed `SyscStrLen`.
!!
!! Display name will default to the same as name.
!!
!! Topology will default to surface.
!!
!! \return a `SyscRegionF` type
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
!> \brief Create region to be used in a coupled analysis.
!!
!! \param[in] regionName - Unique name for this region. String 
!! length should not exceed SyscStrLen.
!!
!! \param[in] topology - region topology.
!!
!! Display name will default to the same as name.
!!
!! \return a `SyscRegionF` type
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
!> \brief Create region to be used in a coupled analysis.
!!
!! \param[in] regionName - Unique name for this region. String length 
!! should not exceed SyscStrLen.
!!
!! \param[in] displayName - region display name. String length should
!! not exceed SyscStrLen.
!!
!! \param[in] topology - region topology.
!!
!! \return a `SyscRegionF` type
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
!> \brief Create a region.
!!
!! \param[in] regionName - Unique name for this region. String length 
!! should not exceed SyscStrLen.
!!
!! \param[in] topology - region topology.
!!
!! \param[in] discretization - region discretization type.
!!
!! \return a `SyscRegionF` type
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
!> \brief Provide an interface to return the number of 
!! input variables.
!**********************************************************************
!
interface syscgetnuminputvariablesf
!
!> \brief Provide a function to return the number of input variables.
!!
!! \param[in] region - region
!!
!! \return Number of input variables for the region
!!
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
!> \brief Provide an interface to return an input variable.
!**********************************************************************
!
interface syscgetinputvariablef
!
!> \brief Return an input variable.
!!
!! \param[in] region - region
!!
!! \param[in] index - region index
!!
!! \return Variable at specified index.
!!
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
!> \brief Provide an interface to return the number of 
!! output variables.
!**********************************************************************
!
interface syscgetnumoutputvariablesf
!
!> \brief Provide a function to return the number of output variables.
!!
!! \param[in] region - region
!!
!! \return Number of output variables for the region
!!
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
!> \brief Provide an interface to return an output variable.
!**********************************************************************
!
interface syscgetoutputvariablef
!
!> \brief Return an output variable.
!!
!! \param[in] region - region
!!
!! \param[in] index - region index
!!
!! \return Variable at specified index.
!!
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)