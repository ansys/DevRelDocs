#  Class TireAnalysisHandlingSteady

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpCar.dll  

The handling steady of tire analysis operation

```csharp
public class TireAnalysisHandlingSteady : TireAnalysisBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
[TireSimulationRun](VM.Managed.DAFUL.Car.Operation.TireSimulationRun.md) ← 
[TireAnalysisBase](VM.Managed.DAFUL.Car.Operation.TireAnalysisBase.md) ← 
[TireAnalysisHandlingSteady](VM.Managed.DAFUL.Car.Operation.TireAnalysisHandlingSteady.md)

#### Implements

IOperation

#### Inherited Members

[TireAnalysisBase.Execute\(\)](VM.Managed.DAFUL.Car.Operation.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireAnalysisBase\_Execute), 
[TireAnalysisBase.SimulationRunImpl\(bool\)](VM.Managed.DAFUL.Car.Operation.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireAnalysisBase\_SimulationRunImpl\_System\_Boolean\_), 
[TireAnalysisBase.ExecuteImpl\(\)](VM.Managed.DAFUL.Car.Operation.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireAnalysisBase\_ExecuteImpl), 
[TireAnalysisBase.ExecuteCore\(int, TireTestRigDocument, ref TireAnalysisConfigurationBase\)](VM.Managed.DAFUL.Car.Operation.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireAnalysisBase\_ExecuteCore\_System\_Int32\_VM\_Managed\_DAFUL\_Car\_TireTestRigDocument\_VM\_Managed\_DAFUL\_Car\_TireAnalysisConfigurationBase\_\_), 
[TireAnalysisBase.ExecuteName](VM.Managed.DAFUL.Car.Operation.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireAnalysisBase\_ExecuteName), 
[TireSimulationRun.m\_param](VM.Managed.DAFUL.Car.Operation.TireSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireSimulationRun\_m\_param), 
[TireSimulationRun.Execute\(\)](VM.Managed.DAFUL.Car.Operation.TireSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireSimulationRun\_Execute), 
[TireSimulationRun.SimulationRunImpl\(bool\)](VM.Managed.DAFUL.Car.Operation.TireSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireSimulationRun\_SimulationRunImpl\_System\_Boolean\_), 
[TireSimulationRun.UpdateUI\(IUIUpdate, Document\)](VM.Managed.DAFUL.Car.Operation.TireSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireSimulationRun\_UpdateUI\_VM\_Managed\_UI\_IUIUpdate\_VM\_Managed\_Document\_), 
[TireSimulationRun.ApplySimulation\(\)](VM.Managed.DAFUL.Car.Operation.TireSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireSimulationRun\_ApplySimulation), 
[TireSimulationRun.Name](VM.Managed.DAFUL.Car.Operation.TireSimulationRun.md\#VM\_Managed\_DAFUL\_Car\_Operation\_TireSimulationRun\_Name), 
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

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisHandlingSteady__ctor_VM_Managed_Document_"></a> TireAnalysisHandlingSteady\(Document\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Operation.TireAnalysisHandlingSteady" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TireAnalysisHandlingSteady(Document doc)
```

#### Parameters

`doc` Document

The doc.

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisHandlingSteady__ctor_VM_Managed_Operation_JournalParameter_"></a> TireAnalysisHandlingSteady\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Operation.TireAnalysisHandlingSteady" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TireAnalysisHandlingSteady(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisHandlingSteady_ExecuteName"></a> ExecuteName

Gets the name of the execute.

```csharp
protected override string ExecuteName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisHandlingSteady_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisHandlingSteady_ExecuteCore_System_Int32_VM_Managed_DAFUL_Car_TireTestRigDocument_VM_Managed_DAFUL_Car_TireAnalysisConfigurationBase__"></a> ExecuteCore\(int, TireTestRigDocument, ref TireAnalysisConfigurationBase\)

Executes [core].

```csharp
protected override void ExecuteCore(int nIdex, TireTestRigDocument doc, ref TireAnalysisConfigurationBase taConfig)
```

#### Parameters

`nIdex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index.

`doc` TireTestRigDocument

The document.

`taConfig` TireAnalysisConfigurationBase

The configuration.

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisHandlingSteady_UpdateUI_VM_Managed_UI_IUIUpdate_VM_Managed_Document_"></a> UpdateUI\(IUIUpdate, Document\)

Updates the UI.

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

The updater.

`doc` Document

The document.

