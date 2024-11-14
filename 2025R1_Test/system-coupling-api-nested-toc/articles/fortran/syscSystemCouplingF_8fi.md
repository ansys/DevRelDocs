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
!**********************************************************************
!
interface restartpointcreationintf
function restartpointcreationintf() result (ret)
  import :: syscfilepathlen
  character(len=SyscFilePathLen) :: ret
end function restartpointcreationintf
!
end interface restartpointcreationintf
!
!**********************************************************************
!**********************************************************************
!
      interface syscstartstandalonef
!
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
!**********************************************************************
!
interface syscconnectf
!
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
!**********************************************************************
!
interface syscaddregionf
!
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
!**********************************************************************
interface syscaddcouplinginterfacef
!
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
!**********************************************************************
!
interface syscaddinputvariablef
!
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
!**********************************************************************
!
interface syscaddoutputvariablef
!
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
!**********************************************************************
interface sysccompletesetupf
!
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
!**********************************************************************
!
interface syscregisterrestartpointcreationf
!
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
!**********************************************************************
interface syscregisterinputscalardataaccessf
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
!**********************************************************************
interface syscregisterinputvectordataaccessf
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
!**********************************************************************
interface syscregisteroutputscalardataaccessf
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
!**********************************************************************
interface syscregisteroutputvectordataaccessf
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
!**********************************************************************
interface syscregisterinputcomplexvectordataaccessf
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
!**********************************************************************
interface syscregisteroutputcomplexvectordataaccessf
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
!**********************************************************************
interface syscregistersurfmeshaccessf
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
!**********************************************************************
interface syscregistervolumemeshaccessf
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
!**********************************************************************
interface syscregisterpointcloudaccessf
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
!**********************************************************************
!
interface syscinitializeanalysisf
!
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
!**********************************************************************
!
interface syscdoiterationf
!
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
!**********************************************************************
!
interface syscdotimestepf
!
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
!**********************************************************************
!
interface syscgetcurrenttimestepf
!
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
!**********************************************************************
!
interface syscupdateinputsf
!
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
!**********************************************************************
!
interface syscupdateoutputsf
!
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
!**********************************************************************
!
interface syscdisconnectf
!
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
!**********************************************************************
!
interface syscfatalerrorf
!
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
!**********************************************************************
interface syscchecksurfacemeshvalidityf
!
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
!**********************************************************************
!
interface syscwritesetupfilef
!
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
!**********************************************************************
!
interface syscwriteresultsf
!
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
!**********************************************************************
!
interface syscgetnumcouplinginterfacesf
!
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
!**********************************************************************
!
interface syscgetnumregionsf
!
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