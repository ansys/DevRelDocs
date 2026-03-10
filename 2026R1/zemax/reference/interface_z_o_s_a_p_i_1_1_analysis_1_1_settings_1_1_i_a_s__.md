# Interface ZOSAPI::Analysis::Settings::IAS_

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__"></a>

![][C#]
![][public]

**Definition**:

Base class for all analysis settings interfaces. This class can be accessed via the IA_ interface.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            //Open a shaded model
            IA_ analysis = TheSystem.Analyses.New_Analysis(AnalysisIDM.ShadedModel);
            analysis.Terminate();
            analysis.WaitForCompletion();
            IAS_ analysisSettings = analysis.GetSettings();
            string cfgFile = System.IO.Path.GetTempFileName();
            // Save the current settings to the temp file
            analysisSettings.SaveTo(cfgFile);
            // make your modifications to it
            //MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTX", "90");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTY", "0");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTZ", "0");
            // now load in the modified settings
            analysisSettings.LoadFrom(cfgFile);
            // If you want to overwrite your default CFG, copy it after you are done modifying the settings:
            //string CFG_fullname = System.Environment.GetEnvironmentVariable("USERPROFILE") + "\\Documents\\Zemax\\Configs\\Configs\\POP.CFG";
            //System.IO.File.Copy(cfgFile, CFG_fullname, true);
            // We don't need the temp file any more, so delete it
            System.IO.File.Delete(cfgFile);
            // Run the analysis with the new settings
            analysis.ApplyAndWaitForCompletion();
```
 C++ 
```csharp
    // Open a shaded model
    IA_Ptr analysis = TheSystem->Analyses->New_Analysis(AnalysisIDM::AnalysisIDM_ShadedModel);
    analysis->Terminate();
    analysis->WaitForCompletion();
    IAS_Ptr settings = analysis->GetSettings();
    //need to use - #pragma warning(disable:4996)
    char* pUserprofile = getenv("Temp");
    _bstr_t cfgFile = _bstr_t(pUserprofile) + "\\sha.cfg";
    // Save the current settings to the temp file
    settings->SaveTo(cfgFile);
    // make your modifications to it
    // MODIFYSETTINGS are defined in the ZPL help files : The Programming Tab > About the ZPL > Keywords
    settings->ModifySettings(cfgFile, "SHA_ROTX", "90");
    settings->ModifySettings(cfgFile, "SHA_ROTY", "0");
    settings->ModifySettings(cfgFile, "SHA_ROTZ", "0");
    // now load in the modified settings
    settings->LoadFrom(cfgFile);
    // If you want to overwrite your default CFG, copy it after you are done modifying the settings :
    //_bstr_t CFG_fullname = _bstr_t(getenv("USERPROFILE")) + "\\Documents\\Zemax\\Configs\\POP.CFG";
    // copyfile(cfgFile, CFG_fullname) // generic psuedo code
    // We don't need the temp file any more, so delete it
    std::remove(cfgFile);
    // Run the analysis with the new settings
    analysis->ApplyAndWaitForCompletion();
```
 Matlab 
```csharp
    %Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.ShadedModel);
    analysis.Terminate();
    analysis.WaitForCompletion();
    analysisSettings = analysis.GetSettings();
    cfgFile = System.IO.Path.GetTempFileName();
    % Save the current settings to the temp file
    analysisSettings.SaveTo(cfgFile);
    % make your modifications to it
    %MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTX', '90');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTY', '0');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTZ', '0');
    % now load in the modified settings
    analysisSettings.LoadFrom(cfgFile);
    % If you want to overwrite your default CFG, copy it after you are done modifying the settings:
    %string CFG_fullname = System.Environment.GetEnvironmentVariable("USERPROFILE") + "\\Configs\\POP.CFG";
    %System.IO.File.Copy(cfgFile, CFG_fullname, true);
    % We don't need the temp file any more, so delete it
    System.IO.File.Delete(cfgFile);
    % Run the analysis with the new settings
    analysis.ApplyAndWaitForCompletion();
