//private async _loadSbsPoints() {
		//try {
			const response = await fetch('sbs_test.json');
			const data = await response.json();
			console.log('Loaded sbs_points.json data:', data);
			// Ensure data is in the correct format
			// this.sbs_points = (data as Point[]).map(p => ({
			// 	time: p.time as Time,
			// 	price: p.price,
			// }));
			console.log('Parsed sbs_points:', this.sbs_points);
		// } catch (e) {
		// 	this.sbs_points = this.sbs_pointsFallback; 
		// 	console.error('Error loading sbs_points.json:', e);
		// }
//	}