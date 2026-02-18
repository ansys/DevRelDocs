# <a id="OpenTD_UserPreferences_GraphicsTextPreferences"></a> Class GraphicsTextPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global dwg text preferences.

```csharp
public class GraphicsTextPreferences : Preferences, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[GraphicsTextPreferences](OpenTD.UserPreferences.GraphicsTextPreferences.md)

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

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences__ctor"></a> GraphicsTextPreferences\(\)

```csharp
public GraphicsTextPreferences()
```

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences__ctor_OpenTD_ThermalDesktop_"></a> GraphicsTextPreferences\(ThermalDesktop\)

```csharp
public GraphicsTextPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_compartmentTextColor"></a> compartmentTextColor

```csharp
public int compartmentTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_compartmentTextScale"></a> compartmentTextScale

```csharp
public double compartmentTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_compartmentTextShow"></a> compartmentTextShow

```csharp
public bool compartmentTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_compartmentTextStringIndex"></a> compartmentTextStringIndex

```csharp
public int compartmentTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_fklocTextColor"></a> fklocTextColor

```csharp
public int fklocTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_fklocTextScale"></a> fklocTextScale

```csharp
public double fklocTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_fklocTextShow"></a> fklocTextShow

```csharp
public bool fklocTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_fklocTextStringIndex"></a> fklocTextStringIndex

```csharp
public int fklocTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_fontName"></a> fontName

```csharp
public string fontName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_lumpTextColor"></a> lumpTextColor

```csharp
public int lumpTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_lumpTextScale"></a> lumpTextScale

```csharp
public double lumpTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_lumpTextShow"></a> lumpTextShow

```csharp
public bool lumpTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_lumpTextStringIndex"></a> lumpTextStringIndex

```csharp
public int lumpTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_nodeTextColor"></a> nodeTextColor

```csharp
public int nodeTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_nodeTextScale"></a> nodeTextScale

```csharp
public double nodeTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_nodeTextShow"></a> nodeTextShow

```csharp
public bool nodeTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_nodeTextStringIndex"></a> nodeTextStringIndex

```csharp
public int nodeTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_numbersSize"></a> numbersSize

```csharp
public Dimensional<ModelLength> numbersSize { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_pathTextColor"></a> pathTextColor

```csharp
public int pathTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_pathTextScale"></a> pathTextScale

```csharp
public double pathTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_pathTextShow"></a> pathTextShow

```csharp
public bool pathTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_pathTextStringIndex"></a> pathTextStringIndex

```csharp
public int pathTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_pipeTextColor"></a> pipeTextColor

```csharp
public int pipeTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_pipeTextScale"></a> pipeTextScale

```csharp
public double pipeTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_pipeTextShow"></a> pipeTextShow

```csharp
public bool pipeTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_pipeTextStringIndex"></a> pipeTextStringIndex

```csharp
public int pipeTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_portTextColor"></a> portTextColor

```csharp
public int portTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_portTextScale"></a> portTextScale

```csharp
public double portTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_portTextShow"></a> portTextShow

```csharp
public bool portTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_portTextStringIndex"></a> portTextStringIndex

```csharp
public int portTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_screenNumberPercent"></a> screenNumberPercent

```csharp
public double screenNumberPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_showFluidSubmodelNames"></a> showFluidSubmodelNames

```csharp
public bool showFluidSubmodelNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_showNodeSubmodelNames"></a> showNodeSubmodelNames

```csharp
public bool showNodeSubmodelNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_teeTextColor"></a> teeTextColor

```csharp
public int teeTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_teeTextScale"></a> teeTextScale

```csharp
public double teeTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_teeTextShow"></a> teeTextShow

```csharp
public bool teeTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_teeTextStringIndex"></a> teeTextStringIndex

```csharp
public int teeTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_tieTextColor"></a> tieTextColor

```csharp
public int tieTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_tieTextScale"></a> tieTextScale

```csharp
public double tieTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_tieTextShow"></a> tieTextShow

```csharp
public bool tieTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_tieTextStringIndex"></a> tieTextStringIndex

```csharp
public int tieTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_useScreenNumberPercent"></a> useScreenNumberPercent

```csharp
public bool useScreenNumberPercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### <a id="OpenTD_UserPreferences_GraphicsTextPreferences_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

