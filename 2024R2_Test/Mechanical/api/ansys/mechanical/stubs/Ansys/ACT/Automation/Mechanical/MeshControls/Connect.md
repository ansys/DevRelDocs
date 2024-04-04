# Connect

### *class* Connect

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Connect.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GenerateMesh`](#Connect.GenerateMesh)                       | Generate the Mesh.                                                                |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ConnectionToleranceList`](#Connect.ConnectionToleranceList)                                                          | Gets or sets the ConnectionToleranceList.                     |
| [`ConnectionTolerance`](#Connect.ConnectionTolerance)                                                                  | Gets or sets the ConnectionTolerance.                         |
| [`ConnectionSize`](#Connect.ConnectionSize)                                                                            | Gets or sets the ConnectionSize.                              |
| [`CoplanarAngleTolerance`](#Connect.CoplanarAngleTolerance)                                                            | Gets or sets the CoplanarAngleTolerance.                      |
| [`ConnectionOption`](#Connect.ConnectionOption)                                                                        | Gets or sets the ConnectionOption.                            |
| [`MultipleConnectionStep`](#Connect.MultipleConnectionStep)                                                            | Gets or sets the MultipleConnectionStep.                      |
| [`PerformIntersections`](#Connect.PerformIntersections)                                                                | Gets or sets the PerformIntersections.                        |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#Connect.Location)                                                                                        | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#Connect.ScopingMethod)                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Connect.Suppressed)                                                                                    | Gets or sets the Suppressed.                                  |
| [`Children`](#Connect.Children)                                                                                        | Gets the list of children.                                    |
| [`Comments`](#Connect.Comments)                                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#Connect.Figures)                                                                                          | Gets the list of associated figures.                          |
| [`Images`](#Connect.Images)                                                                                            | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Connect.Properties)                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Connect.VisibleProperties)                                                                      | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Connect
```

## Property detail

### *property* Connect.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Connect.ConnectionToleranceList *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionToleranceList.

<!-- !! processed by numpydoc !! -->

### *property* Connect.ConnectionTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionTolerance.

<!-- !! processed by numpydoc !! -->

### *property* Connect.ConnectionSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionSize.

<!-- !! processed by numpydoc !! -->

### *property* Connect.CoplanarAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoplanarAngleTolerance.

<!-- !! processed by numpydoc !! -->

### *property* Connect.ConnectionOption *: [Ansys.Mechanical.DataModel.Enums.ConnectionOptions](../../../../Mechanical/DataModel/Enums/ConnectionOptions.md#ConnectionOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionOption.

<!-- !! processed by numpydoc !! -->

### *property* Connect.MultipleConnectionStep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultipleConnectionStep.

<!-- !! processed by numpydoc !! -->

### *property* Connect.PerformIntersections *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PerformIntersections.

<!-- !! processed by numpydoc !! -->

### *property* Connect.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* Connect.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Connect.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Connect.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* Connect.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Connect.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Connect.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Connect.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Connect.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Connect.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Connect.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Connect.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Connect.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### Connect.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Connect.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Connect.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Connect.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Connect.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Connect.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Connect.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Connect.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Connect.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Connect.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Connect.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Connect.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Connect.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Connect.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Connect.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Connect.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Connect.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
