#  Class ImprintUtil

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOP.dll  

Impint Utility class

```csharp
public class ImprintUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

`parentSolidBody` SolidBody

The parent solid body

`lstFaceIndex` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The face indexes

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pre-fix name

#### Returns

 SetFace

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

`lstFaceIndex` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The face indexes

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pre-fix name

#### Returns

 SetFace

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

`lstFaceIndex` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The face indexes

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pre-fix name

#### Returns

 PartSetFace

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

`seedPoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>\>

The seed points

`results` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>\>

The result

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`seedPoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>\>

The seed points

`direction` VectorBase

The direction

`results` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>\>

The result

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`lstIndex` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index array

`vecResult` VectorBase

The result vector

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`dSeedX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The x of seed position

`dSeedY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The y of seed position

`dSeedZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The z of seed position

`lstIndex` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index array

`dResX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The x of result position

`dResY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The y of result position

`dResZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The z of result position

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`dOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The offset

`bSkipCenter` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The center skip flag

`lstIndex` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index array

`vecResult` VectorBase

The result

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`lstIndex` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index list

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`lstIndex` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index list

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`lstFaceIndex` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The face indexes

`transf` TransformBase

The transform

`dHeight` [double](https://learn.microsoft.com/dotnet/api/system.double)

The height

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

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

`lstFaceIndex` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The face indexes

`transf` TransformBase

The transform

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_ImprintWithCircle_VM_Managed_Document3D_VM_Managed_DAFUL_SolidBody_System_Double_VM_Managed_VectorBase_VM_Managed_DirectionBase_System_Double_"></a> ImprintWithCircle\(Document3D, SolidBody, double, VectorBase, DirectionBase, double\)

Imprint with circle

```csharp
public static bool ImprintWithCircle(Document3D doc, SolidBody solidBody, double dTestRadius, VectorBase vecSeed, DirectionBase dirZ, double dRadius)
```

#### Parameters

`doc` Document3D

The document

`solidBody` SolidBody

The solid body

`dTestRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`vecSeed` VectorBase

The seed position

`dirZ` DirectionBase

The z direction

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`dTestRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`vecSeed` VectorBase

The seed vector

`dirZ` DirectionBase

The z direction

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Operation_ImprintUtil_ImprintWithRectangle_VM_Managed_Document3D_VM_Managed_DAFUL_SolidBody_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> ImprintWithRectangle\(Document3D, SolidBody, double, double, double, double, double, double\)

Imprint with rectangle

```csharp
public static bool ImprintWithRectangle(Document3D doc, SolidBody solidBody, double dTestRadius, double dSeedX, double dSeedY, double dSeedZ, double dHeight, double dWidth)
```

#### Parameters

`doc` Document3D

The document

`solidBody` SolidBody

The solid body

`dTestRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`dSeedX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The x of seed position

`dSeedY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The y of seed position

`dSeedZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The z of seed position

`dHeight` [double](https://learn.microsoft.com/dotnet/api/system.double)

The height

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`dTestRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`dSeedX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The x of seed position

`dSeedY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The y of seed position

`dSeedZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The z of seed position

`dHeight` [double](https://learn.microsoft.com/dotnet/api/system.double)

The height

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

