<a id="DropUtils_8cs"></a>
# File DropUtils.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/DropUtils.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::DropUtils](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)
* [global::ModelCenter](namespaceglobal_1_1ModelCenter.md#namespaceglobal_1_1ModelCenter)
* [global::TradeStudyPlugIn](namespaceglobal_1_1TradeStudyPlugIn.md#namespaceglobal_1_1TradeStudyPlugIn)
* [global::PHXDATAHISTORYLib](namespaceglobal_1_1PHXDATAHISTORYLib.md#namespaceglobal_1_1PHXDATAHISTORYLib)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
namespace Phoenix.ModelCenter.PlugIn
{
   using System;
   using System.Collections.Generic;
   using System.Text;
   using System.Windows.Forms;
   using global::ModelCenter;
   using global::TradeStudyPlugIn;
   using global::PHXDATAHISTORYLib;
   using Phoenix.DotNetUtils;
   using Phoenix.ModelCenter.Common;

   public static class DropUtils
   {
      private static object GetObjectForPathInternal(string path, object searchIn)
      {
         // TODO: don't search the whole model - we have the name; we should
         // search by segments in the name instead!

         IGroups subgroups = null;
         if (searchIn is IAssembly)
         {
            IAssembly siAssembly = (IAssembly)searchIn;

            // search through underlying assemblies
            IAssemblies assemblies = (IAssemblies)siAssembly.Assemblies;
            for (int i = 0; i < (int)assemblies.Count; ++i)
            {
               IAssembly a = (IAssembly)assemblies.Item(i);
               if (a.getFullName().Equals(path))
               {
                  return a;
               }

               object obj = GetObjectForPathInternal(path, a);
               if (obj != null)
               {
                  return obj;
               }
            }

            // search through underlying components
            IComponents components = (IComponents)siAssembly.Components;
            for (int i = 0; i < (int)components.Count; ++i)
            {
               IComponent c = (IComponent)components.Item(i);
               if (c.getFullName().Equals(path))
               {
                  return c;
               }

               object obj = GetObjectForPathInternal(path, c);
               if (obj != null)
               {
                  return obj;
               }
            }

            subgroups = (IGroups)siAssembly.Groups;
         }
         else if (searchIn is IComponent)
         {
            subgroups = (IGroups)((IComponent)searchIn).Groups;
         }
         else if (searchIn is IGroup)
         {
            subgroups = (IGroups)((IGroup)searchIn).Groups;
         }

         // search through underlying groups
         if (subgroups != null)
         {
            for (int i = 0; i < (int)subgroups.Count; ++i)
            {
               IGroup g = (IGroup)subgroups.Item(i);
               if (g.getFullName().Equals(path))
               {
                  return g;
               }

               object obj = GetObjectForPathInternal(path, g);
               if (obj != null)
               {
                  return obj;
               }
            }
         }

         return null;
      }

      public static object GetObjectForPath(string path, IModelCenter modelCenter)
      {
         IAssembly assembly = modelCenter.getModel() as IAssembly;
         if (assembly.getFullName().Equals(path))
         {
            // if the dropped object was the main model assembly just use that
            return assembly;
         }

         // otherwise search the main model assembly for the drop item
         try
         {
            // if the drop item is a variable we can just get it directly
            // ModelCenter, otherwise we need to search the model
            return modelCenter.getVariable(path);
         }
         catch
         {
            return DropUtils.GetObjectForPathInternal(path, assembly);
         }
      }

      private static List<PHXVariable> GetAllVariablesInternal(object mcObject, string path)
      {
         List<PHXVariable> variables = new List<PHXVariable>();

         if (mcObject is IComponents)
         {
            IComponents components = mcObject as IComponents;
            for (int i = 0; i < (int)components.Count; i++)
            {
               variables.AddRange(GetAllVariablesInternal(components.Item(i), path));
            }
         }
         else if (mcObject is IAssemblies)
         {
            IAssemblies assemblies = mcObject as IAssemblies;
            for (int i = 0; i < (int)assemblies.Count; i++)
            {
               variables.AddRange(GetAllVariablesInternal(assemblies.Item(i), path));
            }
         }
         else if (mcObject is IGroups)
         {
            IGroups groups = mcObject as IGroups;
            for (int i = 0; i < (int)groups.Count; i++)
            {
               variables.AddRange(GetAllVariablesInternal(groups.Item(i), path));
            }
         }
         else if (mcObject is IVariables)
         {
            IVariables mcVariables = mcObject as IVariables;
            for (int i = 0; i < (int)mcVariables.Count; i++)
            {
               variables.AddRange(GetAllVariablesInternal(mcVariables.Item(i), path));
            }
         }
         else if (mcObject is IComponent)
         {
            IComponent component = mcObject as IComponent;
            variables.AddRange(GetAllVariablesInternal(component.Groups, path));
            variables.AddRange(GetAllVariablesInternal(component.Variables, path));
         }
         else if (mcObject is IAssembly)
         {
            IAssembly assembly = mcObject as IAssembly;
            variables.AddRange(GetAllVariablesInternal(assembly.Assemblies, path));
            variables.AddRange(GetAllVariablesInternal(assembly.Components, path));
            variables.AddRange(GetAllVariablesInternal(assembly.Groups, path));
            variables.AddRange(GetAllVariablesInternal(assembly.Variables, path));
         }
         else if (mcObject is IGroup)
         {
            IGroup group = mcObject as IGroup;
            variables.AddRange(GetAllVariablesInternal(group.Groups, path));
            variables.AddRange(GetAllVariablesInternal(group.Variables, path));
         }
         else if (mcObject is IVariable)
         {
            IVariable variable = mcObject as IVariable;
            PHXVariable phxVariable = new PHXVariable(true);
            ModelCenterVariableUtils.ReadFromIVariable(variable, phxVariable, false);

            if (mcObject is IArray)
            {
               // if the whole array or chunks or the array were drug in we
               // need to add each index
               IArrayIndexer indexer = new IArrayIndexer(mcObject as IArray);
               foreach (string index in indexer.GetIndexStrings(path))
               {
                  string indexName = phxVariable.Name + index;
                  PHXVariable phxArrayVariable = new PHXVariable(phxVariable);
                  phxArrayVariable.Name = indexName;

                  variables.Add(phxArrayVariable);
               }
            }
            else
            {
               variables.Add(phxVariable);
            }
         }

         return variables;
      }

      public static IList<PHXVariable> GetVariablesForPath(string path, IModelCenter modelCenter)
      {
         object obj = DropUtils.GetObjectForPath(path, modelCenter);
         if (obj != null)
         {
            return DropUtils.GetAllVariablesInternal(obj, path);
         }
         return new List<PHXVariable>();
      }

      public static IList<PHXVariable> GetVariablesForPaths(
         IEnumerable<string> paths, IVariableMetaDataProvider metaDataProvider, bool validate)
      {
         List<PHXVariable> vars = new List<PHXVariable>();
         foreach (string path in paths)
         {
            object[] dhVars = metaDataProvider.getAllVariableMetaData(path);
            foreach (IDHVariable dhVar in dhVars)
            {
               PHXVariable var = new PHXVariable(validate);
               ModelCenterVariableUtils.ReadFromDHVariable(dhVar, var);
               vars.Add(var);
               ModelCenterUtils.Release(dhVar);
            }
         }
         return vars;
      }

      public static IList<PHXVariable> GetVariablesForDropText(
         string dropText, IVariableMetaDataProvider metaDataProvider, bool validate)
      {
         string[] lines = dropText.Split('\n');
         for (int i = 0; i < lines.Length; ++i)
         {
            lines[i] = lines[i].Trim();
         }
         return GetVariablesForPaths(lines, metaDataProvider, validate);
      }

      public static bool HasVariableDropText(DragEventArgs e)
      {
         string temp = (string)e.Data.GetData(DataFormats.UnicodeText);
         return !PHXUtils.IsNullOrWhiteSpace(temp);
      }

      public static IList<PHXVariable> GetVariablesForDropText(
         DragEventArgs e, IVariableMetaDataProvider metaDataProvider, bool validate)
      {
         string str = e.Data.GetData(DataFormats.UnicodeText).ToString();
         return GetVariablesForDropText(str, metaDataProvider, validate);
      }
   }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)