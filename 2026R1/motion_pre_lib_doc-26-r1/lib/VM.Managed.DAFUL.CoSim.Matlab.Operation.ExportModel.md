# Class ExportModel
<a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExportModel"></a>

Namespace: [VM.Managed.DAFUL.CoSim.Matlab.Operation](VM.Managed.DAFUL.CoSim.Matlab.Operation.md)  
Assembly: VMOpCoSimMatlab.dll  

```csharp
public class ExportModel : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[ExportModel](VM.Managed.DAFUL.CoSim.Matlab.Operation.ExportModel.md)

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

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExportModel__ctor_VM_Managed_Document_"></a> ExportModel\(Document\)

```csharp
public ExportModel(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExportModel__ctor_VM_Managed_Document_System_String_System_String_System_Collections_Generic_IEnumerable_System_String__System_Collections_Generic_IEnumerable_System_String__System_Collections_Generic_IEnumerable_System_Int32__System_Collections_Generic_IEnumerable_System_Int32__"></a> ExportModel\(Document, string, string, IEnumerable<string\>, IEnumerable<string\>, IEnumerable<int\>, IEnumerable<int\>\)

```csharp
public ExportModel(Document doc, string strDFSFile, string strRESFile, IEnumerable<string> inputs, IEnumerable<string> outputs, IEnumerable<int> lstInputSeq, IEnumerable<int> lstOutputSeq)
```

#### Parameters

`doc` Document

`strDFSFile` string

`strRESFile` string

`inputs` IEnumerable<string\>

`outputs` IEnumerable<string\>

`lstInputSeq` IEnumerable<int\>

`lstOutputSeq` IEnumerable<int\>

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExportModel__ctor_VM_Managed_Document_System_Collections_Generic_List_System_Object__"></a> ExportModel\(Document, List<object\>\)

```csharp
public ExportModel(Document doc, List<object> lstInfo)
```

#### Parameters

`doc` Document

`lstInfo` List<object\>

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExportModel__ctor_VM_Managed_Operation_JournalParameter_"></a> ExportModel\(JournalParameter\)

```csharp
public ExportModel(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExportModel_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExportModel_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExportModel_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

