# Class FEFilmAPI
<a id="VM_API_Pre_Links_FEFilmAPI"></a>

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This class implements APIs for ball placing.

```csharp
public static class FEFilmAPI
```

#### Inheritance

object ← 
[FEFilmAPI](VM.API.Pre.Links.FEFilmAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Links_FEFilmAPI_AddPath_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Models_Pre_WindingDirection_VM_Models_Pre_ExpressionValueVariable_"></a> AddPath\(Obj, Obj, WindingDirection, ExpressionValueVariable\)

Add path.

```csharp
[NotNullObj(new string[] { "film", "designSubentity" })]
[MatchTypeObj(new object[] { "film", typeof(FEFilm) })]
[GreaterThanZero(new string[] { "radius" })]
public static void AddPath(this Obj film, Obj designSubentity, WindingDirection windingDirection, ExpressionValueVariable radius)
```

#### Parameters

`film` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The fe film to add path.

`designSubentity` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The design subentity.

`windingDirection` WindingDirection

The winding direction type.

`radius` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The radius.

#### Exceptions

 ArgumentNullException

Will be thrown if 'film', 'designSubentity' are null.

 ArgumentException

Will be thrown if item type of 'film' is not <xref href="VM.Managed.DAFUL.FEFilm" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if item type of 'designSubentity' is not <xref href="VM.Models.Pre.IDesignPoint" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.IDesignFrame" data-throw-if-not-resolved="false"></xref>.

 ArgumentOutOfRangeException

Will be thrown if the 'radius' value is equal to or less than 0.

### <a id="VM_API_Pre_Links_FEFilmAPI_ChangeName_System_String_System_String_"></a> ChangeName\(string, string\)

Change name.

```csharp
[NotNullOrEmpty(new string[] { "oldName", "newName" })]
public static void ChangeName(string oldName, string newName)
```

#### Parameters

`oldName` string

The old name.

`newName` string

The new name.

#### Exceptions

 ArgumentNullException

Will be thrown if 'oldName', 'newName' are null.

### <a id="VM_API_Pre_Links_FEFilmAPI_ClearPath_VM_API_Pre_Obj_"></a> ClearPath\(Obj\)

Clear path.

```csharp
[NotNullObj(new string[] { "film" })]
[MatchTypeObj(new object[] { "film", typeof(FEFilm) })]
public static void ClearPath(this Obj film)
```

#### Parameters

`film` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The fe film to clear path.

#### Exceptions

 ArgumentNullException

Will be thrown if 'film' is null.

 ArgumentException

Will be thrown if item type of 'film' is not <xref href="VM.Managed.DAFUL.FEFilm" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_Links_FEFilmAPI_CreateFEFilm_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateFEFilm\(SubSystemDocument, IEnumerable<Obj\>, string\)

Create fe film <xref href="VM.Managed.DAFUL.FEFilm" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "paths" })]
public static Obj CreateFEFilm(this SubSystemDocument document, IEnumerable<Obj> paths, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the fe film.

`paths` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

The paths to create the fe film.

`name` string

The name of the <xref href="VM.Managed.DAFUL.FEFilm" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'FEFilm_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FEFilm" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'paths' are null.

### <a id="VM_API_Pre_Links_FEFilmAPI_GenerateFEFilm_VM_API_Pre_Obj_System_String_"></a> GenerateFEFilm\(Obj, string\)

Generate FE Film.

```csharp
[NotNullObj(new string[] { "film" })]
[MatchTypeObj(new object[] { "film", typeof(FEFilm) })]
public static void GenerateFEFilm(this Obj film, string feBodyName = "")
```

#### Parameters

`film` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The fe film to generate.

`feBodyName` string

The fe body name.

#### Exceptions

 ArgumentNullException

Will be thrown if 'film' is null.

 ArgumentException

Will be thrown if item type of 'film' is not <xref href="VM.Managed.DAFUL.FEFilm" data-throw-if-not-resolved="false"></xref>.

