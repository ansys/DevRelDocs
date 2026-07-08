# Class CalculateToothStiffness
<a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Calculate tooth stiffness operation

```csharp
public class CalculateToothStiffness : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[CalculateToothStiffness](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness.md)

#### Derived

[CalculateToothStiffnessForCycloid](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffnessForCycloid.md), 
[CalculateToothStiffnessForRAP](VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffnessForRAP.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness__ctor_System_String_System_String_System_Double_VM_Managed_Vector___System_UInt32_System_Int32_System_String_"></a> CalculateToothStiffness\(string, string, double, Vector\[\], uint, int, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffness(string strDocInfo, string strDatFile, double dEndPosY, Vector[] arTeethPosition, uint nNumberOfMarker, int nGearIdx, string strGearset)
```

#### Parameters

`strDocInfo` string

The string document information.

`strDatFile` string

the string dat file.

`dEndPosY` double

The d end position y.

`arTeethPosition` Vector\[\]

The ar teeth position.

`nNumberOfMarker` uint

The n number of marker.

`nGearIdx` int

Index of the n gear.

`strGearset` string

The gearset name.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness__ctor_VM_Managed_Document3D_System_String_System_String_System_Double_VM_Managed_Vector___System_UInt32_System_Int32_System_String_"></a> CalculateToothStiffness\(Document3D, string, string, double, Vector\[\], uint, int, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffness(Document3D doc, string strDocInfo, string strDatFile, double dEndPosY, Vector[] arTeethPosition, uint nNumberOfMarker, int nGearIdx, string strGearset)
```

#### Parameters

`doc` Document3D

The document.

`strDocInfo` string

The string document information.

`strDatFile` string

the string dat file.

`dEndPosY` double

The d end position y.

`arTeethPosition` Vector\[\]

The ar teeth position.

`nNumberOfMarker` uint

The n number of marker.

`nGearIdx` int

Index of the n gear.

`strGearset` string

The gearset name.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness__ctor_VM_Managed_Operation_JournalParameter_"></a> CalculateToothStiffness\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffness(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_m_arTeethPosition"></a> m\_arTeethPosition

m_arTeethPosition

```csharp
protected Vector[] m_arTeethPosition
```

#### Field Value

 Vector\[\]

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_m_ardDeform"></a> m\_ardDeform

m_ardDeform

```csharp
protected double[] m_ardDeform
```

#### Field Value

 double\[\]

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_m_bAdvancedGearGeometry"></a> m\_bAdvancedGearGeometry

```csharp
protected bool m_bAdvancedGearGeometry
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_m_bRingGear"></a> m\_bRingGear

```csharp
protected bool m_bRingGear
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_m_doc"></a> m\_doc

The document.

```csharp
protected Document3D m_doc
```

#### Field Value

 Document3D

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_m_nGearIdx"></a> m\_nGearIdx

m_nGearIdx

```csharp
protected int m_nGearIdx
```

#### Field Value

 int

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_m_nNumberOfMarker"></a> m\_nNumberOfMarker

m_nNumberOfMarker

```csharp
protected uint m_nNumberOfMarker
```

#### Field Value

 uint

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_m_strDatFile"></a> m\_strDatFile

The mesh data file path

```csharp
protected string m_strDatFile
```

#### Field Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_m_strDocInfo"></a> m\_strDocInfo

The document information

```csharp
protected string m_strDocInfo
```

#### Field Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_m_strGearSet"></a> m\_strGearSet

m_strGearSet

```csharp
protected string m_strGearSet
```

#### Field Value

 string

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_CreateMarkerOnNode_VM_Managed_DAFUL_FE_MeshDocument_System_Int32_System_Collections_Generic_List_VM_Managed_VectorBase___"></a> CreateMarkerOnNode\(MeshDocument, int, ref List<VectorBase\>\)

CreateMarkerOnNode

```csharp
protected void CreateMarkerOnNode(MeshDocument docMesh, int nNodeIndex, ref List<VectorBase> lstMarkerPoint)
```

#### Parameters

`docMesh` MeshDocument

mesh document

`nNodeIndex` int

the index of node

`lstMarkerPoint` List<VectorBase\>

the list of marker's position

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_CreateSetNode_VM_Managed_DAFUL_FE_MeshDocument_System_String_"></a> CreateSetNode\(MeshDocument, string\)

Create setNode.

```csharp
protected virtual bool CreateSetNode(MeshDocument docMesh, string strName)
```

#### Parameters

`docMesh` MeshDocument

The doc.

`strName` string

The name.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_FindReferConnectEntity__1_VM_Managed_DAFUL_FE_NodalBody_System_String_"></a> FindReferConnectEntity<T\>\(NodalBody, string\)

FindReferConnectEntity

```csharp
protected T FindReferConnectEntity<T>(NodalBody nBody, string entityName) where T : Reference
```

#### Parameters

`nBody` NodalBody

nodal body

`entityName` string

the name of reference object's prototype

#### Returns

 T

the reference object

#### Type Parameters

`T` 

the type of reference object

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_GetBasePositionOfTScalar_VM_Managed_Vector_VM_Managed_Vector_System_Boolean_"></a> GetBasePositionOfTScalar\(Vector, Vector, bool\)

GetBasePositionOfTScalar

```csharp
protected PointBase GetBasePositionOfTScalar(Vector vec1, Vector vec2, bool bLast)
```

#### Parameters

`vec1` Vector

vec1

`vec2` Vector

vec2

`bLast` bool

bLast

#### Returns

 PointBase

PointBase

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_ReadOutFile_System_String_System_Int32_System_Double____"></a> ReadOutFile\(string, int, ref double\[\]\)

ReadOutFile

```csharp
protected void ReadOutFile(string strPath, int nLen, ref double[] ardDeform)
```

#### Parameters

`strPath` string

the out file path

`nLen` int

nLen

`ardDeform` double\[\]

ardDeform

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_Result"></a> Result\(\)

Results this instance.

```csharp
public double[] Result()
```

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_GearTrain_Operation_CalculateToothStiffness_WriteDat_System_String_"></a> WriteDat\(string\)

WriteDat

```csharp
protected void WriteDat(string strDatPath)
```

#### Parameters

`strDatPath` string

strDatPath

