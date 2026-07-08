# Class CalculateToothStiffnessForCycloid
<a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffnessForCycloid"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Calculate tooth stiffness operation for Cycloid

```csharp
public class CalculateToothStiffnessForCycloid : CalculateToothStiffness, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[CalculateToothStiffness](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md) ← 
[CalculateToothStiffnessForCycloid](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffnessForCycloid.md)

#### Implements

IOperation

#### Inherited Members

[CalculateToothStiffness.m\_doc](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_m\_doc), 
[CalculateToothStiffness.m\_strDocInfo](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_m\_strDocInfo), 
[CalculateToothStiffness.m\_strDatFile](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_m\_strDatFile), 
[CalculateToothStiffness.m\_arTeethPosition](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_m\_arTeethPosition), 
[CalculateToothStiffness.m\_nNumberOfMarker](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_m\_nNumberOfMarker), 
[CalculateToothStiffness.m\_ardDeform](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_m\_ardDeform), 
[CalculateToothStiffness.m\_nGearIdx](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_m\_nGearIdx), 
[CalculateToothStiffness.m\_strGearSet](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_m\_strGearSet), 
[CalculateToothStiffness.m\_bAdvancedGearGeometry](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_m\_bAdvancedGearGeometry), 
[CalculateToothStiffness.m\_bRingGear](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_m\_bRingGear), 
[CalculateToothStiffness.Execute\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_Execute), 
[CalculateToothStiffness.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_GetInformation\_System\_Xml\_XmlWriter\_), 
[CalculateToothStiffness.Result\(\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_Result), 
[CalculateToothStiffness.CreateSetNode\(MeshDocument, string\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_CreateSetNode\_VM\_Managed\_DAFUL\_FE\_MeshDocument\_System\_String\_), 
[CalculateToothStiffness.CreateMarkerOnNode\(MeshDocument, int, ref List<VectorBase\>\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_CreateMarkerOnNode\_VM\_Managed\_DAFUL\_FE\_MeshDocument\_System\_Int32\_System\_Collections\_Generic\_List\_VM\_Managed\_VectorBase\_\_\_), 
[CalculateToothStiffness.FindReferConnectEntity<T\>\(NodalBody, string\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_FindReferConnectEntity\_\_1\_VM\_Managed\_DAFUL\_FE\_NodalBody\_System\_String\_), 
[CalculateToothStiffness.GetBasePositionOfTScalar\(Vector, Vector, bool\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_GetBasePositionOfTScalar\_VM\_Managed\_Vector\_VM\_Managed\_Vector\_System\_Boolean\_), 
[CalculateToothStiffness.ReadOutFile\(string, int, ref double\[\]\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_ReadOutFile\_System\_String\_System\_Int32\_System\_Double\_\_\_\_), 
[CalculateToothStiffness.WriteDat\(string\)](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_WriteDat\_System\_String\_), 
[CalculateToothStiffness.Name](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_CalculateToothStiffness\_Name), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffnessForCycloid__ctor_System_String_System_String_System_Int32_System_String_"></a> CalculateToothStiffnessForCycloid\(string, string, int, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffnessForCycloid" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffnessForCycloid(string strDocInfo, string strDatFile, int nGearIdx, string strGearset)
```

#### Parameters

`strDocInfo` string

The string document information.

`strDatFile` string

the string dat file.

`nGearIdx` int

Index of the n gear.

`strGearset` string

The gearset name.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffnessForCycloid__ctor_VM_Managed_Document3D_System_String_System_String_System_Int32_System_String_"></a> CalculateToothStiffnessForCycloid\(Document3D, string, string, int, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffnessForCycloid" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffnessForCycloid(Document3D doc, string strDocInfo, string strDatFile, int nGearIdx, string strGearset)
```

#### Parameters

`doc` Document3D

The document.

`strDocInfo` string

The string document information.

`strDatFile` string

the string dat file.

`nGearIdx` int

Index of the n gear.

`strGearset` string

The gearset name.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffnessForCycloid__ctor_VM_Managed_Operation_JournalParameter_"></a> CalculateToothStiffnessForCycloid\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffnessForCycloid(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffnessForCycloid_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

