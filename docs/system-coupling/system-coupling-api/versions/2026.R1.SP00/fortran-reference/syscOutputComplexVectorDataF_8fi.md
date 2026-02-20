# File syscOutputComplexVectorDataF.fi

![][Fortran]

**Location**: `syscOutputComplexVectorDataF.fi`





## Classes

* [fortran::syscoutputcomplexvectordataf](structfortran_1_1syscoutputcomplexvectordataf.md#structfortran_1_1syscoutputcomplexvectordataf)
* [fortran::syscgetoutputcomplexvectordataf](interfacefortran_1_1syscgetoutputcomplexvectordataf.md#interfacefortran_1_1syscgetoutputcomplexvectordataf)
* [fortran::syscgetoutputcompactcomplexcompactvectordataf](interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordataf.md#interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordataf)
* [fortran::syscgetoutputcompactcomplexcompactvectordatadimf](interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordatadimf.md#interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordatadimf)

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
type :: syscoutputcomplexvectordataf
  integer(kind=8) :: primitivetype
  integer(kind=8) :: data1
  integer(kind=8) :: data2
  integer(kind=8) :: data3
  integer(kind=8) :: data4
  integer(kind=8) :: data5
  integer(kind=8) :: data6
  integer(kind=8) :: datasize
  integer(kind=8) :: dimension
end type syscoutputcomplexvectordataf
!
!**********************************************************************
!**********************************************************************
interface syscgetoutputcomplexvectordataf
!
!**********************************************************************
!**********************************************************************
function syscgetoutputcomplexvectordataf() result (ret)
  import :: syscoutputcomplexvectordataf
  type(syscoutputcomplexvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputComplexVectorDataF
!DIR$ ENDIF
end function syscgetoutputcomplexvectordataf
!
end interface syscgetoutputcomplexvectordataf
!
!**********************************************************************
!**********************************************************************
interface syscgetoutputcompactcomplexcompactvectordataf
!
!**********************************************************************
!**********************************************************************
function syscgetoutputcompactcomplexcompactvectordataf_c82d(&
    data, dataSize) result (ret)
!
  import :: syscoutputcomplexvectordataf
  integer(kind=8), intent(in) :: datasize  
  complex(kind=8), intent(in), target :: data(3, datasize)
  type(syscoutputcomplexvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputCompactComplexCompactVectorDataF_C82D
!DIR$ ENDIF
!
end function syscgetoutputcompactcomplexcompactvectordataf_c82d
!
end interface syscgetoutputcompactcomplexcompactvectordataf
!
!**********************************************************************
!**********************************************************************
interface syscgetoutputcompactcomplexcompactvectordatadimf
!
!**********************************************************************
!**********************************************************************
function syscgetoutputcompactcomplexcompactvectordatadimf_c82d(&
    data, dataSize, dimension) result (ret)
!
  import :: syscoutputcomplexvectordataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=8), intent(in) :: dimension  
  complex(kind=8), intent(in), target :: data(dimension, datasize)
  type(syscoutputcomplexvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputCompactComplexCompactVectorDataF_C82D
!DIR$ ENDIF
!
end function syscgetoutputcompactcomplexcompactvectordatadimf_c82d
!
end interface syscgetoutputcompactcomplexcompactvectordatadimf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)