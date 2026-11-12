# Class DriverFunction
<a id="VM_Managed_Symmetric_Constraints_DriverFunction"></a>

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCB.dll  

```csharp
public class DriverFunction : Driver, ISymmetricBuilder
```

#### Inheritance

object ← 
[Driver](VM.Managed.Symmetric.Constraints.Driver.md) ← 
[DriverFunction](VM.Managed.Symmetric.Constraints.DriverFunction.md)

#### Implements

ISymmetricBuilder

#### Inherited Members

[Driver.Build\(object, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Constraints.Driver.md\#VM\_Managed\_Symmetric\_Constraints\_Driver\_Build\_System\_Object\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
[Driver.MakeObject\(object\)](VM.Managed.Symmetric.Constraints.Driver.md\#VM\_Managed\_Symmetric\_Constraints\_Driver\_MakeObject\_System\_Object\_)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_DriverFunction__ctor"></a> DriverFunction\(\)

```csharp
public DriverFunction()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_DriverFunction_Build_System_Object_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Build\(object, SymmetricType, Plane, Document\)

Build the symmetric objects.

```csharp
public override object Build(object tool, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`tool` object

The object.

`sym_type` SymmetricType

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`doc` Document

#### Returns

 object

The new object of symmetric.

