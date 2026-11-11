# Interface IGearBuilder
<a id="VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

Gear builder interface

```csharp
public interface IGearBuilder : IGTBuilder
```

#### Implements

[IGTBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGTBuilder.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder_MateAngle"></a> MateAngle

Gets or sets the mate angle.

```csharp
double MateAngle { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder_Position"></a> Position

Gets the position.

```csharp
VectorBase Position { get; }
```

#### Property Value

 VectorBase

