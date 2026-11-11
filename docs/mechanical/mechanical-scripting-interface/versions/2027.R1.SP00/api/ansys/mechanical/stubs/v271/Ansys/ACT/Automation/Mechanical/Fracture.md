# `Fracture`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Fracture"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Fracture(internalObject: Any)

<a id="Fracture"></a>

### *class* Fracture(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Fracture.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Fracture.Activate)                                                 | Activate the current object.                                                                |
| [`AddArbitraryCrack`](#Fracture.AddArbitraryCrack)                               | Creates a new ArbitraryCrack                                                                |
| [`AddComment`](#Fracture.AddComment)                                             | Creates a new child Comment.                                                                |
| [`AddContactDebonding`](#Fracture.AddContactDebonding)                           | Creates a new ContactDebonding                                                              |
| [`AddCornerCrack`](#Fracture.AddCornerCrack)                                     | Creates a new CornerCrack                                                                   |
| [`AddCrack`](#Fracture.AddCrack)                                                 | Creates a new child Crack.                                                                  |
| [`AddCrackInitiation`](#Fracture.AddCrackInitiation)                             | Creates a new CrackInitiation                                                               |
| [`AddCylindricalCrack`](#Fracture.AddCylindricalCrack)                           | Creates a new CylindricalCrack                                                              |
| [`AddEdgeCrack`](#Fracture.AddEdgeCrack)                                         | Creates a new EdgeCrack                                                                     |
| [`AddEllipticalCrack`](#Fracture.AddEllipticalCrack)                             | Creates a new EllipticalCrack                                                               |
| [`AddFigure`](#Fracture.AddFigure)                                               | Creates a new child Figure.                                                                 |
| [`AddImage`](#Fracture.AddImage)                                                 | Creates a new child Image.                                                                  |
| [`AddInterfaceDelamination`](#Fracture.AddInterfaceDelamination)                 | Creates a new InterfaceDelamination                                                         |
| [`AddPreMeshedCrack`](#Fracture.AddPreMeshedCrack)                               | Creates a new PreMeshedCrack                                                                |
| [`AddRingCrack`](#Fracture.AddRingCrack)                                         | Creates a new RingCrack                                                                     |
| [`AddSMARTCrackGrowth`](#Fracture.AddSMARTCrackGrowth)                           | Creates a new SMARTCrackGrowth                                                              |
| [`AddSemiEllipticalCrack`](#Fracture.AddSemiEllipticalCrack)                     | Creates a new SemiEllipticalCrack                                                           |
| [`AddThroughCrack`](#Fracture.AddThroughCrack)                                   | Creates a new ThroughCrack                                                                  |
| [`ClearAllCrackMeshes`](#Fracture.ClearAllCrackMeshes)                           | Clears all the existing crack meshes and reverts to the base mesh.                          |
| [`Copy`](#Fracture.Copy)                                                         | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Fracture.CopyTo)                                                     | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Fracture.CreateObjRef)                                         | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Fracture.CreateParameter)                                   | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Fracture.Cut)                                                           | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Fracture.Delete)                                                     | Run the Delete action.                                                                      |
| [`Duplicate`](#Fracture.Duplicate)                                               | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Fracture.Equals)                                                     | Equals method.                                                                              |
| [`GenerateAllCrackMesh`](#Fracture.GenerateAllCrackMesh)                         | Run the GenerateAllCrackMesh action.                                                        |
| [`GenerateAllInterfaceDelamination`](#Fracture.GenerateAllInterfaceDelamination) | Generate all interfaces delamination from an external model.                                |
| [`GetAPIName`](#Fracture.GetAPIName)                                             | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Fracture.GetAllProperties)                                 | GetAllProperties method.                                                                    |
| [`GetChildren`](#Fracture.GetChildren)                                           | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Fracture.GetDetailsView)                                     | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Fracture.GetEnumName)                                           | Enum name bound to value                                                                    |
| [`GetHashCode`](#Fracture.GetHashCode)                                           | GetHashCode method.                                                                         |
| [`GetIconFile`](#Fracture.GetIconFile)                                           | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Fracture.GetLifetimeService)                             | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Fracture.GetObjectData)                                       | GetObjectData method.                                                                       |
| [`GetParameter`](#Fracture.GetParameter)                                         | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Fracture.GetPath)                                                   | GetPath method.                                                                             |
| [`GetPropertyName`](#Fracture.GetPropertyName)                                   | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Fracture.GetPropertyValue)                                 | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Fracture.GetVisibleProperties)                         | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Fracture.GetVisiblePropertyNames)                   | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Fracture.GroupAllSimilarChildren)                   | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Fracture.GroupSimilarObjects)                           | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Fracture.InitializeLifetimeService)               | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Fracture.IsPropertyEditable)                             | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Fracture.IsPropertyVisible)                               | IsPropertyVisible method.                                                                   |
| [`Paste`](#Fracture.Paste)                                                       | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Fracture.PropertyByAPIName)                               | Get a property by its API name.                                                             |
| [`PropertyById`](#Fracture.PropertyById)                                         | PropertyById method.                                                                        |
| [`PropertyByName`](#Fracture.PropertyByName)                                     | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Fracture.RemoveFromGroup)                                   | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Fracture.RemoveParameter)                                   | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`AttachedRefs`](#Fracture.AttachedRefs)                                             | AttachedRefs property.                                               |
| [`Children`](#Fracture.Children)                                                     | Gets the list of children.                                           |
| [`ClsId`](#Fracture.ClsId)                                                           | ClsId property.                                                      |
| [`Comments`](#Fracture.Comments)                                                     | Gets the list of associated comments.                                |
| [`DataModelObjectCategory`](#Fracture.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                         |
| [`Figures`](#Fracture.Figures)                                                       | Gets the list of associated figures.                                 |
| [`GroupingFolder`](#Fracture.GroupingFolder)                                         | GroupingFolder property.                                             |
| [`IconName`](#Fracture.IconName)                                                     | IconName property.                                                   |
| [`Images`](#Fracture.Images)                                                         | Gets the list of associated images.                                  |
| [`InternalObject`](#Fracture.InternalObject)                                         | Gets the internal object. For advanced usage only.                   |
| [`Name`](#Fracture.Name)                                                             | Name property.                                                       |
| [`ObjectId`](#Fracture.ObjectId)                                                     | ObjectId property.                                                   |
| [`ObjectState`](#Fracture.ObjectState)                                               | ObjectState property.                                                |
| [`ObjectTags`](#Fracture.ObjectTags)                                                 | ObjectTags property.                                                 |
| [`Parent`](#Fracture.Parent)                                                         | Parent property.                                                     |
| [`Properties`](#Fracture.Properties)                                                 | Gets the list of properties for this object.                         |
| [`RemeshHexDominantToTetrahedral`](#Fracture.RemeshHexDominantToTetrahedral)         | Gets or sets the RemeshHexDominantToTetrahedral.                     |
| [`RemeshHexDominantToTetrahedralType`](#Fracture.RemeshHexDominantToTetrahedralType) | Gets or sets the re-meshing approach, if any, surrounding the crack. |
| [`State`](#Fracture.State)                                                           | State property.                                                      |
| [`VisibleProperties`](#Fracture.VisibleProperties)                                   | Gets the list of properties that are visible for this object.        |

<a id="property-detail"></a>

## Property detail

<a id="Fracture.AttachedRefs"></a>

### *property* Fracture.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Children"></a>

### *property* Fracture.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.ClsId"></a>

### *property* Fracture.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Comments"></a>

### *property* Fracture.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.DataModelObjectCategory"></a>

### *property* Fracture.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Figures"></a>

### *property* Fracture.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GroupingFolder"></a>

### *property* Fracture.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.IconName"></a>

### *property* Fracture.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Images"></a>

### *property* Fracture.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.InternalObject"></a>

### *property* Fracture.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFractureGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Name"></a>

### *property* Fracture.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.ObjectId"></a>

### *property* Fracture.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.ObjectState"></a>

### *property* Fracture.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.ObjectTags"></a>

### *property* Fracture.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Parent"></a>

### *property* Fracture.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Properties"></a>

### *property* Fracture.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.RemeshHexDominantToTetrahedral"></a>

### *property* Fracture.RemeshHexDominantToTetrahedral *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemeshHexDominantToTetrahedral.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.RemeshHexDominantToTetrahedralType"></a>

### *property* Fracture.RemeshHexDominantToTetrahedralType *: [Ansys.Mechanical.DataModel.Enums.RemeshHexDominantToTetrahedral](../../../Mechanical/DataModel/Enums/RemeshHexDominantToTetrahedral.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemeshHexDominantToTetrahedral) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the re-meshing approach, if any, surrounding the crack.
Default: Off

<!-- !! processed by numpydoc !! -->

<a id="Fracture.State"></a>

### *property* Fracture.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.VisibleProperties"></a>

### *property* Fracture.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Fracture.Activate"></a>

### Fracture.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddArbitraryCrack"></a>

### Fracture.AddArbitraryCrack() → [Ansys.ACT.Automation.Mechanical.ArbitraryCrack](ArbitraryCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ArbitraryCrack)

Creates a new ArbitraryCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddComment"></a>

### Fracture.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddContactDebonding"></a>

### Fracture.AddContactDebonding() → [Ansys.ACT.Automation.Mechanical.ContactDebonding](ContactDebonding.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ContactDebonding)

Creates a new ContactDebonding

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddCornerCrack"></a>

### Fracture.AddCornerCrack() → [Ansys.ACT.Automation.Mechanical.CornerCrack](CornerCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CornerCrack)

Creates a new CornerCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddCrack"></a>

### Fracture.AddCrack() → [Ansys.ACT.Automation.Mechanical.Crack](Crack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Crack)

Creates a new child Crack.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddCrackInitiation"></a>

### Fracture.AddCrackInitiation() → [Ansys.ACT.Automation.Mechanical.CrackInitiation](CrackInitiation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CrackInitiation)

Creates a new CrackInitiation

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddCylindricalCrack"></a>

### Fracture.AddCylindricalCrack() → [Ansys.ACT.Automation.Mechanical.CylindricalCrack](CylindricalCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CylindricalCrack)

Creates a new CylindricalCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddEdgeCrack"></a>

### Fracture.AddEdgeCrack() → [Ansys.ACT.Automation.Mechanical.EdgeCrack](EdgeCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.EdgeCrack)

Creates a new EdgeCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddEllipticalCrack"></a>

### Fracture.AddEllipticalCrack() → [Ansys.ACT.Automation.Mechanical.EllipticalCrack](EllipticalCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.EllipticalCrack)

Creates a new EllipticalCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddFigure"></a>

### Fracture.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddImage"></a>

### Fracture.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddInterfaceDelamination"></a>

### Fracture.AddInterfaceDelamination() → [Ansys.ACT.Automation.Mechanical.InterfaceDelamination](InterfaceDelamination.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.InterfaceDelamination)

Creates a new InterfaceDelamination

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddPreMeshedCrack"></a>

### Fracture.AddPreMeshedCrack() → [Ansys.ACT.Automation.Mechanical.PreMeshedCrack](PreMeshedCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PreMeshedCrack)

Creates a new PreMeshedCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddRingCrack"></a>

### Fracture.AddRingCrack() → [Ansys.ACT.Automation.Mechanical.RingCrack](RingCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RingCrack)

Creates a new RingCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddSMARTCrackGrowth"></a>

### Fracture.AddSMARTCrackGrowth() → [Ansys.ACT.Automation.Mechanical.SMARTCrackGrowth](SMARTCrackGrowth.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SMARTCrackGrowth)

Creates a new SMARTCrackGrowth

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddSemiEllipticalCrack"></a>

### Fracture.AddSemiEllipticalCrack() → [Ansys.ACT.Automation.Mechanical.SemiEllipticalCrack](SemiEllipticalCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SemiEllipticalCrack)

Creates a new SemiEllipticalCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddThroughCrack"></a>

### Fracture.AddThroughCrack() → [Ansys.ACT.Automation.Mechanical.ThroughCrack](ThroughCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ThroughCrack)

Creates a new ThroughCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.ClearAllCrackMeshes"></a>

### Fracture.ClearAllCrackMeshes() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Clears all the existing crack meshes and reverts to the base mesh.
An ArgumentException is thrown if a crack mesh is not present.
An InvalidOperationException will be thrown if clearing the crack mesh fails.
```

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Copy"></a>

### Fracture.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.CopyTo"></a>

### Fracture.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.CreateObjRef"></a>

### Fracture.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.CreateParameter"></a>

### Fracture.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Cut"></a>

### Fracture.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Delete"></a>

### Fracture.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Duplicate"></a>

### Fracture.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Equals"></a>

### Fracture.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GenerateAllCrackMesh"></a>

### Fracture.GenerateAllCrackMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GenerateAllCrackMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GenerateAllInterfaceDelamination"></a>

### Fracture.GenerateAllInterfaceDelamination() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate all interfaces delamination from an external model.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetAPIName"></a>

### Fracture.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetAllProperties"></a>

### Fracture.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetChildren"></a>

### Fracture.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Fracture.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetDetailsView"></a>

### Fracture.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetEnumName"></a>

### Fracture.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetHashCode"></a>

### Fracture.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetIconFile"></a>

### Fracture.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetLifetimeService"></a>

### Fracture.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetObjectData"></a>

### Fracture.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetParameter"></a>

### Fracture.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetPath"></a>

### Fracture.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetPropertyName"></a>

### Fracture.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetPropertyValue"></a>

### Fracture.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetVisibleProperties"></a>

### Fracture.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetVisiblePropertyNames"></a>

### Fracture.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GroupAllSimilarChildren"></a>

### Fracture.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GroupSimilarObjects"></a>

### Fracture.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.InitializeLifetimeService"></a>

### Fracture.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.IsPropertyEditable"></a>

### Fracture.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Fracture.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.IsPropertyVisible"></a>

### Fracture.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Fracture.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Paste"></a>

### Fracture.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.PropertyByAPIName"></a>

### Fracture.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Fracture.PropertyById"></a>

### Fracture.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.PropertyByName"></a>

### Fracture.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.RemoveFromGroup"></a>

### Fracture.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.RemoveParameter"></a>

### Fracture.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

