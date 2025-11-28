---
uid: Ans.DataProcessing.Model
title: Model
---

# Model Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Entity able to access the model's metadata and results thanks to the result file path

Model(allowKeepFileOpen: bool)
Model(dataSources: DataSources, allowKeepFileOpen: bool)
Model(resultPath: str, extension: str, allowKeepFileOpen: bool)
Model(resultPath: str, allowKeepFileOpen: bool)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Constructors

#### Constructor

```csharp
new Model(Boolean allowKeepFileOpen (optional))
```

**Parameters:**

- `allowKeepFileOpen` (*Boolean*)

#### Constructor

```csharp
new Model(DataSources dataSources, Boolean allowKeepFileOpen (optional))
```

**Parameters:**

- `dataSources` (*DataSources*)
- `allowKeepFileOpen` (*Boolean*)

#### Constructor

```csharp
new Model(String resultPath, String extension, Boolean allowKeepFileOpen (optional))
```

**Parameters:**

- `resultPath` (*String*)
- `extension` (*String*)
- `allowKeepFileOpen` (*Boolean*)

#### Constructor

```csharp
new Model(String resultPath, Boolean allowKeepFileOpen (optional))
```

**Parameters:**

- `resultPath` (*String*)
- `allowKeepFileOpen` (*Boolean*)

## Methods

#### SetResultFilePath

```csharp
Void SetResultFilePath(String filePath, String sKey)
```

**Parameters:**

- `filePath` (*String*)
- `sKey` (*String*)

#### ReleaseStreams

```csharp
Void ReleaseStreams()
```

#### CreateOperator

```csharp
BaseOperator CreateOperator(String opName, OperatorConfig config (optional))
```

**Parameters:**

- `opName` (*String*)
- `config` (*OperatorConfig*)

**Returns:** *BaseOperator*

#### ToString

```csharp
String ToString()
```

**Returns:** *String*

#### GetNamedSelection

```csharp
Scoping GetNamedSelection(String name)
```

**Parameters:**

- `name` (*String*)

**Returns:** *Scoping*

## Properties

#### results

```csharp
ModelsResults results { get; set; }
```

#### DataSources

```csharp
DataSources DataSources { get; set; }
```

#### TimeFreqSupport

```csharp
TimeFreqSupport TimeFreqSupport { get; }
```

#### TimeFreqSupportProvider

```csharp
BaseOperator TimeFreqSupportProvider { get; }
```

#### Mesh

```csharp
MeshedRegion Mesh { get; }
```

#### MeshProvider

```csharp
BaseOperator MeshProvider { get; }
```

#### ResultInfo

```csharp
ResultInfo ResultInfo { get; }
```

#### ResultInfoProvider

```csharp
BaseOperator ResultInfoProvider { get; }
```

#### ResultFilePath

```csharp
String ResultFilePath { get; set; }
```

#### StreamsProvider

```csharp
Operator StreamsProvider { get; }
```

#### AvailableNamedSelections

```csharp
IList`1 AvailableNamedSelections { get; }
```
