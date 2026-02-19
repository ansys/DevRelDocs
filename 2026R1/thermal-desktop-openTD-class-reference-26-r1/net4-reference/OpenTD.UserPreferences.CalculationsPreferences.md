# Class CalculationsPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global calculations preferences.

```csharp
[DataContract]
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

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

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
[DataMember]
public int checkElementQualityAndErrorOffOfRun { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### checkUnits

```csharp
[DataMember]
public int checkUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### condCapFile

```csharp
[DataMember]
public string condCapFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### conductorCutoff

```csharp
[DataMember]
public double conductorCutoff { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### contactorLinearTriSpreading

```csharp
[DataMember]
public int contactorLinearTriSpreading { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### contactorRestarts

```csharp
[DataMember]
public int contactorRestarts { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### curvedElementRadiationMethod

```csharp
[DataMember]
public int curvedElementRadiationMethod { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### elementInsulationDisplacement

```csharp
[DataMember]
public int elementInsulationDisplacement { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### listAllRadkCalcStatus

```csharp
[DataMember]
public int listAllRadkCalcStatus { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### loadExternalReferences

```csharp
[DataMember]
public int loadExternalReferences { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### maxCurvedElementFacetsPerFullCircle

```csharp
[DataMember]
public int maxCurvedElementFacetsPerFullCircle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### maxSkew

```csharp
[DataMember]
public double maxSkew { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### planarElementMaxAngleDeg

```csharp
[DataMember]
public double planarElementMaxAngleDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### planarElementMinAngleDeg

```csharp
[DataMember]
public double planarElementMinAngleDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### radcadCompressionIndex

```csharp
[DataMember]
public int radcadCompressionIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### showCurvedElementFacets

```csharp
[DataMember]
public int showCurvedElementFacets { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### solidLateralCondAspectRatio

```csharp
[DataMember]
public double solidLateralCondAspectRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### useSuperNetwork

```csharp
[DataMember]
public int useSuperNetwork { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### useSuperNetworkExp

```csharp
[DataMember]
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


