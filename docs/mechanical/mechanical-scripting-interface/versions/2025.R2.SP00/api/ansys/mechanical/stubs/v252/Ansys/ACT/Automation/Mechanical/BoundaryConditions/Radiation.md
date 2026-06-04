# `Radiation`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Radiation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Radiation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Radiation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Radiation.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#Radiation.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Radiation.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Radiation.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#Radiation.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Radiation.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#Radiation.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#Radiation.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#Radiation.GetActivateAtLoadStep)                   | Gets whether the radiation is active at the specified load step.                  |
| [`GetChildren`](#Radiation.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#Radiation.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#Radiation.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Radiation.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Radiation.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Radiation.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#Radiation.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#Radiation.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Radiation.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#Radiation.SetActivateAtLoadStep)                   | Sets whether the radiation is active at the specified load step.                  |
| [`SetComponentActivateAtLoadStep`](#Radiation.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`AmbientTemperature`](#Radiation.AmbientTemperature)           | Gets the AmbientTemperature.                                  |
| [`Children`](#Radiation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Radiation.Comments)                               | Gets the list of associated comments.                         |
| [`Correlation`](#Radiation.Correlation)                         | Gets or sets the Correlation.                                 |
| [`DataModelObjectCategory`](#Radiation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`EditDataFor`](#Radiation.EditDataFor)                         | Gets or sets the EditDataFor.                                 |
| [`Emissivity`](#Radiation.Emissivity)                           | Gets or sets the Emissivity.                                  |
| [`Enclosure`](#Radiation.Enclosure)                             | Gets or sets the Enclosure.                                   |
| [`EnclosureType`](#Radiation.EnclosureType)                     | Gets or sets the EnclosureType.                               |
| [`Figures`](#Radiation.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Radiation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Radiation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Radiation.Location)                               | Gets or sets the Location.                                    |
| [`NumberOfSegments`](#Radiation.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#Radiation.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Radiation.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#Radiation.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`ShellFace`](#Radiation.ShellFace)                             | Gets or sets the ShellFace.                                   |
| [`Suppressed`](#Radiation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Radiation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Radiation.AmbientTemperature"></a>

### *property* Radiation.AmbientTemperature *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AmbientTemperature.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Children"></a>

### *property* Radiation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Comments"></a>

### *property* Radiation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Correlation"></a>

### *property* Radiation.Correlation *: [Ansys.Mechanical.DataModel.Enums.RadiationType](../../../../Mechanical/DataModel/Enums/RadiationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Correlation.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.DataModelObjectCategory"></a>

### *property* Radiation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.EditDataFor"></a>

### *property* Radiation.EditDataFor *: [Ansys.Mechanical.DataModel.Enums.ConvectionTableSelection](../../../../Mechanical/DataModel/Enums/ConvectionTableSelection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvectionTableSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EditDataFor.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Emissivity"></a>

### *property* Radiation.Emissivity *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Emissivity.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Enclosure"></a>

### *property* Radiation.Enclosure *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Enclosure.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.EnclosureType"></a>

### *property* Radiation.EnclosureType *: [Ansys.Mechanical.DataModel.Enums.EnclosureType](../../../../Mechanical/DataModel/Enums/EnclosureType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.EnclosureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnclosureType.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Figures"></a>

### *property* Radiation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Images"></a>

### *property* Radiation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.InternalObject"></a>

### *property* Radiation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Location"></a>

### *property* Radiation.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.NumberOfSegments"></a>

### *property* Radiation.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Properties"></a>

### *property* Radiation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ReadOnly"></a>

### *property* Radiation.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.SharedRefBody"></a>

### *property* Radiation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ShellFace"></a>

### *property* Radiation.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Suppressed"></a>

### *property* Radiation.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.VisibleProperties"></a>

### *property* Radiation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Radiation.Activate"></a>

### Radiation.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AddComment"></a>

### Radiation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AddFigure"></a>

### Radiation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AddImage"></a>

### Radiation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Radiation.CopyTo"></a>

### Radiation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.CreateParameter"></a>

### Radiation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Delete"></a>

### Radiation.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Duplicate"></a>

### Radiation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetActivateAtLoadStep"></a>

### Radiation.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the radiation is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetChildren"></a>

### Radiation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetComponentActivateAtLoadStep"></a>

### Radiation.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetParameter"></a>

### Radiation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GroupAllSimilarChildren"></a>

### Radiation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GroupSimilarObjects"></a>

### Radiation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.PromoteToNamedSelection"></a>

### Radiation.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.PropertyByAPIName"></a>

### Radiation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Radiation.PropertyByName"></a>

### Radiation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.RemoveParameter"></a>

### Radiation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.SetActivateAtLoadStep"></a>

### Radiation.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the radiation is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.SetComponentActivateAtLoadStep"></a>

### Radiation.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

