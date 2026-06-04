---
uid: Ans.DataProcessing.Model
---

# *class* Model(resultPath: str, extension: str, allowKeepFileOpen: bool = True)

Entity able to access the model's metadata and results thanks to the result file path

**Parameters:**

* **resultPath**
* **extension**
* **allowKeepFileOpen**

**Example:**

```python
my_model = Ans.DataProcessing.Model(r"../.../file.rst")

my_model.TimeFreqSupport.NumberSets

my_model.MeshedRegion.NodeCount

my_model.MeshedRegion.ElementCount

my_model.ResultInfo.PhysicsType

disp_op = my_model.results.displacement()
```

## Methods

#### CreateOperator(opName: str, config: OperatorConfig = None) -> BaseOperator

Method `CreateOperator` create an operator with its name and connect the datasources/streams to it. If plugins have been loaded, inputs and outputs APIs are available.

**Parameters:**

* **opName** - 
* **config** (*optional*) - (optional) used to set how the operator will run

#### GetNamedSelection(name: str) -> Scoping

Method `GetNamedSelection` get the scoping related to the asked named selection

**Parameters:**

* **name**

#### ReleaseStreams() -> None

Method `ReleaseStreams` if the model was allowed to keep files open using streams (see constructors), this method closes the files.

#### SetResultFilePath(filePath: str, sKey: str) -> None

Method `SetResultFilePath` change or set the result file path

**Parameters:**

* **filePath**
* **sKey**

#### ToString() -> str

## Properties

#### *property* results: ModelsResults

Access results provider of the model

*get/set*

#### *property* DataSources: DataSources

Property `DataSources` containing the file paths

*get/set*

#### *property* TimeFreqSupport: TimeFreqSupport

Property `TimeFreqSupport` describes the time or frequency support of the model

*get*

#### *property* TimeFreqSupportProvider: BaseOperator

Property `TimeFreqSupportProvider` operator allowing to access the TimeFreqSupport

*get*

#### *property* Mesh: MeshedRegion

Property `Mesh` contains spatial information of the model

*get*

#### *property* MeshProvider: BaseOperator

Property `MeshProvider` operator allowing to access the MeshedRegion

*get*

#### *property* ResultInfo: ResultInfo

Property `ResultInfo` contains information about the analysis

*get*

#### *property* ResultInfoProvider: BaseOperator

Property `ResultInfoProvider` operator allowing to access the ResultInfo

*get*

#### *property* ResultFilePath: str

Property `ResultFilePath` path to the result file registered in the data sources

*get/set*

#### *property* StreamsProvider: Operator

Property `StreamsProvider` operator allowing to access the Streams containing the DataSources and allowing to keep some data in cache

*get*

#### *property* AvailableNamedSelections: list

Property `AvailableNamedSelections` list of named selections' names availables in the mesh

*get*
