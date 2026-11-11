# `GeneralizedPlaneStrain`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeneralizedPlaneStrain"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeneralizedPlaneStrain(internalObject: Any)

<a id="GeneralizedPlaneStrain"></a>

### *class* GeneralizedPlaneStrain(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GeneralizedPlaneStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GeneralizedPlaneStrain.Activate)                                           | Activate the current object.                                                                |
| [`AddComment`](#GeneralizedPlaneStrain.AddComment)                                       | Creates a new child Comment.                                                                |
| [`AddFigure`](#GeneralizedPlaneStrain.AddFigure)                                         | Creates a new child Figure.                                                                 |
| [`AddImage`](#GeneralizedPlaneStrain.AddImage)                                           | Creates a new child Image.                                                                  |
| [`Copy`](#GeneralizedPlaneStrain.Copy)                                                   | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GeneralizedPlaneStrain.CopyTo)                                               | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GeneralizedPlaneStrain.CreateObjRef)                                   | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GeneralizedPlaneStrain.CreateParameter)                             | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GeneralizedPlaneStrain.Cut)                                                     | Cuts the current DataModelObject.                                                           |
| [`Delete`](#GeneralizedPlaneStrain.Delete)                                               | Run the Delete action.                                                                      |
| [`Duplicate`](#GeneralizedPlaneStrain.Duplicate)                                         | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GeneralizedPlaneStrain.Equals)                                               | Equals method.                                                                              |
| [`GetAPIName`](#GeneralizedPlaneStrain.GetAPIName)                                       | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GeneralizedPlaneStrain.GetAllProperties)                           | GetAllProperties method.                                                                    |
| [`GetChildren`](#GeneralizedPlaneStrain.GetChildren)                                     | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GeneralizedPlaneStrain.GetDetailsView)                               | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GeneralizedPlaneStrain.GetEnumName)                                     | Enum name bound to value                                                                    |
| [`GetFiberMagnitudeQuantityName`](#GeneralizedPlaneStrain.GetFiberMagnitudeQuantityName) | GetFiberMagnitudeQuantityName method.                                                       |
| [`GetHashCode`](#GeneralizedPlaneStrain.GetHashCode)                                     | GetHashCode method.                                                                         |
| [`GetIconFile`](#GeneralizedPlaneStrain.GetIconFile)                                     | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GeneralizedPlaneStrain.GetLifetimeService)                       | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GeneralizedPlaneStrain.GetObjectData)                                 | GetObjectData method.                                                                       |
| [`GetParameter`](#GeneralizedPlaneStrain.GetParameter)                                   | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GeneralizedPlaneStrain.GetPath)                                             | GetPath method.                                                                             |
| [`GetPropertyName`](#GeneralizedPlaneStrain.GetPropertyName)                             | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GeneralizedPlaneStrain.GetPropertyValue)                           | GetPropertyValue method.                                                                    |
| [`GetRotationXQuantityName`](#GeneralizedPlaneStrain.GetRotationXQuantityName)           | GetRotationXQuantityName method.                                                            |
| [`GetRotationYQuantityName`](#GeneralizedPlaneStrain.GetRotationYQuantityName)           | GetRotationYQuantityName method.                                                            |
| [`GetVisibleProperties`](#GeneralizedPlaneStrain.GetVisibleProperties)                   | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GeneralizedPlaneStrain.GetVisiblePropertyNames)             | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GeneralizedPlaneStrain.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GeneralizedPlaneStrain.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#GeneralizedPlaneStrain.InitializeLifetimeService)         | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GeneralizedPlaneStrain.IsPropertyEditable)                       | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GeneralizedPlaneStrain.IsPropertyVisible)                         | IsPropertyVisible method.                                                                   |
| [`Paste`](#GeneralizedPlaneStrain.Paste)                                                 | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#GeneralizedPlaneStrain.PropertyByAPIName)                         | Get a property by its API name.                                                             |
| [`PropertyById`](#GeneralizedPlaneStrain.PropertyById)                                   | PropertyById method.                                                                        |
| [`PropertyByName`](#GeneralizedPlaneStrain.PropertyByName)                               | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GeneralizedPlaneStrain.RemoveFromGroup)                             | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GeneralizedPlaneStrain.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#GeneralizedPlaneStrain.AttachedRefs)                                             | AttachedRefs property.                                        |
| [`BoundaryConditionAlongFiber`](#GeneralizedPlaneStrain.BoundaryConditionAlongFiber)               | Gets or sets the BoundaryConditionAlongFiber.                 |
| [`BoundaryConditionForRotationAboutX`](#GeneralizedPlaneStrain.BoundaryConditionForRotationAboutX) | Gets or sets the BoundaryConditionForRotationAboutX.          |
| [`BoundaryConditionForRotationAboutY`](#GeneralizedPlaneStrain.BoundaryConditionForRotationAboutY) | Gets or sets the BoundaryConditionForRotationAboutY.          |
| [`Children`](#GeneralizedPlaneStrain.Children)                                                     | Gets the list of children.                                    |
| [`ClsId`](#GeneralizedPlaneStrain.ClsId)                                                           | ClsId property.                                               |
| [`Comments`](#GeneralizedPlaneStrain.Comments)                                                     | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CoordinateSystem)                                      | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#GeneralizedPlaneStrain.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                  |
| [`Figures`](#GeneralizedPlaneStrain.Figures)                                                       | Gets the list of associated figures.                          |
| [`GroupingFolder`](#GeneralizedPlaneStrain.GroupingFolder)                                         | GroupingFolder property.                                      |
| [`IconName`](#GeneralizedPlaneStrain.IconName)                                                     | IconName property.                                            |
| [`Images`](#GeneralizedPlaneStrain.Images)                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#GeneralizedPlaneStrain.InternalObject)                                         | Gets the internal object. For advanced usage only.            |
| [`MagnitudeAlongFiber`](#GeneralizedPlaneStrain.MagnitudeAlongFiber)                               | Gets or sets the MagnitudeAlongFiber.                         |
| [`MagnitudeRotationX`](#GeneralizedPlaneStrain.MagnitudeRotationX)                                 | Gets or sets the MagnitudeRotationX.                          |
| [`MagnitudeRotationY`](#GeneralizedPlaneStrain.MagnitudeRotationY)                                 | Gets or sets the MagnitudeRotationY.                          |
| [`Name`](#GeneralizedPlaneStrain.Name)                                                             | Name property.                                                |
| [`ObjectId`](#GeneralizedPlaneStrain.ObjectId)                                                     | ObjectId property.                                            |
| [`ObjectState`](#GeneralizedPlaneStrain.ObjectState)                                               | ObjectState property.                                         |
| [`ObjectTags`](#GeneralizedPlaneStrain.ObjectTags)                                                 | ObjectTags property.                                          |
| [`Parent`](#GeneralizedPlaneStrain.Parent)                                                         | Parent property.                                              |
| [`Properties`](#GeneralizedPlaneStrain.Properties)                                                 | Gets the list of properties for this object.                  |
| [`State`](#GeneralizedPlaneStrain.State)                                                           | State property.                                               |
| [`Suppressed`](#GeneralizedPlaneStrain.Suppressed)                                                 | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#GeneralizedPlaneStrain.VisibleProperties)                                   | Gets the list of properties that are visible for this object. |
| [`XCoordinateOfRefPoint`](#GeneralizedPlaneStrain.XCoordinateOfRefPoint)                           | Gets or sets the XCoordinateOfRefPoint.                       |
| [`YCoordinateOfRefPoint`](#GeneralizedPlaneStrain.YCoordinateOfRefPoint)                           | Gets or sets the YCoordinateOfRefPoint.                       |

<a id="property-detail"></a>

## Property detail

<a id="GeneralizedPlaneStrain.AttachedRefs"></a>

### *property* GeneralizedPlaneStrain.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.BoundaryConditionAlongFiber"></a>

### *property* GeneralizedPlaneStrain.BoundaryConditionAlongFiber *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionAlongFiber](../../../../Mechanical/DataModel/Enums/BoundaryConditionAlongFiber.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BoundaryConditionAlongFiber) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionAlongFiber.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.BoundaryConditionForRotationAboutX"></a>

### *property* GeneralizedPlaneStrain.BoundaryConditionForRotationAboutX *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionForRotation](../../../../Mechanical/DataModel/Enums/BoundaryConditionForRotation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BoundaryConditionForRotation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionForRotationAboutX.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.BoundaryConditionForRotationAboutY"></a>

### *property* GeneralizedPlaneStrain.BoundaryConditionForRotationAboutY *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionForRotation](../../../../Mechanical/DataModel/Enums/BoundaryConditionForRotation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BoundaryConditionForRotation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionForRotationAboutY.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Children"></a>

### *property* GeneralizedPlaneStrain.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.ClsId"></a>

### *property* GeneralizedPlaneStrain.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Comments"></a>

### *property* GeneralizedPlaneStrain.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.CoordinateSystem"></a>

### *property* GeneralizedPlaneStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.DataModelObjectCategory"></a>

### *property* GeneralizedPlaneStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Figures"></a>

### *property* GeneralizedPlaneStrain.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GroupingFolder"></a>

### *property* GeneralizedPlaneStrain.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.IconName"></a>

### *property* GeneralizedPlaneStrain.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Images"></a>

### *property* GeneralizedPlaneStrain.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.InternalObject"></a>

### *property* GeneralizedPlaneStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGenPlaneStrainAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.MagnitudeAlongFiber"></a>

### *property* GeneralizedPlaneStrain.MagnitudeAlongFiber *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MagnitudeAlongFiber.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.MagnitudeRotationX"></a>

### *property* GeneralizedPlaneStrain.MagnitudeRotationX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MagnitudeRotationX.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.MagnitudeRotationY"></a>

### *property* GeneralizedPlaneStrain.MagnitudeRotationY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MagnitudeRotationY.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Name"></a>

### *property* GeneralizedPlaneStrain.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.ObjectId"></a>

### *property* GeneralizedPlaneStrain.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.ObjectState"></a>

### *property* GeneralizedPlaneStrain.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.ObjectTags"></a>

### *property* GeneralizedPlaneStrain.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Parent"></a>

### *property* GeneralizedPlaneStrain.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Properties"></a>

### *property* GeneralizedPlaneStrain.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.State"></a>

### *property* GeneralizedPlaneStrain.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Suppressed"></a>

### *property* GeneralizedPlaneStrain.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.VisibleProperties"></a>

### *property* GeneralizedPlaneStrain.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.XCoordinateOfRefPoint"></a>

### *property* GeneralizedPlaneStrain.XCoordinateOfRefPoint *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinateOfRefPoint.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.YCoordinateOfRefPoint"></a>

### *property* GeneralizedPlaneStrain.YCoordinateOfRefPoint *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinateOfRefPoint.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeneralizedPlaneStrain.Activate"></a>

### GeneralizedPlaneStrain.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.AddComment"></a>

### GeneralizedPlaneStrain.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.AddFigure"></a>

### GeneralizedPlaneStrain.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.AddImage"></a>

### GeneralizedPlaneStrain.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Copy"></a>

### GeneralizedPlaneStrain.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.CopyTo"></a>

### GeneralizedPlaneStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.CreateObjRef"></a>

### GeneralizedPlaneStrain.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.CreateParameter"></a>

### GeneralizedPlaneStrain.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Cut"></a>

### GeneralizedPlaneStrain.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Delete"></a>

### GeneralizedPlaneStrain.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Duplicate"></a>

### GeneralizedPlaneStrain.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Equals"></a>

### GeneralizedPlaneStrain.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetAPIName"></a>

### GeneralizedPlaneStrain.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetAllProperties"></a>

### GeneralizedPlaneStrain.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetChildren"></a>

### GeneralizedPlaneStrain.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GeneralizedPlaneStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetDetailsView"></a>

### GeneralizedPlaneStrain.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetEnumName"></a>

### GeneralizedPlaneStrain.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetFiberMagnitudeQuantityName"></a>

### GeneralizedPlaneStrain.GetFiberMagnitudeQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetFiberMagnitudeQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetHashCode"></a>

### GeneralizedPlaneStrain.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetIconFile"></a>

### GeneralizedPlaneStrain.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetLifetimeService"></a>

### GeneralizedPlaneStrain.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetObjectData"></a>

### GeneralizedPlaneStrain.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetParameter"></a>

### GeneralizedPlaneStrain.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetPath"></a>

### GeneralizedPlaneStrain.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetPropertyName"></a>

### GeneralizedPlaneStrain.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetPropertyValue"></a>

### GeneralizedPlaneStrain.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetRotationXQuantityName"></a>

### GeneralizedPlaneStrain.GetRotationXQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetRotationXQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetRotationYQuantityName"></a>

### GeneralizedPlaneStrain.GetRotationYQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetRotationYQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetVisibleProperties"></a>

### GeneralizedPlaneStrain.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GetVisiblePropertyNames"></a>

### GeneralizedPlaneStrain.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GroupAllSimilarChildren"></a>

### GeneralizedPlaneStrain.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.GroupSimilarObjects"></a>

### GeneralizedPlaneStrain.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.InitializeLifetimeService"></a>

### GeneralizedPlaneStrain.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.IsPropertyEditable"></a>

### GeneralizedPlaneStrain.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeneralizedPlaneStrain.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.IsPropertyVisible"></a>

### GeneralizedPlaneStrain.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeneralizedPlaneStrain.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.Paste"></a>

### GeneralizedPlaneStrain.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.PropertyByAPIName"></a>

### GeneralizedPlaneStrain.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.PropertyById"></a>

### GeneralizedPlaneStrain.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.PropertyByName"></a>

### GeneralizedPlaneStrain.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.RemoveFromGroup"></a>

### GeneralizedPlaneStrain.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GeneralizedPlaneStrain.RemoveParameter"></a>

### GeneralizedPlaneStrain.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

