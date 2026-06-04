# Class GraphicsTextPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global dwg text preferences.

```csharp
[DataContract]
public class GraphicsTextPreferences : Preferences, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[GraphicsTextPreferences](OpenTD.UserPreferences.GraphicsTextPreferences.md)

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

### GraphicsTextPreferences\(\)

```csharp
public GraphicsTextPreferences()
```

### GraphicsTextPreferences\(ThermalDesktop\)

```csharp
public GraphicsTextPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### compartmentTextColor

```csharp
[DataMember]
public int compartmentTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### compartmentTextScale

```csharp
[DataMember]
public double compartmentTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### compartmentTextShow

```csharp
[DataMember]
public bool compartmentTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### compartmentTextStringIndex

```csharp
[DataMember]
public int compartmentTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### fklocTextColor

```csharp
[DataMember]
public int fklocTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### fklocTextScale

```csharp
[DataMember]
public double fklocTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### fklocTextShow

```csharp
[DataMember]
public bool fklocTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### fklocTextStringIndex

```csharp
[DataMember]
public int fklocTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### fontName

```csharp
[DataMember]
public string fontName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### lumpTextColor

```csharp
[DataMember]
public int lumpTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### lumpTextScale

```csharp
[DataMember]
public double lumpTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### lumpTextShow

```csharp
[DataMember]
public bool lumpTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### lumpTextStringIndex

```csharp
[DataMember]
public int lumpTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### nodeTextColor

```csharp
[DataMember]
public int nodeTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### nodeTextScale

```csharp
[DataMember]
public double nodeTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### nodeTextShow

```csharp
[DataMember]
public bool nodeTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### nodeTextStringIndex

```csharp
[DataMember]
public int nodeTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### numbersSize

```csharp
[DataMember]
public Dimensional<ModelLength> numbersSize { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### pathTextColor

```csharp
[DataMember]
public int pathTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### pathTextScale

```csharp
[DataMember]
public double pathTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### pathTextShow

```csharp
[DataMember]
public bool pathTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### pathTextStringIndex

```csharp
[DataMember]
public int pathTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### pipeTextColor

```csharp
[DataMember]
public int pipeTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### pipeTextScale

```csharp
[DataMember]
public double pipeTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### pipeTextShow

```csharp
[DataMember]
public bool pipeTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### pipeTextStringIndex

```csharp
[DataMember]
public int pipeTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### portTextColor

```csharp
[DataMember]
public int portTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### portTextScale

```csharp
[DataMember]
public double portTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### portTextShow

```csharp
[DataMember]
public bool portTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### portTextStringIndex

```csharp
[DataMember]
public int portTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### screenNumberPercent

```csharp
[DataMember]
public double screenNumberPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### showFluidSubmodelNames

```csharp
[DataMember]
public bool showFluidSubmodelNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showNodeSubmodelNames

```csharp
[DataMember]
public bool showNodeSubmodelNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### teeTextColor

```csharp
[DataMember]
public int teeTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### teeTextScale

```csharp
[DataMember]
public double teeTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### teeTextShow

```csharp
[DataMember]
public bool teeTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### teeTextStringIndex

```csharp
[DataMember]
public int teeTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### tieTextColor

```csharp
[DataMember]
public int tieTextColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### tieTextScale

```csharp
[DataMember]
public double tieTextScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### tieTextShow

```csharp
[DataMember]
public bool tieTextShow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### tieTextStringIndex

```csharp
[DataMember]
public int tieTextStringIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### useScreenNumberPercent

```csharp
[DataMember]
public bool useScreenNumberPercent { get; set; }
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


