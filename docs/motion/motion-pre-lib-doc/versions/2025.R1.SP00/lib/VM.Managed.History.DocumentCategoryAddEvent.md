#  Class DocumentCategoryAddEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class DocumentCategoryAddEvent : DocumentCategoryAddRemoveEventBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[DocumentCategoryAddRemoveEventBase](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md) ← 
[DocumentCategoryAddEvent](VM.Managed.History.DocumentCategoryAddEvent.md)

#### Inherited Members

[DocumentCategoryAddRemoveEventBase.m\_doc](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md\#VM\_Managed\_History\_DocumentCategoryAddRemoveEventBase\_m\_doc), 
[DocumentCategoryAddRemoveEventBase.m\_objKey](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md\#VM\_Managed\_History\_DocumentCategoryAddRemoveEventBase\_m\_objKey), 
[DocumentCategoryAddRemoveEventBase.m\_objAfterKey](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md\#VM\_Managed\_History\_DocumentCategoryAddRemoveEventBase\_m\_objAfterKey), 
[DocumentCategoryAddRemoveEventBase.m\_category](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md\#VM\_Managed\_History\_DocumentCategoryAddRemoveEventBase\_m\_category), 
[DocumentCategoryAddRemoveEventBase.Clear\(bool\)](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md\#VM\_Managed\_History\_DocumentCategoryAddRemoveEventBase\_Clear\_System\_Boolean\_), 
[DocumentCategoryAddRemoveEventBase.GetObjectFromKey\(UIntPtr\)](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md\#VM\_Managed\_History\_DocumentCategoryAddRemoveEventBase\_GetObjectFromKey\_System\_UIntPtr\_), 
[DocumentCategoryAddRemoveEventBase.IsAvailableEvent\(IDocument\)](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md\#VM\_Managed\_History\_DocumentCategoryAddRemoveEventBase\_IsAvailableEvent\_VM\_Models\_Pre\_IDocument\_), 
[DocumentCategoryAddRemoveEventBase.AddEventCore\(IDocument, HistoryEvent\)](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md\#VM\_Managed\_History\_DocumentCategoryAddRemoveEventBase\_AddEventCore\_VM\_Models\_Pre\_IDocument\_VM\_Managed\_History\_HistoryEvent\_), 
HistoryEvent.ClearEvent\(bool\), 
HistoryEvent.Undo\(HistoryEventArgs\), 
HistoryEvent.Redo\(HistoryEventArgs\), 
HistoryEvent.Clear\(bool\), 
HistoryEvent.BeforeUndo\(HistoryEventArgs\), 
HistoryEvent.AfterUndo\(HistoryEventArgs\), 
HistoryEvent.BeforeRedo\(HistoryEventArgs\), 
HistoryEvent.AfterRedo\(HistoryEventArgs\), 
HistoryEvent.BeforeAdded\(AddToHistoryManagerEventArgs\), 
HistoryEvent.AfterAdded\(HistoryEventArgs\), 
HistoryEvent.IsValid

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_History_DocumentCategoryAddEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
public override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_DocumentCategoryAddEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
public override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

