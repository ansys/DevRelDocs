# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_EigenvalueUnstructGridModel"></a> Class EigenvalueUnstructGridModel

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class EigenvalueUnstructGridModel : ContourUnstructGridModel, IEigenvalueUnstructGridModel, IContourUnstructGridModel, IUnstructGridModel, IModel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Model ← 
UnstructGridModel ← 
[UnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md) ← 
[ContourUnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md) ← 
[EigenvalueUnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.EigenvalueUnstructGridModel.md)

#### Implements

IEigenvalueUnstructGridModel, 
IContourUnstructGridModel, 
IUnstructGridModel, 
IModel

#### Inherited Members

[ContourUnstructGridModel.ClearContourData\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_ClearContourData), 
[ContourUnstructGridModel.InitializePartSettings\(MetaInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_InitializePartSettings\_VM\_Models\_Post\_MetaInfo\_), 
[ContourUnstructGridModel.LoadDynamicAnimation\(SourceData, AnalysisResult, int\[\]\)](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_LoadDynamicAnimation\_VM\_Models\_Post\_SourceData\_VM\_Models\_Post\_AnalysisResult\_System\_Int32\_\_\_), 
[ContourUnstructGridModel.SetFringeResultIDToModelSpec\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_SetFringeResultIDToModelSpec\_System\_Int32\_), 
[ContourUnstructGridModel.SetPartInfoToDirectory\(MetaInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_SetPartInfoToDirectory\_VM\_Models\_Post\_MetaInfo\_), 
[ContourUnstructGridModel.SetScalarSettings\(Contour\)](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_SetScalarSettings\_VM\_Models\_Post\_Contour\_), 
[ContourUnstructGridModel.UpdateExtremalValues\(uint, MarkupPartExtremLabels, MarkupPartExtremLabels\)](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_UpdateExtremalValues\_System\_UInt32\_VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_MarkupPartExtremLabels\_VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_MarkupPartExtremLabels\_), 
[ContourUnstructGridModel.UpdateFEPropertyElementSets\(MetaInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_UpdateFEPropertyElementSets\_VM\_Models\_Post\_MetaInfo\_), 
[ContourUnstructGridModel.AutoRange](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_AutoRange), 
[ContourUnstructGridModel.Continuous](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_Continuous), 
[ContourUnstructGridModel.CurrentColorScheme](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_CurrentColorScheme), 
[ContourUnstructGridModel.ExtremalValueType](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_ExtremalValueType), 
[ContourUnstructGridModel.LegendColorScheme](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_LegendColorScheme), 
[ContourUnstructGridModel.LegendCustomTitle](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_LegendCustomTitle), 
[ContourUnstructGridModel.LegendFontColor](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_LegendFontColor), 
[ContourUnstructGridModel.LegendVisibility](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_LegendVisibility), 
[ContourUnstructGridModel.LogScale](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_LogScale), 
[ContourUnstructGridModel.ScalarRange](VM.Models.Post.VisualizationImpl.UnstructGrid.ContourUnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_ContourUnstructGridModel\_ScalarRange), 
[UnstructGridModel.DisplacementID](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_DisplacementID), 
[UnstructGridModel.AddAnimationInfoToDirectory\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddAnimationInfoToDirectory\_System\_Int32\_), 
[UnstructGridModel.AddPartInfoToDirectory\(int, string\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddPartInfoToDirectory\_System\_Int32\_System\_String\_), 
[UnstructGridModel.AddResultInfoToDirectory\(ResultType, int, string, ResultMapping\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddResultInfoToDirectory\_VM\_Models\_Post\_ResultType\_System\_Int32\_System\_String\_VM\_Models\_Post\_ResultMapping\_), 
[UnstructGridModel.AddState\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddState\_System\_Int32\_), 
[UnstructGridModel.AddState\(IDataState\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddState\_VM\_Models\_Post\_IDataState\_), 
[UnstructGridModel.AddStateInfoToDirectory\(int, string, double\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddStateInfoToDirectory\_System\_Int32\_System\_String\_System\_Double\_), 
[UnstructGridModel.AddStatesToDataSource\(int\[\]\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_AddStatesToDataSource\_System\_Int32\_\_\_), 
[UnstructGridModel.CreateDataState\(int, bool\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_CreateDataState\_System\_Int32\_System\_Boolean\_), 
[UnstructGridModel.CreateGeneralMarkerAnimation\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_CreateGeneralMarkerAnimation), 
[UnstructGridModel.CreateHitItem\(HitItemInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_CreateHitItem\_VM\_Models\_Post\_HitItemInfo\_), 
[UnstructGridModel.CurrentStateInfoText\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_CurrentStateInfoText), 
[UnstructGridModel.Dispose\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_Dispose), 
[UnstructGridModel.GetBoundingBox\(bool\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetBoundingBox\_System\_Boolean\_), 
[UnstructGridModel.GetCurrentFrameIndex\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetCurrentFrameIndex), 
[UnstructGridModel.GetCurrentScalarResultID\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetCurrentScalarResultID), 
[UnstructGridModel.GetCurrentStateID\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetCurrentStateID), 
[UnstructGridModel.GetDataPartName\(uint\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetDataPartName\_System\_UInt32\_), 
[UnstructGridModel.GetDataStates\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetDataStates), 
[UnstructGridModel.GetFrameCount\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetFrameCount), 
[UnstructGridModel.GetLargeExtentOfBoundingBox\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetLargeExtentOfBoundingBox), 
[UnstructGridModel.GetPartColor\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetPartColor\_System\_Int32\_), 
[UnstructGridModel.GetReferenceTime\(uint\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetReferenceTime\_System\_UInt32\_), 
[UnstructGridModel.GetResultDescription\(ResultType, int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetResultDescription\_VM\_Models\_Post\_ResultType\_System\_Int32\_), 
[UnstructGridModel.GetStateID\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetStateID), 
[UnstructGridModel.GetVisibleTriangles\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetVisibleTriangles\_System\_Int32\_), 
[UnstructGridModel.Initialze\(MetaInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_Initialze\_VM\_Models\_Post\_MetaInfo\_), 
[UnstructGridModel.InitStateInfos\(int\[\], double\[\]\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_InitStateInfos\_System\_Int32\_\_\_System\_Double\_\_\_), 
[UnstructGridModel.PartBoundingBox\(uint, uint, int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_PartBoundingBox\_System\_UInt32\_System\_UInt32\_System\_Int32\_), 
[UnstructGridModel.RegistCuttingPlaneInputCallback\(CallbackSetInformMode\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_RegistCuttingPlaneInputCallback\_VM\_Models\_Post\_CallbackSetInformMode\_), 
[UnstructGridModel.RemoveAllStateInfos\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_RemoveAllStateInfos), 
[UnstructGridModel.RemoveAllStates\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_RemoveAllStates), 
[UnstructGridModel.SetCurrentStateInfos\(int\[\]\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetCurrentStateInfos\_System\_Int32\_\_\_), 
[UnstructGridModel.SetCuttingPlaneUserInputData\(IAnimationViewer, double\[\]\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetCuttingPlaneUserInputData\_VM\_Models\_Post\_IAnimationViewer\_System\_Double\_\_\_), 
[UnstructGridModel.SetDisplacementResultIDToModelSpec\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetDisplacementResultIDToModelSpec\_System\_Int32\_), 
[UnstructGridModel.SetFrame\(uint\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetFrame\_System\_UInt32\_), 
[UnstructGridModel.SetPartColor\(int, Color\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetPartColor\_System\_Int32\_System\_Drawing\_Color\_), 
[UnstructGridModel.SetResultMarkersInfo\(MetaInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetResultMarkersInfo\_VM\_Models\_Post\_MetaInfo\_), 
[UnstructGridModel.SetTransformationResultToModelSpec\(bool\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetTransformationResultToModelSpec\_System\_Boolean\_), 
[UnstructGridModel.SetVectorResultIDToModelSpec\(int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetVectorResultIDToModelSpec\_System\_Int32\_), 
[UnstructGridModel.UpdateAnimation\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdateAnimation), 
[UnstructGridModel.UpdatePartFringeVisibility\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdatePartFringeVisibility), 
[UnstructGridModel.UpdateVisualization\(UpdateActionType\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdateVisualization\_VM\_Models\_Post\_UpdateActionType\_), 
[UnstructGridModel.OnMouseEventForCuttingPlane\(IAnimationViewer, int, int, int\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_OnMouseEventForCuttingPlane\_VM\_Models\_Post\_IAnimationViewer\_System\_Int32\_System\_Int32\_System\_Int32\_), 
[UnstructGridModel.ToggleCuttingPlane\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_ToggleCuttingPlane), 
[UnstructGridModel.UpdateCuttingPlane\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdateCuttingPlane), 
[UnstructGridModel.UpdateMapScalarOnCuttingPlane\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdateMapScalarOnCuttingPlane), 
[UnstructGridModel.SetElementSets\(MetaInfo\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_SetElementSets\_VM\_Models\_Post\_MetaInfo\_), 
[UnstructGridModel.UpdateVisibleElementSets\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_UpdateVisibleElementSets), 
[UnstructGridModel.GetVisibleElementSetIds\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetVisibleElementSetIds), 
[UnstructGridModel.RemoveAllElementSets\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_RemoveAllElementSets), 
[UnstructGridModel.ClearAllSelection\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_ClearAllSelection), 
[UnstructGridModel.GetSelectedItems\(\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GetSelectedItems), 
[UnstructGridModel.HitTestOnRectangle\(Point, int, int, View\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_HitTestOnRectangle\_System\_Drawing\_Point\_System\_Int32\_System\_Int32\_Ceetron\_CeetronDesktopComponents\_Visualization\_View\_), 
[UnstructGridModel.HitTestOnSinglePoint\(Ray, View\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_HitTestOnSinglePoint\_Ceetron\_CeetronDesktopComponents\_Ray\_Ceetron\_CeetronDesktopComponents\_Visualization\_View\_), 
[UnstructGridModel.Select\(IList<HitItemInfo\>\)](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_Select\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_HitItemInfo\_\_), 
[UnstructGridModel.CurrentStateIDs](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_CurrentStateIDs), 
[UnstructGridModel.DataGeometry](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_DataGeometry), 
[UnstructGridModel.GeneralMarkerManager](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GeneralMarkerManager), 
[UnstructGridModel.Geometry](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_Geometry), 
[UnstructGridModel.GlobalGeometryIndex](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_GlobalGeometryIndex), 
[UnstructGridModel.Managers](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_Managers), 
[UnstructGridModel.ReferenceValues](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_ReferenceValues), 
[UnstructGridModel.ResultMarkerManager](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_ResultMarkerManager), 
[UnstructGridModel.StateIDs](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_StateIDs), 
[UnstructGridModel.WhenStateIdsChanged](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_WhenStateIdsChanged), 
[UnstructGridModel.DataSourceMemory](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_DataSourceMemory), 
[UnstructGridModel.IsCuttingPlaneMode](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_IsCuttingPlaneMode), 
[UnstructGridModel.IsCuttingPlanePicked](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_IsCuttingPlanePicked), 
[UnstructGridModel.DataElementSets](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md\#VM\_Models\_Post\_VisualizationImpl\_UnstructGrid\_UnstructGridModel\_DataElementSets), 
UnstructGridModel.getCPtr\(UnstructGridModel\), 
UnstructGridModel.Dispose\(\), 
UnstructGridModel.dataSource\(\), 
UnstructGridModel.setDataSource\(DataSource\), 
UnstructGridModel.updateVisualization\(UnstructGridModel.UpdateAction, Progress, Error\), 
UnstructGridModel.updateVisualization\(UnstructGridModel.UpdateAction, Progress\), 
UnstructGridModel.updateVisualization\(UnstructGridModel.UpdateAction\), 
UnstructGridModel.updateVisualization\(\), 
UnstructGridModel.clearVisualization\(\), 
UnstructGridModel.startUpdateVisualizationPerFrame\(Error\), 
UnstructGridModel.startUpdateVisualizationPerFrame\(\), 
UnstructGridModel.updateVisualizationForFrame\(uint, Error\), 
UnstructGridModel.updateVisualizationForFrame\(uint\), 
UnstructGridModel.rayIntersect\(int, int, View, HitItem\), 
UnstructGridModel.rayIntersectAllHits\(int, int, View, HitItemCollection\), 
UnstructGridModel.regionIntersect\(int, int, uint, uint, View, bool, bool, PartHitItemsArr\), 
UnstructGridModel.polygonIntersect\(Vec2fArr, View, bool, bool, PartHitItemsArr\), 
UnstructGridModel.rayIntersect\(Ray, HitItem\), 
UnstructGridModel.rayIntersectAllHits\(Ray, HitItemCollection\), 
UnstructGridModel.frameBoundingBox\(uint\), 
UnstructGridModel.partBoundingBox\(uint, uint, int\), 
UnstructGridModel.partSettings\(uint, int\), 
UnstructGridModel.existingPartSettings\(uint, int\), 
UnstructGridModel.scalarSettings\(int\), 
UnstructGridModel.existingScalarSettings\(int\), 
UnstructGridModel.vectorSettings\(int\), 
UnstructGridModel.existingVectorSettings\(int\), 
UnstructGridModel.displacementSettings\(int\), 
UnstructGridModel.existingDisplacementSettings\(int\), 
UnstructGridModel.cuttingPlane\(uint\), 
UnstructGridModel.addCuttingPlane\(CuttingPlane\), 
UnstructGridModel.removeCuttingPlane\(CuttingPlane\), 
UnstructGridModel.removeAllCuttingPlanes\(\), 
UnstructGridModel.isosurface\(uint\), 
UnstructGridModel.addIsosurface\(Isosurface\), 
UnstructGridModel.removeIsosurface\(Isosurface\), 
UnstructGridModel.removeAllIsosurfaces\(\), 
UnstructGridModel.isovolume\(uint\), 
UnstructGridModel.addIsovolume\(Isovolume\), 
UnstructGridModel.removeIsovolume\(Isovolume\), 
UnstructGridModel.removeAllIsovolumes\(\), 
UnstructGridModel.particleTraceGroup\(uint\), 
UnstructGridModel.addParticleTraceGroup\(ParticleTraceGroup\), 
UnstructGridModel.removeParticleTraceGroup\(ParticleTraceGroup\), 
UnstructGridModel.removeAllParticleTraceGroups\(\), 
UnstructGridModel.particleTraceTimeRange\(uint, out double, out double\), 
UnstructGridModel.scalarRange\(int, out double, out double\), 
UnstructGridModel.vectorRange\(int, out double, out double\), 
UnstructGridModel.displacementRange\(out double, out double\), 
UnstructGridModel.elementSetColor\(int\), 
UnstructGridModel.setElementSetColor\(int, Color3f\), 
UnstructGridModel.internal\_debug\(int\), 
UnstructGridModel.castFromBaseClass\(Model\), 
UnstructGridModel.ModelSpec, 
UnstructGridModel.ModelSettings, 
UnstructGridModel.FrameCount, 
UnstructGridModel.CurrentStateId, 
UnstructGridModel.CurrentFrameIndex, 
UnstructGridModel.ParticleTraceTime, 
UnstructGridModel.CuttingPlaneCount, 
UnstructGridModel.IsosurfaceCount, 
UnstructGridModel.IsovolumeCount, 
UnstructGridModel.ParticleTraceGroupCount, 
UnstructGridModel.MirrorSettings, 
Model.getCPtr\(Model\), 
Model.Dispose\(\), 
Model.Name, 
Model.BoundingBox, 
Model.Use2dPixelProjection, 
Model.ModelInfo, 
RefCountedObject.swigCMemOwn, 
RefCountedObject.getCPtr\(RefCountedObject\), 
RefCountedObject.Dispose\(\), 
RefCountedObject.addRef\(\), 
RefCountedObject.release\(\), 
RefCountedObject.refCount\(\), 
RefCountedObject.setRefCountZero\(\)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_EigenvalueUnstructGridModel__ctor"></a> EigenvalueUnstructGridModel\(\)

```csharp
public EigenvalueUnstructGridModel()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_EigenvalueUnstructGridModel_TargetSamplingTime"></a> TargetSamplingTime

```csharp
public double TargetSamplingTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_EigenvalueUnstructGridModel_Build_VM_Models_Post_MetaInfo_VM_Models_Post_MetaInfo_System_Boolean_"></a> Build\(MetaInfo, MetaInfo, bool\)

```csharp
public void Build(MetaInfo primaryMetaInfo, MetaInfo metaInfo = null, bool isUpdate = false)
```

#### Parameters

`primaryMetaInfo` MetaInfo

`metaInfo` MetaInfo

`isUpdate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_EigenvalueUnstructGridModel_CurrentStateInfoText"></a> CurrentStateInfoText\(\)

```csharp
public override string CurrentStateInfoText()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_EigenvalueUnstructGridModel_SetDisplacementResultIDToModelSpec_System_Int32_"></a> SetDisplacementResultIDToModelSpec\(int\)

```csharp
public void SetDisplacementResultIDToModelSpec(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_EigenvalueUnstructGridModel_UpdateAnimation"></a> UpdateAnimation\(\)

```csharp
public override void UpdateAnimation()
```

