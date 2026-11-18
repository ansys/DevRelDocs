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
!> \brief Provide an interface to get dimensionality.
!**********************************************************************
!
interface syscgetdimensionalityf
!
!**********************************************************************
!> \brief Provide a function to get dimensionality.
!!
!! \return a SyscDimensionalityF type
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
integer(kind=4), parameter :: syscmapping = 2
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
!> \brief Provide a time step type
type :: sysctimestepf
  integer(kind=8) :: timestepnumber !< Time step number.
  real(kind=8) :: starttime !< Time step start time.
  real(kind=8) :: timestepsize !< Time step size (delta t).
end type sysctimestepf
!
! ****** Parameters for return codes **********************************
!
integer(kind=4), parameter :: syscstatusok = 0
integer(kind=4), parameter :: syscstatuserror = 1
!
!> \brief Provide an error type returned by the Fortran interface calls
type :: syscerrorf
!> Error code. Set to `SyscStatusOk` if no error.
  integer(kind=4) :: retcode
!> Error message. Blank string if no error. 
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
!> \brief Provide a type for System Coupling setup information.
!!
!! To create and/or initialize the SyscSetupInfo struct, it is highly
!! recommended to use one of the functions within the
!! `syscGetSetupInfoF` interface. These functions will initialize all 
!! members to the correct values and will help to avoid 
!! back-compatibility issues in the future. For example:
!!
!! \code
!! SyscSetupInfo setupInfo = syscGetSetupInfoF(SyscSteady);
!! \endcode
! *********************************************************************
type :: syscsetupinfof
  integer(kind=8) :: analysistype !< Analysis type.
  logical(kind=8) :: restartssupported    !< Restarts supported flag.
  integer(kind=8) :: dimension !< Participant dimension.
  integer(kind=8) :: timeintegration !< Time integration method.
  integer(kind=8) :: participanttype !< Participant type.
end type syscsetupinfof
!
!**********************************************************************
!> \brief Provide an interface to get a setup info type
!**********************************************************************
!
interface syscgetsetupinfof
!
!**********************************************************************
!> \brief Provide a function to get a setup info type.
!!
!! Analysis type will be set to steady.
!! Restarts supported flag will be set to false.
!! Dimension will be set to 3.
!! Time integration will be set to implicit.
!!
!! \return a SyscSetupInfoF type.
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
!> \brief Provide a function to get a setup info type.
!!
!! \param[in] analysisType - analysis type.
!!
!! Restarts supported flag will be set to false.
!! Dimension will be set to 3.
!! Time integration will be set to implicit.
!!
!! \return a SyscSetupInfoF type.
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
!> \brief Provide a function to get a setup info type.
!!
!! \param[in] analysisType - analysis type.
!! \param[in] restartsSupported - restarts supported flag.
!!
!! Dimension will be set to 3.
!! Time integration will be set to implicit.
!!
!! \return a SyscSetupInfoF type.
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
!> \brief Provide a function to get a setup info type.
!!
!! \param[in] analysisType - analysis type.
!! \param[in] restartsSupported - restarts supported flag.
!! \param[in] dimension - participant dimension.
!!
!! Time integration will be set to implicit.
!!
!! \return a SyscSetupInfoF type.
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
!> \brief Provide a function to get a setup info type.
!!
!! \param[in] analysisType - analysis type.
!! \param[in] restartsSupported - restarts supported flag.
!! \param[in] dimension - participant dimension.
!! \param[in] timeIntegration - time integration method.
!!
!! \return a SyscSetupInfoF type.
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
!> \brief Provide a function to get a setup info type.
!!
!! \param[in] analysisType - analysis type.
!! \param[in] restartsSupported - restarts supported flag.
!! \param[in] dimension - participant dimension.
!! \param[in] timeIntegration - time integration method.
!! \param[in] participantType - participant type.
!!
!! \return a SyscSetupInfoF type.
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
!> \brief Provide a type for writing System Coupling setup files.
!!
!! To create and/or initialize the SyscSetupFileInfoF type, it is highly
!! recommended to use `syscGetSetupFileInfoF` function.
!! This function will initialize all members to
!! the correct values and will help to avoid back-compatibility issues
!! in the future. For example:
!!
!! \code
!! type(SyscSetupFileInfoF) :: setupFileInfo
!! setupFileInfo = syscGetSetupFileInfoF("setup.scp")
!! \endcode
! *********************************************************************
type :: syscsetupfileinfof
  character(len=SyscFilePathLen) :: setupfilename !< Setup file name.
  logical :: restartssupported !< Restarts support flag.
end type syscsetupfileinfof
!
!**********************************************************************
!> \brief Provide an interface to get a System Coupling setup file 
!! info type.
!**********************************************************************
!
interface syscgetsetupfileinfof
!
!**********************************************************************
!> \brief Provide a function to create SetupFileInfoF type.
!!
!! \param[in] setupFileName Setup file name.
!!
!! \return a SyscSetupFileInfoF type
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
!> \brief Provide a type for writing results files.
! *********************************************************************
type :: syscresultsinfof
  character(len=SyscFilePathLen) :: basefilename !< Base file name.
end type syscresultsinfof
!
!**********************************************************************
!> \brief Provide an interface to get a System Coupling results 
!! info type.
!**********************************************************************
!
interface syscgetresultsinfof
!
!**********************************************************************
!> \brief Provide a function to create SyscResultsInfoF type.
!!
!! \param[in] baseFileName - base file name.
!!
!! \return a SyscResultsInfoF type
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)