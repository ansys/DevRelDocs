# `SubstructureGenerationCondensedPart`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SubstructureGenerationCondensedPart"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SubstructureGenerationCondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SubstructureGenerationCondensedPart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SubstructureGenerationCondensedPart.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#SubstructureGenerationCondensedPart.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#SubstructureGenerationCondensedPart.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SubstructureGenerationCondensedPart.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SubstructureGenerationCondensedPart.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#SubstructureGenerationCondensedPart.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#SubstructureGenerationCondensedPart.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SubstructureGenerationCondensedPart.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#SubstructureGenerationCondensedPart.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#SubstructureGenerationCondensedPart.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#SubstructureGenerationCondensedPart.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SubstructureGenerationCondensedPart.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SubstructureGenerationCondensedPart.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SubstructureGenerationCondensedPart.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#SubstructureGenerationCondensedPart.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#SubstructureGenerationCondensedPart.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SubstructureGenerationCondensedPart.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachmentMethod`](#SubstructureGenerationCondensedPart.AttachmentMethod)               | Gets or sets the AttachmentMethod.                            |
| [`Children`](#SubstructureGenerationCondensedPart.Children)                               | Gets the list of children.                                    |
| [`Comments`](#SubstructureGenerationCondensedPart.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#SubstructureGenerationCondensedPart.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#SubstructureGenerationCondensedPart.Figures)                                 | Gets the list of associated figures.                          |
| [`GenerateDampingMatrix`](#SubstructureGenerationCondensedPart.GenerateDampingMatrix)     | Gets or sets the GenerateDampingMatrix.                       |
| [`GeometrySelection`](#SubstructureGenerationCondensedPart.GeometrySelection)             | Gets or sets the GeometrySelection.                           |
| [`Images`](#SubstructureGenerationCondensedPart.Images)                                   | Gets the list of associated images.                           |
| [`InterfaceMethod`](#SubstructureGenerationCondensedPart.InterfaceMethod)                 | Gets or sets the InterfaceMethod.                             |
| [`Interfaces`](#SubstructureGenerationCondensedPart.Interfaces)                           | Returns the Interfaces of the condensed part                  |
| [`InternalObject`](#SubstructureGenerationCondensedPart.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LumpedMassFormulation`](#SubstructureGenerationCondensedPart.LumpedMassFormulation)     | Gets or sets the LumpedMassFormulation.                       |
| [`NumberInterfaceEntries`](#SubstructureGenerationCondensedPart.NumberInterfaceEntries)   | Gets the NumberInterfaceEntries.                              |
| [`NumberMasterNodes`](#SubstructureGenerationCondensedPart.NumberMasterNodes)             | Gets the NumberMasterNodes.                                   |
| [`Physics`](#SubstructureGenerationCondensedPart.Physics)                                 | Gets the Physics.                                             |
| [`PointMassTreatment`](#SubstructureGenerationCondensedPart.PointMassTreatment)           | Gets or sets the PointMassTreatment.                          |
| [`Properties`](#SubstructureGenerationCondensedPart.Properties)                           | Gets the list of properties for this object.                  |
| [`ReductionMethod`](#SubstructureGenerationCondensedPart.ReductionMethod)                 | Gets or sets the ReductionMethod.                             |
| [`ReferenceTemperature`](#SubstructureGenerationCondensedPart.ReferenceTemperature)       | Gets or sets the ReferenceTemperature.                        |
| [`SolutionName`](#SubstructureGenerationCondensedPart.SolutionName)                       | Gets or sets the SolutionName.                                |
| [`SolutionNameMode`](#SubstructureGenerationCondensedPart.SolutionNameMode)               | Gets or sets the SolutionNameMode.                            |
| [`SolverFilesDirectory`](#SubstructureGenerationCondensedPart.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                |
| [`SolverUnitSystem`](#SubstructureGenerationCondensedPart.SolverUnitSystem)               | Gets or sets the SolverUnitSystem.                            |
| [`SolverUnits`](#SubstructureGenerationCondensedPart.SolverUnits)                         | Gets or sets the SolverUnits.                                 |
| [`Suppressed`](#SubstructureGenerationCondensedPart.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TemperatureUnits`](#SubstructureGenerationCondensedPart.TemperatureUnits)               | Gets the TemperatureUnits.                                    |
| [`VisibleProperties`](#SubstructureGenerationCondensedPart.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SubstructureGenerationCondensedPart.AttachmentMethod"></a>

### *property* SubstructureGenerationCondensedPart.AttachmentMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod](../../../Mechanical/DataModel/Enums/CondensedPartCMSAttachmentMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AttachmentMethod.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Children"></a>

### *property* SubstructureGenerationCondensedPart.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Comments"></a>

### *property* SubstructureGenerationCondensedPart.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.DataModelObjectCategory"></a>

### *property* SubstructureGenerationCondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Figures"></a>

### *property* SubstructureGenerationCondensedPart.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GenerateDampingMatrix"></a>

### *property* SubstructureGenerationCondensedPart.GenerateDampingMatrix *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateDampingMatrix.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GeometrySelection"></a>

### *property* SubstructureGenerationCondensedPart.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Images"></a>

### *property* SubstructureGenerationCondensedPart.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.InterfaceMethod"></a>

### *property* SubstructureGenerationCondensedPart.InterfaceMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod](../../../Mechanical/DataModel/Enums/CondensedPartInterfaceMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceMethod.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Interfaces"></a>

### *property* SubstructureGenerationCondensedPart.Interfaces *: [Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces](CondensedPartInterfaces.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Interfaces of the condensed part

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.InternalObject"></a>

### *property* SubstructureGenerationCondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.LumpedMassFormulation"></a>

### *property* SubstructureGenerationCondensedPart.LumpedMassFormulation *: [Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation](../../../Mechanical/DataModel/Enums/CondensedPartLumpedMassFormulation.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LumpedMassFormulation.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.NumberInterfaceEntries"></a>

### *property* SubstructureGenerationCondensedPart.NumberInterfaceEntries *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.NumberMasterNodes"></a>

### *property* SubstructureGenerationCondensedPart.NumberMasterNodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Physics"></a>

### *property* SubstructureGenerationCondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.PointMassTreatment"></a>

### *property* SubstructureGenerationCondensedPart.PointMassTreatment *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment](../../../Mechanical/DataModel/Enums/CondensedPartPointMassTreatment.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PointMassTreatment.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Properties"></a>

### *property* SubstructureGenerationCondensedPart.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.ReductionMethod"></a>

### *property* SubstructureGenerationCondensedPart.ReductionMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod](../../../Mechanical/DataModel/Enums/CondensedPartReductionMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReductionMethod.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.ReferenceTemperature"></a>

### *property* SubstructureGenerationCondensedPart.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolutionName"></a>

### *property* SubstructureGenerationCondensedPart.SolutionName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolutionNameMode"></a>

### *property* SubstructureGenerationCondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolverFilesDirectory"></a>

### *property* SubstructureGenerationCondensedPart.SolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolverUnitSystem"></a>

### *property* SubstructureGenerationCondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.SolverUnits"></a>

### *property* SubstructureGenerationCondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Suppressed"></a>

### *property* SubstructureGenerationCondensedPart.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.TemperatureUnits"></a>

### *property* SubstructureGenerationCondensedPart.TemperatureUnits *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.VisibleProperties"></a>

### *property* SubstructureGenerationCondensedPart.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SubstructureGenerationCondensedPart.Activate"></a>

### SubstructureGenerationCondensedPart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.AddCommandSnippet"></a>

### SubstructureGenerationCondensedPart.AddCommandSnippet()

Creates a new CommandSnippet

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

### SubstructureGenerationCondensedPart.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.ClearGeneratedData"></a>

### SubstructureGenerationCondensedPart.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.CopyTo"></a>

### SubstructureGenerationCondensedPart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.CreateParameter"></a>

### SubstructureGenerationCondensedPart.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Delete"></a>

### SubstructureGenerationCondensedPart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.Duplicate"></a>

### SubstructureGenerationCondensedPart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GetChildren"></a>

### SubstructureGenerationCondensedPart.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GetParameter"></a>

### SubstructureGenerationCondensedPart.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GroupAllSimilarChildren"></a>

### SubstructureGenerationCondensedPart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.GroupSimilarObjects"></a>

### SubstructureGenerationCondensedPart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.PropertyByAPIName"></a>

### SubstructureGenerationCondensedPart.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.PropertyByName"></a>

### SubstructureGenerationCondensedPart.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SubstructureGenerationCondensedPart.RemoveParameter"></a>

### SubstructureGenerationCondensedPart.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

