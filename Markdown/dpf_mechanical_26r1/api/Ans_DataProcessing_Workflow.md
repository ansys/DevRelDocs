---
uid: Ans.DataProcessing.Workflow
title: Workflow
---

# Workflow Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Container of fields.
            A workflow is a black box containing operators and exposing only the necessary operator's
            inputs and outputs to compute a given algorithm

Workflow()
Workflow(wf_ptr: IntPtr)
Workflow(id: Int32)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new Workflow()
```

#### Constructor

```csharp
new Workflow(IntPtr wf_ptr)
```

**Parameters:**

- `wf_ptr` (*IntPtr*)

#### Constructor

```csharp
new Workflow(Int32 id)
```

**Parameters:**

- `id` (*Int32*)

## Methods

#### GetRecordedId

```csharp
Int32 GetRecordedId()
```

**Returns:** *Int32*

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

#### Record

```csharp
Int32 Record(String identifier, Boolean transferOwnership)
```

**Parameters:**

- `identifier` (*String*)
- `transferOwnership` (*Boolean*)

**Returns:** *Int32*

#### Derivate

```csharp
Void Derivate(String pinName, String variableName (optional))
```

**Parameters:**

- `pinName` (*String*)
- `variableName` (*String*)

#### WriteToFile

```csharp
Void WriteToFile(String filePath)
```

**Parameters:**

- `filePath` (*String*)

#### LoadFromFile

```csharp
Void LoadFromFile(String filePath)
```

**Parameters:**

- `filePath` (*String*)

#### Add

```csharp
Void Add(BaseOperator op)
```

**Parameters:**

- `op` (*BaseOperator*)

#### Add

```csharp
Void Add(IList`1 ops)
```

**Parameters:**

- `ops` (*IList`1*)

#### GetNumberOfOperators

```csharp
Int32 GetNumberOfOperators()
```

**Returns:** *Int32*

#### SetInputName

```csharp
Void SetInputName(BaseOperator op, Int32 pin, String name)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*Int32*)
- `name` (*String*)

#### SetOutputName

```csharp
Void SetOutputName(Object data, String name)
```

**Parameters:**

- `data` (*Object*)
- `name` (*String*)

#### SetOutputName

```csharp
Void SetOutputName(BaseOperator op, Int32 pin, String name)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*Int32*)
- `name` (*String*)

#### SetOutputChart

```csharp
Void SetOutputChart(BaseOperator op, Int32 pin, ChartType chart (optional), String chart_label (optional))
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*Int32*)
- `chart` (*ChartType*)
- `chart_label` (*String*)

#### SetOutputChart

```csharp
Void SetOutputChart(BaseOperator op, ChartType chart (optional), String chart_label (optional))
```

**Parameters:**

- `op` (*BaseOperator*)
- `chart` (*ChartType*)
- `chart_label` (*String*)

#### SetOutputChart

```csharp
Void SetOutputChart(LinkableOutput`2 pin, ChartType chart (optional), String chart_label (optional))
```

**Parameters:**

- `pin` (*LinkableOutput`2*)
- `chart` (*ChartType*)
- `chart_label` (*String*)

#### SetOutputChart

```csharp
Void SetOutputChart(LinkableOutput`1 pin, ChartType chart (optional), String chart_label (optional))
```

**Parameters:**

- `pin` (*LinkableOutput`1*)
- `chart` (*ChartType*)
- `chart_label` (*String*)

#### SetOutputChart

```csharp
Void SetOutputChart(LinkableOutput`1 pin, ChartType chart (optional), String chart_label (optional))
```

**Parameters:**

- `pin` (*LinkableOutput`1*)
- `chart` (*ChartType*)
- `chart_label` (*String*)

#### SetOutputContour

