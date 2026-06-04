# `DirectMorph`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.DirectMorph"></a>

#### *class* Ansys.ACT.Automation.Mechanical.DirectMorph

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectMorph.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#DirectMorph.Activate)                               | Activate the current object.                                                      |
| [`Clear`](#DirectMorph.Clear)                                     | clear morph control                                                               |
| [`CopyTo`](#DirectMorph.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#DirectMorph.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#DirectMorph.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#DirectMorph.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`Generate`](#DirectMorph.Generate)                               | Generate morph control                                                            |
| [`GetChildren`](#DirectMorph.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#DirectMorph.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#DirectMorph.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectMorph.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#DirectMorph.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#DirectMorph.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#DirectMorph.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#DirectMorph.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#DirectMorph.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DisplacementFile`](#DirectMorph.DisplacementFile)               | Gets or sets the DisplacementFile.                            |
| [`InternalObject`](#DirectMorph.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#DirectMorph.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#DirectMorph.Properties)                           | Gets the list of properties for this object.                  |
| [`ScaleFactor`](#DirectMorph.ScaleFactor)                         | Gets or sets the ScaleFactor.                                 |
| [`Suppressed`](#DirectMorph.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#DirectMorph.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="DirectMorph.Children"></a>

### *property* DirectMorph.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.DataModelObjectCategory"></a>

### *property* DirectMorph.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.DisplacementFile"></a>

### *property* DirectMorph.DisplacementFile *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementFile.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.InternalObject"></a>

### *property* DirectMorph.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDirectMorphAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Location"></a>

### *property* DirectMorph.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Properties"></a>

### *property* DirectMorph.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.ScaleFactor"></a>

### *property* DirectMorph.ScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Suppressed"></a>

### *property* DirectMorph.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.VisibleProperties"></a>

### *property* DirectMorph.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectMorph.Activate"></a>

### DirectMorph.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Clear"></a>

### DirectMorph.Clear()

clear morph control

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.CopyTo"></a>

### DirectMorph.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.CreateParameter"></a>

### DirectMorph.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Delete"></a>

### DirectMorph.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Duplicate"></a>

### DirectMorph.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Generate"></a>

### DirectMorph.Generate()

Generate morph control

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetChildren"></a>

### DirectMorph.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetParameter"></a>

### DirectMorph.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GroupAllSimilarChildren"></a>

### DirectMorph.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GroupSimilarObjects"></a>

### DirectMorph.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.PropertyByAPIName"></a>

### DirectMorph.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.PropertyByName"></a>

### DirectMorph.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.RemoveParameter"></a>

### DirectMorph.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

