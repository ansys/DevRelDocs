# Class CoSimSettingsForCarAssembly

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpCar.dll  

The open simulation dialog operation for cosim

```csharp
public class CoSimSettingsForCarAssembly : ShowSimulationDlg, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
[SimulationRun](VM.Managed.DAFUL.Car.Operation.SimulationRun.md) ← 
[ShowSimulationDlg](VM.Managed.DAFUL.Car.Operation.ShowSimulationDlg.md) ← 
[CoSimSettingsForCarAssembly](VM.Managed.DAFUL.Car.Operation.CoSimSettingsForCarAssembly.md)

#### Implements

IOperation

#### Inherited Members

[ShowSimulationDlg.Execute\(\)](VM.Managed.DAFUL.Car.Operation.ShowSimulationDlg.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ShowSimulationDlg\_Execute), 
[ShowSimulationDlg.SimulationRunImpl\(bool\)](VM.Managed.DAFUL.Car.Operation.ShowSimulationDlg.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ShowSimulationDlg\_SimulationRunImpl\_System\_Boolean\_), 
[ShowSimulationDlg.ExecuteImpl\(\)](VM.Managed.DAFUL.Car.Operation.ShowSimulationDlg.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ShowSimulationDlg\_ExecuteImpl), 
[ShowSimulationDlg.UseCoSim](VM.Managed.DAFUL.Car.Operation.ShowSimulationDlg.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ShowSimulationDlg\_UseCoSim), 
[ShowSimulationDlg.Name](VM.Managed.DAFUL.Car.Operation.ShowSimulationDlg.md\#VM\_Managed\_DAFUL\_Car\_Operation\_ShowSimulationDlg\_Name), 
[SimulationRun.Execute\(\)](VM.Managed.DAFUL.Car.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_SimulationRun\_Execute), 
[SimulationRun.UpdateUI\(IUIUpdate, Document\)](VM.Managed.DAFUL.Car.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_SimulationRun\_UpdateUI\_VM\_Managed\_UI\_IUIUpdate\_VM\_Managed\_Document\_), 
[SimulationRun.ApplySimulation\(\)](VM.Managed.DAFUL.Car.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_SimulationRun\_ApplySimulation), 
[SimulationRun.Name](VM.Managed.DAFUL.Car.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_SimulationRun\_Name), 
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

### CoSimSettingsForCarAssembly\(Document\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Operation.CoSimSettingsForCarAssembly" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CoSimSettingsForCarAssembly(Document doc)
```

#### Parameters

`doc` Document

The doc.

## Properties

### Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UseCoSim

Gets a value indicating whether [use co sim].

```csharp
protected override bool UseCoSim { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### ExecuteImpl\(\)

Executes [implementation].

```csharp
protected override void ExecuteImpl()
```

### UpdateUI\(IUIUpdate, Document\)

Updates the UI.

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

The updater.

`doc` Document

The document.


