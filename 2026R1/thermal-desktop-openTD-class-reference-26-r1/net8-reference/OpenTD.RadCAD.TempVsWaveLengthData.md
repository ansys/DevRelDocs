# <a id="OpenTD_RadCAD_TempVsWaveLengthData"></a> Class TempVsWaveLengthData

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

List of temperatures vs wavelengths.

```csharp
public class TempVsWaveLengthData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TempVsWaveLengthData](OpenTD.RadCAD.TempVsWaveLengthData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_RadCAD_TempVsWaveLengthData__ctor"></a> TempVsWaveLengthData\(\)

```csharp
public TempVsWaveLengthData()
```

## Properties

### <a id="OpenTD_RadCAD_TempVsWaveLengthData_data"></a> data

```csharp
public List<double> data { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_TempVsWaveLengthData_offOrOn"></a> offOrOn

```csharp
public int offOrOn { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_TempVsWaveLengthData_temperatures"></a> temperatures

```csharp
public DimensionalList<Temp> temperatures { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_TempVsWaveLengthData_waveLengths"></a> waveLengths

```csharp
public DimensionalList<ModelLength> waveLengths { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

