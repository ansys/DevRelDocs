# Class EquationUserSubroutine
<a id="VM_Managed_Symmetric_Equation_EquationUserSubroutine"></a>

Namespace: [VM.Managed.Symmetric.Equation](VM.Managed.Symmetric.Equation.md)  
Assembly: VMSymEq.dll  

```csharp
public class EquationUserSubroutine : ISymmetricBuilder
```

#### Inheritance

object ← 
[EquationUserSubroutine](VM.Managed.Symmetric.Equation.EquationUserSubroutine.md)

#### Implements

ISymmetricBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Equation_EquationUserSubroutine__ctor"></a> EquationUserSubroutine\(\)

```csharp
public EquationUserSubroutine()
```

## Methods

### <a id="VM_Managed_Symmetric_Equation_EquationUserSubroutine_Build_System_Object_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Build\(object, SymmetricType, Plane, Document\)

Build the symmetric objects.

```csharp
public object Build(object tool, SymmetricType sym_type, Plane sym_plane, Document doc)
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

