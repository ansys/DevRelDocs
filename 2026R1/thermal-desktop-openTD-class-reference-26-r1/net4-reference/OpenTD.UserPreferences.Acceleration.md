# <a id="OpenTD_UserPreferences_Acceleration"></a> Class Acceleration

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Represents the acceleration vector that can be set in the global dwg
user preferences.

```csharp
[DataContract]
public class Acceleration : Preferences, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[Acceleration](OpenTD.UserPreferences.Acceleration.md)

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

### <a id="OpenTD_UserPreferences_Acceleration__ctor"></a> Acceleration\(\)

```csharp
public Acceleration()
```

### <a id="OpenTD_UserPreferences_Acceleration__ctor_OpenTD_ThermalDesktop_"></a> Acceleration\(ThermalDesktop\)

```csharp
public Acceleration(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_UserPreferences_Acceleration_Magnitude"></a> Magnitude

```csharp
[DataMember]
public Dimensional<Gravity> Magnitude { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Gravity](OpenTD.Dimension.Gravity.md)\>

### <a id="OpenTD_UserPreferences_Acceleration_MagnitudeExp"></a> MagnitudeExp

```csharp
[DataMember]
public ExpressionData MagnitudeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_UserPreferences_Acceleration_XDir"></a> XDir

```csharp
[DataMember]
public double XDir { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_Acceleration_XDirExp"></a> XDirExp

```csharp
[DataMember]
public ExpressionData XDirExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_UserPreferences_Acceleration_YDir"></a> YDir

```csharp
[DataMember]
public double YDir { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_Acceleration_YDirExp"></a> YDirExp

```csharp
[DataMember]
public ExpressionData YDirExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_UserPreferences_Acceleration_ZDir"></a> ZDir

```csharp
[DataMember]
public double ZDir { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_Acceleration_ZDirExp"></a> ZDirExp

```csharp
[DataMember]
public ExpressionData ZDirExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### <a id="OpenTD_UserPreferences_Acceleration_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### <a id="OpenTD_UserPreferences_Acceleration_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

