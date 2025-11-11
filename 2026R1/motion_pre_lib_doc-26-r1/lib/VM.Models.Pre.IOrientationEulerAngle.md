# Interface IOrientationEulerAngle
<a id="VM_Models_Pre_IOrientationEulerAngle"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IOrientationEulerAngle : IOrientationBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider
```

#### Implements

[IOrientationBase](VM.Models.Pre.IOrientationBase.md), 
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

### <a id="VM_Models_Pre_IOrientationEulerAngle_Alpha"></a> Alpha

```csharp
IVariable Alpha { get; set; }
```

#### Property Value

 [IVariable](VM.Models.Pre.IVariable.md)

### <a id="VM_Models_Pre_IOrientationEulerAngle_Beta"></a> Beta

```csharp
IVariable Beta { get; set; }
```

#### Property Value

 [IVariable](VM.Models.Pre.IVariable.md)

### <a id="VM_Models_Pre_IOrientationEulerAngle_Gamma"></a> Gamma

```csharp
IVariable Gamma { get; set; }
```

#### Property Value

 [IVariable](VM.Models.Pre.IVariable.md)

