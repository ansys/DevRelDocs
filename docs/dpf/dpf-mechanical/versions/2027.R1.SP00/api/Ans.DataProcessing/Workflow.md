---
uid: Ans.DataProcessing.Workflow
---

# *class* Workflow(id: int)

Container of fields.

A workflow is a black box containing operators and exposing only the necessary operator's

inputs and outputs to compute a given algorithm

**Parameters:**

* **id**

**Example:**

```python
disp_op = dpf.operators.result.displacement()

max_fc_op = dpf.operators.min_max.min_max_fc(disp_op)

workfow = dpf.Workflow()

workfow.Add(disp_op)

workfow.Add(max_fc_op)

workfow.SetInputName(disp_op, 4, "data_sources")

workfow.SetOutputName(max_fc_op, 0, "min")

workfow.SetOutputName(max_fc_op, 1, "max")

workfow.connect("data_sources", my_data_sources)

min = workfow.GetOutputAsField("min")

max = workfow.GetOutputAsField("max")
```

## Methods

#### Add(op: BaseOperator) -> None

Method `Add` adds an Operator to the list of operators in the workflow.

You do not need to add all operators to the workflow. The list of operators is mostly used

to compute progress while a workflow is running.

**Parameters:**

* **op**

#### AddTag(tag: WorkFlowTags) -> None

**Parameters:**

* **tag**

#### Connect(inputPinName: str, value: BaseOperator) -> None

**Parameters:**

* **inputPinName**
* **value**

#### ConnectWith(leftWorkflow: Workflow, outputsToInputs: dict) -> None

**Parameters:**

* **leftWorkflow**
* **outputsToInputs**

#### Derivate(pinName: str, variableName: str = all) -> None

**Parameters:**

* **pinName**
* **variableName** (*optional*)

#### FromTemplate(template_name: str) -> Workflow

**Parameters:**

* **template_name**

#### GetNumberOfOperators() -> int

#### GetOutputAsAny(outputPinName: str) -> Any

**Parameters:**

* **outputPinName**

#### GetOutputAsCyclicSupport(outputPinName: str) -> CyclicSupport

**Parameters:**

* **outputPinName**

#### GetOutputAsDataSources(outputPinName: str) -> DataSources

**Parameters:**

* **outputPinName**

#### GetOutputAsDouble(outputPinName: str) -> float

**Parameters:**

* **outputPinName**

#### GetOutputAsField(outputPinName: str) -> Field

**Parameters:**

* **outputPinName**

#### GetOutputAsFieldsContainer(outputPinName: str) -> FieldsContainer

**Parameters:**

* **outputPinName**

#### GetOutputAsGenericDataContainer(outputPinName: str) -> GenericDataContainer

**Parameters:**

* **outputPinName**

#### GetOutputAsInt(outputPinName: str) -> int

**Parameters:**

* **outputPinName**

#### GetOutputAsMeshedRegion(outputPinName: str) -> MeshedRegion

**Parameters:**

* **outputPinName**

#### GetOutputAsMeshesContainer(outputPinName: str) -> MeshesContainer

**Parameters:**

* **outputPinName**

#### GetOutputAsPropertyField(outputPinName: str) -> PropertyField

**Parameters:**

* **outputPinName**

#### GetOutputAsResultInfo(outputPinName: str) -> ResultInfo

**Parameters:**

* **outputPinName**

#### GetOutputAsScoping(outputPinName: str) -> Scoping

**Parameters:**

* **outputPinName**

#### GetOutputAsScopingsContainer(outputPinName: str) -> ScopingsContainer

**Parameters:**

* **outputPinName**

#### GetOutputAsString(outputPinName: str) -> str

**Parameters:**

* **outputPinName**

#### GetOutputAsStringField(outputPinName: str) -> StringField

**Parameters:**

* **outputPinName**

#### GetOutputAsTimeFreqSupport(outputPinName: str) -> TimeFreqSupport

**Parameters:**

* **outputPinName**

#### GetRecordedId() -> int

#### HasTag(tag: WorkFlowTags) -> bool

**Parameters:**

* **tag**

