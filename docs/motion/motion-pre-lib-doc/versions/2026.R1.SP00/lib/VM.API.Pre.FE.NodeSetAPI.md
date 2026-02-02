# Class NodeSetAPI
<a id="VM_API_Pre_FE_NodeSetAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs to create node set.

```csharp
public static class NodeSetAPI
```

#### Inheritance

object ← 
[NodeSetAPI](VM.API.Pre.FE.NodeSetAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_NodeSetAPI_AddDesignPoint_VM_API_Pre_Obj_VM_Vector_"></a> AddDesignPoint\(Obj, Vector\)

Create <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullObj(new string[] { "mesh" })]
[MatchTypeObj(new object[] { "mesh", typeof(Mesh) })]
public static Obj AddDesignPoint(this Obj mesh, Vector position)
```

#### Parameters

`mesh` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The mesh.

`position` Vector

The position to add design point..

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'mesh' argument is empty.

 ArgumentException

Will be thrown if type of 'mesh' is not <xref href="VM.Managed.DAFUL.FE.Mesh" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_NodeSetAPI_CreateNodeset_VM_Managed_DAFUL_FE_MeshDocument_System_Collections_Generic_IEnumerable_System_UInt32__System_String_VM_Managed_DAFUL_FE_EigenvalueInfo_RBEType_System_Boolean_System_Nullable_VM_Vector__System_Boolean_System_Boolean_System_Nullable_System_Drawing_Color__"></a> CreateNodeset\(MeshDocument, IEnumerable<uint\>, string, RBEType, bool, Vector?, bool, bool, Color?\)

Create <xref href="VM.Managed.DAFUL.FE.SetNode" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "nodeIndexes" })]
public static Obj CreateNodeset(this MeshDocument document, IEnumerable<uint> nodeIndexes, string name = "", EigenvalueInfo.RBEType rbeType = RBEType.RBE2, bool treatRBE = false, Vector? masterNodePosition = null, bool useStaticCorrectionMode = false, bool imposeRotationalUnitDisplacement = false, Color? color = null)
```

#### Parameters

`document` MeshDocument

The document to create node set.

`nodeIndexes` IEnumerable<uint\>

The node indexes.

`name` string

The name to be cteated node set.

`rbeType` EigenvalueInfo.RBEType

The rbe type to be cteated node set. The default value is RBE2.

`treatRBE` bool

The flag for using like treat. The default value is false.

`masterNodePosition` Vector?

The master node position to be cteated node set. The default value is 0,0,0.

`useStaticCorrectionMode` bool

The flag for static correction mode. The default value is false.

`imposeRotationalUnitDisplacement` bool

The flag for impose rotational unit displacement. The default value is false.

`color` Color?

The color to be cteated node set. The default value is LightGreen

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FE.SetNode" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'nodeIndexes' arguments are empty.

