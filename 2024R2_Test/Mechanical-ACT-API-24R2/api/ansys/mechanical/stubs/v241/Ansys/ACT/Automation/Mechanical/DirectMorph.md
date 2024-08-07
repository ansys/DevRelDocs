# `DirectMorph`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.DirectMorph

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectMorph.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Generate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.Generate)                               | Generate morph control                                                            |
| [`Clear`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.Clear)                                     | clear morph control                                                               |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`DisplacementFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.DisplacementFile)               | Gets or sets the DisplacementFile.                            |
| [`ScaleFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.ScaleFactor)                         | Gets or sets the ScaleFactor.                                 |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.Children)                               | Gets the list of children.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/DirectMorph.md#DirectMorph.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="DirectMorph.InternalObject"></a>

### *property* DirectMorph.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDirectMorphAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.DisplacementFile"></a>

### *property* DirectMorph.DisplacementFile *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementFile.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.ScaleFactor"></a>

### *property* DirectMorph.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Suppressed"></a>

### *property* DirectMorph.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Location"></a>

### *property* DirectMorph.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.DataModelObjectCategory"></a>

### *property* DirectMorph.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Children"></a>

### *property* DirectMorph.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectMorph.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Properties"></a>

### *property* DirectMorph.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.VisibleProperties"></a>

### *property* DirectMorph.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectMorph.Generate"></a>

### DirectMorph.Generate()

Generate morph control

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Clear"></a>

### DirectMorph.Clear()

clear morph control

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Delete"></a>

### DirectMorph.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetChildren"></a>

### DirectMorph.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectMorph.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Activate"></a>

### DirectMorph.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.CopyTo"></a>

### DirectMorph.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.Duplicate"></a>

### DirectMorph.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GroupAllSimilarChildren"></a>

### DirectMorph.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GroupSimilarObjects"></a>

### DirectMorph.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.PropertyByName"></a>

### DirectMorph.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.PropertyByAPIName"></a>

### DirectMorph.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.CreateParameter"></a>

### DirectMorph.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.GetParameter"></a>

### DirectMorph.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectMorph.RemoveParameter"></a>

### DirectMorph.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

