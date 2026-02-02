# Interface IPoint
<a id="VM_Managed_IPoint"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the get position information of Design Point and Design Frame.
Design point and Design frame are casting as IPoint.

```csharp
public interface IPoint : IDesignParameter
```

#### Implements

[IDesignParameter](VM.Managed.IDesignParameter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IPoint_Position"></a> Position

Gets the position.

```csharp
VectorBase Position { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_IPoint_X"></a> X

Gets the X point.

```csharp
double X { get; }
```

#### Property Value

 double

### <a id="VM_Managed_IPoint_Y"></a> Y

Gets the Y point.

```csharp
double Y { get; }
```

#### Property Value

 double

### <a id="VM_Managed_IPoint_Z"></a> Z

Gets the Z point.

```csharp
double Z { get; }
```

#### Property Value

 double

