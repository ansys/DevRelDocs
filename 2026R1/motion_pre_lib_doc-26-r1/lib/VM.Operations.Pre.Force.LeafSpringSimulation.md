# Class LeafSpringSimulation
<a id="VM_Operations_Pre_Force_LeafSpringSimulation"></a>

Namespace: [VM.Operations.Pre.Force](VM.Operations.Pre.Force.md)  
Assembly: VM.Operations.Pre.Force.dll  

```csharp
public class LeafSpringSimulation : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[LeafSpringSimulation](VM.Operations.Pre.Force.LeafSpringSimulation.md)

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

### <a id="VM_Operations_Pre_Force_LeafSpringSimulation__ctor_System_Func_VM_Models_Pre_Force_LeafSpring__System_Boolean_"></a> LeafSpringSimulation\(Func<LeafSpring\>, bool\)

```csharp
public LeafSpringSimulation(Func<LeafSpring> getLeafSpring, bool isForceTest)
```

#### Parameters

`getLeafSpring` Func<[LeafSpring](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre.Force/Models/LeafSpring/LeafSpring.Linker.cs)\>

`isForceTest` bool

### <a id="VM_Operations_Pre_Force_LeafSpringSimulation__ctor_VM_Models_Pre_Force_LeafSpring_System_Boolean_"></a> LeafSpringSimulation\(LeafSpring, bool\)

```csharp
public LeafSpringSimulation(LeafSpring leafSpring, bool isForceTest)
```

#### Parameters

`leafSpring` [LeafSpring](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre.Force/Models/LeafSpring/LeafSpring.Linker.cs)

`isForceTest` bool

### <a id="VM_Operations_Pre_Force_LeafSpringSimulation__ctor_VM_Managed_Operation_JournalParameter_"></a> LeafSpringSimulation\(JournalParameter\)

```csharp
public LeafSpringSimulation(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Operations_Pre_Force_LeafSpringSimulation_GetLeafSpring"></a> GetLeafSpring

```csharp
public Func<LeafSpring> GetLeafSpring { get; }
```

#### Property Value

 Func<[LeafSpring](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre.Force/Models/LeafSpring/LeafSpring.Linker.cs)\>

### <a id="VM_Operations_Pre_Force_LeafSpringSimulation_IsForceTest"></a> IsForceTest

```csharp
public bool IsForceTest { get; }
```

#### Property Value

 bool

### <a id="VM_Operations_Pre_Force_LeafSpringSimulation_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

### <a id="VM_Operations_Pre_Force_LeafSpringSimulation_ResultFolderPath"></a> ResultFolderPath

```csharp
public string ResultFolderPath { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Operations_Pre_Force_LeafSpringSimulation_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Operations_Pre_Force_LeafSpringSimulation_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

