# `Alert`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.Alert"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.Alert

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Alert.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Alert.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Alert.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Alert.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Alert.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Alert.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Alert.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Alert.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Alert.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Alert.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Alert.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Alert.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Alert.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Alert.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Alert.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Alert.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Alert.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Alert.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`FailsIf`](#Alert.FailsIf)                                 | Gets or sets the FailsIf.                                     |
| [`Images`](#Alert.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Alert.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Alert.Properties)                           | Gets the list of properties for this object.                  |
| [`Status`](#Alert.Status)                                   | Gets the Status.                                              |
| [`Value`](#Alert.Value)                                     | Gets or sets the Value.                                       |
| [`VisibleProperties`](#Alert.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Alert.Children"></a>

### *property* Alert.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Comments"></a>

### *property* Alert.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Alert.DataModelObjectCategory"></a>

### *property* Alert.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Alert.FailsIf"></a>

### *property* Alert.FailsIf *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FailsIf.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Images"></a>

### *property* Alert.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Alert.InternalObject"></a>

### *property* Alert.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAlertAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Properties"></a>

### *property* Alert.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Status"></a>

### *property* Alert.Status *: [Ansys.Mechanical.DataModel.Enums.PassFailResult](../../../../Mechanical/DataModel/Enums/PassFailResult.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.PassFailResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Status.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Value"></a>

### *property* Alert.Value *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Value.

<!-- !! processed by numpydoc !! -->

<a id="Alert.VisibleProperties"></a>

### *property* Alert.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Alert.Activate"></a>

### Alert.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Alert.AddComment"></a>

### Alert.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Alert.AddImage"></a>

### Alert.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Alert.CopyTo"></a>

### Alert.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Alert.CreateParameter"></a>

### Alert.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Delete"></a>

### Alert.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Duplicate"></a>

### Alert.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetChildren"></a>

### Alert.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetParameter"></a>

### Alert.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GroupAllSimilarChildren"></a>

### Alert.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GroupSimilarObjects"></a>

### Alert.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Alert.PropertyByAPIName"></a>

### Alert.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Alert.PropertyByName"></a>

### Alert.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Alert.RemoveParameter"></a>

### Alert.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

