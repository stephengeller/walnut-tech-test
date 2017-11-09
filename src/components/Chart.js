import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import chartFunctions from './prepareForGraph';

class Chart extends Component {
	constructor(props) {
		super(props);
		const totalTraits = chartFunctions.getTotals();
		const averageTraits = chartFunctions.getAverages(totalTraits);
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
						data: [
							averageTraits.agreeableness,
							averageTraits.extroversion,
							averageTraits.conscientiousness,
							averageTraits.openness,
							averageTraits.neuroticism
						],
						backgroundColor: ['blue', 'green', 'red', 'yellow', 'purple']
					}
				]
			}
		};
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'bottom'
	};

	render() {
		return (
			<div className="chart">
				<Bar
					data={this.state.chartData}
					options={{
						title: {
							display: this.props.displayTitle,
							text: 'Average Trait Levels'
						},
						legend: {
							display: false
						}
					}}
				/>
			</div>
		);
	}
}

export default Chart;
