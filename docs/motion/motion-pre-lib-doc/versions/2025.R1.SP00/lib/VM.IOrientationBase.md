#  Interface IOrientationBase

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IOrientationBase
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_IOrientationBase_AngleType"></a> AngleType

```csharp
AngleTypes AngleType { get; }
```

#### Property Value

 [AngleTypes](VM.AngleTypes.md)

### <a id="VM_IOrientationBase_RotationAngles"></a> RotationAngles

```csharp
IList<double> RotationAngles { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_IOrientationBase_RotationAxes"></a> RotationAxes

```csharp
RotationAxes RotationAxes { get; }
```

#### Property Value

 [RotationAxes](VM.RotationAxes.md)

### <a id="VM_IOrientationBase_RotationType"></a> RotationType

```csharp
RotationTypes RotationType { get; }
```

#### Property Value

 [RotationTypes](VM.RotationTypes.md)

### <a id="VM_IOrientationBase_Value"></a> Value

```csharp
OMatrix Value { get; }
```

#### Property Value

 [OMatrix](VM.OMatrix.md)

