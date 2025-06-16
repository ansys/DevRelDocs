# Changelog

## Version 2025 R2

### New APIs

- `exportProject()`: Exports selected project data/files into a .zip file.
- `updatePartsListValidationProps()`: Sets properties for the Part List Validation analysis.
- `addModelingRegion()`: Adds a list of modeling regions for display in a specified CCA's Layer Viewer.
- `createCCAFromModelingRegion()`: Creates a list of CCAs from already existing modeling regions
- `updateModelingRegion()`: Updates a list of existing modeling regions in a specified CCA's Layer Viewer.
- `updatePottingRegion()`: Updates the fields in pre-existing potting region(s).
- `deletePottingRegion()`: Deletes pre-existing potting region(s).
- `copyPottingRegion()`: Copies pre-existing potting region(s).
- `deleteModelingRegion()`: Deletes a list of existing modeling regions.
- `copyModelingRegion()`: Copies a list of existing modeling regions.
- `getPartsListValidationProps()`: Obtains the Parts List Validation analysis properties for a CCA.

### Modified APIs

- Error messages 'Missing cca name and Missing cca description' have been changed to 'Missing CCA name and Missing CCA description'.
- When a Part Library does not exist when running the `updatePartsList()` API, the error message has been changed from:
`Part library does not exist`
  to
`Part library does not exist: <part library name>`
where `<part library name>` is the name of the Part Library used when invoking the API.
- Moved `MatchingMode` enum {} definition from Parts Service to Common Service.
- Added the ability to get the Sherlock version and default directory to a Sherlock API.
- Updated `updateNaturalFrequencyProps()` API to reject `naturalFreqMin` and `naturalFreqMax` if integer values are not contained in both of these fields.

### API bug fixes

- Corrected an issue with `addPottingRegion()` API where the rotation was not being used during the drawing process.
- When using an API to run a Thermal Mech Analysis, Sherlock was not clearing previously selected Events and, so, was using all previously selected Events when running the `runAnalysis()` API. Now, Sherlock runs only those Events specified in the `runAnalysis()` request.
- When running the Update Laminate API, you can now enter a non-default value for the glass construction resin percentage. Previously, non-default values caused the API to fail.

### Deprecated APIs

- The nested PottingRegion message `AddPottingRegionRequest.PottingRegion` is being deprecated. It will be moved outside of the `AddPottingRegionRequest` message. It will then be referred to as `PottingRegion`, not `AddPottingRegionRequest.PottingRegion`.
