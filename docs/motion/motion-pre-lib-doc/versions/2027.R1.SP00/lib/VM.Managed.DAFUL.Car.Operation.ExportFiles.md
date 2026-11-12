# Class ExportFiles
<a id="VM_Managed_DAFUL_Car_Operation_ExportFiles"></a>

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpCar.dll  

```csharp
public class ExportFiles : ExportFiles, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
SimulationRun ← 
ExportFiles ← 
[ExportFiles](VM.Managed.DAFUL.Car.Operation.ExportFiles.md)

#### Derived

[ExportFilesForFullCar](VM.Managed.DAFUL.Car.Operation.ExportFilesForFullCar.md), 
[ExportFilesForTire](VM.Managed.DAFUL.Car.Operation.ExportFilesForTire.md)

#### Implements

IOperation

#### Inherited Members

ExportFiles.m\_bWriteDFS, 
ExportFiles.m\_bWriteXML, 
ExportFiles.m\_bWriteDFG, 
ExportFiles.m\_bIncludeReferenceFiles, 
ExportFiles.Execute\(\), 
ExportFiles.ReadExtraJournal\(XmlElement\), 
ExportFiles.WriteExtraJournal\(XmlWriter\), 
ExportFiles.Name, 
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
SimulationRun.WriteJournalCore\(string\), 
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

### <a id="VM_Managed_DAFUL_Car_Operation_ExportFiles__ctor_VM_Managed_Document3D_System_String_System_Boolean_System_Boolean_System_Boolean_System_Boolean_"></a> ExportFiles\(Document3D, string, bool, bool, bool, bool\)

```csharp
public ExportFiles(Document3D doc, string strFilePath, bool bWriteDFS, bool bWriteXML, bool bWriteDFG, bool bIncludeReferenceFiles)
```

#### Parameters

`doc` Document3D

`strFilePath` string

`bWriteDFS` bool

`bWriteXML` bool

`bWriteDFG` bool

`bIncludeReferenceFiles` bool

### <a id="VM_Managed_DAFUL_Car_Operation_ExportFiles__ctor_VM_Managed_Operation_JournalParameter_"></a> ExportFiles\(JournalParameter\)

```csharp
public ExportFiles(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Fields

### <a id="VM_Managed_DAFUL_Car_Operation_ExportFiles_m_bEndSolvingThread"></a> m\_bEndSolvingThread

```csharp
protected bool m_bEndSolvingThread
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_Car_Operation_ExportFiles_m_scenario"></a> m\_scenario

```csharp
protected SimulationScenarioCarBase m_scenario
```

#### Field Value

 SimulationScenarioCarBase

## Methods

### <a id="VM_Managed_DAFUL_Car_Operation_ExportFiles_EndExecuteThread"></a> EndExecuteThread\(\)

```csharp
protected void EndExecuteThread()
```

### <a id="VM_Managed_DAFUL_Car_Operation_ExportFiles_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Car_Operation_ExportFiles_SetScenario"></a> SetScenario\(\)

```csharp
protected virtual void SetScenario()
```

### <a id="VM_Managed_DAFUL_Car_Operation_ExportFiles_WriteJournalCore"></a> WriteJournalCore\(\)

```csharp
protected void WriteJournalCore()
```

