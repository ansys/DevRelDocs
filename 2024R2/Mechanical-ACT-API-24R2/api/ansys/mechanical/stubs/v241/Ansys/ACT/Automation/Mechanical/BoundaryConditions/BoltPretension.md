# `BoltPretension`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BoltPretension

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BoltPretension.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.PromoteToCoordinateSystem) | Run the PromoteToCoordinateSystem action.                                         |
| [`GetDefineBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.GetDefineBy)                             | Gets the Bolt Define By value at a given solution step.                           |
| [`SetDefineBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.SetDefineBy)                             | Sets the Bolt Define By value for a given solution step.                          |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Delete)                                       | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.AddComment)                               | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.AddFigure)                                 | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.AddImage)                                   | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Activate)                                   | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.CopyTo)                                       | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Duplicate)                                 | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.PropertyByName)                       | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.PropertyByAPIName)                 | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.CreateParameter)                     | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.GetParameter)                           | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`DefineBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.DefineBy)                                 | Gets a value indicating how the bolt pretension is defined at the analysis' current step.   |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#id0)                                               | Gets the internal object. For advanced usage only.                                          |
| [`Increment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Increment)                               | Gets the Increment.                                                                         |
| [`Preadjustment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Preadjustment)                       | Gets the Preadjustment.                                                                     |
| [`Preload`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Preload)                                   | Gets the Preload.                                                                           |
| [`Tolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Tolerance)                               | Gets or sets the Tolerance.                                                                 |
| [`CoordinateSystemBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.CoordinateSystemBehavior) | Gets or sets the CoordinateSystemBehavior.                                                  |
| [`Formulation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Formulation)                           | Gets or sets the Formulation.                                                               |
| [`SolveBehaviourType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.SolveBehaviourType)             | Gets or sets the SolveBehaviourType.                                                        |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Suppressed)                             | Gets or sets the Suppressed.                                                                |
| [`CoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.CoordinateSystem)                 | Gets or sets the CoordinateSystem.                                                          |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Location)                                 | Gets or sets the Location.                                                                  |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.DataModelObjectCategory)   | Gets the current DataModelObject's category.                                                |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Children)                                 | Gets the list of children.                                                                  |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Comments)                                 | Gets the list of associated comments.                                                       |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Figures)                                   | Gets the list of associated figures.                                                        |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Images)                                     | Gets the list of associated images.                                                         |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.ReadOnly)                                 | Gets or sets the ReadOnly.                                                                  |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#id0)                                               | Gets the internal object. For advanced usage only.                                          |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.Properties)                             | Gets the list of properties for this object.                                                |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/BoltPretension.md#BoltPretension.VisibleProperties)               | Gets the list of properties that are visible for this object.                               |

<a id="property-detail"></a>

## Property detail

<a id="BoltPretension.DefineBy"></a>

### *property* BoltPretension.DefineBy *: [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value indicating how the bolt pretension is defined at the analysis' current step.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.InternalObject"></a>

### *property* BoltPretension.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPretensionBoltLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Increment"></a>

### *property* BoltPretension.Increment *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Increment.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Preadjustment"></a>

### *property* BoltPretension.Preadjustment *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Preadjustment.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Preload"></a>

### *property* BoltPretension.Preload *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Preload.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Tolerance"></a>

### *property* BoltPretension.Tolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CoordinateSystemBehavior"></a>

### *property* BoltPretension.CoordinateSystemBehavior *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemBehavior](../../../../Mechanical/DataModel/Enums/CoordinateSystemBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemBehavior.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Formulation"></a>

### *property* BoltPretension.Formulation *: [Ansys.Mechanical.DataModel.Enums.FormulationType](../../../../Mechanical/DataModel/Enums/FormulationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FormulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.SolveBehaviourType"></a>

### *property* BoltPretension.SolveBehaviourType *: [Ansys.Mechanical.DataModel.Enums.SolveBehaviourType](../../../../Mechanical/DataModel/Enums/SolveBehaviourType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolveBehaviourType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolveBehaviourType.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Suppressed"></a>

### *property* BoltPretension.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CoordinateSystem"></a>

### *property* BoltPretension.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Location"></a>

### *property* BoltPretension.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.DataModelObjectCategory"></a>

### *property* BoltPretension.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Children"></a>

### *property* BoltPretension.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Comments"></a>

### *property* BoltPretension.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Figures"></a>

### *property* BoltPretension.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Images"></a>

### *property* BoltPretension.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.ReadOnly"></a>

### *property* BoltPretension.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BoltPretension.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Properties"></a>

### *property* BoltPretension.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.VisibleProperties"></a>

### *property* BoltPretension.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltPretension.PromoteToNamedSelection"></a>

### BoltPretension.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PromoteToCoordinateSystem"></a>

### BoltPretension.PromoteToCoordinateSystem()

Run the PromoteToCoordinateSystem action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetDefineBy"></a>

### BoltPretension.GetDefineBy(stepNumber: System.Int32)

Gets the Bolt Define By value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.SetDefineBy"></a>

### BoltPretension.SetDefineBy(stepNumber: System.Int32, type: [Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy](../../../../Mechanical/DataModel/Enums/BoltLoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BoltLoadDefineBy))

Sets the Bolt Define By value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Delete"></a>

### BoltPretension.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetChildren"></a>

### BoltPretension.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BoltPretension.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### BoltPretension.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Activate"></a>

### BoltPretension.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CopyTo"></a>

### BoltPretension.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.Duplicate"></a>

### BoltPretension.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GroupAllSimilarChildren"></a>

### BoltPretension.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GroupSimilarObjects"></a>

### BoltPretension.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PropertyByName"></a>

### BoltPretension.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.PropertyByAPIName"></a>

### BoltPretension.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.CreateParameter"></a>

### BoltPretension.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.GetParameter"></a>

### BoltPretension.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltPretension.RemoveParameter"></a>

### BoltPretension.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

