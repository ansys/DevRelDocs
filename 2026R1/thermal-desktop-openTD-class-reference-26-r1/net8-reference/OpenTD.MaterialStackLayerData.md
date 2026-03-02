# Class MaterialStackLayerData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents one layer of a Material Stack.

```csharp
[MessagePackObject(true)]
public class MaterialStackLayerData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MaterialStackLayerData](OpenTD.MaterialStackLayerData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### MaterialStackLayerData\(\)

```csharp
public MaterialStackLayerData()
```

## Properties

### Material

```csharp
public string Material { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NumNodes

```csharp
public int NumNodes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Thickness

```csharp
public Dimensional<ModelLength> Thickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### ThicknessExp

```csharp
public ExpressionData ThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## See Also

[MaterialStack](OpenTD.MaterialStack.md)


