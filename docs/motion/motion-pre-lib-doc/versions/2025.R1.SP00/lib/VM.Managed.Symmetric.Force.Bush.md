#  Class Bush

Namespace: [VM.Managed.Symmetric.Force](VM.Managed.Symmetric.Force.md)  
Assembly: VMSymFB.dll  

```csharp
public class Bush : Force<Bush, PropertyBush>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Bush\> ← 
Connector<Bush, PropertyBush\> ← 
[Force<Bush, PropertyBush\>](VM.Managed.Symmetric.Force.Force\-2.md) ← 
[Bush](VM.Managed.Symmetric.Force.Bush.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[Force<Bush, PropertyBush\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Force.Force\-2.md\#VM\_Managed\_Symmetric\_Force\_Force\_2\_Update\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
Connector<Bush, PropertyBush\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Bush\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Bush\>.Initialize\(ISymmetricManager\), 
Named<Bush\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Bush\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Force_Bush__ctor"></a> Bush\(\)

```csharp
public Bush()
```

## Methods

### <a id="VM_Managed_Symmetric_Force_Bush_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
public override bool Update(ObjectBase tool, ObjectBase target, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`tool` ObjectBase

The reference object.

`target` ObjectBase

The target object.

`sym_type` SymmetricType

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Symmetric_Force_Bush_UpdateProperty_VM_Managed_DAFUL_Force_PropertyBush_VM_Managed_DAFUL_Force_PropertyBush_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateProperty\(PropertyBush, PropertyBush, SymmetricType, Plane, Document\)

```csharp
public static bool UpdateProperty(PropertyBush toolProperty, PropertyBush targetProperty, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`toolProperty` PropertyBush

`targetProperty` PropertyBush

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

