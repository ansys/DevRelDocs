# Interface IFEFilm\_ElementProperty
<a id="VM_Models_Pre_IFEFilm_ElementProperty"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IFEFilm_ElementProperty : ILinkContainer, IOwned, IHasID
```

#### Implements

[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_IFEFilm_ElementProperty_ThicknessPerElement"></a> ThicknessPerElement

```csharp
ExpressionValueVariable ThicknessPerElement { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### <a id="VM_Models_Pre_IFEFilm_ElementProperty_WidthPerElement"></a> WidthPerElement

```csharp
ExpressionValueVariable WidthPerElement { get; set; }
```

#### Property Value

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

