# <a id="OpenTD_FloCAD_Bay"></a> Class Bay

Namespace: [OpenTD.FloCAD](OpenTD.FloCAD.md)  
Assembly: OpenTD.dll  

Client-side representation of a Compartment Bay entity in a TD instance.

```csharp
public class Bay
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Bay](OpenTD.FloCAD.Bay.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_FloCAD_Bay__ctor"></a> Bay\(\)

```csharp
public Bay()
```

## Properties

### <a id="OpenTD_FloCAD_Bay_AstMult"></a> AstMult

```csharp
public double AstMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Bay_AstMultExp"></a> AstMultExp

```csharp
public ExpressionData AstMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Bay_CoolMult"></a> CoolMult

```csharp
public double CoolMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Bay_CoolMultExp"></a> CoolMultExp

```csharp
public ExpressionData CoolMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Bay_ERNConductorHandle"></a> ERNConductorHandle

```csharp
public string ERNConductorHandle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_Bay_ERNHandle"></a> ERNHandle

```csharp
public string ERNHandle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_Bay_ERNTieHandle"></a> ERNTieHandle

```csharp
public string ERNTieHandle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_Bay_HeatMult"></a> HeatMult

```csharp
public double HeatMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Bay_HeatMultExp"></a> HeatMultExp

```csharp
public ExpressionData HeatMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Bay_LiqAugMult"></a> LiqAugMult

```csharp
public double LiqAugMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Bay_LiqAugMultExp"></a> LiqAugMultExp

```csharp
public ExpressionData LiqAugMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Bay_LiqDegMult"></a> LiqDegMult

```csharp
public double LiqDegMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Bay_LiqDegMultExp"></a> LiqDegMultExp

```csharp
public ExpressionData LiqDegMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Bay_OverallMult"></a> OverallMult

```csharp
public double OverallMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Bay_OverallMultExp"></a> OverallMultExp

```csharp
public ExpressionData OverallMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Bay_PackingFactor"></a> PackingFactor

```csharp
public double PackingFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Bay_PackingFactorExp"></a> PackingFactorExp

```csharp
public ExpressionData PackingFactorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Bay_RegisterDesignator"></a> RegisterDesignator

```csharp
public string RegisterDesignator { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_Bay_SplashHeight"></a> SplashHeight

```csharp
public double SplashHeight { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Bay_SplashHeightExp"></a> SplashHeightExp

```csharp
public ExpressionData SplashHeightExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Bay_SubtractedVolumes"></a> SubtractedVolumes

```csharp
public List<Connection> SubtractedVolumes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_FloCAD_Bay_Surfaces"></a> Surfaces

```csharp
public List<Connection> Surfaces { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_FloCAD_Bay_VapAugMult"></a> VapAugMult

```csharp
public double VapAugMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Bay_VapAugMultExp"></a> VapAugMultExp

```csharp
public ExpressionData VapAugMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Bay_VapDegMult"></a> VapDegMult

```csharp
public double VapDegMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Bay_VapDegMultExp"></a> VapDegMultExp

```csharp
public ExpressionData VapDegMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Bay_Volumes"></a> Volumes

```csharp
public List<Connection> Volumes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_FloCAD_Bay__ERNConductorHandle"></a> \_ERNConductorHandle

Do not use.

```csharp
public string _ERNConductorHandle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_Bay__ERNHandle"></a> \_ERNHandle

Do not use.

```csharp
public string _ERNHandle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_Bay__ERNTieHandle"></a> \_ERNTieHandle

Do not use.

```csharp
public string _ERNTieHandle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_Bay_autoNameERN"></a> autoNameERN

```csharp
public bool autoNameERN { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_FloCAD_Bay_doERN"></a> doERN

```csharp
public bool doERN { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_FloCAD_Bay_userSpecifiedERNCondId"></a> userSpecifiedERNCondId

```csharp
public int userSpecifiedERNCondId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_FloCAD_Bay_userSpecifiedERNCondSubmodel"></a> userSpecifiedERNCondSubmodel

```csharp
public string userSpecifiedERNCondSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_Bay_userSpecifiedERNId"></a> userSpecifiedERNId

```csharp
public int userSpecifiedERNId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_FloCAD_Bay_userSpecifiedERNSubmodel"></a> userSpecifiedERNSubmodel

```csharp
public string userSpecifiedERNSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## See Also

[Compartment](OpenTD.FloCAD.Compartment.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md)

