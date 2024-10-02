#  Interface IHousing

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The housing interface

```csharp
public interface IHousing
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_IHousing_Property"></a> Property

Gets the property.

```csharp
PropertyHousingBase Property { get; }
```

#### Property Value

 [PropertyHousingBase](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md)

### <a id="VM_Managed_DAFUL_GearTrain_IHousing_StartAxisValue"></a> StartAxisValue

Gets the start axis value.

```csharp
VectorBase StartAxisValue { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_IHousing_StartPointValue"></a> StartPointValue

Gets the start point value.

```csharp
VectorBase StartPointValue { get; }
```

#### Property Value

 VectorBase

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_IHousing_RemoveRelatedEntity"></a> RemoveRelatedEntity\(\)

Removes the related entity.

```csharp
void RemoveRelatedEntity()
```

