# File syscSurfaceMeshF.fi

![][Fortran]

**Location**: `syscSurfaceMeshF.fi`





## Classes

* [fortran::syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)
* [fortran::syscgetsurfacemeshf](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf)

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
!> \brief Provide a surface mesh access type.
!!
!! Provides read-only access to the surface mesh for a given region.
!!
type :: syscsurfacemeshf
  type(syscnodedataf) :: nodes
 !< Mesh nodes.
  type(syscelementtypedataf) :: elemtypes
!< Element types.
  type(syscelementnodecountdataf) :: elemnodecounts
!< Element node counts.
  type(syscelementnodeconnectivitydataf) :: elemnodeconnectivity
!< Element-to-node connectivity.
  integer(kind=8) :: connectivitystamp
!< Connectivity stamp
  integer(kind=8) :: coordinatesstamp
!< Coordinates stamp
  integer(kind=8) :: partitioningstamp
!< Partitioning stamp
end type syscsurfacemeshf
!
!**********************************************************************
!> \brief Provide an interface to get surface mesh.
!**********************************************************************
interface syscgetsurfacemeshf
!
!**********************************************************************
!> \brief Create a surface mesh access struct.
!!
!! Returns a type representing empty surface mesh.
!! All members will be assigned default values.
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
!> \brief Create a surface mesh access struct.
!!
!! \param[in] nodes - mesh nodes
!!
!! \param[in] faces - mesh faces
!!
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
!> \brief Create a surface mesh access struct.
!!
!! \param[in] nodes - mesh nodes
!!
!! \param[in] elemTypes - element types
!!
!! \param[in] elemNodeCounts - element node counts
!!
!! \param[in] elemNodeConn - element-to-node connectivity
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
!> \brief Create a surface mesh access struct.
!!
!! \param[in] nodes - mesh nodes
!!
!! \param[in] elemNodeCounts - element node counts
!!
!! \param[in] elemNodeConn - element-to-node connectivity
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
!> \brief Create a surface mesh access struct.
!!
!! \param[in] nodes - mesh nodes
!!
!! \param[in] elemTypes - element types
!!
!! \param[in] elemNodeConn - element-to-node connectivity
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
!> \brief Create a surface mesh access struct.
!!
!! Note - this function is deprecated, use `syscGetSurfaceMeshF_NCI`
!!
!! \param[in] nodeIds - output scalar data access for node ids
!!
!! \param[in] nodeCoords - output vector data access for node 
!! coordinates, provided in the same order as node ids
!!
!! \param[in] elemNodeCounts - output scalar data access for
!!        element node counts
!!
!! \param[in] elemNodeIds - output scalar data access for element 
!! node ids
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
!> \brief Create a surface mesh access struct.
!!
 !! Note - this function is deprecated, use `syscGetSurfaceMeshF_NCI`
!!
!! \param[in] nodeCoords - output vector data access for node 
!! coordinates, provided in ascending node ids order
!!
!! \param[in] elemNodeCounts - output scalar data access for
!! element node counts
!!
!! \param[in] elemNodeIds - output scalar data access for element 
!! node ids
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
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)