# Interface IHasInitialVel
<a id="VM_Models_Pre_IHasInitialVel"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

The initial velocity interface

```csharp
public interface IHasInitialVel
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_IHasInitialVel_InitialVelocity"></a> InitialVelocity

Gets the initial velocity.

```csharp
double InitialVelocity { get; }
```

#### Property Value

 double

## Methods

### <a id="VM_Models_Pre_IHasInitialVel_GetConvertedInitialVelocity"></a> GetConvertedInitialVelocity\(\)

Gets the initial velocity converted to unit.

```csharp
double GetConvertedInitialVelocity()
```

#### Returns

 double

The initial velocity converted to unit.

