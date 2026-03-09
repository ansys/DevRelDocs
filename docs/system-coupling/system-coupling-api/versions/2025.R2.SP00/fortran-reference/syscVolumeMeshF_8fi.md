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
! *********************************************************************
type :: syscvolumemeshf
type(syscnodedataf) :: nodes

type(syscelementnodecountdataf) :: facenodecounts

type(syscelementnodeconnectivitydataf) :: facenodeconnectivity

type(syscfacecellconnectivitydataf) :: facecellconnectivity

type(sysccelliddataf) :: cellids

type(syscelementtypedataf) :: celltypes

type(syscelementnodeconnectivitydataf) :: cellnodeconnectivity

end type syscvolumemeshf
!
!**********************************************************************
!**********************************************************************
interface syscgetvolumemeshf
!
!**********************************************************************
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