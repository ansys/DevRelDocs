---
uid: Ans.DataProcessing
---

# Ans.DataProcessing Namespace

## Classes

| Class | Description |
|-------|-------------|
| [AnsDispatchHolder](Ans_DataProcessing_AnsDispatchHolder.md) | AnsDispatchHolder(obj: object) |
| [Collection](Ans_DataProcessing_Collection.md) | Collection[T]() |
| [Core](Ans_DataProcessing_Core.md) | Contains DPF main actions |
| [CyclicSupport](Ans_DataProcessing_CyclicSupport.md) | The cyclic support has information to allow cyclic expansion (or multistage) |
| [DataProcessingCore](Ans_DataProcessing_DataProcessingCore.md) | DataProcessingCore() |
| [DataSources](Ans_DataProcessing_DataSources.md) | Container of files paths on which the analysis results can be found |
| [DataTree](Ans_DataProcessing_DataTree.md) | DataTree() |
| [Element](Ans_DataProcessing_Element.md) | Element(id: Int32, ptr: IntPtr) |
| [EventLogger](Ans_DataProcessing_EventLogger.md) | EventLogger() |
| [Field](Ans_DataProcessing_Field.md) | The field is the main simulation data container. |
| [FieldsContainer](Ans_DataProcessing_FieldsContainer.md) | Container of fields. |
| [FieldsContainerFactory](Ans_DataProcessing_FieldsContainerFactory.md) | Helpers to create user defined fields container |
| [FieldsFactory](Ans_DataProcessing_FieldsFactory.md) | Helpers to create user defined fields |
| [IntIntCallback](Ans_DataProcessing_IntIntCallback.md) | IntIntCallback(object: object, method: IntPtr) |
| [MaterialsContainer](Ans_DataProcessing_MaterialsContainer.md) | MaterialsContainer(pMaterialsContainer: IntPtr) |
| [MeshScopingFactory](Ans_DataProcessing_MeshScopingFactory.md) | Helpers to create mesh scoping inputs |
| [MeshSelectionManager](Ans_DataProcessing_MeshSelectionManager.md) | MeshSelectionManager() |
| [MeshedRegion](Ans_DataProcessing_MeshedRegion.md) | Describe a mesh.  |
| [MeshesContainer](Ans_DataProcessing_MeshesContainer.md) | Container of meshes. |
| [Model](Ans_DataProcessing_Model.md) | Entity able to access the model's metadata and results thanks to the result file path |
| [Node](Ans_DataProcessing_Node.md) | Node(id: Int32, ptr: IntPtr) |
| [Operator](Ans_DataProcessing_Operator.md) | Object used to create, transform and stream the data               |
| [OperatorConfig](Ans_DataProcessing_OperatorConfig.md) | OperatorConfig(operatorName: str) |
| [OperatorSpecification](Ans_DataProcessing_OperatorSpecification.md) | OperatorSpecification(name: str) |
| [PinDescription](Ans_DataProcessing_PinDescription.md) | PinDescription(index: Int32, name: str, description: str, isOptional: bool, isEllipsis: bool, typeNames: IEnumerable[str], aliases: IEnumerable[str]) |
| [ProgressInformationNotifier](Ans_DataProcessing_ProgressInformationNotifier.md) | ProgressInformationNotifier() |
| [PropertyField](Ans_DataProcessing_PropertyField.md) | PropertyField(pField: IntPtr) |
| [Result](Ans_DataProcessing_Result.md) | Result(ptrRes: IntPtr) |
| [ResultDefinition](Ans_DataProcessing_ResultDefinition.md) | ResultDefinition() |
| [ResultInfo](Ans_DataProcessing_ResultInfo.md) | Entity describing what the result files contains: the available results, the unit system, the analysis type... |
| [Scoping](Ans_DataProcessing_Scoping.md) | The scoping contains entities ids representing a subset of the model's support. Typically, scoping can represent node ids, element ids, time steps, frequencies, joints...  |
| [ScopingsContainer](Ans_DataProcessing_ScopingsContainer.md) | Container of scopings. |
| [Session](Ans_DataProcessing_Session.md) | Session() |
| [StreamsContainer](Ans_DataProcessing_StreamsContainer.md) | StreamsContainer(ptrStreams: IntPtr) |
| [StringCallback](Ans_DataProcessing_StringCallback.md) | StringCallback(object: object, method: IntPtr) |
| [StringIntCallback](Ans_DataProcessing_StringIntCallback.md) | StringIntCallback(object: object, method: IntPtr) |
| [TimeFreqScopingFactory](Ans_DataProcessing_TimeFreqScopingFactory.md) | Helpers to create time scoping inputs |
| [TimeFreqSupport](Ans_DataProcessing_TimeFreqSupport.md) | The time freq support describes an analysis' temporal or frequential space.  |
| [Workflow](Ans_DataProcessing_Workflow.md) | Container of fields. |
| [locations](Ans_DataProcessing_locations.md) |  |
