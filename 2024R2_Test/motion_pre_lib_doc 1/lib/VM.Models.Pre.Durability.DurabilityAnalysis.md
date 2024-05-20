# Class DurabilityAnalysis

Namespace: [VM.Models.Pre.Durability](VM.Models.Pre.Durability.md)  
Assembly: VM.Models.Pre.Durability.dll  

```csharp
public class DurabilityAnalysis
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DurabilityAnalysis](VM.Models.Pre.Durability.DurabilityAnalysis.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### DurabilityAnalysis\(ActionType, DurabilityData\[\]\)

```csharp
public DurabilityAnalysis(DurabilityAnalysis.ActionType typeOfAction, DurabilityData[] durabilityDataSet)
```

#### Parameters

`typeOfAction` [DurabilityAnalysis](VM.Models.Pre.Durability.DurabilityAnalysis.md).[ActionType](VM.Models.Pre.Durability.DurabilityAnalysis.ActionType.md)

`durabilityDataSet` [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md)\[\]

## Properties

### DurabilityDataSet

```csharp
public DurabilityData[] DurabilityDataSet { get; set; }
```

#### Property Value

 [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md)\[\]

### TypeOfAction

```csharp
public DurabilityAnalysis.ActionType TypeOfAction { get; set; }
```

#### Property Value

 [DurabilityAnalysis](VM.Models.Pre.Durability.DurabilityAnalysis.md).[ActionType](VM.Models.Pre.Durability.DurabilityAnalysis.ActionType.md)


