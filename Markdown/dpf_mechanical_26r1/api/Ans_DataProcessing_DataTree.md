---
uid: Ans.DataProcessing.DataTree
title: DataTree
---

# DataTree Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

DataTree()
DataTree(val: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new DataTree()
```

#### Constructor

```csharp
new DataTree(IntPtr val)
```

**Parameters:**

- `val` (*IntPtr*)

## Methods

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

#### hasSubTree

```csharp
Boolean hasSubTree(String name)
```

**Parameters:**

- `name` (*String*)

**Returns:** *Boolean*

#### hasAttribute

```csharp
Boolean hasAttribute(String name)
```

**Parameters:**

- `name` (*String*)

**Returns:** *Boolean*

#### getSubTree

```csharp
DataTree getSubTree(String name)
```

**Parameters:**

- `name` (*String*)

**Returns:** *DataTree*

#### makeSubTree

```csharp
DataTree makeSubTree(String name)
```

**Parameters:**

- `name` (*String*)

**Returns:** *DataTree*

#### getIntAttribute

```csharp
Int32 getIntAttribute(String attribute_name)
```

**Parameters:**

- `attribute_name` (*String*)

**Returns:** *Int32*

#### getVecIntAttribute

```csharp
IList`1 getVecIntAttribute(String attribute_name)
```

**Parameters:**

- `attribute_name` (*String*)

**Returns:** *IList`1*

#### getDoubleAttribute

```csharp
Double getDoubleAttribute(String attribute_name)
```

**Parameters:**

- `attribute_name` (*String*)

**Returns:** *Double*

#### getVecDoubleAttribute

```csharp
IList`1 getVecDoubleAttribute(String attribute_name)
```

**Parameters:**

- `attribute_name` (*String*)

**Returns:** *IList`1*

#### getStringAttribute

```csharp
String getStringAttribute(String attribute_name)
```

**Parameters:**

- `attribute_name` (*String*)

**Returns:** *String*

#### makeIntAttribute

```csharp
Void makeIntAttribute(String attribute_name, Int32 value)
```

**Parameters:**

- `attribute_name` (*String*)
- `value` (*Int32*)

#### makeVecIntAttribute

```csharp
Void makeVecIntAttribute(String attribute_name, IList`1 data)
```

**Parameters:**

- `attribute_name` (*String*)
- `data` (*IList`1*)

#### makeDoubleAttribute

```csharp
Void makeDoubleAttribute(String attribute_name, Double value)
```

**Parameters:**

- `attribute_name` (*String*)
- `value` (*Double*)

#### makeVecDoubleAttribute

```csharp
Void makeVecDoubleAttribute(String attribute_name, IList`1 data)
```

**Parameters:**

- `attribute_name` (*String*)
- `data` (*IList`1*)

#### makeStringAttribute

```csharp
Void makeStringAttribute(String attribute_name, String value)
```

**Parameters:**

- `attribute_name` (*String*)
- `value` (*String*)

#### writeToTxt

```csharp
String writeToTxt()
```

**Returns:** *String*

#### fillFromTxt

```csharp
Void fillFromTxt(String value)
```

**Parameters:**

- `value` (*String*)

#### ToJson

```csharp
String ToJson()
```

**Returns:** *String*

#### fillFromJson

```csharp
Void fillFromJson(String value)
```

**Parameters:**

- `value` (*String*)
