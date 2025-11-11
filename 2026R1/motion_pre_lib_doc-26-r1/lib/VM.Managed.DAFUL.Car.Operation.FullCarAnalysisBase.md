# Class FullCarAnalysisBase
<a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisBase"></a>

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpFullCar.dll  

The full car analysis base operation

```csharp
public abstract class FullCarAnalysisBase : FullCarSimulationRun, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[SimulationRun](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs) ← 
[FullCarSimulationRun](VM.Managed.DAFUL.Car.Operation.FullCarSimulationRun.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisBase.md)

#### Derived

[FullCarAnalysisCornering](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisCornering.md), 
[FullCarAnalysisCourse](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisCourse.md), 
[FullCarAnalysisFileDriven](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisFileDriven.md), 
[FullCarAnalysisOpen](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisOpen.md), 
[FullCarAnalysisStraight](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisStraight.md)

#### Implements

IOperation

#### Inherited Members

[FullCarSimulationRun.Execute\(\)](VM.Managed.DAFUL.Car.Operation.FullCarSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarSimulationRun\_Execute), 
[FullCarSimulationRun.SimulationRunImpl\(bool\)](VM.Managed.DAFUL.Car.Operation.FullCarSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarSimulationRun\_SimulationRunImpl\_System\_Boolean\_), 
[FullCarSimulationRun.UpdateUI\(IUIUpdate, Document\)](VM.Managed.DAFUL.Car.Operation.FullCarSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarSimulationRun\_UpdateUI\_VM\_Managed\_UI\_IUIUpdate\_VM\_Managed\_Document\_), 
[FullCarSimulationRun.ApplySimulation\(\)](VM.Managed.DAFUL.Car.Operation.FullCarSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarSimulationRun\_ApplySimulation), 
[FullCarSimulationRun.Name](VM.Managed.DAFUL.Car.Operation.FullCarSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarSimulationRun\_Name), 
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

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisBase__ctor_VM_Managed_Document_"></a> FullCarAnalysisBase\(Document\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Operation.FullCarAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FullCarAnalysisBase(Document doc)
```

#### Parameters

`doc` Document

The doc.

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisBase__ctor_VM_Managed_Operation_JournalParameter_"></a> FullCarAnalysisBase\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Operation.FullCarAnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FullCarAnalysisBase(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisBase_ExecuteName"></a> ExecuteName

Gets the name of the execute.

```csharp
protected abstract string ExecuteName { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisBase_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisBase_ExecuteCore_System_Int32_VM_Managed_DAFUL_Car_FullCarTestRigDocument_VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase__"></a> ExecuteCore\(int, FullCarTestRigDocument, ref FullCarAnalysisConfigurationBase\)

Executes [core].

```csharp
protected virtual void ExecuteCore(int nIdex, FullCarTestRigDocument doc, ref FullCarAnalysisConfigurationBase saConfig)
```

#### Parameters

`nIdex` int

The index.

`doc` [FullCarTestRigDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/FullCarTestRigDocument.cs)

The document.

`saConfig` [FullCarAnalysisConfigurationBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/FullCarSimulationConfiguration.cs)

The configuration.

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisBase_ExecuteImpl"></a> ExecuteImpl\(\)

Executes [implementation].

```csharp
protected override void ExecuteImpl()
```

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisBase_SimulationRunImpl_System_Boolean_"></a> SimulationRunImpl\(bool\)

Simulations the run [implementation].

```csharp
protected override void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` bool

if set to <code>true</code> [b write DFG].

