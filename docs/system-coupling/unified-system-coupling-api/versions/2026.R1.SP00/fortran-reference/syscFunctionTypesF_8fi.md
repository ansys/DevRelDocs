# File syscFunctionTypesF.fi

![][Fortran]

**Location**: `syscFunctionTypesF.fi`





## Classes

* [fortran::syscinputscalardataaccessf](interfacefortran_1_1syscinputscalardataaccessf.md#interfacefortran_1_1syscinputscalardataaccessf)
* [fortran::syscinputvectordataaccessf](interfacefortran_1_1syscinputvectordataaccessf.md#interfacefortran_1_1syscinputvectordataaccessf)
* [fortran::syscoutputscalardataaccessf](interfacefortran_1_1syscoutputscalardataaccessf.md#interfacefortran_1_1syscoutputscalardataaccessf)
* [fortran::syscoutputvectordataaccessf](interfacefortran_1_1syscoutputvectordataaccessf.md#interfacefortran_1_1syscoutputvectordataaccessf)
* [fortran::syscinputcomplexvectordataaccessf](interfacefortran_1_1syscinputcomplexvectordataaccessf.md#interfacefortran_1_1syscinputcomplexvectordataaccessf)
* [fortran::syscoutputcomplexvectordataaccessf](interfacefortran_1_1syscoutputcomplexvectordataaccessf.md#interfacefortran_1_1syscoutputcomplexvectordataaccessf)
* [fortran::syscsurfacemeshaccessf](interfacefortran_1_1syscsurfacemeshaccessf.md#interfacefortran_1_1syscsurfacemeshaccessf)
* [fortran::syscvolumemeshaccessf](interfacefortran_1_1syscvolumemeshaccessf.md#interfacefortran_1_1syscvolumemeshaccessf)
* [fortran::syscpointcloudaccessf](interfacefortran_1_1syscpointcloudaccessf.md#interfacefortran_1_1syscpointcloudaccessf)

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
! ****** Data access functions interfaces *****************************
! *********************************************************************
!
!**********************************************************************
!> \brief Provide function interface for access to input scalar data
interface syscinputscalardataaccessf
!> \brief Provide a function for access to input scalar data
!!
!! \param[in] regionName - the name of the region
!!
!! \param[in] variableName - the name of the variable
!**********************************************************************
function syscinputscalardataaccessf(&
    regionName, variableName) result (ret)
  import :: syscinputscalardataf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  character(len=SyscStrLen), intent(in) :: variablename
  type(syscinputscalardataf) :: ret
end function syscinputscalardataaccessf
end interface syscinputscalardataaccessf
!
!**********************************************************************
!> \brief Provide function interface for access to input vector data
!**********************************************************************
interface syscinputvectordataaccessf
!> \brief Provide a function for access to input vector data
!!
!! \param[in] regionName - the name of the region
!!
!! \param[in] variableName - the name of the variable
function syscinputvectordataaccessf(&
    regionName, variableName) result (ret)
  import :: syscinputvectordataf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  character(len=SyscStrLen), intent(in) :: variablename
  type(syscinputvectordataf) :: ret
end function syscinputvectordataaccessf
end interface syscinputvectordataaccessf
!
!**********************************************************************
!> \brief Provide function interface for access to output scalar data
!**********************************************************************
interface syscoutputscalardataaccessf
!> \brief Provide a function for access to output scalar data
!!
!! \param[in] regionName - the name of the region
!!
!! \param[in] variableName - the name of the variable
function syscoutputscalardataaccessf(&
    regionName, variableName) result (ret)
  import :: syscoutputscalardataf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  character(len=SyscStrLen), intent(in) :: variablename
  type(syscoutputscalardataf) :: ret
end function syscoutputscalardataaccessf
end interface syscoutputscalardataaccessf
!
!**********************************************************************
!> \brief Provide function interface for access to output vector data
!**********************************************************************
interface syscoutputvectordataaccessf
!> \brief Provide a function for access to output vector data
!!
!! \param[in] regionName - the name of the region
!!
!! \param[in] variableName - the name of the variable
function syscoutputvectordataaccessf(&
    regionName, variableName) result (ret)
  import :: syscoutputvectordataf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  character(len=SyscStrLen), intent(in) :: variablename
  type(syscoutputvectordataf) :: ret
end function syscoutputvectordataaccessf
end interface syscoutputvectordataaccessf
!
!**********************************************************************
!> \brief Provide function interface for access to input complex 
!! vector data
!**********************************************************************
interface syscinputcomplexvectordataaccessf
!> \brief Provide a function for access to input complex vector data
!!
!! \param[in] regionName - the name of the region
!!
!! \param[in] variableName - the name of the variable
function syscinputcomplexvectordataaccessf(&
    regionName, variableName) result (ret)
  import :: syscinputcomplexvectordataf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  character(len=SyscStrLen), intent(in) :: variablename
  type(syscinputcomplexvectordataf) :: ret
end function syscinputcomplexvectordataaccessf
end interface syscinputcomplexvectordataaccessf
!
!**********************************************************************
!> \brief Provide function interface for access to output complex 
!! vector data
!**********************************************************************
interface syscoutputcomplexvectordataaccessf
!> \brief Provide a function for access to output complex vector data
!!
!! \param[in] regionName - the name of the region
!!
!! \param[in] variableName - the name of the variable
function syscoutputcomplexvectordataaccessf(&
    regionName, variableName) result (ret)
  import :: syscoutputcomplexvectordataf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  character(len=SyscStrLen), intent(in) :: variablename
  type(syscoutputcomplexvectordataf) :: ret
end function syscoutputcomplexvectordataaccessf
end interface syscoutputcomplexvectordataaccessf
!
!**********************************************************************
!> \brief Provide function interface for access to surface mesh
!**********************************************************************
interface syscsurfacemeshaccessf
!> \brief Provide a function prototype for access to surface mesh
!!
!! \param[in] regionName - the name of the region
function syscsurfacemeshaccessf(regionName) result (ret)
  import :: syscsurfacemeshf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  type(syscsurfacemeshf) :: ret
end function syscsurfacemeshaccessf
end interface syscsurfacemeshaccessf
!
!**********************************************************************
!> \brief Provide function interface for access to volume mesh
!**********************************************************************
interface syscvolumemeshaccessf
!> \brief Provide a function prototype for access to volume mesh
!!
!! \param[in] regionName - the name of the region
function syscvolumemeshaccessf(regionName) result (ret)
  import :: syscvolumemeshf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  type(syscvolumemeshf) :: ret
end function syscvolumemeshaccessf
end interface syscvolumemeshaccessf
!
!**********************************************************************
!> \brief Provide function interface for access to point cloud
!**********************************************************************
interface syscpointcloudaccessf
!> \brief Provide a function prototype for access to point cloud
!!
!! \param[in] regionName - the name of the region
function syscpointcloudaccessf(regionName) result (ret)
  import :: syscpointcloudf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  type(syscpointcloudf) :: ret
end function syscpointcloudaccessf
end interface syscpointcloudaccessf
!
end module fortran
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)