# Class UpdateRackInFE

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Rack In FE Operation

```csharp
public class UpdateRackInFE : OperationInHiddenDocument, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[OperationInHiddenDocument](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md) ← 
[UpdateRackInFE](VM.Managed.DAFUL.GearTrain.Operation.UpdateRackInFE.md)

#### Derived

[UpdateRackInMeshFree](VM.Managed.DAFUL.GearTrain.Operation.UpdateRackInMeshFree.md)

#### Implements

IOperation

#### Inherited Members

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

### UpdateRackInFE\(string, string, string, bool, bool, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateRackInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateRackInFE(string strRackGeometryName, string strStartRBEName, string strEndRBEName, bool bUseStart, bool bUseEnd, string strZAxis, string strInitialAngle)
```

#### Parameters

`strRackGeometryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string rack geometry.

`strStartRBEName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string start rbe.

`strEndRBEName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string end rbe.

`bUseStart` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use start].

`bUseEnd` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use end].

`strZAxis` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string z axis.

`strInitialAngle` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Initial angle.

### UpdateRackInFE\(Document3D, string, string, string, bool, bool, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateRackInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateRackInFE(Document3D document3D, string strRackGeometryName, string strStartRBEName, string strEndRBEName, bool bUseStart, bool bUseEnd, string strZAxis, string strInitialAngle)
```

#### Parameters

`document3D` Document3D

The document.

`strRackGeometryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string rack geometry.

`strStartRBEName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string start rbe.

`strEndRBEName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string end rbe.

`bUseStart` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use start].

`bUseEnd` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use end].

`strZAxis` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string z axis.

`strInitialAngle` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Initial angle.

### UpdateRackInFE\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateRackInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateRackInFE(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Methods

### Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.


