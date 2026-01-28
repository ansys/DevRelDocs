# Class CommonAPI
<a id="VM_API_Pre_GearTrain_CommonAPI"></a>

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements common APIs class.

```csharp
public static class CommonAPI
```

#### Inheritance

object ← 
[CommonAPI](VM.API.Pre.GearTrain.CommonAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_CommonAPI_OpenHiddenDocument_VM_Managed_DAFUL_GearTrain_IOpenDesignerForGearTrain_"></a> OpenHiddenDocument\(IOpenDesignerForGearTrain\)

Open designer.

```csharp
[NotNull(new string[] { "entity" })]
public static Document3D OpenHiddenDocument(this IOpenDesignerForGearTrain entity)
```

#### Parameters

`entity` IOpenDesignerForGearTrain

The entity to be opened.

#### Returns

 Document3D

The opened document <xref href="VM.Managed.DAFUL.HiddenDocument" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 ArgumentNullException

Will be thrown if 'entity' argument is empty.

### <a id="VM_API_Pre_GearTrain_CommonAPI_OpenHiddenDocument_VM_API_Pre_Obj_"></a> OpenHiddenDocument\(Obj\)

Open designer.

```csharp
[NotNull(new string[] { "entity" })]
public static Document3D OpenHiddenDocument(this Obj entity)
```

#### Parameters

`entity` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The entity to be opened.

#### Returns

 Document3D

The opened document <xref href="VM.Managed.DAFUL.HiddenDocument" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 ArgumentNullException

Will be thrown if 'entity' argument is empty.

