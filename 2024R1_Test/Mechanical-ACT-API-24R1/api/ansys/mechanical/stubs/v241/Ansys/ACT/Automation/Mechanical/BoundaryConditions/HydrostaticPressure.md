# `HydrostaticPressure`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HydrostaticPressure"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HydrostaticPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a HydrostaticPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#HydrostaticPressure.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#HydrostaticPressure.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#HydrostaticPressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#HydrostaticPressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#HydrostaticPressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#HydrostaticPressure.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#HydrostaticPressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#HydrostaticPressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#HydrostaticPressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#HydrostaticPressure.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#HydrostaticPressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#HydrostaticPressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#HydrostaticPressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#HydrostaticPressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#HydrostaticPressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#HydrostaticPressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#HydrostaticPressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#HydrostaticPressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#HydrostaticPressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Direction`](#HydrostaticPressure.Direction)                             | Gets or sets the Direction.                                   |
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`XComponent`](#HydrostaticPressure.XComponent)                           | Gets the XComponent.                                          |
| [`YComponent`](#HydrostaticPressure.YComponent)                           | Gets the YComponent.                                          |
| [`ZComponent`](#HydrostaticPressure.ZComponent)                           | Gets the ZComponent.                                          |
| [`Magnitude`](#HydrostaticPressure.Magnitude)                             | Gets the Magnitude.                                           |
| [`FluidDensity`](#HydrostaticPressure.FluidDensity)                       | Gets or sets the FluidDensity.                                |
| [`XCoordinate`](#HydrostaticPressure.XCoordinate)                         | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#HydrostaticPressure.YCoordinate)                         | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#HydrostaticPressure.ZCoordinate)                         | Gets or sets the ZCoordinate.                                 |
| [`AppliedBy`](#HydrostaticPressure.AppliedBy)                             | Gets or sets the AppliedBy.                                   |
| [`DefineBy`](#HydrostaticPressure.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`ShellFace`](#HydrostaticPressure.ShellFace)                             | Gets or sets the ShellFace.                                   |
| [`CoordinateSystem`](#HydrostaticPressure.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`Location`](#HydrostaticPressure.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#HydrostaticPressure.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#HydrostaticPressure.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#HydrostaticPressure.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#HydrostaticPressure.Children)                               | Gets the list of children.                                    |
| [`Comments`](#HydrostaticPressure.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#HydrostaticPressure.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#HydrostaticPressure.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#HydrostaticPressure.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#HydrostaticPressure.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#HydrostaticPressure.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="HydrostaticPressure.Direction"></a>

### *property* HydrostaticPressure.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.InternalObject"></a>

### *property* HydrostaticPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.XComponent"></a>

### *property* HydrostaticPressure.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.YComponent"></a>

### *property* HydrostaticPressure.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ZComponent"></a>

### *property* HydrostaticPressure.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Magnitude"></a>

### *property* HydrostaticPressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.FluidDensity"></a>

### *property* HydrostaticPressure.FluidDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidDensity.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.XCoordinate"></a>

### *property* HydrostaticPressure.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.YCoordinate"></a>

### *property* HydrostaticPressure.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ZCoordinate"></a>

### *property* HydrostaticPressure.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AppliedBy"></a>

### *property* HydrostaticPressure.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../Mechanical/DataModel/Enums/LoadAppliedBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadAppliedBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.DefineBy"></a>

### *property* HydrostaticPressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ShellFace"></a>

### *property* HydrostaticPressure.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.CoordinateSystem"></a>

### *property* HydrostaticPressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Location"></a>

### *property* HydrostaticPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.DataModelObjectCategory"></a>

### *property* HydrostaticPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Suppressed"></a>

### *property* HydrostaticPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.SharedRefBody"></a>

### *property* HydrostaticPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Children"></a>

### *property* HydrostaticPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Comments"></a>

### *property* HydrostaticPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Figures"></a>

### *property* HydrostaticPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Images"></a>

### *property* HydrostaticPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ReadOnly"></a>

### *property* HydrostaticPressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* HydrostaticPressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Properties"></a>

### *property* HydrostaticPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.VisibleProperties"></a>

### *property* HydrostaticPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HydrostaticPressure.GetActivateAtLoadStep"></a>

### HydrostaticPressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.SetActivateAtLoadStep"></a>

### HydrostaticPressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetComponentActivateAtLoadStep"></a>

### HydrostaticPressure.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.SetComponentActivateAtLoadStep"></a>

### HydrostaticPressure.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.PromoteToNamedSelection"></a>

### HydrostaticPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Delete"></a>

### HydrostaticPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetChildren"></a>

### HydrostaticPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### HydrostaticPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AddComment"></a>

### HydrostaticPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AddFigure"></a>

### HydrostaticPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AddImage"></a>

### HydrostaticPressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Activate"></a>

### HydrostaticPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.CopyTo"></a>

### HydrostaticPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Duplicate"></a>

### HydrostaticPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GroupAllSimilarChildren"></a>

### HydrostaticPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GroupSimilarObjects"></a>

### HydrostaticPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.PropertyByName"></a>

### HydrostaticPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.PropertyByAPIName"></a>

### HydrostaticPressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.CreateParameter"></a>

### HydrostaticPressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetParameter"></a>

### HydrostaticPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.RemoveParameter"></a>

### HydrostaticPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

