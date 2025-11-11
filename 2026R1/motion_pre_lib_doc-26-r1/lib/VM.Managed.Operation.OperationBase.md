# Class OperationBase
<a id="VM_Managed_Operation_OperationBase"></a>

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMAppCore.dll  

This base class is to represent the operation.

```csharp
public abstract class OperationBase : IOperation
```

#### Inheritance

object ← 
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
[ReDrawForHistoryOp](VM.Managed.CAD.ReDrawForHistoryOp.md), 
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

### <a id="VM_Managed_Operation_OperationBase__ctor_VM_Managed_View_System_Object_"></a> OperationBase\(View, object\)

```csharp
protected OperationBase(View view, object param)
```

#### Parameters

`view` [View](VM.Managed.View.md)

`param` object

### <a id="VM_Managed_Operation_OperationBase__ctor_VM_Managed_View_"></a> OperationBase\(View\)

```csharp
protected OperationBase(View view)
```

#### Parameters

`view` [View](VM.Managed.View.md)

### <a id="VM_Managed_Operation_OperationBase__ctor_VM_Managed_Document_System_Object_"></a> OperationBase\(Document, object\)

```csharp
protected OperationBase(Document doc, object param)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`param` object

### <a id="VM_Managed_Operation_OperationBase__ctor_VM_Managed_Document_"></a> OperationBase\(Document\)

```csharp
protected OperationBase(Document doc)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

### <a id="VM_Managed_Operation_OperationBase__ctor_System_Object_"></a> OperationBase\(object\)

```csharp
protected OperationBase(object param)
```

#### Parameters

`param` object

### <a id="VM_Managed_Operation_OperationBase__ctor"></a> OperationBase\(\)

```csharp
protected OperationBase()
```

## Fields

### <a id="VM_Managed_Operation_OperationBase_g_bDupicateMsg"></a> g\_bDupicateMsg

```csharp
public static bool g_bDupicateMsg
```

#### Field Value

 bool

### <a id="VM_Managed_Operation_OperationBase_g_bRedrawKernel"></a> g\_bRedrawKernel

```csharp
public static bool g_bRedrawKernel
```

#### Field Value

 bool

### <a id="VM_Managed_Operation_OperationBase_g_bSkipAddEvent"></a> g\_bSkipAddEvent

```csharp
public static bool g_bSkipAddEvent
```

#### Field Value

 bool

### <a id="VM_Managed_Operation_OperationBase_g_bVerify"></a> g\_bVerify

```csharp
public static bool g_bVerify
```

#### Field Value

 bool

### <a id="VM_Managed_Operation_OperationBase_m_bIsHistoryMerge"></a> m\_bIsHistoryMerge

```csharp
protected bool m_bIsHistoryMerge
```

#### Field Value

 bool

## Properties

### <a id="VM_Managed_Operation_OperationBase_Document"></a> Document

