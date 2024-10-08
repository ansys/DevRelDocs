# ImportedCFDPressure

### *class* ImportedCFDPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedCFDPressure.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#ImportedCFDPressure.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ImportedCFDPressure.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedCFDPressure.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedCFDPressure.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedCFDPressure.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#ImportedCFDPressure.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#ImportedCFDPressure.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedCFDPressure.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedCFDPressure.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedCFDPressure.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedCFDPressure.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedCFDPressure.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedCFDPressure.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedCFDPressure.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedCFDPressure.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CFDPressureFile`](#ImportedCFDPressure.CFDPressureFile)                                                              | Gets or sets the CFDPressureFile.                             |
| [`Location`](#ImportedCFDPressure.Location)                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#ImportedCFDPressure.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#ImportedCFDPressure.SharedRefBody)                                                                  | Gets or sets the SharedRefBody.                               |
| [`Children`](#ImportedCFDPressure.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#ImportedCFDPressure.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#ImportedCFDPressure.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#ImportedCFDPressure.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedCFDPressure.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedCFDPressure.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedCFDPressure.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import ImportedCFDPressure
```

## Property detail

### *property* ImportedCFDPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.CFDPressureFile *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CFDPressureFile.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCFDPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedCFDPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedCFDPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
