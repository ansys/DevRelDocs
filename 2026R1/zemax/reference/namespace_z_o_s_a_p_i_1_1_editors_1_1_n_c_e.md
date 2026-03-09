# Namespace ZOSAPI::Editors::NCE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e"></a>

![][C#]

**Definition**:


Usage (see [Example 21](page_ex21.md#page_ex21) for a full sample)


C# 
```csharp
            // Set 4th object as Standard Lens
            INCERow Object_4 = TheNCE.GetObjectAt(4);
            IObjectTypeSettings Typeset_StandardLens = Object_4.GetObjectTypeSettings(ObjectType.StandardLens);
            Object_4.ChangeType(Typeset_StandardLens);
            // Set positions
            Object_4.GetObjectCell(ObjectColumn.ZPosition).DoubleValue = 0.9;
            // To set solve for any cell, you need to first create a "ISolveData" by "CreateSolveType()" method.
            // And then assign it to the cell.
            ISolveData Solve_ObjPick = Object_4.GetObjectCell(ObjectColumn.Material).CreateSolveType(SolveType.ObjectPickup);
            Solve_ObjPick._S_ObjectPickup.Object = 3;
            // Set parameters
            Object_4.GetObjectCell(ObjectColumn.Material).SetSolveData(Solve_ObjPick);
            Object_4.GetObjectCell(ObjectColumn.Par3).DoubleValue = 1.2;
            Object_4.GetObjectCell(ObjectColumn.Par4).DoubleValue = 1.2;
            Object_4.GetObjectCell(ObjectColumn.Par5).DoubleValue = 1.2;
            Object_4.GetObjectCell(ObjectColumn.Par6).DoubleValue = -1.2;
            Object_4.GetObjectCell(ObjectColumn.Par8).DoubleValue = 1.2;
            Object_4.GetObjectCell(ObjectColumn.Par9).DoubleValue = 1.2;
```
 C++ 
```csharp
    // Set 4th object as Standard Lens
    INCERowPtr Object_4 = TheNCE->GetObjectAt(4);
    IObjectTypeSettingsPtr Typeset_StandardLens = Object_4->GetObjectTypeSettings(ObjectType_StandardLens);
    Object_4->ChangeType(Typeset_StandardLens);
    // Set positions
    Object_4->GetObjectCell(ObjectColumn_ZPosition)->DoubleValue = 0.9;
    // To set solve for any cell, you need to first create a "ISolveData" by "CreateSolveType()" method.
    // And then assign it to the cell.
    ISolveDataPtr Solve_ObjPick = Object_4->GetObjectCell(ObjectColumn_Material)->CreateSolveType(SolveType_ObjectPickup);
    Solve_ObjPick->_S_ObjectPickup->Object = 3;
    // Set parameters
    Object_4->GetObjectCell(ObjectColumn_Material)->SetSolveData(Solve_ObjPick);
    Object_4->GetObjectCell(ObjectColumn_Par3)->DoubleValue = 1.2;
    Object_4->GetObjectCell(ObjectColumn_Par4)->DoubleValue = 1.2;
    Object_4->GetObjectCell(ObjectColumn_Par5)->DoubleValue = 1.2;
    Object_4->GetObjectCell(ObjectColumn_Par6)->DoubleValue = -1.2;
    Object_4->GetObjectCell(ObjectColumn_Par8)->DoubleValue = 1.2;
    Object_4->GetObjectCell(ObjectColumn_Par9)->DoubleValue = 1.2;
```
 Matlab 
```csharp
    % Set 4th object as Standard Lens
    Object_4 = TheNCE.GetObjectAt(4);
    Typeset_StandardLens = Object_4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.StandardLens);
    Object_4.ChangeType(Typeset_StandardLens);
    % Set positions
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.ZPosition).DoubleValue = 0.9;
    % To set solve for any cell, you need to first create a "ISolveData" by "CreateSolveType()" method.
    % And then assign it to the cell.
    Solve_ObjPick = Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).CreateSolveType(ZOSAPI.Editors.SolveType.ObjectPickup);
    Solve_ObjPick.S_ObjectPickup_.Object = 3;
    % Set parameters
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).SetSolveData(Solve_ObjPick);
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 1.2;
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).DoubleValue = 1.2;
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par5).DoubleValue = 1.2;
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par6).DoubleValue = -1.2;
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par8).DoubleValue = 1.2;
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).DoubleValue = 1.2;
```
 Python 
```csharp
    # Set 4th object as Standard Lens
    Object_4 = TheNCE.GetObjectAt(4)
    Typeset_StandardLens = Object_4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.StandardLens)
    Object_4.ChangeType(Typeset_StandardLens)
    # Set positions
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.ZPosition).DoubleValue = 0.9
    # To set solve for any cell, you need to first create a "ISolveData" by "CreateSolveType()" method.
    # And then assign it to the cell.
    Solve_ObjPick = Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).CreateSolveType(ZOSAPI.Editors.SolveType.ObjectPickup)
    Solve_ObjPick._S_ObjectPickup.Object = 3
    # Set parameters
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).SetSolveData(Solve_ObjPick)
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 1.2
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).DoubleValue = 1.2
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par5).DoubleValue = 1.2
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par6).DoubleValue = -1.2
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par8).DoubleValue = 1.2
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).DoubleValue = 1.2
```

## Classes

* [ZOSAPI::Editors::NCE::IFaceData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_face_data)
* [ZOSAPI::Editors::NCE::IImportanceSamplingSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_importance_sampling_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_importance_sampling_settings)
* [ZOSAPI::Editors::NCE::IIMS\_Birefringent](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___birefringent.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___birefringent)
* [ZOSAPI::Editors::NCE::IIMS\_GRIN](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___g_r_i_n.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___g_r_i_n)
* [ZOSAPI::Editors::NCE::IIMS\_Isotropic](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___isotropic.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_i_m_s___isotropic)
* [ZOSAPI::Editors::NCE::IIndexModelSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_index_model_settings)
* [ZOSAPI::Editors::NCE::INCECADData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data)
* [ZOSAPI::Editors::NCE::INCECoatingPerformanceData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coating_performance_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coating_performance_data)
* [ZOSAPI::Editors::NCE::INCECoatingPerformanceFaceData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coating_performance_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coating_performance_face_data)
* [ZOSAPI::Editors::NCE::INCECoatScatterData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_data)
* [ZOSAPI::Editors::NCE::INCECoatScatterFaceData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data)
* [ZOSAPI::Editors::NCE::INCEDiffractionData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_diffraction_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_diffraction_data)
* [ZOSAPI::Editors::NCE::INCEDrawData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_draw_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_draw_data)
* [ZOSAPI::Editors::NCE::INCEIndexData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_index_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_index_data)
* [ZOSAPI::Editors::NCE::INCERow](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_row)
* [ZOSAPI::Editors::NCE::INCEScatterToData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_scatter_to_data)
* [ZOSAPI::Editors::NCE::INCESourcesData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data)
* [ZOSAPI::Editors::NCE::INCETypeData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_type_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_type_data)
* [ZOSAPI::Editors::NCE::INCEVolumePhysicsData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_volume_physics_data)
* [ZOSAPI::Editors::NCE::INonSeqEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_non_seq_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_non_seq_editor)
* [ZOSAPI::Editors::NCE::IObject](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object)
* [ZOSAPI::Editors::NCE::IObjectAnnularAsphericLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_annular_aspheric_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_annular_aspheric_lens)
* [ZOSAPI::Editors::NCE::IObjectAnnularAxialLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_annular_axial_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_annular_axial_lens)
* [ZOSAPI::Editors::NCE::IObjectAnnularVolume](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_annular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_annular_volume)
* [ZOSAPI::Editors::NCE::IObjectAnnulus](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_annulus.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_annulus)
* [ZOSAPI::Editors::NCE::IObjectArray](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_array.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_array)
* [ZOSAPI::Editors::NCE::IObjectArrayRing](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_array_ring.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_array_ring)
* [ZOSAPI::Editors::NCE::IObjectAsphericSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_aspheric_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_aspheric_surface)
* [ZOSAPI::Editors::NCE::IObjectAsphericSurface2](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_aspheric_surface2.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_aspheric_surface2)
* [ZOSAPI::Editors::NCE::IObjectAxiconSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_axicon_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_axicon_surface)
* [ZOSAPI::Editors::NCE::IObjectBiconicLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_biconic_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_biconic_lens)
* [ZOSAPI::Editors::NCE::IObjectBiconicSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_biconic_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_biconic_surface)
* [ZOSAPI::Editors::NCE::IObjectBiconicZernike](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_biconic_zernike.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_biconic_zernike)
* [ZOSAPI::Editors::NCE::IObjectBiconicZernikeSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_biconic_zernike_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_biconic_zernike_surface)
* [ZOSAPI::Editors::NCE::IObjectBinary1](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_binary1.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_binary1)
* [ZOSAPI::Editors::NCE::IObjectBinary2](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_binary2.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_binary2)
* [ZOSAPI::Editors::NCE::IObjectBinary2A](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_binary2_a.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_binary2_a)
* [ZOSAPI::Editors::NCE::IObjectBoolean](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_boolean.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_boolean)
* [ZOSAPI::Editors::NCE::IObjectBooleanNative](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_boolean_native.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_boolean_native)
* [ZOSAPI::Editors::NCE::IObjectCADAssemblyAutodeskInventor](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_assembly_autodesk_inventor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_assembly_autodesk_inventor)
* [ZOSAPI::Editors::NCE::IObjectCADAssemblyCreoParametric](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_assembly_creo_parametric.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_assembly_creo_parametric)
* [ZOSAPI::Editors::NCE::IObjectCADAssemblySolidWorks](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_assembly_solid_works.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_assembly_solid_works)
* [ZOSAPI::Editors::NCE::IObjectCADPartAutodeskInventor](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_autodesk_inventor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_autodesk_inventor)
* [ZOSAPI::Editors::NCE::IObjectCADPartCreoParametric](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_creo_parametric.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_creo_parametric)
* [ZOSAPI::Editors::NCE::IObjectCADPartSolidWorks](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_solid_works.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_solid_works)
* [ZOSAPI::Editors::NCE::IObjectCADPartSTEPIGESSAT](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_s_t_e_p_i_g_e_s_s_a_t.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_s_t_e_p_i_g_e_s_s_a_t)
* [ZOSAPI::Editors::NCE::IObjectCADPartSTL](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_s_t_l.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_s_t_l)
* [ZOSAPI::Editors::NCE::IObjectCADPartZPD](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_z_p_d.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_a_d_part_z_p_d)
* [ZOSAPI::Editors::NCE::IObjectCompoundLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_compound_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_compound_lens)
* [ZOSAPI::Editors::NCE::IObjectCone](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_cone.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_cone)
* [ZOSAPI::Editors::NCE::IObjectCPC](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_p_c.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_p_c)
* [ZOSAPI::Editors::NCE::IObjectCPCRectangular](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_p_c_rectangular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_c_p_c_rectangular)
* [ZOSAPI::Editors::NCE::IObjectCylinder2Pipe](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_cylinder2_pipe.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_cylinder2_pipe)
* [ZOSAPI::Editors::NCE::IObjectCylinder2Volume](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_cylinder2_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_cylinder2_volume)
* [ZOSAPI::Editors::NCE::IObjectCylinderPipe](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_cylinder_pipe.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_cylinder_pipe)
* [ZOSAPI::Editors::NCE::IObjectCylinderVolume](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_cylinder_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_cylinder_volume)
* [ZOSAPI::Editors::NCE::IObjectDetector](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector)
* [ZOSAPI::Editors::NCE::IObjectDetectorColor](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_color.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_color)
* [ZOSAPI::Editors::NCE::IObjectDetectorPolar](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_polar.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_polar)
* [ZOSAPI::Editors::NCE::IObjectDetectorRectangle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_rectangle)
* [ZOSAPI::Editors::NCE::IObjectDetectorSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_surface)
* [ZOSAPI::Editors::NCE::IObjectDetectorVolume](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_volume)
* [ZOSAPI::Editors::NCE::IObjectDiffractionGrating](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_diffraction_grating.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_diffraction_grating)
* [ZOSAPI::Editors::NCE::IObjectDualBEFSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_dual_b_e_f_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_dual_b_e_f_surface)
* [ZOSAPI::Editors::NCE::IObjectEllipse](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_ellipse.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_ellipse)
* [ZOSAPI::Editors::NCE::IObjectEllipticalVolume](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_elliptical_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_elliptical_volume)
* [ZOSAPI::Editors::NCE::IObjectEvenAsphereLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_even_asphere_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_even_asphere_lens)
* [ZOSAPI::Editors::NCE::IObjectExtendedOddAsphereLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_extended_odd_asphere_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_extended_odd_asphere_lens)
* [ZOSAPI::Editors::NCE::IObjectExtendedPolynomialLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_extended_polynomial_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_extended_polynomial_lens)
* [ZOSAPI::Editors::NCE::IObjectExtendedPolynomialSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_extended_polynomial_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_extended_polynomial_surface)
* [ZOSAPI::Editors::NCE::IObjectExtruded](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_extruded.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_extruded)
* [ZOSAPI::Editors::NCE::IObjectFacetedSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_faceted_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_faceted_surface)
* [ZOSAPI::Editors::NCE::IObjectFreeformZ](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_freeform_z.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_freeform_z)
* [ZOSAPI::Editors::NCE::IObjectFresnel1](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_fresnel1.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_fresnel1)
* [ZOSAPI::Editors::NCE::IObjectFresnel2](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_fresnel2.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_fresnel2)
* [ZOSAPI::Editors::NCE::IObjectGridSagFrontBack](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_grid_sag_front_back.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_grid_sag_front_back)
* [ZOSAPI::Editors::NCE::IObjectGridSagLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_grid_sag_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_grid_sag_lens)
* [ZOSAPI::Editors::NCE::IObjectGridSagSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_grid_sag_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_grid_sag_surface)
* [ZOSAPI::Editors::NCE::IObjectHexagonalLensletArray](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_hexagonal_lenslet_array.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_hexagonal_lenslet_array)
* [ZOSAPI::Editors::NCE::IObjectHologramLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_hologram_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_hologram_lens)
* [ZOSAPI::Editors::NCE::IObjectHologramSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_hologram_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_hologram_surface)
* [ZOSAPI::Editors::NCE::IObjectJonesMatrix](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_jones_matrix.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_jones_matrix)
* [ZOSAPI::Editors::NCE::IObjectLensletArray1](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_lenslet_array1.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_lenslet_array1)
* [ZOSAPI::Editors::NCE::IObjectLensletArray2](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_lenslet_array2.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_lenslet_array2)
* [ZOSAPI::Editors::NCE::IObjectMEMS](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_m_e_m_s.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_m_e_m_s)
* [ZOSAPI::Editors::NCE::IObjectMuellerMatrix](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_mueller_matrix.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_mueller_matrix)
* [ZOSAPI::Editors::NCE::IObjectNullObject](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_null_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_null_object)
* [ZOSAPI::Editors::NCE::IObjectOddAsphereLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_odd_asphere_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_odd_asphere_lens)
* [ZOSAPI::Editors::NCE::IObjectOffAxisMirror](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_off_axis_mirror.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_off_axis_mirror)
* [ZOSAPI::Editors::NCE::IObjectParaxialLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_paraxial_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_paraxial_lens)
* [ZOSAPI::Editors::NCE::IObjectPolygon](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_polygon.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_polygon)
* [ZOSAPI::Editors::NCE::IObjectQTypeAsphereSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_q_type_asphere_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_q_type_asphere_surface)
* [ZOSAPI::Editors::NCE::IObjectRayRotator](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_ray_rotator.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_ray_rotator)
* [ZOSAPI::Editors::NCE::IObjectRectangle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangle)
* [ZOSAPI::Editors::NCE::IObjectRectangularCorner](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_corner.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_corner)
* [ZOSAPI::Editors::NCE::IObjectRectangularPipe](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_pipe.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_pipe)
* [ZOSAPI::Editors::NCE::IObjectRectangularPipeGrating](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_pipe_grating.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_pipe_grating)
* [ZOSAPI::Editors::NCE::IObjectRectangularRoof](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_roof.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_roof)
* [ZOSAPI::Editors::NCE::IObjectRectangularTorusSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_torus_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_torus_surface)
* [ZOSAPI::Editors::NCE::IObjectRectangularTorusVolume](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_torus_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_torus_volume)
* [ZOSAPI::Editors::NCE::IObjectRectangularVolume](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume)
* [ZOSAPI::Editors::NCE::IObjectRectangularVolumeGrating](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_grating.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_rectangular_volume_grating)
* [ZOSAPI::Editors::NCE::IObjectReverseRadianceDetector](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_reverse_radiance_detector.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_reverse_radiance_detector)
* [ZOSAPI::Editors::NCE::IObjectReverseRadianceTarget](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_reverse_radiance_target.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_reverse_radiance_target)
* [ZOSAPI::Editors::NCE::IObjectScatteringSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings)
* [ZOSAPI::Editors::NCE::IObjectSlide](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_slide.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_slide)
* [ZOSAPI::Editors::NCE::IObjectSourceDiffractive](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_diffractive.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_diffractive)
* [ZOSAPI::Editors::NCE::IObjectSourceDiode](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_diode.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_diode)
* [ZOSAPI::Editors::NCE::IObjectSourceDLL](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_d_l_l.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_d_l_l)
* [ZOSAPI::Editors::NCE::IObjectSourceEllipse](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_ellipse.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_ellipse)
* [ZOSAPI::Editors::NCE::IObjectSourceEULUMDATFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_e_u_l_u_m_d_a_t_file.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_e_u_l_u_m_d_a_t_file)
* [ZOSAPI::Editors::NCE::IObjectSourceFilament](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_filament.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_filament)
* [ZOSAPI::Editors::NCE::IObjectSourceFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_file.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_file)
* [ZOSAPI::Editors::NCE::IObjectSourceGaussian](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_gaussian.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_gaussian)
* [ZOSAPI::Editors::NCE::IObjectSourceIESNAFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_i_e_s_n_a_file.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_i_e_s_n_a_file)
* [ZOSAPI::Editors::NCE::IObjectSourceImported](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_imported.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_imported)
* [ZOSAPI::Editors::NCE::IObjectSourceObject](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_object)
* [ZOSAPI::Editors::NCE::IObjectSourcePoint](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_point.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_point)
* [ZOSAPI::Editors::NCE::IObjectSourceRadial](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_radial.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_radial)
* [ZOSAPI::Editors::NCE::IObjectSourceRay](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_ray.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_ray)
* [ZOSAPI::Editors::NCE::IObjectSourceRectangle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_rectangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_rectangle)
* [ZOSAPI::Editors::NCE::IObjectSources](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sources)
* [ZOSAPI::Editors::NCE::IObjectSourceTube](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_tube.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_tube)
* [ZOSAPI::Editors::NCE::IObjectSourceTwoAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_two_angle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_two_angle)
* [ZOSAPI::Editors::NCE::IObjectSourceVolumeCylindrical](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_volume_cylindrical.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_volume_cylindrical)
* [ZOSAPI::Editors::NCE::IObjectSourceVolumeElliptical](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_volume_elliptical.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_volume_elliptical)
* [ZOSAPI::Editors::NCE::IObjectSourceVolumeRectangular](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_volume_rectangular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_source_volume_rectangular)
* [ZOSAPI::Editors::NCE::IObjectSphere](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sphere.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_sphere)
* [ZOSAPI::Editors::NCE::IObjectStandardLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_standard_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_standard_lens)
* [ZOSAPI::Editors::NCE::IObjectStandardSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_standard_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_standard_surface)
* [ZOSAPI::Editors::NCE::IObjectStopElliptical](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_stop_elliptical.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_stop_elliptical)
* [ZOSAPI::Editors::NCE::IObjectStopRectangular](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_stop_rectangular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_stop_rectangular)
* [ZOSAPI::Editors::NCE::IObjectSwept](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_swept.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_swept)
* [ZOSAPI::Editors::NCE::IObjectTabulatedFactedRadial](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_tabulated_facted_radial.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_tabulated_facted_radial)
* [ZOSAPI::Editors::NCE::IObjectTabulatedFactedToroid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_tabulated_facted_toroid.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_tabulated_facted_toroid)
* [ZOSAPI::Editors::NCE::IObjectTabulatedFrenselRadial](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_tabulated_frensel_radial.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_tabulated_frensel_radial)
* [ZOSAPI::Editors::NCE::IObjectToroidalHologram](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_toroidal_hologram.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_toroidal_hologram)
* [ZOSAPI::Editors::NCE::IObjectToroidalLens](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_toroidal_lens.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_toroidal_lens)
* [ZOSAPI::Editors::NCE::IObjectToroidalSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_toroidal_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_toroidal_surface)
* [ZOSAPI::Editors::NCE::IObjectToroidalSurfaceOddASphere](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_toroidal_surface_odd_a_sphere.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_toroidal_surface_odd_a_sphere)
* [ZOSAPI::Editors::NCE::IObjectTorusSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_torus_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_torus_surface)
* [ZOSAPI::Editors::NCE::IObjectTorusVolume](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_torus_volume.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_torus_volume)
* [ZOSAPI::Editors::NCE::IObjectTriangle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_triangle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_triangle)
* [ZOSAPI::Editors::NCE::IObjectTriangularCorner](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_triangular_corner.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_triangular_corner)
* [ZOSAPI::Editors::NCE::IObjectTypeSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings)
* [ZOSAPI::Editors::NCE::IObjectUserDefinedObject](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_user_defined_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_user_defined_object)
* [ZOSAPI::Editors::NCE::IObjectWolterSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_wolter_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_wolter_surface)
* [ZOSAPI::Editors::NCE::IObjectXYPolynomial](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_x_y_polynomial.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_x_y_polynomial)
* [ZOSAPI::Editors::NCE::IObjectZernikeSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_zernike_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_zernike_surface)
* [ZOSAPI::Editors::NCE::IOSS\_ABg](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg)
* [ZOSAPI::Editors::NCE::IOSS\_ABgFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___a_bg_file)
* [ZOSAPI::Editors::NCE::IOSS\_BSDF](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___b_s_d_f.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___b_s_d_f)
* [ZOSAPI::Editors::NCE::IOSS\_Gaussian](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___gaussian.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___gaussian)
* [ZOSAPI::Editors::NCE::IOSS\_ISScatterCatalog](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___i_s_scatter_catalog.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___i_s_scatter_catalog)
* [ZOSAPI::Editors::NCE::IOSS\_Lambertian](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___lambertian.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___lambertian)
* [ZOSAPI::Editors::NCE::IOSS\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___none.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___none)
* [ZOSAPI::Editors::NCE::IOSS\_User](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___user.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_o_s_s___user)
* [ZOSAPI::Editors::NCE::ISCS\_BlackBodySpectrum](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum)
* [ZOSAPI::Editors::NCE::ISCS\_CIE1931Chromaticity](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___c_i_e1931_chromaticity.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___c_i_e1931_chromaticity)
* [ZOSAPI::Editors::NCE::ISCS\_CIE1931RGB](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___c_i_e1931_r_g_b.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___c_i_e1931_r_g_b)
* [ZOSAPI::Editors::NCE::ISCS\_CIE1931Tristimulus](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___c_i_e1931_tristimulus.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___c_i_e1931_tristimulus)
* [ZOSAPI::Editors::NCE::ISCS\_CIE1976](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___c_i_e1976.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___c_i_e1976)
* [ZOSAPI::Editors::NCE::ISCS\_ColorTemperature](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___color_temperature.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___color_temperature)
* [ZOSAPI::Editors::NCE::ISCS\_D65White](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___d65_white.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___d65_white)
* [ZOSAPI::Editors::NCE::ISCS\_SpectrumFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___spectrum_file.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___spectrum_file)
* [ZOSAPI::Editors::NCE::ISCS\_SystemWavelengths](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___system_wavelengths.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___system_wavelengths)
* [ZOSAPI::Editors::NCE::ISCS\_UniformPowerSpectrum](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___uniform_power_spectrum.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___uniform_power_spectrum)
* [ZOSAPI::Editors::NCE::ISourceColorSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings)
* [ZOSAPI::Editors::NCE::IVMPS\_AngleScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___angle_scattering)
* [ZOSAPI::Editors::NCE::IVMPS\_DLLDefinedScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___d_l_l_defined_scattering.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___d_l_l_defined_scattering)
* [ZOSAPI::Editors::NCE::IVMPS\_PhotoluminscenceModel](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model)
* [ZOSAPI::Editors::NCE::IVolumePhysicsModelSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings)
* [ZOSAPI::Editors::NCE::IVPMS\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_p_m_s___none.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_p_m_s___none)

## Enumeration types

### Enumeration type ObjectType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285"></a>

![][public]

**Definition**:


```csharp
enum ObjectType {
  AnnularAsphericLens,
  AnnularAxialLens,
  AnnularVolume,
  Annulus,
  Array,
  ArrayRing,
  AsphericSurface,
  AsphericSurface2,
  AxiconSurface,
  BiconicLens,
  BiconicSurface,
  BiconicZernike,
  BiconicZernikeSurface,
  Binary1,
  Binary2,
  Binary2A,
  Boolean,
  BooleanCAD = Boolean,
  CADAssemblyAutodeskInventor,
  CADAssemblyCreoParametric,
  CADAssemblySolidWorks,
  CADPartAutodeskInventor,
  CADPartCreoParametric,
  CADPartSolidWorks,
  CADPartSTEPIGESSAT,
  CADPartSTL,
  CADPartZPD,
  Cone,
  CPC,
  CPCRectangular,
  CylinderPipe,
  CylinderVolume,
  Cylinder2Pipe,
  Cylinder2Volume,
  DetectorColor,
  DetectorPolar,
  DetectorRectangle,
  DetectorSurface,
  DetectorVolume,
  DiffractionGrating,
  DualBEFSurface,
  Ellipse,
  EllipticalVolume,
  EvenAsphereLens,
  ExtendedOddAsphereLens,
  ExtendedPolynomialLens,
  ExtendedPolynomialSurface,
  Extruded,
  FacetedSurface,
  FreeformZ,
  Fresnel1,
  Fresnel2,
  GridSagLens,
  GridSagSurface,
  GridSagFrontBack,
  HexagonalLensletArray,
  HologramLens,
  HologramSurface,
  JonesMatrix,
  LensletArray1,
  LensletArray2,
  MEMS,
  NullObject,
  OddAsphereLens,
  ParaxialLens,
  PolygonObject,
  RayRotator,
  RectangularCorner,
  Rectangle,
  RectangularPipe,
  RectangularPipeGrating,
  RectangularRoof,
  RectangularTorusSurface,
  RectangularTorusVolume,
  RectangularVolume,
  RectangularVolumeGrating,
  ReverseRadianceDetector,
  ReverseRadianceTarget,
  Slide,
  SourceDiffractive,
  SourceDiode,
  SourceDLL,
  SourceEllipse,
  SourceEULUMDATFile,
  SourceFilament,
  SourceFile,
  SourceGaussian,
  SourceIESNAFile,
  SourceImported,
  SourceObject,
  SourcePoint,
  SourceRadial,
  SourceRay,
  SourceRectangle,
  SourceTube,
  SourceTwoAngle,
  SourceVolumeCylindrical,
  SourceVolumeElliptical,
  SourceVolumeRectangular,
  Sphere,
  StandardLens,
  StandardSurface,
  Swept,
  TabulatedFactedRadial,
  TabulatedFactedToroid,
  TabulatedFrenselRadial,
  ToroidalHologram,
  ToroidalLens,
  ToroidalSurface,
  ToroidalSurfaceOddASphere,
  TorusSurface,
  TorusVolume,
  TriangularCorner,
  Triangle,
  UserDefinedObject,
  WolterSurface,
  ZernikeSurface,
  BooleanNative,
  CompoundLens,
  QTypeAsphereSurface,
  OffAxisMirror,
  StopElliptical,
  StopRectangular,
  MuellerMatrix
}
```


All supported non-sequential object types.

Usage (see [Example 17](page_ex17.md#page_ex17) for a full sample)


C# 
```csharp
            //Source point
            IObjectTypeSettings oType_1 = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourcePoint);
            Object_1.ChangeType(oType_1);
            IObjectSourcePoint Source1_data = Object_1.ObjectData as IObjectSourcePoint;
            Source1_data.NumberOfLayoutRays = 3;
            Source1_data.NumberOfAnalysisRays = 1000000;
```
 C++ 
```csharp
    //Source point
    IObjectTypeSettingsPtr oType_1 = Object_1->GetObjectTypeSettings(ObjectType_SourcePoint);
    Object_1->ChangeType(oType_1);
    IObjectSourcePointPtr Source1_data = Object_1->ObjectData;
    // Proterties NumberOfLayoutRays and NumberOfAnalysisRays belong to base interface IObjectSources. To use these properties, cast to IObjectSources first.
    IObjectSourcesPtr caseIObjSources = Source1_data;
    caseIObjSources->NumberOfLayoutRays = 3;
    caseIObjSources->NumberOfAnalysisRays = 1000000;
```
 Matlab 
```csharp
    % Source point
    oType_1 = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourcePoint);
    Object_1.ChangeType(oType_1);
    Source1_data = Object_1.ObjectData;
    Source1_data.NumberOfLayoutRays = 3;
    Source1_data.NumberOfAnalysisRays = 1000000;
```
 Python 
```csharp
    # Source point
    oType_1 = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourcePoint)
    Object_1.ChangeType(oType_1)
    Source1_data = Object_1.ObjectData
    Source1_data.NumberOfLayoutRays = 3
    Source1_data.NumberOfAnalysisRays = 1000000
```


#### Enumerator AnnularAsphericLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a6874b3f59b7e47eac4df0a6c1eda84dd"></a>


#### Enumerator AnnularAxialLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ac5ee2a524ccfd3604e5892ec5afde865"></a>


#### Enumerator AnnularVolume

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a2107148a0d16d605410e3e704077d39e"></a>


#### Enumerator Annulus

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ab6187d85dc96b8264824180b1af32391"></a>


#### Enumerator Array

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a4410ec34d9e6c1a68100ca0ce033fb17"></a>


#### Enumerator ArrayRing

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a12a067ca3d4c14f83a9f3d626558a43d"></a>


#### Enumerator AsphericSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ae526dec13db1f0d1c23c9eda7ce159c6"></a>


#### Enumerator AsphericSurface2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aa11257f1d0da4621606d416404333c04"></a>


#### Enumerator AxiconSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a6e97ac4958190eee2ce074912aa7769f"></a>


#### Enumerator BiconicLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a882129d729f1e82e0017946606eae63e"></a>


#### Enumerator BiconicSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ac36b7bc77cb2d547045a0c33be0682d7"></a>


#### Enumerator BiconicZernike

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a93ba6293b4fe1ab578edcc7e886a9739"></a>


#### Enumerator BiconicZernikeSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a6a05b1d0103a87585027d92852dec286"></a>


#### Enumerator Binary1

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a88d7b7c4e9bdf043d10f03b9b9bc5b65"></a>


#### Enumerator Binary2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aaa3f8a656316c49eec8c5f25f462b107"></a>


#### Enumerator Binary2A

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285acb472b68d25dd8e918d2904983ab3b24"></a>


#### Enumerator Boolean

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a27226c864bac7454a8504f8edb15d95b"></a>


#### Enumerator BooleanCAD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a56fbeb8ee38f234a113d408121d7ad56"></a>


#### Enumerator CADAssemblyAutodeskInventor

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aa30a687c062dd62f00d90285e6cb560a"></a>


#### Enumerator CADAssemblyCreoParametric

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a2cc40d0ab49062765f046f2f149bbcf5"></a>


#### Enumerator CADAssemblySolidWorks

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a91c5629e46d9284649a9765cc58c6c4f"></a>


#### Enumerator CADPartAutodeskInventor

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a7e64486fcab51afc538c0ac911d6c22c"></a>


#### Enumerator CADPartCreoParametric

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a42cac482db5c08e97a432fdcc63c3373"></a>


#### Enumerator CADPartSolidWorks

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aabba90e2966c68f4a3ed9134df22dc0f"></a>


#### Enumerator CADPartSTEPIGESSAT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aaa372674169821e000cf269d3135c738"></a>


#### Enumerator CADPartSTL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ad5d8fcc6e19193ff811df46d93181b78"></a>


#### Enumerator CADPartZPD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a47121e250ca698be229319a859e95ecb"></a>


#### Enumerator Cone

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285acd2c8bc6e5f1ea17c918ccaf89660104"></a>


#### Enumerator CPC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aae5b813b9b18f8760d5a612341a09f67"></a>


#### Enumerator CPCRectangular

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a380042fc0219ea2b4a5647853af76ebf"></a>


#### Enumerator CylinderPipe

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a4d743636b439e342cc0afc088151e1a4"></a>


#### Enumerator CylinderVolume

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285abe3fb81c8b7cef67e3cfca0b399b59ea"></a>


#### Enumerator Cylinder2Pipe

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ac66837981c06df70d3b10baefdf268f8"></a>


#### Enumerator Cylinder2Volume

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ae574e0cd031e7182fbf7df6d93f32acf"></a>


#### Enumerator DetectorColor

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a9cd1beba1e6192963d0881c514a1234a"></a>


#### Enumerator DetectorPolar

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a139b274362a21679f442de10127b25ca"></a>


#### Enumerator DetectorRectangle

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ace198b978560dba19018980d9fd5bbd2"></a>


#### Enumerator DetectorSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a38f4602fd7ac687f903ea588a5680b2e"></a>


#### Enumerator DetectorVolume

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a2bcd6e2e15db1948e34f880b4637fcdc"></a>


#### Enumerator DiffractionGrating

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285af57d8be7c86bdb465d4355d05dd3606e"></a>


#### Enumerator DualBEFSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a4db3944e7e53139fa6f305459c453254"></a>


#### Enumerator Ellipse

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a119518c2134c46108179369f0ce81fa2"></a>


#### Enumerator EllipticalVolume

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a1d3a175b082ac1a641375c58d49fd981"></a>


#### Enumerator EvenAsphereLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a0bade071e81468648a3674629e4e0b01"></a>


#### Enumerator ExtendedOddAsphereLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a38ad139f00490d26a5d00138c2c4d9bb"></a>


#### Enumerator ExtendedPolynomialLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a5d6091d36156824238e3d495470dfa09"></a>


#### Enumerator ExtendedPolynomialSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a99822841cecb52f1956eb265733b84e6"></a>


#### Enumerator Extruded

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a538b4d8a7ce01c1b8f9a4eff3c4c4160"></a>


#### Enumerator FacetedSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aaf1017bc0c5a0b403d44cbb7c7ca5ccf"></a>


#### Enumerator FreeformZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a3ac10030040691b46279597873f02c4b"></a>


#### Enumerator Fresnel1

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a4d530754d0cf1b811b5c36d981478117"></a>


#### Enumerator Fresnel2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a7a10934247733365f0d6aadbe9b2731a"></a>


#### Enumerator GridSagLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a168de593567ce96fdee49852ac91d580"></a>


#### Enumerator GridSagSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a824fd21f085d6e6e721444a4b4b66f81"></a>


#### Enumerator GridSagFrontBack

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a181dbaee811488b77b830777285971bf"></a>


#### Enumerator HexagonalLensletArray

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aff7e278504fa0696d11bdd546844e152"></a>


#### Enumerator HologramLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ae9e770b44b446b98bd95a3c69b3b6820"></a>


#### Enumerator HologramSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a26c08753c1c6107884927793eb572f31"></a>


#### Enumerator JonesMatrix

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a244d3569ad1d8fdfdc3a723569009174"></a>


#### Enumerator LensletArray1

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a19da7d98e4e64d78ab4b04acaea5ab21"></a>


#### Enumerator LensletArray2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a6c86e64e7e20a741f63f7f718982e3f1"></a>


#### Enumerator MEMS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a22d260525c8310a70c5850b70ef4cfa9"></a>


#### Enumerator NullObject

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285af1fefca00c2334eec3a054093117e38d"></a>


#### Enumerator OddAsphereLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a0ba5cb9b94f3af1fc6ea273e8afeec4c"></a>


#### Enumerator ParaxialLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a273e83b3b4d377a6a3f8227c83cba22d"></a>


#### Enumerator PolygonObject

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a9772c88a6b9c9a1b78275f9b5d3bebd1"></a>


#### Enumerator RayRotator

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a21e74afc11a3c91273b461d30764d164"></a>


#### Enumerator RectangularCorner

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a66831bc412d14ff93c35094c35907f42"></a>


#### Enumerator Rectangle

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ace9291906a4c3b042650b70d7f3b152e"></a>


#### Enumerator RectangularPipe

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a9645ba59e43df90a0ec4824ef7882fb9"></a>


#### Enumerator RectangularPipeGrating

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a86a425bf0b3b718685b5eef9e8ff02c9"></a>


#### Enumerator RectangularRoof

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285acb80fe826a2cb7799c238ac28b6bf35e"></a>


#### Enumerator RectangularTorusSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a8ae60ef22b2a6a9210eb31a72a3b8a1e"></a>


#### Enumerator RectangularTorusVolume

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ab8b6a266ec1771da055e19be1b4040d6"></a>


#### Enumerator RectangularVolume

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ae50cd46745ec3bc5f9df74045c4f8de3"></a>


#### Enumerator RectangularVolumeGrating

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285acefe175fa74b5bb5119030da37340da1"></a>


#### Enumerator ReverseRadianceDetector

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a684c7ac7b3404ec6a07a9349e4068a59"></a>


#### Enumerator ReverseRadianceTarget

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a8f032db03d6e2201e62ca9be7b542092"></a>


#### Enumerator Slide

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a6160a53ece50ce6d4f5ef4452549835e"></a>


#### Enumerator SourceDiffractive

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a5aa77560910cba972d14e6f46cde4c4e"></a>


#### Enumerator SourceDiode

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a090952caff01e26c6e2aa984b54d4d1e"></a>


#### Enumerator SourceDLL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a0944ea7fdbb0ee77893a376031ec299c"></a>


#### Enumerator SourceEllipse

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aacf9931e4d43cf24153dce0b85c7fdc6"></a>


#### Enumerator SourceEULUMDATFile

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ab25ceb96e8fafb263547765d33a4a673"></a>


#### Enumerator SourceFilament

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a5a769dbcb9fe99da225286ff45555e76"></a>


#### Enumerator SourceFile

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aad9c9150641994c9937a1bce42884a31"></a>


#### Enumerator SourceGaussian

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285adba1b3bd0c6390942b34e11b9c43edb6"></a>


#### Enumerator SourceIESNAFile

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a349683e2f0ef5fcd3c75ae8c3b9047c0"></a>


#### Enumerator SourceImported

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aaea4ffa086a9eadce35d93407e544b0b"></a>


#### Enumerator SourceObject

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ae64e08e4b0e45d43de858dc200c9d4ed"></a>


#### Enumerator SourcePoint

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285afff5890f0ac191b2a70ebd427668c39a"></a>


#### Enumerator SourceRadial

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a4f8539217d252e414662a1068a26668e"></a>


#### Enumerator SourceRay

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a650d801712cd0e835288d803c36f80b5"></a>


#### Enumerator SourceRectangle

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285afd7ea03a5ce13c5952bd3a926c1ca322"></a>


#### Enumerator SourceTube

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a77b33b5ae531efabf39ae107b6250700"></a>


#### Enumerator SourceTwoAngle

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285af58e814f6063dccae31084c7f7c86aec"></a>


#### Enumerator SourceVolumeCylindrical

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a94ebe52277dfd0bfb0d1dc773afcccba"></a>


#### Enumerator SourceVolumeElliptical

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a100fdc8200f0c873b36ed7c964731074"></a>


#### Enumerator SourceVolumeRectangular

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a6aa18685aeb6a32b88836eff38b3ac15"></a>


#### Enumerator Sphere

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ab7095f057db3fefa7325ad93a04e14fd"></a>


#### Enumerator StandardLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aebacc1121b788eda1547a151118977d6"></a>


#### Enumerator StandardSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a8e6f42293271e7f967489c5cbf7be5cf"></a>


#### Enumerator Swept

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285aa0346c10a0e7eb154272f6eca82b7f16"></a>


#### Enumerator TabulatedFactedRadial

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a7984bdca8c97447228b22569be9bc2c7"></a>


#### Enumerator TabulatedFactedToroid

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a3c845a1ac51ca351069ff95755a49724"></a>


#### Enumerator TabulatedFrenselRadial

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ad6b3ad097d95b76df26f359a6e7550f2"></a>


#### Enumerator ToroidalHologram

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a51817d82f694a17654d138adef5b14e7"></a>


#### Enumerator ToroidalLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a58ee058417cafb3e76b8cd047db69772"></a>


#### Enumerator ToroidalSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a40d25df05c47d5a0d4a8f11e6dab28a5"></a>


#### Enumerator ToroidalSurfaceOddASphere

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a86f8f68f414aede8a80d7e89248956dc"></a>


#### Enumerator TorusSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a35f94ac38970fe1b7bacb4b8e11b12ed"></a>


#### Enumerator TorusVolume

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a8bb9d1c6ece122488cbfc5ea219666dc"></a>


#### Enumerator TriangularCorner

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a00496d1934f775be1421336bb9d90b29"></a>


#### Enumerator Triangle

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a5e5500cb2b82eb72d550de644bd1b64b"></a>


#### Enumerator UserDefinedObject

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ab9571383bd7a4d56b8a99c2059aec685"></a>


#### Enumerator WolterSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a11ad5003a49047dbbe12a7cd37815260"></a>


#### Enumerator ZernikeSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285af07f4ede842c2d40893c433639acec43"></a>


#### Enumerator BooleanNative

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a422e6e59e499a1a94c5dba50adc44f0f"></a>


#### Enumerator CompoundLens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285acb5e10347d803a7e3ae31e3452d09c01"></a>


#### Enumerator QTypeAsphereSurface

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a708fd1608f051093f4670756e80e4897"></a>


#### Enumerator OffAxisMirror

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a6679404f8062041cc79142f6928d831b"></a>


#### Enumerator StopElliptical

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285ad000ece58d64c1abc29a0797403f224e"></a>


#### Enumerator StopRectangular

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a68401c857f8adba8cfc5a80ed50a6ffe"></a>


#### Enumerator MuellerMatrix

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285a5a322966691a1250b0ad92cf84eaf679"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ObjectType"}]}`
-->

### Enumeration type ObjectColumn

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179"></a>

![][public]

**Definition**:


```csharp
enum ObjectColumn {
  Comment = 1,
  RefObject = 2,
  InsideOf = 3,
  XPosition = 4,
  YPosition = 5,
  ZPosition = 6,
  TiltX = 7,
  TiltY = 8,
  TiltZ = 9,
  Material = 10,
  Par1 = 11,
  Par2 = 12,
  Par3 = 13,
  Par4 = 14,
  Par5 = 15,
  Par6 = 16,
  Par7 = 17,
  Par8 = 18,
  Par9 = 19,
  Par10 = 20,
  Par11 = 21,
  Par12 = 22,
  Par13 = 23,
  Par14 = 24,
  Par15 = 25,
  Par16 = 26,
  Par17 = 27,
  Par18 = 28,
  Par19 = 29,
  Par20 = 30,
  Par21 = 31,
  Par22 = 32,
  Par23 = 33,
  Par24 = 34,
  Par25 = 35,
  Par26 = 36,
  Par27 = 37,
  Par28 = 38,
  Par29 = 39,
  Par30 = 40,
  Par31 = 41,
  Par32 = 42,
  Par33 = 43,
  Par34 = 44,
  Par35 = 45,
  Par36 = 46,
  Par37 = 47,
  Par38 = 48,
  Par39 = 49,
  Par40 = 50,
  Par41 = 51,
  Par42 = 52,
  Par43 = 53,
  Par44 = 54,
  Par45 = 55,
  Par46 = 56,
  Par47 = 57,
  Par48 = 58,
  Par49 = 59,
  Par50 = 60,
  Par51 = 61,
  Par52 = 62,
  Par53 = 63,
  Par54 = 64,
  Par55 = 65,
  Par56 = 66,
  Par57 = 67,
  Par58 = 68,
  Par59 = 69,
  Par60 = 70,
  Par61 = 71,
  Par62 = 72,
  Par63 = 73,
  Par64 = 74,
  Par65 = 75,
  Par66 = 76,
  Par67 = 77,
  Par68 = 78,
  Par69 = 79,
  Par70 = 80,
  Par71 = 81,
  Par72 = 82,
  Par73 = 83,
  Par74 = 84,
  Par75 = 85,
  Par76 = 86,
  Par77 = 87,
  Par78 = 88,
  Par79 = 89,
  Par80 = 90,
  Par81 = 91,
  Par82 = 92,
  Par83 = 93,
  Par84 = 94,
  Par85 = 95,
  Par86 = 96,
  Par87 = 97,
  Par88 = 98,
  Par89 = 99,
  Par90 = 100,
  Par91 = 101,
  Par92 = 102,
  Par93 = 103,
  Par94 = 104,
  Par95 = 105,
  Par96 = 106,
  Par97 = 107,
  Par98 = 108,
  Par99 = 109,
  Par100 = 110,
  Par101 = 111,
  Par102 = 112,
  Par103 = 113,
  Par104 = 114,
  Par105 = 115,
  Par106 = 116,
  Par107 = 117,
  Par108 = 118,
  Par109 = 119,
  Par110 = 120,
  Par111 = 121,
  Par112 = 122,
  Par113 = 123,
  Par114 = 124,
  Par115 = 125,
  Par116 = 126,
  Par117 = 127,
  Par118 = 128,
  Par119 = 129,
  Par120 = 130,
  Par121 = 131,
  Par122 = 132,
  Par123 = 133,
  Par124 = 134,
  Par125 = 135,
  Par126 = 136,
  Par127 = 137,
  Par128 = 138,
  Par129 = 139,
  Par130 = 140,
  Par131 = 141,
  Par132 = 142,
  Par133 = 143,
  Par134 = 144,
  Par135 = 145,
  Par136 = 146,
  Par137 = 147,
  Par138 = 148,
  Par139 = 149,
  Par140 = 150,
  Par141 = 151,
  Par142 = 152,
  Par143 = 153,
  Par144 = 154,
  Par145 = 155,
  Par146 = 156,
  Par147 = 157,
  Par148 = 158,
  Par149 = 159,
  Par150 = 160,
  Par151 = 161,
  Par152 = 162,
  Par153 = 163,
  Par154 = 164,
  Par155 = 165,
  Par156 = 166,
  Par157 = 167,
  Par158 = 168,
  Par159 = 169,
  Par160 = 170,
  Par161 = 171,
  Par162 = 172,
  Par163 = 173,
  Par164 = 174,
  Par165 = 175,
  Par166 = 176,
  Par167 = 177,
  Par168 = 178,
  Par169 = 179,
  Par170 = 180,
  Par171 = 181,
  Par172 = 182,
  Par173 = 183,
  Par174 = 184,
  Par175 = 185,
  Par176 = 186,
  Par177 = 187,
  Par178 = 188,
  Par179 = 189,
  Par180 = 190,
  Par181 = 191,
  Par182 = 192,
  Par183 = 193,
  Par184 = 194,
  Par185 = 195,
  Par186 = 196,
  Par187 = 197,
  Par188 = 198,
  Par189 = 199,
  Par190 = 200,
  Par191 = 201,
  Par192 = 202,
  Par193 = 203,
  Par194 = 204,
  Par195 = 205,
  Par196 = 206,
  Par197 = 207,
  Par198 = 208,
  Par199 = 209,
  Par200 = 210,
  Par201 = 211,
  Par202 = 212,
  Par203 = 213,
  Par204 = 214,
  Par205 = 215,
  Par206 = 216,
  Par207 = 217,
  Par208 = 218,
  Par209 = 219,
  Par210 = 220,
  Par211 = 221,
  Par212 = 222,
  Par213 = 223,
  Par214 = 224,
  Par215 = 225,
  Par216 = 226,
  Par217 = 227,
  Par218 = 228,
  Par219 = 229,
  Par220 = 230,
  Par221 = 231,
  Par222 = 232,
  Par223 = 233,
  Par224 = 234,
  Par225 = 235,
  Par226 = 236,
  Par227 = 237,
  Par228 = 238,
  Par229 = 239,
  Par230 = 240,
  Par231 = 241,
  Par232 = 242,
  Par233 = 243,
  Par234 = 244,
  Par235 = 245,
  Par236 = 246,
  Par237 = 247,
  Par238 = 248,
  Par239 = 249,
  Par240 = 250,
  Par241 = 251,
  Par242 = 252,
  Par243 = 253,
  Par244 = 254,
  Par245 = 255,
  Par246 = 256,
  Par247 = 257,
  Par248 = 258,
  Par249 = 259,
  Par250 = 260
}
```


Usage (see [Example 24](page_ex24.md#page_ex24) for a full sample)


C# 
```csharp
            // Sets layout rays based on parameter number
            TheNCE.GetObjectAt(1).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 100;
            // Sets analysis rays based on object data column
            ZOSAPI.Editors.NCE.IObjectSourceEllipse sourcedata = o1.ObjectData as ZOSAPI.Editors.NCE.IObjectSourceEllipse;
            sourcedata.NumberOfAnalysisRays = (int)1E6;
```
 C++ 
```csharp
    // Sets layout rays based on parameter number
    TheNCE->GetObjectAt(1)->GetObjectCell(ObjectColumn_Par1)->IntegerValue = 100;
    // Sets analysis rays based on object data column
    IObjectSourcesPtr sourcedata = o1->ObjectData;
    sourcedata->NumberOfAnalysisRays = (int)1E6;
```
 Matlab 
```csharp
    % Sets layout rays based on parameter number
    TheNCE.GetObjectAt(1).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 100;
    % Sets analysis rays based on object data column
    TheNCE.GetObjectAt(1).ObjectData.NumberOfAnalysisRays = 1E6;
```
 Python 
```csharp
    # Sets layout rays based on parameter number
    TheNCE.GetObjectAt(1).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 100
    # Sets analysis rays based on object data column
    o1.ObjectData.NumberOfAnalysisRays = 1E6
```


#### Enumerator Comment

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0be8406951cdfda82f00f79328cf4efc"></a>


#### Enumerator RefObject

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ae26b4d18fc6e07091781404f741a2a75"></a>


#### Enumerator InsideOf

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a475972c1714c08215ccff79d2b8387df"></a>


#### Enumerator XPosition

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a221df3e83b79c3cf5951861a91dac728"></a>


#### Enumerator YPosition

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aca91441f9379a6599b8859aadf11d4fb"></a>


#### Enumerator ZPosition

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a9531c6985012b6e5a7870265aaef2a71"></a>


#### Enumerator TiltX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a53c86adf2918f4231ca2987b2651c62e"></a>


#### Enumerator TiltY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aa00cfefce92498c20e66c43084d4b0c2"></a>


#### Enumerator TiltZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3a430af6bcb4c5f677e9d6b89fe521a6"></a>


#### Enumerator Material

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ad92a8333dd3ccb895cc65f7455b71206"></a>


#### Enumerator Par1

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aaf4aa595dbdcbbcda709bf1be9e9a5a3"></a>


#### Enumerator Par2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3cd3ecca66ca102bae0b2e046140f651"></a>


#### Enumerator Par3

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac46a9fd72e133c39abb053aeb78b7d8b"></a>


#### Enumerator Par4

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ad0b5d6a68bb80b043aa90d5fd834c99e"></a>


#### Enumerator Par5

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0cc733c1ca529542de87c13af17f8e9b"></a>


#### Enumerator Par6

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a71953e458ed78ea888ee73cce8bcae7d"></a>


#### Enumerator Par7

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6a7e1ba57af9970cfd13bc0e28fccb10"></a>


#### Enumerator Par8

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ae7dacc8dbb96781deaca4b4976d1cb44"></a>


#### Enumerator Par9

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a164108ef6bbcd6dfccda2606230e8a9e"></a>


#### Enumerator Par10

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ae3ff7fccc44daba40d4f7bae6770c328"></a>


#### Enumerator Par11

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a74201315baabd06c6dc0c158eb46d34f"></a>


#### Enumerator Par12

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a52de8668efc22198b5fd67250750ab3c"></a>


#### Enumerator Par13

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0c909269d961a4e8f33c5a1e1419acbe"></a>


#### Enumerator Par14

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a138e325c096420158e34a5045ad80239"></a>


#### Enumerator Par15

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a7945eadf6173e805aecff49967f9a473"></a>


#### Enumerator Par16

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179abb1e2523e91708c65cda6baa33d8a2e1"></a>


#### Enumerator Par17

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a2c564696836fad7ac808d6403573999d"></a>


#### Enumerator Par18

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a9c249e4f67b3bc8c27a0df0993fbc11a"></a>


#### Enumerator Par19

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a030e5c5905a50ee2b37e78c7c1df59e8"></a>


#### Enumerator Par20

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a2afbfc37be6f8bc31121c3bdc5b8dc52"></a>


#### Enumerator Par21

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179afc9971f2360e327ac29b14777a0d4bc6"></a>


#### Enumerator Par22

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6613905aa53aff7401792da1d91d3104"></a>


#### Enumerator Par23

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac09ad542032eb1263b1b9e5511873585"></a>


#### Enumerator Par24

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0f751d40fdcb70fb886fee9dc4f9c9eb"></a>


#### Enumerator Par25

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a38f4609cf77444e2a8e3879afa304b9a"></a>


#### Enumerator Par26

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a65e2f24dbe24a140a6990fed234d42b0"></a>


#### Enumerator Par27

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a4b4153877eb8fe3b43dd70b4f6eb8331"></a>


#### Enumerator Par28

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a01a2825fd4e4a78a57bff55bcb0cb70c"></a>


#### Enumerator Par29

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a79de2372c62d75010382d1eb720609cd"></a>


#### Enumerator Par30

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac8c63871d7d2a4ac37147bf591becdf8"></a>


#### Enumerator Par31

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a701434c30e598e9dd7da1b67240dc67e"></a>


#### Enumerator Par32

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ab8e19ff0271eba21df5c5874158ad4b4"></a>


#### Enumerator Par33

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ae485465cd816afe87b30424ec01257d2"></a>


#### Enumerator Par34

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aab493386bf722da5259b7263091c71e5"></a>


#### Enumerator Par35

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a678e8c569fb0c6ffff06bc25996e9072"></a>


#### Enumerator Par36

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a9ce7dd31782d650ebf7890c76e19c04e"></a>


#### Enumerator Par37

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aab7a3b1eae59df7a8966a51183b44278"></a>


#### Enumerator Par38

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af6f549953d757b34c2a113b5dc0a61db"></a>


#### Enumerator Par39

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aef19f4cad8eea9cbc336d4f75284ff0a"></a>


#### Enumerator Par40

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8df9996dfe5ed257c545f86f0aa95b2f"></a>


#### Enumerator Par41

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac85428097fa342f33802c26d67b895a3"></a>


#### Enumerator Par42

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a9dc7ecb5930716c1fa5e2b5d2d7df7e3"></a>


#### Enumerator Par43

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a7aa6fbdaf03a1089e1528c7ddcb47bcd"></a>


#### Enumerator Par44

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a320c71589a4ceea01b0c1c0e02be9a16"></a>


#### Enumerator Par45

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a328ec2b91c926846c4c0d7bc54d82b0b"></a>


#### Enumerator Par46

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6e71b378b5bd3cb264390014eec0bb2d"></a>


#### Enumerator Par47

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a5f013cc25408ce5939e1ac01b99bd746"></a>


#### Enumerator Par48

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ad41f1274d4a3a08e71cd9669d6ff9d09"></a>


#### Enumerator Par49

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aaefcb33844b7237ba12596ca6aa81413"></a>


#### Enumerator Par50

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0e34d30569d0fc7842a84da0f718869d"></a>


#### Enumerator Par51

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ae8130db89194a43b7350ec03910300e3"></a>


#### Enumerator Par52

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179abc664e97fe97654d054d3ba341b1f314"></a>


#### Enumerator Par53

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3fd99cf0099fbea38b1dadfe27bbe63e"></a>


#### Enumerator Par54

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3162efa35d8c0500b7e9827bc853770f"></a>


#### Enumerator Par55

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af9d3edc4045f4815f96710657b946412"></a>


#### Enumerator Par56

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ab948c0070afd64d770c38cc89132eae4"></a>


#### Enumerator Par57

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179adbfd3f8e1692ccd421ee8098c157fd5e"></a>


#### Enumerator Par58

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a08bedf60005b2f0583ab71dac79d3e71"></a>


#### Enumerator Par59

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a7638ed655ae7c1962723502c1039aefc"></a>


#### Enumerator Par60

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a01afcb4478f2408b45a8ea3316731315"></a>


#### Enumerator Par61

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3e444be14fa77369a98e470c7912bc95"></a>


#### Enumerator Par62

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af1ed37c4dc43d27d143c77877f8f147f"></a>


#### Enumerator Par63

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aded960797506070797fd91363472410e"></a>


#### Enumerator Par64

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a57c166a3ae04c0e7719c5457cff977dd"></a>


#### Enumerator Par65

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a210eeb8a0bf17f6268fe5a89acce4a7d"></a>


#### Enumerator Par66

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a328837ce57da478c30226bb78e7dd069"></a>


#### Enumerator Par67

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a064bbfdf83c535235afb0c2ba502610c"></a>


#### Enumerator Par68

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ace5ba404cc2b74bde3a44081558e2d97"></a>


#### Enumerator Par69

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8e0f51a1d6e18eef420aca83fb5ef7c6"></a>


#### Enumerator Par70

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3f37393052ed1e292526a0abfb55e09e"></a>


#### Enumerator Par71

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8484a7661b7dd570b81c4203c4d6cb2d"></a>


#### Enumerator Par72

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a7d74f58f556847da3f534f6e73f08bcc"></a>


#### Enumerator Par73

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ad24af97b0a58286ff18a2f1f4e6dd51f"></a>


#### Enumerator Par74

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0d2278b65ccece3bf8724dd0876fb4dd"></a>


#### Enumerator Par75

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ab665e6c10b5cfbfcb1fccf304d6b6cad"></a>


#### Enumerator Par76

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aa002e943f95c78fa1b36a2eafa643e51"></a>


#### Enumerator Par77

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a498333a9055ae820ac5685ccf49f2cd0"></a>


#### Enumerator Par78

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a79c9909b43385609e560d8691c611521"></a>


#### Enumerator Par79

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3c439d4f20e9e9d4438360f59622a451"></a>


#### Enumerator Par80

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aa5cacc82b3a91d6552f58820a7c0b1cc"></a>


#### Enumerator Par81

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a2412c81601dbcae3f410557f726e7658"></a>


#### Enumerator Par82

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a70bafe092d6a4f3987ad83d61962c0f1"></a>


#### Enumerator Par83

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a1974755eecbb850cbbe329218743c4ef"></a>


#### Enumerator Par84

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3fbeb4c75a8c4fe8b18305e96a00334e"></a>


#### Enumerator Par85

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179afb0d5d8b57df9c351a97d65c00921d75"></a>


#### Enumerator Par86

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a82ed823e29290ff4e1ac16abddf6a41f"></a>


#### Enumerator Par87

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a44ee1ee20172317e7b4bcff0b370e52f"></a>


#### Enumerator Par88

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a773602924fc160e526d01d9080cb2d1a"></a>


#### Enumerator Par89

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac1c385cc45206e94901dff0a627fd369"></a>


#### Enumerator Par90

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a535079ef9db7107d102937ccc23ba15c"></a>


#### Enumerator Par91

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0f739c9df54149ce0f9498ef2b04df68"></a>


#### Enumerator Par92

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a147b8e673aa1478720d772fdce47a8f8"></a>


#### Enumerator Par93

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ab36b523b6649716c04cc9c4e79b29599"></a>


#### Enumerator Par94

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0ba978628c42d19fa5ac221f8d5bbd32"></a>


#### Enumerator Par95

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af7194cce5a8820f45f552e9ef2e17d7d"></a>


#### Enumerator Par96

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a889938d482f0997bf8b5a01fb8935fa2"></a>


#### Enumerator Par97

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a2379531bcefdb1bcde252b5b3394f88c"></a>


#### Enumerator Par98

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ab3746139c693734ce8154bb51e39b897"></a>


#### Enumerator Par99

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a7049a3b0fdcf9016c90783ed488a7772"></a>


#### Enumerator Par100

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac892fa7aeb7a9adc47681fddfb866ee2"></a>


#### Enumerator Par101

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6a041dd5bac9bd74ffd129be577c44bd"></a>


#### Enumerator Par102

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af5b7b233ec75f99ebb9b18e202f8d74a"></a>


#### Enumerator Par103

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af62167a8dd22c5def691361a5190cae5"></a>


#### Enumerator Par104

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179abd72098900582f2ad67a121113413d24"></a>


#### Enumerator Par105

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a216a79fceb5e73e3c20e2748af7f23a9"></a>


#### Enumerator Par106

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aaf277d30cc39bfeafb7b27bfd187baf4"></a>


#### Enumerator Par107

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aacbadacef99592d0b1d498788023e891"></a>


#### Enumerator Par108

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a277906d35d83de0f3915c60193e00312"></a>


#### Enumerator Par109

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6fe85717f2924f6d0a76e3358bb8e77c"></a>


#### Enumerator Par110

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a9002b1a84afeb24c2c18b03bf02f876c"></a>


#### Enumerator Par111

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179acd5ebd18e2b4e40ac02589b76a3acd12"></a>


#### Enumerator Par112

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179afe45d524373d9dbe98381a7c289945bd"></a>


#### Enumerator Par113

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a4b0cc1883c9e56702838280c1ed2cdfc"></a>


#### Enumerator Par114

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3a7f1f9e33a977e31ab7df84750172f4"></a>


#### Enumerator Par115

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aa3e4179c77763e8c947d427502bcba00"></a>


#### Enumerator Par116

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a5b728e0bb6c4d33ddb0dab8a4feda0ad"></a>


#### Enumerator Par117

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a5abd8ecfe1339e325864a588d8043baa"></a>


#### Enumerator Par118

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a056432a9f054c8af23d629253cd92cfb"></a>


#### Enumerator Par119

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a19bcf0f3633c0f4406c9a35b0a689217"></a>


#### Enumerator Par120

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a351f90786a07f1e0b92684b5a10b2c01"></a>


#### Enumerator Par121

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a9c64c21733ab412e4f2021ed8bc4151a"></a>


#### Enumerator Par122

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179affd863f90b433788fffd95eaea5d38ba"></a>


#### Enumerator Par123

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a1efff7cb653041ff6f9f9de1a01d7e82"></a>


#### Enumerator Par124

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a96c8c96d0228e8c66e74131d2da4824d"></a>


#### Enumerator Par125

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a2c0266f2e27cdb9732ed38c1363a405c"></a>


#### Enumerator Par126

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af528cb273269bb999321255817c49dd6"></a>


#### Enumerator Par127

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a476d7c46dc2359a91f47bd80d7ab8a38"></a>


#### Enumerator Par128

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a4ad2964a1f604dc510ff0fb0d34c0817"></a>


#### Enumerator Par129

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aef78727b7f653e1da9370f6d7535b9cc"></a>


#### Enumerator Par130

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ab4ca9ca82a60b9b81b482054118f4ef4"></a>


#### Enumerator Par131

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a75001fbc722c1ed3e2a766c06cb9196d"></a>


#### Enumerator Par132

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8cb0ed9bf6e7e1bb0ea58af4233068c5"></a>


#### Enumerator Par133

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a69a77cf35b45883f7e5277890c8feea1"></a>


#### Enumerator Par134

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aa1e3148e9d927450b0e601676da89d13"></a>


#### Enumerator Par135

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0442d82d11a165493f9f7a613fccd31e"></a>


#### Enumerator Par136

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a883c7cf84c71b7a6ed475ae8077eb0ab"></a>


#### Enumerator Par137

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af5e30117d11002683ff879e8f78a5c52"></a>


#### Enumerator Par138

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac66956e14367cf5a31cb14c6c3a0eee7"></a>


#### Enumerator Par139

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3ca8c6a08a62639a1148197823aea96e"></a>


#### Enumerator Par140

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aa072d5d06c5834073c37c5a467819a8a"></a>


#### Enumerator Par141

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac845d33934a74c1d0c715ce8153e1007"></a>


#### Enumerator Par142

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af627ee1e1e9f7e937b8bde4d35db7117"></a>


#### Enumerator Par143

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a969a5aeb09f656317f6fcbafbbaa370d"></a>


#### Enumerator Par144

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179afb364946a9d682a144f53ecc7fc6a89e"></a>


#### Enumerator Par145

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac69654181519c671cab3b68e476fd0e4"></a>


#### Enumerator Par146

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a98be6c4c0cdf0b3cd9b4ee8fc02dc8fc"></a>


#### Enumerator Par147

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a2110dcf13f32195e06a750730c52d461"></a>


#### Enumerator Par148

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af7424eb005fb22c3c2de38571d6c24c3"></a>


#### Enumerator Par149

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ae81ea60d46959d30104fc221c4998294"></a>


#### Enumerator Par150

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ab3856e93d04eab9750447f4f8e1aa4b0"></a>


#### Enumerator Par151

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af39a82c54200863660ae09bc50eacf57"></a>


#### Enumerator Par152

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a9a18c809bfe74e018962fe76686aaac9"></a>


#### Enumerator Par153

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aab3bc7a5cb2586df9a6899a3bdeb3b93"></a>


#### Enumerator Par154

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aae68449511520d75d6eef97b23b1eea6"></a>


#### Enumerator Par155

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8946a280b0c6cb97365f9e5670b1e2dd"></a>


#### Enumerator Par156

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aabbd7e6a0b7e15c7f1ad97d2b99829ce"></a>


#### Enumerator Par157

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a307806a295da2b7501e4a9a07590a2c4"></a>


#### Enumerator Par158

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6753a02ecf68a65056c6e92c32e4742f"></a>


#### Enumerator Par159

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ad59c2cbbf4a39adc4bf611680ff6fca0"></a>


#### Enumerator Par160

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac680e5cb8468c7f18319015974f8a092"></a>


#### Enumerator Par161

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a50faa3578361455c032c001163a8c2b2"></a>


#### Enumerator Par162

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a95e11e2e8d2e967bb9d6f15f359245bc"></a>


#### Enumerator Par163

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aff6d7f98b5258ae272b988e65e254254"></a>


#### Enumerator Par164

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6510caf273cef199d2d7865301776559"></a>


#### Enumerator Par165

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179abf91ec8e90585533bc915158e40ab6d5"></a>


#### Enumerator Par166

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a7e5ee5553cb471f5cefc57d852c172f5"></a>


#### Enumerator Par167

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ae2ba3dc026f704b25b0ad4e21803b522"></a>


#### Enumerator Par168

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6565f54fcd6dce1e7aeef4285c32b47e"></a>


#### Enumerator Par169

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a2b0aa2b2243d757888e3189b21b01598"></a>


#### Enumerator Par170

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ad8ef2a17e70ea50e11491364766c1220"></a>


#### Enumerator Par171

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ad12286b9912935a17b5a05999eaea7f2"></a>


#### Enumerator Par172

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0dda8f5fe0bb97baa57d08ec79234d52"></a>


#### Enumerator Par173

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a19f48534784ffd560c4d7238e0933b25"></a>


#### Enumerator Par174

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8202fa470bff8a9e3bf63ebd7cddffa8"></a>


#### Enumerator Par175

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a179145173cb7ea39634371b1cb338f1b"></a>


#### Enumerator Par176

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a42887b1d3989e8ef276ecf170a2cec15"></a>


#### Enumerator Par177

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a610313f815a5df1fe85e518925b5c511"></a>


#### Enumerator Par178

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a2973dece579b7f8815ea0bda7eea29e5"></a>


#### Enumerator Par179

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179acc7e3ae42cf7234f22ae148fd1190e6f"></a>


#### Enumerator Par180

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aaf7be11a6996e572fe2aac188dfa5050"></a>


#### Enumerator Par181

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8a5babdec888ab5ffe284fe9c0b12e0d"></a>


#### Enumerator Par182

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a7fff45b3418303efdf205cae19c9927c"></a>


#### Enumerator Par183

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ae477fc83620dd552b0f82bdfb1a4cbb7"></a>


#### Enumerator Par184

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac788601c5aecca6851bcd1b247314435"></a>


#### Enumerator Par185

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a2e8adaf333d4a940f1c41a922ca00d55"></a>


#### Enumerator Par186

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0a8634447d943d853bc46610564f1b7f"></a>


#### Enumerator Par187

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6c214aa155846edbe6123f2f7a259851"></a>


#### Enumerator Par188

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a4315a36ceff3f0ea9243b10dab273dbc"></a>


#### Enumerator Par189

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac24309e67c54c4d02bcfa58d46d12fb1"></a>


#### Enumerator Par190

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a696f7785ea7c8db198414a2d13cf83af"></a>


#### Enumerator Par191

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aa3d72f3981d7fe7cf1220bf9f591f05f"></a>


#### Enumerator Par192

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ab8acd50a2d393a7c0c315a805b81e578"></a>


#### Enumerator Par193

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a52832a986e60033b8efde23f657dab93"></a>


#### Enumerator Par194

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a611730ab6aa17ed37dbcd27df8e42133"></a>


#### Enumerator Par195

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8242d22949ad1df7c6eefd882f595b1a"></a>


#### Enumerator Par196

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a56e696f2949e0b55aeabba2f08684a91"></a>


#### Enumerator Par197

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179afa3ad681e1c330d4d090932e3127511b"></a>


#### Enumerator Par198

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af8cb31741537ab311e20e8c59faa240b"></a>


#### Enumerator Par199

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a15f3bc0f6519b7db3f7345004f8e3c22"></a>


#### Enumerator Par200

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac7f6fb4dbe4f5aee7d23596fa8433a2a"></a>


#### Enumerator Par201

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a764725532be2ec18c79cb1f1f124dc91"></a>


#### Enumerator Par202

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a235d80d8e299ac1b1dc1fabb33594dad"></a>


#### Enumerator Par203

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aacf85ae9f788e1294d4dbab6f578fce6"></a>


#### Enumerator Par204

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a254fb629c4b2ef7754d26311904465e6"></a>


#### Enumerator Par205

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0c769d4fbf9ea5a47e93eea03a5a8281"></a>


#### Enumerator Par206

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a875953e6ced723c119f76c64c4a4031d"></a>


#### Enumerator Par207

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a786e5d8e0adf4439aa3083b3bb046f71"></a>


#### Enumerator Par208

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8efef1807e580c86fab122f8241311a9"></a>


#### Enumerator Par209

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a7d8293bc4d4680454c4be266bbc9dd39"></a>


#### Enumerator Par210

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8404c63b3468b04be3c550790a2408ec"></a>


#### Enumerator Par211

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aa83e15e1c0465197c9ac754d6a109c08"></a>


#### Enumerator Par212

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a02b3d3846412a1a852e95d014fd5ab31"></a>


#### Enumerator Par213

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ae5228120fbfd6571a5ae94b596e761fd"></a>


#### Enumerator Par214

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a44ebe20ce26976f5b6b0ec51a71dcf88"></a>


#### Enumerator Par215

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a8071f7e0244a0d8a5297e3643c1368dc"></a>


#### Enumerator Par216

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a66716bc1984c9ecd34bdb2d5417a3e22"></a>


#### Enumerator Par217

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a92dcc64de2ca9af5e3ff3634b7774774"></a>


#### Enumerator Par218

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6d1cff20de403878d95d35f02714c24a"></a>


#### Enumerator Par219

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aba0be3f7ffe65772c86d19c5f5a48929"></a>


#### Enumerator Par220

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a227371e425f7a6eac6272bbe2e2c7e5f"></a>


#### Enumerator Par221

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aacc5483c79a6c43e33bb80fb77048df9"></a>


#### Enumerator Par222

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3624acb2c7e4468bf4f4b4437be11c64"></a>


#### Enumerator Par223

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ace23eabaa8d5db56a023d9c7292c6469"></a>


#### Enumerator Par224

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ad716609028a85aeca26eedbb6aa7c8c3"></a>


#### Enumerator Par225

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179afd750495142ab991d62d4d5d0b1dc1a5"></a>


#### Enumerator Par226

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a352f0fec64f1af4a6a548a6c6f531393"></a>


#### Enumerator Par227

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a0631b44df53e39b4a5f847b32bd86ce0"></a>


#### Enumerator Par228

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a667b370abf4ea7df3d3f428cbde742cd"></a>


#### Enumerator Par229

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ae6c88ba603c165d91808f16f6781e8da"></a>


#### Enumerator Par230

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a006a080d32cde020a21319e505ca31ca"></a>


#### Enumerator Par231

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ad61d4155c213a7b15e79077637910a47"></a>


#### Enumerator Par232

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a192b28e6eda2a7a9ae7fcaab6fe5b55f"></a>


#### Enumerator Par233

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af858ee940fc7c528d7ff29b3c80703ed"></a>


#### Enumerator Par234

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aa0c8f5f2e6300602fca1c82da704dc18"></a>


#### Enumerator Par235

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a6a82511fc516778fef67efd9c7615a4e"></a>


#### Enumerator Par236

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aec9ac8e2542de01c8de06415432a7c3c"></a>


#### Enumerator Par237

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aaeababda18141e2033800b4a0cb1d6f1"></a>


#### Enumerator Par238

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a3bba90fe28a0acfcf0a33d4580d7d5d8"></a>


#### Enumerator Par239

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a66d65cc0a8a706ee8e88964b681f4d43"></a>


#### Enumerator Par240

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a04d1dc35ead6e3685694e9fb6f7ed2a6"></a>


#### Enumerator Par241

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aea7d95f66c74b53b2dec0321877f5e16"></a>


#### Enumerator Par242

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a41fe15f5afae8dc0d6fd87029ffac0ff"></a>


#### Enumerator Par243

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179abc0ead8a72d47afffb322f8413ef8c69"></a>


#### Enumerator Par244

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179aee93da1c47a988f1bdae5b27ece5f318"></a>


#### Enumerator Par245

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179abb9f7a25843a380a45efa1f9612eb4fb"></a>


#### Enumerator Par246

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179af0b0689aa8df912bb8d1c6ba8e444115"></a>


#### Enumerator Par247

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a86fce4f7920bb12b4d5d378fbb70e0dc"></a>


#### Enumerator Par248

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ad41c590215538dc42ebd645dd1e54448"></a>


#### Enumerator Par249

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179ac0644db9cb75ed8b0b607a41a548466f"></a>


#### Enumerator Par250

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8a580fb0503229c319af356d568e9179a837f613664ef2faf3ba07b0acb4a782b"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ObjectColumn"}]}`
-->

### Enumeration type DetectorDataType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a93fa70c58cbcff63609161131c91e1ba"></a>

![][public]

**Definition**:


```csharp
enum DetectorDataType {
  Real = 0,
  Imaginary,
  Amplitude,
  Power
}
```


Usage (see [Example 24](page_ex24.md#page_ex24) for a full sample)


C# 
```csharp
            // Saves current system in memory
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e24_nsc_detectors.zos");
```
 C++ 
```csharp
    // saves current system in memory
    TheSystem->SaveAs((_bstr_t)TheApplication->SamplesDir + "\\API\\CPP\\e24_nsc_detectors.zos");
```
 Matlab 
```csharp
    % saves current system in memory
    TheSystem.Save();
```
 Python 
```csharp
    # saves current system in memory
    TheSystem.Save()
```


#### Enumerator Real

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a93fa70c58cbcff63609161131c91e1baa7f80fcc452c2f1ed2bb51b39d0864df1"></a>


#### Enumerator Imaginary

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a93fa70c58cbcff63609161131c91e1baaf19f497d4c860d252cc1e055d0362ccc"></a>


#### Enumerator Amplitude

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a93fa70c58cbcff63609161131c91e1baaf4d00f19181bdfc0474954a43262febf"></a>


#### Enumerator Power

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a93fa70c58cbcff63609161131c91e1baadd4fe0cc913f704600b97d1f5dd285de"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.DetectorDataType"}]}`
-->

### Enumeration type PolarDetectorDataType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79"></a>

![][public]

**Definition**:


```csharp
enum PolarDetectorDataType {
  Power = 1,
  PowerSolidAngle,
  Lumens,
  LumensSolidAngle,
  Cx,
  Cy,
  u_T,
  u_V,
  TriX,
  TriY,
  TriZ
}
```


#### Enumerator Power

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79add4fe0cc913f704600b97d1f5dd285de"></a>


#### Enumerator PowerSolidAngle

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79a0aaa801637009545d9a701ba9bf9b73f"></a>


#### Enumerator Lumens

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79a9255488945454c206734ef148f9802dc"></a>


#### Enumerator LumensSolidAngle

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79a2e71f89cc99df94b7aa3c961eaf13cc5"></a>


#### Enumerator Cx

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79ac0b860db238ef44d3675e73159bab154"></a>


#### Enumerator Cy

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79a249468b3d9d629f117ae5d4cf259acdb"></a>


#### Enumerator u\_T

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79ab7ef8f249394fb22a69bfe9abf4163e9"></a>


#### Enumerator u\_V

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79a0cef6340f821d5f2790a666bcc17a52f"></a>


#### Enumerator TriX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79a29025a9da336c6b09ca7eec4ccbc570d"></a>


#### Enumerator TriY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79a03b8b32c06356769834aa83c18b7d3c3"></a>


#### Enumerator TriZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af2e3d9a13b455eab749a70ec14b79b79a5005a259fcef67fd94be9d242cd181b8"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.PolarDetectorDataType"}]}`
-->

### Enumeration type InterpolateChoices

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a15c9a07c6b3ef8872e8627ec0d60eb92"></a>

![][public]

**Definition**:


```csharp
enum InterpolateChoices {
  Bicubic = 0,
  Linear
}
```


#### Enumerator Bicubic

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a15c9a07c6b3ef8872e8627ec0d60eb92a725fca0a58273e8b0556bbf5c16588ff"></a>


#### Enumerator Linear

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a15c9a07c6b3ef8872e8627ec0d60eb92a32a843da6ea40ab3b17a3421ccdf671b"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.InterpolateChoices"}]}`
-->

### Enumeration type OrderChoices

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab1c37ad73e9b0278bd81512e7509e71d"></a>

![][public]

**Definition**:


```csharp
enum OrderChoices {
  Before = 0,
  After
}
```


#### Enumerator Before

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab1c37ad73e9b0278bd81512e7509e71da9060587edeb01a63e3d3edc959678d1e"></a>


#### Enumerator After

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab1c37ad73e9b0278bd81512e7509e71da7bfcadb5535fe8aad5032762b7bfe159"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.OrderChoices"}]}`
-->

