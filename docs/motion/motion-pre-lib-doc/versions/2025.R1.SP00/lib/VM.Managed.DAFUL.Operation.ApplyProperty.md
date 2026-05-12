#  Class ApplyProperty

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

The apply property operation

```csharp
public class ApplyProperty : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[ApplyProperty](VM.Managed.DAFUL.Operation.ApplyProperty.md)

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

### <a id="VM_Managed_DAFUL_Operation_ApplyProperty__ctor_System_String_VM_Managed_Document_"></a> ApplyProperty\(string, Document\)

```csharp
public ApplyProperty(string xmlString, Document doc)
```

#### Parameters

`xmlString` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` Document

### <a id="VM_Managed_DAFUL_Operation_ApplyProperty__ctor_System_String_VM_Managed_Document_System_Windows_Forms_TabControl_System_Xml_XmlDocument_System_Boolean_System_Boolean_"></a> ApplyProperty\(string, Document, TabControl, XmlDocument, bool, bool\)

```csharp
public ApplyProperty(string xmlString, Document doc, TabControl pzTabBase, XmlDocument Result, bool bCheckSym, bool bMulti)
```

#### Parameters

`xmlString` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` Document

`pzTabBase` [TabControl](https://learn.microsoft.com/dotnet/api/system.windows.forms.tabcontrol)

`Result` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

`bCheckSym` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bMulti` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Operation_ApplyProperty__ctor_System_String_VM_Managed_Document_System_Windows_Forms_TabControl_System_Xml_XmlDocument_System_Boolean_System_Boolean_System_String_System_String_System_Boolean_"></a> ApplyProperty\(string, Document, TabControl, XmlDocument, bool, bool, string, string, bool\)

```csharp
public ApplyProperty(string xmlString, Document doc, TabControl pzTabBase, XmlDocument Result, bool bCheckSym, bool bMulti, string strOppName, string strOldName, bool bModified)
```

#### Parameters

`xmlString` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` Document

`pzTabBase` [TabControl](https://learn.microsoft.com/dotnet/api/system.windows.forms.tabcontrol)

`Result` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

`bCheckSym` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bMulti` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`strOppName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strOldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bModified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Operation_ApplyProperty__ctor_VM_Managed_Operation_JournalParameter_"></a> ApplyProperty\(JournalParameter\)

```csharp
public ApplyProperty(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_Operation_ApplyProperty_IsHistoryMerge"></a> IsHistoryMerge

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Operation_ApplyProperty_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Operation_ApplyProperty_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Operation_ApplyProperty_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### <a id="VM_Managed_DAFUL_Operation_ApplyProperty_ReloadData"></a> ReloadData\(\)

```csharp
public void ReloadData()
```

