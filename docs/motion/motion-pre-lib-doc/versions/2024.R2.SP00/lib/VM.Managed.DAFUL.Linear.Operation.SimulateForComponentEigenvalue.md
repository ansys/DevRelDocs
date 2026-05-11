# Class SimulateForComponentEigenvalue

Namespace: [VM.Managed.DAFUL.Linear.Operation](VM.Managed.DAFUL.Linear.Operation.md)  
Assembly: VMOpLinear.dll  

The run simulation operation for component eigenvalue

```csharp
public class SimulateForComponentEigenvalue : SimulationRun, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
[SimulateForComponentEigenvalue](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md)

#### Derived

[ExportDFG](VM.Managed.DAFUL.Linear.Operation.ExportDFG.md), 
[ExportDFS](VM.Managed.DAFUL.Linear.Operation.ExportDFS.md), 
[ExportXML](VM.Managed.DAFUL.Linear.Operation.ExportXML.md), 
[SimulateForBodyEigenvalue](VM.Managed.DAFUL.Linear.Operation.SimulateForBodyEigenvalue.md)

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

### SimulateForComponentEigenvalue\(Document\)

```csharp
public SimulateForComponentEigenvalue(Document doc)
```

#### Parameters

`doc` Document

### SimulateForComponentEigenvalue\(ObjectBase\)

```csharp
public SimulateForComponentEigenvalue(ObjectBase objSingle)
```

#### Parameters

`objSingle` ObjectBase

### SimulateForComponentEigenvalue\(Document, ObjectBase\)

```csharp
public SimulateForComponentEigenvalue(Document doc, ObjectBase objSingle)
```

#### Parameters

`doc` Document

`objSingle` ObjectBase

### SimulateForComponentEigenvalue\(Document, ObjectBase, SimulationParameter\)

```csharp
public SimulateForComponentEigenvalue(Document doc, ObjectBase objSingle, SimulationRun.SimulationParameter simulationParameter)
```

#### Parameters

`doc` Document

`objSingle` ObjectBase

`simulationParameter` SimulationRun.SimulationParameter

### SimulateForComponentEigenvalue\(JournalParameter\)

```csharp
public SimulateForComponentEigenvalue(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Fields

### m\_lstObjEigen

```csharp
protected List<ObjectBase> m_lstObjEigen
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ObjectBase\>

### m\_param

```csharp
protected SimulationScenarioEigenvalue.SolvingParam m_param
```

#### Field Value

 SimulationScenarioEigenvalue.SolvingParam

## Properties

### Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Success

```csharp
public bool Success { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AutoSetEigenvalueObject\(\)

```csharp
protected bool AutoSetEigenvalueObject()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### ReadExtraJournal\(XmlElement\)

```csharp
public override void ReadExtraJournal(XmlElement nodeArg)
```

#### Parameters

`nodeArg` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

### SimulationRunImpl\(bool\)

```csharp
protected override void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WriteExtraJournal\(XmlWriter\)

```csharp
public override void WriteExtraJournal(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)


