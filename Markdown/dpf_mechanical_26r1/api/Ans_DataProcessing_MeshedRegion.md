---
uid: Ans.DataProcessing.MeshedRegion
---

# MeshedRegion Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Describe a mesh. 
            Node and element scopings, element types, connectivity (list of node indices composing each element) 
            and node coordinates are the fundamental entities composing the meshed region.

MeshedRegion(numNodes: Int32, numElements: Int32)
MeshedRegion(pMeshedRegion: IntPtr)


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

#### NodeById

```python
result = obj.NodeById(nodeId)
```

**Parameters:**

- `nodeId` (*int*)

**Returns:** *Node*

#### ElementById

```python
result = obj.ElementById(elementId)
```

**Parameters:**

- `elementId` (*int*)

**Returns:** *Element*

#### GetPropertyField

```python
result = obj.GetPropertyField(propertyName)
```

**Parameters:**

- `propertyName` (*str*)

**Returns:** *PropertyField*

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

```python
obj.AddPointElement(id, connectivity)
```

**Parameters:**

- `id` (*int*)
- `connectivity` (*int*)

## Properties

#### NodeCount

**Type:** *int*

```python
# Get the property (read-only)
value = obj.NodeCount
```

#### ElementCount

**Type:** *int*

```python
# Get the property (read-only)
value = obj.ElementCount
```

#### NodeIds

**Type:** *list*

```python
# Get the property (read-only)
value = obj.NodeIds
```

#### ElementIds

**Type:** *list*

```python
# Get the property (read-only)
value = obj.ElementIds
```

#### NodeScoping

**Type:** *Scoping*

```python
# Get the property (read-only)
value = obj.NodeScoping
```

#### ElementScoping

**Type:** *Scoping*

```python
# Get the property (read-only)
value = obj.ElementScoping
```

#### Unit

**Type:** *str*

```python
# Get or set the property
value = obj.Unit
obj.Unit = new_value
```

#### HasShell

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasShell
```

#### HasOnlyShell

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasOnlyShell
```

#### HasBeam

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasBeam
```

#### HasOnlyBeam

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasOnlyBeam
```

#### HasSolid

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

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasOnlySolid
```

#### HasPoint

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasPoint
```

#### HasOnlyPoint

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasOnlyPoint
```

#### HasSkin

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasSkin
```

#### HasPolygons

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasPolygons
```

#### HasPolyhedrons

**Type:** *bool*

```python
# Get the property (read-only)
value = obj.HasPolyhedrons
```

#### Nodes

**Type:** *list*

```python
# Get the property (read-only)
value = obj.Nodes
```

#### Elements

**Type:** *list*

```python
# Get the property (read-only)
value = obj.Elements
```

#### CoordinatesField

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
