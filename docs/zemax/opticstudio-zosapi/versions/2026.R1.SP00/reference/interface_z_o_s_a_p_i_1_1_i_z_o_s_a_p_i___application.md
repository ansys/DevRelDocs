# Interface ZOSAPI::IZOSAPI_Application

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application"></a>

![][C#]
![][public]

**Definition**:

This interface contains all information about the current ZOS-API connection, as well as methods for accessing an Optical System. This interface can only be retrieved from a connection interface - [ZOSAPI.IZOSAPI\_Connection](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection) for more information.


## Members

* [AutodeskInventorFilesDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ace4c62e59eb6fd15eb8daf8a4c41d52f)
* [BeginMessageLogging](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a6d56b41e14e51804b7eab5416faa15de)
* [CheckForUpdates](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a9177206157e8adba0417c760f320b95d)
* [CheckForUpdatesData](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a73ce07cd6bb8ac2ded248c638f9e11cb)
* [CheckForUpdatesStatus](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1abe1523cd0603c807fc476da7cdb23489)
* [CheckForUpdatesVersion](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ad2909ac2e1609e6428009c81322d2299)
* [ClearMessageLog](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a3266cd764e66b4f1e4a577f393248326)
* [CloseApplication](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ab662a3cc1b97d8632a324b1137fa943b)
* [CloseSystemAt](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a87b834bab4ec341168a17f74f4c629e7)
* [CoatingDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a4ed777a9acd548dad06e17e1f6f6afc2)
* [CopySettingsData](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a3f5ee3620e81f59cc4ad30ce7368f71d)
* [CreateDataFile](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1adfef6e414553c4e5ce80d3ebc6a3efde)
* [CreateNewSystem](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a024aef7880a5ba49d60db78b9b9140b5)
* [CreateSettings](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a69c354d0efd1452db83777ecc226e019)
* [CreateSettingsFromParent](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a7280e6c31896b553b415663a124ff979)
* [CreoParametricFilesDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1abca60968dd253afbcd6968c9dab9d261)
* [EndMessageLogging](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a7edfe16189fded167a1a69e5f76a91dc)
* [ExpirationDay](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1af5cfe434adfa1d5d9dbf9adec2da20ec)
* [ExpirationMonth](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ac76732490ea6ffa87efb191812cbb24e)
* [ExpirationYear](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a4ac743148b7b3d61be211067cd164a58)
* [GetDate](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ab41d60a724a902bc50950c5a29c89ef3)
* [GetSystemAt](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ae88718112dfda9f39c3d053a6396dc6f)
* [GlassDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a08101d4454b68a68798e4cd563a30880)
* [ImagesDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ac2a25e7a0823398df0002f13b8d66406)
* [InitializationErrorCode](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aa72c5197cd5029d3764c4e4671af8a21)
* [InitializationErrors](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a5cde98f55a082250e840d2e74ba78200)
* [IsLoggingMessages](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a6f3486259de910ac869c1eb9029c6463)
* [IsSTARModuleEnabled](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a1c4b9f756f2cd2138769b1d0022fd934)
* [IsSubscriptionLicense](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1afbe7a4e5366cbeb3c77c566266746139)
* [IsValidLicenseForAPI](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a5b8d6c216c668d13d6dcb870698c247f)
* [LensDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1afc281f89f0d34f5e5cb940262329573b)
* [LicenseStatus](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a95179eb8038b629caa12397723aacb3a)
* [LoadCCallback](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ab3539b2d69bc2f65ef734e06314f4a3f)
* [LoadNETCallback](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a60d28f7fd1426fbb4875ff9dba51f1d4)
* [LoadNewSystem](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aeb97e84d0e7062c495f9f9186574ea89)
* [MATLABFilesDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a8b23aa99b7efc3b1b26223148a9a8b18)
* [Mode](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a8d2a89bafe9778c14f592276e5a5eb19)
* [NumberOfCPUs](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a28a1429bd6e1eb302e4c84de5747f1ff)
* [NumberOfOpticalSystems](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a1e38712f4afc72fa4996dd387f596dac)
* [ObjectsDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a16084dd03845b352533c49fc9871ff93)
* [OpenDataFile](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a16f084312504d41fc85006df0a60c7b8)
* [OperandArgument1](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ae50eae8bffec8ed4b4cf511b52b8ccf4)
* [OperandArgument2](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a7fc25b6936d0b0b840af213bb54d7314)
* [OperandArgument3](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1adefae0ab7222380382b8457207120086)
* [OperandArgument4](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ac14d8524751a4b765e91df2535542d48)
* [OperandResults](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a46fc7da26be5a482b4991b3b7157f59e)
* [OpticStudioInstance](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a1a91274f0e60b435428cb17041fe2909)
* [OpticStudioVersion](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a6056abb0310ad174afaab555ab7b4b5e)
* [POPDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1adadbb5caef71eb0b339b769eaf28dec2)
* [Preferences](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a2b0d83df3552a7647a57a22a9496f43d)
* [PrimarySystem](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aca8045fe84351622e0ee58814a2a3364)
* [ProgramDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a9f1e20ac0a0a1e90346016664e5c8c60)
* [ProgressMessage](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aa153afd3b42be1932f4b1412a0b815b6)
* [ProgressPercent](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a58b446bc4c63d453930cd10afa19a24e)
* [RegisterCOperandCallback](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a6f84e31a3a53054d966e6e3297f2d2d2)
* [RegisterNETOperandCallback](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a52d6352d6ec09fd2d2ecdfba95cdcaca)
* [RetrieveLogMessages](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a0b46be3da70625b6b8ecdd1b19edae72)
* [RunCommand](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a52f127d98afadb8d06d79c7688a14f86)
* [SamplesDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ae8fc2a9409927955cc362f9262b052bb)
* [ScatterDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a0bbece58291c528852d7bed590ac4f71)
* [SerialCode](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a600b9ac22b33036a962c7239e88b85e9)
* [ShowChangesInUI](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a3d02a569ca24a51e9b05494ffb8d1b42)
* [SolidWorksFilesDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a3c3f36f7bc0865a4847fcfefe141959a)
* [TerminateRequested](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aab28e1689fe06b0607b735a8bf68e51c)
* [UndoDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a58a3978c6135291ff3c636a8b0bd4eff)
* [UpdateFileLists](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ac602e21441f97078424e9de4ac674832)
* [UserAnalysisData](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1abc787bc578c7c9d5f1f6f60d08280808)
* [ZemaxDataDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a9064540f2c8b592b4acc58c3c096554c)
* [ZOSMajorVersion](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aec596af50cba94e450f14b917785c6c2)
* [ZOSMinorVersion](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a97f4ce49cade12fc4f46c92029b5d3e6)
* [ZOSSPVersion](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a193b7a1a6bd5d2994362afcd9738664f)
* [ZPLDir](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a2254cdbf88bacbf14bc961e679f4569e)

## Properties

### Property LicenseStatus

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a95179eb8038b629caa12397723aacb3a"></a>

![][public]

**Definition**:


```csharp
LicenseStatusType ZOSAPI.IZOSAPI_Application.LicenseStatus
```


Gets the license status. Note that this displays the license edition if successful, or an error code if unsucessful.

Usage (see [Example 10](../apiexamples/example_10.md) for a full sample)


C# 
```csharp
            // Save Ray Path Analysis to Text File
            if (TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition)
            {
                IA_ RayPath = TheSystem.Analyses.New_Analysis(AnalysisIDM.PathAnalysis);
                ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis RayPath_settings = RayPath.GetSettings() as ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis;
                RayPath_settings.RayDatabaseFile = "e10_API_RayTrace.ZRD";
                RayPath.ApplyAndWaitForCompletion();
                IAR_ Rays = RayPath.GetResults();
                Rays.GetTextFile(TheApplication.SamplesDir + "\\API\\CS\\e10_RayPathAnalysis.txt");
            }
            else
            {
                Console.Write("\nThe RayPathAnalysis is a premium feature only\n\nPress any key to continue\n");
                Console.ReadKey();
            }
```
 C++ 
```csharp
    // Save Ray Path Analysis to Text File
    if (TheApplication->LicenseStatus == ZOSAPI_Interfaces::LicenseStatusType::LicenseStatusType_PremiumEdition) {
        IA_Ptr RayPath = TheSystem->Analyses->New_Analysis(AnalysisIDM_PathAnalysis);
        ZOSAPI_Interfaces::IAS_PathAnalysisPtr RayPath_settings = RayPath->GetSettings();
        RayPath_settings->RayDatabaseFile = "e10_API_RayTrace.ZRD";
        RayPath->ApplyAndWaitForCompletion();

        IAR_Ptr Rays = RayPath->GetResults();
        Rays->GetTextFile(TheApplication->SamplesDir + "\\API\\CPP\\e10_RayPathAnalysis.txt");
    }
```
 Matlab 
```csharp
    % Save Ray Path Analysis to Text File
    if TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition
        RayPath = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.PathAnalysis);
        RayPath_settings = RayPath.GetSettings();
        RayPath_settings.RayDatabaseFile = 'e10_API_Raytrace.ZRD';
        RayPath.ApplyAndWaitForCompletion();
        Rays = RayPath.GetResults();
        Rays.GetTextFile(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e10_RayPathAnalysis.txt'));
    else
        fprintf('\nThe RayPathAnalysis is a premium feature only\n');
    end
```
 Python 
```csharp
    # Save Ray Path Analysis to Text File
    if (TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition):
        # there is a bug in ZOS16.5 SP4 with COM; need to use ZOS16.5 SP5 or higher to run this code successfully
        RayPath = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.PathAnalysis)
        RayPath_settings = RayPath.GetSettings()
        zrd = "e10_API_RayTrace.ZRD"
        RayPath_settings.RayDatabaseFile = zrd
        RayPath.ApplyAndWaitForCompletion()

        Rays = RayPath.GetResults()
        Rays.GetTextFile(TheApplication.SamplesDir + "\\API\\Python\\e10_RayPathAnalysis.txt")
```
 


The license status.


**Return type**: [LicenseStatusType](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i_1a7c677ca4eca8285cae8730422280493e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.LicenseStatus"}]}`
-->

### Property IsValidLicenseForAPI

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a5b8d6c216c668d13d6dcb870698c247f"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.IZOSAPI_Application.IsValidLicenseForAPI
```


Gets a value indicating whether this the API is currently useable.

<code>true</code> if this instance is valid license for API; otherwise, <code>false</code>.


**Return type**: bool

**Referenced by**:

* [ZOSAPI.ZOSAPI\_Connection.ConnectAsExtension](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1acc229ae487281fc0aae93e470d9012e3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.IsValidLicenseForAPI"}]}`
-->

### Property InitializationErrors

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a5cde98f55a082250e840d2e74ba78200"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.InitializationErrors
```


Gets the initialization errors (similar to InitializationErrorCode).

The initialization errors.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.InitializationErrors"}]}`
-->

### Property InitializationErrorCode

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aa72c5197cd5029d3764c4e4671af8a21"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.InitializationErrorCode
```


Gets the initialization error code for debug purposes. This should only have a value when using IZOSAPI_Connection.CreateNewApplication, and LicenseStatus is one of the errro values.

The initialization error code.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.InitializationErrorCode"}]}`
-->

### Property Mode

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a8d2a89bafe9778c14f592276e5a5eb19"></a>

![][public]

**Definition**:


```csharp
ZOSAPI_Mode ZOSAPI.IZOSAPI_Application.Mode
```


Gets the current connetion mode. Use this to check if Optic Studio is expecting a user operand / analysis / etc.


**Return type**: [ZOSAPI\_Mode](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i_1a254f5f6cb4ff37c2245b456b9bb79d2a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.Mode"}]}`
-->

### Property SerialCode

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a600b9ac22b33036a962c7239e88b85e9"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.SerialCode
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.SerialCode"}]}`
-->

### Property OpticStudioVersion

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a6056abb0310ad174afaab555ab7b4b5e"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.OpticStudioVersion
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.OpticStudioVersion"}]}`
-->

### Property ExpirationYear

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a4ac743148b7b3d61be211067cd164a58"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.ExpirationYear
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ExpirationYear"}]}`
-->

### Property ExpirationMonth

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ac76732490ea6ffa87efb191812cbb24e"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.ExpirationMonth
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ExpirationMonth"}]}`
-->

### Property ExpirationDay

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1af5cfe434adfa1d5d9dbf9adec2da20ec"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.ExpirationDay
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ExpirationDay"}]}`
-->

### Property NumberOfOpticalSystems

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a1e38712f4afc72fa4996dd387f596dac"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.NumberOfOpticalSystems
```


Gets the current number of open optical systems. Note that there will always be at least one, the PrimarySystem.

The number of optical systems.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.NumberOfOpticalSystems"}]}`
-->

### Property PrimarySystem

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aca8045fe84351622e0ee58814a2a3364"></a>

![][public]

**Definition**:


```csharp
IOpticalSystem ZOSAPI.IZOSAPI_Application.PrimarySystem
```


Gets the primary system. When Mode is ZOSAPI_Mode.Server, this will initially be an empty sequential system. For ZOSAPI_Mode.Plugin this will be the live optical system. For all other modes, it will be a copy of the optical system.

The primary system.


**Return type**: [IOpticalSystem](interface_z_o_s_a_p_i_1_1_i_optical_system.md#interface_z_o_s_a_p_i_1_1_i_optical_system)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.PrimarySystem"}]}`
-->

### Property NumberOfCPUs

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a28a1429bd6e1eb302e4c84de5747f1ff"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.NumberOfCPUs
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.NumberOfCPUs"}]}`
-->

### Property ProgramDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a9f1e20ac0a0a1e90346016664e5c8c60"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.ProgramDir
```


Gets the Program directory (e.g. C:\Program Files\Zemax OpticStudio).

The full path to the Program directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ProgramDir"}]}`
-->

### Property LensDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1afc281f89f0d34f5e5cb940262329573b"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.LensDir
```


Gets the Lens directory (e.g. C:\Users\John.Doe\My Documents\Zemax\Samples). Note that this is the same as SamplesDir.

The full path to the Lens directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.LensDir"}]}`
-->

### Property ObjectsDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a16084dd03845b352533c49fc9871ff93"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.ObjectsDir
```


Gets the Objects directory (e.g. C:\Users\John.Doe\My Documents\Zemax\OBJECTS).

Usage (see [Example 09](../apiexamples/example_09.md) for a full sample)


C# 
```csharp
            //  Insert CAD object
            INonSeqEditor NSCE = TheSystem.NCE;
            INCERow Obj1 = NSCE.GetObjectAt(1);
            Obj1.ZPosition = -5;
            //  Set object 1 as CAD object if CAD file exists in proper directory
            if (System.IO.File.Exists(TheApplication.ObjectsDir + "\\CAD Files\\ExtPoly.stp"))  //  Check if the CAD part exists in correct directory
            {
                IObjectTypeSettings Obj1_Type = Obj1.GetObjectTypeSettings(ObjectType.CADPartSTEPIGESSAT); //  create CAD object type
                Obj1_Type.FileName1 = "ExtPoly.stp";  //  set CAD file to be used (file must be in directory specified under OpticStudio Preferences...Folders...Objects)
                Obj1.ChangeType(Obj1_Type);  //  Set Object 1 as the previously specified CAD file
            }
            else
                Console.WriteLine("CAD file not found");
```
 C++ 
```csharp
    //  Insert CAD object
    INonSeqEditorPtr NSCE = TheSystem->NCE;
    INCERowPtr Obj1 = NSCE->GetObjectAt(1);
    Obj1->ZPosition = -5;
    // Define the STP file to search for.
    std::ifstream ifile((string)TheApplication->ObjectsDir + "\\CAD Files\\ExtPoly.stp");
    if (ifile)  //  Check if the CAD part exists in correct directory. Directory is defined under OpticStudio Preferences...Folders...Objects.
    {
        IObjectTypeSettingsPtr Obj1_Type = Obj1->GetObjectTypeSettings(ObjectType_CADPartSTEPIGESSAT);  //  create CAD object type
        Obj1_Type->FileName1 = "ExtPoly.stp";  //  set CAD file to be used (file must be in valid directory)
        Obj1->ChangeType(Obj1_Type);  //  Set Object 1 as the previously specified CAD file
    }
    else
        cout << "CAD file not found" << endl;
```
 Matlab 
```csharp
    % Insert CAD object
    NSCE = TheSystem.NCE;
    Obj1 = NSCE.GetObjectAt(1);
    Obj1.ZPosition = -5;
    Obj1_Type = Obj1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.CADPartSTEPIGESSAT);  % create CAD object type
    % Set object 1 as ExtPoly.stp if CAD file exists in proper directory
    % (directory is defined in OpticStudio Preferences...Folders...Objects)
    if exist(char(System.String.Concat(TheApplication.ObjectsDir, '\\CAD Files\\ExtPoly.stp')), 'file')  % Check if the CAD part exists in correct directory
        Obj1_Type.FileName1 = 'ExtPoly.stp';  % set CAD file to be used (file must be in valid directory)
        Obj1.ChangeType(Obj1_Type);  % Set Object 1 as the previously specified CAD file
    else
        HandleError('ImportError("CAD file not found")');
    end
```
 Python 
```csharp
    # Insert CAD object
    NSCE = TheSystem.NCE
    Obj1 = NSCE.GetObjectAt(1)
    Obj1.ZPosition = -5
    Obj1_Type = Obj1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.CADPartSTEPIGESSAT)  # create CAD object type
    # Set object 1 as ExtPoly.stp if it exists in proper directory. The directory is defined under OpticStudio Preferences...Folders...Objects
    if os.path.isfile(TheApplication.ObjectsDir + "\\CAD Files\\ExtPoly.stp"):  # Check if the CAD part exists in correct directory
        Obj1_Type.FileName1 = 'ExtPoly.stp'  # set CAD file to be used (file must be in valid directory)
        Obj1.ChangeType(Obj1_Type)  # Set Object 1 as the previously specified CAD file
    else:
        raise ImportError("CAD file not found")
```
 


The full path to the Objects directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ObjectsDir"}]}`
-->

### Property GlassDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a08101d4454b68a68798e4cd563a30880"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.GlassDir
```


Gets the Glass directory (e.g. C:\Users\John.Doe\My Documents\Zemax\GLASSCAT).

The full path to the Glass directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.GlassDir"}]}`
-->

### Property ZPLDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a2254cdbf88bacbf14bc961e679f4569e"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.ZPLDir
```


Gets the ZPL macros directory (e.g. C:\Users\John.Doe\My Documents\Zemax\MACROS).

The full path to the ZPL directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ZPLDir"}]}`
-->

### Property CoatingDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a4ed777a9acd548dad06e17e1f6f6afc2"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.CoatingDir
```


Gets the Coating directory (e.g. C:\Users\John.Doe\My Documents\Zemax\COATINGS).

The full path to the Coating directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CoatingDir"}]}`
-->

### Property POPDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1adadbb5caef71eb0b339b769eaf28dec2"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.POPDir
```


Gets the POP directory (e.g. C:\Users\John.Doe\My Documents\Zemax\BEAMFILES).

The full path to the POP directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.POPDir"}]}`
-->

### Property ImagesDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ac2a25e7a0823398df0002f13b8d66406"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.ImagesDir
```


Gets the Images directory (e.g. C:\Users\John.Doe\My Documents\Zemax\IMAFILES).

The full path to the Images directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ImagesDir"}]}`
-->

### Property SolidWorksFilesDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a3c3f36f7bc0865a4847fcfefe141959a"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.SolidWorksFilesDir
```


Gets the SolidWorks files directory (e.g. C:\Users\John.Doe\My Documents\Zemax\OBJECTS\SolidWorks Files).

The full path to the SolidWorks files directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.SolidWorksFilesDir"}]}`
-->

### Property AutodeskInventorFilesDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ace4c62e59eb6fd15eb8daf8a4c41d52f"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.AutodeskInventorFilesDir
```


Gets the Autodesk Inventor files directory (e.g. C:\Users\John.Doe\My Documents\Zemax\OBJECTS\Inventor Files).

The full path to the Autodesk Inventor files directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.AutodeskInventorFilesDir"}]}`
-->

### Property CreoParametricFilesDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1abca60968dd253afbcd6968c9dab9d261"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.CreoParametricFilesDir
```


Gets the Creo Parametric files directory (e.g. C:\Users\John.Doe\My Documents\Zemax\OBJECTS\Creo Parametric Files).

The full path to the Creo Parameteric files directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CreoParametricFilesDir"}]}`
-->

### Property MATLABFilesDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a8b23aa99b7efc3b1b26223148a9a8b18"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.MATLABFilesDir
```


Gets the MATLAB directory (e.g. C:\Program Files\MATLAB).

The full path to the MATLAB directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.MATLABFilesDir"}]}`
-->

### Property ScatterDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a0bbece58291c528852d7bed590ac4f71"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.ScatterDir
```


Gets the Scatter directory (e.g. C:\Users\John.Doe\My Documents\Zemax\ScatterData).

The full path to the Scatter directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ScatterDir"}]}`
-->

### Property UndoDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a58a3978c6135291ff3c636a8b0bd4eff"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.UndoDir
```


Gets the Undo directory (e.g. C:\Users\John.Doe\My Documents\Zemax\UNDO).

The full path to the Undo directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.UndoDir"}]}`
-->

### Property SamplesDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ae8fc2a9409927955cc362f9262b052bb"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.SamplesDir
```


Gets the full path for the current user's samples directory (in the My Documents\Zemax\Samples\ folder by default).

Usage (see [Example 14](../apiexamples/example_14.md) for a full sample)


C# 
```csharp
            // Open Double Gauss sample file
            string samplesFolder = TheApplication.SamplesDir;
            string DGfile = System.IO.Path.Combine(samplesFolder, "Sequential\\Objectives\\Double Gauss 28 degree field.zos");
            TheSystem.LoadFile(DGfile, false);
```
 C++ 
```csharp
    // Open Double Gauss sample file
    _bstr_t samplesFolder = TheApplication->SamplesDir;
    _bstr_t DGfile = samplesFolder + (_bstr_t)"\\Sequential\\Objectives\\Double Gauss 28 degree field.zos";
    TheSystem->LoadFile(DGfile, false);
```
 Matlab 
```csharp
    % Open Double Gauss sample file
    samplesFolder = TheApplication.SamplesDir;
    DGfile = System.String.Concat(samplesFolder, '\Sequential\Objectives\Double Gauss 28 degree field.zos');
    TheSystem.LoadFile(DGfile, false);
```
 Python 
```csharp
    # Open Double Gauss sample file
    samplesFolder = TheApplication.SamplesDir
    DGfile = samplesFolder + r"\Sequential\Objectives\Double Gauss 28 degree field.zos"
    TheSystem.LoadFile(DGfile, False)
```
 


n The full path of the samples directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.SamplesDir"}]}`
-->

### Property ZemaxDataDir

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a9064540f2c8b592b4acc58c3c096554c"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.ZemaxDataDir
```


Gets the full path for the current user's Zemax directory (in the My Documents\Zemax\ folder by default).

Usage (see [Example 11](../apiexamples/example_11.md) for a full sample)


C# 
```csharp
            // Open Universal Plot of RMS Spot Size vs Surface3 Thickness
            IA_ UnivPlot = TheSystem.Analyses.New_Analysis(AnalysisIDM.UniversalPlot1D);
            IAS_ UnivPlot_Settings = UnivPlot.GetSettings();
            Console.WriteLine("Universal Plot has analysis specific settings? " + UnivPlot.HasAnalysisSpecificSettings.ToString());
            // Above is False; Universal Plot Settings must be changed via ModifySettings (changing a config (.cfg) file)
            String cfg = TheApplication.ZemaxDataDir + "\\Configs\\UNI.CFG";
            UnivPlot_Settings.Save(); // Create new .cfg file, named "UNI.CFG" in \Configs\ folder
            UnivPlot_Settings.ModifySettings(cfg, "UN1_SURFACE", (TheSystem.LDE.NumberOfSurfaces - 2).ToString());
            UnivPlot_Settings.ModifySettings(cfg, "UN1_STARTVAL", (Surf_4.Thickness - 0.4 / 25.4).ToString());  // Change universal plot settings
            UnivPlot_Settings.ModifySettings(cfg, "UN1_STOPVAL", (Surf_4.Thickness + 0.1 / 25.4).ToString());
            UnivPlot_Settings.ModifySettings(cfg, "UN1_STEPS", 20.ToString());
            UnivPlot_Settings.ModifySettings(cfg, "UN1_PAR1", 10.ToString());
            UnivPlot_Settings.ModifySettings(cfg, "UN1_OPERAND", "RSRE");
            // For ModifySettings keycodes (UN1_STARTVAL, UN1_STEPS, etc.), see MODIFYSETTINGS page in ZPL>keywords help files
            // LoadFrom allows you to load any CFG file, not just default; not available via GUI
            UnivPlot_Settings.LoadFrom(cfg);
```
 C++ 
```csharp
    // Open Universal Plot of RMS Spot Size vs Surface3 Thickness
    IA_Ptr UnivPlot = TheSystem->Analyses->New_Analysis(AnalysisIDM_UniversalPlot1D);
    IAS_Ptr UnivPlot_Settings = UnivPlot->GetSettings();
    cout << "Universal Plot has analysis specific settings? " << UnivPlot->HasAnalysisSpecificSettings << endl;
    // Above is False; Universal Plot Settings must be changed via ModifySettings (changing a config (.cfg) file)
    _bstr_t cfg = TheApplication->ZemaxDataDir + "\\Configs\\UNI.CFG";
    UnivPlot_Settings->Save(); // Create new .cfg file, named "UNI.CFG" in \Configs\ folder
    UnivPlot_Settings->ModifySettings(cfg, "UN1_SURFACE", _bstr_t(TheSystem->LDE->NumberOfSurfaces - 2));
    UnivPlot_Settings->ModifySettings(cfg, "UN1_STARTVAL", _bstr_t(Surf_4->Thickness - 0.4 / 25.4));  // Change universal plot settings
    UnivPlot_Settings->ModifySettings(cfg, "UN1_STOPVAL", _bstr_t(Surf_4->Thickness + 0.1 / 25.4));
    UnivPlot_Settings->ModifySettings(cfg, "UN1_STEPS", _bstr_t(20));
    UnivPlot_Settings->ModifySettings(cfg, "UN1_PAR1", _bstr_t(10));
    UnivPlot_Settings->ModifySettings(cfg, "UN1_OPERAND", "RSRE");
    // For ModifySettings keycodes (UN1_STARTVAL, UN1_STEPS, etc.), see MODIFYSETTINGS page in ZPL>keywords help files
    // LoadFrom allows you to load any CFG file, not just default; not available via GUI
    UnivPlot_Settings->LoadFrom(cfg);
```
 Matlab 
```csharp
    % Open Universal Plot of RMS Spot Size vs Surface3 Thickness
    UnivPlot = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.UniversalPlot1D);
    UnivPlot_Settings = UnivPlot.GetSettings();
    fprintf('Universal Plot has analysis specific settings? %i\n', UnivPlot.HasAnalysisSpecificSettings)
    % Above is False; Universal Plot Settings must be changed via ModifySettings (changing a config (.cfg) file)
    cfg = System.String.Concat(TheApplication.ZemaxDataDir, '\Configs\UNI.CFG');
    UnivPlot_Settings.Save(); % Create new .cfg file, named "UNI.CFG" in \Configs\ folder
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_SURFACE', num2str(TheSystem.LDE.NumberOfSurfaces() - 2));
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STARTVAL', num2str(Surf_4.Thickness - 0.4 / 25.4));  % Change universal plot settings
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STOPVAL', num2str(Surf_4.Thickness + 0.1 / 25.4));
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STEPS', num2str(20));
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_PAR1', num2str(10));
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_OPERAND', 'RSRE');
    % For ModifySettings keycodes (UN1_STARTVAL, UN1_STEPS, etc.), see MODIFYSETTINGS page in ZPL>keywords help files
    % LoadFrom allows you to load any CFG file, not just default; not available via GUI
    UnivPlot_Settings.LoadFrom(cfg);  % Load in the Universal Plot Settings
```
 Python 
```csharp
    # Open Universal Plot of RMS Spot Size vs Surface3 Thickness
    UnivPlot = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.UniversalPlot1D)
    UnivPlot_Settings = UnivPlot.GetSettings()
    print("Universal Plot has analysis specific settings? ", UnivPlot.HasAnalysisSpecificSettings)
    # Above is False; Universal Plot Settings must be changed via ModifySettings (changing a config (.cfg) file)
    cfg = TheApplication.ZemaxDataDir + "\\Configs\\UNI.CFG"
    UnivPlot_Settings.Save()  # Create new .cfg file, named "UNI.CFG" in \Configs\ folder
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_SURFACE', str(TheSystem.LDE.NumberOfSurfaces - 2))
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STARTVAL', str(Surf_4.Thickness - 0.4 / 25.4))  # Change universal plot settings
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STOPVAL', str(Surf_4.Thickness + 0.1 / 25.4))
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STEPS', str(20))
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_PAR1', str(10))
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_OPERAND', "RSRE")
    # For ModifySettings keycodes (UN1_STARTVAL, UN1_STEPS, etc.), see MODIFYSETTINGS page in ZPL>keywords help files
    # LoadFrom allows you to load any CFG file, not just default; not available via GUI
    UnivPlot_Settings.LoadFrom(cfg)
