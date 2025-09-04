#  Struct BearingInformationInAssemblyManager

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the bearing information in assembly manager

```csharp
public struct BearingInformationInAssemblyManager
```

## Constructors

### <a id="VM_API_Pre_GearTrain_BearingInformationInAssemblyManager__ctor"></a> BearingInformationInAssemblyManager\(\)

Default constructor

```csharp
public BearingInformationInAssemblyManager()
```

## Properties

### <a id="VM_API_Pre_GearTrain_BearingInformationInAssemblyManager_AddedRaceway"></a> AddedRaceway

If inner raceway is added, the value is Inner. or outer raceway is added, the value is Outer.

```csharp
public AddedRacewayType AddedRaceway { readonly get; set; }
```

#### Property Value

 [AddedRacewayType](VM.API.Pre.GearTrain.AddedRacewayType.md)

### <a id="VM_API_Pre_GearTrain_BearingInformationInAssemblyManager_AddedRacewayName"></a> AddedRacewayName

The parent connectable name of added inner/outer raceway.

```csharp
public string AddedRacewayName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_BearingInformationInAssemblyManager_BearingName"></a> BearingName

The bearing name.

```csharp
public string BearingName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_BearingInformationInAssemblyManager_UseReferenceBody"></a> UseReferenceBody

The flag whether using reference body or not.

```csharp
public bool UseReferenceBody { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

