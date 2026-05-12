#  Class ShowGearDurability

Namespace: [VM.Operations.Pre.Durability](VM.Operations.Pre.Durability.md)  
Assembly: VM.Operations.Pre.Durability.dll  

show the gear durability tool.

```csharp
public class ShowGearDurability : ShowBodyDurability, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
DialogOperation ← 
[ShowBodyDurability](VM.Operations.Pre.Durability.ShowBodyDurability.md) ← 
[ShowGearDurability](VM.Operations.Pre.Durability.ShowGearDurability.md)

#### Implements

IOperation

#### Inherited Members

[ShowBodyDurability.Execute\(\)](VM.Operations.Pre.Durability.ShowBodyDurability.md\#VM\_Operations\_Pre\_Durability\_ShowBodyDurability\_Execute), 
[ShowBodyDurability.OnApply\(object, CancelEventArgs\)](VM.Operations.Pre.Durability.ShowBodyDurability.md\#VM\_Operations\_Pre\_Durability\_ShowBodyDurability\_OnApply\_System\_Object\_System\_ComponentModel\_CancelEventArgs\_), 
[ShowBodyDurability.UpdateUI\(IUIUpdate, Document\)](VM.Operations.Pre.Durability.ShowBodyDurability.md\#VM\_Operations\_Pre\_Durability\_ShowBodyDurability\_UpdateUI\_VM\_Managed\_UI\_IUIUpdate\_VM\_Managed\_Document\_), 
[ShowBodyDurability.ShowDialog\(\)](VM.Operations.Pre.Durability.ShowBodyDurability.md\#VM\_Operations\_Pre\_Durability\_ShowBodyDurability\_ShowDialog), 
[ShowBodyDurability.Name](VM.Operations.Pre.Durability.ShowBodyDurability.md\#VM\_Operations\_Pre\_Durability\_ShowBodyDurability\_Name), 
DialogOperation.Execute\(\), 
DialogOperation.OnApply\(object, CancelEventArgs\), 
DialogOperation.IsConainOpenedDic\(Document\), 
DialogOperation.Name, 
DialogOperation.OpDialog, 
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

### <a id="VM_Operations_Pre_Durability_ShowGearDurability__ctor_VM_Managed_Document_"></a> ShowGearDurability\(Document\)

```csharp
public ShowGearDurability(Document doc)
```

#### Parameters

`doc` Document

## Methods

### <a id="VM_Operations_Pre_Durability_ShowGearDurability_ShowDialog"></a> ShowDialog\(\)

```csharp
protected override void ShowDialog()
```

