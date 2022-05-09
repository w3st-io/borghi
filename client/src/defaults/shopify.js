module.exports = {
	collectionsEditor: {
		columns: [
			{
				value: 'title',
				text: 'Product Title'
			},
			{
				value: 'type',
				text: 'Product Type'
			},
			{
				value: 'vendor',
				text: 'Product Vendor'
			},
			{
				value: 'tag',
				text: 'Product Tag'
			},
			{
				value: 'variant_price',
				text: 'Price'
			},
			{
				value: 'variant_compare_at_price',
				text: 'Compare at Price'
			},
			{
				value: 'variant_weight',
				text: 'Weight'
			},
			{
				value: 'variant_inventory',
				text: 'Inventory Stock'
			},
			{
				value: 'variant_title',
				text: 'Variant\'s Title'
			},
		],

		options: {
			tag: [
				{
					value: 'equals',
					text: 'is equal to'
				},
				{
					value: 'not_equals',
					text: 'is not equal to'
				},
				{
					value: 'greater_than',
					text: 'is greater than'
				},
				{
					value: 'less_than',
					text: 'is less than'
				},
				{
					value: 'starts_with',
					text: 'starts with'
				},
				{
					value: 'ends_with',
					text: 'ends with'
				},
				{
					value: 'contains',
					text: 'contains'
				},
				{
					value: 'not_contains',
					text: 'does not contain'
				},
				{
					value: 'is_not_set',
					text: 'is not empty'
				},
				{
					value: 'is_set',
					text: 'is empty'
				},
			]
		}
	},
}