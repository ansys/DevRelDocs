---
uid: Ans.DataProcessing.CyclicSupport
title: CyclicSupport
---

# CyclicSupport Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

The cyclic support has information to allow cyclic expansion (or multistage)

CyclicSupport(ptrSupport: IntPtr)


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

```python
result = obj.GetNumSectors(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *int*

#### GetSectorsScoping

```python
result = obj.GetSectorsScoping(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *Scoping*

#### GetBaseNodesScoping

```python
result = obj.GetBaseNodesScoping(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *Scoping*

#### GetBaseElementsScoping

```python
result = obj.GetBaseElementsScoping(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *Scoping*

#### GetNodeIdsWhenExpanded

```python
result = obj.GetNodeIdsWhenExpanded(nodeId, sectorsScoping, istage)
```

**Parameters:**

- `nodeId` (*int*)
- `sectorsScoping` (*Scoping* (optional))
- `istage` (*int* (optional))

**Returns:** *Scoping*

#### GetElementIdsWhenExpanded

```python
result = obj.GetElementIdsWhenExpanded(elementId, sectorsScoping, istage)
```

**Parameters:**

- `elementId` (*int*)
- `sectorsScoping` (*Scoping* (optional))
- `istage` (*int* (optional))

**Returns:** *Scoping*

#### GetCS

```python
result = obj.GetCS()
```

**Returns:** *Field*

#### GetLowHighMap

```python
result = obj.GetLowHighMap(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *PropertyField*

#### GetHighLowMap

```python
result = obj.GetHighLowMap(istage)
```

**Parameters:**

- `istage` (*int* (optional))

**Returns:** *PropertyField*

## Properties

#### NumStages

**Type:** *int*

```python
# Get the property (read-only)
value = obj.NumStages
```