### Enumeration type HologramTypes

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa8081b8c1c3e59fc47af4ed75147d3c6"></a>

![][public]

**Definition**:


```csharp
enum HologramTypes {
  Type_1 = 1,
  Type_2 = 2
}
```


#### Enumerator Type\_1

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa8081b8c1c3e59fc47af4ed75147d3c6ac85bcf86bcdccd472c49567fbbfe681f"></a>


#### Enumerator Type\_2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa8081b8c1c3e59fc47af4ed75147d3c6afa2a7f25258e70e95988ff587e25c284"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.HologramTypes"}]}`
-->

### Enumeration type DiffractiveFaceChoices

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a7507e91f67dd9d461ec4b905b3b280aa"></a>

![][public]

**Definition**:


```csharp
enum DiffractiveFaceChoices {
  FrontFace = 1,
  BackFace = 2
}
```


#### Enumerator FrontFace

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a7507e91f67dd9d461ec4b905b3b280aaae4686cf9484da87e21f78e333db5f918"></a>


#### Enumerator BackFace

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a7507e91f67dd9d461ec4b905b3b280aaa5851930bc5a93ec305f3455f335aeecb"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.DiffractiveFaceChoices"}]}`
-->

### Enumeration type PixelAddressing

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab451d75f1de40049f53431c169fe701a"></a>

![][public]

**Definition**:


```csharp
enum PixelAddressing {
  ByRow = 0,
  ByColumn = 1,
  Individually = 2
}
```


#### Enumerator ByRow

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab451d75f1de40049f53431c169fe701aa596664a0fdbb0db655c0077fcfcded8c"></a>


#### Enumerator ByColumn

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab451d75f1de40049f53431c169fe701aad09d6753bb28249d92dbf61d6d2d058d"></a>


#### Enumerator Individually

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab451d75f1de40049f53431c169fe701aaabcce2a3e642e7c1d0d4c1c5cbe58167"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.PixelAddressing"}]}`
-->

