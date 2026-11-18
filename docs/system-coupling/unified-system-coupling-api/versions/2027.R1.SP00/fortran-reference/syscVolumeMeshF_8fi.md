# File syscVolumeMeshF.fi

![][Fortran]

**Location**: `syscVolumeMeshF.fi`





## Classes

* [fortran::syscvolumemeshf](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf)
* [fortran::syscgetvolumemeshf](interfacefortran_1_1syscgetvolumemeshf.md#interfacefortran_1_1syscgetvolumemeshf)

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
!> \brief Provide a volume mesh access type.
! *********************************************************************
type :: syscvolumemeshf
type(syscnodedataf) :: nodes
!< Mesh nodes.
type(syscelementnodecountdataf) :: facenodecounts
!< Face node counts.
type(syscelementnodeconnectivitydataf) :: facenodeconnectivity
!< Face-to-node connectivity.
type(syscfacecellconnectivitydataf) :: facecellconnectivity
!< Face-to-cell connectivity.
type(sysccelliddataf) :: cellids
!< Cell ids.
type(syscelementtypedataf) :: celltypes
!< Cell types.
type(syscelementnodeconnectivitydataf) :: cellnodeconnectivity
!< Cell-to-node connectivity.
integer(kind=8) :: connectivitystamp
!< Connectivity stamp
integer(kind=8) :: coordinatesstamp
!< Coordinates stamp
integer(kind=8) :: partitioningstamp
!< Partitioning stamp
end type syscvolumemeshf
!
!**********************************************************************
!> \brief Provide an interface to get volume mesh.
!**********************************************************************
interface syscgetvolumemeshf
!
!**********************************************************************
!> \brief Create an empty volume mesh access struct.
!**********************************************************************
function syscgetvolumemeshf_empty() result (ret)
import :: syscvolumemeshf
type(syscvolumemeshf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetVolumeMeshF_Empty
!DIR$ ENDIF
end function syscgetvolumemeshf_empty
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
!!
!! \param[in] cellIds - cell ids
!**********************************************************************
function syscgetvolumemeshf_facebased(&
nodes,&
faceNodeCounts,&
faceNodeConn,&
faceCellConn,&
cellIds) result (ret)
  import :: syscvolumemeshf, syscnodedataf, &
  syscelementnodecountdataf, syscelementnodeconnectivitydataf, &
  syscfacecellconnectivitydataf, sysccelliddataf
  type(syscnodedataf), intent(in) :: nodes
  type(syscelementnodecountdataf), intent(in) :: facenodecounts
  type(syscelementnodeconnectivitydataf), intent(in) :: facenodeconn
  type(syscfacecellconnectivitydataf), intent(in) :: facecellconn
  type(sysccelliddataf), intent(in) :: cellids
  type(syscvolumemeshf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetVolumeMeshF_FaceBased
!DIR$ ENDIF
  end function syscgetvolumemeshf_facebased
!
!**********************************************************************
!> \brief Create an element-based volume mesh access struct.
!!
!! \param[in] nodes - mesh nodes
!!
!! \param[in] cellTypes - cell types
!!
!! \param[in] cellNodeConn - cell-to-node connectivity
!**********************************************************************
function syscgetvolumemeshf_elementbased(&
  nodes,&
  cellTypes,&
  cellNodeConn) result (ret)
  import :: syscvolumemeshf, syscnodedataf, &
    syscelementtypedataf, syscelementnodeconnectivitydataf
  type(syscnodedataf), intent(in) :: nodes
  type(syscelementtypedataf), intent(in) :: celltypes
  type(syscelementnodeconnectivitydataf), intent(in) :: cellnodeconn
  type(syscvolumemeshf) :: ret
  !DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
  !DIR$ ATTRIBUTES DLLIMPORT :: syscGetVolumeMeshF_ElementBased
  !DIR$ ENDIF
  end function syscgetvolumemeshf_elementbased
!
end interface syscgetvolumemeshf
!
end module fortran
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)