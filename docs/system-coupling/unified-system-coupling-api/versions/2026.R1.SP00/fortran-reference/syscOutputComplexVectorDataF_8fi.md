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
!> \brief Create an output complex vector data access type.
!!
!! Output complex vector data provides read-only access to complex
!! vector data.
!!
!! The size is the total number of vectors of complex numbers.
!!
type :: syscoutputcomplexvectordataf
  integer(kind=8) :: primitivetype !< Primitive type.
  integer(kind=8) :: data1         !< Pointer to the first array.
  integer(kind=8) :: data2         !< Pointer to the second array.
  integer(kind=8) :: data3         !< Pointer to the third array.
  integer(kind=8) :: data4         !< Pointer to the fourth array.
  integer(kind=8) :: data5         !< Pointer to the fifth array.
  integer(kind=8) :: data6         !< Pointer to the sixth array.
  integer(kind=8) :: datasize      !< Data size.
  integer(kind=8) :: dimension     !< Dimension.
end type syscoutputcomplexvectordataf
!
!**********************************************************************
!> \brief Provide an interface to get output vector data.
!**********************************************************************
interface syscgetoutputcomplexvectordataf
!
!**********************************************************************
!> \brief Create an output vector data access type.
!!
!! Primitive type will default to double-precision.
!! Data size will be set to zero.
!! Data pointers will be set to null.
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
!> \brief Provide an interface to get output complex vector data with 
!! compact storage for complex and vector components.
!**********************************************************************
interface syscgetoutputcompactcomplexcompactvectordataf
!
!**********************************************************************
!> \brief Create an output vector data access type with split storage.
!!
!! \param[in] data - two-dimensional array of complex vectors
!!
!! \param[in] dataSize - number of vectors.
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
!> \brief Provide an interface to get output complex vector data.
!**********************************************************************
interface syscgetoutputcompactcomplexcompactvectordatadimf
!
!**********************************************************************
!> \brief Create an output complex vector data access type with split storage
!!        based on dimension.
!!
!! \param[in] data - two-dimensional array of complex vectors
!!
!! \param[in] dataSize - number of vectors.
!!
!! \param[in] dimension - dimension of vectors.
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)