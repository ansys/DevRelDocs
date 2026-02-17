# <a id="OpenTD_UserPreferences_CalculationsPreferences"></a> Class CalculationsPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global calculations preferences.

```csharp
[DataContract]
public class CalculationsPreferences : Preferences, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[CalculationsPreferences](OpenTD.UserPreferences.CalculationsPreferences.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_UserPreferences_CalculationsPreferences__ctor"></a> CalculationsPreferences\(\)

```csharp
public CalculationsPreferences()
```

### <a id="OpenTD_UserPreferences_CalculationsPreferences__ctor_OpenTD_ThermalDesktop_"></a> CalculationsPreferences\(ThermalDesktop\)

```csharp
public CalculationsPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_UserPreferences_CalculationsPreferences_checkElementQualityAndErrorOffOfRun"></a> checkElementQualityAndErrorOffOfRun

```csharp
[DataMember]
public int checkElementQualityAndErrorOffOfRun { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_checkUnits"></a> checkUnits

```csharp
[DataMember]
public int checkUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_condCapFile"></a> condCapFile

```csharp
[DataMember]
public string condCapFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_conductorCutoff"></a> conductorCutoff

```csharp
[DataMember]
public double conductorCutoff { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_contactorLinearTriSpreading"></a> contactorLinearTriSpreading

```csharp
[DataMember]
public int contactorLinearTriSpreading { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_contactorRestarts"></a> contactorRestarts

```csharp
[DataMember]
public int contactorRestarts { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_curvedElementRadiationMethod"></a> curvedElementRadiationMethod

```csharp
[DataMember]
public int curvedElementRadiationMethod { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_elementInsulationDisplacement"></a> elementInsulationDisplacement

```csharp
[DataMember]
public int elementInsulationDisplacement { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_listAllRadkCalcStatus"></a> listAllRadkCalcStatus

```csharp
[DataMember]
public int listAllRadkCalcStatus { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_loadExternalReferences"></a> loadExternalReferences

```csharp
[DataMember]
public int loadExternalReferences { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_maxCurvedElementFacetsPerFullCircle"></a> maxCurvedElementFacetsPerFullCircle

```csharp
[DataMember]
public int maxCurvedElementFacetsPerFullCircle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_maxSkew"></a> maxSkew

```csharp
[DataMember]
public double maxSkew { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_planarElementMaxAngleDeg"></a> planarElementMaxAngleDeg

```csharp
[DataMember]
public double planarElementMaxAngleDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_planarElementMinAngleDeg"></a> planarElementMinAngleDeg

```csharp
[DataMember]
public double planarElementMinAngleDeg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_radcadCompressionIndex"></a> radcadCompressionIndex

```csharp
[DataMember]
public int radcadCompressionIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_showCurvedElementFacets"></a> showCurvedElementFacets

```csharp
[DataMember]
public int showCurvedElementFacets { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_solidLateralCondAspectRatio"></a> solidLateralCondAspectRatio

```csharp
[DataMember]
public double solidLateralCondAspectRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_useSuperNetwork"></a> useSuperNetwork

```csharp
[DataMember]
public int useSuperNetwork { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_CalculationsPreferences_useSuperNetworkExp"></a> useSuperNetworkExp

```csharp
[DataMember]
public ExpressionData useSuperNetworkExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### <a id="OpenTD_UserPreferences_CalculationsPreferences_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### <a id="OpenTD_UserPreferences_CalculationsPreferences_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

