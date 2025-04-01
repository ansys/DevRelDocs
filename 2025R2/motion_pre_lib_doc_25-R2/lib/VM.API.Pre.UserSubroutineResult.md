# Struct UserSubroutineResult

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct represents the UserSubroutine Result

```csharp
public struct UserSubroutineResult
```

## Constructors

### UserSubroutineResult\(\)

Default constructor

```csharp
public UserSubroutineResult()
```

### UserSubroutineResult\(string, bool\)

Initializes a new instance of the UserSubroutineResult.

```csharp
public UserSubroutineResult(string name, bool usePerformanceIndex)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

`usePerformanceIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The use performanceIndex.

## Properties

### Name

The value for the name. The default value is "".

```csharp
public string Name { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UsePerformanceIndex

The value for the use performanceIndex. The default value is 'false'.

```csharp
public bool UsePerformanceIndex { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


