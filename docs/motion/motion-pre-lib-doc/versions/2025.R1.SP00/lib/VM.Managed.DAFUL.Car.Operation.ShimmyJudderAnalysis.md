#  Class ShimmyJudderAnalysis

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpFullCar.dll  

The Shimmy-Judder analysis operation

```csharp
public class ShimmyJudderAnalysis : ShimmyJudderSimulationRun, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
[ShimmyJudderSimulationRun](VM.Managed.DAFUL.Car.Operation.ShimmyJudderSimulationRun.md) ← 
[ShimmyJudderAnalysis](VM.Managed.DAFUL.Car.Operation.ShimmyJudderAnalysis.md)

#### Implements

IOperation

#### Inherited Members

[ShimmyJudderSimulationRun.m\_param](VM.Managed.DAFUL.Car.Operation.ShimmyJudderSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ShimmyJudderSimulationRun\_m\_param), 
[ShimmyJudderSimulationRun.Execute\(\)](VM.Managed.DAFUL.Car.Operation.ShimmyJudderSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ShimmyJudderSimulationRun\_Execute), 
[ShimmyJudderSimulationRun.SimulationRunImpl\(bool\)](VM.Managed.DAFUL.Car.Operation.ShimmyJudderSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ShimmyJudderSimulationRun\_SimulationRunImpl\_System\_Boolean\_), 
[ShimmyJudderSimulationRun.ApplySimulation\(\)](VM.Managed.DAFUL.Car.Operation.ShimmyJudderSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ShimmyJudderSimulationRun\_ApplySimulation), 
[ShimmyJudderSimulationRun.Name](VM.Managed.DAFUL.Car.Operation.ShimmyJudderSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ShimmyJudderSimulationRun\_Name), 
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

### <a id="VM_Managed_DAFUL_Car_Operation_ShimmyJudderAnalysis__ctor_VM_Managed_Document_"></a> ShimmyJudderAnalysis\(Document\)

```csharp
public ShimmyJudderAnalysis(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Car_Operation_ShimmyJudderAnalysis__ctor_VM_Managed_Operation_JournalParameter_"></a> ShimmyJudderAnalysis\(JournalParameter\)

```csharp
public ShimmyJudderAnalysis(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Methods

### <a id="VM_Managed_DAFUL_Car_Operation_ShimmyJudderAnalysis_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Car_Operation_ShimmyJudderAnalysis_ExecuteImpl"></a> ExecuteImpl\(\)

Executes [implementation].

```csharp
protected override void ExecuteImpl()
```

### <a id="VM_Managed_DAFUL_Car_Operation_ShimmyJudderAnalysis_SimulationRunImpl_System_Boolean_"></a> SimulationRunImpl\(bool\)

```csharp
protected override void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

