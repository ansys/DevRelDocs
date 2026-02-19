# Class GraphicsSizePreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global dwg graphics size preferences.

```csharp
[DataContract]
public class GraphicsSizePreferences : Preferences, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[GraphicsSizePreferences](OpenTD.UserPreferences.GraphicsSizePreferences.md)

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

### GraphicsSizePreferences\(\)

```csharp
public GraphicsSizePreferences()
```

### GraphicsSizePreferences\(ThermalDesktop\)

```csharp
public GraphicsSizePreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### arrowSize

```csharp
[DataMember]
public Dimensional<ModelLength> arrowSize { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### condScale

```csharp
[DataMember]
public double condScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### hxScale

```csharp
[DataMember]
public double hxScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### lumpSize

```csharp
[DataMember]
public Dimensional<ModelLength> lumpSize { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### nodeSize

```csharp
[DataMember]
public Dimensional<ModelLength> nodeSize { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### numTieDraw

```csharp
[DataMember]
public int numTieDraw { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### pathScale

```csharp
[DataMember]
public double pathScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### primitiveAxesLengthPercent

```csharp
[DataMember]
public double primitiveAxesLengthPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### screenArrowPercent

```csharp
[DataMember]
public double screenArrowPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### screenHXPercent

```csharp
[DataMember]
public double screenHXPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### screenLumpPercent

```csharp
[DataMember]
public double screenLumpPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### screenNodePercent

```csharp
[DataMember]
public double screenNodePercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### screenTiePercent

```csharp
[DataMember]
public double screenTiePercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### tieSize

```csharp
[DataMember]
public Dimensional<ModelLength> tieSize { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### usePathDiameter

```csharp
[DataMember]
public bool usePathDiameter { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### useScreenArrowPercent

```csharp
[DataMember]
public bool useScreenArrowPercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### useScreenHXPercent

```csharp
[DataMember]
public bool useScreenHXPercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### useScreenLumpPercent

```csharp
[DataMember]
public bool useScreenLumpPercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### useScreenNodePercent

```csharp
[DataMember]
public bool useScreenNodePercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### useScreenTiePercent

```csharp
[DataMember]
public bool useScreenTiePercent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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


