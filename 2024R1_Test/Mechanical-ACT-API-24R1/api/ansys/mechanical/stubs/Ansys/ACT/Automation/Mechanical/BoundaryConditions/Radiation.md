# Radiation

<a id="Radiation"></a>

### *class* Radiation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Radiation.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#Radiation.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#Radiation.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#Radiation.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#Radiation.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#Radiation.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#Radiation.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Radiation.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Radiation.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Radiation.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#Radiation.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#Radiation.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Radiation.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Radiation.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Radiation.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Radiation.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Radiation.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#Radiation.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Radiation.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Radiation.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#Radiation.NumberOfSegments)                                                                      | Gets or sets the NumberOfSegments.                            |
| [`Enclosure`](#Radiation.Enclosure)                                                                                    | Gets or sets the Enclosure.                                   |
| [`Emissivity`](#Radiation.Emissivity)                                                                                  | Gets or sets the Emissivity.                                  |
| [`AmbientTemperature`](#Radiation.AmbientTemperature)                                                                  | Gets the AmbientTemperature.                                  |
| [`EditDataFor`](#Radiation.EditDataFor)                                                                                | Gets or sets the EditDataFor.                                 |
| [`EnclosureType`](../../../../Mechanical/DataModel/Enums/EnclosureType.md#EnclosureType)                               | Gets or sets the EnclosureType.                               |
| [`Correlation`](#Radiation.Correlation)                                                                                | Gets or sets the Correlation.                                 |
| [`ShellFace`](#Radiation.ShellFace)                                                                                    | Gets or sets the ShellFace.                                   |
| [`Location`](#Radiation.Location)                                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#Radiation.Suppressed)                                                                                  | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#Radiation.SharedRefBody)                                                                            | Gets or sets the SharedRefBody.                               |
| [`Children`](#Radiation.Children)                                                                                      | Gets the list of children.                                    |
| [`Comments`](#Radiation.Comments)                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#Radiation.Figures)                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#Radiation.Images)                                                                                          | Gets the list of associated images.                           |
| [`ReadOnly`](#Radiation.ReadOnly)                                                                                      | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Radiation.Properties)                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Radiation.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import Radiation
```

<a id="property-detail"></a>

## Property detail

<a id="Radiation.InternalObject"></a>

### *property* Radiation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.NumberOfSegments"></a>

### *property* Radiation.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Enclosure"></a>

### *property* Radiation.Enclosure *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Enclosure.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Emissivity"></a>

### *property* Radiation.Emissivity *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Emissivity.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AmbientTemperature"></a>

### *property* Radiation.AmbientTemperature *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AmbientTemperature.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.EditDataFor"></a>

### *property* Radiation.EditDataFor *: [Ansys.Mechanical.DataModel.Enums.ConvectionTableSelection](../../../../Mechanical/DataModel/Enums/ConvectionTableSelection.md#ConvectionTableSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EditDataFor.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.EnclosureType"></a>

### *property* Radiation.EnclosureType *: [Ansys.Mechanical.DataModel.Enums.EnclosureType](../../../../Mechanical/DataModel/Enums/EnclosureType.md#EnclosureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnclosureType.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Correlation"></a>

### *property* Radiation.Correlation *: [Ansys.Mechanical.DataModel.Enums.RadiationType](../../../../Mechanical/DataModel/Enums/RadiationType.md#RadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Correlation.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ShellFace"></a>

### *property* Radiation.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Location"></a>

### *property* Radiation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.DataModelObjectCategory"></a>

### *property* Radiation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Suppressed"></a>

### *property* Radiation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.SharedRefBody"></a>

### *property* Radiation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Children"></a>

### *property* Radiation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Comments"></a>

### *property* Radiation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Figures"></a>

### *property* Radiation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Images"></a>

### *property* Radiation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ReadOnly"></a>

### *property* Radiation.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Radiation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Properties"></a>

### *property* Radiation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.VisibleProperties"></a>

### *property* Radiation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Radiation.GetActivateAtLoadStep"></a>

### Radiation.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.SetActivateAtLoadStep"></a>

### Radiation.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetComponentActivateAtLoadStep"></a>

### Radiation.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.SetComponentActivateAtLoadStep"></a>

### Radiation.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.PromoteToNamedSelection"></a>

### Radiation.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Delete"></a>

### Radiation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetChildren"></a>

### Radiation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Radiation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AddComment"></a>

### Radiation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AddFigure"></a>

### Radiation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AddImage"></a>

### Radiation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Activate"></a>

### Radiation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.CopyTo"></a>

### Radiation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Duplicate"></a>

### Radiation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GroupAllSimilarChildren"></a>

### Radiation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GroupSimilarObjects"></a>

### Radiation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.PropertyByName"></a>

### Radiation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.PropertyByAPIName"></a>

### Radiation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.CreateParameter"></a>

### Radiation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetParameter"></a>

### Radiation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.RemoveParameter"></a>

### Radiation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
