#  Interface IGTBuilder

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

GearTrain builder interface

```csharp
public interface IGTBuilder
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IGTBuilder_ConnectableEntity"></a> ConnectableEntity

Gets the ConnectableEntity.

```csharp
IConnectable ConnectableEntity { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IGTBuilder_GeometryInfo"></a> GeometryInfo

Gets the geometry information.

```csharp
GeometryInfoBase GeometryInfo { get; }
```

#### Property Value

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IGTBuilder_OffsetToAxisDirection"></a> OffsetToAxisDirection

Gets the offset to axis direction.

```csharp
double OffsetToAxisDirection { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IGTBuilder_Rotation"></a> Rotation

Gets the rotation.

```csharp
OMatrix Rotation { get; }
```

#### Property Value

 OMatrix

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IGTBuilder_StartPoint"></a> StartPoint

Gets the start point.

```csharp
PointBase StartPoint { get; }
```

#### Property Value

 PointBase

