#  Class OperationInHiddenDocument

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Operation In Hidden Document

```csharp
public abstract class OperationInHiddenDocument : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[OperationInHiddenDocument](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md)

#### Derived

[MakeBearingStiffnessSpline](VM.Managed.DAFUL.GearTrain.Operation.MakeBearingStiffnessSpline.md), 
[UpdateBearing](VM.Managed.DAFUL.GearTrain.Operation.UpdateBearing.md), 
[UpdateBearingInFE](VM.Managed.DAFUL.GearTrain.Operation.UpdateBearingInFE.md), 
[UpdateBodyInFE](VM.Managed.DAFUL.GearTrain.Operation.UpdateBodyInFE.md), 
[UpdateBodyInMeshFree](VM.Managed.DAFUL.GearTrain.Operation.UpdateBodyInMeshFree.md), 
[UpdateDesignerInMesh](VM.Managed.DAFUL.GearTrain.Operation.UpdateDesignerInMesh.md), 
[UpdateGearInFE](VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInFE.md), 
[UpdateGearSet](VM.Managed.DAFUL.GearTrain.Operation.UpdateGearSet.md), 
[UpdatePointEntity](VM.Managed.DAFUL.GearTrain.Operation.UpdatePointEntity.md), 
[UpdatePointEntityOnRBE](VM.Managed.DAFUL.GearTrain.Operation.UpdatePointEntityOnRBE.md), 
[UpdateRackInFE](VM.Managed.DAFUL.GearTrain.Operation.UpdateRackInFE.md), 
[UpdateShaftSet](VM.Managed.DAFUL.GearTrain.Operation.UpdateShaftSet.md), 
[UpdateSlidingBearing](VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearing.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_OperationInHiddenDocument__ctor"></a> OperationInHiddenDocument\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationInHiddenDocument()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_OperationInHiddenDocument__ctor_VM_Managed_Document3D_"></a> OperationInHiddenDocument\(Document3D\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationInHiddenDocument(Document3D document3D)
```

#### Parameters

`document3D` Document3D

The document.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_OperationInHiddenDocument__ctor_VM_Managed_Operation_JournalParameter_"></a> OperationInHiddenDocument\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationInHiddenDocument(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_OperationInHiddenDocument_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Exceptions

 [NotImplementedException](https://learn.microsoft.com/dotnet/api/system.notimplementedexception)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_OperationInHiddenDocument_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

#### Exceptions

 [NotImplementedException](https://learn.microsoft.com/dotnet/api/system.notimplementedexception)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_OperationInHiddenDocument_GetFullNameOfType_System_Type_"></a> GetFullNameOfType\(Type\)

Gets the full type of the name of.

```csharp
protected string GetFullNameOfType(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_OperationInHiddenDocument_GetLoadXml_System_Object_"></a> GetLoadXml\(object\)

Gets the load XML.

```csharp
protected string GetLoadXml(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_OperationInHiddenDocument_GetObject_System_Type_System_String_"></a> GetObject\(Type, string\)

Gets the object.

```csharp
protected object GetObject(Type type, string strXml)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type.

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string XML.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_OperationInHiddenDocument_UpdateActiveUserControl"></a> UpdateActiveUserControl\(\)

Updates the active user control.

```csharp
protected void UpdateActiveUserControl()
```

