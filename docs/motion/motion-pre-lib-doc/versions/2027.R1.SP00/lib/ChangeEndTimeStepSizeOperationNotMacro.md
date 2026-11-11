# Class ChangeEndTimeStepSizeOperationNotMacro
<a id="ChangeEndTimeStepSizeOperationNotMacro"></a>

Namespace:   
Assembly: dfpreOp.dll  

```csharp
public class ChangeEndTimeStepSizeOperationNotMacro : ChangeEndTimeStepSizeOperation, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[ChangeEndTimeStepSizeOperation](ChangeEndTimeStepSizeOperation.md) ← 
[ChangeEndTimeStepSizeOperationNotMacro](ChangeEndTimeStepSizeOperationNotMacro.md)

#### Implements

IOperation

#### Inherited Members

[ChangeEndTimeStepSizeOperation.g\_ExtraExecuteImpl](ChangeEndTimeStepSizeOperation.md\#ChangeEndTimeStepSizeOperation\_g\_ExtraExecuteImpl), 
[ChangeEndTimeStepSizeOperation.Execute\(\)](ChangeEndTimeStepSizeOperation.md\#ChangeEndTimeStepSizeOperation\_Execute), 
[ChangeEndTimeStepSizeOperation.GetInformation\(XmlWriter\)](ChangeEndTimeStepSizeOperation.md\#ChangeEndTimeStepSizeOperation\_GetInformation\_System\_Xml\_XmlWriter\_), 
[ChangeEndTimeStepSizeOperation.Name](ChangeEndTimeStepSizeOperation.md\#ChangeEndTimeStepSizeOperation\_Name), 
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

### <a id="ChangeEndTimeStepSizeOperationNotMacro__ctor_VM_Managed_Operation_JournalParameter_"></a> ChangeEndTimeStepSizeOperationNotMacro\(JournalParameter\)

```csharp
public ChangeEndTimeStepSizeOperationNotMacro(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

### <a id="ChangeEndTimeStepSizeOperationNotMacro__ctor_VM_Managed_DAFUL_DocumentAnalysis_System_String_System_String_"></a> ChangeEndTimeStepSizeOperationNotMacro\(DocumentAnalysis, string, string\)

```csharp
public ChangeEndTimeStepSizeOperationNotMacro(DocumentAnalysis doc, string strEndTime, string strStep)
```

#### Parameters

`doc` DocumentAnalysis

`strEndTime` string

`strStep` string

