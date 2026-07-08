# Method ConfigureWithDefaultRepositories

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## ConfigureWithDefaultRepositories(IServiceCollection, Assembly, params string[])

Configures a service collection to correctly load an IPlugInManager, using the
default locations for locating plug-ins. The default locations in descending order
of priority are:

- %APPDATA%\Phoenix Integration\Plug-Ins
- %PROGRAMDATA%\Phoenix Integration\Plug-Ins
- [AssemblyLocation]\Plug-Ins

```csharp
public static void ConfigureWithDefaultRepositories(IServiceCollection serviceCollection, Assembly callingAssembly, params string[] additionalFolders)

```

### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to configure

`callingAssembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)

The assembly to use as a reference for additional plug-ins

`additionalFolders` [string](https://learn.microsoft.com/dotnet/api/system.string)[]

Any additional folders to search for plug-ins. Will be searched first.
May be empty. Paths must be absolute
