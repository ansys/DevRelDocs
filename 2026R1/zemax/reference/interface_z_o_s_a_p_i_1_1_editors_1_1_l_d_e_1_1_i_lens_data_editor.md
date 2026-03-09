# Interface ZOSAPI::Editors::LDE::ILensDataEditor

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor"></a>

![][C#]
![][public]

**Definition**:

This interface defines all properties and methods needed to interact with the Lens Data Editor. This interface can be accessed via the IOpticalSystem interface.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            // remove all variables and add a F# solve on last surface radius
            ILensDataEditor TheLDE = TheSystem.LDE;
            IOpticalSystemTools tools = TheSystem.Tools;
            tools.RemoveAllVariables();
            ILDERow Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
            ISolveData Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
            Solver._S_FNumber.FNumber = 3.1415;
            Surface_Last.RadiusCell.SetSolveData(Solver);
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile1.zos");
            TheSystem.SaveAs(SampleFile);
```
 C++ 
```csharp
    // remove all variables and add a F# solve on last surface radius
    ILensDataEditorPtr TheLDE = TheSystem->LDE;
    //IOpticalSystemTools
    IOpticalSystemToolsPtr tools = TheSystem->Tools;
    tools->RemoveAllVariables();
    ILDERowPtr Surface_Last = TheLDE->GetSurfaceAt(TheLDE->NumberOfSurfaces - 2);
    ISolveDataPtr Solver = Surface_Last->RadiusCell->CreateSolveType(SolveType::SolveType_FNumber);
    Solver->_S_FNumber->FNumber = 3.1415;
    Surface_Last->RadiusCell->SetSolveData(Solver);
    SampleFile = _bstr_t(TheApplication->SamplesDir) + "\\API\\\Seq_Optimization\\\OptimizedFile1.zos";
    TheSystem->SaveAs(SampleFile);
```
 Matlab 
```csharp
    % remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE;
    tools = TheSystem.Tools;
    tools.RemoveAllVariables();
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
    Solver.S_FNumber_.FNumber = 3.1415;
    Surface_Last.RadiusCell.SetSolveData(Solver);
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile1.zos');
    TheSystem.SaveAs(SampleFile);
```
 Python 
```csharp
    # remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE
    #IOpticalSystemTools
    tools = TheSystem.Tools
    tools.RemoveAllVariables()
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2)
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber)
    Solver._S_FNumber.FNumber = 3.1415
    Surface_Last.RadiusCell.SetSolveData(Solver)
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile1.zos'
    TheSystem.SaveAs(SampleFile)
```

**Inherits from**:

* [ZOSAPI.Editors.IEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor)

## Members

* [AddRow](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a7a4b1663300efa48b1af005b71c5e6cc)
* [AddSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a24405b328980c8532e1720d5e1d487a4)
* [CanConvertSurfaceToFreeform](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a80db6b0e932939e477245a06f4ae4923)
* [CanExportPointCloud](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a422a1a7dd68e20b590d198b575010275)
* [CopySurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a06c92b97bb74eeb5cc78d47323213199)
* [CopySurfacesFrom](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a1b370e5f0e2d40adba708ee8bd0e86c1)
* [DeleteAllRows](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a6a214f428fde561b408723563cb63d16)
* [DeleteRowAt](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1acc52182a5f56f3559c49af15351b9d7b)
* [DeleteRowsAt](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a4b0d2919682f61f9bbfc2b1f4a8684ee)
* [Editor](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1afa3443875a539cc24e6fab36d37809a8)
* [FindLabel](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a7174b6b5ffef029916f4bfabf11e0e87)
* [FirstColumn](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a27b946fa8c147c2eac562f430c4849a3)
* [GetApodization](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1abe76e59306607177116c529f81ada40e)
* [GetClosestGlass](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a32e8ccc98c5f685c988877a0256a34dc)
* [GetFirstOrderData](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1afaae2100f996974f3b478e0b08431f82)
* [GetGlass](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a562d3520ce929dbe3ff0f01cdf88b86a)
* [GetGlobalMatrix](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a6f9d669a7be605ba474a8677ec7c3bdd)
* [GetId](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a058096eecc2985d5d17199d462e6b711)
* [GetIndex](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a31d83a11257d60db047fc6f9a54c7087)
* [GetLabel](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a18606f0c9dc9c996a0657988b242402c)
* [GetPupil](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a57c50dad75f2f8d7573192eee1e276a6)
* [GetRowAt](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a55d7953b4bcf937ccc91a22e5ed1b64d)
* [GetSag](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a228bcbea2046ac2c93334b38b55b3186)
* [GetSurfaceAt](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a25b725fa7de9dd2713ed949ac2199b05)
* [GetTool\_AddCoatingsToAllSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a71253220b727af3c1dd29ad262fc06f3)
* [GetTool\_TiltDecenterElements](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a578a1a3e495f95f6218d14b4f4f5ec86)
* [HideEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1aa27886e8ce393b3e7f3da903ad952ddd)
* [HideLDE](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a9ffdb5da83ba8e13246ce8475f68c4be)
* [InsertNewSurfaceAt](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a921fc6dbf53c68b79b520193e1907dc9)
* [InsertRowAt](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a528b4a4c89b73c97f8fb0440be176147)
* [LastColumn](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a338aaf1ab18e840490d43156e87a7ab6)
* [MaxColumn](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1ac48c64eb7297f62d3687762a66f8277d)
* [MinColumn](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a00feb76f3b9e070a94ed7475b351768b)
* [NumberOfNonSequentialSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a05888cf7260534e997be7256ec0c92b0)
* [NumberOfRows](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a28a0d35664035366c10f6b0a3b5003c2)
* [NumberOfSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a2d87212901ae5122ba17d1a7a6acce09)
* [RemoveSurfaceAt](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1aa1607b9e246e6ec730e8b953ad19f32b)
* [RemoveSurfacesAt](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a988bd644de05dbd5257b6affb11f9051)
* [RowToSurfaceOffset](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ad421a7a08b3d3a0e88a072bcfd306556)
* [RunTool\_AddCoatingsToAllSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1aad74a0431fd2fd1ffa1f31f413b2eee3)
* [RunTool\_AddFoldMirror](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1acd432a69bd39fa1bc7cb3bb87e2e94d4)
* [RunTool\_ConvertGlobalToLocalCoordinates](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a6edb7490aecc68244e0c0d8c56eac70a)
* [RunTool\_ConvertLocalToGlobalCoordinates](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a12a8490ebb2b82b8458bf6cd4a80cf72)
* [RunTool\_ConvertSemiDiametersToCircularApertures](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a229b415be6dcb511d56b45c6be31305e)
* [RunTool\_ConvertSemiDiametersToFloatingApertures](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ab1ad314ba62b356c7193d68425cac4e6)
* [RunTool\_ConvertSemiDiametersToMaximumApertures](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ab533e608ce5ab650f0ce681b01b3ad3e)
* [RunTool\_ConvertSurfaceInPlaceToFreeform](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a224aa85ed26d35b8cd6f7a2f62d7adc9)
* [RunTool\_ConvertSurfaceToFreeform](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a7c766394c25dce7ab7bfb26ac9d40f62)
* [RunTool\_DeleteFoldMirror](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a644568b406115dad5c6bb8d8fabc365e)
* [RunTool\_ExportPointCloudFile](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ae9f7c19c9e7947506579dfdf83423803)
* [RunTool\_MakeDoublePass](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a9a1741c5d27414b57823379f2f9a118e)
* [RunTool\_MakeFocal](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a7faaaa761ebf52d34228a817b0b26d2d)
* [RunTool\_RemoveAllApertures](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a6a01986d45e8892e9c1c15441ce2a996)
* [RunTool\_ReplaceVignettingWithApertures](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a936bd169713a0eabe78e1bd66ab98da6)
* [RunTool\_ReverseElements](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ab6d0a54f42598ffcc8ec3fddf31aecb8)
* [RunTool\_TiltDecenterElements](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a194665e9bc01ba37df8fdf63537c609e)
* [SetJonesMatrixData](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a67b14d75b20c3e366d3a2206ee1af1af)
* [SetLabel](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1af7387fb7c4726c28798abe9b8867c09c)
* [SetMuellerMatrixData](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ac4d4286b2d7433e2b32cff2f01ec4d42)
* [ShowEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a9971ba810c39993f1693405663d109a3)
* [ShowLDE](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1abe904e1a4f1f1802b050f62b6078900e)
* [StopSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a0c5f32e7549922f8324acb92b98d6e40)

## Properties

### Property RowToSurfaceOffset

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ad421a7a08b3d3a0e88a072bcfd306556"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ILensDataEditor.RowToSurfaceOffset
```


