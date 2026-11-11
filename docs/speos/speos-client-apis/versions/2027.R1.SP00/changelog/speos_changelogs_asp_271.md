# Speos Changelog 2027 R1

**Release date:** 2026-12-07

## Improvements

### Component Optic Studio - Geometrical Envelope

As of version 2027 R1, the Optical Design Exchange feature can create a geometrical envelope around an imported optical system. This surrounding mechanical structure eliminates the need to manually model housing geometry around lens assemblies, accelerating the creation of complete optical scenes for stray-light analysis.

- [ComponentOpticStudio](./../sim/client-speos-sim.md#componentopticstudio) API
  - Added [HasGeometricalEnvelope](./../sim/client-speos-sim.md#componentopticstudio) property to the **ComponentOpticStudio** API

### Modeler Move/Cut/Combine

As of version 2027 R1, the Optical Part Design Compute Sequence provides history-based operation tracking for optical part design features, enabling automatic rebuilds and design iteration directly within Speos. By recording parametric-like operations (Move, Cut, Combine), the compute sequence builds a dependency graph visualized in the Parent/Children panel. This brings SpaceClaim-style direct modeling capabilities to optical workflows.

- [ModelerMove](./../des/client-speos-des.md#modelermove) API
  - Added [ModelerMove.ModelerMoveOrigins](./../des/client-speos-des.md#modelermovemodelermoveorigins) nested API to the **ModelerMove** API
  - Added [ModelerMove.ModelerMoveReferenceCoordinateSystem](./../des/client-speos-des.md#modelermovemodelermovereferencecoordinatesystem) nested API to the **ModelerMove** API
  - Added [ModelerMove.ModelerMoveTargetSelectionsAxisSystem](./../des/client-speos-des.md#modelermovemodelermovetargetselectionsaxissystem) nested API to the **ModelerMove** API
  - Added [ModelerMove.ModelerMoveTargetSelectionsBodies](./../des/client-speos-des.md#modelermovemodelermovetargetselectionsbodies) nested API to the **ModelerMove** API
- [ModelerCut](./../des/client-speos-des.md#modelercut) API
  - Added [ModelerCut.ModelerCutCutterObjects](./../des/client-speos-des.md#modelercutmodelercutcutterobjects) nested API to the **ModelerCut** API
  - Added [ModelerCut.ModelerCutTargetBody](./../des/client-speos-des.md#modelercutmodelercuttargetbody) nested API to the **ModelerCut** API
- [ModelerCombine](./../des/client-speos-des.md#modelercombine) API
  - Added [ModelerCombine.ModelerCombineBodiesSelection](./../des/client-speos-des.md#modelercombinemodelercombinebodiesselection) nested API to the **ModelerCombine** API

### OPD TIR Angular Section

As of version 2027 R1, TIR Lenses now support asymmetric light distributions, enabling precise control over non-circular beam patterns such as elliptical, or fully custom shapes.
Previously, TIR lenses could only create circular light distributions with uniform spread around the optical axis. With this enhancement, you can now design lenses that produce directional lighting patterns tailored to your specific application needs.
This feature opens new possibilities for automotive lighting, architectural applications, and industrial lighting systems that require directional or shaped illumination patterns.

- [OsdTirAngularSection](./../des/client-speos-des.md#osdtirangularsection) API
- [TIRLens](./../des/client-speos-des.md#tirlens) API
  - Added [TIRLens.TIRLensAngularSections](./../des/client-speos-des.md#tirlenstirlensangularsections) nested API to the **TIRLens** API
  - Added [TIRLens.TIRLensOrientationAxis](./../des/client-speos-des.md#tirlenstirlensorientationaxis) nested API to the **TIRLens** API
  - Removed [Depth](./../des/client-speos-des.md#tirlens) property from the **TIRLens** API
  - Removed [DepthText](./../des/client-speos-des.md#tirlens) property from the **TIRLens** API
  - Added [AngularSections](./../des/client-speos-des.md#tirlens) property to the **TIRLens** API
  - Added [OrientationAxis](./../des/client-speos-des.md#tirlens) property to the **TIRLens** API
  - Added [ReverseOrientationAxisDirection](./../des/client-speos-des.md#tirlens) property to the **TIRLens** API
  - Added [Symmetry](./../des/client-speos-des.md#tirlens) property to the **TIRLens** API
  - Added [SymmetryIndex](./../des/client-speos-des.md#tirlens) property to the **TIRLens** API

### Result LXP - Light Cone

As of version 2027 R1, the new Light Cone feature provides a 3D volumetric representation of light propagation, bridging optical and mechanical design workflows. This tool generates CAD-ready light envelopes that help mechanical designers avoid interfering with illumination zones without manual reconstruction. For optical engineers, Light Cone simplifies stray light analysis and baffle placement by representing ray bundles as volumes rather than lines, making unwanted light paths easier to identify and block. Users can leverage Light Expert capabilities to adjust optical paths before converting them into light cones.

- [ResultLXP](./../sim/client-speos-sim.md#resultlxp) API
  - Added [ExportAsLightCone](./../sim/client-speos-sim.md#resultlxp) method to the **ResultLXP** API
  - Added [LightConeType](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API
  - Added [LightConeTypeIndex](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API
  - Added [RayLengthInfinite](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API
  - Added [RayLengthInfiniteText](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API
  - Added [ShowLightCone](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API

### Result LXP - Ray length at infinity

Ray length at infinity is a new parameter available in LPF definitions that defines the length of the rays after their last impact if:

- the ray is not integrated in a sensor that stops its progression
- the ray can continue its path (meaning has enough energy to continue)
- its last impact is a material (or has encountered anything and is just travelling through the infinity)

This parameter is especially useful when working with intensity sensors, which are defined at infinity by their nature, or to identify rays that continue through infinity.

- [ResultLXP](./../sim/client-speos-sim.md#resultlxp) API
  - Added [RayLengthInfinite](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API
  - Added [RayLengthInfiniteText](./../sim/client-speos-sim.md#resultlxp) property to the **ResultLXP** API

### Speos Options Configuration - Keep meshing in memory cache

As of version 2027 R1, the new Keep meshing in memory cache lets you cache the geometry meshing generated during simulation initialization. Subsequent simulation runs reuses the cached mesh instead of recalculating it, reducing overall simulation time. This feature, enabled by default, can be toggled off: the mesh is then recalculated during every initialization.

- [SpeosOptionsConfiguration](./../sim/client-speos-sim.md#speosoptionsconfiguration) API
  - Added [KeepMeshingInMemoryCache](./../sim/client-speos-sim.md#speosoptionsconfiguration) property to the **SpeosOptionsConfiguration** API

### Command - Get warning as exception

As of version 2027 R1, you can now disable Popup errors from the solver by capturing them via a kernel director callback instead.

- [Command](./../sim/client-speos-sim.md#command) API
  - Added [GetWarningAsException](./../sim/client-speos-sim.md#command) method to the **Command** API
  