# Class ExecuteProcess
<a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess"></a>

Namespace: [VM.Managed.DAFUL.CoSim.Matlab.Operation](VM.Managed.DAFUL.CoSim.Matlab.Operation.md)  
Assembly: VMOpCoSimMatlab.dll  

```csharp
public class ExecuteProcess : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[ExecuteProcess](VM.Managed.DAFUL.CoSim.Matlab.Operation.ExecuteProcess.md)

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

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess__ctor_VM_Managed_Document_"></a> ExecuteProcess\(Document\)

```csharp
public ExecuteProcess(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess__ctor_VM_Managed_Document_System_String_System_String_System_Collections_Generic_IEnumerable_System_Int32__System_Collections_Generic_IEnumerable_System_Int32__System_String_System_String_System_String_"></a> ExecuteProcess\(Document, string, string, IEnumerable<int\>, IEnumerable<int\>, string, string, string\)

```csharp
public ExecuteProcess(Document doc, string strInterfaceTimeStep, string strMFileFullPath, IEnumerable<int> lstInputSeq, IEnumerable<int> lstOutputSeq, string strSInput, string strSOutput, string strInterfacePath)
```

#### Parameters

`doc` Document

`strInterfaceTimeStep` string

`strMFileFullPath` string

`lstInputSeq` IEnumerable<int\>

`lstOutputSeq` IEnumerable<int\>

`strSInput` string

`strSOutput` string

`strInterfacePath` string

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess__ctor_VM_Managed_Document_System_String_System_String_System_Collections_Generic_IEnumerable_System_Int32__System_Collections_Generic_IEnumerable_System_Int32__System_String_System_String_System_String_System_String_System_String_"></a> ExecuteProcess\(Document, string, string, IEnumerable<int\>, IEnumerable<int\>, string, string, string, string, string\)

```csharp
public ExecuteProcess(Document doc, string strInterfaceTimeStep, string strMFileFullPath, IEnumerable<int> lstInputSeq, IEnumerable<int> lstOutputSeq, string strSInput, string strSOutput, string strInterfacePath, string strScaleFactor, string strMessageLevel)
```

#### Parameters

`doc` Document

`strInterfaceTimeStep` string

`strMFileFullPath` string

`lstInputSeq` IEnumerable<int\>

`lstOutputSeq` IEnumerable<int\>

`strSInput` string

`strSOutput` string

`strInterfacePath` string

`strScaleFactor` string

`strMessageLevel` string

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess__ctor_VM_Managed_Document_System_String_System_String_System_Collections_Generic_List_System_Int32__System_Collections_Generic_List_System_Int32__System_String_System_String_System_Boolean_System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__"></a> ExecuteProcess\(Document, string, string, List<int\>, List<int\>, string, string, bool, List<string\>, List<string\>\)

```csharp
public ExecuteProcess(Document doc, string strInterfaceTimeStep, string strMFileFullPath, List<int> lstInputSeq, List<int> lstOutputSeq, string strSInput, string strSOutput, bool bExternalCall, List<string> lstExternalSInputNames, List<string> lstExternalSOutputNames)
```

#### Parameters

`doc` Document

`strInterfaceTimeStep` string

`strMFileFullPath` string

`lstInputSeq` List<int\>

`lstOutputSeq` List<int\>

`strSInput` string

`strSOutput` string

`bExternalCall` bool

`lstExternalSInputNames` List<string\>

`lstExternalSOutputNames` List<string\>

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess__ctor_VM_Managed_Document_System_String_System_String_System_Collections_Generic_List_System_Int32__System_Collections_Generic_List_System_Int32__System_String_System_String_System_Boolean_System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_String_System_String_"></a> ExecuteProcess\(Document, string, string, List<int\>, List<int\>, string, string, bool, List<string\>, List<string\>, string, string\)

```csharp
public ExecuteProcess(Document doc, string strInterfaceTimeStep, string strMFileFullPath, List<int> lstInputSeq, List<int> lstOutputSeq, string strSInput, string strSOutput, bool bExternalCall, List<string> lstExternalSInputNames, List<string> lstExternalSOutputNames, string strScaleFactor, string strMessageLevel)
```

#### Parameters

`doc` Document

`strInterfaceTimeStep` string

`strMFileFullPath` string

`lstInputSeq` List<int\>

`lstOutputSeq` List<int\>

`strSInput` string

`strSOutput` string

`bExternalCall` bool

`lstExternalSInputNames` List<string\>

`lstExternalSOutputNames` List<string\>

`strScaleFactor` string

`strMessageLevel` string

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess__ctor_VM_Managed_Operation_JournalParameter_"></a> ExecuteProcess\(JournalParameter\)

```csharp
public ExecuteProcess(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

### <a id="VM_Managed_DAFUL_CoSim_Matlab_Operation_ExecuteProcess_Success"></a> Success\(\)

Results this instance.

```csharp
public bool Success()
```

#### Returns

 bool

