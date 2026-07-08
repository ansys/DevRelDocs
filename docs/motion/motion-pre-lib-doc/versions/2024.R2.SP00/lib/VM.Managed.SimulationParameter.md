# Class SimulationParameter

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the simulation parameter.

```csharp
public class SimulationParameter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SimulationParameter](VM.Managed.SimulationParameter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SimulationParameter\(\)

```csharp
public SimulationParameter()
```

## Properties

### OwnerLinkContainer

Gets the owner.

```csharp
public LinkContainer OwnerLinkContainer { set; }
```

#### Property Value

 LinkContainer

### RelativeErrorValue

Gets or sets the relative error.

```csharp
public double RelativeErrorValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RoundErrorOfRedundant

Gets or sets the round error of redundant.

```csharp
public double RoundErrorOfRedundant { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TimeOfDynamicSimulation

Gets or sets the dynamic simulation time.

```csharp
public double TimeOfDynamicSimulation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TimeOfStaticSimulation

Gets or sets the static simulation time.

```csharp
public double TimeOfStaticSimulation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```


