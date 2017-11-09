import React from 'react';

const CustomerRow = ({ customer }) => (
	<tr>
		<td className="name">
			{customer.title} {customer.first_name} {customer.last_name}
		</td>
		<td className="profession">{customer.profession}</td>
		<td className="children has-children">
			{customer.has_children ? (
				<span style={{ color: 'green', border: 0 }}>Yes</span>
			) : (
				<span style={{ color: 'red', border: 0 }}>No</span>
			)}
		</td>
		<td className="traits">
			{customer.dominant_traits[0].level + ' '}
			{customer.dominant_traits[0].primary_trait},
			{' ' + customer.dominant_traits[1].level + ' '}
			{customer.dominant_traits[1].secondary_trait}
		</td>
	</tr>
);

export default CustomerRow;
