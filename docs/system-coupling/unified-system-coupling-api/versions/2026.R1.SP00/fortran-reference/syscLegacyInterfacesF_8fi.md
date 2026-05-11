# File syscLegacyInterfacesF.fi

![][Fortran]

**Location**: `syscLegacyInterfacesF.fi`





## Classes

* [fortran::sysccompletecouplingsetupf](interfacefortran_1_1sysccompletecouplingsetupf.md#interfacefortran_1_1sysccompletecouplingsetupf)
* [fortran::inputscalardataaccessintf](interfacefortran_1_1inputscalardataaccessintf.md#interfacefortran_1_1inputscalardataaccessintf)
* [fortran::inputvectordataaccessintf](interfacefortran_1_1inputvectordataaccessintf.md#interfacefortran_1_1inputvectordataaccessintf)
* [fortran::outputscalardataaccessintf](interfacefortran_1_1outputscalardataaccessintf.md#interfacefortran_1_1outputscalardataaccessintf)
* [fortran::outputvectordataaccessintf](interfacefortran_1_1outputvectordataaccessintf.md#interfacefortran_1_1outputvectordataaccessintf)
* [fortran::syscregisterinputscalarvariableaccessf](interfacefortran_1_1syscregisterinputscalarvariableaccessf.md#interfacefortran_1_1syscregisterinputscalarvariableaccessf)
* [fortran::syscregisterinputvectorvariableaccessf](interfacefortran_1_1syscregisterinputvectorvariableaccessf.md#interfacefortran_1_1syscregisterinputvectorvariableaccessf)
* [fortran::syscregisteroutputscalarvariableaccessf](interfacefortran_1_1syscregisteroutputscalarvariableaccessf.md#interfacefortran_1_1syscregisteroutputscalarvariableaccessf)
* [fortran::syscregisteroutputvectorvariableaccessf](interfacefortran_1_1syscregisteroutputvectorvariableaccessf.md#interfacefortran_1_1syscregisteroutputvectorvariableaccessf)

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
! This interface file contains legacy/deprecated APIs.
! Do not use these interfaces.
!
!**********************************************************************
! Deprecated - do not use.
!**********************************************************************
!
interface sysccompletecouplingsetupf
!
function sysccompletecouplingsetupf() result (ret)
  import :: syscerrorf
  type(SyscErrorF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscCompleteCouplingSetupF
!DIR$ ENDIF
!
end function sysccompletecouplingsetupf
!
function sysccompletecouplingsetupf_v2(analysisType) result (ret)
  import :: syscerrorf
  integer(kind=4), intent(in) :: analysisType
  type(SyscErrorF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscCompleteCouplingSetupF_v2
!DIR$ ENDIF
!
end function sysccompletecouplingsetupf_v2
!
end interface sysccompletecouplingsetupf
!
!**********************************************************************
! Deprecated - do not use.
!**********************************************************************
!
interface inputscalardataaccessintf
!
function inputscalardataaccessintf(regionName, &
                                   variableName, &
                                   inputScalarData) result (ret)
  import :: syscinputscalardataf
  import :: syscerrorf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionName
  character(len=SyscStrLen), intent(in) :: variableName
  type(SyscInputScalarDataF), intent(out) :: inputScalarData
  type(SyscErrorF) :: ret
end function inputscalardataaccessintf
!
end interface inputscalardataaccessintf
!
!**********************************************************************
! Deprecated - do not use.
!**********************************************************************
!
interface inputvectordataaccessintf
!
function inputvectordataaccessintf(regionName, &
                                   variableName, &
                                   inputVectorData) result (ret)
        import :: syscinputvectordataf
        import :: syscerrorf
        import :: syscstrlen
        character(len=SyscStrLen), intent(in) :: regionName
        character(len=SyscStrLen), intent(in) :: variableName
        type(SyscInputVectorDataF), intent(out) :: inputVectorData
        type(SyscErrorF) :: ret
end function inputvectordataaccessintf
!
end interface inputvectordataaccessintf
!
!**********************************************************************
! Deprecated - do not use.
!**********************************************************************
!
interface outputscalardataaccessintf
!
  function outputscalardataaccessintf(regionName, &
                                      variableName, &
                                      outputScalarData) result (ret)
    import :: syscoutputscalardataf
    import :: syscerrorf
    import :: syscstrlen
    character(len=SyscStrLen), intent(in) :: regionName
    character(len=SyscStrLen), intent(in) :: variableName
    type(SyscOutputScalarDataF), intent(out) :: outputScalarData
    type(SyscErrorF) :: ret
  end function outputscalardataaccessintf
!
end interface outputscalardataaccessintf
!
!**********************************************************************
! Deprecated - do not use.
!**********************************************************************
interface outputvectordataaccessintf
!
function outputvectordataaccessintf(regionName, &
                                    variableName, &
                                    outputVectorData) result (ret)
  import :: syscoutputvectordataf
  import :: syscerrorf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionName
  character(len=SyscStrLen), intent(in) :: variableName
  type(SyscOutputVectorDataF), intent(out) :: outputVectorData
  type(SyscErrorF) :: ret
end function outputvectordataaccessintf
!
end interface outputvectordataaccessintf
!
!**********************************************************************
! Deprecated - do not use.
!**********************************************************************
interface syscregisterinputscalarvariableaccessf
!
function syscregisterinputscalarvariableaccessf(isvAccess) result (ret)
!
  import :: syscerrorf
  import :: inputscalardataaccessintf
  procedure(inputScalarDataAccessIntf) :: isvAccess
  type(SyscErrorF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterInputScalarVariableAccessF
!DIR$ ENDIF
!
end function syscregisterinputscalarvariableaccessf
!
end interface syscregisterinputscalarvariableaccessf
!
!**********************************************************************
! Deprecated - do not use.
!**********************************************************************
interface syscregisterinputvectorvariableaccessf
!
function syscregisterinputvectorvariableaccessf(ivvAccess) result (ret)
!
  import :: syscerrorf
  import :: inputvectordataaccessintf
  procedure(inputVectorDataAccessIntf) :: ivvAccess
  type(SyscErrorF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterInputVectorVariableAccessF
!DIR$ ENDIF
!
end function syscregisterinputvectorvariableaccessf
!
end interface syscregisterinputvectorvariableaccessf
!
!**********************************************************************
! Deprecated - do not use.
!**********************************************************************
interface syscregisteroutputscalarvariableaccessf
!
function syscregisteroutputscalarvariableaccessf(osAccess) result (ret)
!
  import :: outputscalardataaccessintf
  import :: syscerrorf
  procedure(outputScalarDataAccessIntf) :: osAccess
  type(SyscErrorF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterOutputScalarVariableAccessF
!DIR$ ENDIF
!
end function syscregisteroutputscalarvariableaccessf
!
end interface syscregisteroutputscalarvariableaccessf
!
!**********************************************************************
! Deprecated - do not use.
!**********************************************************************
interface syscregisteroutputvectorvariableaccessf
!
function syscregisteroutputvectorvariableaccessf(ovvAccess)&
  result(ret)
!
  import :: syscerrorf
  import :: outputvectordataaccessintf
  procedure(outputVectorDataAccessIntf) :: ovvAccess
  type(SyscErrorF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscRegisterOutputVectorVariableAccessF
!DIR$ ENDIF
!
end function syscregisteroutputvectorvariableaccessf
!
end interface syscregisteroutputvectorvariableaccessf
!
integer(kind=4), parameter :: SyscFloat = 0
integer(kind=4), parameter :: SyscDouble = 1
integer(kind=4), parameter :: SyscInt32  = 2
integer(kind=4), parameter :: SyscInt64  = 3
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)