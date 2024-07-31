# `SubstructureGenerationCondensedPart`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SubstructureGenerationCondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SubstructureGenerationCondensedPart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Interfaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Interfaces)                           | Returns the Interfaces of the condensed part                  |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#id0)                                                                  | Gets the internal object. For advanced usage only.            |
| [`AttachmentMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.AttachmentMethod)               | Gets or sets the AttachmentMethod.                            |
| [`GenerateDampingMatrix`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.GenerateDampingMatrix)     | Gets or sets the GenerateDampingMatrix.                       |
| [`InterfaceMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.InterfaceMethod)                 | Gets or sets the InterfaceMethod.                             |
| [`LumpedMassFormulation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.LumpedMassFormulation)     | Gets or sets the LumpedMassFormulation.                       |
| [`PointMassTreatment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.PointMassTreatment)           | Gets or sets the PointMassTreatment.                          |
| [`ReductionMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.ReductionMethod)                 | Gets or sets the ReductionMethod.                             |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`NumberInterfaceEntries`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.NumberInterfaceEntries)   | Gets the NumberInterfaceEntries.                              |
| [`NumberMasterNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.NumberMasterNodes)             | Gets the NumberMasterNodes.                                   |
| [`SolutionName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.SolutionName)                       | Gets or sets the SolutionName.                                |
| [`SolverFilesDirectory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                |
| [`TemperatureUnits`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.TemperatureUnits)               | Gets the TemperatureUnits.                                    |
| [`ReferenceTemperature`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.ReferenceTemperature)       | Gets or sets the ReferenceTemperature.                        |
| [`Physics`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Physics)                                 | Gets the Physics.                                             |
| [`SolverUnitSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.SolverUnitSystem)               | Gets or sets the SolverUnitSystem.                            |
| [`SolutionNameMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.SolutionNameMode)               | Gets or sets the SolutionNameMode.                            |
| [`SolverUnits`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.SolverUnits)                         | Gets or sets the SolverUnits.                                 |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`GeometrySelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.GeometrySelection)             | Gets or sets the GeometrySelection.                           |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#id0)                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SubstructureGenerationCondensedPart.md#SubstructureGenerationCondensedPart.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SubstructureGenerationCondensedPart.Interfaces"></a>

### *property* SubstructureGenerationCondensedPart.Interfaces *: [Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces](CondensedPartInterfaces.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Interfaces of the condensed part

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.InternalObject"></a>

### *property* SubstructureGenerationCondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.AttachmentMethod"></a>

### *property* SubstructureGenerationCondensedPart.AttachmentMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod](../../../Mechanical/DataModel/Enums/CondensedPartCMSAttachmentMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AttachmentMethod.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GenerateDampingMatrix"></a>

### *property* SubstructureGenerationCondensedPart.GenerateDampingMatrix *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateDampingMatrix.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.InterfaceMethod"></a>

### *property* SubstructureGenerationCondensedPart.InterfaceMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod](../../../Mechanical/DataModel/Enums/CondensedPartInterfaceMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceMethod.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.LumpedMassFormulation"></a>

### *property* SubstructureGenerationCondensedPart.LumpedMassFormulation *: [Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation](../../../Mechanical/DataModel/Enums/CondensedPartLumpedMassFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LumpedMassFormulation.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.PointMassTreatment"></a>

### *property* SubstructureGenerationCondensedPart.PointMassTreatment *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment](../../../Mechanical/DataModel/Enums/CondensedPartPointMassTreatment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PointMassTreatment.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.ReductionMethod"></a>

### *property* SubstructureGenerationCondensedPart.ReductionMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod](../../../Mechanical/DataModel/Enums/CondensedPartReductionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReductionMethod.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.DataModelObjectCategory"></a>

### *property* SubstructureGenerationCondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* SubstructureGenerationCondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolverUnitSystem"></a>

### *property* SubstructureGenerationCondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolutionNameMode"></a>

### *property* SubstructureGenerationCondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolverUnits"></a>

### *property* SubstructureGenerationCondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* SubstructureGenerationCondensedPart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Figures"></a>

### *property* SubstructureGenerationCondensedPart.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Images"></a>

### *property* SubstructureGenerationCondensedPart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### SubstructureGenerationCondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

