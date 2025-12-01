---
uid: Ans.DataProcessing.Model
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

```python
Model(allowKeepFileOpen)
```

**Parameters:**

- `allowKeepFileOpen` (*bool*)

#### Constructor

```python
Model(dataSources, allowKeepFileOpen)
```

**Parameters:**

- `dataSources` (*DataSources*)
- `allowKeepFileOpen` (*bool*)

#### Constructor

```python
Model(resultPath, extension, allowKeepFileOpen)
```

**Parameters:**

- `resultPath` (*str*)
- `extension` (*str*)
- `allowKeepFileOpen` (*bool*)

#### Constructor

```python
Model(resultPath, allowKeepFileOpen)
```

**Parameters:**

- `resultPath` (*str*)
- `allowKeepFileOpen` (*bool*)

## Methods

#### SetResultFilePath

```python
obj.SetResultFilePath(filePath, sKey)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)

#### ReleaseStreams

```python
obj.ReleaseStreams()
```

#### CreateOperator

```python
result = obj.CreateOperator(opName, config)
```

**Parameters:**

- `opName` (*str*)
- `config` (*OperatorConfig* (optional))

**Returns:** *BaseOperator*

#### ToString

```python
result = obj.ToString()
```

**Returns:** *str*

#### GetNamedSelection

```python
result = obj.GetNamedSelection(name)
```

**Parameters:**

- `name` (*str*)

**Returns:** *Scoping*

## Properties

#### results

**Type:** *ModelsResults*

```python
# Get or set the property
value = obj.results
obj.results = new_value
```

#### DataSources

**Type:** *DataSources*

```python
# Get or set the property
value = obj.DataSources
obj.DataSources = new_value
```

#### TimeFreqSupport

**Type:** *TimeFreqSupport*

```python
# Get the property (read-only)
value = obj.TimeFreqSupport
```

#### TimeFreqSupportProvider

**Type:** *BaseOperator*

```python
# Get the property (read-only)
value = obj.TimeFreqSupportProvider
```

#### Mesh

**Type:** *MeshedRegion*

```python
# Get the property (read-only)
value = obj.Mesh
```

#### MeshProvider

**Type:** *BaseOperator*

```python
# Get the property (read-only)
value = obj.MeshProvider
```

#### ResultInfo

**Type:** *ResultInfo*

```python
# Get the property (read-only)
value = obj.ResultInfo
```

#### ResultInfoProvider

**Type:** *BaseOperator*

```python
# Get the property (read-only)
value = obj.ResultInfoProvider
```

#### ResultFilePath

**Type:** *str*

```python
# Get or set the property
value = obj.ResultFilePath
obj.ResultFilePath = new_value
```

#### StreamsProvider

**Type:** *Operator*

```python
# Get the property (read-only)
value = obj.StreamsProvider
```

#### AvailableNamedSelections

**Type:** *list*

```python
# Get the property (read-only)
value = obj.AvailableNamedSelections
```
