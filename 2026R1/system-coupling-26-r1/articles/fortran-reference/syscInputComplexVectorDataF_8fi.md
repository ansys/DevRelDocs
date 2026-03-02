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
!> \brief Create an input complex vector data access type.
!!
!! Input complex vector data provides access to complex
!! vector data.
!!
!! The size is the total number of vectors of complex numbers.
!!
type :: syscinputcomplexvectordataf
  integer(kind=8) :: primitivetype !< Primitive type.
  integer(kind=8) :: data1         !< Pointer to the first array.
  integer(kind=8) :: data2         !< Pointer to the second array.
  integer(kind=8) :: data3         !< Pointer to the third array.
  integer(kind=8) :: data4         !< Pointer to the fourth array.
  integer(kind=8) :: data5         !< Pointer to the fifth array.
  integer(kind=8) :: data6         !< Pointer to the sixth array.
  integer(kind=8) :: datasize      !< Data size.
  integer(kind=8) :: dimension     !< Dimension.
end type syscinputcomplexvectordataf
!
!**********************************************************************
!> \brief Provide an interface to get input complex vector data.
!**********************************************************************
interface syscgetinputcomplexvectordataf
!
!**********************************************************************
!> \brief Create an input complex vector data access type.
!!
!! Primitive type will default to double-precision.
!! Data size will be set to zero.
!! Data pointers will be set to null.
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
!> \brief Provide an interface to get input complex vector data with 
!! compact storage for complex and vector components.
!**********************************************************************
interface syscgetinputcompactcomplexcompactvectordataf
!
!**********************************************************************
!> \brief Create an input vector data access type with split storage.
!!
!! \param[in] data - two-dimensional array of complex vectors
!!
!! \param[in] dataSize - number of vectors.
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
!> \brief Provide an interface to get input complex vector data with 
!! compact storage for complex and vector components based on dimension.
!**********************************************************************
interface syscgetinputcompactcomplexcompactvectordatadimf
!
!**********************************************************************
!> \brief Create an input complex vector data access type with split storage
!!        based on dimension.
!!
!! \param[in] data - two-dimensional array of complex vectors
!!
!! \param[in] dataSize - number of vectors.
!!
!! \param[in] dimension - dimension of vectors.
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)