### Enumeration type ShapeChoices

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a937f72251877d1590398fbad95466b13"></a>

![][public]

**Definition**:


```csharp
enum ShapeChoices {
  Rectangular = 0,
  Elliptical = 1
}
```


#### Enumerator Rectangular

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a937f72251877d1590398fbad95466b13a7545c5d3ad246a683a197a2903a4d5e6"></a>


#### Enumerator Elliptical

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a937f72251877d1590398fbad95466b13acfbec59eb62422713d3f23f412fa1e09"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ShapeChoices"}]}`
-->

### Enumeration type UniformAngleChoices

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af9f62a2d0177e9df62b80bdb9c4cd658"></a>

![][public]

**Definition**:


```csharp
enum UniformAngleChoices {
  UniformIrradiance = 0,
  UniformInAngleSpace = 1
}
```


#### Enumerator UniformIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af9f62a2d0177e9df62b80bdb9c4cd658ad04efab13db4aeed6f70a7dc264d3383"></a>


#### Enumerator UniformInAngleSpace

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1af9f62a2d0177e9df62b80bdb9c4cd658ad63f052de1512f2dd8e86390d8398f91"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.UniformAngleChoices"}]}`
-->

### Enumeration type EndCapOptions

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a881d08f593301edab9896cee04f03a55"></a>

