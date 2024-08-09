# `ElementBirthAndDeath`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElementBirthAndDeath

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElementBirthAndDeath.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ElementBirthAndDeath.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElementBirthAndDeath.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElementBirthAndDeath.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementBirthAndDeath.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElementBirthAndDeath.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElementBirthAndDeath.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElementBirthAndDeath.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElementBirthAndDeath.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementBirthAndDeath.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElementBirthAndDeath.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElementBirthAndDeath.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ElementBirthAndDeath.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ElementBirthAndDeath.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElementBirthAndDeath.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`CurrentStep`](#ElementBirthAndDeath.CurrentStep)                         | Gets or sets the CurrentStep.                                 |
| [`Status`](#ElementBirthAndDeath.Status)                                   | Gets or sets the Status.                                      |
| [`Location`](#ElementBirthAndDeath.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#ElementBirthAndDeath.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Suppressed`](#ElementBirthAndDeath.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](#ElementBirthAndDeath.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ElementBirthAndDeath.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ElementBirthAndDeath.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ElementBirthAndDeath.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ElementBirthAndDeath.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ElementBirthAndDeath.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ElementBirthAndDeath.InternalObject"></a>

### *property* ElementBirthAndDeath.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementControlsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.CurrentStep"></a>

### *property* ElementBirthAndDeath.CurrentStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStep.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Status"></a>

### *property* ElementBirthAndDeath.Status *: [Ansys.Mechanical.DataModel.Enums.ElementControlsStatus](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ElementControlsStatus.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementControlsStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Status.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Location"></a>

### *property* ElementBirthAndDeath.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.DataModelObjectCategory"></a>

### *property* ElementBirthAndDeath.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Suppressed"></a>

### *property* ElementBirthAndDeath.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Children"></a>

### *property* ElementBirthAndDeath.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Comments"></a>

### *property* ElementBirthAndDeath.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Figures"></a>

### *property* ElementBirthAndDeath.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Images"></a>

### *property* ElementBirthAndDeath.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElementBirthAndDeath.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Properties"></a>

### *property* ElementBirthAndDeath.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.VisibleProperties"></a>

### *property* ElementBirthAndDeath.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementBirthAndDeath.Delete"></a>

### ElementBirthAndDeath.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetChildren"></a>

### ElementBirthAndDeath.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElementBirthAndDeath.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.AddComment"></a>

### ElementBirthAndDeath.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.AddFigure"></a>

### ElementBirthAndDeath.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.AddImage"></a>

### ElementBirthAndDeath.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Activate"></a>

### ElementBirthAndDeath.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.CopyTo"></a>

### ElementBirthAndDeath.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Duplicate"></a>

### ElementBirthAndDeath.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GroupAllSimilarChildren"></a>

### ElementBirthAndDeath.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GroupSimilarObjects"></a>

### ElementBirthAndDeath.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.PropertyByName"></a>

### ElementBirthAndDeath.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.PropertyByAPIName"></a>

### ElementBirthAndDeath.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.CreateParameter"></a>

### ElementBirthAndDeath.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetParameter"></a>

### ElementBirthAndDeath.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.RemoveParameter"></a>

### ElementBirthAndDeath.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

