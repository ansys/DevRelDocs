# Class CalculateToothStiffness

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Calculate tooth stiffness operation

```csharp
public class CalculateToothStiffness : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

### CalculateToothStiffness\(string, string, double, Vector\[\], uint, int, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffness(string strDocInfo, string strDatFile, double dEndPosY, Vector[] arTeethPosition, uint nNumberOfMarker, int nGearIdx, string strGearset)
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

### CalculateToothStiffness\(Document3D, string, string, double, Vector\[\], uint, int, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffness(Document3D doc, string strDocInfo, string strDatFile, double dEndPosY, Vector[] arTeethPosition, uint nNumberOfMarker, int nGearIdx, string strGearset)
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

### CalculateToothStiffness\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.CalculateToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CalculateToothStiffness(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Fields

### m\_arTeethPosition

m_arTeethPosition

```csharp
protected Vector[] m_arTeethPosition
```

#### Field Value

 Vector\[\]

### m\_ardDeform

m_ardDeform

```csharp
protected double[] m_ardDeform
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_bAdvancedGearGeometry

```csharp
protected bool m_bAdvancedGearGeometry
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_bRingGear

```csharp
protected bool m_bRingGear
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_doc

The document.

```csharp
protected Document3D m_doc
```

#### Field Value

 Document3D

### m\_nGearIdx

m_nGearIdx

```csharp
protected int m_nGearIdx
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m\_nNumberOfMarker

m_nNumberOfMarker

```csharp
protected uint m_nNumberOfMarker
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### m\_strDatFile

The mesh data file path

```csharp
protected string m_strDatFile
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### m\_strDocInfo

The document information

```csharp
protected string m_strDocInfo
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### m\_strGearSet

m_strGearSet

```csharp
protected string m_strGearSet
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### CreateMarkerOnNode\(MeshDocument, int, ref List<VectorBase\>\)

CreateMarkerOnNode

```csharp
protected void CreateMarkerOnNode(MeshDocument docMesh, int nNodeIndex, ref List<VectorBase> lstMarkerPoint)
```

#### Parameters

`docMesh` MeshDocument

mesh document

`nNodeIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

the index of node

`lstMarkerPoint` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

the list of marker's position

### CreateSetNode\(MeshDocument, string\)

Create setNode.

```csharp
protected virtual bool CreateSetNode(MeshDocument docMesh, string strName)
```

#### Parameters

`docMesh` MeshDocument

The doc.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### FindReferConnectEntity<T\>\(NodalBody, string\)

FindReferConnectEntity

```csharp
protected T FindReferConnectEntity<T>(NodalBody nBody, string entityName) where T : Reference
```

#### Parameters

`nBody` NodalBody

nodal body

`entityName` [string](https://learn.microsoft.com/dotnet/api/system.string)

the name of reference object's prototype

#### Returns

 T

the reference object

#### Type Parameters

`T` 

the type of reference object

### GetBasePositionOfTScalar\(Vector, Vector, bool\)

GetBasePositionOfTScalar

```csharp
protected PointBase GetBasePositionOfTScalar(Vector vec1, Vector vec2, bool bLast)
```

#### Parameters

`vec1` Vector

vec1

`vec2` Vector

vec2

`bLast` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

bLast

#### Returns

 PointBase

PointBase

### GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### ReadOutFile\(string, int, ref double\[\]\)

ReadOutFile

```csharp
protected void ReadOutFile(string strPath, int nLen, ref double[] ardDeform)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

the out file path

`nLen` [int](https://learn.microsoft.com/dotnet/api/system.int32)

nLen

`ardDeform` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

ardDeform

### Result\(\)

Results this instance.

```csharp
public double[] Result()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### WriteDat\(string\)

WriteDat

```csharp
protected void WriteDat(string strDatPath)
```

#### Parameters

`strDatPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

strDatPath


