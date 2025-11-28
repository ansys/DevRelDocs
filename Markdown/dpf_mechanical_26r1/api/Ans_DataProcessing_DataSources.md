---
uid: Ans.DataProcessing.DataSources
title: DataSources
---

# DataSources Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Container of files paths on which the analysis results can be found

DataSources()
DataSources(pDataSources: IntPtr)
DataSources(resultPath: str)
DataSources(resultPath: str, extension: str)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new DataSources()
```

#### Constructor

```csharp
new DataSources(IntPtr pDataSources)
```

**Parameters:**

- `pDataSources` (*IntPtr*)

#### Constructor

```csharp
new DataSources(String resultPath)
```

**Parameters:**

- `resultPath` (*String*)

#### Constructor

```csharp
new DataSources(String resultPath, String extension)
```

**Parameters:**

- `resultPath` (*String*)
- `extension` (*String*)

## Methods

#### GetFilePath

```csharp
String GetFilePath(String key)
```

**Parameters:**

- `key` (*String*)

**Returns:** *String*

#### SetResultFilePath

```csharp
Void SetResultFilePath(String filePath, String sKey)
```

**Parameters:**

- `filePath` (*String*)
- `sKey` (*String*)

#### SetResultFilePath

```csharp
Void SetResultFilePath(String filePath)
```

**Parameters:**

- `filePath` (*String*)

#### SetResultFilePath

```csharp
Void SetResultFilePath(AnsDispatchHolder source, String sKey)
```

**Parameters:**

- `source` (*AnsDispatchHolder*)
- `sKey` (*String*)

#### AddFilePath

```csharp
Void AddFilePath(String filePath, String sKey, String sResultKey)
```

**Parameters:**

- `filePath` (*String*)
- `sKey` (*String*)
- `sResultKey` (*String*)

#### AddFilePath

```csharp
Void AddFilePath(String filePath, String sKey)
```

**Parameters:**

- `filePath` (*String*)
- `sKey` (*String*)

#### AddFilePath

```csharp
Void AddFilePath(String filePath)
```

**Parameters:**

- `filePath` (*String*)

#### AppendUpStreamDataSources

```csharp
Void AppendUpStreamDataSources(DataSources up_stream)
```

**Parameters:**

- `up_stream` (*DataSources*)

#### SetDomainResultFilePath

```csharp
Void SetDomainResultFilePath(String filePath, String sKey, Int32 id)
```

**Parameters:**

- `filePath` (*String*)
- `sKey` (*String*)
- `id` (*Int32*)

#### SetDomainResultFilePath

```csharp
Void SetDomainResultFilePath(String filePath, Int32 id)
```

**Parameters:**

- `filePath` (*String*)
- `id` (*Int32*)

#### AddDomainFilePath

```csharp
Void AddDomainFilePath(String filePath, String sKey, Int32 id)
```

**Parameters:**

- `filePath` (*String*)
- `sKey` (*String*)
- `id` (*Int32*)

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### ResultFileKey

```csharp
String ResultFileKey { get; }
```

#### ResultFilePath

```csharp
String ResultFilePath { get; set; }
```
