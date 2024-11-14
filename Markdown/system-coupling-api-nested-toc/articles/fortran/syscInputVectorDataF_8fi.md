# File syscInputVectorDataF.fi

![][Fortran]

**Location**: `syscInputVectorDataF.fi`





## Classes

* [fortran::syscinputvectordataf](structfortran_1_1syscinputvectordataf.md#structfortran_1_1syscinputvectordataf)
* [fortran::syscgetinputvectordataf](interfacefortran_1_1syscgetinputvectordataf.md#interfacefortran_1_1syscgetinputvectordataf)
* [fortran::syscgetinputvectordatasplitf](interfacefortran_1_1syscgetinputvectordatasplitf.md#interfacefortran_1_1syscgetinputvectordatasplitf)
* [fortran::syscgetinput2dvectordatasplitf](interfacefortran_1_1syscgetinput2dvectordatasplitf.md#interfacefortran_1_1syscgetinput2dvectordatasplitf)
* [fortran::syscgetinputvectordatacompactf](interfacefortran_1_1syscgetinputvectordatacompactf.md#interfacefortran_1_1syscgetinputvectordatacompactf)
* [fortran::syscgetinputvectordatacompactdimf](interfacefortran_1_1syscgetinputvectordatacompactdimf.md#interfacefortran_1_1syscgetinputvectordatacompactdimf)

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
type :: syscinputvectordataf
  integer(kind=8) :: primitivetype
  integer(kind=8) :: dataptr1
  integer(kind=8) :: dataptr2
  integer(kind=8) :: dataptr3
  integer(kind=8) :: datasize
  integer(kind=8) :: dimension
end type syscinputvectordataf
!
!**********************************************************************
!**********************************************************************
interface syscgetinputvectordataf
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordataf() result (ret)
  import :: syscinputvectordataf
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataF
!DIR$ ENDIF
end function syscgetinputvectordataf
!
end interface syscgetinputvectordataf
!
!**********************************************************************
!**********************************************************************
interface syscgetinputvectordatasplitf
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatasplitf_r43a(&
    data0, data1, data2, dataSize) result (ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=4), intent(in), target :: data0(datasize)
  real(kind=4), intent(in), target :: data1(datasize)
  real(kind=4), intent(in), target :: data2(datasize)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataSplitF_R43A
!DIR$ ENDIF
end function syscgetinputvectordatasplitf_r43a
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatasplitf_r83a(&
    data0, data1, data2, dataSize) result (ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data0(datasize)
  real(kind=8), intent(in), target :: data1(datasize)
  real(kind=8), intent(in), target :: data2(datasize)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataSplitF_R83A
!DIR$ ENDIF
end function syscgetinputvectordatasplitf_r83a
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatasplitf_r42d(data, dataSize) result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=4), intent(in), target :: data(datasize, 3)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataSplitF_R42D
!DIR$ ENDIF
end function syscgetinputvectordatasplitf_r42d
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatasplitf_r82d(data, dataSize) result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data(datasize, 3)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataSplitF_R82D
!DIR$ ENDIF
end function syscgetinputvectordatasplitf_r82d
!
end interface syscgetinputvectordatasplitf
!
!**********************************************************************
!**********************************************************************
interface syscgetinput2dvectordatasplitf
!
!**********************************************************************
!**********************************************************************
function syscgetinput2dvectordatasplitf_r43a(&
    data0, data1, dataSize) result (ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=4), intent(in), target :: data0(datasize)
  real(kind=4), intent(in), target :: data1(datasize)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInput2DVectorDataSplitF_R43A
!DIR$ ENDIF
end function syscgetinput2dvectordatasplitf_r43a
!
!**********************************************************************
!**********************************************************************
function syscgetinput2dvectordatasplitf_r83a(&
    data0, data1, dataSize) result (ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data0(datasize)
  real(kind=8), intent(in), target :: data1(datasize)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInput2DVectorDataSplitF_R83A
!DIR$ ENDIF
end function syscgetinput2dvectordatasplitf_r83a
!
!**********************************************************************
!**********************************************************************
function syscgetinput2dvectordatasplitf_r42d(data, dataSize) result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=4), intent(in), target :: data(datasize, 2)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInput2DVectorDataSplitF_R42D
!DIR$ ENDIF
end function syscgetinput2dvectordatasplitf_r42d
!
!**********************************************************************
!**********************************************************************
function syscgetinput2dvectordatasplitf_r82d(data, dataSize) result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data(datasize, 2)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInput2DVectorDataSplitF_R82D
!DIR$ ENDIF
end function syscgetinput2dvectordatasplitf_r82d
!
end interface syscgetinput2dvectordatasplitf
!
!**********************************************************************
!**********************************************************************
interface syscgetinputvectordatacompactf
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatacompactf_r41d(data, dataSize)&
  result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=4), intent(in), target :: data(datasize * 3)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataCompactF_R41D
!DIR$ ENDIF
end function syscgetinputvectordatacompactf_r41d
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatacompactf_r81d(data, dataSize)&
  result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data(datasize * 3)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataCompactF_R81D
!DIR$ ENDIF
end function syscgetinputvectordatacompactf_r81d
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatacompactf_r42d(data, dataSize)&
  result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=4), intent(in), target :: data(3, datasize)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataCompactF_R42D
!DIR$ ENDIF
end function syscgetinputvectordatacompactf_r42d
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatacompactf_r82d(data, dataSize)&
  result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  real(kind=8), intent(in), target :: data(3, datasize)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataCompactF_R82D
!DIR$ ENDIF
end function syscgetinputvectordatacompactf_r82d
!
end interface syscgetinputvectordatacompactf
!
!**********************************************************************
!**********************************************************************
interface syscgetinputvectordatacompactdimf
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatacompactdimf_r41d(data, dataSize, dimension)&
  result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=8), intent(in) :: dimension  
  real(kind=4), intent(in), target :: data(datasize * dimension)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataCompactDimF_R41D
!DIR$ ENDIF
end function syscgetinputvectordatacompactdimf_r41d
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatacompactdimf_r81d(data, dataSize, dimension)&
  result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=8), intent(in) :: dimension  
  real(kind=8), intent(in), target :: data(datasize * dimension)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataCompactDimF_R81D
!DIR$ ENDIF
end function syscgetinputvectordatacompactdimf_r81d
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatacompactdimf_r42d(data, dataSize, dimension)&
  result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=8), intent(in) :: dimension  
  real(kind=4), intent(in), target :: data(dimension, datasize)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataCompactDimF_R42D
!DIR$ ENDIF
end function syscgetinputvectordatacompactdimf_r42d
!
!**********************************************************************
!**********************************************************************
function syscgetinputvectordatacompactdimf_r82d(data, dataSize, dimension)&
  result(ret)
  import :: syscinputvectordataf
  integer(kind=8), intent(in) :: datasize  
  integer(kind=8), intent(in) :: dimension  
  real(kind=8), intent(in), target :: data(dimension, datasize)
  type(syscinputvectordataf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetInputVectorDataCompactDimF_R82D
!DIR$ ENDIF
end function syscgetinputvectordatacompactdimf_r82d
!
end interface syscgetinputvectordatacompactdimf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)