# `ExternalEnhancedModel`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ExternalEnhancedModel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ExternalEnhancedModel.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RegroupToDefault`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.RegroupToDefault)               | Run the RegroupToDefault action.                                                  |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#id0)                                                    | Gets the internal object. For advanced usage only.            |
| [`LayerToDisplay`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.LayerToDisplay)                   | Gets or sets the LayerToDisplay.                              |
| [`MaximumNumberOfLayers`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.MaximumNumberOfLayers)     | Gets the MaximumNumberOfLayers.                               |
| [`Type`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.Type)                                       | Gets the Type.                                                |
| [`NonlinearEffects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.NonlinearEffects)               | Gets or sets the NonlinearEffects.                            |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.ThermalStrainEffects)       | Gets or sets the ThermalStrainEffects.                        |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#id0)                                                    | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ExternalEnhancedModel.md#ExternalEnhancedModel.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ExternalEnhancedModel.InternalObject"></a>

### *property* ExternalEnhancedModel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalEnhancedModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.LayerToDisplay"></a>

### *property* ExternalEnhancedModel.LayerToDisplay *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.MaximumNumberOfLayers"></a>

### *property* ExternalEnhancedModel.MaximumNumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Type"></a>

### *property* ExternalEnhancedModel.Type *: [Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType](../../../Mechanical/DataModel/Enums/ExternalEnhancedModelType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.NonlinearEffects"></a>

### *property* ExternalEnhancedModel.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Suppressed"></a>

### *property* ExternalEnhancedModel.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.ThermalStrainEffects"></a>

### *property* ExternalEnhancedModel.ThermalStrainEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.DataModelObjectCategory"></a>

### *property* ExternalEnhancedModel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Children"></a>

### *property* ExternalEnhancedModel.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Comments"></a>

### *property* ExternalEnhancedModel.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Figures"></a>

### *property* ExternalEnhancedModel.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Images"></a>

### *property* ExternalEnhancedModel.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ExternalEnhancedModel.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Properties"></a>

### *property* ExternalEnhancedModel.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.VisibleProperties"></a>

### *property* ExternalEnhancedModel.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExternalEnhancedModel.RegroupToDefault"></a>

### ExternalEnhancedModel.RegroupToDefault()

Run the RegroupToDefault action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetChildren"></a>

### ExternalEnhancedModel.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ExternalEnhancedModel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.AddComment"></a>

### ExternalEnhancedModel.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.AddFigure"></a>

### ExternalEnhancedModel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.AddImage"></a>

### ExternalEnhancedModel.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Activate"></a>

### ExternalEnhancedModel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.CopyTo"></a>

### ExternalEnhancedModel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.Duplicate"></a>

### ExternalEnhancedModel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GroupAllSimilarChildren"></a>

### ExternalEnhancedModel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GroupSimilarObjects"></a>

### ExternalEnhancedModel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.PropertyByName"></a>

### ExternalEnhancedModel.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.PropertyByAPIName"></a>

### ExternalEnhancedModel.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.CreateParameter"></a>

### ExternalEnhancedModel.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.GetParameter"></a>

### ExternalEnhancedModel.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalEnhancedModel.RemoveParameter"></a>

### ExternalEnhancedModel.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

