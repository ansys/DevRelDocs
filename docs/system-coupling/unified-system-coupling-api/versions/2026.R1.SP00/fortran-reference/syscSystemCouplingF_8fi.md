# File syscSystemCouplingF.fi

![][Fortran]

**Location**: `syscSystemCouplingF.fi`





## Classes

* [fortran::restartpointcreationintf](interfacefortran_1_1restartpointcreationintf.md#interfacefortran_1_1restartpointcreationintf)
* [fortran::syscstartstandalonef](interfacefortran_1_1syscstartstandalonef.md#interfacefortran_1_1syscstartstandalonef)
* [fortran::syscconnectf](interfacefortran_1_1syscconnectf.md#interfacefortran_1_1syscconnectf)
* [fortran::syscaddregionf](interfacefortran_1_1syscaddregionf.md#interfacefortran_1_1syscaddregionf)
* [fortran::syscaddcouplinginterfacef](interfacefortran_1_1syscaddcouplinginterfacef.md#interfacefortran_1_1syscaddcouplinginterfacef)
* [fortran::syscaddinputvariablef](interfacefortran_1_1syscaddinputvariablef.md#interfacefortran_1_1syscaddinputvariablef)
* [fortran::syscaddoutputvariablef](interfacefortran_1_1syscaddoutputvariablef.md#interfacefortran_1_1syscaddoutputvariablef)
* [fortran::sysccompletesetupf](interfacefortran_1_1sysccompletesetupf.md#interfacefortran_1_1sysccompletesetupf)
* [fortran::syscregisterrestartpointcreationf](interfacefortran_1_1syscregisterrestartpointcreationf.md#interfacefortran_1_1syscregisterrestartpointcreationf)
* [fortran::syscregisterinputscalardataaccessf](interfacefortran_1_1syscregisterinputscalardataaccessf.md#interfacefortran_1_1syscregisterinputscalardataaccessf)
* [fortran::syscregisterinputvectordataaccessf](interfacefortran_1_1syscregisterinputvectordataaccessf.md#interfacefortran_1_1syscregisterinputvectordataaccessf)
* [fortran::syscregisteroutputscalardataaccessf](interfacefortran_1_1syscregisteroutputscalardataaccessf.md#interfacefortran_1_1syscregisteroutputscalardataaccessf)
* [fortran::syscregisteroutputvectordataaccessf](interfacefortran_1_1syscregisteroutputvectordataaccessf.md#interfacefortran_1_1syscregisteroutputvectordataaccessf)
* [fortran::syscregisterinputcomplexvectordataaccessf](interfacefortran_1_1syscregisterinputcomplexvectordataaccessf.md#interfacefortran_1_1syscregisterinputcomplexvectordataaccessf)
* [fortran::syscregisteroutputcomplexvectordataaccessf](interfacefortran_1_1syscregisteroutputcomplexvectordataaccessf.md#interfacefortran_1_1syscregisteroutputcomplexvectordataaccessf)
* [fortran::syscregistersurfmeshaccessf](interfacefortran_1_1syscregistersurfmeshaccessf.md#interfacefortran_1_1syscregistersurfmeshaccessf)
* [fortran::syscregistervolumemeshaccessf](interfacefortran_1_1syscregistervolumemeshaccessf.md#interfacefortran_1_1syscregistervolumemeshaccessf)
* [fortran::syscregisterpointcloudaccessf](interfacefortran_1_1syscregisterpointcloudaccessf.md#interfacefortran_1_1syscregisterpointcloudaccessf)
* [fortran::syscinitializeanalysisf](interfacefortran_1_1syscinitializeanalysisf.md#interfacefortran_1_1syscinitializeanalysisf)
* [fortran::syscdoiterationf](interfacefortran_1_1syscdoiterationf.md#interfacefortran_1_1syscdoiterationf)
* [fortran::syscdotimestepf](interfacefortran_1_1syscdotimestepf.md#interfacefortran_1_1syscdotimestepf)
* [fortran::syscgetcurrenttimestepf](interfacefortran_1_1syscgetcurrenttimestepf.md#interfacefortran_1_1syscgetcurrenttimestepf)
* [fortran::syscupdateinputsf](interfacefortran_1_1syscupdateinputsf.md#interfacefortran_1_1syscupdateinputsf)
* [fortran::syscupdateoutputsf](interfacefortran_1_1syscupdateoutputsf.md#interfacefortran_1_1syscupdateoutputsf)
* [fortran::syscdisconnectf](interfacefortran_1_1syscdisconnectf.md#interfacefortran_1_1syscdisconnectf)
* [fortran::syscfatalerrorf](interfacefortran_1_1syscfatalerrorf.md#interfacefortran_1_1syscfatalerrorf)
* [fortran::syscchecksurfacemeshvalidityf](interfacefortran_1_1syscchecksurfacemeshvalidityf.md#interfacefortran_1_1syscchecksurfacemeshvalidityf)
* [fortran::syscwritesetupfilef](interfacefortran_1_1syscwritesetupfilef.md#interfacefortran_1_1syscwritesetupfilef)
* [fortran::syscwriteresultsf](interfacefortran_1_1syscwriteresultsf.md#interfacefortran_1_1syscwriteresultsf)
* [fortran::syscgetnumcouplinginterfacesf](interfacefortran_1_1syscgetnumcouplinginterfacesf.md#interfacefortran_1_1syscgetnumcouplinginterfacesf)
* [fortran::syscgetnumregionsf](interfacefortran_1_1syscgetnumregionsf.md#interfacefortran_1_1syscgetnumregionsf)
* [fortran::syscgetaddedregionf](interfacefortran_1_1syscgetaddedregionf.md#interfacefortran_1_1syscgetaddedregionf)

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
! This interface file provides coupled analysis related APIs.
include 'syscElementTypesF.fi'
include 'syscCommonTypesF.fi'
include 'syscAttributeF.fi'
include 'syscInputScalarDataF.fi'
include 'syscInputVectorDataF.fi'
include 'syscOutputIntegerDataF.fi'
include 'syscOutputScalarDataF.fi'
include 'syscOutputVectorDataF.fi'
include 'syscInputComplexVectorDataF.fi'
include 'syscOutputComplexVectorDataF.fi'
include 'syscMeshDefinitionF.fi'
include 'syscSurfaceMeshF.fi'
include 'syscVolumeMeshF.fi'
include 'syscPointCloudF.fi'
include 'syscFunctionTypesF.fi'
include 'syscVariableF.fi'
include 'syscRegionF.fi'
include 'syscDataTransferF.fi'
include 'syscCouplingInterfaceF.fi'
include 'syscLegacyInterfacesF.fi'
!
!**********************************************************************
!> \brief Provide function interface for creating restart points.
!!
!! This function may be called only during outputs update,
!! and is expected to return a unique string identifier for a given
!! restart point.
!**********************************************************************
!
interface restartpointcreationintf
!> \brief Provide a function prototype for creating restart points.
function restartpointcreationintf() result (ret)
  import :: syscfilepathlen
  character(len=SyscFilePathLen) :: ret
end function restartpointcreationintf
!
end interface restartpointcreationintf
!
!**********************************************************************
!> \brief Provide a function interface to start in standalone mode.
!**********************************************************************
!
      interface syscstartstandalonef
!
!> \brief Provide a function to start standalone mode in parallel.
!!
!! \param[in] communicator  MPI communicator.
!!
!! This will initialize the participant library in standalone mode
!! and will use the provided MPI communicator for all parallel
!! communication.
!! 
!! Note that if the MPI communicator is `MPI_COMM_WORLD`, then it is
!! not necessary to call this function.
!
      function syscstartstandaloneparallelf(communicator) result (ret)
!
        import :: syscerrorf
        integer(kind=4), intent(in)  :: communicator
        type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscStartStandaloneParallelF
!DIR$ ENDIF
!
      end function syscstartstandaloneparallelf
!
      end interface syscstartstandalonef
!
!**********************************************************************
!> \brief Provide an interface to connect to System Coupling.
!**********************************************************************
!
interface syscconnectf
!
!> \brief Provide a function to establish connection to 
!! System Coupling.
!!
!! A participant must have obtained the host and port information from
!! System Coupling prior to calling this function (e.g. via an input
!!  argument when participant application was started).
!!
!! If using a support MPI distribution, this function should be called
!! on all ranks that belong to the `MPI_COMM_WORLD` communicator.
!!
!! \param[in] scHost           Name of the host on which
!!                             System Coupling is running.
!!
!! \param[in] scPort           Port number on which System Coupling is
!!                             listening for participant connections.
!!
!! \param[in] participantName  Name of this participant
!!                             (e.g. "MAPDL-1").
!!
!! \param[in] buildInformation Information about the build of this
!!                             participant solver.
!!
!! \return a `SyscErrorF` type that can be checked for any errors.
!!
function syscconnectf(scHost, &
                      scPort, &
                      participantName, &
                      buildInformation) result (ret)
!
  import :: syscerrorf
  integer(kind=4), intent(in)  :: scport
  character(*), intent(in) :: schost
  character(*), intent(in) :: participantname
  character(*), optional, intent(in) :: buildinformation
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscConnectF
!DIR$ ENDIF
!
end function syscconnectf
!
!> \brief Provide a function to establish connection to 
!! System Coupling and pass a custom MPI communicator.
!!
!! A participant must have obtained the host and port information from
!! System Coupling prior to calling this function (e.g. via an input
!!  argument when participant application was started).
!!
!! \param[in] scHost           Name of the host on which
!!                             System Coupling is running.
!!
!! \param[in] scPort           Port number on which System Coupling is
!!                             listening for participant connections.
!!
!! \param[in] participantName  Name of this participant
!!                             (e.g. "MAPDL-1").
!!
!! \param[in] communicator MPI communicator on which all API calls
!! are made.
!!
!! \param[in] buildInformation Information about the build of this
!!                             participant solver.
!!
!! \return a `SyscErrorF` type that can be checked for any errors.
!!
function syscconnectparallelf(scHost, &
                              scPort, &
                              participantName, &
                              communicator, &
                              buildInformation) result (ret)
!
  import :: syscerrorf
  integer(kind=4), intent(in)  :: scport
  character(*), intent(in) :: schost
  character(*), intent(in) :: participantname
  integer(kind=4), intent(in)  :: communicator
  character(*), optional, intent(in) :: buildinformation
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscConnectParallelF
!DIR$ ENDIF
!
end function syscconnectparallelf
!
end interface syscconnectf
!
!**********************************************************************
!> \brief Provide an interface to add a region.
!**********************************************************************
!
interface syscaddregionf
!
!> Provide a function to add a region to be used in a coupled analysis.
!!
!! If this region has already been added, then this call will have no 
!! effect.
!!
!! If a different region with the same has already been added, then an
!! error will be returned.
!!
!! If the region name contains invalid characters, then a runtime eror 
!! will be thrown.
!!
!! \param[in] reg - region to be added
!!
!! \return a `SyscErrorF` type for error checking.
!!
function syscaddregionf(reg) result (ret)
!
  import :: syscregionf
  import :: syscerrorf
  type(syscregionf), intent(in) :: reg
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscAddRegionF
!DIR$ ENDIF
!
end function syscaddregionf
!
end interface syscaddregionf
!
!**********************************************************************
!> \brief Provide an interface to add a coupling interface.
!**********************************************************************
interface syscaddcouplinginterfacef
!
!> \brief Provide a function to add a coupling interface.
!! 
!! If this coupling interface has already been added, then this call
!! will have no effect.
!!
!! If a different coupling interface with the same has already been
!! added, then an error status will be returned.
!!
!! If the coupling interface name contains invalid characters, then an
!! error status will be returned.
!! 
!! See SyscCouplingInterfaceF for more details.
!!
!! \param[in] interface - a coupling interface to be added.
!!
!! \return a `SyscErrorF` type for error checking.
!
function syscaddcouplinginterfacef(interface) result (ret)
!
  import :: sysccouplinginterfacef
  import :: syscerrorf
  type(sysccouplinginterfacef), intent(in) :: interface
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscAddCouplingInterfaceF
!DIR$ ENDIF
!
end function syscaddcouplinginterfacef
!
function syscaddcouplinginterfacef_a(interface, &
  autoGenerateDataTransfers) result (ret)
  !
    import :: sysccouplinginterfacef
    import :: syscerrorf
    type(sysccouplinginterfacef), intent(in) :: interface
    logical, intent(in) :: autogeneratedatatransfers
    type(syscerrorf) :: ret
  !
  !DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
  !DIR$ ATTRIBUTES DLLIMPORT :: syscAddCouplingInterfaceF_A
  !DIR$ ENDIF
  !
  end function syscaddcouplinginterfacef_a
!
end interface syscaddcouplinginterfacef
!
!**********************************************************************
!> \brief Provide an interface to add an input variable
!**********************************************************************
!
interface syscaddinputvariablef
!
!> \brief Provide a function to add an input variable to the region.
!!
!! If this variable has already been added to the region as an input 
!! variable, then this call will have no effect.
!!
!! If a different variable with the same name has already been added 
!! to the region as an input variable, then an error will be returned.
!!
!! If a variable with the same name has already been added to the 
!! region as an output variable, then an error will be returned.
!!
!! If the variable name contains invalid characters, then an error 
!! will be returned.
!!
!! If the region discretization type is point cloud, then the location 
!! of the variable added to this region is insignificant.
!!
!! \param[in] reg Region to which the input variable is to be added.
!!
!! \param[in] var Variable whose values are provided by System 
!!   Coupling and consumed by the participant.
!!
!! \return a `SyscErrorF` type for error checking.
function syscaddinputvariablef(reg, var) result (ret)
!
  import :: syscregionf
  import :: syscvariablef
  import :: syscerrorf
  type(syscregionf), intent(in) :: reg
  type(syscvariablef), intent(in) :: var
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscAddInputVariableF
!DIR$ ENDIF
!
end function syscaddinputvariablef
!
end interface syscaddinputvariablef
!
!**********************************************************************
!> \brief Provide an interface to add an output variable.
!**********************************************************************
!
interface syscaddoutputvariablef
!
!> \brief Provide a function to add an output variable to the region.
!!
!! If this variable has already been added to the region as an output 
!! variable, then this call will have no effect.
!!
!! If a different variable with the same name has already been added 
!! to the region as an output variable, then an error will be returned.
!!
!! If a variable with the same name has already been added to the 
!! region as an input variable, then an error will be returned.
!!
!! If the variable name contains invalid characters, then an error 
!! will be returned.
!!
!! If the region discretization type is point cloud, then the location 
!! of the variable added to this region is insignificant.
!!
!! \param[in] reg Region to which the output variable is to be 
!!   added.
!!
!! \param[in] var Variable whose values are consumed by System 
!!   Coupling and provided by the participant.
!!
!! \return a `SyscErrorF` type for error checking.
function syscaddoutputvariablef(reg, var) result (ret)
!
  import :: syscregionf
  import :: syscvariablef
  import :: syscerrorf
  type(syscregionf), intent(in) :: reg
  type(syscvariablef), intent(in) :: var
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscAddOutputVariableF
!DIR$ ENDIF
!
end function syscaddoutputvariablef
!
end interface syscaddoutputvariablef
!
!**********************************************************************
!> \brief Provide an interface to complete the setup.
!**********************************************************************
interface sysccompletesetupf
!
!> \brief Provide a function to notify System Coupling that setup 
!!        can be completed.
!!
!! After this function is called, coupled analysis setup can no 
!! longer be updated, i.e. regions and variables cannot be changed.
!!
!! Once the setup is complete, any subsequent call to complete the
!! setup will have no effect.
!!
!! \param[in] setupInfo - setup information.
!!
!! \return a `SyscErrorF` type for error checking.
function sysccompletesetupf(setupInfo) result (ret)
  import :: syscsetupinfof
  import :: syscerrorf
  type(syscsetupinfof), intent(in) :: setupinfo
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscCompleteSetupF
!DIR$ ENDIF
!
end function sysccompletesetupf
!
end interface sysccompletesetupf
!
!**********************************************************************
!> \brief Provide an interface to register restart point creation 
!! callback.
!**********************************************************************
!
interface syscregisterrestartpointcreationf
!
!> \brief Provide a function to register restart point creation
!! callback.
!!
!! \param restCr - a pointer to a function that conforms to the
!! `restartPointCreationIntf` interface
!!
!! \return a `SyscErrorF` type for error checking.
function syscregisterrestartpointcreationf(restCr) result (ret)
!
  import :: syscerrorf
  import :: restartpointcreationintf
  procedure(restartpointcreationintf) :: restcr
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterRestartPointCreationF
!DIR$ ENDIF
!
end function syscregisterrestartpointcreationf
!
end interface syscregisterrestartpointcreationf
!
!**********************************************************************
!> \brief Provide an interface to register input scalar data access.
!**********************************************************************
interface syscregisterinputscalardataaccessf
!> \brief Provide a function to register input scalar data access.
!!
!! \param dataAccess - a pointer to a function that conforms
!!                     to SyscInputScalarDataAccessF interface.
!!
!! \return a `SyscErrorF` type for error checking.
function syscregisterinputscalardataaccessf(dataAccess) result (ret)
  import :: syscerrorf
  import :: syscinputscalardataaccessf
  procedure(syscinputscalardataaccessf) :: dataaccess
  type(syscerrorf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterInputScalarDataAccessF
!DIR$ ENDIF
end function syscregisterinputscalardataaccessf
end interface syscregisterinputscalardataaccessf
!
!**********************************************************************
!> \brief Provide an interface to register input vector data access.
!**********************************************************************
interface syscregisterinputvectordataaccessf
!> \brief Provide a function to register input vector data access.
!!
!! \param dataAccess - a pointer to the function that conforms
!! to SyscInputVectorDataAccessF interface.
!!
!! \return a `SyscErrorF` type for error checking.
function syscregisterinputvectordataaccessf(dataAccess) result (ret)
  import :: syscerrorf
  import :: syscinputvectordataaccessf
  procedure(syscinputvectordataaccessf) :: dataaccess
  type(syscerrorf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterInputVectorDataAccessF
!DIR$ ENDIF
end function syscregisterinputvectordataaccessf
end interface syscregisterinputvectordataaccessf
!
!**********************************************************************
!> \brief Provide an interface to register output scalar data.
!**********************************************************************
interface syscregisteroutputscalardataaccessf
!> \brief Provide a function to register output scalar data access.
!!
!! \param dataAccess - a pointer to the function that conforms
!!                     to SyscOutputScalarDataAccessF interface.
!! \return a `SyscErrorF` type for error checking.
function syscregisteroutputscalardataaccessf(dataAccess) result (ret)
  import :: syscerrorf
  import :: syscoutputscalardataaccessf
  procedure(syscoutputscalardataaccessf) :: dataaccess
  type(syscerrorf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterOutputScalarDataAccessF
!DIR$ ENDIF
end function syscregisteroutputscalardataaccessf
end interface syscregisteroutputscalardataaccessf
!
!**********************************************************************
!> \brief Provide an interface to register output vector data access.
!**********************************************************************
interface syscregisteroutputvectordataaccessf
!> \brief Provide a function to register output vector data access.
!!
!! \param dataAccess - a pointer to the function that conforms
!! to SyscOutputVectorDataAccessF interface.
!! \return a `SyscErrorF` type for error checking.
function syscregisteroutputvectordataaccessf(dataAccess) result (ret)
  import :: syscerrorf
  import :: syscoutputvectordataaccessf
  procedure(syscoutputvectordataaccessf) :: dataaccess
  type(syscerrorf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterOutputVectorDataAccessF
!DIR$ ENDIF
end function syscregisteroutputvectordataaccessf
end interface syscregisteroutputvectordataaccessf
!
!**********************************************************************
!> \brief Provide an interface to register input complex
!! vector data access.
!**********************************************************************
interface syscregisterinputcomplexvectordataaccessf
!> \brief Provide a function to register input complexvector 
!! data access.
!!
!! \param dataAccess - a pointer to the callback function.
!!
!! \return a `SyscErrorF` type for error checking.
function syscregisterinputcomplexvectordataaccessf(dataAccess) &
  result(ret)
  import :: syscerrorf
  import :: syscinputcomplexvectordataaccessf
  procedure(syscinputcomplexvectordataaccessf) :: dataaccess
  type(syscerrorf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterInputComplexVectorDataAccessF
!DIR$ ENDIF
end function syscregisterinputcomplexvectordataaccessf
end interface syscregisterinputcomplexvectordataaccessf
!
!**********************************************************************
!> \brief Provide an interface to register output complex
!! vector data access.
!**********************************************************************
interface syscregisteroutputcomplexvectordataaccessf
!> \brief Provide a function to register output complexvector 
!! data access.
!!
!! \param dataAccess - a pointer to the callback function.
!!
!! \return a `SyscErrorF` type for error checking.
function syscregisteroutputcomplexvectordataaccessf(dataAccess) &
  result(ret)
  import :: syscerrorf
  import :: syscoutputcomplexvectordataaccessf
  procedure(syscoutputcomplexvectordataaccessf) :: dataaccess
  type(syscerrorf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterOutputComplexVectorDataAccessF
!DIR$ ENDIF
end function syscregisteroutputcomplexvectordataaccessf
end interface syscregisteroutputcomplexvectordataaccessf
!
!**********************************************************************
!> \brief Provide an interface to register surface mesh access.
!**********************************************************************
interface syscregistersurfmeshaccessf
!> \brief Provide a function to register surface mesh access.
!!
!! \param dataAccess - a pointer to the function that conforms
!! to SyscSurfaceMeshAccessF interface.
!!
!! \return a `SyscErrorF` type for error checking.
function syscregistersurfmeshaccessf(dataAccess) result (ret)
  import :: syscerrorf
  import :: syscsurfacemeshaccessf
  procedure(syscsurfacemeshaccessf) :: dataaccess
  type(syscerrorf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterSurfMeshAccessF
!DIR$ ENDIF
end function syscregistersurfmeshaccessf
end interface syscregistersurfmeshaccessf
!
!**********************************************************************
!> \brief Provide an interface to register volume mesh access.
!**********************************************************************
interface syscregistervolumemeshaccessf
!> \brief Provide a function to register volume mesh access.
!!
!! \param dataAccess - a pointer to the function that conforms
!! to SyscVolumeMeshAccessF interface.
!!
!! \return a `SyscErrorF` type for error checking.
function syscregistervolumemeshaccessf(dataAccess) result (ret)
  import :: syscerrorf
  import :: syscvolumemeshaccessf
  procedure(syscvolumemeshaccessf) :: dataaccess
  type(syscerrorf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterVolumeMeshAccessF
!DIR$ ENDIF
end function syscregistervolumemeshaccessf
end interface syscregistervolumemeshaccessf
!
!**********************************************************************
!> \brief Provide an interface to register point cloud access.
!**********************************************************************
interface syscregisterpointcloudaccessf
!> \brief Provide a function to register point cloud access.
!!
!! \param dataAccess - a pointer to the function that conforms
!! to SyscPointCloudAccessF interface.
!!
!! \return a `SyscErrorF` type for error checking.
function syscregisterpointcloudaccessf(dataAccess) result (ret)
  import :: syscerrorf
  import :: syscpointcloudaccessf
  procedure(syscpointcloudaccessf) :: dataaccess
  type(syscerrorf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterPointCloudAccessF
!DIR$ ENDIF
end function syscregisterpointcloudaccessf
end interface syscregisterpointcloudaccessf
!
!**********************************************************************
!> \brief Provide an interface to notify System Coupling that
!! analysis initialization can be completed.
!**********************************************************************
!
interface syscinitializeanalysisf
!
!> \brief Provide a function to notify System Coupling that
!! analysis initialization can be completed.
!!
!! This function must be called after registering mesh and variable 
!! data access and prior to entering the coupled analysis loop.
!!
!! If this function is called before the coupled analysis is complete,
!! it will automatically complete the coupled analysis and assume
!! steady analysis type.
!!
!! \return a `SyscErrorF` type for error checking.
function syscinitializeanalysisf() result (ret)
  import :: syscerrorf
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscInitializeAnalysisF
!DIR$ ENDIF
!
end function syscinitializeanalysisf
!
end interface syscinitializeanalysisf
!
!**********************************************************************
!> \brief Provide an interface to check whether to do a coupling
!! iteration.
!**********************************************************************
!
interface syscdoiterationf
!
!> \brief Provide a function to check whether to do a coupling 
!! iteration.
!!
!! \return true if another coupling iteration is 
!! required, otherwise it returns false.
logical function syscdoiterationf()
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscDoIterationF
!DIR$ ENDIF
!
end function syscdoiterationf
!
end interface syscdoiterationf
!
!**********************************************************************
!> \brief Provide an interface to check whether to do another
!! coupling time step.
!**********************************************************************
!
interface syscdotimestepf
!
!> \brief Provide a function to check whether to do a coupling time 
!! step.
!!
!! This function should be called to check if another coupling time 
!! step should be done. If the previous coupling time step is finished 
!! and another time step should be performed, then calling this 
!! function will tell System Coupling that the coupling participant 
!! is going to advance to the next time step (i.e. calling 
!! syscDoTimeStepF() will cause syscDoIterationF() to change from 
!! returning false to returning true, under the conditions 
!! described above).
!!
!! This function only makes sense for transient analysis. It will
!! always return false for steady analysis.
!!
!! \return true if another coupling time step is 
!! required, otherwise it returns false.
logical function syscdotimestepf()
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscDoTimeStepF
!DIR$ ENDIF
!
end function syscdotimestepf
!
end interface syscdotimestepf
!
!**********************************************************************
!> \brief Provide an interface to get current time step
!**********************************************************************
!
interface syscgetcurrenttimestepf
!
!> \brief Provide a function to get current time step.
!!
!! This function returns a time step struct, which contains
!! time step number, start time, and time step size for the
!! current coupling time step.
!!
!! A default value (time step number 0, start time 0.0,
!! time step size 0.0) is returned if this function is called
!! outside the coupled analysis loop or if the analysis is steady.
!!
!! \return a `SyscTimeStepF` type for current time step
function syscgetcurrenttimestepf() result (timeStep)
!
  import :: sysctimestepf
  type(sysctimestepf) :: timestep
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetCurrentTimeStepF
!DIR$ ENDIF
!
end function syscgetcurrenttimestepf
!
end interface syscgetcurrenttimestepf
!
!**********************************************************************
!> \brief Provide an interface to update the input variables.
!**********************************************************************
!
interface syscupdateinputsf
!
!> \brief Provide a function to update the input variables.
!!
!! Solution data for all input variables will be updated. Depending
!! on the defined interfaces, data will be transferred from another 
!! coupling participant solver, or from the opposite side of the 
!! same-participant coupling interface.
!! 
!! When doing cosimulation, this function must be called from inside 
!! the coupled analysis loop. It tells System Coupling that the 
!! participant is about to begin its solver iterations. All input 
!! variable data will be up-to-date after returning from this 
!! function. If any local coupling interfaces are defined, all 
!! corresponding input variable data will also be updated.
!! 
!! When doing same-participant mapping only (without cosimulation), 
!! this function should be called whenever input data needs to be 
!! brought up-to-date.
function syscupdateinputsf() result (ret)
  import :: syscerrorf
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscUpdateInputsF
!DIR$ ENDIF
!
end function syscupdateinputsf
!
end interface syscupdateinputsf
!
!**********************************************************************
!> \brief Provide an interface to update the participant's output 
!! variables
!**********************************************************************
!
interface syscupdateoutputsf
!
!> \brief Provide a function to update the participant's output
!! variables
function syscupdateoutputsf(convergenceStatus) result (ret)
!
  import :: syscerrorf
  integer(kind=4), intent(in)  :: convergencestatus
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscUpdateOutputsF
!DIR$ ENDIF
!
end function syscupdateoutputsf
!
end interface syscupdateoutputsf
!
!**********************************************************************
!> \brief Provide an interface to end the analysis
!! and disconnect from System Coupling.
!**********************************************************************
!
interface syscdisconnectf
!
!> \brief Provide a function to end the analysis
!! and disconnect from System Coupling.
function syscdisconnectf() result (ret)
  import :: syscerrorf
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscDisconnectF
!DIR$ ENDIF
!
end function syscdisconnectf
!
end interface syscdisconnectf
!
!**********************************************************************
!> \brief Provide an interface to notify System Coupling of a 
!! fatal error.
!**********************************************************************
!
interface syscfatalerrorf
!
!> \brief Provide a subroutine to notify System Coupling of a 
!! fatal error.
!!
!! \param[in] errorMessage - the error message.
subroutine syscfatalerrorf(errorMessage)
!
  character(*), intent(in) :: errorMessage
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscFatalErrorF
!DIR$ ENDIF
!
end subroutine syscfatalerrorf
!
end interface syscfatalerrorf
!
!**********************************************************************
!> \brief Provide an interface to perform simple mesh validity checks.
!**********************************************************************
interface syscchecksurfacemeshvalidityf
!
!> \brief Provide a function to perform simple mesh validity checks.
!!
!! This function is provided as a testing and debugging tool
!! and is not meant to be used in production workflows.
!! System Coupling itself will not call this function for
!! performance reasons.
!!
!! The function will check the surface mesh for
!! detectable problems. For example, it will check if array sizes are
!! consistent, that elemNodeIds array only contains ids that are found
!! in nodeIds array, etc. It is not an exhaustive validity check -
!! the mesh can still have problems even if all checks passed.
!!
!! \param[in] surfaceMesh - surface mesh to be checked
!!
!! \return Return value is SyscErrorF type. If mesh checks passed,
!! then retcode will be 0. If mesh checks failed, then retcode will
!! be not 0 and message that contains information about about
!! the particular issue.
function syscchecksurfacemeshvalidityf(surfaceMesh) result (ret)
!
  import :: syscsurfacemeshf
  import :: syscerrorf
  type(syscsurfacemeshf) :: surfacemesh
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscCheckSurfaceMeshValidityF
!DIR$ ENDIF
!
end function syscchecksurfacemeshvalidityf
!
end interface syscchecksurfacemeshvalidityf
!
!**********************************************************************
!> \brief Provide an interface to write the setup file.
!**********************************************************************
!
interface syscwritesetupfilef
!
!> \brief Provide a function to write the setup file.
!!
!! This function can be used to generate a System Coupling setup file,
!! which contains participant's setup information.
!! It should be called after calling syscCompleteCouplingSetupF.
!!
!! \param[in] setupFileInfo - setup file info.
!!
!! \return true if the setup file was successfully written,
!! and false otherwise.
logical function syscwritesetupfilef(setupFileInfo)
!
  import :: syscsetupfileinfof
  type(syscsetupfileinfof), intent(in) :: setupfileinfo
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscWriteSetupFileF
!DIR$ ENDIF
!
end function syscwritesetupfilef
!
end interface syscwritesetupfilef
!
!**********************************************************************
!> \brief Provide an interface to write results.
!**********************************************************************
!
interface syscwriteresultsf
!
!> \brief Provide a function to write the results.
function syscwriteresultsf(resultsInfo) result (ret)
!
  import :: syscresultsinfof, syscerrorf
  type(syscresultsinfof), intent(in) :: resultsinfo
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscWriteResultsF
!DIR$ ENDIF
!
end function syscwriteresultsf
!
end interface syscwriteresultsf
!
!**********************************************************************
!> \brief Provide an interface to return the number of added 
!! coupling interfaces.
!**********************************************************************
!
interface syscgetnumcouplinginterfacesf
!
!> \brief Provide a  function to return the number of added 
!! coupling interfaces.
!!
!! \return Number of coupling interfaces.
!!
function syscgetnumcouplinginterfacesf() result (ret)
  integer(kind=8) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetNumCouplingInterfacesF
!DIR$ ENDIF
end function syscgetnumcouplinginterfacesf
!
end interface syscgetnumcouplinginterfacesf
!
!**********************************************************************
!> \brief Provide an interface to return the number of added regions.
!**********************************************************************
!
interface syscgetnumregionsf
!
!> \brief Provide a  function to return the number of added regions.
!!
!! \return Number of regions
!!
function syscgetnumregionsf() result (ret)
  integer(kind=8) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetNumRegionsF
!DIR$ ENDIF
end function syscgetnumregionsf
!
end interface syscgetnumregionsf
!
!**********************************************************************
!! \brief Provide an interface to return added region given the 
!! region index.
!**********************************************************************
!
interface syscgetaddedregionf
!
!! \brief Provide a function to return added region given the 
!! region index.
!!
!! \param[in] index - region index. Use syscGetNumRegionsF() to get 
!! the number of regions.
!!
!! \return Region at specified index.
!!
function syscgetaddedregionf(index) result (ret)
  import :: syscregionf
  integer(kind=8) :: index
  type(SyscRegionF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetAddedRegionF
!DIR$ ENDIF
end function syscgetaddedregionf
!
end interface syscgetaddedregionf
!
end module fortran
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)