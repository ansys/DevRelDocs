#  Class UpdateGearInMeshFree

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Gear MeshFree Operation

```csharp
public class UpdateGearInMeshFree : UpdateGearInFE, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[OperationInHiddenDocument](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md) ← 
[UpdateGearInFE](VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInFE.md) ← 
[UpdateGearInMeshFree](VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInMeshFree.md)

#### Implements

IOperation

#### Inherited Members

[UpdateGearInFE.Execute\(\)](VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_UpdateGearInFE\_Execute), 
[UpdateGearInFE.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_UpdateGearInFE\_GetInformation\_System\_Xml\_XmlWriter\_), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateGearInMeshFree__ctor_System_String_System_String_System_String_System_String_System_String_"></a> UpdateGearInMeshFree\(string, string, string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateGearInMeshFree(string strGearGeometryName, string strReferenceOffset, string strReferencePoint, string strParentType, string strRBEOrBearing)
```

#### Parameters

`strGearGeometryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string gear geometry.

`strReferenceOffset` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string reference offset.

`strReferencePoint` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string reference point.

`strParentType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the string parent.

`strRBEOrBearing` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string rbe or bearing.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateGearInMeshFree__ctor_VM_Managed_Document3D_System_String_System_String_System_String_System_String_System_String_"></a> UpdateGearInMeshFree\(Document3D, string, string, string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateGearInMeshFree(Document3D document3D, string strGearGeometryName, string strReferenceOffset, string strReferencePoint, string strParentType, string strRBEOrBearing)
```

#### Parameters

`document3D` Document3D

The document.

`strGearGeometryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string gear geometry.

`strReferenceOffset` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string reference offset.

`strReferencePoint` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string reference point.

`strParentType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the string parent.

`strRBEOrBearing` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string rbe or bearing.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateGearInMeshFree__ctor_VM_Managed_Operation_JournalParameter_"></a> UpdateGearInMeshFree\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateGearInMeshFree(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

