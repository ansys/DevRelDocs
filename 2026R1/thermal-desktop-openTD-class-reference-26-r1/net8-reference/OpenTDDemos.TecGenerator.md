# <a id="OpenTDDemos_TecGenerator"></a> Class TecGenerator

Namespace: [OpenTDDemos](OpenTDDemos.md)  
Assembly: OpenTDDemos.dll  

```csharp
public class TecGenerator : Script
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Script ← 
[TecGenerator](OpenTDDemos.TecGenerator.md)

#### Inherited Members

Script.GetName\(\), 
Script.GetDescription\(\), 
Script.GetKeywords\(\), 
Script.Run\(\), 
Script.ToString\(\), 
Script.WorkingDirectory, 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="OpenTDDemos_TecGenerator_Deserialize_System_String_"></a> Deserialize\(string\)

```csharp
public static TecSpec Deserialize(string fileName)
```

#### Parameters

`fileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [TecSpec](OpenTDDemos.TecSpec.md)

### <a id="OpenTDDemos_TecGenerator_GetDescription"></a> GetDescription\(\)

```csharp
public override string GetDescription()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTDDemos_TecGenerator_GetKeywords"></a> GetKeywords\(\)

```csharp
public override string GetKeywords()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTDDemos_TecGenerator_GetName"></a> GetName\(\)

```csharp
public override string GetName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTDDemos_TecGenerator_MakeTec_OpenTD_ThermalDesktop_OpenTDDemos_TecSpec_OpenTD_Point3d_"></a> MakeTec\(ThermalDesktop, TecSpec, Point3d\)

```csharp
public static void MakeTec(ThermalDesktop td, TecSpec tec, Point3d origin)
```

#### Parameters

`td` ThermalDesktop

`tec` [TecSpec](OpenTDDemos.TecSpec.md)

`origin` Point3d

### <a id="OpenTDDemos_TecGenerator_Run"></a> Run\(\)

```csharp
public override void Run()
```

### <a id="OpenTDDemos_TecGenerator_Serialize_OpenTDDemos_TecSpec_System_String_"></a> Serialize\(TecSpec, string\)

```csharp
public static void Serialize(TecSpec Tec, string fileName)
```

#### Parameters

`Tec` [TecSpec](OpenTDDemos.TecSpec.md)

`fileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

