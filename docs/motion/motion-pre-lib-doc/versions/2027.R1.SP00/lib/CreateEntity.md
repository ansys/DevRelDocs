# Class CreateEntity
<a id="CreateEntity"></a>

Namespace:   
Assembly: dfpreOp.dll  

```csharp
public class CreateEntity : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[CreateEntity](CreateEntity.md)

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

### <a id="CreateEntity__ctor_VM_Managed_Operation_JournalParameter_"></a> CreateEntity\(JournalParameter\)

```csharp
public CreateEntity(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

### <a id="CreateEntity__ctor_System_String_System_Type_System_Collections_Generic_List_System_String__System_String_"></a> CreateEntity\(string, Type, List<string\>, string\)

```csharp
public CreateEntity(string str, Type typeBuilder, List<string> lstSetPointXML, string strBuildName)
```

#### Parameters

`str` string

`typeBuilder` Type

`lstSetPointXML` List<string\>

`strBuildName` string

### <a id="CreateEntity__ctor_System_String_System_Type_System_String_"></a> CreateEntity\(string, Type, string\)

```csharp
public CreateEntity(string str, Type typeBuilder, string strBuildName)
```

#### Parameters

`str` string

`typeBuilder` Type

`strBuildName` string

## Properties

### <a id="CreateEntity_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="CreateEntity_Build"></a> Build\(\)

```csharp
public void Build()
```

### <a id="CreateEntity_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="CreateEntity_GetBuildObject"></a> GetBuildObject\(\)

```csharp
public ObjectBase GetBuildObject()
```

#### Returns

 ObjectBase

### <a id="CreateEntity_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

### <a id="CreateEntity_Success"></a> Success\(\)

```csharp
public bool Success()
```

#### Returns

 bool

### <a id="CreateEntity_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` IList<string\>

#### Returns

 bool

