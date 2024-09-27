# `AcousticImpedanceBoundary`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceBoundary"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticImpedanceBoundary.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticImpedanceBoundary.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticImpedanceBoundary.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticImpedanceBoundary.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticImpedanceBoundary.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticImpedanceBoundary.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticImpedanceBoundary.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticImpedanceBoundary.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticImpedanceBoundary.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticImpedanceBoundary.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticImpedanceBoundary.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticImpedanceBoundary.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticImpedanceBoundary.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticImpedanceBoundary.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticImpedanceBoundary.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticImpedanceBoundary.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticImpedanceBoundary.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AcousticImpedanceBoundary.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AcousticImpedanceBoundary.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticImpedanceBoundary.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AcousticImpedanceBoundary.Figures)                                 | Gets the list of associated figures.                          |
| [`Frequency`](#AcousticImpedanceBoundary.Frequency)                             | Gets or sets the Frequency.                                   |
| [`Images`](#AcousticImpedanceBoundary.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AcousticImpedanceBoundary.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticImpedanceBoundary.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#AcousticImpedanceBoundary.Properties)                           | Gets the list of properties for this object.                  |
| [`Reactance`](#AcousticImpedanceBoundary.Reactance)                             | Gets or sets the Reactance.                                   |
| [`ReadOnly`](#AcousticImpedanceBoundary.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Resistance`](#AcousticImpedanceBoundary.Resistance)                           | Gets or sets the Resistance.                                  |
| [`SharedRefBody`](#AcousticImpedanceBoundary.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#AcousticImpedanceBoundary.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#AcousticImpedanceBoundary.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticImpedanceBoundary.Children"></a>

### *property* AcousticImpedanceBoundary.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Comments"></a>

### *property* AcousticImpedanceBoundary.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.DataModelObjectCategory"></a>

### *property* AcousticImpedanceBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Figures"></a>

### *property* AcousticImpedanceBoundary.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Frequency"></a>

### *property* AcousticImpedanceBoundary.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Images"></a>

### *property* AcousticImpedanceBoundary.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.InternalObject"></a>

### *property* AcousticImpedanceBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Location"></a>

### *property* AcousticImpedanceBoundary.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Properties"></a>

### *property* AcousticImpedanceBoundary.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Reactance"></a>

### *property* AcousticImpedanceBoundary.Reactance *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Reactance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.ReadOnly"></a>

### *property* AcousticImpedanceBoundary.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Resistance"></a>

### *property* AcousticImpedanceBoundary.Resistance *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Resistance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.SharedRefBody"></a>

### *property* AcousticImpedanceBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Suppressed"></a>

### *property* AcousticImpedanceBoundary.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.VisibleProperties"></a>

### *property* AcousticImpedanceBoundary.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticImpedanceBoundary.Activate"></a>

### AcousticImpedanceBoundary.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.AddComment"></a>

### AcousticImpedanceBoundary.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.AddFigure"></a>

### AcousticImpedanceBoundary.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.AddImage"></a>

### AcousticImpedanceBoundary.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.CopyTo"></a>

### AcousticImpedanceBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.CreateParameter"></a>

### AcousticImpedanceBoundary.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Delete"></a>

### AcousticImpedanceBoundary.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.Duplicate"></a>

### AcousticImpedanceBoundary.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetChildren"></a>

### AcousticImpedanceBoundary.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GetParameter"></a>

### AcousticImpedanceBoundary.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GroupAllSimilarChildren"></a>

### AcousticImpedanceBoundary.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.GroupSimilarObjects"></a>

### AcousticImpedanceBoundary.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.PromoteToNamedSelection"></a>

### AcousticImpedanceBoundary.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.PropertyByAPIName"></a>

### AcousticImpedanceBoundary.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.PropertyByName"></a>

### AcousticImpedanceBoundary.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticImpedanceBoundary.RemoveParameter"></a>

### AcousticImpedanceBoundary.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

