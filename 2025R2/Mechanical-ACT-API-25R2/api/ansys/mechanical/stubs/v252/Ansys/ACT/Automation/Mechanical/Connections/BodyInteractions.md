# `BodyInteractions`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.BodyInteractions"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.BodyInteractions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BodyInteractions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BodyInteractions.Activate)                               | Activate the current object.                                                      |
| [`AddBodyInteraction`](#BodyInteractions.AddBodyInteraction)           | Creates a new child BodyInteraction.                                              |
| [`AddComment`](#BodyInteractions.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BodyInteractions.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BodyInteractions.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#BodyInteractions.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BodyInteractions.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#BodyInteractions.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#BodyInteractions.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#BodyInteractions.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#BodyInteractions.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BodyInteractions.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BodyInteractions.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#BodyInteractions.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#BodyInteractions.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BodyInteractions.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BodySelfContact`](#BodyInteractions.BodySelfContact)                   | Gets or sets the BodySelfContact.                             |
| [`Children`](#BodyInteractions.Children)                                 | Gets the list of children.                                    |
| [`Comments`](#BodyInteractions.Comments)                                 | Gets the list of associated comments.                         |
| [`ContactDetection`](#BodyInteractions.ContactDetection)                 | Gets or sets the ContactDetection.                            |
| [`DataModelObjectCategory`](#BodyInteractions.DataModelObjectCategory)   | Gets the current DataModelObject’s category.                  |
| [`EdgeOnEdgeContact`](#BodyInteractions.EdgeOnEdgeContact)               | Gets or sets the EdgeOnEdgeContact.                           |
| [`ElementSelfContact`](#BodyInteractions.ElementSelfContact)             | Gets or sets the ElementSelfContact.                          |
| [`Figures`](#BodyInteractions.Figures)                                   | Gets the list of associated figures.                          |
| [`Formulation`](#BodyInteractions.Formulation)                           | Gets or sets the Formulation.                                 |
| [`Images`](#BodyInteractions.Images)                                     | Gets the list of associated images.                           |
| [`InternalObject`](#BodyInteractions.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LimitingTimestepVelocity`](#BodyInteractions.LimitingTimestepVelocity) | Gets or sets the LimitingTimestepVelocity.                    |
| [`ManualContactTreatment`](#BodyInteractions.ManualContactTreatment)     | Gets or sets the ManualContactTreatment.                      |
| [`NodalShellThickness`](#BodyInteractions.NodalShellThickness)           | Gets or sets the NodalShellThickness.                         |
| [`PinballFactor`](#BodyInteractions.PinballFactor)                       | Gets or sets the PinballFactor.                               |
| [`Properties`](#BodyInteractions.Properties)                             | Gets the list of properties for this object.                  |
| [`ShellThicknessFactor`](#BodyInteractions.ShellThicknessFactor)         | Gets or sets the ShellThicknessFactor.                        |
| [`SlidingContact`](#BodyInteractions.SlidingContact)                     | Gets or sets the SlidingContact.                              |
| [`TimestepSafetyFactor`](#BodyInteractions.TimestepSafetyFactor)         | Gets or sets the TimestepSafetyFactor.                        |
| [`Tolerance`](#BodyInteractions.Tolerance)                               | Gets or sets the Tolerance.                                   |
| [`VisibleProperties`](#BodyInteractions.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BodyInteractions.BodySelfContact"></a>

### *property* BodyInteractions.BodySelfContact *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodySelfContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Children"></a>

### *property* BodyInteractions.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Comments"></a>

### *property* BodyInteractions.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ContactDetection"></a>

### *property* BodyInteractions.ContactDetection *: [Ansys.Mechanical.DataModel.Enums.ContactDetection](../../../../Mechanical/DataModel/Enums/ContactDetection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactDetection.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.DataModelObjectCategory"></a>

### *property* BodyInteractions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.EdgeOnEdgeContact"></a>

### *property* BodyInteractions.EdgeOnEdgeContact *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOnEdgeContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ElementSelfContact"></a>

### *property* BodyInteractions.ElementSelfContact *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSelfContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Figures"></a>

### *property* BodyInteractions.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Formulation"></a>

### *property* BodyInteractions.Formulation *: [Ansys.Mechanical.DataModel.Enums.BodyInteractionFormulation](../../../../Mechanical/DataModel/Enums/BodyInteractionFormulation.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.BodyInteractionFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Images"></a>

### *property* BodyInteractions.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.InternalObject"></a>

### *property* BodyInteractions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyInteractionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.LimitingTimestepVelocity"></a>

### *property* BodyInteractions.LimitingTimestepVelocity *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitingTimestepVelocity.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ManualContactTreatment"></a>

### *property* BodyInteractions.ManualContactTreatment *: [Ansys.Mechanical.DataModel.Enums.ManualContactTreatmentType](../../../../Mechanical/DataModel/Enums/ManualContactTreatmentType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ManualContactTreatmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ManualContactTreatment.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.NodalShellThickness"></a>

### *property* BodyInteractions.NodalShellThickness *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalShellThickness.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.PinballFactor"></a>

### *property* BodyInteractions.PinballFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Properties"></a>

### *property* BodyInteractions.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ShellThicknessFactor"></a>

### *property* BodyInteractions.ShellThicknessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.SlidingContact"></a>

### *property* BodyInteractions.SlidingContact *: [Ansys.Mechanical.DataModel.Enums.SlidingContactType](../../../../Mechanical/DataModel/Enums/SlidingContactType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SlidingContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlidingContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.TimestepSafetyFactor"></a>

### *property* BodyInteractions.TimestepSafetyFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimestepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Tolerance"></a>

### *property* BodyInteractions.Tolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.VisibleProperties"></a>

### *property* BodyInteractions.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyInteractions.Activate"></a>

### BodyInteractions.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddBodyInteraction"></a>

### BodyInteractions.AddBodyInteraction() → [Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction](BodyInteraction.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction)

Creates a new child BodyInteraction.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddComment"></a>

### BodyInteractions.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddFigure"></a>

### BodyInteractions.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddImage"></a>

### BodyInteractions.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.CopyTo"></a>

### BodyInteractions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.CreateParameter"></a>

### BodyInteractions.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Delete"></a>

### BodyInteractions.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Duplicate"></a>

### BodyInteractions.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetChildren"></a>

### BodyInteractions.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetParameter"></a>

### BodyInteractions.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GroupAllSimilarChildren"></a>

### BodyInteractions.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GroupSimilarObjects"></a>

### BodyInteractions.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.PropertyByAPIName"></a>

### BodyInteractions.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.PropertyByName"></a>

### BodyInteractions.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.RemoveParameter"></a>

### BodyInteractions.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

