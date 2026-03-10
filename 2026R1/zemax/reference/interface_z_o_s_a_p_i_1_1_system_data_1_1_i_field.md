# Interface ZOSAPI::SystemData::IField

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field"></a>

![][C#]
![][public]

**Definition**:

System field data. This interface can be accessed via the IFields interface.

Usage (see [Example 12](page_ex12.md#page_ex12) for a full example)


C# 
```csharp
            // Change field 1 to be X=1.0 and Y=2.0
            ZOSAPI.SystemData.IField field1 = sysField.GetField(1);
            field1.X = 1.0;
            field1.Y = 2.0;
```
 C++ 
```csharp
    // Change field 1 to be X=1.0 and Y=2.0
    ZOSAPI_Interfaces::IFieldPtr field1 = sysField->GetField(1);
    field1->X = 1.0;
    field1->Y = 2.0;
```
 Matlab 
```csharp
    % Change field 1 to be X=1.0 and Y=2.0
    field1 = sysField.GetField(1);
    field1.X = 1.0;
    field1.Y = 2.0;
```
 Python 
```csharp
    # Change field 1 to be x=1.0 and y=2.0
    field1 = sysField.GetField(1)
    field1.X = 1.0
    field1.Y = 2.0
```
 


<br/>

## Members

* [Comment](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a5d499931cc93b3bb21a1262a8efcf8ba)
* [FieldNumber](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a207ad97fe2d289f17da4a190737b7d65)
* [GetSolveData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a7289def39e021e07c3331d623edff4e8)
* [GetXSolveData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a3bde79b047e24f7af4215d998a75ac1d)
* [GetYSolveData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a5882282b6f097796b0fab94f3aeee122)
* [Ignore](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a98eb85c11510df65a1848c384de2d633)
* [IsActive](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a60a2d199e0fe1d0d911a528a96cfd7ab)
* [SetFixed](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a53752df2329c8c1995e5bafed8abe1b0)
* [SetPickup](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a940715d731cb6d11d82f988113dfe818)
* [SetXFixed](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a07f66ccf8f5c950a83a566562e99e870)
* [SetXPickup](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ac4f32eacb6e74c24cbb7550cce28147c)
* [SetYFixed](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ae19d72a3885d5275f92712942822fb22)
* [SetYPickup](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ace2b50053a5400d6149c63e6feec7030)
* [TAN](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1aeae7ad86e3cdd1707ccef815f4a60883)
* [VAN](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ae83e71a077c63900345f920cb774c0d6)
* [VCX](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a60bbf630b54be57db9819fffc0dc2e2e)
* [VCY](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ae9be6d185ee624f1e6459af6276b0e5e)
* [VDX](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a19fdd2b2f4d74d3663620c5d880e2c40)
* [VDY](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a7a208170a9d3e9055b5fdaecd942b6ca)
* [Weight](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a9715dcc9fe8a6718e0f83682a440aa8f)
* [X](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a24d030d77e5626717d852c42ffeca4ba)
* [XSolve](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1acb92c6cd45433e140ae602214a201ea5)
* [Y](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ab2e48a3fddab51a2cdb9d246a191de2a)
* [YSolve](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a59d59c47eba27ce68a7eaee9fd9f346d)

## Properties

### Property IsActive

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a60a2d199e0fe1d0d911a528a96cfd7ab"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.IField.IsActive
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.IsActive"}]}`
-->

### Property FieldNumber

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a207ad97fe2d289f17da4a190737b7d65"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.SystemData.IField.FieldNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.FieldNumber"}]}`
-->

### Property X

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a24d030d77e5626717d852c42ffeca4ba"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IField.X
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.X"}]}`
-->

### Property Y

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ab2e48a3fddab51a2cdb9d246a191de2a"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IField.Y
```


Usage (see [Example 22](page_ex22.md#page_ex22) for a full sample)


C# 
```csharp
            // Determine maximum field in Y only
            double max_field = 0.0;
            for (int i = 1; i <= num_fields; i++)
            {
                if (TheSystem.SystemData.Fields.GetField(i).Y > max_field)
                {
                    max_field = TheSystem.SystemData.Fields.GetField(i).Y;
                }
            }
```
 C++ 
```csharp
    // Determine maximum field in Y only
    double max_field = 0.0;
    for (int i = 1; i <= num_fields; i++) {
        if (TheSystem->SystemData->Fields->GetField(i)->Y > max_field) {
            max_field = TheSystem->SystemData->Fields->GetField(i)->Y;
        }
    }
```
 Matlab 
```csharp
    % determine maximum field in Y only
    max_field = 0;
    for i=1:TheSystem.SystemData.Fields.NumberOfFields
        if TheSystem.SystemData.Fields.GetField(i).Y > max_field; max_field = TheSystem.SystemData.Fields.GetField(i).Y ; end;
    end
```
 Python 
```csharp
    # Determine maximum field in Y only
    max_field = 0.0
    for i in range(1, num_fields + 1):
        if (TheSystem.SystemData.Fields.GetField(i).Y > max_field):
            max_field = TheSystem.SystemData.Fields.GetField(i).Y
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.Y"}]}`
-->

### Property Weight

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a9715dcc9fe8a6718e0f83682a440aa8f"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IField.Weight
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.Weight"}]}`
-->

