import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import chartFunctions from './prepareForGraph';

class Chart extends Component {
	constructor(props) {
		super(props);
		const banks = chartFunctions.getAllAverages();
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
						data: [
							banks.bluebank.agreeableness,
							banks.bluebank.extroversion,
							banks.bluebank.conscientiousness,
							banks.bluebank.openness,
							banks.bluebank.neuroticism
						],
						backgroundColor: 'blue'
					},
					{
						label: 'Red Bank',
						data: [
							banks.redbank.agreeableness,
							banks.redbank.extroversion,
							banks.redbank.conscientiousness,
							banks.redbank.openness,
							banks.redbank.neuroticism
						],
						backgroundColor: 'red'
					},
					{
						label: 'Green Bank',
						data: [
							banks.greenbank.agreeableness,
							banks.greenbank.extroversion,
							banks.greenbank.conscientiousness,
							banks.greenbank.openness,
							banks.greenbank.neuroticism
						],
						backgroundColor: 'green'
					},
					{
						label: 'Purple Bank',
						data: [
							banks.purplebank.agreeableness,
							banks.purplebank.extroversion,
							banks.purplebank.conscientiousness,
							banks.purplebank.openness,
							banks.purplebank.neuroticism
						],
						backgroundColor: 'Purple'
					},
					{
						label: 'All banks',
						data: [
							banks.allbanks.agreeableness,
							banks.allbanks.extroversion,
							banks.allbanks.conscientiousness,
							banks.allbanks.openness,
							banks.allbanks.neuroticism
						],
						backgroundColor: 'Black'
					}
				]
			}
		};
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