![][public]

**Definition**:


```csharp
enum EndCapOptions {
  None = 0,
  First = 1,
  Second = 2,
  Both = 3
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a881d08f593301edab9896cee04f03a55a6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator First

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a881d08f593301edab9896cee04f03a55a7fb55ed0b7a30342ba6da306428cae04"></a>


#### Enumerator Second

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a881d08f593301edab9896cee04f03a55ac22cf8376b1893dcfcef0649fe1a7d87"></a>


#### Enumerator Both

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a881d08f593301edab9896cee04f03a55a130c5b3473c57faa76e2a1c54e26f88e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.EndCapOptions"}]}`
-->

### Enumeration type ApertureShapes

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a18f86ac4d261a6d24bfd61d2837f5c92"></a>

![][public]

**Definition**:


```csharp
enum ApertureShapes {
  Annular = 0,
  Elliptical = 1,
  Rectangular = 2,
  CyliderWithRectangular = 3
}
```


Various Aperture shapes.


#### Enumerator Annular

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a18f86ac4d261a6d24bfd61d2837f5c92a1d20d825e26c12f98ce37585afd10ee8"></a>


#### Enumerator Elliptical

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a18f86ac4d261a6d24bfd61d2837f5c92acfbec59eb62422713d3f23f412fa1e09"></a>


