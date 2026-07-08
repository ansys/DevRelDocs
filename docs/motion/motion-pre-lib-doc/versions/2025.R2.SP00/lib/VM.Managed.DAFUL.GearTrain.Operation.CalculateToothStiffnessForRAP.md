#  Class CalculateToothStiffnessForRAP

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Calculate tooth stiffness operation for Rack and Pinion

```csharp
public class CalculateToothStiffnessForRAP : CalculateToothStiffness, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[CalculateToothStiffness](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md) ← 
[CalculateToothStiffnessForRAP](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffnessForRAP.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffnessForRAP__ctor_System_String_System_String_System_Double_VM_Managed_Vector___System_UInt32_System_Int32_System_String_"></a> CalculateToothStiffnessForRAP\(string, string, double, Vector\[\], uint, int, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffnessForRAP(string strDocInfo, string strDatFile, double dEndPosY, Vector[] arTeethPosition, uint nNumberOfMarker, int nGearIdx, string strGearset)
```

#### Parameters

`strDocInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string document information.

`strDatFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

the string dat file.

`dEndPosY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d end position y.

`arTeethPosition` Vector\[\]

The ar teeth position.

`nNumberOfMarker` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The n number of marker.

`nGearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the n gear.

`strGearset` [string](https://learn.microsoft.com/dotnet/api/system.string)

The gearset name.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffnessForRAP__ctor_VM_Managed_Document3D_System_String_System_String_System_Double_VM_Managed_Vector___System_UInt32_System_Int32_System_String_"></a> CalculateToothStiffnessForRAP\(Document3D, string, string, double, Vector\[\], uint, int, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffnessForRAP(Document3D doc, string strDocInfo, string strDatFile, double dEndPosY, Vector[] arTeethPosition, uint nNumberOfMarker, int nGearIdx, string strGearset)
```

#### Parameters

`doc` Document3D

The document.

`strDocInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string document information.

`strDatFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

the string dat file.

`dEndPosY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d end position y.

`arTeethPosition` Vector\[\]

The ar teeth position.

`nNumberOfMarker` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The n number of marker.

`nGearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the n gear.

`strGearset` [string](https://learn.microsoft.com/dotnet/api/system.string)

The gearset name.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffnessForRAP__ctor_VM_Managed_Operation_JournalParameter_"></a> CalculateToothStiffnessForRAP\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffnessForRAP(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffnessForRAP_CreateSetNode_VM_Managed_DAFUL_FE_MeshDocument_System_String_"></a> CreateSetNode\(MeshDocument, string\)

Create setNode.

```csharp
protected override bool CreateSetNode(MeshDocument docMesh, string strName)
```

#### Parameters

`docMesh` MeshDocument

The doc.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

