# Class UpdateShaftSet

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Section Operation

```csharp
public class UpdateShaftSet : OperationInHiddenDocument, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[OperationInHiddenDocument](VM.Managed.DAFUL.GearTrain.Operation.OperationInHiddenDocument.md) ← 
[UpdateShaftSet](VM.Managed.DAFUL.GearTrain.Operation.UpdateShaftSet.md)

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

### UpdateShaftSet\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateShaftSet()
```

### UpdateShaftSet\(bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateShaftSet(bool bMerge)
```

#### Parameters

`bMerge` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The merge flag.

### UpdateShaftSet\(Document3D, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateShaftSet(Document3D document3D, bool bMerge)
```

#### Parameters

`document3D` Document3D

The document.

`bMerge` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The merge flag.

### UpdateShaftSet\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateShaftSet(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### IsHistoryMerge

Gets the history merge flag.

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Execute\(\)

Execute the operation.

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


