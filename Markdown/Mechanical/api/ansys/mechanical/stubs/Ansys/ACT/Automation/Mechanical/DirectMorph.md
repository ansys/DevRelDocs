# DirectMorph

### *class* DirectMorph

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectMorph.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Generate`](#DirectMorph.Generate)                               | Generate morph control                                                            |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Clear`](#DirectMorph.Clear)                                     | clear morph control                                                               |
| [`Delete`](#DirectMorph.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`Activate`](#DirectMorph.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectMorph.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectMorph.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectMorph.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectMorph.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectMorph.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectMorph.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#DirectMorph.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DirectMorph.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectMorph.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DisplacementFile`](#DirectMorph.DisplacementFile)                                                                 | Gets or sets the DisplacementFile.                            |
| [`ScaleFactor`](#DirectMorph.ScaleFactor)                                                                           | Gets or sets the ScaleFactor.                                 |
| [`Suppressed`](#DirectMorph.Suppressed)                                                                             | Gets or sets the Suppressed.                                  |
| [`Location`](#DirectMorph.Location)                                                                                 | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#DirectMorph.Children)                                                                                 | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#DirectMorph.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#DirectMorph.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import DirectMorph
```

## Property detail

### *property* DirectMorph.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDirectMorphAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DirectMorph.DisplacementFile *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementFile.

<!-- !! processed by numpydoc !! -->

### *property* DirectMorph.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* DirectMorph.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* DirectMorph.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* DirectMorph.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* DirectMorph.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* DirectMorph.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DirectMorph.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* DirectMorph.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### DirectMorph.Generate()

Generate morph control

<!-- !! processed by numpydoc !! -->

### DirectMorph.Clear()

clear morph control

<!-- !! processed by numpydoc !! -->

### DirectMorph.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### DirectMorph.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DirectMorph.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DirectMorph.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### DirectMorph.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### DirectMorph.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### DirectMorph.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### DirectMorph.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### DirectMorph.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### DirectMorph.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### DirectMorph.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### DirectMorph.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### DirectMorph.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
