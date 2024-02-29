# <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupSubLine"></a> Class VMMarkupSubLine

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class VMMarkupSubLine : VMMarkupPart
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VMMarkupPart](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md) ← 
[VMMarkupSubLine](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupSubLine.md)

#### Inherited Members

[VMMarkupPart.AxisX](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_AxisX), 
[VMMarkupPart.AxisY](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_AxisY), 
[VMMarkupPart.AxisZ](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_AxisZ), 
[VMMarkupPart.Zero](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_Zero), 
[VMMarkupPart.Find\(MarkupPart\)](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_Find\_Ceetron\_CeetronDesktopComponents\_Visualization\_MarkupPart\_), 
[VMMarkupPart.Hide\(\)](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_Hide), 
[VMMarkupPart.Show\(\)](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_Show), 
[VMMarkupPart.SetMarkupPartToMarkupModel\(\)](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_SetMarkupPartToMarkupModel), 
[VMMarkupPart.IsVisible](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_IsVisible), 
[VMMarkupPart.Transfromation](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_Transfromation), 
[VMMarkupPart.ScaleFactor](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_ScaleFactor), 
[VMMarkupPart.MarkupParts](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VMMarkupPart\_MarkupParts)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupSubLine__ctor_Ceetron_CeetronDesktopComponents_Visualization_MarkupModel_"></a> VMMarkupSubLine\(MarkupModel\)

```csharp
public VMMarkupSubLine(MarkupModel markupModel)
```

#### Parameters

`markupModel` MarkupModel

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupSubLine_CreateCone_Ceetron_CeetronDesktopComponents_Visualization_MarkupPartInstancedGeometry_System_Double_System_Double_Ceetron_CeetronDesktopComponents_Color3f_"></a> CreateCone\(MarkupPartInstancedGeometry, double, double, Color3f\)

```csharp
public static void CreateCone(MarkupPartInstancedGeometry mkcone, double radius, double height, Color3f color)
```

#### Parameters

`mkcone` MarkupPartInstancedGeometry

`radius` [double](https://learn.microsoft.com/dotnet/api/system.double)

`height` [double](https://learn.microsoft.com/dotnet/api/system.double)

`color` Color3f

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupSubLine_DrawRotateLine_Ceetron_CeetronDesktopComponents_Mat4d_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_System_Int32_System_Double_"></a> DrawRotateLine\(Mat4d, Vec3d, Vec3d, Vec3d, Vec3d, int, double\)

```csharp
public void DrawRotateLine(Mat4d orgMat, Vec3d origin, Vec3d target, Vec3d axis, Vec3d normal, int naxis, double degree)
```

#### Parameters

`orgMat` Mat4d

`origin` Vec3d

`target` Vec3d

`axis` Vec3d

`normal` Vec3d

`naxis` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`degree` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupSubLine_DrawTransLine_Ceetron_CeetronDesktopComponents_Visualization_View_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_System_Double_"></a> DrawTransLine\(View, Vec3d, Vec3d, Vec3d, double\)

```csharp
public void DrawTransLine(View view, Vec3d orgPt, Vec3d normal, Vec3d viewProj, double doffset)
```

#### Parameters

`view` View

`orgPt` Vec3d

`normal` Vec3d

`viewProj` Vec3d

`doffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupSubLine_RegisterInputDataCallback_VM_Models_Post_CallbackSetInformMode_"></a> RegisterInputDataCallback\(CallbackSetInformMode\)

```csharp
public void RegisterInputDataCallback(CallbackSetInformMode callbackInfomMode)
```

#### Parameters

`callbackInfomMode` CallbackSetInformMode

