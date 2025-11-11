# Class SimulateForComponentEigenvalue
<a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue"></a>

Namespace: [VM.Managed.DAFUL.Linear.Operation](VM.Managed.DAFUL.Linear.Operation.md)  
Assembly: VMOpLinear.dll  

The run simulation operation for component eigenvalue

```csharp
public class SimulateForComponentEigenvalue : SimulationRun, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[SimulationRun](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs) ← 
[SimulateForComponentEigenvalue](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md)

#### Derived

[ExportDFG](VM.Managed.DAFUL.Linear.Operation.ExportDFG.md), 
[ExportDFS](VM.Managed.DAFUL.Linear.Operation.ExportDFS.md), 
[ExportFiles](VM.Managed.DAFUL.Linear.Operation.ExportFiles.md), 
[ExportXML](VM.Managed.DAFUL.Linear.Operation.ExportXML.md), 
[SimulateForBodyEigenvalue](VM.Managed.DAFUL.Linear.Operation.SimulateForBodyEigenvalue.md)

#### Implements

IOperation

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue__ctor_VM_Managed_Document_"></a> SimulateForComponentEigenvalue\(Document\)

```csharp
public SimulateForComponentEigenvalue(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue__ctor_VM_Managed_ObjectBase_"></a> SimulateForComponentEigenvalue\(ObjectBase\)

```csharp
public SimulateForComponentEigenvalue(ObjectBase objSingle)
```

#### Parameters

`objSingle` ObjectBase

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue__ctor_VM_Managed_Document_VM_Managed_ObjectBase_"></a> SimulateForComponentEigenvalue\(Document, ObjectBase\)

```csharp
public SimulateForComponentEigenvalue(Document doc, ObjectBase objSingle)
```

#### Parameters

`doc` Document

`objSingle` ObjectBase

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue__ctor_VM_Managed_Document_VM_Managed_ObjectBase_VM_Managed_DAFUL_Operation_SimulationRun_SimulationParameter_"></a> SimulateForComponentEigenvalue\(Document, ObjectBase, SimulationParameter\)

```csharp
public SimulateForComponentEigenvalue(Document doc, ObjectBase objSingle, SimulationRun.SimulationParameter simulationParameter)
```

#### Parameters

`doc` Document

`objSingle` ObjectBase

`simulationParameter` [SimulationRun](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs).[SimulationParameter](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs)

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue__ctor_VM_Managed_Operation_JournalParameter_"></a> SimulateForComponentEigenvalue\(JournalParameter\)

```csharp
public SimulateForComponentEigenvalue(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Fields

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue_m_lstObjEigen"></a> m\_lstObjEigen

```csharp
protected List<ObjectBase> m_lstObjEigen
```

#### Field Value

 List<ObjectBase\>

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue_m_param"></a> m\_param

```csharp
protected SimulationScenarioEigenvalue.SolvingParam m_param
```

#### Field Value

 SimulationScenarioEigenvalue.SolvingParam

## Properties

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue_Success"></a> Success

```csharp
public bool Success { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue_AutoSetEigenvalueObject"></a> AutoSetEigenvalueObject\(\)

```csharp
protected bool AutoSetEigenvalueObject()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue_ReadExtraJournal_System_Xml_XmlElement_"></a> ReadExtraJournal\(XmlElement\)

```csharp
public override void ReadExtraJournal(XmlElement nodeArg)
```

#### Parameters

`nodeArg` XmlElement

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue_SimulationRunImpl_System_Boolean_"></a> SimulationRunImpl\(bool\)

```csharp
protected override void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` bool

### <a id="VM_Managed_DAFUL_Linear_Operation_SimulateForComponentEigenvalue_WriteExtraJournal_System_Xml_XmlWriter_"></a> WriteExtraJournal\(XmlWriter\)

```csharp
public override void WriteExtraJournal(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

