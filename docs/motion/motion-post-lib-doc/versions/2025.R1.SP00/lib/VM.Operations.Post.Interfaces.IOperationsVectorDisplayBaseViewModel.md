#  Interface IOperationsVectorDisplayBaseViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the vector display view model.

```csharp
public interface IOperationsVectorDisplayBaseViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_FullName"></a> FullName

Gets or sets the full name of the vector display.

```csharp
string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>FullName</code> property:
<pre><code class="lang-csharp"></code></pre>

#### Remarks

Use this property to specify or retrieve the full name of the vector display.

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_IsLabel"></a> IsLabel

Gets or sets a value indicating whether to display or hide the object name, and force and position vectors in the animation view.

```csharp
bool IsLabel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsLabel</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
vector = dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");
vector.IsLabel = True;</code></pre>

#### Remarks

Use this property to specify or retrieve the visibility of the object name, and force and position vectors in the animation view.

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_IsVisible"></a> IsVisible

Gets or sets a value indicating whether the vector display is visible in the animation view.

```csharp
bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsVisible</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
vector = dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");
vector.IsVisible = False;</code></pre>

#### Remarks

Use this property to specify or retrieve the visibility of the vector display in the animation view.

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_LabelBackgroundColor"></a> LabelBackgroundColor

Gets or sets the background color of the label in the vector display.

```csharp
Color LabelBackgroundColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>LabelBackGroundColor</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
vector = dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");
vector.LabelBackgroundColor = Colors.Red;</code></pre>

#### Remarks

Use this property to specify or retrieve the background color of the label in the vector display.

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_LabelTextColor"></a> LabelTextColor

Gets or sets the text color of the label in the vector display.

```csharp
Color LabelTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>LabelTextColor</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
vector = dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");
vector.LabelTextColor = Colors.Red;</code></pre>

#### Remarks

Use this property to specify or retrieve the text color of the label in the vector display.

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_SetCharacteristic_System_String_"></a> SetCharacteristic\(string\)

Sets the characteristic for the vector display.

```csharp
void SetCharacteristic(string characteristic)
```

#### Parameters

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

The characteristic to be set.

#### Examples

The following example demonstrates how to use the <code>SetCharacteristic</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
vector = dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");
vector.SetCharacteristic("Action Force");</code></pre>

#### Remarks

This method sets or changes the characteristic for the vector display.

