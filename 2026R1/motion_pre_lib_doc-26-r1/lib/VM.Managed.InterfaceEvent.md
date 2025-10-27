# Class InterfaceEvent
<a id="VM_Managed_InterfaceEvent"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent [interface event].

```csharp
public abstract class InterfaceEvent : DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo>>
```

#### Inheritance

object ← 
[HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs) ← 
DocumentMemberModifiedEvent ← 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\> ← 
[InterfaceEvent](VM.Managed.InterfaceEvent.md)

#### Derived

[InterfaceAddEvent](VM.Managed.InterfaceAddEvent.md), 
[InterfaceRemoveEvent](VM.Managed.InterfaceRemoveEvent.md)

#### Inherited Members

DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PreExecute, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PostExecute, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.m\_value, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.m\_strPropertyName, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.m\_arAddOn, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.m\_objParam, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.Undo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.Redo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.BeforeUndo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.BeforeRedo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.AfterUndo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.AfterRedo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.Clear\(bool\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\]\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object, object, DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PreExecuteCallback\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object, object, DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PostExecuteCallback\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\], object, DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PreExecuteCallback\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\], object, DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PostExecuteCallback\), 
DocumentMemberModifiedEvent.m\_doc, 
DocumentMemberModifiedEvent.m\_obj, 
DocumentMemberModifiedEvent.Clear\(bool\), 
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

### <a id="VM_Managed_InterfaceEvent__ctor_VM_Managed_Document_System_Object_System_String_System_Object_System_Object_VM_Managed_History_DocumentSimpleValueModifiedEvent_System_Collections_Generic_List_VM_Managed_InterfaceManager_InterfaceInfoForUndo___PostExecuteCallback_System_String_"></a> InterfaceEvent\(Document, object, string, object, object, PostExecuteCallback, string\)

Initializes a new instance of the <xref href="VM.Managed.InterfaceEvent" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InterfaceEvent(Document doc, object obj, string strPropertyName, object objTarget, object objParam, DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo>>.PostExecuteCallback delPostExecute, string strXML)
```

#### Parameters

`doc` Document

`obj` object

`strPropertyName` string

`objTarget` object

`objParam` object

`delPostExecute` DocumentSimpleValueModifiedEvent<List<[InterfaceManager](VM.Managed.InterfaceManager.md).[InterfaceInfoForUndo](VM.Managed.InterfaceManager.InterfaceInfoForUndo.md)\>\>.PostExecuteCallback

`strXML` string

## Methods

### <a id="VM_Managed_InterfaceEvent_Add"></a> Add\(\)

Add

```csharp
protected void Add()
```

### <a id="VM_Managed_InterfaceEvent_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

After redo.
<param name="args">The argument</param>

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_InterfaceEvent_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

After undo.
<param name="args">The argument</param>

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_InterfaceEvent_Remove"></a> Remove\(\)

Remove

```csharp
protected void Remove()
```