```csharp
protected Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### <a id="VM_Managed_Operation_OperationBase_ExecutableOnHold"></a> ExecutableOnHold

```csharp
protected virtual bool ExecutableOnHold { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_Operation_OperationBase_ExecuteMacro"></a> ExecuteMacro

```csharp
public static bool ExecuteMacro { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_Operation_OperationBase_GlobalOverride"></a> GlobalOverride

Gets or sets the global session attributes.

```csharp
public static SessionOverride GlobalOverride { get; set; }
```

#### Property Value

 SessionOverride

### <a id="VM_Managed_Operation_OperationBase_IsDoingThread"></a> IsDoingThread

```csharp
public static bool IsDoingThread { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_Operation_OperationBase_IsHistoryMerge"></a> IsHistoryMerge

```csharp
public virtual bool IsHistoryMerge { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_Operation_OperationBase_MarkStatus"></a> MarkStatus

Gets the mark status.

```csharp
public virtual HistroyMarkStatus MarkStatus { get; }
```

#### Property Value

 [HistroyMarkStatus](VM.Managed.Operation.HistroyMarkStatus.md)

### <a id="VM_Managed_Operation_OperationBase_Name"></a> Name

Gets the operation name.

```csharp
public abstract string Name { get; }
```

#### Property Value

 string

### <a id="VM_Managed_Operation_OperationBase_Override"></a> Override

```csharp
protected SessionOverride Override { get; set; }
```

#### Property Value

 SessionOverride

### <a id="VM_Managed_Operation_OperationBase_Parameter"></a> Parameter

```csharp
protected object Parameter { get; }
```

#### Property Value

 object

### <a id="VM_Managed_Operation_OperationBase_PostExecuteClearTemporaryLinkContainer"></a> PostExecuteClearTemporaryLinkContainer

```csharp
public bool PostExecuteClearTemporaryLinkContainer { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_Operation_OperationBase_SimStatus"></a> SimStatus

```csharp
public static SimulationStatus SimStatus { get; set; }
```

#### Property Value

 [SimulationStatus](VM.Managed.Operation.SimulationStatus.md)

### <a id="VM_Managed_Operation_OperationBase_SkipClearTemporaryLinkContainer"></a> SkipClearTemporaryLinkContainer

```csharp
public bool SkipClearTemporaryLinkContainer { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_Operation_OperationBase_SkipEndOperation"></a> SkipEndOperation

```csharp
public bool SkipEndOperation { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_Operation_OperationBase_Status"></a> Status

Gets or sets the operation status.

```csharp
public static OperationStatus Status { get; set; }
```

#### Property Value

 [OperationStatus](VM.Managed.Operation.OperationStatus.md)

### <a id="VM_Managed_Operation_OperationBase_UseMacro"></a> UseMacro

```csharp
public virtual bool UseMacro { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_Operation_OperationBase_UseThread"></a> UseThread

Gets a value indicating whether operation use the thread.

```csharp
public virtual bool UseThread { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_Operation_OperationBase_View"></a> View

```csharp
protected View View { get; }
```

#### Property Value

 [View](VM.Managed.View.md)

### <a id="VM_Managed_Operation_OperationBase_autoEvents"></a> autoEvents

Gets or sets the event notifier from the waiting thread.

```csharp
public static AutoResetEvent[] autoEvents { get; set; }
```

#### Property Value

 AutoResetEvent\[\]

## Methods

### <a id="VM_Managed_Operation_OperationBase_ClearCurrentMark_System_String_"></a> ClearCurrentMark\(string\)

```csharp
protected void ClearCurrentMark(string strFilePath)
```

#### Parameters

`strFilePath` string

### <a id="VM_Managed_Operation_OperationBase_ClearCurrentMark_VM_Models_Pre_IDocument_"></a> ClearCurrentMark\(IDocument\)

```csharp
protected void ClearCurrentMark(IDocument doc)
```

#### Parameters

`doc` IDocument

### <a id="VM_Managed_Operation_OperationBase_ClearCurrentMark"></a> ClearCurrentMark\(\)

```csharp
protected void ClearCurrentMark()
```

### <a id="VM_Managed_Operation_OperationBase_Create_System_String_VM_Managed_View_System_Object_"></a> Create\(string, View, object\)

Create the operation.

```csharp
public static OperationBase Create(string strType, View view, object obParam)
```

#### Parameters

`strType` string

The operation name.

`view` [View](VM.Managed.View.md)

The operation parameter that is to represent the view.

`obParam` object

The operation parameter.

#### Returns

 [OperationBase](VM.Managed.Operation.OperationBase.md)

### <a id="VM_Managed_Operation_OperationBase_Create_System_String_VM_Models_Pre_IDocument_System_Object_"></a> Create\(string, IDocument, object\)

Create the operation.

```csharp
public static OperationBase Create(string strType, IDocument doc, object obParam)
```

#### Parameters

`strType` string

The operation name.

`doc` IDocument

The operation parameter that is to represent the document.

`obParam` object

The operation parameter.

#### Returns

 [OperationBase](VM.Managed.Operation.OperationBase.md)

### <a id="VM_Managed_Operation_OperationBase_Create_System_String_System_Object_"></a> Create\(string, object\)

Create the operation.

```csharp
public static OperationBase Create(string strType, object obParam)
```

#### Parameters

`strType` string

The operation name.

`obParam` object

The operation parameter.

#### Returns

 [OperationBase](VM.Managed.Operation.OperationBase.md)

### <a id="VM_Managed_Operation_OperationBase_Create_System_String_"></a> Create\(string\)

Create the operation.

```csharp
public static OperationBase Create(string strType)
```

#### Parameters

`strType` string

The operation name.

#### Returns

 [OperationBase](VM.Managed.Operation.OperationBase.md)

### <a id="VM_Managed_Operation_OperationBase_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public abstract void Execute()
```

### <a id="VM_Managed_Operation_OperationBase_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public virtual void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

### <a id="VM_Managed_Operation_OperationBase_Initialize_VM_Managed_Operation_OperationBase_ShowVerifyResult_"></a> Initialize\(ShowVerifyResult\)

Initialize delegate.

```csharp
public static void Initialize(OperationBase.ShowVerifyResult delShowVerifyResult)
```

#### Parameters

`delShowVerifyResult` [OperationBase](VM.Managed.Operation.OperationBase.md).[ShowVerifyResult](VM.Managed.Operation.OperationBase.ShowVerifyResult.md)

The ShowVerifyResult delegate.

### <a id="VM_Managed_Operation_OperationBase_PostExecute"></a> PostExecute\(\)

PostExecute the operation.

```csharp
public virtual void PostExecute()
```

### <a id="VM_Managed_Operation_OperationBase_RecordJournal_VM_Managed_Operation_OperationBase_"></a> RecordJournal\(OperationBase\)

```csharp
public static void RecordJournal(OperationBase op)
```

#### Parameters

`op` [OperationBase](VM.Managed.Operation.OperationBase.md)

### <a id="VM_Managed_Operation_OperationBase_StartSession"></a> StartSession\(\)

Start the operation session, asynchronous calls.

```csharp
public virtual void StartSession()
```

### <a id="VM_Managed_Operation_OperationBase_StartSession_VM_Managed_Operation_OperationBase_VM_Managed_Operation_OperationBase_PostOperation_"></a> StartSession\(OperationBase, PostOperation\)

Start the operation session, asynchronous calls.

```csharp
public static void StartSession(OperationBase opSession, OperationBase.PostOperation opPost)
```

#### Parameters

`opSession` [OperationBase](VM.Managed.Operation.OperationBase.md)

The operation.

`opPost` [OperationBase](VM.Managed.Operation.OperationBase.md).[PostOperation](VM.Managed.Operation.OperationBase.PostOperation.md)

The post operation,

### <a id="VM_Managed_Operation_OperationBase_StartSession_VM_Managed_Operation_OperationBase_"></a> StartSession\(OperationBase\)

Start the operation session, asynchronous calls

```csharp
public static void StartSession(OperationBase opSession)
```

#### Parameters

`opSession` [OperationBase](VM.Managed.Operation.OperationBase.md)

The operation.

### <a id="VM_Managed_Operation_OperationBase_StartSessionAndWait"></a> StartSessionAndWait\(\)

Start the operation session and wait until operation return.

```csharp
public virtual void StartSessionAndWait()
```

### <a id="VM_Managed_Operation_OperationBase_StartSessionAndWait_VM_Managed_Operation_OperationBase_VM_Managed_Operation_OperationBase_PostOperation_"></a> StartSessionAndWait\(OperationBase, PostOperation\)

Start the operation session and wait until operation return.

```csharp
public static void StartSessionAndWait(OperationBase opSession, OperationBase.PostOperation opPost)
```

#### Parameters

`opSession` [OperationBase](VM.Managed.Operation.OperationBase.md)

The operation.

`opPost` [OperationBase](VM.Managed.Operation.OperationBase.md).[PostOperation](VM.Managed.Operation.OperationBase.PostOperation.md)

The post operation,

### <a id="VM_Managed_Operation_OperationBase_StartSessionAndWait_VM_Managed_Operation_OperationBase_"></a> StartSessionAndWait\(OperationBase\)

Start the operation session and wait until operation return.

```csharp
public static void StartSessionAndWait(OperationBase opSession)
```

#### Parameters

`opSession` [OperationBase](VM.Managed.Operation.OperationBase.md)

The operation.

### <a id="VM_Managed_Operation_OperationBase_UseSession_System_String_"></a> UseSession\(string\)

Use session object to execute operation

```csharp
public static ISession UseSession(string strSessionName)
```

#### Parameters

`strSessionName` string

the name of the session

#### Returns

 ISession

### <a id="VM_Managed_Operation_OperationBase_raise_OnEndOperation_System_Object_System_EventArgs_"></a> raise\_OnEndOperation\(object, EventArgs\)

```csharp
protected static void raise_OnEndOperation(object value0, EventArgs value1)
```

#### Parameters

`value0` object

`value1` EventArgs

### <a id="VM_Managed_Operation_OperationBase_raise_OnOperationStatusChanged_System_Object_VM_Managed_Operation_OperationStatusEventArgs_"></a> raise\_OnOperationStatusChanged\(object, OperationStatusEventArgs\)

```csharp
protected static void raise_OnOperationStatusChanged(object value0, OperationStatusEventArgs value1)
```

#### Parameters

`value0` object

`value1` [OperationStatusEventArgs](VM.Managed.Operation.OperationStatusEventArgs.md)

### <a id="VM_Managed_Operation_OperationBase_OnEndOperation"></a> OnEndOperation

```csharp
public static event OperationBase.EndOperation OnEndOperation
```

#### Event Type

 [OperationBase](VM.Managed.Operation.OperationBase.md).[EndOperation](VM.Managed.Operation.OperationBase.EndOperation.md)

### <a id="VM_Managed_Operation_OperationBase_OnOperationStatusChanged"></a> OnOperationStatusChanged

Occurs when [On Operation Status Changed].

```csharp
public static event EventHandler<OperationStatusEventArgs> OnOperationStatusChanged
```

#### Event Type

 EventHandler<[OperationStatusEventArgs](VM.Managed.Operation.OperationStatusEventArgs.md)\>

