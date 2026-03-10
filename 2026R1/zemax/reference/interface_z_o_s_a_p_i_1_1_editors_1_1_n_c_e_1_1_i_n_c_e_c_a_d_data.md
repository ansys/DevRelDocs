# Interface ZOSAPI::Editors::NCE::INCECADData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data"></a>

![][C#]
![][public]

**Definition**:

Object properties CAD tab. This interface can be accessed via the INCERow interface.

Usage (see [Example 09](page_ex09.md#page_ex09) for a full sample)


C# 
```csharp
            //  Access the CAD settings for object 1
            INCECADData Obj1_CAD = Obj1.CADData;  //  Retrieve CAD data

            // Determine if the surface-to-face mappint is available for this object. 
            // If available, update the mapping based on the total number of surfaces in the system
            if (Obj1_CAD.HasFaceData)
            {
                if (Obj1_CAD.NumberOfSurfaces > 1)
                {
                    // Assign the last face to surface 0. Now, the first and last surfaces will be defined with the same scatter and coating properties
                    Obj1_CAD.SetSurfaceFace(0, Obj1_CAD.NumberOfSurfaces - 1);
                }
            }
```
 C++ 
```csharp
    //  Access the CAD settings for object 1
    INCECADDataPtr Obj1_CAD = Obj1->CADData;  //  Retrieve CAD data

    // Determine if surface-to-face mapping is available for this object. If yes, update the mapping.
    if (Obj1_CAD->HasFaceData)
    {
        if (Obj1_CAD->NumberOfSurfaces > 1) 
        {
            // Assign last face to surface 0. Now, the first and last surfaces will be defined with the same scatter and coating properties
            Obj1_CAD->SetSurfaceFace(0, Obj1_CAD->NumberOfSurfaces - 1);
        }
    }
```
 Matlab 
```csharp
    % Access the CAD settings for object 1
    Obj1_CAD = Obj1.CADData;  % Retrieve CAD data
    
    % Determine if the surface-to-face mapping is available for this
    % object. If yes, update the mapping
    if Obj1_CAD.HasFaceData
        if Obj1_CAD.NumberOfSurfaces > 1
            % Assign last face to surface 0. Now the first and last surface
            % will be defined with the same scatter and coating properties.
            Obj1_CAD.SetSurfaceFace(0, Obj1_CAD.NumberOfSurfaces-1);   
        end
    end
    
```
 Python 
```csharp
    # Access the CAD settings for object 1
    Obj1_CAD = Obj1.CADData  

    # Determine if the surface-to-face mapping is available for this object. If yes, update the mapping
    if Obj1_CAD.HasFaceData:
        if Obj1_CAD.NumberOfSurfaces > 1:
            # Assign the last face to surface 0. Now, the first and last surfaces will be defined with the same scatter and coating properties. 
            Obj1_CAD.SetSurfaceFace(0, Obj1_CAD.NumberOfSurfaces-1)  
```

## Members

* [ChordTolerance](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1aab6391dc1a3f41e6e0c39ac103ea5c2e)
* [CurrentConfiguration](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a1c1fa960f9888c3b31934413b52c8cf9)
* [FaceAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ab46c85bc8eb2a8ec93ab4665f9577ec5)
* [FaceMode](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ab229fe36d4b733f4835bf2403571dfc6)
* [GetConfigurationName](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1aa9dd34c62925918632e1fa1130f96c0d)
* [GetPartExposed](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a2030946ecd9dfc1a1b46860d7566a679)
* [GetPartName](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a638818b135d3f6c8513091350d976f3e)
* [GetSurfaceFace](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a2773f2ca57722766aa3255e984372274)
* [GetSurfaceName](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1accce9d7e34eaff7fe88fd9cfbe77d785)
* [HasChordTolerance](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1af96fcf8979e1f96d4c3a2bd04cb40756)
* [HasEdgeLength](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a526bba8295a67d8965597af2bc337535)
* [HasFaceData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1aa8b2630798b34e69ff1d8d0e70381c06)
* [HasFaceParameters](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a518443a2cb0f77f060bcd50ae83f21ce)
* [HasMergeSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ac5de336c6adf6f82a26219f7f79b99ab)
* [HasPartData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ae6263ab1a23d67430357381b12c334d2)
* [HasSurfaceTolerance](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ad7fbf5589b1e97954832d7b369ca39a9)
* [HasTraceMode](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1adcaff13e400efd9575c85d9134555bef)
* [IsCADAvailable](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ae385ee7d81675b1fcd90b8b516378c84)
* [MaxEdgeLength](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a8ad7a9b0e847eba392e02f9a3b90068c)
* [MergeSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a2b039042f27b2db185981a8968157c4a)
* [NumberOfConfigurations](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a71bc9c41a31cda00167b5f10db223dc8)
* [NumberOfParts](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1aed531a0d8b9e5a0bda861cf3354c94cf)
* [NumberOfSurfaces](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a787f89799263dbae26e2c10dff24c802)
* [SetAllPartsExposed](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1acafb67a83b598e34a4ae3c087ecbe6d3)
* [SetPartExposed](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ae7ac18bb61b8941840bc408d451f4b5c)
* [SetSurfaceFace](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ad68d3799e5463c122e524117f2874268)
* [SetSurfaceName](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ac463af9ff963420ebc1373c70d107d42)
* [SurfaceTolerance](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a0051e5628ea66a7efc3a3fc4b6f56a3a)
* [TraceMode](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ad41fe5338d569d94400376d57135feef)

## Properties

### Property IsCADAvailable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ae385ee7d81675b1fcd90b8b516378c84"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.IsCADAvailable
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.IsCADAvailable"}]}`
-->

### Property HasChordTolerance

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1af96fcf8979e1f96d4c3a2bd04cb40756"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.HasChordTolerance
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.HasChordTolerance"}]}`
-->

### Property ChordTolerance

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1aab6391dc1a3f41e6e0c39ac103ea5c2e"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCECADData.ChordTolerance
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.ChordTolerance"}]}`
-->

### Property HasSurfaceTolerance

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ad7fbf5589b1e97954832d7b369ca39a9"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.HasSurfaceTolerance
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.HasSurfaceTolerance"}]}`
-->

### Property SurfaceTolerance

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a0051e5628ea66a7efc3a3fc4b6f56a3a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCECADData.SurfaceTolerance
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.SurfaceTolerance"}]}`
-->

### Property HasFaceParameters

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a518443a2cb0f77f060bcd50ae83f21ce"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.HasFaceParameters
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.HasFaceParameters"}]}`
-->

### Property FaceAngle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ab46c85bc8eb2a8ec93ab4665f9577ec5"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCECADData.FaceAngle
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.FaceAngle"}]}`
-->

### Property FaceMode

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ab229fe36d4b733f4835bf2403571dfc6"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCECADData.FaceMode
```


Usage (see [Example 09](page_ex09.md#page_ex09) for a full sample)


C# 
```csharp
            using (System.IO.StreamWriter POBfile = new System.IO.StreamWriter(TheApplication.ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB", false)) //  Open new POB file
            {
                //  Append new POB file with polygon definitions (see help files for syntax information)
                POBfile.WriteLine("! A cube" + "\n");
                POBfile.WriteLine("! front face vertices" + "\n" + "V 1 -1 -1 0" + "\n" + "V 2 1 -1 0" + "\n" + "V 3 1 1 0" + "\n" + "V 4 -1 1 0" + "\n");
                POBfile.WriteLine("! back face vertices" + "\n" + "V 5 -1 -1 2" + "\n" + "V 6 1 -1 2" + "\n" + "V 7 1 1 2" + "\n" + "V 8 -1 1 2" + "\n");
                POBfile.WriteLine("! Front" + "\n" + "R 1 2 3 4 0 0" + "\n" + "! Back" + "\n" + "R 5 6 7 8 0 0" + "\n");
                POBfile.WriteLine("! Top" + "\n" + "R 4 3 7 8 0 0" + "\n" + "! Bottom" + "\n" + "R 1 2 6 5 0 0" + "\n");
                POBfile.WriteLine("! Left Side" + "\n" + "R 1 4 8 5 0 0" + "\n" + "! Right Side" + "\n" + "R 2 3 7 6 0 0");
                INCERow Obj2 = NSCE.InsertNewObjectAt(2);  //  Add new line to NSCE
                IObjectTypeSettings Obj2_Type = Obj2.GetObjectTypeSettings(ObjectType.PolygonObject);
                Obj2_Type.FileName1 = "API_cube_demo.POB";
                Obj2.ChangeType(Obj2_Type);
            }
```
 C++ 
```csharp
    fstream POBfile;
    string filepath = TheApplication->ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB";
    POBfile.open(filepath, fstream::trunc | ios::out);

    POBfile << "! A cube" << "\n";
    POBfile << "! front face vertices" << "\n" << "V 1 -1 -1 0" << "\n" << "V 2 1 -1 0" << "\n" << "V 3 1 1 0" << "\n" << "V 4 -1 1 0" << "\n";
    POBfile << "! back face vertices" << "\n" << "V 5 -1 -1 2" << "\n" << "V 6 1 -1 2" << "\n" << "V 7 1 1 2" << "\n" << "V 8 -1 1 2" << "\n";
    POBfile << "! Front" << "\n" << "R 1 2 3 4 0 0" << "\n" << "! Back" << "\n" << "R 5 6 7 8 0 0" << "\n";
    POBfile << "! Top" << "\n" << "R 4 3 7 8 0 0" << "\n" << "! Bottom" << "\n" << "R 1 2 6 5 0 0" << "\n";
    POBfile << "! Left Side" << "\n" << "R 1 4 8 5 0 0" << "\n" << "! Right Side" << "\n" << "R 2 3 7 6 0 0";
    INCERowPtr Obj2 = NSCE->InsertNewObjectAt(2);  //  Add new line to NSCE
    IObjectTypeSettingsPtr Obj2_Type = Obj2->GetObjectTypeSettings(ObjectType_PolygonObject);
    Obj2_Type->FileName1 = "API_cube_demo.POB";
    Obj2->ChangeType(Obj2_Type);
```
 Matlab 
```csharp
    POBfile = fopen(char(System.String.Concat(TheApplication.ObjectsDir, '\\Polygon Objects\\API_cube_demo.POB')), 'w'); % Open new POB file
    % Append new POB file with polygon definitions (see help files for syntax information)
    fprintf(POBfile, '! A cube\n'); 
    fprintf(POBfile, '! front face vertices\nV 1 -1 -1 0\nV 2 1 -1 0\nV 3 1 1 0\nV 4 -1 1 0\n');
    fprintf(POBfile, '! back face vertices\nV 5 -1 -1 2\nV 6 1 -1 2\nV 7 1 1 2\nV 8 -1 1 2\n');
    fprintf(POBfile, '! Front\nR 1 2 3 4 0 0\n! Back\nR 5 6 7 8 0 0\n');
    fprintf(POBfile, '! Top\nR 4 3 7 8 0 0\n! Bottom\nR 1 2 6 5 0 0\n');
    fprintf(POBfile, '! Left Side\nR 1 4 8 5 0 0\n! Right Side\nR 2 3 7 6 0 0');
    fclose(POBfile);
    Obj2 = NSCE.InsertNewObjectAt(2);  % Add new line to NSCE
    Obj2_Type = Obj2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.PolygonObject);
    Obj2_Type.FileName1 = 'API_cube_demo.POB';
    Obj2.ChangeType(Obj2_Type);
```
 Python 
```csharp
    POBfile = open(TheApplication.ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB", "w")  # Open new POB file
    # Append new POB file with polygon definitions (see help files for syntax information)
    POBfile.write("! A cube" '\n')
    POBfile.write("! front face vertices" '\n' "V 1 -1 -1 0" '\n' "V 2 1 -1 0" '\n' "V 3 1 1 0" '\n' "V 4 -1 1 0" '\n')
    POBfile.write("! back face vertices" '\n' "V 5 -1 -1 2" '\n' "V 6 1 -1 2" '\n' "V 7 1 1 2" '\n' "V 8 -1 1 2" '\n')
    POBfile.write("! Front" '\n' "R 1 2 3 4 0 0" '\n' "! Back" '\n' "R 5 6 7 8 0 0" '\n')
    POBfile.write("! Top" '\n' "R 4 3 7 8 0 0" '\n' "! Bottom" '\n' "R 1 2 6 5 0 0" '\n')
    POBfile.write("! Left Side" '\n' "R 1 4 8 5 0 0" '\n' "! Right Side" '\n' "R 2 3 7 6 0 0")
    POBfile.close()
    Obj2 = NSCE.InsertNewObjectAt(2)  # Add new line to NSCE
    Obj2_Type = Obj2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.PolygonObject)
    Obj2_Type.FileName1 = "API_cube_demo.POB"
    Obj2.ChangeType(Obj2_Type)
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.FaceMode"}]}`
-->

### Property HasMergeSurfaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ac5de336c6adf6f82a26219f7f79b99ab"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.HasMergeSurfaces
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.HasMergeSurfaces"}]}`
-->

### Property MergeSurfaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a2b039042f27b2db185981a8968157c4a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.MergeSurfaces
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.MergeSurfaces"}]}`
-->

### Property HasFaceData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1aa8b2630798b34e69ff1d8d0e70381c06"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.HasFaceData
```


Usage (see [Example 09](page_ex09.md#page_ex09) for a full sample)


C# 
```csharp
            using (System.IO.StreamWriter POBfile = new System.IO.StreamWriter(TheApplication.ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB", false)) //  Open new POB file
            {
                //  Append new POB file with polygon definitions (see help files for syntax information)
                POBfile.WriteLine("! A cube" + "\n");
                POBfile.WriteLine("! front face vertices" + "\n" + "V 1 -1 -1 0" + "\n" + "V 2 1 -1 0" + "\n" + "V 3 1 1 0" + "\n" + "V 4 -1 1 0" + "\n");
                POBfile.WriteLine("! back face vertices" + "\n" + "V 5 -1 -1 2" + "\n" + "V 6 1 -1 2" + "\n" + "V 7 1 1 2" + "\n" + "V 8 -1 1 2" + "\n");
                POBfile.WriteLine("! Front" + "\n" + "R 1 2 3 4 0 0" + "\n" + "! Back" + "\n" + "R 5 6 7 8 0 0" + "\n");
                POBfile.WriteLine("! Top" + "\n" + "R 4 3 7 8 0 0" + "\n" + "! Bottom" + "\n" + "R 1 2 6 5 0 0" + "\n");
                POBfile.WriteLine("! Left Side" + "\n" + "R 1 4 8 5 0 0" + "\n" + "! Right Side" + "\n" + "R 2 3 7 6 0 0");
                INCERow Obj2 = NSCE.InsertNewObjectAt(2);  //  Add new line to NSCE
                IObjectTypeSettings Obj2_Type = Obj2.GetObjectTypeSettings(ObjectType.PolygonObject);
                Obj2_Type.FileName1 = "API_cube_demo.POB";
                Obj2.ChangeType(Obj2_Type);
            }
```
 C++ 
```csharp
    fstream POBfile;
    string filepath = TheApplication->ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB";
    POBfile.open(filepath, fstream::trunc | ios::out);

    POBfile << "! A cube" << "\n";
    POBfile << "! front face vertices" << "\n" << "V 1 -1 -1 0" << "\n" << "V 2 1 -1 0" << "\n" << "V 3 1 1 0" << "\n" << "V 4 -1 1 0" << "\n";
    POBfile << "! back face vertices" << "\n" << "V 5 -1 -1 2" << "\n" << "V 6 1 -1 2" << "\n" << "V 7 1 1 2" << "\n" << "V 8 -1 1 2" << "\n";
    POBfile << "! Front" << "\n" << "R 1 2 3 4 0 0" << "\n" << "! Back" << "\n" << "R 5 6 7 8 0 0" << "\n";
    POBfile << "! Top" << "\n" << "R 4 3 7 8 0 0" << "\n" << "! Bottom" << "\n" << "R 1 2 6 5 0 0" << "\n";
    POBfile << "! Left Side" << "\n" << "R 1 4 8 5 0 0" << "\n" << "! Right Side" << "\n" << "R 2 3 7 6 0 0";
    INCERowPtr Obj2 = NSCE->InsertNewObjectAt(2);  //  Add new line to NSCE
    IObjectTypeSettingsPtr Obj2_Type = Obj2->GetObjectTypeSettings(ObjectType_PolygonObject);
    Obj2_Type->FileName1 = "API_cube_demo.POB";
    Obj2->ChangeType(Obj2_Type);
```
 Matlab 
```csharp
    POBfile = fopen(char(System.String.Concat(TheApplication.ObjectsDir, '\\Polygon Objects\\API_cube_demo.POB')), 'w'); % Open new POB file
    % Append new POB file with polygon definitions (see help files for syntax information)
    fprintf(POBfile, '! A cube\n'); 
    fprintf(POBfile, '! front face vertices\nV 1 -1 -1 0\nV 2 1 -1 0\nV 3 1 1 0\nV 4 -1 1 0\n');
    fprintf(POBfile, '! back face vertices\nV 5 -1 -1 2\nV 6 1 -1 2\nV 7 1 1 2\nV 8 -1 1 2\n');
    fprintf(POBfile, '! Front\nR 1 2 3 4 0 0\n! Back\nR 5 6 7 8 0 0\n');
    fprintf(POBfile, '! Top\nR 4 3 7 8 0 0\n! Bottom\nR 1 2 6 5 0 0\n');
    fprintf(POBfile, '! Left Side\nR 1 4 8 5 0 0\n! Right Side\nR 2 3 7 6 0 0');
    fclose(POBfile);
    Obj2 = NSCE.InsertNewObjectAt(2);  % Add new line to NSCE
    Obj2_Type = Obj2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.PolygonObject);
    Obj2_Type.FileName1 = 'API_cube_demo.POB';
    Obj2.ChangeType(Obj2_Type);
```
 Python 
```csharp
    POBfile = open(TheApplication.ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB", "w")  # Open new POB file
    # Append new POB file with polygon definitions (see help files for syntax information)
    POBfile.write("! A cube" '\n')
    POBfile.write("! front face vertices" '\n' "V 1 -1 -1 0" '\n' "V 2 1 -1 0" '\n' "V 3 1 1 0" '\n' "V 4 -1 1 0" '\n')
    POBfile.write("! back face vertices" '\n' "V 5 -1 -1 2" '\n' "V 6 1 -1 2" '\n' "V 7 1 1 2" '\n' "V 8 -1 1 2" '\n')
    POBfile.write("! Front" '\n' "R 1 2 3 4 0 0" '\n' "! Back" '\n' "R 5 6 7 8 0 0" '\n')
    POBfile.write("! Top" '\n' "R 4 3 7 8 0 0" '\n' "! Bottom" '\n' "R 1 2 6 5 0 0" '\n')
    POBfile.write("! Left Side" '\n' "R 1 4 8 5 0 0" '\n' "! Right Side" '\n' "R 2 3 7 6 0 0")
    POBfile.close()
    Obj2 = NSCE.InsertNewObjectAt(2)  # Add new line to NSCE
    Obj2_Type = Obj2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.PolygonObject)
    Obj2_Type.FileName1 = "API_cube_demo.POB"
    Obj2.ChangeType(Obj2_Type)
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.HasFaceData"}]}`
-->

### Property NumberOfSurfaces

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a787f89799263dbae26e2c10dff24c802"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCECADData.NumberOfSurfaces
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.NumberOfSurfaces"}]}`
-->

### Property HasPartData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ae6263ab1a23d67430357381b12c334d2"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.HasPartData
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.HasPartData"}]}`
-->

### Property NumberOfConfigurations

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a71bc9c41a31cda00167b5f10db223dc8"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCECADData.NumberOfConfigurations
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.NumberOfConfigurations"}]}`
-->

### Property CurrentConfiguration

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a1c1fa960f9888c3b31934413b52c8cf9"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCECADData.CurrentConfiguration
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.CurrentConfiguration"}]}`
-->

### Property NumberOfParts

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1aed531a0d8b9e5a0bda861cf3354c94cf"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCECADData.NumberOfParts
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.NumberOfParts"}]}`
-->

### Property HasEdgeLength

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a526bba8295a67d8965597af2bc337535"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.HasEdgeLength
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.HasEdgeLength"}]}`
-->

### Property MaxEdgeLength

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a8ad7a9b0e847eba392e02f9a3b90068c"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCECADData.MaxEdgeLength
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.MaxEdgeLength"}]}`
-->

### Property HasTraceMode

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1adcaff13e400efd9575c85d9134555bef"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.HasTraceMode
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.HasTraceMode"}]}`
-->

### Property TraceMode

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ad41fe5338d569d94400376d57135feef"></a>

![][public]

**Definition**:


```csharp
RayTraceModes ZOSAPI.Editors.NCE.INCECADData.TraceMode
```


**Return type**: [RayTraceModes](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a95faf256ae9d44aafc1ab53062b924b3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.TraceMode"}]}`
-->

## Public functions

### Function GetSurfaceFace

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a2773f2ca57722766aa3255e984372274"></a>

![][public]


```csharp
int ZOSAPI.Editors.NCE.INCECADData.GetSurfaceFace(int surfaceIdx)
```


Gets the face assigned to the specified surface.

**Parameters**:

* **surfaceIdx**: Index of the surface (0 to NumberOfSurfaces-1).


**Returns**:


**Parameters**:

* int **surfaceIdx**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.GetSurfaceFace"}]}`
-->

### Function SetSurfaceFace

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ad68d3799e5463c122e524117f2874268"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.SetSurfaceFace(int surfaceIdx, int face)
```


Sets the face assigned to the specified surface.

Usage (see [Example 09](page_ex09.md#page_ex09) for a full sample)


C# 
```csharp
            using (System.IO.StreamWriter POBfile = new System.IO.StreamWriter(TheApplication.ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB", false)) //  Open new POB file
            {
                //  Append new POB file with polygon definitions (see help files for syntax information)
                POBfile.WriteLine("! A cube" + "\n");
                POBfile.WriteLine("! front face vertices" + "\n" + "V 1 -1 -1 0" + "\n" + "V 2 1 -1 0" + "\n" + "V 3 1 1 0" + "\n" + "V 4 -1 1 0" + "\n");
                POBfile.WriteLine("! back face vertices" + "\n" + "V 5 -1 -1 2" + "\n" + "V 6 1 -1 2" + "\n" + "V 7 1 1 2" + "\n" + "V 8 -1 1 2" + "\n");
                POBfile.WriteLine("! Front" + "\n" + "R 1 2 3 4 0 0" + "\n" + "! Back" + "\n" + "R 5 6 7 8 0 0" + "\n");
                POBfile.WriteLine("! Top" + "\n" + "R 4 3 7 8 0 0" + "\n" + "! Bottom" + "\n" + "R 1 2 6 5 0 0" + "\n");
                POBfile.WriteLine("! Left Side" + "\n" + "R 1 4 8 5 0 0" + "\n" + "! Right Side" + "\n" + "R 2 3 7 6 0 0");
                INCERow Obj2 = NSCE.InsertNewObjectAt(2);  //  Add new line to NSCE
                IObjectTypeSettings Obj2_Type = Obj2.GetObjectTypeSettings(ObjectType.PolygonObject);
                Obj2_Type.FileName1 = "API_cube_demo.POB";
                Obj2.ChangeType(Obj2_Type);
            }
```
 C++ 
```csharp
    fstream POBfile;
    string filepath = TheApplication->ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB";
    POBfile.open(filepath, fstream::trunc | ios::out);

    POBfile << "! A cube" << "\n";
    POBfile << "! front face vertices" << "\n" << "V 1 -1 -1 0" << "\n" << "V 2 1 -1 0" << "\n" << "V 3 1 1 0" << "\n" << "V 4 -1 1 0" << "\n";
    POBfile << "! back face vertices" << "\n" << "V 5 -1 -1 2" << "\n" << "V 6 1 -1 2" << "\n" << "V 7 1 1 2" << "\n" << "V 8 -1 1 2" << "\n";
    POBfile << "! Front" << "\n" << "R 1 2 3 4 0 0" << "\n" << "! Back" << "\n" << "R 5 6 7 8 0 0" << "\n";
    POBfile << "! Top" << "\n" << "R 4 3 7 8 0 0" << "\n" << "! Bottom" << "\n" << "R 1 2 6 5 0 0" << "\n";
    POBfile << "! Left Side" << "\n" << "R 1 4 8 5 0 0" << "\n" << "! Right Side" << "\n" << "R 2 3 7 6 0 0";
    INCERowPtr Obj2 = NSCE->InsertNewObjectAt(2);  //  Add new line to NSCE
    IObjectTypeSettingsPtr Obj2_Type = Obj2->GetObjectTypeSettings(ObjectType_PolygonObject);
    Obj2_Type->FileName1 = "API_cube_demo.POB";
    Obj2->ChangeType(Obj2_Type);
```
 Matlab 
```csharp
    POBfile = fopen(char(System.String.Concat(TheApplication.ObjectsDir, '\\Polygon Objects\\API_cube_demo.POB')), 'w'); % Open new POB file
    % Append new POB file with polygon definitions (see help files for syntax information)
    fprintf(POBfile, '! A cube\n'); 
    fprintf(POBfile, '! front face vertices\nV 1 -1 -1 0\nV 2 1 -1 0\nV 3 1 1 0\nV 4 -1 1 0\n');
    fprintf(POBfile, '! back face vertices\nV 5 -1 -1 2\nV 6 1 -1 2\nV 7 1 1 2\nV 8 -1 1 2\n');
    fprintf(POBfile, '! Front\nR 1 2 3 4 0 0\n! Back\nR 5 6 7 8 0 0\n');
    fprintf(POBfile, '! Top\nR 4 3 7 8 0 0\n! Bottom\nR 1 2 6 5 0 0\n');
    fprintf(POBfile, '! Left Side\nR 1 4 8 5 0 0\n! Right Side\nR 2 3 7 6 0 0');
    fclose(POBfile);
    Obj2 = NSCE.InsertNewObjectAt(2);  % Add new line to NSCE
    Obj2_Type = Obj2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.PolygonObject);
    Obj2_Type.FileName1 = 'API_cube_demo.POB';
    Obj2.ChangeType(Obj2_Type);
```
 Python 
```csharp
    POBfile = open(TheApplication.ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB", "w")  # Open new POB file
    # Append new POB file with polygon definitions (see help files for syntax information)
    POBfile.write("! A cube" '\n')
    POBfile.write("! front face vertices" '\n' "V 1 -1 -1 0" '\n' "V 2 1 -1 0" '\n' "V 3 1 1 0" '\n' "V 4 -1 1 0" '\n')
    POBfile.write("! back face vertices" '\n' "V 5 -1 -1 2" '\n' "V 6 1 -1 2" '\n' "V 7 1 1 2" '\n' "V 8 -1 1 2" '\n')
    POBfile.write("! Front" '\n' "R 1 2 3 4 0 0" '\n' "! Back" '\n' "R 5 6 7 8 0 0" '\n')
    POBfile.write("! Top" '\n' "R 4 3 7 8 0 0" '\n' "! Bottom" '\n' "R 1 2 6 5 0 0" '\n')
    POBfile.write("! Left Side" '\n' "R 1 4 8 5 0 0" '\n' "! Right Side" '\n' "R 2 3 7 6 0 0")
    POBfile.close()
    Obj2 = NSCE.InsertNewObjectAt(2)  # Add new line to NSCE
    Obj2_Type = Obj2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.PolygonObject)
    Obj2_Type.FileName1 = "API_cube_demo.POB"
    Obj2.ChangeType(Obj2_Type)
```
 


**Parameters**:

* **surfaceIdx**: Index of the surface (0 to NumberOfSurfaces-1).
* **face**: The face.


**Returns**:


**Parameters**:

* int **surfaceIdx**
* int **face**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.SetSurfaceFace"}]}`
-->

### Function GetSurfaceName

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1accce9d7e34eaff7fe88fd9cfbe77d785"></a>

![][public]


```csharp
string ZOSAPI.Editors.NCE.INCECADData.GetSurfaceName(int surfaceIdx)
```


Gets the name assigned to the specified surface.

**Parameters**:

* **surfaceIdx**: Index of the surface (0 to NumberOfSurfaces-1).


**Returns**:


**Parameters**:

* int **surfaceIdx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.GetSurfaceName"}]}`
-->

### Function SetSurfaceName

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ac463af9ff963420ebc1373c70d107d42"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.SetSurfaceName(int surfaceIdx, string name)
```


Sets the name assigned to the specified surface.

**Parameters**:

* **surfaceIdx**: Index of the surface (0 to NumberOfSurfaces-1).
* **name**: The new surface name.


**Returns**:


**Parameters**:

* int **surfaceIdx**
* string **name**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.SetSurfaceName"}]}`
-->

### Function GetConfigurationName

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1aa9dd34c62925918632e1fa1130f96c0d"></a>

![][public]


```csharp
string ZOSAPI.Editors.NCE.INCECADData.GetConfigurationName(int configIdx)
```


**Parameters**:

* int **configIdx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.GetConfigurationName"}]}`
-->

### Function GetPartName

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a638818b135d3f6c8513091350d976f3e"></a>

![][public]


```csharp
string ZOSAPI.Editors.NCE.INCECADData.GetPartName(int partIdx)
```


Gets the name of the specified part.

**Parameters**:

* **partIdx**: Index of the part (0 to NumberOfParts-1).


**Returns**:


**Parameters**:

* int **partIdx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.GetPartName"}]}`
-->

### Function GetPartExposed

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1a2030946ecd9dfc1a1b46860d7566a679"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.GetPartExposed(int partIdx)
```


Gets a value indicating if the part is exposed.

**Parameters**:

* **partIdx**: Index of the part (0 to NumberOfParts-1).


**Returns**:


**Parameters**:

* int **partIdx**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.GetPartExposed"}]}`
-->

### Function SetPartExposed

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1ae7ac18bb61b8941840bc408d451f4b5c"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.SetPartExposed(int partIdx, bool exposed)
```


Sets a value indiciating if the part is exposed.

**Parameters**:

* **partIdx**: Index of the part (0 to NumberOfParts-1).
* **exposed**: if set to <code>true</code> [exposed].


**Returns**:


**Parameters**:

* int **partIdx**
* bool **exposed**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.SetPartExposed"}]}`
-->

### Function SetAllPartsExposed

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_c_a_d_data_1acafb67a83b598e34a4ae3c087ecbe6d3"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCECADData.SetAllPartsExposed(bool exposed)
```


**Parameters**:

* bool **exposed**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECADData.SetAllPartsExposed"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)