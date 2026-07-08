# Interface IOrientationBase

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IOrientationBase
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### AngleType

```csharp
AngleTypes AngleType { get; }
```

#### Property Value

 [AngleTypes](VM.AngleTypes.md)

### RotationAngles

```csharp
IList<double> RotationAngles { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### RotationAxes

```csharp
RotationAxes RotationAxes { get; }
```

#### Property Value

 [RotationAxes](VM.RotationAxes.md)

### RotationType

```csharp
RotationTypes RotationType { get; }
```

#### Property Value

 [RotationTypes](VM.RotationTypes.md)

### Value

```csharp
OMatrix Value { get; }
```

#### Property Value

 [OMatrix](VM.OMatrix.md)


