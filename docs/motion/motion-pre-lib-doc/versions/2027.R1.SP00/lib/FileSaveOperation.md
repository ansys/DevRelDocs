# Class FileSaveOperation
<a id="FileSaveOperation"></a>

Namespace:   
Assembly: dfpreOp.dll  

```csharp
public class FileSaveOperation : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[FileSaveOperation](FileSaveOperation.md)

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

### <a id="FileSaveOperation__ctor_VM_Managed_Operation_JournalParameter_"></a> FileSaveOperation\(JournalParameter\)

```csharp
public FileSaveOperation(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

### <a id="FileSaveOperation__ctor_System_String_System_Boolean_VM_Models_Pre_IDocument_"></a> FileSaveOperation\(string, bool, IDocument\)

```csharp
public FileSaveOperation(string strPathName, bool bUseAutoSave, IDocument doc)
```

#### Parameters

`strPathName` string

`bUseAutoSave` bool

`doc` IDocument

### <a id="FileSaveOperation__ctor_System_String_VM_Models_Pre_IDocument_"></a> FileSaveOperation\(string, IDocument\)

```csharp
public FileSaveOperation(string strPathName, IDocument doc)
```

#### Parameters

`strPathName` string

`doc` IDocument

### <a id="FileSaveOperation__ctor"></a> FileSaveOperation\(\)

```csharp
public FileSaveOperation()
```

## Fields

### <a id="FileSaveOperation_g_ExtraExecute3DOrPropertyDocumentImpl"></a> g\_ExtraExecute3DOrPropertyDocumentImpl

```csharp
public static FileSaveOperation.ExtraExecute3DOrPropertyDocument g_ExtraExecute3DOrPropertyDocumentImpl
```

#### Field Value

 [FileSaveOperation](FileSaveOperation.md).[ExtraExecute3DOrPropertyDocument](FileSaveOperation.ExtraExecute3DOrPropertyDocument.md)

### <a id="FileSaveOperation_g_ExtraExecuteWorkOrModelImpl"></a> g\_ExtraExecuteWorkOrModelImpl

```csharp
public static FileSaveOperation.ExtraExecuteWorkOrModel g_ExtraExecuteWorkOrModelImpl
```

#### Field Value

 [FileSaveOperation](FileSaveOperation.md).[ExtraExecuteWorkOrModel](FileSaveOperation.ExtraExecuteWorkOrModel.md)

## Properties

### <a id="FileSaveOperation_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="FileSaveOperation_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="FileSaveOperation_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

### <a id="FileSaveOperation_GetResult"></a> GetResult\(\)

```csharp
public int GetResult()
```

#### Returns

 int

