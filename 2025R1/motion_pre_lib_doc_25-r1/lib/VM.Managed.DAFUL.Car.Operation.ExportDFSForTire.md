#  Class ExportDFSForTire

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpCar.dll  

The export xml file for solver operation

```csharp
public class ExportDFSForTire : ExportDFS, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
ExportDFS ← 
[ExportDFS](VM.Managed.DAFUL.Car.Operation.ExportDFS.md) ← 
[ExportDFSForTire](VM.Managed.DAFUL.Car.Operation.ExportDFSForTire.md)

#### Implements

IOperation

#### Inherited Members

[ExportDFS.m\_scenario](VM.Managed.DAFUL.Car.Operation.ExportDFS.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportDFS\_m\_scenario), 
[ExportDFS.m\_bEndSolvingThread](VM.Managed.DAFUL.Car.Operation.ExportDFS.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportDFS\_m\_bEndSolvingThread), 
[ExportDFS.Execute\(\)](VM.Managed.DAFUL.Car.Operation.ExportDFS.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportDFS\_Execute), 
[ExportDFS.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.Car.Operation.ExportDFS.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportDFS\_GetInformation\_System\_Xml\_XmlWriter\_), 
[ExportDFS.ExportDFSImpl\(\)](VM.Managed.DAFUL.Car.Operation.ExportDFS.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportDFS\_ExportDFSImpl), 
[ExportDFS.WriteJournalCore\(\)](VM.Managed.DAFUL.Car.Operation.ExportDFS.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportDFS\_WriteJournalCore), 
[ExportDFS.EndExecuteThread\(\)](VM.Managed.DAFUL.Car.Operation.ExportDFS.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportDFS\_EndExecuteThread), 
[ExportDFS.Name](VM.Managed.DAFUL.Car.Operation.ExportDFS.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportDFS\_Name), 
ExportDFS.Execute\(\), 
ExportDFS.ExportDFSImpl\(\), 
ExportDFS.Name, 
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

### <a id="VM_Managed_DAFUL_Car_Operation_ExportDFSForTire__ctor_VM_Managed_Document_"></a> ExportDFSForTire\(Document\)

```csharp
public ExportDFSForTire(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Car_Operation_ExportDFSForTire__ctor_VM_Managed_Operation_JournalParameter_"></a> ExportDFSForTire\(JournalParameter\)

```csharp
public ExportDFSForTire(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_Car_Operation_ExportDFSForTire_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Car_Operation_ExportDFSForTire_ExportDFSImpl"></a> ExportDFSImpl\(\)

```csharp
protected override void ExportDFSImpl()
```

