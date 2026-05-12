#  Class PatchSetAPI

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs to create patch set.

```csharp
public static class PatchSetAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PatchSetAPI](VM.API.Pre.FE.PatchSetAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_PatchSetAPI_CreatePatchset_VM_Managed_DAFUL_FE_MeshDocument_System_Collections_Generic_IEnumerable_VM_Managed_DAFUL_FE_Patch__System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_DAFUL_SurfaceSmoothing_System_Nullable_System_Drawing_Color__"></a> CreatePatchset\(MeshDocument, IEnumerable<Patch\>, string, ExpressionValueVariable?, ExpressionValueVariable?, SurfaceSmoothing, Color?\)

Create <xref href="VM.Managed.DAFUL.FE.SetPatch" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "patchIndexes" })]
public static Obj CreatePatchset(this MeshDocument document, IEnumerable<Patch> patchIndexes, string name = "", ExpressionValueVariable? maxPenetration = null, ExpressionValueVariable? offset = null, SurfaceSmoothing surfaceSmoothing = SurfaceSmoothing.AUTOMATIC, Color? color = null)
```

#### Parameters

`document` MeshDocument

The document to create patch set.

`patchIndexes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Patch\>

The patch indexes.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name to be cteated patch set.

`maxPenetration` ExpressionValueVariable?

The maximum penetration to be cteated patch set. The default value is 0.

`offset` ExpressionValueVariable?

The offset to be cteated patch set. The default value is 1.

`surfaceSmoothing` SurfaceSmoothing

The surface smoothing to be cteated patch set. The default value is AUTOMATIC.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color to be cteated patch set. The default value is Violet.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.FE.SetPatch" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'patchIndexes' arguments are empty.

