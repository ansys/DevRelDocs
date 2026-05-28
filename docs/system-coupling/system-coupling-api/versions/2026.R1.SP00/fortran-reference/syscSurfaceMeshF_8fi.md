---
title: "File syscSurfaceMeshF.fi"
---

![][Fortran]

**Location**: `syscSurfaceMeshF.fi`





## Classes

* [fortran::syscsurfacemeshf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscsurfacemeshf)
* [fortran::syscgetsurfacemeshf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetsurfacemeshf)

## Namespaces

* [fortran](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/namespacefortran)

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
type :: syscsurfacemeshf
  type(syscnodedataf) :: nodes
 
  type(syscelementtypedataf) :: elemtypes

  type(syscelementnodecountdataf) :: elemnodecounts

  type(syscelementnodeconnectivitydataf) :: elemnodeconnectivity

end type syscsurfacemeshf
!
!**********************************************************************
!**********************************************************************
interface syscgetsurfacemeshf
!
!**********************************************************************
!**********************************************************************
function syscgetsurfacemeshf() result (ret)
  import :: syscsurfacemeshf
  type(syscsurfacemeshf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSurfaceMeshF
!DIR$ ENDIF
end function syscgetsurfacemeshf
!
!**********************************************************************
!**********************************************************************
function syscgetsurfacemeshf_nf(nodes, faces) result (ret)
  import :: syscsurfacemeshf, syscnodedataf, syscfacedataf
  type(syscnodedataf), intent(in) :: nodes
  type(syscfacedataf), intent(in) :: faces
  type(syscsurfacemeshf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSurfaceMeshF_NF
!DIR$ ENDIF
end function syscgetsurfacemeshf_nf
!
!**********************************************************************
!**********************************************************************
function syscgetsurfacemeshf_ntci(&
  nodes,&
  elemTypes,&
  elemNodeCounts,&
  elemNodeConn) result (ret)
  import :: syscsurfacemeshf, syscnodedataf, syscelementtypedataf, &
    syscelementnodecountdataf, syscelementnodeconnectivitydataf
  type(syscnodedataf), intent(in) :: nodes
  type(syscelementtypedataf), intent(in) :: elemtypes
  type(syscelementnodecountdataf), intent(in) :: elemnodecounts
  type(syscelementnodeconnectivitydataf), intent(in) :: elemnodeconn
  type(syscsurfacemeshf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSurfaceMeshF_NTCI
!DIR$ ENDIF
end function syscgetsurfacemeshf_ntci
!
!**********************************************************************
!**********************************************************************
function syscgetsurfacemeshf_nci(&
  nodes,&
  elemNodeCounts,&
  elemNodeConn) result (ret)
  import :: syscsurfacemeshf, syscnodedataf, &
    syscelementnodecountdataf, syscelementnodeconnectivitydataf
  type(syscnodedataf), intent(in) :: nodes
  type(syscelementnodecountdataf), intent(in) :: elemnodecounts
  type(syscelementnodeconnectivitydataf), intent(in) :: elemnodeconn
  type(syscsurfacemeshf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSurfaceMeshF_NCI
!DIR$ ENDIF
end function syscgetsurfacemeshf_nci
!
!**********************************************************************
!**********************************************************************
function syscgetsurfacemeshf_nti(&
  nodes,&
  elemTypes,&
  elemNodeConn) result (ret)
  import :: syscsurfacemeshf, syscnodedataf, syscelementtypedataf, &
    syscelementnodeconnectivitydataf
  type(syscnodedataf), intent(in) :: nodes
  type(syscelementtypedataf), intent(in) :: elemtypes
  type(syscelementnodeconnectivitydataf), intent(in) :: elemnodeconn
  type(syscsurfacemeshf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSurfaceMeshF_NTI
!DIR$ ENDIF
end function syscgetsurfacemeshf_nti
!
!**********************************************************************
!**********************************************************************
function syscgetsurfacemeshf_a(&
  nodeIds,&
  nodeCoords,&
  elemNodeCounts,&
  elemNodeIds) result (ret)
  import :: syscsurfacemeshf
  import :: syscoutputscalardataf
  import :: syscoutputvectordataf
  type(syscoutputscalardataf), intent(in) :: nodeids
  type(syscoutputvectordataf), intent(in) :: nodecoords
  type(syscoutputscalardataf), intent(in) :: elemnodecounts
  type(syscoutputscalardataf), intent(in) :: elemnodeids
  type(syscsurfacemeshf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSurfaceMeshF_A
!DIR$ ENDIF
end function syscgetsurfacemeshf_a
!
!**********************************************************************
!**********************************************************************
function syscgetsurfacemeshf_b(&
  nodeCoords,&
  elemNodeCounts,&
  elemNodeIds) result (ret)
  import :: syscsurfacemeshf
  import :: syscoutputscalardataf
  import :: syscoutputvectordataf
  type(syscoutputvectordataf), intent(in) :: nodecoords
  type(syscoutputscalardataf), intent(in) :: elemnodecounts
  type(syscoutputscalardataf), intent(in) :: elemnodeids
  type(syscsurfacemeshf) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetSurfaceMeshF_B
!DIR$ ENDIF
end function syscgetsurfacemeshf_b
!
end interface syscgetsurfacemeshf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)