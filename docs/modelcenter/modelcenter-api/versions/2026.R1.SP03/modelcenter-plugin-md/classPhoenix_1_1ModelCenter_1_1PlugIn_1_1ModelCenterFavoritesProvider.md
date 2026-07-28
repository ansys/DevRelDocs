<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider"></a>
# Class Phoenix::ModelCenter::PlugIn::ModelCenterFavoritesProvider

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 116)

[Common](namespacePhoenix_1_1ModelCenter_1_1Common.md#namespacePhoenix_1_1ModelCenter_1_1Common) favorites provider that saves and loads [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) Plug-In XML.

```csharp
<Favorites type="">
   <Favorite description="">
      SerializedXml
   </Favorite>
</Favorites>
```

**Inherits from**:

* IFavoritesProvider

## Members

* [\_favorites](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1ac2132dd2624d8ff30fbb30cbbd23f13a)
* [\_logger](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1ab8797d91ce2e04aa58579882dc9ce736)
* [\_modelCenter](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a27e591587edb50b0a8b5c708ace4b23c)
* [\_plugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a28f0133bd51aef2583e25fa2f03cdebd)
* [\_type](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1ab7cadb5e9a45ddfcf556cc08de4af508)
* [AddFavorite](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1af8d269fabb814f9993f7940cd1cc2d03)
* [AddOrReplaceFavorite](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a2208ef86a755c0b853010010ba973875)
* [ApplyFavorite](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a4810cb59f621aa7aedae861ba35bb4c0)
* [FavoritesNames](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a37879c0ef9afe859a4307cd499d11194)
* [LoadFavorites](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1ad88dc149fe8dbc7b73982f530f209122)
* [LoadFavorites](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1afd9863315cf3b5df3c26ef1d75176830)
* [ModelCenterFavoritesProvider](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a0c59f55c6565ce19e9b65be802e652f1)
* [ModelCenterFavoritesProvider](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1af35722c6e471c1df276757da25d89fd7)
* [ModelCenterFavoritesProvider](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a54f0d68b2a1d68e3eaaaafae2fd959a4)
* [ModelCenterFavoritesProvider](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a505cec0f75c8a3a1c36e10890fa7aefd)
* [RemoveFavorite](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a2a9181f87135c30b8203ae077c2b2bd7)
* [SaveFavorites](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a6067dbbc50eb005aec472ecf6e60f905)
* [XML\_FAVORITE](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1aa5451c7117b9ac8869d2115178e345b4)
* [XML\_FAVORITES](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1ac57e10dcb884e0bd1bc8a139a2414a6d)
* [XML\_FAVORITES\_DESCRIPTION\_ATT](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a300ad9c4ea767ab4049288e9c0983c08)
* [XML\_FAVORITES\_TYPE\_ATT](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a7eab5edc92fbd05a9420ec767bacb467)

## Private attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1ac2132dd2624d8ff30fbb30cbbd23f13a"></a>
### Variable \_favorites

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 119)


```csharp
Dictionary<string, string> Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider._favorites = new Dictionary<string, string>()
```








**Type**: Dictionary< string, string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider._favorites"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a28f0133bd51aef2583e25fa2f03cdebd"></a>
### Variable \_plugIn

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 120)


```csharp
IStringSerializer Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider._plugIn = null
```








**Type**: [IStringSerializer](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider._plugIn"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a27e591587edb50b0a8b5c708ace4b23c"></a>
### Variable \_modelCenter

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 121)


```csharp
IModelCenter Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider._modelCenter = null
```








**Type**: IModelCenter

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider._modelCenter"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1ab8797d91ce2e04aa58579882dc9ce736"></a>
### Variable \_logger

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 122)


```csharp
IPHXLogger Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider._logger = null
```








**Type**: IPHXLogger

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider._logger"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1ab7cadb5e9a45ddfcf556cc08de4af508"></a>
### Variable \_type

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 123)


```csharp
string Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider._type = string.Empty
```








**Type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider._type"}]}`
-->

## Private static attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1ac57e10dcb884e0bd1bc8a139a2414a6d"></a>
### Variable XML\_FAVORITES

![][private]
![][static]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 124)


```csharp
const string Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.XML_FAVORITES = "Favorites"
```








**Type**: const string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.XML_FAVORITES"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1aa5451c7117b9ac8869d2115178e345b4"></a>
### Variable XML\_FAVORITE

![][private]
![][static]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 125)


```csharp
const string Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.XML_FAVORITE = "Favorite"
```








**Type**: const string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.XML_FAVORITE"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a7eab5edc92fbd05a9420ec767bacb467"></a>
### Variable XML\_FAVORITES\_TYPE\_ATT

![][private]
![][static]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 126)


```csharp
const string Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.XML_FAVORITES_TYPE_ATT = "type"
```








**Type**: const string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.XML_FAVORITES_TYPE_ATT"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a300ad9c4ea767ab4049288e9c0983c08"></a>
### Variable XML\_FAVORITES\_DESCRIPTION\_ATT

![][private]
![][static]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 127)


```csharp
const string Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.XML_FAVORITES_DESCRIPTION_ATT = "description"
```








**Type**: const string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.XML_FAVORITES_DESCRIPTION_ATT"}]}`
-->

