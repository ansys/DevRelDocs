# `Fracture`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Fracture

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Fracture.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCrack`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddCrack)                                                 | Creates a new child Crack.                                                        |
| [`GenerateAllCrackMesh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.GenerateAllCrackMesh)                         | Run the GenerateAllCrackMesh action.                                              |
| [`GenerateAllInterfaceDelamination`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.GenerateAllInterfaceDelamination) | Generate all interfaces delamination from an external model.                      |
| [`AddArbitraryCrack`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddArbitraryCrack)                               | Creates a new ArbitraryCrack                                                      |
| [`AddContactDebonding`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddContactDebonding)                           | Creates a new ContactDebonding                                                    |
| [`AddCornerCrack`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddCornerCrack)                                     | Creates a new CornerCrack                                                         |
| [`AddCylindricalCrack`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddCylindricalCrack)                           | Creates a new CylindricalCrack                                                    |
| [`AddEdgeCrack`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddEdgeCrack)                                         | Creates a new EdgeCrack                                                           |
| [`AddEllipticalCrack`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddEllipticalCrack)                             | Creates a new EllipticalCrack                                                     |
| [`AddInterfaceDelamination`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddInterfaceDelamination)                 | Creates a new InterfaceDelamination                                               |
| [`AddPreMeshedCrack`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddPreMeshedCrack)                               | Creates a new PreMeshedCrack                                                      |
| [`AddRingCrack`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddRingCrack)                                         | Creates a new RingCrack                                                           |
| [`AddSemiEllipticalCrack`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddSemiEllipticalCrack)                     | Creates a new SemiEllipticalCrack                                                 |
| [`AddSMARTCrackGrowth`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddSMARTCrackGrowth)                           | Creates a new SMARTCrackGrowth                                                    |
| [`AddThroughCrack`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddThroughCrack)                                   | Creates a new ThroughCrack                                                        |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.Delete)                                                     | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddComment)                                             | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddFigure)                                               | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.AddImage)                                                 | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.Activate)                                                 | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.CopyTo)                                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.Duplicate)                                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.GroupAllSimilarChildren)                   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.GroupSimilarObjects)                           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.PropertyByName)                                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.PropertyByAPIName)                               | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.CreateParameter)                                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.GetParameter)                                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.RemoveParameter)                                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#id0)                                                     | Gets the internal object. For advanced usage only.            |
| [`RemeshHexDominantToTetrahedral`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.RemeshHexDominantToTetrahedral) | Gets or sets the RemeshHexDominantToTetrahedral.              |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.DataModelObjectCategory)               | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.Children)                                             | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.Comments)                                             | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.Figures)                                               | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.Images)                                                 | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#id0)                                                     | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.Properties)                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Fracture.md#Fracture.VisibleProperties)                           | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Fracture.InternalObject"></a>

### *property* Fracture.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFractureGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.RemeshHexDominantToTetrahedral"></a>

### *property* Fracture.RemeshHexDominantToTetrahedral *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshHexDominantToTetrahedral.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.DataModelObjectCategory"></a>

### *property* Fracture.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Children"></a>

### *property* Fracture.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Comments"></a>

### *property* Fracture.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Figures"></a>

### *property* Fracture.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Images"></a>

### *property* Fracture.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Fracture.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Properties"></a>

### *property* Fracture.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.VisibleProperties"></a>

### *property* Fracture.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Fracture.AddCrack"></a>

### Fracture.AddCrack()

Creates a new child Crack.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GenerateAllCrackMesh"></a>

### Fracture.GenerateAllCrackMesh()

Run the GenerateAllCrackMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GenerateAllInterfaceDelamination"></a>

### Fracture.GenerateAllInterfaceDelamination()

Generate all interfaces delamination from an external model.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddArbitraryCrack"></a>

### Fracture.AddArbitraryCrack()

Creates a new ArbitraryCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddContactDebonding"></a>

### Fracture.AddContactDebonding()

Creates a new ContactDebonding

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddCornerCrack"></a>

### Fracture.AddCornerCrack()

Creates a new CornerCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddCylindricalCrack"></a>

### Fracture.AddCylindricalCrack()

Creates a new CylindricalCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddEdgeCrack"></a>

### Fracture.AddEdgeCrack()

Creates a new EdgeCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddEllipticalCrack"></a>

### Fracture.AddEllipticalCrack()

Creates a new EllipticalCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddInterfaceDelamination"></a>

### Fracture.AddInterfaceDelamination()

Creates a new InterfaceDelamination

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddPreMeshedCrack"></a>

### Fracture.AddPreMeshedCrack()

Creates a new PreMeshedCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddRingCrack"></a>

### Fracture.AddRingCrack()

Creates a new RingCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddSemiEllipticalCrack"></a>

### Fracture.AddSemiEllipticalCrack()

Creates a new SemiEllipticalCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddSMARTCrackGrowth"></a>

### Fracture.AddSMARTCrackGrowth()

Creates a new SMARTCrackGrowth

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddThroughCrack"></a>

### Fracture.AddThroughCrack()

Creates a new ThroughCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Delete"></a>

### Fracture.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetChildren"></a>

### Fracture.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Fracture.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddComment"></a>

### Fracture.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddFigure"></a>

### Fracture.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddImage"></a>

### Fracture.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Activate"></a>

### Fracture.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.CopyTo"></a>

### Fracture.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Duplicate"></a>

### Fracture.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GroupAllSimilarChildren"></a>

### Fracture.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GroupSimilarObjects"></a>

### Fracture.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.PropertyByName"></a>

### Fracture.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.PropertyByAPIName"></a>

### Fracture.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.CreateParameter"></a>

### Fracture.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetParameter"></a>

### Fracture.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.RemoveParameter"></a>

### Fracture.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

