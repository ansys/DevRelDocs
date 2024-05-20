# Interface IDesignVariable

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IDesignVariable : IDesignSubEntity, ISubEntity, IEntityBase, IObjectBase, IHasKeyObject, IHasName, IEnabled, IHasComment, IVariable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider
```

#### Implements

[IDesignSubEntity](VM.Models.Pre.IDesignSubEntity.md), 
[ISubEntity](VM.Models.Pre.ISubEntity.md), 
[IEntityBase](VM.Models.Pre.IEntityBase.md), 
[IObjectBase](VM.Models.Pre.IObjectBase.md), 
[IHasKeyObject](VM.Models.Pre.IHasKeyObject.md), 
IHasName, 
IEnabled, 
IHasComment, 
[IVariable](VM.Models.Pre.IVariable.md), 
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

### IsDesignParam

```csharp
bool IsDesignParam { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Variable

```csharp
ExpressionValueVariable Variable { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)


