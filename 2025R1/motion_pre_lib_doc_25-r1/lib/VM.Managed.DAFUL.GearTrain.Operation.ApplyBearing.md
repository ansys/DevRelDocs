#  Class ApplyBearing

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Apply Bearing

```csharp
public class ApplyBearing : ApplyDTEntity, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[ApplyDTEntity](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md) ← 
[ApplyBearing](VM.Managed.DAFUL.GearTrain.Operation.ApplyBearing.md)

#### Implements

IOperation

#### Inherited Members

[ApplyDTEntity.m\_gearTrainDocument](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_m\_gearTrainDocument), 
[ApplyDTEntity.m\_arData](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_m\_arData), 
[ApplyDTEntity.m\_bRefresh](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_m\_bRefresh), 
[ApplyDTEntity.m\_bSuccess](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_m\_bSuccess), 
[ApplyDTEntity.ReCreateMeshFreeHousing\(bool, string, string, ref List<string\>\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_ReCreateMeshFreeHousing\_System\_Boolean\_System\_String\_System\_String\_System\_Collections\_Generic\_List\_System\_String\_\_\_), 
[ApplyDTEntity.CreateMeshFreeHousing\(bool, string, string, Body, ref List<string\>\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_CreateMeshFreeHousing\_System\_Boolean\_System\_String\_System\_String\_VM\_Managed\_CAD\_Body\_System\_Collections\_Generic\_List\_System\_String\_\_\_), 
[ApplyDTEntity.AppendMeshFreeHousing\(string, string, string, Body, ref List<string\>\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_AppendMeshFreeHousing\_System\_String\_System\_String\_System\_String\_VM\_Managed\_CAD\_Body\_System\_Collections\_Generic\_List\_System\_String\_\_\_), 
[ApplyDTEntity.AppendEFHousing\(string, string, string, ref List<string\>\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_AppendEFHousing\_System\_String\_System\_String\_System\_String\_System\_Collections\_Generic\_List\_System\_String\_\_\_), 
[ApplyDTEntity.SetAttribute\(IAttributeContainer, string, bool, PowerLoad.PowerLoadType, double, double, Vector\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_SetAttribute\_VM\_Managed\_IAttributeContainer\_System\_String\_System\_Boolean\_VM\_Managed\_DAFUL\_GearTrain\_PowerLoad\_PowerLoadType\_System\_Double\_System\_Double\_VM\_Vector\_), 
[ApplyDTEntity.RemoveAttribute\(IAttributeContainer\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_RemoveAttribute\_VM\_Managed\_IAttributeContainer\_), 
[ApplyDTEntity.DeleteDTEntity\(string\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_DeleteDTEntity\_System\_String\_), 
[ApplyDTEntity.GetSolidName\(string\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_GetSolidName\_System\_String\_), 
[ApplyDTEntity.ApplySolidName\(PartDocument, string\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_ApplySolidName\_VM\_Managed\_DAFUL\_PartDocument\_System\_String\_), 
[ApplyDTEntity.ChangeName\(string, string\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_ChangeName\_System\_String\_System\_String\_), 
[ApplyDTEntity.GetDuplicateEFHousing\(string\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_GetDuplicateEFHousing\_System\_String\_), 
[ApplyDTEntity.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_GetInformation\_System\_Xml\_XmlWriter\_), 
[ApplyDTEntity.Success](VM.Managed.DAFUL.GearTrain.Operation.ApplyDTEntity.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ApplyDTEntity\_Success), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyBearing__ctor_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Managed_DAFUL_Dialog_GearTrain_BodyToDTData___System_Boolean_"></a> ApplyBearing\(GearTrainDocument, BodyToDTData\[\], bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ApplyBearing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ApplyBearing(GearTrainDocument gearTrainDocument, BodyToDTData[] arData, bool bRefresh)
```

#### Parameters

`gearTrainDocument` GearTrainDocument

The document.

`arData` BodyToDTData\[\]

The data.

`bRefresh` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The refresh flag.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyBearing__ctor_VM_Managed_Operation_JournalParameter_"></a> ApplyBearing\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ApplyBearing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ApplyBearing(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyBearing_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ApplyBearing_Execute"></a> Execute\(\)

Execute

```csharp
public override void Execute()
```