#### Enumerator Rectangular

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a18f86ac4d261a6d24bfd61d2837f5c92a7545c5d3ad246a683a197a2903a4d5e6"></a>


#### Enumerator CyliderWithRectangular

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a18f86ac4d261a6d24bfd61d2837f5c92a733875cebb1b10a46ad387656d5a310e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ApertureShapes"}]}`
-->

### Enumeration type RaysIgnoreObjectType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8f4089440ddcd9c111f99ce345e3dfc7"></a>

![][public]

**Definition**:


```csharp
enum RaysIgnoreObjectType {
  Never = 0,
  Always = 1,
  OnLaunch = 2
}
```


#### Enumerator Never

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8f4089440ddcd9c111f99ce345e3dfc7a6e7b34fa59e1bd229b207892956dc41c"></a>


#### Enumerator Always

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8f4089440ddcd9c111f99ce345e3dfc7a68eec46437c384d8dad18d5464ebc35c"></a>


#### Enumerator OnLaunch

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8f4089440ddcd9c111f99ce345e3dfc7ac47a70f7c9b26d0b2a685c798d5df1c4"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.RaysIgnoreObjectType"}]}`
-->

### Enumeration type DetectorShowAsType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9914b12c46b27f6832be470d61e780a0"></a>

![][public]

**Definition**:


```csharp
enum DetectorShowAsType {
  GreyScaleFlux = 0,
  InverseGreyScaleFlux = 1,
  FalseColorFlux = 2,
  InverseFalseColorFlux = 3,
  GreyScaleIrradiance = 4,
  InverseGreyScaleIrradiance = 5,
  FalseColorIrradiance = 6,
  InverseFalseColorIrradiance = 7
}
```


#### Enumerator GreyScaleFlux

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9914b12c46b27f6832be470d61e780a0a3104eb037cdde45f80bb43475bceb5b9"></a>


#### Enumerator InverseGreyScaleFlux

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9914b12c46b27f6832be470d61e780a0ad861f23c433df1231aee5f58bd371555"></a>


#### Enumerator FalseColorFlux

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9914b12c46b27f6832be470d61e780a0a6295fec176d4d6d68c68a039f3516d4b"></a>


#### Enumerator InverseFalseColorFlux

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9914b12c46b27f6832be470d61e780a0a31ab8273a31a10e964e33268bb8f2fbf"></a>


#### Enumerator GreyScaleIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9914b12c46b27f6832be470d61e780a0abdc622a3d4c550aafd4f74e10991cb0a"></a>


#### Enumerator InverseGreyScaleIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9914b12c46b27f6832be470d61e780a0af2a5760732574853451db2beddcc353b"></a>


#### Enumerator FalseColorIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9914b12c46b27f6832be470d61e780a0a116634ae841929e46bf4b882ab793e17"></a>


#### Enumerator InverseFalseColorIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9914b12c46b27f6832be470d61e780a0afe34a54494d2454e2f623b33992e5954"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.DetectorShowAsType"}]}`
-->

