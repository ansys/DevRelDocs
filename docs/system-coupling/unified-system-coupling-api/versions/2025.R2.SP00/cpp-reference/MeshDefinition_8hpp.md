# File MeshDefinition.hpp

![][C++]

**Location**: `MeshDefinition.hpp`





## Classes

* [sysc::ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData)
* [sysc::ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData)
* [sysc::ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData)
* [sysc::ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData)
* [sysc::FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData)
* [sysc::CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData)
* [sysc::NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData)
* [sysc::FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData)
* [sysc::CellData](structsysc_1_1CellData.md#structsysc_1_1CellData)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/OutputIntegerData.hpp
* SystemCouplingParticipant/OutputVectorData.hpp
* <cstddef>

```mermaid
graph LR
3["SystemCouplingParticipant/OutputIntegerData.hpp"]

4["SystemCouplingParticipant/OutputVectorData.hpp"]

2["SystemCouplingParticipant/LibraryType.hpp"]

1["MeshDefinition.hpp"]
click 1 "MeshDefinition_8hpp.md#MeshDefinition_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5

5["cstddef"]

```

## Source

```cpp
/*
 * Copyright ANSYS. All rights reserved.
 */

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/OutputIntegerData.hpp"
#include "SystemCouplingParticipant/OutputVectorData.hpp"

#include <cstddef>

namespace sysc {

struct ElementIdData {
  OutputIntegerData elementIds;

  ElementIdData(
    OutputIntegerData elementIds) :
      elementIds(elementIds)
  {
  }

  ElementIdData() = default;

  ElementIdData(const ElementIdData&) = default;

  ElementIdData(ElementIdData&&) = default;

  ElementIdData& operator=(const ElementIdData&) = default;

  ElementIdData& operator=(ElementIdData&&) = default;
};

struct ElementTypeData {
  OutputIntegerData elementTypes;

  ElementTypeData(
    OutputIntegerData elementTypes) :
      elementTypes(elementTypes)
  {
  }

  ElementTypeData() = default;

  ElementTypeData(const ElementTypeData&) = default;

  ElementTypeData(ElementTypeData&&) = default;

  ElementTypeData& operator=(const ElementTypeData&) = default;

  ElementTypeData& operator=(ElementTypeData&&) = default;
};

struct ElementNodeCountData {
  OutputIntegerData elemNodeCounts; 
  ElementNodeCountData(
    OutputIntegerData elemNodeCounts) :
      elemNodeCounts(elemNodeCounts)
  {
  }

  ElementNodeCountData() = default;

  ElementNodeCountData(const ElementNodeCountData&) = default;

  ElementNodeCountData(ElementNodeCountData&&) = default;

  ElementNodeCountData& operator=(const ElementNodeCountData&) = default;

  ElementNodeCountData& operator=(ElementNodeCountData&&) = default;
};

struct ElementNodeConnectivityData {
  OutputIntegerData elemNodeIds; 
  ElementNodeConnectivityData(const OutputIntegerData& elemNodeIds) :
      elemNodeIds(elemNodeIds)
  {
  }

  ElementNodeConnectivityData() = default;

  ElementNodeConnectivityData(const ElementNodeConnectivityData&) = default;

  ElementNodeConnectivityData(ElementNodeConnectivityData&&) = default;

  ElementNodeConnectivityData& operator=(const ElementNodeConnectivityData&) = default;

  ElementNodeConnectivityData& operator=(ElementNodeConnectivityData&&) = default;
};

struct FaceCellConnectivityData {
  OutputIntegerData cell0Ids; 
  OutputIntegerData cell1Ids; 
  FaceCellConnectivityData(OutputIntegerData cell0Ids, OutputIntegerData cell1Ids) :
      cell0Ids(cell0Ids),
      cell1Ids(cell1Ids) {}

  FaceCellConnectivityData() = default;

  FaceCellConnectivityData(const FaceCellConnectivityData&) = default;

  FaceCellConnectivityData(FaceCellConnectivityData&&) = default;

  FaceCellConnectivityData& operator=(const FaceCellConnectivityData&) = default;

  FaceCellConnectivityData& operator=(FaceCellConnectivityData&&) = default;
};

struct CellIdData {
  OutputIntegerData cellIds;

  CellIdData(
    OutputIntegerData cellIds) :
      cellIds(cellIds)
  {
  }

  CellIdData() = default;

  CellIdData(const CellIdData&) = default;

  CellIdData(CellIdData&&) = default;

  CellIdData& operator=(const CellIdData&) = default;

  CellIdData& operator=(CellIdData&&) = default;
};

struct NodeData {
  OutputIntegerData nodeIds;

  OutputVectorData nodeCoords;

  NodeData(OutputIntegerData nodeIds, OutputVectorData nodeCoords) :
      nodeIds(nodeIds),
      nodeCoords(nodeCoords)
  {
  }

  NodeData(OutputVectorData nodeCoords) :
      nodeCoords(nodeCoords) {}

  NodeData() = default;

  NodeData(const NodeData&) = default;

  NodeData(NodeData&&) = default;

  NodeData& operator=(const NodeData&) = default;

  NodeData& operator=(NodeData&&) = default;
};

struct FaceData {
  ElementIdData faceIds;

  ElementTypeData faceTypes;

  ElementNodeCountData faceNodeCounts;

  ElementNodeConnectivityData faceNodeConnectivity;

  FaceCellConnectivityData faceCellConnectivity;

  FaceData(
    ElementIdData faceIds,
    ElementTypeData faceTypes,
    ElementNodeCountData faceNodeCounts,
    ElementNodeConnectivityData faceNodeConnectivity,
    FaceCellConnectivityData faceCellConnectivity) :
      faceIds(faceIds),
      faceTypes(faceTypes),
      faceNodeCounts(faceNodeCounts),
      faceNodeConnectivity(faceNodeConnectivity),
      faceCellConnectivity(faceCellConnectivity)
  {
  }

  FaceData(
    ElementTypeData faceTypes,
    ElementNodeCountData faceNodeCounts,
    ElementNodeConnectivityData faceNodeConnectivity,
    FaceCellConnectivityData faceCellConnectivity) :
      faceTypes(faceTypes),
      faceNodeCounts(faceNodeCounts),
      faceNodeConnectivity(faceNodeConnectivity),
      faceCellConnectivity(faceCellConnectivity)
  {
  }

  FaceData(
    ElementIdData faceIds,
    ElementTypeData faceTypes,
    ElementNodeConnectivityData faceNodeConnectivity) :
      faceIds(faceIds),
      faceTypes(faceTypes),
      faceNodeConnectivity(faceNodeConnectivity)
  {
  }

  FaceData(
    ElementIdData faceIds,
    ElementNodeCountData faceNodeCounts,
    ElementNodeConnectivityData faceNodeConnectivity,
    FaceCellConnectivityData faceCellConnectivity) :
      faceIds(faceIds),
      faceNodeCounts(faceNodeCounts),
      faceNodeConnectivity(faceNodeConnectivity),
      faceCellConnectivity(faceCellConnectivity)
  {
  }

  FaceData(
    ElementIdData faceIds,
    ElementNodeCountData faceNodeCounts,
    ElementNodeConnectivityData faceNodeConnectivity) :
      faceIds(faceIds),
      faceNodeCounts(faceNodeCounts),
      faceNodeConnectivity(faceNodeConnectivity)
  {
  }

  FaceData(
    ElementNodeCountData faceNodeCounts,
    ElementNodeConnectivityData faceNodeConnectivity) :
      faceNodeCounts(faceNodeCounts),
      faceNodeConnectivity(faceNodeConnectivity)
  {
  }

  FaceData(
    ElementTypeData faceTypes,
    ElementNodeConnectivityData faceNodeConnectivity) :
      faceTypes(faceTypes),
      faceNodeConnectivity(faceNodeConnectivity)
  {
  }

  FaceData(
    ElementNodeCountData faceNodeCounts,
    ElementNodeConnectivityData faceNodeConnectivity,
    FaceCellConnectivityData faceCellConnectivity) :
      faceNodeCounts(faceNodeCounts),
      faceNodeConnectivity(faceNodeConnectivity),
      faceCellConnectivity(faceCellConnectivity)
  {
  }

  FaceData(
    ElementTypeData faceTypes,
    ElementNodeConnectivityData faceNodeConnectivity,
    FaceCellConnectivityData faceCellConnectivity) :
      faceTypes(faceTypes),
      faceNodeConnectivity(faceNodeConnectivity),
      faceCellConnectivity(faceCellConnectivity)
  {
  }

  FaceData() = default;

  FaceData(const FaceData&) = default;

  FaceData(FaceData&&) = default;

  FaceData& operator=(const FaceData&) = default;

  FaceData& operator=(FaceData&&) = default;
};

struct CellData {
  ElementIdData cellIds;

  ElementTypeData cellTypes;

  ElementNodeConnectivityData cellNodeConnectivity;

  CellData(
    ElementIdData cellIds,
    ElementTypeData cellTypes,
    ElementNodeConnectivityData cellNodeConnectivity) :
      cellIds(cellIds),
      cellTypes(cellTypes),
      cellNodeConnectivity(cellNodeConnectivity)
  {
  }

  CellData(ElementIdData cellIds) :
      cellIds(cellIds)
  {
  }

  CellData(ElementTypeData cellTypes, ElementNodeConnectivityData cellNodeConnectivity) :
      cellTypes(cellTypes), cellNodeConnectivity(cellNodeConnectivity)
  {
  }

  CellData() = default;

  CellData(const CellData&) = default;

  CellData(CellData&&) = default;

  CellData& operator=(const CellData&) = default;

  CellData& operator=(CellData&&) = default;
};

}  // namespace sysc
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)