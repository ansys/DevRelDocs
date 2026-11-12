# Class AddOpForSubEntity
<a id="AddOpForSubEntity"></a>

Namespace:   
Assembly: dfpreOp.dll  

```csharp
public class AddOpForSubEntity : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[AddOpForSubEntity](AddOpForSubEntity.md)

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

### <a id="AddOpForSubEntity__ctor_VM_Managed_Operation_JournalParameter_"></a> AddOpForSubEntity\(JournalParameter\)

```csharp
public AddOpForSubEntity(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

### <a id="AddOpForSubEntity__ctor_System_Type_System_String_VM_Managed_Document_VM_Managed_SymmetricType_"></a> AddOpForSubEntity\(Type, string, Document, SymmetricType\)

```csharp
public AddOpForSubEntity(Type type, string strXml, Document doc, SymmetricType sym_type)
```

#### Parameters

`type` Type

`strXml` string

`doc` Document

`sym_type` SymmetricType

## Fields

### <a id="AddOpForSubEntity_m_doc"></a> m\_doc

```csharp
public Document m_doc
```

#### Field Value

 Document

### <a id="AddOpForSubEntity_m_key"></a> m\_key

```csharp
public UIntPtr m_key
```

#### Field Value

 UIntPtr

### <a id="AddOpForSubEntity_m_strNewName"></a> m\_strNewName

```csharp
public string m_strNewName
```

#### Field Value

 string

### <a id="AddOpForSubEntity_m_strTypeFullName"></a> m\_strTypeFullName

```csharp
public string m_strTypeFullName
```

#### Field Value

 string

### <a id="AddOpForSubEntity_m_strXml"></a> m\_strXml

```csharp
public string m_strXml
```

#### Field Value

 string

### <a id="AddOpForSubEntity_m_symType"></a> m\_symType

```csharp
public SymmetricType m_symType
```

#### Field Value

 SymmetricType

### <a id="AddOpForSubEntity_m_type"></a> m\_type

```csharp
public Type m_type
```

#### Field Value

 Type

## Properties

### <a id="AddOpForSubEntity_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="AddOpForSubEntity_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="AddOpForSubEntity_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

