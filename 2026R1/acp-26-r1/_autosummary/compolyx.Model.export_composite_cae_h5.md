# export_composite_cae_h5

<a id="compolyx.Model.export_composite_cae_h5"></a>

## Model.export_composite_cae_h5(path, remove_midside_nodes=True, layup_representation_3d=False, offset_type='bottom_offset', element_sets=None, modeling_plies=None, ascii_encoding=False)

Export layup to composite CAE .hdf5 file.

> * **parameters:**
>   - path: Save path of the .h5 file.
>   - remove_midside_nodes: Whether midside nodes should be exported.
>   - layup_representation_3d: Whether to compute the 3D layup representation of the model. See note.
>   - offset_type: Specifies the ply surface to export. Valid options: bottom_offset, middle_offset, and top_offset.
>   - element_sets: A list of element sets and/or oriented selection sets. Only plies defined over the selected elements will be exported. If empty list or none, then all elements will be considered.
>   - modeling_plies: A list of modeling plies and/or modeling groups. If empty list or none, then all modeling plies will be exported.
>   - ascii_encoding: If True, set the .hdf5 data type for strings to H5T_CSET_ASCII. Note that the string contents will be UTF-8 encoded regardless of this setting, meaning the content will only be well-defined ASCII if the ACP object names do not contain unicode characters outside the ASCII range. This option is added for compatibility with readers which may not support the H5T_CSET_UTF8 data type.

Note about layup_representation_3d: The 3D layup representation contains the offset ply surfaces where
the bottom offset of each ply is exported. The computation can take a while depending on the model size
and may fail if the model is too complex (shape and topology).
This can be resolved by exporting sub-parts (element sets).
