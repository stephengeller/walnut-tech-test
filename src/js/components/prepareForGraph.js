import customers from '../../customers.json';

const chartFunctions = {
	getTotals() {
		this.generateTraits = function() {
			var traits = {
				agreeableness: 0,
				extroversion: 0,
				conscientiousness: 0,
				openness: 0,
				neuroticism: 0
			};
			return traits;
		};

		var banks = {
			bluebank: {
				name: 'bluebank',
				members: 0,
				traits: this.generateTraits()
			},
			redbank: {
				name: 'redbank',
				members: 0,
				traits: this.generateTraits()
			},
			greenbank: {
				name: 'greenbank',
				members: 0,
				traits: this.generateTraits()
			},
			purplebank: {
				name: 'purplebank',
				members: 0,
				traits: this.generateTraits()
			},
			allbanks: {
				name: 'allbanks',
				members: 0,
				traits: this.generateTraits()
			}
		};
		for (var i = 0, len = customers.length; i < len; i++) {
			this.addTraits(banks.allbanks, customers[i].metrics);
			banks.allbanks.members += 1;

			var bank = customers[i].company
				.toLowerCase()
				.split(' ')
				.join('');
			banks[bank].members += 1;
			this.addTraits(banks[bank], customers[i].metrics);
		}
		return banks;
	},

	addTraits(values, toAdd) {
		var traits = [
			'agreeableness',
			'extroversion',
			'conscientiousness',
			'openness',
			'neuroticism'
		];
		for (var i = 0; i < traits.length; i++) {
			values.traits[traits[i]] += toAdd[traits[i]];
		}
	},

	getAverages(data, length) {
		var traits = [
			'agreeableness',
			'extroversion',
			'conscientiousness',
			'openness',
			'neuroticism'
		];
		for (var i = 0; i < traits.length; i++) {
			data[traits[i]] /= length;
		}
		return data;
	},

	getAllAverages() {
		var banks = this.getTotals();
		var bankNames = [
			'bluebank',
			'redbank',
			'greenbank',
			'purplebank',
			'allbanks'
		];
		for (var i = 0; i < bankNames.length; i++) {
			banks[bankNames[i]] = this.getAverages(
				banks[bankNames[i]].traits,
				banks[bankNames[i]].members
			);
		}
		return banks;
	}
};

export default chartFunctions;
