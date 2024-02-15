# ExternalEnhancedModel

### *class* ExternalEnhancedModel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ExternalEnhancedModel.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`RegroupToDefault`](#ExternalEnhancedModel.RegroupToDefault)               | Run the RegroupToDefault action.                                                  |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ExternalEnhancedModel.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ExternalEnhancedModel.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ExternalEnhancedModel.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ExternalEnhancedModel.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ExternalEnhancedModel.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ExternalEnhancedModel.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ExternalEnhancedModel.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ExternalEnhancedModel.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ExternalEnhancedModel.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ExternalEnhancedModel.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ExternalEnhancedModel.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ExternalEnhancedModel.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ExternalEnhancedModel.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LayerToDisplay`](#ExternalEnhancedModel.LayerToDisplay)                                                           | Gets or sets the LayerToDisplay.                              |
| [`MaximumNumberOfLayers`](#ExternalEnhancedModel.MaximumNumberOfLayers)                                             | Gets the MaximumNumberOfLayers.                               |
| [`Type`](#ExternalEnhancedModel.Type)                                                                               | Gets the Type.                                                |
| [`NonlinearEffects`](#ExternalEnhancedModel.NonlinearEffects)                                                       | Gets or sets the NonlinearEffects.                            |
| [`Suppressed`](#ExternalEnhancedModel.Suppressed)                                                                   | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#ExternalEnhancedModel.ThermalStrainEffects)                                               | Gets or sets the ThermalStrainEffects.                        |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ExternalEnhancedModel.Children)                                                                       | Gets the list of children.                                    |
| [`Comments`](#ExternalEnhancedModel.Comments)                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#ExternalEnhancedModel.Figures)                                                                         | Gets the list of associated figures.                          |
| [`Images`](#ExternalEnhancedModel.Images)                                                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ExternalEnhancedModel.Properties)                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ExternalEnhancedModel.VisibleProperties)                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ExternalEnhancedModel
```

## Property detail

### *property* ExternalEnhancedModel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalEnhancedModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.LayerToDisplay *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.MaximumNumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNumberOfLayers.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.Type *: [Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType](../../../Mechanical/DataModel/Enums/ExternalEnhancedModelType.md#ExternalEnhancedModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.ThermalStrainEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ExternalEnhancedModel.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ExternalEnhancedModel.RegroupToDefault()

Run the RegroupToDefault action.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ExternalEnhancedModel.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