```
 Python 
```csharp
    # Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.ShadedModel)
    analysis.Terminate()
    analysis.WaitForCompletion()
    analysisSettings = analysis.GetSettings()
    cfgFile = os.environ.get('Temp') + '\\sha.cfg'
    # Save the current settings to the temp file
    analysisSettings.SaveTo(cfgFile)
    # make your modifications to it
    # MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTX', '90')
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTY', '0')
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTZ', '0')
    # now load in the modified settings
    analysisSettings.LoadFrom(cfgFile)
    # If you want to overwrite your default CFG, copy it after you are done modifying the settings:
    # CFG_fullname = os.environ.get('USERPROFILE') + '\\Documents\\Zemax\\Configs\\POP.CFG'
    # copyfile(cfgFile, CFG_fullname)
    # We don't need the temp file any more, so delete it
    if os.path.exists(cfgFile):
        os.remove(cfgFile)
    # Run the analysis with the new settings
    analysis.ApplyAndWaitForCompletion()
```

**Inherited by**:

* [ZOSAPI.Analysis.PhysicalOptics.IAS\_PhysicalOpticsPropagation](interface_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1_1_i_a_s___physical_optics_propagation.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1_1_i_a_s___physical_optics_propagation)
* [ZOSAPI.Analysis.RayTracing.IAS\_PathAnalysis](interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1_1_i_a_s___path_analysis)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_FieldCurvatureAndDistortion](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___field_curvature_and_distortion.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___field_curvature_and_distortion)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_FocalShiftDiagram](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___focal_shift_diagram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___focal_shift_diagram)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_FullFieldAberration](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___full_field_aberration.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___full_field_aberration)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_GridDistortion](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___grid_distortion.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___grid_distortion)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_LateralColor](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___lateral_color.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___lateral_color)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_LongitudinalAberration](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___longitudinal_aberration.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___longitudinal_aberration)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_RayTrace](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___ray_trace.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___ray_trace)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_SeidelCoefficients](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___seidel_coefficients.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___seidel_coefficients)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_SeidelDiagram](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___seidel_diagram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___seidel_diagram)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_ZernikeAnnularCoefficients](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_annular_coefficients.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_annular_coefficients)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_ZernikeCoefficientsVsField](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_coefficients_vs_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_coefficients_vs_field)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_ZernikeFringeCoefficients](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_fringe_coefficients.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_fringe_coefficients)
* [ZOSAPI.Analysis.Settings.Aberrations.IAS\_ZernikeStandardCoefficients](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_standard_coefficients.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_standard_coefficients)
* [ZOSAPI.Analysis.Settings.Coatings.IAS\_RTA\_Angle](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_coatings_1_1_i_a_s___r_t_a___angle.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_coatings_1_1_i_a_s___r_t_a___angle)
* [ZOSAPI.Analysis.Settings.Coatings.IAS\_RTA\_Wavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_coatings_1_1_i_a_s___r_t_a___wavelength.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_coatings_1_1_i_a_s___r_t_a___wavelength)
* [ZOSAPI.Analysis.Settings.DiffractionEfficiency.IAS\_DiffEfficiency2D](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_diffraction_efficiency_1_1_i_a_s___diff_efficiency2_d.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_diffraction_efficiency_1_1_i_a_s___diff_efficiency2_d)
* [ZOSAPI.Analysis.Settings.DiffractionEfficiency.IAS\_DiffEfficiencyAngular](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_diffraction_efficiency_1_1_i_a_s___diff_efficiency_angular.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_diffraction_efficiency_1_1_i_a_s___diff_efficiency_angular)
* [ZOSAPI.Analysis.Settings.DiffractionEfficiency.IAS\_DiffEfficiencyChromatic](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_diffraction_efficiency_1_1_i_a_s___diff_efficiency_chromatic.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_diffraction_efficiency_1_1_i_a_s___diff_efficiency_chromatic)
* [ZOSAPI.Analysis.Settings.EncircledEnergy.IAS\_DiffractionEncircledEnergy](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___diffraction_encircled_energy.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___diffraction_encircled_energy)
* [ZOSAPI.Analysis.Settings.EncircledEnergy.IAS\_ExtendedSourceEncircledEnergy](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___extended_source_encircled_energy.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___extended_source_encircled_energy)
* [ZOSAPI.Analysis.Settings.EncircledEnergy.IAS\_GeometricEncircledEnergy](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_encircled_energy.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_encircled_energy)
* [ZOSAPI.Analysis.Settings.EncircledEnergy.IAS\_GeometricLineEdgeSpread](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_line_edge_spread.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_line_edge_spread)
* [ZOSAPI.Analysis.Settings.ExtendedScene.IAS\_GeometricImageAnalysis](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___geometric_image_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___geometric_image_analysis)
* [ZOSAPI.Analysis.Settings.ExtendedScene.IAS\_ImageSimulation](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___image_simulation.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___image_simulation)
* [ZOSAPI.Analysis.Settings.ExtendedScene.IAS\_RelativeIllumination](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___relative_illumination.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___relative_illumination)
* [ZOSAPI.Analysis.Settings.Fans.IAS\_Fan](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_fans_1_1_i_a_s___fan.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_fans_1_1_i_a_s___fan)
* [ZOSAPI.Analysis.Settings.IAS\_CriticalRayTracer](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___critical_ray_tracer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___critical_ray_tracer)
* [ZOSAPI.Analysis.Settings.IAS\_FileComparator](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___file_comparator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___file_comparator)
* [ZOSAPI.Analysis.Settings.IAS\_Interferogram](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___interferogram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___interferogram)
* [ZOSAPI.Analysis.Settings.IAS\_WavefrontMap](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavefront_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavefront_map)
* [ZOSAPI.Analysis.Settings.IAS\_XXXTemplateXXX](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___x_x_x_template_x_x_x.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___x_x_x_template_x_x_x)
* [ZOSAPI.Analysis.Settings.Materials.IAS\_GrinProfile](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials_1_1_i_a_s___grin_profile.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials_1_1_i_a_s___grin_profile)
* [ZOSAPI.Analysis.Settings.Materials.IAS\_InternalTransmissionvsWavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials_1_1_i_a_s___internal_transmissionvs_wavelength.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials_1_1_i_a_s___internal_transmissionvs_wavelength)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_ContrastLossMap](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_FftMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_FftMtfMap](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_map)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_FftMtfvsField](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtfvs_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtfvs_field)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_FftSurfaceMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_surface_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_surface_mtf)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_FftThroughFocusMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_through_focus_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_through_focus_mtf)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_GeometricMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_mtf)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_GeometricMtfMap](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_mtf_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_mtf_map)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_GeometricMtfvsField](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_mtfvs_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_mtfvs_field)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_GeometricThroughFocusMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_through_focus_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_through_focus_mtf)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_HuygensMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_mtf)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_HuygensMtfvsField](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_mtfvs_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_mtfvs_field)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_HuygensSurfaceMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_surface_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_surface_mtf)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_HuygensThroughFocusMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_through_focus_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_through_focus_mtf)
* [ZOSAPI.Analysis.Settings.Mtf.IAS\_NSCGeometricMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___n_s_c_geometric_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___n_s_c_geometric_mtf)
* [ZOSAPI.Analysis.Settings.NSCSpot.IAS\_NSCSpot](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_spot_1_1_i_a_s___n_s_c_spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_spot_1_1_i_a_s___n_s_c_spot)
* [ZOSAPI.Analysis.Settings.NSCSurface.IAS\_NSCSurfaceSag](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1_1_i_a_s___n_s_c_surface_sag.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1_1_i_a_s___n_s_c_surface_sag)
* [ZOSAPI.Analysis.Settings.Psf.IAS\_FftPsf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf)
* [ZOSAPI.Analysis.Settings.Psf.IAS\_FftPsfCrossSection](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_cross_section.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_cross_section)
* [ZOSAPI.Analysis.Settings.Psf.IAS\_FftPsfLineEdgeSpread](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_line_edge_spread.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_line_edge_spread)
* [ZOSAPI.Analysis.Settings.Psf.IAS\_HuygensPsf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___huygens_psf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___huygens_psf)
* [ZOSAPI.Analysis.Settings.Psf.IAS\_HuygensPsfCrossSection](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___huygens_psf_cross_section.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___huygens_psf_cross_section)
* [ZOSAPI.Analysis.Settings.RMS.IAS\_RMSField](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_field)
* [ZOSAPI.Analysis.Settings.RMS.IAS\_RMSFieldMap](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_field_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_field_map)
* [ZOSAPI.Analysis.Settings.RMS.IAS\_RMSFocus](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_focus.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_focus)
* [ZOSAPI.Analysis.Settings.RMS.IAS\_RMSLambdaDiagram](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_lambda_diagram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_lambda_diagram)
* [ZOSAPI.Analysis.Settings.RayTracing.IAS\_DetectorViewer](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer)
* [ZOSAPI.Analysis.Settings.RayTracing.IAS\_NSCSingleRayTrace](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___n_s_c_single_ray_trace.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___n_s_c_single_ray_trace)
* [ZOSAPI.Analysis.Settings.Spot.IAS\_Spot](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot)
* [ZOSAPI.Analysis.Settings.Surface.IAS\_SurfaceCurvature](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_curvature.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_curvature)
* [ZOSAPI.Analysis.Settings.Surface.IAS\_SurfaceCurvatureCross](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_curvature_cross.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_curvature_cross)
* [ZOSAPI.Analysis.Settings.Surface.IAS\_SurfacePhase](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase)
* [ZOSAPI.Analysis.Settings.Surface.IAS\_SurfacePhaseCross](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase_cross.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase_cross)
* [ZOSAPI.Analysis.Settings.Surface.IAS\_SurfacePhaseSlope](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase_slope.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase_slope)
* [ZOSAPI.Analysis.Settings.Surface.IAS\_SurfacePhaseSlopeCross](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase_slope_cross.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase_slope_cross)
* [ZOSAPI.Analysis.Settings.Surface.IAS\_SurfaceSag](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_sag.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_sag)
* [ZOSAPI.Analysis.Settings.Surface.IAS\_SurfaceSagCross](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_sag_cross.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_sag_cross)
* [ZOSAPI.Analysis.Settings.Surface.IAS\_SurfaceSlope](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_slope.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_slope)
* [ZOSAPI.Analysis.Settings.Surface.IAS\_SurfaceSlopeCross](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_slope_cross.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_slope_cross)
* [ZOSAPI.Analysis.Settings.Wavefront.IAS\_Foucault](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_wavefront_1_1_i_a_s___foucault.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_wavefront_1_1_i_a_s___foucault)
* [ZOSAPI.Analysis.Tolerancing.IAS\_ISOElementDrawing](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___i_s_o_element_drawing.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___i_s_o_element_drawing)
* [ZOSAPI.Analysis.Tolerancing.IAS\_QuickYield](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___quick_yield.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___quick_yield)
* [ZOSAPI.Analysis.Tolerancing.IAS\_TolerancingHistogram](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_histogram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_histogram)
* [ZOSAPI.Analysis.Tolerancing.IAS\_TolerancingYield](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_yield.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_yield)

## Members

* [Load](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a233390b15755feb10db900149fb97e76)
* [LoadFrom](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a62cf3f062ab2e3015ffca22e5173d650)
* [ModifySettings](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a0bd90efa9aecf2f0f3dc7f8e9ad6f309)
* [Reset](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7928f2305168474181938609be36c277)
* [Save](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7e7874f49a22e3762c632821669532ca)
* [SaveTo](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a3c196d30f275d5d8e17363b3b702bed7)
* [Verify](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a2fe8bcba3de86b96ca2c2f6fa9e1f75e)

## Public functions

### Function Verify

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a2fe8bcba3de86b96ca2c2f6fa9e1f75e"></a>

![][public]


```csharp
IMessages ZOSAPI.Analysis.Settings.IAS_.Verify()
```


**Return type**: [IMessages](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_messages.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_messages)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_.Verify"}]}`
-->

