# ImportedLayeredSection

### *class* ImportedLayeredSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedLayeredSection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`RegroupToDefault`](#ImportedLayeredSection.RegroupToDefault)               | Run the RegroupToDefault action.                                                  |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedLayeredSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedLayeredSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedLayeredSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedLayeredSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedLayeredSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedLayeredSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedLayeredSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedLayeredSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedLayeredSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedLayeredSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedLayeredSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedLayeredSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedLayeredSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`LayerToDisplay`](#ImportedLayeredSection.LayerToDisplay)                                                          | Gets or sets the LayerToDisplay.                              |
| [`MaximumNumberOfLayers`](#ImportedLayeredSection.MaximumNumberOfLayers)                                            | Gets the MaximumNumberOfLayers.                               |
| [`Type`](#ImportedLayeredSection.Type)                                                                              | Gets the Type.                                                |
| [`NonlinearEffects`](#ImportedLayeredSection.NonlinearEffects)                                                      | Gets or sets the NonlinearEffects.                            |
| [`Suppressed`](#ImportedLayeredSection.Suppressed)                                                                  | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#ImportedLayeredSection.ThermalStrainEffects)                                              | Gets or sets the ThermalStrainEffects.                        |
| [`Children`](#ImportedLayeredSection.Children)                                                                      | Gets the list of children.                                    |
| [`Comments`](#ImportedLayeredSection.Comments)                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#ImportedLayeredSection.Figures)                                                                        | Gets the list of associated figures.                          |
| [`Images`](#ImportedLayeredSection.Images)                                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedLayeredSection.Properties)                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedLayeredSection.VisibleProperties)                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedLayeredSection
```

## Property detail

### *property* ImportedLayeredSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalEnhancedModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.LayerToDisplay *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerToDisplay.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.MaximumNumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNumberOfLayers.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.Type *: [Ansys.Mechanical.DataModel.Enums.ExternalEnhancedModelType](../../../Mechanical/DataModel/Enums/ExternalEnhancedModelType.md#ExternalEnhancedModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.ThermalStrainEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedLayeredSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedLayeredSection.RegroupToDefault()

Run the RegroupToDefault action.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedLayeredSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
