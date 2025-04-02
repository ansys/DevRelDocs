#  Class ApplyAssemblyIOShaft

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Apply assembly i/o shaft

```csharp
public class ApplyAssemblyIOShaft : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[ApplyAssemblyIOShaft](VM.Managed.DAFUL.GearTrain.Operation.ApplyAssemblyIOShaft.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyAssemblyIOShaft__ctor_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Managed_DAFUL_IConnectable_VM_Managed_DirectionExpression_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_GTAssemblyInfo__System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_GTAssemblyInfo__"></a> ApplyAssemblyIOShaft\(GearTrainDocument, IConnectable, DirectionExpression, List<GTAssemblyInfo\>, List<GTAssemblyInfo\>\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ApplyAssemblyIOShaft" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ApplyAssemblyIOShaft(GearTrainDocument gearTrainDocument, IConnectable referenceBody, DirectionExpression direction, List<GTAssemblyInfo> inputInfo, List<GTAssemblyInfo> outputInfo)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

The geartrain document

`referenceBody` IConnectable

The reference body

`direction` DirectionExpression

The direction

`inputInfo` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<GTAssemblyInfo\>

The input information

`outputInfo` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<GTAssemblyInfo\>

The output information

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyAssemblyIOShaft__ctor_VM_Managed_Operation_JournalParameter_"></a> ApplyAssemblyIOShaft\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ApplyAssemblyIOShaft" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ApplyAssemblyIOShaft(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyAssemblyIOShaft_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Exceptions

 [NotImplementedException](https://learn.microsoft.com/dotnet/api/system.notimplementedexception)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyAssemblyIOShaft_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

#### Exceptions

 [NotImplementedException](https://learn.microsoft.com/dotnet/api/system.notimplementedexception)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyAssemblyIOShaft_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

