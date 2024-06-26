# Using RBD commands with Excel

It is possible to call Microsoft Office Excel from an RBD command to read and
write data to and from Excel. If Excel is available, RBD will automatically
detect and load the Excel interopt. If Excel is detected, the solver output
will contain the following lines at the beginning.

        Processing Python commands
        import base modules and macros
        Microsoft.Office.Interop.Excel is loaded
        Ans.Customize.Misc interop is not available
        ready to process commands

The Excel application is initiated using:

    excel=Microsoft.Office.Interop.Excel.ApplicationClass()
    excel.Visible=True
    excel.DisplayAlerts=False

Use the following line to open an Excel file:

    workbook=excel.Workbooks.Open(r"E:\RBD\MODELS\COMMANDES\EXCEL\Excel_v160_files\Velocity.xlsx")
    ws=workbook.Worksheets[1]

To read data from the current worksheet, use the following:

    xlrange = ws.Range["A2", "B66"]
    values=xlrange.Value2

Before using the values in an RBD script, it may be necessary to convert them
to real values:

    realValues=System.Array.CreateInstance(float,2,values.GetLength(0)) 
    for i in range(0,values.GetLength(0)):
        print '{0:e} {1:e}'.format(values[i,0],values[i,1])
        realValues[0,i]=values[i,0].real
        realValues[1,i]=values[i,1].real

Similarly, it is possible to write values to the current worksheet. The
following sequence of commands shows how to create a new worksheet and write
the joint force in the new worksheet:

    # retrieve joint force measure
    force=joint.GetForce()
    
    # obtain time values for this measure
    values=force.FillValuesThroughTime()
    
    # create a new worksheet
    ws2=workbook.Worksheets.Add()
    ws2.Name='Reaction forces'
    
    len=values.GetLength(0)
    
    cell=ws2.Range["A1"]
    cell.Value2='Time'
    cell=ws2.Range["B1"]
    cell.Value2='Fx'
    cell=ws2.Range["C1"]
    cell.Value2='Fy'
    cell=ws2.Range["D1"]
    cell.Value2='Fz'
    cell=ws2.Range["E1"]
    cell.Value2='Mx'
    cell=ws2.Range["F1"]
    cell.Value2='My'
    cell=ws2.Range["G1"]
    cell.Value2='Mz'
    
    # put values into the new worksheet
    end="G"+str(1+len)
    cells=ws2.Range("A2",end)
    cells.Value2=values
