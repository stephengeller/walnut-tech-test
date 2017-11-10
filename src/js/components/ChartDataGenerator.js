import customers from '../../customers.json';
import BankGenerator from './BankGenerator';

class ChartDataGenerator {
	constructor(bankGenerator = new BankGenerator()) {
		this.bankGenerator = bankGenerator;
		this.banks = this.bankGenerator.generateBanks();
	}
	getTotals() {
		for (var i = 0, len = customers.length; i < len; i++) {
			this.bankGenerator.addTraits(this.banks.allbanks, customers[i].metrics);
			this.banks.allbanks.members += 1;
			var bank = customers[i].company
				.toLowerCase()
				.split(' ')
				.join('');
			this.banks[bank].members += 1;
			this.bankGenerator.addTraits(this.banks[bank], customers[i].metrics);
		}
		return this.banks;
	}

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
	}

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
}

export default ChartDataGenerator;
