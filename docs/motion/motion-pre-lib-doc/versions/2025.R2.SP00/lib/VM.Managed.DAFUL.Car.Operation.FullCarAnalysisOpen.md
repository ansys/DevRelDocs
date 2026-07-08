#  Class FullCarAnalysisOpen

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpFullCar.dll  

The open loop of full car analysis operation

```csharp
public class FullCarAnalysisOpen : FullCarAnalysisBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
[FullCarSimulationRun](VM.Managed.DAFUL.Car.Operation.FullCarSimulationRun.md) ← 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisBase.md) ← 
[FullCarAnalysisOpen](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisOpen.md)

#### Implements

IOperation

#### Inherited Members

[FullCarAnalysisBase.Execute\(\)](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarAnalysisBase\_Execute), 
[FullCarAnalysisBase.SimulationRunImpl\(bool\)](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarAnalysisBase\_SimulationRunImpl\_System\_Boolean\_), 
[FullCarAnalysisBase.ExecuteImpl\(\)](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarAnalysisBase\_ExecuteImpl), 
[FullCarAnalysisBase.ExecuteCore\(int, FullCarTestRigDocument, ref FullCarAnalysisConfigurationBase\)](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarAnalysisBase\_ExecuteCore\_System\_Int32\_VM\_Managed\_DAFUL\_Car\_FullCarTestRigDocument\_VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_\_), 
[FullCarAnalysisBase.ExecuteName](VM.Managed.DAFUL.Car.Operation.FullCarAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarAnalysisBase\_ExecuteName), 
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

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisOpen__ctor_VM_Managed_Document_"></a> FullCarAnalysisOpen\(Document\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Operation.FullCarAnalysisOpen" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FullCarAnalysisOpen(Document doc)
```

#### Parameters

`doc` Document

The doc.

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisOpen__ctor_VM_Managed_Operation_JournalParameter_"></a> FullCarAnalysisOpen\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Operation.FullCarAnalysisOpen" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FullCarAnalysisOpen(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisOpen_ExecuteName"></a> ExecuteName

Gets the name of the execute.

```csharp
protected override string ExecuteName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisOpen_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisOpen_ExecuteCore_System_Int32_VM_Managed_DAFUL_Car_FullCarTestRigDocument_VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase__"></a> ExecuteCore\(int, FullCarTestRigDocument, ref FullCarAnalysisConfigurationBase\)

Executes [core].

```csharp
protected override void ExecuteCore(int nIdex, FullCarTestRigDocument doc, ref FullCarAnalysisConfigurationBase saConfig)
```

#### Parameters

`nIdex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index.

`doc` FullCarTestRigDocument

The document.

`saConfig` FullCarAnalysisConfigurationBase

The configuration.

### <a id="VM_Managed_DAFUL_Car_Operation_FullCarAnalysisOpen_UpdateUI_VM_Managed_UI_IUIUpdate_VM_Managed_Document_"></a> UpdateUI\(IUIUpdate, Document\)

Updates the UI.

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

The updater.

`doc` Document

The document.

