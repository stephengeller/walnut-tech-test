import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import getAverages from './prepareForGraph';

class Chart extends Component {
	constructor(props) {
		super(props);
		var traits = getAverages();
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
						label: 'Population',
						data: [
							traits.agreeableness,
							traits.extroversion,
							traits.conscientiousness,
							traits.openness,
							traits.neuroticism
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
