# Class UpdateOpForSubEntity
<a id="UpdateOpForSubEntity"></a>

Namespace:   
Assembly: dfpreOp.dll  

```csharp
public class UpdateOpForSubEntity : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[UpdateOpForSubEntity](UpdateOpForSubEntity.md)

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

### <a id="UpdateOpForSubEntity__ctor_VM_Managed_Operation_JournalParameter_"></a> UpdateOpForSubEntity\(JournalParameter\)

```csharp
public UpdateOpForSubEntity(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

### <a id="UpdateOpForSubEntity__ctor_System_String_VM_Managed_Document_VM_Managed_SymmetricType_"></a> UpdateOpForSubEntity\(string, Document, SymmetricType\)

```csharp
public UpdateOpForSubEntity(string strXml, Document doc, SymmetricType sym_type)
```

#### Parameters

`strXml` string

`doc` Document

`sym_type` SymmetricType

## Fields

### <a id="UpdateOpForSubEntity_g_bHistoryMerge"></a> g\_bHistoryMerge

```csharp
public static bool g_bHistoryMerge
```

#### Field Value

 bool

### <a id="UpdateOpForSubEntity_g_strOperationName"></a> g\_strOperationName

```csharp
public static string g_strOperationName
```

#### Field Value

 string

### <a id="UpdateOpForSubEntity_m_doc"></a> m\_doc

```csharp
public Document m_doc
```

#### Field Value

 Document

### <a id="UpdateOpForSubEntity_m_seNew"></a> m\_seNew

```csharp
public SubEntity m_seNew
```

#### Field Value

 SubEntity

### <a id="UpdateOpForSubEntity_m_strOldName"></a> m\_strOldName

```csharp
public string m_strOldName
```

#### Field Value

 string

### <a id="UpdateOpForSubEntity_m_strXml"></a> m\_strXml

```csharp
public string m_strXml
```

#### Field Value

 string

### <a id="UpdateOpForSubEntity_m_symType"></a> m\_symType

```csharp
public SymmetricType m_symType
```

#### Field Value

 SymmetricType

## Properties

### <a id="UpdateOpForSubEntity_IsHistoryMerge"></a> IsHistoryMerge

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 bool

### <a id="UpdateOpForSubEntity_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="UpdateOpForSubEntity_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="UpdateOpForSubEntity_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

