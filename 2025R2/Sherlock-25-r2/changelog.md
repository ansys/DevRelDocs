# Changelog

## Version 2025 R2

### New APIs

- `listLayers()`: Lists all available layers as seen in the Layer Viewer for a project CCA.
- `exportLayerImage()`: Exports one or more 2D Layer Viewer images from a project CCA.
- `updateComponentFailureMechanismProps()`: Updates the Component Failure Mechanism analysis properties.
- `getSolderInfo()`: Returns solder information including names, types, and modulus values.
- `updateSemiconductorWearoutProps()`: Sets properties for Semiconductor Wearout analysis.
- `updatePTHFatigueProps()`: Sets properties for Plated Through Hole fatigue analysis.
- `updatePadProperties()`: Sets PCB pad properties for one or more parts.
- `getPartsListProperties()`: Retrieves properties for parts in the Parts List.
- `deletePartsFromPartsList()`: Removes parts from the Parts List.
- `importGDSIIFile()`: Imports a GDSII file and any optional, associated configuration files.
- `addOutlineFiles()`: Adds outline files in CSV/Excel, Gerber, or IPC-2581 format.

### Modified APIs

- `addThermalMaps()` and `updateThermalMaps()`: Now include an optional "Add Temperature Offset" parameter.

### API bug fixes

- Updated `addShockProfiles()` API to return proper error for invalid non-shock phase/event names.
- Fixed `updateHarmonicVibeProps()` API accepting invalid harmonicVibeCount values.