## Properties

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a37879c0ef9afe859a4307cd499d11194"></a>
### Property FavoritesNames

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 205)


```csharp
IEnumerable<string> Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.FavoritesNames
```


List of available favorites.





**Return type**: IEnumerable< string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.FavoritesNames"}]}`
-->

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a0c59f55c6565ce19e9b65be802e652f1"></a>
### Function ModelCenterFavoritesProvider

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.ModelCenterFavoritesProvider(IModelCenter modelCenter, ITradeStudyPlugIn plugIn, IPHXLogger logger, string type)
```


Constructor for ITradeStudyPlugIn.

**Parameters**:

* **modelCenter**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object the favorites will save and load from.
* **plugIn**: The trade study plug-in to serialize into favorites.
* **logger**: Logger to record warnings that occur during loading and saving.
* **type**: Favorites type to user for serialization.



**Parameters**:

* IModelCenter **modelCenter**
* ITradeStudyPlugIn **plugIn**
* IPHXLogger **logger**
* string **type**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.ModelCenterFavoritesProvider"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1af35722c6e471c1df276757da25d89fd7"></a>
### Function ModelCenterFavoritesProvider

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.ModelCenterFavoritesProvider(IModelCenter modelCenter, IComponentPlugIn plugIn, IPHXLogger logger, string type)
```


Constructor for IComponentPlugIn.

**Parameters**:

* **modelCenter**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object the favorites will save and load from.
* **plugIn**: The trade study plug-in to serialize into favorites.
* **logger**: Logger to record warnings that occur during loading and saving.
* **type**: Favorites type to user for serialization.



**Parameters**:

* IModelCenter **modelCenter**
* IComponentPlugIn **plugIn**
* IPHXLogger **logger**
* string **type**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.ModelCenterFavoritesProvider"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a54f0d68b2a1d68e3eaaaafae2fd959a4"></a>
### Function ModelCenterFavoritesProvider

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.ModelCenterFavoritesProvider(IDotNetPlugIn plugin, string type)
```


Constructor for [IDotNetPlugIn](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn).

**Parameters**:

* **plugin**: The [IDotNetPlugIn](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn) to save/load from.
* **type**: Favorites type to user for serialization.



**Parameters**:

* [IDotNetPlugIn](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn) **plugin**
* string **type**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.ModelCenterFavoritesProvider"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a505cec0f75c8a3a1c36e10890fa7aefd"></a>
### Function ModelCenterFavoritesProvider

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.ModelCenterFavoritesProvider(IModelCenter modelCenter, IStringSerializer plugIn, IPHXLogger logger, string type)
```


Constructor for [IDotNetPlugIn](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn).

**Parameters**:

* **modelCenter**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object the favorites will save and load from.
* **plugIn**: The object to serialize into favorites.
* **logger**: Logger to record warnings that occur during loading and saving.
* **type**: Favorites type to user for serialization.



**Parameters**:

* IModelCenter **modelCenter**
* [IStringSerializer](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer) **plugIn**
* IPHXLogger **logger**
* string **type**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.ModelCenterFavoritesProvider"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1af8d269fabb814f9993f7940cd1cc2d03"></a>
### Function AddFavorite

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.AddFavorite(string name)
```


Add the favorite to the list of available favorites.

**Parameters**:

* **name**: Name of favorite to add.



**Parameters**:

* string **name**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.AddFavorite"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a2208ef86a755c0b853010010ba973875"></a>
### Function AddOrReplaceFavorite

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.AddOrReplaceFavorite(string name)
```


Add the favorite to the list of available favorites. If a favorite with the given name already exists, it will be replaced.

**Parameters**:

* **name**: The name of the favorite to replace.



**Parameters**:

* string **name**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.AddOrReplaceFavorite"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a2a9181f87135c30b8203ae077c2b2bd7"></a>
### Function RemoveFavorite

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.RemoveFavorite(string name)
```


Remove the favorite from the list of available favorites.

**Parameters**:

* **name**: Favorite to remove.



**Parameters**:

* string **name**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.RemoveFavorite"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a4810cb59f621aa7aedae861ba35bb4c0"></a>
### Function ApplyFavorite

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.ApplyFavorite(string name)
```


Apply the favorites setup string to the Plug-In.

**Parameters**:

* **name**: Name of the favorite to apply.


**Exceptions**:

* **InvalidOperationException**: Thrown when the given name is not valid.



**Parameters**:

* string **name**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.ApplyFavorite"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1ad88dc149fe8dbc7b73982f530f209122"></a>
### Function LoadFavorites

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.LoadFavorites()
```


Loads favorites from the saved [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) model.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.LoadFavorites"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1afd9863315cf3b5df3c26ef1d75176830"></a>
### Function LoadFavorites

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.LoadFavorites(string favoritesType, string legacyLocation=null)
```


Loads the favorites of the given type. Useful when loading favorites for one plug-in that may be saved under different types.

**Parameters**:

* **favoritesType**: Favorites type name.
* **legacyLocation**: Where favorite was imported from.



**Parameters**:

* string **favoritesType**
* string **legacyLocation** = null 

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.LoadFavorites"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider_1a6067dbbc50eb005aec472ecf6e60f905"></a>
### Function SaveFavorites

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.SaveFavorites()
```


Saves favorites to the saved [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) model.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterFavoritesProvider.SaveFavorites"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)