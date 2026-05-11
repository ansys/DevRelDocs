# Interface IPropDlg

Namespace: [VM.NX.Dialog](VM.NX.Dialog.md)  
Assembly: VMDIDef.dll  

```csharp
public interface IPropDlg : IStdModelessDialog, IStdDialog
```

#### Implements

[IStdModelessDialog](VM.NX.Dialog.IStdModelessDialog.md), 
[IStdDialog](VM.NX.Dialog.IStdDialog.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### AllowMulti

```csharp
bool AllowMulti { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsCreate

```csharp
bool IsCreate { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsMulti

```csharp
bool IsMulti { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReadOnly

```csharp
bool IsReadOnly { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tag

```csharp
UIntPtr Tag { get; set; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### GetPage\(string\)

```csharp
IPropPage GetPage(string strPageName)
```

#### Parameters

`strPageName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IPropPage](VM.NX.Dialog.IPropPage.md)

### Redraw\(double\)

```csharp
void Redraw(double dIconSize)
```

#### Parameters

`dIconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

### SetInputData\(string\)

```csharp
bool SetInputData(string strInput)
```

#### Parameters

`strInput` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateAllPage\(Form\)

```csharp
void UpdateAllPage(Form formFrom)
```

#### Parameters

`formFrom` [Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form)


