# `BrowserQt`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Common.BrowserQt"></a>

#### *class* Ansys.ACT.Common.BrowserQt

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-------------------------------------|
| [`BeginInvoke`](#BrowserQt.BeginInvoke)                                 | BeginInvoke method.                 |
| [`BringToFront`](#BrowserQt.BringToFront)                               | BringToFront method.                |
| [`ClearHistory`](#BrowserQt.ClearHistory)                               | ClearHistory method.                |
| [`Dispose`](#BrowserQt.Dispose)                                         | Dispose method.                     |
| [`DoDragDrop`](#BrowserQt.DoDragDrop)                                   | DoDragDrop method.                  |
| [`EndInvoke`](#BrowserQt.EndInvoke)                                     | EndInvoke method.                   |
| [`FindParentDialog`](#BrowserQt.FindParentDialog)                       | FindParentDialog method.            |
| [`FindParentWindow`](#BrowserQt.FindParentWindow)                       | FindParentWindow method.            |
| [`FindText`](#BrowserQt.FindText)                                       | FindText method.                    |
| [`FindTopMostParentControl`](#BrowserQt.FindTopMostParentControl)       | FindTopMostParentControl method.    |
| [`Focus`](#BrowserQt.Focus)                                             | Focus method.                       |
| [`FocusNextControl`](#BrowserQt.FocusNextControl)                       | FocusNextControl method.            |
| [`GenerateMenuItem`](#BrowserQt.GenerateMenuItem)                       | GenerateMenuItem method.            |
| [`GetLocalURI`](#BrowserQt.GetLocalURI)                                 | GetLocalURI method.                 |
| [`GetPreferredHeightForWidth`](#BrowserQt.GetPreferredHeightForWidth)   | GetPreferredHeightForWidth method.  |
| [`GetPreferredSize`](#BrowserQt.GetPreferredSize)                       | GetPreferredSize method.            |
| [`GoBack`](#BrowserQt.GoBack)                                           | GoBack method.                      |
| [`GoForward`](#BrowserQt.GoForward)                                     | GoForward method.                   |
| [`GoHome`](#BrowserQt.GoHome)                                           | GoHome method.                      |
| [`Hide`](#BrowserQt.Hide)                                               | Hide method.                        |
| [`Invalidate`](#BrowserQt.Invalidate)                                   | Invalidate method.                  |
| [`Invoke`](#BrowserQt.Invoke)                                           | Invoke method.                      |
| [`Navigate`](#BrowserQt.Navigate)                                       | Navigate method.                    |
| [`NavigateToPage`](#BrowserQt.NavigateToPage)                           | NavigateToPage method.              |
| [`OnThemeChanged`](#BrowserQt.OnThemeChanged)                           | OnThemeChanged method.              |
| [`PointToClient`](#BrowserQt.PointToClient)                             | PointToClient method.               |
| [`PointToGlobal`](#BrowserQt.PointToGlobal)                             | PointToGlobal method.               |
| [`Print`](#BrowserQt.Print)                                             | Print method.                       |
| [`Refresh`](#BrowserQt.Refresh)                                         | Refresh method.                     |
| [`Reload`](#BrowserQt.Reload)                                           | Reload method.                      |
| [`SendToBack`](#BrowserQt.SendToBack)                                   | SendToBack method.                  |
| [`SetHtml`](#BrowserQt.SetHtml)                                         | SetHtml method.                     |
| [`Show`](#BrowserQt.Show)                                               | Show method.                        |
| [`Stop`](#BrowserQt.Stop)                                               | Stop method.                        |
| [`TriggerPageAction`](#BrowserQt.TriggerPageAction)                     | TriggerPageAction method.           |
| [`Update`](#BrowserQt.Update)                                           | Update method.                      |
| [`add_BeforeToolTip`](#BrowserQt.add_BeforeToolTip)                     | add_BeforeToolTip method.           |
| [`add_ContextMenu`](#BrowserQt.add_ContextMenu)                         | add_ContextMenu method.             |
| [`add_ControlAdded`](#BrowserQt.add_ControlAdded)                       | add_ControlAdded method.            |
| [`add_ControlRemoved`](#BrowserQt.add_ControlRemoved)                   | add_ControlRemoved method.          |
| [`add_CreateWindow`](#BrowserQt.add_CreateWindow)                       | add_CreateWindow method.            |
| [`add_DoDragDropCompleted`](#BrowserQt.add_DoDragDropCompleted)         | add_DoDragDropCompleted method.     |
| [`add_DownloadCompleted`](#BrowserQt.add_DownloadCompleted)             | add_DownloadCompleted method.       |
| [`add_DragDrop`](#BrowserQt.add_DragDrop)                               | add_DragDrop method.                |
| [`add_DragEnter`](#BrowserQt.add_DragEnter)                             | add_DragEnter method.               |
| [`add_DragLeave`](#BrowserQt.add_DragLeave)                             | add_DragLeave method.               |
| [`add_DragMove`](#BrowserQt.add_DragMove)                               | add_DragMove method.                |
| [`add_FontChanged`](#BrowserQt.add_FontChanged)                         | add_FontChanged method.             |
| [`add_GotFocus`](#BrowserQt.add_GotFocus)                               | add_GotFocus method.                |
| [`add_KeyDown`](#BrowserQt.add_KeyDown)                                 | add_KeyDown method.                 |
| [`add_KeyPress`](#BrowserQt.add_KeyPress)                               | add_KeyPress method.                |
| [`add_KeyUp`](#BrowserQt.add_KeyUp)                                     | add_KeyUp method.                   |
| [`add_LinkClicked`](#BrowserQt.add_LinkClicked)                         | add_LinkClicked method.             |
| [`add_LoadFinished`](#BrowserQt.add_LoadFinished)                       | add_LoadFinished method.            |
| [`add_LoadStarted`](#BrowserQt.add_LoadStarted)                         | add_LoadStarted method.             |
| [`add_LocationChanged`](#BrowserQt.add_LocationChanged)                 | add_LocationChanged method.         |
| [`add_LostFocus`](#BrowserQt.add_LostFocus)                             | add_LostFocus method.               |
| [`add_MouseDoubleClick`](#BrowserQt.add_MouseDoubleClick)               | add_MouseDoubleClick method.        |
| [`add_MouseDown`](#BrowserQt.add_MouseDown)                             | add_MouseDown method.               |
| [`add_MouseEnter`](#BrowserQt.add_MouseEnter)                           | add_MouseEnter method.              |
| [`add_MouseLeave`](#BrowserQt.add_MouseLeave)                           | add_MouseLeave method.              |
| [`add_MouseMove`](#BrowserQt.add_MouseMove)                             | add_MouseMove method.               |
| [`add_MouseUp`](#BrowserQt.add_MouseUp)                                 | add_MouseUp method.                 |
| [`add_MouseWheel`](#BrowserQt.add_MouseWheel)                           | add_MouseWheel method.              |
| [`add_Navigated`](#BrowserQt.add_Navigated)                             | add_Navigated method.               |
| [`add_Paint`](#BrowserQt.add_Paint)                                     | add_Paint method.                   |
| [`add_ParentChanged`](#BrowserQt.add_ParentChanged)                     | add_ParentChanged method.           |
| [`add_ProgressChanged`](#BrowserQt.add_ProgressChanged)                 | add_ProgressChanged method.         |
| [`add_SizeChanged`](#BrowserQt.add_SizeChanged)                         | add_SizeChanged method.             |
| [`add_VisibilityChanged`](#BrowserQt.add_VisibilityChanged)             | add_VisibilityChanged method.       |
| [`add_WhatsThis`](#BrowserQt.add_WhatsThis)                             | add_WhatsThis method.               |
| [`add_WhatsThisLinkClicked`](#BrowserQt.add_WhatsThisLinkClicked)       | add_WhatsThisLinkClicked method.    |
| [`remove_BeforeToolTip`](#BrowserQt.remove_BeforeToolTip)               | remove_BeforeToolTip method.        |
| [`remove_ContextMenu`](#BrowserQt.remove_ContextMenu)                   | remove_ContextMenu method.          |
| [`remove_ControlAdded`](#BrowserQt.remove_ControlAdded)                 | remove_ControlAdded method.         |
| [`remove_ControlRemoved`](#BrowserQt.remove_ControlRemoved)             | remove_ControlRemoved method.       |
| [`remove_CreateWindow`](#BrowserQt.remove_CreateWindow)                 | remove_CreateWindow method.         |
| [`remove_DoDragDropCompleted`](#BrowserQt.remove_DoDragDropCompleted)   | remove_DoDragDropCompleted method.  |
| [`remove_DownloadCompleted`](#BrowserQt.remove_DownloadCompleted)       | remove_DownloadCompleted method.    |
| [`remove_DragDrop`](#BrowserQt.remove_DragDrop)                         | remove_DragDrop method.             |
| [`remove_DragEnter`](#BrowserQt.remove_DragEnter)                       | remove_DragEnter method.            |
| [`remove_DragLeave`](#BrowserQt.remove_DragLeave)                       | remove_DragLeave method.            |
| [`remove_DragMove`](#BrowserQt.remove_DragMove)                         | remove_DragMove method.             |
| [`remove_FontChanged`](#BrowserQt.remove_FontChanged)                   | remove_FontChanged method.          |
| [`remove_GotFocus`](#BrowserQt.remove_GotFocus)                         | remove_GotFocus method.             |
| [`remove_KeyDown`](#BrowserQt.remove_KeyDown)                           | remove_KeyDown method.              |
| [`remove_KeyPress`](#BrowserQt.remove_KeyPress)                         | remove_KeyPress method.             |
| [`remove_KeyUp`](#BrowserQt.remove_KeyUp)                               | remove_KeyUp method.                |
| [`remove_LinkClicked`](#BrowserQt.remove_LinkClicked)                   | remove_LinkClicked method.          |
| [`remove_LoadFinished`](#BrowserQt.remove_LoadFinished)                 | remove_LoadFinished method.         |
| [`remove_LoadStarted`](#BrowserQt.remove_LoadStarted)                   | remove_LoadStarted method.          |
| [`remove_LocationChanged`](#BrowserQt.remove_LocationChanged)           | remove_LocationChanged method.      |
| [`remove_LostFocus`](#BrowserQt.remove_LostFocus)                       | remove_LostFocus method.            |
| [`remove_MouseDoubleClick`](#BrowserQt.remove_MouseDoubleClick)         | remove_MouseDoubleClick method.     |
| [`remove_MouseDown`](#BrowserQt.remove_MouseDown)                       | remove_MouseDown method.            |
| [`remove_MouseEnter`](#BrowserQt.remove_MouseEnter)                     | remove_MouseEnter method.           |
| [`remove_MouseLeave`](#BrowserQt.remove_MouseLeave)                     | remove_MouseLeave method.           |
| [`remove_MouseMove`](#BrowserQt.remove_MouseMove)                       | remove_MouseMove method.            |
| [`remove_MouseUp`](#BrowserQt.remove_MouseUp)                           | remove_MouseUp method.              |
| [`remove_MouseWheel`](#BrowserQt.remove_MouseWheel)                     | remove_MouseWheel method.           |
| [`remove_Navigated`](#BrowserQt.remove_Navigated)                       | remove_Navigated method.            |
| [`remove_Paint`](#BrowserQt.remove_Paint)                               | remove_Paint method.                |
| [`remove_ParentChanged`](#BrowserQt.remove_ParentChanged)               | remove_ParentChanged method.        |
| [`remove_ProgressChanged`](#BrowserQt.remove_ProgressChanged)           | remove_ProgressChanged method.      |
| [`remove_SizeChanged`](#BrowserQt.remove_SizeChanged)                   | remove_SizeChanged method.          |
| [`remove_VisibilityChanged`](#BrowserQt.remove_VisibilityChanged)       | remove_VisibilityChanged method.    |
| [`remove_WhatsThis`](#BrowserQt.remove_WhatsThis)                       | remove_WhatsThis method.            |
| [`remove_WhatsThisLinkClicked`](#BrowserQt.remove_WhatsThisLinkClicked) | remove_WhatsThisLinkClicked method. |

### Properties

| Name | Description |
|-------------------------------------------------------|------------------------------|
| [`AllowDrop`](#BrowserQt.AllowDrop)                   | AllowDrop property.          |
| [`BackColor`](#BrowserQt.BackColor)                   | BackColor property.          |
| [`Bounds`](#BrowserQt.Bounds)                         | Bounds property.             |
| [`CanGoBack`](#BrowserQt.CanGoBack)                   | CanGoBack property.          |
| [`CanGoForward`](#BrowserQt.CanGoForward)             | CanGoForward property.       |
| [`Controls`](#BrowserQt.Controls)                     | Controls property.           |
| [`Cursor`](#BrowserQt.Cursor)                         | Cursor property.             |
| [`DataObjects`](#BrowserQt.DataObjects)               | DataObjects property.        |
| [`Enabled`](#BrowserQt.Enabled)                       | Enabled property.            |
| [`Focused`](#BrowserQt.Focused)                       | Focused property.            |
| [`Font`](#BrowserQt.Font)                             | Font property.               |
| [`ForeColor`](#BrowserQt.ForeColor)                   | ForeColor property.          |
| [`Handle`](#BrowserQt.Handle)                         | Handle property.             |
| [`Height`](#BrowserQt.Height)                         | Height property.             |
| [`Html`](#BrowserQt.Html)                             | Html property.               |
| [`InvokeRequired`](#BrowserQt.InvokeRequired)         | InvokeRequired property.     |
| [`IsDisposed`](#BrowserQt.IsDisposed)                 | IsDisposed property.         |
| [`IsMouseCaptured`](#BrowserQt.IsMouseCaptured)       | IsMouseCaptured property.    |
| [`Left`](#BrowserQt.Left)                             | Left property.               |
| [`Location`](#BrowserQt.Location)                     | Location property.           |
| [`Margins`](#BrowserQt.Margins)                       | Margins property.            |
| [`MaximumSize`](#BrowserQt.MaximumSize)               | MaximumSize property.        |
| [`MinimumSize`](#BrowserQt.MinimumSize)               | MinimumSize property.        |
| [`Name`](#BrowserQt.Name)                             | Name property.               |
| [`OwnerDrawn`](#BrowserQt.OwnerDrawn)                 | OwnerDrawn property.         |
| [`Parent`](#BrowserQt.Parent)                         | Parent property.             |
| [`PreferredSize`](#BrowserQt.PreferredSize)           | PreferredSize property.      |
| [`PreventNavigation`](#BrowserQt.PreventNavigation)   | PreventNavigation property.  |
| [`Size`](#BrowserQt.Size)                             | Size property.               |
| [`Tag`](#BrowserQt.Tag)                               | Tag property.                |
| [`ToolTipText`](#BrowserQt.ToolTipText)               | ToolTipText property.        |
| [`Top`](#BrowserQt.Top)                               | Top property.                |
| [`Url`](#BrowserQt.Url)                               | Url property.                |
| [`UseAnsEventTracker`](#BrowserQt.UseAnsEventTracker) | UseAnsEventTracker property. |
| [`Visible`](#BrowserQt.Visible)                       | Visible property.            |
| [`WebPage`](#BrowserQt.WebPage)                       | WebPage property.            |
| [`WebSockets`](#BrowserQt.WebSockets)                 | WebSockets property.         |
| [`WhatsThisText`](#BrowserQt.WhatsThisText)           | WhatsThisText property.      |
| [`Width`](#BrowserQt.Width)                           | Width property.              |
| [`ZoomFactor`](#BrowserQt.ZoomFactor)                 | ZoomFactor property.         |

<a id="property-detail"></a>

## Property detail

<a id="BrowserQt.AllowDrop"></a>

### *property* BrowserQt.AllowDrop *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AllowDrop property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.BackColor"></a>

### *property* BrowserQt.BackColor *: Ansys.Utilities.Color | [None](https://docs.python.org/3/builtins/constants.html#None)*

BackColor property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Bounds"></a>

### *property* BrowserQt.Bounds *: Ansys.UI.Toolkit.Drawing.Rectangle | [None](https://docs.python.org/3/builtins/constants.html#None)*

Bounds property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.CanGoBack"></a>

### *property* BrowserQt.CanGoBack *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CanGoBack property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.CanGoForward"></a>

### *property* BrowserQt.CanGoForward *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CanGoForward property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Controls"></a>

### *property* BrowserQt.Controls *: Ansys.UI.Toolkit.ControlCollection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controls property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Cursor"></a>

### *property* BrowserQt.Cursor *: Ansys.UI.Toolkit.Cursor | [None](https://docs.python.org/3/builtins/constants.html#None)*

Cursor property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.DataObjects"></a>

### *property* BrowserQt.DataObjects *: Ansys.UI.Toolkit.WebBrowser.WebBrowser.DataObjectCollection | [None](https://docs.python.org/3/builtins/constants.html#None)*

DataObjects property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Enabled"></a>

### *property* BrowserQt.Enabled *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Enabled property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Focused"></a>

### *property* BrowserQt.Focused *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Focused property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Font"></a>

### *property* BrowserQt.Font *: Ansys.UI.Toolkit.Drawing.Font | [None](https://docs.python.org/3/builtins/constants.html#None)*

Font property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.ForeColor"></a>

### *property* BrowserQt.ForeColor *: Ansys.Utilities.Color | [None](https://docs.python.org/3/builtins/constants.html#None)*

ForeColor property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Handle"></a>

### *property* BrowserQt.Handle *: System.IntPtr | [None](https://docs.python.org/3/builtins/constants.html#None)*

Handle property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Height"></a>

### *property* BrowserQt.Height *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Height property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Html"></a>

### *property* BrowserQt.Html *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Html property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.InvokeRequired"></a>

### *property* BrowserQt.InvokeRequired *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

InvokeRequired property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.IsDisposed"></a>

### *property* BrowserQt.IsDisposed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsDisposed property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.IsMouseCaptured"></a>

### *property* BrowserQt.IsMouseCaptured *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsMouseCaptured property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Left"></a>

### *property* BrowserQt.Left *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Left property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Location"></a>

### *property* BrowserQt.Location *: Ansys.UI.Toolkit.Drawing.Point | [None](https://docs.python.org/3/builtins/constants.html#None)*

Location property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Margins"></a>

### *property* BrowserQt.Margins *: Ansys.UI.Toolkit.Padding | [None](https://docs.python.org/3/builtins/constants.html#None)*

Margins property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.MaximumSize"></a>

### *property* BrowserQt.MaximumSize *: Ansys.UI.Toolkit.Drawing.Size | [None](https://docs.python.org/3/builtins/constants.html#None)*

MaximumSize property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.MinimumSize"></a>

### *property* BrowserQt.MinimumSize *: Ansys.UI.Toolkit.Drawing.Size | [None](https://docs.python.org/3/builtins/constants.html#None)*

MinimumSize property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Name"></a>

### *property* BrowserQt.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.OwnerDrawn"></a>

### *property* BrowserQt.OwnerDrawn *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OwnerDrawn property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Parent"></a>

### *property* BrowserQt.Parent *: Ansys.UI.Toolkit.Control | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.PreferredSize"></a>

### *property* BrowserQt.PreferredSize *: Ansys.UI.Toolkit.Drawing.Size | [None](https://docs.python.org/3/builtins/constants.html#None)*

PreferredSize property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.PreventNavigation"></a>

### *property* BrowserQt.PreventNavigation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

PreventNavigation property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Size"></a>

### *property* BrowserQt.Size *: Ansys.UI.Toolkit.Drawing.Size | [None](https://docs.python.org/3/builtins/constants.html#None)*

Size property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Tag"></a>

### *property* BrowserQt.Tag *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Tag property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.ToolTipText"></a>

### *property* BrowserQt.ToolTipText *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ToolTipText property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Top"></a>

### *property* BrowserQt.Top *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Top property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Url"></a>

### *property* BrowserQt.Url *: System.Uri | [None](https://docs.python.org/3/builtins/constants.html#None)*

Url property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.UseAnsEventTracker"></a>

### *property* BrowserQt.UseAnsEventTracker *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

UseAnsEventTracker property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Visible"></a>

### *property* BrowserQt.Visible *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Visible property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.WebPage"></a>

### *property* BrowserQt.WebPage *: Ansys.UI.Toolkit.WebBrowser.WebPage | [None](https://docs.python.org/3/builtins/constants.html#None)*

WebPage property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.WebSockets"></a>

### *property* BrowserQt.WebSockets *: Ansys.UI.Toolkit.WebBrowser.WebBrowser.WebSocketCollection | [None](https://docs.python.org/3/builtins/constants.html#None)*

WebSockets property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.WhatsThisText"></a>

### *property* BrowserQt.WhatsThisText *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WhatsThisText property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Width"></a>

### *property* BrowserQt.Width *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Width property.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.ZoomFactor"></a>

### *property* BrowserQt.ZoomFactor *: System.Single | [None](https://docs.python.org/3/builtins/constants.html#None)*

ZoomFactor property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BrowserQt.BeginInvoke"></a>

### BrowserQt.BeginInvoke(method: Callable, args: Any) → System.IAsyncResult

BeginInvoke method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.BringToFront"></a>

### BrowserQt.BringToFront() → [None](https://docs.python.org/3/builtins/constants.html#None)

BringToFront method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.ClearHistory"></a>

### BrowserQt.ClearHistory() → [None](https://docs.python.org/3/builtins/constants.html#None)

ClearHistory method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Dispose"></a>

### BrowserQt.Dispose() → [None](https://docs.python.org/3/builtins/constants.html#None)

Dispose method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.DoDragDrop"></a>

### BrowserQt.DoDragDrop(data: Ansys.UI.Toolkit.DataObject, allowedEffects: Ansys.UI.Toolkit.DragDropEffects) → Ansys.UI.Toolkit.DragDropEffects

DoDragDrop method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.EndInvoke"></a>

### BrowserQt.EndInvoke(asyncResult: System.IAsyncResult) → Any

EndInvoke method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.FindParentDialog"></a>

### BrowserQt.FindParentDialog() → Ansys.UI.Toolkit.Dialog

FindParentDialog method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.FindParentWindow"></a>

### BrowserQt.FindParentWindow() → Ansys.UI.Toolkit.Window

FindParentWindow method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.FindText"></a>

### BrowserQt.FindText(subString: [str](https://docs.python.org/3/builtins/stdtypes.html#str), options: Ansys.UI.Toolkit.WebBrowser.WebPageFindFlags) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

FindText method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.FindTopMostParentControl"></a>

### BrowserQt.FindTopMostParentControl() → Ansys.UI.Toolkit.Control

FindTopMostParentControl method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Focus"></a>

### BrowserQt.Focus() → [None](https://docs.python.org/3/builtins/constants.html#None)

Focus method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.FocusNextControl"></a>

### BrowserQt.FocusNextControl(forward: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

FocusNextControl method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.GenerateMenuItem"></a>

### BrowserQt.GenerateMenuItem(action: Ansys.UI.Toolkit.WebBrowser.WebAction) → Ansys.UI.Toolkit.MenuItem

GenerateMenuItem method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.GetLocalURI"></a>

### BrowserQt.GetLocalURI(relativePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetLocalURI method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.GetPreferredHeightForWidth"></a>

### BrowserQt.GetPreferredHeightForWidth(width: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

GetPreferredHeightForWidth method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.GetPreferredSize"></a>

### BrowserQt.GetPreferredSize() → Ansys.UI.Toolkit.Drawing.Size

GetPreferredSize method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.GoBack"></a>

### BrowserQt.GoBack() → [None](https://docs.python.org/3/builtins/constants.html#None)

GoBack method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.GoForward"></a>

### BrowserQt.GoForward() → [None](https://docs.python.org/3/builtins/constants.html#None)

GoForward method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.GoHome"></a>

### BrowserQt.GoHome() → [None](https://docs.python.org/3/builtins/constants.html#None)

GoHome method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Hide"></a>

### BrowserQt.Hide() → [None](https://docs.python.org/3/builtins/constants.html#None)

Hide method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Invalidate"></a>

### BrowserQt.Invalidate() → [None](https://docs.python.org/3/builtins/constants.html#None)

### BrowserQt.Invalidate(rectangle: Ansys.UI.Toolkit.Drawing.Rectangle) → [None](https://docs.python.org/3/builtins/constants.html#None)

Invalidate method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Invoke"></a>

### BrowserQt.Invoke(method: Callable, args: Any) → Any

Invoke method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Navigate"></a>

### BrowserQt.Navigate(url: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### BrowserQt.Navigate(url: System.Uri) → [None](https://docs.python.org/3/builtins/constants.html#None)

Navigate method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.NavigateToPage"></a>

### BrowserQt.NavigateToPage(page: [str](https://docs.python.org/3/builtins/stdtypes.html#str), args: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

NavigateToPage method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.OnThemeChanged"></a>

### BrowserQt.OnThemeChanged(newTheme: Ansys.UI.Toolkit.Themes.ITheme) → [None](https://docs.python.org/3/builtins/constants.html#None)

OnThemeChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.PointToClient"></a>

### BrowserQt.PointToClient(point: Ansys.UI.Toolkit.Drawing.Point) → Ansys.UI.Toolkit.Drawing.Point

PointToClient method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.PointToGlobal"></a>

### BrowserQt.PointToGlobal(point: Ansys.UI.Toolkit.Drawing.Point) → Ansys.UI.Toolkit.Drawing.Point

PointToGlobal method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Print"></a>

### BrowserQt.Print() → [None](https://docs.python.org/3/builtins/constants.html#None)

Print method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Refresh"></a>

### BrowserQt.Refresh() → [None](https://docs.python.org/3/builtins/constants.html#None)

### BrowserQt.Refresh(rectangle: Ansys.UI.Toolkit.Drawing.Rectangle) → [None](https://docs.python.org/3/builtins/constants.html#None)

Refresh method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Reload"></a>

### BrowserQt.Reload() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reload method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.SendToBack"></a>

### BrowserQt.SendToBack() → [None](https://docs.python.org/3/builtins/constants.html#None)

SendToBack method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.SetHtml"></a>

### BrowserQt.SetHtml(html: [str](https://docs.python.org/3/builtins/stdtypes.html#str), baseUrl: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetHtml method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Show"></a>

### BrowserQt.Show() → [None](https://docs.python.org/3/builtins/constants.html#None)

Show method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Stop"></a>

### BrowserQt.Stop() → [None](https://docs.python.org/3/builtins/constants.html#None)

Stop method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.TriggerPageAction"></a>

### BrowserQt.TriggerPageAction(action: Ansys.UI.Toolkit.WebBrowser.WebAction) → [None](https://docs.python.org/3/builtins/constants.html#None)

TriggerPageAction method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.Update"></a>

### BrowserQt.Update() → [None](https://docs.python.org/3/builtins/constants.html#None)

Update method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_BeforeToolTip"></a>

### BrowserQt.add_BeforeToolTip(value: Ansys.UI.Toolkit.ToolTipEventEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_BeforeToolTip method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_ContextMenu"></a>

### BrowserQt.add_ContextMenu(value: Ansys.UI.Toolkit.WebBrowser.ContextMenuEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_ContextMenu method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_ControlAdded"></a>

### BrowserQt.add_ControlAdded(value: Ansys.UI.Toolkit.ControlEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_ControlAdded method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_ControlRemoved"></a>

### BrowserQt.add_ControlRemoved(value: Ansys.UI.Toolkit.ControlEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_ControlRemoved method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_CreateWindow"></a>

### BrowserQt.add_CreateWindow(value: Ansys.UI.Toolkit.WebBrowser.WebBrowserCreateWindowEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_CreateWindow method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_DoDragDropCompleted"></a>

### BrowserQt.add_DoDragDropCompleted(value: Ansys.UI.Toolkit.DragDropCompletedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_DoDragDropCompleted method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_DownloadCompleted"></a>

### BrowserQt.add_DownloadCompleted(value: Ansys.UI.Toolkit.WebBrowser.FileDownloadCompletedDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_DownloadCompleted method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_DragDrop"></a>

### BrowserQt.add_DragDrop(value: Ansys.UI.Toolkit.DragEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_DragDrop method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_DragEnter"></a>

### BrowserQt.add_DragEnter(value: Ansys.UI.Toolkit.DragEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_DragEnter method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_DragLeave"></a>

### BrowserQt.add_DragLeave(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_DragLeave method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_DragMove"></a>

### BrowserQt.add_DragMove(value: Ansys.UI.Toolkit.DragEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_DragMove method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_FontChanged"></a>

### BrowserQt.add_FontChanged(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_FontChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_GotFocus"></a>

### BrowserQt.add_GotFocus(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_GotFocus method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_KeyDown"></a>

### BrowserQt.add_KeyDown(value: Ansys.UI.Toolkit.KeyEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_KeyDown method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_KeyPress"></a>

### BrowserQt.add_KeyPress(value: Ansys.UI.Toolkit.KeyPressEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_KeyPress method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_KeyUp"></a>

### BrowserQt.add_KeyUp(value: Ansys.UI.Toolkit.KeyEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_KeyUp method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_LinkClicked"></a>

### BrowserQt.add_LinkClicked(value: Ansys.UI.Toolkit.WebBrowser.WebBrowserLinkClickedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_LinkClicked method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_LoadFinished"></a>

### BrowserQt.add_LoadFinished(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_LoadFinished method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_LoadStarted"></a>

### BrowserQt.add_LoadStarted(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_LoadStarted method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_LocationChanged"></a>

### BrowserQt.add_LocationChanged(value: Ansys.UI.Toolkit.LocationChangedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_LocationChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_LostFocus"></a>

### BrowserQt.add_LostFocus(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_LostFocus method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_MouseDoubleClick"></a>

### BrowserQt.add_MouseDoubleClick(value: Ansys.UI.Toolkit.MouseEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_MouseDoubleClick method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_MouseDown"></a>

### BrowserQt.add_MouseDown(value: Ansys.UI.Toolkit.MouseEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_MouseDown method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_MouseEnter"></a>

### BrowserQt.add_MouseEnter(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_MouseEnter method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_MouseLeave"></a>

### BrowserQt.add_MouseLeave(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_MouseLeave method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_MouseMove"></a>

### BrowserQt.add_MouseMove(value: Ansys.UI.Toolkit.MouseEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_MouseMove method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_MouseUp"></a>

### BrowserQt.add_MouseUp(value: Ansys.UI.Toolkit.MouseEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_MouseUp method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_MouseWheel"></a>

### BrowserQt.add_MouseWheel(value: Ansys.UI.Toolkit.MouseEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_MouseWheel method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_Navigated"></a>

### BrowserQt.add_Navigated(value: Ansys.UI.Toolkit.WebBrowser.WebBrowserNavigatedEventDelagate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_Navigated method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_Paint"></a>

### BrowserQt.add_Paint(value: Ansys.UI.Toolkit.Drawing.PaintEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_Paint method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_ParentChanged"></a>

### BrowserQt.add_ParentChanged(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_ParentChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_ProgressChanged"></a>

### BrowserQt.add_ProgressChanged(value: Ansys.UI.Toolkit.WebBrowser.WebBrowserProgressChangedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_ProgressChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_SizeChanged"></a>

### BrowserQt.add_SizeChanged(value: Ansys.UI.Toolkit.SizeChangedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_SizeChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_VisibilityChanged"></a>

### BrowserQt.add_VisibilityChanged(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_VisibilityChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_WhatsThis"></a>

### BrowserQt.add_WhatsThis(value: Ansys.UI.Toolkit.WhatsThisEventEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_WhatsThis method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.add_WhatsThisLinkClicked"></a>

### BrowserQt.add_WhatsThisLinkClicked(value: Ansys.UI.Toolkit.WhatsThisLinkClickedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_WhatsThisLinkClicked method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_BeforeToolTip"></a>

### BrowserQt.remove_BeforeToolTip(value: Ansys.UI.Toolkit.ToolTipEventEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_BeforeToolTip method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_ContextMenu"></a>

### BrowserQt.remove_ContextMenu(value: Ansys.UI.Toolkit.WebBrowser.ContextMenuEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_ContextMenu method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_ControlAdded"></a>

### BrowserQt.remove_ControlAdded(value: Ansys.UI.Toolkit.ControlEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_ControlAdded method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_ControlRemoved"></a>

### BrowserQt.remove_ControlRemoved(value: Ansys.UI.Toolkit.ControlEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_ControlRemoved method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_CreateWindow"></a>

### BrowserQt.remove_CreateWindow(value: Ansys.UI.Toolkit.WebBrowser.WebBrowserCreateWindowEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_CreateWindow method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_DoDragDropCompleted"></a>

### BrowserQt.remove_DoDragDropCompleted(value: Ansys.UI.Toolkit.DragDropCompletedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_DoDragDropCompleted method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_DownloadCompleted"></a>

### BrowserQt.remove_DownloadCompleted(value: Ansys.UI.Toolkit.WebBrowser.FileDownloadCompletedDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_DownloadCompleted method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_DragDrop"></a>

### BrowserQt.remove_DragDrop(value: Ansys.UI.Toolkit.DragEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_DragDrop method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_DragEnter"></a>

### BrowserQt.remove_DragEnter(value: Ansys.UI.Toolkit.DragEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_DragEnter method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_DragLeave"></a>

### BrowserQt.remove_DragLeave(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_DragLeave method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_DragMove"></a>

### BrowserQt.remove_DragMove(value: Ansys.UI.Toolkit.DragEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_DragMove method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_FontChanged"></a>

### BrowserQt.remove_FontChanged(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_FontChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_GotFocus"></a>

### BrowserQt.remove_GotFocus(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_GotFocus method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_KeyDown"></a>

### BrowserQt.remove_KeyDown(value: Ansys.UI.Toolkit.KeyEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_KeyDown method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_KeyPress"></a>

### BrowserQt.remove_KeyPress(value: Ansys.UI.Toolkit.KeyPressEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_KeyPress method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_KeyUp"></a>

### BrowserQt.remove_KeyUp(value: Ansys.UI.Toolkit.KeyEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_KeyUp method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_LinkClicked"></a>

### BrowserQt.remove_LinkClicked(value: Ansys.UI.Toolkit.WebBrowser.WebBrowserLinkClickedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_LinkClicked method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_LoadFinished"></a>

### BrowserQt.remove_LoadFinished(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_LoadFinished method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_LoadStarted"></a>

### BrowserQt.remove_LoadStarted(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_LoadStarted method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_LocationChanged"></a>

### BrowserQt.remove_LocationChanged(value: Ansys.UI.Toolkit.LocationChangedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_LocationChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_LostFocus"></a>

### BrowserQt.remove_LostFocus(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_LostFocus method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_MouseDoubleClick"></a>

### BrowserQt.remove_MouseDoubleClick(value: Ansys.UI.Toolkit.MouseEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_MouseDoubleClick method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_MouseDown"></a>

### BrowserQt.remove_MouseDown(value: Ansys.UI.Toolkit.MouseEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_MouseDown method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_MouseEnter"></a>

### BrowserQt.remove_MouseEnter(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_MouseEnter method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_MouseLeave"></a>

### BrowserQt.remove_MouseLeave(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_MouseLeave method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_MouseMove"></a>

### BrowserQt.remove_MouseMove(value: Ansys.UI.Toolkit.MouseEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_MouseMove method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_MouseUp"></a>

### BrowserQt.remove_MouseUp(value: Ansys.UI.Toolkit.MouseEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_MouseUp method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_MouseWheel"></a>

### BrowserQt.remove_MouseWheel(value: Ansys.UI.Toolkit.MouseEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_MouseWheel method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_Navigated"></a>

### BrowserQt.remove_Navigated(value: Ansys.UI.Toolkit.WebBrowser.WebBrowserNavigatedEventDelagate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_Navigated method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_Paint"></a>

### BrowserQt.remove_Paint(value: Ansys.UI.Toolkit.Drawing.PaintEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_Paint method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_ParentChanged"></a>

### BrowserQt.remove_ParentChanged(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_ParentChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_ProgressChanged"></a>

### BrowserQt.remove_ProgressChanged(value: Ansys.UI.Toolkit.WebBrowser.WebBrowserProgressChangedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_ProgressChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_SizeChanged"></a>

### BrowserQt.remove_SizeChanged(value: Ansys.UI.Toolkit.SizeChangedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_SizeChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_VisibilityChanged"></a>

### BrowserQt.remove_VisibilityChanged(value: Ansys.UI.Toolkit.EventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_VisibilityChanged method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_WhatsThis"></a>

### BrowserQt.remove_WhatsThis(value: Ansys.UI.Toolkit.WhatsThisEventEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_WhatsThis method.

<!-- !! processed by numpydoc !! -->

<a id="BrowserQt.remove_WhatsThisLinkClicked"></a>

### BrowserQt.remove_WhatsThisLinkClicked(value: Ansys.UI.Toolkit.WhatsThisLinkClickedEventDelegate) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_WhatsThisLinkClicked method.

<!-- !! processed by numpydoc !! -->

