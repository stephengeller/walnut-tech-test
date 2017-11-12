class BankGenerator {
	constructor() {
		(this.traitsObj = {
			agreeableness: 0,
			extroversion: 0,
			conscientiousness: 0,
			openness: 0,
			neuroticism: 0
		}),
			(this.traitsArr = [
				'agreeableness',
				'extroversion',
				'conscientiousness',
				'openness',
				'neuroticism'
			]),
			(this.banksArr = [
				'bluebank',
				'redbank',
				'greenbank',
				'purplebank',
				'allbanks'
			]);
	}
	generateBank(bankName) {
		return {
			name: bankName,
			members: 0,
			traits: Object.assign({}, this.traitsObj)
		};
	}

	generateBanks() {
		var banks = {};
		for (var i = 0; i < this.banksArr.length; i++) {
			banks[this.banksArr[i]] = this.generateBank(this.banksArr[i]);
		}
		return banks;
	}

	addTraits(values, toAdd) {
		for (var i = 0; i < this.traitsArr.length; i++) {
			values.traits[this.traitsArr[i]] += toAdd[this.traitsArr[i]];
		}
	}
}

export default BankGenerator;
