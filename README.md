# MMM-DumpsterDay
This Magic Mirror module works as a reminder to take the dumpster from the driveway to the gate on every odd Tuesday. Although  the use sounds very specific, it can be easily changed to any reminder on recurring days.
  
  ## Preview
<img src="https://github.com/DeanoNoire/MMM-DumpsterDay/blob/master/multiple.png?raw=true">


## Install
1) Copy the contents into MagicMirror/modules folder
<br/>
2) Update your config:


{

    module:"trashcan",
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
    

## Config:
  **startDateYear** int - Year of the start date<br/>
  **startDateMonth** int - Month of the start date<br/>
  **startDateDay** int - Day of the start date<br/>
  **datediff_1** int - Number of days setting the recurrence of the notification.<br/>
  **notifyDayBefore** int - If you want the notification to appear also the day before the dumpster day
  
## How it works:
 1) Set the startDateYear, startDateMonth and startDateDay to the day when the recurring event last happened. 
  > The default is set to 29.10.2019 - the last Tuesday the dumpster has been taken out.
  
2) The isTrashDay method compares the day difference between the start date and current date. If the result of the difference modulo datediff_1 is 0 (resp. or datediff_2), it's a trash day (resp. day before trash day). 
> In my example I need the reminder every second Tuesday and the day before that. That's why I set the datediff_1 to 14 and datediff_2 to 13.

  
