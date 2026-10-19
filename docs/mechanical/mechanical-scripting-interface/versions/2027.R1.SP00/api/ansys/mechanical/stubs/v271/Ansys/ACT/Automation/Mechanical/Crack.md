# `Crack`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Crack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Crack(internalObject: Any)

<a id="Crack"></a>

### *class* Crack(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Crack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Crack.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#Crack.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#Crack.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Crack.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Crack.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Crack.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Crack.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Crack.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Crack.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Crack.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Crack.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Crack.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Crack.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Crack.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Crack.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Crack.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Crack.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Crack.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Crack.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Crack.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Crack.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Crack.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Crack.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Crack.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Crack.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Crack.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Crack.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Crack.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Crack.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Crack.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Crack.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Crack.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Crack.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Crack.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Crack.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Crack.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Crack.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Crack.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Crack.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AlignWithFaceNormal`](#Crack.AlignWithFaceNormal)               | Gets or sets the AlignWithFaceNormal.                         |
| [`AttachedRefs`](#Crack.AttachedRefs)                             | AttachedRefs property.                                        |
| [`BottomFaceNodes`](#Crack.BottomFaceNodes)                       | Gets or sets the BottomFaceNodes.                             |
| [`Children`](#Crack.Children)                                     | Gets the list of children.                                    |
| [`CircumferentialDivisions`](#Crack.CircumferentialDivisions)     | Gets or sets the CircumferentialDivisions.                    |
| [`ClsId`](#Crack.ClsId)                                           | ClsId property.                                               |
| [`Comments`](#Crack.Comments)                                     | Gets the list of associated comments.                         |
| [`Contact1Nodes`](#Crack.Contact1Nodes)                           | Gets or sets the Contact1Nodes.                               |
| [`ContactPairsNodes`](#Crack.ContactPairsNodes)                   | Gets or sets the ContactPairsNodes.                           |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)        | Gets or sets the CoordinateSystem.                            |
| [`CrackFacesNodes`](#Crack.CrackFacesNodes)                       | Gets or sets the CrackFacesNodes.                             |
| [`CrackFrontDivisions`](#Crack.CrackFrontDivisions)               | Gets or sets the CrackFrontDivisions.                         |
| [`CrackFrontNodes`](#Crack.CrackFrontNodes)                       | Gets or sets the CrackFrontNodes.                             |
| [`CrackID`](#Crack.CrackID)                                       | Gets the CrackID.                                             |
| [`CrackShape`](#Crack.CrackShape)                                 | Gets the CrackShape.                                          |
| [`CrackSourceType`](#Crack.CrackSourceType)                       | Gets the CrackSourceType.                                     |
| [`DataModelObjectCategory`](#Crack.DataModelObjectCategory)       | Gets the current DataModelObject's category.                  |
| [`FaceTopNodes`](#Crack.FaceTopNodes)                             | Gets or sets the FaceTopNodes.                                |
| [`Figures`](#Crack.Figures)                                       | Gets the list of associated figures.                          |
| [`FractureAffectedZone`](#Crack.FractureAffectedZone)             | Gets or sets the FractureAffectedZone.                        |
| [`FractureAffectedZoneHeight`](#Crack.FractureAffectedZoneHeight) | Gets or sets the FractureAffectedZoneHeight.                  |
| [`GroupingFolder`](#Crack.GroupingFolder)                         | GroupingFolder property.                                      |
| [`IconName`](#Crack.IconName)                                     | IconName property.                                            |
| [`Images`](#Crack.Images)                                         | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#Crack.ImportableObjectSourceId)     | ImportableObjectSourceId property.                            |
| [`InternalObject`](#Crack.InternalObject)                         | Gets the internal object. For advanced usage only.            |
| [`LargestContourRadius`](#Crack.LargestContourRadius)             | Gets or sets the LargestContourRadius.                        |
| [`Location`](#Crack.Location)                                     | Gets the Location.                                            |
| [`MajorRadius`](#Crack.MajorRadius)                               | Gets or sets the MajorRadius.                                 |
| [`MeshContours`](#Crack.MeshContours)                             | Gets or sets the MeshContours.                                |
| [`MinorRadius`](#Crack.MinorRadius)                               | Gets or sets the MinorRadius.                                 |
| [`Name`](#Crack.Name)                                             | Name property.                                                |
| [`ObjectId`](#Crack.ObjectId)                                     | ObjectId property.                                            |
| [`ObjectState`](#Crack.ObjectState)                               | ObjectState property.                                         |
| [`ObjectTags`](#Crack.ObjectTags)                                 | ObjectTags property.                                          |
| [`Parent`](#Crack.Parent)                                         | Parent property.                                              |
| [`ProjectToNearestSurface`](#Crack.ProjectToNearestSurface)       | Gets or sets the ProjectToNearestSurface.                     |
| [`Properties`](#Crack.Properties)                                 | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Crack.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`SolutionContours`](#Crack.SolutionContours)                     | Gets or sets the SolutionContours.                            |
| [`State`](#Crack.State)                                           | State property.                                               |
| [`Suppressed`](#Crack.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`Target1Nodes`](#Crack.Target1Nodes)                             | Gets or sets the Target1Nodes.                                |
| [`TransferableObjectId`](#Crack.TransferableObjectId)             | TransferableObjectId property.                                |
| [`VisibleProperties`](#Crack.VisibleProperties)                   | Gets the list of properties that are visible for this object. |
| [`XScaleFactor`](#Crack.XScaleFactor)                             | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#Crack.YScaleFactor)                             | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#Crack.ZScaleFactor)                             | Gets or sets the ZScaleFactor.                                |

<a id="property-detail"></a>

## Property detail

<a id="Crack.AlignWithFaceNormal"></a>

### *property* Crack.AlignWithFaceNormal *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AlignWithFaceNormal.

<!-- !! processed by numpydoc !! -->

<a id="Crack.AttachedRefs"></a>

### *property* Crack.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.BottomFaceNodes"></a>

### *property* Crack.BottomFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Children"></a>

### *property* Crack.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CircumferentialDivisions"></a>

### *property* Crack.CircumferentialDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ClsId"></a>

### *property* Crack.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Comments"></a>

### *property* Crack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Contact1Nodes"></a>

### *property* Crack.Contact1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ContactPairsNodes"></a>

### *property* Crack.ContactPairsNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CoordinateSystem"></a>

### *property* Crack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackFacesNodes"></a>

### *property* Crack.CrackFacesNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackFrontDivisions"></a>

### *property* Crack.CrackFrontDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackFrontNodes"></a>

### *property* Crack.CrackFrontNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackID"></a>

### *property* Crack.CrackID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackShape"></a>

### *property* Crack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackSourceType"></a>

### *property* Crack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="Crack.DataModelObjectCategory"></a>

### *property* Crack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Crack.FaceTopNodes"></a>

### *property* Crack.FaceTopNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceTopNodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Figures"></a>

### *property* Crack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Crack.FractureAffectedZone"></a>

### *property* Crack.FractureAffectedZone *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="Crack.FractureAffectedZoneHeight"></a>

### *property* Crack.FractureAffectedZoneHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GroupingFolder"></a>

### *property* Crack.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.IconName"></a>

### *property* Crack.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Images"></a>

### *property* Crack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ImportableObjectSourceId"></a>

### *property* Crack.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.InternalObject"></a>

### *property* Crack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Crack.LargestContourRadius"></a>

### *property* Crack.LargestContourRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Location"></a>

### *property* Crack.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Crack.MajorRadius"></a>

### *property* Crack.MajorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="Crack.MeshContours"></a>

### *property* Crack.MeshContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="Crack.MinorRadius"></a>

### *property* Crack.MinorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Name"></a>

### *property* Crack.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ObjectId"></a>

### *property* Crack.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ObjectState"></a>

### *property* Crack.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ObjectTags"></a>

### *property* Crack.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Parent"></a>

### *property* Crack.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ProjectToNearestSurface"></a>

### *property* Crack.ProjectToNearestSurface *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProjectToNearestSurface.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Properties"></a>

### *property* Crack.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ReadOnly"></a>

### *property* Crack.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Crack.SolutionContours"></a>

### *property* Crack.SolutionContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="Crack.State"></a>

### *property* Crack.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Suppressed"></a>

### *property* Crack.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Target1Nodes"></a>

### *property* Crack.Target1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.TransferableObjectId"></a>

### *property* Crack.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.VisibleProperties"></a>

### *property* Crack.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Crack.XScaleFactor"></a>

### *property* Crack.XScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="Crack.YScaleFactor"></a>

### *property* Crack.YScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ZScaleFactor"></a>

### *property* Crack.ZScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Crack.Activate"></a>

### Crack.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Crack.AddCommandSnippet"></a>

### Crack.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Crack.AddComment"></a>

### Crack.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Crack.AddFigure"></a>

### Crack.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Crack.AddImage"></a>

### Crack.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Crack.Copy"></a>

### Crack.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CopyTo"></a>

### Crack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CreateObjRef"></a>

### Crack.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CreateParameter"></a>

### Crack.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Cut"></a>

### Crack.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Delete"></a>

### Crack.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Duplicate"></a>

### Crack.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Equals"></a>

### Crack.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetAPIName"></a>

### Crack.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetAllProperties"></a>

### Crack.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetChildren"></a>

### Crack.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Crack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetDetailsView"></a>

### Crack.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetEnumName"></a>

### Crack.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetHashCode"></a>

### Crack.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetIconFile"></a>

### Crack.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetLifetimeService"></a>

### Crack.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetObjectData"></a>

### Crack.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetParameter"></a>

### Crack.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetPath"></a>

### Crack.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetPropertyName"></a>

### Crack.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetPropertyValue"></a>

### Crack.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetVisibleProperties"></a>

### Crack.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetVisiblePropertyNames"></a>

### Crack.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GroupAllSimilarChildren"></a>

### Crack.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GroupSimilarObjects"></a>

### Crack.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Crack.InitializeLifetimeService"></a>

### Crack.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.IsPropertyEditable"></a>

### Crack.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Crack.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.IsPropertyVisible"></a>

### Crack.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Crack.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Paste"></a>

### Crack.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Crack.PropertyByAPIName"></a>

### Crack.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Crack.PropertyById"></a>

### Crack.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Crack.PropertyByName"></a>

### Crack.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Crack.RemoveFromGroup"></a>

### Crack.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Crack.RemoveParameter"></a>

### Crack.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

