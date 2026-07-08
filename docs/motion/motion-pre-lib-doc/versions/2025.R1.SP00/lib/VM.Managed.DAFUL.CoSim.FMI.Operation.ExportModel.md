#  Class ExportModel

Namespace: [VM.Managed.DAFUL.CoSim.FMI.Operation](VM.Managed.DAFUL.CoSim.FMI.Operation.md)  
Assembly: VMOpCoSimFMI.dll  

```csharp
public class ExportModel : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[ExportModel](VM.Managed.DAFUL.CoSim.FMI.Operation.ExportModel.md)

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

### <a id="VM_Managed_DAFUL_CoSim_FMI_Operation_ExportModel__ctor_VM_Managed_Document_"></a> ExportModel\(Document\)

```csharp
public ExportModel(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_CoSim_FMI_Operation_ExportModel__ctor_VM_Managed_Document_System_String_System_String_System_String_System_Collections_Generic_IEnumerable_VM_Managed_ObjectBase__System_Collections_Generic_IEnumerable_VM_Managed_ObjectBase__VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_System_String_System_String_"></a> ExportModel\(Document, string, string, string, IEnumerable<ObjectBase\>, IEnumerable<ObjectBase\>, ExpressionValueVariable, ExpressionValueVariable, string, string\)

```csharp
public ExportModel(Document doc, string filePath, string strDFSFile, string strRESFile, IEnumerable<ObjectBase> inputs, IEnumerable<ObjectBase> outputs, ExpressionValueVariable version, ExpressionValueVariable interfaceTimeStep, string modelDescription, string interfacePath)
```

#### Parameters

`doc` Document

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strDFSFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strRESFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

`inputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ObjectBase\>

`outputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ObjectBase\>

`version` ExpressionValueVariable

`interfaceTimeStep` ExpressionValueVariable

`modelDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)

`interfacePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_CoSim_FMI_Operation_ExportModel__ctor_VM_Managed_Document_System_String_System_String_System_String_System_Collections_Generic_IEnumerable_VM_Managed_ObjectBase__System_Collections_Generic_IEnumerable_VM_Managed_ObjectBase__VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_System_String_System_String_System_String_System_String_"></a> ExportModel\(Document, string, string, string, IEnumerable<ObjectBase\>, IEnumerable<ObjectBase\>, ExpressionValueVariable, ExpressionValueVariable, string, string, string, string\)

```csharp
public ExportModel(Document doc, string filePath, string strDFSFile, string strRESFile, IEnumerable<ObjectBase> inputs, IEnumerable<ObjectBase> outputs, ExpressionValueVariable version, ExpressionValueVariable interfaceTimeStep, string modelDescription, string interfacePath, string scalefactor, string strMessageLevel)
```

#### Parameters

`doc` Document

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strDFSFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strRESFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

`inputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ObjectBase\>

`outputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ObjectBase\>

`version` ExpressionValueVariable

`interfaceTimeStep` ExpressionValueVariable

`modelDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)

`interfacePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`scalefactor` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strMessageLevel` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_CoSim_FMI_Operation_ExportModel__ctor_VM_Managed_Document_System_Collections_Generic_List_System_Object__"></a> ExportModel\(Document, List<object\>\)

```csharp
public ExportModel(Document doc, List<object> lstInfo)
```

#### Parameters

`doc` Document

`lstInfo` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="VM_Managed_DAFUL_CoSim_FMI_Operation_ExportModel__ctor_VM_Managed_Operation_JournalParameter_"></a> ExportModel\(JournalParameter\)

```csharp
public ExportModel(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_CoSim_FMI_Operation_ExportModel_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_CoSim_FMI_Operation_ExportModel_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_CoSim_FMI_Operation_ExportModel_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### <a id="VM_Managed_DAFUL_CoSim_FMI_Operation_ExportModel_Get_ModelDescription_VM_Managed_DAFUL_SubSystemDocument_System_String_System_Collections_Generic_IList_VM_Managed_ObjectBase__System_Collections_Generic_IList_VM_Managed_ObjectBase__System_Collections_Generic_IList_System_Int32__System_Collections_Generic_IList_System_Int32__System_Double_System_String_System_Double_System_String_System_String_"></a> Get\_ModelDescription\(SubSystemDocument, string, IList<ObjectBase\>, IList<ObjectBase\>, IList<int\>, IList<int\>, double, string, double, string, string\)

```csharp
public XmlDocument Get_ModelDescription(SubSystemDocument subSystem, string strFileFullPath, IList<ObjectBase> lstInputName, IList<ObjectBase> lstOutputName, IList<int> lstInputSeq, IList<int> lstOutputSeq, double version, string description, double stepSize, string scalefactor = null, string messagelevel = null)
```

#### Parameters

`subSystem` SubSystemDocument

`strFileFullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`lstInputName` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ObjectBase\>

`lstOutputName` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ObjectBase\>

`lstInputSeq` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`lstOutputSeq` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`version` [double](https://learn.microsoft.com/dotnet/api/system.double)

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

`stepSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

`scalefactor` [string](https://learn.microsoft.com/dotnet/api/system.string)

`messagelevel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

