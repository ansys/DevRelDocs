# `CylindricalCrack`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CylindricalCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CylindricalCrack(internalObject: Any)

<a id="CylindricalCrack"></a>

### *class* CylindricalCrack(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CylindricalCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CylindricalCrack.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#CylindricalCrack.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#CylindricalCrack.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CylindricalCrack.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CylindricalCrack.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CylindricalCrack.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CylindricalCrack.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CylindricalCrack.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CylindricalCrack.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CylindricalCrack.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CylindricalCrack.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CylindricalCrack.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CylindricalCrack.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CylindricalCrack.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CylindricalCrack.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CylindricalCrack.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CylindricalCrack.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CylindricalCrack.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CylindricalCrack.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CylindricalCrack.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CylindricalCrack.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CylindricalCrack.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CylindricalCrack.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CylindricalCrack.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CylindricalCrack.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CylindricalCrack.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CylindricalCrack.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CylindricalCrack.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CylindricalCrack.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CylindricalCrack.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CylindricalCrack.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CylindricalCrack.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CylindricalCrack.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CylindricalCrack.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CylindricalCrack.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CylindricalCrack.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CylindricalCrack.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CylindricalCrack.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CylindricalCrack.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CylindricalCrack.AttachedRefs)                             | AttachedRefs property.                                        |
| [`BottomFaceNodes`](#CylindricalCrack.BottomFaceNodes)                       | Gets or sets the BottomFaceNodes.                             |
| [`Children`](#CylindricalCrack.Children)                                     | Gets the list of children.                                    |
| [`CircumferentialDivisions`](#CylindricalCrack.CircumferentialDivisions)     | Gets or sets the CircumferentialDivisions.                    |
| [`ClsId`](#CylindricalCrack.ClsId)                                           | ClsId property.                                               |
| [`Comments`](#CylindricalCrack.Comments)                                     | Gets the list of associated comments.                         |
| [`Contact1Nodes`](#CylindricalCrack.Contact1Nodes)                           | Gets or sets the Contact1Nodes.                               |
| [`ContactPairsNodes`](#CylindricalCrack.ContactPairsNodes)                   | Gets or sets the ContactPairsNodes.                           |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                   | Gets or sets the CoordinateSystem.                            |
| [`CrackFacesNodes`](#CylindricalCrack.CrackFacesNodes)                       | Gets or sets the CrackFacesNodes.                             |
| [`CrackFrontDivisions`](#CylindricalCrack.CrackFrontDivisions)               | Gets or sets the CrackFrontDivisions.                         |
| [`CrackFrontNodes`](#CylindricalCrack.CrackFrontNodes)                       | Gets or sets the CrackFrontNodes.                             |
| [`CrackID`](#CylindricalCrack.CrackID)                                       | Gets the CrackID.                                             |
| [`CrackMeshMethod`](#CylindricalCrack.CrackMeshMethod)                       | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#CylindricalCrack.CrackShape)                                 | Gets the CrackShape.                                          |
| [`CrackSourceType`](#CylindricalCrack.CrackSourceType)                       | Gets the CrackSourceType.                                     |
| [`DataModelObjectCategory`](#CylindricalCrack.DataModelObjectCategory)       | Gets the current DataModelObject's category.                  |
| [`Figures`](#CylindricalCrack.Figures)                                       | Gets the list of associated figures.                          |
| [`FractureAffectedZone`](#CylindricalCrack.FractureAffectedZone)             | Gets or sets the FractureAffectedZone.                        |
| [`FractureAffectedZoneHeight`](#CylindricalCrack.FractureAffectedZoneHeight) | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#CylindricalCrack.FrontElementSize)                     | Gets or sets the FrontElementSize.                            |
| [`GroupingFolder`](#CylindricalCrack.GroupingFolder)                         | GroupingFolder property.                                      |
| [`GrowthRate`](#CylindricalCrack.GrowthRate)                                 | Gets or sets the GrowthRate.                                  |
| [`Height`](#CylindricalCrack.Height)                                         | Gets or sets the Height.                                      |
| [`IconName`](#CylindricalCrack.IconName)                                     | IconName property.                                            |
| [`Images`](#CylindricalCrack.Images)                                         | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#CylindricalCrack.ImportableObjectSourceId)     | ImportableObjectSourceId property.                            |
| [`InternalObject`](#CylindricalCrack.InternalObject)                         | Gets the internal object. For advanced usage only.            |
| [`LargestContourRadius`](#CylindricalCrack.LargestContourRadius)             | Gets or sets the LargestContourRadius.                        |
| [`Location`](#CylindricalCrack.Location)                                     | Gets or sets the Location.                                    |
| [`MajorRadius`](#CylindricalCrack.MajorRadius)                               | Gets or sets the MajorRadius.                                 |
| [`MeshContours`](#CylindricalCrack.MeshContours)                             | Gets or sets the MeshContours.                                |
| [`MinorRadius`](#CylindricalCrack.MinorRadius)                               | Gets or sets the MinorRadius.                                 |
| [`Name`](#CylindricalCrack.Name)                                             | Name property.                                                |
| [`ObjectId`](#CylindricalCrack.ObjectId)                                     | ObjectId property.                                            |
| [`ObjectState`](#CylindricalCrack.ObjectState)                               | ObjectState property.                                         |
| [`ObjectTags`](#CylindricalCrack.ObjectTags)                                 | ObjectTags property.                                          |
| [`Parent`](#CylindricalCrack.Parent)                                         | Parent property.                                              |
| [`Properties`](#CylindricalCrack.Properties)                                 | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CylindricalCrack.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`SolutionContours`](#CylindricalCrack.SolutionContours)                     | Gets or sets the SolutionContours.                            |
| [`State`](#CylindricalCrack.State)                                           | State property.                                               |
| [`Suppressed`](#CylindricalCrack.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`Target1Nodes`](#CylindricalCrack.Target1Nodes)                             | Gets or sets the Target1Nodes.                                |
| [`TopFaceNodes`](#CylindricalCrack.TopFaceNodes)                             | Gets or sets the TopFaceNodes.                                |
| [`TransferableObjectId`](#CylindricalCrack.TransferableObjectId)             | TransferableObjectId property.                                |
| [`VisibleProperties`](#CylindricalCrack.VisibleProperties)                   | Gets the list of properties that are visible for this object. |
| [`XScaleFactor`](#CylindricalCrack.XScaleFactor)                             | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#CylindricalCrack.YScaleFactor)                             | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#CylindricalCrack.ZScaleFactor)                             | Gets or sets the ZScaleFactor.                                |

<a id="property-detail"></a>

## Property detail

<a id="CylindricalCrack.AttachedRefs"></a>

### *property* CylindricalCrack.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.BottomFaceNodes"></a>

### *property* CylindricalCrack.BottomFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Children"></a>

### *property* CylindricalCrack.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CircumferentialDivisions"></a>

### *property* CylindricalCrack.CircumferentialDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ClsId"></a>

### *property* CylindricalCrack.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Comments"></a>

### *property* CylindricalCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Contact1Nodes"></a>

### *property* CylindricalCrack.Contact1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ContactPairsNodes"></a>

### *property* CylindricalCrack.ContactPairsNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CoordinateSystem"></a>

### *property* CylindricalCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackFacesNodes"></a>

### *property* CylindricalCrack.CrackFacesNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackFrontDivisions"></a>

### *property* CylindricalCrack.CrackFrontDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackFrontNodes"></a>

### *property* CylindricalCrack.CrackFrontNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackID"></a>

### *property* CylindricalCrack.CrackID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackMeshMethod"></a>

### *property* CylindricalCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackShape"></a>

### *property* CylindricalCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackSourceType"></a>

### *property* CylindricalCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.DataModelObjectCategory"></a>

### *property* CylindricalCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Figures"></a>

### *property* CylindricalCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.FractureAffectedZone"></a>

### *property* CylindricalCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.FractureAffectedZoneHeight"></a>

### *property* CylindricalCrack.FractureAffectedZoneHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.FrontElementSize"></a>

### *property* CylindricalCrack.FrontElementSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GroupingFolder"></a>

### *property* CylindricalCrack.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GrowthRate"></a>

### *property* CylindricalCrack.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Height"></a>

### *property* CylindricalCrack.Height *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Height.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.IconName"></a>

### *property* CylindricalCrack.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Images"></a>

### *property* CylindricalCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ImportableObjectSourceId"></a>

### *property* CylindricalCrack.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.InternalObject"></a>

### *property* CylindricalCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.LargestContourRadius"></a>

### *property* CylindricalCrack.LargestContourRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Location"></a>

### *property* CylindricalCrack.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.MajorRadius"></a>

### *property* CylindricalCrack.MajorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.MeshContours"></a>

### *property* CylindricalCrack.MeshContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.MinorRadius"></a>

### *property* CylindricalCrack.MinorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Name"></a>

### *property* CylindricalCrack.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ObjectId"></a>

### *property* CylindricalCrack.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ObjectState"></a>

### *property* CylindricalCrack.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ObjectTags"></a>

### *property* CylindricalCrack.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Parent"></a>

### *property* CylindricalCrack.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Properties"></a>

### *property* CylindricalCrack.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ReadOnly"></a>

### *property* CylindricalCrack.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.SolutionContours"></a>

### *property* CylindricalCrack.SolutionContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.State"></a>

### *property* CylindricalCrack.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Suppressed"></a>

### *property* CylindricalCrack.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Target1Nodes"></a>

### *property* CylindricalCrack.Target1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.TopFaceNodes"></a>

### *property* CylindricalCrack.TopFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.TransferableObjectId"></a>

### *property* CylindricalCrack.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.VisibleProperties"></a>

### *property* CylindricalCrack.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.XScaleFactor"></a>

### *property* CylindricalCrack.XScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.YScaleFactor"></a>

### *property* CylindricalCrack.YScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ZScaleFactor"></a>

### *property* CylindricalCrack.ZScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CylindricalCrack.Activate"></a>

### CylindricalCrack.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddCommandSnippet"></a>

### CylindricalCrack.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddComment"></a>

### CylindricalCrack.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddFigure"></a>

### CylindricalCrack.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddImage"></a>

### CylindricalCrack.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Copy"></a>

### CylindricalCrack.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CopyTo"></a>

### CylindricalCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CreateObjRef"></a>

### CylindricalCrack.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CreateParameter"></a>

### CylindricalCrack.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Cut"></a>

### CylindricalCrack.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Delete"></a>

### CylindricalCrack.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Duplicate"></a>

### CylindricalCrack.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Equals"></a>

### CylindricalCrack.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetAPIName"></a>

### CylindricalCrack.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetAllProperties"></a>

### CylindricalCrack.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetChildren"></a>

### CylindricalCrack.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CylindricalCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetDetailsView"></a>

### CylindricalCrack.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetEnumName"></a>

### CylindricalCrack.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetHashCode"></a>

### CylindricalCrack.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetIconFile"></a>

### CylindricalCrack.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetLifetimeService"></a>

### CylindricalCrack.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetObjectData"></a>

### CylindricalCrack.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetParameter"></a>

### CylindricalCrack.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetPath"></a>

### CylindricalCrack.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetPropertyName"></a>

### CylindricalCrack.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetPropertyValue"></a>

### CylindricalCrack.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetVisibleProperties"></a>

### CylindricalCrack.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetVisiblePropertyNames"></a>

### CylindricalCrack.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GroupAllSimilarChildren"></a>

### CylindricalCrack.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GroupSimilarObjects"></a>

### CylindricalCrack.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.InitializeLifetimeService"></a>

### CylindricalCrack.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.IsPropertyEditable"></a>

### CylindricalCrack.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CylindricalCrack.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.IsPropertyVisible"></a>

### CylindricalCrack.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CylindricalCrack.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Paste"></a>

### CylindricalCrack.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.PropertyByAPIName"></a>

### CylindricalCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.PropertyById"></a>

### CylindricalCrack.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.PropertyByName"></a>

### CylindricalCrack.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.RemoveFromGroup"></a>

### CylindricalCrack.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.RemoveParameter"></a>

### CylindricalCrack.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

