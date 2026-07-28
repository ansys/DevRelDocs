<a id="NameSubstitutionFile_8cs"></a>
# File NameSubstitutionFile.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/NameSubstitutionFile.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::NameSubstitutionFile](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;

namespace Phoenix.ModelCenter.PlugIn
{
   public class NameSubstitutionFile : Dictionary<string, string>
   {
      public NameSubstitutionFile(Assembly assembly)
         : this(Path.Combine(Path.GetDirectoryName(assembly.Location), "names.txt"))
      {
      }

      public NameSubstitutionFile(Assembly assembly, string fileName)
         : this(Path.Combine(Path.GetDirectoryName(assembly.Location), fileName))
      {
      }

      public NameSubstitutionFile(string path)
      {
         FileInfo fi = new FileInfo(path);
         if (!fi.Exists)
         {
            return;
         }

         // read the contents of the file
         StreamReader reader = new StreamReader(path);
         for (string line = reader.ReadLine(); line != null; line = reader.ReadLine())
         {
            line = line.Trim();
            if (!string.IsNullOrEmpty(line) && !line.StartsWith("#"))
            {
               char[] seps = { ' ', '\t' };
               string[] tokens = line.Split(seps, StringSplitOptions.RemoveEmptyEntries);
               if (tokens.Length == 2)
               {
                  string name = tokens[0];
                  string replacement = tokens[1];

                  // LTTODO: add some logic for filtering out variables with invalid characters
                  if (!ContainsKey(name))
                  {
                     this[name] = replacement;
                  }
               }
            }
         }
      }

      public string GetSubstitution(string key)
      {
         string val;
         if (!TryGetValue(key, out val))
         {
            return key;
         }
         return val;
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
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)