```
 


The full path of the Zemax directory.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ZemaxDataDir"}]}`
-->

### Property OperandResults

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a46fc7da26be5a482b4991b3b7157f59e"></a>

![][public]

**Definition**:


```csharp
IVectorData ZOSAPI.IZOSAPI_Application.OperandResults
```


In Operand mode, used to set the output data.

Usage (see [Example 16](../apiexamples/example_16.md) for a full sample)


C# 
```csharp
            //Make the sum of the absolute value of each surface thickness
            ZOSAPI.Editors.LDE.ILDERow surf;
            double thic = 0;

            if (surf1 <= surf2)
            {
                for (int i = surf1; i <= surf2; i++)
                {
                    surf = TheSystem.LDE.GetSurfaceAt(i);
                    thic = thic + Math.Abs(surf.Thickness);                    
                }
                operandResults[0] = thic;
            }
            else
            {
                operandResults[0] = 1e9;    // invalid input
            }
```
 C++ 
```csharp
    //Make the sum of the absolute value of each surface thickness
    ILDERowPtr surf;
    double thic = 0;
    
    if (surf1 <= surf2)
    {
        for (int i = surf1; i <= surf2; i++)
        {
            surf = TheSystem->LDE->GetSurfaceAt(i);
            thic = thic + abs(surf->Thickness);
        }
        operandResults[0] = thic;
    }
    else
    {
        operandResults[0] = 1e9;    // invalid input
    }
```


