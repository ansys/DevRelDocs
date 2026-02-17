# <a id="OpenTD_Script"></a> Class Script

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Base class that is useful for collecting several OpenTD scripts together
and presenting them to your users with a common interface. Script is used
by the official CRTech OpenTD Demos.

```csharp
public abstract class Script
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Script](OpenTD.Script.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

### <a id="OpenTD_Script_WorkingDirectory"></a> WorkingDirectory

One working directory for all of your scripts to use.

```csharp
public static string WorkingDirectory { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_Script_GetDescription"></a> GetDescription\(\)

```csharp
public abstract string GetDescription()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Script_GetKeywords"></a> GetKeywords\(\)

```csharp
public abstract string GetKeywords()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Script_GetName"></a> GetName\(\)

```csharp
public abstract string GetName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Script_Run"></a> Run\(\)

```csharp
public abstract void Run()
```

### <a id="OpenTD_Script_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

