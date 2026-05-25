---
uid: Ans.DataProcessing.MeshedRegion
---

# *class* MeshedRegion(numNodes: int, numElements: int)

Describe a mesh.

Node and element scopings, element types, connectivity (list of node indices composing each element)

and node coordinates are the fundamental entities composing the meshed region.

**Parameters:**

* **numNodes**
* **numElements**

**Example:**

```python
my_model = dpf.Model("../.../file.rst")

mesh = my_model.MeshedRegion

#access elements scoping

my_elements_scoping = mesh.ElementScoping

#access nodes scoping

my_nodes_scoping = mesh.NodeScoping

#get connectivity (ordered node ids) of one element

my_el_1 = mesh.ElementById(1)

my_el_1.NodeIds

#connectivity with only primary (corner) nodes

my_el_1.CornerNodeIds

#get coordinates

mesh.CoordinatesField #complete 3D field with scoping = mesh.NodesScoping

#or node by node

my_node_1 = mesh.NodeById(1)

my_node_1.X

my_node_1.Y

my_node_1.Z



#create meshed region

mesh = dpf.MeshedRegion(4, 1)

mesh.AddNode(1, [ 0.0, 0.0, 0.0 ])

mesh.AddNode(2, [ 1.0, 0.0, 0.0 ])

mesh.AddNode(3, [ 1.0, 1.0, 0.0 ])

mesh.AddNode(4, [ 0.0, 1.0, 0.0 ])

mesh.AddShellElement(1, [ 0, 1, 2, 3 ])
```

## Methods

#### AddBeamElement(id: int, connectivity: list) -> None

**Parameters:**

* **id**
* **connectivity**

#### AddNode(id: int, coordinates: list) -> None

**Parameters:**

* **id**
* **coordinates**

#### AddPointElement(id: int, connectivity: list) -> None

**Parameters:**

* **id**
* **connectivity**

#### AddShellElement(id: int, connectivity: list) -> None

**Parameters:**

* **id**
* **connectivity**

#### AddSolidElement(id: int, connectivity: list) -> None

**Parameters:**

* **id**
* **connectivity**

#### ElementById(elementId: int) -> Element

Method `ElementById` access a given element contained by the mesh.

Allows to access its id, its element type, connectivity...

**Parameters:**

* **elementId** - id contained in the ElementScoping

#### GetPropertyField(propertyName: str) -> PropertyField

Method `GetPropertyField` returns the Mesh Property Field describing a given integral property

**Parameters:**

* **propertyName** - choose from available properties in MeshedRegion.PropertyFieldNames

#### NodeById(nodeId: int) -> Node

Method `NodeById` access a given node contained by the mesh.

Allows to access its id and its coordinates

**Parameters:**

* **nodeId** - id contained in the NodeScoping

## Properties

#### *property* NodeCount: int

Property `NodeCount` number of nodes in the mesh

*get*

#### *property* ElementCount: int

Property `ElementCount` number of elements in the mesh

*get*

#### *property* NodeIds: list

Property `NodeIds` list of node ids contained by the mesh

*get*

#### *property* ElementIds: list

Property `NodeIds` list of element ids contained by the mesh

*get*

#### *property* NodeScoping: Scoping

Property `NodeScoping` list of nodes ids contained by the mesh

*get*

#### *property* ElementScoping: Scoping

Property `ElementScoping` list of elements ids contained by the mesh

*get*

#### *property* Unit: str

Property `Unit` unit symbol of the meshes coordinates

*get/set*

#### *property* HasShell: bool

Property `HasShell` tells if the mesh has shell (2D) elements

*get*

#### *property* HasOnlyShell: bool

Property `HasOnlyShell` tells if the mesh only has shell (2D) elements

*get*

#### *property* HasBeam: bool

Property `HasBeam` tells if the mesh has beam (1D) elements

*get*

#### *property* HasOnlyBeam: bool

Property `HasOnlyBeam` tells if the mesh only has beam (1D) elements

*get*

#### *property* HasSolid: bool

Property `HasSolid` tells if the mesh has solid (3D) elements

*get*

#### *property* HasGasket: bool

*get*

#### *property* HasOnlySolid: bool

Property `HasOnlySolid` tells if the mesh only has solid (3D) elements

*get*

#### *property* HasPoint: bool

Property `HasPoint` tells if the mesh has point (0D) elements

*get*

#### *property* HasOnlyPoint: bool

Property `HasOnlyPoint` tells if the mesh only has point (0D) elements

*get*

#### *property* HasSkin: bool

Property `HasSkin` tells if the mesh has skin (2D non-structural shell) elements

*get*

#### *property* HasPolygons: bool

Property `HasPolygons` tells if the mesh has Polygonal 2D elements

*get*

#### *property* HasPolyhedrons: bool

Property `HasPolyhedrons` tells if the mesh has Polyhedral 3D elements

*get*

#### *property* Nodes: list

Property `Nodes` list of nodes contained by the mesh.

Allows to access their id and their coordinates

*get*

#### *property* Elements: list

Property `Elements` list of elements contained by the mesh.

Allows to access their id, their element type, connectivity...

*get*

#### *property* CoordinatesField: Field

Property `CoordinatesField` field of nodes coordinates. Its scoping is the NodeScoping

*get*

#### *property* ConnectivityPropertyField: PropertyField

*get*

#### *property* NodalConnectivityPropertyField: PropertyField

*get*
