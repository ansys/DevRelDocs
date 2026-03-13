# Interface ZOSAPI::Tools::Sequences::ISequenceSelector

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector"></a>

![][C#]
![][public]

**Definition**:

Tool interface for accessing and modifying NSC sequences, including options for generating sequences via different routines. This interface can be accessed via the relevant open method: IOpticalSystemTools.OpenSequenceSelector.


**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [AddSequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aff5887cf75185fc797f462f345b309da)
* [AddSequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a677240c9d8fd8af1f2cf960580faf77a)
* [AddSequencesToGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a95427f3705bbe781f98aebaea2ca967f)
* [AddSequenceToGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ae3a5e0dc97a635fc02913df0f9ea2340)
* [ApplyAutomaticGrouping](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a7ae53c6f6eb0e308d8d103718e391b16)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [ClearAll](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a0c210974dceb2227d63185bce22f8c5a)
* [ClearSequences](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a784427154f860f4fe48d016ce63b02cb)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [ContainsSequenceName](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ac31eb1ad0ae5ea9df2d1cef4e643a5c2)
* [DeleteIncompleteSequences](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1af890e2739c1d14685edbcc829f9165d5)
* [DeleteInvalidSequences](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a6dc60fd1be2b674a022afd6933ebd1e4)
* [DeleteSequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a6bcb0960bdac5fc5d95d2cea95da8d13)
* [DeleteSequenceRange](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a800c519017e8ebde83636f5fa01e7cbb)
* [DeleteSequences](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aeb28aa3688f613bb97e0711c60c7dcd0)
* [DeleteSequencesBelowFlux](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ae9cd3e1e8d361a9616b0667ff2aa17fc)
* [DisableSequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1af4c4bf6074a6019f391819ce622a8c2b)
* [EnableSequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a3c0e5ccac28b97601f28879af2689faf)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [FindSequenceByName](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aae07df81a1a3284f81f5b8b6127302c3)
* [GenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aff7b652ad3694c7d8566cb0d1e09af90)
* [GetGroupNameAt](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a280251da51f302396cf03efa08129a62)
* [GetIndexOfSequenceByName](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a7d27468c00139471721b2580cd898de2)
* [GetSequenceAt](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a95e8ad6e4e95f56b3f62fc7c4eab88bb)
* [GetSequenceGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a71703e57338d1c0ebead4da6138a5559)
* [GroupNames](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ae697cf3c52e55a9f40906a7cf628f461)
* [IndexOfSequenceName](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a217395b5be7cbcb5df9ea626afc883ba)
* [InsertSequencesFromFile](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a65f46b3366249162e3adc46350184acb)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [LoadSequences](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aa03e01617d809aaea739dec8b8bbc1ac)
* [MakeNewGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a3c5ae299aa0132ba0f1824472353c653)
* [MergeSequenceGroups](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a457de7c46c90309ebb29ac434f5453fa)
* [MergeSequenceGroups](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aa9e1a5dc423d9939eb594320cc9fb7e7)
* [NumberOfGroups](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ad6589438ccda85fc93f1f95b6b59e663)
* [NumberOfSequences](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ac99749431f86403ad31437e839368075)
* [OffsetObjectNumbersInSequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1adcf433596172195581919196922ae5f4)
* [OffsetObjectNumbersInSequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ab143fd3b9792a0b78d74d6830cdb8af4)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [RemoveAllGroups](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a547a143172e4ceaa26440fe7ce837398)
* [RemoveGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ad1b35081011fe2fb3d26c9f0533f0801)
* [RemoveSequenceFromGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a40b6b1e18b0e3d011a5e8fa5bbcaa728)
* [RemoveSequencesFromGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a55b97716f9db94db851c08b57a9120aa)
* [RenameGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1addb37feba344dba41e5a2508a0afff55)
* [RenameSequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a606ad7b2d6dbeb4aa518a34f829f1b15)
* [ReplaceSequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aff1695e2619c33823566cee72fd05fb0)
* [ReplaceSequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a8505c3bcaaad104fea3f6c227accf197)
* [ResetAllSequenceNames](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a34af5edd241117e0c74b096a3f30270b)
* [ResetDefaultSequenceNames](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a372eec8e0ac1f2a655ce29a3f1ce3013)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [SaveSequences](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a507ba99e851f1fc754a76738f7cd7187)
* [SelectFromPathAnalysisGeneration](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1adc7c6c2e14b8d64ba69eff58b50d9fee)
* [SelectStraightThroughPathsGeneration](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a04431a39923dec7d0b4756a399db6ae1)
* [SelectViaZRDOrPAFGeneration](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a34225ad56295a728b675b20965efe81f)
* [SortByAscendingFlux](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1af1a6c14856818b06cf84835410ac50b7)
* [SortByAscendingGhostOrder](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a083060dd3e61ccb68f9b68a445dc325c)
* [SortByAscendingImageObjectNumber](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a45a8bdac5da4b2769a498ed3353c41dc)
* [SortByAscendingMeanPathLength](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a400accd0bdd6a6884871416f6c4fa45f)
* [SortByAscendingNumDiffractions](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a24a81f7e9c07c6b807a4b3ed32c67550)
* [SortByAscendingNumRays](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a5f5a5bf5798b697e6c21402c57acdff0)
* [SortByAscendingSize](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a6b5403b4d6b706c5a963feec89964fb9)
* [SortByAscendingTIROrder](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a4e7aa2b88623eca567ba9d67a00a28d5)
* [SortByAscendingUniqueCount](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a7e5712eaeb3d3bacae4be50f5362f1c6)
* [SortByDescendingFlux](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1abb81f5e909b9476afafe0c5503f85caf)
* [SortByDescendingGhostOrder](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ae214149b851a7fe3976fa15a53a8671a)
* [SortByDescendingImageObjectNumber](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a351be7182199a8a2edc4dce6381372d5)
* [SortByDescendingMeanPathLength](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a90f9234fee0fdddc8711b256d67798d3)
* [SortByDescendingNumDiffractions](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ae383720f2791cc6c5a215070c2ea72cc)
* [SortByDescendingNumRays](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1acc762255dc3fc61deb00f54a1e0315a0)
* [SortByDescendingSize](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ac80102003299b9497d84ed0ccd6dd40f)
* [SortByDescendingTIROrder](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a42a3ab14e5bee13b4785b47a34476c40)
* [SortByDescendingUniqueCount](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ad7036d68ab6becbd0bde17df89a220d5)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [Undo](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a83d2360b6ae4be27f29f763660706a23)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property NumberOfSequences

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ac99749431f86403ad31437e839368075"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.NumberOfSequences
```


The number of sequences currently defined in the sequence list.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.NumberOfSequences"}]}`
-->

### Property GenerationSettings

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aff7b652ad3694c7d8566cb0d1e09af90"></a>

![][public]

**Definition**:


```csharp
ISequenceGenerationSettings ZOSAPI.Tools.Sequences.ISequenceSelector.GenerationSettings
```


Get or set the settings interface for sequence generation.

The settings object used here determines which sequence generation method is used when running the tool.


**Return type**: [ISequenceGenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.GenerationSettings"}]}`
-->

### Property NumberOfGroups

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ad6589438ccda85fc93f1f95b6b59e663"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.NumberOfGroups
```


The number of currently defined sequence groups.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.NumberOfGroups"}]}`
-->

### Property GroupNames

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ae697cf3c52e55a9f40906a7cf628f461"></a>

![][public]

**Definition**:


```csharp
List<string> ZOSAPI.Tools.Sequences.ISequenceSelector.GroupNames
```


Names of all the currently defined sequence groups.


**Return type**: [List](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)< string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.GroupNames"}]}`
-->

## Public functions

### Function ContainsSequenceName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ac31eb1ad0ae5ea9df2d1cef4e643a5c2"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Sequences.ISequenceSelector.ContainsSequenceName(string name)
```


Whether the sequence list holds a sequence with the specified name.

**Parameters**:

* **name**: Name of the sequence to search for.


**Returns**:

True if the sequence exists, false otherwise.


**Parameters**:

* string **name**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.ContainsSequenceName"}]}`
-->

### Function IndexOfSequenceName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a217395b5be7cbcb5df9ea626afc883ba"></a>

![][public]


```csharp
int? ZOSAPI.Tools.Sequences.ISequenceSelector.IndexOfSequenceName(string name)
```


Get the index of the sequence with the specified name.

**Parameters**:

* **name**: Name of the sequence to search for.


**Returns**:

The sequence index if it exists.


**Parameters**:

* string **name**

**Return type**: int?

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.IndexOfSequenceName"}]}`
-->

### Function GetSequenceAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a95e8ad6e4e95f56b3f62fc7c4eab88bb"></a>

![][public]


```csharp
ISequence ZOSAPI.Tools.Sequences.ISequenceSelector.GetSequenceAt(int index)
```


Get the sequence at the specified index.

**Parameters**:

* **index**: Index (zero-based) of the sequence to retrieve.


**Returns**:

A copy of the sequence data.


**Exceptions**:

* **IndexOutOfRangeException**: If index not in [0, NumberOfSequences)/>


**Parameters**:

* int **index**

**Return type**: [ISequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.GetSequenceAt"}]}`
-->

### Function FindSequenceByName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aae07df81a1a3284f81f5b8b6127302c3"></a>

![][public]


```csharp
ISequence ZOSAPI.Tools.Sequences.ISequenceSelector.FindSequenceByName(string name)
```


Get the sequence with the specified name.

**Parameters**:

* **name**: Name of the sequence to search for.


**Returns**:

A copy of the sequence data.


**Exceptions**:

* **KeyNotFoundException**: If no sequence with the given name is found.


**Parameters**:

* string **name**

**Return type**: [ISequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.FindSequenceByName"}]}`
-->

### Function ClearSequences

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a784427154f860f4fe48d016ce63b02cb"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.ClearSequences()
```


Remove all sequences.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.ClearSequences"}]}`
-->

### Function DeleteSequence

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a6bcb0960bdac5fc5d95d2cea95da8d13"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteSequence(int index)
```


Delete the sequence at the specified index.

**Parameters**:

* **index**: Index (zero-based) of the sequence to delete.


**Exceptions**:

* **IndexOutOfRangeException**: If index not in [0, NumberOfSequences)/>


**Parameters**:

* int **index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteSequence"}]}`
-->

### Function DeleteSequences

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aeb28aa3688f613bb97e0711c60c7dcd0"></a>

![][public]


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteSequences(IEnumerable< int > indices)
```


Delete the sequences at each specified index. This can be used to conveniently delete multiple sequences, perhaps filtered by some custom condition, without needing to manually loop and take account of changing indices.

**Parameters**:

* **indices**: Iterable of indices to delete. Any values, in this iterable, which are greater than or equal to NumberOfSequences will be ignored.


**Returns**:

Actual number of sequences deleted.


**Parameters**:

* IEnumerable< int > **indices**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteSequences"}]}`
-->

### Function DeleteSequenceRange

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a800c519017e8ebde83636f5fa01e7cbb"></a>

![][public]


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteSequenceRange(int start, int end)
```


Delete sequences in the index range [start, end).

**Parameters**:

* **start**: Index of first sequence in the range to delete.
* **end**: One past-the-end index of last sequence in the range to delete.


**Returns**:

Actual number of sequences deleted.


**Parameters**:

* int **start**
* int **end**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteSequenceRange"}]}`
-->

### Function DeleteInvalidSequences

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a6dc60fd1be2b674a022afd6933ebd1e4"></a>

![][public]


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteInvalidSequences()
```


Delete all sequences which are invalid.

**Returns**:

Number of sequences deleted.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteInvalidSequences"}]}`
-->

### Function DeleteIncompleteSequences

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1af890e2739c1d14685edbcc829f9165d5"></a>

![][public]


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteIncompleteSequences()
```


Delete all sequences which do not start with a source and end at a detector.

**Returns**:

Number of sequences deleted.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteIncompleteSequences"}]}`
-->

### Function DeleteSequencesBelowFlux

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ae9cd3e1e8d361a9616b0667ff2aa17fc"></a>

![][public]


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteSequencesBelowFlux(double minFlux)
```


Delete all sequences which have a flux value less than a given threshold.

**Parameters**:

* **minFlux**: Minimum flux value.


**Returns**:

Number of sequences deleted.


**Parameters**:

* double **minFlux**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.DeleteSequencesBelowFlux"}]}`
-->

### Function EnableSequence

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a3c0e5ccac28b97601f28879af2689faf"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Sequences.ISequenceSelector.EnableSequence(int index)
```


Enable the sequence at the specified index.

**Parameters**:

* **index**: Index (zero-based) of the sequence to enable.


**Returns**:

True if the sequence was successfully enabled, false otherwise.


**Parameters**:

* int **index**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.EnableSequence"}]}`
-->

### Function DisableSequence

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1af4c4bf6074a6019f391819ce622a8c2b"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Sequences.ISequenceSelector.DisableSequence(int index)
```


Disable the sequence at the specified index.

**Parameters**:

* **index**: Index (zero-based) of the sequence to disable.


**Returns**:

True if the sequence was successfully disabled, false otherwise.


**Parameters**:

* int **index**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.DisableSequence"}]}`
-->

### Function RenameSequence

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a606ad7b2d6dbeb4aa518a34f829f1b15"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.RenameSequence(int index, string newName)
```


Rename the sequence at the specified index.

**Parameters**:

* **index**: Index (zero-based) of the sequence to rename.
* **newName**: New name to give the sequence.


**Exceptions**:

* **ArgumentException**: If the given new name is invalid.


**Parameters**:

* int **index**
* string **newName**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.RenameSequence"}]}`
-->

### Function ReplaceSequence

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aff1695e2619c33823566cee72fd05fb0"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.ReplaceSequence(int index, string sequence)
```


Replace the sequence at the specified index with a new sequence specified in filter format.

**Parameters**:

* **index**: Index (zero-based) of the sequence to replace.
* **sequence**: A string in valid sequence format.


**Exceptions**:

* **ArgumentException**: If the given sequence string is invalid.


**Parameters**:

* int **index**
* string **sequence**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.ReplaceSequence"}]}`
-->

### Function ReplaceSequence

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a8505c3bcaaad104fea3f6c227accf197"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.ReplaceSequence(int index, IEnumerable< object > sequence)
```


Replace the sequence at the specified index with a new sequence, specified as an iterable of objects which can be cast to either SequenceElement or string.

**Parameters**:

* **index**: Index (zero-based) of the sequence to replace.
* **sequence**: An iterable of objects to be processed.


**Exceptions**:

* **ArgumentException**: If the given sequence is invalid.
* **InvalidCastException**: If sequence could not be cast appropriately.


**Parameters**:

* int **index**
* IEnumerable< object > **sequence**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.ReplaceSequence"}]}`
-->

### Function AddSequence

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aff5887cf75185fc797f462f345b309da"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.AddSequence(string sequence)
```


Append a new sequence, specified in sequence string format, to the sequence list.

**Parameters**:

* **sequence**: A string in valid sequence format.


**Exceptions**:

* **ArgumentException**: If the given sequence string is invalid.


**Parameters**:

* string **sequence**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.AddSequence"}]}`
-->

### Function AddSequence

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a677240c9d8fd8af1f2cf960580faf77a"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.AddSequence(IEnumerable< object > sequence)
```


Append a new sequence, specified as an iterable of objects which can be cast to either SequenceElement or string, to the sequence list.

**Parameters**:

* **sequence**: An iterable of objects to be processed.


**Exceptions**:

* **ArgumentException**: If the given sequence is invalid.
* **InvalidCastException**: If sequence could not be cast appropriately.


**Parameters**:

* IEnumerable< object > **sequence**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.AddSequence"}]}`
-->

### Function OffsetObjectNumbersInSequence

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1adcf433596172195581919196922ae5f4"></a>

![][public]


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.OffsetObjectNumbersInSequence(int index, int startAtObject, int off)
```


Shift the object number values of all entries, starting from startAtObject, in the sequence at the specified index.

This method can be used to easily fix sequences which have been invalidated through modifications to the NCE. For example, one could call this with off set to -1 after removing an object from the NCE. 


**Parameters**:

* **index**: Index (zero-based) of the sequence to adjust.
* **startAtObject**: Object number to start offsets from in the sequence.
* **off**: The value by which to offset the object numbers.


**Returns**:

The number of entries in the sequence which were modified.


**Exceptions**:

* **ArgumentException**: If the new, modified sequence is invalid.


**Parameters**:

* int **index**
* int **startAtObject**
* int **off**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.OffsetObjectNumbersInSequence"}]}`
-->

### Function OffsetObjectNumbersInSequence

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ab143fd3b9792a0b78d74d6830cdb8af4"></a>

![][public]


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.OffsetObjectNumbersInSequence(int index, int startAtObject, int endAtObject, int off)
```


Shift the object number values of all entries, starting from startAtObject and ending at endAtObject (non-inclusive), in the sequence at the specified index.

This method can be used to easily fix sequences which have been invalidated through modifications to the NCE. For example, one could call this with off set to -1 after removing an object from the NCE. 


**Parameters**:

* **index**: Index (zero-based) of the sequence to adjust.
* **startAtObject**: Object number to start offsets from in the sequence.
* **endAtObject**: Object number to end offsets at (non-inclusive) in the sequence.
* **off**: The value by which to offset the object numbers.


**Returns**:

The number of entries in the sequence which were modified.


**Exceptions**:

* **ArgumentException**: If the new, modified sequence is invalid.


**Parameters**:

* int **index**
* int **startAtObject**
* int **endAtObject**
* int **off**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.OffsetObjectNumbersInSequence"}]}`
-->

### Function SortByAscendingFlux

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1af1a6c14856818b06cf84835410ac50b7"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingFlux()
```


Sort the sequences in order of descending ISequence.Flux values.

Note: any sequences with NaN flux will always appear after non-NaN flux sequences.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingFlux"}]}`
-->

### Function SortByDescendingFlux

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1abb81f5e909b9476afafe0c5503f85caf"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingFlux()
```


Sort the sequences in order of ascending ISequence.Flux values.

Note: any sequences with NaN flux will always appear after non-NaN flux sequences.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingFlux"}]}`
-->

### Function SortByAscendingSize

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a6b5403b4d6b706c5a963feec89964fb9"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingSize()
```


Sort the sequences in order of ascending ISequence.NumberOfElements.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingSize"}]}`
-->

### Function SortByDescendingSize

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ac80102003299b9497d84ed0ccd6dd40f"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingSize()
```


Sort the sequences in order of descending ISequence.NumberOfElements.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingSize"}]}`
-->

### Function SortByAscendingNumDiffractions

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a24a81f7e9c07c6b807a4b3ed32c67550"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingNumDiffractions()
```


Sort the sequences in order of ascending ISequence.NumDiffractiveElements.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingNumDiffractions"}]}`
-->

### Function SortByDescendingNumDiffractions

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ae383720f2791cc6c5a215070c2ea72cc"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingNumDiffractions()
```


Sort the sequences in order of descending ISequence.NumDiffractiveElements.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingNumDiffractions"}]}`
-->

### Function LoadSequences

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aa03e01617d809aaea739dec8b8bbc1ac"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.LoadSequences(string filePath)
```


Load sequences from a NSEQ binary file or a JSON file. These will replace the currently held sequences on success.

**Parameters**:

* **filePath**: Path to the sequences file to load.


**Exceptions**:

* **ArgumentException**: If filePath is invalid, or loading fails for any reason.


**Parameters**:

* string **filePath**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.LoadSequences"}]}`
-->

### Function InsertSequencesFromFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a65f46b3366249162e3adc46350184acb"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.InsertSequencesFromFile(string filePath)
```


Insert sequences from a NSEQ binary file or a JSON file. These will be added to the currently held sequence list on success.

**Parameters**:

* **filePath**: Path to the sequences file to load.


**Exceptions**:

* **ArgumentException**: If filePath is invalid, or loading fails for any reason.


**Parameters**:

* string **filePath**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.InsertSequencesFromFile"}]}`
-->

### Function SaveSequences

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a507ba99e851f1fc754a76738f7cd7187"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SaveSequences(string filePath, bool formatted=false)
```


Save all the sequences to a NSEQ binary file (default) or a JSON file.

**Parameters**:

* **filePath**: Path to save the sequences to.
* **formatted**: If writing to a JSON file, whether to pre-format the written JSON content in a human-readable format.


**Exceptions**:

* **ArgumentException**: If filePath is invalid, or saving fails for any reason.


**Parameters**:

* string **filePath**
* bool **formatted** = false 

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SaveSequences"}]}`
-->

### Function SelectStraightThroughPathsGeneration

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a04431a39923dec7d0b4756a399db6ae1"></a>

![][public]


```csharp
IStraightThroughPathsGenerationSettings ZOSAPI.Tools.Sequences.ISequenceSelector.SelectStraightThroughPathsGeneration()
```


Create a new settings object for the straight through paths generator option, and set the GenerationSettings property to this to select this method of generation.

**Returns**:


**Return type**: [IStraightThroughPathsGenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_straight_through_paths_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_straight_through_paths_generation_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SelectStraightThroughPathsGeneration"}]}`
-->

### Function SelectFromPathAnalysisGeneration

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1adc7c6c2e14b8d64ba69eff58b50d9fee"></a>

![][public]


```csharp
IFromPathAnalysisGenerationSettings ZOSAPI.Tools.Sequences.ISequenceSelector.SelectFromPathAnalysisGeneration()
```


Create a new settings object for the from pre-run Path Analysis generator option, and set the GenerationSettings property to this to select this method of generation.

**Returns**:


**Return type**: [IFromPathAnalysisGenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SelectFromPathAnalysisGeneration"}]}`
-->

### Function SelectViaZRDOrPAFGeneration

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a34225ad56295a728b675b20965efe81f"></a>

![][public]


```csharp
IViaZRDOrPAFGenerationSettings ZOSAPI.Tools.Sequences.ISequenceSelector.SelectViaZRDOrPAFGeneration()
```


Create a new settings object for the via ZRD or PAF file generator option, and set the GenerationSettings property to this to select this method of generation.

**Returns**:


**Return type**: [IViaZRDOrPAFGenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SelectViaZRDOrPAFGeneration"}]}`
-->

### Function Undo

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a83d2360b6ae4be27f29f763660706a23"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Sequences.ISequenceSelector.Undo()
```


Defined for internal testing purposes.

**Returns**:

True if the last operation (if any) was undone successfully.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.Undo"}]}`
-->

### Function GetIndexOfSequenceByName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a7d27468c00139471721b2580cd898de2"></a>

![][public]


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.GetIndexOfSequenceByName(string name)
```


Get the index of the sequence with the specified name.

**Parameters**:

* **name**: Name of the sequence to search for.


**Returns**:

The sequence index if it exists, otherwise -1.


**Parameters**:

* string **name**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.GetIndexOfSequenceByName"}]}`
-->

### Function ClearAll

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a0c210974dceb2227d63185bce22f8c5a"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.ClearAll()
```


Remove all sequences and groups.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.ClearAll"}]}`
-->

### Function ResetDefaultSequenceNames

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a372eec8e0ac1f2a655ce29a3f1ce3013"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.ResetDefaultSequenceNames()
```


Rename all sequences which do not have custom names.

Each sequence name will be reset to "SEQ(n)" where n is the number of the sequence in the list. Sequences with custom, user-defined names will be skipped.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.ResetDefaultSequenceNames"}]}`
-->

### Function ResetAllSequenceNames

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a34af5edd241117e0c74b096a3f30270b"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.ResetAllSequenceNames()
```


Rename all sequences.

Each sequence name will be reset to "SEQ(n)" where n is the number of the sequence in the list.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.ResetAllSequenceNames"}]}`
-->

### Function SortByAscendingGhostOrder

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a083060dd3e61ccb68f9b68a445dc325c"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingGhostOrder()
```


Sort the sequences in order of descending ISequence.GhostOrder values.

Note: any sequences with unresolved ghost order will always appear after resolved sequences.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingGhostOrder"}]}`
-->

### Function SortByDescendingGhostOrder

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ae214149b851a7fe3976fa15a53a8671a"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingGhostOrder()
```


Sort the sequences in order of ascending ISequence.GhostOrder values.

Note: any sequences with unresolved ghost order will always appear after resolved sequences.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingGhostOrder"}]}`
-->

### Function SortByDescendingTIROrder

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a42a3ab14e5bee13b4785b47a34476c40"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingTIROrder()
```


Sort the sequences in order of descending ISequence.TIROrder values.

Note: any sequences with unresolved TIR order will always appear after resolved sequences.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingTIROrder"}]}`
-->

### Function SortByAscendingTIROrder

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a4e7aa2b88623eca567ba9d67a00a28d5"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingTIROrder()
```


Sort the sequences in order of ascending ISequence.TIROrder values.

Note: any sequences with unresolved TIR order will always appear after resolved sequences.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingTIROrder"}]}`
-->

### Function SortByDescendingMeanPathLength

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a90f9234fee0fdddc8711b256d67798d3"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingMeanPathLength()
```


Sort the sequences in order of descending ISequence.MeanPathLength values.

Note: any sequences with NaN mean path length will always appear after resolved sequences.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingMeanPathLength"}]}`
-->

### Function SortByAscendingMeanPathLength

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a400accd0bdd6a6884871416f6c4fa45f"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingMeanPathLength()
```


Sort the sequences in order of ascending ISequence.MeanPathLength values.

Note: any sequences with NaN mean path length will always appear after resolved sequences.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingMeanPathLength"}]}`
-->

### Function SortByDescendingNumRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1acc762255dc3fc61deb00f54a1e0315a0"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingNumRays()
```


Sort the sequences in order of descending ISequence.NumRays.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingNumRays"}]}`
-->

### Function SortByAscendingNumRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a5f5a5bf5798b697e6c21402c57acdff0"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingNumRays()
```


Sort the sequences in order of ascending ISequence.NumRays.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingNumRays"}]}`
-->

### Function SortByDescendingUniqueCount

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ad7036d68ab6becbd0bde17df89a220d5"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingUniqueCount()
```


Sort the sequences in order of descending number of unique entries.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingUniqueCount"}]}`
-->

### Function SortByAscendingUniqueCount

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a7e5712eaeb3d3bacae4be50f5362f1c6"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingUniqueCount()
```


Sort the sequences in order of ascending number of unique entries.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingUniqueCount"}]}`
-->

### Function SortByDescendingImageObjectNumber

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a351be7182199a8a2edc4dce6381372d5"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingImageObjectNumber()
```


Sort the sequences in order of descending ISequence.Image object number.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByDescendingImageObjectNumber"}]}`
-->

### Function SortByAscendingImageObjectNumber

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a45a8bdac5da4b2769a498ed3353c41dc"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingImageObjectNumber()
```


Sort the sequences in order of ascending ISequence.Image object number.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.SortByAscendingImageObjectNumber"}]}`
-->

### Function GetGroupNameAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a280251da51f302396cf03efa08129a62"></a>

![][public]


```csharp
string ZOSAPI.Tools.Sequences.ISequenceSelector.GetGroupNameAt(int index)
```


Get the name of the group at the specified group index.

**Parameters**:

* **index**: Index (zero-based) of the group name to retrieve.


**Returns**:

Name of the group at the given index.


**Exceptions**:

* **IndexOutOfRangeException**:


**Parameters**:

* int **index**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.GetGroupNameAt"}]}`
-->

### Function GetSequenceGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a71703e57338d1c0ebead4da6138a5559"></a>

![][public]


```csharp
ISequenceGroup ZOSAPI.Tools.Sequences.ISequenceSelector.GetSequenceGroup(string groupName)
```


Retrieve a list of all the sequences which are present within a specified group.

**Parameters**:

* **groupName**: Name of the group to retrieve.


**Returns**:

An object consisting of the sequence data in the group.


**Parameters**:

* string **groupName**

**Return type**: [ISequenceGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.GetSequenceGroup"}]}`
-->

### Function MakeNewGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a3c5ae299aa0132ba0f1824472353c653"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.MakeNewGroup(string groupName)
```


Make a new, empty group with the given name.

**Parameters**:

* **groupName**: Name of the new group.


**Exceptions**:

* **ArgumentException**: If the group name is invalid.


**Parameters**:

* string **groupName**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.MakeNewGroup"}]}`
-->

### Function AddSequenceToGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ae3a5e0dc97a635fc02913df0f9ea2340"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.AddSequenceToGroup(string groupName, int index)
```


Add a single sequence, at the specified index, to a named group.

If the given group does not exist, then it will be created as a new group.


**Parameters**:

* **groupName**: Name of the group to add sequences to.
* **index**: Index (zero-based) of the sequence to add.


**Exceptions**:

* **ArgumentException**: If the group name is invalid.


**Parameters**:

* string **groupName**
* int **index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.AddSequenceToGroup"}]}`
-->

### Function AddSequencesToGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a95427f3705bbe781f98aebaea2ca967f"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.AddSequencesToGroup(string groupName, IEnumerable< int > indices)
```


Add sequences to a specified group via the indices of the sequences in the underlying sequence list.

If the given group does not exist, then it will be created as a new group.


**Parameters**:

* **groupName**: Name of the group to add sequences to.
* **indices**: Indices (zero-based) of the sequences to add.


**Exceptions**:

* **ArgumentException**: If the group name is invalid.


**Parameters**:

* string **groupName**
* IEnumerable< int > **indices**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.AddSequencesToGroup"}]}`
-->

### Function RemoveSequenceFromGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a40b6b1e18b0e3d011a5e8fa5bbcaa728"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.RemoveSequenceFromGroup(string groupName, int index)
```


Remove a single sequence, at the specified index, from a named group.

**Parameters**:

* **groupName**: Name of the group to remove the sequence from.
* **index**: Index (zero-based) of the sequence to remove.


**Parameters**:

* string **groupName**
* int **index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.RemoveSequenceFromGroup"}]}`
-->

### Function RemoveSequencesFromGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a55b97716f9db94db851c08b57a9120aa"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.RemoveSequencesFromGroup(string groupName, IEnumerable< int > indices)
```


Remove sequences from a specified group via the indices of the sequences in the underlying sequence list.

Any value in indices which refers to a sequence which is not in the specified group will be ignored. If the group is left with no sequences in it after this operation, then it will be automatically removed.


Note: this does not delete sequences themselves from the underlying sequence list, it only removes the sequence group which is a view onto a set of sequences. 


**Parameters**:

* **groupName**: Name of the group to remove sequences from.
* **indices**: Indices (zero-based) of the sequences to remove.


**Exceptions**:

* **ArgumentException**: If the given group name does not exist.


**Parameters**:

* string **groupName**
* IEnumerable< int > **indices**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.RemoveSequencesFromGroup"}]}`
-->

### Function MergeSequenceGroups

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a457de7c46c90309ebb29ac434f5453fa"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.MergeSequenceGroups(string groupNameA, string groupNameB)
```


Merge the sequences from groupNameB into groupNameA.

**Parameters**:

* **groupNameA**: Name of the group to merge to.
* **groupNameB**: Name of the group to merge from.


**Parameters**:

* string **groupNameA**
* string **groupNameB**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.MergeSequenceGroups"}]}`
-->

### Function MergeSequenceGroups

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1aa9e1a5dc423d9939eb594320cc9fb7e7"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.MergeSequenceGroups(IEnumerable< string > groupNames)
```


Merge the sequence groups with the given names into the first group of this collection.

**Parameters**:

* **groupNames**: Names of the groups to merge.


**Parameters**:

* IEnumerable< string > **groupNames**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.MergeSequenceGroups"}]}`
-->

### Function RenameGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1addb37feba344dba41e5a2508a0afff55"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.RenameGroup(string groupName, string newName)
```


Rename a sequence group.

**Parameters**:

* **groupName**: Name of the group to rename.
* **newName**: New name to assign to the group.


**Exceptions**:

* **ArgumentException**: If the given group name does not exist, or the new group name is invalid.


**Parameters**:

* string **groupName**
* string **newName**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.RenameGroup"}]}`
-->

### Function RemoveGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1ad1b35081011fe2fb3d26c9f0533f0801"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.RemoveGroup(string groupName)
```


Remove a sequence group with the specified name.

Note: this does not delete sequences themselves from the underlying sequence list, it only removes the sequence group which is a view onto a set of sequences. 


**Parameters**:

* **groupName**: Name of the group to remove.


**Exceptions**:

* **ArgumentException**: If the given group name does not exist.


**Parameters**:

* string **groupName**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.RemoveGroup"}]}`
-->

### Function RemoveAllGroups

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a547a143172e4ceaa26440fe7ce837398"></a>

![][public]


```csharp
int ZOSAPI.Tools.Sequences.ISequenceSelector.RemoveAllGroups()
```


Remove all sequence groups.

Note: this does not delete sequences themselves from the underlying sequence list, it only removes the sequence groups. 


**Returns**:

Number of sequence groups removed.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.RemoveAllGroups"}]}`
-->

### Function ApplyAutomaticGrouping

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector_1a7ae53c6f6eb0e308d8d103718e391b16"></a>

![][public]


```csharp
void ZOSAPI.Tools.Sequences.ISequenceSelector.ApplyAutomaticGrouping()
```


Automatically apply grouping to all available sequences.

Automatic grouping of any unresolved (ISequence.IsResolved) sequences will be significantly limited compared to resolved sequences. 


**Exceptions**:

* **ArgumentException**: If the automatic grouping fails for any reason.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceSelector.ApplyAutomaticGrouping"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
