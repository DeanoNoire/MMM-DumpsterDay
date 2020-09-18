Module.register("MMM-DumpsterDay",{

	defaults:{
		refreshInterval: 18000000, // Default 18000000 = 5 hours
		pulse: true, // Make the module pulsating

		enableBasic: true,
<<<<<<< HEAD
		basicStartDate: "21.07.2020", // use DD.MM.YYYY format
=======
		basicStartDate: "21.08.2020",
>>>>>>> 475fb4d0f83429353734af1561a51877b34f8c1c
		basicDateDiff_1: 14,
		basicNotifyDayBefore: true,


		enablePlastic: true,
<<<<<<< HEAD
		plasticStartDate: "29.07.2020", // use DD.MM.YYYY format
=======
		plasticStartDate: "29.08.2020", // use 01 instead of 1
>>>>>>> 475fb4d0f83429353734af1561a51877b34f8c1c
		plasticDateDiff_1: 28,
		plasticNotifyDayBefore: true,

		enableLandscape: false,
		landscapeStartDate: "29.10.2019", // use DD.MM.YYYY format
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
		var basicDiv = document.createElement("div");
		basicDiv.className = "basicDiv";
		wrapper.appendChild(basicDiv);
			if (basicTrashDayResult == 0){
				basicDiv.classList.add("non_today");
			}
		}


		if (enablePlastic == true){
		plasticTrashDayResult = this.isPlasticTrashDay();
		var plasticDiv = document.createElement("div");
		plasticDiv.className = "plasticDiv";
		wrapper.appendChild(plasticDiv);
			if (plasticTrashDayResult == 0){
			plasticDiv.classList.add("non_today")
			}
		}


		if (enableLandscape == true){
		landscapeTrashDayResult = this.isLandscapeTrashDay();
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



		isBasicTrashDay: function(){
			var startDate = this.config.basicStartDate;
			var startDateYear = startDate.substring(6,10);
			var startDateMonth = startDate.substring(3,5);
			var startDateDay = startDate.substring(0,2);
			var datediff_1 = this.config.basicDateDiff_1;
			var notifyDayBefore = this.config.basicNotifyDayBefore;
			const beginning = new Date(startDateYear,startDateMonth-1,startDateDay);
			var result;
			result = this.calculateDay(datediff_1,notifyDayBefore,beginning,"Basic")
			return result;
		},


		isPlasticTrashDay: function(){;
			var startDate = this.config.plasticStartDate;
			var startDateYear = startDate.substring(6,10);
			var startDateMonth = startDate.substring(3,5);
			var startDateDay = startDate.substring(0,2);
			var datediff_1 = this.config.plasticDateDiff_1;
			var notifyDayBefore = this.config.plasticNotifyDayBefore;
			const beginning = new Date(startDateYear,startDateMonth-1,startDateDay);
			var result;
			result = this.calculateDay(datediff_1,notifyDayBefore,beginning,"Plastic")
			return result;
		},

		isLandscapeTrashDay: function(){;
			var startDate = this.config.landscapeStartDate;
			var startDateYear = startDate.substring(6,10);
			var startDateMonth = startDate.substring(3,5);
			var startDateDay = startDate.substring(0,2);
			var datediff_1 = this.config.landscapeDateDiff_1;
			var notifyDayBefore = this.config.landscapeNotifyDayBefore;
			const beginning = new Date(startDateYear,startDateMonth-1,startDateDay);
			var result;
			result = this.calculateDay(datediff_1,notifyDayBefore,beginning,"Landscape")
			return result;
		},


		calculateDay: function(datediff_1,notifyDayBefore,beginning,type){
			
			// Notify day before
			if (notifyDayBefore == true){
				var datediff_2 = 1;
				}
				else var datediff_2 = 0
				
			// Date comparison
			var today = new Date();
			var result;
			const todays = new Date(today.getFullYear(),today.getMonth(),today.getDate());
			
			var difference = parseInt((todays-beginning)/(24*3600*1000));
	
			// Logging
			Log.info("********"+type+"*******");
			Log.info("Day difference: "+difference+" x Days until next: "+(((difference%datediff_1)-datediff_1)*-1)+" ");
		
			// Handling if is set future date as start date
			if(difference < 0) {
				difference = difference + datediff_1
			}
			
			// Trashday today 
			if (difference%datediff_1 == 0) {
					result = 1
					Log.info("It's trashday !!");
				}

			// Trashday tomorrow - only if notify day before is enabled
				else if (difference%(datediff_1+datediff_2) == 0) {
						result = 1
						Log.info("Tomorrow is trashday !!");
				}
			// Not a trashday
					else {
					result = 0
					Log.info("Not a trashday");
					}
	
				return result;
		},



})
