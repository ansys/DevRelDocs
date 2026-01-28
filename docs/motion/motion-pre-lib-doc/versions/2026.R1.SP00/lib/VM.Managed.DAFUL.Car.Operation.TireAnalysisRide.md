# Class TireAnalysisRide
<a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisRide"></a>

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpCar.dll  

The handling steady of tire analysis operation

```csharp
public class TireAnalysisRide : TireAnalysisBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[SimulationRun](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOpCore/SimulationRun.cs) ← 
[TireSimulationRun](VM.Managed.DAFUL.Car.Operation.TireSimulationRun.md) ← 
[TireAnalysisBase](VM.Managed.DAFUL.Car.Operation.TireAnalysisBase.md) ← 
[TireAnalysisRide](VM.Managed.DAFUL.Car.Operation.TireAnalysisRide.md)

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

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisRide__ctor_VM_Managed_Document_"></a> TireAnalysisRide\(Document\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Operation.TireAnalysisRide" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TireAnalysisRide(Document doc)
```

#### Parameters

`doc` Document

The doc.

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisRide__ctor_VM_Managed_Operation_JournalParameter_"></a> TireAnalysisRide\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Operation.TireAnalysisRide" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TireAnalysisRide(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisRide_ExecuteName"></a> ExecuteName

Gets the name of the execute.

```csharp
protected override string ExecuteName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisRide_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisRide_ExecuteCore_System_Int32_VM_Managed_DAFUL_Car_TireTestRigDocument_VM_Managed_DAFUL_Car_TireAnalysisConfigurationBase__"></a> ExecuteCore\(int, TireTestRigDocument, ref TireAnalysisConfigurationBase\)

Executes [core].

```csharp
protected override void ExecuteCore(int nIdex, TireTestRigDocument doc, ref TireAnalysisConfigurationBase taConfig)
```

#### Parameters

`nIdex` int

The index.

`doc` [TireTestRigDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/TireTestRigDocument.cs)

The document.

`taConfig` [TireAnalysisConfigurationBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCar/TireSimulationConfiguration.cs)

The configuration.

### <a id="VM_Managed_DAFUL_Car_Operation_TireAnalysisRide_UpdateUI_VM_Managed_UI_IUIUpdate_VM_Managed_Document_"></a> UpdateUI\(IUIUpdate, Document\)

Updates the UI.

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

The updater.

`doc` Document

The document.

