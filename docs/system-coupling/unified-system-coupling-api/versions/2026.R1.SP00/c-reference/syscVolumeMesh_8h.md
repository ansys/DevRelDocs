# File syscVolumeMesh.h

![][C]

**Location**: `syscVolumeMesh.h`





## Classes

* [SyscVolumeMesh](structSyscVolumeMesh.md#structSyscVolumeMesh)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/syscCommonTypes.h
* SystemCouplingParticipant/syscMeshDefinition.h
* SystemCouplingParticipant/syscOutputVectorData.h
* <stddef.h>
* <stdint.h>


```mermaid
graph LR
1["syscVolumeMesh.h"]
click 1 "syscVolumeMesh_8h.md#syscVolumeMesh_8h"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6
1 --> 7

2["SystemCouplingParticipant/LibraryType.hpp"]

3["SystemCouplingParticipant/syscCommonTypes.h"]

4["SystemCouplingParticipant/syscMeshDefinition.h"]

5["SystemCouplingParticipant/syscOutputVectorData.h"]

6["stddef.h"]

7["stdint.h"]

```


## Functions

<a id="group__SyscParticipantLibraryCAPI_1ga44f0210eb99864864b6ea802b5c8c857"></a>
### Function syscGetVolumeMeshEmpty

<a id="group__SyscParticipantLibraryCAPI_1gaa082ad5a3f9a308f6dfb794e8bdcd8cd"></a>
### Function syscGetVolumeMeshNFC

<a id="group__SyscParticipantLibraryCAPI_1gacdd4cb0f44e5d2e94a0ed34e0dc96bbe"></a>
### Function syscGetVolumeMeshElementBased

<a id="group__SyscParticipantLibraryCAPI_1gae426344ef494aa92411c8c3856cdcb7f"></a>
### Function syscGetVolumeMeshFaceBased

## Source


```
/*
* Copyright ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
*/

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/syscCommonTypes.h"
#include "SystemCouplingParticipant/syscMeshDefinition.h"
#include "SystemCouplingParticipant/syscOutputVectorData.h"

#include <stddef.h>
#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif


/* *********** Volume mesh ************************************************ */

typedef struct {
  SyscNodeData nodes;

  SyscFaceData faces;

  SyscCellData cells;

  int64_t connectivityStamp;

  int64_t coordinatesStamp;

  int64_t partitioningStamp;
} SyscVolumeMesh;


SyscVolumeMesh syscGetVolumeMeshEmpty();


SyscVolumeMesh syscGetVolumeMeshNFC(
  SyscNodeData nodes,
  SyscFaceData faces,
  SyscCellData cells);


SyscVolumeMesh syscGetVolumeMeshElementBased(
  SyscNodeData nodes,
  SyscElementTypeData cellTypes,
  SyscElementNodeConnectivityData cellNodeConnectivity);


SyscVolumeMesh syscGetVolumeMeshFaceBased(
  SyscNodeData nodes,
  SyscElementNodeCountData faceNodeCounts,
  SyscElementNodeConnectivityData faceNodeConnectivity,
  SyscFaceCellConnectivityData faceCellConnectivity,
  SyscCellIdData cellIds);


#ifdef __cplusplus
}
#endif
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)