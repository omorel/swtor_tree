var swtorClass {
	class: {
		version: '0.1', 
		name: 'Trooper', 
		internal: 'trooper'
	},
	tree {	
		name: 'Focus', 
		internal: 'focus',
		skills: {
			'master-focus': {
				name: 'Master Focus', 
				internal: 'master-focus',
				rank: 0, 
				position: 0, 
				passive: true, 
				instant: false, 
				cooldown: false, 
				requisite: false,  
				focus: false, 
				range: false,
				levels: [
					{
						description: '', 
						next_rank: 'Rank 1'
					}, 
					{
						description: 'Rank 1', 
						next_rank: 'Rank 2'
					}, 
					{
						description: 'Rank 2', 
						next_rank: ''
					}										
				]
				
			}, 
			'insight': {
				name: 'Insight', 
				internal: 'insight',
				rank: 0, 
				position: 1, 
				passive: true, 
				instant: false, 
				cooldown: false, 
				requisite: false,  
				focus: false, 
				range: false,
				levels: [
					{
						description: '', 
						next_rank: 'Rank 1.'
					}, 
					{
						description: 'Rank 1', 
						next_rank: 'Rank 2'
					}, 
					{
						description: 'Rank 2', 
						next_rank: 'Rank 3'
					}, 
					{
						description: 'Rank 3', 
						next_rank: ''
					}															
				]
			},	
			'stagger': {
				name: 'Stagger', 
				internal: 'stagger', 
				rank: 0, 
				position: 2, 
				passive: true, 
				instant: false, 
				cooldown: false, 
				requisite: false, 
				focus: false, 
				range: false, 
				levels: [
					{
						description: '', 
						
					}
				]
					
				
			}		
		}
			
	}
}

var swtorAC = {
	class: {
		name: 'Sentinel', 
		allegiance: 'republic', 
		parent: 'trooper'
	},
	trees: {
		
	} 	
	
}; 