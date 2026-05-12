#  Interface IContactable

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the connetable object.

```csharp
public interface IContactable : IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody
```

#### Implements

[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
IEntityRelation, 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
IHasBody

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_IContactable_GeometryFullName"></a> GeometryFullName

Gets the geometry full name

```csharp
string GeometryFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_IContactable_GeometryNameForMultiContact"></a> GeometryNameForMultiContact

Gets the name for multiple contact

```csharp
string GeometryNameForMultiContact { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_IContactable_IsActionGeometry"></a> IsActionGeometry

Gets or sets a value indicating whether this instance is action geometry.

```csharp
bool IsActionGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_IContactable_IsBaseGeometry"></a> IsBaseGeometry

Gets or sets a value indicating whether this instance is base geometry.

```csharp
bool IsBaseGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_IContactable_GetDefaultMaxPenetration_System_Double__VM_Managed_IReferencable_"></a> GetDefaultMaxPenetration\(ref double, IReferencable\)

Gets the default maximum penetration.

```csharp
bool GetDefaultMaxPenetration(ref double dMaxPenetration, IReferencable reference)
```

#### Parameters

`dMaxPenetration` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d max penetration.

`reference` IReferencable

The reference.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

