#  Class EdgeSetAPI

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs to create edge set.

```csharp
public static class EdgeSetAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EdgeSetAPI](VM.API.Pre.FE.EdgeSetAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_EdgeSetAPI_CreateEdgeset_VM_Managed_DAFUL_FE_MeshDocument_System_Collections_Generic_IEnumerable_System_UInt32__System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_DAFUL_SurfaceSmoothing_System_Nullable_System_Drawing_Color__"></a> CreateEdgeset\(MeshDocument, IEnumerable<uint\>, string, ExpressionValueVariable?, ExpressionValueVariable?, SurfaceSmoothing, Color?\)

Create <xref href="VM.Managed.DAFUL.FE.SetEdge" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "nodeIndex" })]
public static Obj CreateEdgeset(this MeshDocument document, IEnumerable<uint> nodeIndex, string name = "", ExpressionValueVariable? maxPenetration = null, ExpressionValueVariable? offset = null, SurfaceSmoothing surfaceSmoothing = SurfaceSmoothing.AUTOMATIC, Color? color = null)
```

#### Parameters

`document` MeshDocument

The document to create edge set.

`nodeIndex` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

The node indexes for creating edgeset.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name to be cteated edge set.

`maxPenetration` ExpressionValueVariable?

The maximum penetration to be cteated edge set. The default value is 0.

`offset` ExpressionValueVariable?

The offset to be cteated edge set. The default value is 1.

`surfaceSmoothing` SurfaceSmoothing

The surface smoothing to be cteated edge set. The default value is AUTOMATIC.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color to be cteated edge set. The default value is Red.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.FE.SetEdge" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'nodeIndex' arguments are empty.

