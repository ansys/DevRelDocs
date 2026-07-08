#  Class SimulationRunInDesigner

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

SimulationRunInDesigner

```csharp
public class SimulationRunInDesigner : SimulationRun, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
[SimulationRunInDesigner](VM.Managed.DAFUL.GearTrain.Operation.SimulationRunInDesigner.md)

#### Implements

IOperation

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SimulationRunInDesigner__ctor_VM_Managed_Document_"></a> SimulationRunInDesigner\(Document\)

```csharp
public SimulationRunInDesigner(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SimulationRunInDesigner__ctor_VM_Managed_Document_System_String_"></a> SimulationRunInDesigner\(Document, string\)

```csharp
public SimulationRunInDesigner(Document doc, string strSimPar)
```

#### Parameters

`doc` Document

`strSimPar` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SimulationRunInDesigner__ctor_VM_Managed_Document_System_String_VM_Managed_DFSInfo_VM_Managed_DSDL_DAFUL_GearTrain_SimulationScenarioGearTrainInDesigner_OutputInfo_"></a> SimulationRunInDesigner\(Document, string, DFSInfo, OutputInfo\)

```csharp
public SimulationRunInDesigner(Document doc, string strSimPar, DFSInfo pInfo, SimulationScenarioGearTrainInDesigner.OutputInfo oInfo)
```

#### Parameters

`doc` Document

`strSimPar` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pInfo` DFSInfo

`oInfo` SimulationScenarioGearTrainInDesigner.OutputInfo

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SimulationRunInDesigner__ctor_VM_Managed_Document_VM_Managed_DAFUL_Operation_SimulationRun_SimulationParameter_"></a> SimulationRunInDesigner\(Document, SimulationParameter\)

```csharp
public SimulationRunInDesigner(Document doc, SimulationRun.SimulationParameter param)
```

#### Parameters

`doc` Document

`param` SimulationRun.SimulationParameter

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SimulationRunInDesigner__ctor_VM_Managed_Operation_JournalParameter_"></a> SimulationRunInDesigner\(JournalParameter\)

```csharp
public SimulationRunInDesigner(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SimulationRunInDesigner_OnAddEntity"></a> OnAddEntity

```csharp
public SimulationRunInDesigner.AddEntityCalback OnAddEntity
```

#### Field Value

 [SimulationRunInDesigner](VM.Managed.DAFUL.GearTrain.Operation.SimulationRunInDesigner.md).[AddEntityCalback](VM.Managed.DAFUL.GearTrain.Operation.SimulationRunInDesigner.AddEntityCalback.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_SimulationRunInDesigner_SimulationRunImpl_System_Boolean_"></a> SimulationRunImpl\(bool\)

Simulations the run implementation.

```csharp
protected override void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b write DFG].

