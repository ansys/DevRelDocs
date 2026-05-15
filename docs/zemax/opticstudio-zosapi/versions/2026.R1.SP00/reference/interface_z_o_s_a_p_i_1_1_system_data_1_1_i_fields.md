# Interface ZOSAPI::SystemData::IFields

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields"></a>

![][C#]
![][public]

**Definition**:

System Explorer - Fields Data. This interface can be accessed via the ISystemData interface.


## Members

* [AddField](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a0fe954d939cbd6c061599037bb2c5d5e)
* [ApplyFieldWizard](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a83e4984a262565d7073a2d7ba96a0604)
* [ClearVignetting](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a705ba162f4da5c15a3505cd0c1fff707)
* [ConvertToFieldType](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a70b4790ab1c9fff0ce4ec143b6346547)
* [DeleteAllFields](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a8f862a69e8078da5dcd9a3671b13814b)
* [DeleteFieldAt](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1ada4b5e8363bcf4399572a6d54b5ccc26)
* [DeleteFieldsAt](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1ad1992cf7bf4ffb6fde565532d2b65f3d)
* [GetField](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1af2d2ae99d7ecf6e5866de571043f907d)
* [GetFieldType](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1aa15c7372283d812a0a2fecb98f3ae220)
* [InsertFieldAt](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a1358095c8ce6c90fc2877a3ac8298b80)
* [MakeEqualAreaFields](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a9c69df64e2f69ae9d9df0022f6936d78)
* [Normalization](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a56beed4da80107b4c8b585ce08f14cff)
* [NumberOfFields](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1ad3572cddd80845b25dbd75e98bab7c04)
* [RemoveField](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a4deaa2371bc54a085fb247ebfc36c2bb)
* [SetFieldType](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a8b5cd1dbb8c9b4889f3ba1ff1653dbc4)
* [SetVignetting](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1af86bcbf2696cc538bf4fcb89cd1d24f2)

## Properties

### Property NumberOfFields

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1ad3572cddd80845b25dbd75e98bab7c04"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.SystemData.IFields.NumberOfFields
```


Gets the number of fields currently defined in the system.

Usage (see [Example 22](../apiexamples/example_22.md) for a full sample)


C# 
```csharp
            // Define batch ray trace constants
            double hx = 0.0;
            int max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths;
            int num_fields = TheSystem.SystemData.Fields.NumberOfFields;
            double[] hy_ary = new double[] { 0, 0.707, 1 };
```
 C++ 
```csharp
    // Define batch ray trace constants
    double hx = 0.0;
    int max_wave = TheSystem->SystemData->Wavelengths->NumberOfWavelengths;
    int num_fields = TheSystem->SystemData->Fields->NumberOfFields;
    double hy_ary[] = { 0, 0.707, 1 };
```
 Matlab 
```csharp
    % define batch ray trace constants
    hx = 0;
    max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths;
    hy_ary = [0, 0.707, 1];
```
 Python 
```csharp
    # Define batch ray trace constants
    hx = 0.0
    max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths
    num_fields = TheSystem.SystemData.Fields.NumberOfFields
    hy_ary = np.array([0, 0.707, 1])
```
 


The number of fields.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.NumberOfFields"}]}`
-->

### Property Normalization

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a56beed4da80107b4c8b585ce08f14cff"></a>

![][public]

**Definition**:


```csharp
FieldNormalizationType ZOSAPI.SystemData.IFields.Normalization
```


**Return type**: [FieldNormalizationType](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a2993a68c549ae59374e93cf93cc0174a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.Normalization"}]}`
-->

## Public functions

### Function GetField

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1af2d2ae99d7ecf6e5866de571043f907d"></a>

![][public]


```csharp
IField ZOSAPI.SystemData.IFields.GetField(int position)
```


Gets the specified field.

Usage (see [Example 12](../apiexamples/example_12.md) for a full sample)


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
 


**Parameters**:

* **position**: The field # to retrieve (1-MAX_FIELDS).


**Returns**:

The specified IField, if the position is valid; otherwise, <code>null</code>.


**Parameters**:

* int **position**

**Return type**: [IField](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.GetField"}]}`
-->

### Function AddField

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a0fe954d939cbd6c061599037bb2c5d5e"></a>

![][public]


```csharp
IField ZOSAPI.SystemData.IFields.AddField(double X, double Y, double Weight)
```


Add a new field, after all the current fields.

Usage (see [Example 01](../apiexamples/example_01.md) for a full sample)


C# 
```csharp
            // Fields
            IField Field_1 = TheSystemData.Fields.GetField(1);
            IField NewField_2 = TheSystemData.Fields.AddField(0, 5.0, 1.0);
```
 C++ 
```csharp
    // Fields
    IFieldPtr Field_1 = TheSystemData->Fields->GetField(1);
    IFieldPtr NewField_2 = TheSystemData->Fields->AddField(0, 5.0, 1.0);
```
 Matlab 
```csharp
    % Fields
    Field_1 = TheSystemData.Fields.GetField(1);
    NewField_2 = TheSystemData.Fields.AddField(0,5.0,1.0);
```
 Python 
```csharp
    # Fields
    Field_1 = TheSystemData.Fields.GetField(1)
    NewField_2 = TheSystemData.Fields.AddField(0, 5.0, 1.0)
```
 


**Parameters**:

* **X**: The field X value.
* **Y**: The field Y value.
* **Weight**: The field weight.


**Returns**:

The new IField if there were less than twelve fields; otherwise, 
```csharp
null
```
.


**Parameters**:

* double **X**
* double **Y**
* double **Weight**

**Return type**: [IField](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.AddField"}]}`
-->

### Function RemoveField

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a4deaa2371bc54a085fb247ebfc36c2bb"></a>

![][public]


```csharp
bool ZOSAPI.SystemData.IFields.RemoveField(int position)
```


Removes the specified field.

**Parameters**:

* **position**: The field # to remove (1-MAX_FIELDS).


**Returns**:


```csharp
true
```
 if the position is valid and there was at least two fields in the system; otherwise, 
```csharp
false
```
.


**Parameters**:

* int **position**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.RemoveField"}]}`
-->

### Function SetVignetting

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1af86bcbf2696cc538bf4fcb89cd1d24f2"></a>

![][public]


```csharp
void ZOSAPI.SystemData.IFields.SetVignetting()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.SetVignetting"}]}`
-->

### Function ClearVignetting

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a705ba162f4da5c15a3505cd0c1fff707"></a>

![][public]


```csharp
void ZOSAPI.SystemData.IFields.ClearVignetting()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.ClearVignetting"}]}`
-->

### Function GetFieldType

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1aa15c7372283d812a0a2fecb98f3ae220"></a>

![][public]


```csharp
FieldType ZOSAPI.SystemData.IFields.GetFieldType()
```


**Return type**: [FieldType](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a61be382314bb098512c3475bdeac2dd5)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.GetFieldType"}]}`
-->

### Function SetFieldType

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a8b5cd1dbb8c9b4889f3ba1ff1653dbc4"></a>

![][public]


```csharp
void ZOSAPI.SystemData.IFields.SetFieldType(FieldType type)
```


Sets the field type definition for all fields.

Usage (see [Example 12](../apiexamples/example_12.md) for a full sample)


C# 
```csharp
            // Define fields using Paraxial Image Height
            ZOSAPI.SystemData.IFields sysField = TheSystem.SystemData.Fields;
            sysField.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight);
```
 C++ 
```csharp
    // Define fields using Paraxial Image Height
    ZOSAPI_Interfaces::IFieldsPtr sysField = TheSystem->SystemData->Fields;
    sysField->SetFieldType(ZOSAPI_Interfaces::FieldType_ParaxialImageHeight);
```
 Matlab 
```csharp
    % Define fields using Paraxial Image Height
    sysField = TheSystem.SystemData.Fields;
    sysField.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight);
```
 Python 
```csharp
    # Define fields using Paraxial Image Height
    sysField = TheSystem.SystemData.Fields
    sysField.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight)
```
 


**Parameters**:

* **type**: The new fields type.


**Parameters**:

* [FieldType](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a61be382314bb098512c3475bdeac2dd5) **type**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.SetFieldType"}]}`
-->

### Function MakeEqualAreaFields

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a9c69df64e2f69ae9d9df0022f6936d78"></a>

![][public]


```csharp
bool ZOSAPI.SystemData.IFields.MakeEqualAreaFields(int numberOfFields, double maximumField)
```


Replaces the existing system fields with new fields spread over an equal area.

Usage (see [Example 15](../apiexamples/example_15.md) for a full sample)


C# 
```csharp
            //Add 3 fields 
            IField Field_1 = SystExplorer.Fields.GetField(1);
            IField NewField_2 = SystExplorer.Fields.AddField(0, 5.0, 1.0);
            SystExplorer.Fields.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight);
            SystExplorer.Fields.MakeEqualAreaFields(3, 21.6);
```
 C++ 
```csharp
    // Add 3 fields
    IFieldPtr Field_1 = SystExplorer->Fields->GetField(1);
    IFieldPtr NewField_2 = SystExplorer->Fields->AddField(0, 5.0, 1.0);
    SystExplorer->Fields->SetFieldType(FieldType::FieldType_ParaxialImageHeight);
    SystExplorer->Fields->MakeEqualAreaFields(3, 21.6);
```
 Matlab 
```csharp
    %Add 3 fields 
    Field_1 = SystExplorer.Fields.GetField(1);           
    NewField_2 = SystExplorer.Fields.AddField(0, 5.0, 1.0);
    SystExplorer.Fields.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight);
    SystExplorer.Fields.MakeEqualAreaFields(3, 21.6);
```
 Python 
```csharp
    # Add 3 fields
    Field_1 = SystExplorer.Fields.GetField(1)
    NewField_2 = SystExplorer.Fields.AddField(0, 5.0, 1.0)
    SystExplorer.Fields.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight)
    SystExplorer.Fields.MakeEqualAreaFields(3, 21.6)
```
 


**Parameters**:

* **numberOfFields**: The number of fields.
* **maximumField**: The maximum field.


**Returns**:


**Parameters**:

* int **numberOfFields**
* double **maximumField**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.MakeEqualAreaFields"}]}`
-->

### Function ApplyFieldWizard

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a83e4984a262565d7073a2d7ba96a0604"></a>

![][public]


```csharp
IMessage ZOSAPI.SystemData.IFields.ApplyFieldWizard(FieldPattern pattern, int numberOfYFields, double maxFieldY, int numberOfXFields, double maxFieldX, int startAt, bool overwrite, bool includePickups)
```


Adds new system fields with specified in the specified pattern.

**Parameters**:

* **pattern**: The new field pattern to use pattern.
* **numberOfYFields**: The number of y fields or arms.
* **maxFieldY**: The maximum field in the y-direction.
* **numberOfXFields**: The number of x fields or radii.
* **maxFieldX**: The maximum field in the x-direction.
* **startAt**: The field # to start inserting or overwriting at.
* **overwrite**: if set to <code>true</code> overwrite the fields data, else insert new fields.
* **includePickups**: if set to <code>true</code> add pickups after the maximum field values.


**Returns**:

<code>null</code> if successful, otherwise an error message


**Parameters**:

* [FieldPattern](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a09989c77446012631abf14d0b69f8cbd) **pattern**
* int **numberOfYFields**
* double **maxFieldY**
* int **numberOfXFields**
* double **maxFieldX**
* int **startAt**
* bool **overwrite**
* bool **includePickups**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.ApplyFieldWizard"}]}`
-->

### Function InsertFieldAt

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a1358095c8ce6c90fc2877a3ac8298b80"></a>

![][public]


```csharp
IField ZOSAPI.SystemData.IFields.InsertFieldAt(int fieldNumber)
```


**Parameters**:

* int **fieldNumber**

**Return type**: [IField](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.InsertFieldAt"}]}`
-->

### Function DeleteFieldAt

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1ada4b5e8363bcf4399572a6d54b5ccc26"></a>

![][public]


```csharp
bool ZOSAPI.SystemData.IFields.DeleteFieldAt(int fieldNumber)
```


**Parameters**:

* int **fieldNumber**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.DeleteFieldAt"}]}`
-->

### Function DeleteFieldsAt

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1ad1992cf7bf4ffb6fde565532d2b65f3d"></a>

![][public]


```csharp
int ZOSAPI.SystemData.IFields.DeleteFieldsAt(int fieldNumber, int numberOfFields)
```


**Parameters**:

* int **fieldNumber**
* int **numberOfFields**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.DeleteFieldsAt"}]}`
-->

### Function DeleteAllFields

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a8f862a69e8078da5dcd9a3671b13814b"></a>

![][public]


```csharp
int ZOSAPI.SystemData.IFields.DeleteAllFields()
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.DeleteAllFields"}]}`
-->

### Function ConvertToFieldType

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields_1a70b4790ab1c9fff0ce4ec143b6346547"></a>

![][public]


```csharp
IMessage ZOSAPI.SystemData.IFields.ConvertToFieldType(FieldType type)
```


**Parameters**:

* [FieldType](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a61be382314bb098512c3475bdeac2dd5) **type**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IFields.ConvertToFieldType"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
