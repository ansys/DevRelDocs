#  Interface IOperationsAxisViewModelBase

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing common information for an axis view model.

```csharp
public interface IOperationsAxisViewModelBase
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsAxisViewModelBase_Title"></a> Title

Gets or sets the title of the axis.

```csharp
string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>Title</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.Title = "YAxis"</code></pre>

#### Remarks

Use this property to specify or retrieve the title of the axis.

### <a id="VM_Operations_Post_Interfaces_IOperationsAxisViewModelBase_TitleSize"></a> TitleSize

Gets or sets the font size of the title.

```csharp
double TitleSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>TitleSize</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.TitleSize = 14.5;</code></pre>

#### Remarks

Use this property to specify or retrieve the font size of the title.

### <a id="VM_Operations_Post_Interfaces_IOperationsAxisViewModelBase_TitleWeight"></a> TitleWeight

Gets or sets the font weight of the title.

```csharp
FontWeight TitleWeight { get; set; }
```

#### Property Value

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

#### Examples

The following example demonstrates how to use the <code>TitleWeight</code> property:
<pre><code class="lang-csharp">applicationHandler = new ApplicationHandler();
document = applicationHandler.GetDocument("result file path");
page = applicationHandler.GetPage("page1");
chartview = page.CreateChart("ChartView");
axis = chartview.GetAxis("Y");
axis.TitleWeight = FontWeight.Bold;</code></pre>

#### Remarks

Use this property to specify or retrieve the font weight of the title.
The available options are:
<ul><li><xref href="System.Windows.FontWeights.Bold" data-throw-if-not-resolved="false"></xref></li><li><xref href="System.Windows.FontWeights.Normal" data-throw-if-not-resolved="false"></xref></li></ul>

