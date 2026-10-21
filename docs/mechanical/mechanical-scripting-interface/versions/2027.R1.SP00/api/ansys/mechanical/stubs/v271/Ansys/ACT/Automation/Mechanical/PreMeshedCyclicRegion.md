# `PreMeshedCyclicRegion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PreMeshedCyclicRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PreMeshedCyclicRegion(internalObject: Any)

<a id="PreMeshedCyclicRegion"></a>

### *class* PreMeshedCyclicRegion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PreMeshedCyclicRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PreMeshedCyclicRegion.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PreMeshedCyclicRegion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PreMeshedCyclicRegion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PreMeshedCyclicRegion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PreMeshedCyclicRegion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PreMeshedCyclicRegion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PreMeshedCyclicRegion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PreMeshedCyclicRegion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PreMeshedCyclicRegion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PreMeshedCyclicRegion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PreMeshedCyclicRegion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PreMeshedCyclicRegion.Equals)                                       | Equals method.                                                                              |
| [`FlipHighLow`](#PreMeshedCyclicRegion.FlipHighLow)                             | Flips the High and Low Boundaries.                                                          |
| [`GetAPIName`](#PreMeshedCyclicRegion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PreMeshedCyclicRegion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PreMeshedCyclicRegion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PreMeshedCyclicRegion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PreMeshedCyclicRegion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PreMeshedCyclicRegion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PreMeshedCyclicRegion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PreMeshedCyclicRegion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PreMeshedCyclicRegion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PreMeshedCyclicRegion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PreMeshedCyclicRegion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PreMeshedCyclicRegion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PreMeshedCyclicRegion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PreMeshedCyclicRegion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PreMeshedCyclicRegion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PreMeshedCyclicRegion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PreMeshedCyclicRegion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PreMeshedCyclicRegion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PreMeshedCyclicRegion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PreMeshedCyclicRegion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PreMeshedCyclicRegion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PreMeshedCyclicRegion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PreMeshedCyclicRegion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PreMeshedCyclicRegion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PreMeshedCyclicRegion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PreMeshedCyclicRegion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PreMeshedCyclicRegion.AttachedRefs)                             | AttachedRefs property.                                        |
| [`BoundaryDOFOrientation`](#PreMeshedCyclicRegion.BoundaryDOFOrientation)         | Gets or sets the BoundaryDOFOrientation.                      |
| [`Children`](#PreMeshedCyclicRegion.Children)                                     | Gets the list of children.                                    |
| [`ClsId`](#PreMeshedCyclicRegion.ClsId)                                           | ClsId property.                                               |
| [`Comments`](#PreMeshedCyclicRegion.Comments)                                     | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                        | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#PreMeshedCyclicRegion.DataModelObjectCategory)       | Gets the current DataModelObject's category.                  |
| [`Figures`](#PreMeshedCyclicRegion.Figures)                                       | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PreMeshedCyclicRegion.GroupingFolder)                         | GroupingFolder property.                                      |
| [`HighBoundaryLocation`](#PreMeshedCyclicRegion.HighBoundaryLocation)             | Gets or sets the HighBoundaryLocation.                        |
| [`IconName`](#PreMeshedCyclicRegion.IconName)                                     | IconName property.                                            |
| [`Images`](#PreMeshedCyclicRegion.Images)                                         | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#PreMeshedCyclicRegion.ImportableObjectSourceId)     | ImportableObjectSourceId property.                            |
| [`InternalObject`](#PreMeshedCyclicRegion.InternalObject)                         | Gets the internal object. For advanced usage only.            |
| [`Location`](#PreMeshedCyclicRegion.Location)                                     | Gets or sets the Location.                                    |
| [`LowBoundaryLocation`](#PreMeshedCyclicRegion.LowBoundaryLocation)               | Gets or sets the LowBoundaryLocation.                         |
| [`Name`](#PreMeshedCyclicRegion.Name)                                             | Name property.                                                |
| [`NumberOfSectors`](#PreMeshedCyclicRegion.NumberOfSectors)                       | Gets or sets the NumberOfSectors.                             |
| [`NumberOfSectorsCalculation`](#PreMeshedCyclicRegion.NumberOfSectorsCalculation) | Gets or sets how to calculate the number of sectors.          |
| [`ObjectId`](#PreMeshedCyclicRegion.ObjectId)                                     | ObjectId property.                                            |
| [`ObjectState`](#PreMeshedCyclicRegion.ObjectState)                               | ObjectState property.                                         |
| [`ObjectTags`](#PreMeshedCyclicRegion.ObjectTags)                                 | ObjectTags property.                                          |
| [`Parent`](#PreMeshedCyclicRegion.Parent)                                         | Parent property.                                              |
| [`Properties`](#PreMeshedCyclicRegion.Properties)                                 | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PreMeshedCyclicRegion.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`RelativeDistanceTolerance`](#PreMeshedCyclicRegion.RelativeDistanceTolerance)   | Gets or sets the RelativeDistanceTolerance.                   |
| [`ScopeMode`](#PreMeshedCyclicRegion.ScopeMode)                                   | Gets the ScopeMode.                                           |
| [`SectorAngleTolerance`](#PreMeshedCyclicRegion.SectorAngleTolerance)             | Gets or sets the SectorAngleTolerance.                        |
| [`SectorsNumber`](#PreMeshedCyclicRegion.SectorsNumber)                           | Sectors Number.                                               |
| [`State`](#PreMeshedCyclicRegion.State)                                           | State property.                                               |
| [`Suppressed`](#PreMeshedCyclicRegion.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#PreMeshedCyclicRegion.TransferableObjectId)             | TransferableObjectId property.                                |
| [`VisibleProperties`](#PreMeshedCyclicRegion.VisibleProperties)                   | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PreMeshedCyclicRegion.AttachedRefs"></a>

### *property* PreMeshedCyclicRegion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.BoundaryDOFOrientation"></a>

### *property* PreMeshedCyclicRegion.BoundaryDOFOrientation *: [Ansys.Mechanical.DataModel.Enums.SymmetryBoundaryDOFOrientation](../../../Mechanical/DataModel/Enums/SymmetryBoundaryDOFOrientation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SymmetryBoundaryDOFOrientation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryDOFOrientation.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Children"></a>

### *property* PreMeshedCyclicRegion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ClsId"></a>

### *property* PreMeshedCyclicRegion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Comments"></a>

### *property* PreMeshedCyclicRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.CoordinateSystem"></a>

### *property* PreMeshedCyclicRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.DataModelObjectCategory"></a>

### *property* PreMeshedCyclicRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Figures"></a>

### *property* PreMeshedCyclicRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GroupingFolder"></a>

### *property* PreMeshedCyclicRegion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.HighBoundaryLocation"></a>

### *property* PreMeshedCyclicRegion.HighBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.IconName"></a>

### *property* PreMeshedCyclicRegion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Images"></a>

### *property* PreMeshedCyclicRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ImportableObjectSourceId"></a>

### *property* PreMeshedCyclicRegion.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.InternalObject"></a>

### *property* PreMeshedCyclicRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Location"></a>

### *property* PreMeshedCyclicRegion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.LowBoundaryLocation"></a>

### *property* PreMeshedCyclicRegion.LowBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Name"></a>

### *property* PreMeshedCyclicRegion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.NumberOfSectors"></a>

### *property* PreMeshedCyclicRegion.NumberOfSectors *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSectors.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.NumberOfSectorsCalculation"></a>

### *property* PreMeshedCyclicRegion.NumberOfSectorsCalculation *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets how to calculate the number of sectors.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ObjectId"></a>

### *property* PreMeshedCyclicRegion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ObjectState"></a>

### *property* PreMeshedCyclicRegion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ObjectTags"></a>

### *property* PreMeshedCyclicRegion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Parent"></a>

### *property* PreMeshedCyclicRegion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Properties"></a>

### *property* PreMeshedCyclicRegion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ReadOnly"></a>

### *property* PreMeshedCyclicRegion.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.RelativeDistanceTolerance"></a>

### *property* PreMeshedCyclicRegion.RelativeDistanceTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RelativeDistanceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.ScopeMode"></a>

### *property* PreMeshedCyclicRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.SectorAngleTolerance"></a>

### *property* PreMeshedCyclicRegion.SectorAngleTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.SectorsNumber"></a>

### *property* PreMeshedCyclicRegion.SectorsNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Sectors Number.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.State"></a>

### *property* PreMeshedCyclicRegion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Suppressed"></a>

### *property* PreMeshedCyclicRegion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.TransferableObjectId"></a>

### *property* PreMeshedCyclicRegion.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.VisibleProperties"></a>

### *property* PreMeshedCyclicRegion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PreMeshedCyclicRegion.Activate"></a>

### PreMeshedCyclicRegion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.AddComment"></a>

### PreMeshedCyclicRegion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.AddFigure"></a>

### PreMeshedCyclicRegion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.AddImage"></a>

### PreMeshedCyclicRegion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Copy"></a>

### PreMeshedCyclicRegion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.CopyTo"></a>

### PreMeshedCyclicRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.CreateObjRef"></a>

### PreMeshedCyclicRegion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.CreateParameter"></a>

### PreMeshedCyclicRegion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Cut"></a>

### PreMeshedCyclicRegion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Delete"></a>

### PreMeshedCyclicRegion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Duplicate"></a>

### PreMeshedCyclicRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Equals"></a>

### PreMeshedCyclicRegion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.FlipHighLow"></a>

### PreMeshedCyclicRegion.FlipHighLow() → [None](https://docs.python.org/3/builtins/constants.html#None)

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetAPIName"></a>

### PreMeshedCyclicRegion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetAllProperties"></a>

### PreMeshedCyclicRegion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetChildren"></a>

### PreMeshedCyclicRegion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PreMeshedCyclicRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetDetailsView"></a>

### PreMeshedCyclicRegion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetEnumName"></a>

### PreMeshedCyclicRegion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetHashCode"></a>

### PreMeshedCyclicRegion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetIconFile"></a>

### PreMeshedCyclicRegion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetLifetimeService"></a>

### PreMeshedCyclicRegion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetObjectData"></a>

### PreMeshedCyclicRegion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetParameter"></a>

### PreMeshedCyclicRegion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetPath"></a>

### PreMeshedCyclicRegion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetPropertyName"></a>

### PreMeshedCyclicRegion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetPropertyValue"></a>

### PreMeshedCyclicRegion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetVisibleProperties"></a>

### PreMeshedCyclicRegion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GetVisiblePropertyNames"></a>

### PreMeshedCyclicRegion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GroupAllSimilarChildren"></a>

### PreMeshedCyclicRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.GroupSimilarObjects"></a>

### PreMeshedCyclicRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.InitializeLifetimeService"></a>

### PreMeshedCyclicRegion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.IsPropertyEditable"></a>

### PreMeshedCyclicRegion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PreMeshedCyclicRegion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.IsPropertyVisible"></a>

### PreMeshedCyclicRegion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PreMeshedCyclicRegion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.Paste"></a>

### PreMeshedCyclicRegion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.PropertyByAPIName"></a>

### PreMeshedCyclicRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.PropertyById"></a>

### PreMeshedCyclicRegion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.PropertyByName"></a>

### PreMeshedCyclicRegion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.RemoveFromGroup"></a>

### PreMeshedCyclicRegion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PreMeshedCyclicRegion.RemoveParameter"></a>

### PreMeshedCyclicRegion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

