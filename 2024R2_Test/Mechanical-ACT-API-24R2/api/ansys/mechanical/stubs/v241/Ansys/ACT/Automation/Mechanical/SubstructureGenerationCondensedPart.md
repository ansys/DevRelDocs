# `SubstructureGenerationCondensedPart`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SubstructureGenerationCondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SubstructureGenerationCondensedPart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `AddCommandSnippet`       | Creates a new CommandSnippet                                                      |
| `ClearGeneratedData`      | Run the ClearGeneratedData action.                                                |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `Interfaces`              | Returns the Interfaces of the condensed part                  |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `AttachmentMethod`        | Gets or sets the AttachmentMethod.                            |
| `GenerateDampingMatrix`   | Gets or sets the GenerateDampingMatrix.                       |
| `InterfaceMethod`         | Gets or sets the InterfaceMethod.                             |
| `LumpedMassFormulation`   | Gets or sets the LumpedMassFormulation.                       |
| `PointMassTreatment`      | Gets or sets the PointMassTreatment.                          |
| `ReductionMethod`         | Gets or sets the ReductionMethod.                             |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `NumberInterfaceEntries`  | Gets the NumberInterfaceEntries.                              |
| `NumberMasterNodes`       | Gets the NumberMasterNodes.                                   |
| `SolutionName`            | Gets or sets the SolutionName.                                |
| `SolverFilesDirectory`    | Gets the SolverFilesDirectory.                                |
| `TemperatureUnits`        | Gets the TemperatureUnits.                                    |
| `ReferenceTemperature`    | Gets or sets the ReferenceTemperature.                        |
| `Physics`                 | Gets the Physics.                                             |
| `SolverUnitSystem`        | Gets or sets the SolverUnitSystem.                            |
| `SolutionNameMode`        | Gets or sets the SolutionNameMode.                            |
| `SolverUnits`             | Gets or sets the SolverUnits.                                 |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `GeometrySelection`       | Gets or sets the GeometrySelection.                           |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* SubstructureGenerationCondensedPart.Interfaces *: [Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces](CondensedPartInterfaces.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Interfaces of the condensed part

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.AttachmentMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod](../../../Mechanical/DataModel/Enums/CondensedPartCMSAttachmentMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AttachmentMethod.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.GenerateDampingMatrix *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateDampingMatrix.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.InterfaceMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod](../../../Mechanical/DataModel/Enums/CondensedPartInterfaceMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceMethod.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.LumpedMassFormulation *: [Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation](../../../Mechanical/DataModel/Enums/CondensedPartLumpedMassFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LumpedMassFormulation.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.PointMassTreatment *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment](../../../Mechanical/DataModel/Enums/CondensedPartPointMassTreatment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PointMassTreatment.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.ReductionMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod](../../../Mechanical/DataModel/Enums/CondensedPartReductionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReductionMethod.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.NumberInterfaceEntries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.NumberMasterNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.SolutionName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.TemperatureUnits *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### SubstructureGenerationCondensedPart.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

