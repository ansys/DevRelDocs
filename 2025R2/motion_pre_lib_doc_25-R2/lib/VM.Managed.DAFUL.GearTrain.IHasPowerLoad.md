# Interface IHasPowerLoad

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Powerload interface

```csharp
public interface IHasPowerLoad
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### GearGeometryInfos

Gets the gear geometry infos.

```csharp
GeometryInfoBase[] GearGeometryInfos { get; }
```

#### Property Value

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)\[\]

### InputPowerLoadDirection

Gets the input power load direction.

```csharp
VectorBase InputPowerLoadDirection { get; }
```

#### Property Value

 VectorBase

### InputPowerLoadPosition

Gets the input power load position.

```csharp
VectorBase InputPowerLoadPosition { get; }
```

#### Property Value

 VectorBase

### OutputPowerLoadDirection

Gets the output power load direction.

```csharp
VectorBase OutputPowerLoadDirection { get; }
```

#### Property Value

 VectorBase

### OutputPowerLoadPosition

Gets the output power load position.

```csharp
VectorBase OutputPowerLoadPosition { get; }
```

#### Property Value

 VectorBase

### ParentOfInputPowerLoad

Gets the parent of input power load.

```csharp
IConnectable ParentOfInputPowerLoad { get; }
```

#### Property Value

 IConnectable

### ParentOfOutputPowerLoad

Gets the parent of output power load.

```csharp
IConnectable ParentOfOutputPowerLoad { get; }
```

#### Property Value

 IConnectable

### PowerLoads

Gets the power loads.

```csharp
IPowerLoad[] PowerLoads { get; }
```

#### Property Value

 [IPowerLoad](VM.Managed.DAFUL.GearTrain.IPowerLoad.md)\[\]


