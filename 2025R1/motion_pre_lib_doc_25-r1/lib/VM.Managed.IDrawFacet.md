#  Interface IDrawFacet

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the [draw facet].

```csharp
public interface IDrawFacet
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_IDrawFacet_DrawFacet_VM_CAD_Kernel_Render_Canvas_"></a> DrawFacet\(Canvas\)

Draw facet.

```csharp
void DrawFacet(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas.

### <a id="VM_Managed_IDrawFacet_DrawFacetByDefaultParameters_VM_CAD_Kernel_Render_Canvas_"></a> DrawFacetByDefaultParameters\(Canvas\)

Draws facet by default parameters.

```csharp
void DrawFacetByDefaultParameters(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_IDrawFacet_DrawFacetInGlobal_VM_CAD_Kernel_Render_Canvas_"></a> DrawFacetInGlobal\(Canvas\)

Draw facet in global.

```csharp
void DrawFacetInGlobal(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas.

### <a id="VM_Managed_IDrawFacet_SetGeometryRepresentation_System_String_System_String_System_Boolean_"></a> SetGeometryRepresentation\(string, string, bool\)

Set geometry representation.

```csharp
bool SetGeometryRepresentation(string strGeom, string strDefaultGeom, bool bUseRedraw)
```

#### Parameters

`strGeom` [string](https://learn.microsoft.com/dotnet/api/system.string)

The geometry information.

`strDefaultGeom` [string](https://learn.microsoft.com/dotnet/api/system.string)

The geometry information when checked default value.

`bUseRedraw` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The redraw flag.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

