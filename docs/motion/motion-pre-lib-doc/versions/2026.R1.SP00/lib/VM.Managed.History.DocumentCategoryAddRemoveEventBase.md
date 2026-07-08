# Class DocumentCategoryAddRemoveEventBase
<a id="VM_Managed_History_DocumentCategoryAddRemoveEventBase"></a>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public abstract class DocumentCategoryAddRemoveEventBase : HistoryEvent
```

#### Inheritance

object ← 
[HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs) ← 
[DocumentCategoryAddRemoveEventBase](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md)

#### Derived

[DocumentCategoryAddEvent](VM.Managed.History.DocumentCategoryAddEvent.md), 
[DocumentCategoryRemoveEvent](VM.Managed.History.DocumentCategoryRemoveEvent.md)

#### Inherited Members

[HistoryEvent.ClearEvent\(bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.Undo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.Redo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.Clear\(bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.BeforeUndo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.AfterUndo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.BeforeRedo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.AfterRedo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.BeforeAdded\(AddToHistoryManagerEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.AfterAdded\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.IsValid](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_History_DocumentCategoryAddRemoveEventBase__ctor_VM_Managed_Document_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_Collections_LinkLinkedList_VM_Managed_ObjectBase_VM_Managed_Child_VM_Managed_ObjectBase_VM_Managed_LinkContainer_Update___"></a> DocumentCategoryAddRemoveEventBase\(Document, ObjectBase, ObjectBase, LinkLinkedList<ObjectBase, Child<ObjectBase, Update\>\>\)

```csharp
protected DocumentCategoryAddRemoveEventBase(Document document, ObjectBase obj, ObjectBase objAfter, LinkLinkedList<ObjectBase, Child<ObjectBase, LinkContainer.Update>> category)
```

#### Parameters

`document` [Document](VM.Managed.Document.md)

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`objAfter` [ObjectBase](VM.Managed.ObjectBase.md)

`category` [LinkLinkedList](VM.Managed.Collections.LinkLinkedList\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [Child](VM.Managed.Child\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>\>

## Fields

### <a id="VM_Managed_History_DocumentCategoryAddRemoveEventBase_m_category"></a> m\_category

```csharp
protected LinkLinkedList<ObjectBase, Child<ObjectBase, LinkContainer.Update>> m_category
```

#### Field Value

 [LinkLinkedList](VM.Managed.Collections.LinkLinkedList\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [Child](VM.Managed.Child\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>\>

### <a id="VM_Managed_History_DocumentCategoryAddRemoveEventBase_m_doc"></a> m\_doc

```csharp
protected Document3D m_doc
```

#### Field Value

 [Document3D](VM.Managed.Document3D.md)

### <a id="VM_Managed_History_DocumentCategoryAddRemoveEventBase_m_objAfterKey"></a> m\_objAfterKey

```csharp
protected UIntPtr m_objAfterKey
```

#### Field Value

 UIntPtr

### <a id="VM_Managed_History_DocumentCategoryAddRemoveEventBase_m_objKey"></a> m\_objKey

```csharp
protected UIntPtr m_objKey
```

#### Field Value

 UIntPtr

## Methods

### <a id="VM_Managed_History_DocumentCategoryAddRemoveEventBase_AddEventCore_VM_Models_Pre_IDocument_VM_Managed_History_HistoryEvent_"></a> AddEventCore\(IDocument, HistoryEvent\)

```csharp
public static void AddEventCore(IDocument doc, HistoryEvent eventHist)
```

#### Parameters

`doc` IDocument

`eventHist` [HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs)

### <a id="VM_Managed_History_DocumentCategoryAddRemoveEventBase_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` bool

### <a id="VM_Managed_History_DocumentCategoryAddRemoveEventBase_GetObjectFromKey_System_UIntPtr_"></a> GetObjectFromKey\(UIntPtr\)

```csharp
protected ObjectBase GetObjectFromKey(UIntPtr key)
```

#### Parameters

`key` UIntPtr

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_History_DocumentCategoryAddRemoveEventBase_IsAvailableEvent_VM_Models_Pre_IDocument_"></a> IsAvailableEvent\(IDocument\)

```csharp
public static bool IsAvailableEvent(IDocument doc)
```

#### Parameters

`doc` IDocument

#### Returns

 bool