### Function Save

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7e7874f49a22e3762c632821669532ca"></a>

![][public]


```csharp
void ZOSAPI.Analysis.Settings.IAS_.Save()
```


Saves the current settings to the default CFG file.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_.Save"}]}`
-->

### Function Load

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a233390b15755feb10db900149fb97e76"></a>

![][public]


```csharp
void ZOSAPI.Analysis.Settings.IAS_.Load()
```


Loads settings from the default CFG file.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_.Load"}]}`
-->

### Function Reset

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7928f2305168474181938609be36c277"></a>

![][public]


```csharp
void ZOSAPI.Analysis.Settings.IAS_.Reset()
```


Resets the settings back to the defaults for the current analysis.


**Return type**: void

**Reimplemented by**:

* [Reset](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___i_s_o_element_drawing.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___i_s_o_element_drawing_1a65d430cb3977c48a8a71792cd5452b9b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_.Reset"}]}`
-->

### Function SaveTo

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a3c196d30f275d5d8e17363b3b702bed7"></a>

![][public]


```csharp
bool ZOSAPI.Analysis.Settings.IAS_.SaveTo(string settingsFile)
```


Saves the current settings to the specified file.

Usage (see [Example 17](page_ex17.md#page_ex17) for a full sample)


C# 
```csharp
            //Open a detector viewer
            analysis = TheSystem.Analyses.New_Analysis(AnalysisIDM.DetectorViewer);
            analysisSettings = analysis.GetSettings();
            cfgFile = System.IO.Path.GetTempFileName();
            analysisSettings.SaveTo(cfgFile);
            analysisSettings.ModifySettings(cfgFile, "DVW_SHOW", "2");
            analysisSettings.ModifySettings(cfgFile, "DVW_SMOOTHING", "1");
            analysisSettings.LoadFrom(cfgFile);
            System.IO.File.Delete(cfgFile);
            analysis.ApplyAndWaitForCompletion();
```
 C++ 
```csharp
    //Open a detector viewer
    analysis = TheSystem->Analyses->New_Analysis(AnalysisIDM_DetectorViewer);
    analysisSettings = analysis->GetSettings();
    tmpnam_s(cfgFile, L_tmpnam_s);
    analysisSettings->SaveTo(cfgFile);
    analysisSettings->ModifySettings(cfgFile, "DVW_SHOW", "2");
    analysisSettings->ModifySettings(cfgFile, "DVW_SMOOTHING", "1");
    analysisSettings->LoadFrom(cfgFile);
    remove(cfgFile);
    analysis->ApplyAndWaitForCompletion();
```
 Matlab 
```csharp
    % Open a detector viewer
    det_analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);
    det_analysisSettings = det_analysis.GetSettings();
    det_cfgFile = System.String.Concat(SamplesFolder, '\API\Matlab\e17_DetectorViewer.cfg');
    det_analysisSettings.SaveTo(det_cfgFile);
    det_analysisSettings.ModifySettings(det_cfgFile, 'DVW_SHOW', '2');
    det_analysisSettings.ModifySettings(det_cfgFile, 'DVW_SMOOTHING', '1');
    det_analysisSettings.LoadFrom(det_cfgFile);
    det_analysis.ApplyAndWaitForCompletion();
```
 Python 
```csharp
    # Open a detector viewer
    det_analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer)
    det_analysisSettings = det_analysis.GetSettings()
    det_cfgFile = SamplesFolder + "\\API\\Python\\e17_DetectorViewer.cfg"
    det_analysisSettings.SaveTo(det_cfgFile)
    det_analysisSettings.ModifySettings(det_cfgFile, "DVW_SHOW", "2")
    det_analysisSettings.ModifySettings(det_cfgFile, "DVW_SMOOTHING", "1")
    det_analysisSettings.LoadFrom(det_cfgFile)
    det_analysis.ApplyAndWaitForCompletion()
```
 


**Parameters**:

* **settingsFile**: The settings file.


**Returns**:


**Parameters**:

* string **settingsFile**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_.SaveTo"}]}`
-->

### Function LoadFrom

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a62cf3f062ab2e3015ffca22e5173d650"></a>

![][public]


```csharp
bool ZOSAPI.Analysis.Settings.IAS_.LoadFrom(string settingsFile)
```


Replaces the current settings with settings read from the specified file.

Usage (see [Example 17](page_ex17.md#page_ex17) for a full sample)


C# 
```csharp
            //Open a detector viewer
            analysis = TheSystem.Analyses.New_Analysis(AnalysisIDM.DetectorViewer);
            analysisSettings = analysis.GetSettings();
            cfgFile = System.IO.Path.GetTempFileName();
            analysisSettings.SaveTo(cfgFile);
            analysisSettings.ModifySettings(cfgFile, "DVW_SHOW", "2");
            analysisSettings.ModifySettings(cfgFile, "DVW_SMOOTHING", "1");
            analysisSettings.LoadFrom(cfgFile);
            System.IO.File.Delete(cfgFile);
            analysis.ApplyAndWaitForCompletion();
```
 C++ 
```csharp
    //Open a detector viewer
    analysis = TheSystem->Analyses->New_Analysis(AnalysisIDM_DetectorViewer);
    analysisSettings = analysis->GetSettings();
    tmpnam_s(cfgFile, L_tmpnam_s);
    analysisSettings->SaveTo(cfgFile);
    analysisSettings->ModifySettings(cfgFile, "DVW_SHOW", "2");
    analysisSettings->ModifySettings(cfgFile, "DVW_SMOOTHING", "1");
    analysisSettings->LoadFrom(cfgFile);
    remove(cfgFile);
    analysis->ApplyAndWaitForCompletion();
```
 Matlab 
```csharp
    % Open a detector viewer
    det_analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);
    det_analysisSettings = det_analysis.GetSettings();
    det_cfgFile = System.String.Concat(SamplesFolder, '\API\Matlab\e17_DetectorViewer.cfg');
    det_analysisSettings.SaveTo(det_cfgFile);
    det_analysisSettings.ModifySettings(det_cfgFile, 'DVW_SHOW', '2');
    det_analysisSettings.ModifySettings(det_cfgFile, 'DVW_SMOOTHING', '1');
    det_analysisSettings.LoadFrom(det_cfgFile);
    det_analysis.ApplyAndWaitForCompletion();
```
 Python 
```csharp
    # Open a detector viewer
    det_analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer)
    det_analysisSettings = det_analysis.GetSettings()
    det_cfgFile = SamplesFolder + "\\API\\Python\\e17_DetectorViewer.cfg"
    det_analysisSettings.SaveTo(det_cfgFile)
    det_analysisSettings.ModifySettings(det_cfgFile, "DVW_SHOW", "2")
    det_analysisSettings.ModifySettings(det_cfgFile, "DVW_SMOOTHING", "1")
    det_analysisSettings.LoadFrom(det_cfgFile)
    det_analysis.ApplyAndWaitForCompletion()
```
 


**Parameters**:

* **settingsFile**: The settings file.


**Returns**:


**Parameters**:

* string **settingsFile**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_.LoadFrom"}]}`
-->

### Function ModifySettings

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a0bd90efa9aecf2f0f3dc7f8e9ad6f309"></a>

![][public]


```csharp
bool ZOSAPI.Analysis.Settings.IAS_.ModifySettings(string settingsFile, string typeCode, string newValue)
```


Changes a single setting in the specified file. See the MODIFYSETTINGS DDE command help documentation for more information.

Usage (see [Example 17](page_ex17.md#page_ex17) for a full sample)


C# 
```csharp
            //Open a shaded model
            IA_ analysis = TheSystem.Analyses.New_Analysis(AnalysisIDM.NSCShadedModel);
            analysis.Terminate();
            analysis.WaitForCompletion();
            IAS_ analysisSettings = analysis.GetSettings();
            string cfgFile = System.IO.Path.GetTempFileName();
            // Save the current settings to the temp file
            analysisSettings.SaveTo(cfgFile);
            // make your modifications to it
            //MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTX", "20");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTY", "-20");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTZ", "30");
            // now load in the modified settings
            analysisSettings.LoadFrom(cfgFile);
            // If you want to overwrite your default CFG, copy it after you are done modifying the settings:
            //string CFG_fullname = "\\zmedc02\\users\\sandrine.auriol\\Documents\\Zemax\\Configs\\POP.CFG";
            //System.IO.File.Copy(cfgFile, CFG_fullname, true);
            // We don't need the temp file any more, so delete it
            System.IO.File.Delete(cfgFile);
            // Run the analysis with the new settings
            analysis.ApplyAndWaitForCompletion();
```
 C++ 
```csharp
    //Open a shaded model
    IA_Ptr analysis = TheSystem->Analyses->New_Analysis(AnalysisIDM_NSCShadedModel);
    analysis->Terminate();
    analysis->WaitForCompletion();
    IAS_Ptr analysisSettings = analysis->GetSettings();
    char cfgFile[L_tmpnam_s];
    tmpnam_s(cfgFile, L_tmpnam_s);
    // Save the current settings to the temp file
    analysisSettings->SaveTo(cfgFile);
    // make your modifications to it
    // MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings->ModifySettings(cfgFile, "SHA_ROTX", "20");
    analysisSettings->ModifySettings(cfgFile, "SHA_ROTY", "-20");
    analysisSettings->ModifySettings(cfgFile, "SHA_ROTZ", "30");
    // now load in the modified settings
    analysisSettings->LoadFrom(cfgFile);
    // We don't need the temp file any more, so delete it
    remove(cfgFile);
    // Run the analysis with the new settings
    analysis->ApplyAndWaitForCompletion();
```
 Matlab 
```csharp
    % Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.NSCShadedModel);
    analysis.WaitForCompletion();
    analysisSettings = analysis.GetSettings();
    cfgFile = char(System.String.Concat(SamplesFolder, '\API\Matlab\e17_NSC_BulkScatter.cfg'));
    analysisSettings.SaveTo(cfgFile);  % Save current settings to a cfg file
    % MODIFYSETTINGS are defined in ZPL help files: The Programming Tab > About the ZPL > Keywords
    % need to manually turn on SCATTERING in shaded model to see bulk scattering
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTX', '20');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTY', '-20');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTZ', '30');
    analysisSettings.LoadFrom(cfgFile);  % Load in the newly modified settings
    % If you want to overwrite your default CFG, save over it with newly modified CFG file:
    %  CFG_fullname = System.String.Concat(getenv('Temp'), '\Documents\Zemax\Configs\LSN.CFG');
    %  copyfile(char(cfgFile), char(CFG_fullname));
    analysis.ApplyAndWaitForCompletion();  % Run analysis
```
 Python 
```csharp
    # Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.NSCShadedModel)
    analysis.WaitForCompletion()
    analysisSettings = analysis.GetSettings()
    cfgFile = SamplesFolder + "\\API\\Python\\e17_NSC_BulkScatter.cfg"
    analysisSettings.SaveTo(cfgFile)  # Save current settings to a cfg file
    # MODIFYSETTINGS are defined in ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings.ModifySettings(cfgFile, "SHA_ROTX", "20")
    analysisSettings.ModifySettings(cfgFile, "SHA_ROTY", "-20")
    analysisSettings.ModifySettings(cfgFile, "SHA_ROTZ", "30")
    analysisSettings.LoadFrom(cfgFile)  # Load in the newly modified settings
    # If you want to overwrite your default CFG, save over it with newly modified CFG file:
    #  CFG_fullname = "C:\\Users\\zachary.Derocher\\Documents\\Zemax\\Configs\\POP.CFG"
    #  import shutil
    #  shutil.copy(cfgFile, CFG_fullname)
    analysis.ApplyAndWaitForCompletion()  # Run analysis
```
 


**Parameters**:

* **settingsFile**: The settings file.
* **typeCode**: The type code.
* **newValue**: The new value.


**Returns**:


**Parameters**:

* string **settingsFile**
* string **typeCode**
* string **newValue**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_.ModifySettings"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)