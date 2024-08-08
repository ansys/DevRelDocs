# `Coupling`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Coupling.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`LocalCoordinates`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.LocalCoordinates)               | Gets or sets the LocalCoordinates.                            |
| [`DOFSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.DOFSelection)                       | Gets or sets the DOFSelection.                                |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Coupling.md#Coupling.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Coupling.InternalObject"></a>

### *property* Coupling.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCouplingConditionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.LocalCoordinates"></a>

### *property* Coupling.LocalCoordinates *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocalCoordinates.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.DOFSelection"></a>

### *property* Coupling.DOFSelection *: [Ansys.Mechanical.DataModel.Enums.CouplingConditionDOFType](../../../../Mechanical/DataModel/Enums/CouplingConditionDOFType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CouplingConditionDOFType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOFSelection.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Suppressed"></a>

### *property* Coupling.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Location"></a>

### *property* Coupling.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.DataModelObjectCategory"></a>

### *property* Coupling.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Children"></a>

### *property* Coupling.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Comments"></a>

### *property* Coupling.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Images"></a>

### *property* Coupling.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Coupling.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Properties"></a>

### *property* Coupling.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.VisibleProperties"></a>

### *property* Coupling.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Coupling.Delete"></a>

### Coupling.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetChildren"></a>

### Coupling.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Coupling.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.AddComment"></a>

### Coupling.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.AddImage"></a>

### Coupling.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Activate"></a>

### Coupling.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.CopyTo"></a>

### Coupling.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Duplicate"></a>

### Coupling.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GroupAllSimilarChildren"></a>

### Coupling.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GroupSimilarObjects"></a>

### Coupling.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.PropertyByName"></a>

### Coupling.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.PropertyByAPIName"></a>

### Coupling.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.CreateParameter"></a>

### Coupling.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetParameter"></a>

### Coupling.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.RemoveParameter"></a>

### Coupling.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

