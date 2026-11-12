# Interface ISpecialFitView
<a id="VM_Managed_ISpecialFitView"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the view has special fit operation.

```csharp
public interface ISpecialFitView
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_ISpecialFitView_raise_OnPostFit"></a> raise\_OnPostFit\(\)

```csharp
void raise_OnPostFit()
```

### <a id="VM_Managed_ISpecialFitView_OnPostFit"></a> OnPostFit

Occurs when [on PostFit].

```csharp
event ISpecialFitView.PostFit OnPostFit
```

#### Event Type

 [ISpecialFitView](VM.Managed.ISpecialFitView.md).[PostFit](VM.Managed.ISpecialFitView.PostFit.md)