Gets the offset from a row to a surface. Note that unlike all other editors, this is 0.

The row to surface offset.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RowToSurfaceOffset"}]}`
-->

### Property NumberOfSurfaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a2d87212901ae5122ba17d1a7a6acce09"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ILensDataEditor.NumberOfSurfaces
```


Gets the number of surfaces in the current system.

Usage (see [Example 22](page_ex22.md#page_ex22) for a full sample)


C# 
```csharp
            // Set up Batch Ray Trace
            ZOSAPI.Tools.RayTrace.IBatchRayTrace raytrace = TheSystem.Tools.OpenBatchRayTrace();
            int nsur = TheSystem.LDE.NumberOfSurfaces;
            int max_rays = 30;
            ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1), ZOSAPI.Tools.RayTrace.RaysType.Real, nsur);
```
 C++ 
```csharp
    // Set up Batch Ray Trace
    IBatchRayTracePtr raytrace = TheSystem->Tools->OpenBatchRayTrace();
    int nsur = TheSystem->LDE->NumberOfSurfaces;
    int max_rays = 30;
    IRayTraceNormUnpolDataPtr normUnPolData = raytrace->CreateNormUnpol((max_rays + 1) * (max_rays + 1), RaysType::RaysType_Real, nsur);
```
 Matlab 
```csharp
    % Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace();
    nsur = TheSystem.LDE.NumberOfSurfaces;
    max_rays = 30;
    normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1),ZOSAPI.Tools.RayTrace.RaysType.Real,nsur);
```
 Python 
```csharp
    # Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace()
    nsur = TheSystem.LDE.NumberOfSurfaces
    max_rays = 30
    normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1), ZOSAPI.Tools.RayTrace.RaysType.Real, nsur)
```
 


The number of surfaces.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.NumberOfSurfaces"}]}`
-->

### Property NumberOfNonSequentialSurfaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a05888cf7260534e997be7256ec0c92b0"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ILensDataEditor.NumberOfNonSequentialSurfaces
```


Gets the number of surfaces in the current system.

The number of surfaces.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.NumberOfNonSequentialSurfaces"}]}`
-->

### Property FirstColumn

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a27b946fa8c147c2eac562f430c4849a3"></a>

![][public]

**Definition**:


```csharp
SurfaceColumn ZOSAPI.Editors.LDE.ILensDataEditor.FirstColumn
```


Gets the first available column.

The first column.


**Return type**: [SurfaceColumn](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1ad5f58db223456ac24920f46ac6d62412)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.FirstColumn"}]}`
-->

### Property LastColumn

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a338aaf1ab18e840490d43156e87a7ab6"></a>

![][public]

**Definition**:


```csharp
SurfaceColumn ZOSAPI.Editors.LDE.ILensDataEditor.LastColumn
```


Gets the last available column.

The last column.


**Return type**: [SurfaceColumn](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1ad5f58db223456ac24920f46ac6d62412)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.LastColumn"}]}`
-->

### Property StopSurface

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a0c5f32e7549922f8324acb92b98d6e40"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ILensDataEditor.StopSurface
```


Gets the number of the stop surface.

The stop surface.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.StopSurface"}]}`
-->

