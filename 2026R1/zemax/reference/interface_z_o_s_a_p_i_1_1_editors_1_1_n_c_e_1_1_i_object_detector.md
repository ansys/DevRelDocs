# Interface ZOSAPI::Editors::NCE::IObjectDetector

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector"></a>

![][C#]
![][public]

**Definition**:


Usage (see [Example 02](page_ex02.md#page_ex02) for a full sample)


C# 
```csharp
            // Get detector data
            System.Text.StringBuilder sbReport = new System.Text.StringBuilder();
            double[,] detectorData = new double[100, 100];
            for (int i = 0; i < 99; i++)
            {
                for (int j = 0; j < 99; j++)
                {
                    TheNCE.GetDetectorData(4, j + i * 100, 1, out detectorData[i, j]);
                    sbReport.Append(detectorData[i, j].ToString() + "\t");
                }
                sbReport.AppendLine("");
            }
            string resFile = TheApplication.SamplesDir + "\\API\\CS\\e02_NSC_ray_trace.txt";
            System.IO.File.WriteAllText(resFile, sbReport.ToString());
```
 C++ 
```csharp
    // Get detector data
    double detectorData[100][100];

    for (int i = 0; i < 99; i++)
        for (int j = 0; j < 99; j++)
            TheNCE->GetDetectorData(4, j + i * 100, 1, &detectorData[i][j]);
```
 Matlab 
```csharp
    % Get detector data
    data = NET.createArray('System.Double', TheNCE.GetDetectorSize(4));
    TheNCE.GetAllDetectorData(4, 1, TheNCE.GetDetectorSize(4), data);
    
    [~, rows, cols] = TheNCE.GetDetectorDimensions(4);
    % rotates and flips image to reflect ZOS orientation
    detectorData = flipud(rot90(reshape(data.double, rows, cols)));
```
 Python 
```csharp
    # Get detector data
    detectorData = [[0 for x in range(numYPixels)] for x in range(numXPixels)]
    for x in range(0,numYPixels,1):
        for y in range(0,numXPixels,1):
            ret, pixel_val = TheNCE.GetDetectorData(DetObj, pix, 1, 0)
            pix += 1
            if ret == 1:
                detectorData[y][x] = pixel_val
            else:
                detectorData[x][y] = -1
```

**Inherits from**:

* [ZOSAPI.Editors.NCE.IObject](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object)

## Members

* [GetColCount](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_1a9db84b1fe0cc5166ed51be0a0cb6de29)
* [GetDetectorDimensions](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_1a624cdebed327f488fd5c0f30064de837)
* [GetDetectorSize](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_1a7dc21f673e8230037930dbc414ff5c98)
* [GetRowCount](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_1a59c7a76a0bf7aeb27bab961a81d91eac)
* [Id](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1ae417b5ad2c31f1142a793c586968a41f)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1a26e6adbbd23135e3a72ee11e7b123a96)
* [Row](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1afa5e824950dbeeadae6a34a4bd179605)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_1a99f40e283bd5643d60beeb6a1bd586ba)

## Public functions

### Function GetRowCount

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_1a59c7a76a0bf7aeb27bab961a81d91eac"></a>

![][public]


```csharp
int ZOSAPI.Editors.NCE.IObjectDetector.GetRowCount()
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetector.GetRowCount"}]}`
-->

### Function GetColCount

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_1a9db84b1fe0cc5166ed51be0a0cb6de29"></a>

![][public]


```csharp
int ZOSAPI.Editors.NCE.IObjectDetector.GetColCount()
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetector.GetColCount"}]}`
-->

### Function GetDetectorDimensions

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_1a624cdebed327f488fd5c0f30064de837"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.IObjectDetector.GetDetectorDimensions(out uint Rows, out uint Cols)
```


**Parameters**:

* out uint **Rows**
* out uint **Cols**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetector.GetDetectorDimensions"}]}`
-->

### Function GetDetectorSize

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_detector_1a7dc21f673e8230037930dbc414ff5c98"></a>

![][public]


```csharp
int ZOSAPI.Editors.NCE.IObjectDetector.GetDetectorSize()
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectDetector.GetDetectorSize"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)