---
uid: Ans.DataProcessing.Model
---

# Model Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

Entity able to access the model's metadata and results thanks to the result file path

## Example

```python
my_model = Ans.DataProcessing.Model(r"../.../file.rst")

my_model.TimeFreqSupport.NumberSets

my_model.MeshedRegion.NodeCount

my_model.MeshedRegion.ElementCount

my_model.ResultInfo.PhysicsType

disp_op = my_model.results.displacement()
```

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

Method `SetResultFilePath` change or set the result file path

```python
obj.SetResultFilePath(filePath, sKey)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)

#### ReleaseStreams

Method `ReleaseStreams` if the model was allowed to keep files open using streams (see constructors), this method closes the files.

```python
obj.ReleaseStreams()
```

#### CreateOperator

Method `CreateOperator` create an operator with its name and connect the datasources/streams to it. If plugins have been loaded, inputs and outputs APIs are available.

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

Method `GetNamedSelection` get the scoping related to the asked named selection

```python
result = obj.GetNamedSelection(name)
```

**Parameters:**

- `name` (*str*)

**Returns:** *Scoping*

## Properties

#### results

Access results provider of the model

**Type:** *ModelsResults*

```python
# Get or set the property
value = obj.results
obj.results = new_value
```

#### DataSources

Property `DataSources` containing the file paths

**Type:** *DataSources*

```python
# Get or set the property
value = obj.DataSources
obj.DataSources = new_value
```

#### TimeFreqSupport

Property `TimeFreqSupport` describes the time or frequency support of the model

**Type:** *TimeFreqSupport*

```python
# Get the property (read-only)
value = obj.TimeFreqSupport
```

#### TimeFreqSupportProvider

Property `TimeFreqSupportProvider` operator allowing to access the TimeFreqSupport

**Type:** *BaseOperator*

```python
# Get the property (read-only)
value = obj.TimeFreqSupportProvider
```

#### Mesh

Property `Mesh` contains spatial information of the model

**Type:** *MeshedRegion*

```python
# Get the property (read-only)
value = obj.Mesh
```

#### MeshProvider

Property `MeshProvider` operator allowing to access the MeshedRegion

**Type:** *BaseOperator*

```python
# Get the property (read-only)
value = obj.MeshProvider
```

#### ResultInfo

Property `ResultInfo` contains information about the analysis

**Type:** *ResultInfo*

```python
# Get the property (read-only)
value = obj.ResultInfo
```

#### ResultInfoProvider

Property `ResultInfoProvider` operator allowing to access the ResultInfo

**Type:** *BaseOperator*

```python
# Get the property (read-only)
value = obj.ResultInfoProvider
```

#### ResultFilePath

Property `ResultFilePath` path to the result file registered in the data sources

**Type:** *str*

```python
# Get or set the property
value = obj.ResultFilePath
obj.ResultFilePath = new_value
```

#### StreamsProvider

Property `StreamsProvider` operator allowing to access the Streams containing the DataSources and allowing to keep some data in cache

**Type:** *Operator*

```python
# Get the property (read-only)
value = obj.StreamsProvider
```

#### AvailableNamedSelections

Property `AvailableNamedSelections` list of named selections' names availables in the mesh

**Type:** *list*

```python
# Get the property (read-only)
value = obj.AvailableNamedSelections
```
