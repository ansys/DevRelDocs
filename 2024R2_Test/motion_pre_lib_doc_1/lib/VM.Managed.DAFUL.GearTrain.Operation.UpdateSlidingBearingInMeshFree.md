# Class UpdateSlidingBearingInMeshFree

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Update Sliding Bearing In MeshFree

```csharp
public class UpdateSlidingBearingInMeshFree : UpdateSlidingBearingInFE, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[UpdateSlidingBearingInFE](VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInFE.md) ← 
[UpdateSlidingBearingInMeshFree](VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInMeshFree.md)

#### Implements

IOperation

#### Inherited Members

[UpdateSlidingBearingInFE.Execute\(\)](VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_UpdateSlidingBearingInFE\_Execute), 
[UpdateSlidingBearingInFE.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_UpdateSlidingBearingInFE\_GetInformation\_System\_Xml\_XmlWriter\_), 
[UpdateSlidingBearingInFE.Name](VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_UpdateSlidingBearingInFE\_Name), 
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

### UpdateSlidingBearingInMeshFree\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateSlidingBearingInMeshFree(string strBearingGeometryName, string strRBEName)
```

#### Parameters

`strBearingGeometryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string bearing geometry.

`strRBEName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string rbe.

### UpdateSlidingBearingInMeshFree\(Document3D, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateSlidingBearingInMeshFree(Document3D document3D, string strBearingGeometryName, string strRBEName)
```

#### Parameters

`document3D` Document3D

The document.

`strBearingGeometryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string bearing geometry.

`strRBEName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string rbe.

### UpdateSlidingBearingInMeshFree\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateSlidingBearingInMeshFree(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.