## Public functions

### Function GetSurfaceAt

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a25b725fa7de9dd2713ed949ac2199b05"></a>

![][public]


```csharp
ILDERow ZOSAPI.Editors.LDE.ILensDataEditor.GetSurfaceAt(int SurfaceNumber)
```


Gets the data for the specified surface.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            //setup a few variables
            tools.SetAllRadiiVariable();
            ILDERow Surface1 = TheLDE.GetSurfaceAt(1);
            ILDERow Surface2 = TheLDE.GetSurfaceAt(2);
            ILDERow Surface5 = TheLDE.GetSurfaceAt(5);
            ILDERow Surface6 = TheLDE.GetSurfaceAt(6);
            ILDERow Surface9 = TheLDE.GetSurfaceAt(9);
            ILDERow Surface10 = TheLDE.GetSurfaceAt(10);
            ILDERow Surface11 = TheLDE.GetSurfaceAt(11);
```
 C++ 
```csharp
    // setup a few variables
    tools->SetAllRadiiVariable();
    ILDERowPtr Surface1 = TheLDE->GetSurfaceAt(1);
    ILDERowPtr Surface2 = TheLDE->GetSurfaceAt(2);
    ILDERowPtr Surface5 = TheLDE->GetSurfaceAt(5);
    ILDERowPtr Surface6 = TheLDE->GetSurfaceAt(6);
    ILDERowPtr Surface9 = TheLDE->GetSurfaceAt(9);
    ILDERowPtr Surface10 = TheLDE->GetSurfaceAt(10);
    ILDERowPtr Surface11 = TheLDE->GetSurfaceAt(11);
```
 Matlab 
```csharp
    %setup a few variables
    tools.SetAllRadiiVariable();            
    Surface1 = TheLDE.GetSurfaceAt(1);
    Surface2 = TheLDE.GetSurfaceAt(2);
    Surface5 = TheLDE.GetSurfaceAt(5);
    Surface6 = TheLDE.GetSurfaceAt(6);
    Surface9 = TheLDE.GetSurfaceAt(9);
    Surface10 = TheLDE.GetSurfaceAt(10);
    Surface11 = TheLDE.GetSurfaceAt(11);
```
 Python 
```csharp
    # setup a few variables
    tools.SetAllRadiiVariable()
    Surface1 = TheLDE.GetSurfaceAt(1)
    Surface2 = TheLDE.GetSurfaceAt(2)
    Surface5 = TheLDE.GetSurfaceAt(5)
    Surface6 = TheLDE.GetSurfaceAt(6)
    Surface9 = TheLDE.GetSurfaceAt(9)
    Surface10 = TheLDE.GetSurfaceAt(10)
    Surface11 = TheLDE.GetSurfaceAt(11)
```
 


**Parameters**:

* **SurfaceNumber**: The surface number (0 to NumberOfSurfaces-1).


**Returns**:


**Parameters**:

* int **SurfaceNumber**

**Return type**: [ILDERow](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_row)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetSurfaceAt"}]}`
-->

### Function InsertNewSurfaceAt

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a921fc6dbf53c68b79b520193e1907dc9"></a>

![][public]


```csharp
ILDERow ZOSAPI.Editors.LDE.ILensDataEditor.InsertNewSurfaceAt(int SurfaceNumber)
```


Inserts a new surface at the specified position.

