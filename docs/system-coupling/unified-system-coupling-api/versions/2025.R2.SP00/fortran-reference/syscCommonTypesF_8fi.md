# File syscCommonTypesF.fi

![][Fortran]

**Location**: `syscCommonTypesF.fi`





## Classes

* [fortran::syscdimensionalityf](structfortran_1_1syscdimensionalityf.md#structfortran_1_1syscdimensionalityf)
* [fortran::syscgetdimensionalityf](interfacefortran_1_1syscgetdimensionalityf.md#interfacefortran_1_1syscgetdimensionalityf)
* [fortran::sysctimestepf](structfortran_1_1sysctimestepf.md#structfortran_1_1sysctimestepf)
* [fortran::syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)
* [fortran::syscsetupinfof](structfortran_1_1syscsetupinfof.md#structfortran_1_1syscsetupinfof)
* [fortran::syscgetsetupinfof](interfacefortran_1_1syscgetsetupinfof.md#interfacefortran_1_1syscgetsetupinfof)
* [fortran::syscsetupfileinfof](structfortran_1_1syscsetupfileinfof.md#structfortran_1_1syscsetupfileinfof)
* [fortran::syscgetsetupfileinfof](interfacefortran_1_1syscgetsetupfileinfof.md#interfacefortran_1_1syscgetsetupfileinfof)
* [fortran::syscresultsinfof](structfortran_1_1syscresultsinfof.md#structfortran_1_1syscresultsinfof)
* [fortran::syscgetresultsinfof](interfacefortran_1_1syscgetresultsinfof.md#interfacefortran_1_1syscgetresultsinfof)

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
! This interfaces file provides commonly-used types and parameters.
!
! ****** Parameter for string legth ***********************************
!
integer(kind=4), parameter :: SyscStrLen = 256
integer(kind=4), parameter :: SyscFilePathLen = 4096
!
! ****** Parameters for variable mesh locations ***********************
!
integer(kind=4), parameter :: SyscNode = 0
integer(kind=4), parameter :: SyscElement = 1
!
! ****** Parameters for variable tensor types *************************
!
integer(kind=4), parameter :: SyscScalar = 0
integer(kind=4), parameter :: SyscVector = 1
!
! ****** Parameters for region topologies *****************************
!
integer(kind=4), parameter :: SyscSurface = 2
integer(kind=4), parameter :: SyscVolume = 3
!
! ****** Parameters for region discretization types *******************
!
integer(kind=4), parameter :: SyscMeshRegion = 0
integer(kind=4), parameter :: SyscPointCloudRegion = 1
!
! *********** Parameters for interface side ***************************
!
integer(kind=4), parameter :: SyscInterfaceSide_One = 1
integer(kind=4), parameter :: SyscInterfaceSide_Two = 2
!
! *********************** Dimensionality ******************************
!! \brief Provide a structure for dimensionality
type :: syscdimensionalityf
  real(kind=8) :: length
  real(kind=8) :: time
  real(kind=8) :: mass
  real(kind=8) :: temperature
  real(kind=8) :: amountofsubstance
  real(kind=8) :: current
  real(kind=8) :: luminousintensity
  real(kind=8) :: angle
end type syscdimensionalityf
!
!**********************************************************************
!**********************************************************************
!
interface syscgetdimensionalityf
!
!**********************************************************************
!**********************************************************************
function syscgetdimensionalityf() result(ret)
!
  import :: syscdimensionalityf
  type(syscdimensionalityf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetDimensionalityF
!DIR$ ENDIF
end function syscgetdimensionalityf
!
end interface syscgetdimensionalityf
!
! *********************************************************************
! \brief Provide parameters for supported quantity types.
!
! Quantity type provides information about the physical meaning of
! the variable. This can be useful for detecting validation errors
! during the coupled analysis setup. If the variable does not match
! any of the provided quantity types, quantity type can be set to
! unspecified.
!
integer(kind=4), parameter :: syscunspecified = 0
integer(kind=4), parameter :: syscforce = 1
integer(kind=4), parameter :: syscincrementaldisplacement = 2
integer(kind=4), parameter :: sysctemperature = 3
integer(kind=4), parameter :: syscheatrate = 4
integer(kind=4), parameter :: syscheattransfercoefficient = 5
integer(kind=4), parameter :: syscconvectionreferencetemperature = 6
integer(kind=4), parameter :: syscmodeshape = 7
integer(kind=4), parameter :: syscelectricalconductivity = 8
!
! ****** Parameters for data type *************************************
!
integer(kind=4), parameter :: syscdatatype_real = 0
integer(kind=4), parameter :: syscdatatype_complex = 1
!
! ****** Parameters for participant solver's convergence status *******
!
integer(kind=4), parameter :: syscdiverging       = -1
integer(kind=4), parameter :: syscnotyetconverged = 0
integer(kind=4), parameter :: syscconverged       = 1
integer(kind=4), parameter :: sysccomplete        = 2
integer(kind=4), parameter :: syscnotevaluated    = 3
!
! ****** Parameters for analysis types ********************************
!
integer(kind=4), parameter :: syscsteady = 0
integer(kind=4), parameter :: sysctransient = 1
!
! ****** Parameters for dimension *************************************
!
integer(kind=8), parameter :: syscd2 = 2
integer(kind=8), parameter :: syscd3 = 3
!
! ****** Parameters for time integration ******************************
!
integer(kind=8), parameter :: syscimplicit = 0
integer(kind=8), parameter :: syscexplicit = 1
!
! ****** Parameters for participant type ******************************
!
integer(kind=8), parameter :: syscdefault = 0
integer(kind=8), parameter :: sysccfx = 1
integer(kind=8), parameter :: syscfluent = 2
integer(kind=8), parameter :: syscmapdl = 3
integer(kind=8), parameter :: syscaedt = 4
integer(kind=8), parameter :: syscfmu = 5
integer(kind=8), parameter :: syscfmu_proxy = 6
integer(kind=8), parameter :: syscexternaldata = 7
integer(kind=8), parameter :: syscforte = 8
integer(kind=8), parameter :: syscdefault_srv = 9
integer(kind=8), parameter :: syscmech_srv = 10
integer(kind=8), parameter :: sysccfd_srv = 11
integer(kind=8), parameter :: syscscdt_srv = 12
integer(kind=8), parameter :: syscthermal_desktop = 13
integer(kind=8), parameter :: syscls_dyna = 14
integer(kind=8), parameter :: syscrocky = 15
!
! *********************************************************************
!
type :: sysctimestepf
  integer(kind=8) :: timestepnumber
  real(kind=8) :: starttime 
  real(kind=8) :: timestepsize 
end type sysctimestepf
!
! ****** Parameters for return codes **********************************
!
integer(kind=4), parameter :: syscstatusok = 0
integer(kind=4), parameter :: syscstatuserror = 1
!
type :: syscerrorf
  integer(kind=4) :: retcode
  character(len=SyscStrLen) :: message
end type syscerrorf
!
! ****** Provide parameters for supported primitive types *************
!
integer(kind=4), parameter :: syscreal4 = 0
integer(kind=4), parameter :: syscreal8 = 1
integer(kind=4), parameter :: syscint4  = 2
integer(kind=4), parameter :: syscint8  = 3
!
! *********************************************************************
! *********************************************************************
type :: syscsetupinfof
  integer(kind=8) :: analysistype
  logical(kind=8) :: restartssupported
  integer(kind=8) :: dimension
  integer(kind=8) :: timeintegration
  integer(kind=8) :: participanttype
end type syscsetupinfof
!
!**********************************************************************
!**********************************************************************
!
interface syscgetsetupinfof
!
!**********************************************************************
!**********************************************************************
function syscgetsetupinfof() result(ret)
!
  import :: syscsetupinfof
  type(syscsetupinfof) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSetupInfoF
!DIR$ ENDIF
!
end function syscgetsetupinfof
!
!**********************************************************************
!**********************************************************************
function syscgetsetupinfof_a(analysisType) result(ret)
!
  import :: syscsetupinfof
  integer(kind=4), intent(in) :: analysistype
  type(syscsetupinfof) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSetupInfoF_A
!DIR$ ENDIF
!
end function syscgetsetupinfof_a
!
!**********************************************************************
!**********************************************************************
function syscgetsetupinfof_ar(analysisType, &
  restartsSupported) result(ret)
!
    import :: syscsetupinfof
    integer(kind=4), intent(in) :: analysistype
    logical, intent(in) :: restartssupported
    type(syscsetupinfof) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSetupInfoF_AR
!DIR$ ENDIF
!
  end function syscgetsetupinfof_ar
!
!**********************************************************************
!**********************************************************************
function syscgetsetupinfof_ard(analysisType, &
  restartsSupported, dimension) result(ret)
!
    import :: syscsetupinfof
    integer(kind=4), intent(in) :: analysistype
    logical, intent(in) :: restartssupported
    integer(kind=8), intent(in) :: dimension 
    type(syscsetupinfof) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSetupInfoF_ARD
!DIR$ ENDIF
!
  end function syscgetsetupinfof_ard
!
!**********************************************************************
!**********************************************************************
function syscgetsetupinfof_ardt(analysisType, &
  restartsSupported, dimension, timeIntegration) &
  result(ret)
!
    import :: syscsetupinfof
    integer(kind=4), intent(in) :: analysistype
    logical, intent(in) :: restartssupported
    integer(kind=8), intent(in) :: dimension
    integer(kind=8), intent(in) :: timeintegration
    type(syscsetupinfof) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSetupInfoF_ARDT
!DIR$ ENDIF
!
  end function syscgetsetupinfof_ardt
!
!**********************************************************************
!**********************************************************************
function syscgetsetupinfof_ardtp(analysisType, &
  restartsSupported, dimension, timeIntegration, participantType) &
  result(ret)
!
    import :: syscsetupinfof
    integer(kind=4), intent(in) :: analysistype
    logical, intent(in) :: restartssupported
    integer(kind=8), intent(in) :: dimension
    integer(kind=8), intent(in) :: timeintegration
    integer(kind=8), intent(in) :: participanttype
    type(syscsetupinfof) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSetupInfoF_ARDTP
!DIR$ ENDIF
!
  end function syscgetsetupinfof_ardtp
!
end interface syscgetsetupinfof
!
! *********************************************************************
! *********************************************************************
type :: syscsetupfileinfof
  character(len=SyscFilePathLen) :: setupfilename
  logical :: restartssupported
end type syscsetupfileinfof
!
!**********************************************************************
!**********************************************************************
!
interface syscgetsetupfileinfof
!
!**********************************************************************
!**********************************************************************
function syscgetsetupfileinfof(setupFileName) result(ret)
!
  import :: syscsetupfileinfof
  character(len=*), intent(in) :: setupfilename
  type(syscsetupfileinfof) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSetupFileInfoF
!DIR$ ENDIF
!
end function syscgetsetupfileinfof
!
end interface syscgetsetupfileinfof
!
! *********************************************************************
! *********************************************************************
type :: syscresultsinfof
  character(len=SyscFilePathLen) :: basefilename
end type syscresultsinfof
!
!**********************************************************************
!**********************************************************************
!
interface syscgetresultsinfof
!
!**********************************************************************
!**********************************************************************
function syscgetresultsinfof(baseFileName) result(ret)
  import :: syscresultsinfof
  character(len=*), intent(in) :: basefilename
  type(syscresultsinfof) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetResultsInfoF
!DIR$ ENDIF
end function syscgetresultsinfof
!
end interface syscgetresultsinfof
!

end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)