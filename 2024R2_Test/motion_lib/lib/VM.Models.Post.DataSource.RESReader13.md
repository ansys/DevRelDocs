# <a id="VM_Models_Post_DataSource_RESReader13"></a> Class RESReader13

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class RESReader13 : RESReader, IRESReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md) ← 
[RESReader](VM.Models.Post.DataSource.RESReader.md) ← 
[RESReader13](VM.Models.Post.DataSource.RESReader13.md)

#### Implements

IRESReader

#### Inherited Members

[RESReader.ReadAnimationData\(ResultInfo, MetaInfo, ModeShapeInfo, IList<IDataState\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadAnimationData\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_), 
[RESReader.ReadBeamGroupAnimationData\(MetaInfo, ResultInfo, Dictionary<int, TMatrix\>, IDataState\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadBeamGroupAnimationData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_Dictionary\_System\_Int32\_VM\_TMatrix\_\_VM\_Models\_Post\_IDataState\_), 
[RESReader.ReadMarkersForLoadingAnimation\(ResultInfo, MetaInfo, IList<IDataState\>, ref List<Dictionary<int, TMatrix\>\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadMarkersForLoadingAnimation\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_List\_System\_Collections\_Generic\_Dictionary\_System\_Int32\_VM\_TMatrix\_\_\_\_), 
[RESReader.ReadSeaLevelAnimationData\(MetaInfo, ResultInfo, IDataState\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadSeaLevelAnimationData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_IDataState\_), 
[RESReader.ReadSpringAnimationData\(MetaInfo, ResultInfo, Dictionary<int, TMatrix\>, IDataState\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadSpringAnimationData\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_Dictionary\_System\_Int32\_VM\_TMatrix\_\_VM\_Models\_Post\_IDataState\_), 
[RESReader.ReadSealevelHeightsData\(SeaLevel\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadSealevelHeightsData\_VM\_Models\_Post\_SeaLevel\_), 
[RESReader.ReadFEBeamGroupAnimationData\(ResultInfo, MetaInfo, List<List<TMatrix\[\]\>\>, IDataState\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFEBeamGroupAnimationData\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_List\_System\_Collections\_Generic\_List\_VM\_TMatrix\_\_\_\_\_VM\_Models\_Post\_IDataState\_), 
[RESReader.CanContour\(IContact\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_CanContour\_VM\_Models\_Post\_IContact\_), 
[RESReader.ReadContactPressureScalar\(ResultInfo, MetaInfo, ModeShapeInfo, IUnstructGridModel, CharacteristicType, ComponentType, int, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactPressureScalar\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_IUnstructGridModel\_VM\_Models\_CharacteristicType\_VM\_Models\_ComponentType\_System\_Int32\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_IEntity\_\_System\_Boolean\_System\_Action\_System\_Collections\_Generic\_IList\_System\_String\_\_System\_Double\_System\_Int32\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_), 
[RESReader.ReadGeneralContactScalar\(ResultInfo, MetaInfo, ModeShapeInfo, IUnstructGridModel, CharacteristicType, ComponentType, int, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadGeneralContactScalar\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_IUnstructGridModel\_VM\_Models\_CharacteristicType\_VM\_Models\_ComponentType\_System\_Int32\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_IEntity\_\_System\_Boolean\_System\_Action\_System\_Collections\_Generic\_IList\_System\_String\_\_System\_Double\_System\_Int32\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_), 
[RESReader.GetContourBodyOfContact\(MetaInfo, CharacteristicType, IEnumerable<IEntity\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetContourBodyOfContact\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_CharacteristicType\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_IEntity\_\_), 
[RESReader.GetContactValues\(BinaryReader, BodyBase, int, CharacteristicType, int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetContactValues\_System\_IO\_BinaryReader\_VM\_Models\_Post\_Bodies\_BodyBase\_System\_Int32\_VM\_Models\_CharacteristicType\_System\_Int32\_), 
[RESReader.AllocatePartsScalar\(MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_AllocatePartsScalar\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.GetDeformationIndex\(ComponentType\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetDeformationIndex\_VM\_Models\_ComponentType\_), 
[RESReader.GetInitialFENodeDistanceGroupsFromCSYS\(ResultInfo, MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetInitialFENodeDistanceGroupsFromCSYS\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.GetInitialFENodeDistanceGroupsFromCSYS\(ResultInfo, MetaInfo, IFEBody, double\[\]\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetInitialFENodeDistanceGroupsFromCSYS\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IFEBody\_System\_Double\_\_\_), 
[RESReader.ReadContourData\(ResultDocument, ResultInfo, MetaInfo, ModeShapeInfo, IUnstructGridModel, AnalysisResultType, int, ContourMappingType, string, string, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>, bool\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContourData\_VM\_Models\_Post\_ResultDocument\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_IUnstructGridModel\_VM\_Models\_AnalysisResultType\_System\_Int32\_VM\_Models\_ContourMappingType\_System\_String\_System\_String\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_IEntity\_\_System\_Boolean\_System\_Action\_System\_Collections\_Generic\_IList\_System\_String\_\_System\_Double\_System\_Int32\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_System\_Boolean\_), 
[RESReader.FindTargetObject\(EntityBase, IEnumerable<IEntity\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_FindTargetObject\_VM\_Models\_Post\_EntityBase\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_IEntity\_\_), 
[RESReader.GetTranslationalDeformation\(ResultInfo, MetaInfo, ModeShapeInfo, int, ComponentType, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetTranslationalDeformation\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_System\_Int32\_VM\_Models\_ComponentType\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_IEntity\_\_System\_Boolean\_System\_Action\_System\_Collections\_Generic\_IList\_System\_String\_\_System\_Double\_System\_Int32\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_), 
[RESReader.ExportAcousticRawDataToFile\(ResultInfo, MetaInfo, string, IFEBody, ModeShapeInfo, BehaviorType, uint\[\], IFFTParameters\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ExportAcousticRawDataToFile\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_String\_VM\_Models\_Post\_IFEBody\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_BehaviorType\_System\_UInt32\_\_\_VM\_Models\_Post\_IFFTParameters\_), 
[RESReader.ReadForceOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadForceOnActionMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadForceOnActionMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadForceOnActionMarkerMeasuredInActionMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadForceOnActionMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadForceOnActionMarkerMeasuredInBaseMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadTorqueOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTorqueOnActionMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadTorqueOnActionMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTorqueOnActionMarkerMeasuredInActionMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadTorqueOnActionMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTorqueOnActionMarkerMeasuredInBaseMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadForceOnBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadForceOnBaseMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadForceBaseMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadForceBaseMarkerMeasuredInBaseMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadForceOnBaseMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadForceOnBaseMarkerMeasuredInActionMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadTorqueOnBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTorqueOnBaseMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadTorqueOnBaseMarkerMeasuredInActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTorqueOnBaseMarkerMeasuredInActionMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadTorqueOnBaseMarkerMeasuredInBaseMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTorqueOnBaseMarkerMeasuredInBaseMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadConstraintsDpenetraion\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadConstraintsDpenetraion\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadConstraintsFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadConstraintsFrictionCoefficient\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadConstraintsFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadConstraintsFrictionForce\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadConstraintsNormalForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadConstraintsNormalForce\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadConstraintsPenetration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadConstraintsPenetration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadConstraintsPoint\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadConstraintsPoint\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadConstraintsTangentVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadConstraintsTangentVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadTorqueOnMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTorqueOnMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFrictionOnActionMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadJointClearance\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadJointClearance\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadBallFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadBallFrictionOnActionMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadRotationalFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRotationalFrictionOnActionMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadTranslationalFrictionOnActionMarker\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTranslationalFrictionOnActionMarker\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.GetContactComponentIndexForPlot\(CharacteristicType, int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetContactComponentIndexForPlot\_VM\_Models\_CharacteristicType\_System\_Int32\_), 
[RESReader.GetContactComponentValue\(ref double, int, CharacteristicType, ComponentType\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetContactComponentValue\_System\_Double\_\_System\_Int32\_VM\_Models\_CharacteristicType\_VM\_Models\_ComponentType\_), 
[RESReader.GetContactGapResult\(double\[\], CharacteristicType\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetContactGapResult\_System\_Double\_\_\_VM\_Models\_CharacteristicType\_), 
[RESReader.GetContactResult\(double\[\], CharacteristicType\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetContactResult\_System\_Double\_\_\_VM\_Models\_CharacteristicType\_), 
[RESReader.GetContactLocalSequenceInVariableBlock\(CharacteristicType\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetContactLocalSequenceInVariableBlock\_VM\_Models\_CharacteristicType\_), 
[RESReader.GetPotentialEnergy\(double\[\]\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetPotentialEnergy\_System\_Double\_\_\_), 
[RESReader.ReadContactsPoint\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsPoint\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsForceMagnitude\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsForceMagnitude\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsNormalForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsNormalForce\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactGapResult\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactGapResult\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsPenetration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsPenetration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsDPenetration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsDPenetration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsFrictionForce\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsTangentVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsTangentVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsFrictionCoefficient\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsSlipRatio\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsSlipRatio\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsStictionSlip\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsStictionSlip\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsCreep\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsCreep\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsStictionFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsStictionFrictionCoefficient\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsStictionFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsStictionFrictionForce\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsSlipFrictionCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsSlipFrictionCoefficient\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsSlipFrictionForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsSlipFrictionForce\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsSpringForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsSpringForce\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsPotentialEnergy\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsPotentialEnergy\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsContactLoss\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsContactLoss\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsDampingForce\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsDampingForce\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsSlidingLoss\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsSlidingLoss\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadContactsArea\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactsArea\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadStiffnessCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadStiffnessCoefficient\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadCDampingCoefficient\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadCDampingCoefficient\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadCSYSInfo\(ResultInfo, MetaInfo, EntityBase, object\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadCSYSInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_EntityBase\_System\_Object\_), 
[RESReader.ReadResultMarkerBehavior\(ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadResultMarkerBehavior\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadNodeBehavior\(ResultInfo, MetaInfo, ModeShapeInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodeBehavior\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadRigidBodyBehavior\(ResultInfo, MetaInfo, IGeneralMarker, bool\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRigidBodyBehavior\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_System\_Boolean\_), 
[RESReader.ReadCSYSAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadCSYSAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadCSYSAngularAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadCSYSAngularAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadCSYSAngularVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadCSYSAngularVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadCSYSDisplacement\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadCSYSDisplacement\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadCSYSVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadCSYSVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.GetElementTypes\(\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetElementTypes), 
[RESReader.CreateResultInfo\(ResultInfo, MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_CreateResultInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.InitializePostSolver\(MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_InitializePostSolver\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.CalculateConstraintsSize\(ResultInfo, MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_CalculateConstraintsSize\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.CalculateForcesSize\(ResultInfo, MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_CalculateForcesSize\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.CalculateContactSize\(ResultInfo, MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_CalculateContactSize\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.CalculateEFEntitiesSize\(ResultInfo, MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_CalculateEFEntitiesSize\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.CalculateFEEntityOffset\(MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_CalculateFEEntityOffset\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.CalculateUsubSize\(ResultInfo, MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_CalculateUsubSize\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.GetElementStrainUintBlockSize\(ElementType\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetElementStrainUintBlockSize\_VM\_Models\_Post\_ElementType\_), 
[RESReader.GetElementStressUintBlockSize\(ElementType\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetElementStressUintBlockSize\_VM\_Models\_Post\_ElementType\_), 
[RESReader.GetTotalModeShape\(MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetTotalModeShape\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.GetVariableBlockSize\(int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetVariableBlockSize\_System\_Int32\_), 
[RESReader.GetVariableLocalBlockSize\(int, ObjectType\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetVariableLocalBlockSize\_System\_Int32\_VM\_Models\_Post\_ObjectType\_), 
[RESReader.ReadStatesInfo\(ResultInfo, MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadStatesInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.ReadVariableBlocks\(BinaryReader, ResultInfo, MetaInfo, bool\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadVariableBlocks\_System\_IO\_BinaryReader\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Boolean\_), 
[RESReader.ReadVariableBlockSize\(BinaryReader, int, int, bool\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadVariableBlockSize\_System\_IO\_BinaryReader\_System\_Int32\_System\_Int32\_System\_Boolean\_), 
[RESReader.ReadVariableBlockSize\(BinaryReader, int, int, bool, ref long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadVariableBlockSize\_System\_IO\_BinaryReader\_System\_Int32\_System\_Int32\_System\_Boolean\_System\_Int64\_\_), 
[RESReader.GetVariableBlockSizeTo\(int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetVariableBlockSizeTo\_System\_Int32\_), 
[RESReader.GetPlasticElementMaterialDataSize\(ElementType\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetPlasticElementMaterialDataSize\_VM\_Models\_Post\_ElementType\_), 
[RESReader.CalculateBaseOffset\(ResultInfo, MetaInfo, IEntity, int, FileType, ref long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_CalculateBaseOffset\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IEntity\_System\_Int32\_VM\_Enums\_Post\_FileType\_System\_Int64\_\_), 
[RESReader.CalculateBaseOffset\(ResultInfo, MetaInfo, IEntity, int, ref long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_CalculateBaseOffset\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IEntity\_System\_Int32\_System\_Int64\_\_), 
[RESReader.GetVariableBlockSize\(int, ObjectType\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetVariableBlockSize\_System\_Int32\_VM\_Models\_Post\_ObjectType\_), 
[RESReader.ReadContactGapBlocksize\(BinaryReader, IEnumerable<ContactBase\>, bool\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadContactGapBlocksize\_System\_IO\_BinaryReader\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_Contacts\_ContactBase\_\_System\_Boolean\_), 
[RESReader.UpdateDeformationScale\(ResultInfo, MetaInfo, IFEBody, Vector, Vector, IEnumerable<IDataState\>, bool\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_UpdateDeformationScale\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IFEBody\_VM\_Vector\_VM\_Vector\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_IDataState\_\_System\_Boolean\_), 
[RESReader.GetModalElementStress\(ResultInfo, MetaInfo, ModeShapeInfo, IList<IDataState\>, FatigueAnalysisParameter, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetModalElementStress\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_VM\_Models\_Post\_FatigueAnalysisParameter\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.GetNodalElementStress\(ResultInfo, MetaInfo, IList<IDataState\>, FatigueAnalysisParameter, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetNodalElementStress\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_VM\_Models\_Post\_FatigueAnalysisParameter\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.RunFatigueAnalysis\(string\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_RunFatigueAnalysis\_System\_String\_), 
[RESReader.ReadFEBodyNodeContact\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker, RESReader.CurveDataInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFEBodyNodeContact\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_VM\_Models\_Post\_DataSource\_RESReader\_CurveDataInfo\_), 
[RESReader.ReadFEBodyNodeTopContact\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker, RESReader.CurveDataInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFEBodyNodeTopContact\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_VM\_Models\_Post\_DataSource\_RESReader\_CurveDataInfo\_), 
[RESReader.ReadFEBodyNodeBottomContact\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker, RESReader.CurveDataInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFEBodyNodeBottomContact\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_VM\_Models\_Post\_DataSource\_RESReader\_CurveDataInfo\_), 
[RESReader.ReadNodeContact\(int, CharacteristicType, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker, RESReader.CurveDataInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodeContact\_System\_Int32\_VM\_Models\_CharacteristicType\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_VM\_Models\_Post\_DataSource\_RESReader\_CurveDataInfo\_), 
[RESReader.ReadFlexibleBodyReferenceFramesFromDisp\(ResultInfo, MetaInfo, IList<int\>, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFlexibleBodyReferenceFramesFromDisp\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.ReadFlexibleBodyReferenceFramesFromRes\(ResultInfo, MetaInfo, IFEBody, ref IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFlexibleBodyReferenceFramesFromRes\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IFEBody\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_), 
[RESReader.ReadFlexibleBodyReferenceFrameFromRes\(ResultInfo, MetaInfo, IBodyBase, uint, ref double\[\]\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFlexibleBodyReferenceFrameFromRes\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IBodyBase\_System\_UInt32\_System\_Double\_\_\_\_), 
[RESReader.ReadFlexibleBodyReferenceFrameFromRes\(BinaryReader, ResultInfo, MetaInfo, int, out double\[\], bool\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFlexibleBodyReferenceFrameFromRes\_System\_IO\_BinaryReader\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_System\_Double\_\_\_\_System\_Boolean\_), 
[RESReader.ReadFlexibleBodyReferenceFramesFromDisp\(ResultInfo, MetaInfo, IList<IDataState\>, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFlexibleBodyReferenceFramesFromDisp\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.ReadFlexibleBodyReferenceFramesFromRes\(ResultInfo, MetaInfo, IEntity\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFlexibleBodyReferenceFramesFromRes\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IEntity\_), 
[RESReader.ReadFlexibleBodyReferenceFramesFromRes\(ResultInfo, MetaInfo, int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFlexibleBodyReferenceFramesFromRes\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_), 
[RESReader.ReadFlexibleBodyReferenceFramesFromRes\(ResultInfo, MetaInfo, IList<IDataState\>, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFlexibleBodyReferenceFramesFromRes\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.ReadFlexibleBodyReferenceFramesFromRes\(ResultInfo, MetaInfo, IList<int\>, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFlexibleBodyReferenceFramesFromRes\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.ReadAX\_AY\_AZ\_PROJECTION\_ANGLE\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadAX\_AY\_AZ\_PROJECTION\_ANGLE\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadForceDeformation\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadForceDeformation\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadForceRelativeVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadForceRelativeVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadRelativeAngularAcceleration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRelativeAngularAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadRelativeAngularVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRelativeAngularVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadRelativeTranslationalAcceleration\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRelativeTranslationalAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadRelativeTranslationalVelocity\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRelativeTranslationalVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadTireForce\(int, int, ForceBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTireForce\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Forces\_ForceBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadTranslationalDeformation\(int, int, ConnectorBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTranslationalDeformation\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ConnectorBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadMarkerTransformation\(ResultInfo, MetaInfo, int, IResultMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadMarkerTransformation\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_IResultMarker\_), 
[RESReader.ReadGeneralMarkerInfo\(ResultInfo, MetaInfo, EntityBase\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadGeneralMarkerInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_EntityBase\_), 
[RESReader.ReadMarkersPositions\(ResultInfo, MetaInfo, IResultMarker\[\]\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadMarkersPositions\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IResultMarker\_\_\_), 
[RESReader.GetReaderableMarkerInfo\(MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetReaderableMarkerInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.ReadGeneralMarkerAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadGeneralMarkerAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadGeneralMarkerAngularAcceleration\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadGeneralMarkerAngularAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadGeneralMarkerAngularVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadGeneralMarkerAngularVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadGeneralMarkerPositionAndOrientation\(IEntity, ResultInfo, MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadGeneralMarkerPositionAndOrientation\_VM\_Models\_Post\_IEntity\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.ReadGeneralMarkerDisplacement\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadGeneralMarkerDisplacement\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadGeneralMarkerVelocity\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadGeneralMarkerVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadModalCoordinatesFromDisp\(MetaInfo, ResultInfo, IList<IDataState\>, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalCoordinatesFromDisp\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.ReadModalCoordinatesFromDisp\(MetaInfo, ResultInfo, IList<int\>, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalCoordinatesFromDisp\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.ReadModalCoordinatesFromRes\(MetaInfo, ResultInfo, IModal, int, ref double\[\]\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalCoordinatesFromRes\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_IModal\_System\_Int32\_System\_Double\_\_\_\_), 
[RESReader.ReadModalCoordinatesFromRes\(MetaInfo, ResultInfo, IModal, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalCoordinatesFromRes\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_IModal\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.ReadModalCoordinatesFromRes\(MetaInfo, ResultInfo, IList<int\>, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalCoordinatesFromRes\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.ReadModalCoordinatesFromRes\(MetaInfo, ResultInfo, IList<IDataState\>, IList<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalCoordinatesFromRes\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ResultInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IDataState\_\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_), 
[RESReader.ReadModalSelectedModes\(int, int, EntityBase, ResultInfo, MetaInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalSelectedModes\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_), 
[RESReader.ExportModalBodyRawDataToFile\(ResultInfo, MetaInfo, ModeShapeInfo, string, IModal, bool, bool\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ExportModalBodyRawDataToFile\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_System\_String\_VM\_Models\_Post\_IModal\_System\_Boolean\_System\_Boolean\_), 
[RESReader.ReadModalBodyElementTopTStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyElementTopTStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_IElement\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyElementTopEStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyElementTopEStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_IElement\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyElementTopPStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyElementTopPStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_IElement\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyElementBottomTStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyElementBottomTStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_IElement\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyElementBottomEStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyElementBottomEStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_IElement\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyElementBottomPStrain\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyElementBottomPStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_IElement\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyElementTopStress\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyElementTopStress\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_IElement\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyElementBottomStress\(int, int, IElement, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyElementBottomStress\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_IElement\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeDisplacement\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeDisplacement\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeVelocity\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeAngularVelocity\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeAngularVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeAcceleration\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeAngularAcceleration\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeAngularAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeDeformation\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeDeformation\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeTopTStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeTopTStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeTopEStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeTopEStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeTopPStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeTopPStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeBottomTStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeBottomTStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeBottomEStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeBottomEStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeBottomPStrain\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeBottomPStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeTopStress\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeTopStress\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ReadModalBodyNodeBottomStress\(int, int, INode, ResultInfo, MetaInfo, IGeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadModalBodyNodeBottomStress\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_INode\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_IGeneralMarker\_), 
[RESReader.ExportNodalBodyPosition\(ResultInfo, MetaInfo, string, INodal, int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ExportNodalBodyPosition\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_String\_VM\_Models\_Post\_INodal\_System\_Int32\_), 
[RESReader.ReadNodalBodyElementBottomEStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyElementBottomEStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_ElementBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyElementBottomPStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyElementBottomPStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_ElementBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyElementBottomStress\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyElementBottomStress\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_ElementBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyElementBottomTStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyElementBottomTStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_ElementBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyElementTopEStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyElementTopEStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_ElementBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyElementTopPStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyElementTopPStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_ElementBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyElementTopStress\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyElementTopStress\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_ElementBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyElementTopTStrain\(int, int, ElementBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyElementTopTStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_ElementBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.Deformation\_vector\(double\[\], double\[\], double\[\], double\[\]\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_Deformation\_vector\_System\_Double\_\_\_System\_Double\_\_\_System\_Double\_\_\_System\_Double\_\_\_), 
[RESReader.GetStrainComponent\(double\[\], int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetStrainComponent\_System\_Double\_\_\_System\_Int32\_), 
[RESReader.GetStressComponent\(double\[\], int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetStressComponent\_System\_Double\_\_\_System\_Int32\_), 
[RESReader.ReadNodalBodiesNodesPosition\(ResultInfo, MetaInfo, int, List<double\[\]\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodiesNodesPosition\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_System\_Collections\_Generic\_List\_System\_Double\_\_\_\_), 
[RESReader.ReadNodalBodyNodesPosition\(ResultInfo, MetaInfo, int, int, double\[\]\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodesPosition\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_System\_Int32\_System\_Double\_\_\_), 
[RESReader.SetTDeformation\(double\[\], int, double\[\], int, double\[\], int, double\[\], int, double\[\], int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_SetTDeformation\_System\_Double\_\_\_System\_Int32\_System\_Double\_\_\_System\_Int32\_System\_Double\_\_\_System\_Int32\_System\_Double\_\_\_System\_Int32\_System\_Double\_\_\_System\_Int32\_), 
[RESReader.SetRDeformation\(double\[\], int, double\[\], int, double\[\], int, double\[\], int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_SetRDeformation\_System\_Double\_\_\_System\_Int32\_System\_Double\_\_\_System\_Int32\_System\_Double\_\_\_System\_Int32\_System\_Double\_\_\_System\_Int32\_), 
[RESReader.ReadNodalBodyNodeAcceleration\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeAngularAcceleration\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeAngularAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeAngularVelocity\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeAngularVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeBottomEStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeBottomEStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeBottomPStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeBottomPStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeBottomStress\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeBottomStress\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeBottomTStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeBottomTStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeDeformation\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeDeformation\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeDisplacement\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeDisplacement\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeThermal\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeThermal\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeTopEStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeTopEStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeTopPStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeTopPStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeTopStress\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeTopStress\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeTopTStrain\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeTopTStrain\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.ReadNodalBodyNodeVelocity\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadNodalBodyNodeVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_GeneralMarker\_), 
[RESReader.GetCurveInfo\(ResultInfo, MetaInfo, ModeShapeInfo, \(IEntity Target, IEnumerable<string\> Paths\), IDictionary<string, double\[\]\>, object, HitItemInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetCurveInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_System\_ValueTuple\_VM\_Models\_Post\_IEntity\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_\_System\_Collections\_Generic\_IDictionary\_System\_String\_System\_Double\_\_\_\_System\_Object\_VM\_Models\_Post\_HitItemInfo\_), 
[RESReader.GetCurveInfo\(ResultInfo, MetaInfo, ModeShapeInfo, string, IEntity, IDictionary<string, IList<double\[\]\>\>, object, HitItemInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetCurveInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_System\_String\_VM\_Models\_Post\_IEntity\_System\_Collections\_Generic\_IDictionary\_System\_String\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_System\_Object\_VM\_Models\_Post\_HitItemInfo\_), 
[RESReader.GetMarkerInfo\(ResultInfo, MetaInfo, ModeShapeInfo, IEntity, HitItemInfo\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GetMarkerInfo\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_IEntity\_VM\_Models\_Post\_HitItemInfo\_), 
[RESReader.InitContactResultMapping\(NodeBase, ResultInfo, MetaInfo, ModeShapeInfo, PostSlv\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_InitContactResultMapping\_VM\_Models\_Post\_Bodies\_NodeBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_PostSlv\_), 
[RESReader.ReadRigidBodiesPosition\(ResultInfo, MetaInfo, List<int\>, ref List<List<ITransformMatrix\>\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRigidBodiesPosition\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_List\_System\_Int32\_\_System\_Collections\_Generic\_List\_System\_Collections\_Generic\_List\_VM\_Models\_Post\_ITransformMatrix\_\_\_\_), 
[RESReader.ReadRigidBodiesPosition\(ResultInfo, MetaInfo, int, ref List<ITransformMatrix\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRigidBodiesPosition\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_System\_Collections\_Generic\_List\_VM\_Models\_Post\_ITransformMatrix\_\_\_), 
[RESReader.ReadRigidAngularAcceleration\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRigidAngularAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ObjectBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadRigidBodyAcceleration\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRigidBodyAcceleration\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ObjectBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadRigidBodyAngularVelocity\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRigidBodyAngularVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ObjectBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadRigidBodyDisplacement\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRigidBodyDisplacement\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ObjectBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadRigidBodyVelocity\(int, int, ObjectBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRigidBodyVelocity\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_ObjectBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadRequestBase\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadRequestBase\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.PrepareSPLRecovery\(ResultInfo, MetaInfo, ModeShapeInfo, IList<IBodyBase\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_PrepareSPLRecovery\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IBodyBase\_\_), 
[RESReader.FinishSPLRecovery\(\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_FinishSPLRecovery), 
[RESReader.ReadTranslationalAcclerations\(ResultInfo, MetaInfo, ModeShapeInfo, IList<int\>, IList<IDictionary<uint, uint\>\>, IList<IBodyBase\>, IList<IList<double\[\]\>\>, bool\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTranslationalAcclerations\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_Collections\_Generic\_IDictionary\_System\_UInt32\_System\_UInt32\_\_\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IBodyBase\_\_System\_Collections\_Generic\_IList\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_System\_Boolean\_), 
[RESReader.ReadTranslationalDisplacements\(ResultInfo, MetaInfo, ModeShapeInfo, IList<int\>, IList<IDictionary<uint, uint\>\>, IList<IBodyBase\>, IList<IList<double\[\]\>\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTranslationalDisplacements\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_Collections\_Generic\_IDictionary\_System\_UInt32\_System\_UInt32\_\_\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IBodyBase\_\_System\_Collections\_Generic\_IList\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_), 
[RESReader.ReadTranslationalVelocities\(ResultInfo, MetaInfo, ModeShapeInfo, IList<int\>, IList<IDictionary<uint, uint\>\>, IList<IBodyBase\>, IList<IList<double\[\]\>\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadTranslationalVelocities\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_Collections\_Generic\_IDictionary\_System\_UInt32\_System\_UInt32\_\_\_System\_Collections\_Generic\_IList\_VM\_Models\_Post\_IBodyBase\_\_System\_Collections\_Generic\_IList\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_), 
[RESReader.ReadExpressionValue\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadExpressionValue\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadFirstOrderDiffEqBeta\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFirstOrderDiffEqBeta\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadFirstOrderDiffEqBetaDot\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadFirstOrderDiffEqBetaDot\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadSecondOrderDiffEqBeta\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadSecondOrderDiffEqBeta\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadSecondOrderDiffEqBetaDot\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadSecondOrderDiffEqBetaDot\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadSecondOrderDiffEqDoubleBeta\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadSecondOrderDiffEqDoubleBeta\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadSInput\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadSInput\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadSOutput\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadSOutput\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadUserSubroutineValue\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadUserSubroutineValue\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.ReadVariableEq\(int, int, EntityBase, ResultInfo, MetaInfo, int, GeneralMarker, long\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadVariableEq\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_EntityBase\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Int32\_VM\_Models\_Post\_GeneralMarker\_System\_Int64\_), 
[RESReader.GenarateContactVectorDisplay\(ResultInfo, MetaInfo, Dictionary<string, IVectorDisplayAnimationData\>, int, BinaryReader, int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GenarateContactVectorDisplay\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_Dictionary\_System\_String\_VM\_Models\_OutputReader\_IVectorDisplayAnimationData\_\_System\_Int32\_System\_IO\_BinaryReader\_System\_Int32\_), 
[RESReader.GenarateContactResultVectorDisplay\(ResultInfo, MetaInfo, IDictionary<string, IVectorDisplayAnimationData\>, Dictionary<string, CharacteristicType\>, int, BinaryReader, int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GenarateContactResultVectorDisplay\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_IDictionary\_System\_String\_VM\_Models\_OutputReader\_IVectorDisplayAnimationData\_\_System\_Collections\_Generic\_Dictionary\_System\_String\_VM\_Models\_CharacteristicType\_\_System\_Int32\_System\_IO\_BinaryReader\_System\_Int32\_), 
[RESReader.GenarateContactGapResultVectorDisplay\(ResultInfo, MetaInfo, IDictionary<string, IVectorDisplayAnimationData\>, Dictionary<string, CharacteristicType\>, int, BinaryReader, int\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GenarateContactGapResultVectorDisplay\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_System\_Collections\_Generic\_IDictionary\_System\_String\_VM\_Models\_OutputReader\_IVectorDisplayAnimationData\_\_System\_Collections\_Generic\_Dictionary\_System\_String\_VM\_Models\_CharacteristicType\_\_System\_Int32\_System\_IO\_BinaryReader\_System\_Int32\_), 
[RESReader.GenerateVectorDisplay\(ResultInfo, MetaInfo, ModeShapeInfo, IVectorDisplayable, ref Dictionary<string, IVectorDisplayAnimationData\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GenerateVectorDisplay\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_ModeShapeInfo\_VM\_Models\_Post\_IVectorDisplayable\_System\_Collections\_Generic\_Dictionary\_System\_String\_VM\_Models\_OutputReader\_IVectorDisplayAnimationData\_\_\_), 
[RESReader.GenerateReportableVectorDisplay\(ResultInfo, MetaInfo, VectorDisplayInfos\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GenerateReportableVectorDisplay\_VM\_Models\_Post\_ResultInfo\_VM\_Models\_Post\_MetaInfo\_VM\_Models\_Post\_VectorDisplayInfos\_), 
[RESReader.GenarateSeaLevelVectorDisplay\(SeaLevel, int, ref Dictionary<string, IVectorDisplayAnimationData\>\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_GenarateSeaLevelVectorDisplay\_VM\_Models\_Post\_SeaLevel\_System\_Int32\_System\_Collections\_Generic\_Dictionary\_System\_String\_VM\_Models\_OutputReader\_IVectorDisplayAnimationData\_\_\_), 
[RESReader.ReadSealevelCurrentsData\(SeaLevel\)](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReadSealevelCurrentsData\_VM\_Models\_Post\_SeaLevel\_), 
[RESReader.FENodalBodyInfos](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_FENodalBodyInfos), 
[RESReader.FilePath](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_FilePath), 
[RESReader.IncludeStressStrainFile](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_IncludeStressStrainFile), 
[RESReader.MarkersPositions](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_MarkersPositions), 
[RESReader.RigidBodiesPositions](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_RigidBodiesPositions), 
[RESReader.ContactBlocksConfigurations](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ContactBlocksConfigurations), 
[RESReader.ContactGapBlocksConfigurations](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ContactGapBlocksConfigurations), 
[RESReader.ContactBlocksSize](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ContactBlocksSize), 
[RESReader.ContactGapBlocksSize](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ContactGapBlocksSize), 
[RESReader.DispReader](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_DispReader), 
[RESReader.EFBCBlocksSize](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_EFBCBlocksSize), 
[RESReader.EFCLoadBlockSize](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_EFCLoadBlockSize), 
[RESReader.EFPLoadBlockSize](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_EFPLoadBlockSize), 
[RESReader.ExternalForceBlockSize](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ExternalForceBlockSize), 
[RESReader.FEBodyContactBlockSize](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_FEBodyContactBlockSize), 
[RESReader.VariableBlockSizeTo](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_VariableBlockSizeTo), 
[RESReader.FEBodyReferenceFrames](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_FEBodyReferenceFrames), 
[RESReader.FECLoadBlockSize](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_FECLoadBlockSize), 
[RESReader.FEPLoadBlockSize](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_FEPLoadBlockSize), 
[RESReader.ModalNodesbehavior](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ModalNodesbehavior), 
[RESReader.NodalNodesPosition](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_NodalNodesPosition), 
[RESReader.NumFlexNodeResult](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_NumFlexNodeResult), 
[RESReader.NumFODEqResult](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_NumFODEqResult), 
[RESReader.NumFunctionResult](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_NumFunctionResult), 
[RESReader.NumRigidResult](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_NumRigidResult), 
[RESReader.NumSInputResult](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_NumSInputResult), 
[RESReader.NumSODEqResult](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_NumSODEqResult), 
[RESReader.NumSOutputResult](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_NumSOutputResult), 
[RESReader.NumNodeContactResult](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_NumNodeContactResult), 
[RESReader.NumVariableEqResult](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_NumVariableEqResult), 
[RESReader.PostSlv](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_PostSlv), 
[RESReader.ReaderableMarkers](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ReaderableMarkers), 
[RESReader.ResReader](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_ResReader), 
[RESReader.StrainReader](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_StrainReader), 
[RESReader.StressReader](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_StressReader), 
[RESReader.MaxFebodyBlockSize](VM.Models.Post.DataSource.RESReader.md\#VM\_Models\_Post\_DataSource\_RESReader\_MaxFebodyBlockSize), 
[BaseReader.ReadDoubleArray\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadDoubleArray\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.ReadDoubleArray\(BinaryReader, int, bool\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadDoubleArray\_System\_IO\_BinaryReader\_System\_Int32\_System\_Boolean\_), 
[BaseReader.ReadByteArray\(BinaryReader, int, bool\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadByteArray\_System\_IO\_BinaryReader\_System\_Int32\_System\_Boolean\_), 
[BaseReader.ReadByteIntArray\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadByteIntArray\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.ReadByteDoubleArray\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadByteDoubleArray\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.ReadStreamDoubleArray\(BinaryReader, int, byte\[\]\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadStreamDoubleArray\_System\_IO\_BinaryReader\_System\_Int32\_System\_Byte\_\_\_), 
[BaseReader.ReadIntArray\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadIntArray\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.ReadUIntArray\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadUIntArray\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.ReadIntArray\(BinaryReader, int, bool\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadIntArray\_System\_IO\_BinaryReader\_System\_Int32\_System\_Boolean\_), 
[BaseReader.ReadSignature\(byte\[\], ref int, string\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadSignature\_System\_Byte\_\_\_System\_Int32\_\_System\_String\_), 
[BaseReader.ReadString\(byte\[\], ref int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadString\_System\_Byte\_\_\_System\_Int32\_\_System\_Int32\_), 
[BaseReader.CreateListArray\(int, int\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_CreateListArray\_System\_Int32\_System\_Int32\_), 
[BaseReader.GetValueFromDescription<T\>\(string\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_GetValueFromDescription\_\_1\_System\_String\_), 
[BaseReader.ReadAllBytes\(string\)](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_ReadAllBytes\_System\_String\_), 
[BaseReader.FilePath](VM.Models.Post.DataSource.BaseReader.md\#VM\_Models\_Post\_DataSource\_BaseReader\_FilePath)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_DataSource_RESReader13__ctor_System_String_"></a> RESReader13\(string\)

```csharp
public RESReader13(string filePath)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_DataSource_RESReader13_CanContour_VM_Models_Post_IContact_"></a> CanContour\(IContact\)

```csharp
public override bool CanContour(IContact contact)
```

#### Parameters

`contact` IContact

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader13_CreateResultInfo_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_"></a> CreateResultInfo\(ResultInfo, MetaInfo\)

```csharp
public override bool CreateResultInfo(ResultInfo resultInfo, MetaInfo metaInfo)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader13_GenarateContactVectorDisplay_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Collections_Generic_Dictionary_System_String_VM_Models_OutputReader_IVectorDisplayAnimationData__System_Int32_System_IO_BinaryReader_System_Int32_"></a> GenarateContactVectorDisplay\(ResultInfo, MetaInfo, Dictionary<string, IVectorDisplayAnimationData\>, int, BinaryReader, int\)

```csharp
protected override bool GenarateContactVectorDisplay(ResultInfo resultInfo, MetaInfo metaInfo, Dictionary<string, IVectorDisplayAnimationData> vectorResults, int nsteps, BinaryReader resBinaryReader, int entityLocalSeq)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`vectorResults` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

`nsteps` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`resBinaryReader` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`entityLocalSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader13_GetContactLocalSequenceInVariableBlock_VM_Models_CharacteristicType_"></a> GetContactLocalSequenceInVariableBlock\(CharacteristicType\)

```csharp
public override int GetContactLocalSequenceInVariableBlock(CharacteristicType characteristic)
```

#### Parameters

`characteristic` CharacteristicType

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader13_GetElementStrainUintBlockSize_VM_Models_Post_ElementType_"></a> GetElementStrainUintBlockSize\(ElementType\)

```csharp
protected override long GetElementStrainUintBlockSize(ElementType type)
```

#### Parameters

`type` ElementType

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader13_GetElementStressUintBlockSize_VM_Models_Post_ElementType_"></a> GetElementStressUintBlockSize\(ElementType\)

```csharp
protected override long GetElementStressUintBlockSize(ElementType type)
```

#### Parameters

`type` ElementType

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader13_GetPlasticElementMaterialDataSize_VM_Models_Post_ElementType_"></a> GetPlasticElementMaterialDataSize\(ElementType\)

```csharp
protected override int GetPlasticElementMaterialDataSize(ElementType enType)
```

#### Parameters

`enType` ElementType

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DataSource_RESReader13_GetPotentialEnergy_System_Double___"></a> GetPotentialEnergy\(double\[\]\)

```csharp
protected override double GetPotentialEnergy(double[] contactResult)
```

#### Parameters

`contactResult` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader13_GetVariableLocalBlockSize_System_Int32_VM_Models_Post_ObjectType_"></a> GetVariableLocalBlockSize\(int, ObjectType\)

```csharp
protected override long GetVariableLocalBlockSize(int frameIdx, ObjectType type)
```

#### Parameters

`frameIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` ObjectType

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader13_InitContactResultMapping_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_PostSlv_"></a> InitContactResultMapping\(NodeBase, ResultInfo, MetaInfo, ModeShapeInfo, PostSlv\)

```csharp
protected override void InitContactResultMapping(NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, PostSlv postSlv)
```

#### Parameters

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`postSlv` PostSlv

### <a id="VM_Models_Post_DataSource_RESReader13_ReadContactGapBlocksize_System_IO_BinaryReader_System_Collections_Generic_IEnumerable_VM_Models_Post_Contacts_ContactBase__System_Boolean_"></a> ReadContactGapBlocksize\(BinaryReader, IEnumerable<ContactBase\>, bool\)

```csharp
protected override long ReadContactGapBlocksize(BinaryReader br, IEnumerable<ContactBase> contacts, bool bSkipping)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`contacts` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ContactBase\>

`bSkipping` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_Post_DataSource_RESReader13_ReadContactPressureScalar_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IUnstructGridModel_VM_Models_CharacteristicType_VM_Models_ComponentType_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__System_Boolean_System_Action_System_Collections_Generic_IList_System_String__System_Double_System_Int32_System_Collections_Generic_IList_System_Double_____"></a> ReadContactPressureScalar\(ResultInfo, MetaInfo, ModeShapeInfo, IUnstructGridModel, CharacteristicType, ComponentType, int, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>\)

```csharp
protected override bool ReadContactPressureScalar(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IUnstructGridModel unstructGridModel, CharacteristicType characteristic, ComponentType componentType, int resultID, IList<IDataState> dataStates, IEnumerable<IEntity> targetModels, bool onlyExport, Action<IList<string>, double, int, IList<double[]>> writeCallback)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`unstructGridModel` IUnstructGridModel

`characteristic` CharacteristicType

`componentType` ComponentType

`resultID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEntity\>

`onlyExport` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`writeCallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-4)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>, [double](https://learn.microsoft.com/dotnet/api/system.double), [int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader13_ReadFEBodyNodeContact_System_Int32_System_Int32_VM_Models_Post_Bodies_NodeBase_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_GeneralMarker_VM_Models_Post_DataSource_RESReader_CurveDataInfo_"></a> ReadFEBodyNodeContact\(int, int, NodeBase, ResultInfo, MetaInfo, GeneralMarker, CurveDataInfo\)

```csharp
protected override double ReadFEBodyNodeContact(int stateid, int componentIndex, NodeBase node, ResultInfo resultInfo, MetaInfo metaInfo, GeneralMarker csys, RESReader.CurveDataInfo curveDataInfo)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`componentIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`node` NodeBase

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`csys` GeneralMarker

`curveDataInfo` [RESReader](VM.Models.Post.DataSource.RESReader.md).[CurveDataInfo](VM.Models.Post.DataSource.RESReader.CurveDataInfo.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DataSource_RESReader13_ReadGeneralContactScalar_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IUnstructGridModel_VM_Models_CharacteristicType_VM_Models_ComponentType_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__System_Collections_Generic_IEnumerable_VM_Models_Post_IEntity__System_Boolean_System_Action_System_Collections_Generic_IList_System_String__System_Double_System_Int32_System_Collections_Generic_IList_System_Double_____"></a> ReadGeneralContactScalar\(ResultInfo, MetaInfo, ModeShapeInfo, IUnstructGridModel, CharacteristicType, ComponentType, int, IList<IDataState\>, IEnumerable<IEntity\>, bool, Action<IList<string\>, double, int, IList<double\[\]\>\>\)

```csharp
protected override bool ReadGeneralContactScalar(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, IUnstructGridModel unstructGridModel, CharacteristicType characteristic, ComponentType componentType, int resultID, IList<IDataState> dataStates, IEnumerable<IEntity> targetModels, bool onlyExport, Action<IList<string>, double, int, IList<double[]>> writeCallback)
```

#### Parameters

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`modeShapeInfo` ModeShapeInfo

`unstructGridModel` IUnstructGridModel

`characteristic` CharacteristicType

`componentType` ComponentType

`resultID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dataStates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataState\>

`targetModels` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEntity\>

`onlyExport` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`writeCallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-4)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>, [double](https://learn.microsoft.com/dotnet/api/system.double), [int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_RESReader13_ReadVariableBlocks_System_IO_BinaryReader_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_System_Boolean_"></a> ReadVariableBlocks\(BinaryReader, ResultInfo, MetaInfo, bool\)

```csharp
protected override void ReadVariableBlocks(BinaryReader br, ResultInfo resultInfo, MetaInfo metaInfo, bool bSkipping)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`resultInfo` ResultInfo

`metaInfo` MetaInfo

`bSkipping` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

