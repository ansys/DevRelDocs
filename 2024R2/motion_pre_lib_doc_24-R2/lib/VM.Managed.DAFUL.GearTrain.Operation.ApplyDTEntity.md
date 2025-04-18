# Class ApplyDTEntity

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Apply Shaft Set

```csharp
public abstract class ApplyDTEntity : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

### ApplyDTEntity\(GearTrainDocument, BodyToDTData\[\], bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ApplyShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ApplyDTEntity(GearTrainDocument gearTrainDocument, BodyToDTData[] arData, bool bRefresh)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

The document.

`arData` BodyToDTData\[\]

The data.

`bRefresh` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The refresh flag.

### ApplyDTEntity\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ApplyShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ApplyDTEntity(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Fields

### m\_arData

data array

```csharp
protected BodyToDTData[] m_arData
```

#### Field Value

 BodyToDTData\[\]

### m\_bRefresh

refresh flag

```csharp
protected bool m_bRefresh
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_bSuccess

success flag

```csharp
protected bool m_bSuccess
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_gearTrainDocument

gearTrain Document

```csharp
protected GearTrainDocument m_gearTrainDocument
```

#### Field Value

 GearTrainDocument

## Properties

### Success

Gets the success flag

```csharp
public bool Success { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AppendEFHousing\(string, string, string, ref List<string\>\)

Append EF Housing

```csharp
protected void AppendEFHousing(string strBodyName, string strDTName, string strPartPath, ref List<string> lstHiddenFilePath)
```

#### Parameters

`strBodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body name

`strDTName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The dt name

`strPartPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The part file path

`lstHiddenFilePath` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The hidden file path

### AppendMeshFreeHousing\(string, string, string, Body, ref List<string\>\)

Append meshfree housing

```csharp
protected virtual void AppendMeshFreeHousing(string strDTName, string strSolidName, string strPartPath, Body body, ref List<string> lstHiddenFilePath)
```

#### Parameters

`strDTName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The dt entity name

`strSolidName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The solid name

`strPartPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The part path

`body` Body

The body

`lstHiddenFilePath` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The hidden file path

### ApplySolidName\(PartDocument, string\)

```csharp
protected void ApplySolidName(PartDocument document, string strSolidName)
```

#### Parameters

`document` PartDocument

`strSolidName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ChangeName\(string, string\)

Change name

```csharp
protected ObjectBase ChangeName(string strOldDTName, string strDTName)
```

#### Parameters

`strOldDTName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strDTName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 ObjectBase

### CreateMeshFreeHousing\(bool, string, string, Body, ref List<string\>\)

Create meshfree housing

```csharp
protected virtual IHousing CreateMeshFreeHousing(bool bShaft, string strDTName, string strSolidName, Body body, ref List<string> lstHiddenFilePath)
```

#### Parameters

`bShaft` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The shaft flag

`strDTName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The dt entity name

`strSolidName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The solid name

`body` Body

The body

`lstHiddenFilePath` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The hidden file path

#### Returns

 IHousing

### DeleteDTEntity\(string\)

Delete DT Entity

```csharp
protected void DeleteDTEntity(string strCategoryName)
```

#### Parameters

`strCategoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetDuplicateEFHousing\(string\)

Gets the duplicate EF Housing

```csharp
protected Dictionary<BodyToDTData, string> GetDuplicateEFHousing(string strType)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<BodyToDTData, [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### GetSolidName\(string\)

```csharp
protected string GetSolidName(string strBodyName)
```

#### Parameters

`strBodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ReCreateMeshFreeHousing\(bool, string, string, ref List<string\>\)

Recreate meshfree housing

```csharp
protected virtual IHousing ReCreateMeshFreeHousing(bool bShaft, string strBodyName, string strDTName, ref List<string> lstHiddenFilePath)
```

#### Parameters

`bShaft` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The shaft flag

`strBodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body name

`strDTName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The dt entity name

`lstHiddenFilePath` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The hidden file path

#### Returns

 IHousing

### RemoveAttribute\(IAttributeContainer\)

Remove attribute

```csharp
protected void RemoveAttribute(IAttributeContainer attrCont)
```

#### Parameters

`attrCont` IAttributeContainer

The attribute container

### SetAttribute\(IAttributeContainer, string, bool, PowerLoadType, double, double, Vector\)

Set attribute

```csharp
protected void SetAttribute(IAttributeContainer attrCont, string strBodyName, bool bUsePowerLoad, PowerLoad.PowerLoadType powerLoadType, double dOffset, double dWidth, Vector vecAttachedAxis)
```

#### Parameters

`attrCont` IAttributeContainer

The attribute container

`strBodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body name

`bUsePowerLoad` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The power load flag

`powerLoadType` PowerLoad.PowerLoadType

The power load type

`dOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The power load offset

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The power load width

`vecAttachedAxis` Vector

The attached axis


