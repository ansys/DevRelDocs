<a id="emtransducer"></a>

# EMTransducer

<a id="EMTransducer"></a>

### *class* EMTransducer

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EMTransducer.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#EMTransducer.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#EMTransducer.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#EMTransducer.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#EMTransducer.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#EMTransducer.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#EMTransducer.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EMTransducer.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#EMTransducer.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#EMTransducer.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#EMTransducer.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#EMTransducer.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EMTransducer.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EMTransducer.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EMTransducer.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EMTransducer.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EMTransducer.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#EMTransducer.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#EMTransducer.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EMTransducer.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#EMTransducer.NumberOfSegments)                                                                   | Gets or sets the NumberOfSegments.                            |
| [`VoltageDifference`](#EMTransducer.VoltageDifference)                                                                 | Gets the VoltageDifference.                                   |
| [`InitialGap`](#EMTransducer.InitialGap)                                                                               | Gets or sets the InitialGap.                                  |
| [`MinimalGap`](#EMTransducer.MinimalGap)                                                                               | Gets or sets the MinimalGap.                                  |
| [`ZCoordinate`](#EMTransducer.ZCoordinate)                                                                             | Gets or sets the ZCoordinate.                                 |
| [`StiffnessMethod`](#EMTransducer.StiffnessMethod)                                                                     | Gets or sets the StiffnessMethod.                             |
| [`GAPDirection`](#EMTransducer.GAPDirection)                                                                           | Gets or sets the GAPDirection.                                |
| [`IndependentVariable`](#EMTransducer.IndependentVariable)                                                             | Gets or sets the IndependentVariable.                         |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets the CoordinateSystem.                                    |
| [`Location`](#EMTransducer.Location)                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#EMTransducer.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#EMTransducer.SharedRefBody)                                                                         | Gets or sets the SharedRefBody.                               |
| [`Children`](#EMTransducer.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#EMTransducer.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#EMTransducer.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#EMTransducer.Images)                                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#EMTransducer.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#EMTransducer.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#EMTransducer.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import EMTransducer
```

<a id="property-detail"></a>

## Property detail

<a id="EMTransducer.InternalObject"></a>

### *property* EMTransducer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.NumberOfSegments"></a>

### *property* EMTransducer.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.VoltageDifference"></a>

### *property* EMTransducer.VoltageDifference *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VoltageDifference.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.InitialGap"></a>

### *property* EMTransducer.InitialGap *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialGap.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.MinimalGap"></a>

### *property* EMTransducer.MinimalGap *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimalGap.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ZCoordinate"></a>

### *property* EMTransducer.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.StiffnessMethod"></a>

### *property* EMTransducer.StiffnessMethod *: [Ansys.Mechanical.DataModel.Enums.StiffnessMethodType](../../../../Mechanical/DataModel/Enums/StiffnessMethodType.md#StiffnessMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessMethod.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GAPDirection"></a>

### *property* EMTransducer.GAPDirection *: [Ansys.Mechanical.DataModel.Enums.GAPDirectionType](../../../../Mechanical/DataModel/Enums/GAPDirectionType.md#GAPDirectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GAPDirection.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.IndependentVariable"></a>

### *property* EMTransducer.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.CoordinateSystem"></a>

### *property* EMTransducer.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Location"></a>

### *property* EMTransducer.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.DataModelObjectCategory"></a>

### *property* EMTransducer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Suppressed"></a>

### *property* EMTransducer.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.SharedRefBody"></a>

### *property* EMTransducer.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Children"></a>

### *property* EMTransducer.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Comments"></a>

### *property* EMTransducer.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Figures"></a>

### *property* EMTransducer.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Images"></a>

### *property* EMTransducer.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.ReadOnly"></a>

### *property* EMTransducer.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EMTransducer.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Properties"></a>

### *property* EMTransducer.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.VisibleProperties"></a>

### *property* EMTransducer.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EMTransducer.GetActivateAtLoadStep"></a>

### EMTransducer.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.SetActivateAtLoadStep"></a>

### EMTransducer.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetComponentActivateAtLoadStep"></a>

### EMTransducer.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.SetComponentActivateAtLoadStep"></a>

### EMTransducer.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.PromoteToNamedSelection"></a>

### EMTransducer.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Delete"></a>

### EMTransducer.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetChildren"></a>

### EMTransducer.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EMTransducer.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.AddComment"></a>

### EMTransducer.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.AddFigure"></a>

### EMTransducer.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.AddImage"></a>

### EMTransducer.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Activate"></a>

### EMTransducer.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.CopyTo"></a>

### EMTransducer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.Duplicate"></a>

### EMTransducer.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GroupAllSimilarChildren"></a>

### EMTransducer.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GroupSimilarObjects"></a>

### EMTransducer.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.PropertyByName"></a>

### EMTransducer.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.PropertyByAPIName"></a>

### EMTransducer.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.CreateParameter"></a>

### EMTransducer.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.GetParameter"></a>

### EMTransducer.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EMTransducer.RemoveParameter"></a>

### EMTransducer.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
