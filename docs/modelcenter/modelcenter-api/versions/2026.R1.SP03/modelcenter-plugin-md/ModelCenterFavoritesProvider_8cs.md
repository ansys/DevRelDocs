<a id="ModelCenterFavoritesProvider_8cs"></a>
# File ModelCenterFavoritesProvider.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::IStringSerializer](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer)
* [Phoenix::ModelCenter::PlugIn::TradeStudySerializer](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer)
* [Phoenix::ModelCenter::PlugIn::ComponentSerializer](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer)
* [Phoenix::ModelCenter::PlugIn::ModelCenterFavoritesProvider](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterFavoritesProvider)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.IO;
using System.Xml;
using System.Collections.Generic;

using Phoenix.DotNetUtils;
using Phoenix.ModelCenter.Common;

using ModelCenter;
using ComponentPlugIn;
using TradeStudyPlugIn;

namespace Phoenix.ModelCenter.PlugIn
{
   public interface IStringSerializer
   {
      string toString();
      void fromString(string value);
   }

   public class TradeStudySerializer : IStringSerializer
   {
      private ITradeStudyPlugIn _plugin;

      public TradeStudySerializer(ITradeStudyPlugIn plugin)
      {
         _plugin = plugin;
      }

      public string toString()
      {
         return _plugin.toString();
      }

      public void fromString(string value)
      {
         _plugin.fromString(value);
      }
   }

   public class ComponentSerializer : IStringSerializer
   {
      private IComponentPlugIn _plugin;

      public ComponentSerializer(IComponentPlugIn plugin)
      {
         _plugin = plugin;
      }

      public string toString()
      {
         return _plugin.toString();
      }

      public void fromString(string value)
      {
         _plugin.fromString(value);
      }
   }


   public class ModelCenterFavoritesProvider : IFavoritesProvider
   {
      #region ----- Private Data ----------------------------------------------
      private Dictionary<string, string> _favorites = new Dictionary<string, string>();
      private IStringSerializer _plugIn = null;
      private IModelCenter _modelCenter = null;
      private IPHXLogger _logger = null;
      private string _type = string.Empty;
      private const string XML_FAVORITES = "Favorites";
      private const string XML_FAVORITE = "Favorite";
      private const string XML_FAVORITES_TYPE_ATT = "type";
      private const string XML_FAVORITES_DESCRIPTION_ATT = "description";
      #endregion

      #region ----- Constructors ----------------------------------------------
      public ModelCenterFavoritesProvider(IModelCenter modelCenter, ITradeStudyPlugIn plugIn, IPHXLogger logger, string type)
      {
         this._modelCenter = modelCenter;
         this._plugIn = new TradeStudySerializer(plugIn);
         this._logger = logger;
         this._type = type;
         LoadFavorites();
      }

      public ModelCenterFavoritesProvider(IModelCenter modelCenter, IComponentPlugIn plugIn, IPHXLogger logger, string type)
      {
         this._modelCenter = modelCenter;
         this._plugIn = new ComponentSerializer(plugIn);
         this._logger = logger;
         this._type = type;
         LoadFavorites();
      }

      public ModelCenterFavoritesProvider(IDotNetPlugIn plugin, string type)
      {
         this._modelCenter = plugin.Host.ModelCenter;
         if ( plugin.ComObject is ITradeStudyPlugIn)
         {
            this._plugIn = new TradeStudySerializer((ITradeStudyPlugIn)plugin.ComObject);
         }
         else
         {
            this._plugIn = new ComponentSerializer((IComponentPlugIn)plugin.ComObject);
         }
         this._logger = plugin.Host.Log;
         this._type = type;
         LoadFavorites();
      }

      public ModelCenterFavoritesProvider(IModelCenter modelCenter, IStringSerializer plugIn, IPHXLogger logger, string type)
      {
         this._modelCenter = modelCenter;
         this._plugIn = plugIn;
         this._logger = logger;
         this._type = type;
         LoadFavorites();
      }
      #endregion

      #region ----- IFavoritesProvider ----------------------------------------
      public IEnumerable<string> FavoritesNames
      {
         get
         {
            return _favorites.Keys;
         }
      }

      public void AddFavorite(string name)
      {
         if (_favorites.ContainsKey(name))
         {
            throw new Exception(string.Format(Localizable.MCPlugInStrings.FAVORITE_ALREADY_EXISTS, name));
         }

         _favorites.Add(name,_plugIn.toString());

         SaveFavorites();
      }

      public void AddOrReplaceFavorite(string name)
      {
         _favorites[name] = _plugIn.toString();
         SaveFavorites();
      }

      public void RemoveFavorite(string name)
      {
         _favorites.Remove(name);
         SaveFavorites();
      }

      public void ApplyFavorite(string name)
      {
         string value;
         if (_favorites.TryGetValue(name, out value))
         {
            _plugIn.fromString(value);
         }
         else
         {
            throw new Exception(string.Format(Localizable.MCPlugInStrings.FAVORITE_NOT_FOUND, name));
         }
      }
      #endregion

      #region ----- ModelCenterFavoritesProvider ------------------------------
      public void LoadFavorites()
      {
         LoadFavorites(_type);
      }

      public void LoadFavorites(string favoritesType, string legacyLocation = null)
      {
         string toAppend = (String.IsNullOrWhiteSpace(legacyLocation)) ? (null) : (" from " + legacyLocation);

         try
         {
            // load favorites from the model
            XmlDocument document = new XmlDocument();
            document.LoadXml(_modelCenter.getXMLExtension(XML_FAVORITES, XML_FAVORITES_TYPE_ATT, favoritesType));

            if ((document.DocumentElement != null) && (document.DocumentElement.ChildNodes != null))
            {
               foreach (XmlElement node in document.DocumentElement.ChildNodes)
               {
                  if (!String.IsNullOrEmpty(toAppend))
                  {
                     node.Attributes[XML_FAVORITES_DESCRIPTION_ATT].Value += toAppend;
                  }

                  _favorites.Add(node.Attributes[XML_FAVORITES_DESCRIPTION_ATT].Value, node.InnerXml);
               }
            }
         }
         catch (Exception ex)
         {
            _logger.Trace(string.Format(Localizable.MCPlugInStrings.FAVORITE_COULD_NOT_LOAD, favoritesType, ex.Message));
            // the Xml likely just doesn't exist in the model, cannot load
            // favorites
            return;
         }
      }
      
      public void SaveFavorites()
      {
         XmlWriterSettings settings = new XmlWriterSettings();
         settings.OmitXmlDeclaration = true;

         using (StringWriter xml = new StringWriter())
         {
            using (XmlWriter writer = XmlWriter.Create(xml, settings))
            {
               // <Favorites type="">
               writer.WriteStartElement(XML_FAVORITES);
               writer.WriteAttributeString(XML_FAVORITES_TYPE_ATT, _type);

               foreach (KeyValuePair<string, string> kvp in _favorites)
               {
                  // <Favorite description=""/>
                  writer.WriteStartElement(XML_FAVORITE);
                  writer.WriteAttributeString(XML_FAVORITES_DESCRIPTION_ATT, kvp.Key);
                  writer.WriteRaw(kvp.Value);
                  writer.WriteEndElement();
               }
               // </Favorites>
               writer.WriteEndElement();
               writer.Flush();
            }

            _modelCenter.setXMLExtension(xml.ToString());
         }
      }
      #endregion
   }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)