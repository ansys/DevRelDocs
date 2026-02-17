# <a id="OpenTD_MaterialStackLayerData"></a> Class MaterialStackLayerData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents one layer of a Material Stack.

```csharp
[DataContract]
public class MaterialStackLayerData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MaterialStackLayerData](OpenTD.MaterialStackLayerData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_MaterialStackLayerData__ctor"></a> MaterialStackLayerData\(\)

```csharp
public MaterialStackLayerData()
```

## Properties

### <a id="OpenTD_MaterialStackLayerData_Material"></a> Material

```csharp
[DataMember]
public string Material { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_MaterialStackLayerData_NumNodes"></a> NumNodes

```csharp
[DataMember]
public int NumNodes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_MaterialStackLayerData_Thickness"></a> Thickness

```csharp
[DataMember]
public Dimensional<ModelLength> Thickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_MaterialStackLayerData_ThicknessExp"></a> ThicknessExp

```csharp
[DataMember]
public ExpressionData ThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### <a id="OpenTD_MaterialStackLayerData_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## See Also

[MaterialStack](OpenTD.MaterialStack.md)

