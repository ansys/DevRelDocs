# <a id="VM_Managed_Symmetric_Force_VectorForceStandard"></a> Class VectorForceStandard

Namespace: [VM.Managed.Symmetric.Force](VM.Managed.Symmetric.Force.md)  
Assembly: VMSymFP.dll  

```csharp
public class VectorForceStandard : VectorForceFunction, ISymmetricBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VectorForceFunction](VM.Managed.Symmetric.Force.VectorForceFunction.md) ← 
[VectorForceStandard](VM.Managed.Symmetric.Force.VectorForceStandard.md)

#### Implements

ISymmetricBuilder

#### Inherited Members

[VectorForceFunction.FindObject\(string, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Force.VectorForceFunction.md\#VM\_Managed\_Symmetric\_Force\_VectorForceFunction\_FindObject\_System\_String\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
[VectorForceFunction.SetRefereceMarker\(IMarker, Document\)](VM.Managed.Symmetric.Force.VectorForceFunction.md\#VM\_Managed\_Symmetric\_Force\_VectorForceFunction\_SetRefereceMarker\_VM\_Managed\_IMarker\_VM\_Managed\_Document\_)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Force_VectorForceStandard__ctor"></a> VectorForceStandard\(\)

```csharp
public VectorForceStandard()
```

## Methods

### <a id="VM_Managed_Symmetric_Force_VectorForceStandard_Build_System_Object_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Build\(object, SymmetricType, Plane, Document\)

Build the symmetric objects.

```csharp
public object Build(object tool, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`tool` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`sym_type` SymmetricType

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`doc` Document

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

The new object of symmetric.

