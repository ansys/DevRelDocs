# <a id="OpenTDDemos_TecSpec"></a> Class TecSpec

Namespace: [OpenTDDemos](OpenTDDemos.md)  
Assembly: OpenTDDemos.dll  

```csharp
[Serializable]
public class TecSpec
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TecSpec](OpenTDDemos.TecSpec.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTDDemos_TecSpec__ctor"></a> TecSpec\(\)

```csharp
public TecSpec()
```

## Properties

### <a id="OpenTDDemos_TecSpec_BasePlate"></a> BasePlate

```csharp
public Plate BasePlate { get; set; }
```

#### Property Value

 [Plate](OpenTDDemos.Plate.md)

### <a id="OpenTDDemos_TecSpec_LayerName"></a> LayerName

```csharp
public string LayerName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTDDemos_TecSpec_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTDDemos_TecSpec_Stages"></a> Stages

```csharp
public List<Stage> Stages { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Stage](OpenTDDemos.Stage.md)\>

### <a id="OpenTDDemos_TecSpec_SubmodelName"></a> SubmodelName

```csharp
public string SubmodelName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTDDemos_TecSpec_useEpoxy"></a> useEpoxy

```csharp
public bool useEpoxy { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OpenTDDemos_TecSpec_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

