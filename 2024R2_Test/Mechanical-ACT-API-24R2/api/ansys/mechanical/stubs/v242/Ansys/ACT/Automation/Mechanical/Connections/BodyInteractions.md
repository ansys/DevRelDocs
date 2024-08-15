# `BodyInteractions`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Connections.BodyInteractions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BodyInteractions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `AddBodyInteraction`      | Creates a new child BodyInteraction.                                              |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------|---------------------------------------------------------------|
| `InternalObject`           | Gets the internal object. For advanced usage only.            |
| `PinballFactor`            | Gets or sets the PinballFactor.                               |
| `Tolerance`                | Gets or sets the Tolerance.                                   |
| `ShellThicknessFactor`     | Gets or sets the ShellThicknessFactor.                        |
| `TimestepSafetyFactor`     | Gets or sets the TimestepSafetyFactor.                        |
| `LimitingTimestepVelocity` | Gets or sets the LimitingTimestepVelocity.                    |
| `ContactDetection`         | Gets or sets the ContactDetection.                            |
| `Formulation`              | Gets or sets the Formulation.                                 |
| `ManualContactTreatment`   | Gets or sets the ManualContactTreatment.                      |
| `NodalShellThickness`      | Gets or sets the NodalShellThickness.                         |
| `SlidingContact`           | Gets or sets the SlidingContact.                              |
| `BodySelfContact`          | Gets or sets the BodySelfContact.                             |
| `ElementSelfContact`       | Gets or sets the ElementSelfContact.                          |
| `EdgeOnEdgeContact`        | Gets or sets the EdgeOnEdgeContact.                           |
| `DataModelObjectCategory`  | Gets the current DataModelObject's category.                  |
| `Children`                 | Gets the list of children.                                    |
| `Comments`                 | Gets the list of associated comments.                         |
| `Figures`                  | Gets the list of associated figures.                          |
| `Images`                   | Gets the list of associated images.                           |
| `InternalObject`           | Gets the internal object. For advanced usage only.            |
| `Properties`               | Gets the list of properties for this object.                  |
| `VisibleProperties`        | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* BodyInteractions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyInteractionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.PinballFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballFactor.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.Tolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessFactor.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.TimestepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimestepSafetyFactor.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.LimitingTimestepVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitingTimestepVelocity.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.ContactDetection *: [Ansys.Mechanical.DataModel.Enums.ContactDetection](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactDetection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactDetection.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.Formulation *: [Ansys.Mechanical.DataModel.Enums.BodyInteractionFormulation](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/BodyInteractionFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BodyInteractionFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.ManualContactTreatment *: [Ansys.Mechanical.DataModel.Enums.ManualContactTreatmentType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ManualContactTreatmentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ManualContactTreatmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ManualContactTreatment.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.NodalShellThickness *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalShellThickness.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.SlidingContact *: [Ansys.Mechanical.DataModel.Enums.SlidingContactType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SlidingContactType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SlidingContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlidingContact.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.BodySelfContact *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodySelfContact.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.ElementSelfContact *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSelfContact.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.EdgeOnEdgeContact *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOnEdgeContact.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteractions.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### BodyInteractions.AddBodyInteraction()

Creates a new child BodyInteraction.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### BodyInteractions.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### BodyInteractions.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BodyInteractions.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

