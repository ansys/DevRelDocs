---
uid: Ans.DataProcessing
---

# Ans.DataProcessing Namespace

## Classes

| Class | Description |
|-------|-------------|
| [AnsDispatchHolder](AnsDispatchHolder.md) | AnsDispatchHolder(obj: object) |
| [Collection](Collection.md) | Collection[T]() |
| [Core](Core.md) | Contains DPF main actions |
| [CyclicSupport](CyclicSupport.md) | The cyclic support has information to allow cyclic expansion (or multistage) |
| [DataProcessingCore](DataProcessingCore.md) | DataProcessingCore() |
| [DataSources](DataSources.md) | Container of files paths on which the analysis results can be found |
| [DataTree](DataTree.md) | DataTree() |
| [Element](Element.md) | Element(id: int, ptr: IntPtr) |
| [EventLogger](EventLogger.md) | EventLogger() |
| [Field](Field.md) | The field is the main simulation data container. |
| [FieldsContainer](FieldsContainer.md) | Container of fields. |
| [FieldsContainerFactory](FieldsContainerFactory.md) | Helpers to create user defined fields container |
| [FieldsFactory](FieldsFactory.md) | Helpers to create user defined fields |
| [IntIntCallback](IntIntCallback.md) | IntIntCallback(object: object, method: IntPtr) |
| [MaterialsContainer](MaterialsContainer.md) | MaterialsContainer(pMaterialsContainer: IntPtr) |
| [MeshScopingFactory](MeshScopingFactory.md) | Helpers to create mesh scoping inputs |
| [MeshSelectionManager](MeshSelectionManager.md) | MeshSelectionManager() |
| [MeshedRegion](MeshedRegion.md) | Describe a mesh.  |
| [MeshesContainer](MeshesContainer.md) | Container of meshes. |
| [Model](Model.md) | Entity able to access the model's metadata and results thanks to the result file path |
| [Node](Node.md) | Node(id: int, ptr: IntPtr) |
| [Operator](Operator.md) | Object used to create, transform and stream the data |
| [OperatorConfig](OperatorConfig.md) | OperatorConfig(operatorName: str) |
| [OperatorSpecification](OperatorSpecification.md) | OperatorSpecification(name: str) |
| [PinDescription](PinDescription.md) | PinDescription(index: int, name: str, description: str, isOptional: bool, isEllipsis: bool, typeNames: IEnumerable[str], aliases: IEnumerable[str]) |
| [ProgressInformationNotifier](ProgressInformationNotifier.md) | ProgressInformationNotifier() |
| [PropertyField](PropertyField.md) | PropertyField(pField: IntPtr) |
| [Result](Result.md) | Result(ptrRes: IntPtr) |
| [ResultDefinition](ResultDefinition.md) | ResultDefinition() |
| [ResultInfo](ResultInfo.md) | Entity describing what the result files contains: the available results, the unit system, the analysis type... |
| [RuntimeClientConfig](RuntimeClientConfig.md) |  |
| [RuntimeConfig](RuntimeConfig.md) |  |
| [RuntimeCoreConfig](RuntimeCoreConfig.md) |  |
| [Scoping](Scoping.md) | The scoping contains entities ids representing a subset of the model's support. Typically, scoping can represent node ids, element ids, time steps, frequencies, joints...  |
| [ScopingsContainer](ScopingsContainer.md) | Container of scopings. |
| [Session](Session.md) | Session() |
| [StreamsContainer](StreamsContainer.md) | StreamsContainer(ptrStreams: IntPtr) |
| [StringCallback](StringCallback.md) | StringCallback(object: object, method: IntPtr) |
| [StringIntCallback](StringIntCallback.md) | StringIntCallback(object: object, method: IntPtr) |
| [TimeFreqScopingFactory](TimeFreqScopingFactory.md) | Helpers to create time scoping inputs |
| [TimeFreqSupport](TimeFreqSupport.md) | The time freq support describes an analysis' temporal or frequential space.  |
| [Workflow](Workflow.md) | Container of fields. |
| [locations](locations.md) |  |
