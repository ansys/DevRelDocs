# Class DocumentSimpleValueModifiedEvent<T\>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class DocumentSimpleValueModifiedEvent<T> : DocumentMemberModifiedEvent
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[DocumentMemberModifiedEvent](VM.Managed.History.DocumentMemberModifiedEvent.md) ← 
[DocumentSimpleValueModifiedEvent<T\>](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)

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

### DocumentSimpleValueModifiedEvent\(\)

```csharp
public DocumentSimpleValueModifiedEvent()
```

### DocumentSimpleValueModifiedEvent\(Document, object, string, object, IUpdateDocAddOn\[\]\)

```csharp
public DocumentSimpleValueModifiedEvent(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

### DocumentSimpleValueModifiedEvent\(Document, object, string, object, object, PreExecuteCallback\)

```csharp
public DocumentSimpleValueModifiedEvent(Document doc, object obj, string strPropertyName, object objTarget, object objParam, DocumentSimpleValueModifiedEvent<T>.PreExecuteCallback delPreExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`objParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

`delPreExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PreExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PreExecuteCallback.md)

### DocumentSimpleValueModifiedEvent\(Document, object, string, object, object, PostExecuteCallback\)

```csharp
public DocumentSimpleValueModifiedEvent(Document doc, object obj, string strPropertyName, object objTarget, object objParam, DocumentSimpleValueModifiedEvent<T>.PostExecuteCallback delPostExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`objParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

`delPostExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PostExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PostExecuteCallback.md)

### DocumentSimpleValueModifiedEvent\(Document, object, string, object, IUpdateDocAddOn\[\], object, PreExecuteCallback\)

```csharp
public DocumentSimpleValueModifiedEvent(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn, object objParam, DocumentSimpleValueModifiedEvent<T>.PreExecuteCallback delPreExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

`objParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

`delPreExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PreExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PreExecuteCallback.md)

### DocumentSimpleValueModifiedEvent\(Document, object, string, object, IUpdateDocAddOn\[\], object, PostExecuteCallback\)

```csharp
public DocumentSimpleValueModifiedEvent(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn, object objParam, DocumentSimpleValueModifiedEvent<T>.PostExecuteCallback delPostExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

`objParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

`delPostExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PostExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PostExecuteCallback.md)

## Fields

### PostExecute

```csharp
public DocumentSimpleValueModifiedEvent<T>.PostExecuteCallback PostExecute
```

#### Field Value

 [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PostExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PostExecuteCallback.md)

### PreExecute

```csharp
public DocumentSimpleValueModifiedEvent<T>.PreExecuteCallback PreExecute
```

#### Field Value

 [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PreExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PreExecuteCallback.md)

### m\_arAddOn

```csharp
protected IUpdateDocAddOn[] m_arAddOn
```

#### Field Value

 [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

### m\_objParam

```csharp
protected object m_objParam
```

#### Field Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### m\_strPropertyName

```csharp
protected string m_strPropertyName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### m\_value

```csharp
protected T m_value
```

#### Field Value

 T

## Methods

### AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### BeforeRedo\(HistoryEventArgs\)

```csharp
protected override void BeforeRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### BeforeUndo\(HistoryEventArgs\)

```csharp
protected override void BeforeUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DocumentSimpleValueModified\(Document, object, string\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### DocumentSimpleValueModified\(Document, object, string, object\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

### DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\]\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

### DocumentSimpleValueModified\(Document, object, string, object, object, PreExecuteCallback\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget, object objParam, DocumentSimpleValueModifiedEvent<T>.PreExecuteCallback delPreExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`objParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

`delPreExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PreExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PreExecuteCallback.md)

### DocumentSimpleValueModified\(Document, object, string, object, object, PostExecuteCallback\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget, object objParam, DocumentSimpleValueModifiedEvent<T>.PostExecuteCallback delPostExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`objParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

`delPostExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PostExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PostExecuteCallback.md)

### DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\], object, PreExecuteCallback\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn, object objParam, DocumentSimpleValueModifiedEvent<T>.PreExecuteCallback delPreExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

`objParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

`delPreExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PreExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PreExecuteCallback.md)

### DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\], object, PostExecuteCallback\)

```csharp
public static void DocumentSimpleValueModified(Document doc, object obj, string strPropertyName, object objTarget, IUpdateDocAddOn[] arAddOn, object objParam, DocumentSimpleValueModifiedEvent<T>.PostExecuteCallback delPostExecute)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arAddOn` [IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)\[\]

`objParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

`delPostExecute` [DocumentSimpleValueModifiedEvent](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)<T\>.[PostExecuteCallback](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.PostExecuteCallback.md)

### Redo\(HistoryEventArgs\)

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### Undo\(HistoryEventArgs\)

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs


