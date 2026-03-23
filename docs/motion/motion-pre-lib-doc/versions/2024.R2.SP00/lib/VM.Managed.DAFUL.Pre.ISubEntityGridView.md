# Interface ISubEntityGridView

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the grid view of sub entity.

```csharp
public interface ISubEntityGridView
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### ActiveSubentityGridView\(string\)

Actives the subentity grid viw.

```csharp
void ActiveSubentityGridView(string strGridViewType)
```

#### Parameters

`strGridViewType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the grid view.

### ActiveSubentityGridView\(SubEntityViewType\)

Actives the subentity grid view.

```csharp
void ActiveSubentityGridView(SubEntityViewType typeGridView)
```

#### Parameters

`typeGridView` [SubEntityViewType](VM.Managed.DAFUL.Pre.SubEntityViewType.md)

The type grid view.

### Clear\(SubEntityViewType\)

Clears this instance.

```csharp
void Clear(SubEntityViewType typeGridView)
```

#### Parameters

`typeGridView` [SubEntityViewType](VM.Managed.DAFUL.Pre.SubEntityViewType.md)

The type grid view.

### RefreshGridView\(string, ObjectBase\)

Refreshes the grid view.

```csharp
void RefreshGridView(string strGridViewType, ObjectBase ob)
```

#### Parameters

`strGridViewType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the grid view.

`ob` ObjectBase

The object.

### RefreshGridView\(SubEntityViewType, ObjectBase\)

Refreshes the grid view.

```csharp
void RefreshGridView(SubEntityViewType typeGridView, ObjectBase ob)
```

#### Parameters

`typeGridView` [SubEntityViewType](VM.Managed.DAFUL.Pre.SubEntityViewType.md)

The type grid view.

`ob` ObjectBase

The ob.

### RefreshGridView\(SubEntityViewType\)

Refreshes the grid view.

```csharp
void RefreshGridView(SubEntityViewType typeGridView)
```

#### Parameters

`typeGridView` [SubEntityViewType](VM.Managed.DAFUL.Pre.SubEntityViewType.md)

The type grid view.

### RefreshGridView\(\)

Refreshes the grid view.

```csharp
void RefreshGridView()
```

### SetEnableDisable\(string, ObjectBase\)

Sets the enable or disable.

```csharp
void SetEnableDisable(string strGridViewType, ObjectBase ob)
```

#### Parameters

`strGridViewType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the grid view.

`ob` ObjectBase

The object.

### SetEnableDisable\(SubEntityViewType, ObjectBase\)

Sets the enable disable.

```csharp
void SetEnableDisable(SubEntityViewType typeGridView, ObjectBase ob)
```

#### Parameters

`typeGridView` [SubEntityViewType](VM.Managed.DAFUL.Pre.SubEntityViewType.md)

The type grid view.

`ob` ObjectBase

The ob.