Usage (see [Example 19](page_ex19.md#page_ex19) for a full sample)


C# 
```csharp
            // Get interface of Lens Data Editor and add 3 surfaces.
            ILensDataEditor TheLDE = TheSystem.LDE;
            TheLDE.InsertNewSurfaceAt(2);
            TheLDE.InsertNewSurfaceAt(2);
            TheLDE.InsertNewSurfaceAt(2);

            // Set thickness and material for each surface.
            TheLDE.GetSurfaceAt(1).Thickness = 30;
            TheLDE.GetSurfaceAt(2).Thickness = 20;
            TheLDE.GetSurfaceAt(4).Thickness = 30;
            TheLDE.GetSurfaceAt(2).Material = "N-BK7";
```
 C++ 
```csharp
    // Get interface of Lens Data Editor and add 3 surfaces.
    ILensDataEditorPtr TheLDE = TheSystem->LDE;
    TheLDE->InsertNewSurfaceAt(2);
    TheLDE->InsertNewSurfaceAt(2);
    TheLDE->InsertNewSurfaceAt(2);

    // Set thickness and material for each surface.
    TheLDE->GetSurfaceAt(1)->Thickness = 30;
    TheLDE->GetSurfaceAt(2)->Thickness = 20;
    TheLDE->GetSurfaceAt(4)->Thickness = 30;
    TheLDE->GetSurfaceAt(2)->Material = "N-BK7";
```
 Matlab 
```csharp
    % Get interface of Lens Data Editor and add 3 surfaces.
    TheLDE = TheSystem.LDE;
    TheLDE.InsertNewSurfaceAt(2);
    TheLDE.InsertNewSurfaceAt(2);
    TheLDE.InsertNewSurfaceAt(2);

    % Set thickness and material for each surface.
    TheLDE.GetSurfaceAt(1).Thickness = 30;
    TheLDE.GetSurfaceAt(2).Thickness = 20;
    TheLDE.GetSurfaceAt(4).Thickness = 30;
    TheLDE.GetSurfaceAt(2).Material = 'N-BK7';
```
 Python 
```csharp
    # Get interface of Lens Data Editor and add 3 surfaces.
    TheLDE = TheSystem.LDE
    TheLDE.InsertNewSurfaceAt(2)
    TheLDE.InsertNewSurfaceAt(2)
    TheLDE.InsertNewSurfaceAt(2)

    # Set thickness and material for each surface.
    TheLDE.GetSurfaceAt(1).Thickness = 30
    TheLDE.GetSurfaceAt(2).Thickness = 20
    TheLDE.GetSurfaceAt(4).Thickness = 30
    TheLDE.GetSurfaceAt(2).Material = 'N-BK7'
```
 


**Parameters**:

* **SurfaceNumber**: The surface number (1 to NumberOfSurfaces).


**Returns**:


**Parameters**:

* int **SurfaceNumber**

**Return type**: [ILDERow](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_row)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.InsertNewSurfaceAt"}]}`
-->

### Function AddSurface

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a24405b328980c8532e1720d5e1d487a4"></a>

![][public]


```csharp
ILDERow ZOSAPI.Editors.LDE.ILensDataEditor.AddSurface()
```


Adds a new surface as the last surface in the system.

**Returns**:


**Return type**: [ILDERow](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_row)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.AddSurface"}]}`
-->

### Function RemoveSurfaceAt

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1aa1607b9e246e6ec730e8b953ad19f32b"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILensDataEditor.RemoveSurfaceAt(int SurfaceNumber)
```


Removes the surface at the specified location.

**Parameters**:

* **SurfaceNumber**: The surface number to remove (1 to NumberOfSurfaces-1).


**Returns**:

<code>true</code> if the surface was successfully remove; otherwise, <code>false</code>.


**Parameters**:

* int **SurfaceNumber**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RemoveSurfaceAt"}]}`
-->

### Function RemoveSurfacesAt

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a988bd644de05dbd5257b6affb11f9051"></a>

![][public]


```csharp
int ZOSAPI.Editors.LDE.ILensDataEditor.RemoveSurfacesAt(int SurfaceNumber, int numSurfaces)
```


Removes one or more surfaces at the specified location.

**Parameters**:

* **SurfaceNumber**: The surface number to remove (1 to NumberOfSurfaces-1).
* **numSurfaces**: The number surfaces to remove.


**Returns**:

The number of surfaces actually removed.


**Parameters**:

* int **SurfaceNumber**
* int **numSurfaces**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RemoveSurfacesAt"}]}`
-->

### Function ShowLDE

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1abe904e1a4f1f1802b050f62b6078900e"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILensDataEditor.ShowLDE()
```


Shows this editor in the UI. Note that this only has an effect if the IOpticalSystem.Mode is ZOSAPI_Mode.Plugin.

**Returns**:


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.ShowLDE"}]}`
-->

### Function HideLDE

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a9ffdb5da83ba8e13246ce8475f68c4be"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.HideLDE()
```


Closes this editor in the UI. Note that this only has an effect if the IOpticalSystem.Mode is ZOSAPI_Mode.Plugin.

**Returns**:


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.HideLDE"}]}`
-->

### Function GetTool\_AddCoatingsToAllSurfaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a71253220b727af3c1dd29ad262fc06f3"></a>

![][public]


```csharp
ILDETool_AddCoatingsToAllSurfaces ZOSAPI.Editors.LDE.ILensDataEditor.GetTool_AddCoatingsToAllSurfaces()
```


Gets the settings for the Add Coatings to All Surfaces tool.

**Returns**:


**Return type**: [ILDETool\_AddCoatingsToAllSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tool___add_coatings_to_all_surfaces.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tool___add_coatings_to_all_surfaces)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetTool_AddCoatingsToAllSurfaces"}]}`
-->

### Function RunTool\_AddCoatingsToAllSurfaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1aad74a0431fd2fd1ffa1f31f413b2eee3"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_AddCoatingsToAllSurfaces(ILDETool_AddCoatingsToAllSurfaces settings)
```


Runs the Add Coatings to All Surfaces tool with the specified settings (GetTool_AddCoatingsToAllSurfaces).

**Parameters**:

* **settings**: The settings.


**Parameters**:

* [ILDETool\_AddCoatingsToAllSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tool___add_coatings_to_all_surfaces.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tool___add_coatings_to_all_surfaces) **settings**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_AddCoatingsToAllSurfaces"}]}`
-->

### Function RunTool\_RemoveAllApertures

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a6a01986d45e8892e9c1c15441ce2a996"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_RemoveAllApertures()
```


Remove All Apertures.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_RemoveAllApertures"}]}`
-->

### Function RunTool\_ConvertSemiDiametersToCircularApertures

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a229b415be6dcb511d56b45c6be31305e"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertSemiDiametersToCircularApertures()
```


Convert Semi-Diameters to Circular Apertures.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertSemiDiametersToCircularApertures"}]}`
-->

### Function RunTool\_ConvertSemiDiametersToFloatingApertures

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ab1ad314ba62b356c7193d68425cac4e6"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertSemiDiametersToFloatingApertures()
```


Convert Semi-Diameters to Floating Apertures.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertSemiDiametersToFloatingApertures"}]}`
-->

### Function RunTool\_ConvertSemiDiametersToMaximumApertures

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ab533e608ce5ab650f0ce681b01b3ad3e"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertSemiDiametersToMaximumApertures()
```


Convert Semi-Diameters to Maximum Apertures.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertSemiDiametersToMaximumApertures"}]}`
-->

### Function RunTool\_ReplaceVignettingWithApertures

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a936bd169713a0eabe78e1bd66ab98da6"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ReplaceVignettingWithApertures()
```


Replace Vignetting with Apertures.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ReplaceVignettingWithApertures"}]}`
-->

### Function RunTool\_ConvertGlobalToLocalCoordinates

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a6edb7490aecc68244e0c0d8c56eac70a"></a>

![][public]


```csharp
CoordinateConversionResult ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertGlobalToLocalCoordinates(int FirstSurface, int LastSurface, ConversionOrder order)
```


Converts Global to Local coordinates.

Usage (see [Example 19](page_ex19.md#page_ex19) for a full sample)


C# 
```csharp
            // Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
            TheLDE.RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1);
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e19_Sample_Prism_Chain_GlobalCoordinate.zos");
```
 C++ 
```csharp
    // Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
    TheLDE->RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1);
    TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e19_Sample_Prism_Chain_GlobalCoordinate.zos");
```
 Matlab 
```csharp
    % Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
    TheLDE.RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1);
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e19_Sample_Prism_Chain_GlobalCoordinate.zos'));
```
 Python 
```csharp
    # Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
    TheLDE.RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1)
    TheSystem.SaveAs(TheApplication.SamplesDir + '\\API\\Python\\e19_Sample_Prism_Chain_GlobalCoordinate.zos')
```
 


**Parameters**:

* **FirstSurface**: The first surface.
* **LastSurface**: The last surface.
* **order**: The order.


**Returns**:


**Parameters**:

* int **FirstSurface**
* int **LastSurface**
* [ConversionOrder](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a0dc91052ccc9b3186cf64dbced7b779d) **order**

**Return type**: [CoordinateConversionResult](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a9a46f77deea1ea585a25d6efd7ec24cc)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertGlobalToLocalCoordinates"}]}`
-->

### Function RunTool\_ConvertLocalToGlobalCoordinates

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a12a8490ebb2b82b8458bf6cd4a80cf72"></a>

![][public]


```csharp
CoordinateConversionResult ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertLocalToGlobalCoordinates(int FirstSurface, int LastSurface, int referenceSurface)
```


Converts Local to Global coordinates.

Usage (see [Example 19](page_ex19.md#page_ex19) for a full sample)


C# 
```csharp
            // Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
            TheLDE.RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1);
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e19_Sample_Prism_Chain_GlobalCoordinate.zos");
```
 C++ 
```csharp
    // Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
    TheLDE->RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1);
    TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e19_Sample_Prism_Chain_GlobalCoordinate.zos");
```
 Matlab 
```csharp
    % Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
    TheLDE.RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1);
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e19_Sample_Prism_Chain_GlobalCoordinate.zos'));
```
 Python 
```csharp
    # Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
    TheLDE.RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1)
    TheSystem.SaveAs(TheApplication.SamplesDir + '\\API\\Python\\e19_Sample_Prism_Chain_GlobalCoordinate.zos')
```
 


**Parameters**:

* **FirstSurface**: The first surface.
* **LastSurface**: The last surface.
* **referenceSurface**: The reference surface.


**Returns**:


**Parameters**:

* int **FirstSurface**
* int **LastSurface**
* int **referenceSurface**

**Return type**: [CoordinateConversionResult](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a9a46f77deea1ea585a25d6efd7ec24cc)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertLocalToGlobalCoordinates"}]}`
-->

### Function GetApodization

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1abe76e59306607177116c529f81ada40e"></a>

![][public]


```csharp
double ZOSAPI.Editors.LDE.ILensDataEditor.GetApodization(double px, double py)
```


This item computes the intensity apodization of a ray from the apodization type and value.

**Parameters**:

* **px**: normalized pupil coordinates - x
* **py**: normalized pupil coordinates - y


**Returns**:

intensity apodization


**Parameters**:

* double **px**
* double **py**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetApodization"}]}`
-->

### Function GetFirstOrderData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1afaae2100f996974f3b478e0b08431f82"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.GetFirstOrderData(out double EFL, out double paraxialWorkingFNumber, out double realWorkingFNumber, out double paraxialImageHeight, out double paraxialMagnification)
```


This item extracts first order data about the lens.

**Parameters**:

* **EFL**: Estimated focal length
* **paraxialWorkingFNumber**: Paraxial working f#
* **realWorkingFNumber**: Real working f#
* **paraxialImageHeight**: Paraxial image height
* **paraxialMagnification**: Paraxial magnification


**Parameters**:

* out double **EFL**
* out double **paraxialWorkingFNumber**
* out double **realWorkingFNumber**
* out double **paraxialImageHeight**
* out double **paraxialMagnification**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetFirstOrderData"}]}`
-->

### Function GetGlass

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a562d3520ce929dbe3ff0f01cdf88b86a"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILensDataEditor.GetGlass(int Surface, out string glassName, out double nd, out double vd, out double dpgf)
```


Retrieve data about the glass on any surface.

**Parameters**:

* **Surface**: Surface # (0-based)
* **glassName**: The name of the glass
* **nd**: The nd value
* **vd**: The vd value
* **dpgf**: The dpgf value


**Returns**:

<code>false</code> if the surface is not valid, is not made of glass, or is a gradient index; otherwise, <code>true</code>.


**Parameters**:

* int **Surface**
* out string **glassName**
* out double **nd**
* out double **vd**
* out double **dpgf**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetGlass"}]}`
-->

### Function GetGlobalMatrix

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a6f9d669a7be605ba474a8677ec7c3bdd"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILensDataEditor.GetGlobalMatrix(int Surface, out double R11, out double R12, out double R13, out double R21, out double R22, out double R23, out double R31, out double R32, out double R33, out double Xo, out double Yo, out double Zo)
```


Get the matrix required to convert any local coordinates (such as from a ray trace) into global coordinates.

**Parameters**:

* **Surface**: Surface # (0-based)
* **R11**: Row 1, Column 1
* **R12**: Row 1, Column 2
* **R13**: Row 1, Column 3
* **R21**: Row 2, Column 1
* **R22**: Row 2, Column 2
* **R23**: Row 2, Column 3
* **R31**: Row 3, Column 1
* **R32**: Row 3, Column 2
* **R33**: Row 3, Column 3
* **Xo**: X offset
* **Yo**: Y offset
* **Zo**: Z offset


**Returns**:

True for a valid surface; False otherwise


**Parameters**:

* int **Surface**
* out double **R11**
* out double **R12**
* out double **R13**
* out double **R21**
* out double **R22**
* out double **R23**
* out double **R31**
* out double **R32**
* out double **R33**
* out double **Xo**
* out double **Yo**
* out double **Zo**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetGlobalMatrix"}]}`
-->

### Function GetIndex

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a31d83a11257d60db047fc6f9a54c7087"></a>

![][public]


```csharp
int ZOSAPI.Editors.LDE.ILensDataEditor.GetIndex(int Surface, int NumberOfWavelengths, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In, Out]double[] indexAtWavelength)
```


Extract refraction data for any surface.

**Parameters**:

* **Surface**: Surface # (0-based)
* **NumberOfWavelengths**: The number of wavelenghts to retrieve. Note: this number must be the length of indexAtWavelength.
* **indexAtWavelength**: When the function returns, this will hold the index at each system wavelength. Note: only data for the minimum of 'NumberOfWavelengths' and the number of system wavelengths will be populated.


**Returns**:

The count of index data successfully read.


**Parameters**:

* int **Surface**
* int **NumberOfWavelengths**
* _[In, Out]_ double[] **indexAtWavelength**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetIndex"}]}`
-->

### Function SetLabel

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1af7387fb7c4726c28798abe9b8867c09c"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILensDataEditor.SetLabel(int Surface, int label)
```


Sets the integer label associated with the specified surface.

**Parameters**:

* **Surface**: Surface # (0-based)
* **label**: The new label number for the surface.


**Returns**:

True if the surface is valid; false otherwise.


**Parameters**:

* int **Surface**
* int **label**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.SetLabel"}]}`
-->

### Function GetLabel

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a18606f0c9dc9c996a0657988b242402c"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILensDataEditor.GetLabel(int Surface, out int label)
```


Gets the integer label associated with the specified surface.

**Parameters**:

* **Surface**: Surface # (0-based)
* **label**: The label number for the surface.


**Returns**:

True if the surface is valid; false otherwise.


**Parameters**:

* int **Surface**
* out int **label**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetLabel"}]}`
-->

### Function FindLabel

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a7174b6b5ffef029916f4bfabf11e0e87"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILensDataEditor.FindLabel(int label, out int Surface)
```


Finds the surface associated with the specified integer label.

**Parameters**:

* **label**: The label number to find.
* **Surface**: The first surface found with a matching label.


**Returns**:

True if the label was found; False otherwise.


**Parameters**:

* int **label**
* out int **Surface**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.FindLabel"}]}`
-->

### Function GetPupil

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a57c50dad75f2f8d7573192eee1e276a6"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.GetPupil(out ZemaxApertureType type, out double ApertureValue, out double entrancePupilDiameter, out double entrancePupilPosition, out double exitPupilDiameter, out double exitPupilPosition, out PupilApodizationType ApodizationType, out double ApodizationFactor)
```


Retrieve pupil data.

**Parameters**:

* **type**: System aperture type.
* **ApertureValue**: If type=ZemaxApertureType.FloatByStopSize then stop surface semi-diameter, else aperture value.
* **entrancePupilDiameter**: The entrance pupil diameter.
* **entrancePupilPosition**: The entrance pupil position.
* **exitPupilDiameter**: The exit pupil diameter.
* **exitPupilPosition**: The exit pupil position.
* **ApodizationType**: The type of apodization.
* **ApodizationFactor**: The apodization factor.


**Parameters**:

* out [ZemaxApertureType](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1ad2ce4c1d99a0188d1e9ca955065d7541) **type**
* out double **ApertureValue**
* out double **entrancePupilDiameter**
* out double **entrancePupilPosition**
* out double **exitPupilDiameter**
* out double **exitPupilPosition**
* out [PupilApodizationType](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a338d8221124df4c25bdc9aeb71d59bd0) **ApodizationType**
* out double **ApodizationFactor**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetPupil"}]}`
-->

### Function GetSag

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a228bcbea2046ac2c93334b38b55b3186"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILensDataEditor.GetSag(int Surface, double X, double Y, out double sag, out double alternateSag)
```


Gets the sag values(s) for the specified surface, in lens units.

**Parameters**:

* **Surface**: Surface # (0-based). A value of -1 will return data for the Image surface.
* **X**: X coordinate on the surface, in lens units.
* **Y**: Y coordinate on the surface, in lens units.
* **sag**: The sag value.
* **alternateSag**: The alternate sag value (if applicable).


**Returns**:

True if the surface is valid; False otherwise.


**Parameters**:

* int **Surface**
* double **X**
* double **Y**
* out double **sag**
* out double **alternateSag**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetSag"}]}`
-->

### Function CopySurfaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a06c92b97bb74eeb5cc78d47323213199"></a>

![][public]


```csharp
int ZOSAPI.Editors.LDE.ILensDataEditor.CopySurfaces(int fromSurfaceNumber, int NumberOfSurfaces, int toSurfaceNumber)
```


Copy and paste the specified number of surfaces from one location to another. <br/>
 Note that it is okay for the source and destination to overlap.

Usage (see [Example 19](page_ex19.md#page_ex19) for a full sample)


C# 
```csharp
            // Copy 3 surfaces starting from surface number 2 in LDE and paste to surface number 5, 
            // which will become surface number 8 after pasting.
            for (int i = 0; i < 10; i++)
            {
                TheLDE.CopySurfaces(2, 3, 5);
            }
            // Save file
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e19_Sample_Prism_Chain.zos");
```
 C++ 
```csharp
    // Copy 3 surfaces starting from surface number 2 in LDE and paste to surface number 5, 
    // which will become surface number 8 after pasting.
    for (int i = 0; i < 10; i++) {
        TheLDE->CopySurfaces(2, 3, 5);
    }
    // Save file
    TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e19_Sample_Prism_Chain.zos");
```
 Matlab 
```csharp
    % Copy 3 surfaces starting from surface number 2 in LDE and paste to surface number 5, which will become surface number 8 after pasting.
    for i =1:10
        TheLDE.CopySurfaces(2, 3, 5);
    end
    % Save file
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e19_Sample_Prism_Chain.zos'));
```
 Python 
```csharp
    # Copy 3 surfaces starting from surface number 2 in LDE and paste to surface number 5, which will become surface number 8 after pasting.
    for i in range(10):
        TheLDE.CopySurfaces(2, 3, 5)
    # Save file
    TheSystem.SaveAs(TheApplication.SamplesDir + '\\API\\Python\\e19_Sample_Prism_Chain.zos')
```
 


**Parameters**:

* **fromSurfaceNumber**: First surface number to copy (1 to NumberOfSurfaces).
* **NumberOfSurfaces**: The number of surfaces to copy.
* **toSurfaceNumber**: Row to start inserting the surfaces (1 to NumberOfSurfaces+1).


**Returns**:

The number of surfaces actually copied.


**Parameters**:

* int **fromSurfaceNumber**
* int **NumberOfSurfaces**
* int **toSurfaceNumber**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.CopySurfaces"}]}`
-->

### Function CopySurfacesFrom

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a1b370e5f0e2d40adba708ee8bd0e86c1"></a>

![][public]


```csharp
int ZOSAPI.Editors.LDE.ILensDataEditor.CopySurfacesFrom(ILensDataEditor fromEditor, int fromSurfaceNumber, int NumberOfSurfaces, int toSurfaceNumber)
```


Copy and paste the specified number of surfaces from one location (in the specified system) to another location (in this system). Note that it is okay for the source and destination to overlap.

**Parameters**:

* **fromEditor**: System to copy the surfaces from.
* **fromSurfaceNumber**: First surface number to copy (1 to NumberOfSurfaces).
* **NumberOfSurfaces**: The number of surfaces to copy.
* **toSurfaceNumber**: To surface number (1 to NumberOfSurfaces+1).


**Returns**:

The number of surfaces actually copied.


**Parameters**:

* [ILensDataEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor) **fromEditor**
* int **fromSurfaceNumber**
* int **NumberOfSurfaces**
* int **toSurfaceNumber**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.CopySurfacesFrom"}]}`
-->

### Function RunTool\_ReverseElements

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ab6d0a54f42598ffcc8ec3fddf31aecb8"></a>

![][public]


```csharp
IMessage ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ReverseElements(int firstSurface, int lastSurface)
```


Reverses a lens element or group.

**Parameters**:

* **firstSurface**: The first surface of the lens group to be reversed (0-based).
* **lastSurface**: The last surface of the lens group to be reversed (0-based).


**Returns**:

<code>null</code> on success; an IMessage otherwise


**Parameters**:

* int **firstSurface**
* int **lastSurface**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ReverseElements"}]}`
-->

### Function RunTool\_AddFoldMirror

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1acd432a69bd39fa1bc7cb3bb87e2e94d4"></a>

![][public]


```csharp
IMessage ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_AddFoldMirror(int Surface, TiltType tilt, double reflectAngle)
```


Make the specified surface a fold mirror and inserts the required coordinate breaks to bend a beam.

**Parameters**:

* **Surface**: Selects which surface will become the fold mirror (0-based). The selected surface should be a dummy surface already located at the desired fold position.
* **tilt**: Select either tilt about the local x or y axis.
* **reflectAngle**: The angle between the incident and reflected beam.


**Returns**:

<code>null</code> on success; an IMessage otherwise


**Parameters**:

* int **Surface**
* [TiltType](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a3fae9abe6634f0ece3a4b851207ae627) **tilt**
* double **reflectAngle**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_AddFoldMirror"}]}`
-->

### Function RunTool\_DeleteFoldMirror

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a644568b406115dad5c6bb8d8fabc365e"></a>

![][public]


```csharp
IMessage ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_DeleteFoldMirror(int foldSurface)
```


Deletes an existing fold mirror, including any neighboring coordinate breaks.

**Parameters**:

* **foldSurface**: Selects which mirror surface will be deleted (0-based).


**Returns**:

<code>null</code> on success; an IMessage otherwise


**Parameters**:

* int **foldSurface**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_DeleteFoldMirror"}]}`
-->

### Function RunTool\_MakeDoublePass

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a9a1741c5d27414b57823379f2f9a118e"></a>

![][public]


```csharp
IMessage ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_MakeDoublePass(int reflectAtSurface)
```


Create a second pass through the specified surfaces that represents a reflection propagating back through the optical system.

**Parameters**:

* **reflectAtSurface**: The surface at which to insert a mirror and create the reflected system (0-based).


**Returns**:

<code>null</code> on success; an IMessage otherwise


**Parameters**:

* int **reflectAtSurface**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_MakeDoublePass"}]}`
-->

### Function RunTool\_MakeFocal

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a7faaaa761ebf52d34228a817b0b26d2d"></a>

![][public]


```csharp
IMessage ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_MakeFocal(double focalLength)
```


Scale the lens to the desired focal length.

**Parameters**:

* **focalLength**: The desired focal length.


**Returns**:

<code>null</code> on success; an IMessage otherwise


**Parameters**:

* double **focalLength**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_MakeFocal"}]}`
-->

### Function CanConvertSurfaceToFreeform

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a80db6b0e932939e477245a06f4ae4923"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILensDataEditor.CanConvertSurfaceToFreeform(int fromSurface)
```


Checks if surface can be converted to a TrueFreeForm type.

**Parameters**:

* **fromSurface**: The surface you want to check for compatibility with a TrueFreeForm representation.


**Returns**:

True if surface can be converted, False otherwise.


**Parameters**:

* int **fromSurface**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.CanConvertSurfaceToFreeform"}]}`
-->

### Function RunTool\_ConvertSurfaceToFreeform

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a7c766394c25dce7ab7bfb26ac9d40f62"></a>

![][public]


```csharp
IMessage ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertSurfaceToFreeform(int fromSurface, int freeformSurface, int gridNx, int gridNy, bool limitToClearAperture)
```


Converts one sag-based surface into a TrueFreeForm surface on another row.

**Parameters**:

* **fromSurface**: The sag-based surface you want to convert to a TrueFreeForm representation.
* **freeformSurface**: The index of the TrueFreeForm surface.
* **gridNx**: The number of grid points in the x-direction.
* **gridNy**: The number of grid points in the y-direction.
* **limitToClearAperture**: If true, limit the grid sampling to the clear aperture of the original surface.


**Returns**:

<code>null</code> on success; an IMessage otherwise


**Parameters**:

* int **fromSurface**
* int **freeformSurface**
* int **gridNx**
* int **gridNy**
* bool **limitToClearAperture**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertSurfaceToFreeform"}]}`
-->

### Function RunTool\_ConvertSurfaceInPlaceToFreeform

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a224aa85ed26d35b8cd6f7a2f62d7adc9"></a>

![][public]


```csharp
IMessage ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertSurfaceInPlaceToFreeform(int fromSurface, int gridNx, int gridNy, bool limitToClearAperture)
```


Converts one sag-based surface into a TrueFreeForm surface on the same row.

**Parameters**:

* **fromSurface**: The sag-based surface you want to convert to a TrueFreeForm representation.
* **gridNx**: The number of grid points in the x-direction.
* **gridNy**: The number of grid points in the y-direction.

/// 

**Parameters**:

* **limitToClearAperture**: If true, limit the grid sampling to the clear aperture of the original surface.


**Returns**:

<code>null</code> on success; an IMessage otherwise


**Parameters**:

* int **fromSurface**
* int **gridNx**
* int **gridNy**
* bool **limitToClearAperture**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ConvertSurfaceInPlaceToFreeform"}]}`
-->

### Function CanExportPointCloud

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a422a1a7dd68e20b590d198b575010275"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILensDataEditor.CanExportPointCloud(int Surface)
```


Checks if surface can be exported to a point cloud file.

**Parameters**:

* **Surface**: The surface you want to check for point cloud export.


**Returns**:

True if surface can be exported, False otherwise.


**Parameters**:

* int **Surface**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.CanExportPointCloud"}]}`
-->

### Function RunTool\_ExportPointCloudFile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ae9f7c19c9e7947506579dfdf83423803"></a>

![][public]


```csharp
IMessage ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ExportPointCloudFile(int Surface, string filename, int gridNx, int gridNy, bool includeSurfaceNormals, PointCloudFileFormat format)
```


For supported surfaces, exports to a point cloud file.

**Parameters**:

* **Surface**: The sag-based surface you want to convert to a freeform representation.

<br/>
 

**Parameters**:

* **filename**: The filename for the point cloud data file.

<br/>
 

**Parameters**:

* **gridNx**: The number of sample points in the x-direction.
* **gridNy**: The number of sample points in the y-direction.
* **includeSurfaceNormals**: Whether to include surface normal information in the file.
* **format**: What format to use for the file, choices are ASCII, Binary, and CompressedBinary.


**Returns**:

<code>null</code> on success; an IMessage otherwise


**Parameters**:

* int **Surface**
* string **filename**
* int **gridNx**
* int **gridNy**
* bool **includeSurfaceNormals**
* [PointCloudFileFormat](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a12a8e36dddc227d9cae68532ca946bc7) **format**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_ExportPointCloudFile"}]}`
-->

### Function GetClosestGlass

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a32e8ccc98c5f685c988877a0256a34dc"></a>

![][public]


```csharp
string ZOSAPI.Editors.LDE.ILensDataEditor.GetClosestGlass(int Surface)
```


Get the closest catalog glass to the model glass on the specified surface. Note that this should only be called for a surface that uses a model glass solve, otherwise the result is undefined.

**Parameters**:

* **Surface**: Desired surface (0 to NumberOfSurfaces)


**Returns**:

The glass name if found, otherwise an empty string


**Parameters**:

* int **Surface**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetClosestGlass"}]}`
-->

### Function GetId

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a058096eecc2985d5d17199d462e6b711"></a>

![][public]


```csharp
long ZOSAPI.Editors.LDE.ILensDataEditor.GetId(int surface)
```


Get the unique identifier for the given surface.

**Parameters**:

* **surface**: A surface number


**Returns**:

The identifier of the surface.


**Parameters**:

* int **surface**

**Return type**: long

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetId"}]}`
-->

### Function GetTool\_TiltDecenterElements

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a578a1a3e495f95f6218d14b4f4f5ec86"></a>

![][public]


```csharp
ILDETool_TiltDecenterElements ZOSAPI.Editors.LDE.ILensDataEditor.GetTool_TiltDecenterElements()
```


Gets the settings for the Tilt/Decenter Element tool.


**Return type**: [ILDETool\_TiltDecenterElements](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tool___tilt_decenter_elements.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tool___tilt_decenter_elements)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.GetTool_TiltDecenterElements"}]}`
-->

### Function RunTool\_TiltDecenterElements

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a194665e9bc01ba37df8fdf63537c609e"></a>

![][public]


```csharp
IMessage ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_TiltDecenterElements(ILDETool_TiltDecenterElements settings)
```


Runs the Tilt/Decenter Element tool with the specified settings (GetTool_TiltDecenterElements).

**Parameters**:

* **settings**: The settings.


**Returns**:

Error message if any occurs.


**Parameters**:

* [ILDETool\_TiltDecenterElements](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tool___tilt_decenter_elements.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tool___tilt_decenter_elements) **settings**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.RunTool_TiltDecenterElements"}]}`
-->

### Function SetJonesMatrixData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a67b14d75b20c3e366d3a2206ee1af1af"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.SetJonesMatrixData(int surface, bool isRetarder, double delta, double angle, double transmission)
```


**Parameters**:

* int **surface**
* bool **isRetarder**
* double **delta**
* double **angle**
* double **transmission**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.SetJonesMatrixData"}]}`
-->

### Function SetMuellerMatrixData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1ac4d4286b2d7433e2b32cff2f01ec4d42"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILensDataEditor.SetMuellerMatrixData(int surface, bool isRetarder, double delta, double angle, double transmission, double dop)
```


**Parameters**:

* int **surface**
* bool **isRetarder**
* double **delta**
* double **angle**
* double **transmission**
* double **dop**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILensDataEditor.SetMuellerMatrixData"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)