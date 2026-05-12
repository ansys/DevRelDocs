#  Interface IUnbalanceMass

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Unbalance mass interface

```csharp
public interface IUnbalanceMass : IPointEntity
```

#### Implements

[IPointEntity](VM.Managed.DAFUL.GearTrain.IPointEntity.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_IUnbalanceMass_CenterPositionOfDummyBody"></a> CenterPositionOfDummyBody

Gets the center position of dummy body.

```csharp
VectorBase CenterPositionOfDummyBody { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_IUnbalanceMass_Mass"></a> Mass

Gets the mass.

```csharp
ExpressionValueVariable Mass { get; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_IUnbalanceMass_MomentArm"></a> MomentArm

Gets the moment arm.

```csharp
ExpressionValueVariable MomentArm { get; }
```

#### Property Value

 ExpressionValueVariable

