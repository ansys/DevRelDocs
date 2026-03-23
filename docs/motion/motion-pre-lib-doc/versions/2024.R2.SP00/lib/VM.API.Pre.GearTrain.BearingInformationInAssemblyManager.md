# Struct BearingInformationInAssemblyManager

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the bearing information in assembly manager

```csharp
public struct BearingInformationInAssemblyManager
```

## Constructors

### BearingInformationInAssemblyManager\(\)

Default constructor

```csharp
public BearingInformationInAssemblyManager()
```

## Properties

### AddedRaceway

If inner raceway is added, the value is Inner. or outer raceway is added, the value is Outer.

```csharp
public AddedRacewayType AddedRaceway { readonly get; set; }
```

#### Property Value

 [AddedRacewayType](VM.API.Pre.GearTrain.AddedRacewayType.md)

### AddedRacewayName

The parent connectable name of added inner/outer raceway.

```csharp
public string AddedRacewayName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BearingName

The bearing name.

```csharp
public string BearingName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UseReferenceBody

The flag whether using reference body or not.

```csharp
public bool UseReferenceBody { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


