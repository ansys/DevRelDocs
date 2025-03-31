# Class OperationBase

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMAppCore.dll  

This base class is to represent the operation.

```csharp
public abstract class OperationBase : IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OperationBase](VM.Managed.Operation.OperationBase.md)

#### Derived

[ApplyOperation](VM.Managed.CAD.ApplyOperation.md), 
[BuildBodyOp](VM.Managed.CAD.BuildBodyOp.md), 
[CADBodyApplyOperation](VM.Managed.CAD.CADBodyApplyOperation.md), 
[CheckValidationAboutBuildOp](VM.Managed.CAD.CheckValidationAboutBuildOp.md), 
[CreateSubEntityOperation](VM.Managed.Dialog.CreateSubEntityOperation.md), 
[DeleteBuilderOperation](VM.Managed.CAD.DeleteBuilderOperation.md), 
[GetAreaOfFaceOp](VM.Managed.CAD.GetAreaOfFaceOp.md), 
[GetBodyFacesOp](VM.Managed.CAD.GetBodyFacesOp.md), 
[GetBodyNameAttributeOp](VM.Managed.CAD.GetBodyNameAttributeOp.md), 
[GetBoundingBoxOp](VM.Managed.CAD.GetBoundingBoxOp.md), 
[GetDefaultMaxPenetrationOp](VM.Managed.CAD.GetDefaultMaxPenetrationOp.md), 
[GetFacetInformationForFaceOp](VM.Managed.CAD.GetFacetInformationForFaceOp.md), 
[GetLengthOfEdgeOp](VM.Managed.CAD.GetLengthOfEdgeOp.md), 
[GetManyTopologyColorOp](VM.Managed.CAD.GetManyTopologyColorOp.md), 
[GetPiecewiseCurveOp](VM.Managed.CAD.GetPiecewiseCurveOp.md), 
[GetPointAndDirectionFromFacetOp](VM.Managed.CAD.GetPointAndDirectionFromFacetOp.md), 
[GetTopologyColorOp](VM.Managed.CAD.GetTopologyColorOp.md), 
[GetVoidCountOp](VM.Managed.CAD.GetVoidCountOp.md), 
[GetVoidPointsOp](VM.Managed.CAD.GetVoidPointsOp.md), 
[OperationDelegate](VM.Managed.Operation.OperationDelegate.md), 
[RebuildHiddenDocOp](VM.Managed.History.RebuildHiddenDocOp.md), 
[RemoveDuplicatedEventOperation](VM.Managed.CAD.RemoveDuplicatedEventOperation.md), 
[SetNameAttributeOp](VM.Managed.CAD.SetNameAttributeOp.md), 
[SetSelectionObjectOp](VM.Managed.CAD.SetSelectionObjectOp.md)

#### Implements

IOperation

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### OperationBase\(View, object\)

```csharp
protected OperationBase(View view, object param)
```

#### Parameters

`view` [View](VM.Managed.View.md)

`param` [object](https://learn.microsoft.com/dotnet/api/system.object)

### OperationBase\(View\)

```csharp
protected OperationBase(View view)
```

#### Parameters

`view` [View](VM.Managed.View.md)

### OperationBase\(Document, object\)

```csharp
protected OperationBase(Document doc, object param)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`param` [object](https://learn.microsoft.com/dotnet/api/system.object)

### OperationBase\(Document\)

```csharp
protected OperationBase(Document doc)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

### OperationBase\(object\)

```csharp
protected OperationBase(object param)
```

#### Parameters

`param` [object](https://learn.microsoft.com/dotnet/api/system.object)

### OperationBase\(\)

```csharp
protected OperationBase()
```

## Fields

### g\_bDupicateMsg

```csharp
public static bool g_bDupicateMsg
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### g\_bRedrawKernel

```csharp
public static bool g_bRedrawKernel
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### g\_bSkipAddEvent

```csharp
public static bool g_bSkipAddEvent
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### g\_bVerify

```csharp
public static bool g_bVerify
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_bIsHistoryMerge

```csharp
protected bool m_bIsHistoryMerge
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### Document

```csharp
protected Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### ExecutableOnHold

```csharp
protected virtual bool ExecutableOnHold { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExecuteMacro

```csharp
public static bool ExecuteMacro { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GlobalOverride

Gets or sets the global session attributes.

```csharp
public static SessionOverride GlobalOverride { get; set; }
```

#### Property Value

 [SessionOverride](VM.Managed.Operation.SessionOverride.md)

### IsDoingThread

```csharp
public static bool IsDoingThread { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsHistoryMerge

```csharp
public virtual bool IsHistoryMerge { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MarkStatus

Gets the mark status.

```csharp
public virtual HistroyMarkStatus MarkStatus { get; }
```

#### Property Value

 [HistroyMarkStatus](VM.Managed.Operation.HistroyMarkStatus.md)

### Name

Gets the operation name.

```csharp
public abstract string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Override

```csharp
protected SessionOverride Override { get; set; }
```

#### Property Value

 [SessionOverride](VM.Managed.Operation.SessionOverride.md)

### Parameter

```csharp
protected object Parameter { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### PostExecuteClearTemporaryLinkContainer

```csharp
public bool PostExecuteClearTemporaryLinkContainer { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SimStatus

```csharp
public static SimulationStatus SimStatus { get; set; }
```

#### Property Value

 [SimulationStatus](VM.Managed.Operation.SimulationStatus.md)

### SkipClearTemporaryLinkContainer

```csharp
public bool SkipClearTemporaryLinkContainer { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipEndOperation

```csharp
public bool SkipEndOperation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Status

Gets or sets the operation status.

```csharp
public static OperationStatus Status { get; set; }
```

#### Property Value

 [OperationStatus](VM.Managed.Operation.OperationStatus.md)

### UseMacro

```csharp
public virtual bool UseMacro { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseThread

Gets a value indicating whether operation use the thread.

```csharp
public virtual bool UseThread { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### View

```csharp
protected View View { get; }
```

#### Property Value

 [View](VM.Managed.View.md)

### autoEvents

Gets or sets the event notifier from the waiting thread.

```csharp
public static AutoResetEvent[] autoEvents { get; set; }
```

#### Property Value

 [AutoResetEvent](https://learn.microsoft.com/dotnet/api/system.threading.autoresetevent)\[\]

## Methods

### ClearCurrentMark\(string\)

```csharp
protected void ClearCurrentMark(string strFilePath)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ClearCurrentMark\(IDocument\)

```csharp
protected void ClearCurrentMark(IDocument doc)
```

#### Parameters

`doc` IDocument

### ClearCurrentMark\(\)

```csharp
protected void ClearCurrentMark()
```

### Create\(string, View, object\)

Create the operation.

```csharp
public static OperationBase Create(string strType, View view, object obParam)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operation name.

`view` [View](VM.Managed.View.md)

The operation parameter that is to represent the view.

`obParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

The operation parameter.

#### Returns

 [OperationBase](VM.Managed.Operation.OperationBase.md)

### Create\(string, IDocument, object\)

Create the operation.

```csharp
public static OperationBase Create(string strType, IDocument doc, object obParam)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operation name.

`doc` IDocument

The operation parameter that is to represent the document.

`obParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

The operation parameter.

#### Returns

 [OperationBase](VM.Managed.Operation.OperationBase.md)

### Create\(string, object\)

Create the operation.

```csharp
public static OperationBase Create(string strType, object obParam)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operation name.

`obParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

The operation parameter.

#### Returns

 [OperationBase](VM.Managed.Operation.OperationBase.md)

### Create\(string\)

Create the operation.

```csharp
public static OperationBase Create(string strType)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operation name.

#### Returns

 [OperationBase](VM.Managed.Operation.OperationBase.md)

### Execute\(\)

Execute the operation.

```csharp
public abstract void Execute()
```

### GetInformation\(XmlWriter\)

```csharp
public virtual void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### Initialize\(ShowVerifyResult\)

Initialize delegate.

```csharp
public static void Initialize(OperationBase.ShowVerifyResult delShowVerifyResult)
```

#### Parameters

`delShowVerifyResult` [OperationBase](VM.Managed.Operation.OperationBase.md).[ShowVerifyResult](VM.Managed.Operation.OperationBase.ShowVerifyResult.md)

The ShowVerifyResult delegate.

### PostExecute\(\)

PostExecute the operation.

```csharp
public virtual void PostExecute()
```

### RecordJournal\(OperationBase\)

```csharp
public static void RecordJournal(OperationBase op)
```

#### Parameters

`op` [OperationBase](VM.Managed.Operation.OperationBase.md)

### StartSession\(\)

Start the operation session, asynchronous calls.

```csharp
public virtual void StartSession()
```

### StartSession\(OperationBase, PostOperation\)

Start the operation session, asynchronous calls.

```csharp
public static void StartSession(OperationBase opSession, OperationBase.PostOperation opPost)
```

#### Parameters

`opSession` [OperationBase](VM.Managed.Operation.OperationBase.md)

The operation.

`opPost` [OperationBase](VM.Managed.Operation.OperationBase.md).[PostOperation](VM.Managed.Operation.OperationBase.PostOperation.md)

The post operation,

### StartSession\(OperationBase\)

Start the operation session, asynchronous calls

```csharp
public static void StartSession(OperationBase opSession)
```

#### Parameters

`opSession` [OperationBase](VM.Managed.Operation.OperationBase.md)

The operation.

### StartSessionAndWait\(\)

Start the operation session and wait until operation return.

```csharp
public virtual void StartSessionAndWait()
```

### StartSessionAndWait\(OperationBase, PostOperation\)

Start the operation session and wait until operation return.

```csharp
public static void StartSessionAndWait(OperationBase opSession, OperationBase.PostOperation opPost)
```

#### Parameters

`opSession` [OperationBase](VM.Managed.Operation.OperationBase.md)

The operation.

`opPost` [OperationBase](VM.Managed.Operation.OperationBase.md).[PostOperation](VM.Managed.Operation.OperationBase.PostOperation.md)

The post operation,

### StartSessionAndWait\(OperationBase\)

Start the operation session and wait until operation return.

```csharp
public static void StartSessionAndWait(OperationBase opSession)
```

#### Parameters

`opSession` [OperationBase](VM.Managed.Operation.OperationBase.md)

The operation.

### UseSession\(string\)

Use session object to execute operation

```csharp
public static ISession UseSession(string strSessionName)
```

#### Parameters

`strSessionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

the name of the session

#### Returns

 ISession

### raise\_OnEndOperation\(object, EventArgs\)

```csharp
protected static void raise_OnEndOperation(object value0, EventArgs value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### raise\_OnOperationStatusChanged\(object, OperationStatusEventArgs\)

```csharp
protected static void raise_OnOperationStatusChanged(object value0, OperationStatusEventArgs value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` [OperationStatusEventArgs](VM.Managed.Operation.OperationStatusEventArgs.md)

### OnEndOperation

```csharp
public static event OperationBase.EndOperation OnEndOperation
```

#### Event Type

 [OperationBase](VM.Managed.Operation.OperationBase.md).[EndOperation](VM.Managed.Operation.OperationBase.EndOperation.md)

### OnOperationStatusChanged

Occurs when [On Operation Status Changed].

```csharp
public static event EventHandler<OperationStatusEventArgs> OnOperationStatusChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[OperationStatusEventArgs](VM.Managed.Operation.OperationStatusEventArgs.md)\>


