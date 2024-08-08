# `Symmetry`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Symmetry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Symmetry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddLinearPeriodicRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.AddLinearPeriodicRegion)   | Creates a new SymmetryRegion                                                      |
| [`AddCyclicRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.AddCyclicRegion)                   | Creates a new CyclicRegion                                                        |
| [`AddGeneralAxisymmetric`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.AddGeneralAxisymmetric)     | Creates a new GeneralAxisymmetric                                                 |
| [`AddPeriodicRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.AddPeriodicRegion)               | Creates a new PeriodicRegion                                                      |
| [`AddPreMeshedCyclicRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.AddPreMeshedCyclicRegion) | Creates a new PreMeshedCyclicRegion                                               |
| [`AddStage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.AddStage)                                 | Creates a new Stage                                                               |
| [`AddSymmetryRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.AddSymmetryRegion)               | Creates a new SymmetryRegion                                                      |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Symmetry.md#Symmetry.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Symmetry.InternalObject"></a>

### *property* Symmetry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.DataModelObjectCategory"></a>

### *property* Symmetry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Children"></a>

### *property* Symmetry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Comments"></a>

### *property* Symmetry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Figures"></a>

### *property* Symmetry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Images"></a>

### *property* Symmetry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.ReadOnly"></a>

### *property* Symmetry.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Symmetry.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Properties"></a>

### *property* Symmetry.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.VisibleProperties"></a>

### *property* Symmetry.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Symmetry.AddLinearPeriodicRegion"></a>

### Symmetry.AddLinearPeriodicRegion()

Creates a new SymmetryRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddCyclicRegion"></a>

### Symmetry.AddCyclicRegion()

Creates a new CyclicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddGeneralAxisymmetric"></a>

### Symmetry.AddGeneralAxisymmetric()

Creates a new GeneralAxisymmetric

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddPeriodicRegion"></a>

### Symmetry.AddPeriodicRegion()

Creates a new PeriodicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddPreMeshedCyclicRegion"></a>

### Symmetry.AddPreMeshedCyclicRegion()

Creates a new PreMeshedCyclicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddStage"></a>

### Symmetry.AddStage()

Creates a new Stage

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddSymmetryRegion"></a>

### Symmetry.AddSymmetryRegion()

Creates a new SymmetryRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Delete"></a>

### Symmetry.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetChildren"></a>

### Symmetry.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Symmetry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddComment"></a>

### Symmetry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddFigure"></a>

### Symmetry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddImage"></a>

### Symmetry.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Activate"></a>

### Symmetry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.CopyTo"></a>

### Symmetry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Duplicate"></a>

### Symmetry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GroupAllSimilarChildren"></a>

### Symmetry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GroupSimilarObjects"></a>

### Symmetry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.PropertyByName"></a>

### Symmetry.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.PropertyByAPIName"></a>

### Symmetry.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.CreateParameter"></a>

### Symmetry.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetParameter"></a>

### Symmetry.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.RemoveParameter"></a>

### Symmetry.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

