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
!> \brief Create an input vector data access type.
!!
!! Input vector data provides read and write access to an array of
!! vector data.
!!
!! The size is the total number of vectors, not the total number of
!! components, i.e. if all data is stored in one contiguous array,
!! then size is 1/3 the size of that array.
!!
!! To create and/or initialize SyscInputVectorDataF, it is highly
!! recommended to use one of the functions within
!! `syscGetInputVectorDataF` interface. These functions will initialize
!! all members to the correct values and will help to avoid 
!! back-compatibility issues in the future. For example:
!!
!! \code
!! type(SyscInputVectorDataF) :: ivd
!! ivd = syscGetInputVectorDataSplitF(x, y, z, size)
!! \endcode
!!
type :: syscinputvectordataf
  integer(kind=8) :: primitivetype !< Primitive type
  integer(kind=8) :: dataptr1      !< Pointer to the first array.
  integer(kind=8) :: dataptr2      !< Pointer to the second array.
  integer(kind=8) :: dataptr3      !< Pointer to the third array. 
  integer(kind=8) :: datasize      !< Array size.
  integer(kind=8) :: dimension     !< Dimension
end type syscinputvectordataf
!
!**********************************************************************
!> \brief Provide an interface to get input vector data.
!**********************************************************************
interface syscgetinputvectordataf
!
!**********************************************************************
!> \brief Create an input vector data access type.
!!
!! Primitive type will default to double-precision.
!! Data size will be set to zero.
!! Data pointers will be set to null.
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
!> \brief Provide an interface to get input vector data with split
!!        storage.
!**********************************************************************
interface syscgetinputvectordatasplitf
!
!**********************************************************************
!> \brief Create an input vector data access type with split storage.
!!
!! \param[in] data0 - first array of single-precision data
!! \param[in] data1 - second array of single-precision data
!! \param[in] data2 - third array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an input vector data access type with split storage.
!!
!! \param[in] data0 - first array of double-precision data
!! \param[in] data1 - second array of double-precision data
!! \param[in] data2 - third array of double-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an input vector data access type with split storage.
!!
!! \param[in] data - two-dimensional array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an input vector data access type with split storage.
!!
!! \param[in] data - two-dimensional array of double-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Provide an interface to get 2D input vector data.
!**********************************************************************
interface syscgetinput2dvectordatasplitf
!
!**********************************************************************
!> \brief Create an 2D input vector data access type with split storage.
!!
!! \param[in] data0 - first array of single-precision data
!! \param[in] data1 - second array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an 2D input vector data access type with split storage.
!!
!! \param[in] data0 - first array of double-precision data
!! \param[in] data1 - second array of double-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an 2D input vector data access type with split storage.
!!
!! \param[in] data - two-dimensional array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an 2D input vector data access type with split storage.
!!
!! \param[in] data - two-dimensional array of double-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Provide an interface to get input vector data with compact
!!        storage.
!**********************************************************************
interface syscgetinputvectordatacompactf
!
!**********************************************************************
!> \brief Create an input vector data access type with compact storage.
!!
!! \param[in] data - array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an input vector data access type with compact storage.
!!
!! \param[in] data - array of double-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an input vector data access type with compact storage.
!!
!! \param[in] data - two-dimensional array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an input vector data access type with compact storage.
!!
!! \param[in] data - two-dimensional array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Provide an interface to get input vector data with compact
!!        storage based on dimension.
!**********************************************************************
interface syscgetinputvectordatacompactdimf
!
!**********************************************************************
!> \brief Create an input vector data access type with compact storage.
!!        based on dimension.
!!
!! \param[in] data - array of single-precision data
!! \param[in] dataSize - number of vectors.
!! \param[in] dimension - dimension of vectors.
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
!> \brief Create an input vector data access type with compact storage
!!        based on dimension.
!!
!! \param[in] data - array of double-precision data
!! \param[in] dataSize - number of vectors.
!! \param[in] dimension - dimension of vectors.
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
!> \brief Create an input vector data access type with compact storage
!!        based on dimension.
!!
!! \param[in] data - two-dimensional array of single-precision data
!! \param[in] dataSize - number of vectors.
!! \param[in] dimension - dimension of vectors.
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
!> \brief Create an input vector data access type with compact storage
!!        based on dimension.
!!
!! \param[in] data - two-dimensional array of single-precision data
!! \param[in] dataSize - number of vectors.
!! \param[in] dimension - dimension of vectors.
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)