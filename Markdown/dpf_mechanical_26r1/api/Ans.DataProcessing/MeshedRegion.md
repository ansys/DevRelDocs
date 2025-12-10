---
uid: Ans.DataProcessing.MeshedRegion
---

# MeshedRegion Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

Describe a mesh.

Node and element scopings, element types, connectivity (list of node indices composing each element)

and node coordinates are the fundamental entities composing the meshed region.

## Example

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

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```python
MeshedRegion(numNodes, numElements)
```

**Parameters:**

- `numNodes` (*int*)
- `numElements` (*int*)

#### Constructor

```python
MeshedRegion(pMeshedRegion)
```

**Parameters:**

- `pMeshedRegion` (*IntPtr*)

## Methods

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

#### AddNode

```python
obj.AddNode(id, coordinates)
```

**Parameters:**

- `id` (*int*)
- `coordinates` (*list*)

#### AddBeamElement

```python
obj.AddBeamElement(id, connectivity)
```

**Parameters:**

- `id` (*int*)
- `connectivity` (*list*)

#### AddShellElement

```python
obj.AddShellElement(id, connectivity)
```

**Parameters:**

- `id` (*int*)
- `connectivity` (*list*)

#### AddSolidElement

```python
obj.AddSolidElement(id, connectivity)
```

**Parameters:**

- `id` (*int*)
- `connectivity` (*list*)

#### AddPointElement

```python
obj.AddPointElement(id, connectivity)
```

**Parameters:**

- `id` (*int*)
- `connectivity` (*list*)

#### AddPointElement

Method `AddPointElement` add a new point element into the mesh with it's connected node and it's element id

```python
obj.AddPointElement(id, connectivity)
```

**Parameters:**

- `id` (*int*)
- `connectivity` (*int*)

#### NodeById

Method `NodeById` access a given node contained by the mesh.

Allows to access its id and its coordinates

```python
result = obj.NodeById(nodeId)
```

**Parameters:**

- `nodeId` (*int*)

**Returns:** *Node*

#### ElementById

Method `ElementById` access a given element contained by the mesh.

Allows to access its id, its element type, connectivity...

```python
result = obj.ElementById(elementId)
```

**Parameters:**

- `elementId` (*int*)

**Returns:** *Element*

#### GetPropertyField

Method `GetPropertyField` returns the Mesh Property Field describing a given integral property

```python
result = obj.GetPropertyField(propertyName)
```

**Parameters:**

- `propertyName` (*str*)

**Returns:** *PropertyField*

## Properties

#### NodeCount

Property `NodeCount` number of nodes in the mesh

**Type:** *int*

```python
# Get the property (read-only)
value = obj.NodeCount
```

#### ElementCount

Property `ElementCount` number of elements in the mesh

**Type:** *int*

```python
# Get the property (read-only)
value = obj.ElementCount
```

#### NodeIds

Property `NodeIds` list of node ids contained by the mesh

**Type:** *list*

```python
# Get the property (read-only)
value = obj.NodeIds
```

#### ElementIds

Property `NodeIds` list of element ids contained by the mesh

**Type:** *list*

```python
# Get the property (read-only)
value = obj.ElementIds
```

#### NodeScoping

Property `NodeScoping` list of nodes ids contained by the mesh

**Type:** *Scoping*

```python
# Get the property (read-only)
value = obj.NodeScoping
```

#### ElementScoping

Property `ElementScoping` list of elements ids contained by the mesh

**Type:** *Scoping*

```python
# Get the property (read-only)
value = obj.ElementScoping
```

#### Unit

Property `Unit` unit symbol of the meshes coordinates

**Type:** *str*

```python
# Get or set the property
value = obj.Unit
obj.Unit = new_value
```

#### HasShell

Property `HasShell` tells if the mesh has shell (2D) elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasShell
```

#### HasOnlyShell

Property `HasOnlyShell` tells if the mesh only has shell (2D) elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasOnlyShell
```

#### HasBeam

Property `HasBeam` tells if the mesh has beam (1D) elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasBeam
```

#### HasOnlyBeam

Property `HasOnlyBeam` tells if the mesh only has beam (1D) elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasOnlyBeam
```

#### HasSolid

Property `HasSolid` tells if the mesh has solid (3D) elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasSolid
```

#### HasGasket

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasGasket
```

#### HasOnlySolid

Property `HasOnlySolid` tells if the mesh only has solid (3D) elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasOnlySolid
```

#### HasPoint

Property `HasPoint` tells if the mesh has point (0D) elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasPoint
```

#### HasOnlyPoint

Property `HasOnlyPoint` tells if the mesh only has point (0D) elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasOnlyPoint
```

#### HasSkin

Property `HasSkin` tells if the mesh has skin (2D non-structural shell) elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasSkin
```

#### HasPolygons

Property `HasPolygons` tells if the mesh has Polygonal 2D elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasPolygons
```

#### HasPolyhedrons

Property `HasPolyhedrons` tells if the mesh has Polyhedral 3D elements

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasPolyhedrons
```

#### Nodes

Property `Nodes` list of nodes contained by the mesh.

Allows to access their id and their coordinates

**Type:** *list*

```python
# Get the property (read-only)
value = obj.Nodes
```

#### Elements

Property `Elements` list of elements contained by the mesh.

Allows to access their id, their element type, connectivity...

**Type:** *list*

```python
# Get the property (read-only)
value = obj.Elements
```

#### CoordinatesField

Property `CoordinatesField` field of nodes coordinates. Its scoping is the NodeScoping

**Type:** *Field*

```python
# Get the property (read-only)
value = obj.CoordinatesField
```

#### ConnectivityPropertyField

**Type:** *PropertyField*

```python
# Get the property (read-only)
value = obj.ConnectivityPropertyField
```

#### NodalConnectivityPropertyField

**Type:** *PropertyField*

```python
# Get the property (read-only)
value = obj.NodalConnectivityPropertyField
```
