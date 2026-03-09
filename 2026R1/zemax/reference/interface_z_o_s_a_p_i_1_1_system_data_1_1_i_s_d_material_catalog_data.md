# Interface ZOSAPI::SystemData::ISDMaterialCatalogData

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data"></a>

![][C#]
![][public]

**Definition**:

System Explorer - Material Catalogs Data. This interface can be accessed via the ISystemData interface.


## Members

* [AddCatalog](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1ae348d808484e0c5a4193b164ce0a802a)
* [GetAvailableCatalogs](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1a3c634e2aea8f3363c2caf2794f6b0476)
* [GetCatalogsInUse](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1a72c181444c526b904a8d1abba2281032)
* [GetMaterialsInCatalog](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1af29ed53ab8e9fca76d5d3534ee1a4946)
* [IsCatalogInUse](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1a1634409f659a85391617fdf7ca19eb96)
* [RemoveCatalog](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1a97c9ef7850795c75aeb80366dbc75383)

## Public functions

### Function GetCatalogsInUse

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1a72c181444c526b904a8d1abba2281032"></a>

![][public]


```csharp
string[] ZOSAPI.SystemData.ISDMaterialCatalogData.GetCatalogsInUse()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDMaterialCatalogData.GetCatalogsInUse"}]}`
-->

### Function GetAvailableCatalogs

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1a3c634e2aea8f3363c2caf2794f6b0476"></a>

![][public]


```csharp
string[] ZOSAPI.SystemData.ISDMaterialCatalogData.GetAvailableCatalogs()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDMaterialCatalogData.GetAvailableCatalogs"}]}`
-->

### Function GetMaterialsInCatalog

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1af29ed53ab8e9fca76d5d3534ee1a4946"></a>

![][public]


```csharp
string[] ZOSAPI.SystemData.ISDMaterialCatalogData.GetMaterialsInCatalog(string catalog)
```


**Parameters**:

* string **catalog**

**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDMaterialCatalogData.GetMaterialsInCatalog"}]}`
-->

### Function IsCatalogInUse

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1a1634409f659a85391617fdf7ca19eb96"></a>

![][public]


```csharp
bool ZOSAPI.SystemData.ISDMaterialCatalogData.IsCatalogInUse(string catalog)
```


**Parameters**:

* string **catalog**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDMaterialCatalogData.IsCatalogInUse"}]}`
-->

### Function RemoveCatalog

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1a97c9ef7850795c75aeb80366dbc75383"></a>

![][public]


```csharp
bool ZOSAPI.SystemData.ISDMaterialCatalogData.RemoveCatalog(string catalog)
```


Removes the specified material catalog from the system.

Usage (see [Example 12](page_ex12.md#page_ex12) for a full sample)


C# 
```csharp
            // Add Corning catalog and remove Schott catalog
            ZOSAPI.SystemData.ISDMaterialCatalogData sysCat = TheSystem.SystemData.MaterialCatalogs;
            sysCat.AddCatalog("Corning");
            sysCat.RemoveCatalog("Schott");
```
 C++ 
```csharp
    // Add Corning catalog and remove Schott catalog
    ZOSAPI_Interfaces::ISDMaterialCatalogDataPtr sysCat = TheSystem->SystemData->MaterialCatalogs;
    sysCat->AddCatalog("Corning");
    sysCat->RemoveCatalog("Schott");
```
 Matlab 
```csharp
    % Add Corning catalog and remove Schott catalog
    sysCat = TheSystem.SystemData.MaterialCatalogs;
    sysCat.AddCatalog('Corning');
    sysCat.RemoveCatalog('Schott');
```
 Python 
```csharp
    # Add Corning Catalog and remove Schott Catalog
    sysCat = TheSystem.SystemData.MaterialCatalogs
    sysCat.AddCatalog("Corning")
    sysCat.RemoveCatalog("Schott")
```
 


**Parameters**:

* **catalog**: The material catalog to remove.


**Returns**:


**Parameters**:

* string **catalog**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDMaterialCatalogData.RemoveCatalog"}]}`
-->

### Function AddCatalog

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data_1ae348d808484e0c5a4193b164ce0a802a"></a>

![][public]


```csharp
bool ZOSAPI.SystemData.ISDMaterialCatalogData.AddCatalog(string catalog)
```


Adds the specified material to the system.

Usage (see [Example 12](page_ex12.md#page_ex12) for a full sample)


C# 
```csharp
            // Add Corning catalog and remove Schott catalog
            ZOSAPI.SystemData.ISDMaterialCatalogData sysCat = TheSystem.SystemData.MaterialCatalogs;
            sysCat.AddCatalog("Corning");
            sysCat.RemoveCatalog("Schott");
```
 C++ 
```csharp
    // Add Corning catalog and remove Schott catalog
    ZOSAPI_Interfaces::ISDMaterialCatalogDataPtr sysCat = TheSystem->SystemData->MaterialCatalogs;
    sysCat->AddCatalog("Corning");
    sysCat->RemoveCatalog("Schott");
```
 Matlab 
```csharp
    % Add Corning catalog and remove Schott catalog
    sysCat = TheSystem.SystemData.MaterialCatalogs;
    sysCat.AddCatalog('Corning');
    sysCat.RemoveCatalog('Schott');
```
 Python 
```csharp
    # Add Corning Catalog and remove Schott Catalog
    sysCat = TheSystem.SystemData.MaterialCatalogs
    sysCat.AddCatalog("Corning")
    sysCat.RemoveCatalog("Schott")
```
 


**Parameters**:

* **catalog**: The material catalog to add.


**Returns**:


**Parameters**:

* string **catalog**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDMaterialCatalogData.AddCatalog"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)