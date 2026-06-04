# Class ImprintUtil

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

### ImprintUtil\(\)

```csharp
public ImprintUtil()
```

## Methods

### CreateFacesetByIndex\(Document3D, SolidBody, List<int\>, string\)

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

### CreateFacesetByIndex\(Document3D, Body, List<int\>, string\)

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

### CreatePartFacesetByIndex\(Document3D, Body, List<int\>, string\)

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

### FindNearestPoints\(Document3D, Body, List<List<VectorBase\>\>, ref List<List<VectorBase\>\>\)

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

### FindNearestPoints\(Document3D, Body, VectorBase\[\], ref VectorBase\[\]\)

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

### FindNearestPointsWithDirection\(Document3D, Body, List<List<VectorBase\>\>, VectorBase, ref List<List<VectorBase\>\>\)

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

### FindNearestPointsWithDirection\(Document3D, Body, VectorBase\[\], VectorBase, ref VectorBase\[\]\)

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

### FindNearestTopologyIndex\(Document3D, Body, VectorBase, ref List<int\>, ref VectorBase\)

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

### FindNearestTopologyIndex\(Document3D, Body, double, double, double, ref List<int\>, ref double, ref double, ref double\)

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

### FindNearestTopologyIndexAdding4Point\(Document3D, Body, VectorBase, TransformBase, double, bool, ref List<int\>, ref VectorBase\)

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

### GetFacesWithCylinderRange\(Document3D, Body, TMatrix, double, ref List<int\>\)

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

### GetGearFacesWithCylinderRange\(Document3D, Body, TMatrix, double, ref List<int\>\)

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

### ImprintCore\(Document3D, Body, List<int\>, TransformBase, double, double\)

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

### ImprintCore\(Document3D, Body, List<int\>, TransformBase, double\)

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

### ImprintWithCircle\(Document3D, SolidBody, double, VectorBase, DirectionBase, double\)

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

### ImprintWithCircle\(Document3D, Body, double, VectorBase, DirectionBase, double\)

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

### ImprintWithCylinder\(Document3D, Body, VectorBase, VectorBase, double\)

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

### ImprintWithCylinderUsingKernelOperation\(Document3D, Body, VectorBase, VectorBase, double\)

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

### ImprintWithRectangle\(Document3D, SolidBody, double, double, double, double, double, double\)

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

### ImprintWithRectangle\(Document3D, Body, double, double, double, double, double, double\)

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


