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
interface syscinputscalardataaccessf
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
!**********************************************************************
interface syscinputvectordataaccessf
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
!**********************************************************************
interface syscoutputscalardataaccessf
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
!**********************************************************************
interface syscoutputvectordataaccessf
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
!**********************************************************************
interface syscinputcomplexvectordataaccessf
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
!**********************************************************************
interface syscoutputcomplexvectordataaccessf
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
!**********************************************************************
interface syscsurfacemeshaccessf
function syscsurfacemeshaccessf(regionName) result (ret)
  import :: syscsurfacemeshf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  type(syscsurfacemeshf) :: ret
end function syscsurfacemeshaccessf
end interface syscsurfacemeshaccessf
!
!**********************************************************************
!**********************************************************************
interface syscvolumemeshaccessf
function syscvolumemeshaccessf(regionName) result (ret)
  import :: syscvolumemeshf
  import :: syscstrlen
  character(len=SyscStrLen), intent(in) :: regionname
  type(syscvolumemeshf) :: ret
end function syscvolumemeshaccessf
end interface syscvolumemeshaccessf
!
!**********************************************************************
!**********************************************************************
interface syscpointcloudaccessf
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