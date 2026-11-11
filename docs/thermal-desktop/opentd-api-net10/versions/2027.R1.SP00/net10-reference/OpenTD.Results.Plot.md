# Namespace OpenTD.Results.Plot

### Namespaces

 [OpenTD.Results.Plot.Internal](OpenTD.Results.Plot.Internal.md)

### Classes

 [Axis](OpenTD.Results.Plot.Axis.md)

Represents an axis on a plot. Will attempt to name itself based on the series
associated with it.

 [AxisStyle](OpenTD.Results.Plot.AxisStyle.md)

 [DefaultStyles](OpenTD.Results.Plot.DefaultStyles.md)

 [Grid](OpenTD.Results.Plot.Grid.md)

Represents a grid drawn in the main plot area.

 [Legend](OpenTD.Results.Plot.Legend.md)

Represents a plot legend.

 [LegendStyle](OpenTD.Results.Plot.LegendStyle.md)

 [Plot2d](OpenTD.Results.Plot.Plot2d.md)

An abstract class representing a 2d plot. Inherit from it to take advantage of
its many helpful features, such as auto-naming, auto-creating and scaling axes, etc.
SimplePlot is a concrete definition of a Plot2d that uses the .NET charting tools.
There are methods to display the plot on the screen, save it as a bitmap, and to
output it as a table of data.

 [Plot2dStyle](OpenTD.Results.Plot.Plot2dStyle.md)

 [Series2d](OpenTD.Results.Plot.Series2d.md)

Represents a 2d series on a plot. Will attempt to name itself based on the data
associated with it.

 [Series2dCollection](OpenTD.Results.Plot.Series2dCollection.md)

A collection of 2d series and metadata describing them.

 [Series2dStyle](OpenTD.Results.Plot.Series2dStyle.md)

 [SimplePlot](OpenTD.Results.Plot.SimplePlot.md)

An implementation of Plot2d using the .NET charting tools.
Use this class to create 2d plots of solution data.
One limitation: currently SimplePlot only allows one axis in each position,
i.e., a primary and secondary x axis, and a primary and secondary y axis.
If you try to plot more axes, it will throw an exception.

### Enums

 [PlotColorPalette](OpenTD.Results.Plot.PlotColorPalette.md)

Built-in color palette for a plot.
This enum is backend-independent. Any rendering backend should map these values
to their own equivalents. See <xref href="OpenTD.Results.Plot.Internal.ChartingConverter" data-throw-if-not-resolved="false"></xref> for the
WinForms DataVisualization reference implementation.

 [PlotDashStyle](OpenTD.Results.Plot.PlotDashStyle.md)

Dash style for a line or border on a plot element.
This enum is backend-independent. Any rendering backend should map these values
to their own equivalents. See <xref href="OpenTD.Results.Plot.Internal.ChartingConverter" data-throw-if-not-resolved="false"></xref> for the
WinForms DataVisualization reference implementation.

 [PlotDocking](OpenTD.Results.Plot.PlotDocking.md)

Docking position for a plot element such as a title or legend.
This enum is backend-independent. Any rendering backend should map these values
to their own equivalents. See <xref href="OpenTD.Results.Plot.Internal.ChartingConverter" data-throw-if-not-resolved="false"></xref> for the
WinForms DataVisualization reference implementation.

 [PlotLegendItemOrder](OpenTD.Results.Plot.PlotLegendItemOrder.md)

Order in which legend items are displayed.
This enum is backend-independent. Any rendering backend should map these values
to their own equivalents. See <xref href="OpenTD.Results.Plot.Internal.ChartingConverter" data-throw-if-not-resolved="false"></xref> for the
WinForms DataVisualization reference implementation.

 [PlotLegendTableStyle](OpenTD.Results.Plot.PlotLegendTableStyle.md)

Table style used to lay out legend items.
This enum is backend-independent. Any rendering backend should map these values
to their own equivalents. See <xref href="OpenTD.Results.Plot.Internal.ChartingConverter" data-throw-if-not-resolved="false"></xref> for the
WinForms DataVisualization reference implementation.

 [PlotMarkerStyle](OpenTD.Results.Plot.PlotMarkerStyle.md)

Marker style for a data point on a plot series.
This enum is backend-independent. Any rendering backend should map these values
to their own equivalents. See <xref href="OpenTD.Results.Plot.Internal.ChartingConverter" data-throw-if-not-resolved="false"></xref> for the
WinForms DataVisualization reference implementation.

 [PlotTextOrientation](OpenTD.Results.Plot.PlotTextOrientation.md)

Text orientation for an axis label or title.
This enum is backend-independent. Any rendering backend should map these values
to their own equivalents. See <xref href="OpenTD.Results.Plot.Internal.ChartingConverter" data-throw-if-not-resolved="false"></xref> for the
WinForms DataVisualization reference implementation.

 [Axis.Positions](OpenTD.Results.Plot.Axis.Positions.md)

Primary or secondary axis?


