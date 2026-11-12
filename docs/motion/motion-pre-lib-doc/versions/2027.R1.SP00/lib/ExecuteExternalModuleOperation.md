# Class ExecuteExternalModuleOperation
<a id="ExecuteExternalModuleOperation"></a>

Namespace:   
Assembly: dfpreOp.dll  

```csharp
public class ExecuteExternalModuleOperation : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[ExecuteExternalModuleOperation](ExecuteExternalModuleOperation.md)

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

### <a id="ExecuteExternalModuleOperation__ctor_VM_Managed_Operation_JournalParameter_"></a> ExecuteExternalModuleOperation\(JournalParameter\)

```csharp
public ExecuteExternalModuleOperation(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

### <a id="ExecuteExternalModuleOperation__ctor_System_String_System_String_System_String_"></a> ExecuteExternalModuleOperation\(string, string, string\)

```csharp
public ExecuteExternalModuleOperation(string strModulePath, string strVersion, string strArgument)
```

#### Parameters

`strModulePath` string

`strVersion` string

`strArgument` string

### <a id="ExecuteExternalModuleOperation__ctor_System_String_System_String_"></a> ExecuteExternalModuleOperation\(string, string\)

```csharp
public ExecuteExternalModuleOperation(string strModulePath, string strVersion)
```

#### Parameters

`strModulePath` string

`strVersion` string

## Properties

### <a id="ExecuteExternalModuleOperation_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="ExecuteExternalModuleOperation_EndRecordAllDocument"></a> EndRecordAllDocument\(\)

```csharp
public void EndRecordAllDocument()
```

### <a id="ExecuteExternalModuleOperation_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="ExecuteExternalModuleOperation_GetHistoryManager"></a> GetHistoryManager\(\)

```csharp
public HistoryManager GetHistoryManager()
```

#### Returns

 HistoryManager

### <a id="ExecuteExternalModuleOperation_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

### <a id="ExecuteExternalModuleOperation_StartRecordAllDocument"></a> StartRecordAllDocument\(\)

```csharp
public void StartRecordAllDocument()
```

