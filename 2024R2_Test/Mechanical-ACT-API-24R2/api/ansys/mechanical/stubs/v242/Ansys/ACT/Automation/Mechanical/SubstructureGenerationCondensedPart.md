# `SubstructureGenerationCondensedPart`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SubstructureGenerationCondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SubstructureGenerationCondensedPart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#SubstructureGenerationCondensedPart.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
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

| Name | Description |
|-------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Interfaces`](#SubstructureGenerationCondensedPart.Interfaces)                           | Returns the Interfaces of the condensed part                  |
| [`InternalObject`](#id0)                                                                  | Gets the internal object. For advanced usage only.            |
| [`AttachmentMethod`](#SubstructureGenerationCondensedPart.AttachmentMethod)               | Gets or sets the AttachmentMethod.                            |
| [`GenerateDampingMatrix`](#SubstructureGenerationCondensedPart.GenerateDampingMatrix)     | Gets or sets the GenerateDampingMatrix.                       |
| [`InterfaceMethod`](#SubstructureGenerationCondensedPart.InterfaceMethod)                 | Gets or sets the InterfaceMethod.                             |
| [`LumpedMassFormulation`](#SubstructureGenerationCondensedPart.LumpedMassFormulation)     | Gets or sets the LumpedMassFormulation.                       |
| [`PointMassTreatment`](#SubstructureGenerationCondensedPart.PointMassTreatment)           | Gets or sets the PointMassTreatment.                          |
| [`ReductionMethod`](#SubstructureGenerationCondensedPart.ReductionMethod)                 | Gets or sets the ReductionMethod.                             |
| [`DataModelObjectCategory`](#SubstructureGenerationCondensedPart.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`NumberInterfaceEntries`](#SubstructureGenerationCondensedPart.NumberInterfaceEntries)   | Gets the NumberInterfaceEntries.                              |
| [`NumberMasterNodes`](#SubstructureGenerationCondensedPart.NumberMasterNodes)             | Gets the NumberMasterNodes.                                   |
| [`SolutionName`](#SubstructureGenerationCondensedPart.SolutionName)                       | Gets or sets the SolutionName.                                |
| [`SolverFilesDirectory`](#SubstructureGenerationCondensedPart.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                |
| [`TemperatureUnits`](#SubstructureGenerationCondensedPart.TemperatureUnits)               | Gets the TemperatureUnits.                                    |
| [`ReferenceTemperature`](#SubstructureGenerationCondensedPart.ReferenceTemperature)       | Gets or sets the ReferenceTemperature.                        |
| [`Physics`](#SubstructureGenerationCondensedPart.Physics)                                 | Gets the Physics.                                             |
| [`SolverUnitSystem`](#SubstructureGenerationCondensedPart.SolverUnitSystem)               | Gets or sets the SolverUnitSystem.                            |
| [`SolutionNameMode`](#SubstructureGenerationCondensedPart.SolutionNameMode)               | Gets or sets the SolutionNameMode.                            |
| [`SolverUnits`](#SubstructureGenerationCondensedPart.SolverUnits)                         | Gets or sets the SolverUnits.                                 |
| [`Suppressed`](#SubstructureGenerationCondensedPart.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`GeometrySelection`](#SubstructureGenerationCondensedPart.GeometrySelection)             | Gets or sets the GeometrySelection.                           |
| [`Children`](#SubstructureGenerationCondensedPart.Children)                               | Gets the list of children.                                    |
| [`Comments`](#SubstructureGenerationCondensedPart.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#SubstructureGenerationCondensedPart.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#SubstructureGenerationCondensedPart.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SubstructureGenerationCondensedPart.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SubstructureGenerationCondensedPart.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SubstructureGenerationCondensedPart.Interfaces"></a>

### *property* SubstructureGenerationCondensedPart.Interfaces *: [Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces](../../../../../v241/Ansys/ACT/Automation/Mechanical/CondensedPartInterfaces.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Interfaces of the condensed part

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.InternalObject"></a>

### *property* SubstructureGenerationCondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.AttachmentMethod"></a>

### *property* SubstructureGenerationCondensedPart.AttachmentMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartCMSAttachmentMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AttachmentMethod.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GenerateDampingMatrix"></a>

### *property* SubstructureGenerationCondensedPart.GenerateDampingMatrix *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateDampingMatrix.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.InterfaceMethod"></a>

### *property* SubstructureGenerationCondensedPart.InterfaceMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartInterfaceMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceMethod.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.LumpedMassFormulation"></a>

### *property* SubstructureGenerationCondensedPart.LumpedMassFormulation *: [Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartLumpedMassFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LumpedMassFormulation.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.PointMassTreatment"></a>

### *property* SubstructureGenerationCondensedPart.PointMassTreatment *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartPointMassTreatment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PointMassTreatment.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.ReductionMethod"></a>

### *property* SubstructureGenerationCondensedPart.ReductionMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartReductionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReductionMethod.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.DataModelObjectCategory"></a>

### *property* SubstructureGenerationCondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.NumberInterfaceEntries"></a>

### *property* SubstructureGenerationCondensedPart.NumberInterfaceEntries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.NumberMasterNodes"></a>

### *property* SubstructureGenerationCondensedPart.NumberMasterNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolutionName"></a>

### *property* SubstructureGenerationCondensedPart.SolutionName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolverFilesDirectory"></a>

### *property* SubstructureGenerationCondensedPart.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.TemperatureUnits"></a>

### *property* SubstructureGenerationCondensedPart.TemperatureUnits *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.ReferenceTemperature"></a>

### *property* SubstructureGenerationCondensedPart.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Physics"></a>

### *property* SubstructureGenerationCondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolverUnitSystem"></a>

### *property* SubstructureGenerationCondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolutionNameMode"></a>

### *property* SubstructureGenerationCondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolverUnits"></a>

### *property* SubstructureGenerationCondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Suppressed"></a>

### *property* SubstructureGenerationCondensedPart.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GeometrySelection"></a>

### *property* SubstructureGenerationCondensedPart.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Children"></a>

### *property* SubstructureGenerationCondensedPart.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Comments"></a>

### *property* SubstructureGenerationCondensedPart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Figures"></a>

### *property* SubstructureGenerationCondensedPart.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Images"></a>

### *property* SubstructureGenerationCondensedPart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SubstructureGenerationCondensedPart.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Properties"></a>

### *property* SubstructureGenerationCondensedPart.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.VisibleProperties"></a>

### *property* SubstructureGenerationCondensedPart.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SubstructureGenerationCondensedPart.AddCommandSnippet"></a>

### SubstructureGenerationCondensedPart.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.ClearGeneratedData"></a>

### SubstructureGenerationCondensedPart.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Delete"></a>

### SubstructureGenerationCondensedPart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GetChildren"></a>

### SubstructureGenerationCondensedPart.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SubstructureGenerationCondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.AddComment"></a>

### SubstructureGenerationCondensedPart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.AddFigure"></a>

### SubstructureGenerationCondensedPart.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.AddImage"></a>

### SubstructureGenerationCondensedPart.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Activate"></a>

### SubstructureGenerationCondensedPart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.CopyTo"></a>

### SubstructureGenerationCondensedPart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Duplicate"></a>

### SubstructureGenerationCondensedPart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GroupAllSimilarChildren"></a>

### SubstructureGenerationCondensedPart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GroupSimilarObjects"></a>

### SubstructureGenerationCondensedPart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.PropertyByName"></a>

### SubstructureGenerationCondensedPart.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.PropertyByAPIName"></a>

### SubstructureGenerationCondensedPart.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.CreateParameter"></a>

### SubstructureGenerationCondensedPart.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GetParameter"></a>

### SubstructureGenerationCondensedPart.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.RemoveParameter"></a>

### SubstructureGenerationCondensedPart.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

