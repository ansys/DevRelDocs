#  Class EyehookExtensions

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.LeafSpring.dll  

```csharp
public class EyehookExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EyehookExtensions](VM.Models.Pre.Force.EyehookExtensions.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Force_EyehookExtensions__ctor"></a> EyehookExtensions\(\)

```csharp
public EyehookExtensions()
```

## Methods

### <a id="VM_Models_Pre_Force_EyehookExtensions_GetLocation_VM_Models_Pre_Force_EyePositionType_VM_Models_Pre_Force_EyeShapeType_System_ValueTuple_System_Double_System_Double__System_ValueTuple_System_Double_System_Double__System_Double_System_Double_"></a> GetLocation\(EyePositionType, EyeShapeType, \(double X, double Z\), \(double X, double Z\), double, double\)

```csharp
public static (double X, double Z) GetLocation(EyePositionType where, EyeShapeType shape, (double X, double Z) endPosition, (double X, double Z) nextPosition, double mainLeafThickness, double radius)
```

#### Parameters

`where` [EyePositionType](VM.Models.Pre.Force.EyePositionType.md)

`shape` [EyeShapeType](VM.Models.Pre.Force.EyeShapeType.md)

`endPosition` \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

`nextPosition` \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

`mainLeafThickness` [double](https://learn.microsoft.com/dotnet/api/system.double)

`radius` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

