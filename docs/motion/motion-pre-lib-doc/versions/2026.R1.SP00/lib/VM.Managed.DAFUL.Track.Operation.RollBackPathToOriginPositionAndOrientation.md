# Class RollBackPathToOriginPositionAndOrientation
<a id="VM_Managed_DAFUL_Track_Operation_RollBackPathToOriginPositionAndOrientation"></a>

Namespace: [VM.Managed.DAFUL.Track.Operation](VM.Managed.DAFUL.Track.Operation.md)  
Assembly: VMOpTrack.dll  

```csharp
public class RollBackPathToOriginPositionAndOrientation : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[RollBackPathToOriginPositionAndOrientation](VM.Managed.DAFUL.Track.Operation.RollBackPathToOriginPositionAndOrientation.md)

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

### <a id="VM_Managed_DAFUL_Track_Operation_RollBackPathToOriginPositionAndOrientation__ctor_System_Collections_Generic_Dictionary_System_Int32_System_Object__System_Collections_Generic_Dictionary_System_Int32_VM_Managed_TMatrix__"></a> RollBackPathToOriginPositionAndOrientation\(Dictionary<int, object\>, Dictionary<int, TMatrix\>\)

```csharp
public RollBackPathToOriginPositionAndOrientation(Dictionary<int, object> dicPath, Dictionary<int, TMatrix> dicPos)
```

#### Parameters

`dicPath` Dictionary<int, object\>

`dicPos` Dictionary<int, TMatrix\>

## Properties

### <a id="VM_Managed_DAFUL_Track_Operation_RollBackPathToOriginPositionAndOrientation_IsHistoryMerge"></a> IsHistoryMerge

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Track_Operation_RollBackPathToOriginPositionAndOrientation_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Track_Operation_RollBackPathToOriginPositionAndOrientation_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

