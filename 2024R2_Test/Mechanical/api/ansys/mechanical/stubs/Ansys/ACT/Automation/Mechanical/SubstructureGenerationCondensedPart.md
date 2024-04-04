# SubstructureGenerationCondensedPart

### *class* SubstructureGenerationCondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SubstructureGenerationCondensedPart.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#SubstructureGenerationCondensedPart.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#SubstructureGenerationCondensedPart.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#SubstructureGenerationCondensedPart.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SubstructureGenerationCondensedPart.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SubstructureGenerationCondensedPart.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SubstructureGenerationCondensedPart.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SubstructureGenerationCondensedPart.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SubstructureGenerationCondensedPart.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SubstructureGenerationCondensedPart.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SubstructureGenerationCondensedPart.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SubstructureGenerationCondensedPart.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SubstructureGenerationCondensedPart.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SubstructureGenerationCondensedPart.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SubstructureGenerationCondensedPart.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SubstructureGenerationCondensedPart.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SubstructureGenerationCondensedPart.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Interfaces`](#SubstructureGenerationCondensedPart.Interfaces)                                                     | Returns the Interfaces of the condensed part                  |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`AttachmentMethod`](#SubstructureGenerationCondensedPart.AttachmentMethod)                                         | Gets or sets the AttachmentMethod.                            |
| [`GenerateDampingMatrix`](#SubstructureGenerationCondensedPart.GenerateDampingMatrix)                               | Gets or sets the GenerateDampingMatrix.                       |
| [`InterfaceMethod`](#SubstructureGenerationCondensedPart.InterfaceMethod)                                           | Gets or sets the InterfaceMethod.                             |
| [`LumpedMassFormulation`](#SubstructureGenerationCondensedPart.LumpedMassFormulation)                               | Gets or sets the LumpedMassFormulation.                       |
| [`PointMassTreatment`](#SubstructureGenerationCondensedPart.PointMassTreatment)                                     | Gets or sets the PointMassTreatment.                          |
| [`ReductionMethod`](#SubstructureGenerationCondensedPart.ReductionMethod)                                           | Gets or sets the ReductionMethod.                             |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`NumberInterfaceEntries`](#SubstructureGenerationCondensedPart.NumberInterfaceEntries)                             | Gets the NumberInterfaceEntries.                              |
| [`NumberMasterNodes`](#SubstructureGenerationCondensedPart.NumberMasterNodes)                                       | Gets the NumberMasterNodes.                                   |
| [`SolutionName`](#SubstructureGenerationCondensedPart.SolutionName)                                                 | Gets or sets the SolutionName.                                |
| [`SolverFilesDirectory`](#SubstructureGenerationCondensedPart.SolverFilesDirectory)                                 | Gets the SolverFilesDirectory.                                |
| [`TemperatureUnits`](#SubstructureGenerationCondensedPart.TemperatureUnits)                                         | Gets the TemperatureUnits.                                    |
| [`ReferenceTemperature`](#SubstructureGenerationCondensedPart.ReferenceTemperature)                                 | Gets or sets the ReferenceTemperature.                        |
| [`Physics`](#SubstructureGenerationCondensedPart.Physics)                                                           | Gets the Physics.                                             |
| [`SolverUnitSystem`](#SubstructureGenerationCondensedPart.SolverUnitSystem)                                         | Gets or sets the SolverUnitSystem.                            |
| [`SolutionNameMode`](#SubstructureGenerationCondensedPart.SolutionNameMode)                                         | Gets or sets the SolutionNameMode.                            |
| [`SolverUnits`](#SubstructureGenerationCondensedPart.SolverUnits)                                                   | Gets or sets the SolverUnits.                                 |
| [`Suppressed`](#SubstructureGenerationCondensedPart.Suppressed)                                                     | Gets or sets the Suppressed.                                  |
| [`GeometrySelection`](#SubstructureGenerationCondensedPart.GeometrySelection)                                       | Gets or sets the GeometrySelection.                           |
| [`Children`](#SubstructureGenerationCondensedPart.Children)                                                         | Gets the list of children.                                    |
| [`Comments`](#SubstructureGenerationCondensedPart.Comments)                                                         | Gets the list of associated comments.                         |
| [`Figures`](#SubstructureGenerationCondensedPart.Figures)                                                           | Gets the list of associated figures.                          |
| [`Images`](#SubstructureGenerationCondensedPart.Images)                                                             | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SubstructureGenerationCondensedPart.Properties)                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SubstructureGenerationCondensedPart.VisibleProperties)                                       | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import SubstructureGenerationCondensedPart
```

## Property detail

### *property* SubstructureGenerationCondensedPart.Interfaces *: [Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces](CondensedPartInterfaces.md#CondensedPartInterfaces) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Interfaces of the condensed part

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.AttachmentMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod](../../../Mechanical/DataModel/Enums/CondensedPartCMSAttachmentMethod.md#CondensedPartCMSAttachmentMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AttachmentMethod.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.GenerateDampingMatrix *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateDampingMatrix.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.InterfaceMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod](../../../Mechanical/DataModel/Enums/CondensedPartInterfaceMethod.md#CondensedPartInterfaceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceMethod.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.LumpedMassFormulation *: [Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation](../../../Mechanical/DataModel/Enums/CondensedPartLumpedMassFormulation.md#CondensedPartLumpedMassFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LumpedMassFormulation.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.PointMassTreatment *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment](../../../Mechanical/DataModel/Enums/CondensedPartPointMassTreatment.md#CondensedPartPointMassTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PointMassTreatment.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.ReductionMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod](../../../Mechanical/DataModel/Enums/CondensedPartReductionMethod.md#CondensedPartReductionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReductionMethod.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

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

### *property* SubstructureGenerationCondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* SubstructureGenerationCondensedPart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* SubstructureGenerationCondensedPart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### SubstructureGenerationCondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### SubstructureGenerationCondensedPart.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
