# Class BodyToDTAPI

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for drivetrain class.

```csharp
public static class BodyToDTAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BodyToDTAPI](VM.API.Pre.GearTrain.BodyToDTAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### ApplyBearingForBodyToDT\(GearTrainDocument, IEnumerable<BearingParameters\>\)

Create <xref href="VM.Managed.DAFUL.Builder.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static void ApplyBearingForBodyToDT(this GearTrainDocument document, IEnumerable<BearingParameters> bearings)
```

#### Parameters

`document` GearTrainDocument

The document to create the bearings.

`bearings` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[BearingParameters](VM.API.Pre.GearTrain.BearingParameters.md)\>

The bearings.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty or if the body of bearing is empty.

### ApplyClutchForBodyToDT\(GearTrainDocument, IEnumerable<ClutchParameters\>\)

Create <xref href="VM.Managed.DAFUL.GearTrain.AttributeBodyToDTClutch" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static void ApplyClutchForBodyToDT(this GearTrainDocument document, IEnumerable<ClutchParameters> clutchs)
```

#### Parameters

`document` GearTrainDocument

The document to create the clutchs.

`clutchs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ClutchParameters](VM.API.Pre.GearTrain.ClutchParameters.md)\>

The clutchs.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty or if the body of clutch is empty.

### ApplyGearSetForBodyToDT\(GearTrainDocument, IEnumerable<GearSetParameters\>\)

Create <xref href="VM.Managed.DSDL.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static void ApplyGearSetForBodyToDT(this GearTrainDocument document, IEnumerable<GearSetParameters> gearSets)
```

#### Parameters

`document` GearTrainDocument

The document to create the gear set.

`gearSets` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[GearSetParameters](VM.API.Pre.GearTrain.GearSetParameters.md)\>

The gear sets.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty or if the body of gearSet is empty.

### ApplyHousingForBodyToDT\(GearTrainDocument, IEnumerable<HousingParameters\>\)

Create <xref href="VM.Managed.DAFUL.GearTrain.IHousing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static void ApplyHousingForBodyToDT(this GearTrainDocument document, IEnumerable<HousingParameters> housings)
```

#### Parameters

`document` GearTrainDocument

The document to create the housings.

`housings` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[HousingParameters](VM.API.Pre.GearTrain.HousingParameters.md)\>

The housings.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty or if the body of housing is empty.

### ApplyShaftSetForBodyToDT\(GearTrainDocument, IEnumerable<ShaftSetParameters\>\)

Create <xref href="VM.Managed.DSDL.DAFUL.GearTrain.ShaftSet" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static void ApplyShaftSetForBodyToDT(this GearTrainDocument document, IEnumerable<ShaftSetParameters> shaftSets)
```

#### Parameters

`document` GearTrainDocument

The document to create the simple shaft set.

`shaftSets` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ShaftSetParameters](VM.API.Pre.GearTrain.ShaftSetParameters.md)\>

The simple shaft sets

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty or if the body of shaftset does not exist.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'rotateAxis' is 0.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'width' value equal to or less than 0.

### AssembleItemsForBodyToDT\(GearTrainDocument, IEnumerable<GearSetParameters\>, IEnumerable<BearingParameters\>, ExpressionValueVariable?\)

Assemble the items for the body to DT.

```csharp
[NotNull(new string[] { "document" })]
public static void AssembleItemsForBodyToDT(this GearTrainDocument document, IEnumerable<GearSetParameters> gearSets = null, IEnumerable<BearingParameters> bearings = null, ExpressionValueVariable? toleranceForAssembly = null)
```

#### Parameters

`document` GearTrainDocument

The document to assemble the items for the body to DT.

`gearSets` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[GearSetParameters](VM.API.Pre.GearTrain.GearSetParameters.md)\>

The gear sets.

`bearings` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[BearingParameters](VM.API.Pre.GearTrain.BearingParameters.md)\>

The bearings.

`toleranceForAssembly` ExpressionValueVariable?

The tolerance for assembly.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty or if the body of 'gearSet', 'bearing' is empty.

### RemoveBodyToDTAttribute\(GearTrainDocument, IEnumerable<Obj\>\)

Remove <xref href="VM.Managed.DAFUL.GearTrain.AttributeBodyToDTClutch" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "clutchs" })]
public static void RemoveBodyToDTAttribute(this GearTrainDocument document, IEnumerable<Obj> clutchs)
```

#### Parameters

`document` GearTrainDocument

The document to create the clutchs.

`clutchs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The clutchs.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'clutchs' argument is empty.


