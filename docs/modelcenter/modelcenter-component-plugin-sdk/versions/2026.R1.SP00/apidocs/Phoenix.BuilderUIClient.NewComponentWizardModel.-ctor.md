# Constructor NewComponentWizardModel

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## NewComponentWizardModel(string, string, DelegateCommandAsync)

Constructor

```csharp
public NewComponentWizardModel(string defaultLocation, string compType, DelegateCommandAsync onHelp)

```

### Parameters

`defaultLocation` [string](https://learn.microsoft.com/dotnet/api/system.string)

The default location to show in the dialog at the start

`compType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The component type. Will be used to inform the user and also as the default name

`onHelp` DelegateCommandAsync

A callback that if non-null will cause a help button to be displayed
