# Interface IHiddenFormView

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the hidden form view.

```csharp
public interface IHiddenFormView
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### ClearUserControl\(\)

Clears the user control.

```csharp
void ClearUserControl()
```

### Fit\(\)

Fits this instance.

```csharp
void Fit()
```

### GetActiveDesignType\(\)

Updates the active user control.

```csharp
string GetActiveDesignType()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

Design Type

### OnButtonDown\(MouseEventArgs\)

Called when [button down].

```csharp
void OnButtonDown(MouseEventArgs arg)
```

#### Parameters

`arg` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.forms.mouseeventargs)

The <xref href="System.Windows.Forms.MouseEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### OnButtonUp\(MouseEventArgs\)

Called when [button up].

```csharp
void OnButtonUp(MouseEventArgs arg)
```

#### Parameters

`arg` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.forms.mouseeventargs)

The <xref href="System.Windows.Forms.MouseEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### SelectTabInUserControl\(int\)

Selects the tab in user control.

```csharp
void SelectTabInUserControl(int nIdx)
```

#### Parameters

`nIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the n.

### SetActiveUserControl\(string, object\)

Sets the active user control.

```csharp
void SetActiveUserControl(string strType, object obj)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the string.

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

### ShowTabInDesigner\(int, bool\)

Shows the tab in designer.

```csharp
void ShowTabInDesigner(int nIdx, bool bShow)
```

#### Parameters

`nIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the n.

`bShow` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b show].

### UpdateUserControl\(object\)

Updates the user control.

```csharp
void UpdateUserControl(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

### UpdateView\(\)

Updates the view.

```csharp
void UpdateView()
```


