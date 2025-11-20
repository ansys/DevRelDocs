# Interface IDrawReference
<a id="VM_CAD_Kernel_Render_IDrawReference"></a>

Namespace: [VM.CAD.Kernel.Render](VM.CAD.Kernel.Render.md)  
Assembly: VM.CAD.Kernel.dll  

This interface is to represent the reference object for draw.

```csharp
public interface IDrawReference
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_CAD_Kernel_Render_IDrawReference_Instantiate_VM_Models_Pre_IHasKeyObject_VM_TMatrix_"></a> Instantiate\(IHasKeyObject, TMatrix\)

Instantiate from original object.

```csharp
void Instantiate(IHasKeyObject obOrigin, TMatrix matTransform)
```

#### Parameters

`obOrigin` IHasKeyObject

The reference's object

`matTransform` TMatrix

The transformation

