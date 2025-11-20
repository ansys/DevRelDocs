# Class UpdateGearInShaftSet
<a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateGearInShaftSet"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Update gear in shaftset operation

```csharp
public class UpdateGearInShaftSet : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[UpdateGearInShaftSet](VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInShaftSet.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateGearInShaftSet__ctor_System_String_System_String_System_String_System_String_System_String_VM_Managed_DAFUL_GearTrain_ClearanceInfo_"></a> UpdateGearInShaftSet\(string, string, string, string, string, ClearanceInfo\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateGearInShaftSet(string strGearGeometryName, string strReferenceOffset, string strReferencePoint, string strParentType, string strBearing, ClearanceInfo clearanceInfo)
```

#### Parameters

`strGearGeometryName` string

Name of the string gear geometry.

`strReferenceOffset` string

The string reference offset.

`strReferencePoint` string

The string reference point.

`strParentType` string

Type of the string parent.

`strBearing` string

The string bearing.

`clearanceInfo` [ClearanceInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GeometryInfoBase.cs)

The clearance Information.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateGearInShaftSet__ctor_VM_Managed_Document3D_System_String_System_String_System_String_System_String_System_String_VM_Managed_DAFUL_GearTrain_ClearanceInfo_"></a> UpdateGearInShaftSet\(Document3D, string, string, string, string, string, ClearanceInfo\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateGearInShaftSet(Document3D document3D, string strGearGeometryName, string strReferenceOffset, string strReferencePoint, string strParentType, string strBearing, ClearanceInfo clearanceInfo)
```

#### Parameters

`document3D` Document3D

The document.

`strGearGeometryName` string

Name of the string gear geometry.

`strReferenceOffset` string

The string reference offset.

`strReferencePoint` string

The string reference point.

`strParentType` string

Type of the string parent.

`strBearing` string

The string bearing.

`clearanceInfo` [ClearanceInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GeometryInfoBase.cs)

The clearance Information.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateGearInShaftSet__ctor_VM_Managed_Operation_JournalParameter_"></a> UpdateGearInShaftSet\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.UpdateGearInShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateGearInShaftSet(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateGearInShaftSet_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateGearInShaftSet_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_UpdateGearInShaftSet_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