#### InstantiateOnRemote(ip: str, port: int) -> Workflow

**Parameters:**

* **ip**
* **port**

#### LoadFromFile(filePath: str) -> None

**Parameters:**

* **filePath**

#### Record(identifier: str, transferOwnership: bool) -> int

Add the workflow to DPF's internal registry with an id returned by this method.

The workflow can be recovered by wf = Workflow(id)

**Parameters:**

* **identifier** - name given to the workflow
* **transferOwnership** - if the owner ship is not transfered, the worflow is removed from the internal registry

as soon as the workflow has been recovered by its id

#### SetInputBodyScoping(op: BaseOperator, pin: int) -> None

**Parameters:**

* **op**
* **pin**

#### SetInputMeshScoping(op: BaseOperator, pin: int) -> None

**Parameters:**

* **op**
* **pin**

#### SetInputName(op: BaseOperator, pin: int, name: str) -> None

Method `SetInputName` exposes an input using its name. You can then connect inputs using the input name on the given operator.

**Parameters:**

* **op** - Operator where the input to be connected is
* **pin** - Pin number on the Operator "op" to connect. Printing the operator or checking out the documentation will help.
* **name** - Custom name to give to the input

#### SetInputTime(op: BaseOperator, pin: int) -> None

**Parameters:**

* **op**
* **pin**

#### SetOutputChart(op: BaseOperator, pin: int, chart: ChartType = Curve, chart_label: str = None) -> None

**Parameters:**

* **op**
* **pin**
* **chart** (*optional*)
* **chart_label** (*optional*)

#### SetOutputContour(op: BaseOperator, pin: int, gfxCntrType: GFXContourType = FENodalScoping) -> None

Method `SetOutputContour` exposes an output as "contour".

This contour output can be requested and computed afterwards to be plotted.

**Parameters:**

* **op** - Operator where the output to request is
* **pin** - Pin number on the Operator "op" to request. Printing the Operator or checking out the documentation will help.
* **gfxCntrType** (*optional*)

#### SetOutputMesh(op: BaseOperator, pin: int) -> None

Method `SetOutputMesh` exposes an output as "mesh".

This mesh (which should be a MehedRegion or a MeshesContainer) output can be requested and computed afterwards to be used as a mesh to plot a contour on.

**Parameters:**

* **op** - Operator where the output to request is
* **pin** - Pin number on the Operator "op" to request. Printing the Operator or checking out the documentation will help.

#### SetOutputName(op: BaseOperator, pin: int, name: str) -> None

Method `SetOutputName` exposes an output by its name so that you can request the computed outputs of the given operator

using the output name aftewards.

**Parameters:**

* **op** - Operator where the output to request is
* **pin** - Pin number on the Operator "op" to request. Printing the Operator or checking out the documentation will help.
* **name** - Custom name to give to the output

#### SetOutputWarpField(op: BaseOperator, pin: int) -> None

Method `SetOutputWarpField` exposes an output as "warp".

This warping output can be requested and computed afterwards to be used as warping (or deformed shape) of a contour.

**Parameters:**

* **op** - Operator where the output to request is
* **pin** - Pin number on the Operator "op" to request. Printing the Operator or checking out the documentation will help.

#### TemplateExists(template_name: str) -> bool

**Parameters:**

* **template_name**

#### WriteToFile(filePath: str) -> None

**Parameters:**

* **filePath**

#### WriteToGraphViz(filename: str) -> None

**Parameters:**

* **filename**

#### discoverAllOperators() -> None

## Properties

#### *property* Id: int

*get*

#### *property* Operators: list

Property `Operators` returns the list of Operators added with the method Workflow.Add

*get*

#### *property* Inputs: list

Property `Inputs` returns the list of input names that have been exposed with the method Workflow.SetInputName

and its derivates (Workflow.SetInputMeshScoping, Workflow.SetInputBodyScoping...)

*get*

#### *property* Outputs: list

Property `Outputs` returns the list of output names that have been exposed with the method Workflow.SetOutputName

and its derivates (Workflow.SetOutputChart, Workflow.SetOutputContour, Workflow.SetOutputWarpField...)

*get*
