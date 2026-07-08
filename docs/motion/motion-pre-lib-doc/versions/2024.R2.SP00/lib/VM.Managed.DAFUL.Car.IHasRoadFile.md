# Interface IHasRoadFile

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The road file interface

```csharp
public interface IHasRoadFile
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### Name

Get name of the road

```csharp
string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Offset

Get offset of the road

```csharp
Vector Offset { get; }
```

#### Property Value

 Vector

### ReferenceBodyFullName

Get full name of reference body

```csharp
string ReferenceBodyFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RoadDataPath

Gets or sets the road data file path.

```csharp
string RoadDataPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RoadRefFrameName

Get Roadreference frame name

```csharp
string RoadRefFrameName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RoadReferencePosition

Get reference position of the road

```csharp
Vector RoadReferencePosition { get; }
```

#### Property Value

 Vector

### RotationAngle

Get rotation angle of the road

```csharp
double RotationAngle { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)


