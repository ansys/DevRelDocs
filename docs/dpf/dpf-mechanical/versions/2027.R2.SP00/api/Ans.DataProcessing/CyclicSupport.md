---
uid: Ans.DataProcessing.CyclicSupport
---

# *class* CyclicSupport()

The cyclic support has information to allow cyclic expansion (or multistage)

## Methods

#### GetBaseElementsScoping(istage: int = 0) -> Scoping

Method `GetBaseElementsScoping` returns the element ids in the base sector

of a given stage

**Parameters:**

* **istage** (*optional*) - (optional) stage number (starts at 0, default is 0)

#### GetBaseNodesScoping(istage: int = 0) -> Scoping

Method `GetBaseNodesScoping` returns the node ids in the base sector

of a given stage

**Parameters:**

* **istage** (*optional*) - (optional) stage number (starts at 0, default is 0)

#### GetCS() -> Field

Method `GetCS` returns the Coordinate System Id corresponding to the cyclic region

#### GetElementIdsWhenExpanded(elementId: int, sectorsScoping: Scoping = None, istage: int = 0) -> Scoping

Method `GetElementIdsWhenExpanded` returns the elements ids corresponding

the base elementId given in input for the expanded sectors given in sectorsScoping

**Parameters:**

* **elementId** - element id in base sector to expand
* **sectorsScoping** (*optional*) - list of sector (starting at 0) to expand the node on, default is all the sectors
* **istage** (*optional*) - (optional) stage number (starts at 0, default is 0)

#### GetHighLowMap(istage: int = 0) -> PropertyField

Method `GetHighLowMap` returns the Low High Scoping Map

**Parameters:**

* **istage** (*optional*) - (optional) stage number (starts at 0, default is 0)

#### GetLowHighMap(istage: int = 0) -> PropertyField

Method `GetLowHighMap` returns the Low High Scoping Map

**Parameters:**

* **istage** (*optional*) - (optional) stage number (starts at 0, default is 0)

#### GetNodeIdsWhenExpanded(nodeId: int, sectorsScoping: Scoping = None, istage: int = 0) -> Scoping

Method `GetNodeIdsWhenExpanded` returns the nodes ids corresponding to

the base nodeId given in input for the  expanded sectors given in sectorsScoping

**Parameters:**

* **nodeId** - node id in base sector to expand
* **sectorsScoping** (*optional*) - list of sector (starting at 0) to expand the node on, default is all the sectors
* **istage** (*optional*) - (optional) stage number (starts at 0, default is 0)

#### GetNumSectors(istage: int = 0) -> int

Method `GetNumSectors` returns the number of sectors necessary to do 360deg

**Parameters:**

* **istage** (*optional*) - (optional) stage number (starts at 0, default is 0)

#### GetSectorsScoping(istage: int = 0) -> Scoping

Method `GetSectorsScoping` returns the list of sectors that are currently set for expansion

(ids go from 0 to NumSectors)

**Parameters:**

* **istage** (*optional*) - (optional) stage number (starts at 0, default is 0)

## Properties

#### *property* NumStages: int

Property `NumStages` returns the number of cyclic stages in the analysis (1 if cyclic)

*get*
