<a id="_getting_started_user_guide"></a>
# User Guide



# What You Can Do with Automation in Speos for NX






You can create new Speos for NX features or modify existing features, run and export simulations using scripts.





This section gives you an overview of what Speos for NX Library can achieve with one example of Python script.





This section contains the following topics: 
* **[How to create an NX Journal Python](#C1)** 

* **[How to create a Speos for NX Python script](#C2)** 

* **[How to run an NX Journal](#C3)**







# How to create an NX Journal Python







1. Create a text file in the target directory. 

2. Edit it with a text editor. 

3. Change its extension for .py.







-Or-






1. Press Ctrl + M on your keyboard. 

2. Click Menu, Tools, Journal, Record. 

3. Type the name of the journal. 

4. Click OK. 

5. Click Menu, Tools, Journal, Stop Recording.







# How to create a Speos for NX Python script







1. Open your .py journal. 

2. Rewrite the function as below:







preformatted {"type":"element","name":"preformatted","attributes":{},"children":[{"type":"text","text":"\n    "},{"type":"element","name":"computeroutput","attributes":{},"children":[{"type":"text","text":"\n# Imports system packages\nimport sys\nimport os\n\n# Imports the NX library\nimport NXOpen\n\n# Retrieves the Speos library directory path using the \"SPEOS_NX_DIR\" environment variable.\nsnxdir = os.getenv('SPEOS_NX_DIR', '') + '\\application\\'\n\n# Sets the Speos library directory path in the system environment.\nsys.path.append(snxdir)\n\n# Imports the Speos library\nimport SpeosNX\n\ndef main():\n\n    # Gets the NX session.\n    MyNXSession = NXOpen.Session.GetSession()\n\n    # Gets the Speos session.\n    Session = SpeosNX.Session.GetSession()\n\n    # Gets the Speos part collection.\n    PartCollection = Session.Parts\n\n    # Loads all parts that contain Speos features.\n    PartCollection.Load()\n\n    # Gets the currents NX work part.\n    workPart = MyNXSession.Parts.Work\n\n    # Gets the current working part's Speos feature collection.\n    FeatureCollection = PartCollection.Work.Features\n\n    origin = workPart.Features.FindObject(\"DATUM_CSYS(0)\").FindObject(\"POINT 1\")\n    xAxis = workPart.Datums.FindObject(\"DATUM_CSYS(0) X axis\")\n    yAxis = workPart.Datums.FindObject(\"DATUM_CSYS(0) Z axis\")\n\n    # Create the feature Builder\n    MySpeosFeature = None\n    IrradianceSensor = FeatureCollection.CreateSensorIrradianceBuilder(MySpeosFeature)\n\n    # Feature name,\n    IrradianceSensor.Name = \"Irradiance Sensor\"\n\n    # Axis System\n    IrradianceSensor.AxisSystem.OriginPoint = origin.Tag\n    IrradianceSensor.AxisSystem.DirectionX = xAxis.Tag\n    IrradianceSensor.AxisSystem.DirectionY = yAxis.Tag\n\n    # Create the feature\n    IrradianceSensor.Commit()\n\nif __name__ == '__main__':\n    main()\n    "}]},{"type":"text","text":"\n"}]}





# How to run an NX Journal







1. In Menu, click Tools, Journal, Play.... 

2. Select the journal to play from Recently Accessed Journals.







-Or-






1. Browse for the journal to start. 

2. Click Run.







 Note: You can also edit the journal from Speos for NX. You can add journal arguments.

[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)