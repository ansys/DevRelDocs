# `BoltPretension`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BoltPretension"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.BoltPretension

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BoltPretension.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BoltPretension.Activate)                                   | Activate the current object.                                                      |
| [`AddComment`](#BoltPretension.AddComment)                               | Creates a new child Comment.                                                      |
| [`AddFigure`](#BoltPretension.AddFigure)                                 | Creates a new child Figure.                                                       |
| [`AddImage`](#BoltPretension.AddImage)                                   | Creates a new child Image.                                                        |
| [`CopyTo`](#BoltPretension.CopyTo)                                       | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BoltPretension.CreateParameter)                     | Creates a new parameter for a Property.                                           |
| [`Delete`](#BoltPretension.Delete)                                       | Run the Delete action.                                                            |
| [`Duplicate`](#BoltPretension.Duplicate)                                 | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#BoltPretension.GetChildren)                             | Gets the list of children, filtered by type.                                      |
| [`GetDefineBy`](#BoltPretension.GetDefineBy)                             | Gets the Bolt Define By value at a given solution step.                           |
| [`GetParameter`](#BoltPretension.GetParameter)                           | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BoltPretension.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BoltPretension.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                               |
| [`PromoteToCoordinateSystem`](#BoltPretension.PromoteToCoordinateSystem) | Run the PromoteToCoordinateSystem action.                                         |
| [`PromoteToNamedSelection`](#BoltPretension.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#BoltPretension.PropertyByAPIName)                 | Get a property by its API name.                                                   |
| [`PropertyByName`](#BoltPretension.PropertyByName)                       | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BoltPretension.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetDefineBy`](#BoltPretension.SetDefineBy)                             | Sets the Bolt Define By value for a given solution step.                          |

### Properties

| Name | Description |
|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`Children`](#BoltPretension.Children)                                 | Gets the list of children.                                                                |
| [`Comments`](#BoltPretension.Comments)                                 | Gets the list of associated comments.                                                     |
| [`CoordinateSystem`](#BoltPretension.CoordinateSystem)                 | Gets or sets the CoordinateSystem.                                                        |
| [`CoordinateSystemBehavior`](#BoltPretension.CoordinateSystemBehavior) | Gets or sets the CoordinateSystemBehavior.                                                |
| [`DataModelObjectCategory`](#BoltPretension.DataModelObjectCategory)   | Gets the current DataModelObject’s category.                                              |
| [`DefineBy`](#BoltPretension.DefineBy)                                 | Gets a value indicating how the bolt pretension is defined at the analysis’ current step. |
| [`Figures`](#BoltPretension.Figures)                                   | Gets the list of associated figures.                                                      |
| [`Formulation`](#BoltPretension.Formulation)                           | Gets or sets the Formulation.                                                             |
| [`Images`](#BoltPretension.Images)                                     | Gets the list of associated images.                                                       |
| [`Increment`](#BoltPretension.Increment)                               | Gets the Increment.                                                                       |
| [`InternalObject`](#BoltPretension.InternalObject)                     | Gets the internal object. For advanced usage only.                                        |
| [`Location`](#BoltPretension.Location)                                 | Gets or sets the Location.                                                                |
| [`Preadjustment`](#BoltPretension.Preadjustment)                       | Gets the Preadjustment.                                                                   |
| [`Preload`](#BoltPretension.Preload)                                   | Gets the Preload.                                                                         |
| [`Properties`](#BoltPretension.Properties)                             | Gets the list of properties for this object.                                              |
| [`ReadOnly`](#BoltPretension.ReadOnly)                                 | Gets or sets the ReadOnly.                                                                |
| [`SolveBehaviourType`](#BoltPretension.SolveBehaviourType)             | Gets or sets the SolveBehaviourType.                                                      |
| [`Suppressed`](#BoltPretension.Suppressed)                             | Gets or sets the Suppressed.                                                              |
| [`Tolerance`](#BoltPretension.Tolerance)                               | Gets or sets the Tolerance.                                                               |
| [`VisibleProperties`](#BoltPretension.VisibleProperties)               | Gets the list of properties that are visible for this object.                             |

<a id="property-detail"></a>

## Property detail

<a id="BoltPretension.Children"></a>

### *property* BoltPretension.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Comments"></a>

### *property* BoltPretension.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CoordinateSystem"></a>

### *property* BoltPretension.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CoordinateSystemBehavior"></a>

### *property* BoltPretension.CoordinateSystemBehavior *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemBehavior](../../../../Mechanical/DataModel/Enums/CoordinateSystemBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CoordinateSystemBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemBehavior.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.DataModelObjectCategory"></a>

### *property* BoltPretension.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.DefineBy"></a>

### *property* BoltPretension.DefineBy *: [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value indicating how the bolt pretension is defined at the analysis’ current step.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Figures"></a>

### *property* BoltPretension.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Formulation"></a>

### *property* BoltPretension.Formulation *: [Ansys.Mechanical.DataModel.Enums.FormulationType](../../../../Mechanical/DataModel/Enums/FormulationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FormulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Images"></a>

### *property* BoltPretension.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Increment"></a>

### *property* BoltPretension.Increment *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Increment.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.InternalObject"></a>

### *property* BoltPretension.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPretensionBoltLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Location"></a>

### *property* BoltPretension.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Preadjustment"></a>

### *property* BoltPretension.Preadjustment *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Preadjustment.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Preload"></a>

### *property* BoltPretension.Preload *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Preload.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Properties"></a>

### *property* BoltPretension.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.ReadOnly"></a>

### *property* BoltPretension.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.SolveBehaviourType"></a>

### *property* BoltPretension.SolveBehaviourType *: [Ansys.Mechanical.DataModel.Enums.SolveBehaviourType](../../../../Mechanical/DataModel/Enums/SolveBehaviourType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolveBehaviourType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolveBehaviourType.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Suppressed"></a>

### *property* BoltPretension.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Tolerance"></a>

### *property* BoltPretension.Tolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.VisibleProperties"></a>

### *property* BoltPretension.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltPretension.Activate"></a>

### BoltPretension.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.AddComment"></a>

### BoltPretension.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.AddFigure"></a>

### BoltPretension.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.AddImage"></a>

### BoltPretension.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CopyTo"></a>

### BoltPretension.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CreateParameter"></a>

### BoltPretension.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Delete"></a>

### BoltPretension.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Duplicate"></a>

### BoltPretension.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetChildren"></a>

### BoltPretension.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetDefineBy"></a>

### BoltPretension.GetDefineBy(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Bolt Define By value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetParameter"></a>

### BoltPretension.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GroupAllSimilarChildren"></a>

### BoltPretension.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GroupSimilarObjects"></a>

### BoltPretension.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PromoteToCoordinateSystem"></a>

### BoltPretension.PromoteToCoordinateSystem()

Run the PromoteToCoordinateSystem action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PromoteToNamedSelection"></a>

### BoltPretension.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PropertyByAPIName"></a>

### BoltPretension.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PropertyByName"></a>

### BoltPretension.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.RemoveParameter"></a>

### BoltPretension.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.SetDefineBy"></a>

### BoltPretension.SetDefineBy(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), type: [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy))

Sets the Bolt Define By value for a given solution step.

<!-- !! processed by numpydoc !! -->

