import customers from '../customers.json';

const chartFunctions = {
	getTotals() {
		var traits = {
			agreeableness: 0,
			extroversion: 0,
			conscientiousness: 0,
			openness: 0,
			neuroticism: 0
		};
		for (var i = 0, len = customers.length; i < len; i++) {
			traits.agreeableness += customers[i].metrics.agreeableness;
			traits.extroversion += customers[i].metrics.extroversion;
			traits.conscientiousness += customers[i].metrics.conscientiousness;
			traits.openness += customers[i].metrics.openness;
			traits.neuroticism += customers[i].metrics.neuroticism;
		}
		return traits;
	},

	getAverages(data) {
		data.agreeableness /= 250;
		data.extroversion /= 250;
		data.conscientiousness /= 250;
		data.openness /= 250;
		data.neuroticism /= 250;
		return data;
	}
};

export default chartFunctions;
