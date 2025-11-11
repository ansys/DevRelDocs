# Class ApplyDTEntity
<a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Apply Shaft Set

```csharp
public abstract class ApplyDTEntity : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[ApplyDTEntity](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md)

#### Derived

[ApplyBearing](VM.Managed.DAFUL.GearTrain.Operation.ApplyBearing.md), 
[ApplyClutch](VM.Managed.DAFUL.GearTrain.Operation.ApplyClutch.md), 
[ApplyGearSet](VM.Managed.DAFUL.GearTrain.Operation.ApplyGearSet.md), 
[ApplyHousing](VM.Managed.DAFUL.GearTrain.Operation.ApplyHousing.md), 
[ApplyShaftSet](VM.Managed.DAFUL.GearTrain.Operation.ApplyShaftSet.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity__ctor_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Managed_DAFUL_Dialog_GearTrain_BodyToDTData___System_Boolean_"></a> ApplyDTEntity\(GearTrainDocument, BodyToDTData\[\], bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ApplyShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ApplyDTEntity(GearTrainDocument gearTrainDocument, BodyToDTData[] arData, bool bRefresh)
```

#### Parameters

`gearTrainDocument` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document.

`arData` BodyToDTData\[\]

The data.

`bRefresh` bool

The refresh flag.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity__ctor_VM_Managed_Operation_JournalParameter_"></a> ApplyDTEntity\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ApplyShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ApplyDTEntity(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_m_arData"></a> m\_arData

data array

```csharp
protected BodyToDTData[] m_arData
```

#### Field Value

 BodyToDTData\[\]

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_m_bRefresh"></a> m\_bRefresh

refresh flag

```csharp
protected bool m_bRefresh
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_m_bSuccess"></a> m\_bSuccess

success flag

```csharp
protected bool m_bSuccess
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_m_gearTrainDocument"></a> m\_gearTrainDocument

gearTrain Document

```csharp
protected GearTrainDocument m_gearTrainDocument
```

#### Field Value

 [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_Success"></a> Success

Gets the success flag

```csharp
public bool Success { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_AppendEFHousing_System_String_System_String_System_String_System_Collections_Generic_List_System_String___"></a> AppendEFHousing\(string, string, string, ref List<string\>\)

Append EF Housing

```csharp
protected void AppendEFHousing(string strBodyName, string strDTName, string strPartPath, ref List<string> lstHiddenFilePath)
```

#### Parameters

`strBodyName` string

The body name

`strDTName` string

The dt name

`strPartPath` string

The part file path

`lstHiddenFilePath` List<string\>

The hidden file path

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_AppendMeshFreeHousing_System_String_System_String_System_String_VM_Managed_CAD_Body_System_Collections_Generic_List_System_String___"></a> AppendMeshFreeHousing\(string, string, string, Body, ref List<string\>\)

Append meshfree housing

```csharp
protected virtual void AppendMeshFreeHousing(string strDTName, string strSolidName, string strPartPath, Body body, ref List<string> lstHiddenFilePath)
```

#### Parameters

`strDTName` string

The dt entity name

`strSolidName` string

The solid name

`strPartPath` string

The part path

`body` Body

The body

`lstHiddenFilePath` List<string\>

The hidden file path

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_ApplySolidName_VM_Managed_DAFUL_PartDocument_System_String_"></a> ApplySolidName\(PartDocument, string\)

```csharp
protected void ApplySolidName(PartDocument document, string strSolidName)
```

#### Parameters

`document` [PartDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/PartDocument.cs)

`strSolidName` string

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_ChangeName_System_String_System_String_"></a> ChangeName\(string, string\)

Change name

```csharp
protected ObjectBase ChangeName(string strOldDTName, string strDTName)
```

#### Parameters

`strOldDTName` string

`strDTName` string

#### Returns

 ObjectBase

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_CreateMeshFreeHousing_System_Boolean_System_String_System_String_VM_Managed_CAD_Body_System_Collections_Generic_List_System_String___"></a> CreateMeshFreeHousing\(bool, string, string, Body, ref List<string\>\)

Create meshfree housing

```csharp
protected virtual IHousing CreateMeshFreeHousing(bool bShaft, string strDTName, string strSolidName, Body body, ref List<string> lstHiddenFilePath)
```

#### Parameters

`bShaft` bool

The shaft flag

`strDTName` string

The dt entity name

`strSolidName` string

The solid name

`body` Body

The body

`lstHiddenFilePath` List<string\>

The hidden file path

#### Returns

 IHousing

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_DeleteDTEntity_System_String_"></a> DeleteDTEntity\(string\)

Delete DT Entity

```csharp
protected void DeleteDTEntity(string strCategoryName)
```

#### Parameters

`strCategoryName` string

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_GetDuplicateEFHousing_System_String_"></a> GetDuplicateEFHousing\(string\)

Gets the duplicate EF Housing

```csharp
protected Dictionary<BodyToDTData, string> GetDuplicateEFHousing(string strType)
```

#### Parameters

`strType` string

The type

#### Returns

 Dictionary<BodyToDTData, string\>

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_GetSolidName_System_String_"></a> GetSolidName\(string\)

```csharp
protected string GetSolidName(string strBodyName)
```

#### Parameters

`strBodyName` string

#### Returns

 string

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_ReCreateMeshFreeHousing_System_Boolean_System_String_System_String_System_Collections_Generic_List_System_String___"></a> ReCreateMeshFreeHousing\(bool, string, string, ref List<string\>\)

Recreate meshfree housing

```csharp
protected virtual IHousing ReCreateMeshFreeHousing(bool bShaft, string strBodyName, string strDTName, ref List<string> lstHiddenFilePath)
```

#### Parameters

`bShaft` bool

The shaft flag

`strBodyName` string

The body name

`strDTName` string

The dt entity name

`lstHiddenFilePath` List<string\>

The hidden file path

#### Returns

 IHousing

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_RemoveAttribute_VM_Managed_IAttributeContainer_"></a> RemoveAttribute\(IAttributeContainer\)

Remove attribute

```csharp
protected void RemoveAttribute(IAttributeContainer attrCont)
```

#### Parameters

`attrCont` IAttributeContainer

The attribute container

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyDTEntity_SetAttribute_VM_Managed_IAttributeContainer_System_String_System_Boolean_VM_Managed_DAFUL_GearTrain_PowerLoad_PowerLoadType_System_Double_System_Double_VM_Vector_"></a> SetAttribute\(IAttributeContainer, string, bool, PowerLoadType, double, double, Vector\)

Set attribute

```csharp
protected void SetAttribute(IAttributeContainer attrCont, string strBodyName, bool bUsePowerLoad, PowerLoad.PowerLoadType powerLoadType, double dOffset, double dWidth, Vector vecAttachedAxis)
```

#### Parameters

`attrCont` IAttributeContainer

The attribute container

`strBodyName` string

The body name

`bUsePowerLoad` bool

The power load flag

`powerLoadType` [PowerLoad](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PowerLoad.cs).[PowerLoadType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PowerLoad.cs)

The power load type

`dOffset` double

The power load offset

`dWidth` double

The power load width

`vecAttachedAxis` Vector

The attached axis

