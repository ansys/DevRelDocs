# `ImportedLoadGroup`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedLoadGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------|---------------------------------------------------------------------------------------------|
| `CreateExternalLoadVelocitiesAndSyncAnalysisSettings`   | Run the CreateExternalLoadVelocitiesAndSyncAnalysisSettings action.                         |
| `SetResultFile`                                         | Sets the ResultFile with unitSystem supplied. For MAPDL Results File without a unit system. |
| `ImportExternalDataFiles`                               |                                                                                             |
| `GetExternalDataFiles`                                  |                                                                                             |
| `ReloadExternalDataFiles`                               | Reloads the external data files for current Imported Load Group.                            |
| `Delete`                                                | Run the Delete action.                                                                      |
| `AddImportedBodyTemperature`                            | Creates a new ImportedBodyTemperature                                                       |
| `AddImportedTemperature`                                | Creates a new ImportedTemperature                                                           |
| `CreateBodyForceDensitiesAndSyncAnalysisSettings`       | Create body force densities for all RPMs.                                                   |
| `CreateSurfaceForceDensitiesAndSyncAnalysisSettings`    | Create surface force densities for all RPMs.                                                |
| `CreateVelocitiesAndSyncAnalysisSettings`               | Create velocities for all RPMs.                                                             |
| `AddImportedBodyForceDensity`                           | Creates a new ImportedBodyForceDensity                                                      |
| `AddImportedConvection`                                 | Creates a new ImportedConvection                                                            |
| `AddImportedCutBoundaryRemoteConstraint`                | Creates a new ImportedCutBoundaryRemoteConstraint                                           |
| `AddImportedCutBoundaryRemoteForce`                     | Creates a new ImportedCutBoundaryRemoteForce                                                |
| `AddImportedDisplacement`                               | Creates a new ImportedDisplacement                                                          |
| `AddImportedCutBoundaryConstraint`                      | Creates a new ImportedDisplacement                                                          |
| `AddImportedElementOrientation`                         | Creates a new ImportedElementOrientation                                                    |
| `AddImportedFiberRatio`                                 | Creates a new ImportedFiberRatio                                                            |
| `AddImportedForce`                                      | Creates a new ImportedForce                                                                 |
| `AddImportedHeatFlux`                                   | Creates a new ImportedHeatFlux                                                              |
| `AddImportedHeatGeneration`                             | Creates a new ImportedHeatGeneration                                                        |
| `AddImportedInitialStrain`                              | Creates a new ImportedInitialStrain                                                         |
| `AddImportedInitialStress`                              | Creates a new ImportedInitialStress                                                         |
| `AddImportedMaterialField`                              | Creates a new ImportedMaterialField                                                         |
| `AddImportedPressure`                                   | Creates a new ImportedPressure                                                              |
| `AddImportedSurfaceForceDensity`                        | Creates a new ImportedSurfaceForceDensity                                                   |
| `AddImportedThickness`                                  | Creates a new ImportedThickness                                                             |
| `AddImportedTrace`                                      | Creates a new ImportedTrace                                                                 |
| `AddImportedVelocity`                                   | Creates a new ImportedVelocity                                                              |
| `AddImportedWarpWeftRatio`                              | Creates a new ImportedWarpWeftRatio                                                         |
| `AddImportedYarnAngle`                                  | Creates a new ImportedYarnAngle                                                             |
| `ClearGeneratedData`                                    | Run the ClearGeneratedData action.                                                          |
| `ImportLoad`                                            | Run the ImportLoad action.                                                                  |
| `RefreshImportedLoad`                                   | Run the RefreshImportedLoad action.                                                         |
| `GetChildren`                                           | Gets the list of children, filtered by type.                                                |
| `GetChildren`                                           | Gets the list of children, filtered by type.                                                |
| `AddComment`                                            | Creates a new child Comment.                                                                |
| `AddFigure`                                             | Creates a new child Figure.                                                                 |
| `AddImage`                                              | Creates a new child Image.                                                                  |
| `Activate`                                              | Activate the current object.                                                                |
| `CopyTo`                                                | Copies all visible properties from this object to another.                                  |
| `Duplicate`                                             | Creates a copy of the current DataModelObject.                                              |
| `GroupAllSimilarChildren`                               | Run the GroupAllSimilarChildren action.                                                     |
| `GroupSimilarObjects`                                   | Run the GroupSimilarObjects action.                                                         |
| `PropertyByName`                                        | Get a property by its unique name.                                                          |
| `PropertyByAPIName`                                     | Get a property by its API name.                                                             |
| `CreateParameter`                                       | Creates a new parameter for a Property.                                                     |
| `GetParameter`                                          | Gets the parameter corresponding to the given property.                                     |
| `RemoveParameter`                                       | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------|------------------------------------------------------------------------|
| `ResultFile`                       | Gets or sets the ResultFile.                                           |
| `ResultFileUnitSystem`             | Gets or sets the ResultFileUnitSystem.                                 |
| `FilesDirectory`                   | Gets the FilesDirectory.                                               |
| `InternalObject`                   | Gets the internal object. For advanced usage only.                     |
| `TransferStep`                     | Controls which additive simulation step is used for the data transfer. |
| `Source`                           | Gets the Source.                                                       |
| `ResultFileTimestamp`              | Gets the ResultFileTimestamp.                                          |
| `SourceDimension`                  | Gets or sets the SourceDimension.                                      |
| `DeleteMappedDataFilesAfterImport` | Gets or sets the DeleteMappedDataFilesAfterImport.                     |
| `Suppressed`                       | Gets or sets the Suppressed.                                           |
| `TransferTemperaturesDuringSolve`  | Gets or sets the TransferTemperaturesDuringSolve.                      |
| `DataModelObjectCategory`          | Gets the current DataModelObject's category.                           |
| `Children`                         | Gets the list of children.                                             |
| `Comments`                         | Gets the list of associated comments.                                  |
| `Figures`                          | Gets the list of associated figures.                                   |
| `Images`                           | Gets the list of associated images.                                    |
| `InternalObject`                   | Gets the internal object. For advanced usage only.                     |
| `Properties`                       | Gets the list of properties for this object.                           |
| `VisibleProperties`                | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

### *property* ImportedLoadGroup.ResultFile *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFile.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.ResultFileUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedLoadGroup.SourceDimension *: [Ansys.Mechanical.DataModel.Enums.SourceDimension](../../../../Mechanical/DataModel/Enums/SourceDimension.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SourceDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedLoadGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLoadGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### ImportedLoadGroup.CreateExternalLoadVelocitiesAndSyncAnalysisSettings()

Run the CreateExternalLoadVelocitiesAndSyncAnalysisSettings action.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.SetResultFile(resultFile: System.String, unitSystem: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType))

Sets the ResultFile with unitSystem supplied. For MAPDL Results File without a unit system.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.ImportExternalDataFiles(externalDataFiles: [Ansys.Mechanical.ExternalData.ExternalDataFileCollection](../../../../Mechanical/ExternalData/ExternalDataFileCollection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ExternalDataFileCollection))

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

### ImportedLoadGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedLoadGroup.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

