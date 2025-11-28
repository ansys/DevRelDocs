---
uid: Ans.DataProcessing.Element
---

# Element Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Element(id: Int32, ptr: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Constructors

#### Constructor

```python
Element(id, ptr)
```

**Parameters:**

- `id` (*int*)
- `ptr` (*IntPtr*)

## Methods

#### GetMidNodeAdjacentNodes

```python
obj.GetMidNodeAdjacentNodes(indexMidNode, indexCornerNode1, indexCornerNode2)
```

**Parameters:**

- `indexMidNode` (*int*)
- `indexCornerNode1` (*Int32&* (out))
- `indexCornerNode2` (*Int32&* (out))

## Properties

#### Id

**Type:** *int*

```python
# Get the property (read-only)
value = obj.Id
```

#### Type

**Type:** *int*

```python
# Get the property (read-only)
value = obj.Type
```

#### NodeIds

**Type:** *list*

```python
# Get the property (read-only)
value = obj.NodeIds
```

#### Nodes

**Type:** *list*

```python
# Get the property (read-only)
value = obj.Nodes
```

#### CornerNodeIds

**Type:** *list*

```python
# Get the property (read-only)
value = obj.CornerNodeIds
```

#### MidNodeIds

**Type:** *list*

```python
# Get the property (read-only)
value = obj.MidNodeIds
```

#### CornerNodes

**Type:** *list*

```python
# Get the property (read-only)
value = obj.CornerNodes
```
