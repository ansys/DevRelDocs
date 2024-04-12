<a id="premeshedcrack"></a>

# PreMeshedCrack

<a id="PreMeshedCrack"></a>

### *class* PreMeshedCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PreMeshedCrack.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`AddCommandSnippet`](#PreMeshedCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#PreMeshedCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PreMeshedCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PreMeshedCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PreMeshedCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PreMeshedCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PreMeshedCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PreMeshedCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PreMeshedCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PreMeshedCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PreMeshedCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PreMeshedCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PreMeshedCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PreMeshedCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PreMeshedCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`SolutionContours`](#PreMeshedCrack.SolutionContours)                                                              | Gets or sets the SolutionContours.                            |
| [`CrackSourceType`](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType)                         | Gets the CrackSourceType.                                     |
| [`ScopingMethod`](#PreMeshedCrack.ScopingMethod)                                                                    | Gets the ScopingMethod.                                       |
| [`CrackSymmetry`](#PreMeshedCrack.CrackSymmetry)                                                                    | Gets or sets the CrackSymmetry.                               |
| [`CrackFacesNodes`](#PreMeshedCrack.CrackFacesNodes)                                                                | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#PreMeshedCrack.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`CrackFront`](#PreMeshedCrack.CrackFront)                                                                          | Gets or sets the CrackFront.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`BottomFaceNodes`](#PreMeshedCrack.BottomFaceNodes)                                                                | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](#PreMeshedCrack.TopFaceNodes)                                                                      | Gets or sets the TopFaceNodes.                                |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`CrackID`](#PreMeshedCrack.CrackID)                                                                                | Gets the CrackID.                                             |
| [`Children`](#PreMeshedCrack.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#PreMeshedCrack.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#PreMeshedCrack.Figures)                                                                                | Gets the list of associated figures.                          |
| [`Images`](#PreMeshedCrack.Images)                                                                                  | Gets the list of associated images.                           |
| [`ReadOnly`](#PreMeshedCrack.ReadOnly)                                                                              | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PreMeshedCrack.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PreMeshedCrack.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PreMeshedCrack
```

<a id="property-detail"></a>

## Property detail

<a id="PreMeshedCrack.InternalObject"></a>

### *property* PreMeshedCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.SolutionContours"></a>

### *property* PreMeshedCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackSourceType"></a>

### *property* PreMeshedCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.ScopingMethod"></a>

### *property* PreMeshedCrack.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackSymmetry"></a>

### *property* PreMeshedCrack.CrackSymmetry *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSymmetry.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackFacesNodes"></a>

### *property* PreMeshedCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Suppressed"></a>

### *property* PreMeshedCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackFront"></a>

### *property* PreMeshedCrack.CrackFront *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFront.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CoordinateSystem"></a>

### *property* PreMeshedCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.BottomFaceNodes"></a>

### *property* PreMeshedCrack.BottomFaceNodes *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.TopFaceNodes"></a>

### *property* PreMeshedCrack.TopFaceNodes *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.DataModelObjectCategory"></a>

### *property* PreMeshedCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CrackID"></a>

### *property* PreMeshedCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Children"></a>

### *property* PreMeshedCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Comments"></a>

### *property* PreMeshedCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Figures"></a>

### *property* PreMeshedCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Images"></a>

### *property* PreMeshedCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.ReadOnly"></a>

### *property* PreMeshedCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PreMeshedCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Properties"></a>

### *property* PreMeshedCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.VisibleProperties"></a>

### *property* PreMeshedCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PreMeshedCrack.AddCommandSnippet"></a>

### PreMeshedCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Delete"></a>

### PreMeshedCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetChildren"></a>

### PreMeshedCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PreMeshedCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.AddComment"></a>

### PreMeshedCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.AddFigure"></a>

### PreMeshedCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.AddImage"></a>

### PreMeshedCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Activate"></a>

### PreMeshedCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CopyTo"></a>

### PreMeshedCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.Duplicate"></a>

### PreMeshedCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GroupAllSimilarChildren"></a>

### PreMeshedCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GroupSimilarObjects"></a>

### PreMeshedCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.PropertyByName"></a>

### PreMeshedCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.PropertyByAPIName"></a>

### PreMeshedCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.CreateParameter"></a>

### PreMeshedCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.GetParameter"></a>

### PreMeshedCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCrack.RemoveParameter"></a>

### PreMeshedCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
