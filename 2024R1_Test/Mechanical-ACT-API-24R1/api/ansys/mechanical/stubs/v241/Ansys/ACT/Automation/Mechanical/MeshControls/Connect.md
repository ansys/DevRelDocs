<!-- vale off -->

<a id="connect"></a>

# `Connect`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshControls.Connect"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshControls.Connect

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Connect.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#Connect.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#Connect.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Connect.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Connect.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Connect.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Connect.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Connect.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Connect.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Connect.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Connect.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Connect.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Connect.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Connect.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Connect.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Connect.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Connect.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                      | Gets the internal object. For advanced usage only.            |
| [`ConnectionToleranceList`](#Connect.ConnectionToleranceList) | Gets or sets the ConnectionToleranceList.                     |
| [`ConnectionTolerance`](#Connect.ConnectionTolerance)         | Gets or sets the ConnectionTolerance.                         |
| [`ConnectionSize`](#Connect.ConnectionSize)                   | Gets or sets the ConnectionSize.                              |
| [`CoplanarAngleTolerance`](#Connect.CoplanarAngleTolerance)   | Gets or sets the CoplanarAngleTolerance.                      |
| [`ConnectionOption`](#Connect.ConnectionOption)               | Gets or sets the ConnectionOption.                            |
| [`MultipleConnectionStep`](#Connect.MultipleConnectionStep)   | Gets or sets the MultipleConnectionStep.                      |
| [`PerformIntersections`](#Connect.PerformIntersections)       | Gets or sets the PerformIntersections.                        |
| [`NamedSelection`](#Connect.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`Location`](#Connect.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#Connect.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#Connect.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Connect.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](#Connect.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Connect.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#Connect.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Connect.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                      | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Connect.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Connect.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Connect.InternalObject"></a>

### *property* Connect.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionToleranceList"></a>

### *property* Connect.ConnectionToleranceList *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionToleranceList.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionTolerance"></a>

### *property* Connect.ConnectionTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionSize"></a>

### *property* Connect.ConnectionSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionSize.

<!-- !! processed by numpydoc !! -->

<a id="Connect.CoplanarAngleTolerance"></a>

### *property* Connect.CoplanarAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoplanarAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionOption"></a>

### *property* Connect.ConnectionOption *: [Ansys.Mechanical.DataModel.Enums.ConnectionOptions](../../../../Mechanical/DataModel/Enums/ConnectionOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConnectionOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionOption.

<!-- !! processed by numpydoc !! -->

<a id="Connect.MultipleConnectionStep"></a>

### *property* Connect.MultipleConnectionStep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultipleConnectionStep.

<!-- !! processed by numpydoc !! -->

<a id="Connect.PerformIntersections"></a>

### *property* Connect.PerformIntersections *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PerformIntersections.

<!-- !! processed by numpydoc !! -->

<a id="Connect.NamedSelection"></a>

### *property* Connect.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Location"></a>

### *property* Connect.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Connect.DataModelObjectCategory"></a>

### *property* Connect.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ScopingMethod"></a>

### *property* Connect.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Suppressed"></a>

### *property* Connect.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Children"></a>

### *property* Connect.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Comments"></a>

### *property* Connect.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Figures"></a>

### *property* Connect.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Images"></a>

### *property* Connect.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Connect.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Properties"></a>

### *property* Connect.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Connect.VisibleProperties"></a>

### *property* Connect.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Connect.GenerateMesh"></a>

### Connect.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Connect.RenameBasedOnDefinition"></a>

### Connect.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Delete"></a>

### Connect.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetChildren"></a>

### Connect.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Connect.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Connect.AddComment"></a>

### Connect.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Connect.AddFigure"></a>

### Connect.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Connect.AddImage"></a>

### Connect.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Activate"></a>

### Connect.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Connect.CopyTo"></a>

### Connect.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Duplicate"></a>

### Connect.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GroupAllSimilarChildren"></a>

### Connect.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GroupSimilarObjects"></a>

### Connect.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Connect.PropertyByName"></a>

### Connect.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Connect.PropertyByAPIName"></a>

### Connect.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Connect.CreateParameter"></a>

### Connect.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetParameter"></a>

### Connect.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.RemoveParameter"></a>

### Connect.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
