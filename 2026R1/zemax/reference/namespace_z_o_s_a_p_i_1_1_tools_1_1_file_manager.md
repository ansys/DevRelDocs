# Namespace ZOSAPI::Tools::FileManager

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Tools::FileManager::IConvertProjectToFileTool](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool)
* [ZOSAPI::Tools::FileManager::IFile](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_file.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_file)

## Enumeration types

### Enumeration type FileSource

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a53ddf4145403a7d101ae66e75e3dd1a2"></a>

![][public]

**Definition**:


```csharp
enum FileSource {
  Unknown = -1,
  Project,
  Root
}
```


#### Enumerator Unknown

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a53ddf4145403a7d101ae66e75e3dd1a2a88183b946cc5f0e8c96b2e66e1c74a7e"></a>


#### Enumerator Project

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a53ddf4145403a7d101ae66e75e3dd1a2a9e727fdd3aec8274f46685441900280d"></a>


#### Enumerator Root

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a53ddf4145403a7d101ae66e75e3dd1a2afa03eb688ad8aa1db593d33dabd89bad"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.FileManager.FileSource"}]}`
-->

### Enumeration type KnownFolder

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751a"></a>

![][public]

**Definition**:


```csharp
enum KnownFolder {
  Unknown = -1,
  Project,
  ABgData,
  BlackBoxes,
  Coatings,
  Configs,
  DllBulkScatter,
  DllDiffractive,
  DllGradientIndex,
  DllObjects,
  DllPhysicalOptics,
  DllSources,
  DllSurfaceScatter,
  DllSurfaces,
  Extend,
  GlassCat,
  ImaFiles,
  Macros,
  MeritFunction,
  Miscellaneous,
  ObjectsApertures,
  ObjectsCadFiles,
  ObjectsCreoParametricFiles,
  ObjectsGridFiles,
  ObjectsInventorFiles,
  ObjectsPartDesignerObjects,
  ObjectsPhosphorsAndFluorescenceFiles,
  ObjectsPolygonObjects,
  ObjectsStopFiles,
  ObjectsSolidWorksFiles,
  ObjectsSourcesEulumdat,
  ObjectsSourcesIesna,
  ObjectsSourcesRadiantSourceModelFiles,
  ObjectsSourcesSourceFiles,
  ObjectsSourcesSpectrumFiles,
  ObjectsTabulatedObjects,
  PopBeamFiles,
  Profiles,
  ScatterData,
  Tolerance,
  Udo,
  ZosApiExtensions,
  ZosApiOperands,
  ZosApiUserAnalysis,
  DllBirefringence
}
```


#### Enumerator Unknown

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa88183b946cc5f0e8c96b2e66e1c74a7e"></a>


#### Enumerator Project

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa9e727fdd3aec8274f46685441900280d"></a>


#### Enumerator ABgData

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa0ddd0f59bb950b4c1a5ab3e6263f5cef"></a>

Represents the <code>/ABg_Data</code> folder.


#### Enumerator BlackBoxes

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa162948844747f46402d8311230bdbead"></a>

Represents the <code>/BlackBoxes</code> folder.


#### Enumerator Coatings

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa90bceb416d1e7dc7e06e9f8382176fb0"></a>

Represents the <code>/Coatings</code> folder.


#### Enumerator Configs

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa65521ed8dffd91fc04e8b0b240942cf4"></a>

Represents the <code>/Configs</code> folder.


#### Enumerator DllBulkScatter

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aae69202b256277bb063d57617343c03e5"></a>

Represents the <code>/DLL/BulkScatter</code> folder.


#### Enumerator DllDiffractive

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aad3298e60120820f4ebb4f60a13b07df1"></a>

Represents the <code>/DLL/Diffractive</code> folder.


#### Enumerator DllGradientIndex

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aadf7e91547d9ba99dae55606f3650d498"></a>

Represents the <code>/DLL/GradientIndex</code> folder.


#### Enumerator DllObjects

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aaff7c7cdc882eb775d5b371c2fc98d669"></a>

Represents the <code>/DLL/Objects</code> folder.


#### Enumerator DllPhysicalOptics

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa4596885dbba4c923210972e03497c7a8"></a>

Represents the <code>/DLL/PhysicalOptics</code> folder.


#### Enumerator DllSources

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa4d7abe622eb6fa1ab6e99ffc9223792b"></a>

Represents the <code>/DLL/Sources</code> folder.


#### Enumerator DllSurfaceScatter

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa158e6121edda57f0eef44d72c2456580"></a>

Represents the <code>/DLL/SurfaceScatter</code> folder.


#### Enumerator DllSurfaces

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aaf4e6569a1706a6a17a7cabc0a349035f"></a>

Represents the <code>/DLL/Surfaces</code> folder.


#### Enumerator Extend

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa3bc026b815790a05493fa56fc4b8d8bd"></a>

Represents the <code>/Extend</code> folder.


#### Enumerator GlassCat

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aab3cd80df080e385dcb2603a8a33dee94"></a>

Represents the <code>/Glasscat</code> folder.


#### Enumerator ImaFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa39b6fb9d37bc86019f5b910b42c60ab0"></a>

Represents the <code>/IMAFiles</code> folder.


#### Enumerator Macros

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aaa0e3947a02661e2385e4b76ab1b12f4d"></a>

Represents the <code>/Macros</code> folder.


#### Enumerator MeritFunction

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aab63d5b2aeafc06c60e0a811803247777"></a>

Represents the <code>/MeritFunction</code> folder.


#### Enumerator Miscellaneous

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa387baf0199e7c9cc944fae94e96448fa"></a>

Represents the <code>/Miscellaneous</code> folder.


#### Enumerator ObjectsApertures

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aab24d1cbfa85a13f74ba8b916f7679c51"></a>

Represents the <code>/Objects/Apertures</code> folder.


#### Enumerator ObjectsCadFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa6c8ab01a1aa965194850c665ca72f69c"></a>

Represents the <code>/Objects/CAD Files</code> folder.


#### Enumerator ObjectsCreoParametricFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa2053d5dfcb929eca38ad2954ece90fae"></a>

Represents the <code>/Objects/Creo Parametric Files</code> folder.


#### Enumerator ObjectsGridFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aae66584c532d17e76c98723ca7d3c3dd3"></a>

Represents the <code>/Objects/Grid Files</code> folder.


#### Enumerator ObjectsInventorFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa43356d2536b8a854d770309c18041387"></a>

Represents the <code>/Objects/Inventor Files</code> folder.


#### Enumerator ObjectsPartDesignerObjects

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aab66385c53a7ba15b0043be4f57c237f9"></a>

Represents the <code>/Objects/Part Designer Objects</code> folder.


#### Enumerator ObjectsPhosphorsAndFluorescenceFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa0d6696b19f33e9f17561c0980b7465d6"></a>

Represents the <code>/Objects/Phosphors and Fluorescence Files</code> folder.


#### Enumerator ObjectsPolygonObjects

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa859cb9be3680e61b54f31a7011f8d47e"></a>

Represents the <code>/Objects/Polygon Objects</code> folder.


#### Enumerator ObjectsStopFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aab9a14b8d870871d866af4c870a786819"></a>

Represents the <code>/Objects/STOP Files</code> folder.


#### Enumerator ObjectsSolidWorksFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa5e48d44601c33b1b901cfce387c0719a"></a>

Represents the <code>/Objects/SolidWorks Files</code> folder.


#### Enumerator ObjectsSourcesEulumdat

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aae1334da9045197b53b3ec2b87f4a5643"></a>

Represents the <code>/Objects/Sources/EULUMDAT</code> folder.


#### Enumerator ObjectsSourcesIesna

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa625b30c8c5031946be84cac2c314ce7d"></a>

Represents the <code>/Objects/Sources/IESNA</code> folder.


#### Enumerator ObjectsSourcesRadiantSourceModelFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa5d2561658073ff91a71fc19b6fb81f43"></a>

Represents the <code>/Objects/Sources/Radiant Source Model Files</code> folder.


#### Enumerator ObjectsSourcesSourceFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aaeda826c19386325cb07206ef0305f53a"></a>

Represents the <code>/Objects/Sources/Source Files</code>


#### Enumerator ObjectsSourcesSpectrumFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa36f31cb8802b8ee62ee4c84c5b967522"></a>

Represents the <code>/Objects/Sources/Spectrum Files</code> folder.


#### Enumerator ObjectsTabulatedObjects

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aacdb37484e083272b2d727da0440a932a"></a>

Represents the <code>/Objects/Tabulated Objects</code> folder.


#### Enumerator PopBeamFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa45e5167f5506822834ef984856406f66"></a>

Represents the <code>/POP/BEAMFILES</code> folder.


#### Enumerator Profiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aad0f25115288c15321ecf672f0d6a83ea"></a>

Represents the <code>/Profiles</code> folder.


#### Enumerator ScatterData

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aaddc66fd99674d9bfa4ce7b5230787507"></a>

Represents the <code>/ScatterData</code> folder.


#### Enumerator Tolerance

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa38a4462de8ef7234a58e8f0798e29d04"></a>

Represents the <code>/Tolerance</code> folder.


#### Enumerator Udo

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa26baa8c131a09b3b474840561408d4e5"></a>

Represents the <code>/UDO</code> folder.


#### Enumerator ZosApiExtensions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aaf6fb63fc10c1fd8a4247f53547a9eb4f"></a>

Represents the <code>/ZOS-API/Extensions</code> folder.


#### Enumerator ZosApiOperands

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa9f4a48811d79b157536b20e5908ed4a1"></a>

Represents the <code>/ZOS-API/Operands</code> folder.


#### Enumerator ZosApiUserAnalysis

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa777c7aa0b9d7911018fb7bc424bd6e24"></a>

Represents the <code>/ZOS-API/User Analysis</code> folder.


#### Enumerator DllBirefringence

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a4defcc7887b2ec8e85a7514f2766751aa0b875d7ce0537595cb5200d319c61abe"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.FileManager.KnownFolder"}]}`
-->

### Enumeration type Operation

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a08406cc3ee3157f1520b3958cf96ae38"></a>

![][public]

**Definition**:


```csharp
enum Operation {
  None,
  GetFilesInUse,
  GetAdditionalFiles
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a08406cc3ee3157f1520b3958cf96ae38a6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator GetFilesInUse

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a08406cc3ee3157f1520b3958cf96ae38a4416f2081a9f5add49038c479fea7d41"></a>


#### Enumerator GetAdditionalFiles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1a08406cc3ee3157f1520b3958cf96ae38a7495b2cabe91cfb799707088d25b35c0"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.FileManager.Operation"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)