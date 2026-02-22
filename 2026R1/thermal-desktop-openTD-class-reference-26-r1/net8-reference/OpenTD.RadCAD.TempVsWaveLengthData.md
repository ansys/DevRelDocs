# Class TempVsWaveLengthData

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

List of temperatures vs wavelengths.

```csharp
[MessagePackObject(true)]
public class TempVsWaveLengthData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TempVsWaveLengthData](OpenTD.RadCAD.TempVsWaveLengthData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### TempVsWaveLengthData\(\)

```csharp
public TempVsWaveLengthData()
```

## Properties

### data

```csharp
public List<double> data { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### offOrOn

```csharp
public int offOrOn { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### temperatures

```csharp
public DimensionalList<Temp> temperatures { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### waveLengths

```csharp
public DimensionalList<ModelLength> waveLengths { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>


