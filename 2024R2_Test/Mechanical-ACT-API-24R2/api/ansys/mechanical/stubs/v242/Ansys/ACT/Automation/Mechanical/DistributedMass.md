# `DistributedMass`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.DistributedMass"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.DistributedMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#DistributedMass.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#DistributedMass.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#DistributedMass.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DistributedMass.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DistributedMass.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#DistributedMass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#DistributedMass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#DistributedMass.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#DistributedMass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#DistributedMass.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#DistributedMass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#DistributedMass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DistributedMass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#DistributedMass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#DistributedMass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#DistributedMass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#DistributedMass.Children)                               | Gets the list of children.                                    |
| [`Comments`](#DistributedMass.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#DistributedMass.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ElementAPDLName`](#DistributedMass.ElementAPDLName)                 | Gets or sets the ElementAPDLName.                             |
| [`Figures`](#DistributedMass.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#DistributedMass.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#DistributedMass.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IsDistributedMass`](#DistributedMass.IsDistributedMass)             | Gets the IsDistributedMass.                                   |
| [`Location`](#DistributedMass.Location)                               | Gets or sets the Geometry.                                    |
| [`MassPerUnitArea`](#DistributedMass.MassPerUnitArea)                 | Gets or sets the MassPerUnitArea.                             |
| [`MassType`](#DistributedMass.MassType)                               | Gets or sets the MassType.                                    |
| [`Properties`](#DistributedMass.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#DistributedMass.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`RemotePoint`](#DistributedMass.RemotePoint)                         | Gets the remote point associated to the point mass.           |
| [`Suppressed`](#DistributedMass.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TotalMass`](#DistributedMass.TotalMass)                             | Gets or sets the TotalMass.                                   |
| [`VisibleProperties`](#DistributedMass.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="DistributedMass.Children"></a>

### *property* DistributedMass.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Comments"></a>

### *property* DistributedMass.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.DataModelObjectCategory"></a>

### *property* DistributedMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.ElementAPDLName"></a>

### *property* DistributedMass.ElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Figures"></a>

### *property* DistributedMass.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Images"></a>

### *property* DistributedMass.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.InternalObject"></a>

### *property* DistributedMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.IsDistributedMass"></a>

### *property* DistributedMass.IsDistributedMass *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Location"></a>

### *property* DistributedMass.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.MassPerUnitArea"></a>

### *property* DistributedMass.MassPerUnitArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassPerUnitArea.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.MassType"></a>

### *property* DistributedMass.MassType *: [Ansys.Mechanical.DataModel.Enums.DistributedMassInputType](../../../Mechanical/DataModel/Enums/DistributedMassInputType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DistributedMassInputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassType.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Properties"></a>

### *property* DistributedMass.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.ReadOnly"></a>

### *property* DistributedMass.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.RemotePoint"></a>

### *property* DistributedMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Suppressed"></a>

### *property* DistributedMass.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.TotalMass"></a>

### *property* DistributedMass.TotalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TotalMass.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.VisibleProperties"></a>

### *property* DistributedMass.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DistributedMass.Activate"></a>

### DistributedMass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.AddCommandSnippet"></a>

### DistributedMass.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.AddComment"></a>

### DistributedMass.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.AddFigure"></a>

### DistributedMass.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.AddImage"></a>

### DistributedMass.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.CopyTo"></a>

### DistributedMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.CreateParameter"></a>

### DistributedMass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Delete"></a>

### DistributedMass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Duplicate"></a>

### DistributedMass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetChildren"></a>

### DistributedMass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetParameter"></a>

### DistributedMass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GroupAllSimilarChildren"></a>

### DistributedMass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GroupSimilarObjects"></a>

### DistributedMass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.PropertyByAPIName"></a>

### DistributedMass.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.PropertyByName"></a>

### DistributedMass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.RemoveParameter"></a>

### DistributedMass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

