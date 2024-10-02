#  Interface IOrientationBase

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IOrientationBase : IObject, ILinkContainer, IOwned, IHasID, IEventProvider
```

#### Implements

[IObject](VM.Models.Pre.IObject.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID, 
[IEventProvider](VM.Models.Pre.IEventProvider.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_IOrientationBase_AngleType"></a> AngleType

```csharp
AngleTypes AngleType { get; }
```

#### Property Value

 AngleTypes

### <a id="VM_Models_Pre_IOrientationBase_RotationAngles"></a> RotationAngles

```csharp
double[] RotationAngles { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Pre_IOrientationBase_RotationAxis"></a> RotationAxis

```csharp
RotationAxes RotationAxis { get; }
```

#### Property Value

 RotationAxes

### <a id="VM_Models_Pre_IOrientationBase_RotationType"></a> RotationType

```csharp
RotationTypes RotationType { get; }
```

#### Property Value

 RotationTypes

### <a id="VM_Models_Pre_IOrientationBase_Value"></a> Value

```csharp
OMatrix Value { get; }
```

#### Property Value

 OMatrix

