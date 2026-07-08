# get_support_point_values

<a id="compolyx.plot_data.ScalarFieldData.get_support_point_values"></a>

## ScalarFieldData.get_support_point_values()

Returns the scalar values defined at the supporting points.

### Returns
  Resulting n-dimensional array with the scalar values as defined at the supporting points.

Values are returned independent of update status of plot.

Examples:
: Get scalar values for supporting points defining lookup table plot:
  <br/>
  ```default
  >>> coords = my_plot._get_support_point_values()
  ```
