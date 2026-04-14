# Speos Changelog 2026 R1 SP01

### Component 3D Texture: Multi-Surface Limiting Support

3D Texture algorithm has been enhanced: Limiting Surface now allows more than one face as delimited area, when before only one face was allowed.

- Component3DTexture API
  - Removed [LimitingSurface](./../sim/client-speos-sim.md#component3dtexture) property from the **Component3DTexture** API
  - Added [LimitingSurfaces](./../sim/client-speos-sim.md#component3dtexture) property to the **Component3DTexture** API
  - Removed [Component3DTexture.Component3DTextureLimitingSurface](./../sim/client-speos-sim.md#component3dtexture) nested API from the **Component3DTexture** API
  - Added [Component3DTexture.Component3DTextureLimitingSurfaces](./../sim/client-speos-sim.md#component3dtexturecomponent3dtexturelimitingsurfaces) nested API to the **Component3DTexture** API

### Component 3D Texture: Enhanced Preview Display Modes

Previewing the 3D Textures has been enhanced: 
- New Display Modes: Three preview modes are now available to balance performance and visual detail:
  - Origins: Fastest rendering with minimal detail for quick pattern location overview
  - Mesh (default): Shows accurate mesh lines with low RAM usage; may lag with numerous patterns
  - Facets: Full facet rendering without lines; higher RAM usage and longer load times, but maintains smooth performance with heavy scenes where mesh mode struggles 

- Component3DTexture API
  - Added [PreviewDisplayMode](./../sim/client-speos-sim.md#component3dtexture) property to the **Component3DTexture** API
  - Added [PreviewDisplayModeIndex](./../sim/client-speos-sim.md#component3dtexture) property to the **Component3DTexture** API

### Light Guide: Advanced Body Customization and Profile Control

As of version 2026 R1 SP01, Speos offers you two new Light Guide construction types. You can now:
- sweep a circular profile along the guide curve with variable diameter.
- select an existing solid body as the light guide body fully encompassing the guide curve.

- LightGuide API
  - Added [CustomBody](./../des/client-speos-des.md#lightguide) property to the **LightGuide** API
  - Added [BodyProfileDiameterConfigurations](./../des/client-speos-des.md#lightguide) property to the **LightGuide** API
  - Added [LightGuide.LightGuideCustomBody](./../des/client-speos-des.md#lightguidelightguidecustombody) nested API to the **LightGuide** API
  - Added [LightGuide.LightGuideBodyProfileDiameterConfigurations](./../des/client-speos-des.md#lightguidelightguidebodyprofilediameterconfigurations) nested API to the **LightGuide** API

### Configuration: Custom File Organization

Speos now allows you to customize the location of your SPEOS input files folder, SPEOS output files folder, and SPEOS isolated files folder.
This enhancement gives you greater control over how and where your data is stored, supporting both local and network‑based workflows. By organizing and transferring files more efficiently, you can maintain design integrity, reduce errors, and streamline collaboration. This added flexibility ensures smooth teamwork whether you're using centralized shared folders or distributing complete project directory packages.

- SpeosOptionsConfiguration API
  - Added [SpeosInputFilesCustomFolder](./../sim/client-speos-sim.md#speosoptionsconfiguration) property to the **SpeosOptionsConfiguration** API
  - Added [SpeosIsolatedFilesCustomFolder](./../sim/client-speos-sim.md#speosoptionsconfiguration) property to the **SpeosOptionsConfiguration** API
  - Added [SpeosOutputFilesCustomFolder](./../sim/client-speos-sim.md#speosoptionsconfiguration) property to the **SpeosOptionsConfiguration** API
