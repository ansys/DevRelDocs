#  Class TopologyAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for Topology.

```csharp
public static class TopologyAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TopologyAPI](VM.API.Pre.TopologyAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_TopologyAPI_ChangeEdgeColor_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__VM_API_Pre_SetColorType_"></a> ChangeEdgeColor\(IDocument, IEnumerable<Obj\>, Color?, SetColorType\)

Change the topology edge.

```csharp
[NotNull(new string[] { "document", "edges" })]
public static void ChangeEdgeColor(this IDocument document, IEnumerable<Obj> edges, Color? color = null, SetColorType setColor = SetColorType.Set)
```

#### Parameters

`document` IDocument

The document to change the topology edge.

`edges` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The edges of the topology.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the topology.

`setColor` [SetColorType](VM.API.Pre.SetColorType.md)

The falg of color setting of the topology.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'edges' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'edges' is not <xref href="VM.Managed.CAD.Edge" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_TopologyAPI_ChangeFaceColor_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__VM_API_Pre_SetColorType_"></a> ChangeFaceColor\(IDocument, IEnumerable<Obj\>, Color?, SetColorType\)

Change the topology face.

```csharp
[NotNull(new string[] { "document", "faces" })]
public static void ChangeFaceColor(this IDocument document, IEnumerable<Obj> faces, Color? color = null, SetColorType setColor = SetColorType.Set)
```

#### Parameters

`document` IDocument

The document to change the topology face.

`faces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The faces of the topology.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the topology.

`setColor` [SetColorType](VM.API.Pre.SetColorType.md)

The falg of color setting of the topology.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'faces' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'faces' is not <xref href="VM.Managed.CAD.Face" data-throw-if-not-resolved="false"></xref>.

