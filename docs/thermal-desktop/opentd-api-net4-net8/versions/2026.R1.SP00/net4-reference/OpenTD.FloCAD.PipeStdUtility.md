# Class PipeStdUtility

Namespace: [OpenTD.FloCAD](OpenTD.FloCAD.md)  
Assembly: OpenTD.dll  

Accesses the list of standard pipes associated with an instance of TD.

```csharp
public class PipeStdUtility
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PipeStdUtility](OpenTD.FloCAD.PipeStdUtility.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### PipeStdUtility\(ThermalDesktop\)

```csharp
public PipeStdUtility(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Methods

### GetPipeStdSignature\(string, string, string\)

```csharp
public PipeStdSignatureData GetPipeStdSignature(string nameSubstring, string scheduleSubstring, string nom_siSubstring)
```

#### Parameters

`nameSubstring` [string](https://learn.microsoft.com/dotnet/api/system.string)

`scheduleSubstring` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nom_siSubstring` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [PipeStdSignatureData](OpenTD.FloCAD.PipeStdSignatureData.md)

### GetPipeStdSignature\(Predicate<PipeStdSignatureData\>\)

```csharp
public PipeStdSignatureData GetPipeStdSignature(Predicate<PipeStdSignatureData> rule)
```

#### Parameters

`rule` [Predicate](https://learn.microsoft.com/dotnet/api/system.predicate\-1)<[PipeStdSignatureData](OpenTD.FloCAD.PipeStdSignatureData.md)\>

#### Returns

 [PipeStdSignatureData](OpenTD.FloCAD.PipeStdSignatureData.md)

### GetPipeStdSignatures\(\)

```csharp
public List<PipeStdSignatureData> GetPipeStdSignatures()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PipeStdSignatureData](OpenTD.FloCAD.PipeStdSignatureData.md)\>

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)


