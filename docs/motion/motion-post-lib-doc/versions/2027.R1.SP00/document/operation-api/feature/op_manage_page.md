# Manage Page
This feature covers creating, finding, activating, and closing [`IPage`](../../../lib/VM.Operations.Post.Interfaces.IPage.md) with [`ApplicationHandler`](../../../lib/VM.API.Post.Operations.ApplicationHandler.md) while running Operation API scripts.

## Creating
Create a new `IPage` with [`AddPage(string)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.AddPage.md).

After creation, create `IView` on new `IPage`, see [Manage View](op_manage_view.md).

## Getting
Get `IPage` with [`GetPage(string)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.GetPage.md) or [`GetPage(Guid)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.GetPage.md).

Get the active `IPage` with [`GetActivePage()`](../../../lib/VM.API.Post.Operations.ApplicationHandler.GetActivePage.md).

Get all pages with [`GetPages()`](../../../lib/VM.API.Post.Operations.ApplicationHandler.GetPages.md).

## Activating
Activate the target `IPage` with [`Activate()`](../../../lib/VM.Operations.Post.Interfaces.IPage.Activate.md). Other pages are deactivated.

## Closing
Close `IPage` through [`Close()`](../../../lib/VM.Operations.Post.Interfaces.IPage.Close.md), [`ClosePage(Guid)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.ClosePage.md), or [`ClosePage(string)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.ClosePage.md).