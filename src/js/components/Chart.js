import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataGenerator from './ChartDataGenerator';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.chartDataGenerator = new ChartDataGenerator();
		this.banks = this.chartDataGenerator.getAllAverages();
		this.state = {
			chartData: {
				labels: [
					'Agreeableness',
					'Extroversion',
					'Conscientiousness',
					'Openness',
					'Neuroticism'
				],
				datasets: [
					{
						label: 'Blue Bank',
						data: this.formatBanks(this.banks.bluebank),
						backgroundColor: 'blue'
					},
					{
						label: 'Red Bank',
						data: this.formatBanks(this.banks.redbank),
						backgroundColor: 'red'
					},
					{
						label: 'Green Bank',
						data: this.formatBanks(this.banks.greenbank),
						backgroundColor: 'green'
					},
					{
						label: 'Purple Bank',
						data: this.formatBanks(this.banks.purplebank),
						backgroundColor: 'Purple'
					},
					{
						label: 'All banks',
						data: this.formatBanks(this.banks.allbanks),
						backgroundColor: 'Black'
					}
				]
			}
		};
	}

	formatBanks(bank) {
		return [
			bank.agreeableness,
			bank.extroversion,
			bank.conscientiousness,
			bank.openness,
			bank.neuroticism
		];
	}

	render() {
		return (
			<div className="chart">
				<Bar
					data={this.state.chartData}
					options={{
						title: {
							text: 'Average Trait Levels Across All Customers Per Company',
							display: true
						},
						legend: {
							display: true
						}
					}}
				/>
			</div>
		);
	}
}

export default Chart;
