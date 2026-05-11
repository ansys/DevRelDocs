# Class LeafSpringOperationExtensions

Namespace: [VM.Operations.Pre.Force](VM.Operations.Pre.Force.md)  
Assembly: VM.Operations.Pre.Force.dll  

```csharp
public static class LeafSpringOperationExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LeafSpringOperationExtensions](VM.Operations.Pre.Force.LeafSpringOperationExtensions.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CopyBushPropertyValue\(PropertyBush, PropertyBush\)

```csharp
public static void CopyBushPropertyValue(PropertyBush target, PropertyBush source)
```

#### Parameters

`target` PropertyBush

`source` PropertyBush

### CreateCenterBoltBody\(Document, string, Vector, double, bool\)

```csharp
public static SolidBody CreateCenterBoltBody(Document document, string name, Vector position, double mass, bool addToDocument = true)
```

#### Parameters

`document` Document

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`position` Vector

`mass` [double](https://learn.microsoft.com/dotnet/api/system.double)

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 SolidBody

### CreateClipToLeafVectorForceUserSubroutine\(Document, PropertyVector, string, Clip, BeamGroup, int, Marker, CenterMarker, SolidBody, bool\)

```csharp
public static UserSubroutine CreateClipToLeafVectorForceUserSubroutine(Document document, PropertyVector property, string name, Clip clip, BeamGroup leafBeamGroup, int beamGroupBodyIndex, Marker upperMarker, CenterMarker fixedBodyCenterMarker, SolidBody beamGroupBody, bool addToDocument = true)
```

#### Parameters

`document` Document

`property` PropertyVector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`clip` Clip

`leafBeamGroup` BeamGroup

`beamGroupBodyIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`upperMarker` Marker

`fixedBodyCenterMarker` CenterMarker

`beamGroupBody` SolidBody

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 UserSubroutine

### CreateEyeBody\(Document, string, \(Vector Top, Vector Bottom\), \(double Outer, double Inner\), bool\)

```csharp
public static SolidBody CreateEyeBody(Document document, string name, (Vector Top, Vector Bottom) position, (double Outer, double Inner) radius, bool addToDocument = true)
```

#### Parameters

`document` Document

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`position` \(Vector [Top](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.top), Vector [Bottom](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.bottom)\)

`radius` \([double](https://learn.microsoft.com/dotnet/api/system.double) [Outer](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.outer), [double](https://learn.microsoft.com/dotnet/api/system.double) [Inner](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.inner)\)

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 SolidBody

### CreateLeafToLeafVectorForceUserSubroutine\(Document, PropertyVector, string, Leaf\[\], IList<LeafInfo\>, int, int, int, int, CenterMarker, CenterMarker, bool\)

```csharp
public static UserSubroutine CreateLeafToLeafVectorForceUserSubroutine(Document document, PropertyVector property, string name, Leaf[] leaves, IList<LeafInfo> leafInfos, int baseLeafIndex, int baseBodyIndex, int actionLeafIndex, int actionBodyIndex, CenterMarker baseBodyCenterMarker, CenterMarker actionBodyCenterMarker, bool addToDocument = true)
```

#### Parameters

`document` Document

`property` PropertyVector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`leaves` Leaf\[\]

`leafInfos` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<LeafInfo\>

`baseLeafIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`baseBodyIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`actionLeafIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`actionBodyIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`baseBodyCenterMarker` CenterMarker

`actionBodyCenterMarker` CenterMarker

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 UserSubroutine

### GetConnectionOrientation\(ConnectionType\)

```csharp
public static OMatrix GetConnectionOrientation(ConnectionType connectionType)
```

#### Parameters

`connectionType` ConnectionType

#### Returns

 OMatrix

### GetShackleBodyBuilder\(double, int, \(Vector Top, Vector Bottom\), \(Vector Top, Vector Bottom\), Shackle\)

```csharp
public static BuilderMulti GetShackleBodyBuilder(double mainLeafWidth, int directionY, (Vector Top, Vector Bottom) eyeHolePosition, (Vector Top, Vector Bottom) shackleHolePosition, Shackle shackle)
```

#### Parameters

`mainLeafWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

`directionY` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`eyeHolePosition` \(Vector [Top](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.top), Vector [Bottom](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.bottom)\)

`shackleHolePosition` \(Vector [Top](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.top), Vector [Bottom](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.bottom)\)

`shackle` Shackle

#### Returns

 BuilderMulti

### GetclipBodyRadius\(Clip\)

```csharp
public static double GetclipBodyRadius(Clip clip)
```

#### Parameters

`clip` Clip

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SetBushPropertyAllZero\(PropertyBush\)

```csharp
public static void SetBushPropertyAllZero(PropertyBush propertyBush)
```

#### Parameters

`propertyBush` PropertyBush


