# Speos Changelog 2026 R1

## New Features

### Ray Animation

In some cases, full ray traicing contains too much information to understand how light propagates and interects with the different optical interfaces. As of version 2026 R1, new options have been introduced in the Interactive simulation and the Light Expert analysis tool to enable dynamic visualization of the ray tracing evolution within the optical system. Thus, you can animate the progression of each ray based on configurable parameters, helping you observe and analyze ray paths behavior.

- ResultLXP API
  - Added [RayLengthType](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API
  - Added [RayLengthRelative](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API
  - Modified [RayLength](./../sim/client-speos-sim.md#resultlxp) property from a Number attribute to an Enum attribute in the **ResultLXP** API
  - Added [AnimationDuration](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API
  - Added [AnimationFramesPerSecond](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API
  - Added [AnimationMode](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API
  - Added [SegmentLength](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API

- SimulationInteractive API
  - Added [RayLengthType](./../sim/client-speos-sim.md#simulationinteractive) property to the **SimulationInteractive** API
  - Added [RayLengthRelative](./../sim/client-speos-sim.md#simulationinteractive) property to the **SimulationInteractive** API
  - Added [RayLengthAbsolute](./../sim/client-speos-sim.md#simulationinteractive) property from a Number attribute to an Enum attribute in the **SimulationInteractive** API
  - Added [AnimationDuration](./../sim/client-speos-sim.md#simulationinteractive) property to the **SimulationInteractive** API
  - Added [AnimationFramesPerSecond](./../sim/client-speos-sim.md#simulationinteractive) property to the **SimulationInteractive** API
  - Added [AnimationMode](./../sim/client-speos-sim.md#simulationinteractive) property to the **SimulationInteractive** API
  - Added [SegmentLength](./../sim/client-speos-sim.md#simulationinteractive) property to the **SimulationInteractive** API

## Improvements

### Camera sensor: XMP template

Camera sensor now offers the possibility to apply a XMP template (*.xml file) to assign measurements, display settings to new results or to get size information for definition purpose. Thus, Camera sensors and their results will be easier to configure and analyze.

- SensorCamera API
  - Added [XmpTemplateFile](./../sim/client-speos-sim.md#sensorcamera) property to the **SensorCamera** API
  - Added [XmpTemplateFileFullPath](./../sim/client-speos-sim.md#sensorcamera) property to the **SensorCamera** API
  - Added [DimensionFromFile](./../sim/client-speos-sim.md#sensorcamera) property to the **SensorCamera** API
  - Added [DisplayPropertiesFromFile](./../sim/client-speos-sim.md#sensorcamera) property to the **SensorCamera** API

### HUD Optical Analysis

After a HUD Optical Analysis simulation generating visualization outputs for Optical Volume, you can perform geometrical measurements on these outputs. Thus, now you can export the Optical Volume of each Eyebox as a geometry, that will be created under a new component in the Structure panel.

- Command API
  - Added [ExportVolumicResultHoa](./../sim/client-speos-sim.md#static-method) static method to the **Command** API

### Optical Design Exchange: Solid Bodies management

In Ansys Zemax OpticStudio, you can now apply coordinate breaks inside OBJECT to create complex geometries such as prisms or decentered lenses and export these objects to an *.odx file. In Speos, upon compute of the ODX feature, a new Solid Body is created as child of the ODX feature and a new geometry corresponding to the Solid Body is created in the Structure panel. This geometry is composed of two surfaces with each a different axis system.

- ComponentOpticStudio API
  - Added [SolidBodies](./../sim/client-speos-sim.md#solidbodies) API
  - Added [SolidBodies](./../sim/client-speos-sim.md#componentopticstudio) property to the **ComponentOpticStudio** API
  - Added [ComponentOpticStudio.ComponentOpticStudioSolidBodies](./../sim/client-speos-sim.md#componentopticstudiocomponentopticstudiosolidbodies) as nested API of the **ComponentOpticStudio** API
  - Added [Add](./../sim/client-speos-sim.md#componentopticstudiocomponentopticstudiosurfaces) method to the **ComponentOpticStudio.ComponentOpticStudioSurfaces** nested API
  - Added [Delete](./../sim/client-speos-sim.md#componentopticstudiocomponentopticstudiosurfaces) method to the **ComponentOpticStudio.ComponentOpticStudioSurfaces** nested API
  - Added [Clear](./../sim/client-speos-sim.md#componentopticstudiocomponentopticstudiosurfaces) method to the **ComponentOpticStudio.ComponentOpticStudioSurfaces** nested API

### Optical Design Exchange: Sources management

In Ansys Zemax OpticStudio, you can now create and export Elliptical (source at infinite distance) and Point Sources (source at finite distance) to an *.odx file. When importing an *.odx file, Speos will create Surface sources with their respective support geometries upon compute of the ODX feature.

- ComponentOpticStudio API
  - Added [SourceBodies](./../sim/client-speos-sim.md#componentopticstudio) property to the **ComponentOpticStudio** API
  - Added [Sources](./../sim/client-speos-sim.md#componentopticstudio) property to the **ComponentOpticStudio** API
  - Added [ComponentOpticStudio.ComponentOpticStudioSourceBodies](./../sim/client-speos-sim.md#componentopticstudiocomponentopticstudiosourcebodies) as nested API of the **ComponentOpticStudio** API
  - Added [Add](./../sim/client-speos-sim.md#componentopticstudiocomponentopticstudiosurfaces) method to the **ComponentOpticStudio.ComponentOpticStudioSurfaces** nested API
  - Added [Delete](./../sim/client-speos-sim.md#componentopticstudiocomponentopticstudiosurfaces) method to the **ComponentOpticStudio.ComponentOpticStudioSurfaces** nested API
  - Added [Clear](./../sim/client-speos-sim.md#componentopticstudiocomponentopticstudiosurfaces) method to the **ComponentOpticStudio.ComponentOpticStudioSurfaces** nested API
  - Added [ComponentOpticStudio.ComponentOpticStudioSources](./../sim/client-speos-sim.md#componentopticstudiocomponentopticstudiosources) as nested API of the **ComponentOpticStudio** API
  - Added [GeometryOpticsStudioSourceBody](./../sim/client-speos-sim.md#geometryopticsstudiosourcebody) API

### Simulation result - Improved visualization of results using transparency

Speos now permits to change the transparency of results displayed in 3D view, enhancing the visibility of underlying elements, and enabling more effective analyses such as ray tracing or Light Expert.

- SpeosOptionsConfiguration API
  - Added [ResultsTransparencyLevel](./../sim/client-speos-sim.md#speosoptionsconfiguration) property to the **SpeosOptionsConfiguration** API

### Libraries

As Ansys Optics Library is available in the installation package, Speos now offers a direct access to it through the Material Libraries folder.

- SpeosOptionsConfiguration API
  - Added [MaterialLibraryFolder](./../sim/client-speos-sim.md#speosoptionsconfiguration) property to the **SpeosOptionsConfiguration** API

### Optical Part Design - FreeformLens

Speos introduces a new type of Freeform Lens dedicated to create a sharp cut-off lens from a multichip LED. Such a lens is particularly efficient for road lighting (automotive or motorbike).
Thus, to create such a lens, new parameters have been introduced to define the Back Face of the Lens and the Target Beam rendering on the result.

- FreeformLens API
  - Added [GetSourceTypePossibleValues](./../des/client-speos-des.md#freeformlens) method to the **FreeformLens** API
  - Added [GetUserInputFaceSidePossibleValues](./../des/client-speos-des.md#freeformlens) method to the **FreeformLens** API
  - Added [SourceType](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [UserInputFaceSide](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [SourceBody](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [FaceSizeXMin](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [FaceSizeYMin](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [FaceSizeXMax](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [FaceSizeYMax](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [BackFocalLength](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [ThicknessCenter](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [BeamSizeXMin](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [BeamSizeYMin](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [BeamSizeXMax](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [BeamSizeYMax](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [BeamMaxTargetX](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [BeamMaxTargetY](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [BeamFocusAreaX](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [BeamFocusAreaY](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [SharpCutOffGradient](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [AboveLightAreaX](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [AboveLightAreaY](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [GlareLight](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [SwapVerticalRays](./../des/client-speos-des.md#freeformlens) property to the **FreeformLens** API
  - Added [FreeformLens.FreeformLensSourceBody](./../des/client-speos-des.md#freeformlensfreeformlenssourcebody) API to the **FreeformLens** API

### Optical Part Design - LightGuide

Hybrid mode of Light Guide is extremely flexible as prism could be inside or outside main body. To bring more flexibility, The Max prism height manufacturing parameter has been added to the Light Guide definition. It allows you to limit the height of each prism from the guide curve, preventing any collision with a mechanical element. Thus, you can optimize your light guide while considering various manufacturing and assembly constraints.

- LightGuide API
  - Added [GetPrismHeightTypePossibleValues](./../des/client-speos-des.md#lightguide) method to the **LightGuide** API
  - Added [PrismHeightType](./../des/client-speos-des.md#lightguide) property to the **LightGuide** API
  - Added [PrismHeightValue](./../des/client-speos-des.md#lightguide) property to the **LightGuide** API
  - Added [PrismHeightConfigurations](./../des/client-speos-des.md#lightguide) property to the **LightGuide** API.
  - Added [LightGuide.LightGuidePrismHeightConfigurations](./../des/client-speos-des.md#lightguidelightguideprismheightconfigurations) API to the **LightGuide** API

### Optical Part Design - Optical Surface/Optical Lens

With the Custom Contour tool, it is now possible to use multiple surfaces to trim the Optical Surface/Optical Lens. Usually, those multiple surfaces comes from style, mechanical, multiple parts assembly. Prior to version 2026 R1, only a surface body was allowed to perform the trimming action.

- OpticalFeatureGeneral API
  - Modified [ContourBody] property name to [ContourSurfaces](./../des/client-speos-des.md#opticalfeaturegeneral) property name of the **OpticalFeatureGeneral** API
  - Added [SurfacePointToKeep](./../des/client-speos-des.md#opticalfeaturegeneral) property to the **OpticalFeatureGeneral** API
  - Removed [OpticalFeatureGeneral.OpticalFeatureGeneralContourBody](./../des/client-speos-des.md#opticalfeaturegeneral) API from the **OpticalFeatureGeneral** API
  - Added [OpticalFeatureGeneral.OpticalFeatureGeneralContourSurfaces](./../des/client-speos-des.md#opticalfeaturegeneralopticalfeaturegeneralcontoursurfaces) API to the **OpticalFeatureGeneral** API

### Optical Part Design - TIR Lens

Total Internal Reflection Lens can now be defined using an optical axis that can be tilted with respect to the support plan where LED is placed.

- TIRLens API
  - Added [OpticalAxis](./../des/client-speos-des.md#tirlens) property to the **TIRLens** API
  - Modified [OutputRadius] property name to [OutputDiameter](./../des/client-speos-des.md#tirlens) property name of the **TIRLens** API
  - Modified [OutputRadiusOut] property name to [OutputDiameterOut](./../des/client-speos-des.md#tirlens) property name of the **TIRLens** API
  - Added [TIRLens.TIRLensOpticalAxis](./../des/client-speos-des.md#tirlenstirlensopticalaxis) API to the **TIRLens** API

### Other Improvements

- Command API
  - Added [UpdatePreviewCompute](./../sim/client-speos-sim.md#static-method) static method to the **Command** API

- SimulationIsolated API
  - Added [ExportFolder](./../sim/client-speos-sim.md#simulationisolated) property to the **SimulationIsolated** API
  - Added [ExportFolderFullPath](./../sim/client-speos-sim.md#simulationisolated) property to the **SimulationIsolated** API
  - Removed [SpeosSimulationFile](./../sim/client-speos-sim.md#simulationisolated) property from the **SimulationIsolated** API
  - Removed [SpeosSimulationFileFullPath](./../sim/client-speos-sim.md#simulationisolated) property from the **SimulationIsolated** API

- Surfaces API
  - Modified [SpeosOpticStudioSurfaceAperture] property name to [SurfaceAperture](./../sim/client-speos-sim.md#surfaces) property name of the **Surfaces** API
  - Added [MaxHalfWidthX](./../sim/client-speos-sim.md#surfaces) property to the **Surfaces** API
  - Added [MinHalfWidthX](./../sim/client-speos-sim.md#surfaces) property to the **Surfaces** API
  - Added [MaxHalfWidthY](./../sim/client-speos-sim.md#surfaces) property to the **Surfaces** API
  - Added [MinHalfWidthY](./../sim/client-speos-sim.md#surfaces) property to the **Surfaces** API
  - Added [OriginPoint](./../sim/client-speos-sim.md#surfaces) property to the **Surfaces** API
  - Added [XDirection](./../sim/client-speos-sim.md#surfaces) property to the **Surfaces** API
  - Added [YDirection](./../sim/client-speos-sim.md#surfaces) property to the **Surfaces** API
  - Added [Surfaces.SurfacesOriginPoint](./../sim/client-speos-sim.md#surfacessurfacesoriginpoint) API to the **Surfaces** API
  - Added [Surfaces.SurfacesXDirection](./../sim/client-speos-sim.md#surfacessurfacesxdirection) API to the **Surfaces** API
  - Added [Surfaces.SurfacesYDirection](./../sim/client-speos-sim.md#surfacessurfacesydirection) API to the **Surfaces** API