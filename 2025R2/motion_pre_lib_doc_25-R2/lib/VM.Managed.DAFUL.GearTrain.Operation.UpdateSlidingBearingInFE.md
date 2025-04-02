#  Class UpdateSlidingBearingInFE

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Sliding Bearing FE Operation

```csharp
public class UpdateSlidingBearingInFE : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[UpdateSlidingBearingInFE](VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInFE.md)

#### Derived

[UpdateSlidingBearingInMeshFree](VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInMeshFree.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInFE__ctor_System_String_System_String_"></a> UpdateSlidingBearingInFE\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateSlidingBearingInFE(string strBearingGeometryName, string strRBEName)
```

#### Parameters

`strBearingGeometryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string bearing geometry.

`strRBEName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string rbe.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInFE__ctor_VM_Managed_Document3D_System_String_System_String_"></a> UpdateSlidingBearingInFE\(Document3D, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateSlidingBearingInFE(Document3D document3D, string strBearingGeometryName, string strRBEName)
```

#### Parameters

`document3D` Document3D

The document.

`strBearingGeometryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string bearing geometry.

`strRBEName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string rbe.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInFE__ctor_VM_Managed_Operation_JournalParameter_"></a> UpdateSlidingBearingInFE\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateSlidingBearingInFE(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInFE_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInFE_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInFE_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

