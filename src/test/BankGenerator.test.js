import BankGenerator from '../js/components/BankGenerator';

describe('Bank Generator', () => {
	describe('#generateTraits', () => {
		it('generates an object with traits', () => {
			var bankGenerator = new BankGenerator();
			var traits = bankGenerator.generateTraits();
			expect(traits).toEqual({
				agreeableness: 0,
				extroversion: 0,
				conscientiousness: 0,
				openness: 0,
				neuroticism: 0
			});
		});
	});

	describe('#generateBank', () => {
		it('generates a bank with name, member & traits', () => {
			var bankGenerator = new BankGenerator();
			var bank = bankGenerator.generateBank('testbank');
			expect(bank).toEqual({
				name: 'testbank',
				members: 0,
				traits: {
					agreeableness: 0,
					extroversion: 0,
					conscientiousness: 0,
					openness: 0,
					neuroticism: 0
				}
			});
		});
	});

	describe('#generateBanks', () => {
		it('generates 4 colored banks and all banks', () => {
			var bankGenerator = new BankGenerator();
			var banks = bankGenerator.generateBanks();
			expect(banks.redbank !== undefined).toBe(true);
			expect(banks.bluebank !== undefined).toBe(true);
			expect(banks.bluebank !== undefined).toBe(true);
			expect(banks.bluebank !== undefined).toBe(true);
			expect(banks.allbanks !== undefined).toBe(true);
			expect(banks.fakebank !== undefined).toBe(false);
		});
	});
});
