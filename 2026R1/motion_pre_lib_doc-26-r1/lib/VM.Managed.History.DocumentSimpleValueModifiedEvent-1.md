# Class DocumentSimpleValueModifiedEvent<T\>
<a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1"></a>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class DocumentSimpleValueModifiedEvent<T> : DocumentMemberModifiedEvent
```

#### Type Parameters

`T` 

#### Inheritance

object ← 
[HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs) ← 
[DocumentMemberModifiedEvent](VM.Managed.History.DocumentMemberModifiedEvent.md) ← 
[DocumentSimpleValueModifiedEvent<T\>](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)

#### Inherited Members

[DocumentMemberModifiedEvent.m\_doc](VM.Managed.History.DocumentMemberModifiedEvent.md\#VM\_Managed\_History\_DocumentMemberModifiedEvent\_m\_doc), 
[DocumentMemberModifiedEvent.m\_obj](VM.Managed.History.DocumentMemberModifiedEvent.md\#VM\_Managed\_History\_DocumentMemberModifiedEvent\_m\_obj), 
[DocumentMemberModifiedEvent.Clear\(bool\)](VM.Managed.History.DocumentMemberModifiedEvent.md\#VM\_Managed\_History\_DocumentMemberModifiedEvent\_Clear\_System\_Boolean\_), 
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

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1__ctor"></a> DocumentSimpleValueModifiedEvent\(\)

```csharp
public DocumentSimpleValueModifiedEvent()
```

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1__ctor_VM_Managed_Document_System_Object_System_String_System_Object_VM_Managed_History_IUpdateDocAddOn___"></a> DocumentSimpleValueModifiedEvent\(Document, object, string, object, IUpdateDocAddOn\[\]\)

```csharp
public DocumentSimpleValueModifiedEvent(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1__ctor_VM_Managed_Document_System_Object_System_String_System_Object_System_Object_VM_Managed_History_DocumentSimpleValueModifiedEvent__0__PreExecuteCallback_"></a> DocumentSimpleValueModifiedEvent\(Document, object, string, object, object, PreExecuteCallback\)

```csharp
public DocumentSimpleValueModifiedEvent(Document doc, object obj, string strPropertyName, object objTarget, object objParam, DocumentSimpleValueModifiedEvent<T>.PreExecuteCallback delPreExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

`objParam` object

`delPreExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PreExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PreExecuteCallback.md)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1__ctor_VM_Managed_Document_System_Object_System_String_System_Object_System_Object_VM_Managed_History_DocumentSimpleValueModifiedEvent__0__PostExecuteCallback_"></a> DocumentSimpleValueModifiedEvent\(Document, object, string, object, object, PostExecuteCallback\)

```csharp
public DocumentSimpleValueModifiedEvent(Document doc, object obj, string strPropertyName, object objTarget, object objParam, DocumentSimpleValueModifiedEvent<T>.PostExecuteCallback delPostExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

`objParam` object

`delPostExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PostExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PostExecuteCallback.md)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1__ctor_VM_Managed_Document_System_Object_System_String_System_Object_VM_Managed_History_IUpdateDocAddOn___System_Object_VM_Managed_History_DocumentSimpleValueModifiedEvent__0__PreExecuteCallback_"></a> DocumentSimpleValueModifiedEvent\(Document, object, string, object, IUpdateDocAddOn\[\], object, PreExecuteCallback\)

```csharp
public DocumentSimpleValueModifiedEvent(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn, object objParam, DocumentSimpleValueModifiedEvent<T>.PreExecuteCallback delPreExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

`objParam` object

`delPreExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PreExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PreExecuteCallback.md)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1__ctor_VM_Managed_Document_System_Object_System_String_System_Object_VM_Managed_History_IUpdateDocAddOn___System_Object_VM_Managed_History_DocumentSimpleValueModifiedEvent__0__PostExecuteCallback_"></a> DocumentSimpleValueModifiedEvent\(Document, object, string, object, IUpdateDocAddOn\[\], object, PostExecuteCallback\)