### Property VDX

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a19fdd2b2f4d74d3663620c5d880e2c40"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IField.VDX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.VDX"}]}`
-->

### Property VDY

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a7a208170a9d3e9055b5fdaecd942b6ca"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IField.VDY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.VDY"}]}`
-->

### Property VCX

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a60bbf630b54be57db9819fffc0dc2e2e"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IField.VCX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.VCX"}]}`
-->

### Property VCY

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ae9be6d185ee624f1e6459af6276b0e5e"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IField.VCY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.VCY"}]}`
-->

### Property VAN

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ae83e71a077c63900345f920cb774c0d6"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IField.VAN
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.VAN"}]}`
-->

### Property TAN

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1aeae7ad86e3cdd1707ccef815f4a60883"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IField.TAN
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.TAN"}]}`
-->

### Property Comment

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a5d499931cc93b3bb21a1262a8efcf8ba"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.SystemData.IField.Comment
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.Comment"}]}`
-->

### Property XSolve

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1acb92c6cd45433e140ae602214a201ea5"></a>

![][public]

**Definition**:


```csharp
SolveType ZOSAPI.SystemData.IField.XSolve
```


**Return type**: [SolveType](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a0e4579c2bd01e606f5ba9e7f7ad1b0ec)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.XSolve"}]}`
-->

### Property YSolve

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a59d59c47eba27ce68a7eaee9fd9f346d"></a>

![][public]

**Definition**:


```csharp
SolveType ZOSAPI.SystemData.IField.YSolve
```


**Return type**: [SolveType](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a0e4579c2bd01e606f5ba9e7f7ad1b0ec)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.YSolve"}]}`
-->

### Property Ignore

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a98eb85c11510df65a1848c384de2d633"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.IField.Ignore
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.Ignore"}]}`
-->

## Public functions

### Function GetXSolveData

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a3bde79b047e24f7af4215d998a75ac1d"></a>

![][public]


```csharp
ISolveData ZOSAPI.SystemData.IField.GetXSolveData()
```


**Return type**: [ISolveData](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.GetXSolveData"}]}`
-->

### Function SetXPickup

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ac4f32eacb6e74c24cbb7550cce28147c"></a>

![][public]


```csharp
SolveStatus ZOSAPI.SystemData.IField.SetXPickup(int fromField, FieldColumn fromColumn, double scale, double offset)
```


**Parameters**:

* int **fromField**
* [FieldColumn](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217ab) **fromColumn**
* double **scale**
* double **offset**

**Return type**: [SolveStatus](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a1d1faeb4b46e7b0cc51f47bbb04c55f7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.SetXPickup"}]}`
-->

### Function SetXFixed

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a07f66ccf8f5c950a83a566562e99e870"></a>

![][public]


```csharp
SolveStatus ZOSAPI.SystemData.IField.SetXFixed()
```


**Return type**: [SolveStatus](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a1d1faeb4b46e7b0cc51f47bbb04c55f7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.SetXFixed"}]}`
-->

### Function GetYSolveData

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a5882282b6f097796b0fab94f3aeee122"></a>

![][public]


```csharp
ISolveData ZOSAPI.SystemData.IField.GetYSolveData()
```


**Return type**: [ISolveData](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.GetYSolveData"}]}`
-->

### Function SetYPickup

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ace2b50053a5400d6149c63e6feec7030"></a>

![][public]


```csharp
SolveStatus ZOSAPI.SystemData.IField.SetYPickup(int fromField, FieldColumn fromColumn, double scale, double offset)
```


**Parameters**:

* int **fromField**
* [FieldColumn](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217ab) **fromColumn**
* double **scale**
* double **offset**

**Return type**: [SolveStatus](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a1d1faeb4b46e7b0cc51f47bbb04c55f7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.SetYPickup"}]}`
-->

### Function SetYFixed

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1ae19d72a3885d5275f92712942822fb22"></a>

![][public]


```csharp
SolveStatus ZOSAPI.SystemData.IField.SetYFixed()
```


**Return type**: [SolveStatus](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a1d1faeb4b46e7b0cc51f47bbb04c55f7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.SetYFixed"}]}`
-->

### Function GetSolveData

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a7289def39e021e07c3331d623edff4e8"></a>

![][public]


```csharp
ISolveData ZOSAPI.SystemData.IField.GetSolveData(FieldColumn forColumn)
```


**Parameters**:

* [FieldColumn](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217ab) **forColumn**

**Return type**: [ISolveData](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.GetSolveData"}]}`
-->

### Function SetPickup

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a940715d731cb6d11d82f988113dfe818"></a>

![][public]


```csharp
SolveStatus ZOSAPI.SystemData.IField.SetPickup(FieldColumn forColumn, int fromField, FieldColumn fromColumn, double scale, double offset)
```


**Parameters**:

* [FieldColumn](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217ab) **forColumn**
* int **fromField**
* [FieldColumn](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217ab) **fromColumn**
* double **scale**
* double **offset**

**Return type**: [SolveStatus](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a1d1faeb4b46e7b0cc51f47bbb04c55f7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.SetPickup"}]}`
-->

### Function SetFixed

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field_1a53752df2329c8c1995e5bafed8abe1b0"></a>

![][public]


```csharp
SolveStatus ZOSAPI.SystemData.IField.SetFixed(FieldColumn forColumn)
```


**Parameters**:

* [FieldColumn](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217ab) **forColumn**

**Return type**: [SolveStatus](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a1d1faeb4b46e7b0cc51f47bbb04c55f7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IField.SetFixed"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)