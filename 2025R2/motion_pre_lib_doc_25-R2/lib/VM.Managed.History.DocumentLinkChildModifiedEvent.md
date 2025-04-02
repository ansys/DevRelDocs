#  Class DocumentLinkChildModifiedEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class DocumentLinkChildModifiedEvent : DocumentMemberModifiedEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[DocumentMemberModifiedEvent](VM.Managed.History.DocumentMemberModifiedEvent.md) ← 
[DocumentLinkChildModifiedEvent](VM.Managed.History.DocumentLinkChildModifiedEvent.md)

#### Inherited Members

[DocumentMemberModifiedEvent.m\_doc](VM.Managed.History.DocumentMemberModifiedEvent.md\#VM\_Managed\_History\_DocumentMemberModifiedEvent\_m\_doc), 
[DocumentMemberModifiedEvent.m\_obj](VM.Managed.History.DocumentMemberModifiedEvent.md\#VM\_Managed\_History\_DocumentMemberModifiedEvent\_m\_obj), 
[DocumentMemberModifiedEvent.Clear\(bool\)](VM.Managed.History.DocumentMemberModifiedEvent.md\#VM\_Managed\_History\_DocumentMemberModifiedEvent\_Clear\_System\_Boolean\_), 
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

## Constructors

### <a id="VM_Managed_History_DocumentLinkChildModifiedEvent__ctor_VM_Managed_Document_System_Object_System_String_System_Boolean_"></a> DocumentLinkChildModifiedEvent\(Document, object, string, bool\)

```csharp
protected DocumentLinkChildModifiedEvent(Document doc, object obj, string strPropertyName, bool bChild)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_DocumentLinkChildModifiedEvent__ctor_VM_Managed_Document_System_Object_System_String_"></a> DocumentLinkChildModifiedEvent\(Document, object, string\)

```csharp
protected DocumentLinkChildModifiedEvent(Document doc, object obj, string strPropertyName)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_History_DocumentLinkChildModifiedEvent__ctor"></a> DocumentLinkChildModifiedEvent\(\)

```csharp
protected DocumentLinkChildModifiedEvent()
```

## Methods

### <a id="VM_Managed_History_DocumentLinkChildModifiedEvent_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_DocumentLinkChildModifiedEvent_DocumentLinkChildModified_VM_Managed_Document_System_Object_System_String_System_Boolean_"></a> DocumentLinkChildModified\(Document, object, string, bool\)

```csharp
public static void DocumentLinkChildModified(Document doc, object obj, string strPropertyName, bool bChild)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_DocumentLinkChildModifiedEvent_DocumentLinkChildModified_VM_Managed_Document_System_Object_System_String_"></a> DocumentLinkChildModified\(Document, object, string\)

```csharp
public static void DocumentLinkChildModified(Document doc, object obj, string strPropertyName)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_History_DocumentLinkChildModifiedEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_DocumentLinkChildModifiedEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

