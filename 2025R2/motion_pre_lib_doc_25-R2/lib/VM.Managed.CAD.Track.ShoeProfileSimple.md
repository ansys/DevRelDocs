# Class ShoeProfileSimple

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The class for simple shoe profile.

```csharp
public class ShoeProfileSimple : ShoeProfileBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ShoeProfileBase](VM.Managed.CAD.Track.ShoeProfileBase.md) ← 
[ShoeProfileSimple](VM.Managed.CAD.Track.ShoeProfileSimple.md)

#### Inherited Members

[ShoeProfileBase.m\_lstPtOrigin](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_m\_lstPtOrigin), 
[ShoeProfileBase.m\_lstPtWorkPlane](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_m\_lstPtWorkPlane), 
[ShoeProfileBase.GetPointData\_For\_XYPlane\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_GetPointData\_For\_XYPlane), 
[ShoeProfileBase.CreateProfile\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_CreateProfile), 
[ShoeProfileBase.Validation\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_Validation), 
[ShoeProfileBase.CheckValidationAboutBuild\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_CheckValidationAboutBuild), 
[ShoeProfileBase.GetWorkPlaneData\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_GetWorkPlaneData), 
[ShoeProfileBase.SetInitializeValue\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_SetInitializeValue), 
[ShoeProfileBase.BasePlateHeight](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_BasePlateHeight), 
[ShoeProfileBase.ShoeLength](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_ShoeLength)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ShoeProfileSimple\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeProfileSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeProfileSimple()
```

## Properties

### GrouserHeight

Gets and sets height for grouser .

```csharp
public double GrouserHeight { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GrouserWidth

Gets and sets width for grouser

```csharp
public double GrouserWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CheckValidationAboutBuild\(\)

Checks the validation about build.

```csharp
public override void CheckValidationAboutBuild()
```

### CreateProfile\(\)

```csharp
protected override bool CreateProfile()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetInitializeValue\(\)

```csharp
public override void SetInitializeValue()
```

### Validation\(\)

Check validation for member variables.

```csharp
public override void Validation()
```


