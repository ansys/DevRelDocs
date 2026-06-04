---
uid: Ans.DataProcessing.MaterialsContainer
---

# MaterialsContainer Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

MaterialsContainer(pMaterialsContainer: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```python
MaterialsContainer(pMaterialsContainer)
```

**Parameters:**

- `pMaterialsContainer` (*IntPtr*)

## Methods

#### ListOfPropertiesAtVUUID

```python
result = obj.ListOfPropertiesAtVUUID(vuuid)
```

**Parameters:**

- `vuuid` (*str*)

**Returns:** *list*

#### ListOfPropertiesAtDpfMatId

```python
result = obj.ListOfPropertiesAtDpfMatId(matId)
```

**Parameters:**

- `matId` (*int*)

**Returns:** *list*

#### ListOfPropertiesAtMaterialPhysicName

```python
result = obj.ListOfPropertiesAtMaterialPhysicName(materialname)
```

**Parameters:**

- `materialname` (*str*)

**Returns:** *list*

#### VUUIDAtDpfMatId

```python
result = obj.VUUIDAtDpfMatId(dpfMatId)
```

**Parameters:**

- `dpfMatId` (*int*)

**Returns:** *str*

#### MaterialPhysicNameAtVUUID

```python
result = obj.MaterialPhysicNameAtVUUID(vuuid)
```

**Parameters:**

- `vuuid` (*str*)

**Returns:** *str*

#### MaterialPhysicNameAtDpfMatId

```python
result = obj.MaterialPhysicNameAtDpfMatId(matID)
```

**Parameters:**

- `matID` (*int*)

**Returns:** *str*

#### PropertiesCountAtVUUID

```python
result = obj.PropertiesCountAtVUUID(vuuid)
```

**Parameters:**

- `vuuid` (*str*)

**Returns:** *int*

#### PropertiesCountAtDpfMatId

```python
result = obj.PropertiesCountAtDpfMatId(matId)
```

**Parameters:**

- `matId` (*int*)

**Returns:** *int*

#### DpfMatIdAtVUUID

```python
result = obj.DpfMatIdAtVUUID(vuuid)
```

**Parameters:**

- `vuuid` (*str*)

**Returns:** *int*

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### ListOfVUUIDs

**Type:** *list*

```python
# Get the property (read-only)
value = obj.ListOfVUUIDs
```

#### ListOfMaterialPhysicNames

**Type:** *list*

```python
# Get the property (read-only)
value = obj.ListOfMaterialPhysicNames
```

#### MaterialsCount

**Type:** *int*

```python
# Get the property (read-only)
value = obj.MaterialsCount
```

#### DpfMatIds

**Type:** *list*

```python
# Get the property (read-only)
value = obj.DpfMatIds
```
