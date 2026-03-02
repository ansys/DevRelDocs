# File syscCouplingInterfaceF.fi

![][Fortran]

**Location**: `syscCouplingInterfaceF.fi`





## Classes

* [fortran::sysccouplinginterfacef](structfortran_1_1sysccouplinginterfacef.md#structfortran_1_1sysccouplinginterfacef)
* [fortran::syscgetcouplinginterfacef](interfacefortran_1_1syscgetcouplinginterfacef.md#interfacefortran_1_1syscgetcouplinginterfacef)
* [fortran::syscaddsideoneregionf](interfacefortran_1_1syscaddsideoneregionf.md#interfacefortran_1_1syscaddsideoneregionf)
* [fortran::syscaddsidetworegionf](interfacefortran_1_1syscaddsidetworegionf.md#interfacefortran_1_1syscaddsidetworegionf)
* [fortran::syscadddatatransferf](interfacefortran_1_1syscadddatatransferf.md#interfacefortran_1_1syscadddatatransferf)
* [fortran::sysccouplinginterfacegetnumdatatransfersf](interfacefortran_1_1sysccouplinginterfacegetnumdatatransfersf.md#interfacefortran_1_1sysccouplinginterfacegetnumdatatransfersf)
* [fortran::sysccouplinginterfacegetnumsideoneregionsf](interfacefortran_1_1sysccouplinginterfacegetnumsideoneregionsf.md#interfacefortran_1_1sysccouplinginterfacegetnumsideoneregionsf)
* [fortran::sysccouplinginterfacegetnumsidetworegionsf](interfacefortran_1_1sysccouplinginterfacegetnumsidetworegionsf.md#interfacefortran_1_1sysccouplinginterfacegetnumsidetworegionsf)
* [fortran::sysccouplinginterfacegetdatatransferf](interfacefortran_1_1sysccouplinginterfacegetdatatransferf.md#interfacefortran_1_1sysccouplinginterfacegetdatatransferf)
* [fortran::sysccouplinginterfacegetsideoneregionf](interfacefortran_1_1sysccouplinginterfacegetsideoneregionf.md#interfacefortran_1_1sysccouplinginterfacegetsideoneregionf)
* [fortran::sysccouplinginterfacegetsidetworegionf](interfacefortran_1_1sysccouplinginterfacegetsidetworegionf.md#interfacefortran_1_1sysccouplinginterfacegetsidetworegionf)

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
type :: sysccouplinginterfacef
  character(len=SyscStrLen) :: name
end type sysccouplinginterfacef
!
!**********************************************************************
!
interface syscgetcouplinginterfacef
!
!**********************************************************************
!**********************************************************************
function syscgetcouplinginterfacef(name) result(ret)
!
  import :: sysccouplinginterfacef
  character(len=*), intent(in) :: name
  type(sysccouplinginterfacef) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetCouplingInterfaceF
!DIR$ ENDIF
!
end function syscgetcouplinginterfacef
!
!**********************************************************************
!
end interface syscgetcouplinginterfacef
!
interface syscaddsideoneregionf
!
!**********************************************************************
!**********************************************************************
!
function syscaddsideoneregionf(interface, region) result (ret)
!
  import :: sysccouplinginterfacef
  import :: syscregionf
  import :: syscerrorf
  type(sysccouplinginterfacef), intent(in) :: interface
  type(syscregionf), intent(in) :: region
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscAddSideOneRegionF
!DIR$ ENDIF
!
end function syscaddsideoneregionf
!
end interface syscaddsideoneregionf
!
!**********************************************************************
!
interface syscaddsidetworegionf
!
!**********************************************************************
!**********************************************************************
!
function syscaddsidetworegionf(interface, region) result (ret)
!
  import :: sysccouplinginterfacef
  import :: syscregionf
  import :: syscerrorf
  type(sysccouplinginterfacef), intent(in) :: interface
  type(syscregionf), intent(in) :: region
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscAddSideTwoRegionF
!DIR$ ENDIF
!
end function syscaddsidetworegionf
!
end interface syscaddsidetworegionf
!
!**********************************************************************
!
interface syscadddatatransferf
!
!**********************************************************************
!**********************************************************************
!
function syscadddatatransferf(couplingInterface, dataTransfer)&
  result(ret)
!
  import :: sysccouplinginterfacef
  import :: syscdatatransferf
  import :: syscerrorf
  type(sysccouplinginterfacef), intent(in) :: couplinginterface
  type(syscdatatransferf), intent(in) :: datatransfer
  type(syscerrorf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscAddDataTransferF
!DIR$ ENDIF
!
end function syscadddatatransferf
!
end interface syscadddatatransferf
!
!**********************************************************************
!
interface sysccouplinginterfacegetnumdatatransfersf
!
!**********************************************************************
!**********************************************************************
!
function sysccouplinginterfacegetnumdatatransfersf(&
  couplingInterface) result (ret)
!
  import :: sysccouplinginterfacef
  type(sysccouplinginterfacef), intent(in) :: couplinginterface
  integer(kind=8) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscCouplingInterfaceGetNumDataTransfersF
!DIR$ ENDIF
!
end function sysccouplinginterfacegetnumdatatransfersf
!
end interface sysccouplinginterfacegetnumdatatransfersf
!
!**********************************************************************
!
interface sysccouplinginterfacegetnumsideoneregionsf
!
!**********************************************************************
!**********************************************************************
!
function sysccouplinginterfacegetnumsideoneregionsf(&
  couplingInterface) result (ret)
!
  import :: sysccouplinginterfacef
  type(sysccouplinginterfacef), intent(in) :: couplinginterface
  integer(kind=8) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscCouplingInterfaceGetNumSideOneRegionsF
!DIR$ ENDIF
!
end function sysccouplinginterfacegetnumsideoneregionsf
!
end interface sysccouplinginterfacegetnumsideoneregionsf
!
!**********************************************************************
!
interface sysccouplinginterfacegetnumsidetworegionsf
!
!**********************************************************************
!**********************************************************************
!
function sysccouplinginterfacegetnumsidetworegionsf(&
  couplingInterface) result (ret)
!
  import :: sysccouplinginterfacef
  type(sysccouplinginterfacef), intent(in) :: couplinginterface
  integer(kind=8) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscCouplingInterfaceGetNumSideTwoRegionsF
!DIR$ ENDIF
!
end function sysccouplinginterfacegetnumsidetworegionsf
!
end interface sysccouplinginterfacegetnumsidetworegionsf
!
!**********************************************************************
!
!
interface sysccouplinginterfacegetdatatransferf
!
!**********************************************************************
!**********************************************************************
!
function sysccouplinginterfacegetdatatransferf(&
  couplingInterface, index) result (ret)
!
  import :: sysccouplinginterfacef, syscdatatransferf
  type(sysccouplinginterfacef), intent(in) :: couplinginterface
  integer(kind=8), intent(in) :: index
  type(syscdatatransferf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscCouplingInterfaceGetDataTransferF
!DIR$ ENDIF
!
end function sysccouplinginterfacegetdatatransferf
!
end interface sysccouplinginterfacegetdatatransferf
!
!**********************************************************************
!
!
interface sysccouplinginterfacegetsideoneregionf
!
!**********************************************************************
!**********************************************************************
!
function sysccouplinginterfacegetsideoneregionf(&
  couplingInterface, index) result (ret)
!
  import :: sysccouplinginterfacef, syscregionf
  type(sysccouplinginterfacef), intent(in) :: couplinginterface
  integer(kind=8), intent(in) :: index
  type(syscregionf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscCouplingInterfaceGetSideOneRegionF
!DIR$ ENDIF
!
end function sysccouplinginterfacegetsideoneregionf
!
end interface sysccouplinginterfacegetsideoneregionf
!
!**********************************************************************
!
!
interface sysccouplinginterfacegetsidetworegionf
!
!**********************************************************************
!**********************************************************************
!
function sysccouplinginterfacegetsidetworegionf(&
  couplingInterface, index) result (ret)
!
  import :: sysccouplinginterfacef, syscregionf
  type(sysccouplinginterfacef), intent(in) :: couplinginterface
  integer(kind=8), intent(in) :: index
  type(syscregionf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscCouplingInterfaceGetSideTwoRegionF
!DIR$ ENDIF
!
end function sysccouplinginterfacegetsidetworegionf
!
end interface sysccouplinginterfacegetsidetworegionf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)