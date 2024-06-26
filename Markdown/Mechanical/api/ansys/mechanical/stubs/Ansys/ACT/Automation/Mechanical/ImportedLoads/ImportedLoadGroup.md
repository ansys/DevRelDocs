# ImportedLoadGroup

### *class* ImportedLoadGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedLoadGroup.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`CreateExternalLoadVelocitiesAndSyncAnalysisSettings`](#ImportedLoadGroup.CreateExternalLoadVelocitiesAndSyncAnalysisSettings)   | Run the CreateExternalLoadVelocitiesAndSyncAnalysisSettings action.                         |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`SetResultFile`](#ImportedLoadGroup.SetResultFile)                                                                               | Sets the ResultFile with unitSystem supplied. For MAPDL Results File without a unit system. |
| [`ImportExternalDataFiles`](#ImportedLoadGroup.ImportExternalDataFiles)                                                           |                                                                                             |
| [`GetExternalDataFiles`](#ImportedLoadGroup.GetExternalDataFiles)                                                                 |                                                                                             |
| [`ReloadExternalDataFiles`](#ImportedLoadGroup.ReloadExternalDataFiles)                                                           | Reloads the external data files for current Imported Load Group.                            |
| [`Delete`](#ImportedLoadGroup.Delete)                                                                                             | Run the Delete action.                                                                      |
| [`AddImportedBodyTemperature`](#ImportedLoadGroup.AddImportedBodyTemperature)                                                     | Creates a new ImportedBodyTemperature                                                       |
| [`AddImportedTemperature`](#ImportedLoadGroup.AddImportedTemperature)                                                             | Creates a new ImportedTemperature                                                           |
| [`CreateBodyForceDensitiesAndSyncAnalysisSettings`](#ImportedLoadGroup.CreateBodyForceDensitiesAndSyncAnalysisSettings)           | Create body force densities for all RPMs.                                                   |
| [`CreateSurfaceForceDensitiesAndSyncAnalysisSettings`](#ImportedLoadGroup.CreateSurfaceForceDensitiesAndSyncAnalysisSettings)     | Create surface force densities for all RPMs.                                                |
| [`CreateVelocitiesAndSyncAnalysisSettings`](#ImportedLoadGroup.CreateVelocitiesAndSyncAnalysisSettings)                           | Create velocities for all RPMs.                                                             |
| [`AddImportedBodyForceDensity`](#ImportedLoadGroup.AddImportedBodyForceDensity)                                                   | Creates a new ImportedBodyForceDensity                                                      |
| [`AddImportedConvection`](#ImportedLoadGroup.AddImportedConvection)                                                               | Creates a new ImportedConvection                                                            |
| [`AddImportedCutBoundaryRemoteConstraint`](#ImportedLoadGroup.AddImportedCutBoundaryRemoteConstraint)                             | Creates a new ImportedCutBoundaryRemoteConstraint                                           |
| [`AddImportedCutBoundaryRemoteForce`](#ImportedLoadGroup.AddImportedCutBoundaryRemoteForce)                                       | Creates a new ImportedCutBoundaryRemoteForce                                                |
| [`AddImportedDisplacement`](#ImportedLoadGroup.AddImportedDisplacement)                                                           | Creates a new ImportedDisplacement                                                          |
| [`AddImportedCutBoundaryConstraint`](#ImportedLoadGroup.AddImportedCutBoundaryConstraint)                                         | Creates a new ImportedDisplacement                                                          |
| [`AddImportedElementOrientation`](#ImportedLoadGroup.AddImportedElementOrientation)                                               | Creates a new ImportedElementOrientation                                                    |
| [`AddImportedFiberRatio`](#ImportedLoadGroup.AddImportedFiberRatio)                                                               | Creates a new ImportedFiberRatio                                                            |
| [`AddImportedForce`](#ImportedLoadGroup.AddImportedForce)                                                                         | Creates a new ImportedForce                                                                 |
| [`AddImportedHeatFlux`](#ImportedLoadGroup.AddImportedHeatFlux)                                                                   | Creates a new ImportedHeatFlux                                                              |
| [`AddImportedHeatGeneration`](#ImportedLoadGroup.AddImportedHeatGeneration)                                                       | Creates a new ImportedHeatGeneration                                                        |
| [`AddImportedInitialStrain`](#ImportedLoadGroup.AddImportedInitialStrain)                                                         | Creates a new ImportedInitialStrain                                                         |
| [`AddImportedInitialStress`](#ImportedLoadGroup.AddImportedInitialStress)                                                         | Creates a new ImportedInitialStress                                                         |
| [`AddImportedMaterialField`](#ImportedLoadGroup.AddImportedMaterialField)                                                         | Creates a new ImportedMaterialField                                                         |
| [`AddImportedPressure`](#ImportedLoadGroup.AddImportedPressure)                                                                   | Creates a new ImportedPressure                                                              |
| [`AddImportedSurfaceForceDensity`](#ImportedLoadGroup.AddImportedSurfaceForceDensity)                                             | Creates a new ImportedSurfaceForceDensity                                                   |
| [`AddImportedThickness`](#ImportedLoadGroup.AddImportedThickness)                                                                 | Creates a new ImportedThickness                                                             |
| [`AddImportedTrace`](#ImportedLoadGroup.AddImportedTrace)                                                                         | Creates a new ImportedTrace                                                                 |
| [`AddImportedVelocity`](#ImportedLoadGroup.AddImportedVelocity)                                                                   | Creates a new ImportedVelocity                                                              |
| [`AddImportedWarpWeftRatio`](#ImportedLoadGroup.AddImportedWarpWeftRatio)                                                         | Creates a new ImportedWarpWeftRatio                                                         |
| [`AddImportedYarnAngle`](#ImportedLoadGroup.AddImportedYarnAngle)                                                                 | Creates a new ImportedYarnAngle                                                             |
| [`ClearGeneratedData`](#ImportedLoadGroup.ClearGeneratedData)                                                                     | Run the ClearGeneratedData action.                                                          |
| [`ImportLoad`](#ImportedLoadGroup.ImportLoad)                                                                                     | Run the ImportLoad action.                                                                  |
| [`RefreshImportedLoad`](#ImportedLoadGroup.RefreshImportedLoad)                                                                   | Run the RefreshImportedLoad action.                                                         |
| [`GetChildren`](#id1)                                                                                                             | Gets the list of children, filtered by type.                                                |
| [`GetChildren`](#id1)                                                                                                             | Gets the list of children, filtered by type.                                                |
| [`AddComment`](#ImportedLoadGroup.AddComment)                                                                                     | Creates a new child Comment.                                                                |
| [`AddFigure`](#ImportedLoadGroup.AddFigure)                                                                                       | Creates a new child Figure.                                                                 |
| [`AddImage`](#ImportedLoadGroup.AddImage)                                                                                         | Creates a new child Image.                                                                  |
| [`Activate`](#ImportedLoadGroup.Activate)                                                                                         | Activate the current object.                                                                |
| [`CopyTo`](#ImportedLoadGroup.CopyTo)                                                                                             | Copies all visible properties from this object to another.                                  |
| [`Duplicate`](#ImportedLoadGroup.Duplicate)                                                                                       | Creates a copy of the current DataModelObject.                                              |
| [`GroupAllSimilarChildren`](#ImportedLoadGroup.GroupAllSimilarChildren)                                                           | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedLoadGroup.GroupSimilarObjects)                                                                   | Run the GroupSimilarObjects action.                                                         |
| [`PropertyByName`](#ImportedLoadGroup.PropertyByName)                                                                             | Get a property by its unique name.                                                          |
| [`PropertyByAPIName`](#ImportedLoadGroup.PropertyByAPIName)                                                                       | Get a property by its API name.                                                             |
| [`CreateParameter`](#ImportedLoadGroup.CreateParameter)                                                                           | Creates a new parameter for a Property.                                                     |
| [`GetParameter`](#ImportedLoadGroup.GetParameter)                                                                                 | Gets the parameter corresponding to the given property.                                     |
| [`RemoveParameter`](#ImportedLoadGroup.RemoveParameter)                                                                           | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| [`ResultFile`](#ImportedLoadGroup.ResultFile)                                                                          | Gets or sets the ResultFile.                                           |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ResultFileUnitSystem`](#ImportedLoadGroup.ResultFileUnitSystem)                                                      | Gets or sets the ResultFileUnitSystem.                                 |
| [`FilesDirectory`](#ImportedLoadGroup.FilesDirectory)                                                                  | Gets the FilesDirectory.                                               |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`TransferStep`](#ImportedLoadGroup.TransferStep)                                                                      | Controls which additive simulation step is used for the data transfer. |
| [`Source`](#ImportedLoadGroup.Source)                                                                                  | Gets the Source.                                                       |
| [`ResultFileTimestamp`](#ImportedLoadGroup.ResultFileTimestamp)                                                        | Gets the ResultFileTimestamp.                                          |
| [`SourceDimension`](../../../../Mechanical/DataModel/Enums/SourceDimension.md#SourceDimension)                         | Gets or sets the SourceDimension.                                      |
| [`DeleteMappedDataFilesAfterImport`](#ImportedLoadGroup.DeleteMappedDataFilesAfterImport)                              | Gets or sets the DeleteMappedDataFilesAfterImport.                     |
| [`Suppressed`](#ImportedLoadGroup.Suppressed)                                                                          | Gets or sets the Suppressed.                                           |
| [`TransferTemperaturesDuringSolve`](#ImportedLoadGroup.TransferTemperaturesDuringSolve)                                | Gets or sets the TransferTemperaturesDuringSolve.                      |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Children`](#ImportedLoadGroup.Children)                                                                              | Gets the list of children.                                             |
| [`Comments`](#ImportedLoadGroup.Comments)                                                                              | Gets the list of associated comments.                                  |
| [`Figures`](#ImportedLoadGroup.Figures)                                                                                | Gets the list of associated figures.                                   |
| [`Images`](#ImportedLoadGroup.Images)                                                                                  | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ImportedLoadGroup.Properties)                                                                          | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ImportedLoadGroup.VisibleProperties)                                                            | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedLoadGroup
```

## Property detail

### *property* ImportedLoadGroup.ResultFile *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFile.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.ResultFileUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFileUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.FilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.TransferStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Controls which additive simulation step is used for the data transfer.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Source *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Source.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.ResultFileTimestamp *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileTimestamp.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.SourceDimension *: [Ansys.Mechanical.DataModel.Enums.SourceDimension](../../../../Mechanical/DataModel/Enums/SourceDimension.md#SourceDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceDimension.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.DeleteMappedDataFilesAfterImport *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteMappedDataFilesAfterImport.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.TransferTemperaturesDuringSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransferTemperaturesDuringSolve.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedLoadGroup.CreateExternalLoadVelocitiesAndSyncAnalysisSettings()

Run the CreateExternalLoadVelocitiesAndSyncAnalysisSettings action.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.SetResultFile(resultFile: System.String, unitSystem: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType))

Sets the ResultFile with unitSystem supplied. For MAPDL Results File without a unit system.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.ImportExternalDataFiles(externalDataFiles: [Ansys.Mechanical.ExternalData.ExternalDataFileCollection](../../../../Mechanical/ExternalData/ExternalDataFileCollection.md#ExternalDataFileCollection))

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.GetExternalDataFiles()

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.ReloadExternalDataFiles()

Reloads the external data files for current Imported Load Group.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedBodyTemperature()

Creates a new ImportedBodyTemperature

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedTemperature()

Creates a new ImportedTemperature

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.CreateBodyForceDensitiesAndSyncAnalysisSettings()

Create body force densities for all RPMs.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.CreateSurfaceForceDensitiesAndSyncAnalysisSettings()

Create surface force densities for all RPMs.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.CreateVelocitiesAndSyncAnalysisSettings()

Create velocities for all RPMs.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedBodyForceDensity()

Creates a new ImportedBodyForceDensity

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedConvection()

Creates a new ImportedConvection

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedCutBoundaryRemoteConstraint()

Creates a new ImportedCutBoundaryRemoteConstraint

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedCutBoundaryRemoteForce()

Creates a new ImportedCutBoundaryRemoteForce

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedDisplacement()

Creates a new ImportedDisplacement

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedCutBoundaryConstraint()

Creates a new ImportedDisplacement

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedElementOrientation()

Creates a new ImportedElementOrientation

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedFiberRatio()

Creates a new ImportedFiberRatio

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedForce()

Creates a new ImportedForce

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedHeatFlux()

Creates a new ImportedHeatFlux

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedHeatGeneration()

Creates a new ImportedHeatGeneration

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedInitialStrain()

Creates a new ImportedInitialStrain

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedInitialStress()

Creates a new ImportedInitialStress

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedMaterialField()

Creates a new ImportedMaterialField

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedPressure()

Creates a new ImportedPressure

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedSurfaceForceDensity()

Creates a new ImportedSurfaceForceDensity

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedThickness()

Creates a new ImportedThickness

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedTrace()

Creates a new ImportedTrace

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedVelocity()

Creates a new ImportedVelocity

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedWarpWeftRatio()

Creates a new ImportedWarpWeftRatio

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImportedYarnAngle()

Creates a new ImportedYarnAngle

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.RefreshImportedLoad()

Run the RefreshImportedLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
