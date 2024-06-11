# Interface IShaftSet

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The shaftset interface

```csharp
public interface IShaftSet : IHousing
```

#### Implements

[IHousing](VM.Managed.DAFUL.GearTrain.IHousing.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### PICandidates

Gets the array of performance index candidate.

```csharp
PerformanceIndexInformation[] PICandidates { get; }
```

#### Property Value

 [PerformanceIndexInformation](VM.Managed.DAFUL.GearTrain.PerformanceIndexInformation.md)\[\]

### TotalSectionLength

Gets the total length of the section.

```csharp
double TotalSectionLength { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)


