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

```python
Workflow()
```

#### Constructor

```python
Workflow(wf_ptr)
```

**Parameters:**

- `wf_ptr` (*IntPtr*)

#### Constructor

```python
Workflow(id)
```

**Parameters:**

- `id` (*int*)

## Methods

#### GetRecordedId

```python
result = obj.GetRecordedId()
```

**Returns:** *int*

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

#### Record

```python
result = obj.Record(identifier, transferOwnership)
```

**Parameters:**

- `identifier` (*str*)
- `transferOwnership` (*bool*)

**Returns:** *int*

#### Derivate

```python
obj.Derivate(pinName, variableName)
```

**Parameters:**

- `pinName` (*str*)
- `variableName` (*str* (optional))

#### WriteToFile

```python
obj.WriteToFile(filePath)
```

**Parameters:**

- `filePath` (*str*)

#### LoadFromFile

```python
obj.LoadFromFile(filePath)
```

**Parameters:**

- `filePath` (*str*)

#### Add

```python
obj.Add(op)
```

**Parameters:**

- `op` (*BaseOperator*)

#### Add

```python
obj.Add(ops)
```

**Parameters:**

- `ops` (*list*)

#### GetNumberOfOperators

```python
result = obj.GetNumberOfOperators()
```

**Returns:** *int*

#### SetInputName

```python
obj.SetInputName(op, pin, name)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*int*)
- `name` (*str*)

#### SetOutputName

```python
obj.SetOutputName(data, name)
```

**Parameters:**

- `data` (*object*)
- `name` (*str*)

#### SetOutputName

```python
obj.SetOutputName(op, pin, name)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*int*)
- `name` (*str*)

#### SetOutputChart

```python
obj.SetOutputChart(op, pin, chart, chart_label)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*int*)
- `chart` (*ChartType* (optional))
- `chart_label` (*str* (optional))

#### SetOutputChart

```python
obj.SetOutputChart(op, chart, chart_label)
```

**Parameters:**

- `op` (*BaseOperator*)
- `chart` (*ChartType* (optional))
- `chart_label` (*str* (optional))

#### SetOutputChart

```python
obj.SetOutputChart(pin, chart, chart_label)
```

**Parameters:**

- `pin` (*LinkableOutput*)
- `chart` (*ChartType* (optional))
- `chart_label` (*str* (optional))

#### SetOutputChart

```python
obj.SetOutputChart(pin, chart, chart_label)
```

**Parameters:**

- `pin` (*LinkableOutput*)
- `chart` (*ChartType* (optional))
- `chart_label` (*str* (optional))

#### SetOutputChart

```python
obj.SetOutputChart(pin, chart, chart_label)
```

**Parameters:**

- `pin` (*LinkableOutput*)
- `chart` (*ChartType* (optional))
- `chart_label` (*str* (optional))

#### SetOutputContour

```python
obj.SetOutputContour(op, pin, gfxCntrType)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*int*)
- `gfxCntrType` (*GFXContourType* (optional))

#### SetOutputContour

```python
obj.SetOutputContour(op, gfxCntrType)
```

**Parameters:**

- `op` (*BaseOperator*)
- `gfxCntrType` (*GFXContourType* (optional))

#### SetOutputContour

```python
obj.SetOutputContour(pin, gfxCntrType)
```

**Parameters:**

- `pin` (*LinkableOutput*)
- `gfxCntrType` (*GFXContourType* (optional))

#### SetOutputContour

```python
obj.SetOutputContour(pin, gfxCntrType)
```

**Parameters:**

- `pin` (*LinkableOutput*)
- `gfxCntrType` (*GFXContourType* (optional))

#### SetOutputContour

```python
obj.SetOutputContour(pin, gfxCntrType)
```

**Parameters:**

- `pin` (*LinkableOutput*)
- `gfxCntrType` (*GFXContourType* (optional))

#### SetOutputContour

```python
obj.SetOutputContour(fields, gfxCntrType)
```

**Parameters:**

- `fields` (*FieldsContainer*)
- `gfxCntrType` (*GFXContourType* (optional))

#### SetOutputContour

```python
obj.SetOutputContour(field, gfxCntrType)
```

**Parameters:**

- `field` (*Field*)
- `gfxCntrType` (*GFXContourType* (optional))

#### SetOutputWarpField

```python
obj.SetOutputWarpField(op, pin)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*int*)

#### SetOutputWarpField

```python
obj.SetOutputWarpField(op)
```

**Parameters:**

- `op` (*BaseOperator*)

#### SetOutputWarpField

```python
obj.SetOutputWarpField(pin)
```

**Parameters:**

- `pin` (*LinkableOutput*)

#### SetOutputWarpField

```python
obj.SetOutputWarpField(pin)
```

**Parameters:**

- `pin` (*LinkableOutput*)

#### SetOutputWarpField

```python
obj.SetOutputWarpField(pin)
```

**Parameters:**

- `pin` (*LinkableOutput*)

#### SetOutputWarpField

```python
obj.SetOutputWarpField(fields)
```

**Parameters:**

- `fields` (*FieldsContainer*)

#### SetOutputWarpField

```python
obj.SetOutputWarpField(field)
```

**Parameters:**

- `field` (*Field*)

#### SetOutputMesh

```python
obj.SetOutputMesh(op, pin)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*int*)