### Enumeration type DrawingResolutionType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a6ea8dc03bec67c409b67baaa48a92bfd"></a>

![][public]

**Definition**:


```csharp
enum DrawingResolutionType {
  Standard = 0,
  Medium = 1,
  High = 2,
  Presentation = 3,
  Custom = 4
}
```


#### Enumerator Standard

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a6ea8dc03bec67c409b67baaa48a92bfdaeb6d8ae6f20283755b339c0dc273988b"></a>


#### Enumerator Medium

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a6ea8dc03bec67c409b67baaa48a92bfda87f8a6ab85c9ced3702b4ea641ad4bb5"></a>


#### Enumerator High

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a6ea8dc03bec67c409b67baaa48a92bfda655d20c1ca69519ca647684edbb2db35"></a>


#### Enumerator Presentation

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a6ea8dc03bec67c409b67baaa48a92bfdac7bc3fddddb62d5b656adc30cea77a55"></a>


#### Enumerator Custom

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a6ea8dc03bec67c409b67baaa48a92bfda90589c47f06eb971d548591f23c285af"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.DrawingResolutionType"}]}`
-->

### Enumeration type SourceBulkScatterMode

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a797a1d701c5391bd6014f35ab63c0760"></a>

![][public]

**Definition**:


```csharp
enum SourceBulkScatterMode {
  Many = 0,
  Once = 1,
  Never = 2
}
```


#### Enumerator Many

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a797a1d701c5391bd6014f35ab63c0760a5ae7fb3197b6fd8c723c7766a5680e2e"></a>


#### Enumerator Once

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a797a1d701c5391bd6014f35ab63c0760ae1a9dc9f23534e63de9df0d540ac1611"></a>


#### Enumerator Never

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a797a1d701c5391bd6014f35ab63c0760a6e7b34fa59e1bd229b207892956dc41c"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.SourceBulkScatterMode"}]}`
-->

