# Manage Page
<div align="right"><a href="/document/operation-api/feature/op_manage_page.md" download="op_manage_page.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
