# File syscMeshDefinitionF.fi

![][Fortran]

**Location**: `syscMeshDefinitionF.fi`





## Classes

* [fortran::syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf)
* [fortran::syscgetnodedataf](interfacefortran_1_1syscgetnodedataf.md#interfacefortran_1_1syscgetnodedataf)
* [fortran::syscelementtypedataf](structfortran_1_1syscelementtypedataf.md#structfortran_1_1syscelementtypedataf)
* [fortran::syscgetelementtypedataf](interfacefortran_1_1syscgetelementtypedataf.md#interfacefortran_1_1syscgetelementtypedataf)
* [fortran::syscelementnodecountdataf](structfortran_1_1syscelementnodecountdataf.md#structfortran_1_1syscelementnodecountdataf)
* [fortran::syscgetelementnodecountdataf](interfacefortran_1_1syscgetelementnodecountdataf.md#interfacefortran_1_1syscgetelementnodecountdataf)
* [fortran::syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)
* [fortran::syscgetelementnodeconnectivitydataf](interfacefortran_1_1syscgetelementnodeconnectivitydataf.md#interfacefortran_1_1syscgetelementnodeconnectivitydataf)
* [fortran::syscfacecellconnectivitydataf](structfortran_1_1syscfacecellconnectivitydataf.md#structfortran_1_1syscfacecellconnectivitydataf)
* [fortran::syscgetfacecellconnectivitydataf](interfacefortran_1_1syscgetfacecellconnectivitydataf.md#interfacefortran_1_1syscgetfacecellconnectivitydataf)
* [fortran::sysccelliddataf](structfortran_1_1sysccelliddataf.md#structfortran_1_1sysccelliddataf)
* [fortran::syscgetcelliddataf](interfacefortran_1_1syscgetcelliddataf.md#interfacefortran_1_1syscgetcelliddataf)
* [fortran::syscelementiddataf](structfortran_1_1syscelementiddataf.md#structfortran_1_1syscelementiddataf)
* [fortran::syscgetelementiddataf](interfacefortran_1_1syscgetelementiddataf.md#interfacefortran_1_1syscgetelementiddataf)
* [fortran::syscfacedataf](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf)
* [fortran::syscgetfacedataf](interfacefortran_1_1syscgetfacedataf.md#interfacefortran_1_1syscgetfacedataf)
* [fortran::sysccelldataf](structfortran_1_1sysccelldataf.md#structfortran_1_1sysccelldataf)
* [fortran::syscgetcelldataf](interfacefortran_1_1syscgetcelldataf.md#interfacefortran_1_1syscgetcelldataf)

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
!! \brief Node data access struct, provides read-only access to the 
!! mesh nodes.
!!
!! To create and/or initialize SyscNodeDataF, it is highly
!! recommended to use one of the functions within 
!! `syscGetNodeDataF` interface. These functions will
!! initialize all members to the correct values and will help to 
!! avoid back-compatibility issues in the future. For example:
!!
!! \code
!!
!! SyscNodeDataF nodeData
!! nodeData = syscGetNodeDataF(nodeCoords)
!!
!! \endcode
type :: syscnodedataf
  type(syscoutputintegerdataf) :: nodeids
  type(syscoutputvectordataf) :: nodecoords
end type syscnodedataf
!
!**********************************************************************
interface syscgetnodedataf
!
!**********************************************************************
!! \brief Create a mesh node data access struct.
!!
!! Returns an empty mesh node data access struct.
!! All members will be assigned default values.
!**********************************************************************
function syscgetnodedataf() result (ret)
  import :: syscnodedataf
  type(SyscNodeDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetNodeDataF
!DIR$ ENDIF
end function syscgetnodedataf
!
!**********************************************************************
!! \brief Create a mesh node data access struct, given node ids and 
!! node coords in same order.
!**********************************************************************
function syscgetnodedataf_ic(nodeIds, nodeCoords) result (ret)
!
  import :: syscnodedataf, syscoutputintegerdataf, &
            syscoutputvectordataf
  type(SyscOutputIntegerDataF), intent(in) :: nodeIds  
  type(SyscOutputVectorDataF), intent(in) :: nodeCoords
  type(SyscNodeDataF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetNodeDataF_IC
!DIR$ ENDIF
!
end function syscgetnodedataf_ic
!
!**********************************************************************
!! \brief Creates a mesh node data access struct, given node 
!! coordinates in ascending node ids order.
!**********************************************************************
function syscgetnodedataf_c(nodeCoords) result (ret)
  import :: syscnodedataf, syscoutputvectordataf
  type(SyscOutputVectorDataF), intent(in) :: nodeCoords
  type(SyscNodeDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetNodeDataF_C
!DIR$ ENDIF
  end function syscgetnodedataf_c
!
end interface syscgetnodedataf
!
! *********************************************************************
!! \brief Element types access struct, provides read-only access to 
!! the mesh element types.
!!
!! To create and/or initialize SyscElementTypeDataF, it is highly
!! recommended to use one of the functions within 
!! `syscGetElementTypeDataF` interface. These functions will
!! initialize all members to the correct values and will help to 
!! avoid back-compatibility issues in the future. For example:
!!
!! \code
!!
!! SyscElementTypeDataF eTypeData
!! eTypeData = syscGetElementTypeDataF(elementTypes)
!!
!! \endcode
type :: syscelementtypedataf
  type(syscoutputintegerdataf) :: elementtypes
end type syscelementtypedataf
!
!**********************************************************************
interface syscgetelementtypedataf
!
!**********************************************************************
!! \brief Create a mesh node data access struct.
!!
!! Returns an empty mesh node data access struct. Element types integer
!! array access will be set to empty.
!**********************************************************************
function syscgetelementtypedataf_empty() result (ret)
  import :: syscelementtypedataf
  type(SyscElementTypeDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetElementTypeDataF_Empty
!DIR$ ENDIF
end function syscgetelementtypedataf_empty
!
!**********************************************************************
!! \brief Create a mesh node data access struct, given node ids and 
!! node coords in same order.
!**********************************************************************
function syscgetelementtypedataf(elementTypes) result (ret)
  import :: syscelementtypedataf, syscoutputintegerdataf
  type(SyscOutputIntegerDataF), intent(in) :: elementTypes
  type(SyscElementTypeDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetElementTypeDataF
!DIR$ ENDIF
end function syscgetelementtypedataf
!
end interface syscgetelementtypedataf
!
! *********************************************************************
!! \brief Element node count access struct.
! *********************************************************************
type :: syscelementnodecountdataf
  type(SyscOutputIntegerDataF) :: elementNodeCounts
end type syscelementnodecountdataf
!
!**********************************************************************
interface syscgetelementnodecountdataf
!**********************************************************************
!! \brief Returns an empty element node count data access struct.
!**********************************************************************
function syscgetelementnodecountdataf_empty() result (ret)
  import :: syscelementnodecountdataf
  type(SyscElementNodeCountDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetElementNodeCountDataF_Empty
!DIR$ ENDIF
end function syscgetelementnodecountdataf_empty
!
!**********************************************************************
!! \brief Create an element node count node data access struct, given
!! element node counts array.
!**********************************************************************
function syscgetelementnodecountdataf(elemNodeCounts) &
  result(ret)
  import :: syscelementnodecountdataf, syscoutputintegerdataf
  type(SyscOutputIntegerDataF), intent(in) :: elemNodeCounts
  type(SyscElementNodeCountDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetElementNodeCountDataF
!DIR$ ENDIF
end function syscgetelementnodecountdataf
!
end interface syscgetelementnodecountdataf
!
! *********************************************************************
!! \brief Element-to-node connectivity struct.
! *********************************************************************
type :: syscelementnodeconnectivitydataf
  type(SyscOutputIntegerDataF) :: elemNodeIds
end type syscelementnodeconnectivitydataf
!
!**********************************************************************
interface syscgetelementnodeconnectivitydataf
!**********************************************************************
!! \brief Returns an empty element-to-node connectivity struct.
!**********************************************************************
function syscgetelementnodeconnectivitydataf_empty() result (ret)
  import :: syscelementnodeconnectivitydataf
  type(SyscElementNodeConnectivityDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetElementNodeConnectivityDataF_Empty
!DIR$ ENDIF
end function syscgetelementnodeconnectivitydataf_empty
!
!**********************************************************************
!! \brief Create an element-to-node connectivity struct, given
!! element node ids array.
!**********************************************************************
function syscgetelementnodeconnectivitydataf(elemNodeConn) &
  result(ret)
  import :: syscelementnodeconnectivitydataf, syscoutputintegerdataf
  type(SyscOutputIntegerDataF), intent(in) :: elemNodeConn
  type(SyscElementNodeConnectivityDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetElementNodeConnectivityDataF
!DIR$ ENDIF
end function syscgetelementnodeconnectivitydataf
!
end interface syscgetelementnodeconnectivitydataf
!
! *********************************************************************
!! \brief Face-to-cell connectivity struct.
! *********************************************************************
type :: syscfacecellconnectivitydataf
  type(SyscOutputIntegerDataF) :: cell0Ids
  type(SyscOutputIntegerDataF) :: cell1Ids
end type syscfacecellconnectivitydataf
!
!**********************************************************************
interface syscgetfacecellconnectivitydataf
!**********************************************************************
!! \brief Returns an empty face-to-cell connectivity struct.
!**********************************************************************
function syscgetfacecellconnectivitydataf_empty() result (ret)
  import :: syscfacecellconnectivitydataf
  type(SyscFaceCellConnectivityDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetFaceCellConnectivityDataF_Empty
!DIR$ ENDIF
end function syscgetfacecellconnectivitydataf_empty
!
!**********************************************************************
!! \brief Create a face-to-cell connectivity struct, given cell0Ids
!! and cell1Ids arrays.
!**********************************************************************
function syscgetfacecellconnectivitydataf(cell0Ids, cell1Ids) &
  result(ret)
  import :: syscfacecellconnectivitydataf, syscoutputintegerdataf
  type(SyscOutputIntegerDataF), intent(in) :: cell0Ids
  type(SyscOutputIntegerDataF), intent(in) :: cell1Ids
  type(SyscFaceCellConnectivityDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetFaceCellConnectivityDataF
!DIR$ ENDIF
end function syscgetfacecellconnectivitydataf
!
end interface syscgetfacecellconnectivitydataf
!
! *********************************************************************
!! \brief Cell id data struct.
! *********************************************************************
type :: sysccelliddataf
  type(SyscOutputIntegerDataF) :: cellIds
end type sysccelliddataf
!
!**********************************************************************
interface syscgetcelliddataf
!**********************************************************************
!! \brief Returns an empty cell id data struct.
!**********************************************************************
function syscgetcelliddataf_empty() result (ret)
  import :: sysccelliddataf
  type(SyscCellIdDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetCellIdDataF_Empty
!DIR$ ENDIF
end function syscgetcelliddataf_empty
!
!**********************************************************************
!! \brief Create a cell id data struct, given cell ids array.
!**********************************************************************
function syscgetcelliddataf(cellIds) result (ret)
  import :: sysccelliddataf, syscoutputintegerdataf
  type(SyscOutputIntegerDataF), intent(in) :: cellIds
  type(SyscCellIdDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetCellIdDataF
!DIR$ ENDIF
end function syscgetcelliddataf
!
end interface syscgetcelliddataf
!
! *********************************************************************
!! \brief Element id data struct.
! *********************************************************************
type :: syscelementiddataf
  type(SyscOutputIntegerDataF) :: elementIds
end type syscelementiddataf
!
!**********************************************************************
interface syscgetelementiddataf
!**********************************************************************
!! \brief Returns an empty element id data struct.
!**********************************************************************
function syscgetelementiddataf_empty() result (ret)
  import :: syscelementiddataf
  type(SyscElementIdDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetElementIdDataF_Empty
!DIR$ ENDIF
end function syscgetelementiddataf_empty
!
!**********************************************************************
!! \brief Create a element id data struct, given element ids array.
!**********************************************************************
function syscgetelementiddataf(elementIds) result (ret)
  import :: syscelementiddataf, syscoutputintegerdataf
  type(SyscOutputIntegerDataF), intent(in) :: elementIds
  type(SyscElementIdDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetElementIdDataF
!DIR$ ENDIF
end function syscgetelementiddataf
!
end interface syscgetelementiddataf
!
! *********************************************************************
!! \brief Face data access struct, provides read-only access to the 
!! mesh faces.
!
type :: syscfacedataf
  type(syscelementiddataf) :: faceids
  type(syscelementtypedataf) :: facetypes
  type(syscelementnodecountdataf) :: facenodecounts
  type(syscelementnodeconnectivitydataf) :: facenodeconnectivity
  type(syscfacecellconnectivitydataf) :: facecellconnectivity
end type syscfacedataf
!
!**********************************************************************
interface syscgetfacedataf
!
!**********************************************************************
!! \brief Create a mesh face data access struct.
!!
!! Returns an empty mesh face data access struct.
!! All members will be assigned default values.
!**********************************************************************
function syscgetfacedataf() result (ret)
  import :: syscfacedataf
  type(SyscFaceDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetFaceDataF
!DIR$ ENDIF
end function syscgetfacedataf
!
!**********************************************************************
!! \brief Create a mesh face data access struct.
!**********************************************************************
function syscgetfacedataf_itn(faceIds, faceTypes, &
  faceNodeConnectivity) result (ret)
!
  import :: syscfacedataf, syscelementiddataf, &
            syscelementtypedataf, syscelementnodeconnectivitydataf
  type(SyscElementIdDataF), intent(in) :: faceIds  
  type(SyscElementTypeDataF), intent(in) :: faceTypes  
  type(SyscElementNodeConnectivityDataF), intent(in) :: &
    faceNodeConnectivity
  type(SyscFaceDataF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetFaceDataF_ITN
!DIR$ ENDIF
!
end function syscgetfacedataf_itn
!
!**********************************************************************
!! \brief Create a mesh face data access struct.
!**********************************************************************
function syscgetfacedataf_cn(faceNodeCounts, faceNodeConnectivity) &
  result(ret)
!
  import :: syscfacedataf, syscelementnodecountdataf, &
            syscelementnodeconnectivitydataf
  type(SyscElementNodeCountDataF), intent(in) :: faceNodeCounts  
  type(SyscElementNodeConnectivityDataF), intent(in) :: &
    faceNodeConnectivity
  type(SyscFaceDataF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetFaceDataF_CN
!DIR$ ENDIF
!
end function syscgetfacedataf_cn
!
end interface syscgetfacedataf
!
! *********************************************************************
!! \brief Cell data access struct, provides read-only access to the 
!! mesh cells.
!
type :: sysccelldataf
  type(syscelementiddataf) :: cellids
  type(syscelementtypedataf) :: celltypes
  type(syscelementnodeconnectivitydataf) :: cellnodeconnectivity
end type sysccelldataf
!
!**********************************************************************
interface syscgetcelldataf
!
!**********************************************************************
!! \brief Create a mesh cell data access struct.
!!
!! Returns an empty mesh cell data access struct.
!! All members will be assigned default values.
!**********************************************************************
function syscgetcelldataf() result (ret)
  import :: sysccelldataf
  type(SyscCellDataF) :: ret
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetCellDataF
!DIR$ ENDIF
end function syscgetcelldataf
!
!**********************************************************************
!! \brief Create a mesh cell data access struct.
!**********************************************************************
function syscgetfacedataf_i(cellIds) result (ret)
!
  import :: sysccelldataf, syscelementiddataf
  type(SyscElementIdDataF), intent(in) :: cellIds
  type(SyscCellDataF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetFaceDataF_I
!DIR$ ENDIF
!
end function syscgetfacedataf_i
!
!**********************************************************************
!! \brief Create a mesh cell data access struct.
!**********************************************************************
function syscgetfacedataf_tn(cellTypes, &
  cellNodeConnectivity) result (ret)
!
  import :: sysccelldataf, syscelementtypedataf, &
    syscelementnodeconnectivitydataf
  type(SyscElementTypeDataF), intent(in) :: cellTypes
  type(SyscElementNodeConnectivityDataF), intent(in) :: &
    cellNodeConnectivity
  type(SyscCellDataF) :: ret
!
!DIR$ IF DEFINED(_WIN32) .and. ( .not. DEFINED(SYSTEM_COUPLING_PARTICIPANT_PROXY))
!DIR$ ATTRIBUTES DLLIMPORT :: syscGetFaceDataF_TN
!DIR$ ENDIF
!
end function syscgetfacedataf_tn
!
end interface syscgetcelldataf
!
end module fortran
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)