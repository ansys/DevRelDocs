# <a id="OpenTD_UserPreferences_GraphicsSizePreferences"></a> Class GraphicsSizePreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global dwg graphics size preferences.

```csharp
public class GraphicsSizePreferences : Preferences, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[GraphicsSizePreferences](OpenTD.UserPreferences.GraphicsSizePreferences.md)

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

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences__ctor"></a> GraphicsSizePreferences\(\)

```csharp
public GraphicsSizePreferences()
```

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences__ctor_OpenTD_ThermalDesktop_"></a> GraphicsSizePreferences\(ThermalDesktop\)

```csharp
public GraphicsSizePreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_arrowSize"></a> arrowSize

```csharp
public Dimensional<ModelLength> arrowSize { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_condScale"></a> condScale

```csharp
public double condScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_hxScale"></a> hxScale

```csharp
public double hxScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_lumpSize"></a> lumpSize

```csharp
public Dimensional<ModelLength> lumpSize { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_nodeSize"></a> nodeSize

```csharp
public Dimensional<ModelLength> nodeSize { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_numTieDraw"></a> numTieDraw

```csharp
public int numTieDraw { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_pathScale"></a> pathScale

```csharp
public double pathScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_primitiveAxesLengthPercent"></a> primitiveAxesLengthPercent

```csharp
public double primitiveAxesLengthPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_screenArrowPercent"></a> screenArrowPercent

```csharp
public double screenArrowPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_screenHXPercent"></a> screenHXPercent

```csharp
public double screenHXPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_screenLumpPercent"></a> screenLumpPercent

```csharp
public double screenLumpPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_screenNodePercent"></a> screenNodePercent

```csharp
public double screenNodePercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_screenTiePercent"></a> screenTiePercent

```csharp
public double screenTiePercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_tieSize"></a> tieSize

```csharp
public Dimensional<ModelLength> tieSize { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_usePathDiameter"></a> usePathDiameter

```csharp
public bool usePathDiameter { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_useScreenArrowPercent"></a> useScreenArrowPercent

```csharp
public bool useScreenArrowPercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_useScreenHXPercent"></a> useScreenHXPercent

```csharp
public bool useScreenHXPercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_useScreenLumpPercent"></a> useScreenLumpPercent

```csharp
public bool useScreenLumpPercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_useScreenNodePercent"></a> useScreenNodePercent

```csharp
public bool useScreenNodePercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_useScreenTiePercent"></a> useScreenTiePercent

```csharp
public bool useScreenTiePercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### <a id="OpenTD_UserPreferences_GraphicsSizePreferences_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

