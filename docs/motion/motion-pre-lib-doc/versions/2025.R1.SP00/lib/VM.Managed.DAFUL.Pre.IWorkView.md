#  Interface IWorkView

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the work view.

```csharp
public interface IWorkView
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_Pre_IWorkView_AddFileInWork_System_String_VM_Managed_DAFUL_Pre_Model_"></a> AddFileInWork\(string, Model\)

Adds the file in work.

```csharp
void AddFileInWork(string strPath, Model model)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string path.

`model` [Model](VM.Managed.DAFUL.Pre.Model.md)

The model.

### <a id="VM_Managed_DAFUL_Pre_IWorkView_UpdateView_VM_Managed_DAFUL_Pre_Model_VM_Managed_DAFUL_Pre_GroupItem_"></a> UpdateView\(Model, GroupItem\)

Update work view.

```csharp
void UpdateView(Model model, GroupItem item)
```

#### Parameters

`model` [Model](VM.Managed.DAFUL.Pre.Model.md)

The model to update.

`item` [GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)

The item to update.

