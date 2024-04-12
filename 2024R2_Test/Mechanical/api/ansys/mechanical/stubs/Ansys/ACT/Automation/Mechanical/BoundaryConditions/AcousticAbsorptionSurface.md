<a id="acousticabsorptionsurface"></a>

# AcousticAbsorptionSurface

<a id="AcousticAbsorptionSurface"></a>

### *class* AcousticAbsorptionSurface

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticAbsorptionSurface.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#AcousticAbsorptionSurface.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#AcousticAbsorptionSurface.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticAbsorptionSurface.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticAbsorptionSurface.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticAbsorptionSurface.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticAbsorptionSurface.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticAbsorptionSurface.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticAbsorptionSurface.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticAbsorptionSurface.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticAbsorptionSurface.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticAbsorptionSurface.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticAbsorptionSurface.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticAbsorptionSurface.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticAbsorptionSurface.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticAbsorptionSurface.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`AbsorptionCoefficient`](#AcousticAbsorptionSurface.AbsorptionCoefficient)                                            | Gets or sets the AbsorptionCoefficient.                       |
| [`Location`](#AcousticAbsorptionSurface.Location)                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticAbsorptionSurface.Suppressed)                                                                  | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticAbsorptionSurface.SharedRefBody)                                                            | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticAbsorptionSurface.Children)                                                                      | Gets the list of children.                                    |
| [`Comments`](#AcousticAbsorptionSurface.Comments)                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#AcousticAbsorptionSurface.Figures)                                                                        | Gets the list of associated figures.                          |
| [`Images`](#AcousticAbsorptionSurface.Images)                                                                          | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticAbsorptionSurface.ReadOnly)                                                                      | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticAbsorptionSurface.Properties)                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticAbsorptionSurface.VisibleProperties)                                                    | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticAbsorptionSurface
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticAbsorptionSurface.InternalObject"></a>

### *property* AcousticAbsorptionSurface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.AbsorptionCoefficient"></a>

### *property* AcousticAbsorptionSurface.AbsorptionCoefficient *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AbsorptionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Location"></a>

### *property* AcousticAbsorptionSurface.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.DataModelObjectCategory"></a>

### *property* AcousticAbsorptionSurface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Suppressed"></a>

### *property* AcousticAbsorptionSurface.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.SharedRefBody"></a>

### *property* AcousticAbsorptionSurface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Children"></a>

### *property* AcousticAbsorptionSurface.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Comments"></a>

### *property* AcousticAbsorptionSurface.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Figures"></a>

### *property* AcousticAbsorptionSurface.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Images"></a>

### *property* AcousticAbsorptionSurface.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.ReadOnly"></a>

### *property* AcousticAbsorptionSurface.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticAbsorptionSurface.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Properties"></a>

### *property* AcousticAbsorptionSurface.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.VisibleProperties"></a>

### *property* AcousticAbsorptionSurface.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticAbsorptionSurface.PromoteToNamedSelection"></a>

### AcousticAbsorptionSurface.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Delete"></a>

### AcousticAbsorptionSurface.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetChildren"></a>

### AcousticAbsorptionSurface.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticAbsorptionSurface.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.AddComment"></a>

### AcousticAbsorptionSurface.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.AddFigure"></a>

### AcousticAbsorptionSurface.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.AddImage"></a>

### AcousticAbsorptionSurface.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Activate"></a>

### AcousticAbsorptionSurface.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.CopyTo"></a>

### AcousticAbsorptionSurface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.Duplicate"></a>

### AcousticAbsorptionSurface.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GroupAllSimilarChildren"></a>

### AcousticAbsorptionSurface.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GroupSimilarObjects"></a>

### AcousticAbsorptionSurface.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.PropertyByName"></a>

### AcousticAbsorptionSurface.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.PropertyByAPIName"></a>

### AcousticAbsorptionSurface.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.CreateParameter"></a>

### AcousticAbsorptionSurface.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.GetParameter"></a>

### AcousticAbsorptionSurface.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionSurface.RemoveParameter"></a>

### AcousticAbsorptionSurface.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
