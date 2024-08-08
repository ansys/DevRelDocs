# `AcousticAbsorptionElement`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionElement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticAbsorptionElement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#AcousticAbsorptionElement.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#AcousticAbsorptionElement.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticAbsorptionElement.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticAbsorptionElement.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticAbsorptionElement.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticAbsorptionElement.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticAbsorptionElement.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticAbsorptionElement.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticAbsorptionElement.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticAbsorptionElement.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticAbsorptionElement.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticAbsorptionElement.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticAbsorptionElement.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticAbsorptionElement.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticAbsorptionElement.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                        | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticAbsorptionElement.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#AcousticAbsorptionElement.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Suppressed`](#AcousticAbsorptionElement.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticAbsorptionElement.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticAbsorptionElement.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AcousticAbsorptionElement.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#AcousticAbsorptionElement.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticAbsorptionElement.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticAbsorptionElement.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticAbsorptionElement.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticAbsorptionElement.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticAbsorptionElement.InternalObject"></a>

### *property* AcousticAbsorptionElement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Location"></a>

### *property* AcousticAbsorptionElement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.DataModelObjectCategory"></a>

### *property* AcousticAbsorptionElement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Suppressed"></a>

### *property* AcousticAbsorptionElement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.SharedRefBody"></a>

### *property* AcousticAbsorptionElement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Children"></a>

### *property* AcousticAbsorptionElement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Comments"></a>

### *property* AcousticAbsorptionElement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Figures"></a>

### *property* AcousticAbsorptionElement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Images"></a>

### *property* AcousticAbsorptionElement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.ReadOnly"></a>

### *property* AcousticAbsorptionElement.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticAbsorptionElement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Properties"></a>

### *property* AcousticAbsorptionElement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.VisibleProperties"></a>

### *property* AcousticAbsorptionElement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticAbsorptionElement.PromoteToNamedSelection"></a>

### AcousticAbsorptionElement.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Delete"></a>

### AcousticAbsorptionElement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetChildren"></a>

### AcousticAbsorptionElement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticAbsorptionElement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.AddComment"></a>

### AcousticAbsorptionElement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.AddFigure"></a>

### AcousticAbsorptionElement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.AddImage"></a>

### AcousticAbsorptionElement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Activate"></a>

### AcousticAbsorptionElement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.CopyTo"></a>

### AcousticAbsorptionElement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Duplicate"></a>

### AcousticAbsorptionElement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GroupAllSimilarChildren"></a>

### AcousticAbsorptionElement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GroupSimilarObjects"></a>

### AcousticAbsorptionElement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.PropertyByName"></a>

### AcousticAbsorptionElement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.PropertyByAPIName"></a>

### AcousticAbsorptionElement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.CreateParameter"></a>

### AcousticAbsorptionElement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetParameter"></a>

### AcousticAbsorptionElement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.RemoveParameter"></a>

### AcousticAbsorptionElement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

