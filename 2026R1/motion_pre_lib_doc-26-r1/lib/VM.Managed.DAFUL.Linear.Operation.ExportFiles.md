# Class ExportFiles
<a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles"></a>

Namespace: [VM.Managed.DAFUL.Linear.Operation](VM.Managed.DAFUL.Linear.Operation.md)  
Assembly: VMOpLinear.dll  

```csharp
public class ExportFiles : SimulateForComponentEigenvalue, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[SimulationRun](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs) ← 
[SimulateForComponentEigenvalue](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md) ← 
[ExportFiles](VM.Managed.DAFUL.Linear.Operation.ExportFiles.md)

#### Implements

IOperation

#### Inherited Members

[SimulateForComponentEigenvalue.m\_lstObjEigen](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_m\_lstObjEigen), 
[SimulateForComponentEigenvalue.m\_param](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_m\_param), 
[SimulateForComponentEigenvalue.Execute\(\)](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_Execute), 
[SimulateForComponentEigenvalue.ReadExtraJournal\(XmlElement\)](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_ReadExtraJournal\_System\_Xml\_XmlElement\_), 
[SimulateForComponentEigenvalue.WriteExtraJournal\(XmlWriter\)](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_WriteExtraJournal\_System\_Xml\_XmlWriter\_), 
[SimulateForComponentEigenvalue.SimulationRunImpl\(bool\)](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_SimulationRunImpl\_System\_Boolean\_), 
[SimulateForComponentEigenvalue.AutoSetEigenvalueObject\(\)](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_AutoSetEigenvalueObject), 
[SimulateForComponentEigenvalue.Success](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_Success), 
[SimulateForComponentEigenvalue.Name](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_Name), 
[SimulationRun.m\_strSimulationConfiguration](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.m\_strFilePath](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.m\_strUserDefinedScenarioTypeName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.Execute\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.GetInformation\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.ReadExtraJournal\(XmlElement\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.WriteExtraJournal\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.UpdateUI\(IUIUpdate, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.SimulationRunImpl\(bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.PrepareSimulationSetting\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.ShowDialog\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.PrepareForm\(SimulationFormBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.ApplySimulation\(SimulationFormBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.ExecuteImpl\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.ExecuteImplNotPrePareSimulation\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.WriteJournalCore\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.SimulationForm](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.NotPrePareSimulation](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.FormResult](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.SimParam](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.SkipCheckDirectory](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
[SimulationRun.FilePath](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs), 
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

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles__ctor_VM_Managed_Document3D_System_String_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Object_"></a> ExportFiles\(Document3D, string, bool, bool, bool, bool, object\)

```csharp
public ExportFiles(Document3D doc, string strFilePath, bool bWriteDFS, bool bWriteXML, bool bWriteDFG, bool bIncludeReferenceFiles, object objEigen)
```

#### Parameters

`doc` Document3D

`strFilePath` string

`bWriteDFS` bool

`bWriteXML` bool

`bWriteDFG` bool

`bIncludeReferenceFiles` bool

`objEigen` object

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles__ctor_VM_Managed_Operation_JournalParameter_"></a> ExportFiles\(JournalParameter\)

```csharp
public ExportFiles(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Fields

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles_m_bIncludeReferenceFiles"></a> m\_bIncludeReferenceFiles

```csharp
protected bool m_bIncludeReferenceFiles
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles_m_bWriteDFG"></a> m\_bWriteDFG

```csharp
protected bool m_bWriteDFG
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles_m_bWriteDFS"></a> m\_bWriteDFS

```csharp
protected bool m_bWriteDFS
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles_m_bWriteXML"></a> m\_bWriteXML

```csharp
protected bool m_bWriteXML
```

#### Field Value

 bool

## Properties

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles_ReadExtraJournal_System_Xml_XmlElement_"></a> ReadExtraJournal\(XmlElement\)

```csharp
public override void ReadExtraJournal(XmlElement nodeArg)
```

#### Parameters

`nodeArg` XmlElement

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles_SimulationRunImpl_System_Boolean_"></a> SimulationRunImpl\(bool\)

```csharp
protected override void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` bool

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportFiles_WriteExtraJournal_System_Xml_XmlWriter_"></a> WriteExtraJournal\(XmlWriter\)

```csharp
public override void WriteExtraJournal(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

