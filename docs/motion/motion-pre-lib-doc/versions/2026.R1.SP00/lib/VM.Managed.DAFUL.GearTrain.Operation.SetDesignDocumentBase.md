# Class SetDesignDocumentBase
<a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Set Design Document Base

```csharp
public abstract class SetDesignDocumentBase : OperationBase, IOperation
```

#### Inheritance

object ← 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase__ctor"></a> SetDesignDocumentBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetDesignDocumentBase()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase__ctor_VM_Managed_Operation_JournalParameter_"></a> SetDesignDocumentBase\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetDesignDocumentBase(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase_m_docDesigner"></a> m\_docDesigner

The m_doc designer

```csharp
protected Document m_docDesigner
```

#### Field Value

 Document

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase_m_strBodyName"></a> m\_strBodyName

The M_STR body name

```csharp
protected string m_strBodyName
```

#### Field Value

 string

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase_IsHistoryMerge"></a> IsHistoryMerge

Gets the history merge flag.

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase_Name"></a> Name

Gets the Name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase_OpenDesignDocument_System_Object_"></a> OpenDesignDocument\(object\)

Opens the design document.

```csharp
protected bool OpenDesignDocument(object obj)
```

#### Parameters

`obj` object

The object.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase_Result"></a> Result\(\)

Results this instance.

```csharp
public HiddenDocument Result()
```

#### Returns

 [HiddenDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetDesignDocumentBase_SetActiveUserControl"></a> SetActiveUserControl\(\)

Sets the active user control.

```csharp
protected void SetActiveUserControl()
```

