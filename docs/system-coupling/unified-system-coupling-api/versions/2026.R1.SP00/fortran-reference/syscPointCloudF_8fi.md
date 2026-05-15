# File syscPointCloudF.fi

![][Fortran]

**Location**: `syscPointCloudF.fi`





## Classes

* [fortran::syscpointcloudf](structfortran_1_1syscpointcloudf.md#structfortran_1_1syscpointcloudf)
* [fortran::syscgetpointcloudf](interfacefortran_1_1syscgetpointcloudf.md#interfacefortran_1_1syscgetpointcloudf)

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
!> \brief Provide a point cloud access type.
! *********************************************************************
type :: syscpointcloudf
  type(syscoutputintegerdataf) :: nodeids !< Node ids.
  type(syscoutputvectordataf) :: nodecoords !< Node coords.
  integer(kind=8) :: connectivitystamp !< Connectivity stamp
  integer(kind=8) :: coordinatesstamp !< Coordinates stamp
  integer(kind=8) :: partitioningstamp !< Partitioning stamp  
end type syscpointcloudf
!
!**********************************************************************
!> \brief Provide an interface to get point cloud.
!**********************************************************************
interface syscgetpointcloudf
!
!**********************************************************************
!> \brief Create an empty volume mesh access struct.
!**********************************************************************
function syscgetpointcloudf_empty() result (ret)
  import :: syscpointcloudf
  type(syscpointcloudf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetPointCloudF_Empty
!DIR$ ENDIF
end function syscgetpointcloudf_empty
!
!**********************************************************************
!> \brief Create a face-based volume mesh access struct.
!!
!! \param[in] nodes - mesh nodes
!!
!! \param[in] faceNodeCounts - face node counts
!!
!! \param[in] faceNodeConn - face-to-node connectivity
!!
!! \param[in] faceCellConn - face-to-cell connectivity
!**********************************************************************
function syscgetpointcloudf(nodeIds, nodeCoords) result (ret)
  import :: syscpointcloudf, syscoutputintegerdataf, &
    syscoutputvectordataf
  type(syscoutputintegerdataf), intent(in) :: nodeids
  type(syscoutputvectordataf), intent(in) :: nodecoords
  type(syscpointcloudf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetPointCloudF
!DIR$ ENDIF
end function syscgetpointcloudf
!
end interface syscgetpointcloudf
!
end module fortran
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)