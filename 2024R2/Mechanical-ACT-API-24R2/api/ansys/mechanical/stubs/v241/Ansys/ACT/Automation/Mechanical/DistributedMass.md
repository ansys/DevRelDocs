# `DistributedMass`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.DistributedMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ElementAPDLName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.ElementAPDLName)                 | Gets or sets the ElementAPDLName.                             |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`MassPerUnitArea`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.MassPerUnitArea)                 | Gets or sets the MassPerUnitArea.                             |
| [`TotalMass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.TotalMass)                             | Gets or sets the TotalMass.                                   |
| [`MassType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.MassType)                               | Gets or sets the MassType.                                    |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`RemotePoint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.RemotePoint)                         | Gets the remote point associated to the point mass.           |
| [`IsDistributedMass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.IsDistributedMass)             | Gets the IsDistributedMass.                                   |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.Location)                               | Gets or sets the Geometry.                                    |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DistributedMass.md#DistributedMass.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="DistributedMass.ElementAPDLName"></a>

### *property* DistributedMass.ElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.InternalObject"></a>

### *property* DistributedMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.MassPerUnitArea"></a>

### *property* DistributedMass.MassPerUnitArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassPerUnitArea.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.TotalMass"></a>

### *property* DistributedMass.TotalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TotalMass.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.MassType"></a>

### *property* DistributedMass.MassType *: [Ansys.Mechanical.DataModel.Enums.DistributedMassInputType](../../../Mechanical/DataModel/Enums/DistributedMassInputType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DistributedMassInputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassType.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Suppressed"></a>

### *property* DistributedMass.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.DataModelObjectCategory"></a>

### *property* DistributedMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.RemotePoint"></a>

### *property* DistributedMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.IsDistributedMass"></a>

### *property* DistributedMass.IsDistributedMass *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Location"></a>

### *property* DistributedMass.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Children"></a>

### *property* DistributedMass.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Comments"></a>

### *property* DistributedMass.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Figures"></a>

### *property* DistributedMass.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Images"></a>

### *property* DistributedMass.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.ReadOnly"></a>

### *property* DistributedMass.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DistributedMass.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Properties"></a>

### *property* DistributedMass.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.VisibleProperties"></a>

### *property* DistributedMass.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DistributedMass.AddCommandSnippet"></a>

### DistributedMass.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Delete"></a>

### DistributedMass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetChildren"></a>

### DistributedMass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DistributedMass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Activate"></a>

### DistributedMass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.CopyTo"></a>

### DistributedMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.Duplicate"></a>

### DistributedMass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GroupAllSimilarChildren"></a>

### DistributedMass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GroupSimilarObjects"></a>

### DistributedMass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.PropertyByName"></a>

### DistributedMass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.PropertyByAPIName"></a>

### DistributedMass.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.CreateParameter"></a>

### DistributedMass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.GetParameter"></a>

### DistributedMass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DistributedMass.RemoveParameter"></a>

### DistributedMass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

