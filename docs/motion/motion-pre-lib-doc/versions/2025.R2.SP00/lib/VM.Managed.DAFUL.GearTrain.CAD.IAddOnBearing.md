#  Interface IAddOnBearing

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

Add on bearing interface

```csharp
public interface IAddOnBearing
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IAddOnBearing_BearingPoint"></a> BearingPoint

Gets or sets the bearing point.

```csharp
PointBase BearingPoint { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IAddOnBearing_ReferenceOffset"></a> ReferenceOffset

Gets or sets the reference offset.

```csharp
double ReferenceOffset { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IAddOnBearing_ReferencePoint"></a> ReferencePoint

Gets or sets the reference point.

```csharp
ReferencePointType ReferencePoint { get; set; }
```

#### Property Value

 [ReferencePointType](VM.Managed.DAFUL.GearTrain.CAD.ReferencePointType.md)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_IAddOnBearing_TypeOfParent"></a> TypeOfParent

Gets or sets the type of parent.

```csharp
GearBuilder.ParentType TypeOfParent { get; set; }
```

#### Property Value

 [GearBuilder](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md).[ParentType](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.ParentType.md)

