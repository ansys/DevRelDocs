# get_support_point_coordinates

<a id="compolyx.plot_data.ScalarFieldData.get_support_point_coordinates"></a>

## ScalarFieldData.get_support_point_coordinates()

Returns the coordinates of the supporting points.

### Returns
  Resulting n-dimensional array with the coordinates for each supporting point.

Data is returned independent of update status of plot.

Examples:
: Get coordinates for supporting points defining lookup table plot:
  <br/>
  ```default
  >>> coords = my_plot._get_support_point_coordinates()
  ```
