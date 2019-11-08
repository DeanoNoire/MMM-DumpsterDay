# MMM-DumpsterDay
This Magic Mirror module works as a reminder to take the dumpster from the driveway to the gate on every odd Tuesday. Although  the use sounds very specific, it can be easily changed to any reminder on recurring days.
  
  ## Preview

<img src="https://github.com/DeanoNoire/MMM-DumpsterDay/blob/master/multiple.PNG">




## Config:
  **startDateYear** int - Year of the start date<br/>
  **startDateMonth** int - Month of the start date<br/>
  **startDateDay** int - Day of the start date<br/>
  **datediff_1** int - Number of days setting the recurrence of the notification.<br/>
  **datediff_2** int - Second number of days setting the recurrence of the notification. In case you need only one day set it equal to   datediff_1
  
## How it works:
 1) Set the startDateYear, startDateMonth and startDateDay to the day when the recurring event last happened. 
  > The default is set to 29.10.2019 - the last Tuesday the dumpster has been taken out.
  
2) The isTrashDay method compares the day difference between the start date and current date. If the result of the difference modulo datediff_1 is 0 (resp. or datediff_2), it's a trash day (resp. day before trash day). 
> In my example I need the reminder every second Tuesday and the day before that. That's why I set the datediff_1 to 14 and datediff_2 to 13.

  