**Return type**: [IVectorData](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.OperandResults"}]}`
-->

### Property OperandArgument1

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ae50eae8bffec8ed4b4cf511b52b8ccf4"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.IZOSAPI_Application.OperandArgument1
```


Argument 1 - Hx.

Usage (see [Example 16](../apiexamples/example_16.md) for a full sample)


C# 
```csharp
            // Read the operand arguments (Note that we aren't using operand 3 and 4)
            int surf1 = (int)TheApplication.OperandArgument1;
            int surf2 = (int)TheApplication.OperandArgument2;
            //double x = TheApplication.OperandArgument3;
            //double y = TheApplication.OperandArgument4;    
```
 C++ 
```csharp
    // Read the operand arguments (Note that we aren't using operand 3 and 4)
    int surf1 = (int)TheApplication->OperandArgument1;
    int surf2 = (int)TheApplication->OperandArgument2;
    //double x = (double)TheApplication->OperandArgument3;
    //double y = (double)TheApplication->OperandArgument4;    
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.OperandArgument1"}]}`
-->

### Property OperandArgument2

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a7fc25b6936d0b0b840af213bb54d7314"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.IZOSAPI_Application.OperandArgument2
```


Argument 2 - Hy.

Usage (see [Example 16](../apiexamples/example_16.md) for a full sample)


C# 
```csharp
            // Read the operand arguments (Note that we aren't using operand 3 and 4)
            int surf1 = (int)TheApplication.OperandArgument1;
            int surf2 = (int)TheApplication.OperandArgument2;
            //double x = TheApplication.OperandArgument3;
            //double y = TheApplication.OperandArgument4;    
```
 C++ 
```csharp
    // Read the operand arguments (Note that we aren't using operand 3 and 4)
    int surf1 = (int)TheApplication->OperandArgument1;
    int surf2 = (int)TheApplication->OperandArgument2;
    //double x = (double)TheApplication->OperandArgument3;
    //double y = (double)TheApplication->OperandArgument4;    
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.OperandArgument2"}]}`
-->

### Property OperandArgument3

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1adefae0ab7222380382b8457207120086"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.IZOSAPI_Application.OperandArgument3
```


Argument 3 - Px.


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.OperandArgument3"}]}`
-->

### Property OperandArgument4

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ac14d8524751a4b765e91df2535542d48"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.IZOSAPI_Application.OperandArgument4
```


Argument 4 - Py.


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.OperandArgument4"}]}`
-->

### Property UserAnalysisData

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1abc787bc578c7c9d5f1f6f60d08280808"></a>

![][public]

**Definition**:


```csharp
IUserAnalysisData ZOSAPI.IZOSAPI_Application.UserAnalysisData
```


Gets the interface used to configure a User Analysis. Note that this is only available when Mode is ZOSAPI_Mode.UserAnalysis or ZOSAPI_Mode.UserAnalysisSettings.

The user analysis data.


**Return type**: [IUserAnalysisData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.UserAnalysisData"}]}`
-->

### Property TerminateRequested

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aab28e1689fe06b0607b735a8bf68e51c"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.IZOSAPI_Application.TerminateRequested
```


For a user analysis or extension, gets a value indicating if the user wishes to abort the calculation.

<code>true</code> if the use requsted terminations; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.TerminateRequested"}]}`
-->

### Property ShowChangesInUI

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a3d02a569ca24a51e9b05494ffb8d1b42"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.IZOSAPI_Application.ShowChangesInUI
```


If the Mode is ZOSAPI_Mode.Plugin, gets or sets a value indicating whether or not changes to the PrimarySystem are displayed in the OpticStudio user interface.

<code>true</code> if changes are displayed; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ShowChangesInUI"}]}`
-->

### Property ProgressMessage

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aa153afd3b42be1932f4b1412a0b815b6"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.ProgressMessage
```


If the Mode is ZOSAPI_Mode.Plugin, this controls the status message displayed in the OpticStudio progress dialog.

The progress message to display.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ProgressMessage"}]}`
-->

### Property ProgressPercent

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a58b446bc4c63d453930cd10afa19a24e"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.IZOSAPI_Application.ProgressPercent
```


If the Mode is ZOSAPI_Mode.Plugin, this controls the progress percentage displayed in the OpticStudio progress dialog.

The progress message to display (0-100).


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ProgressPercent"}]}`
-->

### Property CheckForUpdatesStatus

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1abe1523cd0603c807fc476da7cdb23489"></a>

![][public]

**Definition**:


```csharp
UpdateStatus ZOSAPI.IZOSAPI_Application.CheckForUpdatesStatus
```


Gets the check for updates status.

The current status. Note that you must call CheckForUpdates to ensure the results are up-to-date.


**Return type**: [UpdateStatus](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i_1ae1500a9901bf1c5a361d63d4fac19d9a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CheckForUpdatesStatus"}]}`
-->

### Property CheckForUpdatesData

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a73ce07cd6bb8ac2ded248c638f9e11cb"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Application.CheckForUpdatesData
```


Gets data about the newest available product.

The most recent product data.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CheckForUpdatesData"}]}`
-->

### Property CheckForUpdatesVersion

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ad2909ac2e1609e6428009c81322d2299"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.CheckForUpdatesVersion
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CheckForUpdatesVersion"}]}`
-->

### Property Preferences

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a2b0d83df3552a7647a57a22a9496f43d"></a>

![][public]

**Definition**:


```csharp
IPreferences ZOSAPI.IZOSAPI_Application.Preferences
```


**Return type**: [IPreferences](interface_z_o_s_a_p_i_1_1_i_preferences.md#interface_z_o_s_a_p_i_1_1_i_preferences)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.Preferences"}]}`
-->

### Property IsLoggingMessages

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a6f3486259de910ac869c1eb9029c6463"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.IZOSAPI_Application.IsLoggingMessages
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.IsLoggingMessages"}]}`
-->

### Property ZOSMajorVersion

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aec596af50cba94e450f14b917785c6c2"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.ZOSMajorVersion
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ZOSMajorVersion"}]}`
-->

### Property ZOSMinorVersion

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a97f4ce49cade12fc4f46c92029b5d3e6"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.ZOSMinorVersion
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ZOSMinorVersion"}]}`
-->

### Property ZOSSPVersion

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a193b7a1a6bd5d2994362afcd9738664f"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.ZOSSPVersion
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ZOSSPVersion"}]}`
-->

### Property IsSubscriptionLicense

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1afbe7a4e5366cbeb3c77c566266746139"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.IZOSAPI_Application.IsSubscriptionLicense
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.IsSubscriptionLicense"}]}`
-->

### Property IsSTARModuleEnabled

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a1c4b9f756f2cd2138769b1d0022fd934"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.IZOSAPI_Application.IsSTARModuleEnabled
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.IsSTARModuleEnabled"}]}`
-->

### Property OpticStudioInstance

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a1a91274f0e60b435428cb17041fe2909"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.IZOSAPI_Application.OpticStudioInstance
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.OpticStudioInstance"}]}`
-->

## Public functions

### Function GetSystemAt

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ae88718112dfda9f39c3d053a6396dc6f"></a>

![][public]


```csharp
IOpticalSystem ZOSAPI.IZOSAPI_Application.GetSystemAt(int pos)
```


Gets the system at the specified index. Note that.

<code>0</code> will always be the same as PrimarySystem.


**Parameters**:

* **pos**: The index for the desired system (
```csharp
0
```
 to NumberOfOpticalSystems-1).


**Returns**:


**Parameters**:

* int **pos**

**Return type**: [IOpticalSystem](interface_z_o_s_a_p_i_1_1_i_optical_system.md#interface_z_o_s_a_p_i_1_1_i_optical_system)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.GetSystemAt"}]}`
-->

### Function CloseSystemAt

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a87b834bab4ec341168a17f74f4c629e7"></a>

![][public]


```csharp
bool ZOSAPI.IZOSAPI_Application.CloseSystemAt(int pos, bool saveIfNeeded)
```


Closes the system at the specified index.

**Parameters**:

* **pos**: The index for the desired system (
```csharp
1
```
 to NumberOfOpticalSystems-1).
* **saveIfNeeded**: If set to <code>true</code>, the system will be saved to lens file before saving; otherwise, any changes will be lost.


**Returns**:


```csharp
true
```
 if the system was closed; 
```csharp
false
```
 otherwise.


**Parameters**:

* int **pos**
* bool **saveIfNeeded**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CloseSystemAt"}]}`
-->

### Function LoadNewSystem

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1aeb97e84d0e7062c495f9f9186574ea89"></a>

![][public]


```csharp
IOpticalSystem ZOSAPI.IZOSAPI_Application.LoadNewSystem(String LensFile)
```


Creates a new optical system, and loads the specified lens file.

**Parameters**:

* **LensFile**: The desired lens file (.ZMX file).


**Returns**:

A new IOpticalSystem if the file was successfully loaded; otherwise, 
```csharp
null
```
.


**Parameters**:

* String **LensFile**

**Return type**: [IOpticalSystem](interface_z_o_s_a_p_i_1_1_i_optical_system.md#interface_z_o_s_a_p_i_1_1_i_optical_system)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.LoadNewSystem"}]}`
-->

### Function CreateNewSystem

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a024aef7880a5ba49d60db78b9b9140b5"></a>

![][public]


```csharp
IOpticalSystem ZOSAPI.IZOSAPI_Application.CreateNewSystem(SystemType mode)
```


Creates a new empty optical system, in the specified mode.

Usage (see [Example 06](../apiexamples/example_06.md) for a full sample)


C# 
```csharp
            // Create new non- sequential file
            // Set up primary optical system
            TheSystem = TheApplication.CreateNewSystem(ZOSAPI.SystemType.NonSequential);
            INonSeqEditor TheNCE = TheSystem.NCE as INonSeqEditor;
```
 C++ 
```csharp
    // Create new non- sequential file
    // Set up primary optical system
    TheSystem = TheApplication->CreateNewSystem(SystemType_NonSequential);
    INonSeqEditorPtr TheNCE = TheSystem->NCE;
```
 Matlab 
```csharp
    % Create new non-sequential file
    TheSystem = TheApplication.CreateNewSystem(ZOSAPI.SystemType.NonSequential);
    TheNCE = TheSystem.NCE;
```
 Python 
```csharp
    # Create new non-sequential file
    TheSystem = TheApplication.CreateNewSystem(ZOSAPI.SystemType.NonSequential)
    TheNCE = TheSystem.NCE
```
 


**Parameters**:

* **mode**: The mode, either SystemType.Sequential for a sequential system, or SystemType.NonSequential for a pure non-sequential file.


**Returns**:

A new, empty IOpticalSystem.


**Parameters**:

* [SystemType](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i_1a3c37540f7b61a272f4eb50e826d27daf) **mode**

**Return type**: [IOpticalSystem](interface_z_o_s_a_p_i_1_1_i_optical_system.md#interface_z_o_s_a_p_i_1_1_i_optical_system)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CreateNewSystem"}]}`
-->

### Function UpdateFileLists

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ac602e21441f97078424e9de4ac674832"></a>

![][public]


```csharp
void ZOSAPI.IZOSAPI_Application.UpdateFileLists()
```


Update the cached file lists. (For example, if you've saved a 'STEP' file, you'll need to call this function before trying to use that file later in your code.)


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.UpdateFileLists"}]}`
-->

### Function GetDate

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ab41d60a724a902bc50950c5a29c89ef3"></a>

![][public]


```csharp
string ZOSAPI.IZOSAPI_Application.GetDate()
```


This item extracts the current date and time, in the format selected by the user in the Zemax environment dialog box.

**Returns**:

The formatted date/time


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.GetDate"}]}`
-->

### Function CloseApplication

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ab662a3cc1b97d8632a324b1137fa943b"></a>

![][public]


```csharp
void ZOSAPI.IZOSAPI_Application.CloseApplication()
```


Shut down the Optic Studio process.

Note - this method only applies when running in standalone mode. Any attempt to call API members after this call successfully executes will fail.


**Return type**: void

**Referenced by**:

* [ZOSAPI.ZOSAPI\_Connection.ConnectAsExtension](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1acc229ae487281fc0aae93e470d9012e3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CloseApplication"}]}`
-->

### Function CheckForUpdates

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a9177206157e8adba0417c760f320b95d"></a>

![][public]


```csharp
void ZOSAPI.IZOSAPI_Application.CheckForUpdates()
```


Populate the available updates status (see CheckForUpdatesStatus and CheckForUpdatesVersion).


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CheckForUpdates"}]}`
-->

### Function ClearMessageLog

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a3266cd764e66b4f1e4a577f393248326"></a>

![][public]


```csharp
void ZOSAPI.IZOSAPI_Application.ClearMessageLog()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.ClearMessageLog"}]}`
-->

### Function BeginMessageLogging

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a6d56b41e14e51804b7eab5416faa15de"></a>

![][public]


```csharp
bool ZOSAPI.IZOSAPI_Application.BeginMessageLogging()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.BeginMessageLogging"}]}`
-->

### Function EndMessageLogging

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a7edfe16189fded167a1a69e5f76a91dc"></a>

![][public]


```csharp
bool ZOSAPI.IZOSAPI_Application.EndMessageLogging()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.EndMessageLogging"}]}`
-->

### Function RetrieveLogMessages

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a0b46be3da70625b6b8ecdd1b19edae72"></a>

![][public]


```csharp
string ZOSAPI.IZOSAPI_Application.RetrieveLogMessages()
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.RetrieveLogMessages"}]}`
-->

### Function LoadCCallback

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1ab3539b2d69bc2f65ef734e06314f4a3f"></a>

![][public]


```csharp
IZOSAPI_Callback ZOSAPI.IZOSAPI_Application.LoadCCallback(string cLib, string callbackName, ISettingsData settings)
```


**Parameters**:

* string **cLib**
* string **callbackName**
* [ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data) **settings**

**Return type**: [IZOSAPI\_Callback](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.LoadCCallback"}]}`
-->

### Function RegisterCOperandCallback

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a6f84e31a3a53054d966e6e3297f2d2d2"></a>

![][public]


```csharp
IMessage ZOSAPI.IZOSAPI_Application.RegisterCOperandCallback(string cLib, string callbackName, ISettingsData settings)
```


**Parameters**:

* string **cLib**
* string **callbackName**
* [ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data) **settings**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.RegisterCOperandCallback"}]}`
-->

### Function LoadNETCallback

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a60d28f7fd1426fbb4875ff9dba51f1d4"></a>

![][public]


```csharp
IZOSAPI_Callback ZOSAPI.IZOSAPI_Application.LoadNETCallback(string fromAssembly, string typeName, ISettingsData settings)
```


**Parameters**:

* string **fromAssembly**
* string **typeName**
* [ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data) **settings**

**Return type**: [IZOSAPI\_Callback](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.LoadNETCallback"}]}`
-->

### Function RegisterNETOperandCallback

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a52d6352d6ec09fd2d2ecdfba95cdcaca"></a>

![][public]


```csharp
IMessage ZOSAPI.IZOSAPI_Application.RegisterNETOperandCallback(string fromAssembly, string typeName, ISettingsData settings)
```


**Parameters**:

* string **fromAssembly**
* string **typeName**
* [ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data) **settings**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.RegisterNETOperandCallback"}]}`
-->

### Function CopySettingsData

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a3f5ee3620e81f59cc4ad30ce7368f71d"></a>

![][public]


```csharp
bool ZOSAPI.IZOSAPI_Application.CopySettingsData(ISettingsData from, ISettingsData to)
```


**Parameters**:

* [ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data) **from**
* [ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data) **to**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CopySettingsData"}]}`
-->

### Function CreateSettings

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a69c354d0efd1452db83777ecc226e019"></a>

![][public]


```csharp
ISettingsData ZOSAPI.IZOSAPI_Application.CreateSettings()
```


**Return type**: [ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CreateSettings"}]}`
-->

### Function CreateSettingsFromParent

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a7280e6c31896b553b415663a124ff979"></a>

![][public]


```csharp
ISettingsData ZOSAPI.IZOSAPI_Application.CreateSettingsFromParent(IZAPI_BaseObject parent)
```


**Parameters**:

* [IZAPI\_BaseObject](interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object.md#interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object) **parent**

**Return type**: [ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CreateSettingsFromParent"}]}`
-->

### Function OpenDataFile

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a16f084312504d41fc85006df0a60c7b8"></a>

![][public]


```csharp
IDataDictionary ZOSAPI.IZOSAPI_Application.OpenDataFile(string fileName)
```


**Parameters**:

* string **fileName**

**Return type**: [IDataDictionary](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_data_dictionary.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_data_dictionary)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.OpenDataFile"}]}`
-->

### Function CreateDataFile

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1adfef6e414553c4e5ce80d3ebc6a3efde"></a>

![][public]


```csharp
IDataDictionary ZOSAPI.IZOSAPI_Application.CreateDataFile(string fileName, ZemaxFileTypes type, int data1, int data2)
```


**Parameters**:

* string **fileName**
* [ZemaxFileTypes](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1aa74aa8f43c52bb6656e3891020076d8a) **type**
* int **data1**
* int **data2**

**Return type**: [IDataDictionary](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_data_dictionary.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_data_dictionary)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.CreateDataFile"}]}`
-->

### Function RunCommand

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application_1a52f127d98afadb8d06d79c7688a14f86"></a>

![][public]


```csharp
string ZOSAPI.IZOSAPI_Application.RunCommand(string command)
```


For internal debugging purposes only.

**Parameters**:

* **command**:


**Returns**:


**Parameters**:

* string **command**

**Return type**: string

**Referenced by**:

* [ZOSAPI.ZOSAPI\_Connection.RunCommand](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection_1a25ac733120b770870ae8b29ae5dedd3c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Application.RunCommand"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
