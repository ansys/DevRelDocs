# Class CalculationsPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global calculations preferences.

```csharp
[MessagePackObject(true)]
public class CalculationsPreferences : Preferences, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[CalculationsPreferences](OpenTD.UserPreferences.CalculationsPreferences.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CalculationsPreferences\(\)

```csharp
public CalculationsPreferences()
```

### CalculationsPreferences\(ThermalDesktop\)

```csharp
public CalculationsPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### checkElementQualityAndErrorOffOfRun

```csharp
public int checkElementQualityAndErrorOffOfRun { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### checkUnits

```csharp
public int checkUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### condCapFile

```csharp
public string condCapFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### conductorCutoff

```csharp
public double conductorCutoff { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### contactorLinearTriSpreading

```csharp
public int contactorLinearTriSpreading { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### contactorRestarts

```csharp
public int contactorRestarts { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### curvedElementRadiationMethod

```csharp
public int curvedElementRadiationMethod { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### elementInsulationDisplacement

```csharp
public int elementInsulationDisplacement { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### listAllRadkCalcStatus

```csharp
public int listAllRadkCalcStatus { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### loadExternalReferences

```csharp
public int loadExternalReferences { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### maxCurvedElementFacetsPerFullCircle

```csharp
public int maxCurvedElementFacetsPerFullCircle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### maxSkew

```csharp
public double maxSkew { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### planarElementMaxAngleDeg

```csharp
public double planarElementMaxAngleDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### planarElementMinAngleDeg

```csharp
public double planarElementMinAngleDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### radcadCompressionIndex

```csharp
public int radcadCompressionIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### showCurvedElementFacets

```csharp
public int showCurvedElementFacets { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### solidLateralCondAspectRatio

```csharp
public double solidLateralCondAspectRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### useSuperNetwork

```csharp
public int useSuperNetwork { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### useSuperNetworkExp

```csharp
public ExpressionData useSuperNetworkExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```


