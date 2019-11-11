Module.register("MMM-DumpsterDay",{

	defaults:{
		refreshInterval: 18000000, // Default 18000000 = 5 hours
		pulse: true, // Make the module pulsating

		enableBasic: true,
		basicStartDate: "29.10.2019",
		basicDateDiff_1: 14,
		basicNotifyDayBefore: true,


		enablePlastic: true,
		plasticStartDate: "16.01.2019", // use 01 instead of 1
		plasticDateDiff_1: 28,
		plasticNotifyDayBefore: true,

		enableLandscape: false,
		landscapeStartDate: "29.10.2019",
		landscapeDateDiff_1: 28,
		landscapeNotifyDayBefore: true,
	},

		basicTrashDayResult: null,
		plasticTrashDayResult: null,
		landscapeTrashDayResult: null,


	start: function() {
		Log.info("Starting module: " + this.name);

		var self = this;
		setInterval(function(){
			self.updateDom();
		},this.config.refreshInterval);
	},


	getStyles: function() {
	        return ["MMM-DumpsterDay.css"];
    },

	getDom: function() {
		var self = this;
		var pulse = this.config.pulse;
		var enableBasic = this.config.enableBasic;
		var enablePlastic = this.config.enablePlastic;
		var enableLandscape = this.config.enableLandscape;

		var wrapper = document.createElement("div");
		wrapper.classname = "trashcan_wrapper"

		if (pulse == true){
			wrapper.classList.add("pulse");
			}

		if (enableBasic == true){
		basicTrashDayResult = this.isBasicTrashDay();
		Log.info("basicTrashDayResult: "+basicTrashDayResult);
		var basicDiv = document.createElement("div");
		basicDiv.className = "basicDiv";
		wrapper.appendChild(basicDiv);
			if (basicTrashDayResult == 0){
				basicDiv.classList.add("non_today");
			}
		}


		if (enablePlastic == true){
		plasticTrashDayResult = this.isPlasticTrashDay();
		Log.info("plasticTrashDayResult: "+basicTrashDayResult);
		var plasticDiv = document.createElement("div");
		plasticDiv.className = "plasticDiv";
		wrapper.appendChild(plasticDiv);
			if (plasticTrashDayResult == 0){
			plasticDiv.classList.add("non_today")
			}
		}


		if (enableLandscape == true){
		landscapeTrashDayResult = this.isPlasticTrashDay();
		Log.info("landscapeTrashDayResult: "+basicTrashDayResult);
		var landscapeDiv = document.createElement("div");
		landscapeDiv.className = "landscapeDiv";
		wrapper.appendChild(landscapeDiv);
			if (landscapeTrashDayResult == 0){
			landscapeDiv.classList.add("non_today")
			}

		}



		return wrapper;
	},

	notificationReceived: function() {},

	socketNotificationReceived: function() {},

		isBasicTrashDay: function(){;
			var startDate = this.config.basicStartDate;
			var startDateYear = startDate.substring(6,10);
			var startDateMonth = startDate.substring(3,5);
			var startDateDay = startDate.substring(0,2);
			var datediff_1 = this.config.basicDateDiff_1;
			var notifyDayBefore = this.config.basicNotifyDayBefore;
			if (notifyDayBefore == true){
				var datediff_2 = datediff_1-1;
			}
			else var datediff_2 = datediff_1

			var today = new Date();
			var result;
			const beginning = new Date(startDateYear,startDateMonth-1,startDateDay);
			var difference = parseInt((today-beginning)/(24*3600*1000));

			if (difference%datediff_1 == 0 || difference%datediff_2 == 0) {
					result = 1
				}
				else {result = 0}
		return result;
		},


		isPlasticTrashDay: function(){;
			var startDate = this.config.plasticStartDate;
			var startDateYear = startDate.substring(6,10);
			var startDateMonth = startDate.substring(3,5);
			var startDateDay = startDate.substring(0,2);
			var datediff_1 = this.config.plasticDateDiff_1;
			var notifyDayBefore = this.config.plasticNotifyDayBefore;
			if (notifyDayBefore == true){
				var datediff_2 = datediff_1-1;
			}
			else var datediff_2 = datediff_1

			var today = new Date();
			var result;
			const beginning = new Date(startDateYear,startDateMonth-1,startDateDay);
			var difference = parseInt((today-beginning)/(24*3600*1000));

			if (difference%datediff_1 == 0 || difference%datediff_2 == 0) {
					result = 1
				}
				else {result = 0}
		return result;
		},

		isLandscapeTrashDay: function(){;
			var startDate = this.config.landscapeStartDate;
			var startDateYear = startDate.substring(6,10);
			var startDateMonth = startDate.substring(3,5);
			var startDateDay = startDate.substring(0,2);
			var datediff_1 = this.config.landscapeDateDiff_1;
			var notifyDayBefore = this.config.landscapeNotifyDayBefore;
			if (notifyDayBefore == true){
				var datediff_2 = datediff_1-1;
			}
			else var datediff_2 = datediff_1

			var today = new Date();
			var result;
			const beginning = new Date(startDateYear,startDateMonth-1,startDateDay);
			var difference = parseInt((today-beginning)/(24*3600*1000));

			if (difference%datediff_1 == 0 || difference%datediff_2 == 0) {
					result = 1
				}
				else {result = 0}
		return result;
		},



})
