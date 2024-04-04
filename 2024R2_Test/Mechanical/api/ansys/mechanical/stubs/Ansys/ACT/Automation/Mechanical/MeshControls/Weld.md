# Weld

### *class* Weld

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Weld.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearWeldControlIntersectionTag`](#Weld.ClearWeldControlIntersectionTag)                                   | clear the WeldControlIntersectionTag                                              |
|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AppendWeldControlIntersectionTag`](#Weld.AppendWeldControlIntersectionTag)                                 | append the WeldControlIntersectionTag                                             |
| [`GenerateWeldIntersectionTag`](#Weld.GenerateWeldIntersectionTag)                                           | Auto detect Intersection Tags within specified tolerance                          |
| [`ClearAutoWeldIntersectionTag`](#Weld.ClearAutoWeldIntersectionTag)                                         | Clear Auto Intersection Tags                                                      |
| [`WeldWorksheetStatus`](#Weld.WeldWorksheetStatus)                                                           | Get state of a given row                                                          |
| [`GetWeldWorksheetNumWarning`](#Weld.GetWeldWorksheetNumWarning)                                             | Get Number of rows with warnings                                                  |
| [`GetWeldWorksheetNumError`](#Weld.GetWeldWorksheetNumError)                                                 | Get Number of Errored rows                                                        |
| [`ActivateAllWorksheetEntries`](#Weld.ActivateAllWorksheetEntries)                                           | set the ActivateAllWorksheetEntries                                               |
| [`DeactivateAllWorksheetEntries`](#Weld.DeactivateAllWorksheetEntries)                                       | set the DeactivateAllWorksheetEntries                                             |
| [`SetWeldWorksheetActive`](#Weld.SetWeldWorksheetActive)                                                     | SetWeldWorksheetActive method.                                                    |
| [`GetWeldWorksheetActive`](#Weld.GetWeldWorksheetActive)                                                     | get the WeldWorksheetActive                                                       |
| [`SetWeldWorksheetEdgeMeshSize`](#Weld.SetWeldWorksheetEdgeMeshSize)                                         | SetWeldWorksheetEdgeMeshSize method.                                              |
| [`GetWeldWorksheetEdgeMeshSize`](#Weld.GetWeldWorksheetEdgeMeshSize)                                         | get the WeldControlWorksheetEdgeMeshSize                                          |
| [`SetWeldWorksheetWeldAngle`](#Weld.SetWeldWorksheetWeldAngle)                                               | SetWeldWorksheetWeldAngle method.                                                 |
| [`GetWeldWorksheetWeldAngle`](#Weld.GetWeldWorksheetWeldAngle)                                               | get the WeldControlWorksheetWeldAngle                                             |
| [`GetWeldWorksheetHAZDistanceBottomPlate`](#Weld.GetWeldWorksheetHAZDistanceBottomPlate)                     | get the WeldControlWorksheetHAZDistance                                           |
| [`SetWeldWorksheet4TopPlate`](#Weld.SetWeldWorksheet4TopPlate)                                               | SetWeldWorksheet4TopPlate method.                                                 |
| [`SetWeldWorksheetHAZDistanceBottomPlate`](#Weld.SetWeldWorksheetHAZDistanceBottomPlate)                     | SetWeldWorksheetHAZDistanceBottomPlate method.                                    |
| [`GetWeldWorksheetSharpAngle`](#Weld.GetWeldWorksheetSharpAngle)                                             | get the WeldControlWorksheetSharpAngle                                            |
| [`SetWeldWorksheetSharpAngle`](#Weld.SetWeldWorksheetSharpAngle)                                             | SetWeldWorksheetSharpAngle method.                                                |
| [`GetWeldWorksheetHeight`](#Weld.GetWeldWorksheetHeight)                                                     | get the WeldControlWorksheetHeight                                                |
| [`SetWeldWorksheetHeight`](#Weld.SetWeldWorksheetHeight)                                                     | SetWeldWorksheetHeight method.                                                    |
| [`GetWeldWorksheetLength`](#Weld.GetWeldWorksheetLength)                                                     | get the WeldControlWorksheetLength                                                |
| [`SetWeldWorksheetLength`](#Weld.SetWeldWorksheetLength)                                                     | SetWeldWorksheetLength method.                                                    |
| [`GetWeldWorksheetWidth`](#Weld.GetWeldWorksheetWidth)                                                       | get the WeldControlWorksheetWidth                                                 |
| [`SetWeldWorksheetWidth`](#Weld.SetWeldWorksheetWidth)                                                       | SetWeldWorksheetWidth method.                                                     |
| [`WeldWorksheetNumEntries`](#Weld.WeldWorksheetNumEntries)                                                   | Get total number of entries in worksheet                                          |
| [`GetWeldWorksheetPitch`](#Weld.GetWeldWorksheetPitch)                                                       | get the WeldControlWorksheetPitch                                                 |
| [`SetWeldWorksheetPitch`](#Weld.SetWeldWorksheetPitch)                                                       | SetWeldWorksheetPitch method.                                                     |
| [`GetWeldWorksheetThickness`](#Weld.GetWeldWorksheetThickness)                                               | get the WeldControlWorksheetThickness                                             |
| [`SetWeldWorksheetThickness`](#Weld.SetWeldWorksheetThickness)                                               | SetWeldWorksheetThickness method.                                                 |
| [`GetWeldWorksheetAbsTol`](#Weld.GetWeldWorksheetAbsTol)                                                     | get the WeldControlWorksheetAbsTol                                                |
| [`SetWeldWorksheetAbsTol`](#Weld.SetWeldWorksheetAbsTol)                                                     | SetWeldWorksheetAbsTol method.                                                    |
| [`GetWeldWorksheetNumWelds`](#Weld.GetWeldWorksheetNumWelds)                                                 | get the WeldControlWorksheetNumWelds                                              |
| [`SetWeldWorksheetNumWelds`](#Weld.SetWeldWorksheetNumWelds)                                                 | SetWeldWorksheetNumWelds method.                                                  |
| [`GetWeldWorksheetOffset1`](#Weld.GetWeldWorksheetOffset1)                                                   | get the WeldControlWorksheetOffset1                                               |
| [`SetWeldWorksheetOffset1`](#Weld.SetWeldWorksheetOffset1)                                                   | SetWeldWorksheetOffset1 method.                                                   |
| [`GetWeldWorksheetOffset2`](#Weld.GetWeldWorksheetOffset2)                                                   | get the WeldControlWorksheetOffset2                                               |
| [`SetWeldWorksheetOffset2`](#Weld.SetWeldWorksheetOffset2)                                                   | SetWeldWorksheetOffset2 method.                                                   |
| [`GetWeldWorksheetSmoothing`](#Weld.GetWeldWorksheetSmoothing)                                               | get the WeldControlWorksheetSmoothing option                                      |
| [`SetWeldWorksheetSmoothing`](#Weld.SetWeldWorksheetSmoothing)                                               | SetWeldWorksheetSmoothing method.                                                 |
| [`GetWeldWorksheetLapAngleTol`](#Weld.GetWeldWorksheetLapAngleTol)                                           | get the WeldControlWorksheetLapAngleTol                                           |
| [`SetWeldWorksheetLapAngleTol`](#Weld.SetWeldWorksheetLapAngleTol)                                           | SetWeldWorksheetLapAngleTol method.                                               |
| [`GetWeldWorksheetGenerateEndCaps`](#Weld.GetWeldWorksheetGenerateEndCaps)                                   | get the WeldControlWorksheetGenerateEndCaps                                       |
| [`SetWeldWorksheetGenerateEndCaps`](#Weld.SetWeldWorksheetGenerateEndCaps)                                   | SetWeldWorksheetGenerateEndCaps method.                                           |
| [`GetWeldWorksheetHAZGrowthRate`](#Weld.GetWeldWorksheetHAZGrowthRate)                                       | get the WeldControlWorksheetHAZGrowthRate                                         |
| [`SetWeldWorksheetNumLayers`](#Weld.SetWeldWorksheetNumLayers)                                               | SetWeldWorksheetNumLayers method.                                                 |
| [`GetWeldWorksheetNumLayers`](#Weld.GetWeldWorksheetNumLayers)                                               | get the WeldControlWorksheetNumLayers                                             |
| [`SetWeldWorksheetHAZGrowthRate`](#Weld.SetWeldWorksheetHAZGrowthRate)                                       | SetWeldWorksheetHAZGrowthRate method.                                             |
| [`GetWeldWorksheetMaxThicknessFactor`](#Weld.GetWeldWorksheetMaxThicknessFactor)                             | get the WeldControlWorksheetMaxThicknessFactor                                    |
| [`SetWeldWorksheetMaxThicknessFactor`](#Weld.SetWeldWorksheetMaxThicknessFactor)                             | SetWeldWorksheetMaxThicknessFactor method.                                        |
| [`GetWeldWorksheetMinThicknessFactor`](#Weld.GetWeldWorksheetMinThicknessFactor)                             | get the WeldControlWorksheetMinThicknessFactor                                    |
| [`SetWeldWorksheetMinThicknessFactor`](#Weld.SetWeldWorksheetMinThicknessFactor)                             | SetWeldWorksheetMinThicknessFactor method.                                        |
| [`GetWeldWorksheetThicknessExpression`](#Weld.GetWeldWorksheetThicknessExpression)                           | get the WeldControlWorksheetThicknessExpression                                   |
| [`SetWeldWorksheetThicknessExpression`](#Weld.SetWeldWorksheetThicknessExpression)                           | SetWeldWorksheetThicknessExpression method.                                       |
| [`GetWeldWorksheetEdgeMeshSizeExpression`](#Weld.GetWeldWorksheetEdgeMeshSizeExpression)                     | get the WeldControlWorksheetEdgeMeshSizeExpression                                |
| [`SetWeldWorksheetEdgeMeshSizeExpression`](#Weld.SetWeldWorksheetEdgeMeshSizeExpression)                     | SetWeldWorksheetEdgeMeshSizeExpression method.                                    |
| [`GetWeldWorksheetWeldWidthExpression`](#Weld.GetWeldWorksheetWeldWidthExpression)                           | get the WeldControlWorksheetWeldWidth                                             |
| [`SetWeldWorksheetWeldWidthExpression`](#Weld.SetWeldWorksheetWeldWidthExpression)                           | SetWeldWorksheetWeldWidthExpression method.                                       |
| [`GetWeldWorksheetWeldHeightExpression`](#Weld.GetWeldWorksheetWeldHeightExpression)                         | get the WeldControlWorksheetWeldHeight                                            |
| [`SetWeldWorksheetWeldHeightExpression`](#Weld.SetWeldWorksheetWeldHeightExpression)                         | SetWeldWorksheetWeldHeightExpression method.                                      |
| [`GetWeldWorksheetHAZDistanceExpressionTopPlate`](#Weld.GetWeldWorksheetHAZDistanceExpressionTopPlate)       | get WorksheetHAZDistanceExpressionTopPlate                                        |
| [`GetWeldWorksheetHAZDistanceExpressionBottomPlate`](#Weld.GetWeldWorksheetHAZDistanceExpressionBottomPlate) | get WorksheetHAZDistanceExpressionBottomPlate                                     |
| [`SetWeldWorksheetHAZDistanceExpressionTopPlate`](#Weld.SetWeldWorksheetHAZDistanceExpressionTopPlate)       | SetWeldWorksheetHAZDistanceExpressionTopPlate method.                             |
| [`SetWeldWorksheetHAZDistanceExpressionBottomPlate`](#Weld.SetWeldWorksheetHAZDistanceExpressionBottomPlate) | SetWeldWorksheetHAZDistanceExpressionBottomPlate method.                          |
| [`GetWeldWorksheetWeldCurve`](#Weld.GetWeldWorksheetWeldCurve)                                               | get the WeldControlWorksheetWeldCurve                                             |
| [`SetWeldWorksheetWeldCurve`](#Weld.SetWeldWorksheetWeldCurve)                                               | SetWeldWorksheetWeldCurve method.                                                 |
| [`DeactivateProblematicWorksheetEntries`](#Weld.DeactivateProblematicWorksheetEntries)                       | Deactivate Problematic Worksheet Entries                                          |
| [`GetWeldWorksheetEdges`](#Weld.GetWeldWorksheetEdges)                                                       | get the WeldControlWorksheetEdges                                                 |
| [`SetWeldWorksheetEdges`](#Weld.SetWeldWorksheetEdges)                                                       | SetWeldWorksheetEdges method.                                                     |
| [`GetWeldWorksheetBottomEntities`](#Weld.GetWeldWorksheetBottomEntities)                                     | get the WeldControlWorksheetBottomEntities                                        |
| [`SetWeldWorksheetBottomEntities`](#Weld.SetWeldWorksheetBottomEntities)                                     | SetWeldWorksheetBottomEntities method.                                            |
| [`GetWeldWorksheetIntersectionTag`](#Weld.GetWeldWorksheetIntersectionTag)                                   | get the WeldControlWorksheetIntersectionTag                                       |
| [`SetWeldWorksheetIntersectionTag`](#Weld.SetWeldWorksheetIntersectionTag)                                   | SetWeldWorksheetIntersectionTag method.                                           |
| [`ClearWeldWorksheetIntersectionTag`](#Weld.ClearWeldWorksheetIntersectionTag)                               | ClearWeldWorksheetIntersectionTag method.                                         |
| [`AppendWeldWorksheetIntersectionTag`](#Weld.AppendWeldWorksheetIntersectionTag)                             | AppendWeldWorksheetIntersectionTag method.                                        |
| [`GetWeldWorksheetTopEntities`](#Weld.GetWeldWorksheetTopEntities)                                           | get the WeldControlWorksheetTopEntities                                           |
| [`SetWeldWorksheetTopEntities`](#Weld.SetWeldWorksheetTopEntities)                                           | SetWeldWorksheetTopEntities method.                                               |
| [`GetCrossSectionIds`](#Weld.GetCrossSectionIds)                                                             | get CrossSection Ids                                                              |
| [`GetMaterialIds`](#Weld.GetMaterialIds)                                                                     | get Material Ids                                                                  |
| [`WeldWorksheetAddEntry`](#Weld.WeldWorksheetAddEntry)                                                       | add an entry to WeldWorksheet                                                     |
| [`WeldWorksheetDeleteEntry`](#Weld.WeldWorksheetDeleteEntry)                                                 | WeldWorksheetDeleteEntry method.                                                  |
| [`WeldWorksheetImport`](#Weld.WeldWorksheetImport)                                                           | import WeldWorksheet                                                              |
| [`WeldWorksheetExport`](#Weld.WeldWorksheetExport)                                                           | export WeldWorksheet                                                              |
| [`WeldWorksheetCreateControlForCurveBodies`](#Weld.WeldWorksheetCreateControlForCurveBodies)                 | Create worksheet entries for all curve bodies                                     |
| [`AddWeldWorksheetScopeToSelection`](#Weld.AddWeldWorksheetScopeToSelection)                                 | Create worksheet entry scope to selection                                         |
| [`PromoteToWeldControl`](#Weld.PromoteToWeldControl)                                                         | PromoteToWeldControl method.                                                      |
| [`PreviewMeshOnWeldWorksheet`](#Weld.PreviewMeshOnWeldWorksheet)                                             | PreviewMeshOnWeldWorksheet method.                                                |
| [`GenerateMesh`](#Weld.GenerateMesh)                                                                         | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#Weld.RenameBasedOnDefinition)                                                   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Weld.Delete)                                                                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Weld.AddComment)                                                                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#Weld.AddFigure)                                                                               | Creates a new child Figure.                                                       |
| [`AddImage`](#Weld.AddImage)                                                                                 | Creates a new child Image.                                                        |
| [`Activate`](#Weld.Activate)                                                                                 | Activate the current object.                                                      |
| [`CopyTo`](#Weld.CopyTo)                                                                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Weld.Duplicate)                                                                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Weld.GroupAllSimilarChildren)                                                   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Weld.GroupSimilarObjects)                                                           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Weld.PropertyByName)                                                                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Weld.PropertyByAPIName)                                                               | Get a property by its API name.                                                   |
| [`CreateParameter`](#Weld.CreateParameter)                                                                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Weld.GetParameter)                                                                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Weld.RemoveParameter)                                                                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`BottomEntities`](#Weld.BottomEntities)                                                                               | Gets or sets the Bottom Entities (Bodies / Faces ) or Extension.   |
|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`TopEntities`](#Weld.TopEntities)                                                                                     | Gets or sets the Top Entities (Bodies / Faces ) or Extension.      |
| [`WeldCurves`](#Weld.WeldCurves)                                                                                       | Gets or sets the Weld Curves.                                      |
| [`WeldCurvesBody`](#Weld.WeldCurvesBody)                                                                               | WeldCurvesBody property.                                           |
| [`EdgeSelection`](#Weld.EdgeSelection)                                                                                 | Gets or sets the Edges.                                            |
| [`ControlType`](../../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ControlType)              | Gets or sets the WeldControlType.                                  |
| [`Source`](#Weld.Source)                                                                                               | Gets or sets the WeldControlSource.                                |
| [`ModeledAs`](#Weld.ModeledAs)                                                                                         | Gets or sets the WeldControlModeledAs.                             |
| [`WeldElementRows`](#Weld.WeldElementRows)                                                                             | Gets or sets the WeldControlElementRows.                           |
| [`Relaxation`](#Weld.Relaxation)                                                                                       | Gets or sets the WeldControlRelaxation.                            |
| [`WeldTargetShellFace`](#Weld.WeldTargetShellFace)                                                                     | Gets or sets the WeldTargetShellFace.                              |
| [`WeldFormulation`](#Weld.WeldFormulation)                                                                             | Gets or sets the WeldFormulation.                                  |
| [`WeldPinballRadius`](#Weld.WeldPinballRadius)                                                                         | Gets or sets the WeldPinballRadius                                 |
| [`AngledDirection`](#Weld.AngledDirection)                                                                             | Gets or sets the WeldControlAngledDirection.                       |
| [`CreateUsing`](#Weld.CreateUsing)                                                                                     | Gets or sets the WeldControlCreateUsing.                           |
| [`UseWorksheet`](#Weld.UseWorksheet)                                                                                   | Gets or sets the WeldControlUseWorksheet.                          |
| [`CurveScoping`](#Weld.CurveScoping)                                                                                   | Gets or sets the WeldControlCurveScoping.                          |
| [`CreationCriteria`](#Weld.CreationCriteria)                                                                           | Gets or sets the WeldControlCreationCriteria.                      |
| [`ThicknessAssignment`](#Weld.ThicknessAssignment)                                                                     | Gets or sets the WeldControlThicknessAssignment.                   |
| [`WeldWidthAssignment`](#Weld.WeldWidthAssignment)                                                                     | Gets or sets the WeldControlWeldWidthAssignment.                   |
| [`EdgeMeshSizeAssignment`](#Weld.EdgeMeshSizeAssignment)                                                               | Gets or sets the WeldControlEdgeMeshSizeAssignment.                |
| [`WeldHeightAssignment`](#Weld.WeldHeightAssignment)                                                                   | Gets or sets the WeldControlWeldHeightAssignment.                  |
| [`HAZDistanceAssignment`](#Weld.HAZDistanceAssignment)                                                                 | Gets or sets the WeldControlHAZDistanceAssignment.                 |
| [`HAZDistanceOption`](#Weld.HAZDistanceOption)                                                                         | Gets or sets the WeldControlHAZDistanceOption.                     |
| [`WeldThicknessExpression`](#Weld.WeldThicknessExpression)                                                             | Gets or sets the WeldControlThicknessExpression Value.             |
| [`EdgeMeshSizeExpression`](#Weld.EdgeMeshSizeExpression)                                                               | Gets or sets the WeldControlEdgeMeshSizeExpression Value.          |
| [`WeldWidthExpression`](#Weld.WeldWidthExpression)                                                                     | Gets or sets the WeldControlWeldWidthExpression Value.             |
| [`WeldHeightExpression`](#Weld.WeldHeightExpression)                                                                   | Gets or sets the WeldControlWeldHeightExpression Value.            |
| [`HAZDistanceExpressionTopPlate`](#Weld.HAZDistanceExpressionTopPlate)                                                 | Gets or sets the WeldControlHAZDistanceExpression Value.           |
| [`HAZDistanceExpressionBottomPlate`](#Weld.HAZDistanceExpressionBottomPlate)                                           | Gets or sets HAZDistanceExpressionBottomPlate Value.               |
| [`MaxThicknessFactor`](#Weld.MaxThicknessFactor)                                                                       | Gets or sets the WeldControlMaxThicknessFactor                     |
| [`MinThicknessFactor`](#Weld.MinThicknessFactor)                                                                       | Gets or sets the WeldControlMinThicknessFactor                     |
| [`Thickness`](../Thickness.md#Thickness)                                                                               | Gets or sets the WeldControlThickness                              |
| [`AdjustWeldHeight`](#Weld.AdjustWeldHeight)                                                                           | Gets or sets the WeldControlAdjustWeldHeight.                      |
| [`CreateHAZLayer`](#Weld.CreateHAZLayer)                                                                               | Gets or sets the WeldControlCreateHAZLayer.                        |
| [`WeldHeight`](#Weld.WeldHeight)                                                                                       | Gets or sets the WeldControlOffsetLayerHeight                      |
| [`WeldAngle`](#Weld.WeldAngle)                                                                                         | Gets or sets the WeldAngle.                                        |
| [`SharpAngle`](#Weld.SharpAngle)                                                                                       | Gets or sets the WeldSharpAngle.                                   |
| [`LapWeldAngleTolerance`](#Weld.LapWeldAngleTolerance)                                                                 | Gets or sets the LapWeldAngleTolerance.                            |
| [`EdgeMeshSize`](#Weld.EdgeMeshSize)                                                                                   | Gets or sets the WeldControlEdgeMeshSize                           |
| [`WeldControlWeldWidth`](#Weld.WeldControlWeldWidth)                                                                   | Gets or sets the WeldControlWeldWidth                              |
| [`HAZDistanceTopPlate`](#Weld.HAZDistanceTopPlate)                                                                     | Gets or sets HAZDistanceTopPlate                                   |
| [`HAZDistanceBottomPlate`](#Weld.HAZDistanceBottomPlate)                                                               | Gets or sets HAZDistanceBottomPlate                                |
| [`WeldLength`](#Weld.WeldLength)                                                                                       | Gets or sets the WeldControlOffsetLayerHeight                      |
| [`WeldPitch`](#Weld.WeldPitch)                                                                                         | Gets or sets the WeldControlOffsetLayerHeight                      |
| [`NumberOfWelds`](#Weld.NumberOfWelds)                                                                                 | Gets or sets WeldControlNumberOfLayers                             |
| [`Offset1`](#Weld.Offset1)                                                                                             | Gets or sets the WeldControlOffsetLayerHeight                      |
| [`Offset2`](#Weld.Offset2)                                                                                             | Gets or sets the WeldControlOffsetLayerHeight                      |
| [`HAZGrowthRate`](#Weld.HAZGrowthRate)                                                                                 | Gets or sets the WeldControlHAZGrowthRate                          |
| [`ConnectionTolerance`](#Weld.ConnectionTolerance)                                                                     | Gets or sets the WeldControlConnectionTolerance                    |
| [`NumberOfLayers`](#Weld.NumberOfLayers)                                                                               | Gets or sets WeldControlNumberOfLayers                             |
| [`GenerateNamedSelection`](#Weld.GenerateNamedSelection)                                                               | Gets or sets the WeldControlGenerateNamedSelection.                |
| [`GenerateEndCaps`](#Weld.GenerateEndCaps)                                                                             | Gets or sets the WeldControlSmoothing.                             |
| [`WriteDefinitionFile`](#Weld.WriteDefinitionFile)                                                                     | Gets or sets the WeldControlSmoothing.                             |
| [`WeldDefinitionFileLocation`](#Weld.WeldDefinitionFileLocation)                                                       | Gets or sets the WeldDefinitionFile Location.                      |
| [`WeldIntersectionTag`](#Weld.WeldIntersectionTag)                                                                     | Gets or sets the WeldControlIntersectionTag Value.                 |
| [`WeldIntersectionTolerance`](#Weld.WeldIntersectionTolerance)                                                         | Gets or sets the WeldControlIntersectionTolerance Value.           |
| [`Smoothing`](../Results/Smoothing.md#Smoothing)                                                                       | Gets or sets the WeldControlSmoothing.                             |
| [`CrossSectionId`](#Weld.CrossSectionId)                                                                               | Gets or sets the WeldControlCrossSectionId.                        |
| [`MaterialId`](#Weld.MaterialId)                                                                                       | Gets or sets the WeldControlMaterialId.                            |
| [`NameFilter`](#Weld.NameFilter)                                                                                       | Gets or sets the NameFilter.                                       |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                 |
| [`WeldEdgesNamedSelection`](#Weld.WeldEdgesNamedSelection)                                                             | Gets or sets the WeldEdgesNamedSelection.                          |
| [`BottomEntitiesNamedSelection`](#Weld.BottomEntitiesNamedSelection)                                                   | Gets or sets the BottomEntitiesNamedSelection.                     |
| [`TopEntitiesNamedSelection`](#Weld.TopEntitiesNamedSelection)                                                         | Gets or sets the TopEntitiesNamedSelection.                        |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                       |
| [`ScopingMethod`](#Weld.ScopingMethod)                                                                                 | Gets or sets the ScopingMethod.                                    |
| [`Suppressed`](#Weld.Suppressed)                                                                                       | Gets or sets the Suppressed.                                       |
| [`Children`](#Weld.Children)                                                                                           | Gets the list of children.                                         |
| [`Comments`](#Weld.Comments)                                                                                           | Gets the list of associated comments.                              |
| [`Figures`](#Weld.Figures)                                                                                             | Gets the list of associated figures.                               |
| [`Images`](#Weld.Images)                                                                                               | Gets the list of associated images.                                |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                 |
| [`Properties`](#Weld.Properties)                                                                                       | Gets the list of properties for this object.                       |
| [`VisibleProperties`](#Weld.VisibleProperties)                                                                         | Gets the list of properties that are visible for this object.      |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Weld
```

## Property detail

### *property* Weld.BottomEntities *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Bottom Entities (Bodies / Faces ) or Extension.

<!-- !! processed by numpydoc !! -->

### *property* Weld.TopEntities *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Top Entities (Bodies / Faces ) or Extension.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldCurves *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Weld Curves.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldCurvesBody *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

WeldCurvesBody property.

<!-- !! processed by numpydoc !! -->

### *property* Weld.EdgeSelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Edges.

<!-- !! processed by numpydoc !! -->

### *property* Weld.ControlType *: Ansys.Mechanical.DataModel.Enums.WeldType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlType.

<!-- !! processed by numpydoc !! -->

### *property* Weld.Source *: Ansys.Mechanical.DataModel.Enums.WeldSource | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSource.

<!-- !! processed by numpydoc !! -->

### *property* Weld.ModeledAs *: Ansys.Mechanical.DataModel.Enums.WeldModeledAs | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlModeledAs.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldElementRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlElementRows.

<!-- !! processed by numpydoc !! -->

### *property* Weld.Relaxation *: Ansys.Mechanical.DataModel.Enums.WeldRelaxation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlRelaxation.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldTargetShellFace *: Ansys.Mechanical.DataModel.Enums.WeldTargetShellFaceType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldTargetShellFace.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldFormulation *: [Ansys.Mechanical.DataModel.Enums.ContactFormulation](../../../../Mechanical/DataModel/Enums/ContactFormulation.md#ContactFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldFormulation.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldPinballRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldPinballRadius

<!-- !! processed by numpydoc !! -->

### *property* Weld.AngledDirection *: Ansys.Mechanical.DataModel.Enums.WeldAngledDirection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlAngledDirection.

<!-- !! processed by numpydoc !! -->

### *property* Weld.CreateUsing *: Ansys.Mechanical.DataModel.Enums.WeldCreateUsing | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCreateUsing.

<!-- !! processed by numpydoc !! -->

### *property* Weld.UseWorksheet *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlUseWorksheet.

<!-- !! processed by numpydoc !! -->

### *property* Weld.CurveScoping *: Ansys.Mechanical.DataModel.Enums.WeldCurveScoping | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCurveScoping.

<!-- !! processed by numpydoc !! -->

### *property* Weld.CreationCriteria *: Ansys.Mechanical.DataModel.Enums.WeldCreationCriteria | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCreationCriteria.

<!-- !! processed by numpydoc !! -->

### *property* Weld.ThicknessAssignment *: Ansys.Mechanical.DataModel.Enums.WeldThickness | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlThicknessAssignment.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldWidthAssignment *: Ansys.Mechanical.DataModel.Enums.WeldWidthAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldWidthAssignment.

<!-- !! processed by numpydoc !! -->

### *property* Weld.EdgeMeshSizeAssignment *: Ansys.Mechanical.DataModel.Enums.WeldEdgeMeshSizeAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlEdgeMeshSizeAssignment.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldHeightAssignment *: Ansys.Mechanical.DataModel.Enums.WeldHeightAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldHeightAssignment.

<!-- !! processed by numpydoc !! -->

### *property* Weld.HAZDistanceAssignment *: Ansys.Mechanical.DataModel.Enums.WeldHAZDistanceAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZDistanceAssignment.

<!-- !! processed by numpydoc !! -->

### *property* Weld.HAZDistanceOption *: Ansys.Mechanical.DataModel.Enums.WeldHAZDistanceOption | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZDistanceOption.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldThicknessExpression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlThicknessExpression Value.

<!-- !! processed by numpydoc !! -->

### *property* Weld.EdgeMeshSizeExpression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlEdgeMeshSizeExpression Value.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldWidthExpression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldWidthExpression Value.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldHeightExpression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldHeightExpression Value.

<!-- !! processed by numpydoc !! -->

### *property* Weld.HAZDistanceExpressionTopPlate *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZDistanceExpression Value.

<!-- !! processed by numpydoc !! -->

### *property* Weld.HAZDistanceExpressionBottomPlate *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets HAZDistanceExpressionBottomPlate Value.

<!-- !! processed by numpydoc !! -->

### *property* Weld.MaxThicknessFactor *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlMaxThicknessFactor

<!-- !! processed by numpydoc !! -->

### *property* Weld.MinThicknessFactor *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlMinThicknessFactor

<!-- !! processed by numpydoc !! -->

### *property* Weld.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlThickness

<!-- !! processed by numpydoc !! -->

### *property* Weld.AdjustWeldHeight *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlAdjustWeldHeight.

<!-- !! processed by numpydoc !! -->

### *property* Weld.CreateHAZLayer *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCreateHAZLayer.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldAngle.

<!-- !! processed by numpydoc !! -->

### *property* Weld.SharpAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldSharpAngle.

<!-- !! processed by numpydoc !! -->

### *property* Weld.LapWeldAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LapWeldAngleTolerance.

<!-- !! processed by numpydoc !! -->

### *property* Weld.EdgeMeshSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlEdgeMeshSize

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldControlWeldWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldWidth

<!-- !! processed by numpydoc !! -->

### *property* Weld.HAZDistanceTopPlate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets HAZDistanceTopPlate

<!-- !! processed by numpydoc !! -->

### *property* Weld.HAZDistanceBottomPlate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets HAZDistanceBottomPlate

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldPitch *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

### *property* Weld.NumberOfWelds *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets WeldControlNumberOfLayers

<!-- !! processed by numpydoc !! -->

### *property* Weld.Offset1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

### *property* Weld.Offset2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

### *property* Weld.HAZGrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZGrowthRate

<!-- !! processed by numpydoc !! -->

### *property* Weld.ConnectionTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlConnectionTolerance

<!-- !! processed by numpydoc !! -->

### *property* Weld.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets WeldControlNumberOfLayers

<!-- !! processed by numpydoc !! -->

### *property* Weld.GenerateNamedSelection *: Ansys.Mechanical.DataModel.Enums.WeldGeneratedNamedSelection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlGenerateNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* Weld.GenerateEndCaps *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSmoothing.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WriteDefinitionFile *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSmoothing.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldDefinitionFileLocation *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldDefinitionFile Location.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldIntersectionTag *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlIntersectionTag Value.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldIntersectionTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlIntersectionTolerance Value.

<!-- !! processed by numpydoc !! -->

### *property* Weld.Smoothing *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSmoothing.

<!-- !! processed by numpydoc !! -->

### *property* Weld.CrossSectionId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCrossSectionId.

<!-- !! processed by numpydoc !! -->

### *property* Weld.MaterialId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlMaterialId.

<!-- !! processed by numpydoc !! -->

### *property* Weld.NameFilter *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NameFilter.

<!-- !! processed by numpydoc !! -->

### *property* Weld.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Weld.WeldEdgesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldEdgesNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* Weld.BottomEntitiesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomEntitiesNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* Weld.TopEntitiesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopEntitiesNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* Weld.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Weld.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* Weld.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Weld.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Weld.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Weld.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Weld.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Weld.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Weld.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Weld.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Weld.ClearWeldControlIntersectionTag()

clear the WeldControlIntersectionTag

<!-- !! processed by numpydoc !! -->

### Weld.AppendWeldControlIntersectionTag(val: System.String)

append the WeldControlIntersectionTag

<!-- !! processed by numpydoc !! -->

### Weld.GenerateWeldIntersectionTag()

Auto detect Intersection Tags within specified tolerance

<!-- !! processed by numpydoc !! -->

### Weld.ClearAutoWeldIntersectionTag(includeInactive: System.Boolean)

Clear Auto Intersection Tags

<!-- !! processed by numpydoc !! -->

### Weld.WeldWorksheetStatus(rowIndex: System.Int32)

Get state of a given row

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetNumWarning()

Get Number of rows with warnings

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetNumError()

Get Number of Errored rows

<!-- !! processed by numpydoc !! -->

### Weld.ActivateAllWorksheetEntries()

set the ActivateAllWorksheetEntries

<!-- !! processed by numpydoc !! -->

### Weld.DeactivateAllWorksheetEntries()

set the DeactivateAllWorksheetEntries

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetActive(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Boolean)

SetWeldWorksheetActive method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetActive(rowIndex: System.Int32)

get the WeldWorksheetActive

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetEdgeMeshSize(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetEdgeMeshSize method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetEdgeMeshSize(rowIndex: System.Int32)

get the WeldControlWorksheetEdgeMeshSize

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetWeldAngle(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetWeldAngle method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetWeldAngle(rowIndex: System.Int32)

get the WeldControlWorksheetWeldAngle

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetHAZDistanceBottomPlate(rowIndex: System.Int32)

get the WeldControlWorksheetHAZDistance

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheet4TopPlate(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheet4TopPlate method.

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetHAZDistanceBottomPlate(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetHAZDistanceBottomPlate method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetSharpAngle(rowIndex: System.Int32)

get the WeldControlWorksheetSharpAngle

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetSharpAngle(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetSharpAngle method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetHeight(rowIndex: System.Int32)

get the WeldControlWorksheetHeight

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetHeight(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetHeight method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetLength(rowIndex: System.Int32)

get the WeldControlWorksheetLength

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetLength(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetLength method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetWidth(rowIndex: System.Int32)

get the WeldControlWorksheetWidth

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetWidth(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetWidth method.

<!-- !! processed by numpydoc !! -->

### Weld.WeldWorksheetNumEntries()

Get total number of entries in worksheet

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetPitch(rowIndex: System.Int32)

get the WeldControlWorksheetPitch

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetPitch(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetPitch method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetThickness(rowIndex: System.Int32)

get the WeldControlWorksheetThickness

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetThickness(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetThickness method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetAbsTol(rowIndex: System.Int32)

get the WeldControlWorksheetAbsTol

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetAbsTol(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetAbsTol method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetNumWelds(rowIndex: System.Int32)

get the WeldControlWorksheetNumWelds

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetNumWelds(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Int32)

SetWeldWorksheetNumWelds method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetOffset1(rowIndex: System.Int32)

get the WeldControlWorksheetOffset1

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetOffset1(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetOffset1 method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetOffset2(rowIndex: System.Int32)

get the WeldControlWorksheetOffset2

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetOffset2(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetOffset2 method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetSmoothing(rowIndex: System.Int32)

get the WeldControlWorksheetSmoothing option

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetSmoothing(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Boolean)

SetWeldWorksheetSmoothing method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetLapAngleTol(rowIndex: System.Int32)

get the WeldControlWorksheetLapAngleTol

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetLapAngleTol(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetLapAngleTol method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetGenerateEndCaps(rowIndex: System.Int32)

get the WeldControlWorksheetGenerateEndCaps

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetGenerateEndCaps(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Boolean)

SetWeldWorksheetGenerateEndCaps method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetHAZGrowthRate(rowIndex: System.Int32)

get the WeldControlWorksheetHAZGrowthRate

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetNumLayers(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Int32)

SetWeldWorksheetNumLayers method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetNumLayers(rowIndex: System.Int32)

get the WeldControlWorksheetNumLayers

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetHAZGrowthRate(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetHAZGrowthRate method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetMaxThicknessFactor(rowIndex: System.Int32)

get the WeldControlWorksheetMaxThicknessFactor

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetMaxThicknessFactor(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetMaxThicknessFactor method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetMinThicknessFactor(rowIndex: System.Int32)

get the WeldControlWorksheetMinThicknessFactor

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetMinThicknessFactor(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetMinThicknessFactor method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetThicknessExpression(rowIndex: System.Int32)

get the WeldControlWorksheetThicknessExpression

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetThicknessExpression(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetThicknessExpression method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetEdgeMeshSizeExpression(rowIndex: System.Int32)

get the WeldControlWorksheetEdgeMeshSizeExpression

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetEdgeMeshSizeExpression(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetEdgeMeshSizeExpression method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetWeldWidthExpression(rowIndex: System.Int32)

get the WeldControlWorksheetWeldWidth

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetWeldWidthExpression(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetWeldWidthExpression method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetWeldHeightExpression(rowIndex: System.Int32)

get the WeldControlWorksheetWeldHeight

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetWeldHeightExpression(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetWeldHeightExpression method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetHAZDistanceExpressionTopPlate(rowIndex: System.Int32)

get WorksheetHAZDistanceExpressionTopPlate

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetHAZDistanceExpressionBottomPlate(rowIndex: System.Int32)

get WorksheetHAZDistanceExpressionBottomPlate

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetHAZDistanceExpressionTopPlate(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetHAZDistanceExpressionTopPlate method.

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetHAZDistanceExpressionBottomPlate(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetHAZDistanceExpressionBottomPlate method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetWeldCurve(rowIndex: System.Int32)

get the WeldControlWorksheetWeldCurve

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetWeldCurve(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.UInt32)

SetWeldWorksheetWeldCurve method.

<!-- !! processed by numpydoc !! -->

### Weld.DeactivateProblematicWorksheetEntries()

Deactivate Problematic Worksheet Entries

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetEdges(rowIndex: System.Int32)

get the WeldControlWorksheetEdges

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetEdges(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.UInt32)

SetWeldWorksheetEdges method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetBottomEntities(rowIndex: System.Int32)

get the WeldControlWorksheetBottomEntities

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetBottomEntities(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.UInt32)

SetWeldWorksheetBottomEntities method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetIntersectionTag(rowIndex: System.Int32)

get the WeldControlWorksheetIntersectionTag

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetIntersectionTag(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetIntersectionTag method.

<!-- !! processed by numpydoc !! -->

### Weld.ClearWeldWorksheetIntersectionTag(rowIndices: System.Collections.Generic.IEnumerable[System.Int32])

ClearWeldWorksheetIntersectionTag method.

<!-- !! processed by numpydoc !! -->

### Weld.AppendWeldWorksheetIntersectionTag(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

AppendWeldWorksheetIntersectionTag method.

<!-- !! processed by numpydoc !! -->

### Weld.GetWeldWorksheetTopEntities(rowIndex: System.Int32)

get the WeldControlWorksheetTopEntities

<!-- !! processed by numpydoc !! -->

### Weld.SetWeldWorksheetTopEntities(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.UInt32)

SetWeldWorksheetTopEntities method.

<!-- !! processed by numpydoc !! -->

### Weld.GetCrossSectionIds(rowIndex: System.Int32)

get CrossSection Ids

<!-- !! processed by numpydoc !! -->

### Weld.GetMaterialIds(rowIndex: System.Int32)

get Material Ids

<!-- !! processed by numpydoc !! -->

### Weld.WeldWorksheetAddEntry()

add an entry to WeldWorksheet

<!-- !! processed by numpydoc !! -->

### Weld.WeldWorksheetDeleteEntry(indices: System.Collections.Generic.IEnumerable[System.Int32])

WeldWorksheetDeleteEntry method.

<!-- !! processed by numpydoc !! -->

### Weld.WeldWorksheetImport(fileName: System.String)

import WeldWorksheet

<!-- !! processed by numpydoc !! -->

### Weld.WeldWorksheetExport(fileName: System.String)

export WeldWorksheet

<!-- !! processed by numpydoc !! -->

### Weld.WeldWorksheetCreateControlForCurveBodies()

Create worksheet entries for all curve bodies

<!-- !! processed by numpydoc !! -->

### Weld.AddWeldWorksheetScopeToSelection(index: System.Int32, subset: System.Int32)

Create worksheet entry scope to selection

<!-- !! processed by numpydoc !! -->

### Weld.PromoteToWeldControl(indices: System.Collections.Generic.IEnumerable[System.Int32])

PromoteToWeldControl method.

<!-- !! processed by numpydoc !! -->

### Weld.PreviewMeshOnWeldWorksheet(rowIndices: System.Collections.Generic.IEnumerable[System.Int32])

PreviewMeshOnWeldWorksheet method.

<!-- !! processed by numpydoc !! -->

### Weld.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### Weld.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Weld.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Weld.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Weld.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Weld.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Weld.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Weld.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Weld.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Weld.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Weld.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Weld.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Weld.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Weld.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Weld.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Weld.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Weld.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Weld.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
