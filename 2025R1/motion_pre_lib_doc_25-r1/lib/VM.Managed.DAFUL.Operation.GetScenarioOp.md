#  Class GetScenarioOp

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

GetScenarioOp

```csharp
public class GetScenarioOp : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[GetScenarioOp](VM.Managed.DAFUL.Operation.GetScenarioOp.md)

#### Implements

IOperation

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Operation_GetScenarioOp__ctor"></a> GetScenarioOp\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Operation.GetScenarioOp" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GetScenarioOp()
```

### <a id="VM_Managed_DAFUL_Operation_GetScenarioOp__ctor_VM_Managed_DAFUL_DocumentAnalysis_VM_Managed_Simulation_Scenario_"></a> GetScenarioOp\(DocumentAnalysis, Scenario\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Operation.GetScenarioOp" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GetScenarioOp(DocumentAnalysis doc, Scenario scenario)
```

#### Parameters

`doc` DocumentAnalysis

The document.

`scenario` Scenario

The scenario.

### <a id="VM_Managed_DAFUL_Operation_GetScenarioOp__ctor_VM_Managed_Operation_JournalParameter_"></a> GetScenarioOp\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Operation.ModifyScenarioOp" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GetScenarioOp(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The journal parameter

## Properties

### <a id="VM_Managed_DAFUL_Operation_GetScenarioOp_Exist"></a> Exist

Gets the exist flag.

```csharp
public bool Exist { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Operation_GetScenarioOp_IsHistoryMerge"></a> IsHistoryMerge

Gets the history merge flag.

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Operation_GetScenarioOp_Name"></a> Name

Gets the Name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Operation_GetScenarioOp_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Operation_GetScenarioOp_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Get Information for journal

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer

