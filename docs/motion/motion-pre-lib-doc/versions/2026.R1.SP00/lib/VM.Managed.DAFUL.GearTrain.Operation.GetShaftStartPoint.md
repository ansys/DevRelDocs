# Class GetShaftStartPoint
<a id="VM_Managed_DAFUL_GearTrain_Operation_GetShaftStartPoint"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Gets shaft start point

```csharp
public class GetShaftStartPoint : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[GetShaftStartPoint](VM.Managed.DAFUL.GearTrain.Operation.GetShaftStartPoint.md)

#### Implements

IOperation

#### Inherited Members

OperationBase.g\_bRedrawKernel, 
OperationBase.g\_bVerify, 
OperationBase.g\_bSkipAddEvent, 
OperationBase.g\_bDupicateMsg, 
OperationBase.m\_bIsHistoryMerge, 
OperationBase.Execute\(\), 
OperationBase.PostExecute\(\), 
OperationBase.GetInformation\(XmlWriter\), 
OperationBase.Create\(string, View, object\), 
OperationBase.Create\(string, IDocument, object\), 
OperationBase.Create\(string, object\), 
OperationBase.Create\(string\), 
OperationBase.StartSession\(\), 
OperationBase.StartSession\(OperationBase, OperationBase.PostOperation\), 
OperationBase.StartSession\(OperationBase\), 
OperationBase.StartSessionAndWait\(\), 
OperationBase.StartSessionAndWait\(OperationBase, OperationBase.PostOperation\), 
OperationBase.StartSessionAndWait\(OperationBase\), 
OperationBase.Initialize\(OperationBase.ShowVerifyResult\), 
OperationBase.RecordJournal\(OperationBase\), 
OperationBase.UseSession\(string\), 
OperationBase.raise\_OnOperationStatusChanged\(object, OperationStatusEventArgs\), 
OperationBase.raise\_OnEndOperation\(object, EventArgs\), 
OperationBase.ClearCurrentMark\(string\), 
OperationBase.ClearCurrentMark\(IDocument\), 
OperationBase.ClearCurrentMark\(\), 
OperationBase.GlobalOverride, 
OperationBase.IsDoingThread, 
OperationBase.ExecuteMacro, 
OperationBase.SimStatus, 
OperationBase.Status, 
OperationBase.autoEvents, 
OperationBase.IsHistoryMerge, 
OperationBase.SkipClearTemporaryLinkContainer, 
OperationBase.PostExecuteClearTemporaryLinkContainer, 
OperationBase.SkipEndOperation, 
OperationBase.UseMacro, 
OperationBase.MarkStatus, 
OperationBase.UseThread, 
OperationBase.Name, 
OperationBase.ExecutableOnHold, 
OperationBase.Override, 
OperationBase.Parameter, 
OperationBase.View, 
OperationBase.Document, 
OperationBase.OnEndOperation, 
OperationBase.OnOperationStatusChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_Operation_GetShaftStartPoint__ctor_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Managed_CAD_Body_VM_Vector_VM_Vector_"></a> GetShaftStartPoint\(GearTrainDocument, Body, Vector, Vector\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.GetShaftStartPoint" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GetShaftStartPoint(GearTrainDocument gearTrainDocument, Body body, Vector seedPoint, Vector direction)
```

#### Parameters

`gearTrainDocument` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The geartrain document

`body` Body

The body

`seedPoint` Vector

The seed point

`direction` Vector

The direction

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_GetShaftStartPoint_MatchedPoint"></a> MatchedPoint

Gets the matched point

```csharp
public Vector MatchedPoint { get; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_Operation_GetShaftStartPoint_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_Operation_GetShaftStartPoint_Success"></a> Success

Gets the success flag

```csharp
public bool Success { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_GetShaftStartPoint_Execute"></a> Execute\(\)

Execute

```csharp
public override void Execute()
```

