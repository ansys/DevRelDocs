<a id="bodyinteractions"></a>

# BodyInteractions

<a id="BodyInteractions"></a>

### *class* BodyInteractions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BodyInteractions.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddBodyInteraction`](#BodyInteractions.AddBodyInteraction)           | Creates a new child BodyInteraction.                                              |
| [`Delete`](#BodyInteractions.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BodyInteractions.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BodyInteractions.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BodyInteractions.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#BodyInteractions.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#BodyInteractions.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BodyInteractions.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BodyInteractions.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BodyInteractions.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BodyInteractions.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BodyInteractions.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#BodyInteractions.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#BodyInteractions.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BodyInteractions.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`PinballFactor`](#BodyInteractions.PinballFactor)                                                                     | Gets or sets the PinballFactor.                               |
| [`Tolerance`](#BodyInteractions.Tolerance)                                                                             | Gets or sets the Tolerance.                                   |
| [`ShellThicknessFactor`](#BodyInteractions.ShellThicknessFactor)                                                       | Gets or sets the ShellThicknessFactor.                        |
| [`TimestepSafetyFactor`](#BodyInteractions.TimestepSafetyFactor)                                                       | Gets or sets the TimestepSafetyFactor.                        |
| [`LimitingTimestepVelocity`](#BodyInteractions.LimitingTimestepVelocity)                                               | Gets or sets the LimitingTimestepVelocity.                    |
| [`ContactDetection`](../../../../Mechanical/DataModel/Enums/ContactDetection.md#ContactDetection)                      | Gets or sets the ContactDetection.                            |
| [`Formulation`](#BodyInteractions.Formulation)                                                                         | Gets or sets the Formulation.                                 |
| [`ManualContactTreatment`](#BodyInteractions.ManualContactTreatment)                                                   | Gets or sets the ManualContactTreatment.                      |
| [`NodalShellThickness`](#BodyInteractions.NodalShellThickness)                                                         | Gets or sets the NodalShellThickness.                         |
| [`SlidingContact`](#BodyInteractions.SlidingContact)                                                                   | Gets or sets the SlidingContact.                              |
| [`BodySelfContact`](#BodyInteractions.BodySelfContact)                                                                 | Gets or sets the BodySelfContact.                             |
| [`ElementSelfContact`](#BodyInteractions.ElementSelfContact)                                                           | Gets or sets the ElementSelfContact.                          |
| [`EdgeOnEdgeContact`](#BodyInteractions.EdgeOnEdgeContact)                                                             | Gets or sets the EdgeOnEdgeContact.                           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#BodyInteractions.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#BodyInteractions.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#BodyInteractions.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#BodyInteractions.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#BodyInteractions.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#BodyInteractions.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import BodyInteractions
```

<a id="property-detail"></a>

## Property detail

<a id="BodyInteractions.InternalObject"></a>

### *property* BodyInteractions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyInteractionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.PinballFactor"></a>

### *property* BodyInteractions.PinballFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Tolerance"></a>

### *property* BodyInteractions.Tolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ShellThicknessFactor"></a>

### *property* BodyInteractions.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.TimestepSafetyFactor"></a>

### *property* BodyInteractions.TimestepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimestepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.LimitingTimestepVelocity"></a>

### *property* BodyInteractions.LimitingTimestepVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitingTimestepVelocity.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ContactDetection"></a>

### *property* BodyInteractions.ContactDetection *: [Ansys.Mechanical.DataModel.Enums.ContactDetection](../../../../Mechanical/DataModel/Enums/ContactDetection.md#ContactDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactDetection.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Formulation"></a>

### *property* BodyInteractions.Formulation *: [Ansys.Mechanical.DataModel.Enums.BodyInteractionFormulation](../../../../Mechanical/DataModel/Enums/BodyInteractionFormulation.md#BodyInteractionFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ManualContactTreatment"></a>

### *property* BodyInteractions.ManualContactTreatment *: [Ansys.Mechanical.DataModel.Enums.ManualContactTreatmentType](../../../../Mechanical/DataModel/Enums/ManualContactTreatmentType.md#ManualContactTreatmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ManualContactTreatment.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.NodalShellThickness"></a>

### *property* BodyInteractions.NodalShellThickness *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalShellThickness.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.SlidingContact"></a>

### *property* BodyInteractions.SlidingContact *: [Ansys.Mechanical.DataModel.Enums.SlidingContactType](../../../../Mechanical/DataModel/Enums/SlidingContactType.md#SlidingContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlidingContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.BodySelfContact"></a>

### *property* BodyInteractions.BodySelfContact *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodySelfContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.ElementSelfContact"></a>

### *property* BodyInteractions.ElementSelfContact *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSelfContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.EdgeOnEdgeContact"></a>

### *property* BodyInteractions.EdgeOnEdgeContact *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOnEdgeContact.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.DataModelObjectCategory"></a>

### *property* BodyInteractions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Children"></a>

### *property* BodyInteractions.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Comments"></a>

### *property* BodyInteractions.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Figures"></a>

### *property* BodyInteractions.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Images"></a>

### *property* BodyInteractions.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BodyInteractions.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Properties"></a>

### *property* BodyInteractions.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.VisibleProperties"></a>

### *property* BodyInteractions.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyInteractions.AddBodyInteraction"></a>

### BodyInteractions.AddBodyInteraction()

Creates a new child BodyInteraction.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Delete"></a>

### BodyInteractions.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetChildren"></a>

### BodyInteractions.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BodyInteractions.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddComment"></a>

### BodyInteractions.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddFigure"></a>

### BodyInteractions.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.AddImage"></a>

### BodyInteractions.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Activate"></a>

### BodyInteractions.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.CopyTo"></a>

### BodyInteractions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.Duplicate"></a>

### BodyInteractions.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GroupAllSimilarChildren"></a>

### BodyInteractions.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GroupSimilarObjects"></a>

### BodyInteractions.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.PropertyByName"></a>

### BodyInteractions.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.PropertyByAPIName"></a>

### BodyInteractions.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.CreateParameter"></a>

### BodyInteractions.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.GetParameter"></a>

### BodyInteractions.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteractions.RemoveParameter"></a>

### BodyInteractions.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
