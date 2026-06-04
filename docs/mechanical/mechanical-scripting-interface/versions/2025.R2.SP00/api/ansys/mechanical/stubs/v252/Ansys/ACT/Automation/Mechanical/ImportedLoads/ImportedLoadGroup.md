# `ImportedLoadGroup`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedLoadGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedLoadGroup.Activate)                                                                                       | Activate the current object.                                                                                                 |
| [`AddComment`](#ImportedLoadGroup.AddComment)                                                                                   | Creates a new child Comment.                                                                                                 |
| [`AddFigure`](#ImportedLoadGroup.AddFigure)                                                                                     | Creates a new child Figure.                                                                                                  |
| [`AddImage`](#ImportedLoadGroup.AddImage)                                                                                       | Creates a new child Image.                                                                                                   |
| [`AddImportedBodyForceDensity`](#ImportedLoadGroup.AddImportedBodyForceDensity)                                                 | Creates a new ImportedBodyForceDensity                                                                                       |
| [`AddImportedBodyTemperature`](#ImportedLoadGroup.AddImportedBodyTemperature)                                                   | Creates a new ImportedBodyTemperature                                                                                        |
| [`AddImportedCFDPressure`](#ImportedLoadGroup.AddImportedCFDPressure)                                                           | Creates a new Imported CFD Pressure object to map pressure loading read from a Fluent-Mechanical coupling data (.cgns) file. |
| [`AddImportedConvection`](#ImportedLoadGroup.AddImportedConvection)                                                             | Creates a new ImportedConvection                                                                                             |
| [`AddImportedCutBoundaryConstraint`](#ImportedLoadGroup.AddImportedCutBoundaryConstraint)                                       | Creates a new ImportedDisplacement                                                                                           |
| [`AddImportedCutBoundaryRemoteConstraint`](#ImportedLoadGroup.AddImportedCutBoundaryRemoteConstraint)                           | Creates a new ImportedCutBoundaryRemoteConstraint                                                                            |
| [`AddImportedCutBoundaryRemoteForce`](#ImportedLoadGroup.AddImportedCutBoundaryRemoteForce)                                     | Creates a new ImportedCutBoundaryRemoteForce                                                                                 |
| [`AddImportedDisplacement`](#ImportedLoadGroup.AddImportedDisplacement)                                                         | Creates a new ImportedDisplacement                                                                                           |
| [`AddImportedElementOrientation`](#ImportedLoadGroup.AddImportedElementOrientation)                                             | Creates a new ImportedElementOrientation                                                                                     |
| [`AddImportedFiberRatio`](#ImportedLoadGroup.AddImportedFiberRatio)                                                             | Creates a new ImportedFiberRatio                                                                                             |
| [`AddImportedForce`](#ImportedLoadGroup.AddImportedForce)                                                                       | Creates a new ImportedForce                                                                                                  |
| [`AddImportedHeatFlux`](#ImportedLoadGroup.AddImportedHeatFlux)                                                                 | Creates a new ImportedHeatFlux                                                                                               |
| [`AddImportedHeatGeneration`](#ImportedLoadGroup.AddImportedHeatGeneration)                                                     | Creates a new ImportedHeatGeneration                                                                                         |
| [`AddImportedInitialStrain`](#ImportedLoadGroup.AddImportedInitialStrain)                                                       | Creates a new ImportedInitialStrain                                                                                          |
| [`AddImportedInitialStress`](#ImportedLoadGroup.AddImportedInitialStress)                                                       | Creates a new ImportedInitialStress                                                                                          |
| [`AddImportedMaterialField`](#ImportedLoadGroup.AddImportedMaterialField)                                                       | Creates a new ImportedMaterialField                                                                                          |
| [`AddImportedPressure`](#ImportedLoadGroup.AddImportedPressure)                                                                 | Creates a new ImportedPressure                                                                                               |
| [`AddImportedSurfaceForceDensity`](#ImportedLoadGroup.AddImportedSurfaceForceDensity)                                           | Creates a new ImportedSurfaceForceDensity                                                                                    |
| [`AddImportedTemperature`](#ImportedLoadGroup.AddImportedTemperature)                                                           | Creates a new ImportedTemperature                                                                                            |
| [`AddImportedThickness`](#ImportedLoadGroup.AddImportedThickness)                                                               | Creates a new ImportedThickness                                                                                              |
| [`AddImportedTrace`](#ImportedLoadGroup.AddImportedTrace)                                                                       | Creates a new ImportedTrace                                                                                                  |
| [`AddImportedVelocity`](#ImportedLoadGroup.AddImportedVelocity)                                                                 | Creates a new ImportedVelocity                                                                                               |
| [`AddImportedWarpWeftRatio`](#ImportedLoadGroup.AddImportedWarpWeftRatio)                                                       | Creates a new ImportedWarpWeftRatio                                                                                          |
| [`AddImportedYarnAngle`](#ImportedLoadGroup.AddImportedYarnAngle)                                                               | Creates a new ImportedYarnAngle                                                                                              |
| [`ClearGeneratedData`](#ImportedLoadGroup.ClearGeneratedData)                                                                   | Run the ClearGeneratedData action.                                                                                           |
| [`CopyTo`](#ImportedLoadGroup.CopyTo)                                                                                           | Copies all visible properties from this object to another.                                                                   |
| [`CreateBodyForceDensitiesAndSyncAnalysisSettings`](#ImportedLoadGroup.CreateBodyForceDensitiesAndSyncAnalysisSettings)         | Create body force densities for all RPMs.                                                                                    |
| [`CreateExternalLoadVelocitiesAndSyncAnalysisSettings`](#ImportedLoadGroup.CreateExternalLoadVelocitiesAndSyncAnalysisSettings) | Run the CreateExternalLoadVelocitiesAndSyncAnalysisSettings action.                                                          |
| [`CreateParameter`](#ImportedLoadGroup.CreateParameter)                                                                         | Creates a new parameter for a Property.                                                                                      |
| [`CreateSurfaceForceDensitiesAndSyncAnalysisSettings`](#ImportedLoadGroup.CreateSurfaceForceDensitiesAndSyncAnalysisSettings)   | Create surface force densities for all RPMs.                                                                                 |
| [`Delete`](#ImportedLoadGroup.Delete)                                                                                           | Run the Delete action.                                                                                                       |
| [`Duplicate`](#ImportedLoadGroup.Duplicate)                                                                                     | Creates a copy of the current DataModelObject.                                                                               |
| [`GetChildren`](#ImportedLoadGroup.GetChildren)                                                                                 | Gets the list of children, filtered by type.                                                                                 |
| [`GetExternalDataFiles`](#ImportedLoadGroup.GetExternalDataFiles)                                                               |                                                                                                                              |
| [`GetParameter`](#ImportedLoadGroup.GetParameter)                                                                               | Gets the parameter corresponding to the given property.                                                                      |
| [`GroupAllSimilarChildren`](#ImportedLoadGroup.GroupAllSimilarChildren)                                                         | Run the GroupAllSimilarChildren action.                                                                                      |
| [`GroupSimilarObjects`](#ImportedLoadGroup.GroupSimilarObjects)                                                                 | Run the GroupSimilarObjects action.                                                                                          |
| [`ImportExternalDataFiles`](#ImportedLoadGroup.ImportExternalDataFiles)                                                         |                                                                                                                              |
| [`ImportLoad`](#ImportedLoadGroup.ImportLoad)                                                                                   | Run the ImportLoad action.                                                                                                   |
| [`PropertyByAPIName`](#ImportedLoadGroup.PropertyByAPIName)                                                                     | Get a property by its API name.                                                                                              |
| [`PropertyByName`](#ImportedLoadGroup.PropertyByName)                                                                           | Get a property by its unique name.                                                                                           |
| [`RefreshImportedLoad`](#ImportedLoadGroup.RefreshImportedLoad)                                                                 | Run the RefreshImportedLoad action.                                                                                          |
| [`ReloadExternalDataFiles`](#ImportedLoadGroup.ReloadExternalDataFiles)                                                         | Reloads the external data files for current Imported Load Group.                                                             |
| [`RemoveParameter`](#ImportedLoadGroup.RemoveParameter)                                                                         | Removes the parameter from the parameter set corresponding to the given property.                                            |
| [`SetResultFile`](#ImportedLoadGroup.SetResultFile)                                                                             | Sets the ResultFile with unitSystem supplied. For MAPDL Results File without a unit system.                                  |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Children`](#ImportedLoadGroup.Children)                                                 | Gets the list of children.                                             |
| [`Comments`](#ImportedLoadGroup.Comments)                                                 | Gets the list of associated comments.                                  |
| [`DataModelObjectCategory`](#ImportedLoadGroup.DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`DeleteMappedDataFilesAfterImport`](#ImportedLoadGroup.DeleteMappedDataFilesAfterImport) | Gets or sets the DeleteMappedDataFilesAfterImport.                     |
| [`Figures`](#ImportedLoadGroup.Figures)                                                   | Gets the list of associated figures.                                   |
| [`FilesDirectory`](#ImportedLoadGroup.FilesDirectory)                                     | Gets the FilesDirectory.                                               |
| [`Images`](#ImportedLoadGroup.Images)                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#ImportedLoadGroup.InternalObject)                                     | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ImportedLoadGroup.Properties)                                             | Gets the list of properties for this object.                           |
| [`ResultFile`](#ImportedLoadGroup.ResultFile)                                             | Gets or sets the ResultFile.                                           |
| [`ResultFileTimestamp`](#ImportedLoadGroup.ResultFileTimestamp)                           | Gets the ResultFileTimestamp.                                          |
| [`ResultFileUnitSystem`](#ImportedLoadGroup.ResultFileUnitSystem)                         | Gets or sets the ResultFileUnitSystem.                                 |
| [`Source`](#ImportedLoadGroup.Source)                                                     | Gets the Source.                                                       |
| [`SourceDimension`](#ImportedLoadGroup.SourceDimension)                                   | Gets or sets the SourceDimension.                                      |
| [`Suppressed`](#ImportedLoadGroup.Suppressed)                                             | Gets or sets the Suppressed.                                           |
| [`TransferStep`](#ImportedLoadGroup.TransferStep)                                         | Controls which additive simulation step is used for the data transfer. |
| [`TransferTemperaturesDuringSolve`](#ImportedLoadGroup.TransferTemperaturesDuringSolve)   | Gets or sets the TransferTemperaturesDuringSolve.                      |
| [`VisibleProperties`](#ImportedLoadGroup.VisibleProperties)                               | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="ImportedLoadGroup.Children"></a>

### *property* ImportedLoadGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.Comments"></a>

### *property* ImportedLoadGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.DataModelObjectCategory"></a>

### *property* ImportedLoadGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.DeleteMappedDataFilesAfterImport"></a>

### *property* ImportedLoadGroup.DeleteMappedDataFilesAfterImport *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteMappedDataFilesAfterImport.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.Figures"></a>

### *property* ImportedLoadGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.FilesDirectory"></a>

### *property* ImportedLoadGroup.FilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.Images"></a>

### *property* ImportedLoadGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.InternalObject"></a>

### *property* ImportedLoadGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.Properties"></a>

### *property* ImportedLoadGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.ResultFile"></a>

### *property* ImportedLoadGroup.ResultFile *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFile.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.ResultFileTimestamp"></a>

### *property* ImportedLoadGroup.ResultFileTimestamp *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileTimestamp.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.ResultFileUnitSystem"></a>

### *property* ImportedLoadGroup.ResultFileUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFileUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.Source"></a>

### *property* ImportedLoadGroup.Source *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Source.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.SourceDimension"></a>

### *property* ImportedLoadGroup.SourceDimension *: [Ansys.Mechanical.DataModel.Enums.SourceDimension](../../../../Mechanical/DataModel/Enums/SourceDimension.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SourceDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceDimension.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.Suppressed"></a>

### *property* ImportedLoadGroup.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.TransferStep"></a>

### *property* ImportedLoadGroup.TransferStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls which additive simulation step is used for the data transfer.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.TransferTemperaturesDuringSolve"></a>

### *property* ImportedLoadGroup.TransferTemperaturesDuringSolve *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransferTemperaturesDuringSolve.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.VisibleProperties"></a>

### *property* ImportedLoadGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedLoadGroup.Activate"></a>

### ImportedLoadGroup.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddComment"></a>

### ImportedLoadGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddFigure"></a>

### ImportedLoadGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImage"></a>

### ImportedLoadGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedBodyForceDensity"></a>

### ImportedLoadGroup.AddImportedBodyForceDensity() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedBodyForceDensity](ImportedBodyForceDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedBodyForceDensity)

Creates a new ImportedBodyForceDensity

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedBodyTemperature"></a>

### ImportedLoadGroup.AddImportedBodyTemperature() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedBodyTemperature](ImportedBodyTemperature.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedBodyTemperature)

Creates a new ImportedBodyTemperature

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedCFDPressure"></a>

### ImportedLoadGroup.AddImportedCFDPressure() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedPressure](ImportedPressure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedPressure)

Creates a new Imported CFD Pressure object to map pressure loading read from a Fluent-Mechanical coupling data (.cgns) file.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedConvection"></a>

### ImportedLoadGroup.AddImportedConvection() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedConvection](ImportedConvection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedConvection)

Creates a new ImportedConvection

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedCutBoundaryConstraint"></a>

### ImportedLoadGroup.AddImportedCutBoundaryConstraint() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedDisplacement](ImportedDisplacement.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedDisplacement)

Creates a new ImportedDisplacement

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedCutBoundaryRemoteConstraint"></a>

### ImportedLoadGroup.AddImportedCutBoundaryRemoteConstraint() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteConstraint](ImportedCutBoundaryRemoteConstraint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteConstraint)

Creates a new ImportedCutBoundaryRemoteConstraint

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedCutBoundaryRemoteForce"></a>

### ImportedLoadGroup.AddImportedCutBoundaryRemoteForce() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteForce](ImportedCutBoundaryRemoteForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteForce)

Creates a new ImportedCutBoundaryRemoteForce

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedDisplacement"></a>

### ImportedLoadGroup.AddImportedDisplacement() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedDisplacement](ImportedDisplacement.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedDisplacement)

Creates a new ImportedDisplacement

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedElementOrientation"></a>

### ImportedLoadGroup.AddImportedElementOrientation() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedElementOrientation](ImportedElementOrientation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedElementOrientation)

Creates a new ImportedElementOrientation

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedFiberRatio"></a>

### ImportedLoadGroup.AddImportedFiberRatio() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedFiberRatio](ImportedFiberRatio.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedFiberRatio)

Creates a new ImportedFiberRatio

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedForce"></a>

### ImportedLoadGroup.AddImportedForce() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedForce](ImportedForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedForce)

Creates a new ImportedForce

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedHeatFlux"></a>

### ImportedLoadGroup.AddImportedHeatFlux() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatFlux](ImportedHeatFlux.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatFlux)

Creates a new ImportedHeatFlux

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedHeatGeneration"></a>

### ImportedLoadGroup.AddImportedHeatGeneration() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatGeneration](ImportedHeatGeneration.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatGeneration)

Creates a new ImportedHeatGeneration

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedInitialStrain"></a>

### ImportedLoadGroup.AddImportedInitialStrain() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedInitialStrain](ImportedInitialStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedInitialStrain)

Creates a new ImportedInitialStrain

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedInitialStress"></a>

### ImportedLoadGroup.AddImportedInitialStress() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedInitialStress](ImportedInitialStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedInitialStress)

Creates a new ImportedInitialStress

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedMaterialField"></a>

### ImportedLoadGroup.AddImportedMaterialField() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedMaterialField](ImportedMaterialField.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedMaterialField)

Creates a new ImportedMaterialField

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedPressure"></a>

### ImportedLoadGroup.AddImportedPressure() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedPressure](ImportedPressure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedPressure)

Creates a new ImportedPressure

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedSurfaceForceDensity"></a>

### ImportedLoadGroup.AddImportedSurfaceForceDensity() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedSurfaceForceDensity](ImportedSurfaceForceDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedSurfaceForceDensity)

Creates a new ImportedSurfaceForceDensity

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedTemperature"></a>

### ImportedLoadGroup.AddImportedTemperature() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTemperature](ImportedTemperature.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTemperature)

Creates a new ImportedTemperature

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedThickness"></a>

### ImportedLoadGroup.AddImportedThickness() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedThickness](ImportedThickness.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedThickness)

Creates a new ImportedThickness

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedTrace"></a>

### ImportedLoadGroup.AddImportedTrace() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTrace](ImportedTrace.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTrace)

Creates a new ImportedTrace

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedVelocity"></a>

### ImportedLoadGroup.AddImportedVelocity() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedVelocity](ImportedVelocity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedVelocity)

Creates a new ImportedVelocity

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedWarpWeftRatio"></a>

### ImportedLoadGroup.AddImportedWarpWeftRatio() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedWarpWeftRatio](ImportedWarpWeftRatio.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedWarpWeftRatio)

Creates a new ImportedWarpWeftRatio

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.AddImportedYarnAngle"></a>

### ImportedLoadGroup.AddImportedYarnAngle() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedYarnAngle](ImportedYarnAngle.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedYarnAngle)

Creates a new ImportedYarnAngle

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.ClearGeneratedData"></a>

### ImportedLoadGroup.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.CopyTo"></a>

### ImportedLoadGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.CreateBodyForceDensitiesAndSyncAnalysisSettings"></a>

### ImportedLoadGroup.CreateBodyForceDensitiesAndSyncAnalysisSettings() → [None](https://docs.python.org/3/library/constants.html#None)

Create body force densities for all RPMs.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.CreateExternalLoadVelocitiesAndSyncAnalysisSettings"></a>

### ImportedLoadGroup.CreateExternalLoadVelocitiesAndSyncAnalysisSettings() → [None](https://docs.python.org/3/library/constants.html#None)

Run the CreateExternalLoadVelocitiesAndSyncAnalysisSettings action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.CreateParameter"></a>

### ImportedLoadGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.CreateSurfaceForceDensitiesAndSyncAnalysisSettings"></a>

### ImportedLoadGroup.CreateSurfaceForceDensitiesAndSyncAnalysisSettings() → [None](https://docs.python.org/3/library/constants.html#None)

Create surface force densities for all RPMs.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.Delete"></a>

### ImportedLoadGroup.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.Duplicate"></a>

### ImportedLoadGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.GetChildren"></a>

### ImportedLoadGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.GetExternalDataFiles"></a>

### ImportedLoadGroup.GetExternalDataFiles() → [Ansys.Mechanical.ExternalData.ExternalDataFileCollection](../../../../Mechanical/ExternalData/ExternalDataFileCollection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFileCollection)

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.GetParameter"></a>

### ImportedLoadGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.GroupAllSimilarChildren"></a>

### ImportedLoadGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.GroupSimilarObjects"></a>

### ImportedLoadGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.ImportExternalDataFiles"></a>

### ImportedLoadGroup.ImportExternalDataFiles(externalDataFiles: [Ansys.Mechanical.ExternalData.ExternalDataFileCollection](../../../../Mechanical/ExternalData/ExternalDataFileCollection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.ExternalData.ExternalDataFileCollection)) → [None](https://docs.python.org/3/library/constants.html#None)

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.ImportLoad"></a>

### ImportedLoadGroup.ImportLoad() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.PropertyByAPIName"></a>

### ImportedLoadGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.PropertyByName"></a>

### ImportedLoadGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.RefreshImportedLoad"></a>

### ImportedLoadGroup.RefreshImportedLoad() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RefreshImportedLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.ReloadExternalDataFiles"></a>

### ImportedLoadGroup.ReloadExternalDataFiles() → [None](https://docs.python.org/3/library/constants.html#None)

Reloads the external data files for current Imported Load Group.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.RemoveParameter"></a>

### ImportedLoadGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadGroup.SetResultFile"></a>

### ImportedLoadGroup.SetResultFile(resultFile: [str](https://docs.python.org/3/library/stdtypes.html#str), unitSystem: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the ResultFile with unitSystem supplied. For MAPDL Results File without a unit system.

<!-- !! processed by numpydoc !! -->

