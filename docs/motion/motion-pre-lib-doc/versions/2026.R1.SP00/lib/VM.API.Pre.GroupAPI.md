# Class GroupAPI
<a id="VM_API_Pre_GroupAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for Group.

```csharp
public static class GroupAPI
```

#### Inheritance

object ← 
[GroupAPI](VM.API.Pre.GroupAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GroupAPI_ApplyGroup_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__"></a> ApplyGroup\(Obj, IEnumerable<Obj\>\)

Apply a <xref href="VM.Managed.DAFUL.Group" data-throw-if-not-resolved="false"></xref> update.

```csharp
[NotNull(new string[] { "group" })]
public static void ApplyGroup(this Obj group, IEnumerable<Obj> objs)
```

#### Parameters

`group` [Obj](VM.API.Pre.Obj.md)

The target <xref href="VM.Managed.DAFUL.Group" data-throw-if-not-resolved="false"></xref> to apply update.

`objs` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

The collection of objects.

#### Exceptions

 ArgumentNullException

Will be thrown if 'group' is null.

 ArgumentException

Will be thrown if the type of 'group' is not <xref href="VM.Managed.IGroup" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GroupAPI_CreateGroup_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__"></a> CreateGroup\(SubSystemDocument, IEnumerable<Obj\>\)

Create <xref href="VM.Managed.DAFUL.Group" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument", "objs" })]
public static Obj CreateGroup(this SubSystemDocument subSystemDocument, IEnumerable<Obj> objs)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a group.

`objs` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

The bodies of a group.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Group" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'objs' is null.

 ArgumentException

Will be thrown if the type of 'objs' is not <xref href="VM.Managed.IGroup" data-throw-if-not-resolved="false"></xref>.

