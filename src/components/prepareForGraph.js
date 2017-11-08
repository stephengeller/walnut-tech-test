import customers from '../customers.json';

function getAverages() {
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
}

export default getAverages;
