# Class Bay

Namespace: [OpenTD.FloCAD](OpenTD.FloCAD.md)  
Assembly: OpenTD.dll  

Client-side representation of a Compartment Bay entity in a TD instance.

```csharp
[DataContract]
public class Bay
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Bay](OpenTD.FloCAD.Bay.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### Bay\(\)

```csharp
public Bay()
```

## Properties

### AstMult

```csharp
[DataMember]
public double AstMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### AstMultExp

```csharp
[DataMember]
public ExpressionData AstMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### CoolMult

```csharp
[DataMember]
public double CoolMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### CoolMultExp

```csharp
[DataMember]
public ExpressionData CoolMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### ERNConductorHandle

```csharp
public string ERNConductorHandle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ERNHandle

```csharp
public string ERNHandle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ERNTieHandle

```csharp
public string ERNTieHandle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HeatMult

```csharp
[DataMember]
public double HeatMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### HeatMultExp

```csharp
[DataMember]
public ExpressionData HeatMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### LiqAugMult

```csharp
[DataMember]
public double LiqAugMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LiqAugMultExp

```csharp
[DataMember]
public ExpressionData LiqAugMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### LiqDegMult

```csharp
[DataMember]
public double LiqDegMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LiqDegMultExp

```csharp
[DataMember]
public ExpressionData LiqDegMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### OverallMult

```csharp
[DataMember]
public double OverallMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### OverallMultExp

```csharp
[DataMember]
public ExpressionData OverallMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### PackingFactor

```csharp
[DataMember]
public double PackingFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PackingFactorExp

```csharp
[DataMember]
public ExpressionData PackingFactorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RegisterDesignator

```csharp
[DataMember]
public string RegisterDesignator { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SplashHeight

```csharp
[DataMember]
public double SplashHeight { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SplashHeightExp

```csharp
[DataMember]
public ExpressionData SplashHeightExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### SubtractedVolumes

```csharp
[DataMember]
public List<Connection> SubtractedVolumes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### Surfaces

```csharp
[DataMember]
public List<Connection> Surfaces { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### VapAugMult

```csharp
[DataMember]
public double VapAugMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VapAugMultExp

```csharp
[DataMember]
public ExpressionData VapAugMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### VapDegMult

```csharp
[DataMember]
public double VapDegMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VapDegMultExp

```csharp
[DataMember]
public ExpressionData VapDegMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Volumes

```csharp
[DataMember]
public List<Connection> Volumes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### \_ERNConductorHandle

Do not use.

```csharp
[DataMember]
public string _ERNConductorHandle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### \_ERNHandle

Do not use.

```csharp
[DataMember]
public string _ERNHandle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### \_ERNTieHandle

Do not use.

```csharp
[DataMember]
public string _ERNTieHandle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### autoNameERN

```csharp
[DataMember]
public bool autoNameERN { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### doERN

```csharp
[DataMember]
public bool doERN { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### userSpecifiedERNCondId

```csharp
[DataMember]
public int userSpecifiedERNCondId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### userSpecifiedERNCondSubmodel

```csharp
[DataMember]
public string userSpecifiedERNCondSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### userSpecifiedERNId

```csharp
[DataMember]
public int userSpecifiedERNId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### userSpecifiedERNSubmodel

```csharp
[DataMember]
public string userSpecifiedERNSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## See Also

[Compartment](OpenTD.FloCAD.Compartment.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md)


