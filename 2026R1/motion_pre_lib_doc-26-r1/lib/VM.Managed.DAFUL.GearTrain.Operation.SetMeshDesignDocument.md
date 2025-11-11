# Class SetMeshDesignDocument
<a id="VM_Managed_DAFUL_GearTrain_Operation_SetMeshDesignDocument"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

SetMeshDesignDocument

```csharp
public abstract class SetMeshDesignDocument : SetDesignDocumentBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[SetDesignDocumentBase](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md) ← 
[SetMeshDesignDocument](VM.Managed.DAFUL.GearTrain.Operation.SetMeshDesignDocument.md)

#### Derived

[SetFEDesignDocument](VM.Managed.DAFUL.GearTrain.Operation.SetFEDesignDocument.md), 
[SetMeshFreeDesignDocument](VM.Managed.DAFUL.GearTrain.Operation.SetMeshFreeDesignDocument.md)

#### Implements

IOperation

#### Inherited Members

[SetDesignDocumentBase.m\_strBodyName](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_SetDesignDocumentBase\_m\_strBodyName), 
[SetDesignDocumentBase.m\_docDesigner](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_SetDesignDocumentBase\_m\_docDesigner), 
[SetDesignDocumentBase.Result\(\)](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_SetDesignDocumentBase\_Result), 
[SetDesignDocumentBase.Execute\(\)](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_SetDesignDocumentBase\_Execute), 
[SetDesignDocumentBase.SetActiveUserControl\(\)](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_SetDesignDocumentBase\_SetActiveUserControl), 
[SetDesignDocumentBase.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_SetDesignDocumentBase\_GetInformation\_System\_Xml\_XmlWriter\_), 
[SetDesignDocumentBase.OpenDesignDocument\(object\)](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_SetDesignDocumentBase\_OpenDesignDocument\_System\_Object\_), 
[SetDesignDocumentBase.IsHistoryMerge](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_SetDesignDocumentBase\_IsHistoryMerge), 
[SetDesignDocumentBase.Name](VM.Managed.DAFUL.GearTrain.Operation.SetDesignDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_SetDesignDocumentBase\_Name), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetMeshDesignDocument__ctor_VM_Managed_DAFUL_GearTrain_IMeshEntity_"></a> SetMeshDesignDocument\(IMeshEntity\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.SetMeshDesignDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetMeshDesignDocument(IMeshEntity meshEntity)
```

#### Parameters

`meshEntity` IMeshEntity

The mesh entity.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetMeshDesignDocument__ctor_VM_Managed_Operation_JournalParameter_"></a> SetMeshDesignDocument\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.SetMeshDesignDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetMeshDesignDocument(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetMeshDesignDocument_m_meshEntity"></a> m\_meshEntity

The m_mesh entity

```csharp
protected IMeshEntity m_meshEntity
```

#### Field Value

 IMeshEntity

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetMeshDesignDocument_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SetMeshDesignDocument_ExecuteCore_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_"></a> ExecuteCore\(HiddenDocumentMeshBase\)

Executes the core.

```csharp
public virtual void ExecuteCore(HiddenDocumentMeshBase mesh_doc)
```

#### Parameters

`mesh_doc` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The mesh_doc.

