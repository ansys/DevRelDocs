# AcousticThermoViscousBLIBoundary

### *class* AcousticThermoViscousBLIBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticThermoViscousBLIBoundary.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#AcousticThermoViscousBLIBoundary.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#AcousticThermoViscousBLIBoundary.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticThermoViscousBLIBoundary.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticThermoViscousBLIBoundary.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticThermoViscousBLIBoundary.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticThermoViscousBLIBoundary.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticThermoViscousBLIBoundary.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticThermoViscousBLIBoundary.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticThermoViscousBLIBoundary.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticThermoViscousBLIBoundary.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticThermoViscousBLIBoundary.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticThermoViscousBLIBoundary.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticThermoViscousBLIBoundary.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticThermoViscousBLIBoundary.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticThermoViscousBLIBoundary.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#AcousticThermoViscousBLIBoundary.Location)                                                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticThermoViscousBLIBoundary.Suppressed)                                                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticThermoViscousBLIBoundary.SharedRefBody)                                                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticThermoViscousBLIBoundary.Children)                                                               | Gets the list of children.                                    |
| [`Comments`](#AcousticThermoViscousBLIBoundary.Comments)                                                               | Gets the list of associated comments.                         |
| [`Figures`](#AcousticThermoViscousBLIBoundary.Figures)                                                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticThermoViscousBLIBoundary.Images)                                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticThermoViscousBLIBoundary.ReadOnly)                                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticThermoViscousBLIBoundary.Properties)                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticThermoViscousBLIBoundary.VisibleProperties)                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticThermoViscousBLIBoundary
```

## Property detail

### *property* AcousticThermoViscousBLIBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticThermoViscousBLIBoundary.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticThermoViscousBLIBoundary.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticThermoViscousBLIBoundary.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