### Enumeration type SourceSamplingMethod

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a664c238076b0d36a2391819c17b0c1d1"></a>

![][public]

**Definition**:


```csharp
enum SourceSamplingMethod {
  Random = 0,
  Sobol = 1
}
```


#### Enumerator Random

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a664c238076b0d36a2391819c17b0c1d1a64663f4646781c9c0110838b905daa23"></a>


#### Enumerator Sobol

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a664c238076b0d36a2391819c17b0c1d1a7010fe58c6d9b00dc52f088ed97cac75"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.SourceSamplingMethod"}]}`
-->

### Enumeration type ArrayMode

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afdd5b3906ce1ee859f6514fc54ae44c6"></a>

![][public]

**Definition**:


```csharp
enum ArrayMode {
  None = 0,
  Rectangular = 1,
  Circular = 2,
  Hexapolar = 3,
  Hexagonal = 4
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afdd5b3906ce1ee859f6514fc54ae44c6a6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator Rectangular

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afdd5b3906ce1ee859f6514fc54ae44c6a7545c5d3ad246a683a197a2903a4d5e6"></a>


#### Enumerator Circular

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afdd5b3906ce1ee859f6514fc54ae44c6aae2fd93db7a96c6c8eb65aa02dc03217"></a>


#### Enumerator Hexapolar

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afdd5b3906ce1ee859f6514fc54ae44c6a7fdb1bdf7173264059d2a0f175b90417"></a>


#### Enumerator Hexagonal

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afdd5b3906ce1ee859f6514fc54ae44c6a28666f62a0ffe4485fb7c7e878234dda"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ArrayMode"}]}`
-->

### Enumeration type SourceColorMode

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeaf"></a>

![][public]

**Definition**:


```csharp
enum SourceColorMode {
  SystemWavelengths = 0,
  CIE1931Tristimulus = 1,
  CIE1931Chromaticity = 2,
  CIE1931RGB = 3,
  UniformPowerSpectrum = 4,
  D65White = 5,
  ColorTemperature = 6,
  BlackBodySpectrum = 7,
  SpectrumFile = 8,
  CIE1976 = 9
}
```


#### Enumerator SystemWavelengths

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeafa6bdb3740fb4d65400680ff29ec0c5791"></a>


#### Enumerator CIE1931Tristimulus

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeafaef639c50b6d20171fb6c7bb24a46b996"></a>


#### Enumerator CIE1931Chromaticity

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeafa6a3af12b769f916f9ea492a6a26de0a8"></a>


#### Enumerator CIE1931RGB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeafa32952496c20c1df6ec188167d92d9902"></a>


#### Enumerator UniformPowerSpectrum

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeafa39cce76337a5c21fd4c130029dd993c9"></a>


#### Enumerator D65White

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeafab5eeae4797ce72cd8869dc942c0f2b9d"></a>


#### Enumerator ColorTemperature

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeafa0318cf3828074e4c4762656ad9b15ba1"></a>


#### Enumerator BlackBodySpectrum

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeafaa3442ae3a8e834062c7d2990c7a709b9"></a>


#### Enumerator SpectrumFile

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeafa1e00cbac5e211f9dd95144061b47ce56"></a>


#### Enumerator CIE1976

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeafad1a846e56d2e431187eeef15668dfe53"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.SourceColorMode"}]}`
-->

### Enumeration type FaceIsType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afc75ea3c4a7da5b2c508a5b556e81751"></a>

![][public]

**Definition**:


```csharp
enum FaceIsType {
  ObjectDefault = 0,
  Reflective = 1,
  Absorbing = 2
}
```


#### Enumerator ObjectDefault

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afc75ea3c4a7da5b2c508a5b556e81751a7d0f9957ab53322ef55e11bc18b331ba"></a>


#### Enumerator Reflective

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afc75ea3c4a7da5b2c508a5b556e81751a3889e081f93c67991c06d95705cee7e6"></a>


#### Enumerator Absorbing

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afc75ea3c4a7da5b2c508a5b556e81751a6028c709f829b05e5c8657171f0a04aa"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.FaceIsType"}]}`
-->

### Enumeration type ObjectScatteringTypes

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010"></a>

![][public]

**Definition**:


```csharp
enum ObjectScatteringTypes {
  None = 0,
  Lambertian = 1,
  Gaussian = 2,
  ABg = 3,
  ABgFile = 4,
  BSDF = 5,
  ISScatterCatalog = 6,
  User = 7
}
```


Usage (see [Example 21](page_ex21.md#page_ex21) for a full sample)


C# 
```csharp
            // Make Face 1 of object 3 has Lambertian scattering properties
            // To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
            // And then assign is to object 3 by ChangeScatterModelSettings().
            IObjectScatteringSettings ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ObjectScatteringTypes.Lambertian);
            ScatType_Lam._S_Lambertian.ScatterFraction = 1;
            Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam);
            Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1;
