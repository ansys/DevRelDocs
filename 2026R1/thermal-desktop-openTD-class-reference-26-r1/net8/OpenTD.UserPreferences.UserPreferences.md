# <a id="OpenTD_UserPreferences_UserPreferences"></a> Class UserPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Provides access to the global user preferences for a dwg.

```csharp
public class UserPreferences : Preferences, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[UserPreferences](OpenTD.UserPreferences.UserPreferences.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_UserPreferences_UserPreferences__ctor"></a> UserPreferences\(\)

Do not use.

```csharp
public UserPreferences()
```

### <a id="OpenTD_UserPreferences_UserPreferences__ctor_OpenTD_ThermalDesktop_"></a> UserPreferences\(ThermalDesktop\)

```csharp
public UserPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_UserPreferences_UserPreferences_Acceleration"></a> Acceleration

Global acceleration preferences for the dwg.

```csharp
public Acceleration Acceleration { get; }
```

#### Property Value

 [Acceleration](OpenTD.UserPreferences.Acceleration.md)

### <a id="OpenTD_UserPreferences_UserPreferences_Advanced"></a> Advanced

Global advanced preferences for the dwg.

```csharp
public AdvancedPreferences Advanced { get; }
```

#### Property Value

 [AdvancedPreferences](OpenTD.UserPreferences.AdvancedPreferences.md)

### <a id="OpenTD_UserPreferences_UserPreferences_Calculations"></a> Calculations

Global calculations preferences for the dwg.

```csharp
public CalculationsPreferences Calculations { get; }
```

#### Property Value

 [CalculationsPreferences](OpenTD.UserPreferences.CalculationsPreferences.md)

### <a id="OpenTD_UserPreferences_UserPreferences_GraphicsResolution"></a> GraphicsResolution

Global graphics resolution preferences for the dwg.

```csharp
public GraphicsResolutionPreferences GraphicsResolution { get; }
```

#### Property Value

 [GraphicsResolutionPreferences](OpenTD.UserPreferences.GraphicsResolutionPreferences.md)

### <a id="OpenTD_UserPreferences_UserPreferences_GraphicsSize"></a> GraphicsSize

Global graphics size preferences for the dwg.

```csharp
public GraphicsSizePreferences GraphicsSize { get; }
```

#### Property Value

 [GraphicsSizePreferences](OpenTD.UserPreferences.GraphicsSizePreferences.md)

### <a id="OpenTD_UserPreferences_UserPreferences_GraphicsText"></a> GraphicsText

Global text preferences for the dwg.

```csharp
public GraphicsTextPreferences GraphicsText { get; }
```

#### Property Value

 [GraphicsTextPreferences](OpenTD.UserPreferences.GraphicsTextPreferences.md)

### <a id="OpenTD_UserPreferences_UserPreferences_GraphicsVisibility"></a> GraphicsVisibility

Global graphics visibility preferences for the dwg.

```csharp
public GraphicsVisibilityPreferences GraphicsVisibility { get; }
```

#### Property Value

 [GraphicsVisibilityPreferences](OpenTD.UserPreferences.GraphicsVisibilityPreferences.md)

### <a id="OpenTD_UserPreferences_UserPreferences_Sinda"></a> Sinda

Global Sinda preferences for the dwg.

```csharp
public SindaPreferences Sinda { get; }
```

#### Property Value

 [SindaPreferences](OpenTD.UserPreferences.SindaPreferences.md)

### <a id="OpenTD_UserPreferences_UserPreferences_Units"></a> Units

Global units preferences for the dwg.

```csharp
public UnitsPreferences Units { get; }
```

#### Property Value

 [UnitsPreferences](OpenTD.UserPreferences.UnitsPreferences.md)

## Methods

### <a id="OpenTD_UserPreferences_UserPreferences_GetAcceleration"></a> GetAcceleration\(\)

Deprecated. Use Acceleration member instead.

```csharp
public Acceleration GetAcceleration()
```

#### Returns

 [Acceleration](OpenTD.UserPreferences.Acceleration.md)

#### See Also

[UserPreferences](OpenTD.UserPreferences.UserPreferences.md).[Acceleration](OpenTD.UserPreferences.UserPreferences.md\#OpenTD\_UserPreferences\_UserPreferences\_Acceleration)

### <a id="OpenTD_UserPreferences_UserPreferences_GetDwgUnits"></a> GetDwgUnits\(\)

Deprecated. Use Units member instead.

```csharp
public UnitsPreferences GetDwgUnits()
```

#### Returns

 [UnitsPreferences](OpenTD.UserPreferences.UnitsPreferences.md)

#### See Also

[UserPreferences](OpenTD.UserPreferences.UserPreferences.md).[Units](OpenTD.UserPreferences.UserPreferences.md\#OpenTD\_UserPreferences\_UserPreferences\_Units)

### <a id="OpenTD_UserPreferences_UserPreferences_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### <a id="OpenTD_UserPreferences_UserPreferences_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

