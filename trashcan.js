Module.register("trashcan",{

	defaults:{
		startDateYear: 2019,
		startDateMonth: 10,
		startDateDay: 29,
		datediff_1: 14,
		datediff_2: 13,
		refreshInterval: 18000000
	},

		vysledekTrashDay: null,
	

	start: function() {
		Log.info("Starting module: " + this.name);

		var self = this;
		setInterval(function(){
			self.updateDom();
		},this.config.refreshInterval);


	},
		

	getStyles: function() {
	        return ["trashcan.css"];
    	},

	getDom: function() {
		var self = this;

		vysledekTrashDay = this.isTrashDay();
		Log.info("Vysledek TrashDay: "+vysledekTrashDay);

		//var vysledek = new isTrashDay();
		var wrapper = document.createElement("div");
		wrapper.className = "trashcanWrapper";
		if (vysledekTrashDay == 0){
			wrapper.classList.add("non_trash_day");
			}
		wrapper.classList.add("pulse");
		return wrapper;
	},

	notificationReceived: function() {},

	socketNotificationReceived: function() {},

	isTrashDay: function(){;
		var startDateYear = this.config.startDateYear;
		var startDateMonth = this.config.startDateMonth;
		var startDateDay = this.config.startDateDay;
		var datediff_1 = this.config.datediff_1;
		var datediff_2 = this.config.datediff_2;

		var today = new Date();
			Log.info("..........Today's date: "+ today);
	
			const zacatek = new Date(startDateYear,startDateMonth-1,startDateDay);
			Log.info("..........Start date: "+ zacatek);
	
			var rozdil = parseInt((today-zacatek)/(24*3600*1000));
			Log.info(rozdil);
			var ukazovat;
			//
			if (rozdil%datediff_1 == 0 || rozdil%datediff_2 == 0) {
				ukazovat = 1
				Log.info("It's trashcan day (or tomorrow is)!")	
			}
			else {
				ukazovat = 0
			}
	
	
			return ukazovat;
		}
})