```
 C++ 
```csharp
    // Make Face 1 of object 3 has Lambertian scattering properties
    // To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    // And then assign is to object 3 by ChangeScatterModelSettings().
    IObjectScatteringSettingsPtr ScatType_Lam = Object_3->CoatScatterData->GetFaceData(1)->CreateScatterModelSettings(ObjectScatteringTypes_Lambertian);
    ScatType_Lam->_S_Lambertian->ScatterFraction = 1;
    Object_3->CoatScatterData->GetFaceData(1)->ChangeScatterModelSettings(ScatType_Lam);
    Object_3->CoatScatterData->GetFaceData(1)->NumberOfRays = 1;
```
 Matlab 
```csharp
    % Make Face 1 of object 3 has Lambertian scattering properties
    % To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    % And then assign is to object 3 by ChangeScatterModelSettings().
    ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian);
    ScatType_Lam.S_Lambertian_.ScatterFraction = 1;
    Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam);
    Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1;
```
 Python 
```csharp
    # Make Face 1 of object 3 has Lambertian scattering properties
    # To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    # And then assign is to object 3 by ChangeScatterModelSettings().
    ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian)
    ScatType_Lam._S_Lambertian.ScatterFraction = 1
    Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam)
    Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010a6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator Lambertian

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010a5bab3b0b38800aae982d01ad209a49f7"></a>


#### Enumerator Gaussian

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010afedf7ba6075fb5526a7ace0b9385528d"></a>


#### Enumerator ABg

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010ae44d0faa674d376c59f2fff34f7c1eed"></a>


#### Enumerator ABgFile

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010aa17b6843742ae9f19e1b7f5d2fafb5da"></a>


#### Enumerator BSDF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010aa5d08bf980fb336d665cedd18773eeac"></a>


#### Enumerator ISScatterCatalog

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010af4087ca5d688ee4bbe2a4d58053feb3f"></a>


#### Enumerator User

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010a8f9bfe9d1345237cb3b2b205864da075"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ObjectScatteringTypes"}]}`
-->

### Enumeration type ScatterToType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab3928fc3d8b75ba8d83585fb514a4b98"></a>

![][public]

**Definition**:


```csharp
enum ScatterToType {
  ScatterToList = 0,
  ImportanceSampling = 1
}
```


#### Enumerator ScatterToList

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab3928fc3d8b75ba8d83585fb514a4b98ae70f1ed3611d8674a9e4e796f21fda01"></a>


#### Enumerator ImportanceSampling

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1ab3928fc3d8b75ba8d83585fb514a4b98a3debdada8786af82b5b97920bc87ba4d"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ScatterToType"}]}`
-->

### Enumeration type VolumePhysicsModelType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a53a7179cd83319c494f80d9972e2e30e"></a>

![][public]

**Definition**:


```csharp
enum VolumePhysicsModelType {
  None = 0,
  AngleScattering = 1,
  DLLDefinedScattering = 2,
  PhotoluminescenceModel = 3
}
```


Usage (see [Example 17](page_ex17.md#page_ex17) for a full sample)


C# 
```csharp
            //Rectangular Volume
            //Scattering properties
            //Draw:opacity set to 50%
            IObjectTypeSettings oType_2 = Object_2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.RectangularVolume);
            Object_2.ChangeType(oType_2);
            Object_2.ZPosition = 2;
            Object_2.Material = "N-BK7";
            IObjectRectangularVolume RectVolume2_data = Object_2.ObjectData as IObjectRectangularVolume;
            RectVolume2_data.X1HalfWidth = 12;
            RectVolume2_data.Y1HalfWidth = 12;
            RectVolume2_data.ZLength = 40;
            RectVolume2_data.X2HalfWidth = 12;
            RectVolume2_data.Y2HalfWidth = 12;
            INCEVolumePhysicsData RectVolume2_volphysdata = Object_2.VolumePhysicsData;
            RectVolume2_volphysdata.Model = VolumePhysicsModelType.AngleScattering;
            RectVolume2_volphysdata.ModelSettings._S_AngleScattering.MeanPath = 5;
            RectVolume2_volphysdata.ModelSettings._S_AngleScattering.Angle = 30;
            INCEDrawData RectVolume2_Drawdata = Object_2.DrawData;
            RectVolume2_Drawdata.Opacity = ZOSAPI.Common.ZemaxOpacity.P50;
```
 C++ 
```csharp
    //Rectangular Volume
    //Scattering properties
    //Draw:opacity set to 50%
    IObjectTypeSettingsPtr oType_2 = Object_2->GetObjectTypeSettings(ObjectType_RectangularVolume);
    Object_2->ChangeType(oType_2);
    Object_2->ZPosition = 2;
    Object_2->Material = "N-BK7";
    IObjectRectangularVolumePtr RectVolume2_data = Object_2->ObjectData;
    RectVolume2_data->X1HalfWidth = 12;
    RectVolume2_data->Y1HalfWidth = 12;
    RectVolume2_data->ZLength = 40;
    RectVolume2_data->X2HalfWidth = 12;
    RectVolume2_data->Y2HalfWidth = 12;
    INCEVolumePhysicsDataPtr RectVolume2_volphysdata = Object_2->VolumePhysicsData;
    RectVolume2_volphysdata->Model = VolumePhysicsModelType_AngleScattering;
    RectVolume2_volphysdata->ModelSettings->_S_AngleScattering->MeanPath = 5;
    RectVolume2_volphysdata->ModelSettings->_S_AngleScattering->Angle = 30;
    INCEDrawDataPtr RectVolume2_Drawdata = Object_2->DrawData;
    RectVolume2_Drawdata->Opacity = ZemaxOpacity_P50;
```
 Matlab 
```csharp
    % Rectangular Volume
    % Scattering Properties
    % Draw:opacity set to 50%
    oType_2 = Object_2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.RectangularVolume);
    Object_2.ChangeType(oType_2);
    Object_2.ZPosition = 2;
    Object_2.Material = 'N-BK7';
    RectVolume2_data = Object_2.ObjectData;
    RectVolume2_data.X1HalfWidth = 12;
    RectVolume2_data.Y1HalfWidth = 12;
    RectVolume2_data.ZLength = 40;
    RectVolume2_data.X2HalfWidth = 12;
    RectVolume2_data.Y2HalfWidth = 12;
    RectVolume2_volphysdata = Object_2.VolumePhysicsData;
    RectVolume2_volphysdata.Model = ZOSAPI.Editors.NCE.VolumePhysicsModelType.AngleScattering;
    RectVolume2_volphysdata.ModelSettings.S_AngleScattering_.MeanPath = 5;
    RectVolume2_volphysdata.ModelSettings.S_AngleScattering_.Angle = 30;
    RectVolume2_DrawData = Object_2.DrawData;
    RectVolume2_DrawData.Opacity = ZOSAPI.Common.ZemaxOpacity.P50;
```
 Python 
```csharp
    # Rectangular Volume
    # Scattering Properties
    # Draw:opacity set to 50%
    oType_2 = Object_2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.RectangularVolume)
    Object_2.ChangeType(oType_2)
    Object_2.ZPosition = 2
    Object_2.Material = "N-BK7"
    RectVolume2_data = Object_2.ObjectData
    RectVolume2_data.X1HalfWidth = 12
    RectVolume2_data.Y1HalfWidth = 12
    RectVolume2_data.ZLength = 40
    RectVolume2_data.X2HalfWidth = 12
    RectVolume2_data.Y2HalfWidth = 12
    RectVolume2_volphysdata = Object_2.VolumePhysicsData
    RectVolume2_volphysdata.Model = ZOSAPI.Editors.NCE.VolumePhysicsModelType.AngleScattering
    RectVolume2_volphysdata.ModelSettings._S_AngleScattering.MeanPath = 5
    RectVolume2_volphysdata.ModelSettings._S_AngleScattering.Angle = 30
    RectVolume2_DrawData = Object_2.DrawData
    RectVolume2_DrawData.Opacity = ZOSAPI.Common.ZemaxOpacity.P50
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a53a7179cd83319c494f80d9972e2e30ea6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator AngleScattering

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a53a7179cd83319c494f80d9972e2e30eadc4fcb9c19552345dd241d2febf8036c"></a>


#### Enumerator DLLDefinedScattering

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a53a7179cd83319c494f80d9972e2e30ead9f885c376b9b4d9b80597c210a0345f"></a>


#### Enumerator PhotoluminescenceModel

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a53a7179cd83319c494f80d9972e2e30ea559f809751b7852ccaefa62c3b16cbac"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.VolumePhysicsModelType"}]}`
-->

### Enumeration type EfficiencySpectrumType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9ba5d28c37279724bc7bb5a569291006"></a>

![][public]

**Definition**:


```csharp
enum EfficiencySpectrumType {
  QuantumYield = 0,
  Excitation = 1
}
```


#### Enumerator QuantumYield

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9ba5d28c37279724bc7bb5a569291006a9a6f1f0e57cb6640866f392f8e0994a2"></a>


#### Enumerator Excitation

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9ba5d28c37279724bc7bb5a569291006af09fa9f4993a96f958719123aa36c702"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.EfficiencySpectrumType"}]}`
-->

### Enumeration type NCEIndexType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a82b87d6c9945e2691cdb017282d1192b"></a>

![][public]

**Definition**:


```csharp
enum NCEIndexType {
  Isotropic,
  Birefringent,
  GRIN
}
```


#### Enumerator Isotropic

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a82b87d6c9945e2691cdb017282d1192ba14b5edf8fb82e568afeb4413c67fa479"></a>


#### Enumerator Birefringent

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a82b87d6c9945e2691cdb017282d1192baa33c18eec7938a3f2a80aa48b7fa9f81"></a>


#### Enumerator GRIN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a82b87d6c9945e2691cdb017282d1192ba25f075decfcc2fee2d9ec72ff0692051"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.NCEIndexType"}]}`
-->

### Enumeration type BirefringentMode

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1abccebfa1903600d47365f01924989ad2"></a>

![][public]

**Definition**:


```csharp
enum BirefringentMode {
  TraceOrdinayAndExtraordinary = 0,
  TraceOrdinaryOnly = 1,
  TraceExtraordinaryOnly = 2,
  Waveplate = 3
}
```


#### Enumerator TraceOrdinayAndExtraordinary

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1abccebfa1903600d47365f01924989ad2a2fa1ec0961a9d6188476ef0fba614c72"></a>


#### Enumerator TraceOrdinaryOnly

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1abccebfa1903600d47365f01924989ad2a7f90a1efe4b6bc8c09e630fa386b924d"></a>


#### Enumerator TraceExtraordinaryOnly

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1abccebfa1903600d47365f01924989ad2ab701dcad11ba2f9a07feb95a67c3f784"></a>


#### Enumerator Waveplate

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1abccebfa1903600d47365f01924989ad2ac2c375fa4bf773c1e96cd3be3aee75d1"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.BirefringentMode"}]}`
-->

### Enumeration type BirefringentReflections

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8d727f46e90686cb1d21e1fed405bd07"></a>

![][public]

**Definition**:


```csharp
enum BirefringentReflections {
  TraceReflectedAndRefracted = 0,
  TraceRefractedOnly = 1,
  TraceReflectedOnly = 2
}
```


#### Enumerator TraceReflectedAndRefracted

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8d727f46e90686cb1d21e1fed405bd07a81c56bc70857828a521bd212c91c6fdf"></a>


#### Enumerator TraceRefractedOnly

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8d727f46e90686cb1d21e1fed405bd07aa14ad98e43585c0523ceb59b2ebf85dd"></a>


#### Enumerator TraceReflectedOnly

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a8d727f46e90686cb1d21e1fed405bd07a797d95ca9e1b9d6ff50143a62ab442b6"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.BirefringentReflections"}]}`
-->

### Enumeration type DiffractionSplitType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a112169c58e7c308e11617776c6e5d665"></a>

![][public]

**Definition**:


```csharp
enum DiffractionSplitType {
  DontSplitByOrder = 0,
  SplitByTable = 1,
  SplitByDLL = 2
}
```


#### Enumerator DontSplitByOrder

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a112169c58e7c308e11617776c6e5d665ad62917975560334c53a9b22c61f8e4f8"></a>


#### Enumerator SplitByTable

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a112169c58e7c308e11617776c6e5d665afa484851de4ff6bf40e68e331b155ec5"></a>


#### Enumerator SplitByDLL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a112169c58e7c308e11617776c6e5d665a6fc67b41475569effc5a0963a21686b4"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.DiffractionSplitType"}]}`
-->

### Enumeration type RayTraceModes

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a95faf256ae9d44aafc1ab53062b924b3"></a>

![][public]

**Definition**:


```csharp
enum RayTraceModes {
  Standard = 0,
  Flat = 1,
  Shaded = 2,
  Kernel = 3
}
```


#### Enumerator Standard

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a95faf256ae9d44aafc1ab53062b924b3aeb6d8ae6f20283755b339c0dc273988b"></a>


#### Enumerator Flat

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a95faf256ae9d44aafc1ab53062b924b3a745e3db6a7ffd50e1a72b39482f0882d"></a>


#### Enumerator Shaded

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a95faf256ae9d44aafc1ab53062b924b3a95e4c683b31aacc6c251c95780ff6808"></a>


#### Enumerator Kernel

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a95faf256ae9d44aafc1ab53062b924b3a6ff9f4444ac481652f4412b5e1623846"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.RayTraceModes"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)