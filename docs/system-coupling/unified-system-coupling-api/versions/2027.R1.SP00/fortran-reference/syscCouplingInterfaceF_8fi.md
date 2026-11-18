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
!> \brief Provide a struct for a coupling interface.
!!
!! Coupling interface can be used to set up the transfers of data 
!! between different regions within the same participant solver. 
!! Interface contains two sides and each side can contain one or more 
!! regions. Data transfers are automatically defined: if a variable is 
!! defined as an output on all regions on one side of the interface and 
!! as an input on all regions on the opposite side of the interface, 
!! then it will be mapped from the former side to the latter side.
!!
!! All regions on one side of the interface must have the same 
!! topology.
!!
!! To create and/or initialize the SyscCouplingInterface struct, it is 
!! highly recommended to use the `syscGetCouplingInterface` function. 
!! This function will initialize all members to the correct values and 
!! will help to avoid back-compatibility issues in the future. For 
!! example:
!!
!! \code
!! type(SyscCouplingInterfaceF) :: interface
!! interface = syscGetCouplingInterfaceF("FSI")
!! \endcode
! *********************************************************************
type :: sysccouplinginterfacef
  character(len=SyscStrLen) :: name !< Unique name for the interface.
end type sysccouplinginterfacef
!
!**********************************************************************
!
!> \brief Provide an interface to get a coupling interface
interface syscgetcouplinginterfacef
!
!**********************************************************************
!> \brief Create a coupling interface.
!!
!! \param[in] name - Unique name for this interface. String length 
!!   should not exceed `SYSC_STRING_LENGTH`.
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
!> \brief Provide an interface to add side one region.
interface syscaddsideoneregionf
!
!**********************************************************************
!> \brief Add region to side one of the couping interface.
!!
!! If this region has already been added to the interface on side one, 
!! then this call will have no effect.
!!
!! If a different region with the same name has already been added to 
!! the interface on side one, then a runtime error will be thrown.
!!
!! If a region with the same name has already been added to the 
!! interface on side two, then a runtime error will be thrown.
!!
!! If the region name contains invalid characters, a runtime error 
!! will be thrown.
!!
!! \param[in] interface Coupling interface to which the output 
!! variable is to be added.
!!
!! \param[in] region Region to be added to side one of the interface.
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
!> \brief Provide an interface to add side two region.
interface syscaddsidetworegionf
!
!**********************************************************************
!> \brief Add region to side two of the interface.
!!
!! If this region has already been added to the interface on side two, 
!! then this call will have no effect.
!!
!! If a different region with the same name has already been added to 
!! the interface on side two, then a runtime error will be thrown.
!!
!! If a region with the same name has already been added to the 
!! interface on side one, then a runtime error will be thrown.
!!
!! If the region name contains invalid characters, a runtime error 
!! will be thrown.
!!
!! \param[in] interface Coupling interface to which the output 
!! variable is to be added.
!!
!! \param[in] region Region to be added to side two of the interface.
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
!> \brief Provide an interface to add data transfer.
interface syscadddatatransferf
!
!**********************************************************************
!> \brief Add data transfer to the coupling interface.
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
!> \brief Provide an interface to get number of data transfers.
interface sysccouplinginterfacegetnumdatatransfersf
!
!**********************************************************************
!> \brief Get number of data transfers in a coupling interface.
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
!> \brief Provide an interface to get number of side one regions.
interface sysccouplinginterfacegetnumsideoneregionsf
!
!**********************************************************************
!> \brief Get number of side one regions in a coupling interface.
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
!> \brief Provide an interface to get number of side two regions.
interface sysccouplinginterfacegetnumsidetworegionsf
!
!**********************************************************************
!> \brief Get number of side two regions in a coupling interface.
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
!> \brief Provide an interface to get a data transfer from a coupling
!! interface.
!
interface sysccouplinginterfacegetdatatransferf
!
!**********************************************************************
!> \brief Get a data transfer from a coupling interface.
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
!> \brief Provide an interface to get side one region from a coupling
!! interface.
!
interface sysccouplinginterfacegetsideoneregionf
!
!**********************************************************************
!> \brief Get side one region from a coupling interface.
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
!> \brief Provide an interface to get side two region from a coupling
!! interface.
!
interface sysccouplinginterfacegetsidetworegionf
!
!**********************************************************************
!> \brief Get side two region from a coupling interface.
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)