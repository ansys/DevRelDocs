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
!> \brief Create an output vector data access type.
!!
!! Output vector data provides read-only access to an array of
!! vector data.
!!
!! The size is the total number of vectors, not the total number of
!! components, i.e. if all data is stored in one contiguous array,
!! then size is 1/3 the size of that array.
!!
!! To create and/or initialize SyscOutputVectorDataF, it is highly
!! recommended to use one of the functions within
!! `syscGetOutputVectorDataF` interface. These functions will initialize
!! all members to the correct values and will help to avoid 
!! back-compatibility issues in the future. For example:
!!
!! \code
!! type(SyscOutputVectorDataF) :: ovd
!! ovd = syscGetOutputVectorDataSplitF(x, y, z, size)
!! \endcode
!!
type :: syscoutputvectordataf
  integer(kind=8) :: primitivetype !< Primitive type.
  integer(kind=8) :: dataptr1      !< Pointer to the first array.
  integer(kind=8) :: dataptr2      !< Pointer to the second array.
  integer(kind=8) :: dataptr3      !< Pointer to the third array.
  integer(kind=8) :: datasize      !< Array size.
  integer(kind=8) :: dimension     !< Dimension.
end type syscoutputvectordataf
!
!**********************************************************************
!> \brief Provide an interface to get output vector data.
!**********************************************************************
interface syscgetoutputvectordataf
!
!**********************************************************************
!> \brief Create an output vector data access type.
!!
!! Primitive type will default to double-precision.
!! Data size will be set to zero.
!! Data pointers will be set to null.
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
!> \brief Provide an interface to get output vector data with split
!!        storage.
!**********************************************************************
interface syscgetoutputvectordatasplitf
!
!**********************************************************************
!> \brief Create an output vector data access type with split storage.
!!
!! \param[in] data0 - first array of single-precision data
!! \param[in] data1 - second array of single-precision data
!! \param[in] data2 - third array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an output vector data access type with split storage.
!!
!! \param[in] data0 - first array of double-precision data
!! \param[in] data1 - second array of double-precision data
!! \param[in] data2 - third array of double-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an output vector data access type with split storage.
!!
!! \param[in] data - two-dimensional array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an output vector data access type with split storage.
!!
!! \param[in] vals - two-dimensional array of double-precision data
!! \param[in] nElems - number of vectors.
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
!> \brief Provide an interface to get 2D output vector data with split
!!        storage.
!**********************************************************************
interface syscgetoutput2dvectordatasplitf
!
!**********************************************************************
!> \brief Create an 2D output vector data access type with split storage.
!!
!! \param[in] data0 - first array of single-precision data
!! \param[in] data1 - second array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an 2D output vector data access type with split storage.
!!
!! \param[in] data0 - first array of double-precision data
!! \param[in] data1 - second array of double-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an 2D output vector data access type with split storage.
!!
!! \param[in] data - two-dimensional array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an 2D output vector data access type with split storage.
!!
!! \param[in] vals - two-dimensional array of double-precision data
!! \param[in] nElems - number of vectors.
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
!> \brief Provide an interface to get output vector data with compact
!!        storage.
!**********************************************************************
interface syscgetoutputvectordatacompactf
!
!**********************************************************************
!> \brief Create an output vector data access type with compact 
!! storage.
!!
!! \param[in] data - array of single-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an output vector data access type with compact 
!! storage.
!!
!! \param[in] data - array of double-precision data
!! \param[in] dataSize - number of vectors.
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
!> \brief Create an output vector data access type with compact 
!! storage.
!!
!! \param[in] vals - two-dimensional array of single-precision data
!! \param[in] nElems - number of vectors.
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
!> \brief Create an output vector data access type with compact 
!! storage.
!!
!! \param[in] vals - two-dimensional array of double-precision data
!! \param[in] nElems - number of vectors.
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
!> \brief Provide an interface to get output vector data with compact
!!        storage based on dimension.
!**********************************************************************
interface syscgetoutputvectordatacompactdimf
!
!**********************************************************************
!> \brief Create an output vector data access type with compact 
!! storage based on dimension.
!!
!! \param[in] data - array of single-precision data
!! \param[in] dataSize - number of vectors.
!! \param[in] dimension - dimension of vectors.
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
!> \brief Create an output vector data access type with compact 
!! storage based on dimension.
!!
!! \param[in] data - array of double-precision data
!! \param[in] dataSize - number of vectors
!! \param[in] dimension - dimension of vectors.
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
!> \brief Create an output vector data access type with compact 
!! storage based on dimension.
!!
!! \param[in] vals - two-dimensional array of single-precision data
!! \param[in] nElems - number of vectors.
!! \param[in] dimension - dimension of vectors.
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
!> \brief Create an output vector data access type with compact 
!! storage based on dimension.
!!
!! \param[in] vals - two-dimensional array of double-precision data
!! \param[in] nElems - number of vectors.
!! \param[in] dimension - dimension of vectors.
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)