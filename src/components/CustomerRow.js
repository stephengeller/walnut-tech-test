import React, { Component } from 'react';

const CustomerRow = ({ customer }) => (
	<tr>
		<td className="name">
			{customer.title} {customer.first_name} {customer.last_name}
		</td>
		<td className="profession">{customer.profession}</td>
		<td className="has-children">{customer.has_children ? 'Y' : 'N'}</td>
		<td className="traits">
			{customer.dominant_traits[0].level + ' '}
			{customer.dominant_traits[0].primary_trait},
			{' ' + customer.dominant_traits[1].level + ' '}
			{customer.dominant_traits[1].secondary_trait},
		</td>
	</tr>
);

export default CustomerRow;
