#  Class ImportPythonCode

Namespace: [VM.Operations.Pre.SubEntity](VM.Operations.Pre.SubEntity.md)  
Assembly: VM.Operations.Pre.SubEntity.dll  

This operation implements the method to import python code into document

```csharp
public class ImportPythonCode : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[ImportPythonCode](VM.Operations.Pre.SubEntity.ImportPythonCode.md)

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

### <a id="VM_Operations_Pre_SubEntity_ImportPythonCode__ctor_VM_Managed_Document_System_String___"></a> ImportPythonCode\(Document, params string\[\]\)

Construct <xref href="VM.Operations.Pre.SubEntity.ImportPythonCode" data-throw-if-not-resolved="false"></xref> operation

```csharp
public ImportPythonCode(Document doc, params string[] pathPythonCodes)
```

#### Parameters

`doc` Document

The <xref href="VM.Managed.Document" data-throw-if-not-resolved="false"></xref> to import python code

`pathPythonCodes` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

Additional pathes to python codes

### <a id="VM_Operations_Pre_SubEntity_ImportPythonCode__ctor_VM_Managed_Document_System_Collections_Generic_IEnumerable_System_String__"></a> ImportPythonCode\(Document, IEnumerable<string\>\)

Construct <xref href="VM.Operations.Pre.SubEntity.ImportPythonCode" data-throw-if-not-resolved="false"></xref> operation

```csharp
public ImportPythonCode(Document doc, IEnumerable<string> pathPythonCodes)
```

#### Parameters

`doc` Document

The <xref href="VM.Managed.Document" data-throw-if-not-resolved="false"></xref> to import python code

`pathPythonCodes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Pathes to python codes.

### <a id="VM_Operations_Pre_SubEntity_ImportPythonCode__ctor_VM_Managed_Operation_JournalParameter_"></a> ImportPythonCode\(JournalParameter\)

Construct <xref href="VM.Operations.Pre.SubEntity.ImportPythonCode" data-throw-if-not-resolved="false"></xref> operation

```csharp
public ImportPythonCode(JournalParameter journalParameter)
```

#### Parameters

`journalParameter` JournalParameter

The <xref href="VM.Managed.Operation.JournalParameter" data-throw-if-not-resolved="false"></xref>

## Properties

### <a id="VM_Operations_Pre_SubEntity_ImportPythonCode_Name"></a> Name

The name of the operation

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Operations_Pre_SubEntity_ImportPythonCode_Pathes"></a> Pathes

Pathes to python codes.

```csharp
public string[] Pathes { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Operations_Pre_SubEntity_ImportPythonCode_Result"></a> Result

Constructed <xref href="VM.Managed.DAFUL.PythonCode" data-throw-if-not-resolved="false"></xref> entites

```csharp
public PythonCode[] Result { get; set; }
```

#### Property Value

 PythonCode\[\]

## Methods

### <a id="VM_Operations_Pre_SubEntity_ImportPythonCode_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Operations_Pre_SubEntity_ImportPythonCode_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Get informations for xml journal file

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

