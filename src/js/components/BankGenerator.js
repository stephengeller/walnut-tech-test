class BankGenerator {
	generateBank(bankName) {
		return {
			name: bankName,
			members: 0,
			traits: this.generateTraits()
		};
	}

	generateTraits() {
		var traits = {
			agreeableness: 0,
			extroversion: 0,
			conscientiousness: 0,
			openness: 0,
			neuroticism: 0
		};
		return traits;
	}

	generateBanks() {
		var banks = {};
		banks['bluebank'] = this.generateBank('bluebank');
		banks['redbank'] = this.generateBank('redbank');
		banks['greenbank'] = this.generateBank('greenbank');
		banks['purplebank'] = this.generateBank('purplebank');
		banks['allbanks'] = this.generateBank('allbanks');
		return banks;
	}

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
	}
}

export default BankGenerator;