```csharp
Void SetOutputContour(BaseOperator op, Int32 pin, GFXContourType gfxCntrType (optional))
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*Int32*)
- `gfxCntrType` (*GFXContourType*)

#### SetOutputContour

```csharp
Void SetOutputContour(BaseOperator op, GFXContourType gfxCntrType (optional))
```

**Parameters:**

- `op` (*BaseOperator*)
- `gfxCntrType` (*GFXContourType*)

#### SetOutputContour

```csharp
Void SetOutputContour(LinkableOutput`2 pin, GFXContourType gfxCntrType (optional))
```

**Parameters:**

- `pin` (*LinkableOutput`2*)
- `gfxCntrType` (*GFXContourType*)

#### SetOutputContour

```csharp
Void SetOutputContour(LinkableOutput`1 pin, GFXContourType gfxCntrType (optional))
```

**Parameters:**

- `pin` (*LinkableOutput`1*)
- `gfxCntrType` (*GFXContourType*)

#### SetOutputContour

```csharp
Void SetOutputContour(LinkableOutput`1 pin, GFXContourType gfxCntrType (optional))
```

**Parameters:**

- `pin` (*LinkableOutput`1*)
- `gfxCntrType` (*GFXContourType*)

#### SetOutputContour

```csharp
Void SetOutputContour(FieldsContainer fields, GFXContourType gfxCntrType (optional))
```

**Parameters:**

- `fields` (*FieldsContainer*)
- `gfxCntrType` (*GFXContourType*)

#### SetOutputContour

```csharp
Void SetOutputContour(Field field, GFXContourType gfxCntrType (optional))
```

**Parameters:**

- `field` (*Field*)
- `gfxCntrType` (*GFXContourType*)

#### SetOutputWarpField

```csharp
Void SetOutputWarpField(BaseOperator op, Int32 pin)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*Int32*)

#### SetOutputWarpField

```csharp
Void SetOutputWarpField(BaseOperator op)
```

**Parameters:**

- `op` (*BaseOperator*)

#### SetOutputWarpField

```csharp
Void SetOutputWarpField(LinkableOutput`2 pin)
```

**Parameters:**

- `pin` (*LinkableOutput`2*)

#### SetOutputWarpField

```csharp
Void SetOutputWarpField(LinkableOutput`1 pin)
```

**Parameters:**

- `pin` (*LinkableOutput`1*)

#### SetOutputWarpField

```csharp
Void SetOutputWarpField(LinkableOutput`1 pin)
```

**Parameters:**

- `pin` (*LinkableOutput`1*)

#### SetOutputWarpField

```csharp
Void SetOutputWarpField(FieldsContainer fields)
```

**Parameters:**

- `fields` (*FieldsContainer*)

#### SetOutputWarpField

```csharp
Void SetOutputWarpField(Field field)
```

**Parameters:**

- `field` (*Field*)

#### SetOutputMesh

