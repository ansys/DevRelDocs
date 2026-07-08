# Class ImprintUtil
<a id="VM_Managed_DAFUL_Operation_ImprintUtil"></a>

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOP.dll  

Impint Utility class

```csharp
public class ImprintUtil
```

#### Inheritance

object ← 
[ImprintUtil](VM.Managed.DAFUL.Operation.ImprintUtil.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil__ctor"></a> ImprintUtil\(\)

```csharp
public ImprintUtil()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_CreateFacesetByIndex_VM_Managed_Document3D_VM_Managed_DAFUL_SolidBody_System_Collections_Generic_List_System_Int32__System_String_"></a> CreateFacesetByIndex\(Document3D, SolidBody, List<int\>, string\)

Create faceset by index

```csharp
public static SetFace CreateFacesetByIndex(Document3D activeDocument, SolidBody parentSolidBody, List<int> lstFaceIndex, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document

`parentSolidBody` [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

The parent solid body

`lstFaceIndex` List<int\>

The face indexes

`strPrefixName` string

The pre-fix name

#### Returns

 [SetFace](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SetFace.cs)

faceset

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_CreateFacesetByIndex_VM_Managed_Document3D_VM_Managed_CAD_Body_System_Collections_Generic_List_System_Int32__System_String_"></a> CreateFacesetByIndex\(Document3D, Body, List<int\>, string\)

Create faceset by index

```csharp
public static SetFace CreateFacesetByIndex(Document3D activeDocument, Body body, List<int> lstFaceIndex, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document

`body` Body

The body

`lstFaceIndex` List<int\>

The face indexes

`strPrefixName` string

The pre-fix name

#### Returns

 [SetFace](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SetFace.cs)

faceset

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_CreatePartFacesetByIndex_VM_Managed_Document3D_VM_Managed_CAD_Body_System_Collections_Generic_List_System_Int32__System_String_"></a> CreatePartFacesetByIndex\(Document3D, Body, List<int\>, string\)

Create faceset by index in part

```csharp
public static PartSetFace CreatePartFacesetByIndex(Document3D activeDocument, Body body, List<int> lstFaceIndex, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document

`body` Body

The body

`lstFaceIndex` List<int\>

The face indexes

`strPrefixName` string

The pre-fix name

#### Returns

 [PartSetFace](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/PartSetFace.cs)

faceset

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_FindNearestPoints_VM_Managed_Document3D_VM_Managed_CAD_Body_System_Collections_Generic_List_System_Collections_Generic_List_VM_Managed_VectorBase___System_Collections_Generic_List_System_Collections_Generic_List_VM_Managed_VectorBase____"></a> FindNearestPoints\(Document3D, Body, List<List<VectorBase\>\>, ref List<List<VectorBase\>\>\)

Find nearest points

```csharp
public static bool FindNearestPoints(Document3D doc, Body target, List<List<VectorBase>> seedPoints, ref List<List<VectorBase>> results)
```

#### Parameters

`doc` Document3D

The document

`target` Body

The target body

`seedPoints` List<List<VectorBase\>\>

The seed points

`results` List<List<VectorBase\>\>

The result

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_FindNearestPoints_VM_Managed_Document3D_VM_Managed_CAD_Body_VM_Managed_VectorBase___VM_Managed_VectorBase____"></a> FindNearestPoints\(Document3D, Body, VectorBase\[\], ref VectorBase\[\]\)

Find nearest points

```csharp
public static bool FindNearestPoints(Document3D doc, Body target, VectorBase[] seedPoints, ref VectorBase[] results)
```

#### Parameters

`doc` Document3D

The document

`target` Body

The target body

`seedPoints` VectorBase\[\]

The seed points

`results` VectorBase\[\]

The result

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_FindNearestPointsWithDirection_VM_Managed_Document3D_VM_Managed_CAD_Body_System_Collections_Generic_List_System_Collections_Generic_List_VM_Managed_VectorBase___VM_Managed_VectorBase_System_Collections_Generic_List_System_Collections_Generic_List_VM_Managed_VectorBase____"></a> FindNearestPointsWithDirection\(Document3D, Body, List<List<VectorBase\>\>, VectorBase, ref List<List<VectorBase\>\>\)

Find nearest points

```csharp
public static bool FindNearestPointsWithDirection(Document3D doc, Body target, List<List<VectorBase>> seedPoints, VectorBase direction, ref List<List<VectorBase>> results)
```

#### Parameters

`doc` Document3D

The document

`target` Body

The target body

`seedPoints` List<List<VectorBase\>\>

The seed points

`direction` VectorBase

The direction

`results` List<List<VectorBase\>\>

The result

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_FindNearestPointsWithDirection_VM_Managed_Document3D_VM_Managed_CAD_Body_VM_Managed_VectorBase___VM_Managed_VectorBase_VM_Managed_VectorBase____"></a> FindNearestPointsWithDirection\(Document3D, Body, VectorBase\[\], VectorBase, ref VectorBase\[\]\)

Find nearest points

```csharp
public static bool FindNearestPointsWithDirection(Document3D doc, Body target, VectorBase[] seedPoints, VectorBase direction, ref VectorBase[] results)
```

#### Parameters

`doc` Document3D

The document

`target` Body

The target body

`seedPoints` VectorBase\[\]

The seed points

`direction` VectorBase

The direction

`results` VectorBase\[\]

The result

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_FindNearestTopologyIndex_VM_Managed_Document3D_VM_Managed_CAD_Body_VM_Managed_VectorBase_System_Collections_Generic_List_System_Int32___VM_Managed_VectorBase__"></a> FindNearestTopologyIndex\(Document3D, Body, VectorBase, ref List<int\>, ref VectorBase\)

Find nearest topology index

```csharp
public static bool FindNearestTopologyIndex(Document3D doc, Body target, VectorBase vecSeed, ref List<int> lstIndex, ref VectorBase vecResult)
```

#### Parameters

`doc` Document3D

The document

`target` Body

The target

`vecSeed` VectorBase

The seed vector

`lstIndex` List<int\>

The index array

`vecResult` VectorBase

The result vector

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_FindNearestTopologyIndex_VM_Managed_Document3D_VM_Managed_CAD_Body_System_Double_System_Double_System_Double_System_Collections_Generic_List_System_Int32___System_Double__System_Double__System_Double__"></a> FindNearestTopologyIndex\(Document3D, Body, double, double, double, ref List<int\>, ref double, ref double, ref double\)

Find nearest topology index

```csharp
public static bool FindNearestTopologyIndex(Document3D doc, Body target, double dSeedX, double dSeedY, double dSeedZ, ref List<int> lstIndex, ref double dResX, ref double dResY, ref double dResZ)
```

#### Parameters

`doc` Document3D

The document

`target` Body

The target

`dSeedX` double

The x of seed position

`dSeedY` double

The y of seed position

`dSeedZ` double

The z of seed position

`lstIndex` List<int\>

The index array

`dResX` double

The x of result position

`dResY` double

The y of result position

`dResZ` double

The z of result position

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_FindNearestTopologyIndexAdding4Point_VM_Managed_Document3D_VM_Managed_CAD_Body_VM_Managed_VectorBase_VM_Managed_TransformBase_System_Double_System_Boolean_System_Collections_Generic_List_System_Int32___VM_Managed_VectorBase__"></a> FindNearestTopologyIndexAdding4Point\(Document3D, Body, VectorBase, TransformBase, double, bool, ref List<int\>, ref VectorBase\)

Find nearest topology index adding 4 point

```csharp
public static bool FindNearestTopologyIndexAdding4Point(Document3D doc, Body target, VectorBase vecSeed, TransformBase transform, double dOffset, bool bSkipCenter, ref List<int> lstIndex, ref VectorBase vecResult)
```

#### Parameters

`doc` Document3D

The document

`target` Body

The target

`vecSeed` VectorBase

The seed vector

`transform` TransformBase

The transform

`dOffset` double

The offset

`bSkipCenter` bool

The center skip flag

`lstIndex` List<int\>

The index array

`vecResult` VectorBase

The result

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_GetFacesWithCylinderRange_VM_Managed_Document3D_VM_Managed_CAD_Body_VM_Managed_TMatrix_System_Double_System_Collections_Generic_List_System_Int32___"></a> GetFacesWithCylinderRange\(Document3D, Body, TMatrix, double, ref List<int\>\)

Gets faces with cylinder range

```csharp
public static bool GetFacesWithCylinderRange(Document3D doc3D, Body body, TMatrix matT, double dRadius, ref List<int> lstIndex)
```

#### Parameters

`doc3D` Document3D

The document

`body` Body

The body

`matT` TMatrix

The transform

`dRadius` double

The radius

`lstIndex` List<int\>

The index list

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_GetGearFacesWithCylinderRange_VM_Managed_Document3D_VM_Managed_CAD_Body_VM_Managed_TMatrix_System_Double_System_Collections_Generic_List_System_Int32___"></a> GetGearFacesWithCylinderRange\(Document3D, Body, TMatrix, double, ref List<int\>\)

Gets touched faces with cylinder range

```csharp
public static bool GetGearFacesWithCylinderRange(Document3D doc3D, Body body, TMatrix matT, double dRadius, ref List<int> lstIndex)
```

#### Parameters

`doc3D` Document3D

The document

`body` Body

The body

`matT` TMatrix

The transform

`dRadius` double

The radius

`lstIndex` List<int\>

The index list

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_ImprintCore_VM_Managed_Document3D_VM_Managed_CAD_Body_System_Collections_Generic_List_System_Int32__VM_Managed_TransformBase_System_Double_System_Double_"></a> ImprintCore\(Document3D, Body, List<int\>, TransformBase, double, double\)

ImprintCore

```csharp
public static void ImprintCore(Document3D doc, Body target, List<int> lstFaceIndex, TransformBase transf, double dHeight, double dWidth)
```

#### Parameters

`doc` Document3D

The document

`target` Body

The target

`lstFaceIndex` List<int\>

The face indexes

`transf` TransformBase

The transform

`dHeight` double

The height

`dWidth` double

The width

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_ImprintCore_VM_Managed_Document3D_VM_Managed_CAD_Body_System_Collections_Generic_List_System_Int32__VM_Managed_TransformBase_System_Double_"></a> ImprintCore\(Document3D, Body, List<int\>, TransformBase, double\)

ImprintCore

```csharp
public static void ImprintCore(Document3D doc, Body target, List<int> lstFaceIndex, TransformBase transf, double dRadius)
```

#### Parameters

`doc` Document3D

The document

`target` Body

The target

`lstFaceIndex` List<int\>

The face indexes

`transf` TransformBase

The transform

`dRadius` double

The radius

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_ImprintWithCircle_VM_Managed_Document3D_VM_Managed_DAFUL_SolidBody_System_Double_VM_Managed_VectorBase_VM_Managed_DirectionBase_System_Double_"></a> ImprintWithCircle\(Document3D, SolidBody, double, VectorBase, DirectionBase, double\)

Imprint with circle

```csharp
public static bool ImprintWithCircle(Document3D doc, SolidBody solidBody, double dTestRadius, VectorBase vecSeed, DirectionBase dirZ, double dRadius)
```

#### Parameters

`doc` Document3D

The document

`solidBody` [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

The solid body

`dTestRadius` double

The radius

`vecSeed` VectorBase

The seed position

`dirZ` DirectionBase

The z direction

`dRadius` double

The radius

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_ImprintWithCircle_VM_Managed_Document3D_VM_Managed_CAD_Body_System_Double_VM_Managed_VectorBase_VM_Managed_DirectionBase_System_Double_"></a> ImprintWithCircle\(Document3D, Body, double, VectorBase, DirectionBase, double\)

Imprint with circle

```csharp
public static bool ImprintWithCircle(Document3D doc, Body body, double dTestRadius, VectorBase vecSeed, DirectionBase dirZ, double dRadius)
```

#### Parameters

`doc` Document3D

The document

`body` Body

The body

`dTestRadius` double

The radius

`vecSeed` VectorBase

The seed vector

`dirZ` DirectionBase

The z direction

`dRadius` double

The radius

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_ImprintWithCylinder_VM_Managed_Document3D_VM_Managed_CAD_Body_VM_Managed_VectorBase_VM_Managed_VectorBase_System_Double_"></a> ImprintWithCylinder\(Document3D, Body, VectorBase, VectorBase, double\)

Imprint with cylinder

```csharp
public static bool ImprintWithCylinder(Document3D doc, Body body, VectorBase vecBottom, VectorBase vecTop, double dRadius)
```

#### Parameters

`doc` Document3D

The document

`body` Body

The body

`vecBottom` VectorBase

The bottom

`vecTop` VectorBase

The top

`dRadius` double

The radius

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_ImprintWithCylinderUsingKernelOperation_VM_Managed_Document3D_VM_Managed_CAD_Body_VM_Managed_VectorBase_VM_Managed_VectorBase_System_Double_"></a> ImprintWithCylinderUsingKernelOperation\(Document3D, Body, VectorBase, VectorBase, double\)

Imprint with cylinder

```csharp
public static bool ImprintWithCylinderUsingKernelOperation(Document3D doc, Body body, VectorBase vecBottom, VectorBase vecTop, double dRadius)
```

#### Parameters

`doc` Document3D

The document

`body` Body

The body

`vecBottom` VectorBase

The bottom

`vecTop` VectorBase

The top

`dRadius` double

The radius

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_ImprintWithRectangle_VM_Managed_Document3D_VM_Managed_DAFUL_SolidBody_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> ImprintWithRectangle\(Document3D, SolidBody, double, double, double, double, double, double\)

Imprint with rectangle

```csharp
public static bool ImprintWithRectangle(Document3D doc, SolidBody solidBody, double dTestRadius, double dSeedX, double dSeedY, double dSeedZ, double dHeight, double dWidth)
```

#### Parameters

`doc` Document3D

The document

`solidBody` [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

The solid body

`dTestRadius` double

The radius

`dSeedX` double

The x of seed position

`dSeedY` double

The y of seed position

`dSeedZ` double

The z of seed position

`dHeight` double

The height

`dWidth` double

The width

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_ImprintWithRectangle_VM_Managed_Document3D_VM_Managed_CAD_Body_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> ImprintWithRectangle\(Document3D, Body, double, double, double, double, double, double\)

Imprint with rectangle

```csharp
public static bool ImprintWithRectangle(Document3D doc, Body body, double dTestRadius, double dSeedX, double dSeedY, double dSeedZ, double dHeight, double dWidth)
```

#### Parameters

`doc` Document3D

The document

`body` Body

The body

`dTestRadius` double

The radius

`dSeedX` double

The x of seed position

`dSeedY` double

The y of seed position

`dSeedZ` double

The z of seed position

`dHeight` double

The height

`dWidth` double

The width

#### Returns

 bool

