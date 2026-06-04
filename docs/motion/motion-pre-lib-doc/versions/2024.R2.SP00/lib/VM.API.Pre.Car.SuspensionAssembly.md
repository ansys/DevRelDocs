# Struct SuspensionAssembly

Namespace: [VM.API.Pre.Car](VM.API.Pre.Car.md)  
Assembly: VM.API.Pre.Car.dll  

This struct represents the suspension assembly

```csharp
public struct SuspensionAssembly
```

## Constructors

### SuspensionAssembly\(string, string, string\)

Constructor

```csharp
public SuspensionAssembly(string suspensionPath, string steeringPath, string otherPath)
```

#### Parameters

`suspensionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suspension path.

`steeringPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The steering path.

`otherPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The other path.

## Properties

### OtherPath

Gets or sets the other path.

```csharp
public string OtherPath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SteeringPath

Gets or sets the steering path.

```csharp
public string SteeringPath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SuspensionPath

Gets or sets the suspension path.

```csharp
public string SuspensionPath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


