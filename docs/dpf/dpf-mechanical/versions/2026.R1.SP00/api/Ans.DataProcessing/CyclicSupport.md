---
uid: Ans.DataProcessing.CyclicSupport
---

# CyclicSupport Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

The cyclic support has information to allow cyclic expansion (or multistage)

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```python
CyclicSupport(ptrSupport)
```

**Parameters:**

- `ptrSupport` (*IntPtr*)

## Methods

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

#### GetNumSectors

Method `GetNumSectors` returns the number of sectors necessary to do 360deg

```python
result = obj.GetNumSectors(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *int*

#### GetSectorsScoping

Method `GetSectorsScoping` returns the list of sectors that are currently set for expansion

(ids go from 0 to NumSectors)

```python
result = obj.GetSectorsScoping(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *Scoping*

#### GetBaseNodesScoping

Method `GetBaseNodesScoping` returns the node ids in the base sector

of a given stage

```python
result = obj.GetBaseNodesScoping(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *Scoping*

#### GetBaseElementsScoping

Method `GetBaseElementsScoping` returns the element ids in the base sector

of a given stage

```python
result = obj.GetBaseElementsScoping(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *Scoping*

#### GetNodeIdsWhenExpanded

Method `GetNodeIdsWhenExpanded` returns the nodes ids corresponding to

the base nodeId given in input for the  expanded sectors given in sectorsScoping

```python
result = obj.GetNodeIdsWhenExpanded(nodeId, sectorsScoping, istage)
```

**Parameters:**

- `nodeId` (*int*)
- `sectorsScoping` (*Scoping* (optional))
- `istage` (*int* (optional))

**Returns:** *Scoping*

#### GetElementIdsWhenExpanded

Method `GetElementIdsWhenExpanded` returns the elements ids corresponding

the base elementId given in input for the expanded sectors given in sectorsScoping

```python
result = obj.GetElementIdsWhenExpanded(elementId, sectorsScoping, istage)
```

**Parameters:**

- `elementId` (*int*)
- `sectorsScoping` (*Scoping* (optional))
- `istage` (*int* (optional))

**Returns:** *Scoping*

#### GetCS

Method `GetCS` returns the Coordinate System Id corresponding to the cyclic region

```python
result = obj.GetCS()
```

**Returns:** *Field*

#### GetLowHighMap

Method `GetLowHighMap` returns the Low High Scoping Map

```python
result = obj.GetLowHighMap(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *PropertyField*

#### GetHighLowMap

Method `GetHighLowMap` returns the Low High Scoping Map

```python
result = obj.GetHighLowMap(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *PropertyField*

## Properties

#### NumStages

Property `NumStages` returns the number of cyclic stages in the analysis (1 if cyclic)

**Type:** *int*

```python
# Get the property (read-only)
value = obj.NumStages
```
