#  Interface IPointThreePointsCircleCenter

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IPointThreePointsCircleCenter : IPointBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider
```

#### Implements

[IPointBase](VM.Models.Pre.IPointBase.md), 
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

### <a id="VM_Models_Pre_IPointThreePointsCircleCenter_End"></a> End

```csharp
IPointBase End { get; set; }
```

#### Property Value

 [IPointBase](VM.Models.Pre.IPointBase.md)

### <a id="VM_Models_Pre_IPointThreePointsCircleCenter_Middle"></a> Middle

```csharp
IPointBase Middle { get; set; }
```

#### Property Value

 [IPointBase](VM.Models.Pre.IPointBase.md)

### <a id="VM_Models_Pre_IPointThreePointsCircleCenter_Normal"></a> Normal

```csharp
Vector Normal { get; }
```

#### Property Value

 Vector

### <a id="VM_Models_Pre_IPointThreePointsCircleCenter_Start"></a> Start

```csharp
IPointBase Start { get; set; }
```

#### Property Value

 [IPointBase](VM.Models.Pre.IPointBase.md)