#### SetOutputMesh

```python
obj.SetOutputMesh(op)
```

**Parameters:**

- `op` (*BaseOperator*)

#### SetOutputMesh

```python
obj.SetOutputMesh(pin)
```

**Parameters:**

- `pin` (*LinkableOutput*)

#### SetOutputMesh

```python
obj.SetOutputMesh(pin)
```

**Parameters:**

- `pin` (*LinkableOutput*)

#### SetOutputMesh

```python
obj.SetOutputMesh(pin)
```

**Parameters:**

- `pin` (*LinkableOutput*)

#### SetOutputMesh

```python
obj.SetOutputMesh(meshes)
```

**Parameters:**

- `meshes` (*MeshesContainer*)

#### SetOutputMesh

```python
obj.SetOutputMesh(mesh)
```

**Parameters:**

- `mesh` (*MeshedRegion*)

#### SetInputTime

```python
obj.SetInputTime(op, pin)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*int*)

#### InstantiateOnRemote

```python
result = obj.InstantiateOnRemote(ip, port)
```

**Parameters:**

- `ip` (*str*)
- `port` (*int*)

**Returns:** *Workflow*

#### SetInputMeshScoping

```python
obj.SetInputMeshScoping(op, pin)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*int*)

#### SetInputBodyScoping

```python
obj.SetInputBodyScoping(op, pin)
```

**Parameters:**

- `op` (*BaseOperator*)
- `pin` (*int*)

#### ConnectWith

```python
obj.ConnectWith(leftWorkflow)
```

**Parameters:**

- `leftWorkflow` (*Workflow*)

#### ConnectWith

```python
obj.ConnectWith(leftWorkflow, outputsToInputs)
```

**Parameters:**

- `leftWorkflow` (*Workflow*)
- `outputsToInputs` (*dict*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*BaseOperator*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*Field*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*BaseCollection*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*int*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*bool*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*float*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*str*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*Scoping*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*DataSources*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*MeshedRegion*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*PropertyField*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*TimeFreqSupport*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*CyclicSupport*)

#### Connect

```python
obj.Connect(inputPinName, value)
```

**Parameters:**

- `inputPinName` (*str*)
- `value` (*list*)

#### GetOutputAsFieldsContainer

```python
result = obj.GetOutputAsFieldsContainer(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *FieldsContainer*

#### GetOutputAsScopingsContainer

```python
result = obj.GetOutputAsScopingsContainer(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *ScopingsContainer*

#### GetOutputAsDataSources

```python
result = obj.GetOutputAsDataSources(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *DataSources*

#### GetOutputAsField

```python
result = obj.GetOutputAsField(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *Field*

#### GetOutputAsScoping

```python
result = obj.GetOutputAsScoping(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *Scoping*

#### GetOutputAsCyclicSupport

```python
result = obj.GetOutputAsCyclicSupport(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *CyclicSupport*

#### GetOutputAsString

```python
result = obj.GetOutputAsString(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *str*

#### GetOutputAsInt

```python
result = obj.GetOutputAsInt(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *int*

#### GetOutputAsDouble

```python
result = obj.GetOutputAsDouble(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *float*

#### GetOutputAsTimeFreqSupport

```python
result = obj.GetOutputAsTimeFreqSupport(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *TimeFreqSupport*

#### GetOutputAsMeshesContainer

```python
result = obj.GetOutputAsMeshesContainer(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *MeshesContainer*

#### GetOutputAsMeshedRegion

```python
result = obj.GetOutputAsMeshedRegion(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *MeshedRegion*

#### GetOutputAsResultInfo

```python
result = obj.GetOutputAsResultInfo(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *ResultInfo*

#### GetOutputAsPropertyField

```python
result = obj.GetOutputAsPropertyField(outputPinName)
```

**Parameters:**

- `outputPinName` (*str*)

**Returns:** *PropertyField*

#### HasTag

```python
result = obj.HasTag(tag)
```

**Parameters:**

- `tag` (*WorkFlowTags*)

**Returns:** *bool*

#### AddTag

```python
obj.AddTag(tag)
```

**Parameters:**

- `tag` (*WorkFlowTags*)

#### WriteToGraphViz

```python
obj.WriteToGraphViz(filename)
```

**Parameters:**

- `filename` (*str*)

#### FromTemplate

```python
result = obj.FromTemplate(template_name)
```

**Parameters:**

- `template_name` (*str*)

**Returns:** *Workflow*

#### TemplateExists

```python
result = obj.TemplateExists(template_name)
```

**Parameters:**

- `template_name` (*str*)

**Returns:** *bool*

#### discoverAllOperators

```python
obj.discoverAllOperators()
```

## Properties

#### Id

**Type:** *int*

```python
# Get the property (read-only)
value = obj.Id
```

#### Operators

**Type:** *list*

```python
# Get the property (read-only)
value = obj.Operators
```

#### Inputs

**Type:** *list*

```python
# Get the property (read-only)
value = obj.Inputs
```

#### Outputs

**Type:** *list*

```python
# Get the property (read-only)
value = obj.Outputs
```
