#  Class FullCarAnalysisBase

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpFullCar.dll  

The full car analysis base operation

```csharp
public abstract class FullCarAnalysisBase : FullCarSimulationRun, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
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
SimulationRun.m\_strSimulationConfiguration, 
SimulationRun.m\_strFilePath, 
SimulationRun.m\_strUserDefinedScenarioTypeName, 
SimulationRun.Execute\(\), 
SimulationRun.GetInformation\(XmlWriter\), 
SimulationRun.ReadExtraJournal\(XmlElement\), 
SimulationRun.WriteExtraJournal\(XmlWriter\), 
SimulationRun.UpdateUI\(IUIUpdate, Document\), 
SimulationRun.SimulationRunImpl\(bool\), 
SimulationRun.PrepareSimulationSetting\(\), 
SimulationRun.ShowDialog\(\), 
SimulationRun.PrepareForm\(SimulationFormBase\), 
SimulationRun.ApplySimulation\(SimulationFormBase\), 
SimulationRun.ExecuteImpl\(\), 
SimulationRun.ExecuteImplNotPrePareSimulation\(\), 
SimulationRun.Name, 
SimulationRun.SimulationForm, 
SimulationRun.NotPrePareSimulation, 
SimulationRun.FormResult, 
SimulationRun.SimParam, 
SimulationRun.SkipCheckDirectory, 
SimulationRun.FilePath, 
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

 [string](https://learn.microsoft.com/dotnet/api/system.string)

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

`nIdex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index.

`doc` FullCarTestRigDocument

The document.

`saConfig` FullCarAnalysisConfigurationBase

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

`bWriteDFG` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b write DFG].

