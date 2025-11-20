# Class SheetThickenAPI
<a id="VM_API_Pre_SheetThickenAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for sheet thickness.

```csharp
public static class SheetThickenAPI
```

#### Inheritance

object ← 
[SheetThickenAPI](VM.API.Pre.SheetThickenAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_SheetThickenAPI_GenerateSolidFromSheet_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_CAD_BuilderSheetThicken_DirectionType_"></a> GenerateSolidFromSheet\(IDocument, IEnumerable<Obj\>, ExpressionValueVariable?, DirectionType\)

```csharp
[NotNull(new string[] { "document", "sheets" })]
public static void GenerateSolidFromSheet(this IDocument document, IEnumerable<Obj> sheets, ExpressionValueVariable? thickness = null, BuilderSheetThicken.DirectionType direction = DirectionType.Both)
```

#### Parameters

`document` IDocument

`sheets` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

`thickness` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`direction` BuilderSheetThicken.DirectionType

