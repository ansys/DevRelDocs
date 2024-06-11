# Class Work

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the work.

```csharp
public class Work : FileGroup<Work.WorkGroup, GroupItem>, IFileGroup, IWorkGroup
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

### Work\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Work" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Work()
```

### Work\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Work" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Work(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

### Work\(string, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Work" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Work(string strFileName, bool IsSettingCurrent)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

`IsSettingCurrent` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [is setting current].

## Properties

### CurrentWork

Gets or sets the current work.

```csharp
public static Work CurrentWork { get; }
```

#### Property Value

 [Work](VM.Managed.DAFUL.Pre.Work.md)

### CurrentWorkPath

Gets or sets the current work path.

```csharp
public static string CurrentWorkPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SubModels

Gets or sets the sub models.

```csharp
public List<Model> SubModels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Model](VM.Managed.DAFUL.Pre.Model.md)\>

## Methods

### AddModel\(Model\)

Adds the model in work.

```csharp
public bool AddModel(Model model)
```

#### Parameters

`model` [Model](VM.Managed.DAFUL.Pre.Model.md)

The new model.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ClearCurrentWork\(\)

Clear the current work.

```csharp
public static void ClearCurrentWork()
```

### GetActiveModel\(string\)

Gets the active model.
If model has active item, it is active.

```csharp
public Model GetActiveModel(string strItemPath)
```

#### Parameters

`strItemPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The item path.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

The active model.

### GetActiveModelFromDirectory\(string\)

Gets the active model from directory.

```csharp
public Model GetActiveModelFromDirectory(string strItemDirectory)
```

#### Parameters

`strItemDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR item directory.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

### GetAllModels\(\)

Gets all models.

```csharp
public List<Model> GetAllModels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Model](VM.Managed.DAFUL.Pre.Model.md)\>

The Models

### GetModel\(string\)

Gets the model.

```csharp
public Model GetModel(string strModelName)
```

#### Parameters

`strModelName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the model.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

### GetModelNameList\(\)

Gets the model name list.

```csharp
public List<string> GetModelNameList()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The name of models.

### Initialize\(\)

Initializes this instance.

```csharp
public override void Initialize()
```


