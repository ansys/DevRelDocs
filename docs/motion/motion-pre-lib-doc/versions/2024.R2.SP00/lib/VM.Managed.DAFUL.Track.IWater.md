# Interface IWater

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This interface is to represent the water.

```csharp
public interface IWater
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### Density

Gets the density

```csharp
double Density { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ReferenceFrame

Gets the reference frame

```csharp
Marker ReferenceFrame { get; }
```

#### Property Value

 Marker

### WaterContainerBody

Gets the water body

```csharp
IConnectable WaterContainerBody { get; }
```

#### Property Value

 IConnectable

### ZDirection

Gets the z direction

```csharp
VectorBase ZDirection { get; }
```

#### Property Value

 VectorBase


