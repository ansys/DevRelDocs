# Interface ISubEntityGridView
<a id="VM_Managed_DAFUL_Pre_ISubEntityGridView"></a>

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

### <a id="VM_Managed_DAFUL_Pre_ISubEntityGridView_ActiveSubentityGridView_System_String_"></a> ActiveSubentityGridView\(string\)

Actives the subentity grid viw.

```csharp
void ActiveSubentityGridView(string strGridViewType)
```

#### Parameters

`strGridViewType` string

Type of the grid view.

### <a id="VM_Managed_DAFUL_Pre_ISubEntityGridView_ActiveSubentityGridView_VM_Managed_DAFUL_Pre_SubEntityViewType_"></a> ActiveSubentityGridView\(SubEntityViewType\)

Actives the subentity grid view.

```csharp
void ActiveSubentityGridView(SubEntityViewType typeGridView)
```

#### Parameters

`typeGridView` [SubEntityViewType](VM.Managed.DAFUL.Pre.SubEntityViewType.md)

The type grid view.

### <a id="VM_Managed_DAFUL_Pre_ISubEntityGridView_Clear_VM_Managed_DAFUL_Pre_SubEntityViewType_"></a> Clear\(SubEntityViewType\)

Clears this instance.

```csharp
void Clear(SubEntityViewType typeGridView)
```

#### Parameters

`typeGridView` [SubEntityViewType](VM.Managed.DAFUL.Pre.SubEntityViewType.md)

The type grid view.

### <a id="VM_Managed_DAFUL_Pre_ISubEntityGridView_RefreshGridView_System_String_VM_Managed_ObjectBase_"></a> RefreshGridView\(string, ObjectBase\)

Refreshes the grid view.

```csharp
void RefreshGridView(string strGridViewType, ObjectBase ob)
```

#### Parameters

`strGridViewType` string

Type of the grid view.

`ob` ObjectBase

The object.

### <a id="VM_Managed_DAFUL_Pre_ISubEntityGridView_RefreshGridView_VM_Managed_DAFUL_Pre_SubEntityViewType_VM_Managed_ObjectBase_"></a> RefreshGridView\(SubEntityViewType, ObjectBase\)

Refreshes the grid view.

```csharp
void RefreshGridView(SubEntityViewType typeGridView, ObjectBase ob)
```

#### Parameters

`typeGridView` [SubEntityViewType](VM.Managed.DAFUL.Pre.SubEntityViewType.md)

The type grid view.

`ob` ObjectBase

The ob.

### <a id="VM_Managed_DAFUL_Pre_ISubEntityGridView_RefreshGridView_VM_Managed_DAFUL_Pre_SubEntityViewType_"></a> RefreshGridView\(SubEntityViewType\)

Refreshes the grid view.

```csharp
void RefreshGridView(SubEntityViewType typeGridView)
```

#### Parameters

`typeGridView` [SubEntityViewType](VM.Managed.DAFUL.Pre.SubEntityViewType.md)

The type grid view.

### <a id="VM_Managed_DAFUL_Pre_ISubEntityGridView_RefreshGridView"></a> RefreshGridView\(\)

Refreshes the grid view.

```csharp
void RefreshGridView()
```

### <a id="VM_Managed_DAFUL_Pre_ISubEntityGridView_SetEnableDisable_System_String_VM_Managed_ObjectBase_"></a> SetEnableDisable\(string, ObjectBase\)

Sets the enable or disable.

```csharp
void SetEnableDisable(string strGridViewType, ObjectBase ob)
```

#### Parameters

`strGridViewType` string

Type of the grid view.

`ob` ObjectBase

The object.

### <a id="VM_Managed_DAFUL_Pre_ISubEntityGridView_SetEnableDisable_VM_Managed_DAFUL_Pre_SubEntityViewType_VM_Managed_ObjectBase_"></a> SetEnableDisable\(SubEntityViewType, ObjectBase\)

Sets the enable disable.

```csharp
void SetEnableDisable(SubEntityViewType typeGridView, ObjectBase ob)
```

#### Parameters

`typeGridView` [SubEntityViewType](VM.Managed.DAFUL.Pre.SubEntityViewType.md)

The type grid view.

`ob` ObjectBase

The ob.