```csharp
Void SetOutputMesh(BaseOperator op, Int32 pin)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*Int32*)

#### SetOutputMesh

```csharp
Void SetOutputMesh(BaseOperator op)
```

**Parameters:**

- `op` (*BaseOperator*)

#### SetOutputMesh

```csharp
Void SetOutputMesh(LinkableOutput`2 pin)
```

**Parameters:**

- `pin` (*LinkableOutput`2*)

#### SetOutputMesh

```csharp
Void SetOutputMesh(LinkableOutput`1 pin)
```

**Parameters:**

- `pin` (*LinkableOutput`1*)

#### SetOutputMesh

```csharp
Void SetOutputMesh(LinkableOutput`1 pin)
```

**Parameters:**

- `pin` (*LinkableOutput`1*)

#### SetOutputMesh

```csharp
Void SetOutputMesh(MeshesContainer meshes)
```

**Parameters:**

- `meshes` (*MeshesContainer*)

#### SetOutputMesh

```csharp
Void SetOutputMesh(MeshedRegion mesh)
```

**Parameters:**

- `mesh` (*MeshedRegion*)

#### SetInputTime

```csharp
Void SetInputTime(BaseOperator op, Int32 pin)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*Int32*)

#### InstantiateOnRemote

```csharp
Workflow InstantiateOnRemote(String ip, Int32 port)
```

**Parameters:**

- `ip` (*String*)
- `port` (*Int32*)

**Returns:** *Workflow*

#### SetInputMeshScoping

```csharp
Void SetInputMeshScoping(BaseOperator op, Int32 pin)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*Int32*)

#### SetInputBodyScoping

```csharp
Void SetInputBodyScoping(BaseOperator op, Int32 pin)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*Int32*)

#### ConnectWith

```csharp
Void ConnectWith(Workflow leftWorkflow)
```

**Parameters:**

- `leftWorkflow` (*Workflow*)

#### ConnectWith

```csharp
Void ConnectWith(Workflow leftWorkflow, IDictionary`2 outputsToInputs)
```

**Parameters:**

- `leftWorkflow` (*Workflow*)
- `outputsToInputs` (*IDictionary`2*)

#### Connect

```csharp
Void Connect(String inputPinName, BaseOperator value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*BaseOperator*)

#### Connect

```csharp
Void Connect(String inputPinName, Field value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*Field*)

#### Connect

```csharp
Void Connect(String inputPinName, BaseCollection value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*BaseCollection*)

#### Connect

```csharp
Void Connect(String inputPinName, Int32 value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*Int32*)

#### Connect

```csharp
Void Connect(String inputPinName, Boolean value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*Boolean*)

#### Connect

```csharp
Void Connect(String inputPinName, Double value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*Double*)

#### Connect

```csharp
Void Connect(String inputPinName, String value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*String*)

#### Connect

```csharp
Void Connect(String inputPinName, Scoping value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*Scoping*)

#### Connect

```csharp
Void Connect(String inputPinName, DataSources value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*DataSources*)

#### Connect

```csharp
Void Connect(String inputPinName, MeshedRegion value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*MeshedRegion*)

#### Connect

```csharp
Void Connect(String inputPinName, PropertyField value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*PropertyField*)

#### Connect

```csharp
Void Connect(String inputPinName, TimeFreqSupport value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*TimeFreqSupport*)

#### Connect

```csharp
Void Connect(String inputPinName, CyclicSupport value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*CyclicSupport*)

#### Connect

```csharp
Void Connect(String inputPinName, IList`1 value)
```

**Parameters:**

- `inputPinName` (*String*)
- `value` (*IList`1*)

#### GetOutputAsFieldsContainer

```csharp
FieldsContainer GetOutputAsFieldsContainer(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *FieldsContainer*

#### GetOutputAsScopingsContainer

```csharp
ScopingsContainer GetOutputAsScopingsContainer(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *ScopingsContainer*

#### GetOutputAsDataSources

```csharp
DataSources GetOutputAsDataSources(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *DataSources*

#### GetOutputAsField

```csharp
Field GetOutputAsField(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *Field*

#### GetOutputAsScoping

```csharp
Scoping GetOutputAsScoping(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *Scoping*

#### GetOutputAsCyclicSupport

```csharp
CyclicSupport GetOutputAsCyclicSupport(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *CyclicSupport*

#### GetOutputAsString

```csharp
String GetOutputAsString(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *String*

#### GetOutputAsInt

```csharp
Int32 GetOutputAsInt(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *Int32*

#### GetOutputAsDouble

```csharp
Double GetOutputAsDouble(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *Double*

#### GetOutputAsTimeFreqSupport

```csharp
TimeFreqSupport GetOutputAsTimeFreqSupport(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *TimeFreqSupport*

#### GetOutputAsMeshesContainer

```csharp
MeshesContainer GetOutputAsMeshesContainer(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *MeshesContainer*

#### GetOutputAsMeshedRegion

```csharp
MeshedRegion GetOutputAsMeshedRegion(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *MeshedRegion*

#### GetOutputAsResultInfo

```csharp
ResultInfo GetOutputAsResultInfo(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *ResultInfo*

#### GetOutputAsPropertyField

```csharp
PropertyField GetOutputAsPropertyField(String outputPinName)
```

**Parameters:**

- `outputPinName` (*String*)

**Returns:** *PropertyField*

#### HasTag

```csharp
Boolean HasTag(WorkFlowTags tag)
```

**Parameters:**

- `tag` (*WorkFlowTags*)

**Returns:** *Boolean*

#### AddTag

```csharp
Void AddTag(WorkFlowTags tag)
```

**Parameters:**

- `tag` (*WorkFlowTags*)

#### WriteToGraphViz

```csharp
Void WriteToGraphViz(String filename)
```

**Parameters:**

- `filename` (*String*)

#### FromTemplate

```csharp
Workflow FromTemplate(String template_name)
```

**Parameters:**

- `template_name` (*String*)

**Returns:** *Workflow*

#### TemplateExists

```csharp
Boolean TemplateExists(String template_name)
```

**Parameters:**

- `template_name` (*String*)

**Returns:** *Boolean*

#### discoverAllOperators

```csharp
Void discoverAllOperators()
```

## Properties

#### Id

```csharp
Int64 Id { get; }
```

#### Operators

```csharp
IList`1 Operators { get; }
```

#### Inputs

```csharp
IList`1 Inputs { get; }
```

#### Outputs

```csharp
IList`1 Outputs { get; }
```
