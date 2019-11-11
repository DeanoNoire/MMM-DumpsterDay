# MMM-DumpsterDay
This Magic Mirror module works as a reminder to take the dumpster from the driveway to the gate on every odd Tuesday. Although  the use sounds very specific, it can be easily changed to any reminder on recurring days.
  
  ## Preview
<img src="https://github.com/DeanoNoire/MMM-DumpsterDay/blob/master/multiple.png?raw=true">


## Install
1) git colne https://github.com/DeanoNoire/MMM-DumpsterDay.git to the MagicMirror/modules directory.
<br/>
2) Update your config:

{

    module:"MMM-DumpsterDay",
	  position:"lower_third",
	  
    config: {
		refreshInterval: 18000000, // Default: 18000000 = 5 hours
		pulse: true, 			   // Default: true - Makes the module pulsating
	
    enableBasic: true, 				// Enable basic trashcan 
		basicStartDate: "24.10.2019", 	// The first dumpster day (Always use 2 digit dates (01 instead of 1))
		basicDateDiff_1: 14,			// Trashday reoccurance - Default: 14 (every 14 days)
		basicNotifyDayBefore: true,		//Default: true - If you want the notification to appear also the day before the dumpster day
		
    enablePlastic: true,			// Same values as basic but for Plastic
		plasticStartDate: "16.01.2019", 
		plasticDateDiff_1: 28,
		plasticNotifyDayBefore: true,	

		enableLandscape: false,			// Same values as basic but for Landscape
		landscapeStartDate: "29.10.2019",
		landscapeDateDiff_1: 28,		
		landscapeNotifyDayBefore: true,
    
	}
    
  
  
