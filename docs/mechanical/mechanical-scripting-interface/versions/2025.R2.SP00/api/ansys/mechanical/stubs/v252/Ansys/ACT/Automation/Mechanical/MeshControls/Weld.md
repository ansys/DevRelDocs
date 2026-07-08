# `Weld`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.Weld"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Weld

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Weld.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Weld.Activate)                                                                                 | Activate the current object.                                                      |
| [`ActivateAllWorksheetEntries`](#Weld.ActivateAllWorksheetEntries)                                           | set the ActivateAllWorksheetEntries                                               |
| [`AddComment`](#Weld.AddComment)                                                                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#Weld.AddFigure)                                                                               | Creates a new child Figure.                                                       |
| [`AddImage`](#Weld.AddImage)                                                                                 | Creates a new child Image.                                                        |
| [`AddWeldWorksheetScopeToSelection`](#Weld.AddWeldWorksheetScopeToSelection)                                 | Create worksheet entry scope to selection                                         |
| [`AppendWeldControlIntersectionTag`](#Weld.AppendWeldControlIntersectionTag)                                 | append the WeldControlIntersectionTag                                             |
| [`AppendWeldWorksheetIntersectionTag`](#Weld.AppendWeldWorksheetIntersectionTag)                             | AppendWeldWorksheetIntersectionTag method.                                        |
| [`ClearAutoWeldIntersectionTag`](#Weld.ClearAutoWeldIntersectionTag)                                         | Clear Auto Intersection Tags                                                      |
| [`ClearWeldControlIntersectionTag`](#Weld.ClearWeldControlIntersectionTag)                                   | clear the WeldControlIntersectionTag                                              |
| [`ClearWeldWorksheetIntersectionTag`](#Weld.ClearWeldWorksheetIntersectionTag)                               | ClearWeldWorksheetIntersectionTag method.                                         |
| [`CopyTo`](#Weld.CopyTo)                                                                                     | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Weld.CreateParameter)                                                                   | Creates a new parameter for a Property.                                           |
| [`DeactivateAllWorksheetEntries`](#Weld.DeactivateAllWorksheetEntries)                                       | set the DeactivateAllWorksheetEntries                                             |
| [`DeactivateProblematicWorksheetEntries`](#Weld.DeactivateProblematicWorksheetEntries)                       | Deactivate Problematic Worksheet Entries                                          |
| [`Delete`](#Weld.Delete)                                                                                     | Run the Delete action.                                                            |
| [`Duplicate`](#Weld.Duplicate)                                                                               | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#Weld.GenerateMesh)                                                                         | Generate the Mesh.                                                                |
| [`GenerateWeldIntersectionTag`](#Weld.GenerateWeldIntersectionTag)                                           | Auto detect Intersection Tags within specified tolerance                          |
| [`GetChildren`](#Weld.GetChildren)                                                                           | Gets the list of children, filtered by type.                                      |
| [`GetCrossSectionIds`](#Weld.GetCrossSectionIds)                                                             | get CrossSection Ids                                                              |
| [`GetMaterialIds`](#Weld.GetMaterialIds)                                                                     | get Material Ids                                                                  |
| [`GetParameter`](#Weld.GetParameter)                                                                         | Gets the parameter corresponding to the given property.                           |
| [`GetWeldWorksheetAbsTol`](#Weld.GetWeldWorksheetAbsTol)                                                     | get the WeldControlWorksheetAbsTol                                                |
| [`GetWeldWorksheetActive`](#Weld.GetWeldWorksheetActive)                                                     | get the WeldWorksheetActive                                                       |
| [`GetWeldWorksheetBottomEntities`](#Weld.GetWeldWorksheetBottomEntities)                                     | get the WeldControlWorksheetBottomEntities                                        |
| [`GetWeldWorksheetEdgeMeshSize`](#Weld.GetWeldWorksheetEdgeMeshSize)                                         | get the WeldControlWorksheetEdgeMeshSize                                          |
| [`GetWeldWorksheetEdgeMeshSizeExpression`](#Weld.GetWeldWorksheetEdgeMeshSizeExpression)                     | get the WeldControlWorksheetEdgeMeshSizeExpression                                |
| [`GetWeldWorksheetEdges`](#Weld.GetWeldWorksheetEdges)                                                       | get the WeldControlWorksheetEdges                                                 |
| [`GetWeldWorksheetGenerateEndCaps`](#Weld.GetWeldWorksheetGenerateEndCaps)                                   | get the WeldControlWorksheetGenerateEndCaps                                       |
| [`GetWeldWorksheetHAZDistanceBottomPlate`](#Weld.GetWeldWorksheetHAZDistanceBottomPlate)                     | get the WeldControlWorksheetHAZDistance                                           |
| [`GetWeldWorksheetHAZDistanceExpressionBottomPlate`](#Weld.GetWeldWorksheetHAZDistanceExpressionBottomPlate) | get WorksheetHAZDistanceExpressionBottomPlate                                     |
| [`GetWeldWorksheetHAZDistanceExpressionTopPlate`](#Weld.GetWeldWorksheetHAZDistanceExpressionTopPlate)       | get WorksheetHAZDistanceExpressionTopPlate                                        |
| [`GetWeldWorksheetHAZGrowthRate`](#Weld.GetWeldWorksheetHAZGrowthRate)                                       | get the WeldControlWorksheetHAZGrowthRate                                         |
| [`GetWeldWorksheetHeight`](#Weld.GetWeldWorksheetHeight)                                                     | get the WeldControlWorksheetHeight                                                |
| [`GetWeldWorksheetIntersectionTag`](#Weld.GetWeldWorksheetIntersectionTag)                                   | get the WeldControlWorksheetIntersectionTag                                       |
| [`GetWeldWorksheetLapAngleTol`](#Weld.GetWeldWorksheetLapAngleTol)                                           | get the WeldControlWorksheetLapAngleTol                                           |
| [`GetWeldWorksheetLength`](#Weld.GetWeldWorksheetLength)                                                     | get the WeldControlWorksheetLength                                                |
| [`GetWeldWorksheetMaxThicknessFactor`](#Weld.GetWeldWorksheetMaxThicknessFactor)                             | get the WeldControlWorksheetMaxThicknessFactor                                    |
| [`GetWeldWorksheetMinThicknessFactor`](#Weld.GetWeldWorksheetMinThicknessFactor)                             | get the WeldControlWorksheetMinThicknessFactor                                    |
| [`GetWeldWorksheetNumError`](#Weld.GetWeldWorksheetNumError)                                                 | Get Number of Errored rows                                                        |
| [`GetWeldWorksheetNumLayers`](#Weld.GetWeldWorksheetNumLayers)                                               | get the WeldControlWorksheetNumLayers                                             |
| [`GetWeldWorksheetNumWarning`](#Weld.GetWeldWorksheetNumWarning)                                             | Get Number of rows with warnings                                                  |
| [`GetWeldWorksheetNumWelds`](#Weld.GetWeldWorksheetNumWelds)                                                 | get the WeldControlWorksheetNumWelds                                              |
| [`GetWeldWorksheetOffset1`](#Weld.GetWeldWorksheetOffset1)                                                   | get the WeldControlWorksheetOffset1                                               |
| [`GetWeldWorksheetOffset2`](#Weld.GetWeldWorksheetOffset2)                                                   | get the WeldControlWorksheetOffset2                                               |
| [`GetWeldWorksheetPitch`](#Weld.GetWeldWorksheetPitch)                                                       | get the WeldControlWorksheetPitch                                                 |
| [`GetWeldWorksheetSharpAngle`](#Weld.GetWeldWorksheetSharpAngle)                                             | get the WeldControlWorksheetSharpAngle                                            |
| [`GetWeldWorksheetSmoothing`](#Weld.GetWeldWorksheetSmoothing)                                               | get the WeldControlWorksheetSmoothing option                                      |
| [`GetWeldWorksheetThickness`](#Weld.GetWeldWorksheetThickness)                                               | get the WeldControlWorksheetThickness                                             |
| [`GetWeldWorksheetThicknessExpression`](#Weld.GetWeldWorksheetThicknessExpression)                           | get the WeldControlWorksheetThicknessExpression                                   |
| [`GetWeldWorksheetTopEntities`](#Weld.GetWeldWorksheetTopEntities)                                           | get the WeldControlWorksheetTopEntities                                           |
| [`GetWeldWorksheetWeldAngle`](#Weld.GetWeldWorksheetWeldAngle)                                               | get the WeldControlWorksheetWeldAngle                                             |
| [`GetWeldWorksheetWeldCurve`](#Weld.GetWeldWorksheetWeldCurve)                                               | get the WeldControlWorksheetWeldCurve                                             |
| [`GetWeldWorksheetWeldHeightExpression`](#Weld.GetWeldWorksheetWeldHeightExpression)                         | get the WeldControlWorksheetWeldHeight                                            |
| [`GetWeldWorksheetWeldWidthExpression`](#Weld.GetWeldWorksheetWeldWidthExpression)                           | get the WeldControlWorksheetWeldWidth                                             |
| [`GetWeldWorksheetWidth`](#Weld.GetWeldWorksheetWidth)                                                       | get the WeldControlWorksheetWidth                                                 |
| [`GroupAllSimilarChildren`](#Weld.GroupAllSimilarChildren)                                                   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Weld.GroupSimilarObjects)                                                           | Run the GroupSimilarObjects action.                                               |
| [`PreviewMeshOnWeldWorksheet`](#Weld.PreviewMeshOnWeldWorksheet)                                             | PreviewMeshOnWeldWorksheet method.                                                |
| [`PromoteToWeldControl`](#Weld.PromoteToWeldControl)                                                         | PromoteToWeldControl method.                                                      |
| [`PropertyByAPIName`](#Weld.PropertyByAPIName)                                                               | Get a property by its API name.                                                   |
| [`PropertyByName`](#Weld.PropertyByName)                                                                     | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Weld.RemoveParameter)                                                                   | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Weld.RenameBasedOnDefinition)                                                   | Run the RenameBasedOnDefinition action.                                           |
| [`SetWeldWorksheetAbsTol`](#Weld.SetWeldWorksheetAbsTol)                                                     | SetWeldWorksheetAbsTol method.                                                    |
| [`SetWeldWorksheetActive`](#Weld.SetWeldWorksheetActive)                                                     | SetWeldWorksheetActive method.                                                    |
| [`SetWeldWorksheetBottomEntities`](#Weld.SetWeldWorksheetBottomEntities)                                     | SetWeldWorksheetBottomEntities method.                                            |
| [`SetWeldWorksheetEdgeMeshSize`](#Weld.SetWeldWorksheetEdgeMeshSize)                                         | SetWeldWorksheetEdgeMeshSize method.                                              |
| [`SetWeldWorksheetEdgeMeshSizeExpression`](#Weld.SetWeldWorksheetEdgeMeshSizeExpression)                     | SetWeldWorksheetEdgeMeshSizeExpression method.                                    |
| [`SetWeldWorksheetEdges`](#Weld.SetWeldWorksheetEdges)                                                       | SetWeldWorksheetEdges method.                                                     |
| [`SetWeldWorksheetGenerateEndCaps`](#Weld.SetWeldWorksheetGenerateEndCaps)                                   | SetWeldWorksheetGenerateEndCaps method.                                           |
| [`SetWeldWorksheetHAZDistanceBottomPlate`](#Weld.SetWeldWorksheetHAZDistanceBottomPlate)                     | SetWeldWorksheetHAZDistanceBottomPlate method.                                    |
| [`SetWeldWorksheetHAZDistanceExpressionBottomPlate`](#Weld.SetWeldWorksheetHAZDistanceExpressionBottomPlate) | SetWeldWorksheetHAZDistanceExpressionBottomPlate method.                          |
| [`SetWeldWorksheetHAZDistanceExpressionTopPlate`](#Weld.SetWeldWorksheetHAZDistanceExpressionTopPlate)       | SetWeldWorksheetHAZDistanceExpressionTopPlate method.                             |
| [`SetWeldWorksheetHAZDistanceTopPlate`](#Weld.SetWeldWorksheetHAZDistanceTopPlate)                           | SetWeldWorksheetHAZDistanceTopPlate method.                                       |
| [`SetWeldWorksheetHAZGrowthRate`](#Weld.SetWeldWorksheetHAZGrowthRate)                                       | SetWeldWorksheetHAZGrowthRate method.                                             |
| [`SetWeldWorksheetHeight`](#Weld.SetWeldWorksheetHeight)                                                     | SetWeldWorksheetHeight method.                                                    |
| [`SetWeldWorksheetIntersectionTag`](#Weld.SetWeldWorksheetIntersectionTag)                                   | SetWeldWorksheetIntersectionTag method.                                           |
| [`SetWeldWorksheetLapAngleTol`](#Weld.SetWeldWorksheetLapAngleTol)                                           | SetWeldWorksheetLapAngleTol method.                                               |
| [`SetWeldWorksheetLength`](#Weld.SetWeldWorksheetLength)                                                     | SetWeldWorksheetLength method.                                                    |
| [`SetWeldWorksheetMaxThicknessFactor`](#Weld.SetWeldWorksheetMaxThicknessFactor)                             | SetWeldWorksheetMaxThicknessFactor method.                                        |
| [`SetWeldWorksheetMinThicknessFactor`](#Weld.SetWeldWorksheetMinThicknessFactor)                             | SetWeldWorksheetMinThicknessFactor method.                                        |
| [`SetWeldWorksheetNumLayers`](#Weld.SetWeldWorksheetNumLayers)                                               | SetWeldWorksheetNumLayers method.                                                 |
| [`SetWeldWorksheetNumWelds`](#Weld.SetWeldWorksheetNumWelds)                                                 | SetWeldWorksheetNumWelds method.                                                  |
| [`SetWeldWorksheetOffset1`](#Weld.SetWeldWorksheetOffset1)                                                   | SetWeldWorksheetOffset1 method.                                                   |
| [`SetWeldWorksheetOffset2`](#Weld.SetWeldWorksheetOffset2)                                                   | SetWeldWorksheetOffset2 method.                                                   |
| [`SetWeldWorksheetPitch`](#Weld.SetWeldWorksheetPitch)                                                       | SetWeldWorksheetPitch method.                                                     |
| [`SetWeldWorksheetSharpAngle`](#Weld.SetWeldWorksheetSharpAngle)                                             | SetWeldWorksheetSharpAngle method.                                                |
| [`SetWeldWorksheetSmoothing`](#Weld.SetWeldWorksheetSmoothing)                                               | SetWeldWorksheetSmoothing method.                                                 |
| [`SetWeldWorksheetThickness`](#Weld.SetWeldWorksheetThickness)                                               | SetWeldWorksheetThickness method.                                                 |
| [`SetWeldWorksheetThicknessExpression`](#Weld.SetWeldWorksheetThicknessExpression)                           | SetWeldWorksheetThicknessExpression method.                                       |
| [`SetWeldWorksheetTopEntities`](#Weld.SetWeldWorksheetTopEntities)                                           | SetWeldWorksheetTopEntities method.                                               |
| [`SetWeldWorksheetWeldAngle`](#Weld.SetWeldWorksheetWeldAngle)                                               | SetWeldWorksheetWeldAngle method.                                                 |
| [`SetWeldWorksheetWeldBody`](#Weld.SetWeldWorksheetWeldBody)                                                 | SetWeldWorksheetWeldBody method.                                                  |
| [`SetWeldWorksheetWeldCurve`](#Weld.SetWeldWorksheetWeldCurve)                                               | SetWeldWorksheetWeldCurve method.                                                 |
| [`SetWeldWorksheetWeldHeightExpression`](#Weld.SetWeldWorksheetWeldHeightExpression)                         | SetWeldWorksheetWeldHeightExpression method.                                      |
| [`SetWeldWorksheetWeldWidthExpression`](#Weld.SetWeldWorksheetWeldWidthExpression)                           | SetWeldWorksheetWeldWidthExpression method.                                       |
| [`SetWeldWorksheetWidth`](#Weld.SetWeldWorksheetWidth)                                                       | SetWeldWorksheetWidth method.                                                     |
| [`WeldWorksheetAddEntry`](#Weld.WeldWorksheetAddEntry)                                                       | add an entry to WeldWorksheet                                                     |
| [`WeldWorksheetCreateControlForCurveBodies`](#Weld.WeldWorksheetCreateControlForCurveBodies)                 | Create worksheet entries for all curve bodies                                     |
| [`WeldWorksheetDeleteEntry`](#Weld.WeldWorksheetDeleteEntry)                                                 | WeldWorksheetDeleteEntry method.                                                  |
| [`WeldWorksheetExport`](#Weld.WeldWorksheetExport)                                                           | export WeldWorksheet                                                              |
| [`WeldWorksheetImport`](#Weld.WeldWorksheetImport)                                                           | import WeldWorksheet                                                              |
| [`WeldWorksheetNumEntries`](#Weld.WeldWorksheetNumEntries)                                                   | Get total number of entries in worksheet                                          |
| [`WeldWorksheetStatus`](#Weld.WeldWorksheetStatus)                                                           | Get state of a given row                                                          |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AdjustWeldHeight`](#Weld.AdjustWeldHeight)                                 | Gets or sets the WeldControlAdjustWeldHeight.                                                                                                           |
| [`AngledDirection`](#Weld.AngledDirection)                                   | Gets or sets the WeldControlAngledDirection.                                                                                                            |
| [`BottomEntities`](#Weld.BottomEntities)                                     | Gets or sets the Bottom Entities (Bodies / Faces ) or Extension.                                                                                        |
| [`BottomEntitiesNamedSelection`](#Weld.BottomEntitiesNamedSelection)         | Gets or sets the BottomEntitiesNamedSelection.                                                                                                          |
| [`ButtWeldOption`](#Weld.ButtWeldOption)                                     | Gets or sets the ButtWeldOption.                                                                                                                        |
| [`Children`](#Weld.Children)                                                 | Gets the list of children.                                                                                                                              |
| [`Comments`](#Weld.Comments)                                                 | Gets the list of associated comments.                                                                                                                   |
| [`ConnectionTolerance`](#Weld.ConnectionTolerance)                           | Gets or sets the WeldControlConnectionTolerance                                                                                                         |
| [`ControlType`](#Weld.ControlType)                                           | Gets or sets the WeldControlType.                                                                                                                       |
| [`CreateHAZLayer`](#Weld.CreateHAZLayer)                                     | Gets or sets the WeldControlCreateHAZLayer.                                                                                                             |
| [`CreateUsing`](#Weld.CreateUsing)                                           | Gets or sets the WeldControlCreateUsing.                                                                                                                |
| [`CreationCriteria`](#Weld.CreationCriteria)                                 | Gets or sets the WeldControlCreationCriteria.                                                                                                           |
| [`CrossSectionId`](#Weld.CrossSectionId)                                     | Gets or sets the WeldControlCrossSectionId.                                                                                                             |
| [`CurveScoping`](#Weld.CurveScoping)                                         | Gets or sets the WeldControlCurveScoping.                                                                                                               |
| [`DataModelObjectCategory`](#Weld.DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                                                                                                            |
| [`EdgeMeshSize`](#Weld.EdgeMeshSize)                                         | Gets or sets the WeldControlEdgeMeshSize                                                                                                                |
| [`EdgeMeshSizeAssignment`](#Weld.EdgeMeshSizeAssignment)                     | Gets or sets the WeldControlEdgeMeshSizeAssignment.                                                                                                     |
| [`EdgeMeshSizeExpression`](#Weld.EdgeMeshSizeExpression)                     | Gets or sets the WeldControlEdgeMeshSizeExpression Value.                                                                                               |
| [`EdgeMeshSizeFactor`](#Weld.EdgeMeshSizeFactor)                             | Gets or sets the user defined factor of edge mesh size used to detect weld. Default: 5. An exception will be thrown if WeldDetectionMethod is Automatic |
| [`EdgeSelection`](#Weld.EdgeSelection)                                       | Gets or sets the Edges.                                                                                                                                 |
| [`Figures`](#Weld.Figures)                                                   | Gets the list of associated figures.                                                                                                                    |
| [`GenerateEndCaps`](#Weld.GenerateEndCaps)                                   | Gets or sets the WeldControlSmoothing.                                                                                                                  |
| [`GenerateNamedSelection`](#Weld.GenerateNamedSelection)                     | Gets or sets the WeldControlGenerateNamedSelection.                                                                                                     |
| [`HAZDistanceAssignment`](#Weld.HAZDistanceAssignment)                       | Gets or sets the WeldControlHAZDistanceAssignment.                                                                                                      |
| [`HAZDistanceBottomPlate`](#Weld.HAZDistanceBottomPlate)                     | Gets or sets HAZDistanceBottomPlate                                                                                                                     |
| [`HAZDistanceExpressionBottomPlate`](#Weld.HAZDistanceExpressionBottomPlate) | Gets or sets HAZDistanceExpressionBottomPlate Value.                                                                                                    |
| [`HAZDistanceExpressionTopPlate`](#Weld.HAZDistanceExpressionTopPlate)       | Gets or sets the WeldControlHAZDistanceExpression Value.                                                                                                |
| [`HAZDistanceOption`](#Weld.HAZDistanceOption)                               | Gets or sets the WeldControlHAZDistanceOption.                                                                                                          |
| [`HAZDistanceTopPlate`](#Weld.HAZDistanceTopPlate)                           | Gets or sets HAZDistanceTopPlate                                                                                                                        |
| [`HAZGrowthRate`](#Weld.HAZGrowthRate)                                       | Gets or sets the WeldControlHAZGrowthRate                                                                                                               |
| [`Images`](#Weld.Images)                                                     | Gets the list of associated images.                                                                                                                     |
| [`InternalObject`](#Weld.InternalObject)                                     | Gets the internal object. For advanced usage only.                                                                                                      |
| [`LapWeldAngleTolerance`](#Weld.LapWeldAngleTolerance)                       | Gets or sets the LapWeldAngleTolerance.                                                                                                                 |
| [`LayerTransitionType`](#Weld.LayerTransitionType)                           | Gets or sets the WeldControlHAZLayerTransitionType.                                                                                                     |
| [`MaterialId`](#Weld.MaterialId)                                             | Gets or sets the WeldControlMaterialId.                                                                                                                 |
| [`MaxThicknessFactor`](#Weld.MaxThicknessFactor)                             | Gets or sets the WeldControlMaxThicknessFactor                                                                                                          |
| [`MinThicknessFactor`](#Weld.MinThicknessFactor)                             | Gets or sets the WeldControlMinThicknessFactor                                                                                                          |
| [`ModeledAs`](#Weld.ModeledAs)                                               | Gets or sets the WeldControlModeledAs.                                                                                                                  |
| [`NameFilter`](#Weld.NameFilter)                                             | Gets or sets the NameFilter.                                                                                                                            |
| [`NumberOfLayers`](#Weld.NumberOfLayers)                                     | Gets or sets WeldControlNumberOfLayers                                                                                                                  |
| [`NumberOfWelds`](#Weld.NumberOfWelds)                                       | Gets or sets WeldControlNumberOfLayers                                                                                                                  |
| [`Offset1`](#Weld.Offset1)                                                   | Gets or sets the WeldControlOffsetLayerHeight                                                                                                           |
| [`Offset2`](#Weld.Offset2)                                                   | Gets or sets the WeldControlOffsetLayerHeight                                                                                                           |
| [`Properties`](#Weld.Properties)                                             | Gets the list of properties for this object.                                                                                                            |
| [`Relaxation`](#Weld.Relaxation)                                             | Gets or sets the WeldControlRelaxation.                                                                                                                 |
| [`ScopingMethod`](#Weld.ScopingMethod)                                       | Gets or sets the ScopingMethod.                                                                                                                         |
| [`SharpAngle`](#Weld.SharpAngle)                                             | Gets or sets the WeldSharpAngle.                                                                                                                        |
| [`Smoothing`](#Weld.Smoothing)                                               | Gets or sets the WeldControlSmoothing.                                                                                                                  |
| [`Source`](#Weld.Source)                                                     | Gets or sets the WeldControlSource.                                                                                                                     |
| [`Suppressed`](#Weld.Suppressed)                                             | Gets or sets the Suppressed.                                                                                                                            |
| [`Thickness`](#Weld.Thickness)                                               | Gets or sets the WeldControlThickness                                                                                                                   |
| [`ThicknessAssignment`](#Weld.ThicknessAssignment)                           | Gets or sets the WeldControlThicknessAssignment.                                                                                                        |
| [`TopEntities`](#Weld.TopEntities)                                           | Gets or sets the Top Entities (Bodies / Faces ) or Extension.                                                                                           |
| [`TopEntitiesNamedSelection`](#Weld.TopEntitiesNamedSelection)               | Gets or sets the TopEntitiesNamedSelection.                                                                                                             |
| [`UseWorksheet`](#Weld.UseWorksheet)                                         | Gets or sets the WeldControlUseWorksheet.                                                                                                               |
| [`VisibleProperties`](#Weld.VisibleProperties)                               | Gets the list of properties that are visible for this object.                                                                                           |
| [`WeldAngle`](#Weld.WeldAngle)                                               | Gets or sets the WeldAngle.                                                                                                                             |
| [`WeldControlWeldWidth`](#Weld.WeldControlWeldWidth)                         | Gets or sets the WeldControlWeldWidth                                                                                                                   |
| [`WeldCurves`](#Weld.WeldCurves)                                             | Gets or sets the Weld Curves.                                                                                                                           |
| [`WeldCurvesBody`](#Weld.WeldCurvesBody)                                     | WeldCurvesBody property.                                                                                                                                |
| [`WeldDefinitionFileLocation`](#Weld.WeldDefinitionFileLocation)             | Gets or sets the WeldDefinitionFile Location.                                                                                                           |
| [`WeldDetectionMethod`](#Weld.WeldDetectionMethod)                           | Gets or sets the method to detect welds. Default: Automatic                                                                                             |
| [`WeldEdgesNamedSelection`](#Weld.WeldEdgesNamedSelection)                   | Gets or sets the WeldEdgesNamedSelection.                                                                                                               |
| [`WeldElementRows`](#Weld.WeldElementRows)                                   | Gets or sets the WeldControlElementRows.                                                                                                                |
| [`WeldFormulation`](#Weld.WeldFormulation)                                   | Gets or sets the WeldFormulation.                                                                                                                       |
| [`WeldHeight`](#Weld.WeldHeight)                                             | Gets or sets the WeldControlOffsetLayerHeight                                                                                                           |
| [`WeldHeightAssignment`](#Weld.WeldHeightAssignment)                         | Gets or sets the WeldControlWeldHeightAssignment.                                                                                                       |
| [`WeldHeightExpression`](#Weld.WeldHeightExpression)                         | Gets or sets the WeldControlWeldHeightExpression Value.                                                                                                 |
| [`WeldIntersectionTag`](#Weld.WeldIntersectionTag)                           | Gets or sets the WeldControlIntersectionTag Value.                                                                                                      |
| [`WeldIntersectionTolerance`](#Weld.WeldIntersectionTolerance)               | Gets or sets the WeldControlIntersectionTolerance Value.                                                                                                |
| [`WeldLength`](#Weld.WeldLength)                                             | Gets or sets the WeldControlOffsetLayerHeight                                                                                                           |
| [`WeldPinballRadius`](#Weld.WeldPinballRadius)                               | Gets or sets the WeldPinballRadius                                                                                                                      |
| [`WeldPitch`](#Weld.WeldPitch)                                               | Gets or sets the WeldControlOffsetLayerHeight                                                                                                           |
| [`WeldTargetShellFace`](#Weld.WeldTargetShellFace)                           | Gets or sets the WeldTargetShellFace.                                                                                                                   |
| [`WeldThicknessExpression`](#Weld.WeldThicknessExpression)                   | Gets or sets the WeldControlThicknessExpression Value.                                                                                                  |
| [`WeldWidthAssignment`](#Weld.WeldWidthAssignment)                           | Gets or sets the WeldControlWeldWidthAssignment.                                                                                                        |
| [`WeldWidthExpression`](#Weld.WeldWidthExpression)                           | Gets or sets the WeldControlWeldWidthExpression Value.                                                                                                  |
| [`WriteDefinitionFile`](#Weld.WriteDefinitionFile)                           | Gets or sets the WeldControlSmoothing.                                                                                                                  |

<a id="property-detail"></a>

## Property detail

<a id="Weld.AdjustWeldHeight"></a>

### *property* Weld.AdjustWeldHeight *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlAdjustWeldHeight.

<!-- !! processed by numpydoc !! -->

<a id="Weld.AngledDirection"></a>

### *property* Weld.AngledDirection *: Ansys.Mechanical.DataModel.Enums.WeldAngledDirection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlAngledDirection.

<!-- !! processed by numpydoc !! -->

<a id="Weld.BottomEntities"></a>

### *property* Weld.BottomEntities *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Bottom Entities (Bodies / Faces ) or Extension.

<!-- !! processed by numpydoc !! -->

<a id="Weld.BottomEntitiesNamedSelection"></a>

### *property* Weld.BottomEntitiesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomEntitiesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Weld.ButtWeldOption"></a>

### *property* Weld.ButtWeldOption *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ButtWeldOption.

<!-- !! processed by numpydoc !! -->

<a id="Weld.Children"></a>

### *property* Weld.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Weld.Comments"></a>

### *property* Weld.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Weld.ConnectionTolerance"></a>

### *property* Weld.ConnectionTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlConnectionTolerance

<!-- !! processed by numpydoc !! -->

<a id="Weld.ControlType"></a>

### *property* Weld.ControlType *: Ansys.Mechanical.DataModel.Enums.WeldType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlType.

<!-- !! processed by numpydoc !! -->

<a id="Weld.CreateHAZLayer"></a>

### *property* Weld.CreateHAZLayer *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCreateHAZLayer.

<!-- !! processed by numpydoc !! -->

<a id="Weld.CreateUsing"></a>

### *property* Weld.CreateUsing *: Ansys.Mechanical.DataModel.Enums.WeldCreateUsing | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCreateUsing.

<!-- !! processed by numpydoc !! -->

<a id="Weld.CreationCriteria"></a>

### *property* Weld.CreationCriteria *: Ansys.Mechanical.DataModel.Enums.WeldCreationCriteria | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCreationCriteria.

<!-- !! processed by numpydoc !! -->

<a id="Weld.CrossSectionId"></a>

### *property* Weld.CrossSectionId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCrossSectionId.

<!-- !! processed by numpydoc !! -->

<a id="Weld.CurveScoping"></a>

### *property* Weld.CurveScoping *: Ansys.Mechanical.DataModel.Enums.WeldCurveScoping | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCurveScoping.

<!-- !! processed by numpydoc !! -->

<a id="Weld.DataModelObjectCategory"></a>

### *property* Weld.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Weld.EdgeMeshSize"></a>

### *property* Weld.EdgeMeshSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlEdgeMeshSize

<!-- !! processed by numpydoc !! -->

<a id="Weld.EdgeMeshSizeAssignment"></a>

### *property* Weld.EdgeMeshSizeAssignment *: Ansys.Mechanical.DataModel.Enums.WeldEdgeMeshSizeAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlEdgeMeshSizeAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Weld.EdgeMeshSizeExpression"></a>

### *property* Weld.EdgeMeshSizeExpression *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlEdgeMeshSizeExpression Value.

<!-- !! processed by numpydoc !! -->

<a id="Weld.EdgeMeshSizeFactor"></a>

### *property* Weld.EdgeMeshSizeFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the user defined factor of edge mesh size used to detect weld. Default: 5. An exception will be thrown if WeldDetectionMethod is Automatic

<!-- !! processed by numpydoc !! -->

<a id="Weld.EdgeSelection"></a>

### *property* Weld.EdgeSelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Edges.

<!-- !! processed by numpydoc !! -->

<a id="Weld.Figures"></a>

### *property* Weld.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Weld.GenerateEndCaps"></a>

### *property* Weld.GenerateEndCaps *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="Weld.GenerateNamedSelection"></a>

### *property* Weld.GenerateNamedSelection *: Ansys.Mechanical.DataModel.Enums.WeldGeneratedNamedSelection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlGenerateNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Weld.HAZDistanceAssignment"></a>

### *property* Weld.HAZDistanceAssignment *: Ansys.Mechanical.DataModel.Enums.WeldHAZDistanceAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZDistanceAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Weld.HAZDistanceBottomPlate"></a>

### *property* Weld.HAZDistanceBottomPlate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets HAZDistanceBottomPlate

<!-- !! processed by numpydoc !! -->

<a id="Weld.HAZDistanceExpressionBottomPlate"></a>

### *property* Weld.HAZDistanceExpressionBottomPlate *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets HAZDistanceExpressionBottomPlate Value.

<!-- !! processed by numpydoc !! -->

<a id="Weld.HAZDistanceExpressionTopPlate"></a>

### *property* Weld.HAZDistanceExpressionTopPlate *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZDistanceExpression Value.

<!-- !! processed by numpydoc !! -->

<a id="Weld.HAZDistanceOption"></a>

### *property* Weld.HAZDistanceOption *: Ansys.Mechanical.DataModel.Enums.WeldHAZDistanceOption | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZDistanceOption.

<!-- !! processed by numpydoc !! -->

<a id="Weld.HAZDistanceTopPlate"></a>

### *property* Weld.HAZDistanceTopPlate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets HAZDistanceTopPlate

<!-- !! processed by numpydoc !! -->

<a id="Weld.HAZGrowthRate"></a>

### *property* Weld.HAZGrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZGrowthRate

<!-- !! processed by numpydoc !! -->

<a id="Weld.Images"></a>

### *property* Weld.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Weld.InternalObject"></a>

### *property* Weld.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Weld.LapWeldAngleTolerance"></a>

### *property* Weld.LapWeldAngleTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LapWeldAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Weld.LayerTransitionType"></a>

### *property* Weld.LayerTransitionType *: Ansys.Mechanical.DataModel.Enums.LayerTransitionType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZLayerTransitionType.

<!-- !! processed by numpydoc !! -->

<a id="Weld.MaterialId"></a>

### *property* Weld.MaterialId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlMaterialId.

<!-- !! processed by numpydoc !! -->

<a id="Weld.MaxThicknessFactor"></a>

### *property* Weld.MaxThicknessFactor *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlMaxThicknessFactor

<!-- !! processed by numpydoc !! -->

<a id="Weld.MinThicknessFactor"></a>

### *property* Weld.MinThicknessFactor *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlMinThicknessFactor

<!-- !! processed by numpydoc !! -->

<a id="Weld.ModeledAs"></a>

### *property* Weld.ModeledAs *: Ansys.Mechanical.DataModel.Enums.WeldModeledAs | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlModeledAs.

<!-- !! processed by numpydoc !! -->

<a id="Weld.NameFilter"></a>

### *property* Weld.NameFilter *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NameFilter.

<!-- !! processed by numpydoc !! -->

<a id="Weld.NumberOfLayers"></a>

### *property* Weld.NumberOfLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets WeldControlNumberOfLayers

<!-- !! processed by numpydoc !! -->

<a id="Weld.NumberOfWelds"></a>

### *property* Weld.NumberOfWelds *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets WeldControlNumberOfLayers

<!-- !! processed by numpydoc !! -->

<a id="Weld.Offset1"></a>

### *property* Weld.Offset1 *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

<a id="Weld.Offset2"></a>

### *property* Weld.Offset2 *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

<a id="Weld.Properties"></a>

### *property* Weld.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Weld.Relaxation"></a>

### *property* Weld.Relaxation *: Ansys.Mechanical.DataModel.Enums.WeldRelaxation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlRelaxation.

<!-- !! processed by numpydoc !! -->

<a id="Weld.ScopingMethod"></a>

### *property* Weld.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SharpAngle"></a>

### *property* Weld.SharpAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldSharpAngle.

<!-- !! processed by numpydoc !! -->

<a id="Weld.Smoothing"></a>

### *property* Weld.Smoothing *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="Weld.Source"></a>

### *property* Weld.Source *: Ansys.Mechanical.DataModel.Enums.WeldSource | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSource.

<!-- !! processed by numpydoc !! -->

<a id="Weld.Suppressed"></a>

### *property* Weld.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Weld.Thickness"></a>

### *property* Weld.Thickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlThickness

<!-- !! processed by numpydoc !! -->

<a id="Weld.ThicknessAssignment"></a>

### *property* Weld.ThicknessAssignment *: Ansys.Mechanical.DataModel.Enums.WeldThickness | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlThicknessAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Weld.TopEntities"></a>

### *property* Weld.TopEntities *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Top Entities (Bodies / Faces ) or Extension.

<!-- !! processed by numpydoc !! -->

<a id="Weld.TopEntitiesNamedSelection"></a>

### *property* Weld.TopEntitiesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopEntitiesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Weld.UseWorksheet"></a>

### *property* Weld.UseWorksheet *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlUseWorksheet.

<!-- !! processed by numpydoc !! -->

<a id="Weld.VisibleProperties"></a>

### *property* Weld.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldAngle"></a>

### *property* Weld.WeldAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldAngle.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldControlWeldWidth"></a>

### *property* Weld.WeldControlWeldWidth *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldWidth

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldCurves"></a>

### *property* Weld.WeldCurves *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Weld Curves.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldCurvesBody"></a>

### *property* Weld.WeldCurvesBody *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

WeldCurvesBody property.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldDefinitionFileLocation"></a>

### *property* Weld.WeldDefinitionFileLocation *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldDefinitionFile Location.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldDetectionMethod"></a>

### *property* Weld.WeldDetectionMethod *: [Ansys.Mechanical.DataModel.Enums.WeldDetectionMethodType](../../../../Mechanical/DataModel/Enums/WeldDetectionMethodType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WeldDetectionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the method to detect welds. Default: Automatic

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldEdgesNamedSelection"></a>

### *property* Weld.WeldEdgesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldEdgesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldElementRows"></a>

### *property* Weld.WeldElementRows *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlElementRows.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldFormulation"></a>

### *property* Weld.WeldFormulation *: [Ansys.Mechanical.DataModel.Enums.ContactFormulation](../../../../Mechanical/DataModel/Enums/ContactFormulation.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldFormulation.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldHeight"></a>

### *property* Weld.WeldHeight *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldHeightAssignment"></a>

### *property* Weld.WeldHeightAssignment *: Ansys.Mechanical.DataModel.Enums.WeldHeightAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldHeightAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldHeightExpression"></a>

### *property* Weld.WeldHeightExpression *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldHeightExpression Value.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldIntersectionTag"></a>

### *property* Weld.WeldIntersectionTag *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlIntersectionTag Value.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldIntersectionTolerance"></a>

### *property* Weld.WeldIntersectionTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlIntersectionTolerance Value.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldLength"></a>

### *property* Weld.WeldLength *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldPinballRadius"></a>

### *property* Weld.WeldPinballRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldPinballRadius

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldPitch"></a>

### *property* Weld.WeldPitch *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldTargetShellFace"></a>

### *property* Weld.WeldTargetShellFace *: Ansys.Mechanical.DataModel.Enums.WeldTargetShellFaceType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldTargetShellFace.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldThicknessExpression"></a>

### *property* Weld.WeldThicknessExpression *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlThicknessExpression Value.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldWidthAssignment"></a>

### *property* Weld.WeldWidthAssignment *: Ansys.Mechanical.DataModel.Enums.WeldWidthAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldWidthAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldWidthExpression"></a>

### *property* Weld.WeldWidthExpression *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldWidthExpression Value.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WriteDefinitionFile"></a>

### *property* Weld.WriteDefinitionFile *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Weld.Activate"></a>

### Weld.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Weld.ActivateAllWorksheetEntries"></a>

### Weld.ActivateAllWorksheetEntries() → [None](https://docs.python.org/3/library/constants.html#None)

set the ActivateAllWorksheetEntries

<!-- !! processed by numpydoc !! -->

<a id="Weld.AddComment"></a>

### Weld.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Weld.AddFigure"></a>

### Weld.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Weld.AddImage"></a>

### Weld.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Weld.AddWeldWorksheetScopeToSelection"></a>

### Weld.AddWeldWorksheetScopeToSelection(index: [int](https://docs.python.org/3/library/functions.html#int), subset: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Create worksheet entry scope to selection

<!-- !! processed by numpydoc !! -->

<a id="Weld.AppendWeldControlIntersectionTag"></a>

### Weld.AppendWeldControlIntersectionTag(val: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

append the WeldControlIntersectionTag

<!-- !! processed by numpydoc !! -->

<a id="Weld.AppendWeldWorksheetIntersectionTag"></a>

### Weld.AppendWeldWorksheetIntersectionTag(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

AppendWeldWorksheetIntersectionTag method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.ClearAutoWeldIntersectionTag"></a>

### Weld.ClearAutoWeldIntersectionTag(includeInactive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Clear Auto Intersection Tags

<!-- !! processed by numpydoc !! -->

<a id="Weld.ClearWeldControlIntersectionTag"></a>

### Weld.ClearWeldControlIntersectionTag() → [None](https://docs.python.org/3/library/constants.html#None)

clear the WeldControlIntersectionTag

<!-- !! processed by numpydoc !! -->

<a id="Weld.ClearWeldWorksheetIntersectionTag"></a>

### Weld.ClearWeldWorksheetIntersectionTag(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → [None](https://docs.python.org/3/library/constants.html#None)

ClearWeldWorksheetIntersectionTag method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.CopyTo"></a>

### Weld.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Weld.CreateParameter"></a>

### Weld.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Weld.DeactivateAllWorksheetEntries"></a>

### Weld.DeactivateAllWorksheetEntries() → [None](https://docs.python.org/3/library/constants.html#None)

set the DeactivateAllWorksheetEntries

<!-- !! processed by numpydoc !! -->

<a id="Weld.DeactivateProblematicWorksheetEntries"></a>

### Weld.DeactivateProblematicWorksheetEntries() → [None](https://docs.python.org/3/library/constants.html#None)

Deactivate Problematic Worksheet Entries

<!-- !! processed by numpydoc !! -->

<a id="Weld.Delete"></a>

### Weld.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Weld.Duplicate"></a>

### Weld.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Weld.GenerateMesh"></a>

### Weld.GenerateMesh() → [None](https://docs.python.org/3/library/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Weld.GenerateWeldIntersectionTag"></a>

### Weld.GenerateWeldIntersectionTag() → [None](https://docs.python.org/3/library/constants.html#None)

Auto detect Intersection Tags within specified tolerance

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetChildren"></a>

### Weld.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetCrossSectionIds"></a>

### Weld.GetCrossSectionIds(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → Ansys.Common.Interop.AnsCoreObjects.IAnsUINTColl

get CrossSection Ids

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetMaterialIds"></a>

### Weld.GetMaterialIds(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → Ansys.Common.Interop.AnsCoreObjects.IAnsUINTColl

get Material Ids

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetParameter"></a>

### Weld.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetAbsTol"></a>

### Weld.GetWeldWorksheetAbsTol(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetAbsTol

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetActive"></a>

### Weld.GetWeldWorksheetActive(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

get the WeldWorksheetActive

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetBottomEntities"></a>

### Weld.GetWeldWorksheetBottomEntities(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

get the WeldControlWorksheetBottomEntities

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetEdgeMeshSize"></a>

### Weld.GetWeldWorksheetEdgeMeshSize(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetEdgeMeshSize

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetEdgeMeshSizeExpression"></a>

### Weld.GetWeldWorksheetEdgeMeshSizeExpression(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

get the WeldControlWorksheetEdgeMeshSizeExpression

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetEdges"></a>

### Weld.GetWeldWorksheetEdges(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

get the WeldControlWorksheetEdges

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetGenerateEndCaps"></a>

### Weld.GetWeldWorksheetGenerateEndCaps(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

get the WeldControlWorksheetGenerateEndCaps

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetHAZDistanceBottomPlate"></a>

### Weld.GetWeldWorksheetHAZDistanceBottomPlate(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetHAZDistance

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetHAZDistanceExpressionBottomPlate"></a>

### Weld.GetWeldWorksheetHAZDistanceExpressionBottomPlate(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

get WorksheetHAZDistanceExpressionBottomPlate

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetHAZDistanceExpressionTopPlate"></a>

### Weld.GetWeldWorksheetHAZDistanceExpressionTopPlate(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

get WorksheetHAZDistanceExpressionTopPlate

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetHAZGrowthRate"></a>

### Weld.GetWeldWorksheetHAZGrowthRate(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetHAZGrowthRate

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetHeight"></a>

### Weld.GetWeldWorksheetHeight(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetHeight

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetIntersectionTag"></a>

### Weld.GetWeldWorksheetIntersectionTag(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

get the WeldControlWorksheetIntersectionTag

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetLapAngleTol"></a>

### Weld.GetWeldWorksheetLapAngleTol(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetLapAngleTol

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetLength"></a>

### Weld.GetWeldWorksheetLength(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetLength

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetMaxThicknessFactor"></a>

### Weld.GetWeldWorksheetMaxThicknessFactor(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetMaxThicknessFactor

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetMinThicknessFactor"></a>

### Weld.GetWeldWorksheetMinThicknessFactor(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetMinThicknessFactor

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetNumError"></a>

### Weld.GetWeldWorksheetNumError() → [int](https://docs.python.org/3/library/functions.html#int)

Get Number of Errored rows

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetNumLayers"></a>

### Weld.GetWeldWorksheetNumLayers(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

get the WeldControlWorksheetNumLayers

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetNumWarning"></a>

### Weld.GetWeldWorksheetNumWarning() → [int](https://docs.python.org/3/library/functions.html#int)

Get Number of rows with warnings

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetNumWelds"></a>

### Weld.GetWeldWorksheetNumWelds(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

get the WeldControlWorksheetNumWelds

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetOffset1"></a>

### Weld.GetWeldWorksheetOffset1(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetOffset1

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetOffset2"></a>

### Weld.GetWeldWorksheetOffset2(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetOffset2

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetPitch"></a>

### Weld.GetWeldWorksheetPitch(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetPitch

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetSharpAngle"></a>

### Weld.GetWeldWorksheetSharpAngle(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetSharpAngle

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetSmoothing"></a>

### Weld.GetWeldWorksheetSmoothing(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

get the WeldControlWorksheetSmoothing option

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetThickness"></a>

### Weld.GetWeldWorksheetThickness(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetThickness

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetThicknessExpression"></a>

### Weld.GetWeldWorksheetThicknessExpression(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

get the WeldControlWorksheetThicknessExpression

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetTopEntities"></a>

### Weld.GetWeldWorksheetTopEntities(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

get the WeldControlWorksheetTopEntities

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetWeldAngle"></a>

### Weld.GetWeldWorksheetWeldAngle(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetWeldAngle

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetWeldCurve"></a>

### Weld.GetWeldWorksheetWeldCurve(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

get the WeldControlWorksheetWeldCurve

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetWeldHeightExpression"></a>

### Weld.GetWeldWorksheetWeldHeightExpression(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

get the WeldControlWorksheetWeldHeight

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetWeldWidthExpression"></a>

### Weld.GetWeldWorksheetWeldWidthExpression(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

get the WeldControlWorksheetWeldWidth

<!-- !! processed by numpydoc !! -->

<a id="Weld.GetWeldWorksheetWidth"></a>

### Weld.GetWeldWorksheetWidth(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

get the WeldControlWorksheetWidth

<!-- !! processed by numpydoc !! -->

<a id="Weld.GroupAllSimilarChildren"></a>

### Weld.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Weld.GroupSimilarObjects"></a>

### Weld.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Weld.PreviewMeshOnWeldWorksheet"></a>

### Weld.PreviewMeshOnWeldWorksheet(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → [None](https://docs.python.org/3/library/constants.html#None)

PreviewMeshOnWeldWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.PromoteToWeldControl"></a>

### Weld.PromoteToWeldControl(indices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → [int](https://docs.python.org/3/library/functions.html#int)

PromoteToWeldControl method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.PropertyByAPIName"></a>

### Weld.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Weld.PropertyByName"></a>

### Weld.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Weld.RemoveParameter"></a>

### Weld.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Weld.RenameBasedOnDefinition"></a>

### Weld.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetAbsTol"></a>

### Weld.SetWeldWorksheetAbsTol(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetAbsTol method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetActive"></a>

### Weld.SetWeldWorksheetActive(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetActive method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetBottomEntities"></a>

### Weld.SetWeldWorksheetBottomEntities(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetBottomEntities method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetEdgeMeshSize"></a>

### Weld.SetWeldWorksheetEdgeMeshSize(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetEdgeMeshSize method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetEdgeMeshSizeExpression"></a>

### Weld.SetWeldWorksheetEdgeMeshSizeExpression(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetEdgeMeshSizeExpression method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetEdges"></a>

### Weld.SetWeldWorksheetEdges(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetEdges method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetGenerateEndCaps"></a>

### Weld.SetWeldWorksheetGenerateEndCaps(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetGenerateEndCaps method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetHAZDistanceBottomPlate"></a>

### Weld.SetWeldWorksheetHAZDistanceBottomPlate(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetHAZDistanceBottomPlate method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetHAZDistanceExpressionBottomPlate"></a>

### Weld.SetWeldWorksheetHAZDistanceExpressionBottomPlate(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetHAZDistanceExpressionBottomPlate method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetHAZDistanceExpressionTopPlate"></a>

### Weld.SetWeldWorksheetHAZDistanceExpressionTopPlate(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetHAZDistanceExpressionTopPlate method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetHAZDistanceTopPlate"></a>

### Weld.SetWeldWorksheetHAZDistanceTopPlate(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetHAZDistanceTopPlate method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetHAZGrowthRate"></a>

### Weld.SetWeldWorksheetHAZGrowthRate(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetHAZGrowthRate method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetHeight"></a>

### Weld.SetWeldWorksheetHeight(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetHeight method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetIntersectionTag"></a>

### Weld.SetWeldWorksheetIntersectionTag(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetIntersectionTag method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetLapAngleTol"></a>

### Weld.SetWeldWorksheetLapAngleTol(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetLapAngleTol method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetLength"></a>

### Weld.SetWeldWorksheetLength(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetLength method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetMaxThicknessFactor"></a>

### Weld.SetWeldWorksheetMaxThicknessFactor(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetMaxThicknessFactor method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetMinThicknessFactor"></a>

### Weld.SetWeldWorksheetMinThicknessFactor(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetMinThicknessFactor method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetNumLayers"></a>

### Weld.SetWeldWorksheetNumLayers(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetNumLayers method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetNumWelds"></a>

### Weld.SetWeldWorksheetNumWelds(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetNumWelds method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetOffset1"></a>

### Weld.SetWeldWorksheetOffset1(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetOffset1 method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetOffset2"></a>

### Weld.SetWeldWorksheetOffset2(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetOffset2 method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetPitch"></a>

### Weld.SetWeldWorksheetPitch(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetPitch method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetSharpAngle"></a>

### Weld.SetWeldWorksheetSharpAngle(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetSharpAngle method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetSmoothing"></a>

### Weld.SetWeldWorksheetSmoothing(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetSmoothing method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetThickness"></a>

### Weld.SetWeldWorksheetThickness(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetThickness method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetThicknessExpression"></a>

### Weld.SetWeldWorksheetThicknessExpression(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetThicknessExpression method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetTopEntities"></a>

### Weld.SetWeldWorksheetTopEntities(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetTopEntities method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetWeldAngle"></a>

### Weld.SetWeldWorksheetWeldAngle(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetWeldAngle method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetWeldBody"></a>

### Weld.SetWeldWorksheetWeldBody(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetWeldBody method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetWeldCurve"></a>

### Weld.SetWeldWorksheetWeldCurve(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetWeldCurve method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetWeldHeightExpression"></a>

### Weld.SetWeldWorksheetWeldHeightExpression(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetWeldHeightExpression method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetWeldWidthExpression"></a>

### Weld.SetWeldWorksheetWeldWidthExpression(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetWeldWidthExpression method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.SetWeldWorksheetWidth"></a>

### Weld.SetWeldWorksheetWidth(rowIndices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)], val: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

SetWeldWorksheetWidth method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldWorksheetAddEntry"></a>

### Weld.WeldWorksheetAddEntry() → [None](https://docs.python.org/3/library/constants.html#None)

add an entry to WeldWorksheet

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldWorksheetCreateControlForCurveBodies"></a>

### Weld.WeldWorksheetCreateControlForCurveBodies() → [None](https://docs.python.org/3/library/constants.html#None)

Create worksheet entries for all curve bodies

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldWorksheetDeleteEntry"></a>

### Weld.WeldWorksheetDeleteEntry(indices: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → [None](https://docs.python.org/3/library/constants.html#None)

WeldWorksheetDeleteEntry method.

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldWorksheetExport"></a>

### Weld.WeldWorksheetExport(fileName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

export WeldWorksheet

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldWorksheetImport"></a>

### Weld.WeldWorksheetImport(fileName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

import WeldWorksheet

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldWorksheetNumEntries"></a>

### Weld.WeldWorksheetNumEntries() → [int](https://docs.python.org/3/library/functions.html#int)

Get total number of entries in worksheet

<!-- !! processed by numpydoc !! -->

<a id="Weld.WeldWorksheetStatus"></a>

### Weld.WeldWorksheetStatus(rowIndex: [int](https://docs.python.org/3/library/functions.html#int)) → Ansys.Mechanical.DataModel.Enums.WeldStatus

Get state of a given row

<!-- !! processed by numpydoc !! -->

