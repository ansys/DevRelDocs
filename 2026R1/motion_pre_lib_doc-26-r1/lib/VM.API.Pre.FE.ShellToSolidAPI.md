# Class ShellToSolidAPI
<a id="VM_API_Pre_FE_ShellToSolidAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs to convert shell to solid.

```csharp
public static class ShellToSolidAPI
```

#### Inheritance

object ← 
[ShellToSolidAPI](VM.API.Pre.FE.ShellToSolidAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_ShellToSolidAPI_ConvertShellToSolid_VM_Managed_DAFUL_FE_MeshDocument_VM_Managed_DAFUL_FE_Mesh_ShellThicknessType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> ConvertShellToSolid\(MeshDocument, ShellThicknessType, ExpressionValueVariable?\)

Convert shell to solid.

```csharp
[NotNull(new string[] { "document" })]
public static void ConvertShellToSolid(this MeshDocument document, Mesh.ShellThicknessType shellThicknessType = ShellThicknessType.Element, ExpressionValueVariable? thickness = null)
```

#### Parameters

`document` MeshDocument

The document to convert shell to solid.

`shellThicknessType` Mesh.ShellThicknessType

The shell thickness type. The default value is Element.

`thickness` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The thickness. The default value is 1.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

 ArgumentOutOfRangeException

Will be thrown if 'thickness' value equal to or less than 0.

