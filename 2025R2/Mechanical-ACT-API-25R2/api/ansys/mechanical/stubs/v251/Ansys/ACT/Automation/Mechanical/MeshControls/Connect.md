# `Connect`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.Connect"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Connect

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Connect.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Connect.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Connect.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Connect.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Connect.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Connect.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Connect.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Connect.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Connect.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Connect.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#Connect.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Connect.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Connect.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Connect.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Connect.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Connect.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Connect.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Connect.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Connect.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Connect.Comments)                               | Gets the list of associated comments.                         |
| [`ConnectionOption`](#Connect.ConnectionOption)               | Gets or sets the ConnectionOption.                            |
| [`ConnectionSize`](#Connect.ConnectionSize)                   | Gets or sets the ConnectionSize.                              |
| [`ConnectionTolerance`](#Connect.ConnectionTolerance)         | Gets or sets the ConnectionTolerance.                         |
| [`ConnectionToleranceList`](#Connect.ConnectionToleranceList) | Gets or sets the ConnectionToleranceList.                     |
| [`CoplanarAngleTolerance`](#Connect.CoplanarAngleTolerance)   | Gets or sets the CoplanarAngleTolerance.                      |
| [`DataModelObjectCategory`](#Connect.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Connect.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Connect.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Connect.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Connect.Location)                               | Gets or sets the Location.                                    |
| [`MultipleConnectionStep`](#Connect.MultipleConnectionStep)   | Gets or sets the MultipleConnectionStep.                      |
| [`NamedSelection`](#Connect.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`PerformIntersections`](#Connect.PerformIntersections)       | Gets or sets the PerformIntersections.                        |
| [`Properties`](#Connect.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Connect.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Connect.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Connect.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Connect.Children"></a>

### *property* Connect.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Comments"></a>

### *property* Connect.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionOption"></a>

### *property* Connect.ConnectionOption *: [Ansys.Mechanical.DataModel.Enums.ConnectionOptions](../../../../Mechanical/DataModel/Enums/ConnectionOptions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ConnectionOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionOption.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionSize"></a>

### *property* Connect.ConnectionSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionSize.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionTolerance"></a>

### *property* Connect.ConnectionTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionToleranceList"></a>

### *property* Connect.ConnectionToleranceList *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionToleranceList.

<!-- !! processed by numpydoc !! -->

<a id="Connect.CoplanarAngleTolerance"></a>

### *property* Connect.CoplanarAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoplanarAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connect.DataModelObjectCategory"></a>

### *property* Connect.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Figures"></a>

### *property* Connect.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Images"></a>

### *property* Connect.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Connect.InternalObject"></a>

### *property* Connect.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Location"></a>

### *property* Connect.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Connect.MultipleConnectionStep"></a>

### *property* Connect.MultipleConnectionStep *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultipleConnectionStep.

<!-- !! processed by numpydoc !! -->

<a id="Connect.NamedSelection"></a>

### *property* Connect.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Connect.PerformIntersections"></a>

### *property* Connect.PerformIntersections *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PerformIntersections.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Properties"></a>

### *property* Connect.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ScopingMethod"></a>

### *property* Connect.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Suppressed"></a>

### *property* Connect.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Connect.VisibleProperties"></a>

### *property* Connect.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Connect.Activate"></a>

### Connect.Activate()

Activate the current object.

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

### Connect.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Connect.CopyTo"></a>

### Connect.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Connect.CreateParameter"></a>

### Connect.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Delete"></a>

### Connect.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Duplicate"></a>

### Connect.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GenerateMesh"></a>

### Connect.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetChildren"></a>

### Connect.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetParameter"></a>

### Connect.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GroupAllSimilarChildren"></a>

### Connect.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GroupSimilarObjects"></a>

### Connect.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Connect.PropertyByAPIName"></a>

### Connect.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Connect.PropertyByName"></a>

### Connect.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Connect.RemoveParameter"></a>

### Connect.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.RenameBasedOnDefinition"></a>

### Connect.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

