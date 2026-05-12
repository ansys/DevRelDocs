#  Class Named<T\>

Namespace: [VM.Managed.Symmetric](VM.Managed.Symmetric.md)  
Assembly: VMSymBase.dll  

```csharp
public class Named<T> : ISymmetricUpdater where T : INamed
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Named<T\>](VM.Managed.Symmetric.Named\-1.md)

#### Implements

ISymmetricUpdater

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Named_1__ctor"></a> Named\(\)

```csharp
public Named()
```

## Properties

### <a id="VM_Managed_Symmetric_Named_1_SymmetricManager"></a> SymmetricManager

```csharp
protected ISymmetricManager SymmetricManager { get; }
```

#### Property Value

 ISymmetricManager

## Methods

### <a id="VM_Managed_Symmetric_Named_1_FindObject_System_String_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> FindObject\(string, SymmetricType, Plane, Document\)

```csharp
protected static object FindObject(string strToolName, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`strToolName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Managed_Symmetric_Named_1_Initialize_VM_Managed_Symmetric_ISymmetricManager_"></a> Initialize\(ISymmetricManager\)

Initialize the symmetric objects.

```csharp
public virtual bool Initialize(ISymmetricManager Manager)
```

#### Parameters

`Manager` ISymmetricManager

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Symmetric_Named_1_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
public virtual bool Update(ObjectBase tool, ObjectBase target, SymmetricType sym_type, Plane sym_plane, Document doc)
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

