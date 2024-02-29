# <a id="VM_Models_Post_VisualizationImpl_Visualization_OverapMarker"></a> Class OverapMarker

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class OverapMarker
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OverapMarker](VM.Models.Post.VisualizationImpl.Visualization.OverapMarker.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_OverapMarker__ctor_Ceetron_CeetronDesktopComponents_Visualization_MarkupModel_"></a> OverapMarker\(MarkupModel\)

```csharp
public OverapMarker(MarkupModel markupModel)
```

#### Parameters

`markupModel` MarkupModel

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_OverapMarker_Initialize_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_System_Collections_Generic_Dictionary_VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_ComponentType_VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart__"></a> Initialize\(Vec3d, Vec3d, Dictionary<ComponentType, VMMarkupPart\>\)

```csharp
public static void Initialize(Vec3d position, Vec3d normal, Dictionary<ComponentType, VMMarkupPart> dicMarkup)
```

#### Parameters

`position` Vec3d

`normal` Vec3d

`dicMarkup` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[ComponentType](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.ComponentType.md), [VMMarkupPart](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md)\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_OverapMarker_Initialize_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_"></a> Initialize\(Vec3d, Vec3d\)

```csharp
public void Initialize(Vec3d position, Vec3d normal)
```

#### Parameters

`position` Vec3d

`normal` Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_OverapMarker_SetTransformation_Ceetron_CeetronDesktopComponents_Mat4d_"></a> SetTransformation\(Mat4d\)

```csharp
public void SetTransformation(Mat4d mat)
```

#### Parameters

`mat` Mat4d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_OverapMarker_SetVisible_VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_ComponentType_"></a> SetVisible\(ComponentType\)

```csharp
public void SetVisible(ComponentType type)
```

#### Parameters

`type` [ComponentType](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.ComponentType.md)

