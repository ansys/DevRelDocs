# `BodyInteraction`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BodyInteraction.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`DecayConstant`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.DecayConstant)                     | Gets or sets the DecayConstant.                               |
| [`DynamicCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.DynamicCoefficient)           | Gets or sets the DynamicCoefficient.                          |
| [`NormalForceExponent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.NormalForceExponent)         | Gets or sets the NormalForceExponent.                         |
| [`NormalStressExponent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.NormalStressExponent)       | Gets or sets the NormalStressExponent.                        |
| [`ShearForceExponent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.ShearForceExponent)           | Gets or sets the ShearForceExponent.                          |
| [`ShearStressExponent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.ShearStressExponent)         | Gets or sets the ShearStressExponent.                         |
| [`FrictionCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.FrictionCoefficient)         | Gets or sets the FrictionCoefficient.                         |
| [`MaximumOffset`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.MaximumOffset)                     | Gets or sets the MaximumOffset.                               |
| [`NormalForceLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.NormalForceLimit)               | Gets or sets the NormalForceLimit.                            |
| [`NormalStressLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.NormalStressLimit)             | Gets or sets the NormalStressLimit.                           |
| [`ShearForceLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.ShearForceLimit)                 | Gets or sets the ShearForceLimit.                             |
| [`ShearStressLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.ShearStressLimit)               | Gets or sets the ShearStressLimit.                            |
| [`Breakable`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Breakable)                             | Gets or sets the Breakable.                                   |
| [`ContactType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.ContactType)                         | Gets or sets the ContactType.                                 |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/BodyInteraction.md#BodyInteraction.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BodyInteraction.InternalObject"></a>

### *property* BodyInteraction.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyInteractionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.DecayConstant"></a>

### *property* BodyInteraction.DecayConstant *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DecayConstant.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.DynamicCoefficient"></a>

### *property* BodyInteraction.DynamicCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalForceExponent"></a>

### *property* BodyInteraction.NormalForceExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalStressExponent"></a>

### *property* BodyInteraction.NormalStressExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearForceExponent"></a>

### *property* BodyInteraction.ShearForceExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearStressExponent"></a>

### *property* BodyInteraction.ShearStressExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.FrictionCoefficient"></a>

### *property* BodyInteraction.FrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.MaximumOffset"></a>

### *property* BodyInteraction.MaximumOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumOffset.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalForceLimit"></a>

### *property* BodyInteraction.NormalForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalStressLimit"></a>

### *property* BodyInteraction.NormalStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearForceLimit"></a>

### *property* BodyInteraction.ShearForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearStressLimit"></a>

### *property* BodyInteraction.ShearStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Breakable"></a>

### *property* BodyInteraction.Breakable *: [Ansys.Mechanical.DataModel.Enums.BondedBreakableType](../../../../Mechanical/DataModel/Enums/BondedBreakableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BondedBreakableType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Breakable.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ContactType"></a>

### *property* BodyInteraction.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Suppressed"></a>

### *property* BodyInteraction.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Location"></a>

### *property* BodyInteraction.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.DataModelObjectCategory"></a>

### *property* BodyInteraction.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Children"></a>

### *property* BodyInteraction.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Comments"></a>

### *property* BodyInteraction.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Figures"></a>

### *property* BodyInteraction.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Images"></a>

### *property* BodyInteraction.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BodyInteraction.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Properties"></a>

### *property* BodyInteraction.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.VisibleProperties"></a>

### *property* BodyInteraction.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyInteraction.Delete"></a>

### BodyInteraction.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetChildren"></a>

### BodyInteraction.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BodyInteraction.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.AddComment"></a>

### BodyInteraction.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.AddFigure"></a>

### BodyInteraction.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.AddImage"></a>

### BodyInteraction.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Activate"></a>

### BodyInteraction.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.CopyTo"></a>

### BodyInteraction.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Duplicate"></a>

### BodyInteraction.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GroupAllSimilarChildren"></a>

### BodyInteraction.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GroupSimilarObjects"></a>

### BodyInteraction.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.PropertyByName"></a>

### BodyInteraction.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.PropertyByAPIName"></a>

### BodyInteraction.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.CreateParameter"></a>

### BodyInteraction.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetParameter"></a>

### BodyInteraction.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.RemoveParameter"></a>

### BodyInteraction.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

