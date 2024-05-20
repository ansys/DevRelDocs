# Class SetDesignDocumentBase

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Set Design Document Base

```csharp
public abstract class SetDesignDocumentBase : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[SetDesignDocumentBase](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md)

#### Derived

[SetBearingDesignDocument](VM.Managed.DAFUL.GearTrain.Operation.SetBearingDesignDocument.md), 
[SetGearSetDesignDocument](VM.Managed.DAFUL.GearTrain.Operation.SetGearSetDesignDocument.md), 
[SetMeshDesignDocument](VM.Managed.DAFUL.GearTrain.Operation.SetMeshDesignDocument.md), 
[SetShaftSetDesignDocument](VM.Managed.DAFUL.GearTrain.Operation.SetShaftSetDesignDocument.md), 
[SetSlidingBearingDesignDocument](VM.Managed.DAFUL.GearTrain.Operation.SetSlidingBearingDesignDocument.md)

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

### SetDesignDocumentBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetDesignDocumentBase()
```

### SetDesignDocumentBase\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetDesignDocumentBase(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Fields

### m\_docDesigner

The m_doc designer

```csharp
protected Document m_docDesigner
```

#### Field Value

 Document

### m\_strBodyName

The M_STR body name

```csharp
protected string m_strBodyName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### IsHistoryMerge

Gets the history merge flag.

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

Gets the Name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

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

### OpenDesignDocument\(object\)

Opens the design document.

```csharp
protected bool OpenDesignDocument(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Result\(\)

Results this instance.

```csharp
public HiddenDocument Result()
```

#### Returns

 HiddenDocument

### SetActiveUserControl\(\)

Sets the active user control.

```csharp
protected void SetActiveUserControl()
```


