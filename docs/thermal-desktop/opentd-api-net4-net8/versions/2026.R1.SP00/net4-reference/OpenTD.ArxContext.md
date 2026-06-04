# Class ArxContext

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

ArxContext contains objects that can be accessed in-process by AutoCAD addins,
if RadCAD has been loaded first.

```csharp
public static class ArxContext
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ArxContext](OpenTD.ArxContext.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Fields

### TD

```csharp
public static ThermalDesktop TD
```

#### Field Value

 [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### ProgressBar

```csharp
public static ProgressBar ProgressBar { get; }
```

#### Property Value

 [ProgressBar](OpenTD.AddIn.ProgressBar.md)

### UserBreak

```csharp
public static IUserBreak UserBreak { get; }
```

#### Property Value

 IUserBreak


