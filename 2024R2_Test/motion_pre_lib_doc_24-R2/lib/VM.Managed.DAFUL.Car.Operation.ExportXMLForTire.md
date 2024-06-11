# Class ExportXMLForTire

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpCar.dll  

The export xml file for solver operation

```csharp
public class ExportXMLForTire : ExportXML, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
ExportXML ← 
[ExportXML](VM.Managed.DAFUL.Car.Operation.ExportXML.md) ← 
[ExportXMLForTire](VM.Managed.DAFUL.Car.Operation.ExportXMLForTire.md)

#### Implements

IOperation

#### Inherited Members

[ExportXML.m\_scenario](VM.Managed.DAFUL.Car.Operation.ExportXML.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportXML\_m\_scenario), 
[ExportXML.m\_bEndSolvingThread](VM.Managed.DAFUL.Car.Operation.ExportXML.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportXML\_m\_bEndSolvingThread), 
[ExportXML.Execute\(\)](VM.Managed.DAFUL.Car.Operation.ExportXML.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportXML\_Execute), 
[ExportXML.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.Car.Operation.ExportXML.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportXML\_GetInformation\_System\_Xml\_XmlWriter\_), 
[ExportXML.ExportXMLImpl\(\)](VM.Managed.DAFUL.Car.Operation.ExportXML.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportXML\_ExportXMLImpl), 
[ExportXML.WriteJournalCore\(\)](VM.Managed.DAFUL.Car.Operation.ExportXML.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportXML\_WriteJournalCore), 
[ExportXML.EndExecuteThread\(\)](VM.Managed.DAFUL.Car.Operation.ExportXML.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportXML\_EndExecuteThread), 
[ExportXML.Name](VM.Managed.DAFUL.Car.Operation.ExportXML.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ExportXML\_Name), 
ExportXML.Execute\(\), 
ExportXML.ExportXMLImpl\(\), 
ExportXML.Name, 
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

### ExportXMLForTire\(Document\)

```csharp
public ExportXMLForTire(Document doc)
```

#### Parameters

`doc` Document

## Properties

### Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### ExportXMLImpl\(\)

```csharp
protected override void ExportXMLImpl()
```


