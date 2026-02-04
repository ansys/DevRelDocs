#  Interface IInterface

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This interface is to represent interface.

```csharp
public interface IInterface
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IInterface_IsInterface"></a> IsInterface

Gets or sets a value indicating whether this instance is interface.

```csharp
bool IsInterface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_IInterface_BindInterface_VM_Managed_TMatrix_VM_Managed_TMatrix_VM_Managed_IInterface_"></a> BindInterface\(TMatrix, TMatrix, IInterface\)

Binds the interface.

```csharp
void BindInterface(TMatrix matFrom, TMatrix matTo, IInterface itf)
```

#### Parameters

`matFrom` TMatrix

The [from matrix].

`matTo` TMatrix

The [to matrix].

`itf` [IInterface](VM.Managed.IInterface.md)

The interface.

