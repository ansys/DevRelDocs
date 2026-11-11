# Class Bay

Namespace: [OpenTD.FloCAD](OpenTD.FloCAD.md)  
Assembly: OpenTD.dll  

Client-side representation of a Compartment Bay entity in a TD instance.

```csharp
[MessagePackObject(true)]
public class Bay
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Bay](OpenTD.FloCAD.Bay.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Bay\(\)

```csharp
public Bay()
```

## Properties

### AstMult

```csharp
public double AstMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### AstMultExp

```csharp
public ExpressionData AstMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### CoolMult

```csharp
public double CoolMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### CoolMultExp

```csharp
public ExpressionData CoolMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### ERNConductorHandle

```csharp
[IgnoreMember]
public string ERNConductorHandle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ERNHandle

```csharp
[IgnoreMember]
public string ERNHandle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ERNTieHandle

```csharp
[IgnoreMember]
public string ERNTieHandle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HeatMult

```csharp
public double HeatMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### HeatMultExp

```csharp
public ExpressionData HeatMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### LiqAugMult

```csharp
public double LiqAugMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LiqAugMultExp

```csharp
public ExpressionData LiqAugMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### LiqDegMult

```csharp
public double LiqDegMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LiqDegMultExp

```csharp
public ExpressionData LiqDegMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### OverallMult

```csharp
public double OverallMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### OverallMultExp

```csharp
public ExpressionData OverallMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### PackingFactor

```csharp
public double PackingFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PackingFactorExp

```csharp
public ExpressionData PackingFactorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RegisterDesignator

```csharp
public string RegisterDesignator { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SplashHeight

```csharp
public double SplashHeight { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SplashHeightExp

```csharp
public ExpressionData SplashHeightExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### SubtractedVolumes

```csharp
public List<Connection> SubtractedVolumes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### Surfaces

```csharp
public List<Connection> Surfaces { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### VapAugMult

```csharp
public double VapAugMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VapAugMultExp

```csharp
public ExpressionData VapAugMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### VapDegMult

```csharp
public double VapDegMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VapDegMultExp

```csharp
public ExpressionData VapDegMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Volumes

```csharp
public List<Connection> Volumes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### \_ERNConductorHandle

Do not use.

```csharp
public string _ERNConductorHandle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### \_ERNHandle

Do not use.

```csharp
public string _ERNHandle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### \_ERNTieHandle

Do not use.

```csharp
public string _ERNTieHandle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### autoNameERN

```csharp
public bool autoNameERN { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### doERN

```csharp
public bool doERN { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### userSpecifiedERNCondId

```csharp
public int userSpecifiedERNCondId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### userSpecifiedERNCondSubmodel

```csharp
public string userSpecifiedERNCondSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### userSpecifiedERNId

```csharp
public int userSpecifiedERNId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### userSpecifiedERNSubmodel

```csharp
public string userSpecifiedERNSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## See Also

[Compartment](OpenTD.FloCAD.Compartment.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md)


