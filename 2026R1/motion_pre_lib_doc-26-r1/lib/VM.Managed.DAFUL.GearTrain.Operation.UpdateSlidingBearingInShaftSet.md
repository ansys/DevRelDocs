# Class UpdateSlidingBearingInShaftSet
<a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInShaftSet"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Update Sliding Bearing In ShaftSet

```csharp
public class UpdateSlidingBearingInShaftSet : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[UpdateSlidingBearingInShaftSet](VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInShaftSet.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInShaftSet__ctor_System_String_System_String_System_String_System_String_"></a> UpdateSlidingBearingInShaftSet\(string, string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateSlidingBearingInShaftSet(string strBearingGeometryName, string strReferenceOffset, string strReferencePoint, string strStartAngle)
```

#### Parameters

`strBearingGeometryName` string

Name of the string bearing geometry.

`strReferenceOffset` string

The string reference offset.

`strReferencePoint` string

The string reference point.

`strStartAngle` string

The string arc angle.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInShaftSet__ctor_VM_Managed_Document3D_System_String_System_String_System_String_System_String_"></a> UpdateSlidingBearingInShaftSet\(Document3D, string, string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateSlidingBearingInShaftSet(Document3D document3D, string strBearingGeometryName, string strReferenceOffset, string strReferencePoint, string strStartAngle)
```

#### Parameters

`document3D` Document3D

The document.

`strBearingGeometryName` string

Name of the string bearing geometry.

`strReferenceOffset` string

The string reference offset.

`strReferencePoint` string

The string reference point.

`strStartAngle` string

The string arc angle.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInShaftSet__ctor_VM_Managed_Operation_JournalParameter_"></a> UpdateSlidingBearingInShaftSet\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateSlidingBearingInShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateSlidingBearingInShaftSet(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInShaftSet_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInShaftSet_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateSlidingBearingInShaftSet_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

