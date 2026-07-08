# File syscInputComplexVectorDataF.fi

![][Fortran]

**Location**: `syscInputComplexVectorDataF.fi`





## Classes

* [fortran::syscinputcomplexvectordataf](structfortran_1_1syscinputcomplexvectordataf.md#structfortran_1_1syscinputcomplexvectordataf)
* [fortran::syscgetinputcomplexvectordataf](interfacefortran_1_1syscgetinputcomplexvectordataf.md#interfacefortran_1_1syscgetinputcomplexvectordataf)
* [fortran::syscgetinputcompactcomplexcompactvectordataf](interfacefortran_1_1syscgetinputcompactcomplexcompactvectordataf.md#interfacefortran_1_1syscgetinputcompactcomplexcompactvectordataf)
* [fortran::syscgetinputcompactcomplexcompactvectordatadimf](interfacefortran_1_1syscgetinputcompactcomplexcompactvectordatadimf.md#interfacefortran_1_1syscgetinputcompactcomplexcompactvectordatadimf)

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
!
type :: syscinputcomplexvectordataf
  integer(kind=8) :: primitivetype
  integer(kind=8) :: data1
  integer(kind=8) :: data2
  integer(kind=8) :: data3
  integer(kind=8) :: data4
  integer(kind=8) :: data5
  integer(kind=8) :: data6
  integer(kind=8) :: datasize
  integer(kind=8) :: dimension
end type syscinputcomplexvectordataf
!
!**********************************************************************
!**********************************************************************
interface syscgetinputcomplexvectordataf
!
!**********************************************************************
!**********************************************************************
function syscgetinputcomplexvectordataf() result (ret)
  import :: syscinputcomplexvectordataf
  type(syscinputcomplexvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputComplexVectorDataF
!DIR$ ENDIF
end function syscgetinputcomplexvectordataf
!
end interface syscgetinputcomplexvectordataf
!
!**********************************************************************
!**********************************************************************
interface syscgetinputcompactcomplexcompactvectordataf
!
!**********************************************************************
!**********************************************************************
function syscgetinputcompactcomplexcompactvectordataf_c82d(&
    data, dataSize) result (ret)
!
  import :: syscinputcomplexvectordataf
  integer(kind=8), intent(in) :: datasize  
  complex(kind=8), intent(in), target :: data(3, datasize)
  type(syscinputcomplexvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputCompactComplexCompactVectorDataF_C82D
!DIR$ ENDIF
!
end function syscgetinputcompactcomplexcompactvectordataf_c82d
!
end interface syscgetinputcompactcomplexcompactvectordataf
!
!**********************************************************************
!**********************************************************************
interface syscgetinputcompactcomplexcompactvectordatadimf
!
!**********************************************************************
!**********************************************************************
function syscgetinputcompactcomplexcompactvectordatadimf_c82d(&
    data, dataSize, dimension) result (ret)
!
  import :: syscinputcomplexvectordataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=8), intent(in) :: dimension  
  complex(kind=8), intent(in), target :: data(dimension, datasize)
  type(syscinputcomplexvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputCompactComplexCompactVectorDataDimF_C82D
!DIR$ ENDIF
!
end function syscgetinputcompactcomplexcompactvectordatadimf_c82d
!
end interface syscgetinputcompactcomplexcompactvectordatadimf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)