#  Class UpdateBearingInMeshFree

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Bearing MeshFree Operation

```csharp
public class UpdateBearingInMeshFree : UpdateBearingInFE, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[OperationInHiddenDocument](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md) ← 
[UpdateBearingInFE](VM.Managed.DAFUL.GearTrain.Operation.UpdateBearingInFE.md) ← 
[UpdateBearingInMeshFree](VM.Managed.DAFUL.GearTrain.Operation.UpdateBearingInMeshFree.md)

#### Implements

IOperation

#### Inherited Members

[UpdateBearingInFE.Execute\(\)](VM.Managed.DAFUL.GearTrain.Operation.UpdateBearingInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_UpdateBearingInFE\_Execute), 
[UpdateBearingInFE.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.GearTrain.Operation.UpdateBearingInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_UpdateBearingInFE\_GetInformation\_System\_Xml\_XmlWriter\_), 
[OperationInHiddenDocument.GetFullNameOfType\(Type\)](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_GetFullNameOfType\_System\_Type\_), 
[OperationInHiddenDocument.GetLoadXml\(object\)](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_GetLoadXml\_System\_Object\_), 
[OperationInHiddenDocument.GetObject\(Type, string\)](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_GetObject\_System\_Type\_System\_String\_), 
[OperationInHiddenDocument.Execute\(\)](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_Execute), 
[OperationInHiddenDocument.UpdateActiveUserControl\(\)](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_UpdateActiveUserControl), 
[OperationInHiddenDocument.Name](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_OperationInHiddenDocument\_Name), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateBearingInMeshFree__ctor_System_String_System_String_System_String_"></a> UpdateBearingInMeshFree\(string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateBearingInMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateBearingInMeshFree(string strBearingGeometryName, string strRBEName, string strZAxis)
```

#### Parameters

`strBearingGeometryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string bearing geometry.

`strRBEName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string rbe.

`strZAxis` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string z axis.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateBearingInMeshFree__ctor_VM_Managed_Document3D_System_String_System_String_System_String_"></a> UpdateBearingInMeshFree\(Document3D, string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateBearingInMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateBearingInMeshFree(Document3D document3D, string strBearingGeometryName, string strRBEName, string strZAxis)
```

#### Parameters

`document3D` Document3D

The document.

`strBearingGeometryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string bearing geometry.

`strRBEName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string rbe.

`strZAxis` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string z axis.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateBearingInMeshFree__ctor_VM_Managed_Operation_JournalParameter_"></a> UpdateBearingInMeshFree\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateBearingInMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateBearingInMeshFree(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

