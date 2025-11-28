---
uid: Ans.DataProcessing.Operator
title: Operator
---

# Operator Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Object used to create, transform and stream the data              
            '''''''''''''_________                
            "input1"  -> |operator| ->  "output1"
            "input2"  -> |''''''''| ->  "output2"		            
            '''''''''''''|________|

Operator(name: str)
Operator(name: str, input: object, config: OperatorConfig)
Operator(name: str, input: object, input2: object, config: OperatorConfig)
Operator(name: str, input: object, input2: object, input3: object, config: OperatorConfig)
Operator(name: str, input: object, input2: object, input3: object, input4: object, config: OperatorConfig)
Operator(id: Int64)
Operator(name: str, config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```csharp
new Operator(String name)
```

**Parameters:**

- `name` (*String*)

#### Constructor

```csharp
new Operator(String name, Object input, OperatorConfig config (optional))
```

**Parameters:**

- `name` (*String*)
- `input` (*Object*)
- `config` (*OperatorConfig*)

#### Constructor

```csharp
new Operator(String name, Object input, Object input2, OperatorConfig config (optional))
```

**Parameters:**

- `name` (*String*)
- `input` (*Object*)
- `input2` (*Object*)
- `config` (*OperatorConfig*)

#### Constructor

```csharp
new Operator(String name, Object input, Object input2, Object input3, OperatorConfig config (optional))
```

**Parameters:**

- `name` (*String*)
- `input` (*Object*)
- `input2` (*Object*)
- `input3` (*Object*)
- `config` (*OperatorConfig*)

#### Constructor

```csharp
new Operator(String name, Object input, Object input2, Object input3, Object input4, OperatorConfig config (optional))
```

**Parameters:**

- `name` (*String*)
- `input` (*Object*)
- `input2` (*Object*)
- `input3` (*Object*)
- `input4` (*Object*)
- `config` (*OperatorConfig*)

#### Constructor

```csharp
new Operator(Int64 id)
```

**Parameters:**

- `id` (*Int64*)

#### Constructor

```csharp
new Operator(String name, OperatorConfig config)
```

**Parameters:**

- `name` (*String*)
- `config` (*OperatorConfig*)

## Methods

#### GetOutputAsFieldsContainer

```csharp
FieldsContainer GetOutputAsFieldsContainer(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *FieldsContainer*

#### GetOutputAsScopingsContainer

```csharp
ScopingsContainer GetOutputAsScopingsContainer(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *ScopingsContainer*

#### GetOutputAsMaterialsContainer

```csharp
MaterialsContainer GetOutputAsMaterialsContainer(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *MaterialsContainer*

#### GetOutputAsField

```csharp
Field GetOutputAsField(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *Field*

#### GetOutputAsScoping

```csharp
Scoping GetOutputAsScoping(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *Scoping*

#### GetOutputAsString

```csharp
String GetOutputAsString(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *String*

#### GetOutputAsByteArray

```csharp
Byte[] GetOutputAsByteArray(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *Byte[]*

#### GetOutputAsInt

```csharp
Int32 GetOutputAsInt(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *Int32*

#### GetOutputAsDouble

```csharp
Double GetOutputAsDouble(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *Double*

#### GetOutputAsBool

```csharp
Boolean GetOutputAsBool(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *Boolean*

#### GetOutputAsTimeFreqSupport

```csharp
TimeFreqSupport GetOutputAsTimeFreqSupport(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *TimeFreqSupport*

#### GetOutputAsMeshesContainer

```csharp
MeshesContainer GetOutputAsMeshesContainer(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *MeshesContainer*

#### GetOutputAsMeshedRegion

```csharp
MeshedRegion GetOutputAsMeshedRegion(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *MeshedRegion*

#### GetOutputAsStreamsContainer

```csharp
StreamsContainer GetOutputAsStreamsContainer(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *StreamsContainer*

#### GetOutputAsResultInfo

```csharp
ResultInfo GetOutputAsResultInfo(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *ResultInfo*

#### GetOutputAsDataSources

```csharp
DataSources GetOutputAsDataSources(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *DataSources*

#### GetOutputAsPropertyField

```csharp
PropertyField GetOutputAsPropertyField(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *PropertyField*

#### GetOutputAsDataTree

```csharp
DataTree GetOutputAsDataTree(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *DataTree*

#### GetOutputAsWorkflow

```csharp
Workflow GetOutputAsWorkflow(Int32 i (optional))
```

**Parameters:**

- `i` (*Int32*)

**Returns:** *Workflow*
