#  Interface IPointBase

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

<p>This interface is to represent the get position information of Design Point and Design Frame.
        Design point and Design frame are casting as IPoint.</p>

```csharp
public interface IPointBase : IObject, ILinkContainer, IOwned, IHasID, IEventProvider
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

### <a id="VM_Models_Pre_IPointBase_Value"></a> Value

<p>Gets the value.</p>

```csharp
Vector Value { get; }
```

#### Property Value

 Vector

### <a id="VM_Models_Pre_IPointBase_X"></a> X

<p>Gets the X point.</p>

```csharp
double X { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_IPointBase_Y"></a> Y

<p>Gets the Y point.</p>

```csharp
double Y { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_IPointBase_Z"></a> Z

<p>Gets the Z point.</p>

```csharp
double Z { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

