#  Interface ITransform

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the information of transform.
Design Frame and Design Point is casting as ITransform.

```csharp
public interface ITransform : IPoint, IOrientation, IDirectionContainer, IDesignParameter
```

#### Implements

[IPoint](VM.Managed.IPoint.md), 
[IOrientation](VM.Managed.IOrientation.md), 
[IDirectionContainer](VM.Managed.IDirectionContainer.md), 
[IDesignParameter](VM.Managed.IDesignParameter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_ITransform_TransformationMatrix"></a> TransformationMatrix

Gets the transform.

```csharp
TMatrix TransformationMatrix { get; set; }
```

#### Property Value

 [TMatrix](VM.Managed.TMatrix.md)

