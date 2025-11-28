---
uid: Ans.DataProcessing.MaterialsContainer
title: MaterialsContainer
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

```csharp
new MaterialsContainer(IntPtr pMaterialsContainer)
```

**Parameters:**

- `pMaterialsContainer` (*IntPtr*)

## Methods

#### ListOfPropertiesAtVUUID

```csharp
IList`1 ListOfPropertiesAtVUUID(String vuuid)
```

**Parameters:**

- `vuuid` (*String*)

**Returns:** *IList`1*

#### ListOfPropertiesAtDpfMatId

```csharp
IList`1 ListOfPropertiesAtDpfMatId(Int32 matId)
```

**Parameters:**

- `matId` (*Int32*)

**Returns:** *IList`1*

#### ListOfPropertiesAtMaterialPhysicName

```csharp
IList`1 ListOfPropertiesAtMaterialPhysicName(String materialname)
```

**Parameters:**

- `materialname` (*String*)

**Returns:** *IList`1*

#### VUUIDAtDpfMatId

```csharp
String VUUIDAtDpfMatId(Int32 dpfMatId)
```

**Parameters:**

- `dpfMatId` (*Int32*)

**Returns:** *String*

#### MaterialPhysicNameAtVUUID

```csharp
String MaterialPhysicNameAtVUUID(String vuuid)
```

**Parameters:**

- `vuuid` (*String*)

**Returns:** *String*

#### MaterialPhysicNameAtDpfMatId

```csharp
String MaterialPhysicNameAtDpfMatId(Int32 matID)
```

**Parameters:**

- `matID` (*Int32*)

**Returns:** *String*

#### PropertiesCountAtVUUID

```csharp
Int32 PropertiesCountAtVUUID(String vuuid)
```

**Parameters:**

- `vuuid` (*String*)

**Returns:** *Int32*

#### PropertiesCountAtDpfMatId

```csharp
Int32 PropertiesCountAtDpfMatId(Int32 matId)
```

**Parameters:**

- `matId` (*Int32*)

**Returns:** *Int32*

#### DpfMatIdAtVUUID

```csharp
Int32 DpfMatIdAtVUUID(String vuuid)
```

**Parameters:**

- `vuuid` (*String*)

**Returns:** *Int32*

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### ListOfVUUIDs

```csharp
IList`1 ListOfVUUIDs { get; }
```

#### ListOfMaterialPhysicNames

```csharp
IList`1 ListOfMaterialPhysicNames { get; }
```

#### MaterialsCount

```csharp
Int32 MaterialsCount { get; }
```

#### DpfMatIds

```csharp
IList`1 DpfMatIds { get; }
```
