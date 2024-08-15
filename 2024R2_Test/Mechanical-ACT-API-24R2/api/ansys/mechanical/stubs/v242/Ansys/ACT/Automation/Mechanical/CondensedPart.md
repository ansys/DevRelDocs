# `CondensedPart`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.CondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CondensedPart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------|-----------------------------------------------------------------------------------|
| `Export`                       | Run the Export Condensed Part action.                                             |
| `DetectCondensedPartInterface` | Run the DetectCondensedPartInterface action.                                      |
| `GenerateCondensedParts`       | Run the GenerateCondensedParts action.                                            |
| `AddCommandSnippet`            | Creates a new CommandSnippet                                                      |
| `ClearGeneratedData`           | Run the ClearGeneratedData action.                                                |
| `Delete`                       | Run the Delete action.                                                            |
| `GetChildren`                  | Gets the list of children, filtered by type.                                      |
| `GetChildren`                  | Gets the list of children, filtered by type.                                      |
| `AddComment`                   | Creates a new child Comment.                                                      |
| `AddFigure`                    | Creates a new child Figure.                                                       |
| `AddImage`                     | Creates a new child Image.                                                        |
| `Activate`                     | Activate the current object.                                                      |
| `CopyTo`                       | Copies all visible properties from this object to another.                        |
| `Duplicate`                    | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`      | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`          | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`               | Get a property by its unique name.                                                |
| `PropertyByAPIName`            | Get a property by its API name.                                                   |
| `CreateParameter`              | Creates a new parameter for a Property.                                           |
| `GetParameter`                 | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`              | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|-------------------------------------------------------------------------------------------------------------|
| `Interfaces`              | Returns the Interfaces of the condensed part                                                                |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                                          |
| `NumberOfModes`           | Gets or sets the NumberOfModes.                                                                             |
| `MaximumFrequency`        | Gets or sets the MaximumFrequency.                                                                          |
| `MinimumFrequency`        | Gets or sets the MinimumFrequency.                                                                          |
| `AttachmentMethod`        | Gets or sets the AttachmentMethod.                                                                          |
| `FutureExpansion`         | Gets or sets the FutureExpansion.                                                                           |
| `FutureIntent`            | “FutureIntent” property defines the type of solver supported to perform a use pass with the condensed part. |
| `GenerateDampingMatrix`   | Gets or sets the GenerateDampingMatrix.                                                                     |
| `InterfaceMethod`         | Gets or sets the InterfaceMethod.                                                                           |
| `KeepFilesFor`            | Gets or sets the KeepFilesFor.                                                                              |
| `LumpedMassFormulation`   | Gets or sets the LumpedMassFormulation.                                                                     |
| `PointMassTreatment`      | Gets or sets the PointMassTreatment.                                                                        |
| `ReductionMethod`         | Gets or sets the ReductionMethod.                                                                           |
| `SolverType`              | Gets or sets the SolverType.                                                                                |
| `StoreBasisResults`       | Gets or sets the StoreBasisResults.                                                                         |
| `RangeSearch`             | Gets or sets the RangeSearch.                                                                               |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                                                |
| `NumberInterfaceEntries`  | Gets the NumberInterfaceEntries.                                                                            |
| `NumberMasterNodes`       | Gets the NumberMasterNodes.                                                                                 |
| `SolutionName`            | Gets or sets the SolutionName.                                                                              |
| `SolverFilesDirectory`    | Gets the SolverFilesDirectory.                                                                              |
| `TemperatureUnits`        | Gets the TemperatureUnits.                                                                                  |
| `ReferenceTemperature`    | Gets or sets the ReferenceTemperature.                                                                      |
| `Physics`                 | Gets the Physics.                                                                                           |
| `SolverUnitSystem`        | Gets or sets the SolverUnitSystem.                                                                          |
| `SolutionNameMode`        | Gets or sets the SolutionNameMode.                                                                          |
| `SolverUnits`             | Gets or sets the SolverUnits.                                                                               |
| `Suppressed`              | Gets or sets the Suppressed.                                                                                |
| `GeometrySelection`       | Gets or sets the GeometrySelection.                                                                         |
| `Children`                | Gets the list of children.                                                                                  |
| `Comments`                | Gets the list of associated comments.                                                                       |
| `Figures`                 | Gets the list of associated figures.                                                                        |
| `Images`                  | Gets the list of associated images.                                                                         |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                                          |
| `Properties`              | Gets the list of properties for this object.                                                                |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                                               |

<a id="property-detail"></a>

## Property detail

### *property* CondensedPart.Interfaces *: [Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces](../../../../../v241/Ansys/ACT/Automation/Mechanical/CondensedPartInterfaces.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Interfaces of the condensed part

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.NumberOfModes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfModes.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.AttachmentMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartCMSAttachmentMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AttachmentMethod.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.FutureExpansion *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureExpansion.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.FutureIntent *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/FutureIntentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

“FutureIntent” property defines the type of solver supported to perform a use pass with the condensed part.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.GenerateDampingMatrix *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateDampingMatrix.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.InterfaceMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartInterfaceMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceMethod.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.KeepFilesFor *: [Ansys.Mechanical.DataModel.Enums.CondensedPartKeepFilesFor](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartKeepFilesFor.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartKeepFilesFor) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeepFilesFor.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.LumpedMassFormulation *: [Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartLumpedMassFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LumpedMassFormulation.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.PointMassTreatment *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartPointMassTreatment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PointMassTreatment.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.ReductionMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartReductionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReductionMethod.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.StoreBasisResults *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreBasisResults.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.RangeSearch *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeSearch.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.NumberInterfaceEntries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.NumberMasterNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.SolutionName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.TemperatureUnits *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CondensedPart.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CondensedPart.Export(exportFileName: System.String, exportFormat: [Ansys.Mechanical.DataModel.MechanicalEnums.CondensedParts.ExportFormat](../../../Mechanical/DataModel/MechanicalEnums/CondensedParts/ExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CondensedParts.ExportFormat), exportSettings: [Ansys.ACT.Automation.Mechanical.CondensedParts.ExportSettings](CondensedParts/ExportSettings.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.CondensedParts.ExportSettings))

Run the Export Condensed Part action.

<!-- !! processed by numpydoc !! -->

### CondensedPart.DetectCondensedPartInterface()

Run the DetectCondensedPartInterface action.

<!-- !! processed by numpydoc !! -->

### CondensedPart.GenerateCondensedParts()

Run the GenerateCondensedParts action.

<!-- !! processed by numpydoc !! -->

### CondensedPart.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### CondensedPart.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### CondensedPart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CondensedPart.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CondensedPart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CondensedPart.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CondensedPart.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### CondensedPart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CondensedPart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CondensedPart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CondensedPart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CondensedPart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CondensedPart.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CondensedPart.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### CondensedPart.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CondensedPart.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CondensedPart.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

