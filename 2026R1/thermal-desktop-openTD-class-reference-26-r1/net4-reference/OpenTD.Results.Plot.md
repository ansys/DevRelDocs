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

 [Axis.Positions](OpenTD.Results.Plot.Axis.Positions.md)

Primary or secondary axis?


