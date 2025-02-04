# File syscOutputVectorDataF.fi

![][Fortran]

**Location**: `syscOutputVectorDataF.fi`





## Classes

* [fortran::syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)
* [fortran::syscgetoutputvectordataf](interfacefortran_1_1syscgetoutputvectordataf.md#interfacefortran_1_1syscgetoutputvectordataf)
* [fortran::syscgetoutputvectordatasplitf](interfacefortran_1_1syscgetoutputvectordatasplitf.md#interfacefortran_1_1syscgetoutputvectordatasplitf)
* [fortran::syscgetoutput2dvectordatasplitf](interfacefortran_1_1syscgetoutput2dvectordatasplitf.md#interfacefortran_1_1syscgetoutput2dvectordatasplitf)
* [fortran::syscgetoutputvectordatacompactf](interfacefortran_1_1syscgetoutputvectordatacompactf.md#interfacefortran_1_1syscgetoutputvectordatacompactf)
* [fortran::syscgetoutputvectordatacompactdimf](interfacefortran_1_1syscgetoutputvectordatacompactdimf.md#interfacefortran_1_1syscgetoutputvectordatacompactdimf)

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
type :: syscoutputvectordataf
  integer(kind=8) :: primitivetype
  integer(kind=8) :: dataptr1
  integer(kind=8) :: dataptr2
  integer(kind=8) :: dataptr3
  integer(kind=8) :: datasize
  integer(kind=8) :: dimension
end type syscoutputvectordataf
!
!**********************************************************************
!**********************************************************************
interface syscgetoutputvectordataf
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordataf() result (ret)
  import :: syscoutputvectordataf
  type(syscoutputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataF
!DIR$ ENDIF
end function syscgetoutputvectordataf
!
end interface syscgetoutputvectordataf
!
!**********************************************************************
!**********************************************************************
interface syscgetoutputvectordatasplitf
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatasplitf_r43a(&
    data0, data1, data2, dataSize) result (ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=4), intent(in), target :: data0(datasize)
  real(kind=4), intent(in), target :: data1(datasize)
  real(kind=4), intent(in), target :: data2(datasize)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataSplitF_R43A
!DIR$ ENDIF
!
end function syscgetoutputvectordatasplitf_r43a
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatasplitf_r83a(&
    data0, data1, data2, dataSize) result (ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data0(datasize)
  real(kind=8), intent(in), target :: data1(datasize)
  real(kind=8), intent(in), target :: data2(datasize)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataSplitF_R83A
!DIR$ ENDIF
!
end function syscgetoutputvectordatasplitf_r83a
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatasplitf_r42d(data, dataSize)&
  result(ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: datasize
  real(kind=4), intent(in), target :: data(datasize, 3)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataSplitF_R42D
!DIR$ ENDIF
!
end function syscgetoutputvectordatasplitf_r42d
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatasplitf_r82d(vals, nElems) result (ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: nelems  
  real(kind=8), intent(in), target :: vals(nelems, 3)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataSplitF_R82D
!DIR$ ENDIF
!
end function syscgetoutputvectordatasplitf_r82d
!
end interface syscgetoutputvectordatasplitf
!
!**********************************************************************
!**********************************************************************
interface syscgetoutput2dvectordatasplitf
!
!**********************************************************************
!**********************************************************************
function syscgetoutput2dvectordatasplitf_r43a(&
    data0, data1, dataSize) result (ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=4), intent(in), target :: data0(datasize)
  real(kind=4), intent(in), target :: data1(datasize)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutput2DVectorDataSplitF_R43A
!DIR$ ENDIF
!
end function syscgetoutput2dvectordatasplitf_r43a
!
!**********************************************************************
!**********************************************************************
function syscgetoutput2dvectordatasplitf_r83a(&
    data0, data1, dataSize) result (ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data0(datasize)
  real(kind=8), intent(in), target :: data1(datasize)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutput2DVectorDataSplitF_R83A
!DIR$ ENDIF
!
end function syscgetoutput2dvectordatasplitf_r83a
!
!**********************************************************************
!**********************************************************************
function syscgetoutput2dvectordatasplitf_r42d(data, dataSize)&
  result(ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: datasize
  real(kind=4), intent(in), target :: data(datasize, 2)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutput2DVectorDataSplitF_R42D
!DIR$ ENDIF
!
end function syscgetoutput2dvectordatasplitf_r42d
!
!**********************************************************************
!**********************************************************************
function syscgetoutput2dvectordatasplitf_r82d(vals, nElems) result (ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: nelems  
  real(kind=8), intent(in), target :: vals(nelems, 2)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutput2DVectorDataSplitF_R82D
!DIR$ ENDIF
!
end function syscgetoutput2dvectordatasplitf_r82d
!
end interface syscgetoutput2dvectordatasplitf
!
!**********************************************************************
!**********************************************************************
interface syscgetoutputvectordatacompactf
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatacompactf_r41d(data, dataSize)&
  result(ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=4), intent(in), target :: data(datasize * 3)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataCompactF_R41D
!DIR$ ENDIF
!
end function syscgetoutputvectordatacompactf_r41d
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatacompactf_r81d(data, dataSize)&
  result(ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data(datasize * 3)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataCompactF_R81D
!DIR$ ENDIF
!
end function syscgetoutputvectordatacompactf_r81d
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatacompactf_r42d(vals,nElems) result (ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: nelems  
  real(kind=4), intent(in), target :: vals(3, nelems)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataCompactF_R42D
!DIR$ ENDIF
!
end function syscgetoutputvectordatacompactf_r42d
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatacompactf_r82d(vals,nElems) result (ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: nelems
  real(kind=8), intent(in), target :: vals(3, nelems)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataCompactF_R82D
!DIR$ ENDIF
!
end function syscgetoutputvectordatacompactf_r82d
!
end interface syscgetoutputvectordatacompactf
!
!**********************************************************************
interface syscgetoutputvectordatacompactdimf
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatacompactdimf_r41d(data, dataSize, dimension)&
  result(ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=8), intent(in) :: dimension  
  real(kind=4), intent(in), target :: data(datasize * dimension)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataCompactDimF_R41D
!DIR$ ENDIF
!
end function syscgetoutputvectordatacompactdimf_r41d
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatacompactdimf_r81d(data, dataSize, dimension)&
  result(ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=8), intent(in) :: dimension  
  real(kind=8), intent(in), target :: data(datasize * dimension)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataCompactDimF_R81D
!DIR$ ENDIF
!
end function syscgetoutputvectordatacompactdimf_r81d
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatacompactdimf_r42d(vals,nElems, dimension) result (ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: nelems 
  integer(kind=8), intent(in) :: dimension  
  real(kind=4), intent(in), target :: vals(dimension, nelems)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataCompactDimF_R42D
!DIR$ ENDIF
!
end function syscgetoutputvectordatacompactdimf_r42d
!
!**********************************************************************
!**********************************************************************
function syscgetoutputvectordatacompactdimf_r82d(vals,nElems, dimension) result (ret)
!
  import :: syscoutputvectordataf
  integer(kind=8), intent(in) :: nelems
  integer(kind=8), intent(in) :: dimension  
  real(kind=8), intent(in), target :: vals(dimension, nelems)
  type(syscoutputvectordataf) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetOutputVectorDataCompactDimF_R82D
!DIR$ ENDIF
!
end function syscgetoutputvectordatacompactdimf_r82d
!
end interface syscgetoutputvectordatacompactdimf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)