```csharp
public DocumentSimpleValueModifiedEvent(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn, object objParam, DocumentSimpleValueModifiedEvent<T>.PostExecuteCallback delPostExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

`objParam` object

`delPostExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PostExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PostExecuteCallback.md)

## Fields

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_PostExecute"></a> PostExecute

```csharp
public DocumentSimpleValueModifiedEvent<T>.PostExecuteCallback PostExecute
```

#### Field Value

 [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PostExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PostExecuteCallback.md)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_PreExecute"></a> PreExecute

```csharp
public DocumentSimpleValueModifiedEvent<T>.PreExecuteCallback PreExecute
```

#### Field Value

 [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PreExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PreExecuteCallback.md)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_m_arAddOn"></a> m\_arAddOn

```csharp
protected IUpdateDocAddOn[] m_arAddOn
```

#### Field Value

 [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_m_objParam"></a> m\_objParam

```csharp
protected object m_objParam
```

#### Field Value

 object

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_m_strPropertyName"></a> m\_strPropertyName

```csharp
protected string m_strPropertyName
```

#### Field Value

 string

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_m_value"></a> m\_value

```csharp
protected T m_value
```

#### Field Value

 T

## Methods

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_BeforeRedo_VM_Managed_History_HistoryEventArgs_"></a> BeforeRedo\(HistoryEventArgs\)

```csharp
protected override void BeforeRedo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_BeforeUndo_VM_Managed_History_HistoryEventArgs_"></a> BeforeUndo\(HistoryEventArgs\)

```csharp
protected override void BeforeUndo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` bool

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_DocumentSimpleValueModified_VM_Managed_Document_System_Object_System_String_"></a> DocumentSimpleValueModified\(Document, object, string\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_DocumentSimpleValueModified_VM_Managed_Document_System_Object_System_String_System_Object_"></a> DocumentSimpleValueModified\(Document, object, string, object\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_DocumentSimpleValueModified_VM_Managed_Document_System_Object_System_String_System_Object_VM_Managed_History_IUpdateDocAddOn___"></a> DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\]\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_DocumentSimpleValueModified_VM_Managed_Document_System_Object_System_String_System_Object_System_Object_VM_Managed_History_DocumentSimpleValueModifiedEvent__0__PreExecuteCallback_"></a> DocumentSimpleValueModified\(Document, object, string, object, object, PreExecuteCallback\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget, object objParam, DocumentSimpleValueModifiedEvent<T>.PreExecuteCallback delPreExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

`objParam` object

`delPreExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PreExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PreExecuteCallback.md)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_DocumentSimpleValueModified_VM_Managed_Document_System_Object_System_String_System_Object_System_Object_VM_Managed_History_DocumentSimpleValueModifiedEvent__0__PostExecuteCallback_"></a> DocumentSimpleValueModified\(Document, object, string, object, object, PostExecuteCallback\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget, object objParam, DocumentSimpleValueModifiedEvent<T>.PostExecuteCallback delPostExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

`objParam` object

`delPostExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PostExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PostExecuteCallback.md)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_DocumentSimpleValueModified_VM_Managed_Document_System_Object_System_String_System_Object_VM_Managed_History_IUpdateDocAddOn___System_Object_VM_Managed_History_DocumentSimpleValueModifiedEvent__0__PreExecuteCallback_"></a> DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\], object, PreExecuteCallback\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn, object objParam, DocumentSimpleValueModifiedEvent<T>.PreExecuteCallback delPreExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

`objParam` object

`delPreExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PreExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PreExecuteCallback.md)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_DocumentSimpleValueModified_VM_Managed_Document_System_Object_System_String_System_Object_VM_Managed_History_IUpdateDocAddOn___System_Object_VM_Managed_History_DocumentSimpleValueModifiedEvent__0__PostExecuteCallback_"></a> DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\], object, PostExecuteCallback\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn, object objParam, DocumentSimpleValueModifiedEvent<T>.PostExecuteCallback delPostExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` object

`strPropertyName` string

`objTarget` object

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

`objParam` object

`delPostExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PostExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PostExecuteCallback.md)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_DocumentSimpleValueModifiedEvent_1_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

