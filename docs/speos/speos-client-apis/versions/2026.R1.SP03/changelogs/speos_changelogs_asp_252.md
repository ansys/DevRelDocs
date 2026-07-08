# Speos Changelog 2025 R2

## New Features

### Ambient Source Modtran

**BETA feature**: As of version 2025 R2, you can create a Speos MODTRAN source using as input a radiance map file (.tp5, .json) generated out of the MODTRAN software. Therefore, you can simulate radiative transfer in the Earth's atmosphere by modeling the transmission of light through the atmosphere considering a complete spectrum from ultraviolet (UV) to far-infrared (FIR).

- Added [SourceAmbientModtran](./../sim/client-speos-sim.md#sourceambientmodtran) API
- Added [SourceAmbientModtran](./../sim/client-speos-sim.md#sensorradiance) method to the **SensorRadiance** API

### glTF Import

As of version 2025 R2, Speos can import glTF file formats. Thanks to glTF file formats, you can import and access assets (geometries + appearance properties) in Speos allowing you to create and simulate scenes with highly detailed models.

- Added [ImportGltf](./../sim/client-speos-sim.md#static-method) static methods to the **Command** API

## Improvements

### Optical Design Exchange: Material management

As of version 2025 R2, the Optical Design Exchange workflow has been improved to provide you with a better user experience.

- The optical properties information are no longer integrated to the ODX feature. Now upon compute of an ODX feature, imported optical properties information are created as Material features in the Speos Simulation tree, and imported geometries are directly referenced in their respective Material features.
- The meshing information are no longer integrated to the ODX feature. Now upon compute of an ODX feature, imported meshing information are created as a Local Meshing feature in the Speos Simulation tree, and imported geometries are directly referenced the Local Meshing feature.

As a consequence, the worklow has been standardized to correspond to a classical Speos workflow: indeed, you can now directly add to a Speos simulation the imported geometries from the Structure tree, as Materials and Local Meshing reference the geometries.

The following changes have been made to the Speos API, impacting different APIs:

- Sop API
  - Removed [Sop](./../sim/client-speos-sim.md) API
- Vop API
  - Removed [Vop](./../sim/client-speos-sim.md) API
- ComponentOpticStudio API
  - Added [UpdateMaterialsOnly](./../sim/client-speos-sim.md#componentopticstudio) property to the **ComponentOpticStudio** API
  - Removed [GetGeometrySettings](./../sim/client-speos-sim.md#componentopticstudio) static methods from the **ComponentOpticStudio** API
- GeometryOpticsStudio API
  - Removed [FrontFaces](./../sim/client-speos-sim.md#geometryopticsstudio) properties from the **GeometryOpticsStudio** API
  - Removed [BackFaces](./../sim/client-speos-sim.md#geometryopticsstudio) properties from the **GeometryOpticsStudio** API
  - Removed [EdgeFaces](./../sim/client-speos-sim.md#geometryopticsstudio) properties from the **GeometryOpticsStudio** API
  - Removed [NewFaces](./../sim/client-speos-sim.md#geometryopticsstudio) properties from the **GeometryOpticsStudio** API
- Lenses API
  - Removed [MoveToFront](./../sim/client-speos-sim.md#lenses) method from the **Lenses** API
  - Removed [MoveToBack](./../sim/client-speos-sim.md#lenses) method from the **Lenses** API
  - Removed [MoveToEdge](./../sim/client-speos-sim.md#lenses) method from the **Lenses** API
  - Removed [FrontFaceSOP](./../sim/client-speos-sim.md#lenses) property from the **Lenses** API
  - Removed [BackFaceSOP](./../sim/client-speos-sim.md#lenses) property from the **Lenses** API
  - Removed [EdgeFaceSOP](./../sim/client-speos-sim.md#lenses) property from the **Lenses** API
  - Removed [FrontFaces](./../sim/client-speos-sim.md#lenses) property from the **Lenses** API
  - Removed [BackFaces](./../sim/client-speos-sim.md#lenses) property from the **Lenses** API
  - Removed [EdgeFaces](./../sim/client-speos-sim.md#lenses) property from the **Lenses** API
  - Removed [NewFaces](./../sim/client-speos-sim.md#lenses) property from the **Lenses** API
- Material API
  - Added [SopAppearancePath](./../sim/client-speos-sim.md#material) properties to the **Material** API
- Surfaces API
  - Removed [SurfaceOpticalProperties](./../sim/client-speos-sim.md#surfaces) property from the **Surfaces** API
  - Removed [FrontFaces](./../sim/client-speos-sim.md#surfaces) property from the **Surfaces** API
  - Removed [BackFaces](./../sim/client-speos-sim.md#surfaces) property from the **Surfaces** API
  - Removed [EdgeFaces](./../sim/client-speos-sim.md#surfaces) property from the **Surfaces** API
  - Removed [NewFaces](./../sim/client-speos-sim.md#surfaces) property from the **Surfaces** API

### Optical Design Exchange: Lenses with apertures

As of version 2025 R2, the Optical Design Exchange feature supports *.odx file exported from Ansys Zemax OpticStudio containing lenses with rectangular, elliptical, or circular apertures defined on surface.

As a consequence, the following changes have been made to the Speos API, impacting different APIs:

- Lenses API
  - Added [BackFaceAperture](./../sim/client-speos-sim.md#lenses) property to the **Lenses** API
  - Added [FrontFaceAperture](./../sim/client-speos-sim.md#lenses) property to the **Lenses** API
- SurfaceAperture API
  - Added new [SurfaceAperture](./../sim/client-speos-sim.md#surfaceaperture) API
- Surfaces API
  - Added [SpeosOpticStudioSurfaceAperture](./../sim/client-speos-sim.md#surfaces) property to the **Surfaces** API

### Light Guide

Light Guide milling parameters now allow you to apply a fillet on the Side of the prisms
(Side milling) and the Border between the Light Guide body and the prisms (Border milling). Previously
only Top and Bottom prism millings were available.

- Added [GetSideMillingTypePossibleValues](./../des/client-speos-des.md#lightguide) method to the **LightGuide** API
- Added [GetBorderMillingTypePossibleValues](./../des/client-speos-des.md#lightguide) method to the **LightGuide** API
- Added [SideMilling](./../des/client-speos-des.md#lightguide) properties to the **LightGuide** API
- Added [BorderMilling](./../des/client-speos-des.md#lightguide) properties to the **LightGuide** API
