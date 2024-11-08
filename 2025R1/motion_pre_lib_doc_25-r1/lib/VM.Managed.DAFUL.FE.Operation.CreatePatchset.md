#  Class CreatePatchset

Namespace: [VM.Managed.DAFUL.FE.Operation](VM.Managed.DAFUL.FE.Operation.md)  
Assembly: VMOpMesh.dll  

The create patch set operation

```csharp
public class CreatePatchset : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[CreatePatchset](VM.Managed.DAFUL.FE.Operation.CreatePatchset.md)

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

### <a id="VM_Managed_DAFUL_FE_Operation_CreatePatchset__ctor_VM_Managed_Document_"></a> CreatePatchset\(Document\)

```csharp
public CreatePatchset(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_FE_Operation_CreatePatchset__ctor_VM_Managed_Document_VM_Managed_DAFUL_FE_Patch___"></a> CreatePatchset\(Document, Patch\[\]\)

```csharp
public CreatePatchset(Document doc, Patch[] arnPatchIndex)
```

#### Parameters

`doc` Document

`arnPatchIndex` Patch\[\]

### <a id="VM_Managed_DAFUL_FE_Operation_CreatePatchset__ctor_VM_Managed_Operation_JournalParameter_"></a> CreatePatchset\(JournalParameter\)

```csharp
public CreatePatchset(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_FE_Operation_CreatePatchset_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Operation_CreatePatchset_Patchset"></a> Patchset

```csharp
public SetPatch Patchset { get; }
```

#### Property Value

 SetPatch

## Methods

### <a id="VM_Managed_DAFUL_FE_Operation_CreatePatchset_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_FE_Operation_CreatePatchset_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### <a id="VM_Managed_DAFUL_FE_Operation_CreatePatchset_UpdateUI_VM_Managed_UI_IUIUpdate_VM_Managed_Document_"></a> UpdateUI\(IUIUpdate, Document\)

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

`doc` Document

