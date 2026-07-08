# Class ApplySlidingBearing
<a id="VM_Managed_DAFUL_GearTrain_Operation_ApplySlidingBearing"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Apply sliding bearing

```csharp
public class ApplySlidingBearing : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[ApplySlidingBearing](VM.Managed.DAFUL.GearTrain.Operation.ApplySlidingBearing.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplySlidingBearing__ctor_VM_Managed_DAFUL_GearTrain_HiddenSlidingBearingDocument_VM_Managed_DAFUL_GearTrain_SlidingBearing_"></a> ApplySlidingBearing\(HiddenSlidingBearingDocument, SlidingBearing\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ApplySlidingBearing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ApplySlidingBearing(HiddenSlidingBearingDocument hiddenSlidingBearingDocument1, SlidingBearing slidingBearing)
```

#### Parameters

`hiddenSlidingBearingDocument1` [HiddenSlidingBearingDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenBearingDocument.cs)

The hidden sliding bearing document

`slidingBearing` [SlidingBearing](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/SlidingBearing.cs)

The sliding bearing

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplySlidingBearing__ctor_VM_Managed_Operation_JournalParameter_"></a> ApplySlidingBearing\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ApplySlidingBearing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ApplySlidingBearing(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplySlidingBearing_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

#### Exceptions

 NotImplementedException

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplySlidingBearing_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

#### Exceptions

 NotImplementedException

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplySlidingBearing_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

