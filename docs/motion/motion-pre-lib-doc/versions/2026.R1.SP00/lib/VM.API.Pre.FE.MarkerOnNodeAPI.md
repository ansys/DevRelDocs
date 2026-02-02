# Class MarkerOnNodeAPI
<a id="VM_API_Pre_FE_MarkerOnNodeAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs to create marker on node.

```csharp
public static class MarkerOnNodeAPI
```

#### Inheritance

object ← 
[MarkerOnNodeAPI](VM.API.Pre.FE.MarkerOnNodeAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_MarkerOnNodeAPI_CreateMarkerOnNode_VM_Managed_DAFUL_FE_MeshDocument_VM_Managed_DAFUL_FE_PointOnNode_VM_Managed_OrientationBase_System_String_"></a> CreateMarkerOnNode\(MeshDocument, PointOnNode, OrientationBase, string\)

Create <xref href="VM.Managed.DAFUL.FE.MarkerOnNode" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "pointOnNode", "orientationBase" })]
public static Obj CreateMarkerOnNode(this MeshDocument document, PointOnNode pointOnNode, OrientationBase orientationBase, string name = "")
```

#### Parameters

`document` MeshDocument

The document to create edge set.

`pointOnNode` PointOnNode

The position of marker.

`orientationBase` OrientationBase

The orientation of marker.

`name` string

The name to be cteated marker.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FE.MarkerOnNode" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'pointOnNode' or 'orientationBase' arguments are empty.

