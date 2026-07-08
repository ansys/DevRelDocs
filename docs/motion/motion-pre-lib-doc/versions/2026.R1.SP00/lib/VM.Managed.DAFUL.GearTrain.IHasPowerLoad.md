# Interface IHasPowerLoad
<a id="VM_Managed_DAFUL_GearTrain_IHasPowerLoad"></a>

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

### <a id="VM_Managed_DAFUL_GearTrain_IHasPowerLoad_GearGeometryInfos"></a> GearGeometryInfos

Gets the gear geometry infos.

```csharp
GeometryInfoBase[] GearGeometryInfos { get; }
```

#### Property Value

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_IHasPowerLoad_InputPowerLoadDirection"></a> InputPowerLoadDirection

Gets the input power load direction.

```csharp
VectorBase InputPowerLoadDirection { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_IHasPowerLoad_InputPowerLoadPosition"></a> InputPowerLoadPosition

Gets the input power load position.

```csharp
VectorBase InputPowerLoadPosition { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_IHasPowerLoad_OutputPowerLoadDirection"></a> OutputPowerLoadDirection

Gets the output power load direction.

```csharp
VectorBase OutputPowerLoadDirection { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_IHasPowerLoad_OutputPowerLoadPosition"></a> OutputPowerLoadPosition

Gets the output power load position.

```csharp
VectorBase OutputPowerLoadPosition { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_IHasPowerLoad_ParentOfInputPowerLoad"></a> ParentOfInputPowerLoad

Gets the parent of input power load.

```csharp
IConnectable ParentOfInputPowerLoad { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_IHasPowerLoad_ParentOfOutputPowerLoad"></a> ParentOfOutputPowerLoad

Gets the parent of output power load.

```csharp
IConnectable ParentOfOutputPowerLoad { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_IHasPowerLoad_PowerLoads"></a> PowerLoads

Gets the power loads.

```csharp
IPowerLoad[] PowerLoads { get; }
```

#### Property Value

 [IPowerLoad](VM.Managed.DAFUL.GearTrain.IPowerLoad.md)\[\]

