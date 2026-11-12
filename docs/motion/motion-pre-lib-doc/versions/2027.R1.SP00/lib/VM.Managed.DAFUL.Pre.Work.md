# Class Work
<a id="VM_Managed_DAFUL_Pre_Work"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the work.

```csharp
public class Work : FileGroup<Work.WorkGroup, GroupItem>, IFileGroup, IWorkGroup
```

#### Inheritance

object ← 
[Group<Work.WorkGroup, GroupItem\>](VM.Managed.DAFUL.Pre.Group\-2.md) ← 
[FileGroup<Work.WorkGroup, GroupItem\>](VM.Managed.DAFUL.Pre.FileGroup\-2.md) ← 
[Work](VM.Managed.DAFUL.Pre.Work.md)

#### Implements

[IFileGroup](VM.Managed.DAFUL.Pre.IFileGroup.md), 
[IWorkGroup](VM.Managed.DAFUL.Pre.IWorkGroup.md)

#### Inherited Members

[FileGroup<Work.WorkGroup, GroupItem\>.Path](VM.Managed.DAFUL.Pre.FileGroup\-2.md\#VM\_Managed\_DAFUL\_Pre\_FileGroup\_2\_Path), 
[Group<Work.WorkGroup, GroupItem\>.Initialize\(\)](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Initialize), 
[Group<Work.WorkGroup, GroupItem\>.Name](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Name), 
[Group<Work.WorkGroup, GroupItem\>.SubGroups](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubGroups), 
[Group<Work.WorkGroup, GroupItem\>.SubItems](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubItems)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_Work__ctor"></a> Work\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Work" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Work()
```

### <a id="VM_Managed_DAFUL_Pre_Work__ctor_System_String_"></a> Work\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Work" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Work(string strFileName)
```

#### Parameters

`strFileName` string

Name of the file.

### <a id="VM_Managed_DAFUL_Pre_Work__ctor_System_String_System_Boolean_"></a> Work\(string, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Work" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Work(string strFileName, bool IsSettingCurrent)
```

#### Parameters

`strFileName` string

Name of the file.

`IsSettingCurrent` bool

if set to <code>true</code> [is setting current].

## Properties

### <a id="VM_Managed_DAFUL_Pre_Work_CurrentWork"></a> CurrentWork

Gets or sets the current work.

```csharp
public static Work CurrentWork { get; }
```

#### Property Value

 [Work](VM.Managed.DAFUL.Pre.Work.md)

### <a id="VM_Managed_DAFUL_Pre_Work_CurrentWorkPath"></a> CurrentWorkPath

Gets or sets the current work path.

```csharp
public static string CurrentWorkPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_Work_SubModels"></a> SubModels

Gets or sets the sub models.

```csharp
public List<Model> SubModels { get; set; }
```

#### Property Value

 List<[Model](VM.Managed.DAFUL.Pre.Model.md)\>

## Methods

### <a id="VM_Managed_DAFUL_Pre_Work_AddModel_VM_Managed_DAFUL_Pre_Model_"></a> AddModel\(Model\)

Adds the model in work.

```csharp
public bool AddModel(Model model)
```

#### Parameters

`model` [Model](VM.Managed.DAFUL.Pre.Model.md)

The new model.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Work_ClearCurrentWork"></a> ClearCurrentWork\(\)

Clear the current work.

```csharp
public static void ClearCurrentWork()
```

### <a id="VM_Managed_DAFUL_Pre_Work_GetActiveModel_System_String_"></a> GetActiveModel\(string\)

Gets the active model.
If model has active item, it is active.

```csharp
public Model GetActiveModel(string strItemPath)
```

#### Parameters

`strItemPath` string

The item path.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

The active model.

### <a id="VM_Managed_DAFUL_Pre_Work_GetActiveModelFromDirectory_System_String_"></a> GetActiveModelFromDirectory\(string\)

Gets the active model from directory.

```csharp
public Model GetActiveModelFromDirectory(string strItemDirectory)
```

#### Parameters

`strItemDirectory` string

The STR item directory.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

### <a id="VM_Managed_DAFUL_Pre_Work_GetAllModels"></a> GetAllModels\(\)

Gets all models.

```csharp
public List<Model> GetAllModels()
```

#### Returns

 List<[Model](VM.Managed.DAFUL.Pre.Model.md)\>

The Models

### <a id="VM_Managed_DAFUL_Pre_Work_GetModel_System_String_"></a> GetModel\(string\)

Gets the model.

```csharp
public Model GetModel(string strModelName)
```

#### Parameters

`strModelName` string

Name of the model.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

### <a id="VM_Managed_DAFUL_Pre_Work_GetModelNameList"></a> GetModelNameList\(\)

Gets the model name list.

```csharp
public List<string> GetModelNameList()
```

#### Returns

 List<string\>

The name of models.

### <a id="VM_Managed_DAFUL_Pre_Work_Initialize"></a> Initialize\(\)

Initializes this instance.

```csharp
public override void Initialize()
```

